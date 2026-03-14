import type { Metadata } from "next";
import { Suspense } from "react";

import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
  description:
    "Use the Emerald Eyes Miami planner to build your charter in minutes. Sunset cruises, private parties, proposals, bachelorettes, and custom yacht experiences from North Miami.",
  keywords: [
    "book yacht Miami",
    "rent a boat North Miami",
    "reserve a yacht charter Miami",
    "Miami yacht booking",
  ],
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
    description:
      "Plan your Miami yacht charter with our interactive planner and fast follow-up from the Emerald Eyes team.",
    url: "/book",
    type: "website",
    images: [
      {
        url: "/images/emeraldeyes.jpg",
        width: 784,
        height: 1168,
        alt: "Book a yacht charter — Emerald Eyes Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
    description:
      "Plan your Miami yacht charter with our interactive planner and fast follow-up from the Emerald Eyes team.",
    images: ["/images/emeraldeyes.jpg"],
  },
};

export default function BookPage() {
  return (
    <main itemScope itemType="http://schema.org/WebPage">
      <Suspense>
        <BookPageClient />
      </Suspense>
    </main>
  );
}
