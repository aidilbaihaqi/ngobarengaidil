"use client";

import { motion } from "framer-motion";
import { C, EASE, Frame, Headline, In, Label, Source, StageMark, Step, Window } from "../components/kit";

/* ── 13 · Gunung es dependency ────────────────────────────────────────── */

const LAYERS: [string, string][] = [
  ["kode kita", "1 baris import"],
  ["dependency langsung", "12 paket"],
  ["dependency transitif", "347 paket"],
  ["library native", "libvips · glib · libjpeg"],
  ["base image", "debian-slim"],
  ["OS", "kernel Linux"],
];

export function S13Iceberg() {
  return (
    <Frame tone="navy">
      <StageMark n={3} />
      <In className="absolute left-[120px] top-[110px] w-[1200px]">
        <Headline>
          1 baris import.
          <br />
          Ratusan paket ikut.
        </Headline>
      </In>

      {/* Each layer wider than the one above it, all hanging from the same left edge. */}
      <div className="absolute left-[120px] top-[410px] w-[1020px]">
        {LAYERS.map(([name, meta], i) => (
          <motion.div
            key={name}
            className={`flex h-[84px] items-center justify-between border-b px-6 ${
              i === 0 ? "border-fd-amber bg-fd-amber text-fd-navy" : "border-fd-navy bg-fd-cream/[0.06]"
            }`}
            style={{ width: 400 + i * 124 }}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.14, duration: 0.6, ease: EASE }}
          >
            <span className="whitespace-nowrap font-fd-sans text-[26px]">{name}</span>
            <span className={`whitespace-nowrap font-fd-mono text-[18px] ${i === 0 ? "text-fd-navy/70" : "text-fd-cream/45"}`}>{meta}</span>
          </motion.div>
        ))}
      </div>

      <In delay={1.2} className="absolute left-[1240px] top-[470px]">
        <div className="font-fd-display text-[300px] font-medium leading-[0.8] tracking-[-0.06em] text-fd-amber">
          98<span className="text-[170px]">%</span>
        </div>
        <p className="mt-8 w-[540px] font-fd-sans text-[32px] font-light leading-[1.25]">codebase komersial berisi open source</p>
      </In>

      <Source>Sumber: Black Duck, Open Source Security and Risk Analysis (OSSRA) 2026</Source>
    </Frame>
  );
}

/* ── 14 · xz-utils ────────────────────────────────────────────────────────
 * steps 0–3 add one point each; the half second lands with the last.
 * The axis is to scale, Jan 2021 to Apr 2024.
 */

const T0 = 2021;
const T1 = 2024.33;
const tx = (t: number) => 120 + ((t - T0) / (T1 - T0)) * 1560;
const AY = 640;

const XZ = [
  { t: 2021.85, when: "2021", what: "Akun “Jia Tan” mulai berkontribusi" },
  { t: 2022.9, when: "2022–2023", what: "Maintainer yang kelelahan ditekan, hak maintainer didapat" },
  { t: 2024.12, when: "Feb 2024", what: "Backdoor masuk rilis 5.6.0" },
  { t: 2024.24, when: "29 Mar 2024", what: "Ditemukan" },
];

export function S14Xz({ step }: { step: number }) {
  return (
    <Frame tone="navy">
      <StageMark n={3} />
      <In className="absolute left-[120px] top-[110px] w-[1200px]">
        <Label className="mb-6 text-fd-brick">CVE-2024-3094 · xz-utils</Label>
        <Headline>
          Backdoor yang ditanam
          <br />
          selama dua tahun.
        </Headline>
      </In>

      <svg className="absolute inset-0" width={1920} height={1080} aria-hidden>
        <line x1={120} x2={1680} y1={AY} y2={AY} stroke={C.cream} strokeOpacity={0.3} strokeWidth={1.5} />
        {[2022, 2023, 2024].map((y) => (
          <g key={y}>
            <line x1={tx(y)} x2={tx(y)} y1={AY - 6} y2={AY + 6} stroke={C.cream} strokeOpacity={0.3} />
            <text x={tx(y)} y={AY - 18} fill={C.cream} fillOpacity={0.25} fontSize={16} fontFamily="var(--font-jetbrains)" textAnchor="middle">
              {y}
            </text>
          </g>
        ))}
        {/* The span of patient work, in brick, growing with each click. */}
        <motion.line
          x1={tx(XZ[0].t)}
          y1={AY}
          y2={AY}
          stroke={C.brick}
          strokeWidth={3}
          initial={false}
          animate={{ x2: tx(XZ[Math.min(step, 3)].t) }}
          transition={{ duration: 0.7, ease: EASE }}
        />
        {XZ.map((p, i) => (
          <motion.rect
            key={i}
            x={tx(p.t) - 8}
            y={AY - 8}
            width={16}
            height={16}
            fill={i === 3 ? C.brick : C.navy}
            stroke={C.brick}
            strokeWidth={1.5}
            initial={false}
            animate={{ opacity: step >= i ? 1 : 0 }}
          />
        ))}
      </svg>

      {/* Feb and Mar 2024 sit 55px apart, so the release hangs above the axis. */}
      {XZ.slice(0, 3).map((p, i) => (
        <Step
          key={i}
          show={step >= i}
          className="absolute w-[300px]"
          style={
            i === 2
              ? { right: 1920 - tx(p.t) - 8, bottom: 1080 - AY + 44, textAlign: "right" }
              : { left: tx(p.t) - 8, top: AY + 36 }
          }
        >
          <div className="font-fd-mono text-[20px] text-fd-brick">{p.when}</div>
          <div className="mt-2 font-fd-sans text-[24px] leading-[1.3] text-fd-cream/80">{p.what}</div>
        </Step>
      ))}

      {/* The last point gets the number: half a second of SSH latency. */}
      <Step show={step >= 3} className="absolute right-[120px] text-right" style={{ top: AY + 36 }}>
        <div className="font-fd-mono text-[20px] text-fd-brick">29 Mar 2024 · ditemukan</div>
        <div className="mt-2 font-fd-display text-[150px] font-medium leading-[0.9] tracking-[-0.05em] text-fd-brick">
          0,5 <span className="text-[72px] tracking-[-0.02em]">detik</span>
        </div>
        <div className="mt-2 font-fd-sans text-[22px] text-fd-cream/55">login SSH lebih lambat dari biasanya</div>
      </Step>
    </Frame>
  );
}

