# Brand Injection Guide: First-Timer Article

## Article: "First Time Renting a Yacht in Miami"

## Target: `FirstTimeYachtArticle.tsx`

---

## Brand Voice for First-Timers

This is the highest-anxiety audience Emerald Eyes will ever speak to. They want to do this — badly — but something is holding them back. That something is fear: fear of looking dumb, of wasting money, of being seasick, of doing it wrong. Every sentence in this article either removes one of those fears or replaces it with confidence.

**Tone pillars:**

- Warm, knowledgeable, never condescending — the friend who's done this a hundred times and is excited to take you for the first time
- "We've got you" energy without saying "we've got you" — show it, don't tell it
- Concrete and specific — vague reassurance is worthless; specifics ("your captain greets you by name at the slip") are everything
- Gently aspirational — first-timers need to see themselves on the boat before they'll book it

**Voice consistency with existing articles:**

- Same dark-luxury editorial tone as Haulover and Coast Guard articles
- Sasha writes/narrates in first person for the personal-touch sections
- Trust strip (USCG / Licensed Captains / Miami Experts) appears early, just like in other articles
- Author attribution: "By Sasha, Partner & Director of Operations"

---

## Section-by-Section Injection Points

### Hero

**Goal:** Stop the scroll. Name the anxiety. Promise the solution.

The hero must do three things in three seconds: (1) acknowledge this person has never done this, (2) tell them that's perfectly fine, (3) make them feel like today is the day they fix that.

**H1 options (pick the sharpest one):**

- "Your First Yacht Charter in Miami — Everything You Need to Know"
- "First Time on a Yacht? Here's Exactly What to Expect"
- "Never Rented a Yacht Before? Good. You're in the Right Place."

**Lead paragraph — brand injection:**

> Never been on a yacht charter? Most of our guests haven't. Emerald Eyes was built for exactly this moment — taking someone who's never done this and turning it into the best day of their year. Our USCG-licensed captains handle everything. All you do is show up.

**Subheadline (meta-level reassurance):**

> No experience required. No boat knowledge needed. Just bring your people and your sense of adventure.

**Quick Stats card (sidebar, matches existing article pattern):**

- Starting at $2,500 · 4–8 hours
- Up to 12 guests
- USCG-licensed captain included
- Based in Biscayne Bay, Miami

**CTA button pair:**

- Primary: "Plan My First Charter" → `/book`
- Secondary: "Read the Full Guide" → `#guide`

---

### Trust Strip (immediately after Hero — matches site pattern)

This is non-negotiable. First-timers need a credibility signal before they read a single word. Use the same 3-card format as `HauloverSandbarArticle.tsx` and `CoastGuardArticle.tsx`:

| Card | Icon        | Headline          | Sub                                                                               |
| ---- | ----------- | ----------------- | --------------------------------------------------------------------------------- |
| 1    | ShieldCheck | USCG Compliant    | Every vessel meets or exceeds Coast Guard requirements — safety is never optional |
| 2    | Award       | Licensed Captains | Our captains are USCG-licensed, background-checked, and drug-tested               |
| 3    | MapPin      | Miami Experts     | Biscayne Bay locals — we know every sandbar, inlet, and sunset spot               |

Translation key pattern: use `trust.uscg`, `trust.captains`, `trust.location` (already exists in codebase — reuse).

---

### What to Expect (The EE Experience Step by Step)

**Goal:** Let them visualize themselves on the boat before they've committed. Visualization removes the fear of the unknown.

This section should feel like a movie trailer for their day. Walk them through the full timeline.

**Brand injection — the arrival moment:**

> When you arrive at the marina, your captain is already there waiting for you. They'll greet you by name, give you a quick orientation — where everything is, what the plan is, any questions you have — and then you're off. You don't need to do anything except step aboard.

**The departure:**

> Within minutes of boarding, you'll hear why we don't skimp on the sound system. The crew gets the coolers set, the ice stocked, the floaties ready. You pick your first drink and let Miami Bay do the rest.

**The anchor-up moment:**

