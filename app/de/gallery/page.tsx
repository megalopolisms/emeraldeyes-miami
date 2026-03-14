import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | Emerald Eyes Miami",
  description:
    "Sehen Sie, was Sie auf dem Wasser erwartet. Sonnenuntergangskreuzfahrten, Champagner-Setups, Sandbank-Vibes und Feiern auf Privatyachten in Miami.",
  keywords: [
    "Yacht Galerie Miami",
    "Yacht Innenfotos Miami",
    "Sonnenuntergang Kreuzfahrt Bilder"
  ],
  alternates: {
    canonical: "/de/gallery",
    languages: { en: "/gallery", es: "/es/gallery", pt: "/pt/gallery", de: "/de/gallery", fr: "/fr/gallery", zh: "/zh/gallery", ja: "/ja/gallery" },
  },
  openGraph: {
    title: "Galerie | Emerald Eyes Miami",
    description:
      "Sehen Sie, was Sie auf dem Wasser erwartet. Sonnenuntergangskreuzfahrten, Champagner-Setups, Sandbank-Vibes und Feiern auf Privatyachten in Miami.",
    url: "/de/gallery",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Galerie | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie | Emerald Eyes Miami",
    description:
      "Sehen Sie, was Sie auf dem Wasser erwartet. Sonnenuntergangskreuzfahrten, Champagner-Setups, Sandbank-Vibes und Feiern auf Privatyachten in Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/gallery/page";
