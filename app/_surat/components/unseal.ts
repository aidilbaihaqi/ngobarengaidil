import sealed from "../sealed.json";

export type Letter = {
  opening: string[];
  letter: string[];
  closing: string;
  sign: string;
};

const bytes = (b64: string) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

/**
 * Opens sealed.json with what the reader typed. A wrong password fails the
 * AES-GCM tag check and resolves to null; there is nothing to compare against.
 * Mirrors scripts/seal-letter.mjs.
 */
export async function unseal(password: string): Promise<Letter | null> {
  try {
    const base = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password.trim().toLowerCase()),
      "PBKDF2",
      false,
      ["deriveKey"],
    );
    const key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: bytes(sealed.salt), iterations: sealed.iterations, hash: "SHA-256" },
      base,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"],
    );
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(sealed.iv) }, key, bytes(sealed.data));
    return JSON.parse(new TextDecoder().decode(plain)) as Letter;
  } catch {
    return null;
  }
}
