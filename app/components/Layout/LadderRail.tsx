"use client";

import { useEffect, useState } from "react";

export type LadderStop = {
  /** id of the section element this rung marks */
  id: string;
  /** the real value this position carries — a section name, or a year */
  label: string;
};

/**
 * The ladder rail.
 *
 * A gel ladder separates fragments against a labelled reference column; this
 * rail does the same for the page. Each rung marks a real section and carries
 * its real label, so position on the rail means something. Rungs resolve
 * top-to-bottom on mount, and the rung for the section in view stays lit.
 *
 * Labels sit in absolute position so the rail's own box stays narrow: below
 * the `rail` breakpoint there is no room for them beside the content column,
 * so they surface on hover and focus instead.
 */
export default function LadderRail({
  stops,
  className = "",
}: {
  stops: LadderStop[];
  className?: string;
}) {
  const [active, setActive] = useState<string>(stops[0]?.id ?? "");

  useEffect(() => {
    const targets = stops
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const seen = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          seen.set(entry.target.id, entry.intersectionRatio);
        }
        // Whichever tracked section is most in view is the one that lights.
        let best = "";
        let bestRatio = 0;
        for (const [id, ratio] of seen) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      {
        rootMargin: "-10% 0px -50% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1],
      },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stops]);

  return (
    <nav
      aria-label="Page sections"
      className={`fixed top-1/2 z-30 hidden -translate-y-1/2 lg:block left-6 rail:left-[calc(50vw-32rem-8.5rem)] ${className}`}
    >
      <ol className="relative flex flex-col gap-y-6 border-l border-rule py-2">
        {stops.map((stop, i) => {
          const isActive = active === stop.id;
          return (
            <li key={stop.id} className="relative flex items-center">
              <a
                href={`#${stop.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center py-1.5 focus:outline-none"
              >
                {/* rung */}
                <span
                  aria-hidden="true"
                  className={`ladder-band ladder-band-enter block h-px shrink-0 ${
                    isActive
                      ? "w-7 bg-signal"
                      : "w-3.5 bg-rule group-hover:w-6 group-hover:bg-ink-soft group-focus-visible:w-6 group-focus-visible:bg-signal"
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                />

                {/* the value this position carries */}
                <span
                  className={`pointer-events-none absolute left-full ml-3 whitespace-nowrap font-mono text-micro uppercase tracking-label opacity-0 transition-[opacity,color] duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 rail:opacity-100 ${
                    isActive ? "text-signal-ink" : "text-muted"
                  }`}
                >
                  {stop.label}
                </span>

                <span className="sr-only">{stop.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
