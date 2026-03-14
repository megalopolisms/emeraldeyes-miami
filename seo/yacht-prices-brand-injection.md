# Brand Injection Guide: Yacht Prices Article

**Article:** Miami Yacht Charter Prices: What Does It Actually Cost?
**Component:** `components/blog/YachtPricesArticle.tsx`
**Translations:** `translations/yacht-prices-en.json`
**Purpose:** Every injection point below maps directly to an existing translation key or proposes a new one. The goal is helpful authority, not sales pitch.

---

## Brand Voice

- **Tone:** Confident insider, not a salesman. We've seen every charter mistake — let us save you from it.
- **"We" and "our" always** when referring to EE services. Never "Emerald Eyes offers..." — always "we offer..." or "our charters include..."
- **Transparency as a feature.** Competitors hide pricing. We publish it. That IS the brand differentiator — lean into it in every section.
- **Specificity builds trust.** Name the waters (Biscayne Bay, Haulover Sandbar), name the gear (marine-grade speakers, industrial coolers), name the credentials (USCG-licensed). Vague luxury language is what competitors do.
- **Don't over-sell the add-ons.** Describe them as options, not upsells. The live sax is "a Miami thing" not "an upgrade."
- **Author voice is Sasha's.** First-person plural ("we've been running charters for years") is appropriate — the article is authored by Partner & Director of Operations.

---

## Section-by-Section Injection Points

### Hero Section

**Current keys in use:** `yp.heroTitle`, `yp.intro1`, `yp.intro2`, `yp.hero.seeBreakdown`, `yp.cta.getQuote`

**What's working:**
`yp.intro1` already nails the voice — "Everyone Googles it. Nobody gives a straight answer. We're changing that." Keep it exactly as-is. This is the best sentence in the article.

**Injection opportunity — `yp.intro2`:**
Current: "We've been running charters out of North Miami for years."
Problem: "North Miami" is geographically imprecise and slightly undermines the luxury positioning. The brand operates in Miami broadly — Biscayne Bay, Haulover, Star Island.

Suggested replacement:

```
"We've been running charters out of Miami for years. This guide breaks down
base rates, what's included, popular add-ons, and the best ways to get more
for your money — straight from the people who quote these prices every day."
```

**Injection opportunity — Quick Facts card (`yp.quick.*`):**
The four quick facts are already well-branded. One tightening opportunity:

`yp.quick.included` current: "Captain, crew, fuel, sound & toys included"
Suggested: "Captain, crew, fuel, sound system, toys & glassware — all in"
Rationale: "All in" echoes the anti-hidden-fees position established in intro1.

---

### "The Short Answer" Section

**Current keys:** `yp.short.p1`, `yp.short.p2`, `yp.short.p3`, `yp.short.note`

**What's working:**
`yp.short.note` — "No hidden fees. The price we quote is the price you pay. Gratuity for your crew is the only additional cost and is always at your discretion." — This is a strong brand statement. It lives in a highlighted callout box (emerald border). Keep it exactly as-is.

**`yp.short.p1` is the single most important paragraph in the article.**
It already names Emerald Eyes, lists every included item, and anchors the $2,500 figure. No change needed. This paragraph alone should satisfy most SEO intent.

**`yp.short.p3` injection opportunity:**
Current ends with "...without the superyacht price tag."
This is fine but slightly apologetic. Suggested replacement for the last sentence:

```
"At Emerald Eyes, we operate a curated fleet of well-maintained vessels in the
40-65 foot range — the sweet spot for groups of 2 to 15 who want a real luxury
experience, not a rented pontoon dressed up with throw pillows."
```

The "rented pontoon" contrast subtly differentiates from lower-end operators without naming anyone.

---

### What's Included Section

**THIS IS THE BIGGEST BRAND OPPORTUNITY IN THE ARTICLE.**

**Current keys:** `yp.included.intro`, `yp.inc.captain.text`, `yp.inc.sound.text`, `yp.inc.fuel.text`, `yp.inc.ice.text`, `yp.inc.mats.text`, `yp.inc.toys.text`, `yp.inc.water.text`, `yp.inc.glass.text`

**Strategy:** Most charter companies list "captain included" and stop there. Our included list has 8 line items. The section header label already says "Every Charter" — lean into that pattern. Every item description should feel like a flex, not a features list.

**Injection opportunities per item:**

