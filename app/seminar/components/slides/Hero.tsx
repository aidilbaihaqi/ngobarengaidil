"use client";

import { motion } from "framer-motion";
import { AtSign, Globe, Linkedin, MessageCircleQuestion } from "lucide-react";
import Photo from "@/app/seminar/components/Photo";
import type { Slide } from "@/app/seminar/lib/types";
import { Body, Frame, Item, Kicker, Stagger, Subtitle, container, item, pad, rise } from "./Shared";

type S<L extends Slide["layout"]> = Extract<Slide, { layout: L }>;

export function CoverSlide({ s }: { s: S<"cover"> }) {
  return (
    <Frame>
      <div className="grid h-full grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        <Stagger className={`flex flex-col justify-center gap-6 ${pad}`}>
          <Item>
            <Kicker>{s.kicker}</Kicker>
          </Item>
          <Item>
            <h1 className="text-[clamp(2.2rem,5vw,4.8rem)] font-bold uppercase leading-[1.02] tracking-tight text-seminar-ink">
              {s.title[0]}
              <br />
              <span className="text-seminar">{s.title[1]}</span>
            </h1>
          </Item>
          <Item>
            <Body>{s.subtitle}</Body>
          </Item>
          <Item>
            <p className="text-xs text-neutral-400">Tekan → untuk mulai · N catatan · F layar penuh</p>
          </Item>
        </Stagger>
        <motion.div variants={rise} initial="hidden" animate="show" className="relative hidden md:block">
          <Photo photo={s.photo} className="absolute inset-y-[8vh] left-0 right-[6vw] rounded-l-[2.5rem]" kenburns priority sizes="45vw" />
        </motion.div>
      </div>
    </Frame>
  );
}

export function ClosingSlide({ s }: { s: S<"closing"> }) {
  return (
    <Frame>
      <Photo photo={s.photo} className="absolute inset-0" kenburns credit={false} sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-seminar-dark/90 via-seminar-dark/60 to-seminar-dark/30" />
      <Stagger className={`relative flex h-full flex-col items-center justify-center text-center ${pad}`}>
        <Item>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">{s.subtitle}</p>
        </Item>
        <Item>
          <h2 className="text-[clamp(2.8rem,8vw,7.5rem)] font-bold leading-[1] tracking-tight text-white">
            {s.title[0]}
            <br />
            {s.title[1]}
          </h2>
        </Item>
      </Stagger>
      <p className="absolute bottom-3 right-4 text-[10px] text-white/50">{s.photo.by} · Unsplash</p>
    </Frame>
  );
}

export function NumberSlide({ s }: { s: S<"number"> }) {
  return (
    <Frame>
      <Photo photo={s.photo} className="absolute inset-0" kenburns credit={false} sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-seminar-dark/95 via-seminar-dark/80 to-seminar-dark/40" />
      <Stagger className={`relative flex h-full max-w-4xl flex-col justify-center gap-5 ${pad}`}>
        <Item>
          <Kicker>
            <span className="text-amber-300">Fakta mengejutkan</span>
          </Kicker>
        </Item>
        <Item>
          <p className="whitespace-nowrap text-[clamp(3.2rem,10vw,9.5rem)] font-bold leading-[0.95] tracking-tight text-white">{s.number}</p>
        </Item>
        <Item>
          <Subtitle light>{s.title}</Subtitle>
        </Item>
        <Item>
          <div className="mt-2 space-y-1 border-l-2 border-amber-300/70 pl-4">
            {s.body.map((b) => (
              <Body key={b} light>
                {b}
              </Body>
            ))}
          </div>
        </Item>
      </Stagger>
      <p className="absolute bottom-3 right-4 text-[10px] text-white/50">{s.photo.by} · Unsplash</p>
    </Frame>
  );
}

export function QuoteSlide({ s }: { s: S<"quote"> }) {
  return (
    <Frame>
      <Photo photo={s.photo} className="absolute inset-0" kenburns credit={false} sizes="100vw" />
      <div className="absolute inset-0 bg-seminar-dark/75" />
      <Stagger className={`relative flex h-full max-w-5xl flex-col justify-center gap-8 ${pad}`}>
        <Item>
          <Kicker>
            <span className="text-amber-300">{s.kicker}</span>
          </Kicker>
        </Item>
        <Item>
          <p className="text-[clamp(1.6rem,3.6vw,3.2rem)] font-semibold leading-tight text-white">{s.quote}</p>
        </Item>
        <Item>
          <Body light className="max-w-2xl">
            {s.body}
          </Body>
        </Item>
      </Stagger>
      <p className="absolute bottom-3 right-4 text-[10px] text-white/50">{s.photo.by} · Unsplash</p>
    </Frame>
  );
}

const contactIcon = (c: string) => (c.startsWith("@") ? AtSign : c.toLowerCase().includes("linkedin") ? Linkedin : Globe);

export function QnaSlide({ s }: { s: S<"qna"> }) {
  return (
    <Frame>
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <Stagger className={`flex flex-col justify-center gap-6 ${pad}`}>
          <Item>
            <MessageCircleQuestion className="h-12 w-12 text-seminar" />
          </Item>
          <Item>
            <h2 className="text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-[1.05] text-seminar">{s.title}</h2>
          </Item>
          <Item>
            <Body>{s.subtitle}</Body>
          </Item>
          <motion.ul variants={container} className="mt-2 space-y-2">
            {s.contacts.map((c) => {
              const Icon = contactIcon(c);
              return (
                <motion.li key={c} variants={item} className="flex items-center gap-3 text-base font-semibold text-seminar-ink">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-seminar-light text-seminar">
                    <Icon className="h-4 w-4" />
                  </span>
                  {c}
                </motion.li>
              );
            })}
          </motion.ul>
        </Stagger>
        <motion.div variants={rise} initial="hidden" animate="show" className="hidden md:block">
          <Photo photo={s.photo} className="h-full w-full" kenburns sizes="50vw" />
        </motion.div>
      </div>
    </Frame>
  );
}
