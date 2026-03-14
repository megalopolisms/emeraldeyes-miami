import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despedida de Soltera en Yate Miami | Emerald Eyes Miami",
  description:
    "El escenario perfecto para la despedida. Champan, DJ, decoraciones y fotos de Instagram en el agua. La novia merece lo mejor. Desde $3,500.",
  keywords: [
    "despedida soltera yate Miami",
    "bachelorette barco Miami",
    "fiesta despedida barco Miami",
    "alquiler yate despedida Miami",
  ],
  alternates: {
    canonical: "/es/experiences/bachelorette-yacht-miami",
    languages: {
      en: "/experiences/bachelorette-yacht-miami",
      es: "/es/experiences/bachelorette-yacht-miami",
    },
  },
  openGraph: {
    title: "Despedida de Soltera en Yate Miami | Emerald Eyes Miami",
    description:
      "Champan, DJ, decoraciones y el escenario perfecto para la despedida de soltera en el agua.",
    url: "/es/experiences/bachelorette-yacht-miami",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Despedida de soltera en yate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despedida de Soltera en Yate Miami | Emerald Eyes Miami",
    description:
      "El escenario perfecto para la despedida. Champan, DJ y fotos increibles en el agua.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/bachelorette-yacht-miami/page";
