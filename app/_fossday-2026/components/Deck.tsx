"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { DECK, type SlideDef } from "../data/deck";
import { isLight, STAGES } from "./kit";

const W = 1920;
const H = 1080;

/*
 * Keys: → ↓ Space PageDown next · ← ↑ PageUp back · Home/End
 *       F fullscreen · B blackout
 * Clicks: left fifth of the screen goes back, anywhere else goes forward.
 */

/** The signature strip: six ticks on a hairline that light as the feature travels. */
function Trace({ slide, n }: { slide: SlideDef; n: number }) {
  const light = isLight(slide.tone);
  const lit = slide.stage === "done" ? 6 : slide.stage ?? 0;
  const ink = light ? "#10163A" : "#F4EFE3";
  const accent = light ? "#10163A" : "#F2C46D";

  return (
    <div
      className="pointer-events-none absolute inset-x-[120px] bottom-0 flex h-[64px] items-center justify-between font-fd-mono text-[15px] tracking-[0.04em]"
      style={{ color: ink }}
    >
      <span className="opacity-40">FOSS Day · Batam Linux User Group</span>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          {typeof slide.stage === "number" && (
            <span className="opacity-60">{STAGES[slide.stage - 1]}</span>
          )}
          <svg width={6 * 40} height={16} aria-hidden>
            <line x1={4} x2={5 * 40 + 4} y1={8} y2={8} stroke={ink} strokeOpacity={0.2} />
            <line x1={4} x2={Math.max(0, lit - 1) * 40 + 4} y1={8} y2={8} stroke={accent} strokeOpacity={0.8} />
            {STAGES.map((_, i) => {
              const on = i < lit;
              const current = slide.stage === i + 1;
              const s = current ? 10 : 6;
              return (
                <rect
                  key={i}
                  x={i * 40 + 4 - s / 2}
                  y={8 - s / 2}
                  width={s}
                  height={s}
                  fill={on ? accent : light ? "#F4EFE3" : "#10163A"}
                  stroke={on ? accent : ink}
                  strokeOpacity={on ? 1 : 0.35}
                />
              );
            })}
          </svg>
        </div>
        <span className="tabular-nums opacity-40">
          {String(n).padStart(2, "0")} / {DECK.length}
        </span>
      </div>
    </div>
  );
}

function useStageScale() {
  const [box, setBox] = useState({ s: 1, x: 0, y: 0 });
  useLayoutEffect(() => {
    const fit = () => {
      const s = Math.min(window.innerWidth / W, window.innerHeight / H);
      setBox({ s, x: (window.innerWidth - W * s) / 2, y: (window.innerHeight - H * s) / 2 });
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return box;
}

export default function Deck() {
  const [pos, setPos] = useState({ i: 0, step: 0 });
  const [ready, setReady] = useState(false);
  const [black, setBlack] = useState(false);
  const [idle, setIdle] = useState(false);
  const touchX = useRef<number | null>(null);
  const { s, x, y } = useStageScale();

  const slide = DECK[pos.i];
  const steps = slide.steps ?? 1;

  const next = useCallback(() => {
    setPos((p) => {
      const n = DECK[p.i].steps ?? 1;
      if (p.step < n - 1) return { i: p.i, step: p.step + 1 };
      if (p.i < DECK.length - 1) return { i: p.i + 1, step: 0 };
      return p;
    });
  }, []);

  // Going back lands on the previous slide fully built, the way it was left.
  const prev = useCallback(() => {
    setPos((p) => {
      if (p.step > 0) return { i: p.i, step: p.step - 1 };
      if (p.i > 0) return { i: p.i - 1, step: (DECK[p.i - 1].steps ?? 1) - 1 };
      return p;
    });
  }, []);

  const jump = useCallback((i: number) => setPos({ i: Math.max(0, Math.min(DECK.length - 1, i)), step: 0 }), []);

  // #n deep links in, and out.
  useEffect(() => {
    const fromHash = () => {
      const h = parseInt(window.location.hash.slice(1), 10);
      if (!Number.isNaN(h)) setPos((p) => (p.i === h - 1 ? p : { i: Math.max(0, Math.min(DECK.length - 1, h - 1)), step: 0 }));
    };
    fromHash();
    setReady(true);
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    if (ready) history.replaceState(null, "", `#${pos.i + 1}`);
  }, [pos.i, ready]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(k)) {
        e.preventDefault();
        if (black) setBlack(false);
        else next();
      } else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(k)) {
        e.preventDefault();
        prev();
      } else if (k === "Home") jump(0);
      else if (k === "End") jump(DECK.length - 1);
      else if (k.toLowerCase() === "b" || k === ".") setBlack((v) => !v);
      else if (k.toLowerCase() === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, jump, black]);

  // Controls fade out while the presenter is talking, back on mouse move.
  useEffect(() => {
    let id = window.setTimeout(() => setIdle(true), 2200);
    const wake = () => {
      setIdle(false);
      window.clearTimeout(id);
      id = window.setTimeout(() => setIdle(true), 2200);
    };
    window.addEventListener("mousemove", wake);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("mousemove", wake);
    };
  }, []);

  const onClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("video, button, a, aside")) return;
    if (e.clientX < window.innerWidth / 5) prev();
    else next();
  };

  if (!ready) return <div className="h-full w-full bg-fd-ink" />;

  const { Slide } = slide;

  return (
    <div
      className={`relative h-full w-full select-none overflow-hidden bg-fd-ink ${idle ? "cursor-none" : ""}`}
      onClick={onClick}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <div
        className="absolute overflow-hidden"
        style={{ width: W, height: H, left: x, top: y, transform: `scale(${s})`, transformOrigin: "0 0" }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={pos.i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Slide step={Math.min(pos.step, steps - 1)} />
            {!slide.bare && <Trace slide={slide} n={pos.i + 1} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Blackout for when the room should look at the speaker, not the screen. */}
      <AnimatePresence>
        {black && (
          <motion.div
            className="absolute inset-0 z-30 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Presenter controls: quiet, bottom-right, gone while idle. */}
      <div
        className={`absolute bottom-3 right-3 z-40 flex items-center gap-1 rounded-[4px] border border-fd-cream/10 bg-fd-ink/90 p-1 font-fd-mono text-[12px] text-fd-cream/60 transition-opacity duration-500 ${
          idle ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <button onClick={prev} className="px-2 py-1 hover:text-fd-cream" aria-label="Sebelumnya">←</button>
        <span className="px-1 tabular-nums">
          {pos.i + 1}/{DECK.length}
          {steps > 1 && <span className="text-fd-cream/35"> · {pos.step + 1}/{steps}</span>}
        </span>
        <button onClick={next} className="px-2 py-1 hover:text-fd-cream" aria-label="Berikutnya">→</button>
        <span className="mx-1 h-4 w-px bg-fd-cream/15" />
        <button onClick={() => document.documentElement.requestFullscreen?.()} className="px-2 py-1 hover:text-fd-cream">
          F layar penuh
        </button>
      </div>

    </div>
  );
}
