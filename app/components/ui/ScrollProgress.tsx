"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * The thin reading-progress line under the top edge. Driven by a spring so it
 * glides instead of ticking; scaleX keeps the whole thing on the compositor.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500"
      style={{ scaleX }}
    />
  );
}
