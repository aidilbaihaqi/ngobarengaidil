"use client";

import { motion } from "framer-motion";
import { C, EASE, Frame, Headline, In, Label, StageMark, Step, Window } from "../components/kit";

/* ── 09 · Anatomi agen ──────────────────────────────────────────────────── */

const CX = 1180;
const CY = 610;
const R = 280;
const pt = (deg: number, r = R) => [CX + r * Math.cos((deg * Math.PI) / 180), CY + r * Math.sin((deg * Math.PI) / 180)] as const;
const arc = (from: number, to: number) => {
  const [x1, y1] = pt(from);
  const [x2, y2] = pt(to);
  return `M${x1},${y1} A${R},${R} 0 0 1 ${x2},${y2}`;
};

const LOOP = [
  { name: "Plan", deg: -90 },
  { name: "Act", deg: 30 },
  { name: "Observe", deg: 150 },
];

export function S09Anatomy() {
  return (
    <Frame tone="navy">
      <StageMark n={2} />
      <In className="absolute left-[120px] top-[110px] w-[620px]">
        <Headline>LLM, konteks, tools, dan satu loop.</Headline>
      </In>

      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        <defs>
          <marker id="a9" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" orient="auto">
            <path d="M0,1 L9,5 L0,9" fill="none" stroke={C.teal} strokeWidth="1.4" />
          </marker>
        </defs>

        <circle cx={CX} cy={CY} r={R} fill="none" stroke={C.cream} strokeOpacity={0.06} strokeWidth={1} />
        {LOOP.map((n, i) => {
          const next = LOOP[(i + 1) % LOOP.length];
          const to = next.deg > n.deg ? next.deg : next.deg + 360;
          return (
            <motion.path
              key={n.name}
              d={arc(n.deg + 9, to - 9)}
              fill="none"
              stroke={C.teal}
              strokeWidth={1.5}
              markerEnd="url(#a9)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.5, ease: EASE }}
            />
          );
        })}
        {LOOP.map((n) => {
          const [x, y] = pt(n.deg);
          return <rect key={n.name} x={x - 9} y={y - 9} width={18} height={18} fill={C.navy} stroke={C.amber} strokeWidth={1.5} />;
        })}

        {/* Inputs. */}
        <motion.line x1={620} x2={CX - R - 22} y1={CY} y2={CY} stroke={C.cream} strokeOpacity={0.5} strokeWidth={1.5} markerEnd="url(#a9)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.5 }} />
        <motion.line x1={1640} x2={CX + R + 22} y1={CY} y2={CY} stroke={C.cream} strokeOpacity={0.5} strokeWidth={1.5} markerEnd="url(#a9)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.0, duration: 0.5 }} />
      </svg>

      {/* Node labels sit outside the ring. */}
      <In delay={0.4} className="absolute font-fd-display text-[40px] font-medium tracking-[-0.02em]" style={{ left: CX + 26, top: CY - R - 66 }}>
        Plan
      </In>
      <In delay={0.9} className="absolute font-fd-display text-[40px] font-medium tracking-[-0.02em]" style={{ left: pt(30)[0] + 26, top: pt(30)[1] + 4 }}>
        Act
      </In>
      <In delay={1.4} className="absolute text-right font-fd-display text-[40px] font-medium tracking-[-0.02em]" style={{ right: 1920 - pt(150)[0] + 26, top: pt(150)[1] + 4 }}>
        Observe
      </In>

      <In delay={0.2} className="absolute w-[300px] text-center" style={{ left: CX - 150, top: CY - 58 }}>
        <div className="font-fd-display text-[84px] font-medium leading-none tracking-[-0.04em] text-fd-amber">LLM</div>
        <div className="mt-3 font-fd-mono text-[17px] text-fd-cream/50">menalar · menulis kode</div>
      </In>

      <In delay={1.8} className="absolute left-[120px]" style={{ top: CY - 60 }}>
        <div className="font-fd-display text-[44px] font-medium tracking-[-0.02em]">Konteks</div>
        <div className="mt-2 font-fd-mono text-[18px] text-fd-cream/55">repo · docs · AGENTS.md</div>
      </In>
      <In delay={2.0} className="absolute left-[1660px]" style={{ top: CY - 60 }}>
        <div className="font-fd-display text-[44px] font-medium tracking-[-0.02em]">Tools</div>
        <div className="mt-2 font-fd-mono text-[18px] text-fd-cream/55">shell · test · git</div>
      </In>
    </Frame>
  );
}

/* ── 10 · Satu sesi agen, direkam ─────────────────────────────────────────
 * steps 0–3: the log alone, then one annotation per click.
 */