> When you drop anchor at your first stop — whether it's Haulover Sandbar, a private cove, or open Biscayne Bay — everything shifts. No traffic, no noise, no obligations. Just water, sun, and your people.

**Section structure (cards, matching existing component pattern):**

1. Arrive at the marina — your captain is waiting
2. Quick orientation — we walk you through everything
3. Set sail — sit back, the crew handles it
4. Drop anchor at your first stop
5. Swim, float, explore — or just relax
6. Back at the marina — exactly on time

**Note to developer:** This can use a numbered step component identical to the 8-step boarding process in `CoastGuardArticle.tsx` — same card format, just 6 steps instead of 8.

---

### Bareboat vs. Crewed Charter — The EE Model

**CRITICAL SECTION.** This is where confusion lives. Most first-timers have no idea what "bareboat" means. If it's not explained clearly, it creates doubt ("wait, am I supposed to drive the boat?"). Kill that doubt immediately.

**The explanation (simple, confident, no jargon):**

> Here's how Emerald Eyes works: you rent the vessel. We provide the captain and crew. The legal structure is called a "bareboat charter" — which just means the boat itself is the rental, not a packaged tour. But from your perspective? It's completely seamless. You book, we handle everything else.

**The reassurance follow-through:**

> Our captains manage navigation, anchoring, safety, and routing. You don't touch a single nautical chart. You don't need to know port from starboard. You don't make any operational decisions unless you want to — and even then, we're guiding you.

**Why this structure exists (builds trust through transparency):**

> The bareboat structure actually benefits you. It means your captain is chosen for your charter specifically — not assigned to a tour bus with 30 strangers. It means the boat is yours for the duration. It means your itinerary is yours.

**Link injection:**

> Want to understand the full safety and legal framework? We wrote a deep-dive on [how Coast Guard inspections work for bareboat charters](/blog/coast-guard-inspection-bareboat-charter). It's worth a read if you want the full picture — but you don't need to understand any of it to have a perfect day on the water.

**Callout box (green highlight, matches existing emerald callout style):**

> "You rent the vessel. We provide the expertise. You enjoy the ocean."

---

### The Booking Process

**Goal:** Show how frictionless this is. The biggest barrier to booking after price is uncertainty about process. Dissolve it completely.

**4-step visual (matches numbered card style from Coast Guard article):**

**Step 1: Tell us when**

> Pick your date and how many hours — 4, 6, or 8. First-timers, we recommend 6 hours minimum. It takes about 30 minutes to get out there, and you'll want time to actually stop and swim.

**Step 2: Tell us who**

> How many guests? Up to 12. Add-ons? Live sax? Sushi chef? Jet ski? Just let us know. There's no wrong answer — we've done birthday parties, anniversary dinners, bachelorette floats, and quiet afternoons for two.

**Step 3: We build your charter**

> Sasha personally reviews every first-timer inquiry. You'll get a confirmation with your captain's name, the vessel details, marina location, and everything you need to know. No surprises.

**Step 4: Show up**

> That's it. Come to the marina. Your captain is there. Everything is ready. Your only job is to enjoy it.

**Brand close (Sasha voice):**

> Questions before you book? Call or message us. We answer every inquiry personally — no bots, no call centers. If you're nervous about any part of this, just ask. That's literally what we're here for.

**CTA:** "Start Planning" → `/book`

---

### What to Bring / What We Provide

**Heavy brand moment.** This section is where you prove the value of choosing EE over a random Airbnb-style boat rental. The contrast between "you bring" and "we provide" should make first-timers feel like they're getting a full-service experience for the price.

**"You Bring" (keep it short — this is the point):**

