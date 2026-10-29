"use client";

import Image from "next/image";
import { AnimatePresence, motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Cursor, EASE, Frame, In, Label, Source, STAGES, Typed, C } from "../components/kit";

/* ── 01 · Satu prompt ─────────────────────────────────────────────────────
 * step 0: an empty prompt, cursor only. step 1: the prompt types itself.
 * step 2: the agent's run streams out and lands on one teal line.
 */

export const PROMPT = "buatkan fitur upload foto profil, resize ke 3 ukuran, lalu deploy";

const RUN: [string, string, string?][] = [
  ["read", "repo · 214 file"],
  ["plan", "6 task"],
  ["edit", "src/routes/avatar.ts", "+84"],
  ["edit", "src/lib/image.ts", "+61"],
  ["add", "sharp@0.33.5"],
  ["test", "make test", "1 failed"],
  ["fix", "hapus EXIF sebelum resize"],
  ["test", "make test", "23 passed"],
  ["build", "avatar:v2 → registry"],
  ["roll", "3/3 pod ready"],
];

export function PromptLine({ step, text, size = 40 }: { step: number; text: string; size?: number }) {
  return (
    <div className="font-fd-mono tracking-[-0.01em]" style={{ fontSize: size, lineHeight: 1.3 }}>
      <span className="text-fd-amber">&gt; </span>
      <Typed text={text} active={step >= 1} instant={step >= 2} speed={34} />
      {step < 2 && <Cursor />}
    </div>
  );
}

export function S01Prompt({ step }: { step: number }) {
  return (
    <Frame tone="ink">
      <div className="absolute left-[160px] right-[160px] top-[300px]">
        <PromptLine step={step} text={PROMPT} />

        {step >= 2 && (
          <div className="mt-14 font-fd-mono text-[24px] leading-[1.75]">
            {RUN.map(([verb, what, tail], i) => (
              <motion.div
                key={i}
                className="grid grid-cols-[110px_1fr] text-fd-cream/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.12 + i * 0.2 }}
              >
                <span className="text-fd-cream/30">{verb}</span>
                <span>
                  {what}
                  {tail && (
                    <span className={tail === "1 failed" ? "ml-6 text-fd-brick" : "ml-6 text-fd-cream/30"}>{tail}</span>
                  )}
                </span>
              </motion.div>
            ))}
            <motion.div
              className="mt-6 text-[40px] text-fd-teal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 + RUN.length * 0.2 }}
            >
              ✓ deployed to production
              <span className="ml-8 text-[24px] text-fd-cream/35">4m 37s</span>
              <Cursor className="ml-6 text-fd-cream" />
            </motion.div>
          </div>
        )}
      </div>
    </Frame>
  );
}

/* ── 02 · 90% ─────────────────────────────────────────────────────────── */

export function S02Number() {
  return (
    <Frame tone="navy">
      <In className="absolute left-[104px] top-[96px]">
        <div className="font-fd-display text-[440px] font-medium leading-[0.86] tracking-[-0.06em] text-fd-amber">
          90<span className="text-[260px] tracking-[-0.02em]">%</span>
        </div>
      </In>
      <In delay={0.25} className="absolute left-[128px] top-[520px] w-[620px]">
        <p className="font-fd-sans text-[40px] font-light leading-[1.2]">
          developer profesional pakai AI agent tiap minggu
        </p>
      </In>

      <In delay={0.6} className="absolute left-[1080px] top-[592px] flex items-end gap-10">
        <div className="font-fd-display text-[200px] font-medium leading-[0.8] tracking-[-0.05em] text-fd-teal">
          68<span className="text-[120px]">%</span>
        </div>
        <p className="pb-2 font-fd-sans text-[36px] font-light leading-[1.15] text-fd-cream/80">
          setiap
          <br />
          hari
        </p>
      </In>

      {/* Ten cells, nine lit: the same number, counted. */}
      <In delay={0.9} className="absolute left-[1084px] top-[470px] flex gap-[10px]">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={i < 9 ? "h-[28px] w-[28px] bg-fd-amber" : "h-[28px] w-[28px] border border-fd-cream/30"}
          />
        ))}
      </In>

      <Source>Sumber: JetBrains Research, AI Coding Agents: Adoption Trends, 2026</Source>
    </Frame>
  );
}

