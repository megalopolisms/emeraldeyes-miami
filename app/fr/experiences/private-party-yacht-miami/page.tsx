import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fête Privée en Yacht Miami | Emerald Eyes Miami",
  description:
    "Votre bateau. Vos règles. Votre playlist. Anniversaires, célébrations ou juste pour le plaisir. Sono, service bouteilles et équipage. À partir de 3 500 $.",
  keywords: [
    "fête privée yacht Miami",
    "fête bateau Miami"
  ],
  alternates: {
    canonical: "/fr/experiences/private-party-yacht-miami",
    languages: { en: "/experiences/private-party-yacht-miami", es: "/es/experiences/private-party-yacht-miami", pt: "/pt/experiences/private-party-yacht-miami", de: "/de/experiences/private-party-yacht-miami", fr: "/fr/experiences/private-party-yacht-miami", zh: "/zh/experiences/private-party-yacht-miami", ja: "/ja/experiences/private-party-yacht-miami" },
  },
  openGraph: {
    title: "Fête Privée en Yacht Miami | Emerald Eyes Miami",
    description:
      "Célébrations sur l'eau. Sono, service bouteilles et un équipage qui crée l'ambiance parfaite.",
    url: "/fr/experiences/private-party-yacht-miami",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/party.jpg",
        width: 784,
        height: 1168,
        alt: "Fête privée en yacht — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fête Privée en Yacht Miami | Emerald Eyes Miami",
    description:
      "Célébrations sur l'eau. Sono, service bouteilles et un équipage qui crée l'ambiance parfaite.",
    images: ["/images/party.jpg"],
  },
};

export { default } from "@/app/experiences/private-party-yacht-miami/page";
