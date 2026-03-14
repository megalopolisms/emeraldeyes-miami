import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Matrimonio en Yate Miami | Emerald Eyes Miami",
  description:
    "El si mas perfecto de sus vidas. Configuraciones de propuesta en el oceano con decoraciones, fotografo y un equipo que guarda el secreto. Desde $2,500.",
  keywords: [
    "propuesta matrimonio yate Miami",
    "pedida de mano barco Miami",
    "propuesta romantica yate Miami",
    "anillo compromiso barco Miami",
  ],
  alternates: {
    canonical: "/es/experiences/proposal-yacht-miami",
    languages: {
      en: "/experiences/proposal-yacht-miami",
      es: "/es/experiences/proposal-yacht-miami",
      pt: "/pt/experiences/proposal-yacht-miami",
      de: "/de/experiences/proposal-yacht-miami",
      fr: "/fr/experiences/proposal-yacht-miami",
      zh: "/zh/experiences/proposal-yacht-miami",
      ja: "/ja/experiences/proposal-yacht-miami",
    },
  },
  openGraph: {
    title: "Propuesta de Matrimonio en Yate Miami | Emerald Eyes Miami",
    description:
      "Propuestas de matrimonio en el oceano. Decoraciones, fotografo y un equipo que guarda el secreto.",
    url: "/es/experiences/proposal-yacht-miami",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Propuesta de matrimonio en yate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta de Matrimonio en Yate Miami | Emerald Eyes Miami",
    description:
      "El si mas perfecto. Decoraciones, fotografo y un equipo que guarda el secreto.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/proposal-yacht-miami/page";
