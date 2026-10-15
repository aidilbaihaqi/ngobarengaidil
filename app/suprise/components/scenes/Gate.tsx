"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SceneProps } from "../Surprise";
import { Bubble, Burst, Pop, SPRING, Sticker, buzz } from "../kit";
import { GATE, SECRET_CODE, STICKER } from "../../data/copy";

/*
 * The lock. The code comes over WhatsApp; the keyhole is the one heart-shaped
 * seed in the watermelon. Everything else answers "bukan acu", and hints come
 * in the longer she looks, until the right seed starts pulsing on its own.
 */

// Seeds on the slice, in the SVG's 300×170 frame. The heart sits among them.
const SEEDS = [
  [70, 40, -20], [110, 36, -8], [150, 34, 0], [190, 36, 8], [230, 40, 20],
  [92, 72, -15], [132, 70, -4], [208, 72, 15],
  [118, 102, -10], [182, 102, 10],
] as const;
const HEART = { x: 170, y: 70 };

export default function Gate({ next }: SceneProps) {
  const [misses, setMisses] = useState(0);
  const [missText, setMissText] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [open]);

  // Whichever comes first: time spent looking, or wrong taps.
  const hintLevel = Math.max(
    seconds >= 40 ? 3 : seconds >= 25 ? 2 : seconds >= 12 ? 1 : 0,
    misses >= 8 ? 3 : misses >= 5 ? 2 : misses >= 2 ? 1 : 0,
  );

  const miss = () => {
    buzz(8);
    setMisses((m) => m + 1);
    setMissText(GATE.misses[misses % GATE.misses.length]);
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-5 pt-6">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-center">
        <h1 className="text-[34px] font-bold leading-none text-sp-deep">{GATE.title}</h1>
        <p className="mt-2 text-[16px] text-sp-seed/80">{GATE.body}</p>
      </motion.div>

      <div className="relative flex w-full items-end justify-center gap-3">
        <motion.button
          type="button"
          aria-label="capi"
          onClick={miss}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ ...SPRING, delay: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <Sticker src={STICKER.imup} alt="capi imut" size={150} tilt={-6} priority />
        </motion.button>
        <div className="mb-6 w-[150px]">
          <Pop id={misses}>
            <Bubble tail="left" className="text-[14px]">
              {missText ?? "tebak acu nyimpen kuncinya di mana hayoo"}
            </Bubble>
          </Pop>
        </div>
        <motion.button type="button" aria-label="hati" onClick={miss} whileTap={{ scale: 0.8 }} className="sp-float absolute -top-4 right-2 text-3xl">
          💌
        </motion.button>
        <motion.button type="button" aria-label="bintang" onClick={miss} whileTap={{ scale: 0.8 }} className="sp-float absolute -left-1 top-2 text-2xl [animation-delay:1s]">
          🌸
        </motion.button>
      </div>

      <motion.div
        initial={{ y: 60, opacity: 0, rotate: 8 }}
        animate={{ y: 0, opacity: 1, rotate: -3 }}
        transition={{ ...SPRING, delay: 0.5 }}
        className="relative w-full max-w-[320px]"
      >
        <svg viewBox="0 0 300 170" className="w-full drop-shadow-[0_12px_14px_rgb(201_48_63/0.3)]">
          <path d="M8 14 A142 142 0 0 0 292 14 Z" fill="#5FAE5B" onClick={miss} />
          <path d="M18 14 A132 132 0 0 0 282 14 Z" fill="#E9F7DC" onClick={miss} />
          <path d="M26 14 A124 124 0 0 0 274 14 Z" fill="#F0525F" onClick={miss} />
          <path d="M8 14 L292 14" stroke="#4C9A49" strokeWidth="4" strokeLinecap="round" />
          {SEEDS.map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx="4.5" ry="7.5" fill="#2A1A17" transform={`rotate(${r} ${x} ${y})`} onClick={miss} />
          ))}
          <g
            role="button"
            aria-label="biji hati"
            tabIndex={0}
            onClick={() => {
              buzz(20);
              setOpen(true);
            }}
            onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
            className="cursor-pointer outline-none"
          >
            {/* A wider invisible target than the seed, so a thumb can find it. */}
            <circle cx={HEART.x} cy={HEART.y} r="18" fill="transparent" />
            <g style={{ transformOrigin: `${HEART.x}px ${HEART.y}px`, transformBox: "view-box" }} className={hintLevel >= 3 ? "sp-hint-pulse" : undefined}>
              <path
                transform={`translate(${HEART.x - 7} ${HEART.y - 7}) scale(0.58)`}
                d="M12 21s-7.5-4.6-10-9.3C.3 8.3 2.2 4 6.2 4c2.3 0 3.8 1.3 4.8 2.8C12 5.3 13.5 4 15.8 4c4 0 5.9 4.3 4.2 7.7C19.5 16.4 12 21 12 21z"
                fill="#2A1A17"
              />
            </g>
          </g>
        </svg>
      </motion.div>

      <div className="mt-auto w-full space-y-3 text-center">
        <p className="text-[15px] text-sp-seed/75">{GATE.task}</p>
        <AnimatePresence>
          {hintLevel > 0 && (
            <motion.p
              key={hintLevel}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block rounded-full bg-sp-blush px-4 py-1.5 text-[14px] font-semibold text-sp-deep"
            >
              {GATE.hints[hintLevel - 1]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>{open && <Keypad onClose={() => setOpen(false)} onRight={next} />}</AnimatePresence>
    </div>
  );
}

function Keypad({ onClose, onRight }: { onClose: () => void; onRight: () => void }) {
  const [digits, setDigits] = useState("");
  const [state, setState] = useState<"idle" | "wrong" | "right">("idle");
  const [burst, setBurst] = useState(0);
  const shake = useAnimationControls();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const press = (k: string) => {
    if (state === "right") return;
    buzz(8);
    if (k === "del") return setDigits((d) => d.slice(0, -1));
    const d = (digits + k).slice(0, 4);
    setDigits(d);
    setState("idle");
    if (d.length < 4) return;
    if (d === SECRET_CODE) {
      setState("right");
      setBurst(Date.now());
      buzz([30, 40, 30, 40, 60]);
      timer.current = setTimeout(onRight, 1400);
    } else {
      setState("wrong");
      buzz([60, 40, 60]);
      shake.start({ x: [0, -12, 12, -8, 8, 0], transition: { duration: 0.4 } });
      timer.current = setTimeout(() => setDigits(""), 450);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-10 flex items-end justify-center bg-sp-seed/30 backdrop-blur-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-t-[36px] border-t-[10px] border-sp-rind bg-sp-cream px-6 pb-8 pt-5"
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-sp-seed/15" />
        <p className="text-center text-[17px] font-semibold text-sp-deep">ketemu! masukin kodenya 🔑</p>

        <motion.div animate={shake} className="my-5 flex justify-center gap-4">
          {Array.from({ length: 4 }, (_, i) => (
            <motion.span
              key={i}
              animate={{ scale: digits.length > i ? 1.15 : 1 }}
              transition={SPRING}
              className="text-3xl"
            >
              {state === "right" ? "❤️" : digits.length > i ? "🍉" : "⚪"}
            </motion.span>
          ))}
        </motion.div>

        <div className="h-6 text-center text-[15px] font-semibold">
          {state === "wrong" && <span className="text-sp-deep">{GATE.wrong}</span>}
          {state === "right" && <span className="text-sp-rind">{GATE.right}</span>}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"].map((k, i) =>
            k === "" ? (
              <span key={i} />
            ) : (
              <motion.button
                key={k}
                type="button"
                whileTap={{ scale: 0.88 }}
                onClick={() => press(k)}
                className="h-16 rounded-3xl bg-white text-2xl font-semibold text-sp-seed shadow-[0_4px_0_rgb(42_26_23/0.08)]"
              >
                {k === "del" ? "⌫" : k}
              </motion.button>
            ),
          )}
        </div>
        <Burst trigger={burst} count={22} spread={180} className="top-1/3" />
      </motion.div>
    </motion.div>
  );
}