/* ── 15 · Slopsquatting ───────────────────────────────────────────────── */

export function S15Slop() {
  return (
    <Frame tone="ink">
      <StageMark n={3} tone="ink" />
      <In className="absolute left-[120px] top-[110px] w-[1300px]">
        <Headline size={88}>
          AI mengarang nama paket.
          <br />
          Penyerang <span className="text-fd-brick">mendaftarkannya</span>.
        </Headline>
      </In>

      <In delay={0.25} className="absolute left-[120px] top-[400px] w-[1080px]">
        <Window title="bash" tone="navy" bodyClassName="px-8 py-7 text-[24px] leading-[1.7]">
          <div>
            <span className="text-fd-cream/40">$ </span>pip install <span className="text-fd-brick underline decoration-fd-brick/60 underline-offset-[6px]">fastimage-resizer-pro</span>
          </div>
          <div className="text-fd-cream/45">Collecting fastimage-resizer-pro</div>
          <div className="text-fd-cream/45">  Downloading fastimage_resizer_pro-1.0.3-py3-none-any.whl (8.2 kB)</div>
          <div className="text-fd-cream/80">Successfully installed fastimage-resizer-pro-1.0.3</div>
        </Window>
        <div className="mt-6 flex items-start gap-4 pl-2">
          <span className="mt-[14px] h-px w-[40px] shrink-0 bg-fd-brick" />
          <p className="font-fd-sans text-[26px] italic text-fd-brick">
            paket ini tidak pernah ada… sampai penyerang membuatnya
          </p>
        </div>
      </In>

      <div className="absolute left-[1320px] top-[400px] w-[480px]">
        <In delay={0.6} className="border-t border-fd-cream/20 pt-5">
          <div className="font-fd-display text-[132px] font-medium leading-[0.9] tracking-[-0.05em]">5,2%</div>
          <div className="mt-2 font-fd-sans text-[24px] text-fd-cream/60">saran paket fiktif · model komersial</div>
        </In>
        <In delay={0.8} className="mt-12 border-t border-fd-cream/20 pt-5">
          <div className="font-fd-display text-[132px] font-medium leading-[0.9] tracking-[-0.05em] text-fd-brick">21,7%</div>
          <div className="mt-2 font-fd-sans text-[24px] text-fd-cream/60">saran paket fiktif · model open source</div>
        </In>
      </div>

      <Source>Studi package hallucination via DevOps.com & TechRepublic · nama paket di atas ilustrasi</Source>
    </Frame>
  );
}

/* ── 16 · Percaya, tapi verifikasi ────────────────────────────────────────
 * steps 0–4: the unguarded path, then one gate per click.
 */

const GATES: [string, string][] = [
  ["Lockfile", "versi terkunci"],
  ["SBOM", "daftar isi"],
  ["Signature", "Sigstore · SLSA"],
  ["Scan di CI", "CVE sebelum merge"],
];

export function S16Gates({ step }: { step: number }) {
  return (
    <Frame tone="navy">
      <StageMark n={3} />
      <In className="absolute left-[120px] top-[110px]">
        <Headline>Percaya, tapi verifikasi.</Headline>
      </In>

      {/* Left: no controls. A package walks straight in. */}
      <In delay={0.2} className="absolute left-[120px] top-[340px] h-[420px] w-[440px]">
        <Label className="text-[16px] text-fd-cream/40">tanpa kontrol</Label>
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 font-fd-mono text-[22px] text-fd-cream/50">
          <span className="border border-dashed border-fd-cream/40 px-4 py-3">paket?</span>
          <span className="h-px flex-1 bg-fd-cream/30" />
          <span className="border border-fd-cream/40 px-4 py-3">prod</span>
        </div>
      </In>

      <div className="absolute left-[620px] top-[330px] h-[440px] w-px bg-fd-cream/15" />

      {/* Right: four gates, each a post the package has to pass. */}
      <div className="absolute left-[700px] top-[340px] w-[1100px]">
        <Label className="text-[16px] text-fd-teal">dengan kontrol</Label>
        <div className="mt-10 grid grid-cols-4">
          {GATES.map(([g, sub], i) => (
            <Step key={g} show={step > i} className="flex h-[330px] flex-col justify-between border-l-2 border-fd-teal pl-6 pr-4">
              <div className="font-fd-mono text-[20px] text-fd-teal">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="font-fd-display text-[46px] font-medium leading-[1.05] tracking-[-0.02em]">{g}</div>
                <div className="mt-3 font-fd-mono text-[18px] text-fd-cream/50">{sub}</div>
              </div>
            </Step>
          ))}
        </div>
      </div>

      <Step show={step >= 4} className="absolute bottom-[110px] left-[700px] right-[120px] flex items-baseline gap-8 border-t border-fd-cream/20 pt-6">
        <span className="font-fd-mono text-[24px] text-fd-amber">11 Sep 2026</span>
        <span className="font-fd-sans text-[28px] text-fd-cream/85">EU CRA: lapor kerentanan aktif dalam 24 jam</span>
      </Step>
    </Frame>
  );
}
