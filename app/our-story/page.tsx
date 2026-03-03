import Link from "next/link";
import Nav from "@/components/ui/Nav";
import StarCanvas from "@/components/cosmos/StarCanvas";
import styles from "./OurStory.module.css";

export const dynamic = "force-static";

export default function OurStoryPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Nav />
      <StarCanvas targetColor={[146, 78, 102]} />
      <main className={styles.story} aria-labelledby="story-title">
        <section className={styles.heroBlock}>
          <p className={styles.overline}>Our Philosophy</p>
          <h1 id="story-title" className={styles.title}>
            Built on Discipline. Defined by Refinement.
          </h1>
          <p className={styles.lead}>
            Verrdelle was not created to follow trends. It was created to restore structure to modern skin care.
          </p>
          <p className={styles.lead}>
            In a market driven by noise and over-promising claims, we chose restraint, precision, and botanical
            intelligence.
          </p>
        </section>

        <section className={styles.sections} aria-label="Our story sections">
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Why We Exist</h2>
            <p className={styles.cardBody}>Skin does not need aggression. It needs balance.</p>
            <p className={styles.cardBody}>
              Each formula begins with a single objective: support the barrier, enhance visible refinement, and
              elevate radiance without compromise.
            </p>
            <p className={styles.cardBody}>
              We focus on high-load actives, lipid-respecting systems, and controlled batch crafting, because real
              performance comes from discipline, not exaggeration.
            </p>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Our Method</h2>
            <p className={styles.cardBody}>
              Our formulations are built around oil-soluble and water-based active precision, barrier-respecting
              ingredient systems, structured hydration architecture, and botanical lipid nourishment.
            </p>
            <p className={styles.cardBody}>
              No diluted claims. No unnecessary complexity. No trend-driven overload. Only intentional design.
            </p>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>What Sets Us Apart</h2>
            <p className={styles.cardBody}>
              We do not formulate for instant shock value. We formulate for visible evolution.
            </p>
            <p className={styles.cardBody}>
              Every ritual is designed to integrate into daily life, supporting smoother texture appearance, balanced
              tone, and long-term comfort.
            </p>
            <p className={styles.cardBody}>Refinement is not dramatic. It is consistent.</p>
          </article>
        </section>

        <section className={styles.statement} aria-label="Closing statement">
          <p className={styles.statementText}>
            If a formula does not respect the skin barrier, it does not carry the Verrdelle name.
          </p>
          <p className={styles.signature}>Precision in every drop. Discipline in every batch.</p>
          <Link href="/catalogue" className={styles.cta} aria-label="Explore the collection">
            Explore The Collection
          </Link>
        </section>
      </main>
    </div>
  );
}
