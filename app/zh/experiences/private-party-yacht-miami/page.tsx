import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迈阿密私人游艇派对 | Emerald Eyes Miami",
  description:
    "您的船。您的规则。您的歌单。生日、庆祝活动或只是因为想要。完整音响系统和开瓶服务。起价$3,500。",
  keywords: [
    "迈阿密私人游艇派对",
    "迈阿密游船派对"
  ],
  alternates: {
    canonical: "/zh/experiences/private-party-yacht-miami",
    languages: { en: "/experiences/private-party-yacht-miami", es: "/es/experiences/private-party-yacht-miami", pt: "/pt/experiences/private-party-yacht-miami", de: "/de/experiences/private-party-yacht-miami", fr: "/fr/experiences/private-party-yacht-miami", zh: "/zh/experiences/private-party-yacht-miami", ja: "/ja/experiences/private-party-yacht-miami" },
  },
  openGraph: {
    title: "迈阿密私人游艇派对 | Emerald Eyes Miami",
    description:
      "水上庆祝。音响系统、开瓶服务和营造完美氛围的船员。",
    url: "/zh/experiences/private-party-yacht-miami",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/party.jpg",
        width: 784,
        height: 1168,
        alt: "私人游艇派对 — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "迈阿密私人游艇派对 | Emerald Eyes Miami",
    description:
      "水上庆祝。音响系统、开瓶服务和营造完美氛围的船员。",
    images: ["/images/party.jpg"],
  },
};

export { default } from "@/app/experiences/private-party-yacht-miami/page";
