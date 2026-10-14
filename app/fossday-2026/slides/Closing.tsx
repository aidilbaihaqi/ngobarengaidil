"use client";

import { motion } from "framer-motion";
import { C, EASE, Frame, Headline, In, Label, StageMark } from "../components/kit";
import { PromptLine } from "./Opening";

/* ── 22 · Observability ───────────────────────────────────────────────────
 * Illustrative series, labelled as such on the slide (brief §5, slide 22).
 */

const N = 60;
const SPIKE: Record<number, number> = { 42: 430, 43: 980, 44: 1640, 45: 1920, 46: 1700, 47: 1080, 48: 520 };
const SERIES = Array.from({ length: N }, (_, i) => SPIKE[i] ?? 215 + 28 * Math.sin(i * 0.7) + 18 * Math.sin(i * 1.9 + 1));

const CH = { x: 140, y: 40, w: 860, h: 520, max: 2000 };
const sx = (i: number) => CH.x + (i / (N - 1)) * CH.w;
const sy = (v: number) => CH.y + CH.h - (v / CH.max) * CH.h;
const THRESHOLD = 800;

export function S22Observe() {
  const line = SERIES.map((v, i) => `${i ? "L" : "M"}${sx(i).toFixed(1)},${sy(v).toFixed(1)}`).join(" ");
  const peak = 45;

  return (
    <Frame tone="navy">
      <StageMark n={6} />

      <In y={0} className="absolute left-0 top-[120px] h-[820px] w-[1100px] border-y border-r border-fd-cream/12 bg-fd-ink">
        <div className="flex h-[96px] items-center justify-between border-b border-fd-cream/10 pl-[120px] pr-10">
          <div>
            <div className="font-fd-mono text-[18px] text-fd-cream/85">avatar-service · POST /api/avatar</div>
            <div className="mt-1 font-fd-mono text-[15px] text-fd-cream/40">latency p95 · 60 menit terakhir</div>
          </div>
          <span className="border border-fd-cream/25 px-3 py-1 font-fd-mono text-[14px] uppercase tracking-[0.14em] text-fd-cream/50">ilustrasi</span>
        </div>

        <svg width={1100} height={640} className="absolute left-0 top-[120px]" aria-hidden>
          {[0, 500, 1000, 1500, 2000].map((v) => (
            <g key={v}>
              <line x1={CH.x} x2={CH.x + CH.w} y1={sy(v)} y2={sy(v)} stroke={C.cream} strokeOpacity={0.06} />
              <text x={CH.x - 20} y={sy(v) + 5} textAnchor="end" fill={C.cream} fillOpacity={0.3} fontSize={15} fontFamily="var(--font-jetbrains)">
                {v === 0 ? "0" : `${v} ms`}
              </text>
            </g>
          ))}
          <line x1={CH.x} x2={CH.x + CH.w} y1={sy(THRESHOLD)} y2={sy(THRESHOLD)} stroke={C.amber} strokeOpacity={0.7} strokeDasharray="6 6" />
          <text x={CH.x + CH.w} y={sy(THRESHOLD) - 12} textAnchor="end" fill={C.amber} fillOpacity={0.8} fontSize={15} fontFamily="var(--font-jetbrains)">
            ambang 800 ms
          </text>
          <motion.path
            d={line}
            fill="none"
            stroke={C.teal}
            strokeWidth={2}
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>
            <circle cx={sx(peak)} cy={sy(SERIES[peak])} r={7} fill={C.amber} />
            <line x1={sx(peak) + 14} x2={sx(peak) + 70} y1={sy(SERIES[peak])} y2={sy(SERIES[peak])} stroke={C.amber} strokeWidth={1.5} />
            <text x={sx(peak) + 82} y={sy(SERIES[peak]) + 7} fill={C.amber} fontSize={22} fontFamily="var(--font-plex-sans)">
              foto 12 MB masuk
            </text>
          </motion.g>
        </svg>
      </In>

      <In delay={0.3} className="absolute left-[1200px] top-[340px] w-[600px]">
        <Headline size={76}>Kalau tidak terukur, tidak bisa diperbaiki.</Headline>
      </In>
      <In delay={0.55} className="absolute left-[1200px] top-[720px] w-[560px] border-t border-fd-cream/20 pt-6 font-fd-mono text-[22px] leading-[1.6]">
        <span className="text-fd-cream/80">Logs · Metrics · Traces</span>
        <br />
        <span className="text-fd-teal">→ OpenTelemetry</span>
      </In>
    </Frame>
  );
}

