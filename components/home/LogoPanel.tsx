// =============================================================================
// EMERALD EYES MIAMI — Left Panel of Split-Screen Hero
// =============================================================================
// Centers the brand logo with Framer Motion fade-in + scale animation.
// Subtle emerald glow gradient at the bottom edge.
// =============================================================================

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <Image
          src="/images/emeraldeyes.jpg"
          alt="Emerald Eyes Miami — Luxury Yacht Rental"
          width={784}
          height={1168}
          priority
          className="h-auto w-72 object-contain sm:w-80 md:w-[22rem] lg:w-[28rem] xl:w-[32rem]"
        />
      </motion.div>

      {/* ----------------------------------------------------------------- */}
      {/* Emerald Glow Gradient (Bottom Edge)                               */}
      {/* ----------------------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[--color-emerald]/10 to-transparent" />
    </div>
  );
}
