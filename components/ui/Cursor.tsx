"use client";

import { useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./Cursor.module.css";

export default function Cursor(): JSX.Element {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringTargetX = useMotionValue(0);
  const ringTargetY = useMotionValue(0);
  const ringX = useSpring(ringTargetX, { stiffness: 80, damping: 20 });
  const ringY = useSpring(ringTargetY, { stiffness: 80, damping: 20 });
  const ringScale = useSpring(1, { stiffness: 180, damping: 20 });

  const onEnter = useCallback(() => ringScale.set(1.75), [ringScale]);
  const onLeave = useCallback(() => ringScale.set(1), [ringScale]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      dotX.set(event.clientX - 3);
      dotY.set(event.clientY - 3);
      ringTargetX.set(event.clientX - 20);
      ringTargetY.set(event.clientY - 20);
    };

    const selectors = "a, button, [role='button']";
    const interactive = Array.from(
      document.querySelectorAll<HTMLElement>(selectors),
    );
    interactive.forEach((item) => {
      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((item) => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [dotX, dotY, ringTargetX, ringTargetY, onEnter, onLeave]);

  return (
    <div className={styles.cursor} aria-hidden>
      <motion.div className={styles.dot} style={{ x: dotX, y: dotY }} />
      <motion.div
        className={styles.ring}
        style={{ x: ringX, y: ringY, scale: ringScale }}
      />
    </div>
  );
}
