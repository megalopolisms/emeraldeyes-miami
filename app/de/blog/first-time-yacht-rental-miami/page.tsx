import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Erstmals eine Yacht in Miami Mieten: Kompletter Guide | Emerald Eyes Miami",
  description:
    "Alles was Sie für Ihre erste Yachtmiete in Miami wissen müssen.",
  keywords: [
    "erstmals Yacht mieten Miami",
    "Yacht Anfänger Guide"
  ],
  alternates: {
    canonical: "/de/blog/first-time-yacht-rental-miami",
    languages: { en: "/blog/first-time-yacht-rental-miami", es: "/es/blog/first-time-yacht-rental-miami", pt: "/pt/blog/first-time-yacht-rental-miami", de: "/de/blog/first-time-yacht-rental-miami", fr: "/fr/blog/first-time-yacht-rental-miami", zh: "/zh/blog/first-time-yacht-rental-miami", ja: "/ja/blog/first-time-yacht-rental-miami" },
  },
  openGraph: {
    title:
      "Erstmals eine Yacht in Miami Mieten: Kompletter Guide | Emerald Eyes Miami",
    description:
      "Alles was Sie für Ihre erste Yachtmiete in Miami wissen müssen.",
    url: "/de/blog/first-time-yacht-rental-miami",
    type: "article",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Erstmals eine Yacht in Miami Mieten: Kompletter Guide | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Erstmals eine Yacht in Miami Mieten: Kompletter Guide | Emerald Eyes Miami",
    description:
      "Alles was Sie für Ihre erste Yachtmiete in Miami wissen müssen.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/first-time-yacht-rental-miami/page";
