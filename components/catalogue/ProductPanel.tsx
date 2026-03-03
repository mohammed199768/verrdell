"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { productCatalog } from "@/lib/data/productCatalog";
import { Product } from "@/types";
import BotanicalVC from "./botanicals/BotanicalVC";
import BotanicalAloe from "./botanicals/BotanicalAloe";
import BotanicalHA from "./botanicals/BotanicalHA";
import styles from "./ProductPanel.module.css";

interface ProductPanelProps {
  product: Product;
}

function assertNever(value: never): never {
  throw new Error(`Unhandled theme: ${value}`);
}

function getBotanical(theme: Product["theme"]): JSX.Element {
  switch (theme) {
    case "vc":
      return <BotanicalVC />;
    case "aloe":
      return <BotanicalAloe />;
    case "ha":
      return <BotanicalHA />;
    case "goldButter":
      return <BotanicalVC />;
    case "milk":
      return <BotanicalHA />;
    default:
      return assertNever(theme);
  }
}

function getPanelBgClass(theme: Product["theme"]): string {
  switch (theme) {
    case "vc":
      return styles.vcBg;
    case "aloe":
      return styles.aloeBg;
    case "ha":
      return styles.haBg;
    case "goldButter":
      return styles.goldButterBg;
    case "milk":
      return styles.milkBg;
    default:
      return assertNever(theme);
  }
}

function getCompactOverview(prodId: Product["prodId"]): string {
  switch (prodId) {
    case "p1":
      return "High-performance oil-based antioxidant ritual for refined glow and lipid nourishment.";
    case "p2":
      return "Gentle botanical cleansing with balanced hydration and comfort.";
    case "p3":
      return "Advanced hydration support for plump, balanced skin.";
    case "p4":
      return "Triple-butter nourishment with velvety long-lasting comfort.";
    case "p5":
      return "Milky hydration care for calm barrier support and soft finish.";
    default:
      return assertNever(prodId);
  }
}

function getCompactIngredient(prodId: Product["prodId"]): string {
  switch (prodId) {
    case "p1":
      return "Lipid-Based Delivery · Barrier-Respecting · Non-Irritating";
    case "p2":
      return "pH Balanced · Non-Stripping · Comfort Barrier";
    case "p3":
      return "Structured Hydration · Lightweight · Elasticity Support";
    case "p4":
      return "Deep Moisture Veil · Velvet Finish · Non-Greasy";
    case "p5":
      return "Quick Absorption · Barrier Comfort · Soft Pearl Texture";
    default:
      return assertNever(prodId);
  }
}

function getDesktopImageWrapClass(prodId: Product["prodId"]): string {
  switch (prodId) {
    case "p3":
      return styles.p3WrapBoost;
    case "p4":
      return styles.p4WrapBoost;
    case "p5":
      return styles.p5WrapBoost;
    default:
      return "";
  }
}

