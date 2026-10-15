"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import type { SceneProps } from "../Surprise";
import { Bubble, Burst, Pop, SPRING, SceneTitle, SliceButton, Sticker, buzz } from "../kit";
import { REASONS, STICKER } from "../../data/copy";

// One seed per reason, plus the last one that holds the lele joke.
const TOTAL = REASONS.list.length + 1;

// Seed spots on the 240×240 round slice, picked so none sit on the rind.
const SPOTS = [
  [120, 60], [80, 80], [160, 80], [60, 120], [180, 120],
  [100, 115], [140, 115], [80, 160], [160, 160], [120, 175],
] as const;

export default function Reasons({ next }: SceneProps) {
  const [count, setCount] = useState(0);
  const [burst, setBurst] = useState(0);
  const melon = useAnimationControls();
  const finale = count >= TOTAL;

  const tap = () => {
    if (finale) return;
    const c = count + 1;
    setCount(c);
    setBurst(Date.now());
    buzz(c === TOTAL ? [30, 40, 30, 40, 80] : 14);
    melon.start({ scale: [1, 0.9, 1.05, 1], rotate: [0, -6, 4, 0], transition: { duration: 0.35 } });
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-5">
      <SceneTitle title={finale ? REASONS.finale.title : REASONS.title} sub={finale ? undefined : REASONS.sub} />

      <div className="relative flex h-[250px] items-center justify-center">
        <Burst trigger={burst} count={finale ? 24 : 8} spread={finale ? 190 : 120} emojis={finale ? ["🐟", "❤️", "🍉", "🌍"] : ["🖤", "❤️", "✨"]} />
        <AnimatePresence mode="wait">
          {finale ? (
            <motion.div key="lele" initial={{ scale: 0, rotate: 30 }} animate={{ scale: 1, rotate: 0 }} transition={SPRING}>
              <Sticker src={STICKER.lidah} alt="capi nyam nyam" size={210} tilt={-4} />
            </motion.div>
          ) : (
            <motion.button
              key="melon"
              type="button"
              aria-label="pecahin cemangka"
              animate={melon}
              exit={{ scale: 0, rotate: 90, opacity: 0 }}
              whileTap={{ scale: 0.92 }}
              onClick={tap}
              className="touch-manipulation"
            >
              <svg viewBox="0 0 240 240" className="w-[240px] drop-shadow-[0_14px_16px_rgb(201_48_63/0.3)]">
                <circle cx="120" cy="120" r="116" fill="#5FAE5B" />
                <circle cx="120" cy="120" r="104" fill="#E9F7DC" />
                <circle cx="120" cy="120" r="96" fill="#F0525F" />
                <circle cx="96" cy="88" r="30" fill="#fff" opacity="0.12" />
                {SPOTS.slice(0, TOTAL - count).map(([x, y], i) => (
                  <motion.ellipse
                    key={`${x}-${y}`}
                    cx={x}
                    cy={y}
                    rx="6"
                    ry="10"
                    fill="#2A1A17"
                    transform={`rotate(${(i % 3) * 15 - 15} ${x} ${y})`}
                    exit={{ opacity: 0 }}
                  />
                ))}
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-1">
        {Array.from({ length: TOTAL }, (_, i) => (
          <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < count ? "bg-sp-red" : "bg-sp-seed/15"}`} />
        ))}
      </div>

      <div className="min-h-[110px] w-full">
        <Pop id={count}>
          {count === 0 ? (
            <p className="text-center text-[15px] text-sp-seed/60">tap cemangkanya 👆</p>
          ) : finale ? (
            <div className="rounded-[28px] border-4 border-dashed border-sp-rind bg-white px-5 py-4 text-center text-[19px] font-semibold leading-snug text-sp-deep">
              {REASONS.finale.text}
            </div>
          ) : (
            <Bubble tail="none" className="text-[16px]">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sp-red text-[13px] font-bold text-white">
                {count}
              </span>
              {REASONS.list[count - 1]}
            </Bubble>
          )}
        </Pop>
      </div>

      <div className="mt-auto flex h-20 items-center">
        {finale && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...SPRING, delay: 0.8 }}>
            <SliceButton onClick={next}>{REASONS.next}</SliceButton>
          </motion.div>
        )}
      </div>
    </div>
  );
}
