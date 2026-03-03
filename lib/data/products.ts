import { ProductId } from "@/types";

export interface ProductCatalogDetails {
  headline: string;
  longDescription: string;
  usage: string;
  gallery: string[];
}

export const productCatalog: Record<ProductId, ProductCatalogDetails> = {
  p1: {
    headline: "Vitamin C Serum (Concentrated) – High Potency… Noticeably Effective Results",
    longDescription: `
An ultra-rich concentrated formula infused with nourishing vitamins and botanical oils, carefully formulated to support a brighter, more even-looking complexion with consistent use. From the first application, you'll notice smoother texture and a healthy glow. With continued use, the skin appears clearer, more balanced, and visibly more refined.

Works to:
- Promote a brighter, more even skin tone.
- Reduce the appearance of dark spots and pigmentation.
- Enhance natural radiance and vitality.
- Deliver deep nourishment for a silky-smooth feel.
- Support skin renewal for a fresher, more youthful look.

Lightweight oil-based texture with fast absorption, penetrating effectively to deliver a concentrated dose of care to your skin.

For external use only. A patch test is recommended before first use.
    `.trim(),
    usage:
      "Apply 3–5 drops to clean, dry skin and gently massage over the face and neck in circular motions until fully absorbed. Use once daily in the evening — or in the morning with sunscreen. Wait one minute before applying moisturizer to lock in hydration and maximize benefits.",
    gallery: ["/images/1.png"],
  },
  p2: {
    headline: "Luxury High-Quality Cleanser – Complete Care from Deep Cleansing to Lasting Radiance",
    longDescription: `
A premium cleanser designed to give your skin a complete care experience — starting with deep purification and ending with visible radiance and long-lasting softness.

Key ingredients:
- Aloe Vera Water: A high-percentage base known for soothing and deeply hydrating the skin.
- Vitamin B5: Boosts hydration and supports the skin's natural balance.
- Vitamins E, A & C: Work in harmony to nourish the skin, enhance vitality, and promote a more even, radiant complexion.
- Frankincense Hydroxide: Purifies and refines the skin, leaving it feeling fresh and clear.

Penetrates pores to remove impurities and excess oils while restoring natural softness and elasticity. With regular use, it helps promote a visibly brighter, more even skin tone — so you can truly see and feel the difference.

An effective formula with noticeable results, giving you clean, glowing, and vibrant skin every single day.
    `.trim(),
    usage:
      "Apply to damp skin and massage gently for 30–45 seconds. Rinse with lukewarm water, then follow with your hydrating routine.",
    gallery: ["/images/2.png"],
  },
  p3: {
    headline: "Concentrated Hyaluronic Serum – Deep Hydration with a Rich Formula",
    longDescription: `
A high-potency professional formula combining effective hyaluronic acid with a selected blend of natural oils and nourishing vitamins to deliver complete care in one step.

Works to:
- Provide intense, long-lasting hydration.
- Instantly improve skin plumpness and smoothness.
- Enhance natural radiance and glow.
- Support skin elasticity and renewal.
- Improve skin texture and promote a more even appearance.

It helps attract and retain moisture within the middle layers of the skin, supporting collagen production and overall skin vitality. Enriched with Vitamin B5 to soothe the skin and strengthen its natural barrier. Its lightweight, fast-absorbing texture leaves skin soft, plump, and radiant without any greasy feel.

What makes it different:
Unlike many standard formulas, this serum is highly concentrated — delivering noticeable hydration and plumping effects from the very first applications, using premium-quality raw ingredients for superior performance and visible results.
    `.trim(),
    usage:
      "Apply 3–5 drops to clean, slightly damp skin and gently massage over the face and neck until fully absorbed. Follow with a moisturizer to lock in hydration and enhance results.",
    gallery: ["/images/3.png"],
  },
  p4: {
    headline: "Gold Body Butter – An Intensive Luxury Care Experience",
    longDescription: `
A true touch of luxury that gives your skin an exceptional care experience with visible and tangible results from the very first use.

Key ingredients:
- Refined Shea Butter: Carefully processed to deliver maximum effectiveness, providing intense hydration and restoring vitality to dry, tired skin.
- Cocoa Butter: Improves skin texture and enhances softness.
- Avocado Butter: Supports skin elasticity and promotes a fuller, healthier-looking appearance.
- Vitamin Blend: Works in harmony to deeply nourish the skin, boost radiance, and improve overall appearance.

Its rich texture glides smoothly and melts instantly into the skin, leaving it soft, velvety, and deeply hydrated for long hours without any greasy residue.

Gold Body Butter is not just a moisturizer — it is an intensive care experience that restores your skin's natural luxury and glow every day.
    `.trim(),
    usage:
      "Warm between palms and glide over dry areas after showering. The rich texture melts instantly into skin for best comfort and hydration lock-in.",
    gallery: ["/images/4.png"],
  },
  p5: {
    headline: "Super Face Milk – Deep Nourishment & Intense Hydration",
    longDescription: `
A nourishing face milk with a rich milky texture that gently penetrates the skin to leave it silky-smooth and irresistibly soft.

Key ingredients:
- Lactic Acid: Deeply hydrates the skin while supporting its natural barrier. Provides gentle exfoliation to remove dead skin cells, promoting a brighter, smoother, and more plump-looking complexion.
- Pure Aloe Vera Water: Hydrates and soothes the skin while delivering essential nutrients that enhance freshness and vitality throughout the day.

Product benefits:
- Deep, long-lasting hydration that helps prevent dryness and flaking.
- Brighter, more radiant complexion through gentle exfoliation.
- Ultra-soft texture leaving the skin smooth, plump, and healthy.
- Improved skin texture with reduced appearance of dullness and fatigue.
- Enhanced elasticity for a more youthful, vibrant look.

Its lightweight, fast-absorbing formula leaves no greasy residue and provides an instantly velvety finish. After application, your skin will feel hydrated, silky-soft, and naturally radiant.

For external use only. A patch test is recommended before first use.
    `.trim(),
    usage:
      "Apply to clean, dry skin and massage over the face and neck in circular motions until fully absorbed. Use once daily in the evening, or in the morning followed by sunscreen. For very dry skin, follow with a suitable moisturizer for enhanced results.",
    gallery: ["/images/5.png"],
  },
};