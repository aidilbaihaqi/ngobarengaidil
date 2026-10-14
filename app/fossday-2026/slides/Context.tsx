"use client";

import { motion } from "framer-motion";
import { C, EASE, Frame, Headline, In, Label, StageMark, STAGES, Window } from "../components/kit";

/* ── 05 · Lima tahun, tiga lompatan ───────────────────────────────────────
 * The axis is to scale: 336px per year. The empty stretch between 2022 and
 * 2025 is the point, so the cards alternate above and below to keep it clear.
 */

const AXIS_Y = 640;
const yearX = (y: number) => 120 + (y - 2021) * 336;

type Era = { year: number; name: string; does: string; above: boolean; right?: boolean; art: React.ReactNode };

const ERAS: Era[] = [
  {
    year: 2021,
    name: "Autocomplete",
    does: "melengkapi baris",
    above: true,
    art: (
      <>
        <span className="text-fd-cream/80">const url = </span>
        <span className="text-fd-cream/30">await upload(file)</span>
      </>
    ),
  },
  {
    year: 2022,
    name: "Chat",
    does: "menjawab pertanyaan",
    above: false,
    art: (
      <>
        <div className="text-fd-cream/45">? cara resize gambar di node</div>
        <div className="text-fd-cream/80">pakai sharp().resize(256)</div>
      </>
    ),
  },
  {
    year: 2025,
    name: "Agen",
    does: "membaca repo, menjalankan test, membuka PR",
    above: true,
    art: (
      <>
        <div className="text-fd-cream/80">read 214 · test ✓</div>
        <div className="text-fd-teal">PR #42 opened</div>
      </>
    ),
  },
  {
    year: 2026,
    name: "Rutinitas",
    does: "9 dari 10 developer",
    above: false,
    right: true,
    art: (
      <div className="flex gap-[6px] py-[6px]">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={i < 9 ? "h-[16px] w-[16px] bg-fd-amber" : "h-[16px] w-[16px] border border-fd-cream/35"} />
        ))}
      </div>
    ),
  },
];

export function S05Timeline() {
  return (
    <Frame tone="navy">
      <In className="absolute left-[120px] top-[110px]">
        <Headline>Lima tahun, tiga lompatan.</Headline>
      </In>

      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        <motion.line
          x1={120}
          x2={1800}
          y1={AXIS_Y}
          y2={AXIS_Y}
          stroke={C.cream}
          strokeOpacity={0.35}
          strokeWidth={1.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
        />
        {[2023, 2024].map((y) => (
          <g key={y}>
            <line x1={yearX(y)} x2={yearX(y)} y1={AXIS_Y - 6} y2={AXIS_Y + 6} stroke={C.cream} strokeOpacity={0.3} />
            <text x={yearX(y)} y={AXIS_Y + 40} fill={C.cream} fillOpacity={0.25} fontFamily="var(--font-jetbrains)" fontSize={18} textAnchor="middle">
              {y}
            </text>
          </g>
        ))}
        {ERAS.map((e, i) => (
          <motion.g key={e.year} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.22 }}>
            <line
              x1={yearX(e.year)}
              x2={yearX(e.year)}
              y1={e.above ? AXIS_Y - 28 : AXIS_Y}
              y2={e.above ? AXIS_Y : AXIS_Y + 28}
              stroke={C.cream}
              strokeOpacity={0.35}
            />
            <rect x={yearX(e.year) - 7} y={AXIS_Y - 7} width={14} height={14} fill={i === 3 ? C.amber : C.navy} stroke={C.amber} strokeWidth={1.5} />
          </motion.g>
        ))}
      </svg>

      {ERAS.map((e, i) => (
        <In
          key={e.year}
          delay={0.45 + i * 0.22}
          className="absolute w-[320px]"
          style={{
            left: e.right ? yearX(e.year) - 320 : yearX(e.year),
            ...(e.above ? { bottom: 1080 - (AXIS_Y - 40) } : { top: AXIS_Y + 40 }),
            textAlign: e.right ? "right" : "left",
          }}
        >
          <div className="font-fd-mono text-[22px] text-fd-amber">{e.year}</div>
          <div className="mt-1 font-fd-display text-[46px] font-medium leading-[1.05] tracking-[-0.03em]">{e.name}</div>
          <div className="mt-1 font-fd-sans text-[22px] leading-[1.3] text-fd-cream/60">{e.does}</div>
          <div
            className="mt-4 inline-block whitespace-nowrap rounded-[4px] border border-fd-cream/10 bg-fd-ink px-4 py-3 text-left font-fd-mono text-[17px] leading-[1.5]"
          >
            {e.art}
          </div>
        </In>
      ))}
    </Frame>
  );
}

