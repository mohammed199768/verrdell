"use client";

import { useEffect, useRef } from "react";
import styles from "./StarCanvas.module.css";

interface StarCanvasProps {
  targetColor: [number, number, number];
}

export default function StarCanvas({ targetColor }: StarCanvasProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const [r, g, b] = targetColor;
    ref.current.style.setProperty("--star-color", `${r}, ${g}, ${b}`);
  }, [targetColor]);

  return <div ref={ref} className={styles.stars} aria-hidden />;
}
