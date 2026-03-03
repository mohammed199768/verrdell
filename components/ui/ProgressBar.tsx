"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useMotionValue, motion } from "framer-motion";

export default function ProgressBar(): JSX.Element {
  const width = useMotionValue("0%");
  const pathname = usePathname();
  const trackRef = useRef<Element | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (pathname !== "/catalogue") {
      width.set("0%");
      return;
    }

    // Retry finding the track (may not be mounted yet)
    let track: HTMLElement | null = null;
    const findTrack = () => {
      track = document.querySelector("[data-catalogue-track]") as HTMLElement | null;
      return track !== null;
    };

    let retries = 0;
    const interval = setInterval(() => {
      if (findTrack() || retries++ > 20) {
        clearInterval(interval);
        if (!track) return;
        trackRef.current = track;

        const onScroll = () => {
          const { scrollLeft, scrollWidth, clientWidth } = track!;
          const progress = scrollLeft / (scrollWidth - clientWidth);
          const pct = Math.max(0, Math.min(1, progress)) * 100;
          width.set(`${pct}%`);
        };

        track.addEventListener("scroll", onScroll, { passive: true });
        cleanupRef.current = () => track?.removeEventListener("scroll", onScroll);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      cleanupRef.current?.();
    };
  }, [pathname, width]);

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[8000] h-px bg-[linear-gradient(90deg,var(--gold),rgba(232,213,163,0.3))] shadow-[0_0_8px_var(--gold)]"
      style={{ width }}
    />
  );
}
