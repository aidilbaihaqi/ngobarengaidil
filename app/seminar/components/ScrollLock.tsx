"use client";

import { useEffect } from "react";

/**
 * Holds `html.seminar-locked` for as long as the deck is on screen.
 *
 * The deck is a fixed, full-viewport stage, so the document behind it has
 * nothing to show — but without this the page can still rubber-band on touch
 * and keep a scrollbar gutter. Done from an effect rather than in CSS so the
 * lock is released the moment the reader navigates away.
 */
export default function ScrollLock() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("seminar-locked");
    return () => root.classList.remove("seminar-locked");
  }, []);

  return null;
}
