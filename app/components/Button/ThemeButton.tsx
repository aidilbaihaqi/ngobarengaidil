"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to light theme
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!mounted) {
    return (
      <div className="size-7 border border-gray-200 rounded-full animate-pulse bg-gray-100 dark:bg-gray-800 dark:border-gray-700"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-10 h-10 rounded-full border transition-all duration-300 ease-in-out flex items-center justify-center
        ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-600 text-yellow-400 hover:bg-gray-700 hover:border-gray-500' 
            : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95
      `}
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon (Light Mode) */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDarkMode ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>

        {/* Moon Icon (Dark Mode) */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </button>
  );
};

export default ThemeToggle;
