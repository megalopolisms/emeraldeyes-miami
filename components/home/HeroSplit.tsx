// =============================================================================
// EMERALD EYES MIAMI — Split-Screen Hero Container
// =============================================================================
// Full viewport height. Left half: LogoPanel. Right half: WhatsApp-style chat
// in a phone mockup frame. Mobile: stacks vertically.
// =============================================================================

"use client";

import Image from "next/image";
import LogoPanel from "@/components/home/LogoPanel";
import ChatWidget from "@/components/chat/ChatWidget";

export default function HeroSplit() {
  return (
    <section className="relative flex h-screen flex-col md:flex-row">
      {/* Left Half — Logo Panel */}
      <div className="h-[30vh] w-full md:h-full md:w-1/2">
        <LogoPanel />
      </div>

      {/* Right Half — Chat in phone mockup */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center md:w-1/2 bg-[--color-navy] md:-ml-[10%] md:pt-[5vh]">
        {/* Phone mockup container */}
        <div className="relative w-full max-w-[360px] md:h-[60vh] flex flex-col flex-1 md:flex-initial mx-auto">
          {/* Phone frame */}
          <div className="flex flex-col flex-1 md:flex-initial md:h-full overflow-hidden md:rounded-[2rem] md:border-2 md:border-[#2EC4A5]/70 md:shadow-[0_0_30px_rgba(46,196,165,0.4)]">
            {/* Phone notch (desktop only) */}
            <div
              className="hidden md:flex items-center justify-center py-1.5"
              style={{ backgroundColor: "#1a5c4f" }}
            >
              <div className="w-20 h-1 rounded-full bg-white/10" />
            </div>

            {/* Chat fills the phone */}
            <div className="flex-1 min-h-0">
              <ChatWidget mode="panel" />
            </div>
          </div>
        </div>

        {/* City logos + trust line below phone (desktop) */}
        <div className="hidden md:flex flex-col items-center gap-3 mt-5">
          <div className="flex items-center justify-center gap-6">
            <div className="bg-white rounded-lg p-2 h-[5.5rem] flex items-center">
              <Image
                src="/images/miamidade.png"
                alt="Miami-Dade County"
                width={500}
                height={235}
                className="h-[3.8rem] w-auto"
              />
            </div>
            <Image
              src="/images/northmiamibeach.png"
              alt="North Miami Beach"
              width={840}
              height={885}
              className="h-[6.6rem] w-auto rounded-full ml-3"
            />
            <Image
              src="/images/bbb.png"
              alt="BBB Accredited Business"
              width={768}
              height={392}
              className="h-[6.9rem] w-auto"
            />
          </div>
          <div className="flex gap-4 text-[10px] text-white/30">
            <span>Responds in 1 hour</span>
            <span>|</span>
            <span>100+ charters/year</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator — centered at bottom of hero */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-[#2EC4A5]/60">
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-[#2EC4A5]/80"
        >
          <path
            d="M4 7l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
