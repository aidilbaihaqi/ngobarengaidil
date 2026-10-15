"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import type { SceneProps } from "../Surprise";
import { Bubble, Burst, Pop, SPRING, SceneTitle, SliceButton, Sticker, buzz } from "../kit";
import { STICKER, TANTRUM } from "../../data/copy";

const STEP = 4; // 25 taps to empty the anger out

/**
 * The tantrum is given room, not talked down: every tap is a hit on buy, the
 * meter fills, and once it tops out the angry cow turns into the soft one.
 */
export default function Tantrum({ next }: SceneProps) {
  const [meter, setMeter] = useState(0);
  const [burst, setBurst] = useState(0);
  const cow = useAnimationControls();
  const done = meter >= 100;
  const line = [...TANTRUM.lines].reverse().find((l) => meter >= l.at)!;

  const hit = () => {
    if (done) return;
    const m = Math.min(100, meter + STEP);
    setMeter(m);
    setBurst(Date.now());
    buzz(m >= 100 ? [40, 30, 80] : 18);
    cow.start({
      scale: [1, 1.12 + m / 600, 1],
      rotate: [0, Math.random() > 0.5 ? 8 : -8, 0],
      transition: { duration: 0.25 },
    });
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-5">
      <SceneTitle title={done ? "🫂" : TANTRUM.title} sub={done ? undefined : TANTRUM.sub} />

      <div className="w-full">
        <div className="flex justify-between text-[13px] font-semibold text-sp-seed/60">
          <span>level ngamuk</span>
          <span>{meter}%</span>
        </div>
        <div className="mt-1 h-5 w-full overflow-hidden rounded-full border-[3px] border-white bg-sp-leaf shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-sp-red to-sp-deep"
            animate={{ width: `${meter}%` }}
            transition={SPRING}
          />
        </div>
      </div>

      <div className="relative my-2 flex flex-1 items-center justify-center">
        <Burst trigger={burst} count={6} spread={130} emojis={["💢", "😤", "💥", "💨"]} />
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div key="soft" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={SPRING}>
              <Sticker src={STICKER.imup} alt="capi udah lega" size={230} tilt={3} />
            </motion.div>
          ) : (
            <motion.button
              key="angry"
              type="button"
              aria-label="pukul capi"
              animate={cow}
              exit={{ scale: 0, rotate: 30 }}
              onClick={hit}
              className="touch-manipulation"
            >
              <Sticker src={STICKER.marah} alt="capi marah" size={230} tilt={-3} wobble={false} priority />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <Pop id={done ? "done" : line.at} className="w-full">
        <Bubble tail="none" className="text-center text-[17px]">
          {done ? TANTRUM.done : line.text}
        </Bubble>
      </Pop>

      <div className="flex h-24 flex-col items-center justify-center gap-2">
        {done ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={SPRING}>
            <SliceButton onClick={next}>{TANTRUM.next}</SliceButton>
          </motion.div>
        ) : (
          <button type="button" onClick={next} className="text-[14px] text-sp-seed/50 underline underline-offset-4">
            lagi ga pengen ngamuk →
          </button>
        )}
      </div>
    </div>
  );
}
