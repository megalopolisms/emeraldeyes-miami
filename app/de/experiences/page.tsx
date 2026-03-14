import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erlebnisse | Emerald Eyes Miami",
  description:
    "Sonnenuntergangskreuzfahrten, private Partys, Firmenchartern, Junggesellinnenabschiede, Heiratsanträge und Haulover-Sandbank-Abenteuer. Wählen Sie Ihr perfektes Yacht-Erlebnis in Miami.",
  keywords: [
    "Yacht Erlebnisse Miami",
    "Bootscharter Pakete Miami",
    "private Yachttouren Miami"
  ],
  alternates: {
    canonical: "/de/experiences",
    languages: { en: "/experiences", es: "/es/experiences", pt: "/pt/experiences", de: "/de/experiences", fr: "/fr/experiences", zh: "/zh/experiences", ja: "/ja/experiences" },
  },
  openGraph: {
    title: "Erlebnisse | Emerald Eyes Miami",
    description:
      "Sonnenuntergangskreuzfahrten, private Partys, Firmenchartern, Junggesellinnenabschiede, Heiratsanträge und Haulover-Sandbank-Abenteuer. Wählen Sie Ihr perfektes Yacht-Erlebnis in Miami.",
    url: "/de/experiences",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Erlebnisse | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erlebnisse | Emerald Eyes Miami",
    description:
      "Sonnenuntergangskreuzfahrten, private Partys, Firmenchartern, Junggesellinnenabschiede, Heiratsanträge und Haulover-Sandbank-Abenteuer. Wählen Sie Ihr perfektes Yacht-Erlebnis in Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/page";
