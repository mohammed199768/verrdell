"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ParallaxOffset } from "@/types";
import ProductGlow from "./ProductGlow";
import styles from "./FloatingProduct.module.css";

interface FloatingProductProps {
  image: string;
  alt: string;
  glow: string;
  offset: ParallaxOffset;
  visible: boolean;
  priority?: boolean;
}

export default function FloatingProduct({
  image,
  alt,
  glow,
  visible,
  priority = false,
}: FloatingProductProps): JSX.Element {
  return (
    <motion.div
      className={styles.wrap}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.82 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <ProductGlow glow={glow} />
      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          className={styles.frame}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.88 }}
          transition={{
            opacity: { duration: 0.42 },
            scale: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className={styles.fallback}
            priority={priority}
            sizes="(max-width: 768px) 160px, (max-width: 1280px) 220px, 280px"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
