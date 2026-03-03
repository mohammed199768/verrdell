export type ThemeName = "vc" | "aloe" | "ha" | "goldButter" | "milk";
export type ProductId = "p1" | "p2" | "p3" | "p4" | "p5";

export interface ProductStat {
  value: string;
  label: string;
}

export interface Product {
  id: string;
  prodId: ProductId;
  theme: ThemeName;
  num: string;
  ghost: string;
  title: string;
  body: string;
  ingredient: string;
  stats: ProductStat[];
  seriesLabel: string;
  image: string;
}

export interface ThemeToken {
  c: [number, number, number];
  gold: string;
  gl: string;
  bg: string;
  glow: string;
}

export interface ParallaxOffset {
  x: number;
  y: number;
}
