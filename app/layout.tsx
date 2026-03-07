// =============================================================================
// EMERALD EYES MIAMI — Root Layout
// =============================================================================
// Next.js 15 root layout. Loads Google Fonts (Cormorant Garamond + Manrope),
// global CSS, and wraps every page with Header, Footer, and FloatingButton.
// =============================================================================

import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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
  title: "Emerald Eyes Miami | Luxury Yacht Rental",
  description:
    "Premium yacht charters in North Miami. Sunset cruises, private parties, bachelorette events, proposals, and corporate charters on Biscayne Bay and beyond.",
  alternates: {
    canonical: "/",
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
    name: BUSINESS.name,
    description:
      "Luxury yacht charters curated from North Miami for sunset cruises, celebrations, proposals, and corporate outings.",
    url: siteUrl,
    areaServed: [
      "North Miami",
      "Miami",
      "Miami Beach",
      "Haulover",
      "Biscayne Bay",
    ],
    sameAs: [
      "https://instagram.com/EmeraldEyesMiami",
      "https://tiktok.com/@EmeraldEyesMiami",
    ],
    telephone: BUSINESS.phone || undefined,
    email: BUSINESS.email || undefined,
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
      </body>
    </html>
  );
}
