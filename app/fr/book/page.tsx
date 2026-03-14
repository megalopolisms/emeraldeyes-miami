import type { Metadata } from "next";
import { Suspense } from "react";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Réservez un Charter Yacht à North Miami | Emerald Eyes Miami",
  description:
    "Utilisez le planificateur Emerald Eyes Miami pour organiser votre charter en minutes.",
  alternates: {
    canonical: "/fr/book",
    languages: { en: "/book", es: "/es/book", pt: "/pt/book", de: "/de/book", fr: "/fr/book", zh: "/zh/book", ja: "/ja/book" },
  },
  openGraph: {
    title: "Réservez un Charter Yacht à North Miami | Emerald Eyes Miami",
    description:
      "Utilisez le planificateur Emerald Eyes Miami pour organiser votre charter en minutes.",
    url: "/fr/book",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Réservez un Charter Yacht à North Miami | Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Réservez un Charter Yacht à North Miami | Emerald Eyes Miami",
    description:
      "Utilisez le planificateur Emerald Eyes Miami pour organiser votre charter en minutes.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function BookPageFR() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
