import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Haulover Sandbank: Kompletter Yachtcharter-Guide | Emerald Eyes Miami",
  description:
    "Alles was Sie über einen Besuch der Haulover Sandbank per Yachtcharter wissen müssen.",
  keywords: [
    "Haulover Sandbank Yachtcharter",
    "Sandbank Miami"
  ],
  alternates: {
    canonical: "/de/blog/haulover-sandbar-yacht-charter-miami",
    languages: { en: "/blog/haulover-sandbar-yacht-charter-miami", es: "/es/blog/haulover-sandbar-yacht-charter-miami", pt: "/pt/blog/haulover-sandbar-yacht-charter-miami", de: "/de/blog/haulover-sandbar-yacht-charter-miami", fr: "/fr/blog/haulover-sandbar-yacht-charter-miami", zh: "/zh/blog/haulover-sandbar-yacht-charter-miami", ja: "/ja/blog/haulover-sandbar-yacht-charter-miami" },
  },
  openGraph: {
    title:
      "Haulover Sandbank: Kompletter Yachtcharter-Guide | Emerald Eyes Miami",
    description:
      "Alles was Sie über einen Besuch der Haulover Sandbank per Yachtcharter wissen müssen.",
    url: "/de/blog/haulover-sandbar-yacht-charter-miami",
    type: "article",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbank: Kompletter Yachtcharter-Guide | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Haulover Sandbank: Kompletter Yachtcharter-Guide | Emerald Eyes Miami",
    description:
      "Alles was Sie über einen Besuch der Haulover Sandbank per Yachtcharter wissen müssen.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/blog/haulover-sandbar-yacht-charter-miami/page";
