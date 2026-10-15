"use client";

/*
 * The page's primitives: stickers, speech bubbles, the slice-shaped button,
 * the seed progress row, and the emoji bursts every win ends in.
 */

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/app/lib/utils";

export const SPRING = { type: "spring", stiffness: 380, damping: 18 } as const;

/** A short buzz on phones that support it (Android); iOS ignores it. */
export function buzz(ms: number | number[] = 12) {
  try {
    navigator.vibrate?.(ms);
  } catch {}
}

export function Sticker({
  src,
  alt,
  size = 160,
  tilt = -4,
  wobble = true,
  className,
  priority,
}: {
  src: string;
  alt: string;
  size?: number;
  tilt?: number;
  wobble?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn("sp-sticker shrink-0", wobble && "sp-wobble", className)}
      style={{ width: size, height: size, "--tilt": `${tilt}deg`, rotate: wobble ? undefined : `${tilt}deg` } as CSSProperties}
    >
      <Image
        src={src}
        alt={alt}
        width={size * 2}
        height={size * 2}
        priority={priority}
        draggable={false}
        className="h-full w-full select-none object-cover"
      />
    </div>
  );
}

export function Bubble({ children, className, tail = "left" }: { children: ReactNode; className?: string; tail?: "left" | "right" | "none" }) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border-2 border-sp-seed/10 bg-white px-4 py-3 text-[15px] font-medium leading-snug shadow-[0_6px_0_-1px_rgb(42_26_23/0.08)]",
        className,
      )}
    >
      {children}
      {tail !== "none" && (
        <span
          aria-hidden
          className={cn(
            "absolute -bottom-2 h-4 w-4 rotate-45 border-b-2 border-r-2 border-sp-seed/10 bg-white",
            tail === "left" ? "left-8" : "right-8",
          )}
        />
      )}
    </div>
  );
}

export function SliceButton({
  children,
  onClick,
  className,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.92, y: 3 }}
      whileHover={{ scale: 1.03 }}
      transition={SPRING}
      onClick={() => {
        buzz();
        onClick?.();
      }}
      disabled={disabled}
      className={cn(
        "sp-slice rounded-t-[999px] rounded-b-[28px] bg-sp-red px-8 pb-5 pt-3 text-lg font-semibold text-white disabled:opacity-40",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}

/** Five slices across the top; one fills in per finished scene. */
export function Progress({ done, total }: { done: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5" aria-label={`${done} dari ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={{ scale: i < done ? 1 : 0.85, opacity: i < done ? 1 : 0.35, rotate: i < done ? 0 : -20 }}
          transition={SPRING}
          className="text-xl"
        >
          🍉
        </motion.span>
      ))}
    </div>
  );
}

export function SceneTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center">
      <h1 className="text-[28px] font-bold leading-tight text-sp-deep">{title}</h1>
      {sub && <p className="mt-1 text-[15px] text-sp-seed/70">{sub}</p>}
    </div>
  );
}

type Particle = { id: number; x: number; y: number; r: number; e: string; s: number };

/**
 * A one-shot emoji burst from a point. Give it a new `trigger` value to fire
 * again; each burst cleans itself up.
 */
export function Burst({
  trigger,
  emojis = ["❤️", "🍉", "💖", "✨"],
  count = 14,
  spread = 140,
  className,
}: {
  trigger: number;
  emojis?: string[];
  count?: number;
  spread?: number;
  className?: string;
}) {
  const [bursts, setBursts] = useState<{ key: number; parts: Particle[] }[]>([]);

  useEffect(() => {
    if (!trigger) return;
    const parts = Array.from({ length: count }, (_, i) => {
      const a = (Math.PI * 2 * i) / count + Math.random() * 0.6;
      const d = spread * (0.5 + Math.random() * 0.6);
      return {
        id: i,
        x: Math.cos(a) * d,
        y: Math.sin(a) * d - 30,
        r: (Math.random() - 0.5) * 120,
        e: emojis[i % emojis.length],
        s: 0.8 + Math.random() * 0.8,
      };
    });
    const key = trigger;
    setBursts((b) => [...b, { key, parts }]);
    const t = setTimeout(() => setBursts((b) => b.filter((x) => x.key !== key)), 1300);
    return () => clearTimeout(t);
    // emojis is a literal at every call site; the burst only follows trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute left-1/2 top-1/2", className)}>
      {bursts.map(({ key, parts }) =>
        parts.map((p) => (
          <motion.span
            key={`${key}-${p.id}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-2xl"
            initial={{ x: 0, y: 0, scale: 0.2, opacity: 1, rotate: 0 }}
            animate={{ x: p.x, y: p.y + 60, scale: p.s, opacity: 0, rotate: p.r }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.4, 1] }}
          >
            {p.e}
          </motion.span>
        )),
      )}
    </div>
  );
}

/** Hearts and slices drifting up behind everything, on a slow loop. */
export function Drift({ emojis = ["❤️", "🍉", "💕", "🐮", "💗"], count = 12 }: { emojis?: string[]; count?: number }) {
  const [items, setItems] = useState<{ left: number; delay: number; dur: number; e: string; size: number }[]>([]);

  // Random positions only after mount, so server and client markup agree.
  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        dur: 10 + Math.random() * 8,
        e: emojis[i % emojis.length],
        size: 14 + Math.random() * 14,
      })),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {items.map((it, i) => (
        <motion.span
          key={i}
          className="absolute bottom-[-40px] opacity-40"
          style={{ left: `${it.left}%`, fontSize: it.size }}
          animate={{ y: [0, -1100], x: [0, 20, -20, 0], rotate: [0, 30, -30, 0] }}
          transition={{ duration: it.dur, delay: it.delay, repeat: Infinity, ease: "linear" }}
        >
          {it.e}
        </motion.span>
      ))}
    </div>
  );
}

/** Swaps between pieces of text with a little pop. */
export function Pop({ id, children, className }: { id: string | number; children: ReactNode; className?: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 8, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.96 }}
        transition={{ duration: 0.22 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
