"use client";

import CountUp from "../ui/CountUp";
import Reveal from "../ui/Reveal";

/**
 * The numbers a business reader scans for before anything else. Kept to four,
 * counted up on first view, separated by hairlines rather than card chrome.
 */
const stats = [
  { value: 4, suffix: "+", label: "Years building software" },
  { value: 25, suffix: "+", label: "Projects shipped" },
  { value: 100, suffix: "K+", label: "Users on shipped products" },
  { value: 6, suffix: "", label: "National awards & honors" },
];

export default function ImpactStats() {
  return (
    <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 0.08}
          className="relative px-6 text-center lg:text-left lg:border-l lg:border-gray-200 lg:first:border-l-0 dark:lg:border-white/10"
        >
          <p className="font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            <CountUp to={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-neutral-400">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