`yp.inc.captain.text`
Current: "USCG-licensed captain and professional crew who know every inch of Biscayne Bay."
Good. The Biscayne Bay specificity is excellent. Keep as-is.

`yp.inc.sound.text`
Current: "Bluetooth-connected marine-grade speakers. Play your playlist all day."
Suggested upgrade: "Marine-grade Bluetooth speakers throughout the deck. Connect your phone and it's your playlist, your vibe, your day."
Rationale: "Your playlist, your vibe, your day" creates an emotional handoff — this is your charter, not ours.

`yp.inc.fuel.text`
Current: "Standard Miami routes including Haulover Sandbar, Star Island, and Key Biscayne."
This is perfect. Named destinations = credibility + SEO value. Keep as-is.

`yp.inc.ice.text`
Current: "Industrial-grade coolers stocked with ice so your drinks stay cold from dock to dock."
"From dock to dock" is a nice phrase. Keep as-is.

`yp.inc.glass.text`
Current: "Reusable cups and glassware so you can bring your own drinks in style."
Suggested upgrade: "Crystal-style reusable glassware — because drinks on a luxury charter shouldn't come in red Solo cups."
Rationale: The humor is on-brand (confident, not pretentious) and contrasts with budget operators.

**New callout to add after the grid:**
Consider adding a new translation key `yp.included.closingNote` rendered as a soft green callout below the 8-item grid:

```
"yp.included.closingNote": "Most charter companies charge separately for fuel,
docking, or 'standard' equipment. We don't. One price, full experience."
```

---

### Charter Duration & Pricing Section

**Current keys:** `yp.dur.title`, `yp.dur.intro`, `yp.dur.4hr.*`, `yp.dur.6hr.*`, `yp.dur.8hr.*`, `yp.dur.tipNote`

**What's working:**
`yp.dur.tipNote` is excellent — "Industry-standard gratuity is 15-20%... It's never included in our pricing and always at your discretion." Proactively addressing tipping = trust signal. Keep as-is.

**Injection in card descriptions:**

`yp.dur.4hr.desc`
Current: "Perfect for a Haulover Sandbar trip, sunset cruise, or a quick celebration. Most popular for birthdays and bachelorettes."
Suggested: "The most popular way to start with us. Hit Haulover Sandbar, toast to the occasion, and be back at the dock with hours left in your evening. Our top pick for birthdays and bachelorettes."
Rationale: "The most popular way to start with us" frames EE as a relationship, not a one-time vendor.

`yp.dur.6hr.desc`
Current: "Time to hit the sandbar and cruise past Star Island. Great for groups who want to combine swimming, sightseeing, and a sunset."
Suggested: "Our 'do it all' option. Sandbar swimming in the afternoon, Star Island on the way back, golden hour as you pull into the dock. This is the one most guests wish they'd booked first."
Rationale: "Most guests wish they'd booked first" is social proof without a fake testimonial.

`yp.dur.8hr.desc`
Current: "The complete Miami experience. Sandbar in the morning, island-hopping through Biscayne Bay, and a sunset return. Best per-hour value."
This is already strong. Add one sentence: "Bring the food, bring the crew, and let us handle the rest."
Rationale: "Let us handle the rest" summarizes the bareboat charter value prop in five words.

---

### Add-On Costs Section

**Current keys:** `yp.addons.intro`, `yp.addon.sax.*`, `yp.addon.sushi.*`, `yp.addon.jetski.*`, `yp.addon.catering.*`, `yp.addon.dj.*`, `yp.addon.photo.*`

**Brand positioning for this section:**
The intro should frame add-ons as optional enhancements for people who already love what's included — not as the way to get a "real" experience. Current `yp.addons.intro` ("Make your charter unforgettable with our curated add-on experiences") tips slightly toward upsell language.

Suggested `yp.addons.intro` replacement:

```
"Our base charter is already a full experience. But if you want to push it
further — live music, a sushi chef, a DJ — here's what we can arrange.
All add-ons are booked at the time of inquiry."
```

**Live Saxophone — the signature add-on:**
This is our identity marker. The sax is on the Coast Guard article hero image. It should be described with the most warmth.

`yp.addon.sax.desc`
Current: "A professional sax player performing live as you cruise through Biscayne Bay. Our most requested add-on — pure Miami vibes."
Suggested upgrade: "A professional sax player performing live as you cruise Biscayne Bay. It's become our signature — guests say nothing sets the mood on the water quite like it. Our most requested add-on, and the one most people regret not adding."
Rationale: "Most people regret not adding" is the most natural conversion trigger possible — social proof + mild FOMO, zero hard sell.

