"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Drift, Progress } from "./kit";
import Gate from "./scenes/Gate";
import Mood from "./scenes/Mood";
import Tantrum from "./scenes/Tantrum";
import Reasons from "./scenes/Reasons";
import Coupons from "./scenes/Coupons";
import Ending from "./scenes/Ending";

const SCENES = [Gate, Mood, Tantrum, Reasons, Coupons, Ending] as const;
const KEY = "suprise-scene";

/**
 * The whole visit as a row of scenes. Each scene calls `next` when it is done;
 * where she got to is remembered for the tab, so an accidental reload does not
 * send her back through the lock.
 */
export default function Surprise() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    try {
      const saved = Number(sessionStorage.getItem(KEY));
      if (saved > 0 && saved < SCENES.length) setScene(saved);
    } catch {}
  }, []);

  const go = (n: number) => {
    setScene(n);
    try {
      sessionStorage.setItem(KEY, String(n));
    } catch {}
    document.querySelector(".suprise")?.scrollTo({ top: 0 });
  };

  const Scene = SCENES[scene];

  return (
    <div className="sp-seeds relative min-h-[100dvh]">
      <Drift />
      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-md flex-col px-4 pb-10 pt-5">
        <AnimatePresence initial={false}>
          {scene > 0 && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
              <Progress done={scene} total={SCENES.length - 1} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.main
            key={scene}
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col"
          >
            <Scene next={() => go(Math.min(scene + 1, SCENES.length - 1))} restart={() => go(0)} />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}

export type SceneProps = { next: () => void; restart: () => void };
