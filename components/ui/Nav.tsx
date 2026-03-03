"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./Nav.module.css";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Collection", href: "/catalogue" },
  { label: "Our Story", href: "/our-story" },
];

export default function Nav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link className={styles.logo} href="/" aria-label="Verrdelle home">
        <div className={styles.logoImgWrapper}>
          <Image src="/images/ezma.svg" alt="Verrdelle" fill className={styles.logoImg} priority />
        </div>
      </Link>
      <div className={styles.desktop}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.label} href={item.href} className={styles.item} aria-label={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        type="button"
      >
        <span className={styles.hamburgerText}>{isOpen ? "Close" : "Menu"}</span>
        <span className={styles.hamburgerGlyph} aria-hidden>
          {isOpen ? "✕" : "◆"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-nav" className={styles.drawer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.drawerItem}
                aria-label={item.label}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
