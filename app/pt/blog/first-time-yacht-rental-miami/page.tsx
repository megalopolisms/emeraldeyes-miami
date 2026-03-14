import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Primeira Vez Alugando um Iate em Miami: Guia Completo | Emerald Eyes Miami",
  description:
    "Tudo que você precisa saber para seu primeiro aluguel de iate em Miami.",
  keywords: [
    "primeiro aluguel iate Miami",
    "primeira vez charter iate"
  ],
  alternates: {
    canonical: "/pt/blog/first-time-yacht-rental-miami",
    languages: { en: "/blog/first-time-yacht-rental-miami", es: "/es/blog/first-time-yacht-rental-miami", pt: "/pt/blog/first-time-yacht-rental-miami", de: "/de/blog/first-time-yacht-rental-miami", fr: "/fr/blog/first-time-yacht-rental-miami", zh: "/zh/blog/first-time-yacht-rental-miami", ja: "/ja/blog/first-time-yacht-rental-miami" },
  },
  openGraph: {
    title:
      "Primeira Vez Alugando um Iate em Miami: Guia Completo | Emerald Eyes Miami",
    description:
      "Tudo que você precisa saber para seu primeiro aluguel de iate em Miami.",
    url: "/pt/blog/first-time-yacht-rental-miami",
    type: "article",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Primeira Vez Alugando um Iate em Miami: Guia Completo | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Primeira Vez Alugando um Iate em Miami: Guia Completo | Emerald Eyes Miami",
    description:
      "Tudo que você precisa saber para seu primeiro aluguel de iate em Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/first-time-yacht-rental-miami/page";
