import { NextResponse } from "next/server";
import { Resend } from "resend";

/*
 * Contact form delivery: verify the Cloudflare Turnstile token first, then
 * send through Resend. Every check runs here on the server — anything the
 * browser enforces (required fields, the widget itself) can be skipped by a
 * bot posting straight to this URL.
 */

const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  token?: unknown;
};

const text = (v: unknown) => (typeof v === "string" ? v.trim() : "");

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function verifyTurnstile(token: string, ip: string | null) {
  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY ?? "",
    response: token,
  });
  if (ip) body.set("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body }
  );
  const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
  if (!data.success) console.warn("Turnstile rejected:", data["error-codes"]);
  return data.success;
}

export async function POST(req: Request) {
  const { RESEND_API_KEY, TURNSTILE_SECRET_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } =
    process.env;
  if (!RESEND_API_KEY || !TURNSTILE_SECRET_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form is missing env vars — see .env.example");
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: a field hidden from people. Only a bot fills it in; answer as
  // if it worked so it has no reason to try again.
  if (text(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const subject = text(payload.subject);
  const message = text(payload.message);
  const token = text(payload.token);

  if (
    !name || !email || !subject || !message ||
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    subject.length > LIMITS.subject ||
    message.length > LIMITS.message ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json({ error: "Please check the form fields" }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ error: "Verification missing" }, { status: 400 });
  }

  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    null;

  if (!(await verifyTurnstile(token, ip))) {
    return NextResponse.json({ error: "Verification failed" }, { status: 403 });
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    // Hitting "Reply" in the inbox answers the visitor, not the sender address.
    replyTo: email,
    subject: `[Portfolio] ${subject}`.replace(/[\r\n]+/g, " "),
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr />
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    const detail =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message: string }).message
        : "Could not send";
    return NextResponse.json({ error: "Could not send", detail }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