/* ── 06 · Satu fitur, enam tahap ──────────────────────────────────────── */

const PATH_Y = 600;
const nodeX = (i: number) => 440 + i * 216;

export function S06Map() {
  return (
    <Frame tone="navy">
      <In className="absolute left-[120px] top-[110px]">
        <Headline>Satu fitur, enam tahap.</Headline>
      </In>

      {/* Start: the button the user actually presses. */}
      <In delay={0.2} className="absolute left-[120px] top-[552px] flex items-center gap-4 rounded-[6px] border border-fd-cream/25 bg-fd-ink py-3 pl-3 pr-6">
        <span className="grid h-[48px] w-[48px] place-items-center rounded-full bg-fd-cream/15 font-fd-mono text-[18px] text-fd-cream/70">AB</span>
        <span className="font-fd-sans text-[22px]">Ganti foto profil</span>
      </In>

      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        <motion.line
          x1={392}
          x2={1640}
          y1={PATH_Y}
          y2={PATH_Y}
          stroke={C.teal}
          strokeWidth={1.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
        />
        {STAGES.map((_, i) => (
          <motion.rect
            key={i}
            x={nodeX(i) - 8}
            y={PATH_Y - 8}
            width={16}
            height={16}
            fill={C.navy}
            stroke={C.teal}
            strokeWidth={1.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.18 }}
          />
        ))}
        {/* One request, travelling the whole way. */}
        <motion.rect
          y={PATH_Y - 5}
          width={10}
          height={10}
          fill={C.amber}
          initial={{ x: 392, opacity: 0 }}
          animate={{ x: [392, 1630], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.2, delay: 1.6, ease: "easeInOut", times: [0, 0.05, 0.95, 1] }}
        />

        {/* End: production, drawn as a three-unit rack. */}
        <g transform="translate(1660 510)" stroke={C.cream} strokeOpacity={0.5} strokeWidth={1.5} fill="none">
          {[0, 62, 124].map((y) => (
            <g key={y}>
              <rect x={0} y={y} width={140} height={52} rx={3} />
              <line x1={18} x2={70} y1={y + 26} y2={y + 26} />
              <circle cx={118} cy={y + 26} r={4} fill={C.teal} stroke="none" />
            </g>
          ))}
        </g>
      </svg>

      {STAGES.map((s, i) => (
        <In key={s} delay={0.5 + i * 0.18} className="absolute" style={{ left: nodeX(i) - 8, top: PATH_Y + 40 }}>
          <div className="font-fd-mono text-[22px] text-fd-amber">{String(i + 1).padStart(2, "0")}</div>
          <div className="mt-2 w-[196px] font-fd-display text-[30px] font-medium leading-[1.1] tracking-[-0.02em]">{s}</div>
        </In>
      ))}

      <In delay={1.4} className="absolute left-[1660px] top-[720px] font-fd-mono text-[17px] text-fd-cream/45">
        production
      </In>
    </Frame>
  );
}

/* ── 07 · Satu kalimat jadi 12 keputusan ──────────────────────────────── */

const SPEC: [string, boolean][] = [
  ["Endpoint POST /api/avatar", false],
  ["Hanya pemilik akun yang boleh mengganti", false],
  ["Ukuran maksimal 5 MB, selebihnya 413", true],
  ["Format JPEG / PNG / WebP, selain itu 415", true],
  ["Validasi lewat magic bytes, bukan ekstensi", false],
  ["Hapus EXIF & GPS sebelum disimpan", true],
  ["Resize ke 512 · 256 · 128 px", false],
  ["Output WebP, kualitas 82", false],
  ["Simpan di object storage, bukan disk", false],
  ["Nama file dari hash konten", false],
  ["Foto lama dihapus setelah 24 jam", false],
  ["Rate limit 10 upload per jam", false],
];

