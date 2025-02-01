"use client"; // Wajib ditambahkan untuk memastikan ini komponen client-side

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); // Gunakan null sebagai default

  useEffect(() => {
    // Ambil preferensi tema dari localStorage setelah komponen di-mount
    const savedTheme = localStorage.getItem("hs_theme");
    setIsDarkMode(savedTheme === "light" ? false : true);
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return; // Hindari eksekusi sebelum state terinisialisasi

    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("hs_theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("hs_theme", "light");
    }
  }, [isDarkMode]);

  if (isDarkMode === null) {
    return null; // Hindari render sebelum state terinisialisasi
  }

  return (
    <>
      {/* Dark Mode Button */}
      <button
        type="button"
        className={`${
          isDarkMode ? "hidden" : "flex"
        } relative justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
        onClick={() => setIsDarkMode(true)}
      >
        <span className="sr-only">Dark</span>
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </button>

      {/* Light Mode Button */}
      <button
        type="button"
        className={`${
          isDarkMode ? "flex" : "hidden"
        } relative justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
        onClick={() => setIsDarkMode(false)}
      >
        <span className="sr-only">Light</span>
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </button>
    </>
  );
};

export default ThemeToggle;
