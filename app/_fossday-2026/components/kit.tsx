"use client";

/*
 * The deck's primitives. Every slide is drawn on a fixed 1920×1080 canvas, so
 * sizes here are literal pixels: the stage scales as one piece to fit the
 * screen, and nothing reflows between a laptop and the venue projector.
 *
 * Margins: 120px left/right, content stops at y=1000 (the trace strip below).
 */

import { motion } from "framer-motion";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/app/lib/utils";

export type Tone = "ink" | "navy" | "cream" | "amber";

export const STAGES = [
  "Spesifikasi",
  "Implementasi",
  "Dependency",
  "Review",
  "Build & Deploy",
  "Operasi",
] as const;

export const isLight = (t: Tone) => t === "cream" || t === "amber";

const toneClass: Record<Tone, string> = {
  ink: "bg-fd-ink text-fd-cream",
  navy: "bg-fd-navy text-fd-cream",
  cream: "bg-fd-cream text-fd-navy",
  amber: "bg-fd-amber text-fd-navy",
};

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Frame({
  tone,
  grid,
  children,
  className,
}: {
  tone: Tone;
  grid?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", toneClass[tone], className)}>
      {grid && <div className="fd-grid pointer-events-none absolute inset-0" />}
      {children}
    </div>
  );
}

/** Mount-in: rises 14px and fades. Delays are in seconds. */
export function In({
  children,
  delay = 0,
  y = 14,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Build-in driven by the presenter's clicks rather than by mount. */
export function Step({
  show,
  children,
  className,
  style,
  y = 10,
}: {
  show: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : y }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Top-right stage counter: the big mono numeral and the stage name under a rule. */
export function StageMark({ n, tone = "navy" }: { n: number; tone?: Tone }) {
  return (
    <div className="absolute right-[120px] top-[92px] w-[240px] text-right">
      <div
        className={cn(
          "font-fd-mono text-[128px] font-extralight leading-[0.78] tracking-[-0.06em]",
          isLight(tone) ? "text-fd-navy" : "text-fd-amber",
        )}
      >
        {String(n).padStart(2, "0")}
      </div>
      <div className="mt-6 border-t border-current pt-3 font-fd-mono text-[17px] uppercase tracking-[0.14em] opacity-50">
        {STAGES[n - 1]}
      </div>
    </div>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("font-fd-mono text-[20px] uppercase tracking-[0.16em]", className)}>
      {children}
    </div>
  );
}

export function Headline({
  children,
  className,
  size = 96,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  return (
    <h2
      className={cn("font-fd-display font-medium tracking-[-0.035em]", className)}
      style={{ fontSize: size, lineHeight: 1.0 }}
    >
      {children}
    </h2>
  );
}

/** One-line source footer, sitting just above the trace strip. */
export function Source({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "absolute bottom-[92px] left-[120px] font-fd-mono text-[16px] tracking-[0.02em] opacity-45",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A window chrome for real artifacts: a path in the title bar, nothing else. */
export function Window({
  title,
  children,
  className,
  bodyClassName,
  tone = "ink",
}: {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  tone?: "ink" | "navy";
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-[6px] border border-fd-cream/12",
        tone === "ink" ? "bg-fd-ink" : "bg-fd-navy",
        className,
      )}
    >
      <div className="flex h-[48px] shrink-0 items-center border-b border-fd-cream/10 px-6 font-fd-mono text-[16px] text-fd-cream/45">
        {title}
      </div>
      <div className={cn("relative flex-1 font-fd-mono text-fd-cream", bodyClassName)}>{children}</div>
    </div>
  );
}

/** Types `text` out once `active`; renders it whole when `instant`. */
export function Typed({
  text,
  active,
  instant,
  speed = 38,
  onDone,
}: {
  text: string;
  active: boolean;
  instant?: boolean;
  speed?: number;
  onDone?: () => void;
}) {
  const [n, setN] = useState(instant ? text.length : 0);

  useEffect(() => {
    if (instant) {
      setN(text.length);
      return;
    }
    if (!active) {
      setN(0);
      return;
    }
    let i = 0;
    setN(0);
    const id = window.setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) {
        window.clearInterval(id);
        onDone?.();
      }
    }, speed);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, instant, text, speed]);

  return <>{text.slice(0, n)}</>;
}

export function Cursor({ className }: { className?: string }) {
  return <span aria-hidden className={cn("fd-cursor ml-[0.06em]", className)} />;
}

/** Small arrowhead marker for the hand-drawn diagrams. */
export function ArrowDefs({ id, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M0,1 L9,5 L0,9" fill="none" stroke={color} strokeWidth="1.4" />
      </marker>
    </defs>
  );
}

export const C = {
  navy: "#10163A",
  ink: "#0B1028",
  cream: "#F4EFE3",
  amber: "#F2C46D",
  teal: "#7FD8D4",
  brick: "#D9644A",
} as const;
