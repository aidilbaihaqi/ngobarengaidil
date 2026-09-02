"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/app/lib/utils";

/**
 * A static lead-in, then one slot that cycles through a list of values.
 *
 * The slot is a plate rather than bare text: it keeps the cycling term on its
 * own ground, so a width change reads as the plate resizing instead of the
 * whole line reflowing. Colours are Assay tokens — the plate is a raised
 * surface behind a hairline rule, no new palette.
 *
 * Inherits its type from the parent, so it sits at whatever step of the scale
 * the heading around it is set to.
 */
export const LayoutTextFlip = ({
  text,
  words,
  trailing,
  duration = 3000,
  className,
}: {
  /** The part of the line that never changes, set above the plate. */
  text: React.ReactNode;
  /** The values the plate cycles through, in order. */
  words: string[];
  /** Optional line set below the plate, to close the sentence. */
  trailing?: React.ReactNode;
  /** Milliseconds each value is held. */
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Nothing to cycle, or the reader asked for stillness: hold the first value.
    if (reduceMotion || words.length < 2) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, duration);

    return () => clearInterval(id);
  }, [duration, reduceMotion, words.length]);

  return (
    <span className={cn("flex flex-col items-start gap-y-2", className)}>
      <span>{text}</span>

      <motion.span
        layout
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative block w-fit overflow-hidden rounded-md border border-rule bg-surface-raised px-4 py-2 leading-[1.1] text-ink"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={index}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { y: "-100%", filter: "blur(8px)", opacity: 0 }
            }
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { y: "100%", filter: "blur(8px)", opacity: 0 }
            }
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-block whitespace-nowrap"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>

      {trailing ? <span>{trailing}</span> : null}
    </span>
  );
};

export default LayoutTextFlip;
