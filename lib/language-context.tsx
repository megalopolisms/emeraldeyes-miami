"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "es" | "pt" | "de" | "fr" | "zh" | "ja";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

const VALID_LANGS: Lang[] = ["en", "es", "pt", "de", "fr", "zh", "ja"];

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang") as Lang | null;
  if (urlLang && VALID_LANGS.includes(urlLang)) return urlLang;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const t = (key: string): string => {
    const dict = translations[lang] ?? translations.en;
    return dict[key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Shared chat keys (used across all languages)
// ---------------------------------------------------------------------------
const chatKeys = {
  // Chat bot messages
  "chat.welcome": "",
  "chat.occasion": "",
  "chat.groupSize": "",
  "chat.date": "",
  "chat.email": "",
  "chat.phone": "",
  "chat.duration": "",
  "chat.addons": "",
  "chat.pickup": "",
  "chat.contact": "",
  "chat.summary": "",
  "chat.confirmation": "",
  "chat.noAddons": "",
  "chat.sendThis": "",
  // Chat UI
  "chat.header": "",
  "chat.yachtRentals": "",
  "chat.online": "",
  "chat.repliesIn": "",
  "chat.typing": "",
  "chat.back": "",
  "chat.restart": "",
  "chat.continue": "",
  "chat.skip": "",
  "chat.ok": "",
  "chat.sendRequest": "",
  "chat.sending": "",
  "chat.continueWhatsApp": "",
  "chat.or": "",
  "chat.planAnother": "",
  "chat.reviewQuote": "",
  "chat.chatOnWhatsApp": "",
  "chat.tapContinue": "",
  // Reactions
  "reaction.birthday": "",
  "reaction.bachelor": "",
  "reaction.sunset": "",
  "reaction.proposal": "",
  "reaction.corporate": "",
  "reaction.vibes": "",
  // Options - occasions
  "opt.birthday": "",
  "opt.bachelor": "",
  "opt.sunset": "",
  "opt.proposal": "",
  "opt.corporate": "",
  "opt.vibes": "",
  // Options - group sizes
  "opt.intimate": "",
  "opt.smallGroup": "",
  "opt.party": "",
  "opt.bigGroup": "",
  "opt.event": "",
  // Options - duration
  "opt.2hr": "",
  "opt.4hr": "",
  "opt.8hr": "",
  "opt.fullday": "",
  "opt.multiday": "",
  "opt.from": "",
  "opt.customQuote": "",
  // Options - addons
  "opt.photo": "",
  "opt.sushi": "",
  "opt.dj": "",
  "opt.bottles": "",
  "opt.jetski": "",
  "opt.transport": "",
  "opt.hookah": "",
  "opt.cigar": "",
  "opt.sax": "",
  "opt.none": "",
  // Options - pickup
  "opt.southbeach": "",
  "opt.brickell": "",
  "opt.downtown": "",
  "opt.aventura": "",
  "opt.balharbour": "",
  "opt.sunnyisles": "",
  "opt.self": "",
  // Summary
  "summary.yourCharter": "",
  "summary.occasion": "",
  "summary.guests": "",
  "summary.date": "",
  "summary.duration": "",
  "summary.addons": "",
  "summary.pickup": "",
  "summary.estimate": "",
  "summary.disclaimer": "",
  // Contact form
  "form.name": "",
  "form.phone": "",
  "form.email": "",
  "form.notes": "",
  "form.required": "",
  "form.validEmail": "",
};

// Just for type documentation — not used at runtime
void chatKeys;

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Chat messages
    "chat.welcome":
      "Welcome to Emerald Eyes Miami. Let's build your perfect day on the water.",
    "chat.occasion": "What's the occasion?",
    "chat.groupSize": "Great choice! How many guests?",
    "chat.date": "When are you thinking?",
    "chat.email": "What's your email? We'll send the quote there.",
    "chat.phone": "And your phone number?",
    "chat.duration": "How long on the water?",
    "chat.addons": "Want to make it unforgettable? Pick as many as you'd like:",
    "chat.pickup": "Where are you staying? We can pick you up.",
    "chat.contact": "Almost there. How do we reach you?",
    "chat.summary": "Here's your experience:",
    "chat.confirmation": "We'll confirm within 1 hour. Talk soon!",
    "chat.noAddons": "No add-ons for now",
    "chat.sendThis": "Send this request",
    // Chat UI
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "Yacht Rentals",
    "chat.online": "online",
    "chat.repliesIn": "replies in",
    "chat.typing": "typing...",
    "chat.back": "Back",
    "chat.restart": "restart",
    "chat.continue": "Continue",
    "chat.skip": "Skip",
    "chat.ok": "OK",
    "chat.sendRequest": "Send My Request",
    "chat.sending": "Sending...",
    "chat.continueWhatsApp": "Continue on WhatsApp",
    "chat.or": "or",
    "chat.planAnother": "Plan Another Trip",
    "chat.reviewQuote": "Review My Quote",
    "chat.chatOnWhatsApp": "Chat on WhatsApp",
    "chat.tapContinue": "tap Continue",
    // Occasion reactions
    "reaction.birthday": "Happy birthday! Let's make it one to remember.",
    "reaction.bachelor": "Oh it's going to be a movie. Let's set it up.",
    "reaction.sunset":
      "The golden hour on the water hits different. Great pick.",
    "reaction.proposal":
      "We love a good love story. Let's plan the perfect moment.",
    "reaction.corporate":
      "Impressive setting for impressive people. Let's talk details.",
    "reaction.vibes": "No agenda, just ocean. We got you.",
    // Options - occasions
    "opt.birthday": "Birthday",
    "opt.bachelor": "Bachelor/ette",
    "opt.sunset": "Sunset Date",
    "opt.proposal": "Proposal",
    "opt.corporate": "Corporate",
    "opt.vibes": "Just Vibes",
    // Options - group size subtitles
    "opt.intimate": "Intimate",
    "opt.smallGroup": "Small group",
    "opt.party": "Party",
    "opt.bigGroup": "Big group",
    "opt.event": "Event",
    // Options - duration
    "opt.2hr": "2 Hours",
    "opt.4hr": "4 Hours",
    "opt.8hr": "8 Hours",
    "opt.fullday": "Full Day",
    "opt.multiday": "Multi-Day",
    "opt.from": "from",
    "opt.customQuote": "Custom quote",
    // Options - addons
    "opt.photo": "Photo Package",
    "opt.sushi": "Sushi Chef",
    "opt.dj": "DJ / Music",
    "opt.bottles": "Bottle Service",
    "opt.jetski": "Jet Skis",
    "opt.transport": "Transport",
    "opt.hookah": "Hookah",
    "opt.cigar": "Cigar Lounge",
    "opt.sax": "Live Sax Player",
    "opt.none": "Keep It Simple",
    // Options - pickup
    "opt.southbeach": "South Beach",
    "opt.brickell": "Brickell",
    "opt.downtown": "Downtown",
    "opt.aventura": "Aventura",
    "opt.balharbour": "Bal Harbour",
    "opt.sunnyisles": "Sunny Isles",
    "opt.self": "I'll get there myself",
    // Summary
    "summary.yourCharter": "Your Charter",
    "summary.occasion": "Occasion",
    "summary.guests": "Guests",
    "summary.date": "Date",
    "summary.duration": "Duration",
    "summary.addons": "Add-ons",
    "summary.pickup": "Pickup",
    "summary.estimate": "Estimate",
    "summary.disclaimer":
      "Planning range. Final quote confirmed within 1 hour.",
    // Contact form
    "form.name": "Your name",
    "form.phone": "Phone number",
    "form.email": "Email",
    "form.notes": "Special requests (optional)",
    "form.required": "Required",
    "form.validEmail": "Enter a valid email",
    // Trust
    "trust.responds": "Responds in 1 hour",
    "trust.charters": "100+ charters/year",
    // Scroll
    "scroll.label": "Scroll",
    // Sasha section
    "sasha.role": "Partner & Director of Operations",
    "sasha.title": "Meet",
    "sasha.name": "Sasha",
    "sasha.p1":
      "A proud Miami resident, Sasha holds a degree in Merchant Marine Science and has spent her career on the water. As our partner and Director of Operations, she personally oversees every charter — from the first message to the moment you step back on the dock.",
    "sasha.p2.pre":
      "When she's not coordinating charters, you'll find her on a",
    "sasha.p2.jetski": "jet ski",
    "sasha.p2.mid":
      ", diving, or exploring the coastline she knows like the back of her hand. With",
    "sasha.p2.hundred": "over a hundred rentals a year",
    "sasha.p2.post":
      "across Biscayne Bay, Haulover, and the Gulf Stream, Sasha brings the kind of hands-on knowledge that only comes from",
    "sasha.p2.living": "living",
    "sasha.p2.end": "this life — not just managing it.",
    "sasha.quote":
      "My favorite part? Making sure every guest walks away saying it was the best day they've ever had on the water.",
    "sasha.badge1": "Merchant Marine Graduate",
    "sasha.badge2": "100+ Charters / Year",
    "sasha.badge3": "Miami Local & Water Enthusiast",
    // Below-fold sections
    "exp.title": "Experiences",
    "exp.subtitle":
      "Every charter is designed around your occasion. Pick one, or let us create something custom.",
    "sax.label": "Signature Add-On",
    "sax.title.pre": "Live ",
    "sax.title.highlight": "Sax",
    "sax.title.post": " on the Water",
    "sax.p1":
      "Imagine cruising through Biscayne Bay as the sun melts into the horizon — and a professional saxophonist sets the soundtrack to your evening. Smooth jazz, deep house remixes, or soulful melodies — the vibe is yours to choose.",
    "sax.p2":
      "Whether it's a sunset date, a proposal, or a night out with friends, live sax transforms your charter into something cinematic. It's the detail guests never expect — and never forget.",
    "sax.quote":
      "The moment the sax hit during golden hour, everyone just stopped and looked at each other. Pure magic.",
    "sax.badge1": "Professional Musician",
    "sax.badge2": "Perfect for Sunset Cruises",
    "sax.badge3": "Jazz, House & Soul",
    "sushi.label": "Signature Add-On",
    "sushi.title.pre": "Private ",
    "sushi.title.highlight": "Sushi Chef",
    "sushi.p1":
      "A dedicated sushi chef boards your yacht with the freshest ingredients Miami has to offer — and prepares an omakase-style experience right before your eyes. Nigiri, sashimi, specialty rolls, all crafted on deck while you cruise.",
    "sushi.p2":
      "Whether it's a corporate event, a birthday celebration, or an intimate date night, a live sushi bar elevates your charter into a five-star dining experience — surrounded by nothing but ocean and skyline.",
    "sushi.quote":
      "Fresh tuna, open water, sunset views. It doesn't get better than this.",
    "sushi.badge1": "Omakase-Style Service",
    "sushi.badge2": "Professional Chef On Board",
    "sushi.badge3": "Freshest Local Ingredients",
    "trust.uscg": "USCG Inspected",
    "trust.uscg.sub": "Fully compliant & safe vessels",
    "trust.captains": "Licensed Captains",
    "trust.captains.sub": "Experienced professional crew",
    "trust.location": "North Miami Based",
    "trust.location.sub": "Haulover, Aventura, Sunny Isles",
    "why.title": "Why Emerald Eyes",
    "why.1.title": "Curated, Not Generic",
    "why.1.text":
      "Every charter is tailored to your group, your vibe, your vision.",
    "why.2.title": "We Handle Everything",
    "why.2.text": "From pickup to playlist to photos — you just show up.",
    "why.3.title": "North Miami Native",
    "why.3.text":
      "We know these waters. Haulover, Biscayne, Sunny Isles, the Gulf Stream — this is home.",
    "how.title": "How It Works",
    "how.1.title": "Chat With Us",
    "how.1.text":
      "Tell us the occasion, group size, and date. We build a quote in minutes.",
    "how.2.title": "We Confirm",
    "how.2.text":
      "Get your custom itinerary with pricing, yacht details, and add-ons.",
    "how.3.title": "Board & Enjoy",
    "how.3.text":
      "We handle every detail. You just step aboard and make memories.",
    // Blog
    "blog.title": "Blog",
    "blog.subtitle":
      "Guides, tips, and insider knowledge about chartering in Miami.",
    "blog.readArticle": "Read article \u2192",
    "blog.featured": "Featured guide",
    "blog.cornerstone":
      "In-depth guides to help you navigate Miami's waterways with confidence — from regulations and safety to the best spots on the water.",
    "blog.backToBlog": "Back to Blog",
    "blog.ctaTitle": "Ready to get on the water?",
    "blog.ctaText":
      "Every Emerald Eyes charter comes fully equipped, properly documented, and crewed by licensed professionals.",
    "blog.ctaBook": "Plan Your Charter",
    "blog.ctaExperiences": "Browse Experiences",
    "blog.cat.safety": "Safety & Regulations",
    "blog.cg.title":
      "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
    "blog.cg.excerpt":
      "A complete guide to USCG boardings on bareboat yacht charters in Miami. What they check, what paperwork you need, safety equipment requirements, and how to pass every time.",
    "blog.cg.readTime": "10 min read",
    // Coast Guard article
    "cg.quick.title": "Quick answer",
    "cg.guide.title": "In this guide",
    "cg.heroTitle":
      "What Happens During a Coast Guard Inspection on a Bareboat Charter?",
    "cg.intro1":
      "If you\u2019re renting a yacht in Miami, there\u2019s a good chance the U.S. Coast Guard will board your vessel at some point during the trip. It\u2019s not a raid. It\u2019s not a sign that something went wrong. It\u2019s routine \u2014 and if you\u2019re on a properly run bareboat charter, it takes about ten minutes and you\u2019re back to enjoying the water.",
    "cg.intro2":
      "But most people have no idea what to expect. What do they check? What paperwork do they ask for? Why do they separate the crew from the guests? This guide breaks it all down \u2014 from the legal framework behind the inspection to what actually happens on the water, based on real experience running charters in South Florida.",
    "cg.s1.title": "What Is a Bareboat Charter?",
    "cg.s1.p1":
      "Before we get into the inspection itself, it\u2019s important to understand the bareboat charter structure \u2014 because that\u2019s exactly what the Coast Guard is verifying when they board.",
    "cg.s1.p2":
      "A bareboat charter means the client rents the vessel itself \u2014 without crew. The client becomes the temporary \u201Cowner\u201D for the duration of the charter. They choose their own captain, they choose their own deckhand, and they\u2019re responsible for the operation of the vessel during the rental period.",
    "cg.s1.p3":
      "This distinction matters legally. Under Coast Guard guidance (specifically NVIC 7-94), a bareboat charter is only valid when:",
    "cg.s1.li1":
      "The charterer chooses the captain \u2014 not the vessel owner",
    "cg.s1.li2": "The charterer pays the captain directly",
    "cg.s1.li3":
      "The captain works for the charterer during the charter, not for the vessel owner",
    "cg.s1.li4": "The charterer can dismiss the captain for cause",
    "cg.s1.li5":
      "The vessel owner may suggest qualified captains, but cannot effectively force one specific captain or keep operational control",
    "cg.s1.p4":
      "This is the framework that keeps most yacht rentals in Miami operating without needing a full Coast Guard Certificate of Inspection (COI). When the structure is legitimate, the vessel operates as an uninspected passenger vessel carrying six or fewer passengers \u2014 or as a true bareboat with up to 12.",
    "cg.s2.title": "Why Does the Coast Guard Board Charter Vessels?",
    "cg.s2.p1":
      "The Coast Guard has the authority to board any vessel in U.S. waters at any time. For charter vessels in the Miami area \u2014 Biscayne Bay, Haulover, the Intracoastal, the Atlantic side \u2014 boardings are frequent, especially on weekends and holidays.",
    "cg.s2.p2": "They\u2019re checking for three things:",
    "cg.s2.c1.title": "Safety compliance",
    "cg.s2.c1.text":
      "Life jackets, fire extinguishers, life rings, navigation lights, visual distress signals \u2014 all the gear required under 46 C.F.R. Part 25.",
    "cg.s2.c2.title": "Legal charter structure",
    "cg.s2.c2.text":
      "Is this a legitimate bareboat? Or is the vessel owner running an illegal crewed charter disguised as a bareboat to avoid inspection requirements?",
    "cg.s2.c3.title": "Passenger count",
    "cg.s2.c3.text":
      "How many people are on board? Over 6 passengers with owner-provided crew triggers Subchapter T requirements (46 C.F.R. \u00A7 175.110). Over 12 on a bareboat triggers the same.",
    "cg.s2.p3":
      "The Coast Guard actively terminates illegal charter trips. Their enforcement routinely focuses on too many paying passengers, no proper credentialed operator, fake bareboat paperwork, and owner-selected \u201Cindependent\u201D captains who are not actually independent.",
    "cg.s3.title": "What Actually Happens During the Boarding",
    "cg.s3.intro":
      "Here\u2019s what a typical Coast Guard boarding looks like on a bareboat charter in the Miami area, step by step.",
    "cg.step1.title": "They Separate the Crew from the Guests",
    "cg.step1.p1":
      "The first thing the Coast Guard does is separate the captain and any crew members from the charter guests. This is intentional. They want to ask each group questions independently to verify that the bareboat arrangement is real \u2014 not a paper-only structure where the owner is actually running the show.",
    "cg.step1.p2": "Don\u2019t be alarmed. It\u2019s standard procedure.",
    "cg.step2.title": "They Ask the Lead Guest Key Questions",
    "cg.step2.p1":
      "The Coast Guard officer will talk to the primary charterer \u2014 the person who signed the charter agreement \u2014 and ask questions like:",
    "cg.step2.q1":
      "Who did you choose as your captain? \u2014 They want to hear that you selected them, not that the boat owner assigned them.",
    "cg.step2.q2":
      "What is the captain\u2019s name? \u2014 You should know the name of the person operating your vessel.",
    "cg.step2.q3":
      "Who is the deckhand / first mate? \u2014 Same thing. If there\u2019s crew on board, you should know who they are.",
    "cg.step2.q4":
      "Who is paying the captain? \u2014 In a bareboat, the answer must be the charterer, not the vessel owner.",
    "cg.step2.p2":
      "This is the heart of the bareboat verification. The Coast Guard is confirming that the charterer is acting as the temporary \u201Cowner\u201D of the vessel. If the answers suggest the vessel owner chose the captain, pays the captain, or controls the operation, the bareboat structure falls apart \u2014 and the trip may be terminated.",
    "cg.step3.title": "They Review the Charter Contract",
    "cg.step3.p1":
      "The officer will ask to see the charter agreement. They\u2019re looking for all signatures (charterer and vessel owner), bareboat language clearly stating the vessel is chartered without crew, and that dates and vessel ID match the actual situation on the water.",
    "cg.step3.p2":
      "A properly executed bareboat charter agreement is not optional \u2014 it\u2019s the legal foundation of the entire arrangement. If the contract is missing, unsigned, or doesn\u2019t match the situation on the water, that\u2019s a serious problem.",
    "cg.step4.title": "They Count Everyone on Board",
    "cg.step4.p1":
      "A head count is standard. The number of passengers on board determines which federal regulations apply:",
    "cg.step5.title": "They Check Vessel Registration",
    "cg.step5.p1":
      "The Coast Guard will verify the vessel\u2019s registration or USCG Certificate of Documentation. The vessel name must match the paperwork. The Hull Identification Number (HIN) on the transom must be legible. If the vessel is documented, it needs a current, valid certificate under 46 U.S.C. Chapter 121 and 46 C.F.R. Part 67.",
    "cg.step6.title": "They Inspect Safety Equipment",
    "cg.step6.intro":
      "This is the most hands-on part of the inspection. The officer will physically check for:",
    "cg.step7.title": "They Check the Engine Room",
    "cg.step7.p1":
      "The officer may open the engine compartment for a visual inspection. They\u2019re looking for fuel leaks, proper ventilation, bilge conditions, and fire suppression readiness. On larger vessels, this is more thorough. On smaller charter boats, it\u2019s usually a quick visual check.",
    "cg.step8.title": "Captain Credentials",
    "cg.step8.p1":
      "The captain must carry a valid USCG credential \u2014 typically an OUPV (Operator of Uninspected Passenger Vessels, also known as a \u201Csix-pack license\u201D) or a Master license for larger operations. Under 46 C.F.R. \u00A7 15.605, every uninspected passenger vessel must be under the direction of a properly credentialed operator when underway. No credential, no charter.",
    // Passenger counts
    "cg.pax.6": "6 or fewer",
    "cg.pax.6.text":
      "passengers with owner-provided crew: may operate as an uninspected passenger vessel with a credentialed \u201Csix-pack\u201D captain (46 C.F.R. \u00A7 15.605).",
    "cg.pax.712": "7\u201312",
    "cg.pax.712.text":
      "passengers on a true bareboat: still legal, but the bareboat structure must be airtight.",
    "cg.pax.13": "13+",
    "cg.pax.13.text":
      "passengers on a bareboat: major red flag. Triggers Subchapter T requirements and likely requires a Certificate of Inspection (46 C.F.R. \u00A7 176.100).",
    // Safety equipment
    "cg.pfd.title": "Life Jackets (PFDs)",
    "cg.pfd.text":
      "One USCG-approved Type I, II, or III life jacket for every person on board \u2014 including the captain. Plus appropriately sized child PFDs if children are aboard. Required under 46 C.F.R. \u00A7 25.25-5.",
    "cg.fire.title": "Fire Extinguishers",
    "cg.fire.text":
      "Correct number and type for the vessel length. Must have a current inspection date and be in working condition. Required under 46 C.F.R. \u00A7 25.30-20.",
    "cg.ring.title": "Throwable Life Ring (Type IV PFD)",
    "cg.ring.text":
      "One Type IV throwable device \u2014 typically a ring buoy or throwable cushion \u2014 required for vessels 16 feet and over. Required under 46 C.F.R. \u00A7 25.25-5(b).",
    "cg.placard.title": "Placards",
    "cg.placard.text":
      "Required safety placards must be posted in visible locations \u2014 including waste discharge regulations, navigation rules, and carbon monoxide warnings where applicable.",
    "cg.vds.title": "Visual Distress Signals",
    "cg.vds.text":
      "Three day/night pyrotechnic signals or one electric SOS light plus three day signals. Must not be expired. Required under 46 C.F.R. \u00A7 25.25-10.",
    "cg.sound.title": "Sound-Producing Device",
    "cg.sound.text":
      "A horn or whistle audible for half a nautical mile. Vessels 39.4 feet and over require a mechanical horn. Required under 33 C.F.R. \u00A7 83.33.",
    "cg.nav.title": "Navigation Lights",
    "cg.nav.text":
      "Red/green bow lights, white stern light, and masthead light \u2014 all functional. Required under 33 C.F.R. Part 83.",
    // Safety equipment section heading (standalone, not tied to step6)
    "cg.equip.title": "Required Safety Equipment",
    "cg.equip.intro":
      "Every charter vessel must carry the following USCG-required safety equipment, per 46 C.F.R. Part 25.",
    // The 4 Rules (Sasha's content)
    "cg.rules.title": "The Rules You Need to Know",
    "cg.rules.intro":
      "Bareboat charters in Florida operate under specific federal and state regulations. Here are the four key rules every charterer should understand.",
    "cg.rule1.title": "The 12-Passenger Limit",
    "cg.rule1.li1": "A bareboat charter cannot carry more than 12 passengers",
    "cg.rule1.li2":
      "Children count as passengers. The charterer does not count as a passenger.",
    "cg.rule2.title":
      "Total Control & \u201CTemporary Owner\u201D (Owner Pro Hac Vice)",
    "cg.rule2.li1":
      "No imposed crew: you choose from a list of qualified captains",
    "cg.rule2.li2":
      "Separate contracts: vessel and captain are independent agreements",
    "cg.rule2.li3":
      "Expenses: you are responsible for fuel, food, and captain fees",
    "cg.rule3.title": "Operating Requirements (Florida Law)",
    "cg.rule3.li1":
      "Boating Safety Education Card required (born after 1/1/1988)",
    "cg.rule3.li2":
      "Minimum age: 18 (many companies require 21\u201325 for insurance)",
    "cg.rule3.li3":
      "Documentation: signed charter agreement + registration certificate",
    "cg.rule4.title": "Strict Prohibitions",
    "cg.rule4.li1":
      "No owner on board: this would invalidate the charter contract",
    "cg.rule4.li2": "No commercial use: you cannot charge your guests",
    // What makes it pass
    "cg.pass.title": "What Makes a Charter Pass Every Time",
    "cg.pass.intro":
      "There are no tricks. A well-run bareboat charter passes a Coast Guard boarding because everything is genuine:",
    "cg.pass.li1":
      "The charterer genuinely chose their captain and can name them",
    "cg.pass.li2": "The charter contract is signed by all parties and on board",
    "cg.pass.li3": "The passenger count is within the legal limit",
    "cg.pass.li4": "Every person has a life jacket",
    "cg.pass.li5": "Fire extinguishers are current and accessible",
    "cg.pass.li6": "The life ring is ready to throw, not buried under gear",
    "cg.pass.li7": "The captain has their credential on them",
    "cg.pass.li8": "Vessel documentation matches the boat you\u2019re on",
    "cg.pass.closing":
      "The whole process usually takes about ten minutes. If everything checks out, the officer thanks the captain, sometimes hands over a decal, and the charter continues.",
    // Red flags
    "cg.red.title": "What Gets a Charter in Trouble",
    "cg.red.intro":
      "The Coast Guard has seen every shortcut. These are the things that get trips terminated or result in fines:",
    "cg.red.li1":
      "The charterer doesn\u2019t know who the captain is or didn\u2019t choose them",
    "cg.red.li2": "The vessel owner is on board in an operational role",
    "cg.red.li3":
      "The charter contract is missing, unsigned, or clearly boilerplate with no real bareboat substance",
    "cg.red.li4":
      "More passengers than allowed without a Certificate of Inspection",
    "cg.red.li5": "Missing or expired safety equipment",
    "cg.red.li6": "Captain has no credential or an expired credential",
    "cg.red.li7": "The owner pays the captain directly (not the charterer)",
    "cg.red.closing":
      "If the Coast Guard determines the bareboat structure is a sham, the vessel may be treated as an uninspected small passenger vessel operating illegally. The trip can be terminated on the water, and both the operator and owner may face enforcement action under 46 U.S.C. \u00A7 2101 and 46 C.F.R. \u00A7 176.100.",
    // Mid CTA
    "cg.midCta.title": "Want a charter that handles all of this?",
    "cg.midCta.text":
      "Every Emerald Eyes charter is fully compliant, fully equipped, and Coast Guard ready.",
    "cg.midCta.btn": "Plan Your Charter",
    // Sasha Interview
    "cg.sasha.title": "From the Water: An Interview with Sasha",
    "cg.sasha.intro":
      "Sasha is our operations lead at Emerald Eyes Miami. She\u2019s been running yacht charters out of North Miami and has been through countless Coast Guard boardings firsthand. We sat down with her to get the real picture of what these inspections look like in practice.",
    "cg.sasha.q1.q":
      "Q: What\u2019s the first thing the Coast Guard does when they pull up?",
    "cg.sasha.q1.a":
      "\u201CThe very first thing is they separate everybody. The crew goes to one side, the clients go to the other. They don\u2019t want you talking to each other while they\u2019re asking questions. It\u2019s not aggressive or anything \u2014 they just need independent answers to verify the charter is real.\u201D",
    "cg.sasha.q2.q": "Q: What do they ask the clients?",
    "cg.sasha.q2.a":
      "\u201CThey go straight to the main client \u2014 the person who booked the charter \u2014 and ask them: who did you choose as your captain? What\u2019s the captain\u2019s name? What\u2019s the first mate\u2019s name? Because in a bareboat, the client is basically the temporary owner. They should know who they hired. If the client looks confused or says \u2018I don\u2019t know, the company sent them,\u2019 that\u2019s a problem.\u201D",
    "cg.sasha.q3.q": "Q: What about the paperwork?",
    "cg.sasha.q3.a":
      "\u201CThey want to see the charter contract. And it can\u2019t just exist \u2014 it has to be signed by everybody. The client signed, the owner signed, all parties. They flip through it and check that the signatures are there, the dates match, and the vessel information is correct. If you show up with an unsigned contract, or one that doesn\u2019t match the boat you\u2019re on, that\u2019s not going to go well.\u201D",
    "cg.sasha.q4.q": "Q: After the questions, what do they physically inspect?",
    "cg.sasha.q4.a":
      "\u201CThey count everybody on board first. Head count. Then they go through the safety equipment \u2014 life jackets, fire extinguishers, the life ring, placards. They check the yacht registration. Then they go look at the engine room. It\u2019s all pretty quick if everything is where it should be.\u201D",
    "cg.sasha.q5.q": "Q: How long does it usually take?",
    "cg.sasha.q5.a":
      "\u201CIf you\u2019re prepared, maybe ten minutes. They come on, they do their checks, they\u2019re professional about it. I\u2019ve never had a problem because we always make sure everything is right before we leave the dock. The contract is signed, the equipment is checked, the head count matches. You do the work before you go out, and the inspection is nothing.\u201D",
    "cg.sasha.q6.q":
      "Q: What\u2019s the most important thing for clients to understand?",
    "cg.sasha.q6.a":
      "\u201CThat they\u2019re the boss. In a bareboat charter, the client is the temporary owner of that vessel. That\u2019s the whole point. You chose your captain, you chose your crew, you are paying them. When the Coast Guard asks, you should be able to say that confidently. It\u2019s not a trick question \u2014 it\u2019s how the system is supposed to work. And when it works right, the inspection is just a formality.\u201D",
    "cg.sasha.q7.q": "Q: Have you ever seen an inspection go wrong?",
    "cg.sasha.q7.a":
      "\u201CNot on our boats. But I\u2019ve heard stories from other operators. The most common issue is too many people on board. Someone invites a few extra friends, and now you\u2019re over the passenger limit. Or the paperwork isn\u2019t right \u2014 the contract wasn\u2019t signed, or the captain\u2019s name doesn\u2019t match. That\u2019s why we\u2019re strict about it before we leave. You do it right on the dock, and you never have a problem on the water.\u201D",
    // What this means
    "cg.client.title": "What This Means for You as a Client",
    "cg.client.p1":
      "If you\u2019re booking a yacht charter in Miami, here\u2019s the bottom line:",
    "cg.client.p2":
      "A reputable charter company wants to pass the inspection. We don\u2019t cut corners on safety equipment. We don\u2019t overload vessels. We run real bareboat structures where you genuinely choose your captain, and the contract reflects what\u2019s actually happening on the water.",
    "cg.client.p3":
      "When the Coast Guard pulls alongside, the captain greets them professionally, the paperwork is in order, the life jackets are counted, and within ten minutes you\u2019re back to your sunset cruise.",
    "cg.client.p4":
      "That\u2019s how it should work. That\u2019s how it works with us.",
    // Reference table
    "cg.ref.title": "Quick Reference: Key Federal Regulations",
    "cg.reg.nvic": "Coast Guard guidance on bareboat charter analysis",
    "cg.reg.cfr25":
      "Safety equipment requirements (PFDs, extinguishers, signals)",
    "cg.reg.175": "Subchapter T applicability (vessels carrying >6 passengers)",
    "cg.reg.176": "Certificate of Inspection requirement",
    "cg.reg.2101":
      "Definitions: small passenger vessel, uninspected passenger vessel",
    "cg.reg.15605":
      "Credentialed operator requirement for uninspected passenger vessels",
    "cg.reg.83": "Navigation lights and sound signals",
    "cg.reg.16": "Drug and alcohol testing for commercial vessel personnel",
    // Related links
    "cg.related.title": "Explore More",
    "cg.related.sunset": "Sunset Cruise Experience",
    "cg.related.party": "Private Party Charter",
    "cg.related.sandbar": "Haulover Sandbar Trip",
    "cg.related.about": "About Emerald Eyes Miami",
    // Final CTA
    "cg.cta.title": "Charter with confidence.",
    "cg.cta.text":
      "Every Emerald Eyes charter is built on a legitimate bareboat structure, fully equipped vessels, and credentialed captains. We welcome Coast Guard inspections because we have nothing to hide.",
    "cg.cta.book": "Plan Your Charter",
    "cg.cta.explore": "Browse Experiences",
    // Jet Ski article — Hero
    "js.heroTitle": "Do You Need a License to Ride a Jet Ski in Miami?",
    "js.heroIntro":
      "You\u2019re planning a trip to Miami, scrolling through jet ski rentals, and the question hits: do I actually need a license for this? At Emerald Eyes Miami, we get this question all the time from guests exploring their options on the water. The short answer is no \u2014 Florida doesn\u2019t issue a \u201Cjet ski license.\u201D But depending on when you were born, you might need a Boating Safety Education Card before you can cruise past Star Island and into Biscayne Bay. Here\u2019s exactly what the rules are, how to get certified in 30 minutes from your phone, and everything else you should know.",
    // Jet Ski article — Trust strip
    "js.trust.yearRound": "Year-Round Riding",
    "js.trust.yearRound.sub":
      "Miami\u2019s warm waters make jet skiing a 365-day activity",
    "js.trust.noLicense": "No License Required",
    "js.trust.noLicense.sub": "Just a Boating Safety Card if born after 1988",
    "js.trust.biscayne": "Biscayne Bay & Beyond",
    "js.trust.biscayne.sub":
      "Star Island, Fisher Island, downtown skyline views",
    // Jet Ski article — The Short Answer
    "js.answer.eyebrow": "The Quick Answer",
    "js.answer.title": "No License \u2014 But You May Need a Card",
    "js.answer.p1":
      "Florida does not require a traditional license to operate a jet ski. What the state does require is a Boating Safety Education Identification Card \u2014 and whether you need one depends entirely on your date of birth.",
    "js.answer.p2":
      "If you were born before January 1, 1988, you\u2019re exempt. Bring a valid photo ID \u2014 driver\u2019s license or passport \u2014 and you\u2019re ready to ride past Star Island mansions, cruise through Biscayne Bay, and spot dolphins along the Miami skyline. No course, no card, no test.",
    "js.answer.p3":
      "If you were born on or after January 1, 1988, you need either a Florida Boating Safety Education ID Card (lifetime, ~$40) or a 90-Day Temporary Certificate ($9, takes about 30 minutes online). You must carry it along with a photo ID while operating any vessel with 10 or more horsepower \u2014 and every jet ski on the market qualifies. This rule comes from Florida Statute \u00A7 327.395 and applies statewide.",
    "js.answer.tag1": "Born before 1988? Just bring ID",
    "js.answer.tag2": "Born after 1988? $9 temp cert",
    "js.answer.tag3": "Takes 30 min online",
    // Jet Ski article — Certification
    "js.cert.title": "How to Get Certified Fast",
    "js.cert.intro":
      "If you were born after 1988 and don\u2019t already have a card, you have options. One takes less time than ordering lunch at a Miami Beach caf\u00E9.",
    "js.cert.temp.title": "90-Day Temporary Certificate",
    "js.cert.temp.text":
      "Best for tourists visiting Miami. Take a 25-question online exam \u2014 pass with 19/25 correct. Costs $8.99\u2013$11.95. Complete it from your phone at the dock in about 30 minutes. Valid for 90 days. Accepted by all rental operators in Florida.",
    "js.cert.lifetime.title": "Lifetime Boating Card",
    "js.cert.lifetime.text":
      "Planning to come back to Miami\u2019s waters? Complete a full NASBLA-approved boating safety course (3\u20138 hours online). Prices range from free through BoatUS Foundation to $49.95 through other providers. The card from FWC never expires. Florida residents ages 12\u201318 also qualify for a free course via Florida Virtual School.",
    "js.cert.outOfState.title": "Out-of-State Card",
    "js.cert.outOfState.text":
      "Already have a boating safety card from another state? Florida accepts it, as long as the course was NASBLA-approved. Bring your card or certificate \u2014 Miami rental operators will honor it.",
    // Jet Ski article — What to Bring
    "js.checklist.title": "What to Bring When You Rent",
    "js.checklist.intro":
      "Show up with these four things and you\u2019ll be on Biscayne Bay in minutes.",
    "js.check.photoId.title": "Valid Photo ID",
    "js.check.photoId.text":
      "Driver\u2019s license, passport, or state ID. Required for all renters regardless of birth date.",
    "js.check.boaterCard.title": "Boating Safety Card or Temp Certificate",
    "js.check.boaterCard.text":
      "Only if born on or after January 1, 1988. The $9 temporary certificate works perfectly for a Miami vacation.",
    "js.check.creditCard.title": "Credit Card for Deposit",
    "js.check.creditCard.text":
      "Most Miami operators hold $200\u2013$500 on your card as a security deposit. Not charged unless there\u2019s damage.",
    "js.check.age18.title": "Must Be 18 or Older",
    "js.check.age18.text":
      "Florida law sets 18 as the minimum rental age for jet skis. This is a state law, not just a company policy.",
    // Jet Ski article — Rules
    "js.rules.title": "Florida Jet Ski Rules to Know",
    "js.rules.intro":
      "Miami\u2019s waterways are beautiful but regulated. Here are the rules that matter most when you\u2019re out on Biscayne Bay.",
    "js.rules.hours.title": "Sunrise to Sunset Only",
    "js.rules.hours.text":
      "Jet skis can only operate from 30 minutes before sunrise to 30 minutes after sunset. No night riding \u2014 period. This is stricter than regular boats. Plan your Miami sunset ride to finish before the cutoff.",
    "js.rules.pfd.title": "Life Jacket Required",
    "js.rules.pfd.text":
      "Every person on a jet ski must wear a USCG-approved non-inflatable PFD \u2014 not just \u201Chave one available,\u201D actually wearing it. Inflatable life jackets are not permitted on PWC. The engine cutoff lanyard must be attached to your person, clothing, or PFD at all times.",
    "js.rules.bui.title": "BUI = Same as DUI",
    "js.rules.bui.text":
      "Boating Under the Influence carries the same 0.08% BAC limit as driving. First offense: $500\u2013$1,000 fine, up to 6 months jail. Under 21: zero-tolerance at 0.02%. FWC officers actively patrol Miami waterways.",
    // Jet Ski article — Mid CTA
    "js.midCta.title": "Want the View Without the Rules?",
    "js.midCta.text":
      "Love the idea of cruising past Star Island mansions and watching the Miami skyline from the water \u2014 but don\u2019t want to deal with certifications, life jacket rules, and sunset curfews? An Emerald Eyes Miami private yacht charter handles everything. Our captain navigates. Our crew handles the details. You just step aboard with a drink in hand. No license, no card, no hassle \u2014 just the best views in Miami.",
    "js.midCta.btn": "Plan Your Charter",
    // Jet Ski article — Best Spots
    "js.spots.title": "Where to Ride in Miami",
    "js.spots.intro":
      "Miami has some of the best jet ski waters in the country. Here are the spots that make it worth the trip.",
    "js.spot.biscayne.title": "Biscayne Bay",
    "js.spot.biscayne.text":
      "The go-to for beginners and experienced riders alike. Calm, shallow waters with the entire Miami skyline as your backdrop. Pass by Jungle Island, the Venetian Islands, and get views you can\u2019t see from shore. This is also where Emerald Eyes Miami runs our most popular yacht charters.",
    "js.spot.star.title": "Star Island & Fisher Island",
    "js.spot.star.text":
      "The celebrity mansion tour on water. Cruise past $40 million waterfront estates, mega-yachts, and infinity pools. The most Instagram-worthy stretch in Miami.",
    "js.spot.virginia.title": "Virginia Key & Key Biscayne",
    "js.spot.virginia.text":
      "More open water, less boat traffic. Ride to Cape Florida Lighthouse at the southern tip of Key Biscayne. Crandon Park offers calmer waters for newer riders.",
    "js.spot.intracoastal.title": "Intracoastal Waterway",
    "js.spot.intracoastal.text":
      "Island hopping between Miami Beach and the mainland. Views of downtown, Brickell towers, and the cruise port where the world\u2019s largest ships dock.",
    "js.spot.wildlife.title": "Dolphins & Wildlife",
    "js.spot.wildlife.text":
      "Keep your eyes on the water \u2014 dolphins, sea turtles, manta rays, and manatees are regularly spotted in Biscayne Bay. Winter months bring the best manatee sightings.",
    // Jet Ski article — Restricted Zones
    "js.zones.title": "Miami Restricted Zones",
    "js.zones.intro":
      "Miami-Dade County has specific zones where jet ski operation is restricted or prohibited. Know these before you ride \u2014 FWC officers patrol them actively.",
    "js.zone.haulover":
      "Haulover / Sunny Isles Beach Exclusion Zone \u2014 jet skis prohibited entirely in this area",
    "js.zone.miamiRiver":
      "Miami River and all tributaries (Tamiami Canal, Comfort Canal, Seybold Canal) \u2014 idle speed / no wake zone from salinity control structures to the Intracoastal Waterway",
    "js.zone.oleta":
      "Oleta River \u2014 idle speed / no wake zone from Maule Lake to the Intracoastal Waterway",
    "js.zone.keyBiscayne":
      "Key Biscayne Hurricane Harbor and Pines Canal \u2014 idle speed / no wake zone",
    "js.zone.manatee":
      "Manatee protection zones \u2014 seasonal slow-speed zones throughout Biscayne Bay, marked with signs",
    // Jet Ski article — Pricing
    "js.pricing.eyebrow": "2026 Pricing",
    "js.pricing.title": "How Much Does It Cost?",
    "js.pricing.p1":
      "Jet ski rentals in Miami are straightforward: 30 minutes runs $50\u2013$75, one hour costs $100\u2013$150, and two hours typically runs $175\u2013$250. Guided tours through Biscayne Bay and past Star Island are the most popular option at $125\u2013$200 per person.",
    "js.pricing.p2":
      "Most operators use Yamaha VX Deluxe or Sea-Doo models and launch from Miami Beach Marina, Bayside Marketplace, or Rickenbacker Causeway. Security deposits range from $200\u2013$500 (credit card hold, not charged unless there\u2019s damage).",
    "js.pricing.p3":
      "For groups, consider the math: a jet ski fits 1\u20132 people at $150/hour each. An Emerald Eyes Miami yacht charter for 6\u201312 guests starts around $2,500 \u2014 often a better per-person value with drinks, music, a professional captain, and zero certification hassle.",
    // Jet Ski article — Safety
    "js.safety.title": "Why the Card Matters",
    "js.safety.p1":
      "This isn\u2019t just paperwork. According to the USCG and FWC, Florida consistently leads the nation in boating incidents, with personal watercraft accounting for a significant share. Miami-Dade County regularly ranks among the top counties for PWC incidents. Over half are collisions with another vessel.",
    "js.safety.stat1": "FL leads the nation in boating incidents",
    "js.safety.stat2": "of fatal operators had no boater education",
    "js.safety.stat3": "for a 30-min temp certificate",
    "js.safety.p2":
      "The number that matters most: according to the 2024 USCG Recreational Boating Statistics report, 69% of deaths occurred on boats where the operator had no boating safety education. The temporary certificate covers right-of-way rules, navigation basics, and emergency procedures. It\u2019s 30 minutes that could save your life on Biscayne Bay.",
    // Jet Ski article — FAQ
    "js.faq.title": "Frequently Asked Questions",
    "js.faq.license.q": "Do you need a license to ride a jet ski in Miami?",
    "js.faq.license.a":
      "No traditional license is required. Anyone born on or after January 1, 1988 must carry a Boating Safety Education ID Card or a 90-day Temporary Certificate ($9, 30 minutes online). Those born before 1988 only need a valid photo ID.",
    "js.faq.age.q": "How old do you have to be to rent a jet ski in Miami?",
    "js.faq.age.a":
      "You must be at least 18 years old to rent a jet ski in Miami. Anyone aged 14\u201317 may operate a jet ski with a valid Boating Safety Education Card, but cannot rent one themselves. Under 14 is prohibited entirely per Florida Statute \u00A7 327.39.",
    "js.faq.night.q": "Can you ride a jet ski at night in Miami?",
    "js.faq.night.a":
      "No. Florida law prohibits PWC operation from 30 minutes after sunset to 30 minutes before sunrise. Plan your Miami ride to catch the sunset from the water, but finish before the cutoff.",
    "js.faq.cost.q": "How much does it cost to rent a jet ski in Miami?",
    "js.faq.cost.a":
      "30 minutes: $50\u2013$75. One hour: $100\u2013$150. Guided tours through Biscayne Bay and past Star Island: $125\u2013$200 per person. Most operators require a $200\u2013$500 security deposit on a credit card.",
    "js.faq.where.q": "Where can you ride a jet ski in Miami?",
    "js.faq.where.a":
      "Popular areas include Biscayne Bay (skyline views, calm waters), Star Island and Fisher Island (celebrity mansions), Virginia Key and Key Biscayne (open water, Cape Florida Lighthouse), and the Intracoastal Waterway. Restricted zones include Haulover/Sunny Isles and the Miami River.",
    "js.faq.tourist.q": "Can tourists ride jet skis in Miami?",
    "js.faq.tourist.a":
      "Absolutely \u2014 Miami is one of the best jet ski destinations in the world. Tourists born before 1988 just need a photo ID. Born after 1988? Take the 90-day Temporary Certificate exam online for $9 in about 30 minutes. Florida also accepts boating cards from other states.",
    "js.faq.equipment.q": "What safety equipment is required?",
    "js.faq.equipment.a":
      "Every person on a jet ski must wear a USCG-approved non-inflatable life jacket (inflatable PFDs are not allowed on PWC per Florida law). The operator must attach the engine cutoff lanyard to their person or PFD. Your Miami rental operator will provide all required safety equipment.",
    "js.faq.bestTime.q": "What is the best time of year to jet ski in Miami?",
    "js.faq.bestTime.a":
      "Miami\u2019s warm climate makes jet skiing a year-round activity. October through April offers lower humidity and calm waters. Summer months bring warmer water but afternoon thunderstorms \u2014 book morning rides. Any time of year, the Biscayne Bay skyline views are unforgettable.",
    // Jet Ski article — Quick Reference
    "js.quickRef.title": "Quick Reference",
    "js.ref.license":
      "License: No traditional license needed. Boating Safety Education Card required if born on/after Jan 1, 1988.",
    "js.ref.age": "Age to ride: 14+ to operate. 18+ to rent.",
    "js.ref.rent":
      "To rent: Photo ID + Boating Card (if applicable) + credit card.",
    "js.ref.night": "Night riding: Prohibited. Sunrise to sunset only.",
    "js.ref.pfd":
      "Life jacket: Required \u2014 every person must wear a USCG-approved non-inflatable PFD.",
    "js.ref.bui":
      "BUI: Same as DUI. 0.08% BAC limit. $500\u2013$1,000 fine for first offense.",
    "js.ref.tourist":
      "Tourists: $9 temporary certificate online, valid 90 days. Or bring your home state\u2019s card.",
    // Jet Ski article — Related
    "js.related.title": "Explore More",
    "js.related.coastGuard": "What Happens During a Coast Guard Inspection?",
    "js.related.sunset": "Sunset Cruise Experience",
    "js.related.sandbar": "Haulover Sandbar Yacht Trip",
    "js.related.fleet": "Our Fleet",
    "js.related.book": "Book Your Charter",
    // Jet Ski article — Final CTA
    "js.cta.title": "Skip the jet ski hassle.",
    "js.cta.text":
      "Same Biscayne Bay views. Same Star Island mansions. Same Miami sunset. But from an Emerald Eyes Miami private yacht with music, drinks, and room to relax \u2014 our captain handles everything. No license needed. No certification. Just you and the water.",
    "js.cta.book": "Plan Your Charter",
    "js.cta.explore": "Browse Experiences",
    // Blog listing — Jet Ski card
    "blog.moreArticles": "More Articles",
    "blog.cat.guides": "Guides",
    "blog.cat.destinations": "Destinations & Guides",
    "blog.js.title": "Do You Need a License to Ride a Jet Ski in Miami?",
    "blog.js.excerpt":
      "Florida doesn\u2019t issue a \u201Cjet ski license,\u201D but you may need a Boating Safety Education Card. Here\u2019s exactly what the rules are and how to get certified in 30 minutes.",
    "blog.js.readTime": "12 min read",
    // Blog listing — Haulover Sandbar card
    "blog.hs.title":
      "Haulover Sandbar by Yacht: The Complete Miami Charter Guide",
    "blog.hs.excerpt":
      "Everything you need to know about visiting Haulover Sandbar by private yacht \u2014 best times, what to bring, safety tips, rules, and how to anchor up in style.",
    "blog.hs.readTime": "14 min read",
    // Haulover Sandbar article — Hero
    "hs.heroTitle":
      "Haulover Sandbar by Yacht: The Complete Miami Charter Guide",
    "hs.intro1":
      "Haulover Sandbar is the one place in Miami where everybody goes on the weekend \u2014 and almost nobody arrives the right way. You can fight for parking at a public ramp, idle through the no-wake zone in a rental pontoon, and circle for an hour looking for a spot to anchor. Or you can pull up on a private yacht with music playing, floating mats ready, and a captain who\u2019s been anchoring at this sandbar for years.",
    "hs.intro2":
      "This guide covers everything you need to know: how to get there, when to go, what to bring, what the rules are, and why arriving by yacht charter isn\u2019t just more comfortable \u2014 it\u2019s the way Haulover was meant to be experienced.",
    "hs.guide.title": "In this guide",
    "hs.quick.title": "Quick facts",
    "hs.quick.location":
      "Northern Biscayne Bay, just south of Haulover Inlet (~25.9075\u00B0N, 80.1235\u00B0W)",
    "hs.quick.depth":
      "2\u20134 ft depth at mid-to-high tide \u2014 shallow enough to wade",
    "hs.quick.distance":
      "7.3 nautical miles from downtown Miami via the Intracoastal Waterway",
    "hs.quick.best":
      "Best days: Tuesday\u2013Thursday for calm, weekends for the party scene",
    // Haulover Sandbar article — What Is It
    "hs.what.title": "What Is Haulover Sandbar?",
    "hs.what.p1":
      "Haulover Sandbar is a shallow sand flat in the northern end of Biscayne Bay, just south of Haulover Inlet. At mid-to-high tide, the water is about waist-deep \u2014 crystal clear, warm, and calm enough to stand in comfortably. It\u2019s surrounded by deeper water on all sides, which means boats anchor along the edge and people wade out onto the flat to swim, drink, eat, and socialize.",
    "hs.what.p2":
      "On weekends, the sandbar draws 200 or more boats. DJs play from anchored vessels, floating food vendors paddle through selling tacos and ceviche, and the energy is somewhere between a beach club and a floating block party. It\u2019s one of the most unique experiences in Miami \u2014 and it\u2019s completely free to anchor.",
    "hs.what.p3":
      "But here\u2019s the thing most guides won\u2019t tell you: how you get there matters. The difference between fighting for a spot on a rented pontoon and stepping off a private yacht with a captain who knows exactly where to anchor \u2014 that\u2019s the difference between a good day and the best day on the water.",
    "hs.what.tag1": "2\u20134 ft shallow flats",
    "hs.what.tag2": "200+ boats on weekends",
    "hs.what.tag3": "Free to anchor",
    // Haulover Sandbar article — How to Get There
    "hs.route.title": "How to Get There by Yacht",
    "hs.route.p1":
      "Haulover Sandbar sits about 7.3 nautical miles north of downtown Miami via the Intracoastal Waterway. Most yacht charters depart from marinas in North Miami Beach, Aventura, or Miami Beach and reach the sandbar in 20\u201340 minutes depending on conditions.",
    "hs.route.p2":
      "The route runs north through the ICW, past Bal Harbour and Sunny Isles, then into the shallow flats just south of Haulover Inlet. Your captain navigates the channel markers, avoids the shoals, and positions the yacht on the best stretch of sand \u2014 usually on the south side of the sandbar where the water is calmest.",
    "hs.route.p3":
      "You don\u2019t need to worry about navigation, anchoring, tides, or finding a spot. That\u2019s the whole point of arriving by charter. You step on at the marina and step off into waist-deep water at the sandbar. Everything in between is handled.",
    "hs.route.note":
      "\u2693 On an Emerald Eyes charter, your captain handles the route, anchoring, and positioning. You just show up at the marina.",
    // Haulover Sandbar article — Best Time
    "hs.time.title": "Best Time to Visit",
    "hs.time.intro":
      "When you go matters almost as much as how you get there. The sandbar is a completely different experience depending on the day and the tide.",
    "hs.time.weekday.title": "Weekdays (Tue\u2013Thu)",
    "hs.time.weekday.text":
      "The sweet spot. Crystal-clear water, only a handful of boats, and the sandbar feels like a private island. Best for groups that want calm, photos, and space. Wednesday mornings are practically empty.",
    "hs.time.weekend.title": "Weekends (Sat\u2013Sun)",
    "hs.time.weekend.text":
      "The full Miami sandbar party. 200+ boats, DJs on anchored vessels, floating food vendors, and non-stop energy. Arrive by 11 AM to get a prime anchoring spot. The north side is the party zone; the south side is quieter.",
    "hs.time.tide.title": "Tide Timing",
    "hs.time.tide.text":
      "Aim for mid-to-high tide. The water on the flats is 2\u20134 feet deep \u2014 perfect for wading and swimming. At low tide, parts of the sandbar can be exposed and anchoring gets tricky. Check the tide chart for Haulover Inlet before your trip.",
    // Haulover Sandbar article — What to Bring
    "hs.bring.title": "What to Bring",
    "hs.bring.intro":
      "Half the stuff you\u2019d normally pack for a boat day is already on board an Emerald Eyes charter. Here\u2019s what you bring and what we handle.",
    "hs.bring.you": "You bring",
    "hs.bring.we": "We provide",
    "hs.bring.sunscreen.title": "Sunscreen",
    "hs.bring.sunscreen.text":
      "Reef-safe preferred. You\u2019re in the water for hours \u2014 reapply every 90 minutes.",
    "hs.bring.sunglasses.title": "Sunglasses with Strap",
    "hs.bring.sunglasses.text":
      "Polarized lenses are ideal. A strap keeps them out of the bay.",
    "hs.bring.phone.title": "Waterproof Phone Case",
    "hs.bring.phone.text":
      "The sandbar photos will be worth it. Protect your phone from salt water.",
    "hs.bring.cash.title": "Cash",
    "hs.bring.cash.text":
      "Floating food vendors sell tacos, ceviche, and pizza \u2014 cash only.",
    "hs.bring.food.title": "Food & Drinks",
    "hs.bring.food.text":
      "Bring your own \u2014 no glass bottles. Cans, plastic, and cooler-friendly only.",
    "hs.bring.swimsuit.title": "Swimsuit & Towel",
    "hs.bring.swimsuit.text":
      "You\u2019re getting wet. Bring a change of clothes for the ride back.",
    "hs.provide.sound.title": "Sound System",
    "hs.provide.sound.text":
      "Full Bluetooth system with speakers throughout the yacht.",
    "hs.provide.ice.title": "Ice, Coolers & Glassware",
    "hs.provide.ice.text":
      "Premium coolers stocked with ice. Real glassware, not red cups.",
    "hs.provide.mats.title": "Floating Mats",
    "hs.provide.mats.text":
      "Large floating mats deployed at the sandbar for lounging on the water.",
    "hs.provide.toys.title": "Water Toys",
    "hs.provide.toys.text":
      "Inflatables, noodles, and accessories for the group.",
    "hs.provide.glass.title": "Bottled Water",
    "hs.provide.glass.text": "Complimentary bottled water throughout the trip.",
    "hs.provide.captain.title": "Licensed Captain & Crew",
    "hs.provide.captain.text":
      "USCG-credentialed captain who knows every inch of the sandbar.",
    // Haulover Sandbar article — Rules
    "hs.rules.title": "Rules & Regulations",
    "hs.rules.intro":
      "Haulover Sandbar is regulated by Florida state law and Miami-Dade County ordinances. Your captain knows these \u2014 but you should too.",
    "hs.rule1.title": "Anchoring",
    "hs.rule1.li1":
      "Anchor on sand only. Anchoring on seagrass beds is prohibited under Florida law and can result in fines.",
    "hs.rule1.li2":
      "Maintain proper distance from other vessels. Anchor lights required if staying past sunset.",
    "hs.rule2.title": "Alcohol",
    "hs.rule2.li1":
      "Open containers are legal on boats in Florida. Your guests can drink freely.",
    "hs.rule2.li2":
      "The captain must stay under the 0.08% BAC limit (BUI law). On an Emerald Eyes charter, the captain doesn\u2019t drink \u2014 period.",
    "hs.rule3.title": "Trash & Environment",
    "hs.rule3.li1":
      "No glass bottles. Use cans and plastic. Pack out everything you bring in.",
    "hs.rule3.li2":
      "Do not feed marine wildlife. Manatees, dolphins, and sea turtles are protected by federal law.",
    "hs.rule4.title": "Safety",
    "hs.rule4.li1":
      "Life jackets required for every person on board (46 C.F.R. \u00A7 25.25-5).",
    "hs.rule4.li2":
      "Children must wear PFDs at all times when not in the cabin. No exceptions.",
    "hs.rules.cgLink":
      "Read our full guide to Coast Guard inspections on bareboat charters \u2192",
    // Haulover Sandbar article — Safety
    "hs.safety.title": "Is Haulover Sandbar Safe?",
    "hs.safety.intro":
      "Yes \u2014 if you know what you\u2019re doing. The sandbar itself is shallow and calm. The danger is what\u2019s next to it.",
    "hs.safety.inlet.title": "Haulover Inlet",
    "hs.safety.inlet.text":
      "Haulover Inlet is one of the most dangerous inlets in South Florida. The narrow channel between Biscayne Bay and the Atlantic creates powerful currents, especially during outgoing tides. Boats have capsized here. This is not where you swim, and it\u2019s not where inexperienced captains should navigate.",
    "hs.safety.current.title": "Current & Tides",
    "hs.safety.current.text":
      "During peak tidal flow, currents near the inlet can reach 4\u20136 knots. Even at the sandbar, there can be mild current. Stay on the flats where the water is shallow. Don\u2019t let children drift toward the channel.",
    "hs.safety.captain.title": "Why the Captain Matters",
    "hs.safety.captain.text":
      "An experienced captain knows where to anchor to avoid the current, how to position the yacht for the best protection, and when conditions aren\u2019t safe enough to go at all. On an Emerald Eyes charter, that decision is never yours to make \u2014 it\u2019s the captain\u2019s. That\u2019s the safety margin you\u2019re paying for.",
    // Haulover Sandbar article — Activities
    "hs.do.title": "What to Do at the Sandbar",
    "hs.do.intro":
      "The sandbar is what you make it. Here\u2019s what most people do \u2014 and what you can add to make it unforgettable.",
    "hs.act.wade.title": "Wade, Swim & Float",
    "hs.act.wade.text":
      "The water is waist-deep and crystal clear. Walk around the sandbar, float on a mat, swim between boats. It\u2019s the most relaxed you\u2019ll ever be in Miami.",
    "hs.act.food.title": "Eat from Floating Vendors",
    "hs.act.food.text":
      "On weekends, vendors paddle through on kayaks and jet skis selling fresh tacos, ceviche, pizza, and a\u00e7a\u00ed bowls. Cash only. It\u2019s one of the best parts of the experience.",
    "hs.act.photo.title": "Take Photos",
    "hs.act.photo.text":
      "The light at Haulover Sandbar is unreal \u2014 especially between 3\u20135 PM. Turquoise water, white sand, and the Miami skyline in the distance. Waterproof phone case recommended.",
    "hs.act.hop.title": "Island Hop Nearby",
    "hs.act.hop.text":
      "After the sandbar, cruise south to Nixon Sandbar, explore the Oleta River, or head to Bal Harbour for a sunset dinner. Your captain can build a full route.",
    // Haulover Sandbar article — Add-ons
    "hs.addon.title": "Make it unforgettable \u2014 Emerald Eyes add-ons",
    "hs.addon.sax.title": "Live Saxophone",
    "hs.addon.sax.text":
      "A professional saxophonist plays jazz, house, and soul while you float at the sandbar. Golden hour on the water with live music \u2014 there\u2019s nothing like it.",
    "hs.addon.sushi.title": "Private Sushi Chef",
    "hs.addon.sushi.text":
      "A dedicated chef boards your yacht with the freshest ingredients in Miami and prepares omakase-style sushi while you\u2019re anchored at the sandbar.",
    "hs.addon.jetski.title": "Jet Ski Add-On",
    "hs.addon.jetski.text":
      "Ride jet skis around the sandbar and through Biscayne Bay. Delivered to the yacht and picked up when you\u2019re done.",
    // Haulover Sandbar article — Nearby
    "hs.nearby.title": "Beyond the Sandbar",
    "hs.nearby.intro":
      "The sandbar is the main event, but there\u2019s more to explore if you have time on your charter.",
    "hs.near.marina.title": "Bill Bird Marina (Haulover Park)",
    "hs.near.marina.text":
      "Just completed a $13.8M renovation. Full-service marina with 500+ boat storage. The closest launch point to the sandbar.",
    "hs.near.beach.title": "Haulover Beach",
    "hs.near.beach.text":
      "The famous clothing-optional beach is on shore, north of the inlet \u2014 a completely separate location from the sandbar. Not the same place.",
    "hs.near.oleta.title": "Oleta River State Park",
    "hs.near.oleta.text":
      "Florida\u2019s largest urban park, right on Biscayne Bay. Kayaking, mangrove trails, and a quiet contrast to the sandbar energy.",
    // Haulover Sandbar article — Related
    "hs.related.title": "Explore More",
    "hs.related.intro": "More guides and experiences from Emerald Eyes Miami.",
    "hs.related.experience": "Haulover Sandbar Experience",
    "hs.related.coastGuard": "Coast Guard Inspection Guide",
    "hs.related.sunset": "Sunset Cruise Experience",
    "hs.related.about": "About Emerald Eyes Miami",
    // Haulover Sandbar article — Mid CTA
    "hs.midCta.title": "Ready to do the sandbar the right way?",
    "hs.midCta.text":
      "Private yacht, licensed captain, floating mats, music, and the best anchoring spot at the sandbar. Starting at $2,500 for 4\u20138 hours. Bring your crew and your drinks \u2014 we handle everything else.",
    "hs.midCta.btn": "See the Haulover Experience",
    // Haulover Sandbar article — Final CTA
    "hs.cta.title": "This is how Miami does the sandbar.",
    "hs.cta.text":
      "Private yacht. Licensed captain. Floating mats, music, and room for up to 12. Pull up to Haulover Sandbar the way it was meant to be experienced \u2014 and let us handle the rest.",
    "hs.cta.book": "Plan Your Charter",
    "hs.cta.explore": "Browse Experiences",
  },

  es: {
    // Chat messages
    "chat.welcome":
      "Bienvenido a Emerald Eyes Miami. Vamos a crear tu dia perfecto en el agua.",
    "chat.occasion": "Cual es la ocasion?",
    "chat.groupSize": "Excelente eleccion! Cuantos invitados?",
    "chat.date": "Cuando estas pensando?",
    "chat.email": "Cual es tu email? Enviaremos la cotizacion ahi.",
    "chat.phone": "Y tu numero de telefono?",
    "chat.duration": "Cuanto tiempo en el agua?",
    "chat.addons": "Quieres hacerlo inolvidable? Elige los que quieras:",
    "chat.pickup": "Donde te hospedas? Podemos recogerte.",
    "chat.contact": "Ya casi. Como te contactamos?",
    "chat.summary": "Tu experiencia:",
    "chat.confirmation": "Confirmaremos en 1 hora. Hablamos pronto!",
    "chat.noAddons": "Sin extras por ahora",
    "chat.sendThis": "Enviar esta solicitud",
    // Chat UI
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "Alquiler de Yates",
    "chat.online": "en linea",
    "chat.repliesIn": "responde en",
    "chat.typing": "escribiendo...",
    "chat.back": "Atras",
    "chat.restart": "reiniciar",
    "chat.continue": "Continuar",
    "chat.skip": "Omitir",
    "chat.ok": "OK",
    "chat.sendRequest": "Enviar Mi Solicitud",
    "chat.sending": "Enviando...",
    "chat.continueWhatsApp": "Continuar en WhatsApp",
    "chat.or": "o",
    "chat.planAnother": "Planear Otro Viaje",
    "chat.reviewQuote": "Revisar Mi Cotizacion",
    "chat.chatOnWhatsApp": "Chatear en WhatsApp",
    "chat.tapContinue": "toca Continuar",
    // Occasion reactions
    "reaction.birthday": "Feliz cumpleanos! Vamos a hacerlo inolvidable.",
    "reaction.bachelor": "Va a ser de pelicula. Vamos a armarlo.",
    "reaction.sunset": "La hora dorada en el agua es otra cosa. Gran eleccion.",
    "reaction.proposal":
      "Nos encanta una buena historia de amor. Planifiquemos el momento perfecto.",
    "reaction.corporate":
      "Un escenario impresionante para gente impresionante.",
    "reaction.vibes": "Sin agenda, solo oceano. Te tenemos.",
    // Options - occasions
    "opt.birthday": "Cumpleanos",
    "opt.bachelor": "Despedida",
    "opt.sunset": "Atardecer",
    "opt.proposal": "Propuesta",
    "opt.corporate": "Corporativo",
    "opt.vibes": "Solo Vibras",
    // Options - group sizes
    "opt.intimate": "Intimo",
    "opt.smallGroup": "Grupo pequeno",
    "opt.party": "Fiesta",
    "opt.bigGroup": "Grupo grande",
    "opt.event": "Evento",
    // Options - duration
    "opt.2hr": "2 Horas",
    "opt.4hr": "4 Horas",
    "opt.8hr": "8 Horas",
    "opt.fullday": "Dia Completo",
    "opt.multiday": "Varios Dias",
    "opt.from": "desde",
    "opt.customQuote": "Cotizacion personalizada",
    // Options - addons
    "opt.photo": "Paquete de Fotos",
    "opt.sushi": "Chef de Sushi",
    "opt.dj": "DJ / Musica",
    "opt.bottles": "Servicio de Botellas",
    "opt.jetski": "Motos de Agua",
    "opt.transport": "Transporte",
    "opt.hookah": "Hookah",
    "opt.cigar": "Sala de Puros",
    "opt.sax": "Saxofonista en Vivo",
    "opt.none": "Mantenerlo Simple",
    // Options - pickup
    "opt.southbeach": "South Beach",
    "opt.brickell": "Brickell",
    "opt.downtown": "Downtown",
    "opt.aventura": "Aventura",
    "opt.balharbour": "Bal Harbour",
    "opt.sunnyisles": "Sunny Isles",
    "opt.self": "Llego por mi cuenta",
    // Summary
    "summary.yourCharter": "Tu Charter",
    "summary.occasion": "Ocasion",
    "summary.guests": "Invitados",
    "summary.date": "Fecha",
    "summary.duration": "Duracion",
    "summary.addons": "Extras",
    "summary.pickup": "Recogida",
    "summary.estimate": "Estimado",
    "summary.disclaimer":
      "Rango estimado. Cotizacion final confirmada en 1 hora.",
    // Contact form
    "form.name": "Tu nombre",
    "form.phone": "Numero de telefono",
    "form.email": "Correo electronico",
    "form.notes": "Solicitudes especiales (opcional)",
    "form.required": "Requerido",
    "form.validEmail": "Ingresa un email valido",
    // Trust
    "trust.responds": "Responde en 1 hora",
    "trust.charters": "100+ charters/ano",
    "scroll.label": "Desliza",
    // Sasha section
    "sasha.role": "Socia y Directora de Operaciones",
    "sasha.title": "Conoce a",
    "sasha.name": "Sasha",
    "sasha.p1":
      "Residente orgullosa de Miami, Sasha tiene un titulo en Ciencia de la Marina Mercante y ha dedicado su carrera al agua. Como nuestra socia y Directora de Operaciones, supervisa personalmente cada charter — desde el primer mensaje hasta que regresas al muelle.",
    "sasha.p2.pre":
      "Cuando no esta coordinando charters, la encontraras en una",
    "sasha.p2.jetski": "moto de agua",
    "sasha.p2.mid":
      ", buceando, o explorando la costa que conoce como la palma de su mano. Con",
    "sasha.p2.hundred": "mas de cien alquileres al ano",
    "sasha.p2.post":
      "en Biscayne Bay, Haulover y el Gulf Stream, Sasha trae el tipo de conocimiento practico que solo viene de",
    "sasha.p2.living": "vivir",
    "sasha.p2.end": "esta vida — no solo administrarla.",
    "sasha.quote":
      "Mi parte favorita? Asegurarme de que cada invitado se vaya diciendo que fue el mejor dia de su vida en el agua.",
    "sasha.badge1": "Graduada en Marina Mercante",
    "sasha.badge2": "100+ Charters / Ano",
    "sasha.badge3": "Local de Miami y Amante del Agua",
    "exp.title": "Experiencias",
    "exp.subtitle":
      "Cada charter esta disenado para tu ocasion. Elige uno, o dejanos crear algo a medida.",
    "sax.label": "Servicio Exclusivo",
    "sax.title.pre": "Sax ",
    "sax.title.highlight": "en Vivo",
    "sax.title.post": " en el Agua",
    "sax.p1":
      "Imagina navegar por Biscayne Bay mientras el sol se funde en el horizonte — y un saxofonista profesional pone la banda sonora de tu velada.",
    "sax.p2":
      "Ya sea una cita al atardecer, una propuesta o una noche con amigos, el sax en vivo transforma tu charter en algo cinematografico.",
    "sax.quote":
      "Cuando el sax sono durante la hora dorada, todos se miraron. Magia pura.",
    "sax.badge1": "Musico Profesional",
    "sax.badge2": "Perfecto para Atardeceres",
    "sax.badge3": "Jazz, House y Soul",
    "sushi.label": "Servicio Exclusivo",
    "sushi.title.pre": "Chef de ",
    "sushi.title.highlight": "Sushi Privado",
    "sushi.p1":
      "Un chef de sushi dedicado sube a tu yate con los ingredientes mas frescos de Miami — y prepara una experiencia estilo omakase ante tus ojos.",
    "sushi.p2":
      "Ya sea un evento corporativo, un cumpleanos o una cita intima, un bar de sushi en vivo eleva tu charter a una experiencia gastronomica de cinco estrellas.",
    "sushi.quote":
      "Atun fresco, mar abierto, vistas al atardecer. No hay nada mejor.",
    "sushi.badge1": "Servicio Estilo Omakase",
    "sushi.badge2": "Chef Profesional a Bordo",
    "sushi.badge3": "Ingredientes Locales Frescos",
    "trust.uscg": "Inspeccion USCG",
    "trust.uscg.sub": "Embarcaciones seguras y certificadas",
    "trust.captains": "Capitanes Licenciados",
    "trust.captains.sub": "Tripulacion profesional con experiencia",
    "trust.location": "Base en North Miami",
    "trust.location.sub": "Haulover, Aventura, Sunny Isles",
    "why.title": "Por Que Emerald Eyes",
    "why.1.title": "Curado, No Generico",
    "why.1.text": "Cada charter se adapta a tu grupo, tu estilo, tu vision.",
    "why.2.title": "Nos Encargamos de Todo",
    "why.2.text":
      "Desde el transporte hasta la playlist y las fotos — tu solo apareces.",
    "why.3.title": "Nativos de North Miami",
    "why.3.text":
      "Conocemos estas aguas. Haulover, Biscayne, Sunny Isles, el Gulf Stream — esto es casa.",
    "how.title": "Como Funciona",
    "how.1.title": "Escribenos",
    "how.1.text":
      "Dinos la ocasion, cuantos son y la fecha. Armamos tu cotizacion en minutos.",
    "how.2.title": "Confirmamos",
    "how.2.text":
      "Recibe tu itinerario personalizado con precios, detalles del yate y extras.",
    "how.3.title": "Sube a Bordo",
    "how.3.text":
      "Nosotros manejamos cada detalle. Tu solo sube y crea recuerdos.",
    // Blog
    "blog.title": "Blog",
    "blog.subtitle":
      "Guias, consejos y conocimiento exclusivo sobre charters en Miami.",
    "blog.readArticle": "Leer articulo \u2192",
    "blog.featured": "Guia destacada",
    "blog.cornerstone":
      "Por ahora hay un articulo publicado. Esta armado como la guia base para preguntas sobre seguridad, inspecciones del Coast Guard y contratos bareboat.",
    "blog.backToBlog": "Volver al Blog",
    "blog.ctaTitle": "\u00BFListo para salir al agua?",
    "blog.ctaText":
      "Cada charter de Emerald Eyes viene completamente equipado, documentado correctamente y con capitanes licenciados.",
    "blog.ctaBook": "Planifica Tu Charter",
    "blog.ctaExperiences": "Ver Experiencias",
    "blog.cat.safety": "Seguridad y Regulaciones",
    "blog.cg.title":
      "\u00BFQue Pasa Durante una Inspeccion del Coast Guard en un Bareboat Charter?",
    "blog.cg.excerpt":
      "Guia completa sobre inspecciones del USCG en charters bareboat en Miami. Que revisan, que documentos necesitas, requisitos de equipo de seguridad y como pasar cada vez.",
    "blog.cg.readTime": "10 min de lectura",
    // Coast Guard article
    "cg.quick.title": "Respuesta rapida",
    "cg.guide.title": "En esta guia",
    "cg.heroTitle":
      "\u00BFQue Pasa Durante una Inspeccion del Coast Guard en un Bareboat Charter?",
    "cg.intro1":
      "Si estas alquilando un yate en Miami, es muy probable que el Coast Guard de EE.UU. aborde tu embarcacion en algun momento del viaje. No es una redada. No es senal de que algo salio mal. Es rutina \u2014 y si estas en un bareboat charter bien operado, toma unos diez minutos y vuelves a disfrutar del agua.",
    "cg.intro2":
      "Pero la mayoria de la gente no sabe que esperar. \u00BFQue revisan? \u00BFQue documentos piden? \u00BFPor que separan a la tripulacion de los invitados? Esta guia lo explica todo \u2014 desde el marco legal detras de la inspeccion hasta lo que realmente sucede en el agua, basado en experiencia real operando charters en el sur de Florida.",
    "cg.s1.title": "\u00BFQue es un Bareboat Charter?",
    "cg.s1.p1":
      "Antes de entrar en la inspeccion, es importante entender la estructura del bareboat charter \u2014 porque eso es exactamente lo que el Coast Guard verifica cuando aborda.",
    "cg.s1.p2":
      "Un bareboat charter significa que el cliente alquila la embarcacion sola \u2014 sin tripulacion. El cliente se convierte en el \u201Cpropietario temporal\u201D durante la duracion del charter. Ellos eligen su propio capitan, eligen su propio marinero, y son responsables de la operacion de la embarcacion durante el periodo de alquiler.",
    "cg.s1.p3":
      "Esta distincion importa legalmente. Bajo la guia del Coast Guard (especificamente NVIC 7-94), un bareboat charter solo es valido cuando:",
    "cg.s1.li1":
      "El arrendatario elige al capitan \u2014 no el propietario de la embarcacion",
    "cg.s1.li2": "El arrendatario paga al capitan directamente",
    "cg.s1.li3":
      "El capitan trabaja para el arrendatario durante el charter, no para el propietario",
    "cg.s1.li4":
      "El arrendatario puede despedir al capitan con causa justificada",
    "cg.s1.li5":
      "El propietario puede sugerir capitanes calificados, pero no puede forzar a uno especifico ni mantener control operacional",
    "cg.s1.p4":
      "Este es el marco que permite que la mayoria de los alquileres de yates en Miami operen sin necesitar un Certificado de Inspeccion (COI) completo del Coast Guard. Cuando la estructura es legitima, la embarcacion opera como una embarcacion de pasajeros no inspeccionada con seis o menos pasajeros \u2014 o como un bareboat real con hasta 12.",
    "cg.s2.title": "\u00BFPor Que el Coast Guard Aborda Embarcaciones Charter?",
    "cg.s2.p1":
      "El Coast Guard tiene la autoridad de abordar cualquier embarcacion en aguas de EE.UU. en cualquier momento. Para embarcaciones charter en el area de Miami \u2014 Biscayne Bay, Haulover, el Intracoastal, el lado del Atlantico \u2014 los abordajes son frecuentes, especialmente en fines de semana y feriados.",
    "cg.s2.p2": "Revisan tres cosas:",
    "cg.s2.c1.title": "Cumplimiento de seguridad",
    "cg.s2.c1.text":
      "Chalecos salvavidas, extintores, aros salvavidas, luces de navegacion, senales de socorro visual \u2014 todo el equipo requerido bajo 46 C.F.R. Part 25.",
    "cg.s2.c2.title": "Estructura legal del charter",
    "cg.s2.c2.text":
      "\u00BFEs un bareboat legitimo? \u00BFO el propietario esta operando un charter tripulado ilegal disfrazado de bareboat para evitar requisitos de inspeccion?",
    "cg.s2.c3.title": "Conteo de pasajeros",
    "cg.s2.c3.text":
      "\u00BFCuantas personas hay a bordo? Mas de 6 pasajeros con tripulacion del propietario activa los requisitos del Subcapitulo T (46 C.F.R. \u00A7 175.110). Mas de 12 en un bareboat activa lo mismo.",
    "cg.s2.p3":
      "El Coast Guard termina activamente viajes de charter ilegales. Su aplicacion se enfoca rutinariamente en demasiados pasajeros pagos, falta de operador acreditado, documentacion bareboat falsa y capitanes \u201Cindependientes\u201D seleccionados por el propietario que no son realmente independientes.",
    "cg.s3.title": "Que Sucede Realmente Durante el Abordaje",
    "cg.s3.intro":
      "Asi es como se ve un abordaje tipico del Coast Guard en un bareboat charter en el area de Miami, paso a paso.",
    "cg.step1.title": "Separan a la Tripulacion de los Invitados",
    "cg.step1.p1":
      "Lo primero que hace el Coast Guard es separar al capitan y cualquier miembro de la tripulacion de los invitados del charter. Esto es intencional. Quieren hacer preguntas a cada grupo de forma independiente para verificar que el acuerdo bareboat es real \u2014 no una estructura solo en papel donde el propietario realmente controla todo.",
    "cg.step1.p2": "No te alarmes. Es procedimiento estandar.",
    "cg.step2.title": "Hacen Preguntas Clave al Invitado Principal",
    "cg.step2.p1":
      "El oficial del Coast Guard hablara con el arrendatario principal \u2014 la persona que firmo el contrato de charter \u2014 y hara preguntas como:",
    "cg.step2.q1":
      "\u00BFA quien elegiste como tu capitan? \u2014 Quieren escuchar que tu los seleccionaste, no que el dueno del barco los asigno.",
    "cg.step2.q2":
      "\u00BFCual es el nombre del capitan? \u2014 Deberias saber el nombre de la persona que opera tu embarcacion.",
    "cg.step2.q3":
      "\u00BFQuien es el marinero / primer oficial? \u2014 Lo mismo. Si hay tripulacion a bordo, deberias saber quienes son.",
    "cg.step2.q4":
      "\u00BFQuien le paga al capitan? \u2014 En un bareboat, la respuesta debe ser el arrendatario, no el propietario de la embarcacion.",
    "cg.step2.p2":
      "Este es el corazon de la verificacion bareboat. El Coast Guard esta confirmando que el arrendatario actua como el \u201Cpropietario temporal\u201D de la embarcacion. Si las respuestas sugieren que el propietario eligio al capitan, le paga al capitan o controla la operacion, la estructura bareboat se desmorona \u2014 y el viaje puede ser terminado.",
    "cg.step3.title": "Revisan el Contrato de Charter",
    "cg.step3.p1":
      "El oficial pedira ver el contrato de charter. Buscan que todas las firmas esten (arrendatario y propietario), lenguaje bareboat que establezca claramente que la embarcacion se alquila sin tripulacion, y que las fechas e identificacion de la embarcacion coincidan con la situacion real en el agua.",
    "cg.step3.p2":
      "Un contrato de bareboat charter correctamente ejecutado no es opcional \u2014 es la base legal de todo el acuerdo. Si el contrato falta, no esta firmado o no coincide con la situacion en el agua, eso es un problema serio.",
    "cg.step4.title": "Cuentan a Todos a Bordo",
    "cg.step4.p1":
      "Un conteo de personas es estandar. El numero de pasajeros a bordo determina que regulaciones federales aplican:",
    "cg.step5.title": "Verifican el Registro de la Embarcacion",
    "cg.step5.p1":
      "El Coast Guard verificara el registro de la embarcacion o el Certificado de Documentacion del USCG. El nombre de la embarcacion debe coincidir con los documentos. El Numero de Identificacion del Casco (HIN) en la popa debe ser legible. Si la embarcacion esta documentada, necesita un certificado vigente y valido bajo 46 U.S.C. Capitulo 121 y 46 C.F.R. Part 67.",
    "cg.step6.title": "Inspeccionan el Equipo de Seguridad",
    "cg.step6.intro":
      "Esta es la parte mas practica de la inspeccion. El oficial verificara fisicamente:",
    "cg.step7.title": "Revisan la Sala de Maquinas",
    "cg.step7.p1":
      "El oficial puede abrir el compartimiento del motor para una inspeccion visual. Buscan fugas de combustible, ventilacion adecuada, condiciones de la sentina y preparacion contra incendios. En embarcaciones mas grandes, es mas exhaustivo. En barcos charter mas pequenos, es usualmente una revision visual rapida.",
    "cg.step8.title": "Credenciales del Capitan",
    "cg.step8.p1":
      "El capitan debe portar una credencial valida del USCG \u2014 tipicamente un OUPV (Operador de Embarcaciones de Pasajeros No Inspeccionadas, tambien conocido como \u201Clicencia six-pack\u201D) o una licencia Master para operaciones mas grandes. Bajo 46 C.F.R. \u00A7 15.605, toda embarcacion de pasajeros no inspeccionada debe estar bajo la direccion de un operador debidamente acreditado cuando este en movimiento. Sin credencial, no hay charter.",
    // Passenger counts
    "cg.pax.6": "6 o menos",
    "cg.pax.6.text":
      "pasajeros con tripulacion del propietario: pueden operar como embarcacion de pasajeros no inspeccionada con un capitan acreditado \u201Csix-pack\u201D (46 C.F.R. \u00A7 15.605).",
    "cg.pax.712": "7\u201312",
    "cg.pax.712.text":
      "pasajeros en un bareboat real: sigue siendo legal, pero la estructura bareboat debe ser solida.",
    "cg.pax.13": "13+",
    "cg.pax.13.text":
      "pasajeros en un bareboat: bandera roja importante. Activa los requisitos del Subcapitulo T y probablemente requiere un Certificado de Inspeccion (46 C.F.R. \u00A7 176.100).",
    // Safety equipment
    "cg.pfd.title": "Chalecos Salvavidas (PFDs)",
    "cg.pfd.text":
      "Un chaleco salvavidas Tipo I, II o III aprobado por USCG por cada persona a bordo \u2014 incluyendo al capitan. Mas chalecos de tamano apropiado para ninos si hay ninos a bordo. Requerido bajo 46 C.F.R. \u00A7 25.25-5.",
    "cg.fire.title": "Extintores",
    "cg.fire.text":
      "Numero y tipo correcto para la eslora de la embarcacion. Deben tener una fecha de inspeccion vigente y estar en condiciones de funcionamiento. Requerido bajo 46 C.F.R. \u00A7 25.30-20.",
    "cg.ring.title": "Aro Salvavidas (PFD Tipo IV)",
    "cg.ring.text":
      "Un dispositivo arrojadizo Tipo IV \u2014 tipicamente un aro salvavidas o cojin arrojadizo \u2014 requerido para embarcaciones de 16 pies o mas. Requerido bajo 46 C.F.R. \u00A7 25.25-5(b).",
    "cg.placard.title": "Carteles de Seguridad",
    "cg.placard.text":
      "Los carteles de seguridad requeridos deben estar colocados en lugares visibles \u2014 incluyendo regulaciones de descarga de residuos, reglas de navegacion y advertencias de monoxido de carbono donde corresponda.",
    "cg.vds.title": "Senales de Socorro Visual",
    "cg.vds.text":
      "Tres senales pirotecnicas dia/noche o una luz electrica SOS mas tres senales diurnas. No deben estar vencidas. Requerido bajo 46 C.F.R. \u00A7 25.25-10.",
    "cg.sound.title": "Dispositivo Sonoro",
    "cg.sound.text":
      "Una bocina o silbato audible a media milla nautica. Embarcaciones de 39.4 pies o mas requieren una bocina mecanica. Requerido bajo 33 C.F.R. \u00A7 83.33.",
    "cg.nav.title": "Luces de Navegacion",
    "cg.nav.text":
      "Luces roja/verde de proa, luz blanca de popa y luz de tope \u2014 todas funcionando. Requerido bajo 33 C.F.R. Part 83.",
    // Safety equipment section heading (standalone)
    "cg.equip.title": "Equipo de Seguridad Requerido",
    "cg.equip.intro":
      "Toda embarcaci\u00F3n charter debe llevar el siguiente equipo de seguridad requerido por USCG, seg\u00FAn 46 C.F.R. Part 25.",
    // The 4 Rules (contenido de Sasha)
    "cg.rules.title": "Las Reglas Que Necesitas Saber",
    "cg.rules.intro":
      "Los bareboat charters en Florida operan bajo regulaciones federales y estatales espec\u00EDficas. Estas son las cuatro reglas clave que todo arrendatario debe entender.",
    "cg.rule1.title": "El L\u00EDmite de los 12 Pasajeros",
    "cg.rule1.li1":
      "Un ch\u00E1rter bareboat no puede llevar m\u00E1s de 12 pasajeros",
    "cg.rule1.li2":
      "Los ni\u00F1os cuentan como pasajeros. El \u201CCharterer\u201D no cuenta como pasajero.",
    "cg.rule2.title":
      "Control Total y \u201CDue\u00F1o Temporal\u201D (Owner Pro Hac Vice)",
    "cg.rule2.li1":
      "Sin tripulaci\u00F3n impuesta: lista de capitanes calificados para elegir",
    "cg.rule2.li2": "Contratos separados: barco y capit\u00E1n independientes",
    "cg.rule2.li3":
      "Gastos: responsable de combustible, comida, honorarios del capit\u00E1n",
    "cg.rule3.title": "Requisitos de Operaci\u00F3n (Leyes de Florida)",
    "cg.rule3.li1":
      "Tarjeta de Educaci\u00F3n de Navegaci\u00F3n (nacidos despu\u00E9s 1/1/1988)",
    "cg.rule3.li2":
      "Edad m\u00EDnima: 18 (muchas empresas exigen 21\u201325 por seguro)",
    "cg.rule3.li3":
      "Documentaci\u00F3n: contrato firmado + certificado de registro",
    "cg.rule4.title": "Prohibiciones Estrictas",
    "cg.rule4.li1": "Sin due\u00F1o a bordo: invalidar\u00EDa el contrato",
    "cg.rule4.li2": "Sin uso comercial: no cobrar a invitados",
    // What makes it pass
    "cg.pass.title": "Que Hace que un Charter Pase Siempre",
    "cg.pass.intro":
      "No hay trucos. Un bareboat charter bien operado pasa una inspeccion del Coast Guard porque todo es genuino:",
    "cg.pass.li1":
      "El arrendatario genuinamente eligio a su capitan y puede nombrarlo",
    "cg.pass.li2":
      "El contrato de charter esta firmado por todas las partes y a bordo",
    "cg.pass.li3": "El conteo de pasajeros esta dentro del limite legal",
    "cg.pass.li4": "Cada persona tiene un chaleco salvavidas",
    "cg.pass.li5": "Los extintores estan vigentes y accesibles",
    "cg.pass.li6":
      "El aro salvavidas esta listo para lanzar, no enterrado bajo equipaje",
    "cg.pass.li7": "El capitan tiene su credencial consigo",
    "cg.pass.li8":
      "La documentacion de la embarcacion coincide con el barco en el que estas",
    "cg.pass.closing":
      "Todo el proceso usualmente toma unos diez minutos. Si todo esta en orden, el oficial agradece al capitan, a veces entrega una calcomania, y el charter continua.",
    // Red flags
    "cg.red.title": "Que Mete en Problemas a un Charter",
    "cg.red.intro":
      "El Coast Guard ha visto todos los atajos. Estas son las cosas que hacen que se terminen viajes o resulten en multas:",
    "cg.red.li1": "El arrendatario no sabe quien es el capitan o no lo eligio",
    "cg.red.li2":
      "El propietario de la embarcacion esta a bordo en un rol operacional",
    "cg.red.li3":
      "El contrato de charter falta, no esta firmado, o es claramente generico sin contenido bareboat real",
    "cg.red.li4":
      "Mas pasajeros de los permitidos sin Certificado de Inspeccion",
    "cg.red.li5": "Equipo de seguridad faltante o vencido",
    "cg.red.li6": "El capitan no tiene credencial o tiene credencial vencida",
    "cg.red.li7":
      "El propietario paga al capitan directamente (no el arrendatario)",
    "cg.red.closing":
      "Si el Coast Guard determina que la estructura bareboat es una farsa, la embarcacion puede ser tratada como una embarcacion pequena de pasajeros no inspeccionada operando ilegalmente. El viaje puede ser terminado en el agua, y tanto el operador como el propietario pueden enfrentar acciones de aplicacion bajo 46 U.S.C. \u00A7 2101 y 46 C.F.R. \u00A7 176.100.",
    // Mid CTA
    "cg.midCta.title": "\u00BFQuieres un charter que maneje todo esto?",
    "cg.midCta.text":
      "Cada charter de Emerald Eyes esta completamente en cumplimiento, equipado y listo para el Coast Guard.",
    "cg.midCta.btn": "Planifica Tu Charter",
    // Sasha Interview
    "cg.sasha.title": "Desde el Agua: Una Entrevista con Sasha",
    "cg.sasha.intro":
      "Sasha es nuestra lider de operaciones en Emerald Eyes Miami. Ha estado operando charters de yates desde North Miami y ha pasado por innumerables abordajes del Coast Guard en primera persona. Nos sentamos con ella para obtener la imagen real de como son estas inspecciones en la practica.",
    "cg.sasha.q1.q":
      "P: \u00BFQue es lo primero que hace el Coast Guard cuando llega?",
    "cg.sasha.q1.a":
      "\u201CLo primero es que separan a todos. La tripulacion va a un lado, los clientes al otro. No quieren que hablen entre ustedes mientras hacen las preguntas. No es agresivo ni nada \u2014 solo necesitan respuestas independientes para verificar que el charter es real.\u201D",
    "cg.sasha.q2.q": "P: \u00BFQue le preguntan a los clientes?",
    "cg.sasha.q2.a":
      "\u201CVan directo al cliente principal \u2014 la persona que reservo el charter \u2014 y le preguntan: \u00BFa quien elegiste como tu capitan? \u00BFCual es el nombre del capitan? \u00BFCual es el nombre del primer oficial? Porque en un bareboat, el cliente basicamente es el propietario temporal. Deberian saber a quien contrataron. Si el cliente se ve confundido o dice \u2018no se, la empresa los mando\u2019, eso es un problema.\u201D",
    "cg.sasha.q3.q": "P: \u00BFY los documentos?",
    "cg.sasha.q3.a":
      "\u201CQuieren ver el contrato de charter. Y no puede solo existir \u2014 tiene que estar firmado por todos. El cliente firmo, el propietario firmo, todas las partes. Lo revisan y verifican que las firmas estan, las fechas coinciden y la informacion de la embarcacion es correcta. Si llegas con un contrato sin firmar, o uno que no coincide con el barco en el que estas, eso no va a salir bien.\u201D",
    "cg.sasha.q4.q":
      "P: Despues de las preguntas, \u00BFque inspeccionan fisicamente?",
    "cg.sasha.q4.a":
      "\u201CCuentan a todos a bordo primero. Conteo. Luego revisan el equipo de seguridad \u2014 chalecos salvavidas, extintores, el aro salvavidas, carteles. Verifican el registro del yate. Luego van a ver la sala de maquinas. Todo es bastante rapido si todo esta donde debe estar.\u201D",
    "cg.sasha.q5.q": "P: \u00BFCuanto tiempo suele tomar?",
    "cg.sasha.q5.a":
      "\u201CSi estas preparado, tal vez diez minutos. Suben, hacen sus verificaciones, son profesionales al respecto. Nunca he tenido un problema porque siempre nos aseguramos de que todo este bien antes de salir del muelle. El contrato esta firmado, el equipo esta revisado, el conteo coincide. Haces el trabajo antes de salir, y la inspeccion no es nada.\u201D",
    "cg.sasha.q6.q":
      "P: \u00BFQue es lo mas importante que los clientes deben entender?",
    "cg.sasha.q6.a":
      "\u201CQue ellos son el jefe. En un bareboat charter, el cliente es el propietario temporal de esa embarcacion. Ese es todo el punto. Tu elegiste a tu capitan, elegiste a tu tripulacion, tu les estas pagando. Cuando el Coast Guard pregunte, deberias poder decir eso con confianza. No es una pregunta trampa \u2014 asi es como debe funcionar el sistema. Y cuando funciona bien, la inspeccion es solo una formalidad.\u201D",
    "cg.sasha.q7.q": "P: \u00BFAlguna vez has visto una inspeccion salir mal?",
    "cg.sasha.q7.a":
      "\u201CEn nuestros barcos no. Pero he escuchado historias de otros operadores. El problema mas comun es demasiada gente a bordo. Alguien invita a unos amigos extra, y ahora estas por encima del limite de pasajeros. O los documentos no estan bien \u2014 el contrato no estaba firmado, o el nombre del capitan no coincide. Por eso somos estrictos antes de salir. Lo haces bien en el muelle, y nunca tienes un problema en el agua.\u201D",
    // What this means
    "cg.client.title": "Que Significa Esto para Ti como Cliente",
    "cg.client.p1":
      "Si estas reservando un charter de yate en Miami, aqui esta la conclusion:",
    "cg.client.p2":
      "Una empresa de charters respetable quiere pasar la inspeccion. No cortamos esquinas en equipo de seguridad. No sobrecargamos embarcaciones. Operamos estructuras bareboat reales donde tu genuinamente eliges a tu capitan, y el contrato refleja lo que realmente esta sucediendo en el agua.",
    "cg.client.p3":
      "Cuando el Coast Guard se acerca, el capitan los saluda profesionalmente, los documentos estan en orden, los chalecos salvavidas estan contados, y en diez minutos vuelves a tu crucero al atardecer.",
    "cg.client.p4":
      "Asi es como debe funcionar. Asi es como funciona con nosotros.",
    // Reference table
    "cg.ref.title": "Referencia Rapida: Regulaciones Federales Clave",
    "cg.reg.nvic": "Guia del Coast Guard sobre analisis de bareboat charter",
    "cg.reg.cfr25":
      "Requisitos de equipo de seguridad (PFDs, extintores, senales)",
    "cg.reg.175":
      "Aplicabilidad del Subcapitulo T (embarcaciones con >6 pasajeros)",
    "cg.reg.176": "Requisito de Certificado de Inspeccion",
    "cg.reg.2101":
      "Definiciones: embarcacion pequena de pasajeros, embarcacion de pasajeros no inspeccionada",
    "cg.reg.15605":
      "Requisito de operador acreditado para embarcaciones de pasajeros no inspeccionadas",
    "cg.reg.83": "Luces de navegacion y senales sonoras",
    "cg.reg.16":
      "Pruebas de drogas y alcohol para personal de embarcaciones comerciales",
    // Related links
    "cg.related.title": "Explorar Mas",
    "cg.related.sunset": "Experiencia Crucero al Atardecer",
    "cg.related.party": "Charter de Fiesta Privada",
    "cg.related.sandbar": "Viaje al Banco de Arena de Haulover",
    "cg.related.about": "Sobre Emerald Eyes Miami",
    // Final CTA
    "cg.cta.title": "Charter con confianza.",
    "cg.cta.text":
      "Cada charter de Emerald Eyes esta construido sobre una estructura bareboat legitima, embarcaciones completamente equipadas y capitanes acreditados. Damos la bienvenida a las inspecciones del Coast Guard porque no tenemos nada que ocultar.",
    "cg.cta.book": "Planifica Tu Charter",
    "cg.cta.explore": "Ver Experiencias",
    // Jet Ski article — Blog listing
    "blog.cat.guides": "Guías",
    "blog.js.title": "¿Necesitas Licencia para Montar Jet Ski en Miami?",
    "blog.js.excerpt":
      "Florida no emite una licencia para jet ski, pero dependiendo de tu fecha de nacimiento, podrías necesitar una Tarjeta de Educación de Seguridad Náutica. Todo lo que necesitas saber antes de salir a la Bahía de Biscayne.",
    "blog.js.readTime": "12 min de lectura",
    "blog.moreArticles": "Más Artículos",
    // Jet Ski article — Hero
    "js.heroTitle": "¿Necesitas Licencia para Montar Jet Ski en Miami?",
    "js.heroIntro":
      'Estás planeando un viaje a Miami, revisando alquileres de jet ski, y la pregunta surge: ¿realmente necesito una licencia? En Emerald Eyes Miami, recibimos esta pregunta todo el tiempo de huéspedes explorando sus opciones en el agua. La respuesta corta es no — Florida no emite una "licencia de jet ski." Pero dependiendo de tu fecha de nacimiento, podrías necesitar una Tarjeta de Educación de Seguridad Náutica antes de poder navegar frente a Star Island hacia la Bahía de Biscayne. Aquí tienes exactamente cuáles son las reglas, cómo certificarte en 30 minutos desde tu teléfono, y todo lo que deberías saber.',
    // Jet Ski article — Trust strip
    "js.trust.yearRound": "Navegación Todo el Año",
    "js.trust.yearRound.sub":
      "Las aguas cálidas de Miami hacen del jet ski una actividad de 365 días",
    "js.trust.noLicense": "Sin Licencia Requerida",
    "js.trust.noLicense.sub":
      "Solo una Tarjeta de Seguridad Náutica si naciste después de 1988",
    "js.trust.biscayne": "Bahía de Biscayne y Más",
    "js.trust.biscayne.sub":
      "Star Island, Fisher Island, vistas del skyline del centro",
    // Jet Ski article — The Short Answer
    "js.answer.eyebrow": "La Respuesta Rápida",
    "js.answer.title": "Sin Licencia — Pero Podrías Necesitar una Tarjeta",
    "js.answer.p1":
      "Florida no requiere una licencia tradicional para operar un jet ski. Lo que el estado sí requiere es una Tarjeta de Identificación de Educación de Seguridad Náutica — y si la necesitas depende completamente de tu fecha de nacimiento.",
    "js.answer.p2":
      "Si naciste antes del 1 de enero de 1988, estás exento. Trae una identificación con foto válida — licencia de conducir o pasaporte — y estás listo para navegar frente a las mansiones de Star Island, recorrer la Bahía de Biscayne y ver delfines junto al skyline de Miami. Sin curso, sin tarjeta, sin examen.",
    "js.answer.p3":
      "Si naciste el 1 de enero de 1988 o después, necesitas una Tarjeta de Identificación de Educación de Seguridad Náutica de Florida (de por vida, ~$40) o un Certificado Temporal de 90 Días ($9, toma unos 30 minutos en línea). Debes portarla junto con una identificación con foto mientras operes cualquier embarcación de 10 o más caballos de fuerza — y cada jet ski del mercado califica. Esta regla proviene del Estatuto de Florida §327.395 y aplica en todo el estado.",
    "js.answer.tag1": "¿Naciste antes de 1988? Solo trae ID",
    "js.answer.tag2": "¿Naciste después de 1988? Certificado temporal de $9",
    "js.answer.tag3": "Toma 30 min en línea",
    // Jet Ski article — Certification
    "js.cert.title": "Cómo Certificarte Rápidamente",
    "js.cert.intro":
      "Si naciste después de 1988 y aún no tienes tarjeta, tienes opciones. Una toma menos tiempo que pedir almuerzo en un café de Miami Beach.",
    "js.cert.temp.title": "Certificado Temporal de 90 Días",
    "js.cert.temp.text":
      "Ideal para turistas visitando Miami. Toma un examen en línea de 25 preguntas — aprueba con 19/25 correctas. Cuesta $8.99–$11.95. Complétalo desde tu teléfono en el muelle en unos 30 minutos. Válido por 90 días. Aceptado por todos los operadores de alquiler en Florida.",
    "js.cert.lifetime.title": "Tarjeta Náutica de Por Vida",
    "js.cert.lifetime.text":
      "¿Planeas volver a las aguas de Miami? Completa un curso completo de seguridad náutica aprobado por NASBLA (3–8 horas en línea). Los precios van desde gratis a través de BoatUS Foundation hasta $49.95 con otros proveedores. La tarjeta de FWC nunca expira. Residentes de Florida de 12 a 18 años también califican para un curso gratuito a través de Florida Virtual School.",
    "js.cert.outOfState.title": "Tarjeta de Otro Estado",
    "js.cert.outOfState.text":
      "¿Ya tienes una tarjeta de seguridad náutica de otro estado? Florida la acepta, siempre que el curso haya sido aprobado por NASBLA. Trae tu tarjeta o certificado — los operadores de alquiler en Miami la aceptarán.",
    // Jet Ski article — What to Bring
    "js.checklist.title": "Qué Traer Cuando Alquilas",
    "js.checklist.intro":
      "Llega con estas cuatro cosas y estarás en la Bahía de Biscayne en minutos.",
    "js.check.photoId.title": "Identificación con Foto Válida",
    "js.check.photoId.text":
      "Licencia de conducir, pasaporte o identificación estatal. Requerida para todos los que alquilan sin importar la fecha de nacimiento.",
    "js.check.boaterCard.title":
      "Tarjeta de Seguridad Náutica o Certificado Temporal",
    "js.check.boaterCard.text":
      "Solo si naciste el 1 de enero de 1988 o después. El certificado temporal de $9 funciona perfectamente para unas vacaciones en Miami.",
    "js.check.creditCard.title": "Tarjeta de Crédito para Depósito",
    "js.check.creditCard.text":
      "La mayoría de los operadores en Miami retienen $200–$500 en tu tarjeta como depósito de seguridad. No se cobra a menos que haya daños.",
    "js.check.age18.title": "Debes Tener 18 Años o Más",
    "js.check.age18.text":
      "La ley de Florida establece 18 como la edad mínima para alquilar jet skis. Esta es una ley estatal, no solo una política de la empresa.",
    // Jet Ski article — Rules
    "js.rules.title": "Reglas de Jet Ski en Florida que Debes Conocer",
    "js.rules.intro":
      "Las vías navegables de Miami son hermosas pero reguladas. Estas son las reglas que más importan cuando estés en la Bahía de Biscayne.",
    "js.rules.hours.title": "Solo de Amanecer a Atardecer",
    "js.rules.hours.text":
      "Los jet skis solo pueden operar desde 30 minutos antes del amanecer hasta 30 minutos después del atardecer. Sin navegación nocturna — punto. Esto es más estricto que los botes regulares. Planifica tu recorrido al atardecer en Miami para terminar antes del límite.",
    "js.rules.pfd.title": "Chaleco Salvavidas Obligatorio",
    "js.rules.pfd.text":
      'Cada persona en un jet ski debe usar un PFD no inflable aprobado por la USCG — no solo "tener uno disponible," realmente usarlo. Los chalecos inflables no están permitidos en PWC. La cuerda de corte del motor debe estar atada a tu persona, ropa o PFD en todo momento.',
    "js.rules.bui.title": "BUI = Igual que DUI",
    "js.rules.bui.text":
      "Navegar Bajo la Influencia tiene el mismo límite de 0.08% BAC que conducir. Primera infracción: multa de $500–$1,000, hasta 6 meses de cárcel. Menores de 21: tolerancia cero al 0.02%. Los oficiales de FWC patrullan activamente las vías navegables de Miami.",
    // Jet Ski article — Mid CTA
    "js.midCta.title": "¿Quieres la Vista Sin las Reglas?",
    "js.midCta.text":
      "¿Te encanta la idea de navegar frente a las mansiones de Star Island y ver el skyline de Miami desde el agua — pero no quieres lidiar con certificaciones, reglas de chalecos salvavidas y toques de queda al atardecer? Un charter privado de Emerald Eyes Miami se encarga de todo. Nuestro capitán navega. Nuestra tripulación maneja los detalles. Tú solo subes a bordo con un trago en la mano. Sin licencia, sin tarjeta, sin complicaciones — solo las mejores vistas de Miami.",
    "js.midCta.btn": "Planifica Tu Charter",
    // Jet Ski article — Best Spots
    "js.spots.title": "Dónde Navegar en Miami",
    "js.spots.intro":
      "Miami tiene algunas de las mejores aguas para jet ski del país. Estos son los lugares que hacen que valga la pena el viaje.",
    "js.spot.biscayne.title": "Bahía de Biscayne",
    "js.spot.biscayne.text":
      "El lugar favorito tanto para principiantes como para expertos. Aguas tranquilas y poco profundas con todo el skyline de Miami como telón de fondo. Pasa por Jungle Island, las Islas Venecianas y obtén vistas que no puedes ver desde la costa. Aquí es también donde Emerald Eyes Miami opera nuestros charters de yates más populares.",
    "js.spot.star.title": "Star Island y Fisher Island",
    "js.spot.star.text":
      "El tour de mansiones de celebridades sobre el agua. Navega frente a propiedades frente al mar de $40 millones, mega-yates y piscinas infinitas. El tramo más digno de Instagram en Miami.",
    "js.spot.virginia.title": "Virginia Key y Key Biscayne",
    "js.spot.virginia.text":
      "Más agua abierta, menos tráfico de botes. Navega hasta el Faro de Cape Florida en la punta sur de Key Biscayne. Crandon Park ofrece aguas más tranquilas para navegantes nuevos.",
    "js.spot.intracoastal.title": "Vía Intracostera",
    "js.spot.intracoastal.text":
      "Recorrido de isla en isla entre Miami Beach y el continente. Vistas del centro, las torres de Brickell y el puerto de cruceros donde atracan los barcos más grandes del mundo.",
    "js.spot.wildlife.title": "Delfines y Vida Silvestre",
    "js.spot.wildlife.text":
      "Mantén los ojos en el agua — delfines, tortugas marinas, rayas manta y manatíes se ven regularmente en la Bahía de Biscayne. Los meses de invierno traen los mejores avistamientos de manatíes.",
    // Jet Ski article — Restricted Zones
    "js.zones.title": "Zonas Restringidas de Miami",
    "js.zones.intro":
      "El condado de Miami-Dade tiene zonas específicas donde la operación de jet ski está restringida o prohibida. Conócelas antes de navegar — los oficiales de FWC las patrullan activamente.",
    "js.zone.haulover":
      "Zona de Exclusión de Haulover / Sunny Isles Beach — jet skis completamente prohibidos en esta área",
    "js.zone.miamiRiver":
      "Río Miami y todos sus afluentes (Canal Tamiami, Canal Comfort, Canal Seybold) — zona de velocidad mínima / sin oleaje desde las estructuras de control de salinidad hasta la Vía Intracostera",
    "js.zone.oleta":
      "Río Oleta — zona de velocidad mínima / sin oleaje desde el Lago Maule hasta la Vía Intracostera",
    "js.zone.keyBiscayne":
      "Hurricane Harbor de Key Biscayne y Canal Pines — zona de velocidad mínima / sin oleaje",
    "js.zone.manatee":
      "Zonas de protección de manatíes — zonas de velocidad reducida estacionales en toda la Bahía de Biscayne, señalizadas con letreros",
    // Jet Ski article — Pricing
    "js.pricing.eyebrow": "Precios 2026",
    "js.pricing.title": "¿Cuánto Cuesta?",
    "js.pricing.p1":
      "Los alquileres de jet ski en Miami son sencillos: 30 minutos cuestan $50–$75, una hora cuesta $100–$150, y dos horas típicamente cuestan $175–$250. Los tours guiados por la Bahía de Biscayne y frente a Star Island son la opción más popular a $125–$200 por persona.",
    "js.pricing.p2":
      "La mayoría de los operadores usan modelos Yamaha VX Deluxe o Sea-Doo y salen desde Miami Beach Marina, Bayside Marketplace o Rickenbacker Causeway. Los depósitos de seguridad van de $200–$500 (retención en tarjeta de crédito, no se cobra a menos que haya daños).",
    "js.pricing.p3":
      "Para grupos, considera las cuentas: un jet ski cabe 1–2 personas a $150/hora cada uno. Un charter de Emerald Eyes Miami para 6–12 invitados empieza en alrededor de $2,500 — a menudo un mejor valor por persona con bebidas, música, un capitán profesional y cero complicaciones de certificación.",
    // Jet Ski article — Safety
    "js.safety.title": "Por Qué Importa la Tarjeta",
    "js.safety.p1":
      "Esto no es solo papeleo. Según la USCG y la FWC, Florida lidera consistentemente la nación en incidentes náuticos, con motos acuáticas representando una porción significativa. El condado de Miami-Dade regularmente se ubica entre los principales condados en incidentes de PWC. Más de la mitad son colisiones con otra embarcación.",
    "js.safety.stat1": "FL lidera la nación en incidentes náuticos",
    "js.safety.stat2": "de los operadores fatales sin educación náutica",
    "js.safety.stat3": "por un certificado temporal de 30 min",
    "js.safety.p2":
      "El número que más importa: según el informe de Estadísticas de Navegación Recreativa 2024 de la USCG, el 69% de las muertes ocurrieron en embarcaciones donde el operador no tenía educación de seguridad náutica. El certificado temporal cubre reglas de derecho de paso, fundamentos de navegación y procedimientos de emergencia. Son 30 minutos que podrían salvar tu vida en la Bahía de Biscayne.",
    // Jet Ski article — FAQ
    "js.faq.title": "Preguntas Frecuentes",
    "js.faq.license.q": "¿Necesitas licencia para montar jet ski en Miami?",
    "js.faq.license.a":
      "No se requiere licencia tradicional. Cualquier persona nacida el 1 de enero de 1988 o después debe portar una Tarjeta de Identificación de Educación de Seguridad Náutica o un Certificado Temporal de 90 días ($9, 30 minutos en línea). Los nacidos antes de 1988 solo necesitan una identificación con foto válida.",
    "js.faq.age.q":
      "¿Qué edad hay que tener para alquilar un jet ski en Miami?",
    "js.faq.age.a":
      "Debes tener al menos 18 años para alquilar un jet ski en Miami. Cualquier persona de 14 a 17 años puede operar un jet ski con una Tarjeta de Educación de Seguridad Náutica válida, pero no puede alquilar uno por su cuenta. Menores de 14 tienen prohibido operarlos según el Estatuto de Florida § 327.39.",
    "js.faq.night.q": "¿Se puede montar jet ski de noche en Miami?",
    "js.faq.night.a":
      "No. La ley de Florida prohíbe la operación de PWC desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer. Planifica tu recorrido en Miami para disfrutar el atardecer desde el agua, pero termina antes del límite.",
    "js.faq.cost.q": "¿Cuánto cuesta alquilar un jet ski en Miami?",
    "js.faq.cost.a":
      "30 minutos: $50–$75. Una hora: $100–$150. Tours guiados por la Bahía de Biscayne y frente a Star Island: $125–$200 por persona. La mayoría de los operadores requieren un depósito de seguridad de $200–$500 en tarjeta de crédito.",
    "js.faq.where.q": "¿Dónde se puede montar jet ski en Miami?",
    "js.faq.where.a":
      "Las áreas populares incluyen la Bahía de Biscayne (vistas del skyline, aguas tranquilas), Star Island y Fisher Island (mansiones de celebridades), Virginia Key y Key Biscayne (agua abierta, Faro de Cape Florida) y la Vía Intracostera. Las zonas restringidas incluyen Haulover/Sunny Isles y el Río Miami.",
    "js.faq.tourist.q": "¿Pueden los turistas montar jet ski en Miami?",
    "js.faq.tourist.a":
      "Absolutamente — Miami es uno de los mejores destinos de jet ski del mundo. Los turistas nacidos antes de 1988 solo necesitan una identificación con foto. ¿Naciste después de 1988? Toma el examen de Certificado Temporal de 90 días en línea por $9 en unos 30 minutos. Florida también acepta tarjetas náuticas de otros estados.",
    "js.faq.equipment.q": "¿Qué equipo de seguridad se requiere?",
    "js.faq.equipment.a":
      "Cada persona en un jet ski debe usar un chaleco salvavidas no inflable aprobado por la USCG (los PFD inflables no están permitidos en PWC según la ley de Florida). El operador debe atar la cuerda de corte del motor a su persona o PFD. Tu operador de alquiler en Miami proporcionará todo el equipo de seguridad requerido.",
    "js.faq.bestTime.q":
      "¿Cuál es la mejor época del año para hacer jet ski en Miami?",
    "js.faq.bestTime.a":
      "El clima cálido de Miami hace del jet ski una actividad de todo el año. De octubre a abril ofrece menor humedad y aguas tranquilas. Los meses de verano traen aguas más cálidas pero tormentas por la tarde — reserva recorridos por la mañana. En cualquier época del año, las vistas del skyline desde la Bahía de Biscayne son inolvidables.",
    // Jet Ski article — Quick Reference
    "js.quickRef.title": "Referencia Rápida",
    "js.ref.license":
      "Licencia: No se necesita licencia tradicional. Tarjeta de Educación de Seguridad Náutica requerida si naciste el 1 de enero de 1988 o después.",
    "js.ref.age": "Edad para navegar: 14+ para operar. 18+ para alquilar.",
    "js.ref.rent":
      "Para alquilar: Identificación con foto + Tarjeta Náutica (si aplica) + tarjeta de crédito.",
    "js.ref.night":
      "Navegación nocturna: Prohibida. Solo de amanecer a atardecer.",
    "js.ref.pfd":
      "Chaleco salvavidas: Obligatorio — cada persona debe usar un PFD no inflable aprobado por la USCG.",
    "js.ref.bui":
      "BUI: Igual que DUI. Límite de 0.08% BAC. Multa de $500–$1,000 por primera infracción.",
    "js.ref.tourist":
      "Turistas: Certificado temporal de $9 en línea, válido 90 días. O trae la tarjeta de tu estado.",
    // Jet Ski article — Related
    "js.related.title": "Explorar Más",
    "js.related.coastGuard":
      "¿Qué Pasa Durante una Inspección del Coast Guard?",
    "js.related.sunset": "Experiencia Crucero al Atardecer",
    "js.related.sandbar": "Viaje al Banco de Arena de Haulover",
    "js.related.fleet": "Nuestra Flota",
    "js.related.book": "Reserva Tu Charter",
    // Jet Ski article — Final CTA
    "js.cta.title": "Olvídate de las complicaciones del jet ski.",
    "js.cta.text":
      "Las mismas vistas de la Bahía de Biscayne. Las mismas mansiones de Star Island. El mismo atardecer de Miami. Pero desde un yate privado de Emerald Eyes Miami con música, bebidas y espacio para relajarte — nuestro capitán se encarga de todo. Sin licencia necesaria. Sin certificación. Solo tú y el agua.",
    "js.cta.book": "Planifica Tu Charter",
    "js.cta.explore": "Ver Experiencias",
    // Blog listing — Haulover Sandbar card
    "blog.cat.destinations": "Destinos y Guias",
    "blog.hs.title": "Haulover Sandbar en Yate: La Guia Completa de Miami",
    "blog.hs.excerpt":
      "Todo lo que necesitas saber sobre visitar Haulover Sandbar en yate privado \u2014 mejores horarios, que traer, consejos de seguridad, reglas y como llegar con estilo.",
    "blog.hs.readTime": "14 min de lectura",
    // Haulover Sandbar article — Hero
    "hs.heroTitle": "Haulover Sandbar en Yate: La Guia Completa de Miami",
    "hs.intro1":
      "Haulover Sandbar es el lugar en Miami donde todos van el fin de semana \u2014 y casi nadie llega de la forma correcta. Puedes pelear por estacionamiento en una rampa publica, navegar lento por la zona sin estela en un ponton alquilado, y dar vueltas buscando donde anclar. O puedes llegar en un yate privado con musica sonando, colchonetas flotantes listas y un capitan que conoce este banco de arena desde hace anos.",
    "hs.intro2":
      "Esta guia cubre todo lo que necesitas saber: como llegar, cuando ir, que traer, cuales son las reglas y por que llegar en charter no es solo mas comodo \u2014 es la forma en que Haulover fue pensado para disfrutarse.",
    "hs.guide.title": "En esta guia",
    "hs.quick.title": "Datos rapidos",
    "hs.quick.location":
      "Norte de Biscayne Bay, justo al sur de Haulover Inlet (~25.9075\u00B0N, 80.1235\u00B0W)",
    "hs.quick.depth":
      "2\u20134 pies de profundidad en marea media-alta \u2014 suficiente para caminar",
    "hs.quick.distance":
      "7.3 millas nauticas desde el centro de Miami por la Via Intracostera",
    "hs.quick.best":
      "Mejores dias: martes a jueves para calma, fines de semana para la fiesta",
    // Haulover Sandbar article — Que es
    "hs.what.title": "\u00BFQue Es Haulover Sandbar?",
    "hs.what.p1":
      "Haulover Sandbar es un banco de arena poco profundo en el extremo norte de Biscayne Bay, justo al sur de Haulover Inlet. En marea media-alta, el agua llega a la cintura \u2014 cristalina, calida y lo suficientemente tranquila para estar de pie. Esta rodeado de agua mas profunda, lo que significa que los barcos anclan a lo largo del borde y la gente camina sobre el banco para nadar, beber, comer y socializar.",
    "hs.what.p2":
      "Los fines de semana, el banco atrae mas de 200 barcos. DJs tocan desde embarcaciones ancladas, vendedores flotantes pasan vendiendo tacos y ceviche, y la energia esta entre un beach club y una fiesta de calle flotante. Es una de las experiencias mas unicas de Miami \u2014 y es completamente gratis anclar.",
    "hs.what.p3":
      "Pero hay algo que la mayoria de las guias no te dicen: como llegas importa. La diferencia entre pelear por un espacio en un ponton alquilado y bajar de un yate privado con un capitan que sabe exactamente donde anclar \u2014 esa es la diferencia entre un buen dia y el mejor dia en el agua.",
    "hs.what.tag1": "2\u20134 pies de profundidad",
    "hs.what.tag2": "200+ barcos los fines de semana",
    "hs.what.tag3": "Gratis para anclar",
    // Haulover Sandbar article — Como llegar
    "hs.route.title": "Como Llegar en Yate",
    "hs.route.p1":
      "Haulover Sandbar esta a unas 7.3 millas nauticas al norte del centro de Miami por la Via Intracostera. La mayoria de los charters salen de marinas en North Miami Beach, Aventura o Miami Beach y llegan al banco en 20\u201340 minutos segun las condiciones.",
    "hs.route.p2":
      "La ruta va al norte por la ICW, pasando Bal Harbour y Sunny Isles, hasta los bajos justo al sur de Haulover Inlet. Tu capitan navega las boyas del canal, evita los bajos y posiciona el yate en el mejor tramo de arena \u2014 generalmente en el lado sur del banco donde el agua esta mas tranquila.",
    "hs.route.p3":
      "No tienes que preocuparte por la navegacion, el anclaje, las mareas o encontrar un lugar. Ese es todo el punto de llegar en charter. Subes en la marina y bajas al agua a la cintura en el banco. Todo lo demas esta resuelto.",
    "hs.route.note":
      "\u2693 En un charter de Emerald Eyes, tu capitan maneja la ruta, el anclaje y el posicionamiento. Tu solo llegas a la marina.",
    // Haulover Sandbar article — Mejor momento
    "hs.time.title": "Mejor Momento para Visitar",
    "hs.time.intro":
      "Cuando vas importa casi tanto como como llegas. El banco es una experiencia completamente diferente segun el dia y la marea.",
    "hs.time.weekday.title": "Entre Semana (Mar\u2013Jue)",
    "hs.time.weekday.text":
      "El punto ideal. Agua cristalina, solo unos pocos barcos, y el banco se siente como una isla privada. Ideal para grupos que quieren calma, fotos y espacio. Los miercoles por la manana estan practicamente vacios.",
    "hs.time.weekend.title": "Fines de Semana (Sab\u2013Dom)",
    "hs.time.weekend.text":
      "La fiesta completa del sandbar de Miami. 200+ barcos, DJs en embarcaciones ancladas, vendedores flotantes y energia sin parar. Llega antes de las 11 AM para conseguir un buen lugar. El lado norte es la zona de fiesta; el lado sur es mas tranquilo.",
    "hs.time.tide.title": "Horario de Mareas",
    "hs.time.tide.text":
      "Apunta a marea media-alta. El agua en los bajos tiene 2\u20134 pies de profundidad \u2014 perfecto para caminar y nadar. En marea baja, partes del banco pueden quedar expuestas y el anclaje se complica. Revisa la tabla de mareas de Haulover Inlet antes de tu viaje.",
    // Haulover Sandbar article — Que traer
    "hs.bring.title": "Que Traer",
    "hs.bring.intro":
      "La mitad de lo que normalmente empacarias para un dia en el agua ya esta a bordo de un charter de Emerald Eyes. Esto es lo que tu traes y lo que nosotros nos encargamos.",
    "hs.bring.you": "Tu traes",
    "hs.bring.we": "Nosotros proveemos",
    "hs.bring.sunscreen.title": "Protector Solar",
    "hs.bring.sunscreen.text":
      "De preferencia seguro para arrecifes. Estaras en el agua por horas \u2014 reaplica cada 90 minutos.",
    "hs.bring.sunglasses.title": "Lentes de Sol con Correa",
    "hs.bring.sunglasses.text":
      "Los lentes polarizados son ideales. Una correa evita que se caigan a la bahia.",
    "hs.bring.phone.title": "Funda Impermeable para Celular",
    "hs.bring.phone.text":
      "Las fotos del sandbar valdran la pena. Protege tu celular del agua salada.",
    "hs.bring.cash.title": "Efectivo",
    "hs.bring.cash.text":
      "Los vendedores flotantes venden tacos, ceviche y pizza \u2014 solo efectivo.",
    "hs.bring.food.title": "Comida y Bebidas",
    "hs.bring.food.text":
      "Trae las tuyas \u2014 sin botellas de vidrio. Solo latas, plastico y para hielera.",
    "hs.bring.swimsuit.title": "Traje de Bano y Toalla",
    "hs.bring.swimsuit.text":
      "Te vas a mojar. Trae ropa para cambiarte para el regreso.",
    "hs.provide.sound.title": "Sistema de Sonido",
    "hs.provide.sound.text":
      "Sistema Bluetooth completo con bocinas en todo el yate.",
    "hs.provide.ice.title": "Hielo, Hieleras y Cristaleria",
    "hs.provide.ice.text":
      "Hieleras premium con hielo. Cristaleria real, no vasos de plastico.",
    "hs.provide.mats.title": "Colchonetas Flotantes",
    "hs.provide.mats.text":
      "Colchonetas flotantes grandes desplegadas en el sandbar para descansar en el agua.",
    "hs.provide.toys.title": "Juguetes Acuaticos",
    "hs.provide.toys.text": "Inflables, flotadores y accesorios para el grupo.",
    "hs.provide.glass.title": "Agua Embotellada",
    "hs.provide.glass.text":
      "Agua embotellada de cortesia durante todo el viaje.",
    "hs.provide.captain.title": "Capitan y Tripulacion Licenciados",
    "hs.provide.captain.text":
      "Capitan con credencial USCG que conoce cada rincon del sandbar.",
    // Haulover Sandbar article — Reglas
    "hs.rules.title": "Reglas y Regulaciones",
    "hs.rules.intro":
      "Haulover Sandbar esta regulado por la ley estatal de Florida y las ordenanzas del condado de Miami-Dade. Tu capitan las conoce \u2014 pero tu tambien deberias.",
    "hs.rule1.title": "Anclaje",
    "hs.rule1.li1":
      "Ancla solo en arena. Anclar sobre pastos marinos esta prohibido bajo la ley de Florida y puede resultar en multas.",
    "hs.rule1.li2":
      "Mantener distancia adecuada de otras embarcaciones. Luces de anclaje requeridas si te quedas pasada la puesta del sol.",
    "hs.rule2.title": "Alcohol",
    "hs.rule2.li1":
      "Los contenedores abiertos son legales en barcos en Florida. Tus invitados pueden beber libremente.",
    "hs.rule2.li2":
      "El capitan debe mantenerse bajo el limite de 0.08% BAC (ley BUI). En un charter de Emerald Eyes, el capitan no bebe \u2014 punto.",
    "hs.rule3.title": "Basura y Medio Ambiente",
    "hs.rule3.li1":
      "Sin botellas de vidrio. Usa latas y plastico. Lleva todo lo que traigas.",
    "hs.rule3.li2":
      "No alimentes la vida marina. Manaties, delfines y tortugas marinas estan protegidos por ley federal.",
    "hs.rule4.title": "Seguridad",
    "hs.rule4.li1":
      "Chalecos salvavidas requeridos para cada persona a bordo (46 C.F.R. \u00A7 25.25-5).",
    "hs.rule4.li2":
      "Los ninos deben usar chalecos en todo momento cuando no estan en la cabina. Sin excepciones.",
    "hs.rules.cgLink":
      "Lee nuestra guia completa sobre inspecciones del Coast Guard en bareboat charters \u2192",
    // Haulover Sandbar article — Seguridad
    "hs.safety.title": "\u00BFEs Seguro Haulover Sandbar?",
    "hs.safety.intro":
      "Si \u2014 si sabes lo que haces. El banco en si es poco profundo y tranquilo. El peligro esta en lo que hay al lado.",
    "hs.safety.inlet.title": "Haulover Inlet",
    "hs.safety.inlet.text":
      "Haulover Inlet es uno de los inlets mas peligrosos del sur de Florida. El canal estrecho entre Biscayne Bay y el Atlantico crea corrientes poderosas, especialmente durante mareas salientes. Barcos han volcado aqui. No es donde nadas, y no es donde capitanes sin experiencia deben navegar.",
    "hs.safety.current.title": "Corriente y Mareas",
    "hs.safety.current.text":
      "Durante el flujo mareal maximo, las corrientes cerca del inlet pueden alcanzar 4\u20136 nudos. Incluso en el sandbar puede haber corriente leve. Quedate en los bajos donde el agua es poco profunda. No dejes que los ninos se alejen hacia el canal.",
    "hs.safety.captain.title": "Por Que Importa el Capitan",
    "hs.safety.captain.text":
      "Un capitan experimentado sabe donde anclar para evitar la corriente, como posicionar el yate para la mejor proteccion, y cuando las condiciones no son lo suficientemente seguras. En un charter de Emerald Eyes, esa decision nunca es tuya \u2014 es del capitan. Ese es el margen de seguridad por el que estas pagando.",
    // Haulover Sandbar article — Actividades
    "hs.do.title": "Que Hacer en el Sandbar",
    "hs.do.intro":
      "El sandbar es lo que tu hagas de el. Esto es lo que la mayoria hace \u2014 y lo que puedes agregar para hacerlo inolvidable.",
    "hs.act.wade.title": "Caminar, Nadar y Flotar",
    "hs.act.wade.text":
      "El agua llega a la cintura y es cristalina. Camina por el banco, flota en una colchoneta, nada entre barcos. Es lo mas relajado que estaras en Miami.",
    "hs.act.food.title": "Comer de Vendedores Flotantes",
    "hs.act.food.text":
      "Los fines de semana, vendedores pasan en kayaks y jet skis vendiendo tacos frescos, ceviche, pizza y acai bowls. Solo efectivo. Es una de las mejores partes de la experiencia.",
    "hs.act.photo.title": "Tomar Fotos",
    "hs.act.photo.text":
      "La luz en Haulover Sandbar es increible \u2014 especialmente entre 3\u20135 PM. Agua turquesa, arena blanca y el skyline de Miami a lo lejos. Se recomienda funda impermeable.",
    "hs.act.hop.title": "Explorar Islas Cercanas",
    "hs.act.hop.text":
      "Despues del sandbar, navega al sur hacia Nixon Sandbar, explora el rio Oleta, o ve a Bal Harbour para cenar al atardecer. Tu capitan puede armar una ruta completa.",
    // Haulover Sandbar article — Extras
    "hs.addon.title": "Hazlo inolvidable \u2014 extras de Emerald Eyes",
    "hs.addon.sax.title": "Saxofon en Vivo",
    "hs.addon.sax.text":
      "Un saxofonista profesional toca jazz, house y soul mientras flotas en el sandbar. Hora dorada en el agua con musica en vivo \u2014 no hay nada igual.",
    "hs.addon.sushi.title": "Chef de Sushi Privado",
    "hs.addon.sushi.text":
      "Un chef dedicado sube a tu yate con los ingredientes mas frescos de Miami y prepara sushi estilo omakase mientras estas anclado en el sandbar.",
    "hs.addon.jetski.title": "Motos de Agua",
    "hs.addon.jetski.text":
      "Maneja motos de agua alrededor del sandbar y por Biscayne Bay. Se entregan al yate y se recogen cuando terminas.",
    // Haulover Sandbar article — Cercanos
    "hs.nearby.title": "Mas Alla del Sandbar",
    "hs.nearby.intro":
      "El sandbar es el evento principal, pero hay mas para explorar si tienes tiempo en tu charter.",
    "hs.near.marina.title": "Bill Bird Marina (Haulover Park)",
    "hs.near.marina.text":
      "Acaba de completar una renovacion de $13.8M. Marina de servicio completo con 500+ espacios para barcos. El punto de lanzamiento mas cercano al sandbar.",
    "hs.near.beach.title": "Haulover Beach",
    "hs.near.beach.text":
      "La famosa playa de vestimenta opcional esta en la costa, al norte del inlet \u2014 una ubicacion completamente separada del sandbar. No es el mismo lugar.",
    "hs.near.oleta.title": "Parque Estatal Oleta River",
    "hs.near.oleta.text":
      "El parque urbano mas grande de Florida, justo en Biscayne Bay. Kayak, senderos de manglar y un contraste tranquilo con la energia del sandbar.",
    // Haulover Sandbar article — Relacionados
    "hs.related.title": "Explorar Mas",
    "hs.related.intro": "Mas guias y experiencias de Emerald Eyes Miami.",
    "hs.related.experience": "Experiencia Haulover Sandbar",
    "hs.related.coastGuard": "Guia de Inspeccion del Coast Guard",
    "hs.related.sunset": "Experiencia Crucero al Atardecer",
    "hs.related.about": "Sobre Emerald Eyes Miami",
    // Haulover Sandbar article — CTA medio
    "hs.midCta.title":
      "\u00BFListo para hacer el sandbar de la forma correcta?",
    "hs.midCta.text":
      "Yate privado, capitan licenciado, colchonetas flotantes, musica y el mejor lugar para anclar en el sandbar. Desde $2,500 por 4\u20138 horas. Trae tu grupo y tus bebidas \u2014 nosotros nos encargamos de todo lo demas.",
    "hs.midCta.btn": "Ver la Experiencia Haulover",
    // Haulover Sandbar article — CTA final
    "hs.cta.title": "Asi es como Miami hace el sandbar.",
    "hs.cta.text":
      "Yate privado. Capitan licenciado. Colchonetas flotantes, musica y espacio para hasta 12. Llega a Haulover Sandbar como fue pensado \u2014 y dejanos encargarnos del resto.",
    "hs.cta.book": "Planifica Tu Charter",
    "hs.cta.explore": "Ver Experiencias",
  },

  pt: {
    "chat.welcome":
      "Bem-vindo ao Emerald Eyes Miami. Vamos criar seu dia perfeito na agua.",
    "chat.occasion": "Qual e a ocasiao?",
    "chat.groupSize": "Otima escolha! Quantos convidados?",
    "chat.date": "Quando voce esta pensando?",
    "chat.email": "Qual e seu email? Enviaremos o orcamento por la.",
    "chat.phone": "E seu numero de telefone?",
    "chat.duration": "Quanto tempo na agua?",
    "chat.addons": "Quer tornar inesquecivel? Escolha quantos quiser:",
    "chat.pickup": "Onde voce esta hospedado? Podemos buscar voce.",
    "chat.contact": "Quase la. Como entramos em contato?",
    "chat.summary": "Sua experiencia:",
    "chat.confirmation": "Confirmaremos em 1 hora. Ate logo!",
    "chat.noAddons": "Sem extras por enquanto",
    "chat.sendThis": "Enviar esta solicitacao",
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "Aluguel de Iates",
    "chat.online": "online",
    "chat.repliesIn": "responde em",
    "chat.typing": "digitando...",
    "chat.back": "Voltar",
    "chat.restart": "reiniciar",
    "chat.continue": "Continuar",
    "chat.skip": "Pular",
    "chat.ok": "OK",
    "chat.sendRequest": "Enviar Meu Pedido",
    "chat.sending": "Enviando...",
    "chat.continueWhatsApp": "Continuar no WhatsApp",
    "chat.or": "ou",
    "chat.planAnother": "Planejar Outra Viagem",
    "chat.reviewQuote": "Revisar Meu Orcamento",
    "chat.chatOnWhatsApp": "Chat no WhatsApp",
    "chat.tapContinue": "toque Continuar",
    "trust.responds": "Responde em 1 hora",
    "trust.charters": "100+ charters/ano",
    "scroll.label": "Rolar",
    "reaction.birthday": "Feliz aniversario! Vamos tornar inesquecivel.",
    "reaction.bachelor": "Vai ser de cinema. Vamos montar.",
    "reaction.sunset": "A hora dourada na agua e outra coisa. Otima escolha.",
    "reaction.proposal":
      "Amamos uma boa historia de amor. Vamos planejar o momento perfeito.",
    "reaction.corporate":
      "Cenario impressionante para pessoas impressionantes.",
    "reaction.vibes": "Sem agenda, so oceano. Conte com a gente.",
    "opt.birthday": "Aniversario",
    "opt.bachelor": "Despedida",
    "opt.sunset": "Por do Sol",
    "opt.proposal": "Pedido",
    "opt.corporate": "Corporativo",
    "opt.vibes": "So Curtir",
    "opt.intimate": "Intimo",
    "opt.smallGroup": "Grupo pequeno",
    "opt.party": "Festa",
    "opt.bigGroup": "Grupo grande",
    "opt.event": "Evento",
    "opt.2hr": "2 Horas",
    "opt.4hr": "4 Horas",
    "opt.8hr": "8 Horas",
    "opt.fullday": "Dia Inteiro",
    "opt.multiday": "Varios Dias",
    "opt.from": "a partir de",
    "opt.customQuote": "Orcamento personalizado",
    "opt.photo": "Pacote de Fotos",
    "opt.sushi": "Chef de Sushi",
    "opt.dj": "DJ / Musica",
    "opt.bottles": "Servico de Garrafas",
    "opt.jetski": "Jet Skis",
    "opt.transport": "Transporte",
    "opt.hookah": "Narguilhe",
    "opt.cigar": "Lounge de Charutos",
    "opt.sax": "Saxofonista ao Vivo",
    "opt.none": "Manter Simples",
    "opt.southbeach": "South Beach",
    "opt.brickell": "Brickell",
    "opt.downtown": "Downtown",
    "opt.aventura": "Aventura",
    "opt.balharbour": "Bal Harbour",
    "opt.sunnyisles": "Sunny Isles",
    "opt.self": "Vou por conta propria",
    "summary.yourCharter": "Seu Charter",
    "summary.occasion": "Ocasiao",
    "summary.guests": "Convidados",
    "summary.date": "Data",
    "summary.duration": "Duracao",
    "summary.addons": "Extras",
    "summary.pickup": "Buscar",
    "summary.estimate": "Estimativa",
    "summary.disclaimer":
      "Faixa de planejamento. Orcamento final confirmado em 1 hora.",
    "form.name": "Seu nome",
    "form.phone": "Telefone",
    "form.email": "Email",
    "form.notes": "Pedidos especiais (opcional)",
    "form.required": "Obrigatorio",
    "form.validEmail": "Insira um email valido",
  },

  de: {
    "chat.welcome":
      "Willkommen bei Emerald Eyes Miami. Planen wir Ihren perfekten Tag auf dem Wasser.",
    "chat.occasion": "Was ist der Anlass?",
    "chat.groupSize": "Tolle Wahl! Wie viele Gaste?",
    "chat.date": "Wann denken Sie an?",
    "chat.email": "Ihre E-Mail? Wir senden das Angebot dorthin.",
    "chat.phone": "Und Ihre Telefonnummer?",
    "chat.duration": "Wie lange auf dem Wasser?",
    "chat.addons":
      "Mochten Sie es unvergesslich machen? Wahlen Sie beliebig viele:",
    "chat.pickup": "Wo sind Sie untergebracht? Wir konnen Sie abholen.",
    "chat.contact": "Fast geschafft. Wie erreichen wir Sie?",
    "chat.summary": "Ihr Erlebnis:",
    "chat.confirmation": "Bestatigung innerhalb 1 Stunde. Bis bald!",
    "chat.noAddons": "Keine Extras vorerst",
    "chat.sendThis": "Anfrage senden",
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "Yacht-Vermietung",
    "chat.online": "online",
    "chat.repliesIn": "antwortet in",
    "chat.typing": "schreibt...",
    "chat.back": "Zuruck",
    "chat.restart": "neustart",
    "chat.continue": "Weiter",
    "chat.skip": "Uberspringen",
    "chat.ok": "OK",
    "chat.sendRequest": "Anfrage Senden",
    "chat.sending": "Wird gesendet...",
    "chat.continueWhatsApp": "Weiter auf WhatsApp",
    "chat.or": "oder",
    "chat.planAnother": "Weitere Reise Planen",
    "chat.reviewQuote": "Angebot Prufen",
    "chat.chatOnWhatsApp": "Chat auf WhatsApp",
    "chat.tapContinue": "tippe Weiter",
    "trust.responds": "Antwortet in 1 Stunde",
    "trust.charters": "100+ Charters/Jahr",
    "scroll.label": "Scrollen",
    "reaction.birthday":
      "Alles Gute zum Geburtstag! Machen wir es unvergesslich.",
    "reaction.bachelor": "Das wird ein Film. Legen wir los.",
    "reaction.sunset":
      "Die goldene Stunde auf dem Wasser ist etwas Besonderes.",
    "reaction.proposal":
      "Wir lieben eine gute Liebesgeschichte. Planen wir den perfekten Moment.",
    "reaction.corporate": "Beeindruckende Kulisse fur beeindruckende Menschen.",
    "reaction.vibes": "Keine Agenda, nur Ozean. Wir haben Sie.",
    "opt.birthday": "Geburtstag",
    "opt.bachelor": "Junggesell/in",
    "opt.sunset": "Sonnenuntergang",
    "opt.proposal": "Heiratsantrag",
    "opt.corporate": "Firmenfeier",
    "opt.vibes": "Einfach Geniessen",
    "opt.intimate": "Intim",
    "opt.smallGroup": "Kleine Gruppe",
    "opt.party": "Party",
    "opt.bigGroup": "Grosse Gruppe",
    "opt.event": "Event",
    "opt.2hr": "2 Stunden",
    "opt.4hr": "4 Stunden",
    "opt.8hr": "8 Stunden",
    "opt.fullday": "Ganzer Tag",
    "opt.multiday": "Mehrere Tage",
    "opt.from": "ab",
    "opt.customQuote": "Individuelles Angebot",
    "opt.photo": "Foto-Paket",
    "opt.sushi": "Sushi-Koch",
    "opt.dj": "DJ / Musik",
    "opt.bottles": "Flaschenservice",
    "opt.jetski": "Jet Skis",
    "opt.transport": "Transport",
    "opt.hookah": "Shisha",
    "opt.cigar": "Zigarren-Lounge",
    "opt.sax": "Live-Saxophonist",
    "opt.none": "Einfach Halten",
    "opt.southbeach": "South Beach",
    "opt.brickell": "Brickell",
    "opt.downtown": "Downtown",
    "opt.aventura": "Aventura",
    "opt.balharbour": "Bal Harbour",
    "opt.sunnyisles": "Sunny Isles",
    "opt.self": "Ich komme selbst",
    "summary.yourCharter": "Ihr Charter",
    "summary.occasion": "Anlass",
    "summary.guests": "Gaste",
    "summary.date": "Datum",
    "summary.duration": "Dauer",
    "summary.addons": "Extras",
    "summary.pickup": "Abholung",
    "summary.estimate": "Schatzung",
    "summary.disclaimer":
      "Planungsbereich. Endgultiges Angebot innerhalb 1 Stunde.",
    "form.name": "Ihr Name",
    "form.phone": "Telefonnummer",
    "form.email": "E-Mail",
    "form.notes": "Sonderwunsche (optional)",
    "form.required": "Erforderlich",
    "form.validEmail": "Gultige E-Mail eingeben",
  },

  fr: {
    "chat.welcome":
      "Bienvenue chez Emerald Eyes Miami. Creons votre journee parfaite sur l'eau.",
    "chat.occasion": "Quelle est l'occasion ?",
    "chat.groupSize": "Excellent choix ! Combien d'invites ?",
    "chat.date": "Quand pensez-vous ?",
    "chat.email": "Votre email ? Nous y enverrons le devis.",
    "chat.phone": "Et votre numero de telephone ?",
    "chat.duration": "Combien de temps sur l'eau ?",
    "chat.addons":
      "Envie de rendre ca inoubliable ? Choisissez autant que vous voulez :",
    "chat.pickup": "Ou logez-vous ? Nous pouvons venir vous chercher.",
    "chat.contact": "Presque fini. Comment vous contacter ?",
    "chat.summary": "Votre experience :",
    "chat.confirmation": "Confirmation sous 1 heure. A bientot !",
    "chat.noAddons": "Pas d'extras pour le moment",
    "chat.sendThis": "Envoyer cette demande",
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "Location de Yachts",
    "chat.online": "en ligne",
    "chat.repliesIn": "repond en",
    "chat.typing": "ecrit...",
    "chat.back": "Retour",
    "chat.restart": "recommencer",
    "chat.continue": "Continuer",
    "chat.skip": "Passer",
    "chat.ok": "OK",
    "chat.sendRequest": "Envoyer Ma Demande",
    "chat.sending": "Envoi...",
    "chat.continueWhatsApp": "Continuer sur WhatsApp",
    "chat.or": "ou",
    "chat.planAnother": "Planifier un Autre Voyage",
    "chat.reviewQuote": "Revoir Mon Devis",
    "chat.chatOnWhatsApp": "Chat sur WhatsApp",
    "chat.tapContinue": "appuyez Continuer",
    "trust.responds": "Repond en 1 heure",
    "trust.charters": "100+ charters/an",
    "scroll.label": "Defiler",
    "reaction.birthday": "Joyeux anniversaire ! Rendons-le inoubliable.",
    "reaction.bachelor": "Ca va etre un film. Mettons tout en place.",
    "reaction.sunset": "L'heure doree sur l'eau, c'est magique. Super choix.",
    "reaction.proposal":
      "Nous adorons les belles histoires d'amour. Planifions le moment parfait.",
    "reaction.corporate":
      "Un cadre impressionnant pour des gens impressionnants.",
    "reaction.vibes": "Pas de programme, juste l'ocean.",
    "opt.birthday": "Anniversaire",
    "opt.bachelor": "Enterrement de vie",
    "opt.sunset": "Coucher de Soleil",
    "opt.proposal": "Demande en Mariage",
    "opt.corporate": "Entreprise",
    "opt.vibes": "Juste Profiter",
    "opt.intimate": "Intime",
    "opt.smallGroup": "Petit groupe",
    "opt.party": "Fete",
    "opt.bigGroup": "Grand groupe",
    "opt.event": "Evenement",
    "opt.2hr": "2 Heures",
    "opt.4hr": "4 Heures",
    "opt.8hr": "8 Heures",
    "opt.fullday": "Journee Entiere",
    "opt.multiday": "Plusieurs Jours",
    "opt.from": "a partir de",
    "opt.customQuote": "Devis personnalise",
    "opt.photo": "Forfait Photo",
    "opt.sushi": "Chef Sushi",
    "opt.dj": "DJ / Musique",
    "opt.bottles": "Service Bouteilles",
    "opt.jetski": "Jet Skis",
    "opt.transport": "Transport",
    "opt.hookah": "Chicha",
    "opt.cigar": "Salon Cigares",
    "opt.sax": "Saxophoniste Live",
    "opt.none": "Garder Simple",
    "opt.southbeach": "South Beach",
    "opt.brickell": "Brickell",
    "opt.downtown": "Downtown",
    "opt.aventura": "Aventura",
    "opt.balharbour": "Bal Harbour",
    "opt.sunnyisles": "Sunny Isles",
    "opt.self": "J'y vais moi-meme",
    "summary.yourCharter": "Votre Charter",
    "summary.occasion": "Occasion",
    "summary.guests": "Invites",
    "summary.date": "Date",
    "summary.duration": "Duree",
    "summary.addons": "Extras",
    "summary.pickup": "Prise en charge",
    "summary.estimate": "Estimation",
    "summary.disclaimer":
      "Fourchette indicative. Devis final confirme sous 1 heure.",
    "form.name": "Votre nom",
    "form.phone": "Telephone",
    "form.email": "Email",
    "form.notes": "Demandes speciales (facultatif)",
    "form.required": "Obligatoire",
    "form.validEmail": "Entrez un email valide",
  },

  zh: {
    "chat.welcome": "Emerald Eyes Miami. ",
    "chat.occasion": "",
    "chat.groupSize": "",
    "chat.date": "",
    "chat.email": "",
    "chat.phone": "",
    "chat.duration": "",
    "chat.addons": "",
    "chat.pickup": "",
    "chat.contact": "",
    "chat.summary": "",
    "chat.confirmation": "1",
    "chat.noAddons": "",
    "chat.sendThis": "",
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "",
    "chat.online": "",
    "chat.repliesIn": "",
    "chat.typing": "...",
    "chat.back": "",
    "chat.restart": "",
    "chat.continue": "",
    "chat.skip": "",
    "chat.ok": "",
    "chat.sendRequest": "",
    "chat.sending": "...",
    "chat.continueWhatsApp": "WhatsApp",
    "chat.or": "",
    "chat.planAnother": "",
    "chat.reviewQuote": "",
    "chat.chatOnWhatsApp": "WhatsApp聊天",
    "chat.tapContinue": "点击继续",
    "trust.responds": "1小时内回复",
    "trust.charters": "每年100+包船",
    "scroll.label": "滚动",
    "reaction.birthday": "生日快乐！让我们让它难以忘怀。",
    "reaction.bachelor": "派对即将上演。让我们开始吧。",
    "reaction.sunset": "水上日落别有一番风味。好选择。",
    "reaction.proposal": "我们热爱浪漫故事。让我们策划完美时刻。",
    "reaction.corporate": "令人印象深刻的场景。",
    "reaction.vibes": "没有计划，只有大海。交给我们。",
    "opt.birthday": "生日",
    "opt.bachelor": "单身派对",
    "opt.sunset": "日落",
    "opt.proposal": "求婚",
    "opt.corporate": "商务",
    "opt.vibes": "随性",
    "opt.intimate": "私密",
    "opt.smallGroup": "小团",
    "opt.party": "派对",
    "opt.bigGroup": "大团",
    "opt.event": "活动",
    "opt.2hr": "2小时",
    "opt.4hr": "4小时",
    "opt.8hr": "8小时",
    "opt.fullday": "全天",
    "opt.multiday": "多天",
    "opt.from": "起价",
    "opt.customQuote": "定制报价",
    "opt.photo": "摄影套餐",
    "opt.sushi": "寿司主厨",
    "opt.dj": "DJ / 音乐",
    "opt.bottles": "酒水服务",
    "opt.jetski": "摩托艇",
    "opt.transport": "接送",
    "opt.hookah": "水烟",
    "opt.cigar": "雪茄吧",
    "opt.sax": "萨克斯手",
    "opt.none": "保持简单",
    "opt.southbeach": "South Beach",
    "opt.brickell": "Brickell",
    "opt.downtown": "Downtown",
    "opt.aventura": "Aventura",
    "opt.balharbour": "Bal Harbour",
    "opt.sunnyisles": "Sunny Isles",
    "opt.self": "自行前往",
    "summary.yourCharter": "您的包船",
    "summary.occasion": "场合",
    "summary.guests": "宾客",
    "summary.date": "日期",
    "summary.duration": "时长",
    "summary.addons": "附加项",
    "summary.pickup": "接送",
    "summary.estimate": "估价",
    "summary.disclaimer": "预估范围。最终报价1小时内确认。",
    "form.name": "您的姓名",
    "form.phone": "电话号码",
    "form.email": "邮箱",
    "form.notes": "特殊要求 (可选)",
    "form.required": "必填",
    "form.validEmail": "请输入有效邮箱",
  },

  ja: {
    "chat.welcome": "Emerald Eyes Miami. ",
    "chat.occasion": "",
    "chat.groupSize": "",
    "chat.date": "",
    "chat.email": "",
    "chat.phone": "",
    "chat.duration": "",
    "chat.addons": "",
    "chat.pickup": "",
    "chat.contact": "",
    "chat.summary": "",
    "chat.confirmation": "1",
    "chat.noAddons": "",
    "chat.sendThis": "",
    "chat.header": "Emerald Eyes Miami",
    "chat.yachtRentals": "",
    "chat.online": "",
    "chat.repliesIn": "",
    "chat.typing": "...",
    "chat.back": "",
    "chat.restart": "",
    "chat.continue": "",
    "chat.skip": "",
    "chat.ok": "OK",
    "chat.sendRequest": "",
    "chat.sending": "...",
    "chat.continueWhatsApp": "WhatsApp",
    "chat.or": "",
    "chat.planAnother": "",
    "chat.reviewQuote": "",
    "chat.chatOnWhatsApp": "WhatsAppでチャット",
    "chat.tapContinue": "続けるをタップ",
    "trust.responds": "1時間以内に返信",
    "trust.charters": "年間100+チャーター",
    "scroll.label": "スクロール",
    "reaction.birthday": "お誕生日おめでとう！忘れられない日にしましょう。",
    "reaction.bachelor": "最高の時間になります。準備しましょう。",
    "reaction.sunset": "水上のサンセットは格別です。素晴らしい選択。",
    "reaction.proposal": "ロマンチックですね。完璧な瞬間を計画しましょう。",
    "reaction.corporate": "印象的な場所で印象的なイベントを。",
    "reaction.vibes": "予定なし、ただ海だけ。お任せください。",
    "opt.birthday": "誕生日",
    "opt.bachelor": "独身パーティー",
    "opt.sunset": "サンセット",
    "opt.proposal": "プロポーズ",
    "opt.corporate": "法人",
    "opt.vibes": "気ままに",
    "opt.intimate": "少人数",
    "opt.smallGroup": "小グループ",
    "opt.party": "パーティー",
    "opt.bigGroup": "大グループ",
    "opt.event": "イベント",
    "opt.2hr": "2時間",
    "opt.4hr": "4時間",
    "opt.8hr": "8時間",
    "opt.fullday": "終日",
    "opt.multiday": "複数日",
    "opt.from": "〜から",
    "opt.customQuote": "カスタム見積",
    "opt.photo": "フォトパッケージ",
    "opt.sushi": "寿司シェフ",
    "opt.dj": "DJ / 音楽",
    "opt.bottles": "ボトルサービス",
    "opt.jetski": "ジェットスキー",
    "opt.transport": "送迎",
    "opt.hookah": "シーシャ",
    "opt.cigar": "シガーラウンジ",
    "opt.sax": "ライブサックス",
    "opt.none": "シンプルに",
    "opt.southbeach": "South Beach",
    "opt.brickell": "Brickell",
    "opt.downtown": "Downtown",
    "opt.aventura": "Aventura",
    "opt.balharbour": "Bal Harbour",
    "opt.sunnyisles": "Sunny Isles",
    "opt.self": "自分で行きます",
    "summary.yourCharter": "チャーター内容",
    "summary.occasion": "目的",
    "summary.guests": "ゲスト",
    "summary.date": "日付",
    "summary.duration": "時間",
    "summary.addons": "追加オプション",
    "summary.pickup": "送迎",
    "summary.estimate": "見積",
    "summary.disclaimer": "概算範囲。最終見積は1時間以内に確認。",
    "form.name": "お名前",
    "form.phone": "電話番号",
    "form.email": "メール",
    "form.notes": "特別なリクエスト (任意)",
    "form.required": "必須",
    "form.validEmail": "有効なメールを入力",
  },
};
