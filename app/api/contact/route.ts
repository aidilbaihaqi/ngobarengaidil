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

/*
 * Email clients ignore most modern CSS, so the layout is nested tables with
 * inline styles. Colours come from the site's brand palette.
 */
function renderEmail(m: { name: string; email: string; subject: string; message: string }) {
  const initial = escapeHtml((m.name.match(/[\p{L}\p{N}]/u)?.[0] ?? "?").toUpperCase());
  const name = escapeHtml(m.name);
  const email = escapeHtml(m.email);
  const font = "'Segoe UI',Helvetica,Arial,sans-serif";

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#E6E9EC;font-family:${font};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(m.message.slice(0, 90))}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#E6E9EC;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:#0D1B2A;padding:28px 32px;border-bottom:4px solid #2BC48A;">
            <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#2BC48A;font-weight:600;">New message</div>
            <div style="font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;margin-top:8px;">${escapeHtml(m.subject)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 8px;">
            <table role="presentation" cellpadding="0" cellspacing="0"><tr>
              <td width="48" height="48" align="center" style="width:48px;height:48px;border-radius:24px;background:#1A73E8;color:#ffffff;font-size:20px;font-weight:700;">${initial}</td>
              <td style="padding-left:14px;">
                <div style="font-size:16px;font-weight:700;color:#0D1B2A;">${name}</div>
                <a href="mailto:${email}" style="font-size:14px;color:#1A73E8;text-decoration:none;">${email}</a>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 28px;">
            <div style="background:#F4F6F8;border-left:4px solid #1A73E8;border-radius:8px;padding:18px 20px;font-size:15px;line-height:1.65;color:#1b2a3a;white-space:pre-wrap;">${escapeHtml(m.message)}</div>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:0 32px 32px;">
            <a href="mailto:${email}?subject=${encodeURIComponent("Re: " + m.subject)}" style="display:inline-block;background:#1A73E8;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:999px;">Reply to ${name}</a>
          </td>
        </tr>
        <tr>
          <td style="background:#F4F6F8;padding:16px 32px;text-align:center;font-size:12px;color:#6b7a89;">
            Sent from the contact form at aidilbaihaqi.id
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

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
    html: renderEmail({ name, email, subject, message }),
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
