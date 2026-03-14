import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiesta Privada en Yate Miami | Emerald Eyes Miami",
  description:
    "Tu barco. Tus reglas. Tu playlist. Cumpleanos, celebraciones o simplemente porque si. Sistema de sonido completo, servicio de botellas y una tripulacion que sabe ambientar. Desde $3,500.",
  keywords: [
    "fiesta privada yate Miami",
    "fiesta en barco Miami",
    "cumpleanos yate Miami",
    "celebracion barco Miami",
  ],
  alternates: {
    canonical: "/es/experiences/private-party-yacht-miami",
    languages: {
      en: "/experiences/private-party-yacht-miami",
      es: "/es/experiences/private-party-yacht-miami",
      pt: "/pt/experiences/private-party-yacht-miami",
      de: "/de/experiences/private-party-yacht-miami",
      fr: "/fr/experiences/private-party-yacht-miami",
      zh: "/zh/experiences/private-party-yacht-miami",
      ja: "/ja/experiences/private-party-yacht-miami",
    },
  },
  openGraph: {
    title: "Fiesta Privada en Yate Miami | Emerald Eyes Miami",
    description:
      "Celebraciones en el agua. Sistema de sonido, servicio de botellas y una tripulacion que prepara la atmosfera perfecta.",
    url: "/es/experiences/private-party-yacht-miami",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/party.jpg",
        width: 784,
        height: 1168,
        alt: "Fiesta privada en yate — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiesta Privada en Yate Miami | Emerald Eyes Miami",
    description:
      "Tu barco. Tus reglas. Tu playlist. Sistema de sonido, botellas y buenas vibras.",
    images: ["/images/party.jpg"],
  },
};

export { default } from "@/app/experiences/private-party-yacht-miami/page";
