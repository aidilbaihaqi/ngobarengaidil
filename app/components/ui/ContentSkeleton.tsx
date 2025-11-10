"use client";

import { motion } from "framer-motion";

export default function ContentSkeleton() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
      {/* Profile Section Skeleton */}
      <div className="text-center mb-10">
        {/* Avatar Skeleton */}
        <motion.div
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto mb-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        {/* Title Skeleton */}
        <motion.div
          className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg mb-3 mx-auto max-w-md"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.1,
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        {/* Description Skeleton */}
        <div className="space-y-2 max-w-2xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.05,
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          ))}
        </div>

        {/* Social Icons Skeleton */}
        <div className="flex justify-center gap-4 mt-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.05,
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          ))}
        </div>
      </div>

      <div className="border-t dark:border-gray-400 dark:border-opacity-10 mt-10 mb-10"></div>

      {/* Feature Section Skeleton */}
      <div className="mt-10">
        <motion.div
          className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg mb-3 mx-auto max-w-sm"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
        <motion.div
          className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded mb-8 mx-auto max-w-md"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.1,
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        {/* Bento Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className={`h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl ${
                i === 1 || i === 4 ? "md:col-span-2" : ""
              }`}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.1,
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
