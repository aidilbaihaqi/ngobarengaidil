"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const pathname = usePathname();

  return (
    <div id="primary-nav-menu" className="hidden lg:block basis-full grow">
      <div className="flex flex-row items-center justify-end gap-x-1 lg:ps-7">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`group relative px-3 py-4 font-mono text-micro uppercase tracking-label transition-colors duration-200 focus:outline-none ${
                isActive ? "text-signal-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.name}
              {/* the band under the active lane */}
              <span
                aria-hidden="true"
                className={`ladder-band absolute inset-x-3 bottom-2.5 h-px origin-left ${
                  isActive
                    ? "bg-signal"
                    : "bg-ink-soft scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                }`}
              />
            </Link>
          );
        })}
        {children}
      </div>
    </div>
  );
}
