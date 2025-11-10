"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SkeletonLoader from "../ui/SkeletonLoader";
import ContentSkeleton from "../ui/ContentSkeleton";
import AboutSkeleton from "../ui/AboutSkeleton";

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Reduced to 0.8 seconds for better UX

    return () => clearTimeout(timer);
  }, [pathname]);

  // Determine which skeleton to show based on route
  const getSkeletonComponent = () => {
    if (pathname === "/projects") return SkeletonLoader;
    if (pathname === "/about") return AboutSkeleton;
    return ContentSkeleton;
  };

  const SkeletonComponent = getSkeletonComponent();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <SkeletonComponent />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ 
              opacity: 0,
              y: 10,
            }}
            animate={{ 
              opacity: 1,
              y: 0,
            }}
            transition={{ 
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}