"use client";

import { motion } from "framer-motion";

export default function AboutSkeleton() {
  return (
    <div className="w-full max-w-5xl mx-auto pt-5 md:pt-16 px-4 sm:px-6 lg:px-8 text-left">
      {/* Profile Section Skeleton */}
      <div className="flex flex-col items-start gap-x-3 mb-8">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 mb-4"
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

        <div className="w-full space-y-3">
          <motion.div
            className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg max-w-md"
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
          <motion.div
            className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded max-w-2xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.2,
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      </div>

      {/* About Text Skeleton */}
      <div className="space-y-2 mb-10">
        {[1, 2, 3, 4].map((i) => (
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

      {/* Skills Section Skeleton */}
      <div className="mt-10 sm:mt-14">
        <motion.div
          className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg mb-5 max-w-xs"
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

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-4">
              <motion.div
                className="w-40 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded"
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
              <div className="flex-1 flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((j) => (
                  <motion.div
                    key={j}
                    className="h-5 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: (i * 0.1) + (j * 0.02),
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section Skeleton */}
      <div className="mt-10 sm:mt-14">
        <motion.div
          className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-lg mb-5 max-w-xs"
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

        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-x-5">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
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
              <div className="flex-1 space-y-3">
                <motion.div
                  className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded max-w-xs"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.1 + 0.1,
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />
                <motion.div
                  className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded max-w-md"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.1 + 0.2,
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <motion.div
                      key={j}
                      className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.1 + j * 0.05,
                      }}
                      style={{
                        backgroundSize: "200% 100%",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
