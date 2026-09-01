import React from "react";
import { FlipWords } from "../ui/flip-word";

export function FlipWordsDemo() {
  const words = [
    "Aidil Baihaqi",
    "Full Stack Engineer",
    "AI Engineer",
    "Data Engineer",
    "IT Mentor",
  ];

  return (
    <div className="text-3xl md:text-4xl mx-auto font-normal text-ink-soft">
      Hello, I`m
      <FlipWords words={words} />
    </div>
  );
}
