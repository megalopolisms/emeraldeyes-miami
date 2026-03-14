import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "お問い合わせ Emerald Eyes Miami | ノースマイアミヨットチャーター",
  description:
    "Emerald Eyes Miamiにチャーターのご質問やプランニングについてお問い合わせください。",
  alternates: {
    canonical: "/ja/contact",
    languages: { en: "/contact", es: "/es/contact", pt: "/pt/contact", de: "/de/contact", fr: "/fr/contact", zh: "/zh/contact", ja: "/ja/contact" },
  },
  openGraph: {
    title: "お問い合わせ Emerald Eyes Miami | ノースマイアミヨットチャーター",
    description:
      "Emerald Eyes Miamiにチャーターのご質問やプランニングについてお問い合わせください。",
    url: "/ja/contact",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "お問い合わせ Emerald Eyes Miami | ノースマイアミヨットチャーター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ Emerald Eyes Miami | ノースマイアミヨットチャーター",
    description:
      "Emerald Eyes Miamiにチャーターのご質問やプランニングについてお問い合わせください。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function ContactPageJA() {
  return (
    <main itemScope itemType="http://schema.org/ContactPage">
      <ContactPageClient />
    </main>
  );
}
