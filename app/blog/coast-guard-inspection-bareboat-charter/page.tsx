// =============================================================================
// EMERALD EYES MIAMI — Blog Article: Coast Guard Inspection for Bareboat Charters
// =============================================================================
// SEO-optimized long-form guide explaining what happens during a USCG boarding
// on a bareboat charter in Miami. Combines Sasha's real-world experience with
// the legal framework (46 USC, 46 CFR, NVIC 7-94).
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title:
    "What Happens During a Coast Guard Inspection on a Bareboat Charter? | Emerald Eyes Miami",
  description:
    "A complete guide to Coast Guard boardings on bareboat yacht charters in Miami. Learn what the USCG checks, what paperwork you need, safety equipment requirements, and how to pass every time.",
  alternates: {
    canonical: "/blog/coast-guard-inspection-bareboat-charter",
  },
  openGraph: {
    title:
      "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
    description:
      "Everything you need to know about USCG boardings on bareboat charters in South Florida. Safety equipment, paperwork, passenger counts, and the bareboat structure explained.",
    url: "/blog/coast-guard-inspection-bareboat-charter",
    type: "article",
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schema
// ---------------------------------------------------------------------------
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
  description:
    "A comprehensive guide to Coast Guard boardings during bareboat yacht charters in Miami, covering safety equipment, documentation, and USCG requirements.",
  author: {
    "@type": "Organization",
    name: "Emerald Eyes Miami",
  },
  publisher: {
    "@type": "Organization",
    name: "Emerald Eyes Miami",
    url: "https://emeraldeyesmiami.com",
  },
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://emeraldeyesmiami.com/blog/coast-guard-inspection-bareboat-charter",
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function CoastGuardInspectionArticle() {
  return (
    <main>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[50vh] px-6 py-28 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-block text-sm text-[--color-emerald] mb-4 hover:underline underline-offset-4"
          >
            &larr; Back to Blog
          </Link>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            What Happens During a Coast Guard Inspection on a Bareboat Charter?
          </h1>
          <p className="text-white/50 text-sm">
            March 13, 2026 &middot; 10 min read
          </p>
        </div>
      </section>

      {/* Article Body */}
      <Section>
        <article className="max-w-3xl mx-auto prose-emerald">
          {/* Intro */}
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            If you&apos;re renting a yacht in Miami, there&apos;s a good chance
            the U.S. Coast Guard will board your vessel at some point during the
            trip. It&apos;s not a raid. It&apos;s not a sign that something went
            wrong. It&apos;s routine &mdash; and if you&apos;re on a properly
            run bareboat charter, it takes about ten minutes and you&apos;re
            back to enjoying the water.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            But most people have no idea what to expect. What do they check?
            What paperwork do they ask for? Why do they separate the crew from
            the guests? This guide breaks it all down &mdash; from the legal
            framework behind the inspection to what actually happens on the
            water, based on real experience running charters in South Florida.
          </p>

          {/* Section 1 */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            What Is a Bareboat Charter?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            Before we get into the inspection itself, it&apos;s important to
            understand the bareboat charter structure &mdash; because
            that&apos;s exactly what the Coast Guard is verifying when they
            board.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            A <strong className="text-white">bareboat charter</strong> means the
            client rents the vessel itself &mdash; without crew. The client
            becomes the temporary &ldquo;owner&rdquo; for the duration of the
            charter. They choose their own captain, they choose their own
            deckhand, and they&apos;re responsible for the operation of the
            vessel during the rental period.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            This distinction matters legally. Under Coast Guard guidance
            (specifically <strong className="text-white">NVIC 7-94</strong>), a
            bareboat charter is only valid when:
          </p>
          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The <strong className="text-white">charterer chooses</strong> the
              captain &mdash; not the vessel owner
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The <strong className="text-white">charterer pays</strong> the
              captain directly
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The captain works{" "}
              <strong className="text-white">for the charterer</strong> during
              the charter, not for the vessel owner
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The charterer can{" "}
              <strong className="text-white">dismiss the captain</strong> for
              cause
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The vessel owner may suggest qualified captains, but cannot
              effectively{" "}
              <strong className="text-white">force one specific captain</strong>{" "}
              or keep operational control
            </li>
          </ul>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            This is the framework that keeps most yacht rentals in Miami
            operating without needing a full Coast Guard Certificate of
            Inspection (COI). When the structure is legitimate, the vessel
            operates as an uninspected passenger vessel carrying six or fewer
            passengers &mdash; or as a true bareboat with up to 12.
          </p>

          {/* Section 2 */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            Why Does the Coast Guard Board Charter Vessels?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            The Coast Guard has the authority to board any vessel in U.S. waters
            at any time. For charter vessels in the Miami area &mdash; Biscayne
            Bay, Haulover, the Intracoastal, the Atlantic side &mdash; boardings
            are frequent, especially on weekends and holidays.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            They&apos;re checking for three things:
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <h3 className="text-[--color-emerald] font-semibold text-lg mb-2">
                1. Safety compliance
              </h3>
              <p className="text-white/70 text-base">
                Life jackets, fire extinguishers, life rings, navigation lights,
                visual distress signals &mdash; all the gear required under{" "}
                <strong className="text-white/90">46 C.F.R. Part 25</strong>.
              </p>
            </div>
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <h3 className="text-[--color-emerald] font-semibold text-lg mb-2">
                2. Legal charter structure
              </h3>
              <p className="text-white/70 text-base">
                Is this a legitimate bareboat? Or is the vessel owner running an
                illegal crewed charter disguised as a bareboat to avoid
                inspection requirements?
              </p>
            </div>
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <h3 className="text-[--color-emerald] font-semibold text-lg mb-2">
                3. Passenger count
              </h3>
              <p className="text-white/70 text-base">
                How many people are on board? Over 6 passengers with
                owner-provided crew triggers Subchapter T requirements (
                <strong className="text-white/90">
                  46 C.F.R. &sect; 175.110
                </strong>
                ). Over 12 on a bareboat triggers the same.
              </p>
            </div>
          </div>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            The Coast Guard actively terminates illegal charter trips. Their
            enforcement routinely focuses on too many paying passengers, no
            proper credentialed operator, fake bareboat paperwork, and
            owner-selected &ldquo;independent&rdquo; captains who are not
            actually independent.
          </p>

          {/* Section 3 */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            What Actually Happens During the Boarding
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            Here&apos;s what a typical Coast Guard boarding looks like on a
            bareboat charter in the Miami area, step by step.
          </p>

          {/* Step 1 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 1: They Separate the Crew from the Guests
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            The first thing the Coast Guard does is separate the captain and any
            crew members from the charter guests. This is intentional. They want
            to ask each group questions independently to verify that the
            bareboat arrangement is real &mdash; not a paper-only structure
            where the owner is actually running the show.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Don&apos;t be alarmed. It&apos;s standard procedure.
          </p>

          {/* Step 2 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 2: They Ask the Lead Guest Key Questions
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            The Coast Guard officer will talk to the primary charterer &mdash;
            the person who signed the charter agreement &mdash; and ask
            questions like:
          </p>
          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              <strong className="text-white">
                Who did you choose as your captain?
              </strong>{" "}
              &mdash; They want to hear that{" "}
              <em className="text-[--color-emerald]">you</em> selected them, not
              that the boat owner assigned them.
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              <strong className="text-white">
                What is the captain&apos;s name?
              </strong>{" "}
              &mdash; You should know the name of the person operating your
              vessel.
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              <strong className="text-white">
                Who is the deckhand / first mate?
              </strong>{" "}
              &mdash; Same thing. If there&apos;s crew on board, you should know
              who they are.
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              <strong className="text-white">Who is paying the captain?</strong>{" "}
              &mdash; In a bareboat, the answer must be the charterer, not the
              vessel owner.
            </li>
          </ul>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            This is the heart of the bareboat verification. The Coast Guard is
            confirming that the charterer is acting as the temporary
            &ldquo;owner&rdquo; of the vessel and made their own decisions about
            who operates it. If the answers suggest the vessel owner chose the
            captain, pays the captain, or controls the operation, the bareboat
            structure falls apart &mdash; and the trip may be terminated.
          </p>

          {/* Step 3 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 3: They Review the Charter Contract
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            The officer will ask to see the charter agreement. They&apos;re
            looking for:
          </p>
          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              <strong className="text-white">All signatures</strong> &mdash; the
              charterer and the vessel owner must have both signed
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              <strong className="text-white">Bareboat language</strong> &mdash;
              the contract should clearly state that the vessel is chartered
              without crew and that the charterer is responsible for hiring
              their own captain
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              <strong className="text-white">Dates and vessel ID</strong>{" "}
              &mdash; the contract should match the actual vessel, the actual
              date, and the actual charterer on board
            </li>
          </ul>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            A properly executed bareboat charter agreement is not optional
            &mdash; it&apos;s the legal foundation of the entire arrangement. If
            the contract is missing, unsigned, or doesn&apos;t match the
            situation on the water, that&apos;s a serious problem.
          </p>

          {/* Step 4 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 4: They Count Everyone on Board
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            A head count is standard. The number of passengers on board
            determines which federal regulations apply:
          </p>
          <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[--color-emerald] font-bold text-lg mt-0.5">
                  6 or fewer
                </span>
                <p className="text-white/70 text-base">
                  passengers with owner-provided crew: may operate as an
                  uninspected passenger vessel with a credentialed
                  &ldquo;six-pack&rdquo; captain (
                  <strong className="text-white/90">
                    46 C.F.R. &sect; 15.605
                  </strong>
                  ).
                </p>
              </div>
              <hr className="border-white/10" />
              <div className="flex items-start gap-3">
                <span className="text-[--color-emerald] font-bold text-lg mt-0.5">
                  7&ndash;12
                </span>
                <p className="text-white/70 text-base">
                  passengers on a true bareboat: still legal, but the bareboat
                  structure must be airtight.
                </p>
              </div>
              <hr className="border-white/10" />
              <div className="flex items-start gap-3">
                <span className="text-[--color-gold] font-bold text-lg mt-0.5">
                  13+
                </span>
                <p className="text-white/70 text-base">
                  passengers on a bareboat: major red flag. Triggers Subchapter
                  T requirements and likely requires a Certificate of Inspection
                  (
                  <strong className="text-white/90">
                    46 C.F.R. &sect; 176.100
                  </strong>
                  ).
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 5: They Check Vessel Registration
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            The Coast Guard will verify the vessel&apos;s registration or USCG
            Certificate of Documentation. The vessel name must match the
            paperwork. The Hull Identification Number (HIN) on the transom must
            be legible. If the vessel is documented, it needs a current, valid
            certificate under{" "}
            <strong className="text-white">46 U.S.C. Chapter 121</strong> and{" "}
            <strong className="text-white">46 C.F.R. Part 67</strong>.
          </p>

          {/* Step 6 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 6: They Inspect Safety Equipment
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            This is the most hands-on part of the inspection. The officer will
            physically check for:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10">
              <div className="text-3xl">🦺</div>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Life Jackets (PFDs)
                </h4>
                <p className="text-white/70 text-base mt-1">
                  One USCG-approved Type I, II, or III life jacket for every
                  person on board &mdash; including the captain. Plus
                  appropriately sized child PFDs if children are aboard.
                  Required under{" "}
                  <strong className="text-white/90">
                    46 C.F.R. &sect; 25.25-5
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10">
              <div className="text-3xl">🧯</div>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Fire Extinguishers
                </h4>
                <p className="text-white/70 text-base mt-1">
                  Correct number and type for the vessel length. Must have a
                  current inspection date and be in working condition. Required
                  under{" "}
                  <strong className="text-white/90">
                    46 C.F.R. &sect; 25.30-20
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10">
              <div className="text-3xl">🔴</div>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Throwable Life Ring (Type IV PFD)
                </h4>
                <p className="text-white/70 text-base mt-1">
                  One Type IV throwable device &mdash; typically a ring buoy or
                  throwable cushion &mdash; required for vessels 16 feet and
                  over. Required under{" "}
                  <strong className="text-white/90">
                    46 C.F.R. &sect; 25.25-5(b)
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10">
              <div className="text-3xl">📋</div>
              <div>
                <h4 className="text-white font-semibold text-lg">Placards</h4>
                <p className="text-white/70 text-base mt-1">
                  Required safety placards must be posted in visible locations
                  &mdash; including waste discharge regulations, navigation
                  rules, and carbon monoxide warnings where applicable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10">
              <div className="text-3xl">🚨</div>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Visual Distress Signals
                </h4>
                <p className="text-white/70 text-base mt-1">
                  Three day/night pyrotechnic signals or one electric SOS light
                  plus three day signals. Must not be expired. Required under{" "}
                  <strong className="text-white/90">
                    46 C.F.R. &sect; 25.25-10
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10">
              <div className="text-3xl">🔊</div>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Sound-Producing Device
                </h4>
                <p className="text-white/70 text-base mt-1">
                  A horn or whistle audible for half a nautical mile. Vessels
                  39.4 feet and over require a mechanical horn. Required under{" "}
                  <strong className="text-white/90">
                    33 C.F.R. &sect; 83.33
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[--color-navy-light] rounded-xl p-5 border border-white/10">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Navigation Lights
                </h4>
                <p className="text-white/70 text-base mt-1">
                  Red/green bow lights, white stern light, and masthead light
                  &mdash; all functional. Required under{" "}
                  <strong className="text-white/90">33 C.F.R. Part 83</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 7: They Check the Engine Room
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            The officer may open the engine compartment for a visual inspection.
            They&apos;re looking for fuel leaks, proper ventilation, bilge
            conditions, and fire suppression readiness. On larger vessels, this
            is more thorough. On smaller charter boats, it&apos;s usually a
            quick visual check.
          </p>

          {/* Step 8 */}
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white mt-10 mb-4">
            Step 8: Captain Credentials
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            The captain must carry a valid USCG credential &mdash; typically an
            OUPV (Operator of Uninspected Passenger Vessels, also known as a
            &ldquo;six-pack license&rdquo;) or a Master license for larger
            operations. Under{" "}
            <strong className="text-white">46 C.F.R. &sect; 15.605</strong>,
            every uninspected passenger vessel must be under the direction of a
            properly credentialed operator when underway. No credential, no
            charter.
          </p>

          {/* What makes it pass */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            What Makes a Charter Pass Every Time
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            There are no tricks. A well-run bareboat charter passes a Coast
            Guard boarding because everything is genuine:
          </p>
          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The charterer genuinely chose their captain and can name them
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The charter contract is signed by all parties and on board
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The passenger count is within the legal limit
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              Every person has a life jacket
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              Fire extinguishers are current and accessible
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The life ring is ready to throw, not buried under gear
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The captain has their credential on them
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              Vessel documentation matches the boat you&apos;re on
            </li>
          </ul>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            The whole process usually takes about ten minutes. If everything
            checks out, the officer thanks the captain, sometimes hands over a
            decal, and the charter continues.
          </p>

          {/* Red flags */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            What Gets a Charter in Trouble
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            The Coast Guard has seen every shortcut. These are the things that
            get trips terminated or result in fines:
          </p>
          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The charterer doesn&apos;t know who the captain is or didn&apos;t
              choose them
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The vessel owner is on board in an operational role
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The charter contract is missing, unsigned, or clearly boilerplate
              with no real bareboat substance
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              More passengers than allowed without a Certificate of Inspection
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              Missing or expired safety equipment
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              Captain has no credential or an expired credential
            </li>
            <li className="text-white/80 text-lg leading-relaxed list-disc">
              The owner pays the captain directly (not the charterer)
            </li>
          </ul>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            If the Coast Guard determines the bareboat structure is a sham, the
            vessel may be treated as an uninspected small passenger vessel
            operating illegally. The trip can be terminated on the water, and
            both the operator and owner may face enforcement action under{" "}
            <strong className="text-white">46 U.S.C. &sect; 2101</strong> and{" "}
            <strong className="text-white">46 C.F.R. &sect; 176.100</strong>.
          </p>

          {/* Sasha Interview */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            From the Water: An Interview with Sasha
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            Sasha is our operations lead at Emerald Eyes Miami. She&apos;s been
            running yacht charters out of North Miami and has been through
            countless Coast Guard boardings firsthand. We sat down with her to
            get the real picture of what these inspections look like in
            practice.
          </p>

          <div className="space-y-8 mb-8">
            {/* Q1 */}
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <p className="text-[--color-emerald] font-semibold text-base mb-3">
                Q: What&apos;s the first thing the Coast Guard does when they
                pull up?
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                &ldquo;The very first thing is they separate everybody. The crew
                goes to one side, the clients go to the other. They don&apos;t
                want you talking to each other while they&apos;re asking
                questions. It&apos;s not aggressive or anything &mdash; they
                just need independent answers to verify the charter is
                real.&rdquo;
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <p className="text-[--color-emerald] font-semibold text-base mb-3">
                Q: What do they ask the clients?
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                &ldquo;They go straight to the main client &mdash; the person
                who booked the charter &mdash; and ask them: who did you choose
                as your captain? What&apos;s the captain&apos;s name?
                What&apos;s the first mate&apos;s name? Because in a bareboat,
                the client is basically the temporary owner. They should know
                who they hired. If the client looks confused or says &apos;I
                don&apos;t know, the company sent them,&apos; that&apos;s a
                problem.&rdquo;
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <p className="text-[--color-emerald] font-semibold text-base mb-3">
                Q: What about the paperwork?
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                &ldquo;They want to see the charter contract. And it can&apos;t
                just exist &mdash; it has to be signed by everybody. The client
                signed, the owner signed, all parties. They flip through it and
                check that the signatures are there, the dates match, and the
                vessel information is correct. If you show up with an unsigned
                contract, or one that doesn&apos;t match the boat you&apos;re
                on, that&apos;s not going to go well.&rdquo;
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <p className="text-[--color-emerald] font-semibold text-base mb-3">
                Q: After the questions, what do they physically inspect?
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                &ldquo;They count everybody on board first. Head count. Then
                they go through the safety equipment &mdash; life jackets, fire
                extinguishers, the life ring, placards. They check the yacht
                registration. Then they go look at the engine room. It&apos;s
                all pretty quick if everything is where it should be.&rdquo;
              </p>
            </div>

            {/* Q5 */}
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <p className="text-[--color-emerald] font-semibold text-base mb-3">
                Q: How long does it usually take?
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                &ldquo;If you&apos;re prepared, maybe ten minutes. They come on,
                they do their checks, they&apos;re professional about it.
                I&apos;ve never had a problem because we always make sure
                everything is right before we leave the dock. The contract is
                signed, the equipment is checked, the head count matches. You do
                the work before you go out, and the inspection is
                nothing.&rdquo;
              </p>
            </div>

            {/* Q6 */}
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <p className="text-[--color-emerald] font-semibold text-base mb-3">
                Q: What&apos;s the most important thing for clients to
                understand?
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                &ldquo;That they&apos;re the boss. In a bareboat charter, the
                client is the temporary owner of that vessel. That&apos;s the
                whole point. You chose your captain, you chose your crew, you
                are paying them. When the Coast Guard asks, you should be able
                to say that confidently. It&apos;s not a trick question &mdash;
                it&apos;s how the system is supposed to work. And when it works
                right, the inspection is just a formality.&rdquo;
              </p>
            </div>

            {/* Q7 */}
            <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10">
              <p className="text-[--color-emerald] font-semibold text-base mb-3">
                Q: Have you ever seen an inspection go wrong?
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                &ldquo;Not on our boats. But I&apos;ve heard stories from other
                operators. The most common issue is too many people on board.
                Someone invites a few extra friends, and now you&apos;re over
                the passenger limit. Or the paperwork isn&apos;t right &mdash;
                the contract wasn&apos;t signed, or the captain&apos;s name
                doesn&apos;t match. That&apos;s why we&apos;re strict about it
                before we leave. You do it right on the dock, and you never have
                a problem on the water.&rdquo;
              </p>
            </div>
          </div>

          {/* What this means for you */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            What This Means for You as a Client
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            If you&apos;re booking a yacht charter in Miami, here&apos;s the
            bottom line:
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            <strong className="text-white">
              A reputable charter company wants to pass the inspection.
            </strong>{" "}
            We don&apos;t cut corners on safety equipment. We don&apos;t
            overload vessels. We run real bareboat structures where you
            genuinely choose your captain, and the contract reflects what&apos;s
            actually happening on the water.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            When the Coast Guard pulls alongside, the captain greets them
            professionally, the paperwork is in order, the life jackets are
            counted, and within ten minutes you&apos;re back to your sunset
            cruise.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            That&apos;s how it should work. That&apos;s how it works with us.
          </p>

          {/* Quick reference */}
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-[--color-gold] mt-16 mb-6">
            Quick Reference: Key Federal Regulations
          </h2>
          <div className="bg-[--color-navy-light] rounded-xl p-6 border border-white/10 mb-8 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                NVIC 7-94
              </span>
              <p className="text-white/70 text-sm">
                Coast Guard guidance on bareboat charter analysis
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                46 C.F.R. Part 25
              </span>
              <p className="text-white/70 text-sm">
                Safety equipment requirements (PFDs, extinguishers, signals)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                46 C.F.R. &sect; 175.110
              </span>
              <p className="text-white/70 text-sm">
                Subchapter T applicability (vessels carrying &gt;6 passengers)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                46 C.F.R. &sect; 176.100
              </span>
              <p className="text-white/70 text-sm">
                Certificate of Inspection requirement
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                46 U.S.C. &sect; 2101
              </span>
              <p className="text-white/70 text-sm">
                Definitions: small passenger vessel, uninspected passenger
                vessel
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                46 C.F.R. &sect; 15.605
              </span>
              <p className="text-white/70 text-sm">
                Credentialed operator requirement for uninspected passenger
                vessels
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                33 C.F.R. Part 83
              </span>
              <p className="text-white/70 text-sm">
                Navigation lights and sound signals
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[--color-emerald] font-mono text-sm mt-1 shrink-0">
                46 C.F.R. Part 16
              </span>
              <p className="text-white/70 text-sm">
                Drug and alcohol testing for commercial vessel personnel
              </p>
            </div>
          </div>
        </article>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center py-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-6">
            Charter with confidence.
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Every Emerald Eyes charter is built on a legitimate bareboat
            structure, fully equipped vessels, and credentialed captains. We
            welcome Coast Guard inspections because we have nothing to hide.
          </p>
          <Button href="/book" size="lg">
            Plan Your Charter
          </Button>
        </div>
      </Section>
    </main>
  );
}
