"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { useLenis } from "@/hooks/useLenis";

function LenisInner({ children }: PropsWithChildren): JSX.Element {
  useLenis();
  return <>{children}</>;
}

export function LenisProvider({ children }: PropsWithChildren): JSX.Element {
  const pathname = usePathname();
  const isCatalogue = pathname === "/catalogue";

  // On catalogue, don't use Lenis — native CSS scroll snap handles everything
  if (isCatalogue) return <>{children}</>;
  return <LenisInner>{children}</LenisInner>;
}
