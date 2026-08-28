"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "../../globals.css";

const navLinks = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Project', href: '/projects'},
  {name: 'Contact', href: '/contact'}
];

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const pathname = usePathname();
  return (
    <div
      id="primary-nav-menu"
      className="hidden lg:block basis-full grow"
    >
      <div className="flex flex-row items-center justify-end gap-3 lg:ps-7">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={
                isActive
                  ? "relative py-3 px-3 border-b-2 border-blue-600 font-medium text-blue-600 focus:outline-none dark:border-blue-400 dark:text-blue-400 transition-all duration-300"
                  : "relative py-3 px-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 transition-all duration-300 group"
              }
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              key={link.name}
            >
              {link.name}
              {!isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </Link>
          )
        })}
        {children}
      </div>
    </div>
  )
}