- Sunscreen (we'll remind you again)
- Sunglasses
- Swimsuit
- Whatever you want to drink or eat (or let us handle that too — ask about catering)
- Good people

**"We Provide" (be exhaustive — this is the value story):**

- USCG-licensed captain and crew
- Premium sound system (Bluetooth-connected, you control the playlist)
- Ice and coolers (enough for your group, fully stocked before you board)
- Crystal glassware (no plastic cups — this is a luxury charter)
- Floating mats for the water
- Water toys
- Life jackets, safety equipment (all USCG compliant — full list in our [Coast Guard article](/blog/coast-guard-inspection-bareboat-charter))
- Expert local knowledge of Biscayne Bay

**Brand line (use as section subhead or callout):**

> "You bring the sunscreen and good vibes. We bring everything else."

**Add-ons callout strip (matches existing HauloverSandbarArticle addon section):**

- Live Sax Player — upgrade any charter to concert-level ambiance
- Private Sushi Chef — omakase on the water
- Jet Ski — for when the ocean isn't enough
- Professional Photographer — because your phone won't do this justice
- DJ
- Full Catering

**Link:** "Browse all add-ons" → `/experiences`

---

### Yacht Etiquette for First-Timers

**Goal:** Remove the social anxiety of not knowing the "rules." Position EE crew as friendly guides, not judges.

**Opening (non-judgmental, almost funny):**

> Nobody is born knowing how to act on a yacht. The good news: there's very little to know, and our crew will walk you through anything relevant when you board.

**The actual etiquette (4-5 points, concise):**

**1. Boarding**

> Wait at the dock until the captain invites you aboard. It takes 10 seconds and shows respect for the vessel. After that, it's your boat for the day.

**2. Below deck (if applicable)**

> Remove shoes before going below. Yacht soles track in grit that scratches fiberglass. Crew will remind you — no judgment if you forget.

**3. In the water**

> Don't swim near the propeller (captain will make sure you know where it is). Floating mats go off the stern. Ask before jumping — the captain confirms it's clear.

**4. Trash**

> Nothing goes overboard. Ever. It's federal law on the water and also just basic decency. We have bins on board.

**5. Tipping**

> This one surprises first-timers: tipping your captain and crew is customary and appreciated. 15–20% of the charter cost is the standard range. If they gave you a great day — and they will — take care of them.

**Brand close:**

> Our crew's job is to make sure you have the best day possible. If you have questions about anything — etiquette, safety, the plan — just ask. No question is too basic. We've answered all of them.

---

### Common First-Timer Mistakes (and How EE Solves Them)

**Goal:** Preemptively handle objections and position EE as the antidote to every bad charter experience they've heard about.

**Format:** Problem → Mistake → EE Solution (card format, two columns)

**Mistake 1: Booking too short**

> A 3-hour charter sounds good on paper, but by the time you're out of the inlet and at your spot, you've burned an hour. We recommend 6 hours minimum for first-timers — long enough to actually relax, not just check a box. When you book with us, we'll tell you this before you commit.

**Mistake 2: Wrong vessel for the group size**

> Cramming 12 people on a boat designed for 8 is a miserable experience for everyone. When you inquire with EE, we ask about your group first. We'll never put you on a vessel that's wrong for your headcount.

**Mistake 3: Forgetting food and drinks**

> Nothing worse than getting 30 minutes offshore and realizing there's nothing to eat. Either bring a cooler (we'll keep it cold) or ask us about catering in advance. This is fixable at the planning stage — not after you've cast off.

**Mistake 4: Assuming bad weather means a ruined day**

> Miami weather is dramatic but fast-moving. If your charter day has a genuine weather issue — not just clouds, but actual unsafe conditions — we monitor the forecast and will contact you in advance to reschedule. No charge, no headache. We've never left a guest stranded.

**Mistake 5: Booking without asking questions**

> The guests who have the best time are usually the ones who asked the most questions beforehand. What's the best destination for our group? What should we know about the Haulover inlet? What time of day is best? Ask everything. That's what Sasha and the team are there for.

**Brand CTA after this section:**

> "Have a question we didn't answer? [Ask us before you book.](/book)"

---

### Safety — The Section That Builds Maximum Trust

**MOST IMPORTANT SECTION for first-timers.** Safety concerns are the number one silent objection. Address them directly, specifically, and with genuine authority. Don't hedge. Don't be vague.

**Opening (confidence, not alarm):**

