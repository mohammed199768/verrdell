"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePanelProgress } from "@/hooks/usePanelProgress";
import styles from "./Loader.module.css";

export default function Loader(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const setLoaded = usePanelProgress((state) => state.setLoaded);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showFor = prefersReducedMotion ? 280 : 1800;
    const hideFor = prefersReducedMotion ? 80 : 360;

    const hideTimer = window.setTimeout(() => {
      setIsHiding(true);
    }, showFor);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      setLoaded(true);
    }, showFor + hideFor);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, [setLoaded]);

  if (!isVisible) return <></>;

  return (
    <div
      className={`${styles.loader} ${isHiding ? styles.loaderHiding : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className={styles.logoWrap}>
        <Image src="/images/ezma.svg" alt="Verrdelle" fill className={styles.logo} priority />
      </div>
      <div className={styles.barWrap}>
        <span className={styles.bar} />
      </div>
      <p className={styles.sub}>Preparing your skin experience</p>
    </div>
  );
}
