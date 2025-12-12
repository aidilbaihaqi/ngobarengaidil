"use client";

import SocialIcons from "./components/Button/SocialIcons";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGridThirdDemo } from "./components/Layout/BentoGrid";
import Main from "./components/Layout/Main";
import { FlipWordsDemo } from "./components/Text/FlipWords";
import ClickSpark from "./components/ui/ClickSpark";

import { cn } from "@/app/lib/utils";
import React from "react";

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
          <div className="w-full max-w-5xl mb-10 mx-auto px-4 pt-10 sm:px-6 lg:px-8">
            {/* About */}
            <div className="text-center" role="main" aria-label="About section">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative w-40 h-40 md:w-52 mx-auto mb-5 md:h-52 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                    <Image
                      src="/image/aidilbaihaqi.webp"
                      alt="Aidil Baihaqi - Software Engineer, Content Creator, IT Mentor"
                      fill
                      sizes="(max-width: 768px) 160px, 208px"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-110"
                      priority
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
              <FlipWordsDemo />
              <p className="text-sm text-gray-600 dark:text-neutral-400 mt-3 leading-6 text-center">
                Passionate and results-driven programmer with strong experience in software engineering,specializing in backend development, data-driven systems, and AI-based applications.Experienced in building scalable web systems, collaborating in multidisciplinary teams, and delivering high-quality projects for academic, community, and organizational needs.Proficient in modern development tools and agile workflows to solve complex problems efficiently.
              </p>
              <SocialIcons />
            </div>
            {/* End About */}

            <div className="border-t dark:border-gray-400 dark:border-opacity-10 mt-10"></div>

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
            <BentoGridThirdDemo />
            {/* End Feature Section */}
          </div>
        </main>
      </Main>
    </ClickSpark>
  );
}