export function S07Spec() {
  return (
    <Frame tone="navy">
      <StageMark n={1} />
      <In className="absolute left-[120px] top-[110px] w-[640px]">
        <Headline>
          Satu kalimat jadi <span className="text-fd-amber">12</span> keputusan.
        </Headline>
      </In>

      <In delay={0.25} className="absolute left-[120px] top-[560px] w-[600px]">
        <Label className="mb-4 text-[16px] text-fd-cream/45">ditulis manusia</Label>
        <div className="rounded-[6px] border border-fd-cream/20 bg-fd-ink px-7 py-6">
          <div className="flex items-center gap-3 font-fd-mono text-[16px] text-fd-cream/45">
            <span className="h-[10px] w-[10px] rounded-full bg-fd-teal" />
            issue #128 · open
          </div>
          <div className="mt-3 font-fd-sans text-[30px] leading-[1.25]">User mau bisa ganti foto profil</div>
        </div>
      </In>

      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        <defs>
          <marker id="a7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" orient="auto">
            <path d="M0,1 L9,5 L0,9" fill="none" stroke={C.amber} strokeWidth="1.4" />
          </marker>
        </defs>
        <motion.line
          x1={736}
          x2={884}
          y1={690}
          y2={690}
          stroke={C.amber}
          strokeWidth={1.5}
          markerEnd="url(#a7)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
      </svg>

      <In delay={0.7} className="absolute left-[900px] top-[300px] w-[900px]">
        <Window title={<>spec/avatar-upload.md <span className="ml-auto text-fd-amber/80">draft AI · 8 detik</span></>} tone="ink">
          <div className="px-7 py-5">
            {SPEC.map(([line, hot], i) => (
              <div
                key={i}
                className={`grid grid-cols-[52px_1fr] py-[7px] text-[21px] ${hot ? "-mx-3 bg-fd-amber/15 px-3 text-fd-amber" : "text-fd-cream/70"}`}
              >
                <span className={hot ? "text-fd-amber/70" : "text-fd-cream/25"}>{String(i + 1).padStart(2, "0")}</span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </Window>
      </In>
    </Frame>
  );
}

/* ── 08 · Keputusan tetap di manusia ──────────────────────────────────── */

export function S08Decide() {
  return (
    <Frame tone="cream">
      <StageMark n={1} tone="cream" />
      <In className="absolute left-[120px] top-[290px] w-[1300px]">
        <h2 className="font-fd-display text-[124px] font-medium leading-[1.02] tracking-[-0.045em]">
          AI menulis <em className="font-fd-sans font-light italic">bagaimana</em>.
          <br />
          Kita memutuskan
          <br />
          <span className="fd-mark">apa</span> dan <span className="fd-mark">kenapa</span>.
        </h2>
      </In>

      {/* A phone photo and the metadata it quietly carries. */}
      <In delay={0.5} className="absolute left-[1500px] top-[380px]">
        <svg width={300} height={560} viewBox="0 0 300 560" aria-hidden>
          <rect x={1} y={1} width={298} height={558} rx={40} fill="none" stroke={C.navy} strokeWidth={2} />
          <rect x={18} y={18} width={264} height={524} rx={26} fill={C.navy} />
          {/* The photo: a horizon, nothing more. */}
          <rect x={18} y={18} width={264} height={300} rx={26} fill="#1E2654" />
          <rect x={18} y={292} width={264} height={26} fill="#1E2654" />
          <line x1={18} x2={282} y1={226} y2={226} stroke={C.cream} strokeOpacity={0.25} />
          <g fontFamily="var(--font-jetbrains)" fontSize={15} fill={C.cream}>
            <text x={40} y={360} fillOpacity={0.45}>EXIF</text>
            <text x={40} y={392} fillOpacity={0.8}>Make      Pixel 8</text>
            <text x={40} y={418} fillOpacity={0.8}>DateTime  07:41</text>
            <text x={40} y={456} fill={C.amber}>GPSLat    1.1301 N</text>
            <text x={40} y={482} fill={C.amber}>GPSLon  104.0529 E</text>
          </g>
          {/* Pin, bottom-right of the photo. */}
          <g transform="translate(236 252)">
            <path d="M0,-30 C-14,-30 -22,-20 -22,-9 C-22,6 0,24 0,24 C0,24 22,6 22,-9 C22,-20 14,-30 0,-30 Z" fill={C.amber} />
            <circle cx={0} cy={-9} r={7} fill={C.navy} />
          </g>
        </svg>
      </In>
    </Frame>
  );
}
