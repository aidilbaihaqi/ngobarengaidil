/**
 * Generates the social/OG card and the PWA icons from the brand palette and
 * the existing portrait. Run whenever either changes:
 *
 *   node scripts/generate-brand-assets.js
 *
 * Outputs (all under public/image-optimized/):
 *   og-card.png            1200x630 link-preview card
 *   icon-192.png           PWA icon, full-bleed
 *   icon-512.png           PWA icon, full-bleed
 *   icon-maskable-512.png  PWA icon with safe-zone padding for maskable use
 */
const sharp = require("sharp");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "image-optimized");
const PORTRAIT = path.join(OUT, "me.webp");

// Brand stops (tailwind.config.ts is the source of truth).
const NAVY = "#0d1b2a";
const BLUE = "#1a73e8";
const LAGOON = "#1fb1c1";
const GREEN = "#2bc48a";
const MIST = "#97a3af";

async function roundedPortrait(width, height, radius) {
  const img = await sharp(PORTRAIT)
    .resize(width, height, { fit: "cover", position: "top" })
    .png()
    .toBuffer();
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`
  );
  return sharp(img)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function generateOgCard() {
  const W = 1200;
  const H = 630;

  // Photo panel geometry (right side).
  const PW = 320;
  const PH = 400;
  const PX = W - PW - 90;
  const PY = (H - PH) / 2;

  const bg = Buffer.from(`
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowBlue" cx="0%" cy="0%" r="65%">
        <stop offset="0%" stop-color="${BLUE}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${BLUE}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glowGreen" cx="100%" cy="100%" r="65%">
        <stop offset="0%" stop-color="${GREEN}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="${GREEN}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${BLUE}"/>
        <stop offset="0.5" stop-color="${LAGOON}"/>
        <stop offset="1" stop-color="${GREEN}"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="${NAVY}"/>
    <rect width="${W}" height="${H}" fill="url(#glowBlue)"/>
    <rect width="${W}" height="${H}" fill="url(#glowGreen)"/>

    <!-- Photo frame: the gradient ring the site draws around the portrait. -->
    <rect x="${PX - 6}" y="${PY - 6}" width="${PW + 12}" height="${PH + 12}"
          rx="30" fill="url(#bar)"/>

    <!-- Kicker -->
    <text x="90" y="140" font-family="Arial, sans-serif" font-size="22"
          font-weight="bold" letter-spacing="6" fill="${MIST}">
      AIDILBAIHAQI.ID
    </text>

    <!-- Name -->
    <text x="86" y="260" font-family="Arial, sans-serif" font-size="92"
          font-weight="bold" fill="#ffffff">Aidil Baihaqi</text>

    <!-- Accent bar -->
    <rect x="90" y="300" width="230" height="10" rx="5" fill="url(#bar)"/>

    <!-- Role lines -->
    <text x="90" y="380" font-family="Arial, sans-serif" font-size="34"
          fill="#e6e9ec">Full Stack AI Engineer &amp; IT Mentor</text>
    <text x="90" y="432" font-family="Arial, sans-serif" font-size="27"
          fill="${MIST}">AI · Web Development · Business Digitalization</text>

    <!-- Footer line -->
    <circle cx="98" cy="530" r="7" fill="${GREEN}"/>
    <text x="118" y="539" font-family="Arial, sans-serif" font-size="24"
          fill="${MIST}">Available for new projects — Tanjungpinang, Indonesia</text>
  </svg>`);

  const portrait = await roundedPortrait(PW, PH, 26);

  await sharp(bg)
    .composite([{ input: portrait, left: PX, top: PY }])
    .png()
    .toFile(path.join(OUT, "og-card.png"));

  console.log("og-card.png written (1200x630)");
}

async function generateIcons() {
  // Full-bleed icons from the square headshot.
  for (const size of [192, 512]) {
    await sharp(path.join(OUT, "aidilbaihaqi.webp"))
      .resize(size, size, { fit: "cover" })
      .png()
      .toFile(path.join(OUT, `icon-${size}.png`));
    console.log(`icon-${size}.png written`);
  }

  // Maskable: the launcher may crop up to ~20% from each edge, so the face
  // sits inside a circle on a navy field with room to spare.
  const size = 512;
  const inner = Math.round(size * 0.66);
  const photo = await sharp(path.join(OUT, "aidilbaihaqi.webp"))
    .resize(inner, inner, { fit: "cover" })
    .png()
    .toBuffer();
  const circleMask = Buffer.from(
    `<svg width="${inner}" height="${inner}"><circle cx="${inner / 2}" cy="${inner / 2}" r="${inner / 2}" fill="#fff"/></svg>`
  );
  const roundPhoto = await sharp(photo)
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: NAVY },
  })
    .composite([
      { input: roundPhoto, left: (size - inner) / 2, top: (size - inner) / 2 },
    ])
    .png()
    .toFile(path.join(OUT, "icon-maskable-512.png"));
  console.log("icon-maskable-512.png written");
}

(async () => {
  await generateOgCard();
  await generateIcons();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
