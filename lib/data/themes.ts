import { ThemeName, ThemeToken } from "@/types";

export const themes: Record<ThemeName, ThemeToken> = {
  vc: {
    c: [255, 198, 84],
    gold: "#e0bb63",
    gl: "#f7dfac",
    bg: "radial-gradient(ellipse at 16% 52%,rgba(255,166,58,0.36),transparent 58%),radial-gradient(ellipse at 84% 24%,rgba(255,226,122,0.18),transparent 52%),linear-gradient(160deg,#170c04 0%,#6a330a 52%,#080707 100%)",
    glow: "radial-gradient(circle,rgba(255,201,92,0.58),transparent 72%)",
  },
  aloe: {
    c: [122, 208, 146],
    gold: "#a3d987",
    gl: "#dbf7c6",
    bg: "radial-gradient(ellipse at 20% 58%,rgba(38,128,78,0.34),transparent 56%),radial-gradient(ellipse at 80% 24%,rgba(118,224,162,0.18),transparent 50%),linear-gradient(160deg,#03170d 0%,#145130 53%,#030d08 100%)",
    glow: "radial-gradient(circle,rgba(115,216,152,0.56),transparent 70%)",
  },
  ha: {
    c: [244, 236, 224],
    gold: "#e1bf70",
    gl: "#fff1d2",
    bg: "radial-gradient(ellipse at 48% 46%,rgba(246,236,220,0.12),transparent 66%),radial-gradient(ellipse at 12% 78%,rgba(255,247,235,0.1),transparent 42%),linear-gradient(160deg,#050607 0%,#171c22 56%,#07090b 100%)",
    glow: "radial-gradient(circle,rgba(246,236,224,0.42),transparent 72%)",
  },
  goldButter: {
    c: [255, 122, 154],
    gold: "#ff8fb0",
    gl: "#ffe6ef",
    bg: "radial-gradient(ellipse at 18% 56%,rgba(255,118,151,0.34),transparent 56%),radial-gradient(ellipse at 82% 22%,rgba(255,178,206,0.24),transparent 52%),radial-gradient(ellipse at 56% 86%,rgba(255,232,201,0.12),transparent 54%),linear-gradient(160deg,#17080e 0%,#5a1f33 48%,#10070d 100%)",
    glow: "radial-gradient(circle,rgba(255,156,188,0.56),transparent 72%)",
  },
  milk: {
    c: [240, 229, 212],
    gold: "#dcc191",
    gl: "#fff2db",
    bg: "radial-gradient(ellipse at 22% 54%,rgba(246,236,218,0.16),transparent 58%),radial-gradient(ellipse at 82% 26%,rgba(255,250,238,0.14),transparent 50%),linear-gradient(160deg,#0b0c0f 0%,#21252a 56%,#0d0e10 100%)",
    glow: "radial-gradient(circle,rgba(246,236,220,0.4),transparent 74%)",
  },
};