`yp.addon.sushi.desc`
Current: "A private sushi chef rolling fresh omakase-style on board. Includes the chef, premium fish, and full presentation."
Suggested: "A private chef rolling fresh omakase-style on the back deck while you cruise. Includes the chef, premium fish, rice, and full service presentation — no restaurant, no waiting, no equal."

`yp.addon.photo.desc`
Current: "A professional photographer captures every moment. Drone shots, candid party photos, and golden-hour portraits. Edited gallery within 48 hours."
This is already detailed and strong. One addition: "Galleries are delivered via private link within 48 hours and are fully licensed for sharing."

---

### Price Factors Section

**Current keys:** `yp.factors.title`, `yp.factors.intro`, `yp.factor.size.*`, `yp.factor.season.*`, `yp.factor.group.*`, `yp.factor.day.*`

**Brand injection strategy:** Each factor description is currently written in third-person ("A 40-foot cruiser costs less than..."). Adding one first-person "we" sentence per card grounds the advice in EE expertise without making it sales-y.

`yp.factor.size.text`
Append to current text: "For most of our groups, a 40-50 ft vessel is the sweet spot — enough space to spread out, not so big that it feels empty."

`yp.factor.season.text`
Append: "We see our most adventurous clients in September and October — fewer crowds at the sandbar, lower rates, and honestly some of the best water conditions of the year."

`yp.factor.group.text`
Append: "When you contact us, tell us your group size first — that's the single biggest variable in your quote."

`yp.factor.day.text`
Append: "If your schedule is flexible, message us about Tuesday-Thursday availability. We often have great openings and better rates mid-week."

---

### How to Save Section

**Current keys:** `yp.save.title`, `yp.save.intro`, `yp.save.weekday.*`, `yp.save.offpeak.*`, `yp.save.direct.*`, `yp.save.longer.*`

**The "Book Direct" tip is the most brand-forward of the four.** It should directly name emeraldeyesmiami.com and explain what you get by booking direct that you don't get through a third-party platform.

`yp.save.direct.text`
Current: "Booking directly with us instead of through third-party platforms means no middleman markups. You also get direct communication with our team for custom requests and last-minute changes."
Suggested expansion:

```
"Book at emeraldeyesmiami.com instead of through aggregator sites and you skip
the platform markup entirely. More importantly, you're talking directly to our
team — not a call center. Custom requests, dietary preferences for the sushi
chef, even a surprise setup on deck — those only happen when you book with us."
```

`yp.save.longer.text`
Current is solid. Add one sentence: "Some of our favorite days on the water have been 8-hour charters — the crew gets to know the group, the guests actually relax, and nobody's watching the clock."
Rationale: Personalizes the pitch through the lens of the crew's experience, not the customer's wallet.

---

### Mid CTA Section

**Current keys:** `yp.midCta.label`, `yp.midCta.title`, `yp.midCta.text`, `yp.cta.getQuote`, `yp.cta.experiences`

**What's working:**
`yp.midCta.text` — "Most quotes come back within an hour." — this is a specific, trust-building promise. Keep it.

**One injection in `yp.midCta.title`:**
Current: "Get Your Custom Quote in Minutes"
Suggested: "Tell Us Your Vision. We'll Give You a Real Number."
Rationale: "Real number" echoes the article's core promise (transparency) and stands out visually as a heading.

**`yp.midCta.text` — add one EE-specific sentence:**
Current: "Tell us your date, group size, and any add-ons you want. We'll put together a transparent quote with everything included — no surprises, no back-and-forth. Most quotes come back within an hour."
Append: "Every quote is put together by Sasha's team — the same people who'll be coordinating your day on the water."
Rationale: Names Sasha, connects the article author to the quote process, humanizes the response.

---

### FAQ Section

**Current keys:** `yp.faq.q1` through `yp.faq.q8` and their answers

**Brand is already well-woven throughout the FAQs.** The key improvements are:

**`yp.faq.q2` / `yp.faq.a2` — highest-traffic FAQ question:**
Current answer lists every included item clearly. Add one closing sentence:

```
"There are no hidden fuel surcharges, docking fees, or equipment rentals.
The price you see in the quote is the price on your invoice."
```

