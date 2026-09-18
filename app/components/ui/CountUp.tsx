"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/**
 * A number that counts up the first time it scrolls into view. Writes straight
 * to textContent from the spring, so the count never triggers React renders.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 24 });

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      if (ref.current)
        ref.current.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      return;
    }
    motionValue.set(to);
  }, [inView, reduceMotion, motionValue, to, prefix, suffix, decimals]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current)
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
    });
    return unsubscribe;
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
