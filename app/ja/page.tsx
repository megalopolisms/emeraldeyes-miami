import type { Metadata } from "next";
import HeroSplit from "@/components/home/HeroSplit";
import BelowFold from "@/components/home/BelowFold";

export const metadata: Metadata = {
  title: "Emerald Eyes Miami | ノースマイアミの高級ヨットレンタル",
  description:
    "ノースマイアミで豪華なヨットチャーターをご予約ください。サンセットクルーズ、プライベートパーティー、バチェロレッテパーティー、プロポーズ、企業イベントをビスケーン湾でお楽しみいただけます。",
  keywords: [
    "マイアミヨットレンタル",
    "ノースマイアミヨットチャーター",
    "マイアミサンセットクルーズ",
    "プライベートヨットパーティー",
    "マイアミバチェロレッテヨット"
  ],
  alternates: {
    canonical: "/ja",
    languages: { en: "/", es: "/es", pt: "/pt", de: "/de", fr: "/fr", zh: "/zh", ja: "/ja" },
  },
  openGraph: {
    title: "Emerald Eyes Miami | ノースマイアミの高級ヨットレンタル",
    description:
      "ノースマイアミで豪華なヨットチャーターをご予約ください。サンセットクルーズ、プライベートパーティー、バチェロレッテパーティー、プロポーズ、企業イベントをビスケーン湾でお楽しみいただけます。",
    url: "/ja",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami — ノースマイアミの高級ヨットレンタル",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | ノースマイアミの高級ヨットレンタル",
    description:
      "ノースマイアミで豪華なヨットチャーターをご予約ください。サンセットクルーズ、プライベートパーティー、バチェロレッテパーティー、プロポーズ、企業イベントをビスケーン湾でお楽しみいただけます。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function HomePageJA() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <HeroSplit />
      <BelowFold />
    </main>
  );
}