**`yp.faq.q1` — recommend adding a new FAQ entry:**
"How much does an Emerald Eyes charter cost specifically?" is a direct navigational query that deserves its own entry.

Add new key pair `yp.faq.q9` / `yp.faq.a9`:

```
"yp.faq.q9": "How much does an Emerald Eyes Miami charter cost?",
"yp.faq.a9": "Emerald Eyes charters start at $2,500 for a 4-hour half-day with a
full crew, captain, fuel, sound system, floating mats, water toys, and glassware
all included. A 6-hour extended charter starts at $3,500 and an 8-hour full day
starts at $5,000. Add-ons like our live saxophone player (from $350) or sushi
chef (from $500) are quoted separately. Book at emeraldeyesmiami.com or use
the booking form at the top of any page."
```

Note: This FAQ answer is optimized for Google's featured snippet format — direct price, what's included, how to book. Add it as `FAQ_ITEMS` entry 9 in the component's data array.

**Add `yp.faq.q10` / `yp.faq.a10` for the bareboat structure question:**

```
"yp.faq.q10": "What is a bareboat charter and why does it matter for pricing?",
"yp.faq.a10": "A bareboat charter means you rent the vessel and hire your own
captain separately — as opposed to a crewed charter where everything is bundled
by a yacht management company. At Emerald Eyes, we handle both sides: we
connect you with the vessel and provide a USCG-licensed captain and crew. This
structure keeps costs transparent because you can see exactly what each element
costs, rather than buying a package where pricing is obscured."
```

---

### Sample Total Section (bottom of Related links)

**Current keys:** `yp.sample.base`, `yp.sample.sax`, `yp.sample.tip`, `yp.sample.total`

This section already does great work — a specific dollar breakdown anchors the article beautifully. One suggested tweak:

`yp.sample.total`
Current: "Total: ~$3,300 for up to 13 guests"
Suggested: "All-in total: ~$3,300 for up to 13 guests — roughly $254/person for a private luxury yacht day in Miami"
Rationale: The per-person cost reframe is the most powerful conversion lever in the article. $254/person sounds like a birthday dinner, not a luxury yacht. This is already calculated ($3,300 / 13 = ~$254) — just needs surfacing.

---

### Final CTA Section

**Current keys:** `yp.finalCta.title`, `yp.finalCta.text`

`yp.finalCta.title`
Current: "Know the Price. Love the Experience."
This is clean and works well as a callback to the article's transparency promise. Keep as-is.

`yp.finalCta.text`
Current: "No surprises, no hidden fees. Just a transparent quote and a crew that's ready to make your day on the water unforgettable. Tell us what you're looking for."
Suggested: "No surprises, no hidden fees. Just a transparent quote from a crew that knows Biscayne Bay like their backyard. Tell us what you're looking for — we'll take it from there."
Rationale: "Knows Biscayne Bay like their backyard" is concrete, credible, and local — exactly what a first-time charter buyer needs to hear.

---

## Suggested Translation Keys (EN) — Complete Set

All new keys proposed in this guide, ready to drop into `yacht-prices-en.json`:

