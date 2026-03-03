"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/ui/Nav";
import StarCanvas from "@/components/cosmos/StarCanvas";
import CatalogueTrack from "./CatalogueTrack";
import { products } from "@/lib/data/products";
import { themes } from "@/lib/data/themes";
import { ThemeToken } from "@/types";
import styles from "./Catalogue.module.css";

export default function CataloguePage(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFinale, setIsFinale] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const finaleThemeToken: ThemeToken = {
    c: [176, 108, 130],
    gold: "#d7a5b8",
    gl: "#f0d7df",
    bg: "radial-gradient(ellipse at 22% 56%, rgba(90,26,47,0.4), transparent 58%),radial-gradient(ellipse at 82% 18%, rgba(153,89,111,0.18), transparent 52%),linear-gradient(160deg, #0d070b 0%, #220d17 52%, #060506 100%)",
    glow: "radial-gradient(circle, rgba(186,123,146,0.4), transparent 72%)",
  };
  const productTheme = products[activeIndex]?.theme ?? "vc";
  const activeToken = isFinale ? finaleThemeToken : themes[productTheme];
  const targetColor = activeToken.c;

  // Apply theme to DOM
  useEffect(() => {
    const t = activeToken;
    document.documentElement.style.setProperty("--gold", t.gold);
    document.documentElement.style.setProperty("--gold-light", t.gl);
    document.body.style.background = t.bg;
  }, [activeToken]);

  // Set initial theme on mount
  useEffect(() => {
    document.body.style.transition = "background 1.4s ease";
    const t = themes["vc"];
    document.documentElement.style.setProperty("--gold", t.gold);
    document.documentElement.style.setProperty("--gold-light", t.gl);
    document.body.style.background = t.bg;

    // Cleanup: reset DOM styles when leaving catalogue
    return () => {
      document.body.style.background = "";
      document.body.style.transition = "";
      document.documentElement.style.removeProperty("--gold");
      document.documentElement.style.removeProperty("--gold-light");
    };
  }, []);

  return (
    <div className={styles.page}>
      <Nav />
      <StarCanvas targetColor={targetColor} />
      <CatalogueTrack
        ref={trackRef}
        products={products}
        onActiveIndexChange={setActiveIndex}
        onFinaleChange={setIsFinale}
      />
    </div>
  );
}
