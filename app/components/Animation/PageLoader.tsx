"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingCircle from "./LoadingCircle";

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <LoadingCircle />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ 
              opacity: 0,
              y: 20,
              scale: 0.98
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}