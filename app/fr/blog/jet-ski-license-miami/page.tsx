import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Permis Jet Ski à Miami: Tout ce que Vous Devez Savoir | Emerald Eyes Miami",
  description:
    "Faut-il un permis pour le jet ski à Miami? Guide complet des exigences.",
  keywords: [
    "permis jet ski Miami",
    "certification navigation Floride"
  ],
  alternates: {
    canonical: "/fr/blog/jet-ski-license-miami",
    languages: { en: "/blog/jet-ski-license-miami", es: "/es/blog/jet-ski-license-miami", pt: "/pt/blog/jet-ski-license-miami", de: "/de/blog/jet-ski-license-miami", fr: "/fr/blog/jet-ski-license-miami", zh: "/zh/blog/jet-ski-license-miami", ja: "/ja/blog/jet-ski-license-miami" },
  },
  openGraph: {
    title:
      "Permis Jet Ski à Miami: Tout ce que Vous Devez Savoir | Emerald Eyes Miami",
    description:
      "Faut-il un permis pour le jet ski à Miami? Guide complet des exigences.",
    url: "/fr/blog/jet-ski-license-miami",
    type: "article",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Permis Jet Ski à Miami: Tout ce que Vous Devez Savoir | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Permis Jet Ski à Miami: Tout ce que Vous Devez Savoir | Emerald Eyes Miami",
    description:
      "Faut-il un permis pour le jet ski à Miami? Guide complet des exigences.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/jet-ski-license-miami/page";
