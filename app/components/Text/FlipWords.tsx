import React from "react";
import { FlipWords } from "../ui/flip-word";

export function FlipWordsDemo() {
  const words = ["Aidil Baihaqi", "Software Engineer", "AI Enthusiast","IT Mentor", "Content Creator" ];

  return (
    <div className="text-3xl md:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Hello, I`m
      <FlipWords words={words} />
    </div>
  );
}
