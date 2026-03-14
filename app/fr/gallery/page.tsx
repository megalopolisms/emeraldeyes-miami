import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | Emerald Eyes Miami",
  description:
    "Découvrez ce qui vous attend sur l'eau. Croisières au coucher du soleil, montages champagne, ambiances banc de sable et célébrations sur yachts privés à Miami.",
  keywords: [
    "galerie yacht Miami",
    "photos intérieur yacht Miami",
    "photos croisière coucher soleil"
  ],
  alternates: {
    canonical: "/fr/gallery",
    languages: { en: "/gallery", es: "/es/gallery", pt: "/pt/gallery", de: "/de/gallery", fr: "/fr/gallery", zh: "/zh/gallery", ja: "/ja/gallery" },
  },
  openGraph: {
    title: "Galerie | Emerald Eyes Miami",
    description:
      "Découvrez ce qui vous attend sur l'eau. Croisières au coucher du soleil, montages champagne, ambiances banc de sable et célébrations sur yachts privés à Miami.",
    url: "/fr/gallery",
    type: "website",
    locale: "fr_FR",
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
      "Découvrez ce qui vous attend sur l'eau. Croisières au coucher du soleil, montages champagne, ambiances banc de sable et célébrations sur yachts privés à Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/gallery/page";