> Before you've set foot on a yacht, you've probably had at least one thought along the lines of: "What if something goes wrong?" Here's the honest answer: we've thought about that far more than you have, and we've built every part of your charter around making sure it doesn't.

**The five safety commitments:**

**1. Every vessel exceeds USCG requirements**

> The Coast Guard has strict equipment requirements for charter vessels: life jackets for every passenger, flares, fire extinguishers, throwable flotation devices, navigation lights, sound signals, and more. Every Emerald Eyes vessel carries all of it — fully inspected and maintained. Not because we have to. Because we wouldn't put you on a boat without it.

**2. Licensed, background-checked, drug-tested captains**

> Our captains hold USCG licenses that require documented sea time, written exams, and drug testing. Background checks are standard. When you're on our boat, you're in the hands of a maritime professional — not someone who bought a boat last summer.

**3. Biscayne Bay is the right water for first-timers**

> Here's something most guides won't tell you: the choice of water matters enormously. Biscayne Bay is a protected, shallow-water bay. It is not the open ocean. Swells are minimal. Conditions are predictable. We've specifically built our charter model around this bay because it's the best possible environment for an incredible, comfortable day on the water — especially for first-timers.

**4. We monitor conditions — and we'll tell you the truth**

> If your charter day has a weather issue, you'll hear from us before you drive to the marina. We don't run charters in unsafe conditions. We'd rather reschedule you than put you on the water wrong.

**5. Your crew runs a safety briefing**

> Before you leave the dock, your captain runs a brief orientation: where the life jackets are, what to do if someone goes in the water, how to use the emergency radio, where not to swim. It takes five minutes and covers everything. After that, you enjoy your day.

**Link (deepens trust):**

> We wrote an entire guide to [how Coast Guard inspections work for bareboat charters](/blog/coast-guard-inspection-bareboat-charter) — including the specific federal regulations we comply with. If you want to understand exactly what "USCG compliant" means in practice, it's all there.

**Section close (calm and confident):**

> The ocean deserves respect. We give it that respect every single charter. So does your safety.

---

### Tips from Sasha (Personal Touch Section)

**Goal:** Make the brand feel human. First-timers trust people, not companies. Sasha is the face — use her.

**Section framing:** Use the same author attribution format as the Haulover article: "By Sasha, Partner & Director of Operations."

**The content (Sasha voice — direct, warm, experienced):**

> After running hundreds of charters, here's what I tell every first-timer before they board.
>
> **Arrive 15 minutes early.** Not because you'll be late if you don't — but because those first 15 minutes before departure are the best part. You're on the dock, the boat is being prepped, the captain is getting ready. It's exciting. Don't rush through it.
>
> **Don't stress about what to bring.** I promise you, whatever you forgot, we either have it or it doesn't matter. Sunscreen is the only exception. Bring extra sunscreen. Miami sun on the water is different from Miami sun on land.
>
> **Tell us what you want.** I mean this genuinely. Do you want to stop at Haulover Sandbar? Say so. Do you want a quiet afternoon anchored in a cove? We can do that. Do you want to blast music and jump off the bow all day? Perfect. There's no wrong answer and we don't have a fixed script — your charter is yours.
>
> **Don't spend the day on your phone.** I say this as someone who sends way too many emails. Take pictures, of course — but then put it down. The view from the middle of Biscayne Bay with your favorite people is something a screen can't capture. Be in it.
>
> **The water is warmer than you think.** Jump in. That's the whole point.

**Quote callout (pull quote, styled like existing site quote blocks):**

> "Your first charter should feel effortless. That's exactly what we've built — from the moment you book to the moment you step back on the dock."
> — Sasha, Partner & Director of Operations

---

### Final CTA — "Ready for Your First Charter?"

**Goal:** Low-pressure close. First-timers who've read this far are convinced. Remove every remaining reason to hesitate.

**Headline options:**

- "Ready to See Miami the Right Way?"
- "Your First Charter Is One Step Away"
- "You've Read the Guide. Now Book the Day."

**Copy (low pressure, specific, confidence-building):**

