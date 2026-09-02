"use client";

import SocialIcons from "./components/Button/SocialIcons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Main from "./components/Layout/Main";
import { LayoutTextFlip } from "./components/ui/layout-text-flip";

import React, { Suspense } from "react";

// Lazy load heavy components
const ClickSpark = dynamic(() => import("./components/ui/ClickSpark"), {
  ssr: false,
  loading: () => <div className="contents" />,
});

const HeroParallaxProjects = dynamic(
  () => import("./components/Projects/HeroParallaxProjects"),
  {
    ssr: false,
    loading: () => <div className="h-[220vh] md:h-[300vh]" aria-hidden="true" />,
  }
);

const BentoGridThirdDemo = dynamic(
  () => import("./components/Layout/BentoGrid").then((mod) => mod.BentoGridThirdDemo),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-64 bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse ${i === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            />
          ))}
        </div>
      </div>
    ),
  }
);

// The terms the headline plate cycles through. Each one has to close the
// sentence "I build ___ to digitize your business." on its own.
const buildWords = [
  "AI solutions",
  "websites",
  "automations",
  "internal tools",
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
      sparkColor="#3b82f6"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      easing="ease-out"
    >
      <Main>
        {/* Main Content */}
        <main id="content">
          <div className="w-full max-w-5xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            {/* Hero */}
            <section
              aria-label="Introduction"
              className="text-center lg:text-left"
            >
              <motion.p
                custom={0}
                initial="hidden"
                animate="show"
                variants={rise}
                className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-neutral-500"
              >
                Aidil Baihaqi · AI · Web Development · Business Digitalization
              </motion.p>

              <div className="mt-6 grid gap-x-12 gap-y-10 lg:grid-cols-[1fr_18rem] lg:items-start">
                <div>
                  <motion.h1
                    custom={1}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white"
                  >
                    {/* The stable sentence, for crawlers and screen readers. */}
                    <span className="sr-only">
                      I build AI solutions, websites, automations, and internal
                      tools to digitize your business.
                    </span>

                    {/* The visual line. Hidden from AT so the sentence above
                        is not read twice. */}
                    <span aria-hidden="true">
                      <LayoutTextFlip
                        className="items-center lg:items-start"
                        text="I build"
                        words={buildWords}
                        trailing="to digitize your business."
                      />
                    </span>
                  </motion.h1>

                  <motion.p
                    custom={2}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="mt-7 max-w-[54ch] mx-auto lg:mx-0 text-base md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed"
                  >
                    Web development, applied AI, and workflow automation — turning
                    manual, offline processes into systems that run on their own.
                  </motion.p>

                  <motion.p
                    custom={3}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="mt-4 max-w-[54ch] mx-auto lg:mx-0 text-sm text-gray-600 dark:text-neutral-400 leading-6"
                  >
                    From a company profile site to a custom dashboard, an AI
                    assistant, or the system that ties them together. I also
                    mentor developers and hand over the source code, so your team
                    can keep building after I hand it off.
                  </motion.p>

                  <motion.div
                    custom={4}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                    className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
                  >
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      See the work
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:border-gray-400 dark:border-white/15 dark:text-neutral-300 dark:hover:border-white/30 transition-all duration-300"
                    >
                      Start a conversation
                    </Link>
                  </motion.div>

                  <motion.div
                    custom={5}
                    initial="hidden"
                    animate="show"
                    variants={rise}
                  >
                    <SocialIcons className="justify-center lg:justify-start mt-8" />
                  </motion.div>
                </div>

                {/* Portrait, in the gradient ring this site uses for it */}
                <motion.figure
                  custom={2}
                  initial="hidden"
                  animate="show"
                  variants={rise}
                  className="order-first w-56 max-w-full mx-auto sm:w-64 lg:order-none lg:mx-0 lg:w-full lg:max-w-[18rem]"
                >
                  <div className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[0.85rem] bg-white dark:bg-gray-900">
                      <Image
                        src="/image-optimized/me.webp"
                        alt="Aidil Baihaqi - Full Stack AI Engineer"
                        fill
                        sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                        style={{ objectFit: 'cover' }}
                        priority
                        quality={80}
                        fetchPriority="high"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-neutral-500">
                    <span className="font-medium text-gray-700 dark:text-neutral-300">
                      Aidil Baihaqi
                    </span>{" "}
                    — full-stack engineer and IT mentor, building AI, websites,
                    and digitalization for growing businesses.
                  </figcaption>
                </motion.figure>
              </div>
            </section>
            {/* End Hero */}
          </div>

          {/* Interactive Parallax Projects */}
          <div className="mt-16 md:mt-28">
            <HeroParallaxProjects />
          </div>

          <div className="w-full max-w-5xl mb-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t dark:border-gray-400 dark:border-opacity-10"></div>

            {/* Feature Section */}
            <div className="mt-10 text-center" role="region" aria-label="Services section">
              <div className="mb-5">
                <h4 className="text-3xl md:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                  What Can I Do For You
                </h4>

                <p className="text-sm text-gray-600 dark:text-neutral-400 leading-6 text-center">
                  Some services or products that I can offer to you.
                </p>
              </div>
            </div>
            <Suspense fallback={
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-64 bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse ${i === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                    />
                  ))}
                </div>
              </div>
            }>
              <BentoGridThirdDemo />
            </Suspense>
            {/* End Feature Section */}
          </div>
        </main>
      </Main>
    </ClickSpark>
  );
}
