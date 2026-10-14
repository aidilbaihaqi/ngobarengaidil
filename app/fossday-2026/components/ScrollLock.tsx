"use client";

import { useEffect } from "react";

/** Holds `html.fossday-locked` while the deck is mounted, released on the way out. */
export default function ScrollLock() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("fossday-locked");
    return () => root.classList.remove("fossday-locked");
  }, []);

  return null;
}
