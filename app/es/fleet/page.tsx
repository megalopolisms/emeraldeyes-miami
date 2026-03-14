import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Flota | Emerald Eyes Miami",
  description:
    "Yates intimos, embarcaciones para fiestas y charters de lujo disponibles a traves de nuestra red de confianza en North Miami. Diganos su grupo y estilo — nosotros encontramos el yate perfecto.",
  keywords: [
    "flota de yates Miami",
    "tamanos de yate Miami",
    "barcos para fiestas North Miami",
    "embarcaciones charter de lujo",
    "opciones alquiler barco",
  ],
  alternates: {
    canonical: "/es/fleet",
    languages: {
      en: "/fleet",
      es: "/es/fleet",
      pt: "/pt/fleet",
      de: "/de/fleet",
      fr: "/fr/fleet",
      zh: "/zh/fleet",
      ja: "/ja/fleet",
    },
  },
  openGraph: {
    title: "Flota de Yates | Emerald Eyes Miami",
    description:
      "Desde cruceros intimos para 2 personas hasta eventos de 25+ invitados. Le encontramos la embarcacion perfecta de nuestra red curada de charters en Miami.",
    url: "/es/fleet",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Flota de yates Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flota de Yates | Emerald Eyes Miami",
    description:
      "Desde cruceros intimos para 2 personas hasta eventos de 25+ invitados.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/fleet/page";
