"use client";

import { motion } from "framer-motion";
import { Hand } from "lucide-react";
import type { Slide } from "@/app/seminar/lib/types";
import { Body, Frame, Item, Kicker, Stagger, Subtitle, Title, container, item, pad, rise } from "./Shared";

type S<L extends Slide["layout"]> = Extract<Slide, { layout: L }>;

/* ---------------------------------------------------------------------------
 * The pre-opening and the hand-raise breaks.
 *
 * These three run before the speaker has said anything of substance, or in the
 * gaps between heavy stretches. None of them carry a photo: the room should be
 * reading the words or looking at each other, not at a stock image.
 * ------------------------------------------------------------------------- */

/** Type scale for the question cloud. Weight in the cloud, not importance. */
const cloudSize = {
  lg: "text-[clamp(1.15rem,2.6vw,2.3rem)]",
  md: "text-[clamp(0.9rem,1.7vw,1.45rem)]",
  sm: "text-[clamp(0.75rem,1.2vw,1.05rem)]",
} as const;

/**
 * The questions the room walked in with, thrown up all at once.
 *
 * Laid out as a centred wrap rather than absolutely placed, so it survives any
 * aspect ratio the projector turns out to be. The small per-item tilt is what
 * stops it reading as a bullet list.
 */
export function CloudSlide({ s }: { s: S<"cloud"> }) {
  return (
    <Frame>
      <Stagger className={`flex h-full flex-col justify-center gap-7 ${pad}`}>
        <Item className="text-center">
          <Kicker>{s.kicker}</Kicker>
          <div className="mt-2">
            <Title>{s.title}</Title>
          </div>
        </Item>

        <motion.div variants={container} className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-4">
          {s.questions.map((q, i) => (
            <motion.span
              key={q.text}
              variants={item}
              style={{ rotate: `${((i % 5) - 2) * 0.9}deg` }}
              className={`${cloudSize[q.size]} leading-tight ${
                q.accent ? "font-bold text-seminar" : "font-medium text-neutral-400"
              }`}
            >
              {q.text}
            </motion.span>
          ))}
        </motion.div>

        <Item className="text-center">
          <p className="mx-auto max-w-3xl rounded-2xl bg-seminar-light px-5 py-3 text-[clamp(0.85rem,1.3vw,1.15rem)] font-semibold text-seminar-ink">
            {s.footer}
          </p>
        </Item>
      </Stagger>
    </Frame>
  );
}

/** The cloud narrowed to the one question the rest of the talk answers. */
export function FocusSlide({ s }: { s: S<"focus"> }) {
  return (
    <Frame>
      {/* Oversized punctuation, bled off the right edge. Decorative only. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[4vw] top-1/2 -translate-y-1/2 select-none font-bold leading-none text-seminar-light text-[40vw]"
      >
        ?
      </span>
      <Stagger className={`relative flex h-full max-w-5xl flex-col justify-center gap-7 ${pad}`}>
        <Item>
          <Kicker>{s.kicker}</Kicker>
        </Item>
        <Item>
          <p className="text-[clamp(1.8rem,4.8vw,4.2rem)] font-bold leading-[1.08] tracking-tight text-seminar">{s.question}</p>
        </Item>
        <Item>
          <Body className="max-w-3xl">{s.body}</Body>
        </Item>
        <Item>
          <p className="text-[clamp(0.95rem,1.6vw,1.35rem)] font-bold text-seminar-ink">{s.footer}</p>
        </Item>
      </Stagger>
    </Frame>
  );
}

/**
 * A hand-raise break: the room answers, then the slide answers back.
 *
 * These sit where the deck used to drop in a meme image. A poll does the same
 * job — it breaks the heavy stretch and wakes the room up — without shipping
 * someone else's picture on a public site.
 */
export function PollSlide({ s }: { s: S<"poll"> }) {
  return (
    <Frame>
      <Stagger className={`flex h-full flex-col justify-center gap-5 ${pad}`}>
        <Item>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-seminar-light text-seminar">
              <Hand className="h-5 w-5" />
            </span>
            <Kicker>{s.kicker}</Kicker>
          </div>
        </Item>
        <Item>
          <Title>{s.title}</Title>
        </Item>
        <Item>
          <Subtitle>{s.subtitle}</Subtitle>
        </Item>

        <motion.div variants={container} className="mt-1 grid grid-cols-1 gap-4 md:grid-cols-3">
          {s.options.map((o, i) => (
            <motion.div
              key={o.label}
              variants={rise}
              className="rounded-2xl border-2 border-seminar/15 bg-seminar-light/50 p-5"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-seminar/60">{String.fromCharCode(65 + i)}</p>
              <p className="mt-1 text-[clamp(1rem,1.7vw,1.5rem)] font-bold leading-tight text-seminar">{o.label}</p>
              <p className="mt-1 text-[clamp(0.8rem,1.15vw,1rem)] leading-snug text-neutral-600">{o.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Item>
          <p className="rounded-2xl bg-seminar px-5 py-3 text-[clamp(0.85rem,1.3vw,1.15rem)] font-semibold leading-snug text-white">
            {s.reveal}
          </p>
        </Item>
      </Stagger>
    </Frame>
  );
}
