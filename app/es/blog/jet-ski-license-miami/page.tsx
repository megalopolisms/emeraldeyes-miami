import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Licencia de Jet Ski en Miami: Todo lo que Necesita Saber | Emerald Eyes Miami",
  description:
    "Necesita una licencia para manejar un jet ski en Miami? Guia completa sobre requisitos, certificacion de navegacion de Florida, edad minima y donde alquilar.",
  keywords: [
    "licencia jet ski Miami",
    "certificacion navegacion Florida",
    "requisitos jet ski Miami",
    "alquiler jet ski Miami",
  ],
  alternates: {
    canonical: "/es/blog/jet-ski-license-miami",
    languages: {
      en: "/blog/jet-ski-license-miami",
      es: "/es/blog/jet-ski-license-miami",
      pt: "/pt/blog/jet-ski-license-miami",
      de: "/de/blog/jet-ski-license-miami",
      fr: "/fr/blog/jet-ski-license-miami",
      zh: "/zh/blog/jet-ski-license-miami",
      ja: "/ja/blog/jet-ski-license-miami",
    },
  },
  openGraph: {
    title: "Licencia de Jet Ski en Miami: Todo lo que Necesita Saber",
    description:
      "Guia completa sobre requisitos de licencia de jet ski en Miami y Florida.",
    url: "/es/blog/jet-ski-license-miami",
    type: "article",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Licencia jet ski Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licencia de Jet Ski en Miami: Todo lo que Necesita Saber",
    description:
      "Necesita licencia para jet ski en Miami? Todo lo que debe saber.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/jet-ski-license-miami/page";
