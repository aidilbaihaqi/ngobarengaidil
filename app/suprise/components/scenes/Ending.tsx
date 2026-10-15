"use client";

import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SceneProps } from "../Surprise";
import { Burst, SPRING, Sticker, buzz } from "../kit";
import { ENDING, ENDING_GIF, STICKER } from "../../data/copy";

const LETTER = ENDING.letter.join("\n\n");
const HOLD_MS = 1600;

/** A short letter typed out by hand, then a hug she has to hold to give. */
export default function Ending({ restart }: SceneProps) {
  const [typed, setTyped] = useState(0);
  const [hugged, setHugged] = useState(false);
  const [bursts, setBursts] = useState(0);
  const finished = typed >= LETTER.length;

  useEffect(() => {
    if (finished) return;
    const t = setTimeout(() => setTyped((n) => n + 1), LETTER[typed] === "\n" ? 260 : 32);
    return () => clearTimeout(t);
  }, [typed, finished]);

  // Rain hearts for a few seconds once the hug lands.
  useEffect(() => {
    if (!hugged) return;
    let n = 0;
    const t = setInterval(() => {
      setBursts(Date.now());
      if (++n >= 6) clearInterval(t);
    }, 450);
    return () => clearInterval(t);
  }, [hugged]);

  return (
    <div className="flex flex-1 flex-col items-center gap-5">
      <AnimatePresence mode="wait">
        {!hugged ? (
          <motion.div key="letter" exit={{ opacity: 0, scale: 0.9 }} className="flex w-full flex-1 flex-col items-center gap-5">
            <motion.button
              type="button"
              onClick={() => setTyped(LETTER.length)}
              initial={{ y: 30, opacity: 0, rotate: 2 }}
              animate={{ y: 0, opacity: 1, rotate: -1 }}
              transition={SPRING}
              aria-label="surat dari buy"
              className="relative w-full rounded-[10px] bg-white px-5 pb-6 pt-8 text-left shadow-[0_14px_30px_-12px_rgb(201_48_63/0.45)]"
              style={{
                backgroundImage: "repeating-linear-gradient(transparent 0 31px, rgb(240 82 95 / 0.18) 31px 32px)",
                backgroundPositionY: "22px",
              }}
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-[-4deg] rounded-md bg-sp-leaf/90 px-6 py-1 text-xl shadow-sm">
                🍉
              </span>
              <p className="min-h-[300px] whitespace-pre-line font-sp-hand text-[22px] leading-[32px] text-sp-seed">
                {LETTER.slice(0, typed)}
                {!finished && <span className="ml-0.5 inline-block h-5 w-[3px] translate-y-1 animate-pulse bg-sp-red" />}
              </p>
              <AnimatePresence>
                {finished && (
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-right font-sp-hand text-[24px] font-bold text-sp-deep"
                  >
                    {ENDING.sign}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {finished && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto flex flex-col items-center gap-3"
                >
                  <HoldToHug onDone={() => setHugged(true)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="party"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={SPRING}
            className="relative flex w-full flex-1 flex-col items-center gap-5 pt-4"
          >
            <Burst trigger={bursts} count={18} spread={200} emojis={["❤️", "💖", "🍉", "🐮", "💕"]} className="top-1/4" />
            <h1 className="text-center text-[30px] font-bold leading-tight text-sp-deep">{ENDING.final}</h1>

            {/* Hotlinked straight from Tenor's CDN: no script, no embed frame. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ENDING_GIF} alt="peach goma love head pat" className="w-[260px] max-w-full" />

            <div className="flex items-end justify-center gap-2">
              <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ...SPRING, delay: 0.3 }}>
                <Sticker src={STICKER.bunga} alt="capi kasih bunga" size={96} tilt={-8} />
              </motion.div>
              <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...SPRING, delay: 0.45 }}>
                <Sticker src={STICKER.imup} alt="capi imut" size={110} tilt={3} />
              </motion.div>
              <motion.div initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ...SPRING, delay: 0.6 }}>
                <Sticker src={STICKER.lidah} alt="capi nyam" size={96} tilt={8} />
              </motion.div>
            </div>

            <p className="text-center font-sp-hand text-[24px] text-sp-seed">i lovee you co muchhh, myakuguweh 🍉🐮</p>

            <button
              type="button"
              onClick={() => {
                buzz();
                restart();
              }}
              className="mt-auto text-[14px] text-sp-seed/50 underline underline-offset-4"
            >
              {ENDING.again} ↺
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Press and hold: the heart fills, the phone purrs, and letting go early just drains it. */
function HoldToHug({ onDone }: { onDone: () => void }) {
  const progress = useMotionValue(0);
  const scale = useTransform(progress, [0, 1], [1, 1.5]);
  // The heart's path spans y 4–21; the fill rises through that band.
  const fillY = useTransform(progress, [0, 1], [21, 3]);
  const fillH = useTransform(progress, [0, 1], [0, 18]);
  const [holding, setHolding] = useState(false);
  const anim = useRef<ReturnType<typeof animate> | null>(null);
  const pulse = useRef<ReturnType<typeof setInterval>>(undefined);

  const start = () => {
    setHolding(true);
    anim.current?.stop();
    anim.current = animate(progress, 1, {
      duration: (HOLD_MS / 1000) * (1 - progress.get()),
      ease: "linear",
      onComplete: () => {
        clearInterval(pulse.current);
        buzz([60, 40, 120]);
        onDone();
      },
    });
    pulse.current = setInterval(() => buzz(10), 180);
  };

  const stop = () => {
    setHolding(false);
    clearInterval(pulse.current);
    if (progress.get() >= 1) return;
    anim.current?.stop();
    anim.current = animate(progress, 0, { duration: 0.4 });
  };

  useEffect(() => () => clearInterval(pulse.current), []);

  return (
    <>
      <motion.button
        type="button"
        aria-label={ENDING.hold}
        style={{ scale }}
        onPointerDown={start}
        onPointerUp={stop}
        onPointerLeave={stop}
        onPointerCancel={stop}
        onContextMenu={(e) => e.preventDefault()}
        className="relative h-28 w-28 touch-none select-none"
      >
        <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full drop-shadow-[0_8px_10px_rgb(201_48_63/0.4)]">
          <defs>
            <clipPath id="sp-heart">
              <path d="M12 21s-7.5-4.6-10-9.3C.3 8.3 2.2 4 6.2 4c2.3 0 3.8 1.3 4.8 2.8C12 5.3 13.5 4 15.8 4c4 0 5.9 4.3 4.2 7.7C19.5 16.4 12 21 12 21z" />
            </clipPath>
          </defs>
          <rect width="24" height="24" fill="#FAC6D0" clipPath="url(#sp-heart)" />
          {/* Clip on the group: a clip on the moving rect would travel with it. */}
          <g clipPath="url(#sp-heart)">
            <motion.rect x="0" width="24" style={{ y: fillY, height: fillH }} fill="#F0525F" />
          </g>
        </svg>
        <span className="relative text-3xl">🫂</span>
      </motion.button>
      <p className="text-[15px] font-semibold text-sp-deep">{holding ? ENDING.holding : ENDING.hold}</p>
    </>
  );
}
