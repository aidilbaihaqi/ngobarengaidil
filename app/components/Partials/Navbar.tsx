"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "../../globals.css";

const navLinks = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Project', href: '/projects'},
  {name: 'Blog', href: '/blogs'},
  {name: 'Contact', href: '/contact'}
];

export default function AuthLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link className={
              isActive ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-neutral-200" : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"} href={link.href} aria-current={isActive ? "page" : undefined} key={link.name}>
              {link.name}
            </Link>
          )
        })}
        {children}
      </div>
    </div>
  )
}