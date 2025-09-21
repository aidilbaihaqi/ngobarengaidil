"use client";

import { motion } from "framer-motion";

export default function LoadingCircle() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative">
        {/* Outer rotating circle */}
        <motion.div
          className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner rotating gradient circle */}
        <motion.div
          className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-blue-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute mt-24 text-sm text-gray-600 dark:text-gray-400 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Take a Coffee...
      </motion.p>
    </div>
  );
}