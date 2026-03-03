import type { Metadata } from "next";
import {
  Cormorant_Garamond,
} from "next/font/google";
import localFont from "next/font/local";
import Cursor from "@/components/ui/Cursor";
import ProgressBar from "@/components/ui/ProgressBar";
import RouteLoader from "@/components/ui/RouteLoader";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  preload: false,
  adjustFontFallback: false,
});

const montserrat = localFont({
  variable: "--font-montserrat",
  src: [
    {
      path: "../Montserrat (1)/Montserrat-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../Montserrat (1)/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  display: "swap",
  preload: false,
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verrdelle.com"),
  title: "Verrdelle — Imperial Botanical Atelier",
  description:
    "Where ancient ritual meets modern ceremony. Luxury skincare elevated to imperial status.",
  openGraph: {
    title: "Verrdelle — Imperial Botanical Atelier",
    description:
      "Where ancient ritual meets modern ceremony. Luxury skincare elevated to imperial status.",
    type: "website",
    url: "https://verrdelle.com",
    siteName: "Verrdelle",
    images: [
      {
        url: "/images/1.png",
        width: 1200,
        height: 630,
        alt: "Verrdelle Vitamin C Oil Serum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verrdelle — Imperial Botanical Atelier",
    description:
      "Where ancient ritual meets modern ceremony. Luxury skincare elevated to imperial status.",
    images: ["/images/1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        <LenisProvider>
          <RouteLoader />
          <Cursor />
          <ProgressBar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
