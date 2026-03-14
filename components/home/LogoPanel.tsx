// =============================================================================
// EMERALD EYES MIAMI — Left Panel of Split-Screen Hero
// =============================================================================
// Centers the brand logo with Framer Motion fade-in + scale animation.
// Subtle emerald glow gradient at the bottom edge.
// =============================================================================

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function LogoPanel() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center bg-[--color-navy] px-8">
      {/* ----------------------------------------------------------------- */}
      {/* Logo with Entrance Animation                                      */}
      {/* ----------------------------------------------------------------- */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <Image
          src={asset("/images/emeraldeyes.jpg")}
          alt="Emerald Eyes Miami — Luxury Yacht Rental"
          width={784}
          height={1168}
          sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 512px"
          priority
          className="h-auto w-72 object-contain sm:w-80 md:w-[22rem] lg:w-[28rem] xl:w-[32rem]"
        />

        <div className="mt-6 max-w-xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Miami Yacht Charters & Rentals
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Luxury yacht rentals for sunset cruises, birthday parties,
            bachelorettes, and corporate events on Biscayne Bay.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/experiences"
              className="rounded-full border border-[--color-emerald]/35 bg-[--color-emerald]/12 px-4 py-2 text-sm font-semibold text-[--color-emerald] transition-colors hover:bg-[--color-emerald]/20"
            >
              Explore Experiences
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-white/20 hover:bg-white/6 hover:text-white"
            >
              Read Charter Guides
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ----------------------------------------------------------------- */}
      {/* Emerald Glow Gradient (Bottom Edge)                               */}
      {/* ----------------------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[--color-emerald]/10 to-transparent" />
    </div>
  );
}