```json
{
  "yp.intro2": "We've been running charters out of Miami for years. This guide breaks down base rates, what's included, popular add-ons, and the best ways to get more for your money — straight from the people who quote these prices every day.",

  "yp.quick.included": "Captain, crew, fuel, sound system, toys & glassware — all in",

  "yp.short.p3": "At Emerald Eyes, we operate a curated fleet of well-maintained vessels in the 40-65 foot range — the sweet spot for groups of 2 to 15 who want a real luxury experience, not a rented pontoon dressed up with throw pillows.",

  "yp.included.closingNote": "Most charter companies charge separately for fuel, docking, or 'standard' equipment. We don't. One price, full experience.",

  "yp.inc.sound.text": "Marine-grade Bluetooth speakers throughout the deck. Connect your phone and it's your playlist, your vibe, your day.",

  "yp.inc.glass.text": "Crystal-style reusable glassware — because drinks on a luxury charter shouldn't come in red Solo cups.",

  "yp.dur.4hr.desc": "The most popular way to start with us. Hit Haulover Sandbar, toast to the occasion, and be back at the dock with hours left in your evening. Our top pick for birthdays and bachelorettes.",

  "yp.dur.6hr.desc": "Our 'do it all' option. Sandbar swimming in the afternoon, Star Island on the way back, golden hour as you pull into the dock. This is the one most guests wish they'd booked first.",

  "yp.dur.8hr.desc": "The complete Miami experience. Sandbar in the morning, island-hopping through Biscayne Bay, and a sunset return. Best per-hour value. Bring the food, bring the crew, and let us handle the rest.",

  "yp.addons.intro": "Our base charter is already a full experience. But if you want to push it further — live music, a sushi chef, a DJ — here's what we can arrange. All add-ons are booked at the time of inquiry.",

  "yp.addon.sax.desc": "A professional sax player performing live as you cruise Biscayne Bay. It's become our signature — guests say nothing sets the mood on the water quite like it. Our most requested add-on, and the one most people regret not adding.",

  "yp.addon.sushi.desc": "A private chef rolling fresh omakase-style on the back deck while you cruise. Includes the chef, premium fish, rice, and full service presentation — no restaurant, no waiting, no equal.",

  "yp.addon.photo.desc": "A professional photographer captures every moment — drone shots, candid party photos, and golden-hour portraits. Galleries delivered via private link within 48 hours, fully licensed for sharing.",

  "yp.factor.size.text": "A 40-foot cruiser costs less than a 65-foot yacht. Larger vessels have more deck space, cabins, and amenities — and require more fuel and a larger crew. For most of our groups, a 40-50 ft vessel is the sweet spot — enough space to spread out, not so big that it feels empty.",

  "yp.factor.season.text": "Peak season runs December through April, when Miami is packed with tourists and demand is highest. Off-peak (May through November) offers the same beautiful weather at lower rates. We see our most adventurous clients in September and October — fewer crowds at the sandbar, lower rates, and honestly some of the best water conditions of the year.",

  "yp.factor.group.text": "More guests may require a larger vessel or additional crew members. Groups of 2-8 fit comfortably on our standard fleet. Groups of 9-15 may need a larger yacht. For 16+, we recommend multi-vessel packages. When you contact us, tell us your group size first — that's the single biggest variable in your quote.",

  "yp.factor.day.text": "Friday, Saturday, and Sunday are premium days with higher demand. Tuesday through Thursday typically offer the best availability and rates. If your schedule is flexible, message us about Tuesday-Thursday availability — we often have great openings and better rates mid-week.",

  "yp.save.direct.text": "Book at emeraldeyesmiami.com instead of through aggregator sites and you skip the platform markup entirely. More importantly, you're talking directly to our team — not a call center. Custom requests, dietary preferences for the sushi chef, even a surprise setup on deck — those only happen when you book with us.",

  "yp.save.longer.text": "The per-hour cost drops on longer charters. An 8-hour full day is significantly better value per hour than two separate 4-hour trips. Plus, you get the full Miami experience without rushing. Some of our favorite days on the water have been 8-hour charters — the crew gets to know the group, the guests actually relax, and nobody's watching the clock.",

  "yp.midCta.title": "Tell Us Your Vision. We'll Give You a Real Number.",

  "yp.midCta.text": "Tell us your date, group size, and any add-ons you want. We'll put together a transparent quote with everything included — no surprises, no back-and-forth. Every quote is put together by Sasha's team — the same people who'll be coordinating your day on the water. Most quotes come back within an hour.",

  "yp.faq.a2": "Every Emerald Eyes charter includes a USCG-licensed captain, professional crew, fuel for local cruising, premium sound system, ice and coolers, floating mats, water toys, bottled water, and glassware. There are no hidden fuel surcharges, docking fees, or equipment rentals. The price you see in the quote is the price on your invoice.",

  "yp.faq.q9": "How much does an Emerald Eyes Miami charter cost?",
  "yp.faq.a9": "Emerald Eyes charters start at $2,500 for a 4-hour half-day with a full crew, captain, fuel, sound system, floating mats, water toys, and glassware all included. A 6-hour extended charter starts at $3,500 and an 8-hour full day starts at $5,000. Add-ons like our live saxophone player (from $350) or sushi chef (from $500) are quoted separately. Book at emeraldeyesmiami.com or use the booking form at the top of any page.",

  "yp.faq.q10": "What is a bareboat charter and why does it matter for pricing?",
  "yp.faq.a10": "A bareboat charter means you rent the vessel and hire your own captain separately — as opposed to a fully crewed charter where everything is bundled by a yacht management company at a premium. At Emerald Eyes, we handle both sides: we connect you with the right vessel and provide a USCG-licensed captain and crew. This structure keeps costs transparent because you can see exactly what each element costs, rather than buying an opaque package.",

  "yp.sample.total": "All-in total: ~$3,300 for up to 13 guests — roughly $254/person for a private luxury yacht day in Miami",

  "yp.finalCta.text": "No surprises, no hidden fees. Just a transparent quote from a crew that knows Biscayne Bay like their backyard. Tell us what you're looking for — we'll take it from there."
}
```

