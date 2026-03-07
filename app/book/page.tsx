import type { Metadata } from "next";
import { Suspense } from "react";

import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
  description:
    "Use the Emerald Eyes Miami planner to build your charter in minutes. Sunset cruises, private parties, proposals, bachelorettes, and custom yacht experiences from North Miami.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book a Yacht Charter in North Miami | Emerald Eyes Miami",
    description:
      "Plan your Miami yacht charter with our interactive planner and fast follow-up from the Emerald Eyes team.",
    url: "/book",
  },
};

interface BookPageProps {
  searchParams: Promise<{
    occasion?: string | string[];
  }>;
}

export default async function BookPage({ searchParams }: BookPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialOccasion = Array.isArray(resolvedSearchParams.occasion)
    ? resolvedSearchParams.occasion[0]
    : resolvedSearchParams.occasion;

  return (
    <Suspense>
      <BookPageClient initialOccasion={initialOccasion} />
    </Suspense>
  );
}
