"use client";

import { motion } from "framer-motion";
import Photo from "@/app/seminar/components/Photo";
import type { Slide } from "@/app/seminar/lib/types";
import { Body, Frame, Item, Kicker, Stagger, Subtitle, Title, container, item, pad, rise } from "./Shared";

type S<L extends Slide["layout"]> = Extract<Slide, { layout: L }>;

const fmt = (v: number, unit: string) => (unit.trim() === "%" ? v.toFixed(2).replace(".", ",") + "%" : `${v}${unit}`);

export function ChartSlide({ s }: { s: S<"chart"> }) {
  const max = Math.max(...s.bars.map((b) => b.value));
  return (
    <Frame>
      <div className="grid h-full grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
        <Stagger className={`flex flex-col justify-center gap-5 ${pad}`}>
          <Item>
            <Kicker>Fakta</Kicker>
          </Item>
          <Item>
            <Title>{s.title}</Title>
          </Item>
          <Item>
            <Subtitle>{s.subtitle}</Subtitle>
          </Item>
          <Item>
            <div className="space-y-1">
              {s.body.map((b) => (
                <Body key={b}>{b}</Body>
              ))}
            </div>
          </Item>
        </Stagger>
        {/* `min-w-0`: without it the longest axis label sets the column's
            min-content width and the whole card overflows off the slide. */}
        <div className={`flex min-w-0 items-end justify-center ${pad}`}>
          <div className="flex h-[52vh] w-full max-w-xl items-end gap-[5%] rounded-3xl bg-seminar-light/60 px-[6%] pb-6 pt-10">
            {s.bars.map((b, i) => (
              <div key={b.label} className="flex h-full min-w-0 flex-1 flex-col items-center gap-3">
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.12 }}
                  className={`text-[clamp(0.8rem,1.5vw,1.6rem)] font-bold ${b.highlight ? "text-seminar" : "text-seminar-ink"}`}
                >
                  {fmt(b.value, s.unit)}
                </motion.span>
                {/*
                  The bar needs a track of its own. When it sat directly in the
                  column, its percentage height resolved against the full column
                  and every bar then overflowed and was shrunk back to the same
                  leftover space — three identical bars, whatever the numbers.
                  The track takes what is left over from the value and the
                  label; the bar is positioned against it rather than being
                  another flex item, because a flexed box counts as an
                  indefinite height and a percentage child of one collapses.
                */}
                <div className="relative w-full flex-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(b.value / max) * 100}%` }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute inset-x-0 bottom-0 mx-auto max-w-[110px] rounded-t-2xl ${b.highlight ? "bg-seminar" : "bg-seminar/35"}`}
                  />
                </div>
                <span className="min-h-10 text-center text-xs font-semibold leading-tight text-neutral-600 md:text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function BuildingSlide({ s }: { s: S<"building"> }) {
  return (
    <Frame>
      <div className="grid h-full grid-cols-1 md:grid-cols-[1fr_1fr]">
        <Stagger className={`flex flex-col justify-center gap-5 ${pad}`}>
          <Item>
            <Kicker>Ide utama</Kicker>
          </Item>
          <Item>
            <Title>{s.title}</Title>
          </Item>
          <Item>
            <Subtitle>{s.subtitle}</Subtitle>
          </Item>
          <Item>
            <Body>{s.body}</Body>
          </Item>
        </Stagger>
        <div className="relative hidden md:block">
          <motion.div variants={rise} initial="hidden" animate="show" className="absolute inset-y-[8vh] left-0 right-[6vw]">
            <Photo photo={s.photo} className="h-full w-full rounded-l-[2.5rem]" kenburns sizes="45vw" />
            <div className="absolute inset-0 rounded-l-[2.5rem] bg-gradient-to-t from-seminar-dark/85 via-seminar-dark/30 to-transparent" />
            {/* lapisan bangunan naik dari bawah: fondasi dulu, baru atap */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="absolute inset-x-[8%] bottom-[8%] flex flex-col-reverse gap-2"
            >
              {[...s.layers].reverse().map((l, i) => (
                <motion.div
                  key={l.label}
                  variants={item}
                  className="flex items-center justify-between rounded-xl px-5 py-3 text-white shadow-lg backdrop-blur-sm"
                  style={{ background: `rgba(7, 63, 178, ${0.9 - i * 0.14})`, marginInline: `${i * 3}%` }}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest opacity-80">{l.label}</span>
                  <span className="text-lg font-bold md:text-xl">{l.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Frame>
  );
}