> Starting at $2,500 for 4–8 hours. Up to 12 guests. USCG-licensed captain. Everything included.
>
> Questions? We answer every inquiry personally. No bots, no forms, no runaround. If you're still unsure about anything, reach out before you book. We're happy to walk you through every detail.

**CTA Button pair (matches site-wide pattern):**

- Primary: "Book Your Charter" → `/book`
- Secondary: "Browse Experiences" → `/experiences`

**Below the CTA — quick-link bar (low-friction next steps for non-bookers):**

> [See pricing →](/blog/miami-yacht-charter-prices) · [Browse experiences →](/experiences) · [Meet the team →](/about) · [Read our FAQ →](/faq)

---

## Suggested Translation Keys (EN)

These 25+ keys follow the established naming pattern from the codebase (prefix `ft.` for first-timer article). Ready to drop into the translations file.

```json
{
  "ft.heroTitle": "First Time Renting a Yacht in Miami? Here's Everything You Need to Know",
  "ft.intro1": "Never been on a yacht charter? Most of our guests haven't. Emerald Eyes was built for exactly this moment — your first time on the water.",
  "ft.intro2": "Our USCG-licensed captains handle everything. You bring your people. We handle the rest.",

  "ft.brand.welcome": "Never been on a yacht charter? You're in the right place. We've helped hundreds of first-timers have the best day of their year.",
  "ft.brand.easy": "You don't need to know port from starboard. Our USCG-licensed captain handles everything — navigation, anchoring, safety. You just relax.",
  "ft.brand.bareboat": "You rent the vessel. We provide the captain and crew. From your perspective, it's completely seamless.",
  "ft.brand.arrive": "When you arrive at the marina, your captain is already there waiting. They'll greet you, walk you through the orientation, and get you on the water.",
  "ft.brand.sasha": "After hundreds of charters, here's what I tell every first-timer: bring sunscreen, arrive 15 minutes early, and don't stress — we've got everything covered.",
  "ft.brand.includes": "You bring the sunscreen and good vibes. We bring everything else.",
  "ft.brand.safety": "Every Emerald Eyes vessel meets or exceeds USCG requirements. Our captains are licensed, background-checked, and drug-tested. Safety is never optional.",
  "ft.brand.bay": "Biscayne Bay is protected, calm, and predictable — the best possible water for a first charter. Nothing like the open ocean.",
  "ft.brand.weather": "We monitor conditions closely. If there's a genuine weather issue, we'll contact you in advance to reschedule — no charge, no stress.",
  "ft.brand.noq": "No question is too basic. That's literally what we're here for.",
  "ft.brand.price": "Starting at $2,500 for 4–8 hours, split between your group — less than a VIP table at most Miami clubs.",

  "ft.step1.title": "Arrive at the Marina",
  "ft.step1.text": "Your captain is already there. No waiting, no hunting for the right slip. They'll have your name and your group's details.",
  "ft.step2.title": "Board and Orient",
  "ft.step2.text": "Quick 5-minute walkthrough: safety equipment locations, the plan for the day, any questions you have. Then you're off.",
  "ft.step3.title": "Set Sail",
  "ft.step3.text": "The crew handles departure. Your only job is to find a spot on deck and enjoy the view as Miami Bay opens up.",
  "ft.step4.title": "Drop Anchor",
  "ft.step4.text": "At your first stop — Haulover Sandbar, a private cove, open bay — everything shifts. The water is right there. Jump in.",
  "ft.step5.title": "Swim, Float, Explore",
  "ft.step5.text": "Water toys are off the stern. Mats are in the water. The cooler is full. This is what you booked this for.",
  "ft.step6.title": "Return to the Marina",
  "ft.step6.text": "Exactly on time, exactly as planned. The only hard part is it's over.",

  "ft.mistake1.title": "Booking Too Short",
  "ft.mistake1.text": "By the time you're out of the inlet and at your spot, you've burned 30 minutes. We recommend 6 hours minimum for first-timers.",
  "ft.mistake2.title": "Wrong Vessel for Your Group",
  "ft.mistake2.text": "We ask about your headcount first. We'll never put 12 people on a boat built for 8.",
  "ft.mistake3.title": "Forgetting Food and Drinks",
  "ft.mistake3.text": "Bring a cooler — we'll keep it cold. Or ask about catering in advance. This is fixable before you leave the dock.",
  "ft.mistake4.title": "Assuming Bad Weather Ruins Everything",
  "ft.mistake4.text": "We monitor the forecast and will contact you if conditions are unsafe. Reschedules are no-charge. We've never left a guest stranded.",

  "ft.cta.title": "Ready to See Miami the Right Way?",
  "ft.cta.text": "Starting at $2,500 for 4–8 hours. Up to 12 guests. USCG-licensed captain. Everything included. Questions? We answer every inquiry personally.",
  "ft.cta.book": "Book Your Charter",
  "ft.cta.questions": "Still have questions? We're happy to walk you through everything before you commit.",

  "ft.readTime": "12 min read"
}
```

