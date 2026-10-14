"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { C, EASE, Frame, Headline, In, Label, StageMark, Step, Window } from "../components/kit";

/* ── 17 · Review & test ───────────────────────────────────────────────── */

const TESTS: [string, string?][] = [
  ['it("tolak file > 5 MB")', "413"],
  ['it("tolak .php berkedok .jpg")', "415"],
  ['it("hapus EXIF & GPS")'],
  ['it("buat thumbnail 128px")'],
];

const REVIEW = ["Agen", "AI reviewer", "Manusia", "Merge"];

export function S17Tests() {
  return (
    <Frame tone="ink">
      <StageMark n={4} tone="ink" />
      <In className="absolute left-[120px] top-[110px] w-[1300px]">
        <Headline size={88}>
          Agen menulis kode.
          <br />
          Test menentukan <span className="text-fd-amber">kebenaran</span>.
        </Headline>
      </In>

      <In delay={0.25} className="absolute left-[120px] top-[400px] font-fd-mono text-[36px] leading-[1.6]">
        <div className="text-fd-cream/45">
          describe(<span className="text-fd-teal">&quot;POST /api/avatar&quot;</span>, () =&gt; {"{"}
        </div>
        {TESTS.map(([t, code], i) => (
          <motion.div
            key={t}
            className="grid grid-cols-[760px_auto] whitespace-pre pl-[1.2em]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease: EASE }}
          >
            <span>
              <span className="text-fd-cream/45">it(</span>
              <span className="text-fd-cream">{t.slice(3, -1)}</span>
              <span className="text-fd-cream/45">)</span>
            </span>
            {code && <span className="text-fd-cream/35">{"// "}{code}</span>}
          </motion.div>
        ))}
        <div className="text-fd-cream/45">{"})"}</div>
      </In>

      <In delay={1.1} className="absolute left-[120px] top-[860px] flex items-center gap-5">
        <span className="h-px w-[40px] bg-fd-cream/40" />
        <span className="font-fd-sans text-[28px] font-light text-fd-cream/80">PR kecil = review yang benar-benar dibaca.</span>
      </In>

      {/* The review path, narrow, down the right edge. */}
      <div className="absolute left-[1560px] top-[400px] w-[240px]">
        {REVIEW.map((r, i) => (
          <In key={r} delay={0.7 + i * 0.15}>
            <div
              className={`border px-5 py-4 font-fd-display text-[28px] font-medium tracking-[-0.01em] ${
                r === "Manusia" ? "border-fd-amber bg-fd-amber text-fd-navy" : "border-fd-cream/20 text-fd-cream/75"
              }`}
            >
              {r}
            </div>
            {i < REVIEW.length - 1 && <div className="ml-6 h-[34px] w-px bg-fd-cream/30" />}
          </In>
        ))}
      </div>
    </Frame>
  );
}

/* ── 18 · Setelah git push + demo ─────────────────────────────────────── */

const PIPE = ["push", "webhook", "runner", "test/scan", "build", "registry"];

export function S18Pipeline() {
  const [missing, setMissing] = useState(false);

  return (
    <Frame tone="navy">
      <StageMark n={5} />
      <In className="absolute left-[120px] top-[110px]">
        <Headline size={80}>
          Apa yang terjadi setelah <span className="font-fd-mono text-[70px] font-normal tracking-[-0.03em] text-fd-teal">git push</span>?
        </Headline>
      </In>

      <In delay={0.2} className="absolute left-[120px] top-[290px] flex items-center font-fd-mono text-[19px]">
        {PIPE.map((p, i) => (
          <span key={p} className="flex items-center">
            <span className={i === 0 ? "text-fd-amber" : "text-fd-cream/70"}>{p}</span>
            {i < PIPE.length - 1 && <span className="mx-5 h-px w-[56px] bg-fd-teal/60" />}
          </span>
        ))}
      </In>

      <In delay={0.35} className="absolute left-[120px] top-[372px] h-[620px] w-[1102px] overflow-hidden rounded-[6px] border border-fd-cream/15 bg-fd-ink">
        {!missing ? (
          <video
            src="/fossday-2026/demo.mp4"
            controls
            preload="metadata"
            className="h-full w-full object-contain"
            onError={() => setMissing(true)}
          />
        ) : (
          <div className="fd-grid flex h-full w-full flex-col items-start justify-end p-10">
            <svg width={64} height={64} viewBox="0 0 64 64" aria-hidden>
              <circle cx={32} cy={32} r={31} fill="none" stroke={C.cream} strokeOpacity={0.4} />
              <path d="M26 20 L46 32 L26 44 Z" fill={C.cream} fillOpacity={0.7} />
            </svg>
            <div className="mt-6 font-fd-mono text-[18px] text-fd-cream/45">demo.mp4 · 60–90 detik · putar dari file offline</div>
          </div>
        )}
      </In>

      <In delay={0.5} className="absolute left-[1300px] top-[372px] w-[500px]">
        <Label className="text-[16px] text-fd-cream/40">dalam demo</Label>
        <div className="mt-6 border-t border-fd-cream/15">
          {["push ke main", "pipeline hijau", "image masuk registry", "rollout ke cluster"].map((s, i) => (
            <div key={s} className="grid grid-cols-[56px_1fr] border-b border-fd-cream/15 py-4">
              <span className="font-fd-mono text-[18px] text-fd-amber">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-fd-sans text-[26px] text-fd-cream/85">{s}</span>
            </div>
          ))}
        </div>
      </In>
    </Frame>
  );
}

/* ── 19 · Container image ─────────────────────────────────────────────── */

const IMAGE_LAYERS: [string, string][] = [
  ["kode aplikasi", "dist/"],
  ["dependency", "node_modules"],
  ["runtime", "node 22"],
  ["base distroless", "tanpa shell"],
];

/*
 * Ganti dengan angka dari build sendiri sebelum tampil (brief §7). Bar kedua
 * digambar proporsional terhadap yang pertama.
 */
const SIZE_BEFORE = { label: "1,1 GB", mb: 1100 };
const SIZE_AFTER = { label: "180 MB", mb: 180 };

const DOCKERFILE: { t: string; hot?: boolean; dim?: boolean }[] = [
  { t: "FROM node:22 AS build", hot: true },
  { t: "WORKDIR /app", dim: true },
  { t: "COPY package.json pnpm-lock.yaml ./", dim: true },
  { t: "RUN pnpm install --frozen-lockfile", dim: true },
  { t: "COPY . .", dim: true },
  { t: "RUN pnpm build && pnpm prune --prod", dim: true },
  { t: "" },
  { t: "FROM gcr.io/distroless/nodejs22-debian12" },
  { t: "COPY --from=build /app/dist ./dist", hot: true },
  { t: "COPY --from=build /app/node_modules ./node_modules", hot: true },
  { t: 'CMD ["dist/server.js"]' },
];

export function S19Image() {
  return (
    <Frame tone="navy">
      <StageMark n={5} />
      <In className="absolute left-[120px] top-[110px] w-[1300px]">
        <Headline size={88}>
          Yang dikirim ke production
          <br />
          cuma <span className="text-fd-amber">hasilnya</span>.
        </Headline>
      </In>

      <div className="absolute left-[120px] top-[372px] w-[520px]">
        {IMAGE_LAYERS.map(([name, meta], i) => (
          <motion.div
            key={name}
            className={`flex h-[82px] items-center justify-between border-b-[3px] border-fd-navy px-6 ${
              i === 0 ? "bg-fd-amber text-fd-navy" : "bg-fd-cream/[0.07]"
            }`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 - i * 0.18, duration: 0.5, ease: EASE }}
          >
            <span className="font-fd-sans text-[26px]">{name}</span>
            <span className={`font-fd-mono text-[17px] ${i === 0 ? "text-fd-navy/65" : "text-fd-cream/45"}`}>{meta}</span>
          </motion.div>
        ))}

        <In delay={1.2} className="mt-12 space-y-5 font-fd-mono text-[18px]">
          {[
            ["build stage", SIZE_BEFORE, "bg-fd-cream/25", "text-fd-cream/50"],
            ["image akhir", SIZE_AFTER, "bg-fd-teal", "text-fd-teal"],
          ].map(([name, s, bar, txt]) => {
            const size = s as typeof SIZE_BEFORE;
            return (
              <div key={name as string}>
                <div className="flex justify-between">
                  <span className="text-fd-cream/50">{name as string}</span>
                  <span className={txt as string}>{size.label}</span>
                </div>
                <div className="mt-2 h-[10px] w-full bg-fd-cream/[0.06]">
                  <motion.div
                    className={`h-full ${bar as string}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(size.mb / SIZE_BEFORE.mb) * 100}%` }}
                    transition={{ delay: 1.4, duration: 0.9, ease: EASE }}
                  />
                </div>
              </div>
            );
          })}
        </In>
      </div>

      <In delay={0.3} className="absolute left-[760px] top-[372px] w-[1040px]">
        <Window title="Dockerfile" bodyClassName="py-5 text-[23px]">
          {DOCKERFILE.map((l, i) => (
            <div key={i} className="relative flex h-[42px] items-center pl-8">
              {l.hot && <span className="absolute inset-y-[3px] left-0 w-[3px] bg-fd-amber" />}
              <span className={l.hot ? "text-fd-amber" : l.dim ? "text-fd-cream/40" : "text-fd-cream/85"}>{l.t}</span>
            </div>
          ))}
        </Window>
      </In>
    </Frame>
  );
}

