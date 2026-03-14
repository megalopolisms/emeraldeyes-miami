import type { Metadata } from "next";
import { Suspense } from "react";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "ノースマイアミヨットチャーター予約 | Emerald Eyes Miami",
  description:
    "Emerald Eyes Miamiのプランナーで数分でチャーターを組み立てましょう。",
  alternates: {
    canonical: "/ja/book",
    languages: { en: "/book", es: "/es/book", pt: "/pt/book", de: "/de/book", fr: "/fr/book", zh: "/zh/book", ja: "/ja/book" },
  },
  openGraph: {
    title: "ノースマイアミヨットチャーター予約 | Emerald Eyes Miami",
    description:
      "Emerald Eyes Miamiのプランナーで数分でチャーターを組み立てましょう。",
    url: "/ja/book",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "ノースマイアミヨットチャーター予約 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ノースマイアミヨットチャーター予約 | Emerald Eyes Miami",
    description:
      "Emerald Eyes Miamiのプランナーで数分でチャーターを組み立てましょう。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function BookPageJA() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
