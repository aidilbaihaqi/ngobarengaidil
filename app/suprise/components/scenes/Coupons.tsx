"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SceneProps } from "../Surprise";
import { Burst, SPRING, SliceButton, Sticker, buzz } from "../kit";
import { COUPONS, STICKER } from "../../data/copy";

/** Real promises behind scratch-off foil. Screenshot-able, so they can be redeemed. */
export default function Coupons({ next }: SceneProps) {
  const [revealed, setRevealed] = useState<boolean[]>(() => COUPONS.list.map(() => false));
  const [burst, setBurst] = useState(0);
  const all = revealed.every(Boolean);

  const reveal = (only?: number) => {
    buzz([20, 30, 20]);
    setBurst(Date.now());
    setRevealed((r) => r.map((v, j) => v || only === undefined || j === only));
  };

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex items-center gap-3">
        <Sticker src={STICKER.bunga} alt="capi kasih bunga" size={84} tilt={-6} />
        <div className="text-left">
          <h1 className="text-[26px] font-bold leading-tight text-sp-deep">{COUPONS.title}</h1>
          <p className="text-[14px] text-sp-seed/70">{COUPONS.sub}</p>
        </div>
      </div>

      <div className="relative space-y-4">
        <Burst trigger={burst} count={12} spread={150} emojis={["🎟️", "💖", "🍉", "✨"]} />
        {COUPONS.list.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.08 * i }}
            className="relative overflow-hidden rounded-[22px] border-[3px] border-dashed border-sp-rind bg-white"
            style={{ rotate: `${i % 2 ? 1 : -1}deg` }}
          >
            <div className="flex items-center gap-3 px-4 py-4">
              <span className="text-4xl">{c.emoji}</span>
              <div>
                <p className="text-[16px] font-bold leading-tight text-sp-deep">{c.title}</p>
                <p className="mt-1 text-[14px] leading-snug text-sp-seed/75">{c.body}</p>
              </div>
            </div>
            {/* Ticket notches on either edge. */}
            <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-sp-cream" />
            <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-sp-cream" />
            <AnimatePresence>
              {!revealed[i] && (
                <motion.div className="absolute inset-0" exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.4 }}>
                  <Scratch onReveal={() => reveal(i)} label={`kupon ${i + 1}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {!all && (
        <button
          type="button"
          onClick={() => reveal()}
          className="text-[14px] text-sp-seed/50 underline underline-offset-4"
        >
          {COUPONS.lazy}
        </button>
      )}

      <div className="mt-auto flex h-20 items-center justify-center">
        {all && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...SPRING, delay: 0.3 }}>
            <SliceButton onClick={next}>{COUPONS.next}</SliceButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/** Watermelon-skin foil on a canvas; wiping away about half of it counts as open. */
function Scratch({ onReveal, label }: { onReveal: () => void; label: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const down = useRef(false);
  const moves = useRef(0);
  const done = useRef(false);

  useEffect(() => {
    const canvas = ref.current!;
    const { width, height } = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, "#F0525F");
    g.addColorStop(1, "#E23E4C");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "rgba(42,26,23,0.55)";
    for (let y = 10; y < height; y += 22) {
      for (let x = (y / 22) % 2 ? 14 : 26; x < width; x += 34) {
        ctx.beginPath();
        ctx.ellipse(x, y, 2.5, 4.5, 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.fillStyle = "#fff";
    // Canvas cannot read CSS variables, so borrow the resolved family.
    ctx.font = `600 17px ${getComputedStyle(canvas).fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("gocok di cini 👆", width / 2, height / 2);
  }, []);

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!down.current || done.current) return;
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 24, 0, Math.PI * 2);
    ctx.fill();

    // Measuring every move is wasteful; every eighth is plenty.
    if (++moves.current % 8) return;
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    let n = 0;
    for (let i = 3; i < data.length; i += 4 * 32) {
      n++;
      if (data[i] === 0) clear++;
    }
    if (clear / n > 0.5) {
      done.current = true;
      onReveal();
    }
  };

  return (
    <canvas
      ref={ref}
      aria-label={label}
      className="h-full w-full touch-none"
      onPointerDown={(e) => {
        down.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        scratch(e);
      }}
      onPointerMove={scratch}
      onPointerUp={() => (down.current = false)}
      onPointerCancel={() => (down.current = false)}
      onDoubleClick={() => {
        done.current = true;
        onReveal();
      }}
    />
  );
}
