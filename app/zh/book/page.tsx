import type { Metadata } from "next";
import { Suspense } from "react";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "预订北迈阿密游艇包船 | Emerald Eyes Miami",
  description:
    "使用Emerald Eyes Miami规划器，几分钟内安排您的包船。",
  alternates: {
    canonical: "/zh/book",
    languages: { en: "/book", es: "/es/book", pt: "/pt/book", de: "/de/book", fr: "/fr/book", zh: "/zh/book", ja: "/ja/book" },
  },
  openGraph: {
    title: "预订北迈阿密游艇包船 | Emerald Eyes Miami",
    description:
      "使用Emerald Eyes Miami规划器，几分钟内安排您的包船。",
    url: "/zh/book",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "预订北迈阿密游艇包船 | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "预订北迈阿密游艇包船 | Emerald Eyes Miami",
    description:
      "使用Emerald Eyes Miami规划器，几分钟内安排您的包船。",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function BookPageZH() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
