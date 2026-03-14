import type { Metadata } from "next";
import { Suspense } from "react";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Reserve um Charter de Iate em North Miami | Emerald Eyes Miami",
  description:
    "Use o planejador da Emerald Eyes Miami para montar seu charter em minutos.",
  alternates: {
    canonical: "/pt/book",
    languages: { en: "/book", es: "/es/book", pt: "/pt/book", de: "/de/book", fr: "/fr/book", zh: "/zh/book", ja: "/ja/book" },
  },
  openGraph: {
    title: "Reserve um Charter de Iate em North Miami | Emerald Eyes Miami",
    description:
      "Use o planejador da Emerald Eyes Miami para montar seu charter em minutos.",
    url: "/pt/book",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Reserve um Charter de Iate em North Miami | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve um Charter de Iate em North Miami | Emerald Eyes Miami",
    description:
      "Use o planejador da Emerald Eyes Miami para montar seu charter em minutos.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function BookPagePT() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
