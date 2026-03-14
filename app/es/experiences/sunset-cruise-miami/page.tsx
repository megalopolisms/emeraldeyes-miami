import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crucero al Atardecer en Miami | Emerald Eyes Miami",
  description:
    "Vea el skyline de Miami brillar mientras el sol se oculta en el horizonte. Grupos intimos, champan y una velada inolvidable. Desde $2,500.",
  keywords: [
    "crucero atardecer Miami",
    "paseo romantico en barco Miami",
    "charter yate atardecer Miami",
    "alquiler barco atardecer",
  ],
  alternates: {
    canonical: "/es/experiences/sunset-cruise-miami",
    languages: {
      en: "/experiences/sunset-cruise-miami",
      es: "/es/experiences/sunset-cruise-miami",
      pt: "/pt/experiences/sunset-cruise-miami",
      de: "/de/experiences/sunset-cruise-miami",
      fr: "/fr/experiences/sunset-cruise-miami",
      zh: "/zh/experiences/sunset-cruise-miami",
      ja: "/ja/experiences/sunset-cruise-miami",
    },
  },
  openGraph: {
    title: "Crucero al Atardecer en Miami | Emerald Eyes Miami",
    description:
      "Hora dorada en el agua. Champan, brisa del oceano y el skyline de Miami al atardecer. Reserve su crucero privado.",
    url: "/es/experiences/sunset-cruise-miami",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/sunset.jpg",
        width: 784,
        height: 1168,
        alt: "Crucero al atardecer en Biscayne Bay — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crucero al Atardecer en Miami | Emerald Eyes Miami",
    description:
      "Hora dorada en el agua. Champan, brisa del oceano y el skyline de Miami al atardecer.",
    images: ["/images/sunset.jpg"],
  },
};

export { default } from "@/app/experiences/sunset-cruise-miami/page";
