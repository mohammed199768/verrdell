"use client";

interface ProductGlowProps {
  glow: string;
}

export default function ProductGlow({ glow }: ProductGlowProps): JSX.Element {
  return (
    <div
      className="absolute h-[220px] w-[220px] rounded-full opacity-45 blur-[65px] transition-[background] duration-[1500ms] md:h-[320px] md:w-[320px]"
      style={{ background: glow }}
      aria-hidden
    />
  );
}
