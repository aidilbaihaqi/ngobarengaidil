"use client";

import Reveal from "../ui/Reveal";

/**
 * How an engagement actually runs, in four numbered movements. This is the
 * section a business developer reads to decide the work will be safe with
 * you — so each step ends on the thing the client receives, not the task.
 */
const steps = [
  {
    number: "01",
    title: "Discover",
    body: "A short call or chat about how your business runs today — what is manual, what is slow, what should be measured. You get a clear written scope and a fixed quote.",
  },
  {
    number: "02",
    title: "Design",
    body: "The system is mapped before it is built: screens, data, and the workflow between them. You see and approve the plan while changes are still cheap.",
  },
  {
    number: "03",
    title: "Build",
    body: "Short cycles with something visible at the end of each one. You watch the product grow in staging instead of waiting for a big reveal.",
  },
  {
    number: "04",
    title: "Hand over",
    body: "Deployment, documentation, and the full source code — plus mentoring for your team, so the system keeps evolving after I step away.",
  },
];

export default function ProcessSection() {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal key={step.number} delay={i * 0.1} className="group relative">
          {/* The connecting rule, drawn between columns on wide screens. */}
          <div
            aria-hidden="true"
            className="absolute -top-4 left-0 hidden h-px w-full bg-gradient-to-r from-gray-300 to-transparent lg:block dark:from-white/15"
          />
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue-600 transition-transform duration-300 group-hover:-translate-y-0.5 dark:text-blue-400">
            {step.number}
          </p>
          <h3 className="mt-3 font-display text-lg font-semibold text-gray-900 dark:text-white">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-neutral-400">
            {step.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
