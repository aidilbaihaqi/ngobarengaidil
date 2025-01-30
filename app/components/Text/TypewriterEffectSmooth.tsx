"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Aidil",
    },
    {
      text: "Baihaqi",
    },
  ];
  return (
    <TypewriterEffectSmooth words={words} className="text-lg font-medium text-gray-800 dark:text-neutral-200"/>
  );
}