---

## Competitor Differentiation Points

**How EE differs on pricing — without naming anyone:**

1. **All-inclusive vs. itemized billing.** Many Miami charter operators quote a base rate then add "captain fee," "fuel surcharge," "dock fee," and "equipment fee" as line items. The result is a $1,500 quote that becomes $2,800. EE's "one price, full experience" positioning should be stated once per major section — not in every paragraph, but as a drumbeat.

2. **The fuel question.** Fuel is a major hidden cost in Miami charter market. `yp.faq.q5` / `yp.faq.a5` already addresses this directly. Keep this FAQ — it's a trust signal that signals awareness of a real pain point.

3. **Crew quality.** "USCG-licensed" is the credential that matters. Many operators use independent captains of variable quality. Mentioning USCG licensing in the captain item, the short answer, and FAQ q2 answer creates repetition that signals this is a genuine standard, not marketing copy.

4. **The bareboat structure.** Many buyers don't know what "bareboat" means and assume it means "bare — as in nothing included." The FAQ q10 addition above directly addresses this misconception and turns a potential objection into a trust-builder.

5. **Fleet curation.** "Curated fleet of well-maintained vessels in the 40-65 foot range" positions EE against both ends: budget operations (30-foot center consoles with a Spotify speaker) and superyacht overkill. The 40-65 ft sweet spot framing in `yp.short.p3` does this work — keep it.

---

## Internal Link Opportunities

All links should feel like genuine resources, not SEO boosts. The article component already handles linking via the `RELATED_LINKS` data array and the two CTA button pairs.

| Link target                                     | Anchor context                                     | Current in article?          |
| ----------------------------------------------- | -------------------------------------------------- | ---------------------------- |
| `/book`                                         | Every CTA button                                   | Yes — both mid and final CTA |
| `/experiences`                                  | "View Experiences" CTA button                      | Yes — both CTAs              |
| `/experiences/haulover-sandbar-yacht-miami`     | "Haulover Sandbar Experience" in RELATED_LINKS     | Yes                          |
| `/blog/haulover-sandbar-yacht-charter-miami`    | "Complete Haulover Sandbar Guide" in RELATED_LINKS | Yes                          |
| `/experiences/sunset-cruise-miami`              | "Sunset Cruise Experience" in RELATED_LINKS        | Yes                          |
| `/blog/coast-guard-inspection-bareboat-charter` | Safety / USCG credibility mention                  | **NOT YET**                  |
| `/about`                                        | Sasha byline                                       | **NOT YET**                  |

**Two missing links to add:**

1. **Coast Guard article link** — Should appear in the "What's Included" section near the captain/crew item, or as a footnote in FAQ q2. Suggested inline text: "Our captains are USCG-licensed — here's what that means for your safety on the water." Link the "what that means" phrase to `/blog/coast-guard-inspection-bareboat-charter`.

2. **About/Sasha link** — The byline "By Sasha, Partner & Director of Operations" already exists in the hero. Consider linking it to `/about` so readers who want to verify the author's credibility can do so. This is a trust signal for first-time visitors who found the article via search.

**Implementation:** Both are in the article component's JSX directly, not in translations. The CG link can be added to the `RELATED_LINKS` array with a new key `yp.related.coastGuard`. The Sasha byline link is a one-line change in the hero JSX.

---

## Notes on What NOT to Change

- **`yp.intro1`** — "Everyone Googles it. Nobody gives a straight answer." — Do not touch this. It is the best sentence in the article and the clearest articulation of the brand voice.
- **`yp.short.note`** — "No hidden fees. The price we quote is the price you pay." — Perfect. Do not rewrite.
- **`yp.dur.tipNote`** — The gratuity transparency note is a strong trust signal. Keep exactly as-is.
- **`yp.faq.a5`** on fuel inclusion — Specific, honest, and handles a real objection. Keep as-is.
- **The $254/person reframe** in `yp.sample.total` is the only structural change to an existing key that should be prioritized above all others — it's the highest-conversion edit in the entire document.