/* ── 23 · Siklus perbaikan ────────────────────────────────────────────── */

const OX = 1200;
const OY = 620;
const OR = 270;
const opt = (deg: number) => [OX + OR * Math.cos((deg * Math.PI) / 180), OY + OR * Math.sin((deg * Math.PI) / 180)] as const;

const CYCLE = ["error", "alert", "issue otomatis", "agen mengusulkan PR", "review manusia", "deploy bertahap"];

export function S23Cycle() {
  return (
    <Frame tone="navy">
      <StageMark n={6} />
      <In className="absolute left-[120px] top-[110px] w-[560px]">
        <Headline>Software tidak pernah selesai.</Headline>
      </In>

      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        <defs>
          <marker id="a23" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" orient="auto">
            <path d="M0,1 L9,5 L0,9" fill="none" stroke={C.teal} strokeWidth="1.4" />
          </marker>
        </defs>
        {CYCLE.map((_, i) => {
          const a = -90 + i * 60;
          const [x1, y1] = opt(a + 8);
          const [x2, y2] = opt(a + 52);
          return (
            <motion.path
              key={i}
              d={`M${x1},${y1} A${OR},${OR} 0 0 1 ${x2},${y2}`}
              fill="none"
              stroke={C.teal}
              strokeWidth={1.5}
              markerEnd="url(#a23)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.3, ease: EASE }}
            />
          );
        })}
        {CYCLE.map((c, i) => {
          const [x, y] = opt(-90 + i * 60);
          const human = c === "review manusia";
          const s = human ? 28 : 16;
          return (
            <motion.rect
              key={c}
              x={x - s / 2}
              y={y - s / 2}
              width={s}
              height={s}
              fill={human ? C.amber : C.navy}
              stroke={human ? C.amber : C.cream}
              strokeOpacity={human ? 1 : 0.6}
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.3 }}
            />
          );
        })}
      </svg>

      {CYCLE.map((c, i) => {
        const a = -90 + i * 60;
        const [x, y] = opt(a);
        const human = c === "review manusia";
        const right = Math.cos((a * Math.PI) / 180) > 0.1;
        const left = Math.cos((a * Math.PI) / 180) < -0.1;
        const style: React.CSSProperties = right
          ? { left: x + 32, top: y - 22 }
          : left
            ? { right: 1920 - x + 32, top: y - (human ? 34 : 22), textAlign: "right" }
            : a < 0
              ? { left: x - 150, width: 300, bottom: 1080 - y + 26, textAlign: "center" }
              : { left: x - 200, width: 400, top: y + 26, textAlign: "center" };
        return (
          <In key={c} delay={0.35 + i * 0.3} className="absolute" style={style}>
            <span
              className={
                human
                  ? "font-fd-display text-[48px] font-medium tracking-[-0.02em] text-fd-amber"
                  : "font-fd-sans text-[30px] text-fd-cream/85"
              }
            >
              {c}
            </span>
          </In>
        );
      })}

      <In delay={2.2} className="absolute w-[240px] text-center font-fd-mono text-[18px] text-fd-cream/45" style={{ left: OX - 120, top: OY - 14 }}>
        ↻ kembali ke 01
      </In>
    </Frame>
  );
}

/* ── 24 · Skill ───────────────────────────────────────────────────────── */

const DOWN = ["menghafal sintaks", "boilerplate", "copy-paste tanpa paham"];
const UP = ["system thinking", "review kode", "keamanan", "fundamental", "menulis spesifikasi"];