export default function ProductPanel({ product }: ProductPanelProps): JSX.Element {
  const details = productCatalog[product.prodId];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const statsCardRef = useRef<HTMLDivElement>(null);
  const productLineRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    setIsModalOpen(false);
    setActiveImageIndex(0);
  }, [product.prodId]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const timeline = gsap.timeline({ paused: true });
    timeline
      .fromTo(
        textCardRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
      )
      .fromTo(
        imageWrapRef.current,
        { opacity: 0, y: 34, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out" },
        "<0.08",
      )
      .fromTo(
        statsCardRef.current,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" },
        "<0.1",
      )
      .fromTo(
        [productLineRef.current, brandRef.current],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", stagger: 0.08 },
        "<0.06",
      );

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          timeline.restart();
        }
      },
      { threshold: 0.55 },
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      timeline.kill();
    };
  }, [product.prodId]);

  const handleSpotlightMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--mx", `${x}%`);
    event.currentTarget.style.setProperty("--my", `${y}%`);
  };

  const handleSpotlightLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty("--mx", "50%");
    event.currentTarget.style.setProperty("--my", "50%");
  };

  const handlePanelLightMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--px", `${x}%`);
    event.currentTarget.style.setProperty("--py", `${y}%`);
  };

  const handlePanelLightLeave = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--px", "50%");
    event.currentTarget.style.setProperty("--py", "50%");
  };

  return (
    <section
      ref={sectionRef}
      className={styles.panel}
      aria-labelledby={`${product.id}-title`}
      onMouseMove={handlePanelLightMove}
      onMouseLeave={handlePanelLightLeave}
    >
      <div className={`${styles.panelBg} ${getPanelBgClass(product.theme)}`} />
      <div className={styles.panelVeil} aria-hidden />
      {getBotanical(product.theme)}

      <div className={styles.ring} aria-hidden />
      <div className={styles.ringInner} aria-hidden />

      <div className={styles.content}>
        <div ref={textCardRef} className={styles.textCard}>
          <h2 id={`${product.id}-title`} className={styles.title}>
            {product.title}
          </h2>
          <p className={styles.body}>{getCompactOverview(product.prodId)}</p>
          <span className={styles.ingredient}>{getCompactIngredient(product.prodId)}</span>
          {/* Mobile-only inline stats row — visibility controlled by CSS */}
          <div className={styles.mobileStats}>
            {product.stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className={styles.mobileStatItem}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={imageWrapRef} className={`${styles.imageWrap} ${getDesktopImageWrapClass(product.prodId)}`}>
          <div ref={productLineRef} className={styles.productLine} aria-hidden>
            {product.title.replace("\n", " ")}
          </div>
          <div className={styles.imageShadow} aria-hidden />
          <div className={styles.imageFloat}>
            <button
              type="button"
              className={styles.imageButton}
              onMouseMove={handleSpotlightMove}
              onMouseLeave={handleSpotlightLeave}
              onClick={() => setIsModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
              aria-controls={`product-modal-${product.id}`}
            >
              <span className={styles.imageHint}>View Details</span>
              <Image
                src={product.image}
                alt={product.title.replace("\n", " ")}
                width={360}
                height={640}
                className={styles.productImg}
                priority={product.prodId === "p1"}
                loading={product.prodId === "p1" ? "eager" : "lazy"}
                sizes="(max-width: 889px) 230px, (max-width: 1556px) 22vw, 340px"
              />
            </button>
          </div>
          <div ref={brandRef} className={styles.panelBrand} aria-hidden>
            <Image src="/images/ezma.svg" alt="Verrdelle" width={120} height={40} className={styles.panelBrandLogo} />
          </div>
        </div>

        <div ref={statsCardRef} className={styles.statsCard}>
          <div className={styles.stats}>
            {product.stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className={styles.statRow}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.jade} aria-hidden>
        <span>{product.seriesLabel}</span>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div
            id={`product-modal-${product.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`product-modal-title-${product.id}`}
            className={styles.modalCard}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close product details"
            >
              Close
            </button>

            <div className={styles.modalMedia}>
              <div className={styles.modalMainImageWrap}>
                <Image
                  src={details.gallery[activeImageIndex]}
                  alt={`${product.title.replace("\n", " ")} preview ${activeImageIndex + 1}`}
                  fill
                  className={styles.modalMainImage}
                  sizes="(max-width: 1023px) 90vw, 44vw"
                />
              </div>
              <div className={styles.modalThumbRow}>
                {details.gallery.map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    className={`${styles.modalThumb} ${index === activeImageIndex ? styles.modalThumbActive : ""}`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <span className={styles.modalThumbImageWrap}>
                      <Image
                        src={src}
                        alt={`${product.title.replace("\n", " ")} thumbnail ${index + 1}`}
                        fill
                        className={styles.modalThumbImage}
                        sizes="72px"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.modalContent}>
              <span className={styles.modalNum}>{product.num}</span>
              <h3 id={`product-modal-title-${product.id}`} className={styles.modalTitle}>
                {product.title.replace("\n", " ")}
              </h3>
              <p className={styles.modalHeadline}>{details.headline}</p>
              <p className={styles.modalBody}>{product.body}</p>
              <p className={styles.modalLongDescription}>{details.longDescription}</p>
              <p className={styles.modalIngredient}>{product.ingredient}</p>
              <p className={styles.modalUsage}>{details.usage}</p>
              <div className={styles.modalStats}>
                {product.stats.map((stat) => (
                  <div key={`${product.id}-${stat.label}`} className={styles.modalStat}>
                    <span className={styles.modalStatValue}>{stat.value}</span>
                    <span className={styles.modalStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