---

## Trust-Building Opportunities

These are the moments in the article where brand credibility should peak. Each one requires specific, concrete language — not vague claims.

| Moment                       | What to Say                                                                                                                                                           | Where                             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| USCG compliance              | "Every vessel meets or exceeds USCG requirements — the full equipment list is documented in our [Coast Guard article](/blog/coast-guard-inspection-bareboat-charter)" | Safety section + Trust Strip      |
| Captain credentials          | "USCG-licensed, background-checked, drug-tested" — all three, every time                                                                                              | Hero, Trust Strip, Safety section |
| Pricing transparency         | "Starting at $2,500 · no hidden fees · everything listed above is included"                                                                                           | Booking section + CTA             |
| Sasha's personal involvement | "Sasha personally reviews every first-timer inquiry"                                                                                                                  | Booking process section           |
| Local expertise              | "We know Biscayne Bay — every sandbar, inlet, current, and sunset spot"                                                                                               | Bareboat section + Safety section |
| Weather policy               | "We'll reschedule if conditions are unsafe — no charge"                                                                                                               | Common Mistakes + Safety          |
| Volume of experience         | "Hundreds of 5-star charters" — use this without manufacturing a fake number                                                                                          | Sasha's Tips intro                |

---

## Fear-Removal Messaging

For each common first-timer fear, the specific EE response. Use these in the article body and as FAQ-style callout boxes.

| Fear                                            | EE Response                                                                                                                                                                           | Section to Deploy         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| "I'll get seasick"                              | "Biscayne Bay is a protected, shallow-water bay — calm conditions, minimal swell. Nothing like the open ocean. Most guests are surprised by how smooth it is."                        | Safety · Bareboat section |
| "It's too expensive"                            | "Split between 8 guests, a 6-hour charter works out to under $400 per person — less than a VIP table at most Miami venues. And this is a full day on the water."                      | Booking · CTA             |
| "I don't know anything about boats"             | "Neither do most of our guests — that's exactly why you have a USCG-licensed captain. You don't need to know a single thing about boating to have a perfect day."                     | Hero · Bareboat section   |
| "What if the weather is bad?"                   | "We monitor conditions before every charter. If we see a genuine safety issue, we'll contact you to reschedule — at no charge. We've never sent a group out in unsafe conditions."    | Common Mistakes · Safety  |
| "What if I do something wrong on the boat?"     | "Our crew does a full orientation when you board. There's nothing to memorize. If you forget something or have a question mid-charter, just ask — that's what they're there for."     | Etiquette section         |
| "What if I get stuck on a boat with strangers?" | "This isn't a group tour. The boat is yours for the day — just your group, your captain, your crew, your plan."                                                                       | Bareboat section          |
| "I don't know what to expect"                   | "That's the whole reason this article exists — and why we walk every first-timer through the full experience before they board. Nothing about your charter day should be a surprise." | What to Expect section    |
| "I'll be the least experienced person there"    | "You're booking with Emerald Eyes specifically because experience isn't required. The captain brings the expertise. You bring the people."                                            | Hero · Sasha's Tips       |

---

## Internal Links

