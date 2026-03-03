"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { Product } from "@/types";
import ProductPanel from "./ProductPanel";
import Finale from "@/components/finale/Finale";
import styles from "./CatalogueTrack.module.css";

interface CatalogueTrackProps {
  products: Product[];
  onActiveIndexChange: (index: number) => void;
  onFinaleChange: (value: boolean) => void;
}

const CatalogueTrack = forwardRef<HTMLDivElement, CatalogueTrackProps>(
  ({ products, onActiveIndexChange, onFinaleChange }, _ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const totalPanels = products.length + 1;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const track = innerRef.current;
      if (!track) return;

      let targetIndex = 0;

      const getCurrentIndex = (): number => {
        const panelWidth = window.innerWidth || 1;
        return Math.round(track.scrollLeft / panelWidth);
      };

      const goToIndex = (index: number): void => {
        const clampedIndex = Math.max(0, Math.min(totalPanels - 1, index));
        track.scrollTo({ left: clampedIndex * window.innerWidth, behavior: "smooth" });
      };

      const goOneStep = (direction: 1 | -1): void => {
        targetIndex = Math.max(0, Math.min(totalPanels - 1, targetIndex + direction));
        goToIndex(targetIndex);
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const isFinale = entry.target.getAttribute("data-finale") === "true";
            const rawIndex = Number(entry.target.getAttribute("data-index"));
            const index = isFinale ? totalPanels - 1 : rawIndex;

            if (isFinale) {
              onFinaleChange(true);
            } else {
              onFinaleChange(false);
              onActiveIndexChange(index);
            }

            targetIndex = index;
            setCurrentIndex(index);
          });
        },
        {
          root: track,
          threshold: 0.55,
        },
      );

      const panels = track.querySelectorAll("[data-panel]");
      panels.forEach((panel) => observer.observe(panel));

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goOneStep(1);
        }

        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goOneStep(-1);
        }
      };
      window.addEventListener("keydown", onKeyDown);

      const onScroll = () => {
        sessionStorage.setItem("catalogue-scroll", String(track.scrollLeft));
      };
      track.addEventListener("scroll", onScroll, { passive: true });

      const savedScroll = sessionStorage.getItem("catalogue-scroll");
      if (savedScroll) {
        track.scrollLeft = parseInt(savedScroll, 10);
      }
      targetIndex = getCurrentIndex();
      setCurrentIndex(targetIndex);

      return () => {
        observer.disconnect();
        window.removeEventListener("keydown", onKeyDown);
        track.removeEventListener("scroll", onScroll);
      };
    }, [onActiveIndexChange, onFinaleChange, totalPanels]);

    const navigateBy = (step: 1 | -1): void => {
      const track = innerRef.current;
      if (!track) return;
      const current = Math.round(track.scrollLeft / window.innerWidth);
      const next = Math.max(0, Math.min(totalPanels - 1, current + step));
      setCurrentIndex(next);
      track.scrollTo({ left: next * window.innerWidth, behavior: "smooth" });
    };

    return (
      <>
        <div ref={innerRef} className={styles.track} data-catalogue-track>
          {products.map((product, index) => (
            <div key={product.id} data-panel data-index={index} className={styles.slide}>
              <ProductPanel product={product} />
            </div>
          ))}
          <div data-panel data-finale="true" className={styles.slide}>
            <Finale active />
          </div>
        </div>

        <button
          type="button"
          className={styles.arrowPrev}
          disabled={currentIndex <= 0}
          onClick={() => navigateBy(-1)}
          aria-label="Previous product"
        >
          <span aria-hidden>Back</span>
        </button>

        <button
          type="button"
          className={styles.arrowNext}
          disabled={currentIndex >= totalPanels - 1}
          onClick={() => navigateBy(1)}
          aria-label="Next product"
        >
          <span aria-hidden>Next</span>
        </button>
      </>
    );
  },
);

CatalogueTrack.displayName = "CatalogueTrack";
export default CatalogueTrack;