type L = { t: string; k?: "verb" | "fail" | "pass" | "dim" | "think"; tail?: string };
const LOG: L[] = [
  { t: "read    src/routes/index.ts", k: "verb" },
  { t: "read    src/lib/storage.ts", k: "verb" },
  { t: "read    AGENTS.md", k: "verb" },
  { t: "write   src/routes/avatar.ts", k: "verb", tail: "+84" },
  { t: "write   src/lib/image.ts", k: "verb", tail: "+61" },
  { t: "write   test/avatar.test.ts", k: "verb", tail: "+48" },
  { t: "run     make test", k: "verb" },
  { t: "  ✗ avatar › hapus EXIF & GPS", k: "fail" },
  { t: "    expected  exif.gps  undefined", k: "dim" },
  { t: "    received  { lat: 1.1301, lon: 104.0529 }", k: "dim" },
  { t: "  22 passed · 1 failed", k: "fail" },
  { t: "think   .withMetadata() ikut menyalin GPS", k: "think" },
  { t: "edit    src/lib/image.ts   − .withMetadata()  + .rotate()", k: "verb" },
  { t: "run     make test", k: "verb" },
  { t: "  ✓ 23 passed", k: "pass" },
  { t: "commit  feat(avatar): upload + resize 3 ukuran", k: "verb" },
];

const TOP = 312;
const ROW = 36;
const BODY = TOP + 48 + 22;
const rowY = (i: number) => BODY + i * ROW + ROW / 2;

const NOTES = [
  { at: 1, rows: [0, 2], text: "membaca repo dulu" },
  { at: 8, rows: [7, 10], text: "test gagal" },
  { at: 14, rows: [12, 14], text: "diperbaiki, test hijau" },
];

