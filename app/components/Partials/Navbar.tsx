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
            <Link 
              className={
                isActive 
                  ? "relative py-0.5 md:py-3 px-4 md:px-3 border-s-2 md:border-s-0 md:border-b-2 border-blue-600 font-medium text-blue-600 focus:outline-none dark:border-blue-400 dark:text-blue-400 transition-all duration-300" 
                  : "relative py-0.5 md:py-3 px-4 md:px-3 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200 transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-neutral-800/50 rounded-lg md:rounded-none md:hover:bg-transparent group"
              } 
              href={link.href} 
              aria-current={isActive ? "page" : undefined} 
              key={link.name}
            >
              {link.name}
              {!isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left md:block hidden"></span>
              )}
            </Link>
          )
        })}
        {children}
      </div>
    </div>
  )
}