"use client";
import { cn } from "@/app/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoGridThirdDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[16rem] sm:auto-rows-[18rem] lg:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2 overflow-hidden"
    >
      {/* Mentor Section */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black max-w-full"
      >
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[10px]">👨‍🏫</span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate block">Mentor</span>
        </div>
      </motion.div>

      {/* Student Response */}
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-lg border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-4/5 ml-auto bg-white dark:bg-black max-w-full"
      >
        <div className="flex-1 text-right min-w-0">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate block">Student</span>
        </div>
        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[10px]">👨‍🎓</span>
        </div>
      </motion.div>

      {/* Code Example */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-lg border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black max-w-full"
      >
        <div className="h-5 w-5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[10px]">💻</span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate block">Code</span>
        </div>
        <div className="flex space-x-1 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 5,
      rotate: 2,
      transition: {
        duration: 0.3,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: -5,
      rotate: -2,
      transition: {
        duration: 0.3,
      },
    },
  };
  const arr = new Array(4).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2 overflow-hidden"
    >
      {/* Document Header */}
      <motion.div 
        variants={variants}
        className="flex items-center space-x-2 mb-1"
      >
        <div className="h-5 w-5 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px]">📄</span>
        </div>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">Assignment</span>
      </motion.div>

      {/* Document Lines */}
      <motion.div 
        variants={variantsSecond}
        className="flex-1 space-y-1"
      >
        {arr.map((_, i) => (
          <motion.div
            key={"skelenton-two" + i}
            style={{
              maxWidth: Math.random() * (100 - 60) + 60 + "%",
            }}
            className={`flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] items-center bg-white dark:bg-black h-2 ${
              i === 0 ? "bg-blue-100 dark:bg-blue-900/20" : 
              i === 1 ? "bg-green-100 dark:bg-green-900/20" : 
              i === 2 ? "bg-yellow-100 dark:bg-yellow-900/20" : 
              "bg-gray-100 dark:bg-gray-900/20"
            }`}
          ></motion.div>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <motion.div className="flex items-center space-x-2 mt-1">
        <span className="text-[10px] text-gray-500 dark:text-gray-400 flex-shrink-0">75%</span>
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full min-w-0">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      y: 0,
      opacity: 0.8,
    },
    animate: {
      y: [-2, 2, -2],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };
  
  const codeVariants = {
    initial: {
      opacity: 0.6,
    },
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2 rounded-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Header */}
      <motion.div
        variants={variants}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2"
      >
        <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px] font-bold">💻</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-semibold truncate">Source Code Market</p>
          <p className="text-white/70 text-[10px] truncate">Premium code solutions</p>
        </div>
        <div className="h-5 w-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[8px]">✓</span>
        </div>
      </motion.div>

      {/* Code Snippets */}
      <motion.div
        variants={codeVariants}
        className="flex-1 bg-black/20 backdrop-blur-sm rounded-lg p-2 space-y-1 overflow-hidden"
      >
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
          <span className="text-white/60 text-[9px] ml-1 truncate">main.js</span>
        </div>
        
        <div className="space-y-0.5 overflow-hidden">
          <div className="flex items-center space-x-1 min-w-0">
            <span className="text-purple-300 text-[9px] flex-shrink-0">const</span>
            <span className="text-blue-300 text-[9px] flex-shrink-0">api</span>
            <span className="text-white/70 text-[9px] flex-shrink-0">=</span>
            <span className="text-green-300 text-[9px] truncate">'premium-code'</span>
          </div>
          <div className="flex items-center space-x-1 min-w-0">
            <span className="text-purple-300 text-[9px] flex-shrink-0">function</span>
            <span className="text-yellow-300 text-[9px] truncate">buyCode()</span>
            <span className="text-white/70 text-[9px] flex-shrink-0">{`{`}</span>
          </div>
          <div className="flex items-center space-x-2 min-w-0">
            <span className="text-white/40 text-[9px] flex-shrink-0">  return</span>
            <span className="text-green-300 text-[9px] truncate">'success'</span>
          </div>
          <div className="flex items-center">
            <span className="text-white/70 text-[9px]">{`}`}</span>
          </div>
        </div>
      </motion.div>

      {/* Market Stats */}
      <motion.div
        variants={variants}
        className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-2"
      >
        <div className="flex items-center space-x-1 min-w-0">
          <div className="h-4 w-4 rounded bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[8px]">📈</span>
          </div>
          <div className="min-w-0">
            <p className="text-white text-[10px] font-medium truncate">50+ Projects</p>
            <p className="text-white/60 text-[8px] truncate">Available</p>
          </div>
        </div>
        <div className="flex space-x-0.5 flex-shrink-0">
          <div className="w-1.5 h-3 bg-green-400 rounded-sm"></div>
          <div className="w-1.5 h-4 bg-blue-400 rounded-sm"></div>
          <div className="w-1.5 h-2 bg-purple-400 rounded-sm"></div>
          <div className="w-1.5 h-3.5 bg-pink-400 rounded-sm"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const third = {
    initial: {
      y: 10,
      opacity: 0.8,
    },
    hover: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2 overflow-hidden"
    >
      {/* Design Tools */}
      <motion.div
        variants={first}
        className="h-1/3 w-full rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 p-2 border border-neutral-200 dark:border-white/[0.1] flex items-center space-x-2"
      >
        <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">🎨</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 truncate">Design Tools</p>
          <div className="flex space-x-1 mt-1">
            <div className="w-2 h-2 rounded bg-orange-400 flex-shrink-0"></div>
            <div className="w-2 h-2 rounded bg-blue-400 flex-shrink-0"></div>
            <div className="w-2 h-2 rounded bg-purple-400 flex-shrink-0"></div>
            <div className="w-2 h-2 rounded bg-green-400 flex-shrink-0"></div>
          </div>
        </div>
      </motion.div>

      {/* Creative Process */}
      <motion.div
        variants={second}
        className="h-1/3 w-full rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-2 border border-neutral-200 dark:border-white/[0.1] flex items-center space-x-2"
      >
        <div className="flex-1 flex items-center space-x-2 min-w-0">
          <div className="h-5 w-5 rounded bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[8px]">💡</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex space-x-1">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
              />
            </div>
            <p className="text-[9px] text-gray-600 dark:text-gray-400 mt-1 truncate">Creative Process</p>
          </div>
        </div>
        <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">✨</span>
        </div>
      </motion.div>

      {/* Marketing Assets */}
      <motion.div
        variants={third}
        className="h-1/3 w-full rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-2 border border-neutral-200 dark:border-white/[0.1] flex items-center space-x-2"
      >
        <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">📊</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 truncate">Marketing Assets</p>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex space-x-1 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-[9px] text-gray-500 dark:text-gray-400 truncate">Logo • Banner • Poster</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: 5,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: -5,
      rotate: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2 overflow-hidden"
    >
      {/* Header */}
      <motion.div className="flex items-center space-x-2 mb-1">
        <div className="h-5 w-5 rounded bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px]">💻</span>
        </div>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">Fast & Modern</span>
      </motion.div>

      {/* Development Icons */}
      <div className="flex flex-row space-x-1 justify-center">
        <motion.div
          variants={variants}
          className="h-6 w-6 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0"
        >
          <span className="text-white text-[10px]">🌐</span>
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="h-6 w-6 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0"
        >
          <span className="text-white text-[10px]">📱</span>
        </motion.div>
        <motion.div
          variants={variants}
          className="h-6 w-6 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"
        >
          <span className="text-white text-[10px]">⚡</span>
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="h-6 w-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0"
        >
          <span className="text-white text-[10px]">🚀</span>
        </motion.div>
      </div>

      {/* Development Categories */}
      <div className="flex flex-col space-y-1 flex-1">
        <motion.div className="flex items-center space-x-2 min-w-0">
          <div className="h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
          <span className="text-[10px] text-gray-600 dark:text-gray-400 truncate">Website</span>
        </motion.div>
        <motion.div className="flex items-center space-x-2 min-w-0">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
          <span className="text-[10px] text-gray-600 dark:text-gray-400 truncate">Mobile App</span>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <motion.div className="flex items-center space-x-2 mt-1">
        <span className="text-[10px] text-gray-500 dark:text-gray-400 flex-shrink-0">90%</span>
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full min-w-0">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "90%" }}
            transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
            className="bg-gradient-to-r from-pink-500 to-violet-500 h-1.5 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Mentoring Online and Offline",
    description: (
      <span className="text-sm">
        I'll teach you about programming language
      </span>
    ),
    header: <SkeletonOne />,
    className: "col-span-1 row-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Assignment Tutor",
    description: (
      <span className="text-sm">
        Help you to finish about your paper, report, essay, and presentation
      </span>
    ),
    header: <SkeletonTwo />,
    className: "col-span-1 row-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fast and Cheap Website or Android Application",
    description: (
      <span className="text-sm">
        Build your dream website and Android app with me!
      </span>
    ),
    header: <SkeletonFive />,
    className: "col-span-1 row-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Advertising",
    description: (
      <span className="text-sm">
        Provides logo, poster, banner and other graphic design assets.
      </span>
    ),
    header: <SkeletonFour />,
    className: "col-span-1 sm:col-span-2 lg:col-span-2 row-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Source Code Market",
    description: (
      <span className="text-sm">
        Some program code that I have worked on
      </span>
    ),
    header: <SkeletonThree />,
    className: "col-span-1 row-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
