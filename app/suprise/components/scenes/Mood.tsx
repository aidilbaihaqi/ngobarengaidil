"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { SceneProps } from "../Surprise";
import { Bubble, Burst, SPRING, SceneTitle, SliceButton, Sticker, buzz } from "../kit";
import { MOOD } from "../../data/copy";

/** She is heard before she is cheered up: pick a feeling, get an answer to it. */
export default function Mood({ next }: SceneProps) {
  const [picked, setPicked] = useState<string | null>(null);
  const [burst, setBurst] = useState(0);
  const option = MOOD.options.find((o) => o.id === picked);

  return (
    <div className="flex flex-1 flex-col gap-6">
      <SceneTitle title={MOOD.title} sub={MOOD.sub} />

      <div className="grid grid-cols-2 gap-4">
        {MOOD.options.map((o, i) => {
          const active = o.id === picked;
          return (
            <motion.button
              key={o.id}
              type="button"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: picked && !active ? 0.55 : 1, y: 0, scale: active ? 1.04 : 1 }}
              transition={{ ...SPRING, delay: picked ? 0 : 0.08 * i }}
              whileTap={{ scale: 0.93 }}
              onClick={() => {
                buzz(15);
                setPicked(o.id);
                setBurst(Date.now());
              }}
              className={`relative flex flex-col items-center gap-2 rounded-[28px] p-3 transition-colors ${
                active ? "bg-sp-blush" : "bg-white/70"
              }`}
            >
              <div className="relative">
                <Sticker src={o.sticker} alt={o.label} size={118} tilt={i % 2 ? 4 : -4} wobble={active} />
                {"badge" in o && <span className="absolute -right-2 -top-2 text-3xl">{o.badge}</span>}
              </div>
              <span className="text-[16px] font-semibold text-sp-deep">{o.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="relative min-h-[120px]">
        <Burst trigger={burst} count={10} spread={110} emojis={["💗", "🫶", "✨"]} />
        <AnimatePresence mode="wait">
          {option && (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <Bubble tail="none" className="text-[16px]">
                {option.reply}
              </Bubble>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-auto flex justify-center">
        <AnimatePresence>
          {option && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={SPRING}>
              <SliceButton onClick={next}>{MOOD.next}</SliceButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
