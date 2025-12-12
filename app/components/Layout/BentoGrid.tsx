"use client";
import { cn } from "@/app/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

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
  const codeFiles = [
    { name: "react-app.tsx", color: "from-blue-500 to-cyan-500", icon: "⚛️" },
    { name: "api-server.js", color: "from-yellow-500 to-orange-500", icon: "🔥" },
    { name: "mobile-app.kt", color: "from-purple-500 to-pink-500", icon: "📱" },
  ];

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-1.5 p-2 rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center space-x-1.5 mb-1">
        <div className="h-5 w-5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px]">💾</span>
        </div>
        <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300">Source Code</span>
      </div>

      {/* Code Files */}
      <div className="flex-1 flex flex-col justify-center space-y-1.5">
        {codeFiles.map((file) => (
          <motion.div
            key={file.name}
            whileHover={{ scale: 1.03, x: 3, transition: { duration: 0.2 } }}
            className="flex items-center space-x-1.5 p-1.5 rounded-md border border-neutral-200 dark:border-white/[0.1] bg-white dark:bg-black/50 backdrop-blur-sm cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-black/70"
          >
            <div className={`h-5 w-5 rounded-md bg-gradient-to-r ${file.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[10px]">{file.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-medium text-gray-700 dark:text-gray-300 truncate">{file.name}</p>
              <div className="flex items-center space-x-1 mt-0.5">
                <div className="h-1 w-1 rounded-full bg-green-500"></div>
                <span className="text-[7px] text-gray-500 dark:text-gray-400">Available</span>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-[10px] flex-shrink-0">
              ⚙️
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const designItems = [
    { 
      name: "Logo Design", 
      icon: "🎨", 
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      iconBg: "from-pink-400 to-rose-400",
      description: "Brand Identity"
    },
    { 
      name: "Poster", 
      icon: "📄", 
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      iconBg: "from-blue-400 to-cyan-400",
      description: "Print Design"
    },
    { 
      name: "Banner", 
      icon: "🖼️", 
      bgColor: "bg-green-50 dark:bg-green-950/20",
      iconBg: "from-green-400 to-emerald-400",
      description: "Web Graphics"
    },
    { 
      name: "Social Media", 
      icon: "📱", 
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      iconBg: "from-purple-400 to-violet-400",
      description: "Digital Content"
    },
  ];

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col p-3 overflow-hidden"
    >

      {/* Design Items Grid */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {designItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              scale: 1.05, 
              opacity: 1,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className={`${item.bgColor} rounded-lg p-2 border border-gray-200/50 dark:border-white/[0.05] cursor-pointer transition-shadow hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-white/[0.05]`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-1">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                className={`h-8 w-8 rounded-lg bg-gradient-to-r ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}
              >
                <span className="text-sm">{item.icon}</span>
              </motion.div>
              <div className="text-center">
                <p className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 truncate">{item.name}</p>
                <p className="text-[8px] text-gray-500 dark:text-gray-400 truncate">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
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
      <div className="flex flex-row space-x-1">
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
