"use client";

import { motion } from "framer-motion";
import { Globe, Instagram, Linkedin } from "lucide-react";
import type { Slide } from "@/app/seminar/lib/types";
import { Frame, Item, Kicker, Stagger, Subtitle, Title, container, item, pad, rise } from "./Shared";

type S<L extends Slide["layout"]> = Extract<Slide, { layout: L }>;

/* ---------------------------------------------------------------------------
 * Where the speaker's own record goes on the wall.
 *
 * Both slides here carry real, local assets rather than stock photography —
 * the point of each is that this actually happened, and that the audience can
 * do the same thing starting tonight.
 * ------------------------------------------------------------------------- */

/**
 * Placement for the scattered wall, as percentages of the stage.
 *
 * Kept in the component, not the slide data: which photos go up is content,
 * where they land is layout. Every position hugs an edge so the middle stays
 * clear for the text — `x`/`y` are the centre of the card.
 */
const scatter = [
  { x: 12, y: 16, w: 21, rot: -6 },
  { x: 36, y: 9, w: 18, rot: 4 },
  { x: 63, y: 11, w: 20, rot: -3 },
  { x: 88, y: 22, w: 19, rot: 6 },
  { x: 7, y: 50, w: 17, rot: 3 },
  { x: 93, y: 55, w: 18, rot: -5 },
  { x: 15, y: 84, w: 20, rot: -4 },
  { x: 44, y: 92, w: 18, rot: 5 },
  { x: 74, y: 86, w: 21, rot: -3 },
];

/**
 * The podium story, told against the whole record instead of one stock photo.
 *
 * The wall goes up first and the words land on top of it, so the room has
 * already read "this person kept showing up" before the speaker says a line.
 */
export function GallerySlide({ s }: { s: S<"gallery"> }) {
  return (
    <Frame className="bg-seminar-dark">
      {s.shots.slice(0, scatter.length).map((shot, i) => {
        const at = scatter[i];
        return (
          <motion.div
            key={shot.src}
            initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: at.rot }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              left: `${at.x}%`,
              top: `${at.y}%`,
              width: `${at.w}%`,
              translate: "-50% -50%",
            }}
            className="absolute aspect-[4/3] overflow-hidden rounded-xl bg-seminar/40 shadow-2xl shadow-black/40 ring-1 ring-white/20"
          >
            {/*
              Plain <img>, like the rest of the deck: the wall is preloaded by
              exact URL two slides ahead (see Deck), which only works if the
              browser asks for the same URL it was warmed with. Going through
              the image optimizer would change the URL per viewport and per DPR.
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot.src} alt={shot.alt} loading="eager" decoding="async" className="h-full w-full object-cover" />
          </motion.div>
        );
      })}

      {/*
        Reading scrim. The wall is photographs of unknown brightness, so the
        middle is darkened on its own layer rather than trusting any one photo
        to be dark enough behind the type.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_58%_48%_at_50%_50%,rgba(5,46,130,0.97)_38%,rgba(5,46,130,0.82)_62%,rgba(5,46,130,0.35)_100%)]"
      />

      <Stagger className={`relative flex h-full flex-col items-center justify-center text-center ${pad}`}>
        <Item>
          <Kicker>
            <span className="text-amber-300">{s.kicker}</span>
          </Kicker>
        </Item>
        <Item className="mt-5 max-w-4xl">
          <p className="text-[clamp(1.25rem,2.9vw,2.6rem)] font-semibold leading-tight text-white">{s.quote}</p>
        </Item>
        <Item className="mt-5 max-w-2xl">
          <p className="text-[clamp(0.85rem,1.4vw,1.2rem)] leading-relaxed text-white/80">{s.body}</p>
        </Item>
        <Item className="mt-6">
          <p className="rounded-full bg-white/10 px-5 py-2 text-[clamp(0.7rem,1.1vw,0.95rem)] font-semibold uppercase tracking-widest text-amber-300 ring-1 ring-white/20">
            {s.footer}
          </p>
        </Item>
      </Stagger>
    </Frame>
  );
}

const channelIcon = { social: Instagram, linkedin: Linkedin, web: Globe };

/** Three places to put the work, ordered by how little effort it takes to start. */
export function ChannelsSlide({ s }: { s: S<"channels"> }) {
  return (
    <Frame>
      <Stagger className={`flex h-full flex-col justify-center gap-5 ${pad}`}>
        <Item>
          <Kicker>{s.kicker}</Kicker>
        </Item>
        <Item>
          <Title>{s.title}</Title>
        </Item>
        <Item>
          <Subtitle>{s.subtitle}</Subtitle>
        </Item>

        <motion.div variants={container} className="mt-1 grid grid-cols-1 gap-4 md:grid-cols-3">
          {s.channels.map((c) => {
            const Icon = channelIcon[c.icon];
            return (
              <motion.div
                key={c.title}
                variants={rise}
                className="flex flex-col rounded-2xl bg-seminar-light/50 p-5 ring-1 ring-seminar/15"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-seminar text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-seminar/70">{c.effort}</span>
                </div>
                <p className="mt-3 text-[clamp(1rem,1.7vw,1.5rem)] font-bold leading-tight text-seminar">{c.title}</p>
                <p className="mt-1 grow text-[clamp(0.78rem,1.1vw,1rem)] leading-snug text-neutral-600">{c.text}</p>
                <p className="mt-3 border-t border-seminar/15 pt-3 text-[clamp(0.78rem,1.1vw,1rem)] font-bold leading-snug text-seminar-ink">
                  {c.action}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={item}>
          <p className="rounded-2xl bg-seminar px-5 py-3 text-[clamp(0.85rem,1.3vw,1.15rem)] font-semibold leading-snug text-white">
            {s.footer}
          </p>
        </motion.div>
      </Stagger>
    </Frame>
  );
}
