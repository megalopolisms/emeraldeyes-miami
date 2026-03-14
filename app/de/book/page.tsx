import type { Metadata } from "next";
import { Suspense } from "react";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Yachtcharter in North Miami Buchen | Emerald Eyes Miami",
  description:
    "Nutzen Sie den Planer von Emerald Eyes Miami, um Ihren Charter in Minuten zusammenzustellen.",
  alternates: {
    canonical: "/de/book",
    languages: { en: "/book", es: "/es/book", pt: "/pt/book", de: "/de/book", fr: "/fr/book", zh: "/zh/book", ja: "/ja/book" },
  },
  openGraph: {
    title: "Yachtcharter in North Miami Buchen | Emerald Eyes Miami",
    description:
      "Nutzen Sie den Planer von Emerald Eyes Miami, um Ihren Charter in Minuten zusammenzustellen.",
    url: "/de/book",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Yachtcharter in North Miami Buchen | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yachtcharter in North Miami Buchen | Emerald Eyes Miami",
    description:
      "Nutzen Sie den Planer von Emerald Eyes Miami, um Ihren Charter in Minuten zusammenzustellen.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function BookPageDE() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
