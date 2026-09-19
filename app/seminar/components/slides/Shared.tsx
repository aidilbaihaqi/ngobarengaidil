"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
}

export function Item({ children, className = "", variants = item }: { children: ReactNode; className?: string; variants?: Variants }) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.25em] text-seminar sm:text-sm">{children}</p>;
}

export function Title({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <h2
      className={`font-bold leading-[1.05] tracking-tight ${light ? "text-white" : "text-seminar"} text-[clamp(2rem,5.2vw,4.6rem)] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Subtitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-[clamp(1.05rem,2vw,1.6rem)] font-semibold leading-snug ${light ? "text-white/90" : "text-seminar-ink"}`}>{children}</p>
  );
}

export function Body({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return <p className={`text-[clamp(0.95rem,1.5vw,1.3rem)] leading-relaxed ${light ? "text-white/80" : "text-neutral-700"} ${className}`}>{children}</p>;
}

/** Bingkai slide standar: padding responsif, tinggi penuh. */
export function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`relative h-full w-full overflow-hidden bg-white ${className}`}>{children}</section>;
}

export const pad = "px-[6vw] py-[6vh] md:px-[7vw] md:py-[8vh]";
