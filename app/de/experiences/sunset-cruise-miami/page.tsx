import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonnenuntergangskreuzfahrt Miami | Emerald Eyes Miami",
  description:
    "Erleben Sie die Skyline von Miami im Sonnenuntergang. Intime Gruppen, Champagner und ein unvergesslicher Abend. Ab $2.500.",
  keywords: [
    "Sonnenuntergang Kreuzfahrt Miami",
    "romantische Bootsfahrt Miami"
  ],
  alternates: {
    canonical: "/de/experiences/sunset-cruise-miami",
    languages: { en: "/experiences/sunset-cruise-miami", es: "/es/experiences/sunset-cruise-miami", pt: "/pt/experiences/sunset-cruise-miami", de: "/de/experiences/sunset-cruise-miami", fr: "/fr/experiences/sunset-cruise-miami", zh: "/zh/experiences/sunset-cruise-miami", ja: "/ja/experiences/sunset-cruise-miami" },
  },
  openGraph: {
    title: "Sonnenuntergangskreuzfahrt Miami | Emerald Eyes Miami",
    description:
      "Goldene Stunde auf dem Wasser. Champagner, Meeresbrise und Miamis Skyline bei Sonnenuntergang.",
    url: "/de/experiences/sunset-cruise-miami",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/sunset.jpg",
        width: 784,
        height: 1168,
        alt: "Sonnenuntergangskreuzfahrt Biscayne Bay — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonnenuntergangskreuzfahrt Miami | Emerald Eyes Miami",
    description:
      "Goldene Stunde auf dem Wasser. Champagner, Meeresbrise und Miamis Skyline bei Sonnenuntergang.",
    images: ["/images/sunset.jpg"],
  },
};

export { default } from "@/app/experiences/sunset-cruise-miami/page";