export function S10Session({ step }: { step: number }) {
  const lit = (i: number) => NOTES.some((n, k) => step > k && i >= n.rows[0] && i <= n.rows[1]);

  return (
    <Frame tone="ink">
      <StageMark n={2} tone="ink" />
      <In className="absolute left-[120px] top-[100px]">
        <Headline size={80}>
          Di balik <span className="font-fd-mono text-[68px] font-normal tracking-[-0.02em] text-fd-teal">✓ deployed</span>:
          <br />
          satu loop yang berulang.
        </Headline>
      </In>

      <In delay={0.2} className="absolute left-[120px] w-[1160px]" style={{ top: TOP }}>
        <Window title="~/avatar-service · sesi agen" tone="navy" bodyClassName="py-[22px]">
          {LOG.map((l, i) => (
            <div
              key={i}
              className="relative flex h-[36px] items-center whitespace-pre pl-8 pr-8 text-[20px] transition-colors duration-500"
              style={{ background: lit(i) ? "rgb(242 196 109 / 0.08)" : "transparent" }}
            >
              <span
                className="absolute left-0 top-0 h-full w-[3px] transition-opacity duration-500"
                style={{ background: C.amber, opacity: lit(i) ? 1 : 0 }}
              />
              {l.k === "verb" || l.k === "think" ? <span className="text-fd-cream/30">agent ▸ </span> : <span>{"        "}</span>}
              <span
                className={
                  l.k === "fail"
                    ? "text-fd-brick"
                    : l.k === "pass"
                      ? "text-fd-teal"
                      : l.k === "dim"
                        ? "text-fd-cream/40"
                        : l.k === "think"
                          ? "italic text-fd-cream/55"
                          : "text-fd-cream/85"
                }
              >
                {l.t}
              </span>
              {l.tail && <span className="ml-auto text-fd-teal/70">{l.tail}</span>}
            </div>
          ))}
        </Window>
      </In>

      {/* Leaders out of the window, then the note. */}
      <svg className="pointer-events-none absolute inset-0" width={1920} height={1080} aria-hidden>
        {NOTES.map((n, k) => (
          <motion.line
            key={k}
            x1={1290}
            x2={1376}
            y1={rowY(n.at)}
            y2={rowY(n.at)}
            stroke={C.amber}
            strokeWidth={1.5}
            initial={false}
            animate={{ pathLength: step > k ? 1 : 0, opacity: step > k ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </svg>
      {NOTES.map((n, k) => (
        <Step key={k} show={step > k} className="absolute left-[1400px] flex items-center gap-5" style={{ top: rowY(n.at) - 24 }}>
          <span className="grid h-[48px] w-[48px] place-items-center border border-fd-amber font-fd-mono text-[22px] text-fd-amber">{k + 1}</span>
          <span className="font-fd-sans text-[30px] text-fd-amber">{n.text}</span>
        </Step>
      ))}
    </Frame>
  );
}

/* ── 11 · Context engineering ─────────────────────────────────────────── */

const AGENTS_MD: { t: string; h?: 1 | 2; hot?: boolean }[] = [
  { t: "# AGENTS.md", h: 1 },
  { t: "" },
  { t: "## Setup", h: 2 },
  { t: "- Pakai pnpm, bukan npm", hot: true },
  { t: "- Node 22, server dev: `pnpm dev`" },
  { t: "" },
  { t: "## Aturan", h: 2 },
  { t: "- Upload wajib lewat validateImage()", hot: true },
  { t: "- Jangan simpan file ke disk lokal" },
  { t: "- Secret hanya dari env, jangan hardcode" },
  { t: "" },
  { t: "## Sebelum commit", h: 2 },
  { t: "- Jalankan make test sebelum commit", hot: true },
  { t: "- Satu PR, satu perubahan" },
];

export function S11Context() {
  return (
    <Frame tone="navy">
      <StageMark n={2} />

      <In className="absolute left-0 top-[120px] h-[820px] w-[1100px]" y={0}>
        <div className="flex h-full flex-col border-y border-r border-fd-cream/12 bg-fd-ink">
          <div className="flex h-[52px] shrink-0 items-end border-b border-fd-cream/10 pl-[120px] font-fd-mono text-[16px]">
            <span className="border-x border-t border-fd-cream/12 border-b-fd-ink bg-fd-ink px-5 py-3 text-fd-cream/80">AGENTS.md</span>
            <span className="px-5 py-3 text-fd-cream/30">avatar.ts</span>
            <span className="px-5 py-3 text-fd-cream/30">image.ts</span>
          </div>
          <div className="flex-1 py-8 font-fd-mono text-[24px]">
            {AGENTS_MD.map((l, i) => (
              <div
                key={i}
                className="relative grid h-[44px] grid-cols-[120px_1fr] items-center"
                style={{ background: l.hot ? "rgb(242 196 109 / 0.10)" : undefined }}
              >
                {l.hot && <span className="absolute left-0 top-0 h-full w-[4px] bg-fd-amber" />}
                <span className="pr-8 text-right text-[18px] text-fd-cream/20">{i + 1}</span>
                <span
                  className={
                    l.h === 1 ? "font-semibold text-fd-cream" : l.h === 2 ? "text-fd-teal" : l.hot ? "text-fd-amber" : "text-fd-cream/60"
                  }
                >
                  {l.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </In>

      <In delay={0.3} className="absolute left-[1200px] top-[340px] w-[600px]">
        <Headline size={76}>Agen hanya sebaik konteks yang ia terima.</Headline>
      </In>
      <In delay={0.55} className="absolute left-[1200px] top-[720px] w-[560px] border-t border-fd-cream/20 pt-6">
        <p className="font-fd-sans text-[28px] font-light leading-[1.35] text-fd-cream/80">
          File instruksi + MCP = onboarding untuk rekan kerja baru.
        </p>
      </In>
    </Frame>
  );
}

/* ── 12 · Comprehension debt ──────────────────────────────────────────── */

export function S12Debt() {
  return (
    <Frame tone="cream">
      <StageMark n={2} tone="cream" />
      <In className="absolute left-[120px] top-[230px]">
        <Label className="text-fd-navy/55">comprehension debt</Label>
      </In>
      <In delay={0.1} className="absolute left-[112px] top-[300px] w-[1180px]">
        <h2 className="font-fd-display text-[108px] font-medium leading-[1.02] tracking-[-0.045em]">
          Kode yang tidak
          <br />
          kamu pahami adalah
          <br />
          kode yang tidak
          <br />
          kamu <span className="fd-mark">miliki</span>.
        </h2>
      </In>

      {/* The bill arrives at 03:12. */}
      <In delay={0.7} className="absolute left-[1380px] top-[560px] w-[420px]">
        <div className="font-fd-display text-[128px] font-light leading-none tracking-[-0.04em]">03:12</div>
        <div className="mt-2 font-fd-mono text-[18px] text-fd-navy/55">Sabtu, dini hari</div>
        <div className="mt-8 rounded-[14px] bg-fd-navy px-6 py-5 text-fd-cream">
          <div className="flex justify-between font-fd-mono text-[15px] uppercase tracking-[0.12em] text-fd-cream/50">
            <span>alert · avatar-service</span>
            <span>now</span>
          </div>
          <div className="mt-2 font-fd-sans text-[26px] font-medium">production down</div>
          <div className="font-fd-mono text-[18px] text-fd-cream/65">5xx 38% · p95 9,4 s</div>
        </div>
      </In>
    </Frame>
  );
}