/* ── 03 · Judul ───────────────────────────────────────────────────────────
 * The talk's working title leads. On the right, one feature circles the six
 * stages forever: a dial of 60 ticks, an amber packet with a short trail, and
 * the stage it is passing named in the centre. Along the bottom, a ticker of
 * the same feature's log scrolls without end.
 */

const LX = 1500;
const LY = 470;
const LR = 230;
const LOOP_MS = 12000;
const lp = (deg: number, r = LR) =>
  [LX + r * Math.cos((deg * Math.PI) / 180), LY + r * Math.sin((deg * Math.PI) / 180)] as const;

function LifecycleLoop() {
  const angle = useMotionValue(0);
  const [stage, setStage] = useState(0);

  useAnimationFrame((t) => {
    const a = ((t % LOOP_MS) / LOOP_MS) * 360;
    angle.set(a);
    // A node is current from 30° before it to 30° after.
    const s = Math.floor(((a + 30) % 360) / 60);
    setStage((cur) => (cur === s ? cur : s));
  });

  const packet = useTransform(angle, (a) => {
    const [x, y] = lp(a - 90);
    return `translate(${x}px, ${y}px)`;
  });
  const trail = useTransform(angle, (a) => {
    const [x1, y1] = lp(a - 90 - 42);
    const [x2, y2] = lp(a - 90);
    return `M${x1},${y1} A${LR},${LR} 0 0 1 ${x2},${y2}`;
  });

  return (
    <>
      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        {Array.from({ length: 60 }, (_, i) => {
          const [x1, y1] = lp(i * 6, LR + 26);
          const [x2, y2] = lp(i * 6, LR + (i % 10 === 0 ? 42 : 34));
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.cream} strokeOpacity={i % 10 === 0 ? 0.35 : 0.14} />
          );
        })}
        <circle cx={LX} cy={LY} r={LR} fill="none" stroke={C.teal} strokeOpacity={0.25} strokeWidth={1.5} />
        <motion.path d={trail} fill="none" stroke={C.amber} strokeWidth={3} strokeLinecap="round" />
        {STAGES.map((_, i) => {
          const [x, y] = lp(-90 + i * 60);
          const on = i === stage;
          const left = x < LX - 5;
          return (
            <g key={i}>
              <rect
                x={x - 9}
                y={y - 9}
                width={18}
                height={18}
                fill={on ? C.amber : C.navy}
                stroke={on ? C.amber : C.teal}
                strokeWidth={1.5}
                style={{ transition: "fill 300ms, stroke 300ms" }}
              />
              <text
                x={left ? x - 22 : x + 22}
                y={y + 6}
                textAnchor={left ? "end" : "start"}
                fill={on ? C.amber : C.teal}
                fillOpacity={on ? 1 : 0.5}
                fontFamily="var(--font-jetbrains)"
                fontSize={17}
                style={{ transition: "fill 300ms, fill-opacity 300ms" }}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
        <motion.circle cx={0} cy={0} r={8} fill={C.amber} style={{ transform: packet }} />
      </svg>

      <div className="absolute w-[300px] text-center" style={{ left: LX - 150, top: LY - 62 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="font-fd-mono text-[64px] font-extralight leading-none text-fd-amber">
              {String(stage + 1).padStart(2, "0")}
            </div>
            <div className="mt-3 font-fd-display text-[32px] font-medium tracking-[-0.02em]">{STAGES[stage]}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

const TICKER = [
  "issue #128 opened",
  "spec drafted · 8s",
  "agent ▸ read 214 files",
  "write src/routes/avatar.ts +84",
  "add sharp@0.33.5",
  "lockfile ✓  sbom ✓  sig ✓",
  "test 23 passed",
  "review: approved",
  "build avatar:v2 · 180 MB",
  "rollout 3/3 ready",
  "p95 212 ms",
  "alert → issue #131",
];

function Ticker() {
  const row = (copy: number) => (
    <span className="flex shrink-0 items-center" aria-hidden={copy === 1}>
      {TICKER.map((t) => (
        <span key={t} className="flex items-center">
          <span className="whitespace-pre px-8">{t}</span>
          <span className="h-[6px] w-[6px] bg-fd-amber/60" />
        </span>
      ))}
    </span>
  );
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-[72px] overflow-hidden border-t border-fd-cream/12 bg-fd-ink/60 font-fd-mono text-[19px] text-fd-cream/55"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div className="fd-marquee flex h-full w-max items-center">
        {row(0)}
        {row(1)}
      </div>
    </div>
  );
}

export function S03Title() {
  return (
    <Frame tone="navy" grid>
      <LifecycleLoop />

      <In className="absolute left-[120px] top-[120px]">
        <Label className="text-fd-cream/55">FOSS Day · Batam Linux User Group</Label>
      </In>

      <In delay={0.1} className="absolute left-[112px] top-[240px] w-[1100px]">
        <h1 className="font-fd-display text-[128px] font-medium leading-[0.92] tracking-[-0.045em]">
          Life of a Feature
          <br />
          in the Age of
          <br />
          <span className="text-fd-amber">AI Agents</span>
        </h1>
      </In>

      <In delay={0.35} className="absolute left-[120px] top-[676px] flex items-baseline gap-6">
        <span className="font-fd-mono text-[26px] text-fd-cream/80">The Magic Behind Software</span>
        <span className="font-fd-sans text-[28px] font-light italic text-fd-cream/50">When Code Becomes a Creature</span>
      </In>

      <In delay={0.6} className="absolute left-[120px] top-[820px] flex items-center gap-5 font-fd-mono text-[20px] text-fd-cream/60">
        <span className="h-px w-[48px] bg-fd-cream/40" />
        Aidil Baihaqi
      </In>

      <Ticker />
    </Frame>
  );
}

/* ── 04 · Profil ──────────────────────────────────────────────────────── */

const CREDS: [string, string][] = [
  ["Kini", "Full-stack AI Engineer"],
  ["Kerja", "Backend & DevOps Engineer · UmbiTeams"],
  ["Komunitas", "Founder · Lyceum Indonesia & Tim WAT"],
  ["Riset", "Bioinformatika, Blockchain & Deep Learning"],
];

export function S04Profile() {
  return (
    <Frame tone="navy">
      <div className="absolute inset-y-0 left-0 w-[1000px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Image
            src="/image/aidil.jpg"
            alt="Aidil Baihaqi"
            fill
            priority
            sizes="1000px"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
        </motion.div>
      </div>

      <div className="absolute left-[1080px] right-[120px] top-[150px]">
        <In>
          <h2 className="font-fd-display text-[124px] font-medium leading-[0.9] tracking-[-0.045em]">
            Aidil
            <br />
            Baihaqi
          </h2>
        </In>

        <div className="mt-20 border-t border-fd-cream/15">
          {CREDS.map(([k, v], i) => (
            <In key={k} delay={0.25 + i * 0.1}>
              <div className="grid grid-cols-[150px_1fr] items-baseline gap-4 border-b border-fd-cream/15 py-[18px]">
                <span className="font-fd-mono text-[16px] uppercase tracking-[0.14em] text-fd-cream/40">{k}</span>
                <span className={i === 0 ? "font-fd-sans text-[30px] text-fd-amber" : "font-fd-sans text-[26px] leading-[1.25] text-fd-cream/90"}>
                  {v}
                </span>
              </div>
            </In>
          ))}
        </div>
      </div>

      <In delay={0.8} className="absolute bottom-[96px] left-[1080px] font-fd-mono text-[18px] text-fd-cream/45">
        Teknik Informatika UMRAH · @albyhaqee
      </In>
    </Frame>
  );
}
