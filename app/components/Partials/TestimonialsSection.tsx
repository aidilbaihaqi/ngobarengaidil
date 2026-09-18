"use client";

import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

/*
 * PLACEHOLDER QUOTES — replace with real client words as they come in.
 * Attribution is deliberately role-only (no invented names, no company
 * names) so nothing here puts words in a real person's mouth. Swap each
 * entry for a genuine quote + name + company, ideally one per service line.
 */
const testimonials = [
  {
    quote:
      "Our classes used to run on chat messages and spreadsheets. Now teachers, students, and admins work in one system — and it was handed over with the source code, so we keep improving it ourselves.",
    author: "Founder",
    context: "Tutoring business · LMS build",
  },
  {
    quote:
      "He asked about how the business works before ever talking about technology. The website shipped fast, looks professional, and inquiries started arriving within the first month.",
    author: "Owner",
    context: "Creative production house · Company profile",
  },
  {
    quote:
      "Patient mentoring and systems that actually get finished. Our team learned the stack while the project was being built, which made the handover feel effortless.",
    author: "Program lead",
    context: "Public institution · Dashboard & automation",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.context} delay={i * 0.1}>
          <SpotlightCard className="h-full rounded-2xl border border-gray-200 bg-white/90 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="flex h-full flex-col">
              {/* Oversized quote mark as the card's only ornament. */}
              <span
                aria-hidden="true"
                className="font-display text-5xl font-bold leading-none text-blue-500/30 dark:text-blue-400/30"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-sm leading-6 text-gray-700 dark:text-neutral-300">
                {t.quote}
              </blockquote>
              <footer className="mt-6 border-t border-gray-100 pt-4 dark:border-white/10">
                <p className="font-display text-sm font-semibold text-gray-900 dark:text-white">
                  {t.author}
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-500">
                  {t.context}
                </p>
              </footer>
            </div>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}
