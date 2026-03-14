import type { Metadata } from "next";
import Script from "next/script";
import FAQPageClient from "@/components/pages/FAQPageClient";

export const metadata: Metadata = {
  title:
    "マイアミヨットチャーターよくある質問 | Emerald Eyes Miami",
  description:
    "Emerald Eyes Miamiチャーターに関するよくある質問への回答。",
  alternates: {
    canonical: "/ja/faq",
    languages: { en: "/faq", es: "/es/faq", pt: "/pt/faq", de: "/de/faq", fr: "/fr/faq", zh: "/zh/faq", ja: "/ja/faq" },
  },
  openGraph: {
    title: "マイアミヨットチャーターよくある質問 | Emerald Eyes Miami",
    description:
      "Emerald Eyes Miamiチャーターに関するよくある質問への回答。",
    url: "/ja/faq",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "マイアミヨットチャーターよくある質問 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マイアミヨットチャーターよくある質問 | Emerald Eyes Miami",
    description:
      "Emerald Eyes Miamiチャーターに関するよくある質問への回答。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "チャーターはどこから出発しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "すべてのチャーターは、ノースマイアミエリアの提携マリーナから出発します。正確な詳細は予約確定後にお知らせします。",
      },
    },
    {
      "@type": "Question",
      name: "料金に含まれるものは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "各チャーターには、免許付きキャプテン、クルー、燃料、基本アメニティ、ボトルウォーター、氷、サウンドシステムが含まれます。写真撮影、DJ、ケータリングなどの追加オプションは別料金です。",
      },
    },
    {
      "@type": "Question",
      name: "自分の食べ物や飲み物を持ち込めますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。ご自身の食べ物や飲み物をお持ちいただけます。手間なしの体験をご希望の場合、ケータリングとボトルサービスの手配も可能です。",
      },
    },
    {
      "@type": "Question",
      name: "キャプテンは提供されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。キャプテンとクルーが含まれていますので、体験に集中していただけます。",
      },
    },
    {
      "@type": "Question",
      name: "天候が変わったらどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "各チャーター前に気象条件を注意深く監視しています。天候により出航が安全でない場合、日程変更のお手伝いをします。",
      },
    }
  ],
};

export default function FAQPageJA() {
  return (
    <>
      <Script
        id="faq-schema-ja"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
