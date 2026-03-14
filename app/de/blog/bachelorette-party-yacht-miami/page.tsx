import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Junggesellinnenabschied auf Yacht Miami: Kompletter Guide | Emerald Eyes Miami",
  description:
    "Planen Sie den perfekten Junggesellinnenabschied auf einer Yacht in Miami.",
  keywords: [
    "Junggesellinnenabschied Yacht Miami",
    "Bachelorette Party Boot Miami"
  ],
  alternates: {
    canonical: "/de/blog/bachelorette-party-yacht-miami",
    languages: { en: "/blog/bachelorette-party-yacht-miami", es: "/es/blog/bachelorette-party-yacht-miami", pt: "/pt/blog/bachelorette-party-yacht-miami", de: "/de/blog/bachelorette-party-yacht-miami", fr: "/fr/blog/bachelorette-party-yacht-miami", zh: "/zh/blog/bachelorette-party-yacht-miami", ja: "/ja/blog/bachelorette-party-yacht-miami" },
  },
  openGraph: {
    title:
      "Junggesellinnenabschied auf Yacht Miami: Kompletter Guide | Emerald Eyes Miami",
    description:
      "Planen Sie den perfekten Junggesellinnenabschied auf einer Yacht in Miami.",
    url: "/de/blog/bachelorette-party-yacht-miami",
    type: "article",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Junggesellinnenabschied auf Yacht Miami: Kompletter Guide | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Junggesellinnenabschied auf Yacht Miami: Kompletter Guide | Emerald Eyes Miami",
    description:
      "Planen Sie den perfekten Junggesellinnenabschied auf einer Yacht in Miami.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/bachelorette-party-yacht-miami/page";
