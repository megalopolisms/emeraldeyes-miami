import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "船隊 | Emerald Eyes Miami",
  description:
    "プライベートヨット、パーティーボート、ラグジュアリーチャーターをノースマイアミでご利用いただけます。グループとスタイルをお伝えください。最適なヨットをお探しします。",
  keywords: [
    "マイアミヨット船隊",
    "マイアミヨットサイズ",
    "ノースマイアミパーティーボート"
  ],
  alternates: {
    canonical: "/ja/fleet",
    languages: { en: "/fleet", es: "/es/fleet", pt: "/pt/fleet", de: "/de/fleet", fr: "/fr/fleet", zh: "/zh/fleet", ja: "/ja/fleet" },
  },
  openGraph: {
    title: "船隊 | Emerald Eyes Miami",
    description:
      "プライベートヨット、パーティーボート、ラグジュアリーチャーターをノースマイアミでご利用いただけます。グループとスタイルをお伝えください。最適なヨットをお探しします。",
    url: "/ja/fleet",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "船隊 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "船隊 | Emerald Eyes Miami",
    description:
      "プライベートヨット、パーティーボート、ラグジュアリーチャーターをノースマイアミでご利用いただけます。グループとスタイルをお伝えください。最適なヨットをお探しします。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export { default } from "@/app/fleet/page";