/* ── 20 · Kubernetes ──────────────────────────────────────────────────────
 * steps 0–3: k pods have rolled to v2.
 */

const YAML: { t: string; hot?: boolean }[] = [
  { t: "apiVersion: apps/v1" },
  { t: "kind: Deployment" },
  { t: "metadata:" },
  { t: "  name: avatar" },
  { t: "spec:" },
  { t: "  replicas: 3", hot: true },
  { t: "  template:" },
  { t: "    spec:" },
  { t: "      containers:" },
  { t: "      - name: avatar" },
  { t: "        image: avatar:v2", hot: true },
  { t: "        readinessProbe:" },
  { t: "          httpGet: { path: /healthz }" },
];

export function S20Kube({ step }: { step: number }) {
  return (
    <Frame tone="navy">
      <StageMark n={5} />
      <In className="absolute left-[120px] top-[110px] w-[1300px]">
        <Headline size={88}>
          Kita menulis keinginan.
          <br />
          Cluster <span className="text-fd-teal">mewujudkannya</span>.
        </Headline>
      </In>

      <In delay={0.2} className="absolute left-[120px] top-[372px] w-[740px]">
        <Window title={<>deployment.yaml <span className="ml-auto text-fd-amber/80">desired state</span></>} bodyClassName="py-5 text-[22px]">
          {YAML.map((l, i) => (
            <div key={i} className="relative flex h-[40px] items-center whitespace-pre pl-8">
              {l.hot && <span className="absolute inset-y-[3px] left-0 w-[3px] bg-fd-amber" />}
              <span className={l.hot ? "text-fd-amber" : "text-fd-cream/65"}>{l.t}</span>
            </div>
          ))}
        </Window>
      </In>

      <div className="absolute left-[980px] top-[372px] w-[820px]">
        <Label className="text-[16px] text-fd-teal">actual state</Label>
        <div className="mt-8 grid grid-cols-3 gap-[30px]">
          {[0, 1, 2].map((i) => {
            const v2 = step > i;
            return (
              <div
                key={i}
                className="relative h-[250px] border px-6 py-5 transition-colors duration-500"
                style={{ borderColor: v2 ? C.teal : "rgb(244 239 227 / 0.25)" }}
              >
                <div className="font-fd-mono text-[17px] text-fd-cream/45">avatar-{["7f9c", "b21d", "e04a"][i]}</div>
                <div className="relative mt-6 h-[96px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={v2 ? "v2" : "v1"}
                      className={`absolute font-fd-display text-[96px] font-medium leading-none tracking-[-0.04em] ${v2 ? "text-fd-teal" : "text-fd-cream/35"}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35 }}
                    >
                      {v2 ? "v2" : "v1"}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="absolute bottom-5 left-6 flex items-center gap-3 font-fd-mono text-[17px] text-fd-cream/60">
                  <span className="h-[9px] w-[9px] rounded-full" style={{ background: v2 ? C.teal : "rgb(244 239 227 / 0.4)" }} />
                  Ready
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 font-fd-mono text-[18px] text-fd-cream/50">
          {step === 0 ? "3/3 v1 · siap rollout" : step < 3 ? `rolling update ${step}/3 · trafik hanya ke pod yang Ready` : "3/3 v2 · tanpa downtime"}
        </div>
      </div>
    </Frame>
  );
}

/* ── 21 · Deploy yang membosankan ─────────────────────────────────────────
 * steps 0–2: canary 5% → 25% → 100%.
 */

const CANARY = [5, 25, 100];

export function S21Boring({ step }: { step: number }) {
  return (
    <Frame tone="cream">
      <StageMark n={5} tone="cream" />
      <In className="absolute left-[112px] top-[300px]">
        <h2 className="font-fd-display text-[164px] font-medium leading-[0.95] tracking-[-0.05em]">
          Deploy yang baik
          <br />
          itu <span className="fd-mark">membosankan</span>.
        </h2>
      </In>

      <div className="absolute left-[120px] right-[120px] top-[740px]">
        <div className="relative h-[6px] bg-fd-navy/10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-fd-navy"
            initial={false}
            animate={{ width: `${CANARY[Math.min(step, 2)]}%` }}
            transition={{ duration: 0.9, ease: EASE }}
          />
        </div>
        {CANARY.map((p, i) => (
          <Step
            key={p}
            show={step >= i}
            y={0}
            className="absolute top-[22px] font-fd-mono text-[20px]"
            style={p === 100 ? { right: 0 } : { left: `${p}%` }}
          >
            <span className={p === 100 ? "" : "inline-block -translate-x-1/2"}>{p}%</span>
          </Step>
        ))}
      </div>

      <In delay={0.4} className="absolute left-[120px] top-[860px] font-fd-mono text-[22px] text-fd-navy/60">
        GitOps · Canary · Rollback otomatis
      </In>
    </Frame>
  );
}
