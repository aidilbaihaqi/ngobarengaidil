"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, GraduationCap, Globe, Medal, School, UserRound } from "lucide-react";
import Photo, { LocalPhoto } from "@/app/seminar/components/Photo";
import type { Slide } from "@/app/seminar/lib/types";
import { Body, Frame, Item, Kicker, Stagger, Subtitle, Title, container, item, pad, rise } from "./Shared";

type S<L extends Slide["layout"]> = Extract<Slide, { layout: L }>;

const icons = { school: School, campus: GraduationCap, medal: Medal, globe: Globe, scholarship: Award };

export function IntroSlide({ s }: { s: S<"intro"> }) {
  return (
    <Frame>
      <div className="grid h-full grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">
        <Stagger className={`flex flex-col justify-center gap-6 ${pad}`}>
          <Item>
            <Title>{s.title}</Title>
          </Item>
          <motion.ul variants={container} className="space-y-3">
            {s.items.map((it) => {
              const Icon = icons[it.icon];
              return (
                <motion.li key={it.text} variants={item} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-seminar-light text-seminar">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[clamp(0.95rem,1.55vw,1.35rem)] font-medium text-seminar-ink">{it.text}</span>
                </motion.li>
              );
            })}
          </motion.ul>
          <Item>
            <Body className="max-w-xl italic">{s.body}</Body>
          </Item>
        </Stagger>
        <motion.div variants={rise} initial="hidden" animate="show" className="hidden items-center justify-center md:flex">
          <LocalPhoto
            src="/image-optimized/aidilbaihaqi.webp"
            alt="Aidil Baihaqi"
            className="aspect-[4/5] w-[70%] rounded-[2rem] shadow-2xl shadow-seminar/20"
            fallback={
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-seminar to-seminar-dark text-white">
                <UserRound className="h-16 w-16 opacity-80" />
                <p className="text-sm font-semibold opacity-80">Foto: public/image-optimized/aidilbaihaqi.webp</p>
              </div>
            }
          />
        </motion.div>
      </div>
    </Frame>
  );
}

export function SplitSlide({ s }: { s: S<"split"> }) {
  const photoLeft = s.side === "left";
  const text = (
    <Stagger className={`flex flex-col justify-center gap-5 ${pad}`}>
      <Item>
        <Title>{s.title}</Title>
      </Item>
      {s.subtitle && (
        <Item>
          <Subtitle>{s.subtitle}</Subtitle>
        </Item>
      )}
      <motion.ul variants={container} className="mt-1 space-y-3">
        {s.body.map((b) => (
          <motion.li key={b} variants={item} className="flex items-start gap-3">
            {s.check && <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-seminar" />}
            <span className="text-[clamp(0.95rem,1.55vw,1.35rem)] leading-snug text-neutral-800">{b}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Stagger>
  );
  const photo = (
    <motion.div variants={rise} initial="hidden" animate="show" className="relative hidden md:block">
      <Photo photo={s.photo} className={`absolute inset-y-[8vh] ${photoLeft ? "left-[6vw] right-0 rounded-r-[2.5rem]" : "left-0 right-[6vw] rounded-l-[2.5rem]"}`} kenburns sizes="45vw" />
    </motion.div>
  );
  return (
    <Frame>
      <div className={`grid h-full grid-cols-1 ${photoLeft ? "md:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[1.1fr_0.9fr]"}`}>
        {photoLeft ? photo : text}
        {photoLeft ? text : photo}
      </div>
    </Frame>
  );
}

export function CardsSlide({ s }: { s: S<"cards"> }) {
  return (
    <Frame>
      <Stagger className={`flex h-full flex-col justify-center gap-6 ${pad}`}>
        <Item className="text-center">
          <Title>{s.title}</Title>
          {s.subtitle && (
            <div className="mt-2">
              <Subtitle>{s.subtitle}</Subtitle>
            </div>
          )}
        </Item>
        <motion.div variants={container} className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {s.cards.map((c) => (
            <motion.div key={c.title} variants={rise} className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-seminar/10 ring-1 ring-seminar/10">
              <Photo photo={c.photo} className="aspect-[16/10] w-full" sizes="30vw" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-seminar md:text-xl">{c.title}</h3>
                <p className="mt-1 text-sm leading-snug text-neutral-700 md:text-base">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {s.footer && (
          <Item>
            <p className="mx-auto max-w-4xl rounded-2xl bg-seminar-light px-5 py-3 text-center text-[clamp(0.9rem,1.3vw,1.15rem)] font-medium text-seminar-ink">{s.footer}</p>
          </Item>
        )}
      </Stagger>
    </Frame>
  );
}

export function StepsSlide({ s }: { s: S<"steps"> }) {
  return (
    <Frame>
      <div className="grid h-full grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
        <Stagger className={`flex flex-col justify-center gap-5 ${pad}`}>
          <Item>
            <Title>{s.title}</Title>
          </Item>
          <Item>
            <Subtitle>{s.subtitle}</Subtitle>
          </Item>
          <motion.ol variants={container} className="mt-2 space-y-3">
            {s.steps.map((st, i) => (
              <motion.li key={st.label + st.title} variants={item} className="flex items-start gap-4">
                <span
                  className="mt-0.5 grid h-10 min-w-[4.5rem] shrink-0 place-items-center rounded-full px-3 text-xs font-bold text-white"
                  style={{ background: `hsl(222 92% ${52 - i * 7}%)` }}
                >
                  {st.label}
                </span>
                <div>
                  <p className="text-[clamp(1rem,1.6vw,1.35rem)] font-bold text-seminar-ink">{st.title}</p>
                  <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] text-neutral-600">{st.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </Stagger>
        <motion.div variants={rise} initial="hidden" animate="show" className="relative hidden md:block">
          <Photo photo={s.photo} className="absolute inset-y-[8vh] left-0 right-[6vw] rounded-l-[2.5rem]" kenburns sizes="40vw" />
        </motion.div>
      </div>
    </Frame>
  );
}

export function CompareSlide({ s }: { s: S<"compare"> }) {
  return (
    <Frame>
      <div className="grid h-full grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
        <Stagger className={`flex flex-col justify-center gap-6 ${pad}`}>
          <Item>
            <Title>{s.title}</Title>
          </Item>
          <Item>
            <Subtitle>{s.subtitle}</Subtitle>
          </Item>
          <Item>
            <div className="flex items-center gap-4">
              <div className="flex-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center text-[clamp(0.95rem,1.4vw,1.25rem)] text-neutral-500 line-through decoration-2">{s.left}</div>
              <span className="text-4xl font-bold text-seminar">&lt;</span>
              <div className="flex-1 rounded-2xl border-2 border-seminar bg-seminar-light p-5 text-center text-[clamp(0.95rem,1.4vw,1.25rem)] font-bold text-seminar">{s.right}</div>
            </div>
          </Item>
          <Item>
            <p className="text-[clamp(1rem,1.6vw,1.4rem)] font-bold text-seminar">{s.verdict}</p>
          </Item>
        </Stagger>
        <motion.div variants={rise} initial="hidden" animate="show" className="relative hidden md:block">
          <Photo photo={s.photo} className="absolute inset-y-[8vh] left-0 right-[6vw] rounded-l-[2.5rem]" kenburns sizes="40vw" />
        </motion.div>
      </div>
    </Frame>
  );
}
