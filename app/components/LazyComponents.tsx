"use client";

import dynamic from 'next/dynamic';

// Lazy load komponen berat untuk mengurangi Total Blocking Time
export const LazyBentoGrid = dynamic(
  () => import('./Layout/BentoGrid').then(mod => ({ default: mod.BentoGridThirdDemo })),
  {
    loading: () => (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="h-64 bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const LazyClickSpark = dynamic(
  () => import('./ui/ClickSpark'),
  {
    loading: () => <div className="contents" />,
    ssr: false,
  }
);
