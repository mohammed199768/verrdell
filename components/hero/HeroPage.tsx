"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Loader from "@/components/ui/Loader";
import Nav from "@/components/ui/Nav";
import ImperialSeal from "./ImperialSeal";
import StarCanvas from "@/components/cosmos/StarCanvas";
import styles from "./Hero.module.css";
import { usePanelProgress } from "@/hooks/usePanelProgress";

export default function HeroPage(): JSX.Element {
  const isLoaded = usePanelProgress((s) => s.isLoaded);
  const setLoaded = usePanelProgress((s) => s.setLoaded);

  useEffect(() => {
    if (isLoaded) return;
    const fallbackTimer = window.setTimeout(() => {
      setLoaded(true);
    }, 2600);
    return () => window.clearTimeout(fallbackTimer);
  }, [isLoaded, setLoaded]);

  return (
    <>
      <Loader />
      <Nav />
      <StarCanvas targetColor={[146, 78, 102]} />
      <main className={styles.hero}>
        <ImperialSeal />
        <motion.div
          className={styles.overline}
          initial={{ opacity: 0, y: 15 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Luxury Skin Ritual Atelier
        </motion.div>
        <motion.div
          className={styles.brand}
          initial={{ opacity: 0, y: 60 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className={styles.brandWord}>LUMINANCE</h1>
        </motion.div>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
        >
          Engineered skin rituals designed to elevate glow without compromise
        </motion.p>
        <motion.div
          className={styles.divider}
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link href="/catalogue" className={styles.ctaBtn} aria-label="Explore the skin collection">
            <span>Explore Skin Collection</span>
          </Link>
        </motion.div>
      </main>
    </>
  );
}
