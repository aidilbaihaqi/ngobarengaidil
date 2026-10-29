"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Show/hide-on-scroll for the mobile header and floating dock: visible near
 * the top of the page, visible while the user scrolls up (so navigation is
 * there the moment they want it), hidden while scrolling down (so it stays
 * out of the way while reading). A small per-move threshold ignores the
 * sub-pixel jitter some mobile browsers report on every frame, and the
 * near-top guard keeps the UI pinned visible until there's actually
 * something to scroll past.
 */
export function useScrollVisibility(nearTop = 48, threshold = 6) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < nearTop) {
        setVisible(true);
      } else if (delta > threshold) {
        setVisible(false);
      } else if (delta < -threshold) {
        setVisible(true);
      }

      lastY.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [nearTop, threshold]);

  return visible;
}
