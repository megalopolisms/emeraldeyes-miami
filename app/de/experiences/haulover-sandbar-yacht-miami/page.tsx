import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haulover Sandbank Yacht Miami | Emerald Eyes Miami",
  description:
    "Die berühmteste Sandbank-Party Miamis. Ankern Sie an der Haulover Sandbank, schwimmen Sie im türkisfarbenen Wasser und genießen Sie mit Ihrer Gruppe. Ab $2.500.",
  keywords: [
    "Haulover Sandbank Yacht Miami",
    "Sandbank Miami"
  ],
  alternates: {
    canonical: "/de/experiences/haulover-sandbar-yacht-miami",
    languages: { en: "/experiences/haulover-sandbar-yacht-miami", es: "/es/experiences/haulover-sandbar-yacht-miami", pt: "/pt/experiences/haulover-sandbar-yacht-miami", de: "/de/experiences/haulover-sandbar-yacht-miami", fr: "/fr/experiences/haulover-sandbar-yacht-miami", zh: "/zh/experiences/haulover-sandbar-yacht-miami", ja: "/ja/experiences/haulover-sandbar-yacht-miami" },
  },
  openGraph: {
    title: "Haulover Sandbank Yacht Miami | Emerald Eyes Miami",
    description:
      "Die berühmteste Sandbank-Party Miamis. Ankern, schwimmen und genießen.",
    url: "/de/experiences/haulover-sandbar-yacht-miami",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Haulover Sandbank Yacht — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulover Sandbank Yacht Miami | Emerald Eyes Miami",
    description:
      "Die berühmteste Sandbank-Party Miamis. Ankern, schwimmen und genießen.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/experiences/haulover-sandbar-yacht-miami/page";
