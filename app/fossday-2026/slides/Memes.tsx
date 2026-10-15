"use client";

/*
 * Jeda: six short breathers between the heavy stages. Every one is a
 * recreated artifact (chat, PR, terminal, block tower) rather than a pasted
 * image, so it stays in the deck's palette and carries no borrowed photo.
 * All of them are two clicks: step 0 is the setup, step 1 the punchline.
 */

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { C, EASE, Frame, In, Step } from "../components/kit";

/* Cream by default; ink where a cream content slide sits right beside it. */
function Jeda({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return <Frame tone={dark ? "ink" : "cream"}>{children}</Frame>;
}

/* ── Jeda 1 · "You're absolutely right!" ───────────────────────────────── */

export function M1Right({ step }: { step: number }) {
  return (
    <Jeda>
      <div className="absolute left-[120px] top-[230px] w-[1240px]">
        {/* The developer, right-aligned like any chat. */}
        <In delay={0.15} className="flex justify-end">
          <div className="max-w-[760px] rounded-[18px] rounded-br-[4px] bg-fd-navy px-8 py-5 font-fd-sans text-[36px] text-fd-cream">
            kok semua test tiba-tiba hijau?
          </div>
        </In>

        <Step show={step >= 1} className="mt-12">
          <div className="mb-3 font-fd-mono text-[18px] text-fd-navy/50">agent</div>
          <div className="font-fd-display text-[112px] font-medium leading-[0.95] tracking-[-0.045em]">
            You&apos;re absolutely right!
          </div>
          <div className="mt-6 max-w-[1000px] font-fd-sans text-[34px] font-light leading-[1.3] text-fd-navy/80">
            Saya menghapus 3 test yang gagal supaya suite-nya lulus.
          </div>
        </Step>
      </div>

      <Step show={step >= 1} className="absolute left-[1440px] top-[640px] w-[360px] rounded-[6px] bg-fd-ink px-6 py-5 font-fd-mono text-[20px] leading-[1.7]">
        <div className="text-fd-teal">✓ 20 passed</div>
        <div className="text-fd-cream/50">  0 failed</div>
        <div className="text-fd-brick">  3 deleted</div>
      </Step>
    </Jeda>
  );
}

/* ── Jeda 2 · Satu orang di bawah semuanya ──────────────────────────────────
 * After xkcd #2347 "Dependency" (Randall Munroe, CC BY-NC 2.5): redrawn as
 * blocks, credited on the slide. The whole upper tower rests on one sliver.
 */

type B = [x: number, y: number, w: number, h: number];
const DX = -280;
const TOWER: B[] = [
  // left footing
  [920, 880, 170, 80], [1100, 880, 190, 80],
  [930, 800, 120, 80], [1060, 800, 220, 80],
  [920, 720, 200, 80], [1130, 720, 150, 80],
  // right footing, all of it standing on the sliver
  [1330, 880, 250, 80],
  [1340, 780, 240, 70],
  [1350, 720, 210, 60],
  // upper tower, spanning both
  [940, 640, 560, 80],
  [980, 560, 200, 80], [1190, 560, 260, 80],
  [1010, 480, 420, 80],
  [1050, 400, 160, 80], [1220, 400, 170, 80],
  [1090, 330, 280, 70],
  [1120, 260, 110, 70], [1240, 260, 100, 70],
  [1150, 200, 160, 60],
];
const SLIVER: B = [1440, 850, 22, 30];

export function M2Tower({ step }: { step: number }) {
  return (
    <Jeda>
      <In delay={0.1} className="absolute left-[120px] top-[300px] w-[440px]">
        <div className="font-fd-display text-[60px] font-medium leading-[1.02] tracking-[-0.035em]">
          Semua infrastruktur digital modern
        </div>
      </In>

      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        <line x1={560} x2={1420} y1={960} y2={960} stroke={C.navy} strokeWidth={2} />
        {TOWER.map(([x, y, w, h], i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.04, duration: 0.45, ease: EASE }}
          >
            <rect x={x + DX} y={y} width={w} height={h} fill={C.cream} stroke={C.navy} strokeWidth={2} />
          </motion.g>
        ))}
        <motion.rect
          x={SLIVER[0] + DX}
          y={SLIVER[1]}
          width={SLIVER[2]}
          height={SLIVER[3]}
          stroke={C.navy}
          strokeWidth={2}
          initial={false}
          animate={{ fill: step >= 1 ? C.amber : C.cream }}
          transition={{ duration: 0.4 }}
        />
        {/* From the label down to the tower. */}
        <line x1={540} x2={700} y1={420} y2={470} stroke={C.navy} strokeWidth={1.5} />
        <motion.path
          d={`M${SLIVER[0] + DX + 30},${SLIVER[1] + 15} L1380,${SLIVER[1] + 15} L1380,740`}
          fill="none"
          stroke={C.navy}
          strokeWidth={1.5}
          initial={false}
          animate={{ pathLength: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </svg>

      <Step show={step >= 1} className="absolute left-[1400px] top-[600px] w-[400px]">
        <div className="font-fd-sans text-[30px] leading-[1.3]">
          Satu proyek yang di-maintain <span className="fd-mark">sendirian</span> oleh satu orang sejak 2003.
        </div>
      </Step>

      <div className="absolute bottom-[92px] left-[120px] font-fd-mono text-[16px] text-fd-navy/45">
        Terinspirasi xkcd #2347 &ldquo;Dependency&rdquo; · Randall Munroe · CC BY-NC 2.5
      </div>
    </Jeda>
  );
}

/* ── Jeda 3 · LGTM ────────────────────────────────────────────────────── */

export function M3Lgtm({ step }: { step: number }) {
  return (
    <Jeda>
      <In delay={0.15} className="absolute left-[120px] top-[300px] w-[1080px] overflow-hidden rounded-[8px] border-2 border-fd-navy bg-white/40">
        <div className="border-b border-fd-navy/20 px-8 py-6">
          <div className="flex items-center gap-3 font-fd-mono text-[18px] text-fd-navy/55">
            <span className="rounded-full bg-fd-teal px-3 py-[2px] text-fd-navy">open</span>
            pull request #219 · dibuka oleh agent
          </div>
          <div className="mt-4 font-fd-display text-[44px] font-medium leading-[1.1] tracking-[-0.02em]">
            refactor: auth, upload, billing, dan &ldquo;sedikit perbaikan lain&rdquo;
          </div>
        </div>
        <div className="flex gap-12 px-8 py-6 font-fd-mono text-[26px]">
          <span className="text-[#1D7A55]">+4.812</span>
          <span className="text-fd-brick">−12</span>
          <span className="text-fd-navy/55">87 file berubah</span>
        </div>

        <Step show={step >= 1} className="border-t border-fd-navy/20 bg-fd-navy px-8 py-6 text-fd-cream">
          <div className="flex items-baseline justify-between font-fd-mono text-[18px] text-fd-cream/55">
            <span>reviewer · approved</span>
            <span>3 detik setelah dibuka</span>
          </div>
          <div className="mt-2 font-fd-display text-[64px] font-medium tracking-[-0.03em] text-fd-amber">LGTM</div>
        </Step>
      </In>

      <Step show={step >= 1} className="absolute left-[1300px] top-[520px] w-[500px]">
        <div className="font-fd-display text-[150px] font-medium leading-[0.85] tracking-[-0.05em]">0,0006</div>
        <div className="mt-5 font-fd-sans text-[28px] text-fd-navy/70">detik per baris kode</div>
      </Step>
    </Jeda>
  );
}

/* ── Jeda 4 · Works on my machine ─────────────────────────────────────── */

export function M4Machine({ step }: { step: number }) {
  return (
    <Jeda>
      <In delay={0.15} className="absolute left-[120px] top-[260px] w-[1500px]">
        <div className="font-fd-mono text-[20px] text-fd-navy/50">developer</div>
        <div className="mt-3 font-fd-display text-[96px] font-medium leading-[1.0] tracking-[-0.04em]">
          &ldquo;Tapi di laptop saya jalan, kok.&rdquo;
        </div>
      </In>

      <Step show={step >= 1} className="absolute left-[120px] top-[540px] w-[1500px]">
        <div className="font-fd-mono text-[20px] text-fd-navy/50">tim ops</div>
        <div className="mt-3 font-fd-display text-[96px] font-medium leading-[1.0] tracking-[-0.04em]">
          &ldquo;Oke. Kita kirim <span className="fd-mark">laptop kamu</span> ke production.&rdquo;
        </div>
      </Step>

      <Step show={step >= 1} className="absolute left-[120px] top-[860px] font-fd-mono text-[24px] text-fd-navy/60">
        …dan begitulah container lahir.
      </Step>
    </Jeda>
  );
}

/* ── Jeda 5 · Deploy hari Jumat ─────────────────────────────────────────── */

export function M5Friday({ step }: { step: number }) {
  return (
    <Jeda dark>
      <In delay={0.1} className="absolute left-[120px] top-[230px]">
        <div className="font-fd-mono text-[26px] text-fd-cream/55">Jumat</div>
        <div className="font-fd-display text-[300px] font-light leading-[0.85] tracking-[-0.06em]">16:59</div>
      </In>

      <In delay={0.35} className="absolute left-[120px] top-[640px] w-[1000px] rounded-[6px] border border-fd-cream/15 bg-fd-navy px-8 py-6 font-fd-mono text-[30px] text-fd-cream">
        <span className="text-fd-cream/40">$ </span>git push origin main <span className="text-fd-brick">--force</span>
        <div className="mt-2 text-[22px] text-fd-cream/45">&ldquo;nanti juga aman, bang&rdquo;</div>
      </In>

      <Step show={step >= 1} className="absolute left-[1300px] top-[300px] w-[500px]">
        <div className="font-fd-mono text-[22px] text-fd-cream/55">Sabtu, dini hari</div>
        <div className="font-fd-display text-[150px] font-light leading-none tracking-[-0.05em] text-fd-amber">03:12</div>
        <div className="mt-8 rounded-[14px] bg-fd-cream px-6 py-5 text-fd-navy">
          <div className="flex justify-between font-fd-mono text-[15px] uppercase tracking-[0.12em] text-fd-navy/50">
            <span>alert · avatar-service</span>
            <span>now</span>
          </div>
          <div className="mt-2 font-fd-sans text-[26px] font-medium">production down</div>
          <div className="font-fd-mono text-[18px] text-fd-navy/60">(lagi)</div>
        </div>
      </Step>
    </Jeda>
  );
}

/* ── Jeda 6 · Limit tercapai ──────────────────────────────────────────── */

export function M6Limit({ step }: { step: number }) {
  const R = 120;
  const L = 2 * Math.PI * R;
  return (
    <Jeda>
      <In delay={0.15} className="absolute left-[120px] top-[250px] flex w-[1300px] items-center gap-16 rounded-[10px] bg-fd-navy px-14 py-12 text-fd-cream">
        <svg width={280} height={280} viewBox="0 0 280 280" aria-hidden className="shrink-0">
          <circle cx={140} cy={140} r={R} fill="none" stroke={C.cream} strokeOpacity={0.12} strokeWidth={14} />
          <motion.circle
            cx={140}
            cy={140}
            r={R}
            fill="none"
            stroke={C.brick}
            strokeWidth={14}
            strokeLinecap="round"
            transform="rotate(-90 140 140)"
            strokeDasharray={L}
            initial={{ strokeDashoffset: L * 0.6 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.6, delay: 0.4, ease: EASE }}
          />
          <text x={140} y={156} textAnchor="middle" fill={C.cream} fontFamily="var(--font-jetbrains)" fontSize={46}>
            100%
          </text>
        </svg>
        <div>
          <div className="font-fd-mono text-[18px] uppercase tracking-[0.14em] text-fd-cream/50">usage limit</div>
          <div className="mt-4 font-fd-display text-[64px] font-medium leading-[1.05] tracking-[-0.03em]">
            Batas penggunaan tercapai.
          </div>
          <div className="mt-4 font-fd-mono text-[30px] text-fd-amber">reset dalam 4 jam 59 menit</div>
        </div>
      </In>

      <Step show={step >= 1} className="absolute left-[120px] top-[760px]">
        <div className="font-fd-display text-[84px] font-medium tracking-[-0.04em]">
          &hellip;oke, saatnya <span className="fd-mark">baca dokumentasi</span>.
        </div>
      </Step>
    </Jeda>
  );
}
