"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Finale.module.css";

interface FinaleProps {
  active: boolean;
}

export default function Finale({ active }: FinaleProps): JSX.Element {
  return (
    <section className={styles.finale} aria-labelledby="finale-title">
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox="0 0 1440 900"
        aria-hidden
      >
        <circle cx="720" cy="450" r="380" fill="none" stroke="rgba(131,55,79,0.18)" strokeWidth="1" />
        <circle
          cx="720"
          cy="450"
          r="340"
          fill="none"
          stroke="rgba(176,108,130,0.14)"
          strokeWidth="0.5"
          strokeDasharray="5 10"
        />
        <circle cx="720" cy="450" r="300" fill="none" stroke="rgba(214,165,184,0.12)" strokeWidth="1" />
        <g stroke="rgba(194,142,161,0.16)" strokeWidth="0.5">
          <line x1="720" y1="70" x2="720" y2="830" />
          <line x1="340" y1="450" x2="1100" y2="450" />
          <line x1="451" y1="181" x2="989" y2="719" />
          <line x1="989" y1="181" x2="451" y2="719" />
        </g>
      </svg>
      <motion.p className={styles.subTop} initial={{ opacity: 0 }} animate={active ? { opacity: 1 } : { opacity: 0 }}>
        Beauty. Trust. Results You Can Feel.
      </motion.p>
      <motion.h2
        id="finale-title"
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2 }}
      >
        Your Skin, Our Promise
      </motion.h2>
      <motion.p
        className={styles.sub}
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.15 }}
      >
        Healthy-looking skin is our responsibility. Every formula is crafted to support comfort,
        radiance, and a visibly refined glow day after day.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={active ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.3 }}>
        <Link href="/our-story" className={styles.btn} aria-label="Read our story">
          <span>Read Our Story</span>
        </Link>
      </motion.div>
    </section>
  );
}