export function S24Skills() {
  return (
    <Frame tone="navy">
      <In className="absolute left-[120px] top-[110px] w-[1400px]">
        <Headline size={88}>
          Yang turun nilainya,
          <br />
          yang <span className="text-fd-amber">naik</span> nilainya.
        </Headline>
      </In>

      <div className="absolute left-[120px] top-[400px] w-[620px]">
        <In delay={0.2}>
          <Label className="text-[16px] text-fd-cream/35">turun</Label>
        </In>
        <div className="mt-8 space-y-5">
          {DOWN.map((d, i) => (
            <In key={d} delay={0.3 + i * 0.1}>
              <span className="font-fd-sans text-[40px] font-light text-fd-cream/35 line-through decoration-fd-cream/35 decoration-1">{d}</span>
            </In>
          ))}
        </div>
      </div>

      <div className="absolute left-[820px] top-[400px] h-[520px] w-px bg-fd-cream/15" />

      <div className="absolute left-[900px] top-[400px] w-[900px]">
        <In delay={0.6}>
          <Label className="text-[16px] text-fd-amber">naik</Label>
        </In>
        <div className="mt-6">
          {UP.map((u, i) => (
            <In key={u} delay={0.7 + i * 0.12}>
              <div className="font-fd-display text-[64px] font-medium leading-[1.22] tracking-[-0.03em] text-fd-amber">{u}</div>
            </In>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ── 25 · Open source ─────────────────────────────────────────────────── */

const PROJECTS: [string, string][] = [
  ["Linux", "1991 · GPL-2.0"],
  ["Git", "2005 · GPL-2.0"],
  ["Docker", "2013 · Apache-2.0"],
  ["Kubernetes", "2014 · Apache-2.0"],
  ["Argo CD", "2018 · Apache-2.0"],
  ["OpenTelemetry", "2019 · Apache-2.0"],
  ["Sigstore", "2021 · Apache-2.0"],
];

export function S25Open() {
  return (
    <Frame tone="amber">
      <In className="absolute left-[120px] top-[110px] w-[1680px]">
        <Headline size={92}>
          Hampir semua yang kita bahas
          <br />
          hari ini adalah open source.
        </Headline>
      </In>

      <div className="absolute left-[120px] top-[400px] grid w-[1680px] grid-cols-4 border-l border-t border-fd-navy/25">
        {PROJECTS.map(([name, meta], i) => (
          <In key={name} delay={0.25 + i * 0.07} className="h-[176px] border-b border-r border-fd-navy/25 px-8 pt-7">
            <div className="font-fd-display text-[50px] font-medium leading-none tracking-[-0.035em]">{name}</div>
            <div className="mt-4 font-fd-mono text-[17px] text-fd-navy/60">{meta}</div>
          </In>
        ))}
        <In delay={0.8} className="flex h-[176px] items-end border-b border-r border-fd-navy/25 px-8 pb-7">
          <div className="font-fd-mono text-[20px] text-fd-navy/70">+ kontribusi pertamamu</div>
        </In>
      </div>

      <In delay={1} className="absolute left-[120px] top-[812px] flex items-baseline gap-8">
        <span className="font-fd-mono text-[20px] uppercase tracking-[0.14em] text-fd-navy/60">Mulai dari</span>
        <span className="font-fd-sans text-[34px] font-medium">docs · good first issue · terjemahan · laporan bug</span>
      </In>
    </Frame>
  );
}

/* ── 26 · Penutup ─────────────────────────────────────────────────────────
 * Same terminal, same place as slide 1. This time the prompt is advice.
 */

export function S26Close() {
  return (
    <Frame tone="ink">
      <div className="absolute left-[160px] right-[160px] top-[300px]">
        <PromptLine step={1} text="pahami dulu, baru deploy." />
      </div>

      <In delay={1.5} className="absolute left-[160px] top-[430px] w-[1500px]">
        <h2 className="font-fd-display text-[96px] font-medium leading-[1.04] tracking-[-0.04em]">
          AI bisa menulis kode.
          <br />
          <span className="text-fd-amber">Memahami sistemnya</span>
          <br />
          tetap tugas kita.
        </h2>
      </In>

      <In delay={2} className="absolute bottom-[96px] left-[160px] right-[160px] flex items-end justify-between border-t border-fd-cream/15 pt-8">
        <div className="flex gap-12 font-fd-mono text-[22px] text-fd-cream/65">
          <span>@albyhaqee</span>
          <span>in/aidilbaihaqi</span>
          <span>aidilbaihaqi.id</span>
        </div>
        <div className="font-fd-display text-[48px] font-medium tracking-[-0.02em] text-fd-amber">Tanya jawab</div>
      </In>
    </Frame>
  );
}
