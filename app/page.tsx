"use client";

import SocialIcons from "./components/Button/SocialIcons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Main from "./components/Layout/Main";
import LadderRail from "./components/Layout/LadderRail";

import React, { Suspense } from "react";

const ClickSpark = dynamic(() => import("./components/ui/ClickSpark"), {
  ssr: false,
  loading: () => <div className="contents" />,
});

const HeroParallaxProjects = dynamic(
  () => import("./components/Projects/HeroParallaxProjects"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[220vh] md:h-[300vh]" aria-hidden="true" />
    ),
  },
);

const BentoGridThirdDemo = dynamic(
  () =>
    import("./components/Layout/BentoGrid").then(
      (mod) => mod.BentoGridThirdDemo,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-64 animate-pulse rounded-lg bg-ground-deep ${
                i === 4 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            />
          ))}
        </div>
      </div>
    ),
  },
);

const stops = [
  { id: "overview", label: "Overview" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
];

// One orchestrated load: the hero sets in top-to-bottom, then it is done.
const rise = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1] as const,
    },
  }),
};

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#00A870"
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={450}
      easing="ease-out"
    >
      <Main>
        <LadderRail stops={stops} />

        <main id="content">
          {/* ---------------- Overview ---------------- */}
          <section
            id="overview"
            aria-label="Overview"
            className="mx-auto w-full max-w-5xl scroll-mt-28 px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20"
          >
            {/* FASTA-style header line: the record this page describes */}
            <motion.p
              custom={0}
              initial="hidden"
              animate="show"
              variants={rise}
              className="eyebrow"
            >
              &gt; aidil_baihaqi · full-stack ai · bioinformatics · mentoring
            </motion.p>

            <div className="mt-6 grid gap-x-12 gap-y-10 lg:grid-cols-[1fr_15rem] lg:items-start">
              <div>
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="show"
                  variants={rise}
                  className="max-w-[19ch] text-display font-medium tracking-tightest text-ink"
                >
                  I build AI systems for biology and medicine, and teach people
                  to build them too.
                </motion.h1>

                <motion.p
                  custom={2}
                  initial="hidden"
                  animate="show"
                  variants={rise}
                  className="mt-7 max-w-[54ch] text-lead text-ink-soft"
                >
                  Full-stack engineering, applied machine learning, and research
                  at the point where software meets the life sciences.
                </motion.p>

                <motion.p
                  custom={3}
                  initial="hidden"
                  animate="show"
                  variants={rise}
                  className="mt-4 max-w-[54ch] text-body text-muted"
                >
                  I also mentor developers and support academic work &mdash;
                  thesis projects, reports, and data analysis. If you need
                  something built, learned, or shipped, that&apos;s the work.
                </motion.p>

                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="show"
                  variants={rise}
                  className="mt-9 flex flex-wrap items-center gap-3"
                >
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-x-2 rounded-md bg-ink px-5 py-3 font-mono text-micro uppercase tracking-label text-ground transition-colors duration-200 hover:bg-signal-ink focus:outline-none"
                  >
                    See the work
                    <span
                      aria-hidden="true"
                      className="ladder-band block h-px w-4 bg-ground group-hover:w-6"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md border border-rule px-5 py-3 font-mono text-micro uppercase tracking-label text-ink transition-colors duration-200 hover:border-signal hover:text-signal-ink focus:outline-none"
                  >
                    Start a conversation
                  </Link>
                </motion.div>

                <motion.div
                  custom={5}
                  initial="hidden"
                  animate="show"
                  variants={rise}
                  className="mt-9"
                >
                  <SocialIcons />
                </motion.div>
              </div>

              {/* Figure plate: the photo presented the way a paper presents one */}
              <motion.figure
                custom={2}
                initial="hidden"
                animate="show"
                variants={rise}
                className="max-w-[13rem] lg:max-w-[15rem]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-rule bg-surface">
                  <Image
                    src="/image-optimized/me.webp"
                    alt="Aidil Baihaqi"
                    fill
                    sizes="240px"
                    style={{ objectFit: "cover" }}
                    priority
                    quality={82}
                    fetchPriority="high"
                  />
                </div>
                <figcaption className="figcaption mt-3 leading-relaxed">
                  <span className="text-signal-ink">Fig. 1</span> &mdash; Aidil
                  Baihaqi. Full-stack AI engineer, bioinformatics and medical
                  researcher, IT mentor.
                </figcaption>
              </motion.figure>
            </div>
          </section>

          {/* ---------------- Work ---------------- */}
          <section
            id="work"
            aria-label="Selected work"
            className="mt-20 scroll-mt-28 md:mt-28"
          >
            <HeroParallaxProjects />
          </section>

          {/* ---------------- Services ---------------- */}
          <section
            id="services"
            aria-label="Services"
            className="mx-auto w-full max-w-5xl scroll-mt-28 px-4 pb-16 sm:px-6 lg:px-8"
          >
            <div className="border-t border-rule pt-12">
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 max-w-[22ch] text-headline font-medium tracking-tightest text-ink">
                What I can take on
              </h2>
              <p className="mt-4 max-w-[54ch] text-body text-muted">
                Engineering, research, and teaching &mdash; usually some
                combination of the three.
              </p>
            </div>

            <div className="mt-10">
              <Suspense
                fallback={
                  <div className="mx-auto w-full max-w-7xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`h-64 animate-pulse rounded-lg bg-ground-deep ${
                            i === 4 ? "sm:col-span-2 lg:col-span-2" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                }
              >
                <BentoGridThirdDemo />
              </Suspense>
            </div>
          </section>
        </main>
      </Main>
    </ClickSpark>
  );
}
