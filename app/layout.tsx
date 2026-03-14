// =============================================================================
// EMERALD EYES MIAMI — Root Layout
// =============================================================================
// Next.js 15 root layout. Loads Google Fonts (Cormorant Garamond + Manrope),
// global CSS, and wraps every page with Header, Footer, and FloatingButton.
// =============================================================================

import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { BUSINESS, BASE_PATH } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButton from "@/components/chat/FloatingButton";
import { LanguageProvider } from "@/lib/language-context";

// ---------------------------------------------------------------------------
// Google Fonts
// ---------------------------------------------------------------------------
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
const siteUrl = BUSINESS.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Miami Yacht Charters & Rentals | Emerald Eyes Miami",
  description:
    "Premium yacht charters in Miami. Sunset cruises, private parties, bachelorette events, proposals, and corporate charters on Biscayne Bay and beyond.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      pt: "/pt",
      de: "/de",
      fr: "/fr",
      zh: "/zh",
      ja: "/ja",
    },
  },
  openGraph: {
    title: "Emerald Eyes Miami | Luxury Yacht Rental",
    description:
      "Premium yacht charters in North Miami. Sunset cruises, private parties, bachelorette events, proposals, and corporate charters on Biscayne Bay and beyond.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Emerald Eyes Miami",
    images: [
      {
        url: `${BASE_PATH}/images/emeraldeyes.jpg`,
        width: 784,
        height: 1168,
        alt: "Emerald Eyes Miami logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Eyes Miami | Luxury Yacht Rental",
    description:
      "Premium yacht charters in North Miami. Sunset cruises, private parties, bachelorette events, proposals, and corporate charters on Biscayne Bay and beyond.",
    images: [`${BASE_PATH}/images/emeraldeyes.jpg`],
  },
  icons: {
    icon: `${BASE_PATH}/images/emeraldeyes.jpg`,
    apple: `${BASE_PATH}/images/emeraldeyes.jpg`,
  },
  manifest: `${BASE_PATH}/manifest.json`,
  other: {
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },
};

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: BUSINESS.name,
    alternateName: "Emerald Eyes Yacht Charter",
    description:
      "Luxury yacht charters curated from North Miami for sunset cruises, celebrations, proposals, and corporate outings on Biscayne Bay.",
    url: siteUrl,
    image: `${siteUrl}/images/emeraldeyes.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/emeraldeyes.jpg`,
    },
    priceRange: "$$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Cash, Zelle, Venmo",
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Miami",
      addressRegion: "FL",
      postalCode: "33181",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.8903,
      longitude: -80.1864,
    },
    areaServed: [
      { "@type": "City", name: "North Miami" },
      { "@type": "City", name: "Miami" },
      { "@type": "City", name: "Miami Beach" },
      { "@type": "City", name: "Aventura" },
      { "@type": "City", name: "Sunny Isles Beach" },
      { "@type": "City", name: "Bal Harbour" },
    ],
    serviceType: [
      "Yacht Charter",
      "Sunset Cruise",
      "Bachelorette Party Boat",
      "Corporate Yacht Event",
      "Proposal Yacht Package",
      "Haulover Sandbar Trip",
    ],
    sameAs: [
      "https://instagram.com/EmeraldEyesMiami",
      "https://tiktok.com/@EmeraldEyesMiami",
    ],
    telephone: BUSINESS.phone || undefined,
    email: BUSINESS.email || undefined,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <LanguageProvider>
          {/* Fixed navigation bar */}
          <Header />

          {/* Page content */}
          {children}

          {/* Site footer */}
          <Footer />

          {/* Floating chat button (hidden on homepage) */}
          <FloatingButton />
        </LanguageProvider>
        <GoogleAnalytics gaId="G-L456NWD86C" />
      </body>
    </html>
  );
}
