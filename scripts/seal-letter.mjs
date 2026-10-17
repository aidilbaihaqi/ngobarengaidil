/*
 * Seals the /surat letter so neither the repo nor the shipped bundle carries it
 * in plain text. Reads app/surat/letter.private.json (gitignored), encrypts it
 * with AES-GCM under a PBKDF2 key from the password, writes app/surat/sealed.json.
 *
 *   node scripts/seal-letter.mjs "<password>"
 *
 * The page derives the same key from what the reader types, so the password
 * itself is never stored anywhere. Keep the iteration count in step with
 * app/surat/components/unseal.ts.
 */
import { readFile, writeFile } from "node:fs/promises";
import { webcrypto as crypto } from "node:crypto";

const ITERATIONS = 250_000;
const password = process.argv[2];
if (!password) {
  console.error('usage: node scripts/seal-letter.mjs "<password>"');
  process.exit(1);
}

// Same normalisation as the page: forgiving of case and stray spaces.
const normalise = (s) => s.trim().toLowerCase();

const plain = await readFile(new URL("../app/surat/letter.private.json", import.meta.url), "utf8");
JSON.parse(plain); // fail here, not in her browser, if the JSON is broken

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(normalise(password)), "PBKDF2", false, ["deriveKey"]);
const key = await crypto.subtle.deriveKey(
  { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
  base,
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt"],
);
const data = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(plain)));

const b64 = (u8) => Buffer.from(u8).toString("base64");
await writeFile(
  new URL("../app/surat/sealed.json", import.meta.url),
  JSON.stringify({ v: 1, iterations: ITERATIONS, salt: b64(salt), iv: b64(iv), data: b64(data) }, null, 2) + "\n",
);
console.log("sealed → app/surat/sealed.json");
