"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/ui/Nav";
import StarCanvas from "@/components/cosmos/StarCanvas";
import styles from "./OurStory.module.css";

gsap.registerPlugin(ScrollTrigger);

/* ── pillar data ────────────────────────────────────── */
const pillars = [
  {
    num: "01",
    title: "Why We Exist",
    body: [
      "Skin does not need aggression. It needs balance.",
      "Each formula begins with a single objective: support the barrier, enhance visible refinement, and elevate radiance without compromise.",
      "We focus on high-load actives, lipid-respecting systems, and controlled batch crafting — because real performance comes from discipline, not exaggeration.",
    ],
  },
  {
    num: "02",
    title: "Our Method",
    body: [
      "Our formulations are built around oil-soluble and water-based active precision, barrier-respecting ingredient systems, structured hydration architecture, and botanical lipid nourishment.",
      "No diluted claims. No unnecessary complexity. No trend-driven overload. Only intentional design.",
    ],
  },
  {
    num: "03",
    title: "What Sets Us Apart",
    body: [
      "We do not formulate for instant shock value. We formulate for visible evolution.",
      "Every ritual is designed to integrate into daily life — supporting smoother texture appearance, balanced tone, and long-term comfort.",
      "Refinement is not dramatic. It is consistent.",
    ],
  },
];

export default function OurStoryPage(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leadsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const dividerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const statementRef = useRef<HTMLElement>(null);
  const stTextRef = useRef<HTMLParagraphElement>(null);
  const sigRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Hero block entrance (plays on mount) ──── */
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.3,
      });

      // Overline clip reveal
      if (overlineRef.current) {
        heroTl.fromTo(
          overlineRef.current,
          { opacity: 0, x: -30, clipPath: "inset(0 100% 0 0)" },
          { opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)", duration: 0.8 },
        );
      }

      // Title — per-word stagger
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(`.${styles.word}`);
        heroTl.fromTo(
          words,
          { opacity: 0, y: 40, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.35",
        );
      }

      // Lead paragraphs
      const leads = leadsRef.current.filter(Boolean);
      if (leads.length) {
        heroTl.fromTo(
          leads,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.15 },
          "-=0.3",
        );
      }

      // Divider line draws from center
      if (dividerRef.current) {
        heroTl.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
          "-=0.3",
        );
      }

      /* ── Pillar cards — ScrollTrigger per card ─── */
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const num = card.querySelector(`.${styles.pillarNum}`);
        const cardTitle = card.querySelector(`.${styles.cardTitle}`);
        const bodyPs = card.querySelectorAll(`.${styles.cardBody}`);
        const cardInner = card.querySelector(`.${styles.cardInner}`);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        });

        if (num) {
          tl.fromTo(
            num,
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 0.8 },
          );
        }

        if (cardInner) {
          tl.fromTo(
            cardInner,
            { opacity: 0, y: 50, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7 },
            num ? "-=0.5" : 0,
          );
        }

        if (cardTitle) {
          tl.fromTo(
            cardTitle,
            { opacity: 0, clipPath: "inset(0 100% 0 0)" },
            {
              opacity: 1,
              clipPath: "inset(0 0% 0 0)",
              duration: 0.65,
            },
            "-=0.35",
          );
        }

        if (bodyPs.length) {
          tl.fromTo(
            bodyPs,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            "-=0.25",
          );
        }
      });

      /* ── Statement section ───────────────────── */
      if (statementRef.current) {
        const stTl = gsap.timeline({
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        });

        if (stTextRef.current) {
          stTl.fromTo(
            stTextRef.current,
            { opacity: 0, y: 36, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.75 },
          );
        }

        if (sigRef.current) {
          stTl.fromTo(
            sigRef.current,
            { opacity: 0, letterSpacing: "8px" },
            { opacity: 1, letterSpacing: "2.6px", duration: 0.7 },
            "-=0.35",
          );
        }

        if (ctaRef.current) {
          stTl.fromTo(
            ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.55 },
            "-=0.3",
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ── helper: split title into word spans ────────── */
  const titleText = "Built on Discipline. Defined by Refinement.";
  const titleWords = titleText.split(" ");

  return (
    <div ref={containerRef} className={styles.page}>
      <Nav />
      <StarCanvas targetColor={[146, 78, 102]} />

      <main className={styles.story} aria-labelledby="story-title">
        {/* ── HERO ─────────────────────────────────── */}
        <section ref={heroRef} className={styles.heroBlock}>
          <p ref={overlineRef} className={styles.overline}>
            Our Philosophy
          </p>

          <h1 ref={titleRef} id="story-title" className={styles.title}>
            {titleWords.map((word, i) => (
              <span key={i} className={styles.word}>
                {word}
                {i < titleWords.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>

          <p
            ref={(el) => { leadsRef.current[0] = el; }}
            className={styles.lead}
          >
            Verrdelle was not created to follow trends. It was created to
            restore structure to modern skin care.
          </p>
          <p
            ref={(el) => { leadsRef.current[1] = el; }}
            className={styles.lead}
          >
            In a market driven by noise and over-promising claims, we chose
            restraint, precision, and botanical intelligence.
          </p>

          <div ref={dividerRef} className={styles.divider} aria-hidden />
        </section>

        {/* ── PILLAR CARDS ─────────────────────────── */}
        <section className={styles.sections} aria-label="Our story sections">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.num}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={styles.card}
            >
              <span className={styles.pillarNum} aria-hidden>
                {pillar.num}
              </span>
              <div className={styles.cardInner}>
                <h2 className={styles.cardTitle}>{pillar.title}</h2>
                {pillar.body.map((text, j) => (
                  <p key={j} className={styles.cardBody}>
                    {text}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* ── STATEMENT ────────────────────────────── */}
        <section
          ref={statementRef}
          className={styles.statement}
          aria-label="Closing statement"
        >
          <p ref={stTextRef} className={styles.statementText}>
            If a formula does not respect the skin barrier, it does not carry
            the Verrdelle name.
          </p>
          <p ref={sigRef} className={styles.signature}>
            Precision in every drop. Discipline in every batch.
          </p>
          <Link
            ref={ctaRef}
            href="/catalogue"
            className={styles.cta}
            aria-label="Explore the collection"
          >
            Explore The Collection
          </Link>
        </section>
      </main>
    </div>
  );
}
