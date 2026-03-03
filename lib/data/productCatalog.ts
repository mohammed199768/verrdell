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
    longDescription:
      "An ultra-rich concentrated formula infused with nourishing vitamins and botanical oils, carefully formulated to support a brighter, more even-looking complexion with consistent use. From the first application, you'll notice smoother texture and a healthy glow. With continued use, the skin appears clearer, more balanced, and visibly more refined.\n\n💎 Works to:\n✔ Promote a brighter, more even skin tone\n✔ Reduce the appearance of dark spots and pigmentation\n✔ Enhance natural radiance and vitality\n✔ Deliver deep nourishment for a silky-smooth feel\n✔ Support skin renewal for a fresher, more youthful look\n\nLightweight oil-based texture with fast absorption, penetrating effectively to deliver a concentrated dose of care to your skin.\n\n🔸 For external use only.\n🔸 It is recommended to perform a patch test before first use.",
    usage:
      "1️⃣ Apply 3–5 drops to clean, dry skin.\n2️⃣ Gently massage over the face and neck using circular motions until fully absorbed.\n3️⃣ Use once daily in the evening. It can also be used in the morning, but sunscreen is recommended.\n4️⃣ Wait about one minute before applying moisturizer to help lock in hydration and maximize benefits.",
    gallery: ["/images/1.png"],
  },
  p2: {
    headline: "Luxury High-Quality Cleanser – Complete Care from Deep Cleansing to Lasting Radiance",
    longDescription:
      "A premium, high-quality cleanser designed to give your skin a complete care experience — starting with deep purification and ending with visible radiance and long-lasting softness.\n\nIts rich formula is built around a high percentage of aloe vera water, known for its soothing and deeply hydrating properties, creating the perfect base for gentle yet effective cleansing. Enriched with Vitamin B5 to boost hydration and support the skin's natural balance, along with Vitamins E, A, and C that work in harmony to nourish the skin, enhance vitality, improve firmness, and help promote a more even, radiant complexion. It also contains Frankincense Hydroxide, which helps purify the skin and enhance clarity, leaving it feeling fresh and refined.\n\nIt penetrates pores to effectively remove impurities and excess oils while delivering deep nourishment to restore natural softness and elasticity. With regular use, it helps promote a visibly brighter and more even-looking skin tone — so you can truly see and feel the difference.\n\nAn effective formula with noticeable results, giving you clean, glowing, and vibrant skin every single day.",
    usage:
      "Apply to damp skin and massage gently for 30–45 seconds. Rinse with lukewarm water, then follow with your hydrating routine.",
    gallery: ["/images/2.png"],
  },
  p3: {
    headline: "Concentrated Hyaluronic Serum – Deep Hydration with a Rich Formula",
    longDescription:
      "A high-potency professional formula combining effective hyaluronic acid with a selected blend of natural oils and nourishing vitamins to deliver complete care in one step.\n\nWorks to:\n✨ Provide intense, long-lasting hydration\n✨ Instantly improve skin plumpness and smoothness\n✨ Enhance natural radiance and glow\n✨ Support skin elasticity and renewal\n✨ Improve skin texture and promote a more even appearance\n\nMost importantly, it helps attract and retain moisture within the middle layers of the skin, supporting collagen production and overall skin vitality. Enriched with Vitamin B5, it helps soothe the skin and strengthen its natural barrier to maintain optimal moisture levels. Its lightweight, fast-absorbing texture leaves your skin soft, plump, and radiant without any greasy feel.\n\n✨ Concentrated care… with visible results from the very first uses.\n\nWhat Makes Our Hyaluronic Serum Different?\nUnlike many standard formulas, our hyaluronic serum is highly concentrated, delivering noticeable hydration and plumping effects from the first applications. It is formulated using premium-quality raw ingredients to ensure superior performance, purity, and visible results.",
    usage:
      "1️⃣ Apply 3–5 drops to clean, slightly damp skin.\n2️⃣ Gently massage over the face and neck until fully absorbed.\n3️⃣ Follow with a deep moisturizer after application to lock in hydration and enhance results.",
    gallery: ["/images/3.png"],
  },
  p4: {
    headline: "Gold Body Butter – An Intensive Luxury Care Experience",
    longDescription:
      "A true touch of luxury that gives your skin an exceptional care experience with visible and tangible results from the very first use.\n\nA concentrated formula crafted with carefully processed and highly refined shea butter, meeting the highest quality standards to deliver maximum effectiveness. It provides intense hydration and helps restore vitality to dry, tired skin.\n\nEnriched with rich cocoa butter to improve skin texture and enhance softness, and nourishing avocado butter known for supporting skin elasticity and promoting a fuller, healthier-looking appearance.\n\nThe formula is further enhanced with a select blend of vitamins that work in harmony to deeply nourish the skin, boost its radiance, and improve its overall appearance.\n\nIts rich texture glides smoothly over the skin and melts instantly, leaving it soft, velvety, and deeply hydrated for long hours without any greasy residue.\n\nGold Body Butter is not just a moisturizer — it's an intensive care experience that restores your skin's natural luxury and glow every day.",
    usage:
      "Warm between palms and glide over dry areas after showering. The rich texture melts instantly into skin for best comfort and hydration lock-in.",
    gallery: ["/images/4.png"],
  },
  p5: {
    headline: "Super Face Milk – Deep Nourishment & Intense Hydration",
    longDescription:
      "Pamper your skin with complete daily care through this nourishing face milk, featuring a rich milky texture that gently penetrates the skin to leave it silky-smooth and irresistibly soft.\n\n🧪 The Power of Nourishing Ingredients\n\nLactic Acid: Helps deeply hydrate the skin while supporting its natural barrier. It also provides gentle exfoliation to remove dead skin cells, promoting a brighter, smoother, and more plump-looking complexion.\n\nPure Aloe Vera Water: Hydrates and soothes the skin while delivering essential nutrients that enhance freshness and vitality throughout the day.\n\n⭐ Product Benefits\n✨ Deep, long-lasting hydration that helps prevent dryness and flaking.\n✨ Brighter, more radiant complexion thanks to gentle exfoliation that improves skin tone appearance.\n✨ Ultra-soft texture leaving the skin looking like baby cheeks — smooth, plump, and healthy.\n✨ Improved skin texture and reduced appearance of dullness and fatigue.\n✨ Enhanced elasticity for a more youthful, vibrant look.\n\nIts lightweight, fast-absorbing formula leaves no greasy residue and provides an instantly velvety finish.\n\nAfter application, your skin will instantly feel hydrated, silky-soft, and naturally radiant with a smooth, youthful glow.",
    usage:
      "1️⃣ Apply to clean, dry skin.\n2️⃣ Use an appropriate amount on the face and neck.\n3️⃣ Gently massage in circular motions until fully absorbed.\n4️⃣ Use once daily in the evening, or in the morning followed by sunscreen.\n5️⃣ For very dry skin, follow with a suitable moisturizer for enhanced results.",
    gallery: ["/images/5.png"],
  },
};