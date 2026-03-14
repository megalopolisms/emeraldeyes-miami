import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande en Mariage en Yacht Miami | Emerald Eyes Miami",
  description:
    "Le oui le plus parfait de vos vies. Configurations de demande sur l'océan avec décorations, photographe et une équipe qui garde le secret. À partir de 2 500 $.",
  keywords: [
    "demande mariage yacht Miami",
    "proposition romantique yacht Miami"
  ],
  alternates: {
    canonical: "/fr/experiences/proposal-yacht-miami",
    languages: { en: "/experiences/proposal-yacht-miami", es: "/es/experiences/proposal-yacht-miami", pt: "/pt/experiences/proposal-yacht-miami", de: "/de/experiences/proposal-yacht-miami", fr: "/fr/experiences/proposal-yacht-miami", zh: "/zh/experiences/proposal-yacht-miami", ja: "/ja/experiences/proposal-yacht-miami" },
  },
  openGraph: {
    title: "Demande en Mariage en Yacht Miami | Emerald Eyes Miami",
    description:
      "Demandes en mariage sur l'océan. Décorations, photographe et équipe qui garde le secret.",
    url: "/fr/experiences/proposal-yacht-miami",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Demande en mariage en yacht — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demande en Mariage en Yacht Miami | Emerald Eyes Miami",
    description:
      "Demandes en mariage sur l'océan. Décorations, photographe et équipe qui garde le secret.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/proposal-yacht-miami/page";
