import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Première Location de Yacht à Miami: Guide Complet | Emerald Eyes Miami",
  description:
    "Tout ce que vous devez savoir pour votre première location de yacht à Miami.",
  keywords: [
    "première location yacht Miami",
    "guide débutant yacht"
  ],
  alternates: {
    canonical: "/fr/blog/first-time-yacht-rental-miami",
    languages: { en: "/blog/first-time-yacht-rental-miami", es: "/es/blog/first-time-yacht-rental-miami", pt: "/pt/blog/first-time-yacht-rental-miami", de: "/de/blog/first-time-yacht-rental-miami", fr: "/fr/blog/first-time-yacht-rental-miami", zh: "/zh/blog/first-time-yacht-rental-miami", ja: "/ja/blog/first-time-yacht-rental-miami" },
  },
  openGraph: {
    title:
      "Première Location de Yacht à Miami: Guide Complet | Emerald Eyes Miami",
    description:
      "Tout ce que vous devez savoir pour votre première location de yacht à Miami.",
    url: "/fr/blog/first-time-yacht-rental-miami",
    type: "article",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Première Location de Yacht à Miami: Guide Complet | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Première Location de Yacht à Miami: Guide Complet | Emerald Eyes Miami",
    description:
      "Tout ce que vous devez savoir pour votre première location de yacht à Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/first-time-yacht-rental-miami/page";
