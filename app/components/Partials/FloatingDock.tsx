"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "../Button/ThemeButton";

const iconProps = {
  className: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

const navLinks: { name: string; href: string; icon: React.ReactNode }[] = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg {...iconProps}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "/about",
    icon: (
      <svg {...iconProps}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: "Work",
    href: "/projects",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    ),
  },
  {
    name: "Contact",
    href: "/contact",
    icon: (
      <svg {...iconProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function FloatingDock() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex items-center gap-1 rounded-lg border border-rule bg-surface/90 px-2 py-2 shadow-lg backdrop-blur-md"
      >
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={link.name}
              href={link.href}
              aria-label={link.name}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex size-10 items-center justify-center rounded-md transition-all duration-300 active:scale-95 ${
                isActive
                  ? "bg-signal/10 text-signal-ink"
                  : "text-muted hover:bg-ground-deep hover:text-ink"
              }`}
            >
              {link.icon}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-90 whitespace-nowrap rounded-sm bg-ink px-2 py-1 font-mono text-micro uppercase tracking-label text-ground opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                {link.name}
              </span>
            </Link>
          );
        })}

        <span className="mx-1 h-6 w-px bg-rule" aria-hidden="true" />

        <ThemeToggle />
      </nav>
    </div>
  );
}
