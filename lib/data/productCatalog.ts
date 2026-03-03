import { ProductId } from "@/types";

export interface ProductCatalogDetails {
  headline: string;
  longDescription: string;
  usage: string;
  gallery: string[];
}

export const productCatalog: Record<ProductId, ProductCatalogDetails> = {
  p1: {
    headline: "Lipid-Based Brightening Ritual",
    longDescription:
      "A precision oil serum built on ascorbyl palmitate and a multi-botanical lipid blend. Supports barrier-respecting brightening, non-irritating radiance, and deep lipid nourishment. No mineral oil, no parabens, no artificial colorants, no over-diluted actives.",
    usage:
      "Apply 2-3 drops on clean skin, morning or evening, then seal with moisturizer and daytime SPF.",
    gallery: ["/images/1.png"],
  },
  p2: {
    headline: "Comfort Botanical Cleanse",
    longDescription:
      "An aloe-forward formula with gentle glucoside surfactants and pro-vitamin B5. pH balanced, non-stripping, and designed to preserve comfort barrier integrity. No harsh sulfates, no parabens, no artificial colorants.",
    usage:
      "Massage onto damp skin for 30-45 seconds, rinse with lukewarm water, then follow with hydrating care.",
    gallery: ["/images/2.png"],
  },
  p3: {
    headline: "Structured Hydration Architecture",
    longDescription:
      "A concentrated hyaluronic formula with structured hydration matrix technology. Lightweight, non-greasy finish with elasticity appearance support. No mineral oil, no parabens, controlled batch crafted.",
    usage:
      "Use 1-2 pumps on slightly damp skin, press gently until absorbed, then layer your cream.",
    gallery: ["/images/3.png"],
  },
  p4: {
    headline: "Velvet Triple-Butter Nutrition",
    longDescription:
      "A rich body butter built on refined shea, cocoa, and avocado butter complex. Delivers a deep moisture veil with velvet finish and non-greasy melt texture. No mineral oil, no artificial colorants, disciplined butter refinement.",
    usage:
      "Warm between palms and glide over dry areas after showering for best comfort lock-in.",
    gallery: ["/images/4.png"],
  },
  p5: {
    headline: "Milky Barrier Comfort System",
    longDescription:
      "An ultra-light face milk with NMF hydration support and aloe water base. Quick absorption, barrier comfort support, and soft pearl texture. No mineral oil, no parabens, no over-diluted actives.",
    usage:
      "Apply 1-2 pumps after serum. Use morning and evening as the final hydration layer.",
    gallery: ["/images/5.png"],
  },
};