Every link serves a purpose — either deepening trust, expanding the experience, or making the booking easier. No orphan links.

| Destination                                     | Anchor Text                                               | Section                           | Purpose                            |
| ----------------------------------------------- | --------------------------------------------------------- | --------------------------------- | ---------------------------------- |
| `/book`                                         | "Book Your Charter" / "Plan My First Charter"             | Hero + Booking + CTA              | Primary conversion                 |
| `/blog/coast-guard-inspection-bareboat-charter` | "how Coast Guard inspections work" / "our safety article" | Bareboat section + Safety section | Trust deepening — USCG credibility |
| `/blog/haulover-sandbar-yacht-charter-miami`    | "Haulover Sandbar"                                        | What to Expect + Etiquette        | Destination inspiration            |
| `/blog/miami-yacht-charter-prices`              | "see full pricing breakdown"                              | Booking section + CTA footer      | Pricing transparency               |
| `/experiences`                                  | "Browse experiences" / "see add-ons"                      | What We Provide + CTA             | Upsell and exploration             |
| `/about`                                        | "Meet Sasha and the team"                                 | Sasha's Tips section              | Brand humanization                 |
| `/faq`                                          | "Read our full FAQ"                                       | CTA footer                        | Long-tail objection handling       |

---

## Component Architecture Notes (for Developer)

Based on the patterns in `HauloverSandbarArticle.tsx` and `CoastGuardArticle.tsx`, here is the recommended section structure for `FirstTimeYachtArticle.tsx`:

```
Hero (grid: text + sidebar Quick Facts card)
  ↓
Trust Strip (3-card: USCG / Captains / Location) — reuse existing `trust.*` keys
  ↓
Section: What to Expect (6-step numbered cards, matches cg.step format)
  ↓
Section dark: The EE Bareboat Model (text + image, with emerald callout box)
  ↓
Section: The Booking Process (4-step numbered cards)
  ↓
Section dark: What to Bring / What We Provide (2-column split, matches hs.bring format)
  ↓
Section: Yacht Etiquette (4-card grid)
  ↓
Section dark: Common Mistakes (2-column card grid with mistake/solution format)
  ↓
Section: Safety (3 stacked cards, matches hs.safety format — gold accent for importance)
  ↓
Section dark: Tips from Sasha (text + image, pull quote, author attribution)
  ↓
Section: Fear Removal FAQ (accordion or card grid)
  ↓
Final CTA (full-bleed image, centered, matches hs.cta section exactly)
```

**Existing patterns to reuse (do not reinvent):**

- Trust strip: identical to Haulover and Coast Guard articles — same 3 keys
- Numbered step cards: identical format to `CoastGuardArticle.tsx` boarding steps
- "You Bring / We Provide" split: identical format to `HauloverSandbarArticle.tsx` bring section
- Add-ons strip: identical format to `HauloverSandbarArticle.tsx` addons section
- Author attribution: identical to Haulover hero ("By Sasha, Partner & Director of Operations")
- Final CTA section: identical structure to both existing articles (full-bleed image + anchor icon + button pair)

---

## SEO Notes

**Primary keyword:** "first time renting a yacht in Miami"
**Secondary keywords:** "first yacht charter Miami," "rent a yacht Miami," "bareboat charter Miami," "Miami yacht charter for beginners"

**Title tag:** "First Time Renting a Yacht in Miami: Complete Beginner's Guide | Emerald Eyes"
**Meta description:** "Never rented a yacht before? Emerald Eyes makes your first Miami charter effortless — USCG-licensed captains, everything included, starting at $2,500. Here's exactly what to expect."

**Schema:** `Article` type with `author` (Sasha, Director of Operations), `datePublished`, `publisher` (Emerald Eyes Miami). Match the existing `itemScope`/`itemType` pattern in `HauloverSandbarArticle.tsx`.

**Target read time:** 10–12 minutes (signals depth to Google, matches anxiety-level of audience who wants to research thoroughly before committing)

---

_Guide version: 1.0 · Written for MCP-63-emeraldeyes · First-Timer Article_
