"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

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
  // Detect language from URL path prefix (e.g. /es/experiences)
  const pathLang = window.location.pathname.split("/")[1] as Lang;
  if (pathLang && VALID_LANGS.includes(pathLang) && pathLang !== "en") {
    return pathLang;
  }
  // Fallback: ?lang= query param
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang") as Lang | null;
  if (urlLang && VALID_LANGS.includes(urlLang)) return urlLang;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  // Keep <html lang> attribute in sync
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
    "trust.captains.sub": "Available as add-on for every charter",
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
      "Every Emerald Eyes charter comes fully equipped and properly documented. Add a USCG-licensed captain and enjoy a worry-free day on the water.",
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
    "cg.related.yachtPrices": "How Much Does a Yacht Charter Cost?",
    "cg.related.bachelorette": "Bachelorette Party on a Yacht",
    "cg.related.firstTimer": "First-Time Yacht Rental Guide",
    "cg.related.jetSki": "Jet Ski License Requirements",
    "cg.related.haulover": "Haulover Sandbar by Yacht",
    "cg.xlink.pricing":
      "Wondering how much a fully compliant charter costs? Our pricing guide breaks down exactly what you pay for.",
    "cg.xlink.bachelorette":
      "Planning a group event? See how we handle Coast Guard compliance for bachelorette parties and large groups.",
    "cg.xlink.firstTimer":
      "Never rented a yacht before? Our first-timer guide covers everything from booking to boarding.",
    "cg.xlink.jetSki":
      "Curious about watercraft licensing in Florida? Our jet ski guide explains the Boating Safety Education Card requirement.",
    "cg.xlink.haulover":
      "Heading to Haulover Sandbar? Learn what to expect on one of Miami's most popular charter routes.",
    "cg.checklist.title": "The Full Inspection Checklist",
    "cg.checklist.intro":
      "Coast Guard officers follow a systematic protocol during every boarding. Here is everything they physically verify, check, and document — and what specifically causes a vessel to fail.",
    "cg.check.pfd.title": "Life Jackets (PFDs)",
    "cg.check.pfd.pass":
      "One USCG-approved Type I, II, or III PFD per person on board, including crew. Child-sized PFDs required for anyone under 13. Must be in serviceable condition — no rips, broken buckles, or missing straps.",
    "cg.check.pfd.fail":
      "Wrong count, wrong size for children, damaged PFDs with torn fabric or non-functional closures, or PFDs stored in sealed packaging (must be readily accessible).",
    "cg.check.fire.title": "Fire Extinguishers",
    "cg.check.fire.pass":
      "Correct number for vessel length (one B-I for under 26 ft, two B-I or one B-II for 26–40 ft, three B-I for 40–65 ft). Gauge in the green. Inspection tag current. Nozzle clear and pin intact.",
    "cg.check.fire.fail":
      "Expired inspection date, gauge in the red or missing, discharged or partially discharged units, corroded cylinder, broken handle or missing safety pin.",
    "cg.check.ring.title": "Throwable Device (Type IV PFD)",
    "cg.check.ring.pass":
      "One Type IV throwable — ring buoy or throwable cushion — required for vessels 16 ft and over. Must be immediately accessible, not stored under equipment or in a locked compartment.",
    "cg.check.ring.fail":
      "Ring buoy buried under coolers or gear. Throwable cushion with waterlogged foam or torn covering. No throwable device on board at all.",
    "cg.check.vds.title": "Visual Distress Signals",
    "cg.check.vds.pass":
      "Three USCG-approved day/night pyrotechnic signals (flares) with current expiration dates, OR one electric SOS distress light plus three day signals. Required on coastal waters for vessels 16 ft and over.",
    "cg.check.vds.fail":
      "Expired flares (check the stamped date — they expire 42 months after manufacture). Fewer than three signals. Electric light with dead batteries. No signals on board.",
    "cg.check.sound.title": "Sound-Producing Device",
    "cg.check.sound.pass":
      "A whistle or horn audible for at least half a nautical mile. Vessels 39.4 ft (12 m) and over also require a bell. Air horns must have a full charge.",
    "cg.check.sound.fail":
      "No horn or whistle on board. Empty air horn canister. Bell missing on vessels over 39.4 ft.",
    "cg.check.nav.title": "Navigation Lights",
    "cg.check.nav.pass":
      "Functional red/green sidelights, white stern light, and masthead light. Tested during boarding if operating after sunset or in restricted visibility. Lenses clean and properly colored.",
    "cg.check.nav.fail":
      "Burned-out bulbs, cracked lenses, incorrect color filters, or lights wired incorrectly. Missing all-round white light on vessels under 39.4 ft operating at night.",
    "cg.check.placard.title": "Required Placards & Documentation",
    "cg.check.placard.pass":
      "MARPOL trash placard (vessels 26 ft+), oil discharge placard (vessels with machinery), navigation rules summary, and FCC radio license if VHF is installed. Vessel registration or USCG Certificate of Documentation on board and current.",
    "cg.check.placard.fail":
      "Missing required placards, expired vessel registration, documentation that does not match the vessel name or HIN, or no registration on board.",
    "cg.check.engine.title": "Engine Compartment & Bilge",
    "cg.check.engine.pass":
      "No fuel leaks or fuel odor. Bilge clean and reasonably dry. Ventilation system functional (blowers operable on gas-powered inboard vessels). Hoses and clamps in serviceable condition. Backfire flame arrestor present and clean on gasoline engines.",
    "cg.check.engine.fail":
      "Visible fuel in the bilge, strong fuel odor, non-functional blower, missing or fouled backfire flame arrestor, corroded fuel lines, or excessive oil accumulation.",
    "cg.check.contract.title": "Charter Contract & Credentials",
    "cg.check.contract.pass":
      "Signed bareboat charter agreement with all parties' signatures. Vessel name, HIN, and dates match the actual situation. Captain's USCG credential (OUPV or Master) on board and current. Drug testing enrollment documentation available.",
    "cg.check.contract.fail":
      "Unsigned or missing charter contract. Captain cannot produce a valid credential. Credential is expired. Contract vessel name does not match the boat. No evidence of drug testing compliance under 46 C.F.R. Part 16.",
    "cg.fail.title": "What Happens If You Fail an Inspection",
    "cg.fail.intro":
      "A failed Coast Guard inspection is not a slap on the wrist. The consequences are immediate, and they escalate depending on the severity of the violations found.",
    "cg.fail.terminate.title": "Voyage Termination",
    "cg.fail.terminate.text":
      "The Coast Guard can order the vessel to return to port immediately. Your charter is over. There is no fix-it-and-keep-going option on the water. If passenger count exceeds limits or the bareboat structure is a sham, the trip ends right there.",
    "cg.fail.fine.title": "Civil Penalties & Fines",
    "cg.fail.fine.text":
      "Operating an uninspected passenger vessel illegally can result in civil penalties up to $25,000 per violation under 46 U.S.C. § 3718. Safety equipment violations carry fines from $1,000 to $10,000. Both the captain and vessel owner can be fined independently.",
    "cg.fail.seize.title": "Vessel Detention or Seizure",
    "cg.fail.seize.text":
      "For serious violations — particularly operating a passenger vessel without a Certificate of Inspection when one is required — the Coast Guard can detain the vessel at the dock until all deficiencies are corrected and re-inspected. Repeat offenders risk permanent seizure.",
    "cg.fail.criminal.title": "Criminal Prosecution",
    "cg.fail.criminal.text":
      "In cases involving willful negligence, repeat violations, or incidents resulting in injury, the vessel operator and owner can face criminal charges under 46 U.S.C. § 3718, including fines and imprisonment.",
    "cg.fail.captain.title": "Captain Credential Suspension",
    "cg.fail.captain.text":
      "If the captain is found operating without valid credentials, with expired drug testing, or under the influence, the USCG can initiate suspension and revocation proceedings against their license. This can end a career.",
    "cg.fail.insurance.title": "Insurance Implications",
    "cg.fail.insurance.text":
      "A documented Coast Guard violation can void marine insurance coverage. If an accident occurs during an illegal charter operation, neither the owner nor the charterer may have liability coverage — exposing everyone on board to personal financial liability.",
    "cg.fail.closing":
      "The bottom line: failing a Coast Guard inspection is not just an inconvenience. It can mean fines, criminal charges, career-ending consequences for the captain, and total loss of insurance coverage. This is exactly why choosing a compliant charter operator matters.",
    "cg.ee.title": "What Emerald Eyes Does Differently",
    "cg.ee.intro":
      "Most charter companies claim to be fully compliant. At Emerald Eyes, compliance is not a checkbox — it is the foundation of every trip we run. Here is exactly what sets us apart.",
    "cg.ee.inspect.title": "Every Vessel Is Coast Guard Inspected",
    "cg.ee.inspect.text":
      "Our vessels undergo regular Coast Guard safety inspections and are maintained to exceed federal requirements. Safety equipment is checked before every single departure — not once a season, not once a month. Every trip.",
    "cg.ee.captains.title": "USCG-Licensed & Drug-Tested Captains",
    "cg.ee.captains.text":
      "Every Emerald Eyes captain holds a valid USCG credential (OUPV or Master license) and is enrolled in a random drug and alcohol testing program as required by 46 C.F.R. Part 16. We verify credentials quarterly, not just at hire.",
    "cg.ee.contract.title": "Bulletproof Bareboat Documentation",
    "cg.ee.contract.text":
      "Our charter contracts are drafted to withstand Coast Guard scrutiny. Every agreement clearly establishes the bareboat structure, identifies the charterer as the temporary owner, and is fully executed before the vessel leaves the dock.",
    "cg.ee.briefing.title": "Pre-Departure Safety Briefing",
    "cg.ee.briefing.text":
      "Before every charter, our captain conducts a full safety briefing covering life jacket locations, fire extinguisher positions, man-overboard procedures, and emergency protocols. You will know your captain's name — because you chose them.",
    "cg.ee.equipment.title": "Equipment That Exceeds Standards",
    "cg.ee.equipment.text":
      "We carry more than the minimum required safety equipment. Extra PFDs, current flares, fully charged extinguishers, and first aid kits on every vessel. Our navigation lights are LED-upgraded for maximum visibility.",
    "cg.ee.record.title": "Zero Failed Inspections",
    "cg.ee.record.text":
      "Emerald Eyes has never failed a Coast Guard inspection. Not once. We welcome boardings because we know exactly what the officers are looking for, and everything is already in order before we leave the dock.",
    "cg.checklist.navTitle": "Full Inspection Checklist",
    "cg.fail.navTitle": "If You Fail",
    "cg.ee.navTitle": "Emerald Eyes Difference",
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
    "js.rules.speed.title": "Speed Zones Near Shore",
    "js.rules.speed.text":
      "Within 300 feet of shore, swimmers, docks, piers, or anchored vessels, Florida law requires idle speed / no wake. In marked channels and the Intracoastal Waterway, slow-speed minimum-wake zones are strictly enforced. Fines start at $50 and can exceed $500 for reckless operation near shore.",
    "js.rules.wildlife.title": "Wildlife Protection Zones",
    "js.rules.wildlife.text":
      "Biscayne Bay has federally protected manatee zones with seasonal slow-speed restrictions (typically November through March). Harassing marine mammals \u2014 including chasing dolphins or approaching manatees \u2014 violates the Marine Mammal Protection Act with fines up to $11,000 per incident.",
    "js.rules.buiPenalties.title": "BUI Penalties in Detail",
    "js.rules.buiPenalties.text":
      "Second BUI offense: $1,000\u2013$2,000 fine, up to 9 months jail, mandatory 10-day vessel impoundment. Third offense within 10 years is a third-degree felony: up to 5 years prison, $5,000 fine. Refusing a breathalyzer results in automatic $500 civil penalty and can be used as evidence against you in court.",
    // Jet Ski article — Mid CTA
    "js.midCta.title": "Want the View Without the Rules?",
    "js.midCta.text":
      "Love the idea of cruising past Star Island mansions and watching the Miami skyline from the water \u2014 but don\u2019t want to deal with certifications, life jacket rules, and sunset curfews? An Emerald Eyes Miami private yacht charter handles everything. Our captain navigates. Our crew handles the details. You just step aboard with a drink in hand. No license, no card, no hassle \u2014 just the best views in Miami.",
    "js.midCta.btn": "Plan Your Charter",
    // Jet Ski article — Jet Skis from Your Yacht
    "js.yacht.eyebrow": "Yacht + Jet Ski Add-On",
    "js.yacht.title": "Jet Skis Delivered to Your Yacht",
    "js.yacht.p1":
      "Here\u2019s what most people don\u2019t know: you can add jet skis directly to your Emerald Eyes Miami yacht charter. We arrange delivery right to your yacht at Haulover Sandbar or anywhere on Biscayne Bay \u2014 no separate rental, no driving to a marina, no waiting in line.",
    "js.yacht.p2":
      "The add-on runs $200 per hour per jet ski, delivered and picked up at your yacht\u2019s location. Your captain coordinates the timing so the jet skis arrive exactly when you want them. Ride for an hour, hand them back, and go back to lounging on deck with a drink. No certification hassle, no deposit drama \u2014 we handle the logistics.",
    "js.yacht.p3":
      "It\u2019s the best of both worlds: the freedom of jet skiing on Biscayne Bay with the comfort of a private yacht as your floating home base. Popular with bachelorette parties, birthdays, and corporate groups who want variety without the stress.",
    "js.yacht.tag1": "$200/hr per jet ski",
    "js.yacht.tag2": "Delivered to your yacht",
    "js.yacht.pricingLink": "See full yacht charter pricing",
    "js.yacht.sandbarLink": "Haulover Sandbar guide",
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
    "js.pricing.yachtPricesLink": "Full yacht charter pricing breakdown",
    "js.pricing.bacheloretteLink": "Bachelorette party packages",
    // Jet Ski article — Safety
    "js.safety.title": "Why the Card Matters",
    "js.safety.p1":
      "This isn\u2019t just paperwork. According to the USCG and FWC, Florida consistently leads the nation in boating incidents, with personal watercraft accounting for a significant share. Miami-Dade County regularly ranks among the top counties for PWC incidents. Over half are collisions with another vessel.",
    "js.safety.stat1": "FL leads the nation in boating incidents",
    "js.safety.stat2": "of fatal operators had no boater education",
    "js.safety.stat3": "for a 30-min temp certificate",
    "js.safety.p2":
      "The number that matters most: according to the 2024 USCG Recreational Boating Statistics report, 69% of deaths occurred on boats where the operator had no boating safety education. The temporary certificate covers right-of-way rules, navigation basics, and emergency procedures. It\u2019s 30 minutes that could save your life on Biscayne Bay.",
    "js.safety.coastGuardLink": "Learn what a Coast Guard inspection covers",
    // Jet Ski article — Book Add-On CTA
    "js.bookAddon.title": "Add Jet Skis to Your Charter",
    "js.bookAddon.p1":
      "Book an Emerald Eyes Miami yacht charter and add jet skis as a $200/hr add-on. We deliver them right to your yacht at the sandbar \u2014 you ride, we handle everything else.",
    "js.bookAddon.p2":
      "No separate rental. No certification stress. No deposit drama. Just tell us when you book and we\u2019ll coordinate the delivery with your captain.",
    "js.bookAddon.btn": "Book Your Charter + Jet Skis",
    "js.bookAddon.firstTimeLink": "First-time yacht rental guide",
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
    "js.related.yachtPrices": "Miami Yacht Charter Prices: 2026 Cost Guide",
    "js.related.sandbar": "Haulover Sandbar Yacht Trip: Complete Guide",
    "js.related.firstTime": "First-Time Yacht Rental: What to Expect",
    "js.related.bachelorette": "Bachelorette Party on a Yacht in Miami",
    "js.related.coastGuard": "What Happens During a Coast Guard Inspection?",
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
    "hs.provide.captain.title": "Captain Add-On Available",
    "hs.provide.captain.text":
      "USCG-licensed captains available who know every inch of the sandbar. We handle the booking.",
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
      "Private yacht, floating mats, music, and the best anchoring spot at the sandbar. Starting at $2,500 for 4\u20138 hours. Add a licensed captain and bring your drinks \u2014 we handle everything else.",
    "hs.midCta.btn": "See the Haulover Experience",
    // Haulover Sandbar article — Final CTA
    "hs.cta.title": "This is how Miami does the sandbar.",
    "hs.cta.text":
      "Private yacht. Floating mats, music, and room for up to 12. Add a licensed captain and pull up to Haulover Sandbar the way it was meant to be experienced \u2014 and let us handle the rest.",
    "hs.cta.book": "Plan Your Charter",
    "hs.cta.explore": "Browse Experiences",
    // Haulover Sandbar article — The Sandbar Experience (new section)
    "hs.exp.navTitle": "The Experience",
    "hs.exp.title": "What the Sandbar Is Actually Like",
    "hs.exp.intro":
      "Reading about Haulover Sandbar and being there are two different things. Here’s what a typical day actually looks like — from the moment you anchor to the moment you cruise home.",
    "hs.exp.anchor.title": "Anchoring Up",
    "hs.exp.anchor.text":
      "Your captain positions the yacht on the south side of the sandbar, where the water is calmest and the sand is firmest. The bow anchor goes in first, then the stern line keeps the boat from swinging. Within five minutes you’re set — floating mats in the water, music on, and the swim platform down. Most groups are wading within seconds of anchoring.",
    "hs.exp.wade.title": "Wading & Hanging Out",
    "hs.exp.wade.text":
      "The water is knee-to-waist deep on the flats. The sand is soft, the water is warm year-round (75–85°F), and the visibility is usually 10–15 feet. People walk between boats, float on mats, toss footballs, and just stand around in the water talking. It’s relaxed — like a pool party without walls.",
    "hs.exp.vendors.title": "Floating Food & Vendors",
    "hs.exp.vendors.text":
      "On weekends, a fleet of kayak and jet ski vendors paddle through the boats selling fresh ceviche, fish tacos, açaí bowls, pizza slices, and cold drinks. Prices run $8–15 per item. Cash only — bring small bills. Some vendors also sell snorkel gear and inflatables. It’s one of the most fun and uniquely Miami things you’ll experience.",
    "hs.exp.party.title": "The Party Scene",
    "hs.exp.party.text":
      "On weekends, the north side of the sandbar turns into a floating music festival. DJs play from anchored boats, people raft their vessels together, and the energy builds from late morning through sunset. The south side stays mellower — families, smaller groups, and people who just want to float. Your captain can position you on whichever side matches your vibe.",
    "hs.exp.firstTimerLink":
      "First time chartering? Read our complete beginner’s guide →",
    // Haulover Sandbar article — Expanded timing
    "hs.time.season.title": "Best Season (Nov–May)",
    "hs.time.season.text":
      "South Florida’s dry season runs November through May — less rain, lower humidity, and the calmest bay conditions. Summer works too, but expect afternoon thunderstorms (usually clearing by 4 PM) and slightly choppier water. The sandbar is open year-round.",
    "hs.time.arrival.title": "Ideal Arrival Window",
    "hs.time.arrival.text":
      "Aim to anchor between 10 AM and 11:30 AM. You get the best spots before the crowd, the sun is high enough for that turquoise water color, and you have the full afternoon ahead. Golden hour (4–6 PM) is the best light for photos. Departing around sunset makes for a perfect cruise home.",
    "hs.time.tideDetail":
      "🌊 Tide tip: Check the NOAA tide chart for Haulover Inlet (Station 8723178) the morning of your trip. Incoming tide brings the clearest water and calmest conditions. During a strong outgoing tide, currents near the inlet pick up — your captain will adjust anchoring accordingly.",
    "hs.time.bachLink": "Planning a bachelorette? See our yacht party guide →",
    // Haulover Sandbar article — How Much Does It Cost
    "hs.cost.navTitle": "Pricing",
    "hs.cost.title": "How Much Does It Cost?",
    "hs.cost.p1":
      "A private yacht charter to Haulover Sandbar starts at $2,500 for a 4-hour bareboat trip with Emerald Eyes Miami. That includes the yacht, fuel, floating mats, a premium sound system, ice, coolers, and bottled water. Most clients add a USCG-licensed captain. You bring the food, drinks, and your group — up to 12 guests.",
    "hs.cost.p2":
      "Longer trips (6–8 hours), premium add-ons like a live saxophonist or private sushi chef, and larger vessels are available at higher price points. No hidden fees, no fuel surcharges, no bait-and-switch.",
    "hs.cost.priceLink": "See full pricing breakdown →",
    // Haulover Sandbar article — Emerald Eyes Advantage
    "hs.advantage.navTitle": "Why Emerald Eyes",
    "hs.advantage.label": "The Emerald Eyes Difference",
    "hs.advantage.title": "Why Charter with Us?",
    "hs.advantage.intro":
      "You can rent any boat and motor to the sandbar. But the experience gap between a random rental and an Emerald Eyes charter is enormous. Here’s what you actually get.",
    "hs.advantage.captain.title": "USCG-Licensed Captains",
    "hs.advantage.captain.text":
      "Every Emerald Eyes charter includes a captain who’s logged hundreds of trips to Haulover Sandbar. They know where the sand is firmest, where the current is weakest, and exactly when to arrive for the best positioning. You don’t navigate, anchor, or worry.",
    "hs.advantage.gear.title": "Everything on Board",
    "hs.advantage.gear.text":
      "Floating mats, premium Bluetooth sound system, ice-stocked coolers, real glassware, bottled water, and water toys. Most rental companies give you a boat and a gas tank. We give you the full experience.",
    "hs.advantage.spot.title": "Prime Anchoring Spots",
    "hs.advantage.spot.text":
      "Our captains arrive early and know the exact spots where the water is clearest, the sand is smoothest, and the current is minimal. On a busy weekend, positioning is everything — and it’s the first thing amateurs get wrong.",
    "hs.advantage.vip.title": "VIP Without the Velvet Rope",
    "hs.advantage.vip.text":
      "Pull up on a private yacht with music playing while everyone else circles looking for a spot. There’s no line, no wait, no reservation. Just your group, your yacht, and the best seat at the sandbar.",
    "hs.advantage.group.title": "Groups Up to 12",
    "hs.advantage.group.text":
      "Birthdays, bachelorettes, corporate outings, or just a weekend with friends. Our vessels are designed for groups, with open decks, swim platforms, and plenty of shade. Everyone fits comfortably.",
    "hs.advantage.stress.title": "Zero Logistics",
    "hs.advantage.stress.text":
      "No trailer, no ramp, no parking, no navigation, no fuel stops, no anchor drama. Show up at the marina with your cooler. We handle the rest. That’s the entire point.",
    "hs.advantage.closing":
      "The sandbar is free. Getting there the right way is what you’re paying for.",
    // Haulover Sandbar article — Jet ski cross-link
    "hs.addon.jetskiLink":
      "Do you need a license to ride a jet ski in Miami? Read our guide →",
    // Haulover Sandbar article — Additional related links
    "hs.related.prices": "Miami Yacht Charter Prices Guide",
    "hs.related.bachelorette": "Bachelorette Party on a Yacht",
    "hs.related.firstTimer": "First-Timer’s Guide to Yacht Rental",
    "hs.related.jetski": "Jet Ski License Guide",
    // Blog listing — First Time Yacht Rental card
    "blog.ft.title":
      "First Time Renting a Yacht in Miami? Everything You Need to Know",
    "blog.ft.excerpt":
      "The complete beginner\u2019s guide to yacht charters in Miami \u2014 booking process, what to bring, etiquette, safety, common mistakes to avoid, and everything else first-timers need to know.",
    "blog.ft.readTime": "12 min read",
    // Blog listing — Yacht Prices card
    "blog.yp.title": "Miami Yacht Charter Prices: What Does It Actually Cost?",
    "blog.yp.excerpt":
      "Everyone Googles it. Nobody gives a straight answer. Here\u2019s exactly what a private yacht charter costs in Miami \u2014 no vague ranges, no hidden fees, no bait-and-switch.",
    "blog.yp.readTime": "12 min read",
    // Blog listing — Bachelorette card
    "blog.bach.title": "Bachelorette Party on a Yacht in Miami",
    "blog.bach.excerpt":
      "The ultimate guide to planning a bachelorette yacht party in Miami \u2014 itineraries, pricing, what to bring, add-ons, group size, and insider tips from the team that does this every weekend.",
    "blog.bach.readTime": "16 min read",
    // First Time Yacht Rental article — Hero
    "ft.heroTitle":
      "First Time Renting a Yacht in Miami? Everything You Need to Know",
    "ft.intro1":
      "You\u2019ve seen the reels. Yachts gliding through Biscayne Bay, groups clinking glasses against a sunset, someone doing a backflip off the swim platform. It looks incredible \u2014 and it is. But if you\u2019ve never actually booked a yacht before, the process can feel like a mystery. How much does it cost? What do you wear? Do you tip the captain? Can you bring your own drinks?",
    "ft.intro2":
      "This guide answers every question first-timers ask \u2014 from how the booking works to what to bring, what not to do, and why Miami is the best city in the world to rent a yacht for the first time.",
    "ft.readTime": "12 min read",
    "ft.guide.title": "In this guide",
    "ft.cta.book": "Book Your First Charter",
    // First Time — Quick Facts
    "ft.quick.title": "Quick facts",
    "ft.quick.price":
      "Bareboat charters from $2,500 for 2\u20138 hours \u2014 captain available as add-on",
    "ft.quick.group":
      "Groups from 2 to 25+ guests \u2014 there\u2019s a yacht for every party size",
    "ft.quick.included":
      "Fuel, sound system, floating mats, ice & coolers all included",
    "ft.quick.noLicense":
      "No boating license needed \u2014 your USCG-licensed captain handles everything",
    // First Time — What to Expect
    "ft.expect.label": "Getting Started",
    "ft.expect.title": "What to Expect on Your First Yacht Charter",
    "ft.expect.p1":
      "A yacht charter in Miami is simpler than most people think. You show up at the marina, and if you've added a captain, they'll meet you for a quick safety briefing before you\u2019re on the water within minutes. From there, it\u2019s your day \u2014 cruise to a sandbar, anchor off Star Island, watch a sunset from the open ocean, or just float with music and cold drinks.",
    "ft.expect.p2":
      "When you add a captain, they handle all the navigation, anchoring, and boat operations so you don\u2019t need to know anything about boats. Most first-time charterers choose this option for a completely stress-free experience.",
    "ft.expect.p3":
      "Most first-time guests are surprised at how relaxed the whole experience is. There\u2019s no formal dress code, no stiff protocol, no assigned seating. You\u2019re basically on a private floating lounge with a professional team making it all work behind the scenes.",
    "ft.expect.tag1": "No experience needed",
    "ft.expect.tag2": "Captain available",
    "ft.expect.tag3": "All ages welcome",
    "ft.expect.linkHaulover": "Popular route: Haulover Sandbar guide",
    "ft.expect.linkBach": "Planning a bachelorette? Read our guide",
    // First Time — How Much Does It Cost?
    "ft.pricing.title": "How Much Does It Cost?",
    "ft.pricing.intro":
      "The number one question first-timers ask. Here\u2019s a quick answer \u2014 with a link to the full pricing breakdown.",
    "ft.pricing.starting.title": "$2,500 starting for 4 hours",
    "ft.pricing.starting.text":
      "That\u2019s for a private bareboat yacht with fuel, sound system, floating mats, ice, and coolers included. Most clients add a USCG-licensed captain (from $300). No hidden fees, no surprise charges. Shorter 2-hour sunset cruises start lower, and full-day adventures go higher depending on yacht size and add-ons.",
    "ft.pricing.includes.captain": "Captain available as add-on",
    "ft.pricing.includes.crew": "Fuel & equipment included",
    "ft.pricing.includes.gear": "All equipment included",
    "ft.pricing.detail":
      "Add-ons like a live sax player, sushi chef, jet skis, or bottle service are priced separately. Most groups spend $2,500\u2013$5,000 total for a full afternoon on the water. Weekend and holiday pricing may vary.",
    "ft.pricing.link": "See the full pricing breakdown",
    // First Time — Bareboat vs Crewed
    "ft.charter.label": "Know the Difference",
    "ft.charter.title": "Bareboat vs. Crewed Charter",
    "ft.charter.p1":
      "In the yacht world, \u201Cbareboat\u201D means you rent the vessel itself \u2014 without a captain or crew included in the base price. At Emerald Eyes, we operate a true bareboat model. Most clients add a USCG-licensed captain through us, but if you have proper licensing, you can operate the vessel yourself.",
    "ft.charter.p2":
      "A \u201Ccrewed charter\u201D in the traditional sense usually means a multi-day trip on a larger yacht with a live-aboard captain, chef, and stewardess \u2014 think Caribbean weeklong voyages. For day charters in Miami, the bareboat model is standard. You rent the yacht and choose whether to add a captain \u2014 most clients do, and we handle the booking for you.",
    "ft.charter.p3":
      "Bottom line: you don\u2019t need a boating license, you don\u2019t need experience, and you don\u2019t need to worry about navigation or docking. Just show up.",
    "ft.charter.note":
      "Emerald Eyes is a bareboat charter company. Captain is available as an add-on \u2014 most clients choose this option for a worry-free experience.",
    // First Time — Your Captain Handles Everything
    "ft.captain.title": "Your Captain Handles Everything",
    "ft.captain.intro":
      "First-timers often wonder what they’re responsible for on the water. When you add a captain through us, the answer is simple: nothing. Your USCG-licensed captain handles every detail so you can relax.",
    "ft.captain.nav.title": "Navigation & Route",
    "ft.captain.nav.text":
      "Your captain plans and drives the entire route — from departure to Haulover Sandbar, Star Island, or wherever you want to go. They know the channels, the no-wake zones, and the best spots to anchor.",
    "ft.captain.anchor.title": "Anchoring & Docking",
    "ft.captain.anchor.text":
      "Setting the anchor at the sandbar, repositioning for sunset, and docking back at the marina — all handled by the captain. You never touch a line or a cleat.",
    "ft.captain.weather.title": "Weather Monitoring",
    "ft.captain.weather.text":
      "Your captain checks marine forecasts before departure and monitors conditions throughout the trip. If weather changes, they’ll adjust the route or find a sheltered spot — no decision needed from you.",
    "ft.captain.safety.title": "Safety & Compliance",
    "ft.captain.safety.text":
      "Pre-departure safety briefing, life jacket inventory, emergency protocols, and full Coast Guard compliance. Your captain is drug-tested, USCG-licensed, and experienced in Miami waters.",
    "ft.captain.crew.title": "Crew Service",
    "ft.captain.crew.text":
      "The crew keeps the music going, serves drinks, sets out floating mats and water toys, and makes sure every guest is comfortable. Think of them as your personal hospitality team on the water.",
    "ft.captain.local.title": "Local Knowledge",
    "ft.captain.local.text":
      "The best sandbars, the quietest anchorages, the perfect sunset angle — your captain knows Miami’s waters inside out. They’ll tailor the route to your group’s vibe and make real-time suggestions.",
    "ft.captain.note":
      "Most clients add a captain \u2014 we handle the booking. You don’t need boating experience or even a plan. Just show up and enjoy.",
    "ft.captain.cgLink": "Learn more: How Coast Guard inspections protect you",
    // First Time — Booking Process
    "ft.booking.title": "The Booking Process",
    "ft.booking.intro":
      "From first click to stepping aboard \u2014 here\u2019s exactly how it works.",
    "ft.booking.step1.title": "Choose Your Experience",
    "ft.booking.step1.text":
      "Browse our experiences \u2014 sunset cruise, Haulover Sandbar, private party, bachelorette, or build your own. Each one comes with a suggested itinerary, but everything is customizable.",
    "ft.booking.step2.title": "Pick Date & Duration",
    "ft.booking.step2.text":
      "Select your date and charter length. Options range from 2-hour sunset cruises to full-day adventures. Weekdays tend to have better availability and calmer waters.",
    "ft.booking.step3.title": "Select Add-Ons",
    "ft.booking.step3.text":
      "Make it yours. Add a live sax player, sushi chef, jet skis, bottle service, hookah, or a professional photographer. Or keep it simple \u2014 the base package already includes everything you need.",
    "ft.booking.step4.title": "Show Up & Enjoy",
    "ft.booking.step4.text":
      "Arrive at the marina 15 minutes early, meet your captain, get a quick safety briefing, and you\u2019re off. We handle the rest \u2014 you just have fun.",
    "ft.booking.linkJetski": "Adding jet skis? Check if you need a license",
    "ft.booking.linkPrices": "See full pricing breakdown",
    // First Time — What to Bring
    "ft.bring.title": "What to Bring (and What We Provide)",
    "ft.bring.intro":
      "We\u2019ve got the yacht covered. Here\u2019s what to pack \u2014 and what you can leave at home.",
    "ft.bring.you": "You Bring",
    "ft.bring.we": "We Provide",
    "ft.bring.sunscreen.title": "Sunscreen",
    "ft.bring.sunscreen.text":
      "Reef-safe preferred. The sun on the water is twice as strong. Reapply every 90 minutes.",
    "ft.bring.swimsuit.title": "Swimsuit & Towel",
    "ft.bring.swimsuit.text":
      "You\u2019ll likely be in and out of the water. Bring a change of clothes if you want to stay dry later.",
    "ft.bring.cash.title": "Cash for Tips",
    "ft.bring.cash.text":
      "If you add a captain, 15\u201320% gratuity is standard in the charter industry. They work hard to make your day perfect.",
    "ft.bring.id.title": "Valid ID",
    "ft.bring.id.text":
      "Bring a government-issued photo ID. Required for check-in and if you\u2019re bringing alcohol aboard.",
    "ft.provide.captain.title": "Captain Add-On",
    "ft.provide.captain.text":
      "USCG-licensed captains available. They know every anchorage, sandbar, and sunset spot in Miami. We handle the booking.",
    "ft.provide.crew.title": "Fully Equipped Vessel",
    "ft.provide.crew.text":
      "Everything on board for a great day \u2014 sound system, floating mats, water toys, ice, coolers, and bottled water.",
    "ft.provide.sound.title": "Sound System",
    "ft.provide.sound.text":
      "Premium Bluetooth speakers throughout the yacht. Connect your phone and play your own playlist all day.",
    "ft.provide.ice.title": "Ice & Coolers",
    "ft.provide.ice.text":
      "Coolers stocked with ice and water. Bring your own drinks and snacks \u2014 we keep everything cold.",
    "ft.provide.toys.title": "Water Toys & Mats",
    "ft.provide.toys.text":
      "Floating mats, noodles, and water toys included on every charter. Perfect for sandbar days.",
    "ft.provide.safety.title": "Safety Equipment",
    "ft.provide.safety.text":
      "Life jackets for all ages, first aid kit, fire extinguisher, and all USCG-required safety gear on board.",
    // First Time — What to Wear
    "ft.wear.title": "What to Wear",
    "ft.wear.intro":
      "There\u2019s no dress code on a yacht charter \u2014 but here\u2019s what actually works.",
    "ft.wear.casual.title": "Daytime / Sandbar",
    "ft.wear.casual.text":
      "Swimsuit, cover-up, flip-flops or slides. You\u2019ll be in the water most of the day. Bring a hat and sunglasses \u2014 the glare off the water is real.",
    "ft.wear.evening.title": "Sunset / Evening Cruise",
    "ft.wear.evening.text":
      "Smart casual works great. Light sundress or linen shirt, nice sandals. Bring a light layer \u2014 the breeze picks up after sunset and it can get cool on the water.",
    "ft.wear.shoes.title": "Footwear Rule",
    "ft.wear.shoes.text":
      "Soft-soled shoes or bare feet only on the yacht. Hard soles and heels can damage the deck. Leave the sneakers and dress shoes in the car.",
    // First Time — Etiquette
    "ft.etiquette.title": "Yacht Etiquette for First-Timers",
    "ft.etiquette.intro":
      "No one expects you to know yacht protocol. But these four simple rules will make you look like a seasoned charter guest.",
    "ft.etiquette.shoes.title": "Shoes Off on Board",
    "ft.etiquette.shoes.text":
      "It\u2019s the number one rule on every yacht. Remove your shoes before stepping on the deck. The crew will show you where to leave them. This protects the teak and non-skid surfaces.",
    "ft.etiquette.time.title": "Be On Time",
    "ft.etiquette.time.text":
      "Arrive 15 minutes before departure. The charter clock starts at your confirmed time, not when you show up. Late arrivals mean less time on the water \u2014 for everyone.",
    "ft.etiquette.tip.title": "Tipping Your Captain",
    "ft.etiquette.tip.text":
      "If you hire a captain, 15\u201320% of the charter cost is standard. Cash is preferred and given directly to the captain. A great captain makes the experience \u2014 show them you noticed.",
    "ft.etiquette.respect.title": "Respect the Captain & Vessel",
    "ft.etiquette.respect.text":
      "If you've added a captain, they\u2019re there to make your day amazing. Treat them like you\u2019d treat a host at their home. Don\u2019t enter the helm or engine areas, and follow the captain\u2019s instructions at all times.",
    // First Time — Common Mistakes
    "ft.mistakes.title": "Common Mistakes to Avoid",
    "ft.mistakes.intro":
      "We\u2019ve seen it all. Here are the most common first-timer mistakes \u2014 and how to avoid them.",
    "ft.mistakes.short.title": "Booking Too Short",
    "ft.mistakes.short.text":
      "A 2-hour charter sounds fine on paper, but by the time you board, cruise out, anchor, and enjoy the water, it\u2019s time to head back. For a sandbar day or party, 4 hours is the sweet spot. 6\u20138 hours if you want to really unwind.",
    "ft.mistakes.crowd.title": "Too Many People",
    "ft.mistakes.crowd.text":
      "Every yacht has a legal passenger capacity set by the Coast Guard. Showing up with extra people means someone isn\u2019t coming. Confirm your headcount when you book and stick to it.",
    "ft.mistakes.sun.title": "Underestimating the Sun",
    "ft.mistakes.sun.text":
      "The sun reflects off the water from every angle. First-timers consistently underestimate it. Bring SPF 50+, a hat, and reapply often. Dehydration is real \u2014 drink water between drinks.",
    "ft.mistakes.glass.title": "Bringing Glass Bottles",
    "ft.mistakes.glass.text":
      "Glass on a boat is a safety hazard. Broken glass on a wet deck is dangerous, and shards in the water are worse. Transfer drinks to cans or plastic before boarding. Most yacht companies won\u2019t allow glass on board.",
    "ft.mistakes.weather.title": "Not Checking the Weather",
    "ft.mistakes.weather.text":
      "Miami weather changes fast. Don’t wait until you’re at the marina to check the forecast. Look at marine conditions the day before and the morning of. Your captain monitors weather too — but if conditions look rough, reach out early so we can reschedule before you drive to the dock.",
    "ft.mistakes.headcount.title": "Not Confirming Headcount",
    "ft.mistakes.headcount.text":
      "Every yacht has a strict Coast Guard passenger limit. If your group shows up with more people than you booked for, someone stays on the dock. Confirm your final headcount 48 hours before departure and let us know about any changes — we can sometimes accommodate on a larger vessel.",
    // First Time — Seasickness Tips
    "ft.seasick.title": "Seasickness Tips",
    "ft.seasick.intro":
      "Worried about getting seasick? It’s more common than people admit — but it’s also easy to prevent. Here’s what works.",
    "ft.seasick.deck.title": "Stay Above Deck",
    "ft.seasick.deck.text":
      "Fresh air and an open horizon are the best prevention. Stay on the upper deck or the bow where you can feel the breeze. Avoid going below deck for extended periods — the enclosed space and lack of visual reference makes it worse.",
    "ft.seasick.horizon.title": "Watch the Horizon",
    "ft.seasick.horizon.text":
      "Your inner ear senses the motion, but your eyes need a fixed reference point to match. Look at the horizon or the shoreline — not your phone. Scrolling on a screen while the boat rocks is a fast track to feeling queasy.",
    "ft.seasick.ginger.title": "Ginger & Remedies",
    "ft.seasick.ginger.text":
      "Ginger candies, ginger ale, or ginger chews are a natural remedy that actually works. Dramamine or Bonine taken 30–60 minutes before boarding are the go-to over-the-counter options. Sea-Bands (acupressure wristbands) also help some people.",
    "ft.seasick.meals.title": "Avoid Heavy Meals Before",
    "ft.seasick.meals.text":
      "Don’t board on an empty stomach, but don’t eat a huge meal either. A light, non-greasy meal about an hour before departure is ideal. Skip the spicy food and heavy dairy. Stay hydrated — dehydration amplifies seasickness symptoms.",
    "ft.seasick.note":
      "Most guests on day charters in Miami never get seasick — the waters in Biscayne Bay are calm and protected. But if you’re prone to motion sickness, these tips make a real difference.",
    // First Time — Safety
    "ft.safety.title": "Safety on Board",
    "ft.safety.intro":
      "Your safety is the number one priority. When you add a captain through us, they handle all safety protocols and compliance.",
    "ft.safety.briefing.title": "Pre-Departure Safety Briefing",
    "ft.safety.briefing.text":
      "Before you leave the dock, your captain will walk through the location of life jackets, fire extinguishers, emergency exits, and the basic rules of the vessel. It takes five minutes and it matters.",
    "ft.safety.jackets.title": "Life Jackets for Everyone",
    "ft.safety.jackets.text":
      "Coast Guard-approved life jackets in all sizes are on board \u2014 including children\u2019s sizes. You don\u2019t have to wear one while cruising, but they\u2019re required for children under 6 and available anytime you want one.",
    "ft.safety.captain.title": "Your Captain Handles It All",
    "ft.safety.captain.text":
      "Navigation, weather monitoring, anchoring, docking, and emergency protocols \u2014 that\u2019s all on your captain. They\u2019re USCG-licensed, drug-tested, and experienced in Miami waters. You focus on having fun; they focus on getting everyone home safe.",
    "ft.safety.cgLink": "Read more: Coast Guard Safety & Bareboat Inspections",
    // First Time — Mid CTA
    "ft.midCta.title": "Ready for Your First Charter?",
    "ft.midCta.text":
      "Emerald Eyes makes it easy. Fully equipped yacht, captain available as add-on, everything you need on board. Just pick your date and show up \u2014 we handle everything else.",
    "ft.midCta.btn": "Plan Your Charter",
    // First Time — FAQ
    "ft.faq.title": "First-Timer FAQs",
    "ft.faq.intro":
      "Real questions from real first-time guests. If yours isn\u2019t here, message us on WhatsApp \u2014 we respond within an hour.",
    "ft.faq.q1": "Do I need a boating license to rent a yacht in Miami?",
    "ft.faq.a1":
      "No. Most clients add a USCG-licensed captain through us, and they handle all navigation and boat operations. You don\u2019t need any boating experience or certifications. If you do have a license, you can operate the vessel yourself.",
    "ft.faq.q2": "Can I bring my own food and drinks?",
    "ft.faq.a2":
      "Yes. Most guests bring their own cooler with drinks and snacks. We provide ice, coolers, and glassware. No glass bottles \u2014 cans and plastic only. You can also add catering packages like a sushi chef or bottle service.",
    "ft.faq.q3": "How far in advance should I book?",
    "ft.faq.a3":
      "For the best selection, book 1\u20132 weeks ahead for weekday charters and 2\u20133 weeks ahead for weekends. Peak season (November through April) and holidays can book up a month or more in advance.",
    "ft.faq.q4": "What happens if the weather is bad?",
    "ft.faq.a4":
      "We monitor weather closely. If conditions are unsafe, we\u2019ll reschedule your charter at no extra cost. Light rain usually clears quickly in Miami \u2014 your captain will make the call on the morning of your trip.",
    "ft.faq.q5": "Is it safe to bring kids on a yacht?",
    "ft.faq.a5":
      "Absolutely. We have life jackets in children\u2019s sizes, and our crew is experienced with families. Kids under 6 are required to wear a life jacket at all times. The sandbar experiences are especially popular with families.",
    "ft.faq.q6": "How much should I tip the captain?",
    "ft.faq.a6":
      "If you hire a captain through us, 15\u201320% of the total charter cost is standard in the industry. Cash is preferred and can be given directly to the captain at the end of the trip.",
    "ft.faq.q7": "What\u2019s the cancellation policy?",
    "ft.faq.a7":
      "Cancellations more than 48 hours before departure receive a full refund. Within 48 hours, your deposit may be applied to a future date. Weather cancellations are always rescheduled at no cost.",
    "ft.faq.q8": "Can I play my own music?",
    "ft.faq.a8":
      "Yes. Every yacht has a premium Bluetooth sound system. Connect your phone and DJ the entire trip. We also have curated playlists if you\u2019d rather just vibe.",
    // First Time — Related & Final CTA
    "ft.related.title": "Keep Reading",
    "ft.related.intro":
      "More guides to help you plan the perfect day on the water.",
    "ft.related.coastGuard":
      "Coast Guard Safety & Bareboat Charter Inspections",
    "ft.related.bachelorette": "Bachelorette Party on a Yacht: Planning Guide",
    "ft.related.haulover": "Haulover Sandbar by Yacht: The Complete Guide",
    "ft.related.jetski": "Do You Need a License to Ride a Jet Ski in Miami?",
    "ft.related.prices": "Miami Yacht Charter Prices: What to Expect",
    "ft.related.experience": "Browse All Experiences",
    "ft.cta.title": "Your first time on a yacht should feel effortless.",
    "ft.cta.text":
      "Private yacht. Sound system, floating mats, and everything you need on board. Add a licensed captain and all you have to do is show up.",
    "ft.cta.explore": "Browse Experiences",
    // Yacht Prices article
    "yp.heroTitle": "Miami Yacht Charter Prices: What Does It Actually Cost?",
    "yp.readTime": "12 min read",
    "yp.intro1":
      "Everyone Googles it. Nobody gives a straight answer. We're changing that. Here's exactly what a private yacht charter costs in Miami — no vague ranges, no hidden fees, no bait-and-switch.",
    "yp.intro2":
      "We've been running charters out of North Miami for years. This guide breaks down base rates, what's included, popular add-ons, and the best ways to get more for your money.",
    "yp.hero.seeBreakdown": "See the Breakdown",
    "yp.cta.getQuote": "Get a Quote",
    "yp.cta.experiences": "View Experiences",
    "yp.quick.title": "Pricing at a glance",
    "yp.quick.starting": "Starting at $2,500 for a 4-hour charter",
    "yp.quick.minimum": "4-hour minimum on all bookings",
    "yp.quick.included":
      "Fuel, sound system, water toys & floating mats included",
    "yp.quick.peak": "Peak season: December through April",
    "yp.nav.title": "In this guide",
    "yp.nav.shortAnswer": "The Short Answer",
    "yp.nav.included": "What's Included",
    "yp.nav.duration": "Duration & Pricing",
    "yp.nav.addons": "Add-On Costs",
    "yp.nav.captain": "Bareboat & Captain",
    "yp.nav.factors": "Factors That Affect Price",
    "yp.nav.save": "How to Save",
    "yp.nav.tipping": "Tipping Guide",
    "yp.nav.faq": "FAQ",
    "yp.short.title": "The Short Answer",
    "yp.short.p1":
      "A private yacht charter in Miami starts at $2,500 for a 4-hour bareboat rental with Emerald Eyes. That includes the vessel, fuel for local cruising, a premium sound system, ice, coolers, floating mats, water toys, bottled water, and glassware. Most clients add a USCG-licensed captain, which we arrange for you.",
    "yp.short.p2":
      "If you want to compare: across the Miami market, yacht charters range from roughly $1,000 to $15,000+ for a half-day depending on boat size, vessel age, and level of service. The wide range comes down to whether you're on a 30-foot center console or a 100-foot superyacht.",
    "yp.short.p3":
      "At Emerald Eyes, we operate a curated fleet of well-maintained vessels in the 40-65 foot range — the sweet spot for groups of 2 to 15 who want a luxury experience without the superyacht price tag.",
    "yp.short.note":
      "No hidden fees. The price we quote is the price you pay. Captain and gratuity are the only additional costs, and both are quoted upfront.",
    "yp.included.label": "Every Charter",
    "yp.included.title": "What's Included in Your Price",
    "yp.included.intro":
      "Every Emerald Eyes charter comes with everything you need for a perfect day on the water. No surprise charges, no upsells at the dock.",
    "yp.inc.vessel.title": "Your Private Yacht",
    "yp.inc.vessel.text":
      "A well-maintained vessel in the 40-65 foot range, fully equipped for a luxury day on the water.",
    "yp.inc.sound.title": "Premium Sound System",
    "yp.inc.sound.text":
      "Bluetooth-connected marine-grade speakers. Play your playlist all day.",
    "yp.inc.fuel.title": "Fuel for Local Cruising",
    "yp.inc.fuel.text":
      "Standard Miami routes including Haulover Sandbar, Star Island, and Key Biscayne.",
    "yp.inc.ice.title": "Ice, Coolers & Setup",
    "yp.inc.ice.text":
      "Industrial-grade coolers stocked with ice so your drinks stay cold from dock to dock.",
    "yp.inc.mats.title": "Floating Mats",
    "yp.inc.mats.text":
      "Large floating mats for lounging on the water at sandbar stops.",
    "yp.inc.toys.title": "Water Toys",
    "yp.inc.toys.text":
      "Paddleboards, noodles, and inflatables for everyone on board.",
    "yp.inc.water.title": "Bottled Water",
    "yp.inc.water.text":
      "Complimentary bottled water throughout your entire trip.",
    "yp.inc.glass.title": "Glassware & Cups",
    "yp.inc.glass.text":
      "Reusable cups and glassware so you can bring your own drinks in style.",
    "yp.captain.label": "Bareboat Charter",
    "yp.captain.title": "Bareboat Charter & Captain Add-On",
    "yp.captain.intro":
      "Emerald Eyes is a bareboat charter company — you rent the yacht itself. Most clients add a USCG-licensed captain, and we handle the booking for you. If you have proper licensing, you can operate the vessel yourself.",
    "yp.captain.bareboat.title": "What Bareboat Means",
    "yp.captain.bareboat.text":
      "A bareboat charter means you rent the vessel without a captain or crew included in the base price. You are the temporary charterer of the yacht for the duration of your rental. This gives you flexibility to choose exactly the crew you want — or operate the boat yourself if you hold the proper credentials.",
    "yp.captain.addon.title": "Add a USCG-Licensed Captain",
    "yp.captain.addon.text":
      "Most clients add a captain, and we make it easy. We connect you with experienced, USCG-licensed captains who know every channel, sandbar, and no-wake zone in Biscayne Bay. They handle navigation, anchoring, docking, and all safety protocols so you can focus on enjoying the ride.",
    "yp.captain.self.title": "Can I Captain It Myself?",
    "yp.captain.self.text":
      "If you hold a valid boating license and meet USCG requirements, you can operate the vessel yourself. Most first-time charterers choose to add a captain for peace of mind — especially for sandbar anchoring and navigating Biscayne Bay.",
    "yp.dur.title": "Charter Duration & Pricing",
    "yp.dur.intro":
      "Longer charters offer better per-hour value and let you explore more of Miami's coastline. Here's how our rates break down.",
    "yp.dur.4hr.title": "Half Day",
    "yp.dur.4hr.price": "From $2,500",
    "yp.dur.4hr.desc":
      "Perfect for a Haulover Sandbar trip, sunset cruise, or a quick celebration. Most popular for birthdays and bachelorettes.",
    "yp.dur.4hr.perHour": "~$625/hour",
    "yp.dur.6hr.title": "Extended",
    "yp.dur.6hr.price": "From $3,500",
    "yp.dur.6hr.desc":
      "Time to hit the sandbar and cruise past Star Island. Great for groups who want to combine swimming, sightseeing, and a sunset.",
    "yp.dur.6hr.perHour": "~$583/hour",
    "yp.dur.8hr.title": "Full Day",
    "yp.dur.8hr.price": "From $5,000",
    "yp.dur.8hr.desc":
      "The complete Miami experience. Sandbar in the morning, island-hopping through Biscayne Bay, and a sunset return. Best per-hour value.",
    "yp.dur.8hr.perHour": "~$625/hour",
    "yp.dur.tipNote":
      "If you hire a captain through us, industry-standard gratuity is 15-20% of the charter fee. It's never included in our pricing and always at your discretion.",
    "yp.addons.title": "Popular Add-Ons",
    "yp.addons.intro":
      "Make your charter unforgettable with our curated add-on experiences. All can be arranged at the time of booking.",
    "yp.addon.captain.title": "USCG-Licensed Captain",
    "yp.addon.captain.price": "From $300",
    "yp.addon.captain.desc":
      "A professional USCG-licensed captain who knows every route, sandbar, and sunset spot in Miami. Handles navigation, anchoring, and safety. Recommended for most groups — especially first-timers.",
    "yp.addon.sax.title": "Live Saxophone",
    "yp.addon.sax.price": "From $350",
    "yp.addon.sax.desc":
      "A professional sax player performing live as you cruise through Biscayne Bay. Our most requested add-on — pure Miami vibes.",
    "yp.addon.sushi.title": "Sushi Chef",
    "yp.addon.sushi.price": "From $500",
    "yp.addon.sushi.desc":
      "A private sushi chef rolling fresh omakase-style on board. Includes the chef, premium fish, and full presentation.",
    "yp.addon.jetski.title": "Jet Ski Rental",
    "yp.addon.jetski.price": "From $200/hr",
    "yp.addon.jetski.desc":
      "One or two jet skis delivered to the yacht at the sandbar. No license required. Helmet and safety briefing included.",
    "yp.addon.catering.title": "Catering Package",
    "yp.addon.catering.price": "From $30/person",
    "yp.addon.catering.desc":
      "From charcuterie boards and fruit platters to full-service catering with a private chef. Customized to your group and occasion.",
    "yp.addon.dj.title": "DJ",
    "yp.addon.dj.price": "From $300",
    "yp.addon.dj.desc":
      "A professional DJ with their own setup brings the nightlife energy to the water. Perfect for parties and bachelorettes.",
    "yp.addon.photo.title": "Photographer",
    "yp.addon.photo.price": "From $150",
    "yp.addon.photo.desc":
      "A professional photographer captures every moment. Drone shots, candid party photos, and golden-hour portraits. Edited gallery within 48 hours.",
    "yp.addon.hookah.title": "Hookah",
    "yp.addon.hookah.price": "From $150",
    "yp.addon.hookah.desc":
      "A premium hookah setup with a selection of flavors, delivered and managed on board. Popular for sunset cruises and group celebrations.",
    "yp.addon.decor.title": "Custom Decorations",
    "yp.addon.decor.price": "From $250",
    "yp.addon.decor.desc":
      "Balloons, banners, flower arrangements, and themed setups for birthdays, proposals, and bachelorettes. Send us your vision and we handle the rest.",
    "yp.factors.title": "What Affects the Price",
    "yp.factors.intro":
      "Not every charter costs the same. Here are the four main variables that determine your final price.",
    "yp.factor.size.title": "Vessel Size & Type",
    "yp.factor.size.text":
      "A 40-foot cruiser costs less than a 65-foot yacht. Larger vessels have more deck space, cabins, and amenities — and require more fuel. For groups under 10, a mid-size vessel (40-50 ft) is usually the best value.",
    "yp.factor.season.title": "Season",
    "yp.factor.season.text":
      "Peak season runs December through April, when Miami is packed with tourists and demand is highest. Off-peak (May through November) offers the same beautiful weather at lower rates. Hurricane season (June-November) has rare disruptions but the best deals.",
    "yp.factor.group.title": "Group Size",
    "yp.factor.group.text":
      "More guests may require a larger vessel. Groups of 2-8 fit comfortably on our standard fleet. Groups of 9-15 may need a larger yacht. For 16+, we recommend multi-vessel packages.",
    "yp.factor.day.title": "Day of Week",
    "yp.factor.day.text":
      "Friday, Saturday, and Sunday are premium days with higher demand. Tuesday through Thursday typically offer the best availability and rates. Monday charters also tend to be quieter with better pricing.",
    "yp.save.title": "How to Save",
    "yp.save.intro":
      "Smart booking strategies that get you the same experience for less. We want you on the water — here's how to make it happen.",
    "yp.save.weekday.title": "Book a Weekday",
    "yp.save.weekday.text":
      "Tuesday through Thursday charters typically offer better rates than weekends. You also get less boat traffic at the sandbar, calmer waters, and a more relaxed experience overall.",
    "yp.save.offpeak.title": "Go Off-Peak",
    "yp.save.offpeak.text":
      "May through November offers warm weather, calm seas, and rates that can be 10-20% lower than peak season. September and October are hidden gems — gorgeous water, minimal crowds, and the best deals of the year.",
    "yp.save.direct.title": "Book Direct",
    "yp.save.direct.text":
      "Booking directly with us instead of through third-party platforms means no middleman markups. You also get direct communication with our team for custom requests and last-minute changes.",
    "yp.save.longer.title": "Book a Longer Charter",
    "yp.save.longer.text":
      "The per-hour cost drops on longer charters. An 8-hour full day is significantly better value per hour than two separate 4-hour trips. Plus, you get the full Miami experience without rushing.",
    "yp.tipping.title": "Tipping Your Captain",
    "yp.tipping.intro":
      "If you hire a captain through us, gratuity is customary. Here's everything you need to know so there are zero surprises.",
    "yp.tipping.standard.title": "Industry Standard: 15-20%",
    "yp.tipping.standard.text":
      "The standard gratuity for yacht charters in Miami is 15-20% of the base charter fee. This is consistent across the industry, similar to tipping at a high-end restaurant.",
    "yp.tipping.example.title": "What That Looks Like",
    "yp.tipping.example.text":
      "On a $2,500 half-day charter, a typical tip is $375-$500. On a $5,000 full-day charter, $750-$1,000. The amount is always at your discretion based on your experience.",
    "yp.tipping.how.title": "How to Tip",
    "yp.tipping.how.text":
      "Cash is preferred and is given directly to the captain at the end of the trip. Venmo and Zelle are also accepted if you prefer digital.",
    "yp.tipping.note":
      "Gratuity is never included in our pricing and never expected — but when you hire a captain through us, it is deeply appreciated. They work hard to make every charter special.",
    "yp.midCta.label": "Ready to Book?",
    "yp.midCta.title": "Get Your Custom Quote in Minutes",
    "yp.midCta.text":
      "Tell us your date, group size, and any add-ons you want. We'll put together a transparent quote with everything included — no surprises, no back-and-forth. Most quotes come back within an hour.",
    "yp.faq.title": "Pricing FAQ",
    "yp.faq.intro":
      "The most common questions we get about yacht charter costs in Miami.",
    "yp.faq.q1": "How much does it cost to rent a yacht in Miami?",
    "yp.faq.a1":
      "A private yacht charter in Miami starts at $2,500 for a 4-hour outing with Emerald Eyes. Prices across the market range from $1,000 to $15,000+ for a half-day depending on vessel size and amenities. Our sweet spot is the $2,500-$5,000 range for groups of 2-15.",
    "yp.faq.q2": "What's included in the charter price?",
    "yp.faq.a2":
      "Every Emerald Eyes bareboat charter includes the vessel, fuel for local cruising, premium sound system, ice and coolers, floating mats, water toys, bottled water, and glassware. Captain is available as a popular add-on. There are no hidden fuel surcharges or docking fees.",
    "yp.faq.q3": "How much does a yacht cost per hour?",
    "yp.faq.a3":
      "Based on our rates, per-hour cost is approximately $583-$625 depending on charter length. Across the broader Miami market, hourly rates range from $250 to $1,500+ depending on the yacht. Longer charters always offer better per-hour value.",
    "yp.faq.q4": "Are there additional costs I should budget for?",
    "yp.faq.a4":
      "Most clients add a captain (from $300), and gratuity for your captain is at your discretion (industry standard is 15-20%). If you add extras like a sax player, sushi chef, or jet ski, those are quoted upfront. Your own food and drinks are welcome and free to bring.",
    "yp.faq.q5": "Is fuel included?",
    "yp.faq.a5":
      "Yes. Fuel for all standard Miami cruising routes is included — Haulover Sandbar, Star Island, Biscayne Bay, and Key Biscayne. Extended trips outside of the standard area may incur additional fuel costs, but we'll always tell you before booking.",
    "yp.faq.q6": "When is the cheapest time to charter?",
    "yp.faq.a6":
      "Weekdays (Tuesday-Thursday) during off-peak months (May-November) offer the best rates. You can save 10-20% compared to a weekend charter during peak season. September and October are often the most affordable months with excellent weather.",
    "yp.faq.q7": "How much should I tip the captain?",
    "yp.faq.a7":
      "If you hire a captain through us, gratuity is never included and always at your discretion. The industry standard in Miami is 15-20% of the base charter fee. For a $2,500 charter, that's typically $375-$500. Tips go directly to your captain.",
    "yp.faq.q8": "Can I bring my own food and drinks?",
    "yp.faq.a8":
      "Absolutely. You're welcome to bring your own food, drinks, and alcohol at no extra charge. We provide ice, coolers, and glassware. No glass bottles on board — please use cans or pour into the cups we provide. You can also add our catering packages.",
    "yp.related.title": "Related Guides",
    "yp.related.intro":
      "More resources to help you plan the perfect Miami yacht experience.",
    "yp.related.sandbar": "Haulover Sandbar Experience",
    "yp.related.haulover": "Complete Haulover Sandbar Guide",
    "yp.related.sunset": "Sunset Cruise Experience",
    "yp.related.book": "Book Your Charter",
    "yp.sample.title": "Sample Total",
    "yp.sample.intro":
      "Here's what a typical 4-hour charter looks like all-in, so you can budget with confidence.",
    "yp.sample.base": "4-hour charter: $2,500",
    "yp.sample.sax": "Live sax player: +$350",
    "yp.sample.tip": "Gratuity (18%): ~$450",
    "yp.sample.total": "Total: ~$3,300 for up to 13 guests",
    "yp.sample.perPerson": "Per person with add-ons (13 guests): ~$254",
    "yp.sample.perPersonBase": "Per person without add-ons: ~$192",
    "yp.finalCta.title": "Know the Price. Love the Experience.",
    "yp.finalCta.text":
      "No surprises, no hidden fees. Just a transparent quote and a team ready to make your day on the water unforgettable. Tell us what you're looking for.",
    // Bachelorette article
    "bach.category": "Experiences",
    "bach.readTime": "16 min read",
    "bach.heroTitle": "Bachelorette Party on a Yacht in Miami",
    "bach.intro1":
      "Forget the crowded club or the overpriced brunch. The bachelorette party your group will actually remember happens on a private yacht — music playing, champagne flowing, and the Miami skyline behind every photo. No dress code drama, no reservation stress, no sharing the space with strangers.",
    "bach.intro2":
      "This guide covers everything you need to plan the perfect bachelorette yacht party in Miami: itineraries, pricing, what to bring, the best add-ons, group size considerations, and insider tips from the team that does this every weekend.",
    "bach.guide.title": "Planning Guide",
    "bach.cta.book": "Plan Your Charter",
    "bach.cta.explore": "Browse Experiences",
    "bach.quick.title": "Quick Facts",
    "bach.quick.group": "Groups of 2-25+ guests (sweet spot: 8-15)",
    "bach.quick.duration": "4-8 hours recommended for bachelorettes",
    "bach.quick.route": "Star Island, Haulover Sandbar, Sunset Skyline",
    "bach.quick.starting": "Starting at $3,500 for 4 hours",
    "bach.nav.whyYacht": "Why a Yacht",
    "bach.nav.planning": "Planning Timeline",
    "bach.nav.itinerary": "The Perfect Itinerary",
    "bach.nav.included": "What's Included",
    "bach.nav.addons": "Popular Add-Ons",
    "bach.nav.whatToBring": "What to Bring",
    "bach.nav.pricing": "Group Size & Pricing",
    "bach.nav.tips": "Tips from Our Team",
    "bach.nav.faq": "FAQ",
    "bach.why.title": "Why a Yacht Beats Every Other Bachelorette Option",
    "bach.why.p1":
      "A nightclub has a two-hour wait, a restaurant has a time limit, and a beach house means somebody's cleaning up. A private yacht is the one venue where there are zero restrictions on your group having the best time possible — your music, your drinks, your schedule, and the entire ocean as your backdrop.",
    "bach.why.p2":
      "Every photo looks like a magazine cover when you're shooting against turquoise water and the Miami skyline. The lighting at golden hour is unreal. And when the music is bouncing off the water with no walls around you, the energy hits different.",
    "bach.why.p3":
      "Plus, everything can be handled for you. Add a licensed captain and they drive while you party. All you have to do is show up. This is the bachelorette party where the maid of honor actually gets to enjoy it.",
    "bach.why.privacy.title": "Total Privacy",
    "bach.why.privacy.text":
      "No strangers, no lines, no noise complaints. The yacht is exclusively yours — your playlist, your rules, your party.",
    "bach.why.views.title": "Unmatched Photos",
    "bach.why.views.text":
      "Turquoise water, celebrity mansions, and the Miami skyline. Every angle is a photo opportunity that beats any rooftop bar.",
    "bach.why.freedom.title": "Your Music, Full Volume",
    "bach.why.freedom.text":
      "Premium Bluetooth sound system on board. Play your own playlist as loud as you want — no noise limits on the open water.",
    "bach.why.tag1": "Private Yacht",
    "bach.why.tag2": "Captain Available",
    "bach.why.tag3": "Zero Cleanup",
    "bach.plan.title": "When to Book & How to Plan",
    "bach.plan.p1":
      "Start planning 3-6 months before the wedding date. Miami yacht charters book fast during peak season (December through April) and holiday weekends. A $500 deposit locks in your date and vessel — and it's refundable up to 14 days before your charter.",
    "bach.plan.p2":
      'Two to three months out: finalize headcount, pick your add-ons, and decide on a day versus sunset cruise. One month out: coordinate outfits with the bridal party, confirm dietary needs if adding a sushi chef, and share the itinerary with the group. One week out: confirm pickup logistics and send a "what to bring" list to everyone.',
    "bach.plan.p3":
      "For last-minute bookings, summer and midweek dates usually have availability with 3-4 weeks notice. Peak season weekends? Book as early as you can.",
    "bach.plan.tip":
      "Pro tip: Sunset cruises (departing 4-5 PM) give you the best of both worlds — daylight swimming at the sandbar followed by golden hour photos with the skyline.",
    "bach.itin.title": "The Perfect Itinerary",
    "bach.itin.intro":
      "Three ways to do it, depending on your group's vibe. Mix and match, or go all day.",
    "bach.itin.morning.title": "Morning / Afternoon",
    "bach.itin.morning.text":
      "Depart late morning and cruise to Haulover Sandbar or Nixon Sandbar. Anchor up in the shallows with floating mats, swim, and party in waist-deep water with 200+ other boats on weekends. Blast your playlist on the premium sound system while the crew keeps drinks cold. This is the classic Miami sandbar day — and it hits harder from a private yacht.",
    "bach.itin.sunset.title": "Sunset Cruise",
    "bach.itin.sunset.text":
      "Depart around 4-5 PM and cruise past Star Island, the Venetian Islands, and Millionaire's Row. Watch the sun set over Miami's skyline while the golden hour light makes every photo effortless. Add a live sax player and champagne for an elevated experience. This is the most popular bachelorette itinerary we run — it's the one that makes the group chat go silent because everyone's too busy posting.",
    "bach.itin.evening.title": "Evening / Night Cruise",
    "bach.itin.evening.text":
      "Depart after dark and see Miami's skyline lit up from the water. Cruise past the glowing towers of Brickell, downtown, and South Beach. The vibe shifts to full nightclub energy — DJ-level sound system, LED lighting on deck, and the city as your backdrop. Perfect as a pre-game before hitting the clubs, or as the main event itself.",
    "bach.included.title": "What's Included with Every Charter",
    "bach.included.intro":
      "Everything you need for a stress-free bachelorette party is on board from the moment you step on.",
    "bach.included.label": "Included in Your Charter",
    "bach.included.captain.title": "Your Private Yacht",
    "bach.included.captain.text":
      "A fully equipped vessel with everything you need for the perfect day on the water. Add a USCG-licensed captain and they handle the rest.",
    "bach.included.sound.title": "Premium Sound System",
    "bach.included.sound.text":
      "Bluetooth speakers throughout the yacht. Connect your phone and play your playlist at full volume — no noise limits on the water.",
    "bach.included.mats.title": "Floating Mats & Lily Pads",
    "bach.included.mats.text":
      "Oversized floating mats for lounging at the sandbar. Perfect for group photos and sunbathing on the water.",
    "bach.included.ice.title": "Ice, Coolers & Water",
    "bach.included.ice.text":
      "Fully stocked coolers with ice and water. Bring your own drinks — we keep everything cold all day.",
    "bach.included.glass.title": "Glassware & Cups",
    "bach.included.glass.text":
      "Champagne flutes, wine glasses, and cups on board. No need to bring disposable anything — we've got you covered.",
    "bach.included.toys.title": "Water Toys",
    "bach.included.toys.text":
      "Pool noodles, floats, and snorkel gear available on board. Everything you need to enjoy the water beyond the yacht.",
    "bach.addon.title": "Popular Add-Ons",
    "bach.addon.intro":
      "Upgrade your bachelorette from great to unforgettable. These are the add-ons our bachelorette groups book most.",
    "bach.addon.sax.title": "Live Saxophone",
    "bach.addon.sax.text":
      "A professional sax player sets the tone while you cruise. Smooth jazz over house beats, golden hour energy, and the kind of ambiance that makes the whole group put their phones down. Then pick them back up because they need to film it.",
    "bach.addon.sax.price": "From $350",
    "bach.addon.sushi.title": "Onboard Sushi Chef",
    "bach.addon.sushi.text":
      "A private sushi chef prepares fresh rolls on the yacht. Salmon, tuna, shrimp tempura — all made to order while you cruise. It's a full dining experience on the water, and it looks incredible on camera.",
    "bach.addon.sushi.price": "From $500",
    "bach.addon.jetski.title": "Jet Ski Rental",
    "bach.addon.jetski.text":
      "Two jet skis meet you at the sandbar for an hour of riding. No license needed in Florida for riders born before 1988 — everyone else takes a quick online course. Pure adrenaline between the champagne.",
    "bach.addon.jetski.price": "From $200",
    "bach.addon.decor.title": "Custom Decorations",
    "bach.addon.decor.text":
      'Rose gold balloons, "Bride" banners, flower arrangements, and matching color themes — all set up before you board. Our team handles everything so you walk into a fully decorated yacht.',
    "bach.addon.decor.price": "From $250",
    "bach.addon.photo.title": "Photographer Package",
    "bach.addon.photo.text":
      "A professional photographer captures the entire charter — candid moments, group shots, and those golden hour portraits. You get 100+ edited photos delivered within 48 hours.",
    "bach.addon.photo.price": "From $150",
    "bach.addon.champagne.title": "Champagne & Bottle Service",
    "bach.addon.champagne.text":
      "Champagne on ice when you board, plus premium bottle service throughout the cruise. Moet, Veuve, or Dom — we source whatever you want and have it cold and ready.",
    "bach.addon.champagne.price": "From $400",
    "bach.bring.title": "What to Bring",
    "bach.bring.intro":
      "Two checklists — one for the bride-to-be, one for the bridal party. Forward this to the group chat.",
    "bach.bring.bride": "Bride-to-Be",
    "bach.bring.party": "Bridal Party",
    "bach.bride.outfit.title": "White Outfit or Swimsuit",
    "bach.bride.outfit.text":
      "White swimsuit, cover-up, or matching set. You need to stand out in every photo — and you will.",
    "bach.bride.sunglasses.title": "Bride Sash & Sunglasses",
    "bach.bride.sunglasses.text":
      '"Bride" sash, tiara, or custom sunglasses. The more extra, the better the photos.',
    "bach.bride.phone.title": "Waterproof Phone Case",
    "bach.bride.phone.text":
      "You'll want your phone on you all day. A waterproof case keeps it safe at the sandbar and during splash moments.",
    "bach.bride.touch.title": "Touch-Up Kit",
    "bach.bride.touch.text":
      "Waterproof mascara, lip gloss, and dry shampoo. The salt air and sun do their thing — a quick touch-up keeps you camera-ready.",
    "bach.party.matching.title": "Matching Outfits",
    "bach.party.matching.text":
      "Coordinate a color — hot pink, black, or neon. Matching swimsuits or cover-ups make the group photos pop.",
    "bach.party.sunscreen.title": "Sunscreen (Reef-Safe)",
    "bach.party.sunscreen.text":
      "SPF 50+, reef-safe preferred. Reapply every 2 hours. Miami sun on the water is no joke — trust us.",
    "bach.party.props.title": "Photo Props & Signs",
    "bach.party.props.text":
      '"Last Sail Before the Veil" banner, custom koozies, silly glasses. Props go a long way on a yacht shoot. No balloons, glitter, or confetti.',
    "bach.party.cash.title": "Cash & ID",
    "bach.party.cash.text":
      "Bring your ID for boarding and cash for tips. Crew gratuity is customary (18-20%) and very much appreciated.",
    "bach.price.title": "Group Size & Pricing",
    "bach.price.intro":
      "Every charter is private — your group, your yacht. Pricing scales with group size and vessel type.",
    "bach.price.intimate.title": "Intimate",
    "bach.price.intimate.size": "2-8 guests",
    "bach.price.intimate.price": "$3,500+",
    "bach.price.party.title": "The Sweet Spot",
    "bach.price.party.size": "8-15 guests",
    "bach.price.party.price": "$4,500+",
    "bach.price.big.title": "Big Group",
    "bach.price.big.size": "16-25+ guests",
    "bach.price.big.price": "$6,000+",
    "bach.price.perHour": "4-hour minimum charter",
    "bach.price.note":
      "All pricing includes the yacht, sound system, floating mats, ice, coolers, and glassware. Captain and other add-ons are extra. Custom quotes for multi-day or special requests — just ask.",
    "bach.tips.label": "From Our Team",
    "bach.tips.title": "Insider Tips from Sasha",
    "bach.tips.tip1":
      "Book the sunset cruise. I say it every time because it's true — the golden hour photos from the water are unbeatable, and the energy shift from daylight to city lights is magic. It's our #1 bachelorette itinerary for a reason.",
    "bach.tips.tip2":
      "Coordinate outfits, but keep it comfortable. The yacht deck can be slippery when wet, so flat shoes or bare feet only. Skip the heels — trust me, you won't miss them once the music starts.",
    "bach.tips.tip3":
      "Add the sax player. I've seen 200+ bachelorette charters, and the groups that add live sax always say it was the highlight. Something about a saxophone over house beats on the open water just works.",
    "bach.tips.tip4":
      "Bring your own drinks and save the budget for add-ons. We provide ice, coolers, and glassware — so grab your champagne and rosé from Total Wine before you come. Then splurge on the sushi chef or photographer.",
    "bach.tips.tip5":
      "Designate one person as the booking contact. Too many cooks in the group chat makes planning harder. One person talks to us, collects payment from the group, and shares the details.",
    "bach.midCta.title": "Ready to start planning?",
    "bach.midCta.text":
      "Private yacht, floating mats, sound system, and the entire Miami coastline as your venue. Add a licensed captain and we handle the rest. Tell us your date and group size — we'll build the perfect bachelorette charter for you.",
    "bach.midCta.btn": "See Bachelorette Packages",
    "bach.faq.title": "Frequently Asked Questions",
    "bach.faq.q1": "How much does a bachelorette yacht party cost in Miami?",
    "bach.faq.a1":
      "A private bachelorette yacht charter with Emerald Eyes starts at $3,500 for 4 hours. That includes the yacht, premium sound system, floating mats, ice, coolers, and glassware. Most groups add a USCG-licensed captain (from $300). Popular add-ons like a live sax player ($350), sushi chef ($500), or jet skis ($200) are also available. Most bachelorette groups spend $4,000-$6,000 for a fully loaded 4-6 hour experience.",
    "bach.faq.q2": "How many people can fit on a bachelorette yacht?",
    "bach.faq.a2":
      "Our yachts accommodate groups of 2 to 25+ guests. The sweet spot for bachelorette parties is 8-15 people — large enough for a great party, intimate enough for everyone to enjoy the yacht. Groups over 13 may require a larger vessel at adjusted pricing.",
    "bach.faq.q3": "Can we bring our own alcohol on the yacht?",
    "bach.faq.a3":
      "Yes. Florida allows open containers on boats, so bring your own drinks. We provide ice, coolers, and glassware. No glass bottles — use cans or plastic. You can also add a champagne package or bottle service through us. The captain must stay under the 0.08% BAC limit.",
    "bach.faq.q4":
      "What is the best time of year for a bachelorette yacht party?",
    "bach.faq.a4":
      "Miami is a year-round destination. October through April offers the most comfortable weather with low humidity and calm seas. Summer (June-September) is hotter but brings fewer crowds and lower prices. Sunset cruises are stunning year-round. Book 2-3 months ahead during peak season.",
    "bach.faq.q5": "What should we wear on the yacht?",
    "bach.faq.a5":
      "Swimsuits with cover-ups are the standard. Many groups coordinate matching swimsuits — white for the bride, a color for the bridal party. Bring a change of clothes if you're going out after. Flat shoes or bare feet only on board — no heels.",
    "bach.faq.q6": "Where does the yacht cruise?",
    "bach.faq.a6":
      "The most popular bachelorette route cruises past Star Island and the celebrity mansions on Millionaire's Row, then anchors at Haulover Sandbar or Nixon Sandbar for swimming. Sunset cruises finish with the Miami skyline glowing at golden hour. Your captain can customize the route.",
    "bach.faq.q7": "How far in advance should we book?",
    "bach.faq.a7":
      "Book 2-3 months in advance for peak season (December-April) and holiday weekends. For summer and midweek dates, 3-4 weeks is usually sufficient. A $500 deposit secures your date.",
    "bach.faq.q8": "Can we bring decorations on the yacht?",
    "bach.faq.a8":
      "Yes — banners, sashes, photo props, flower arrangements, and signs are welcome. No balloons, glitter, or confetti, as these are prohibited to protect Miami's waters. We also offer a custom decorations add-on where our team handles setup before you arrive.",
    "bach.related.title": "Explore More",
    "bach.related.intro":
      "More guides and experiences from Emerald Eyes Miami.",
    "bach.related.experience": "Bachelorette Yacht Experience",
    "bach.related.haulover": "Haulover Sandbar Guide",
    "bach.related.sunset": "Sunset Cruise Experience",
    "bach.related.about": "About Emerald Eyes Miami",
    "bach.share.title": "Share with Your Group",
    "bach.share.text":
      "Send this guide to the bridal party group chat. Everyone will have the details they need — what to bring, what to wear, and what to expect.",

    // -- Cross-link & callout keys (added 2026-03-14) --
    "bach.costRef.title": "What It Costs",
    "bach.costRef.text":
      "Starting at $3,500 for 4 hours. See our full pricing breakdown",
    "bach.costRef.link": "Full pricing guide",
    "bach.perPerson.text":
      "$3,500 \u00F7 12 guests = ~$292/person \u2014 less than a night at LIV or E11EVEN",
    "bach.perPerson.label": "Per-Person Math",
    "bach.itin.morning.time": "11:00 AM \u2014 Depart the dock",
    "bach.itin.morning.time2": "12:00 PM \u2014 Arrive at Haulover Sandbar",
    "bach.itin.sunset.time": "4:00 PM \u2014 Depart for Star Island cruise",
    "bach.itin.sunset.time2": "5:30 PM \u2014 Golden hour photos",
    "bach.itin.evening.time": "7:00 PM \u2014 Depart for night cruise",
    "bach.itin.evening.time2": "8:30 PM \u2014 City lights skyline pass",
    "bach.itin.morning.schedule":
      "11 AM departure \u2192 12 PM sandbar arrival \u2192 2 PM Star Island cruise \u2192 3 PM return to dock",
    "bach.itin.sunset.schedule":
      "4 PM departure \u2192 5 PM Millionaire\u2019s Row \u2192 6 PM sunset photos \u2192 7:30 PM return",
    "bach.itin.evening.schedule":
      "7 PM departure \u2192 8 PM Brickell skyline \u2192 9 PM South Beach pass \u2192 10:30 PM return",
    "bach.tips.tip6":
      "Book as early as you can \u2014 especially for peak season (December through April) and holiday weekends. Saturdays in March and April fill up 3+ months out. Midweek dates and summer are more flexible, but the best vessels still go fast.",
    "bach.tips.tip7":
      "Miami weather is unpredictable. We monitor conditions 72 hours before your charter and will reach out if anything looks concerning. If rain or high winds force a reschedule, your deposit transfers to a new date at no extra charge. Summer afternoon thunderstorms usually clear by 5 PM \u2014 sunset cruises rarely get affected.",
    "bach.related.yachtPrices": "Yacht Charter Prices Guide",
    "bach.related.firstTimer": "First-Time Yacht Rental Guide",
    "bach.related.coastGuard": "Coast Guard & Safety Standards",
    "bach.related.jetSki": "Jet Ski License Guide for Miami",
    "bach.crosslink.pricing": "See our full yacht pricing breakdown \u2192",
    "bach.crosslink.firstTimer":
      "First time on a yacht? Read the essentials \u2192",
    "bach.crosslink.haulover": "Our complete Haulover Sandbar guide \u2192",
    "bach.crosslink.coastGuard":
      "How we exceed Coast Guard requirements \u2192",
    "bach.crosslink.jetSki": "Jet ski license rules in Florida \u2192",

    "bach.final.title": "This is the bachelorette she deserves.",
    "bach.final.text":
      "Private yacht. Licensed captain. The Miami skyline, golden hour, and a sound system loud enough for the whole sandbar to hear. This is the celebration your bride-to-be will talk about forever.",
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
    "cg.related.yachtPrices": "¿Cuanto Cuesta un Charter de Yate?",
    "cg.related.bachelorette": "Despedida de Soltera en Yate",
    "cg.related.firstTimer": "Guia para Principiantes en Yates",
    "cg.related.jetSki": "Requisitos de Licencia para Jet Ski",
    "cg.related.haulover": "Haulover Sandbar en Yate",
    "cg.xlink.pricing":
      "¿Cuanto cuesta un charter que cumple con todas las normas? Nuestra guia de precios explica exactamente por que pagas.",
    "cg.xlink.bachelorette":
      "¿Planeas un evento grupal? Mira como manejamos el cumplimiento del Coast Guard para despedidas de soltera y grupos grandes.",
    "cg.xlink.firstTimer":
      "¿Nunca has alquilado un yate? Nuestra guia para principiantes cubre todo, desde la reserva hasta el embarque.",
    "cg.xlink.jetSki":
      "¿Curioso sobre licencias de embarcaciones en Florida? Nuestra guia de jet ski explica el requisito de la Tarjeta de Educacion de Seguridad Nautica.",
    "cg.xlink.haulover":
      "¿Vas a Haulover Sandbar? Descubre que esperar en una de las rutas de charter mas populares de Miami.",
    "cg.checklist.title": "La Lista Completa de Inspeccion",
    "cg.checklist.intro":
      "Los oficiales del Coast Guard siguen un protocolo sistematico durante cada abordaje. Aqui esta todo lo que verifican fisicamente, revisan y documentan — y que especificamente causa que una embarcacion falle.",
    "cg.check.pfd.title": "Chalecos Salvavidas (PFDs)",
    "cg.check.pfd.pass":
      "Un PFD Tipo I, II o III aprobado por USCG por cada persona a bordo, incluyendo tripulacion. PFDs de tamano infantil requeridos para menores de 13.",
    "cg.check.pfd.fail":
      "Conteo incorrecto, tamano incorrecto para ninos, PFDs danados o almacenados en empaques sellados.",
    "cg.check.fire.title": "Extintores",
    "cg.check.fire.pass":
      "Numero correcto segun eslora. Indicador en verde. Etiqueta de inspeccion vigente. Boquilla limpia y pasador intacto.",
    "cg.check.fire.fail":
      "Fecha de inspeccion vencida, indicador en rojo o faltante, unidades descargadas, cilindro corroido o pasador faltante.",
    "cg.check.ring.title": "Dispositivo Arrojadizo (PFD Tipo IV)",
    "cg.check.ring.pass":
      "Un dispositivo arrojadizo Tipo IV — aro salvavidas o cojin arrojadizo — requerido para embarcaciones de 16 pies o mas. Debe ser inmediatamente accesible.",
    "cg.check.ring.fail":
      "Aro salvavidas enterrado bajo equipo. Cojin arrojadizo con espuma empapada. Sin dispositivo arrojadizo a bordo.",
    "cg.check.vds.title": "Senales de Socorro Visual",
    "cg.check.vds.pass":
      "Tres senales pirotecnicas dia/noche con fechas vigentes, O una luz electrica SOS mas tres senales diurnas.",
    "cg.check.vds.fail":
      "Bengalas vencidas (vencen 42 meses despues de fabricacion). Menos de tres senales. Sin senales a bordo.",
    "cg.check.sound.title": "Dispositivo Sonoro",
    "cg.check.sound.pass":
      "Un silbato o bocina audible a media milla nautica. Embarcaciones de 39.4 pies o mas tambien requieren una campana.",
    "cg.check.sound.fail":
      "Sin bocina o silbato a bordo. Bote de bocina de aire vacio. Campana faltante en embarcaciones grandes.",
    "cg.check.nav.title": "Luces de Navegacion",
    "cg.check.nav.pass":
      "Luces laterales roja/verde funcionales, luz de popa blanca y luz de tope. Lentes limpios y de color correcto.",
    "cg.check.nav.fail":
      "Bombillas quemadas, lentes agrietados, filtros de color incorrectos o luces mal cableadas.",
    "cg.check.placard.title": "Carteles y Documentacion Requeridos",
    "cg.check.placard.pass":
      "Cartel MARPOL de basura, cartel de descarga de aceite, resumen de reglas de navegacion. Registro o Certificado de Documentacion USCG a bordo y vigente.",
    "cg.check.placard.fail":
      "Carteles faltantes, registro vencido, documentacion que no coincide con el nombre o HIN de la embarcacion.",
    "cg.check.engine.title": "Compartimiento de Motor y Sentina",
    "cg.check.engine.pass":
      "Sin fugas de combustible. Sentina limpia y seca. Ventilacion funcional. Arrestallamas presente y limpio en motores de gasolina.",
    "cg.check.engine.fail":
      "Combustible visible en la sentina, soplador no funcional, arrestallamas faltante, lineas de combustible corroidas.",
    "cg.check.contract.title": "Contrato de Charter y Credenciales",
    "cg.check.contract.pass":
      "Contrato firmado con firmas de todas las partes. Credencial USCG del capitan a bordo y vigente. Documentacion de pruebas de drogas disponible.",
    "cg.check.contract.fail":
      "Contrato sin firmar o faltante. Credencial vencida. Nombre en contrato no coincide con el barco. Sin cumplimiento de pruebas de drogas.",
    "cg.fail.title": "Que Pasa Si Fallas una Inspeccion",
    "cg.fail.intro":
      "Fallar una inspeccion del Coast Guard no es un simple regano. Las consecuencias son inmediatas y escalan segun la gravedad de las violaciones encontradas.",
    "cg.fail.terminate.title": "Terminacion del Viaje",
    "cg.fail.terminate.text":
      "El Coast Guard puede ordenar que la embarcacion regrese a puerto inmediatamente. Tu charter se acabo. No hay opcion de corregirlo y seguir en el agua.",
    "cg.fail.fine.title": "Multas y Penalidades Civiles",
    "cg.fail.fine.text":
      "Penalidades civiles de hasta $25,000 por violacion bajo 46 U.S.C. § 3718. Multas de equipo de seguridad de $1,000 a $10,000. Capitan y propietario pueden ser multados independientemente.",
    "cg.fail.seize.title": "Detencion o Confiscacion de la Embarcacion",
    "cg.fail.seize.text":
      "Para violaciones serias, el Coast Guard puede detener la embarcacion en el muelle hasta que todas las deficiencias sean corregidas y reinspeccionadas.",
    "cg.fail.criminal.title": "Procesamiento Penal",
    "cg.fail.criminal.text":
      "En casos de negligencia intencional o incidentes con lesiones, el operador puede enfrentar cargos penales bajo 46 U.S.C. § 3718, incluyendo multas y encarcelamiento.",
    "cg.fail.captain.title": "Suspension de Credencial del Capitan",
    "cg.fail.captain.text":
      "Si el capitan opera sin credenciales validas o bajo la influencia, el USCG puede iniciar suspension y revocacion de su licencia. Esto puede terminar una carrera.",
    "cg.fail.insurance.title": "Implicaciones de Seguro",
    "cg.fail.insurance.text":
      "Una violacion documentada puede anular la cobertura de seguro maritimo, exponiendo a todos a bordo a responsabilidad financiera personal.",
    "cg.fail.closing":
      "Fallar una inspeccion puede significar multas, cargos penales, consecuencias que terminan carreras y perdida total de cobertura de seguro. Por eso importa elegir un operador que cumpla.",
    "cg.ee.title": "Lo Que Emerald Eyes Hace Diferente",
    "cg.ee.intro":
      "La mayoria de las empresas de charter dicen ser totalmente conformes. En Emerald Eyes, el cumplimiento no es una casilla — es la base de cada viaje que operamos.",
    "cg.ee.inspect.title":
      "Cada Embarcacion es Inspeccionada por el Coast Guard",
    "cg.ee.inspect.text":
      "Nuestras embarcaciones pasan inspecciones regulares de seguridad del Coast Guard y se mantienen para exceder los requisitos federales. El equipo de seguridad se verifica antes de cada salida — cada viaje.",
    "cg.ee.captains.title":
      "Capitanes Licenciados por USCG y con Pruebas de Drogas",
    "cg.ee.captains.text":
      "Cada capitan de Emerald Eyes tiene una credencial valida del USCG y esta inscrito en un programa de pruebas aleatorias de drogas y alcohol segun 46 C.F.R. Part 16.",
    "cg.ee.contract.title": "Documentacion Bareboat a Prueba de Balas",
    "cg.ee.contract.text":
      "Nuestros contratos estan redactados para resistir el escrutinio del Coast Guard. Cada acuerdo establece claramente la estructura bareboat y esta completamente ejecutado antes de salir del muelle.",
    "cg.ee.briefing.title": "Briefing de Seguridad Pre-Salida",
    "cg.ee.briefing.text":
      "Antes de cada charter, nuestro capitan realiza un briefing completo de seguridad cubriendo ubicaciones de chalecos, extintores, procedimientos de hombre al agua y protocolos de emergencia.",
    "cg.ee.equipment.title": "Equipo Que Supera los Estandares",
    "cg.ee.equipment.text":
      "Llevamos mas del equipo minimo requerido. PFDs extra, bengalas vigentes, extintores completamente cargados y botiquines en cada embarcacion.",
    "cg.ee.record.title": "Cero Inspecciones Fallidas",
    "cg.ee.record.text":
      "Emerald Eyes nunca ha fallado una inspeccion del Coast Guard. Ni una vez. Damos la bienvenida a los abordajes porque todo ya esta en orden antes de salir del muelle.",
    "cg.checklist.navTitle": "Lista Completa de Inspeccion",
    "cg.fail.navTitle": "Si Fallas",
    "cg.ee.navTitle": "Diferencia Emerald Eyes",
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
    "js.rules.speed.title": "Zonas de Velocidad Cerca de la Costa",
    "js.rules.speed.text":
      "Dentro de 300 pies de la costa, nadadores, muelles, embarcaderos o embarcaciones ancladas, la ley de Florida requiere velocidad m\u00EDnima / sin oleaje. En canales marcados y la V\u00EDa Intracostera, las zonas de velocidad lenta son estrictamente aplicadas. Las multas comienzan en $50 y pueden superar $500 por operaci\u00F3n imprudente cerca de la costa.",
    "js.rules.wildlife.title": "Zonas de Protecci\u00F3n de Vida Silvestre",
    "js.rules.wildlife.text":
      "La Bah\u00EDa de Biscayne tiene zonas federales protegidas de manat\u00EDes con restricciones de velocidad estacionales (t\u00EDpicamente de noviembre a marzo). Acosar mam\u00EDferos marinos \u2014 incluyendo perseguir delfines o acercarse a manat\u00EDes \u2014 viola la Ley de Protecci\u00F3n de Mam\u00EDferos Marinos con multas de hasta $11,000 por incidente.",
    "js.rules.buiPenalties.title": "Penalidades BUI en Detalle",
    "js.rules.buiPenalties.text":
      "Segunda infracci\u00F3n BUI: multa de $1,000\u2013$2,000, hasta 9 meses de c\u00E1rcel, confiscaci\u00F3n obligatoria de embarcaci\u00F3n por 10 d\u00EDas. Tercera infracci\u00F3n dentro de 10 a\u00F1os es delito grave de tercer grado: hasta 5 a\u00F1os de prisi\u00F3n, multa de $5,000. Rechazar la prueba de alcoholemia resulta en penalidad civil autom\u00E1tica de $500 y puede usarse como evidencia en tu contra.",
    // Jet Ski article — Mid CTA
    "js.midCta.title": "¿Quieres la Vista Sin las Reglas?",
    "js.midCta.text":
      "¿Te encanta la idea de navegar frente a las mansiones de Star Island y ver el skyline de Miami desde el agua — pero no quieres lidiar con certificaciones, reglas de chalecos salvavidas y toques de queda al atardecer? Un charter privado de Emerald Eyes Miami se encarga de todo. Nuestro capitán navega. Nuestra tripulación maneja los detalles. Tú solo subes a bordo con un trago en la mano. Sin licencia, sin tarjeta, sin complicaciones — solo las mejores vistas de Miami.",
    "js.midCta.btn": "Planifica Tu Charter",
    // Jet Ski article — Jet Skis from Your Yacht (ES)
    "js.yacht.eyebrow": "Yate + Jet Ski como Extra",
    "js.yacht.title": "Jet Skis Entregados a Tu Yate",
    "js.yacht.p1":
      "Esto es lo que la mayor\u00EDa no sabe: puedes agregar jet skis directamente a tu charter de Emerald Eyes Miami. Organizamos la entrega directo a tu yate en Haulover Sandbar o en cualquier lugar de la Bah\u00EDa de Biscayne \u2014 sin alquiler separado, sin manejar a una marina, sin esperar en fila.",
    "js.yacht.p2":
      "El extra cuesta $200 por hora por jet ski, entregado y recogido en la ubicaci\u00F3n de tu yate. Tu capit\u00E1n coordina los tiempos para que los jet skis lleguen exactamente cuando los quieras. Navega por una hora, dev\u00FAlvelos, y vuelve a relajarte en cubierta con un trago. Sin complicaciones de certificaci\u00F3n, sin drama de dep\u00F3sito \u2014 nosotros manejamos la log\u00EDstica.",
    "js.yacht.p3":
      "Es lo mejor de ambos mundos: la libertad del jet ski en la Bah\u00EDa de Biscayne con la comodidad de un yate privado como tu base flotante. Popular para despedidas de soltera, cumplea\u00F1os y grupos corporativos que quieren variedad sin el estr\u00E9s.",
    "js.yacht.tag1": "$200/hr por jet ski",
    "js.yacht.tag2": "Entregado a tu yate",
    "js.yacht.pricingLink": "Ver precios completos de charter",
    "js.yacht.sandbarLink": "Gu\u00EDa de Haulover Sandbar",
    // Jet Ski article — Best Spots (ES)
    "js.spots.title": "D\u00F3nde Navegar en Miami",
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
      "Para grupos, considera las cuentas: un jet ski cabe 1\u20132 personas a $150/hora cada uno. Un charter de Emerald Eyes Miami para 6\u201312 invitados empieza en alrededor de $2,500 \u2014 a menudo un mejor valor por persona con bebidas, m\u00FAsica, un capit\u00E1n profesional y cero complicaciones de certificaci\u00F3n.",
    "js.pricing.yachtPricesLink": "Desglose completo de precios de charter",
    "js.pricing.bacheloretteLink": "Paquetes de despedida de soltera",
    // Jet Ski article — Safety (ES)
    "js.safety.title": "Por Qu\u00E9 Importa la Tarjeta",
    "js.safety.p1":
      "Esto no es solo papeleo. Según la USCG y la FWC, Florida lidera consistentemente la nación en incidentes náuticos, con motos acuáticas representando una porción significativa. El condado de Miami-Dade regularmente se ubica entre los principales condados en incidentes de PWC. Más de la mitad son colisiones con otra embarcación.",
    "js.safety.stat1": "FL lidera la nación en incidentes náuticos",
    "js.safety.stat2": "de los operadores fatales sin educación náutica",
    "js.safety.stat3": "por un certificado temporal de 30 min",
    "js.safety.p2":
      "El n\u00FAmero que m\u00E1s importa: seg\u00FAn el informe de Estad\u00EDsticas de Navegaci\u00F3n Recreativa 2024 de la USCG, el 69% de las muertes ocurrieron en embarcaciones donde el operador no ten\u00EDa educaci\u00F3n de seguridad n\u00E1utica. El certificado temporal cubre reglas de derecho de paso, fundamentos de navegaci\u00F3n y procedimientos de emergencia. Son 30 minutos que podr\u00EDan salvar tu vida en la Bah\u00EDa de Biscayne.",
    "js.safety.coastGuardLink":
      "Aprende qu\u00E9 cubre una inspecci\u00F3n del Coast Guard",
    // Jet Ski article — Book Add-On CTA (ES)
    "js.bookAddon.title": "Agrega Jet Skis a Tu Charter",
    "js.bookAddon.p1":
      "Reserva un charter de Emerald Eyes Miami y agrega jet skis como extra por $200/hr. Los entregamos directo a tu yate en el banco de arena \u2014 t\u00FA navegas, nosotros nos encargamos de todo lo dem\u00E1s.",
    "js.bookAddon.p2":
      "Sin alquiler separado. Sin estr\u00E9s de certificaci\u00F3n. Sin drama de dep\u00F3sito. Solo d\u00EDnos al reservar y coordinaremos la entrega con tu capit\u00E1n.",
    "js.bookAddon.btn": "Reserva Tu Charter + Jet Skis",
    "js.bookAddon.firstTimeLink": "Gu\u00EDa para primer alquiler de yate",
    // Jet Ski article — FAQ (ES)
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
    // Jet Ski article — Related (ES)
    "js.related.title": "Explorar M\u00E1s",
    "js.related.yachtPrices":
      "Precios de Charter de Yate en Miami: Gu\u00EDa de Costos 2026",
    "js.related.sandbar": "Haulover Sandbar en Yate: Gu\u00EDa Completa",
    "js.related.firstTime": "Primer Alquiler de Yate: Qu\u00E9 Esperar",
    "js.related.bachelorette": "Despedida de Soltera en Yate en Miami",
    "js.related.coastGuard":
      "\u00BFQu\u00E9 Pasa Durante una Inspecci\u00F3n del Coast Guard?",
    "js.related.book": "Reserva Tu Charter",
    // Jet Ski article — Final CTA (ES)
    "js.cta.title": "Olv\u00EDdate de las complicaciones del jet ski.",
    "js.cta.text":
      "Las mismas vistas de la Bahía de Biscayne. Las mismas mansiones de Star Island. El mismo atardecer de Miami. Pero desde un yate privado de Emerald Eyes Miami con música, bebidas y espacio para relajarte — nuestro capitán se encarga de todo. Sin licencia necesaria. Sin certificación. Solo tú y el agua.",
    "js.cta.book": "Planifica Tu Charter",
    "js.cta.explore": "Ver Experiencias",
    // Blog listing — Haulover Sandbar card
    "blog.cat.destinations": "Destinos y Guias",
    "blog.hs.title": "Haulover Sandbar en Yate: La Guia Completa de Miami",
    "blog.hs.excerpt":
      "Todo lo que necesitas saber sobre visitar Haulover Sandbar en yate privado \u2014 mejores horarios, que traer, consejos de seguridad, reglas y como llegar con estilo.",
    "blog.hs.readTime": "18 min de lectura",
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
    // Haulover Sandbar article — The Sandbar Experience (ES)
    "hs.exp.navTitle": "La Experiencia",
    "hs.exp.title": "Como Es Realmente el Sandbar",
    "hs.exp.intro":
      "Leer sobre Haulover Sandbar y estar ahi son dos cosas diferentes. Asi es como se ve un dia tipico — desde el momento en que anclas hasta que navegas de regreso a casa.",
    "hs.exp.anchor.title": "Anclando",
    "hs.exp.anchor.text":
      "Tu capitan posiciona el yate en el lado sur del sandbar, donde el agua esta mas tranquila y la arena mas firme. El ancla de proa entra primero, luego la linea de popa mantiene el barco fijo. En cinco minutos ya estas listo — colchonetas en el agua, musica encendida y la plataforma de natacion abajo. La mayoria de los grupos estan caminando en el agua segundos despues de anclar.",
    "hs.exp.wade.title": "Caminar y Socializar",
    "hs.exp.wade.text":
      "El agua llega de la rodilla a la cintura en los bajos. La arena es suave, el agua es calida todo el ano (24–29°C), y la visibilidad suele ser de 3–5 metros. La gente camina entre barcos, flota en colchonetas, lanza balones y simplemente se queda de pie en el agua platicando. Es relajado — como una fiesta de alberca sin paredes.",
    "hs.exp.vendors.title": "Comida y Vendedores Flotantes",
    "hs.exp.vendors.text":
      "Los fines de semana, una flota de vendedores en kayaks y jet skis pasan entre los barcos vendiendo ceviche fresco, tacos de pescado, acai bowls, rebanadas de pizza y bebidas frias. Los precios van de $8–15 por producto. Solo efectivo — trae billetes chicos. Algunos vendedores tambien venden equipo de snorkel e inflables. Es una de las cosas mas divertidas y unicamente de Miami que experimentaras.",
    "hs.exp.party.title": "La Escena de Fiesta",
    "hs.exp.party.text":
      "Los fines de semana, el lado norte del sandbar se convierte en un festival de musica flotante. DJs tocan desde barcos anclados, la gente junta sus embarcaciones, y la energia crece desde la manana hasta el atardecer. El lado sur se mantiene mas tranquilo — familias, grupos pequenos y gente que solo quiere flotar. Tu capitan puede posicionarte en el lado que combine con tu vibra.",
    "hs.exp.firstTimerLink":
      "Primera vez en charter? Lee nuestra guia completa para principiantes →",
    // Haulover Sandbar article — Expanded timing (ES)
    "hs.time.season.title": "Mejor Temporada (Nov–May)",
    "hs.time.season.text":
      "La temporada seca del sur de Florida va de noviembre a mayo — menos lluvia, menos humedad y las condiciones mas tranquilas de la bahia. El verano tambien funciona, pero espera tormentas por la tarde (que usualmente se despejan a las 4 PM) y agua ligeramente mas agitada. El sandbar esta abierto todo el ano.",
    "hs.time.arrival.title": "Hora Ideal de Llegada",
    "hs.time.arrival.text":
      "Apunta a anclar entre las 10 AM y las 11:30 AM. Consigues los mejores lugares antes de la multitud, el sol esta lo suficientemente alto para ese color turquesa del agua, y tienes toda la tarde por delante. La hora dorada (4–6 PM) es la mejor luz para fotos. Salir alrededor del atardecer hace un regreso perfecto.",
    "hs.time.tideDetail":
      "🌊 Tip de mareas: Revisa la tabla de mareas de NOAA para Haulover Inlet (Estacion 8723178) la manana de tu viaje. La marea entrante trae el agua mas clara y las condiciones mas tranquilas. Durante una marea saliente fuerte, las corrientes cerca del inlet aumentan — tu capitan ajustara el anclaje segun corresponda.",
    "hs.time.bachLink":
      "Planeas una despedida de soltera? Ve nuestra guia de fiestas en yate →",
    // Haulover Sandbar article — How Much Does It Cost (ES)
    "hs.cost.navTitle": "Precios",
    "hs.cost.title": "Cuanto Cuesta?",
    "hs.cost.p1":
      "Un charter de yate privado a Haulover Sandbar comienza en $2,500 por un viaje de 4 horas con Emerald Eyes Miami. Eso incluye el yate, un capitan con licencia USCG, combustible, colchonetas flotantes, sistema de sonido premium, hielo, hieleras y agua embotellada. Tu traes la comida, las bebidas y tu grupo — hasta 12 invitados.",
    "hs.cost.p2":
      "Viajes mas largos (6–8 horas), extras premium como un saxofonista en vivo o chef de sushi privado, y embarcaciones mas grandes estan disponibles a precios mas altos. Sin cargos ocultos, sin recargos de combustible, sin sorpresas.",
    "hs.cost.priceLink": "Ver desglose completo de precios →",
    // Haulover Sandbar article — Emerald Eyes Advantage (ES)
    "hs.advantage.navTitle": "Por Que Emerald Eyes",
    "hs.advantage.label": "La Diferencia Emerald Eyes",
    "hs.advantage.title": "Por Que Charterear con Nosotros?",
    "hs.advantage.intro":
      "Puedes alquilar cualquier barco e ir al sandbar. Pero la diferencia de experiencia entre un alquiler cualquiera y un charter de Emerald Eyes es enorme. Esto es lo que realmente obtienes.",
    "hs.advantage.captain.title": "Capitanes con Licencia USCG",
    "hs.advantage.captain.text":
      "Cada charter de Emerald Eyes incluye un capitan que ha hecho cientos de viajes a Haulover Sandbar. Saben donde la arena es mas firme, donde la corriente es mas debil, y exactamente cuando llegar para el mejor posicionamiento. Tu no navegas, no anclas, no te preocupas.",
    "hs.advantage.gear.title": "Todo a Bordo",
    "hs.advantage.gear.text":
      "Colchonetas flotantes, sistema de sonido Bluetooth premium, hieleras con hielo, cristaleria real, agua embotellada y juguetes acuaticos. La mayoria de las companias de alquiler te dan un barco y un tanque de gasolina. Nosotros te damos la experiencia completa.",
    "hs.advantage.spot.title": "Mejores Lugares para Anclar",
    "hs.advantage.spot.text":
      "Nuestros capitanes llegan temprano y conocen los lugares exactos donde el agua es mas clara, la arena mas suave y la corriente minima. En un fin de semana concurrido, el posicionamiento lo es todo — y es lo primero que los novatos hacen mal.",
    "hs.advantage.vip.title": "VIP Sin Cuerda de Terciopelo",
    "hs.advantage.vip.text":
      "Llega en un yate privado con musica sonando mientras todos los demas dan vueltas buscando un lugar. No hay fila, no hay espera, no hay reservacion. Solo tu grupo, tu yate y el mejor asiento en el sandbar.",
    "hs.advantage.group.title": "Grupos Hasta 12",
    "hs.advantage.group.text":
      "Cumpleanos, despedidas de soltera, salidas corporativas o simplemente un fin de semana con amigos. Nuestras embarcaciones estan disenadas para grupos, con cubiertas abiertas, plataformas de natacion y mucha sombra. Todos caben comodamente.",
    "hs.advantage.stress.title": "Cero Logistica",
    "hs.advantage.stress.text":
      "Sin trailer, sin rampa, sin estacionamiento, sin navegacion, sin paradas de combustible, sin drama de ancla. Llega a la marina con tu hielera. Nosotros nos encargamos del resto. Ese es todo el punto.",
    "hs.advantage.closing":
      "El sandbar es gratis. Llegar de la forma correcta es por lo que estas pagando.",
    // Haulover Sandbar article — Jet ski cross-link (ES)
    "hs.addon.jetskiLink":
      "Necesitas licencia para andar en moto de agua en Miami? Lee nuestra guia →",
    // Haulover Sandbar article — Additional related links (ES)
    "hs.related.prices": "Guia de Precios de Yate en Miami",
    "hs.related.bachelorette": "Despedida de Soltera en Yate",
    "hs.related.firstTimer": "Guia para Primerizos de Alquiler de Yate",
    "hs.related.jetski": "Guia de Licencia de Moto de Agua",
    // Blog listing — First Time Yacht Rental card (ES)
    "blog.ft.title":
      "Primera Vez Alquilando un Yate en Miami? Todo lo que Necesitas Saber",
    "blog.ft.excerpt":
      "La guia completa para principiantes sobre charters de yate en Miami \u2014 proceso de reserva, que traer, etiqueta, seguridad, errores comunes a evitar, y todo lo que los primerizos necesitan saber.",
    "blog.ft.readTime": "12 min de lectura",
    // Blog listing — Yacht Prices card (ES)
    "blog.yp.title":
      "Precios de Alquiler de Yate en Miami: \u00bfCu\u00e1nto Cuesta Realmente?",
    "blog.yp.excerpt":
      "Todo el mundo lo busca en Google. Nadie da una respuesta directa. Aqu\u00ed tienes exactamente lo que cuesta un alquiler privado de yate en Miami \u2014 sin rangos vagos, sin cargos ocultos.",
    "blog.yp.readTime": "12 min de lectura",
    // Blog listing — Bachelorette card (ES)
    "blog.bach.title": "Despedida de Soltera en Yate en Miami",
    "blog.bach.excerpt":
      "La gu\u00eda definitiva para planificar una despedida de soltera en yate en Miami \u2014 itinerarios, precios, qu\u00e9 traer, extras, tama\u00f1o de grupo y consejos del equipo.",
    "blog.bach.readTime": "16 min de lectura",
    // First Time Yacht Rental article (ES) — Hero
    "ft.heroTitle":
      "Primera Vez Alquilando un Yate en Miami? Todo lo que Necesitas Saber",
    "ft.intro1":
      "Has visto los reels. Yates deslizandose por la Bahia de Biscayne, grupos brindando contra el atardecer, alguien haciendo un backflip desde la plataforma de nado. Se ve increible \u2014 y lo es. Pero si nunca has reservado un yate, el proceso puede parecer un misterio. Cuanto cuesta? Que te pones? Le das propina al capitan? Puedes traer tus propias bebidas?",
    "ft.intro2":
      "Esta guia responde cada pregunta que los principiantes hacen \u2014 desde como funciona la reserva hasta que traer, que no hacer, y por que Miami es la mejor ciudad del mundo para alquilar un yate por primera vez.",
    "ft.readTime": "12 min de lectura",
    "ft.guide.title": "En esta guia",
    "ft.cta.book": "Reserva Tu Primer Charter",
    // First Time (ES) — Quick Facts
    "ft.quick.title": "Datos rapidos",
    "ft.quick.price":
      "Charters desde $2,500 por 2\u20138 horas con capitan y tripulacion incluidos",
    "ft.quick.group":
      "Grupos de 2 a 25+ invitados \u2014 hay un yate para cada tamano de grupo",
    "ft.quick.included":
      "Capitan, tripulacion, sistema de sonido, colchonetas flotantes, hielo y hieleras incluidos",
    "ft.quick.noLicense":
      "No necesitas licencia nautica \u2014 tu capitan con licencia USCG se encarga de todo",
    // First Time (ES) — What to Expect
    "ft.expect.label": "Para Empezar",
    "ft.expect.title": "Que Esperar en Tu Primer Charter de Yate",
    "ft.expect.p1":
      "Un charter de yate en Miami es mas simple de lo que la mayoria piensa. Llegas a la marina, conoces a tu capitan y tripulacion, recibes una breve charla de seguridad, y en minutos estas en el agua. De ahi, el dia es tuyo \u2014 navega a un banco de arena, ancla frente a Star Island, mira un atardecer desde mar abierto, o simplemente flota con musica y bebidas frias.",
    "ft.expect.p2":
      "Tu capitan maneja toda la navegacion, anclaje y operaciones del barco. La tripulacion mantiene la musica, prepara las colchonetas flotantes y juguetes acuaticos, y se asegura de que todos la pasen bien. No necesitas saber nada de barcos.",
    "ft.expect.p3":
      "La mayoria de los invitados primerizos se sorprenden de lo relajada que es toda la experiencia. No hay codigo de vestimenta formal, no hay protocolo rigido, no hay asientos asignados. Basicamente estas en un salon flotante privado con un equipo profesional haciendo que todo funcione detras de escena.",
    "ft.expect.tag1": "Sin experiencia necesaria",
    "ft.expect.tag2": "Capitan incluido",
    "ft.expect.tag3": "Todas las edades",
    "ft.expect.linkHaulover": "Ruta popular: Guia de Haulover Sandbar",
    "ft.expect.linkBach": "Planeas una despedida de soltera? Lee nuestra guia",
    // First Time (ES) — How Much Does It Cost?
    "ft.pricing.title": "Cuanto Cuesta?",
    "ft.pricing.intro":
      "La pregunta numero uno de los principiantes. Aqui tienes una respuesta rapida — con enlace al desglose completo de precios.",
    "ft.pricing.starting.title": "Desde ,500 por 4 horas",
    "ft.pricing.starting.text":
      "Eso incluye yate privado con capitan, tripulacion, sistema de sonido, colchonetas flotantes, hielo y hieleras — todo incluido. Sin cargos ocultos, sin sorpresas. Cruceros de 2 horas al atardecer empiezan mas bajo, y aventuras de dia completo van mas alto dependiendo del tamano del yate y extras.",
    "ft.pricing.includes.captain": "Capitan con licencia USCG",
    "ft.pricing.includes.crew": "Tripulacion profesional",
    "ft.pricing.includes.gear": "Todo el equipo incluido",
    "ft.pricing.detail":
      "Extras como saxofonista en vivo, chef de sushi, jet skis o servicio de botellas se cobran aparte. La mayoria de los grupos gastan \,500–\,000 en total por una tarde completa en el agua. Precios de fin de semana y feriados pueden variar.",
    "ft.pricing.link": "Ver el desglose completo de precios",
    // First Time (ES) — Bareboat vs Crewed
    "ft.charter.label": "Conoce la Diferencia",
    "ft.charter.title": "Bareboat vs. Charter con Tripulacion",
    "ft.charter.p1":
      "En el mundo de los yates, \u201Cbareboat\u201D significa que alquilas la embarcacion \u2014 y el operador proporciona el capitan y la tripulacion. No es lo mismo que navegar solo. En Emerald Eyes, cada charter incluye un capitan con licencia USCG y tripulacion profesional, asi que incluso nuestro modelo bareboat viene completamente tripulado.",
    "ft.charter.p2":
      "Un \u201Ccharter con tripulacion\u201D en el sentido tradicional generalmente significa un viaje de varios dias en un yate mas grande con capitan, chef y azafata a bordo \u2014 piensa en viajes de una semana por el Caribe. Para charters de dia en Miami, el modelo bareboat con capitan proporcionado es estandar y te da lo mejor de ambos mundos: tripulacion profesional manejando el barco, y libertad total para que disfrutes la experiencia.",
    "ft.charter.p3":
      "En resumen: no necesitas licencia nautica, no necesitas experiencia, y no tienes que preocuparte por la navegacion o el atraque. Solo presentate.",
    "ft.charter.note":
      "Cada charter de Emerald Eyes incluye un capitan con licencia USCG y tripulacion entrenada \u2014 sin importar el paquete.",
    // First Time (ES) — Your Captain Handles Everything
    "ft.captain.title": "Tu Capitan Se Encarga de Todo",
    "ft.captain.intro":
      "Los primerizos a menudo se preguntan de que son responsables en el agua. La respuesta es simple: nada. Tu capitan con licencia USCG y tripulacion profesional manejan cada detalle para que puedas relajarte.",
    "ft.captain.nav.title": "Navegacion y Ruta",
    "ft.captain.nav.text":
      "Tu capitan planifica y conduce toda la ruta \u2014 desde la salida hasta Haulover Sandbar, Star Island, o donde quieras ir. Conocen los canales, las zonas sin oleaje y los mejores puntos para anclar.",
    "ft.captain.anchor.title": "Anclaje y Atraque",
    "ft.captain.anchor.text":
      "Poner el ancla en el banco de arena, reposicionar para el atardecer y atracar de vuelta en la marina \u2014 todo lo maneja el capitan. Tu nunca tocas una cuerda ni una cornamusa.",
    "ft.captain.weather.title": "Monitoreo del Clima",
    "ft.captain.weather.text":
      "Tu capitan revisa los pronosticos marinos antes de la salida y monitorea las condiciones durante todo el viaje. Si el clima cambia, ajustaran la ruta o encontraran un lugar protegido \u2014 sin necesidad de que tu decidas nada.",
    "ft.captain.safety.title": "Seguridad y Cumplimiento",
    "ft.captain.safety.text":
      "Charla de seguridad pre-salida, inventario de chalecos salvavidas, protocolos de emergencia y cumplimiento total con la Guardia Costera. Tu capitan tiene pruebas de drogas, licencia USCG y experiencia en aguas de Miami.",
    "ft.captain.crew.title": "Servicio de Tripulacion",
    "ft.captain.crew.text":
      "La tripulacion mantiene la musica, sirve bebidas, prepara colchonetas flotantes y juguetes acuaticos, y se asegura de que cada invitado este comodo. Piensa en ellos como tu equipo personal de hospitalidad en el agua.",
    "ft.captain.local.title": "Conocimiento Local",
    "ft.captain.local.text":
      "Los mejores bancos de arena, los fondeaderos mas tranquilos, el angulo perfecto del atardecer \u2014 tu capitan conoce las aguas de Miami por dentro y por fuera. Ajustaran la ruta al ambiente de tu grupo y haran sugerencias en tiempo real.",
    "ft.captain.note":
      "Cada charter incluye capitan y tripulacion. No necesitas experiencia nautica, licencia, ni siquiera un plan \u2014 solo presentate y disfruta.",
    "ft.captain.cgLink":
      "Aprende mas: Como las inspecciones de la Guardia Costera te protegen",
    // First Time (ES) — Booking Process
    "ft.booking.title": "El Proceso de Reserva",
    "ft.booking.intro":
      "Desde el primer clic hasta subir a bordo \u2014 asi es exactamente como funciona.",
    "ft.booking.step1.title": "Elige Tu Experiencia",
    "ft.booking.step1.text":
      "Explora nuestras experiencias \u2014 crucero al atardecer, Haulover Sandbar, fiesta privada, despedida de soltera, o arma la tuya. Cada una viene con un itinerario sugerido, pero todo es personalizable.",
    "ft.booking.step2.title": "Escoge Fecha y Duracion",
    "ft.booking.step2.text":
      "Selecciona tu fecha y duracion del charter. Las opciones van desde cruceros de 2 horas al atardecer hasta aventuras de dia completo. Los dias entre semana suelen tener mejor disponibilidad y aguas mas tranquilas.",
    "ft.booking.step3.title": "Selecciona Extras",
    "ft.booking.step3.text":
      "Hazlo tuyo. Agrega un saxofonista en vivo, chef de sushi, jet skis, servicio de botellas, hookah o un fotografo profesional. O mantenlo simple \u2014 el paquete base ya incluye todo lo que necesitas.",
    "ft.booking.step4.title": "Presentate y Disfruta",
    "ft.booking.step4.text":
      "Llega a la marina 15 minutos antes, conoce a tu capitan, recibe una breve charla de seguridad, y listo. Nosotros nos encargamos del resto \u2014 tu solo diviertete.",
    "ft.booking.linkJetski":
      "Agregando jet skis? Verifica si necesitas licencia",
    "ft.booking.linkPrices": "Ver desglose completo de precios",
    // First Time (ES) — What to Bring
    "ft.bring.title": "Que Traer (y Que Proporcionamos Nosotros)",
    "ft.bring.intro":
      "Nosotros tenemos el yate cubierto. Esto es lo que debes empacar \u2014 y lo que puedes dejar en casa.",
    "ft.bring.you": "Tu Traes",
    "ft.bring.we": "Nosotros Proporcionamos",
    "ft.bring.sunscreen.title": "Protector Solar",
    "ft.bring.sunscreen.text":
      "Preferiblemente reef-safe. El sol sobre el agua es dos veces mas fuerte. Reaplica cada 90 minutos.",
    "ft.bring.swimsuit.title": "Traje de Bano y Toalla",
    "ft.bring.swimsuit.text":
      "Probablemente estaras entrando y saliendo del agua. Trae ropa de cambio si quieres estar seco despues.",
    "ft.bring.cash.title": "Efectivo para Propinas",
    "ft.bring.cash.text":
      "15\u201320% para tu capitan y tripulacion es estandar en la industria de charters. Ellos trabajan duro para hacer tu dia perfecto.",
    "ft.bring.id.title": "Identificacion Valida",
    "ft.bring.id.text":
      "Trae una identificacion oficial con foto. Requerida para el registro y si vas a traer alcohol a bordo.",
    "ft.provide.captain.title": "Capitan Licenciado",
    "ft.provide.captain.text":
      "Con licencia USCG e inspeccion de la Guardia Costera. Tu capitan conoce cada fondeadero, banco de arena y punto de atardecer en Miami.",
    "ft.provide.crew.title": "Tripulacion Profesional",
    "ft.provide.crew.text":
      "Tripulacion de hospitalidad entrenada para mantener la musica, servir bebidas, preparar juguetes y asegurar que todos esten comodos.",
    "ft.provide.sound.title": "Sistema de Sonido",
    "ft.provide.sound.text":
      "Bocinas Bluetooth premium en todo el yate. Conecta tu telefono y pon tu propia playlist todo el dia.",
    "ft.provide.ice.title": "Hielo y Hieleras",
    "ft.provide.ice.text":
      "Hieleras con hielo y agua. Trae tus propias bebidas y snacks \u2014 nosotros mantenemos todo frio.",
    "ft.provide.toys.title": "Juguetes Acuaticos y Colchonetas",
    "ft.provide.toys.text":
      "Colchonetas flotantes, churros y juguetes acuaticos incluidos en cada charter. Perfectos para dias en el banco de arena.",
    "ft.provide.safety.title": "Equipo de Seguridad",
    "ft.provide.safety.text":
      "Chalecos salvavidas para todas las edades, botiquin de primeros auxilios, extintor, y todo el equipo de seguridad requerido por la USCG.",
    // First Time (ES) — What to Wear
    "ft.wear.title": "Que Ponerse",
    "ft.wear.intro":
      "No hay codigo de vestimenta en un charter de yate \u2014 pero esto es lo que realmente funciona.",
    "ft.wear.casual.title": "Dia / Banco de Arena",
    "ft.wear.casual.text":
      "Traje de bano, pareo, chancletas o sandalias. Estaras en el agua la mayor parte del dia. Trae gorra y lentes de sol \u2014 el reflejo del agua es intenso.",
    "ft.wear.evening.title": "Atardecer / Crucero Nocturno",
    "ft.wear.evening.text":
      "Smart casual funciona perfecto. Vestido ligero o camisa de lino, sandalias bonitas. Trae una capa ligera \u2014 la brisa aumenta despues del atardecer y puede refrescar en el agua.",
    "ft.wear.shoes.title": "Regla de Calzado",
    "ft.wear.shoes.text":
      "Solo zapatos de suela blanda o pies descalzos en el yate. Las suelas duras y tacones pueden danar la cubierta. Deja los tenis y zapatos de vestir en el carro.",
    // First Time (ES) — Etiquette
    "ft.etiquette.title": "Etiqueta de Yate para Principiantes",
    "ft.etiquette.intro":
      "Nadie espera que sepas el protocolo de yates. Pero estas cuatro reglas simples te haran parecer un invitado experimentado.",
    "ft.etiquette.shoes.title": "Zapatos Fuera a Bordo",
    "ft.etiquette.shoes.text":
      "Es la regla numero uno en cada yate. Quitense los zapatos antes de pisar la cubierta. La tripulacion les mostrara donde dejarlos. Esto protege la teca y las superficies antideslizantes.",
    "ft.etiquette.time.title": "Se Puntual",
    "ft.etiquette.time.text":
      "Llega 15 minutos antes de la salida. El reloj del charter comienza a tu hora confirmada, no cuando llegas. Llegar tarde significa menos tiempo en el agua \u2014 para todos.",
    "ft.etiquette.tip.title": "Propina a Tu Tripulacion",
    "ft.etiquette.tip.text":
      "15\u201320% del costo del charter es estandar. Efectivo es preferido, dividido entre el capitan y la tripulacion. Una gran tripulacion hace la experiencia \u2014 demuestra que lo notaste.",
    "ft.etiquette.respect.title": "Respeta la Tripulacion y la Embarcacion",
    "ft.etiquette.respect.text":
      "La tripulacion esta ahi para hacer tu dia increible, no para recibir ordenes. Tratalos como tratarias a un anfitrion en su casa. No entres al timon o areas del motor, y sigue las instrucciones del capitan en todo momento.",
    // First Time (ES) — Common Mistakes
    "ft.mistakes.title": "Errores Comunes que Debes Evitar",
    "ft.mistakes.intro":
      "Lo hemos visto todo. Aqui estan los errores mas comunes de principiantes \u2014 y como evitarlos.",
    "ft.mistakes.short.title": "Reservar Muy Poco Tiempo",
    "ft.mistakes.short.text":
      "Un charter de 2 horas suena bien en papel, pero para cuando abordas, navegas, anclas y disfrutas el agua, ya es hora de regresar. Para un dia en el banco de arena o fiesta, 4 horas es el punto ideal. 6\u20138 horas si quieres realmente relajarte.",
    "ft.mistakes.crowd.title": "Demasiadas Personas",
    "ft.mistakes.crowd.text":
      "Cada yate tiene una capacidad legal de pasajeros establecida por la Guardia Costera. Llegar con personas extra significa que alguien no podra subir. Confirma tu numero de invitados al reservar y mantenlo.",
    "ft.mistakes.sun.title": "Subestimar el Sol",
    "ft.mistakes.sun.text":
      "El sol se refleja en el agua desde todos los angulos. Los primerizos consistentemente lo subestiman. Trae SPF 50+, un sombrero y reaplica seguido. La deshidratacion es real \u2014 toma agua entre bebidas.",
    "ft.mistakes.glass.title": "Traer Botellas de Vidrio",
    "ft.mistakes.glass.text":
      "El vidrio en un barco es un riesgo de seguridad. Vidrio roto en una cubierta mojada es peligroso, y fragmentos en el agua son peor. Pasa las bebidas a latas o plastico antes de abordar. La mayoria de companias de yates no permiten vidrio a bordo.",
    "ft.mistakes.weather.title": "No Revisar el Clima",
    "ft.mistakes.weather.text":
      "El clima de Miami cambia rapido. No esperes hasta estar en la marina para revisar el pronostico. Mira las condiciones marinas el dia anterior y la manana del viaje. Tu capitan tambien monitorea el clima \u2014 pero si las condiciones se ven dificiles, contactanos temprano para reprogramar antes de que manejes al muelle.",
    "ft.mistakes.headcount.title": "No Confirmar el Numero de Invitados",
    "ft.mistakes.headcount.text":
      "Cada yate tiene un limite estricto de pasajeros de la Guardia Costera. Si tu grupo llega con mas personas de las reservadas, alguien se queda en el muelle. Confirma tu numero final de invitados 48 horas antes de la salida y avisanos de cualquier cambio \u2014 a veces podemos acomodar en una embarcacion mas grande.",
    // First Time (ES) — Seasickness Tips
    "ft.seasick.title": "Consejos para el Mareo",
    "ft.seasick.intro":
      "Te preocupa marearte? Es mas comun de lo que la gente admite \u2014 pero tambien es facil de prevenir. Esto es lo que funciona.",
    "ft.seasick.deck.title": "Quedate en la Cubierta",
    "ft.seasick.deck.text":
      "Aire fresco y un horizonte abierto son la mejor prevencion. Quedate en la cubierta superior o la proa donde puedas sentir la brisa. Evita ir bajo cubierta por periodos prolongados \u2014 el espacio cerrado y la falta de referencia visual lo empeora.",
    "ft.seasick.horizon.title": "Mira el Horizonte",
    "ft.seasick.horizon.text":
      "Tu oido interno detecta el movimiento, pero tus ojos necesitan un punto de referencia fijo para coincidir. Mira el horizonte o la costa \u2014 no tu telefono. Desplazarte en una pantalla mientras el barco se mueve es camino rapido a sentirte mal.",
    "ft.seasick.ginger.title": "Jengibre y Remedios",
    "ft.seasick.ginger.text":
      "Caramelos de jengibre, ginger ale o masticables de jengibre son un remedio natural que realmente funciona. Dramamine o Bonine tomados 30\u201360 minutos antes de abordar son las opciones de venta libre mas populares. Las Sea-Bands (pulseras de acupresion) tambien ayudan a algunas personas.",
    "ft.seasick.meals.title": "Evita Comidas Pesadas Antes",
    "ft.seasick.meals.text":
      "No abordes con el estomago vacio, pero tampoco comas una comida enorme. Una comida ligera y no grasosa una hora antes de la salida es ideal. Evita la comida picante y los lacteos pesados. Mantente hidratado \u2014 la deshidratacion amplifica los sintomas del mareo.",
    "ft.seasick.note":
      "La mayoria de los invitados en charters de dia en Miami nunca se marean \u2014 las aguas de la Bahia de Biscayne son calmas y protegidas. Pero si eres propenso al mareo, estos consejos hacen una diferencia real.",
    // First Time (ES) — Safety
    "ft.safety.title": "Seguridad a Bordo",
    "ft.safety.intro":
      "Tu seguridad es la prioridad numero uno \u2014 y en un charter con tripulacion profesional, el capitan se encarga de todo.",
    "ft.safety.briefing.title": "Charla de Seguridad Pre-Salida",
    "ft.safety.briefing.text":
      "Antes de salir del muelle, tu capitan te mostrara la ubicacion de los chalecos salvavidas, extintores, salidas de emergencia y las reglas basicas de la embarcacion. Toma cinco minutos y es importante.",
    "ft.safety.jackets.title": "Chalecos Salvavidas para Todos",
    "ft.safety.jackets.text":
      "Chalecos salvavidas aprobados por la Guardia Costera en todas las tallas a bordo \u2014 incluyendo tallas infantiles. No tienes que usar uno mientras navegas, pero son requeridos para ninos menores de 6 anos y estan disponibles cuando quieras.",
    "ft.safety.captain.title": "Tu Capitan Se Encarga de Todo",
    "ft.safety.captain.text":
      "Navegacion, monitoreo del clima, anclaje, atraque y protocolos de emergencia \u2014 todo eso es responsabilidad de tu capitan. Tienen licencia USCG, pruebas de drogas y experiencia en aguas de Miami. Tu enfocate en divertirte; ellos se enfocan en llevar a todos a casa seguros.",
    "ft.safety.cgLink":
      "Lee mas: Seguridad de la Guardia Costera e Inspecciones de Bareboat",
    // First Time (ES) — Mid CTA
    "ft.midCta.title": "Listo para Tu Primer Charter?",
    "ft.midCta.text":
      "Emerald Eyes lo hace facil. Capitan licenciado, tripulacion profesional, todo el equipo incluido. Solo elige tu fecha y presentate \u2014 nosotros nos encargamos de todo lo demas.",
    "ft.midCta.btn": "Planifica Tu Charter",
    // First Time (ES) — FAQ
    "ft.faq.title": "Preguntas Frecuentes de Principiantes",
    "ft.faq.intro":
      "Preguntas reales de invitados primerizos reales. Si la tuya no esta aqui, escribenos por WhatsApp \u2014 respondemos en una hora.",
    "ft.faq.q1":
      "Necesito una licencia nautica para alquilar un yate en Miami?",
    "ft.faq.a1":
      "No. Cada charter de Emerald Eyes incluye un capitan con licencia USCG que maneja toda la navegacion y operaciones del barco. No necesitas experiencia nautica ni certificaciones.",
    "ft.faq.q2": "Puedo traer mi propia comida y bebidas?",
    "ft.faq.a2":
      "Si. La mayoria de los invitados traen su propia hielera con bebidas y snacks. Nosotros proporcionamos hielo, hieleras y vasos. No botellas de vidrio \u2014 solo latas y plastico. Tambien puedes agregar paquetes de catering como chef de sushi o servicio de botellas.",
    "ft.faq.q3": "Con cuanta anticipacion debo reservar?",
    "ft.faq.a3":
      "Para la mejor seleccion, reserva 1\u20132 semanas antes para charters entre semana y 2\u20133 semanas antes para fines de semana. La temporada alta (noviembre a abril) y los feriados pueden agotarse con un mes o mas de anticipacion.",
    "ft.faq.q4": "Que pasa si el clima esta malo?",
    "ft.faq.a4":
      "Monitoreamos el clima de cerca. Si las condiciones no son seguras, reprogramaremos tu charter sin costo adicional. La lluvia ligera generalmente pasa rapido en Miami \u2014 tu capitan tomara la decision la manana de tu viaje.",
    "ft.faq.q5": "Es seguro traer ninos a un yate?",
    "ft.faq.a5":
      "Absolutamente. Tenemos chalecos salvavidas en tallas infantiles, y nuestra tripulacion tiene experiencia con familias. Los ninos menores de 6 anos deben usar chaleco salvavidas en todo momento. Las experiencias en el banco de arena son especialmente populares con familias.",
    "ft.faq.q6": "Cuanto debo dar de propina al capitan y tripulacion?",
    "ft.faq.a6":
      "15\u201320% del costo total del charter es estandar en la industria. Efectivo es preferido y se puede dar directamente al capitan al final del viaje, quien lo dividira con la tripulacion.",
    "ft.faq.q7": "Cual es la politica de cancelacion?",
    "ft.faq.a7":
      "Cancelaciones con mas de 48 horas de anticipacion reciben reembolso completo. Dentro de 48 horas, tu deposito puede aplicarse a una fecha futura. Las cancelaciones por clima siempre se reprograman sin costo.",
    "ft.faq.q8": "Puedo poner mi propia musica?",
    "ft.faq.a8":
      "Si. Cada yate tiene un sistema de sonido Bluetooth premium. Conecta tu telefono y se el DJ todo el viaje. Tambien tenemos playlists curadas si prefieres simplemente disfrutar el ambiente.",
    // First Time (ES) — Related & Final CTA
    "ft.related.title": "Sigue Leyendo",
    "ft.related.intro":
      "Mas guias para ayudarte a planificar el dia perfecto en el agua.",
    "ft.related.coastGuard":
      "Seguridad de la Guardia Costera e Inspecciones de Bareboat",
    "ft.related.bachelorette":
      "Despedida de Soltera en Yate: Guia de Planificacion",
    "ft.related.haulover": "Haulover Sandbar en Yate: La Guia Completa",
    "ft.related.jetski": "Necesitas Licencia para Manejar un Jet Ski en Miami?",
    "ft.related.prices": "Precios de Charter de Yate en Miami: Que Esperar",
    "ft.related.experience": "Ver Todas las Experiencias",
    "ft.cta.title": "Tu primera vez en un yate deberia sentirse sin esfuerzo.",
    "ft.cta.text":
      "Yate privado. Capitan licenciado. Sistema de sonido, colchonetas flotantes, y una tripulacion que maneja cada detalle. Todo lo que tienes que hacer es presentarte.",
    "ft.cta.explore": "Ver Experiencias",
    // Yacht Prices article (ES)
    "yp.heroTitle":
      "Precios de Alquiler de Yate en Miami: Cuanto Cuesta Realmente?",
    "yp.readTime": "12 min de lectura",
    "yp.intro1":
      "Todo el mundo lo busca en Google. Nadie da una respuesta directa. Eso cambia hoy. Aqui tienes exactamente lo que cuesta un alquiler privado de yate en Miami — sin rangos vagos, sin cargos ocultos, sin sorpresas.",
    "yp.intro2":
      "Llevamos anos operando charters desde North Miami. Esta guia desglosa tarifas base, que esta incluido, extras populares y las mejores formas de obtener mas por tu dinero.",
    "yp.hero.seeBreakdown": "Ver el Desglose",
    "yp.cta.getQuote": "Pedir Cotizacion",
    "yp.cta.experiences": "Ver Experiencias",
    "yp.quick.title": "Precios de un vistazo",
    "yp.quick.starting": "Desde $2,500 por un charter de 4 horas",
    "yp.quick.minimum": "Minimo de 4 horas en todas las reservas",
    "yp.quick.included":
      "Capitan, tripulacion, combustible, sonido y juguetes incluidos",
    "yp.quick.peak": "Temporada alta: diciembre a abril",
    "yp.nav.title": "En esta guia",
    "yp.nav.shortAnswer": "La Respuesta Corta",
    "yp.nav.included": "Que Esta Incluido",
    "yp.nav.duration": "Duracion y Precios",
    "yp.nav.addons": "Costos de Extras",
    "yp.nav.captain": "Tu Capitan y Tripulacion",
    "yp.nav.factors": "Factores que Afectan el Precio",
    "yp.nav.save": "Como Ahorrar",
    "yp.nav.tipping": "Guia de Propinas",
    "yp.nav.faq": "Preguntas Frecuentes",
    "yp.short.title": "La Respuesta Corta",
    "yp.short.p1":
      "Un charter privado de yate en Miami comienza en $2,500 por 4 horas con Emerald Eyes. Eso incluye capitan con licencia USCG, tripulacion profesional, combustible para recorridos locales, sistema de sonido premium, hielo, neveras, colchonetas flotantes, juguetes acuaticos, agua embotellada y cristaleria.",
    "yp.short.p2":
      "Para comparar: en el mercado de Miami, los charters de yate van desde aproximadamente $1,000 hasta $15,000+ por medio dia dependiendo del tamano del barco, antiguedad y nivel de servicio. La amplia gama se debe a si estas en una lancha de 30 pies o un superyate de 100 pies.",
    "yp.short.p3":
      "En Emerald Eyes operamos una flota seleccionada de embarcaciones bien mantenidas en el rango de 40-65 pies — el punto ideal para grupos de 2 a 15 que desean una experiencia de lujo sin el precio de un superyate.",
    "yp.short.note":
      "Sin cargos ocultos. El precio que cotizamos es el precio que pagas. La propina para tu tripulacion es el unico costo adicional y siempre queda a tu discrecion.",
    "yp.included.label": "Cada Charter",
    "yp.included.title": "Que Esta Incluido en Tu Precio",
    "yp.included.intro":
      "Cada charter de Emerald Eyes viene con todo lo que necesitas para un dia perfecto en el agua. Sin cargos sorpresa, sin ventas adicionales en el muelle.",
    "yp.inc.captain.title": "Capitan y Tripulacion con Licencia",
    "yp.inc.captain.text":
      "Capitan con licencia USCG y tripulacion profesional que conocen cada rincon de Biscayne Bay.",
    "yp.inc.sound.title": "Sistema de Sonido Premium",
    "yp.inc.sound.text":
      "Parlantes marinos con Bluetooth. Pon tu playlist todo el dia.",
    "yp.inc.fuel.title": "Combustible para Recorridos Locales",
    "yp.inc.fuel.text":
      "Rutas estandar de Miami incluyendo Haulover Sandbar, Star Island y Key Biscayne.",
    "yp.inc.ice.title": "Hielo, Neveras y Montaje",
    "yp.inc.ice.text":
      "Neveras industriales con hielo para que tus bebidas se mantengan frias de muelle a muelle.",
    "yp.inc.mats.title": "Colchonetas Flotantes",
    "yp.inc.mats.text":
      "Grandes colchonetas flotantes para relajarte en el agua en las paradas del sandbar.",
    "yp.inc.toys.title": "Juguetes Acuaticos",
    "yp.inc.toys.text":
      "Paddleboards, fideos flotantes e inflables para todos a bordo.",
    "yp.inc.water.title": "Agua Embotellada",
    "yp.inc.water.text": "Agua embotellada de cortesia durante todo tu viaje.",
    "yp.inc.glass.title": "Cristaleria y Vasos",
    "yp.inc.glass.text":
      "Vasos reutilizables y cristaleria para que traigas tus bebidas con estilo.",
    "yp.captain.label": "Tu Tripulacion",
    "yp.captain.title": "Tu Capitan y Tripulacion",
    "yp.captain.intro":
      "Cada charter de Emerald Eyes viene con un equipo profesional — y su costo ya esta incluido en tu precio base. Sin cargos adicionales, sin sorpresas.",
    "yp.captain.captain.title": "Capitan con Licencia USCG",
    "yp.captain.captain.text":
      "Tu capitan tiene licencia de la Guardia Costera de los Estados Unidos y conoce cada canal, banco de arena y zona sin oleaje en Biscayne Bay. Se encarga de la navegacion, anclaje, atraque y todos los protocolos de seguridad para que tu solo te concentres en disfrutar.",
    "yp.captain.crew.title": "Tripulacion Profesional",
    "yp.captain.crew.text":
      "Tu tripulacion se encarga de la hospitalidad — sirviendo bebidas, preparando juguetes acuaticos, manejando el sistema de sonido y asegurandose de que todo funcione perfectamente. Para grupos grandes (10+), agregamos un miembro adicional de tripulacion sin costo extra.",
    "yp.captain.cost.title": "Cuanto Cuesta Esto?",
    "yp.captain.cost.text":
      "Nada adicional. Tu capitan y tripulacion estan incluidos en el precio base del charter. El unico costo adicional que debes presupuestar es la propina, que siempre queda a tu discrecion.",
    "yp.dur.title": "Duracion y Precios del Charter",
    "yp.dur.intro":
      "Los charters mas largos ofrecen mejor valor por hora y te permiten explorar mas de la costa de Miami. Asi se desglosan nuestras tarifas.",
    "yp.dur.4hr.title": "Medio Dia",
    "yp.dur.4hr.price": "Desde $2,500",
    "yp.dur.4hr.desc":
      "Perfecto para un viaje a Haulover Sandbar, crucero al atardecer o una celebracion rapida. Lo mas popular para cumpleanos y despedidas de soltera.",
    "yp.dur.4hr.perHour": "~$625/hora",
    "yp.dur.6hr.title": "Extendido",
    "yp.dur.6hr.price": "Desde $3,500",
    "yp.dur.6hr.desc":
      "Tiempo para ir al sandbar y navegar frente a Star Island. Ideal para grupos que quieren combinar natacion, turismo y un atardecer.",
    "yp.dur.6hr.perHour": "~$583/hora",
    "yp.dur.8hr.title": "Dia Completo",
    "yp.dur.8hr.price": "Desde $5,000",
    "yp.dur.8hr.desc":
      "La experiencia completa de Miami. Sandbar por la manana, recorrido por las islas de Biscayne Bay y regreso al atardecer. Mejor valor por hora.",
    "yp.dur.8hr.perHour": "~$625/hora",
    "yp.dur.tipNote":
      "La propina estandar de la industria es 15-20% de la tarifa del charter y se entrega directamente a tu capitan y tripulacion. Nunca esta incluida en nuestros precios y siempre queda a tu discrecion.",
    "yp.addons.title": "Extras Populares",
    "yp.addons.intro":
      "Haz tu charter inolvidable con nuestras experiencias adicionales seleccionadas. Todos se pueden organizar al momento de reservar.",
    "yp.addon.sax.title": "Saxofon en Vivo",
    "yp.addon.sax.price": "Desde $350",
    "yp.addon.sax.desc":
      "Un saxofonista profesional tocando en vivo mientras navegas por Biscayne Bay. Nuestro extra mas solicitado — pura vibra Miami.",
    "yp.addon.sushi.title": "Chef de Sushi",
    "yp.addon.sushi.price": "Desde $500",
    "yp.addon.sushi.desc":
      "Un chef privado de sushi preparando omakase fresco a bordo. Incluye al chef, pescado premium y presentacion completa.",
    "yp.addon.jetski.title": "Alquiler de Jet Ski",
    "yp.addon.jetski.price": "Desde $200/hr",
    "yp.addon.jetski.desc":
      "Uno o dos jet skis entregados al yate en el sandbar. No se requiere licencia. Casco e instrucciones de seguridad incluidos.",
    "yp.addon.catering.title": "Paquete de Catering",
    "yp.addon.catering.price": "Desde $30/persona",
    "yp.addon.catering.desc":
      "Desde tablas de quesos y bandejas de frutas hasta catering completo con chef privado. Personalizado para tu grupo y ocasion.",
    "yp.addon.dj.title": "DJ",
    "yp.addon.dj.price": "Desde $300",
    "yp.addon.dj.desc":
      "Un DJ profesional con su propio equipo trae la energia nocturna al agua. Perfecto para fiestas y despedidas de soltera.",
    "yp.addon.photo.title": "Fotografo",
    "yp.addon.photo.price": "Desde $150",
    "yp.addon.photo.desc":
      "Un fotografo profesional captura cada momento. Tomas con dron, fotos espontaneas y retratos al atardecer. Galeria editada en 48 horas.",
    "yp.addon.hookah.title": "Hookah",
    "yp.addon.hookah.price": "Desde $150",
    "yp.addon.hookah.desc":
      "Un setup premium de hookah con seleccion de sabores, entregado y manejado a bordo. Popular para cruceros al atardecer y celebraciones grupales.",
    "yp.addon.decor.title": "Decoraciones Personalizadas",
    "yp.addon.decor.price": "Desde $250",
    "yp.addon.decor.desc":
      "Globos, pancartas, arreglos florales y montajes tematicos para cumpleanos, propuestas y despedidas de soltera. Envianos tu vision y nosotros nos encargamos del resto.",
    "yp.factors.title": "Que Afecta el Precio",
    "yp.factors.intro":
      "No todos los charters cuestan lo mismo. Estos son los cuatro factores principales que determinan tu precio final.",
    "yp.factor.size.title": "Tamano y Tipo de Embarcacion",
    "yp.factor.size.text":
      "Un crucero de 40 pies cuesta menos que un yate de 65 pies. Las embarcaciones mas grandes tienen mas espacio en cubierta, cabinas y comodidades — y requieren mas combustible y tripulacion. Para grupos de menos de 10, una embarcacion mediana (40-50 pies) suele ser el mejor valor.",
    "yp.factor.season.title": "Temporada",
    "yp.factor.season.text":
      "La temporada alta va de diciembre a abril, cuando Miami esta llena de turistas y la demanda es maxima. La temporada baja (mayo a noviembre) ofrece el mismo clima hermoso a tarifas mas bajas. La temporada de huracanes (junio-noviembre) tiene interrupciones raras pero las mejores ofertas.",
    "yp.factor.group.title": "Tamano del Grupo",
    "yp.factor.group.text":
      "Mas invitados pueden requerir una embarcacion mas grande o miembros adicionales de tripulacion. Grupos de 2-8 caben comodamente en nuestra flota estandar. Grupos de 9-15 pueden necesitar un yate mas grande. Para 16+, recomendamos paquetes multi-embarcacion.",
    "yp.factor.day.title": "Dia de la Semana",
    "yp.factor.day.text":
      "Viernes, sabado y domingo son dias premium con mayor demanda. Martes a jueves tipicamente ofrecen mejor disponibilidad y tarifas. Los lunes tambien tienden a ser mas tranquilos con mejores precios.",
    "yp.save.title": "Como Ahorrar",
    "yp.save.intro":
      "Estrategias inteligentes de reserva que te dan la misma experiencia por menos. Queremos verte en el agua — asi es como lograrlo.",
    "yp.save.weekday.title": "Reserva entre Semana",
    "yp.save.weekday.text":
      "Los charters de martes a jueves tipicamente ofrecen mejores tarifas que los fines de semana. Tambien tendras menos trafico de barcos en el sandbar, aguas mas tranquilas y atencion mas personalizada de la tripulacion.",
    "yp.save.offpeak.title": "Ve en Temporada Baja",
    "yp.save.offpeak.text":
      "De mayo a noviembre ofrece clima calido, mares tranquilos y tarifas que pueden ser 10-20% mas bajas que la temporada alta. Septiembre y octubre son joyas ocultas — agua hermosa, minimas multitudes y las mejores ofertas del ano.",
    "yp.save.direct.title": "Reserva Directo",
    "yp.save.direct.text":
      "Reservar directamente con nosotros en vez de plataformas de terceros significa sin recargos de intermediarios. Tambien tienes comunicacion directa con nuestro equipo para solicitudes personalizadas y cambios de ultimo momento.",
    "yp.save.longer.title": "Reserva un Charter Mas Largo",
    "yp.save.longer.text":
      "El costo por hora baja en charters mas largos. Un dia completo de 8 horas es significativamente mejor valor por hora que dos viajes separados de 4 horas. Ademas, obtienes la experiencia completa de Miami sin prisas.",
    "yp.tipping.title": "Propina para Tu Capitan y Tripulacion",
    "yp.tipping.intro":
      "La propina es el unico costo adicional a tu cotizacion. Aqui tienes todo lo que necesitas saber para que no haya sorpresas.",
    "yp.tipping.standard.title": "Estandar de la Industria: 15-20%",
    "yp.tipping.standard.text":
      "La propina estandar para charters de yate en Miami es 15-20% de la tarifa base del charter. Esto es consistente en toda la industria, similar a dar propina en un restaurante de alta gama.",
    "yp.tipping.example.title": "Como Se Ve Eso",
    "yp.tipping.example.text":
      "En un charter de medio dia de $2,500, una propina tipica es $375-$500. En un charter de dia completo de $5,000, $750-$1,000. El monto siempre queda a tu discrecion basado en tu experiencia.",
    "yp.tipping.how.title": "Como Dar Propina",
    "yp.tipping.how.text":
      "Se prefiere efectivo y se entrega directamente al capitan al final del viaje. El capitan reparte la propina con la tripulacion. Tambien se acepta Venmo y Zelle si prefieres digital.",
    "yp.tipping.note":
      "La propina nunca esta incluida en nuestros precios y nunca se espera — pero se agradece profundamente. Tu tripulacion trabaja duro para hacer cada charter especial.",
    "yp.midCta.label": "Listo para Reservar?",
    "yp.midCta.title": "Obtiene Tu Cotizacion en Minutos",
    "yp.midCta.text":
      "Dinos tu fecha, tamano de grupo y cualquier extra que desees. Armaremos una cotizacion transparente con todo incluido — sin sorpresas, sin idas y vueltas. La mayoria de las cotizaciones se responden en una hora.",
    "yp.faq.title": "Preguntas Frecuentes sobre Precios",
    "yp.faq.intro":
      "Las preguntas mas comunes que recibimos sobre costos de charters de yate en Miami.",
    "yp.faq.q1": "Cuanto cuesta alquilar un yate en Miami?",
    "yp.faq.a1":
      "Un charter privado de yate en Miami comienza en $2,500 por 4 horas con Emerald Eyes. Los precios en el mercado van desde $1,000 hasta $15,000+ por medio dia dependiendo del tamano y las comodidades de la embarcacion. Nuestro rango ideal es $2,500-$5,000 para grupos de 2-15.",
    "yp.faq.q2": "Que esta incluido en el precio del charter?",
    "yp.faq.a2":
      "Cada charter de Emerald Eyes incluye capitan con licencia USCG, tripulacion profesional, combustible para recorridos locales, sistema de sonido premium, hielo y neveras, colchonetas flotantes, juguetes acuaticos, agua embotellada y cristaleria. Sin recargos ocultos de combustible ni tarifas de atraque.",
    "yp.faq.q3": "Cuanto cuesta un yate por hora?",
    "yp.faq.a3":
      "Basado en nuestras tarifas, el costo por hora es aproximadamente $583-$625 dependiendo de la duracion del charter. En el mercado mas amplio de Miami, las tarifas por hora van de $250 a $1,500+ dependiendo del yate. Los charters mas largos siempre ofrecen mejor valor por hora.",
    "yp.faq.q4": "Hay costos adicionales que deba presupuestar?",
    "yp.faq.a4":
      "El unico costo adicional es la propina para tu capitan y tripulacion, que queda a tu discrecion (el estandar de la industria es 15-20%). Si agregas extras como un saxofonista, chef de sushi o jet ski, esos se cotizan por adelantado. Tu propia comida y bebidas son bienvenidas y gratis de traer.",
    "yp.faq.q5": "Esta incluido el combustible?",
    "yp.faq.a5":
      "Si. El combustible para todas las rutas estandar de Miami esta incluido — Haulover Sandbar, Star Island, Biscayne Bay y Key Biscayne. Viajes extendidos fuera del area estandar pueden tener costos adicionales de combustible, pero siempre te avisamos antes de reservar.",
    "yp.faq.q6": "Cuando es el momento mas barato para alquilar?",
    "yp.faq.a6":
      "Los dias de semana (martes a jueves) durante meses de temporada baja (mayo a noviembre) ofrecen las mejores tarifas. Puedes ahorrar 10-20% comparado con un charter de fin de semana en temporada alta. Septiembre y octubre suelen ser los meses mas economicos con excelente clima.",
    "yp.faq.q7": "Cuanto debo dar de propina a la tripulacion?",
    "yp.faq.a7":
      "La propina nunca esta incluida y siempre queda a tu discrecion. El estandar de la industria en Miami es 15-20% de la tarifa base del charter. Para un charter de $2,500, eso seria tipicamente $375-$500. Las propinas van directamente a tu capitan y tripulacion.",
    "yp.faq.q8": "Puedo llevar mi propia comida y bebidas?",
    "yp.faq.a8":
      "Por supuesto. Eres bienvenido a traer tu propia comida, bebidas y alcohol sin cargo adicional. Nosotros proporcionamos hielo, neveras y cristaleria. No botellas de vidrio a bordo — por favor usa latas o sirve en los vasos que proporcionamos. Tambien puedes agregar nuestros paquetes de catering.",
    "yp.related.title": "Guias Relacionadas",
    "yp.related.intro":
      "Mas recursos para ayudarte a planificar la experiencia perfecta de yate en Miami.",
    "yp.related.sandbar": "Experiencia Haulover Sandbar",
    "yp.related.haulover": "Guia Completa de Haulover Sandbar",
    "yp.related.sunset": "Experiencia Crucero al Atardecer",
    "yp.related.book": "Reserva Tu Charter",
    "yp.sample.title": "Ejemplo de Total",
    "yp.sample.intro":
      "Asi se ve un charter tipico de 4 horas todo incluido, para que puedas presupuestar con confianza.",
    "yp.sample.base": "Charter de 4 horas: $2,500",
    "yp.sample.sax": "Saxofonista en vivo: +$350",
    "yp.sample.tip": "Propina (18%): ~$450",
    "yp.sample.total": "Total: ~$3,300 para hasta 13 invitados",
    "yp.finalCta.title": "Conoce el Precio. Ama la Experiencia.",
    "yp.finalCta.text":
      "Sin sorpresas, sin cargos ocultos. Solo una cotizacion transparente y una tripulacion lista para hacer tu dia en el agua inolvidable. Dinos que estas buscando.",
    // Bachelorette article (ES)
    "bach.category": "Experiencias",
    "bach.readTime": "16 min de lectura",
    "bach.heroTitle": "Despedida de Soltera en Yate en Miami",
    "bach.intro1":
      "Olvida el club lleno o el brunch caro. La despedida de soltera que tu grupo realmente recordara es en un yate privado — musica sonando, champagne fluyendo y el skyline de Miami detras de cada foto. Sin drama de vestimenta, sin estres de reservaciones, sin compartir el espacio con desconocidos.",
    "bach.intro2":
      "Esta guia cubre todo lo que necesitas para planificar la despedida de soltera perfecta en yate en Miami: itinerarios, precios, que traer, los mejores extras, consideraciones de grupo y consejos del equipo que hace esto cada fin de semana.",
    "bach.guide.title": "Guia de Planificacion",
    "bach.cta.book": "Planifica Tu Charter",
    "bach.cta.explore": "Ver Experiencias",
    "bach.quick.title": "Datos Rapidos",
    "bach.quick.group": "Grupos de 2-25+ invitados (ideal: 8-15)",
    "bach.quick.duration": "4-8 horas recomendadas para despedidas",
    "bach.quick.route": "Star Island, Haulover Sandbar, Atardecer con Skyline",
    "bach.quick.starting": "Desde $3,500 por 4 horas",
    "bach.nav.whyYacht": "Por Que un Yate",
    "bach.nav.planning": "Cronograma de Planificacion",
    "bach.nav.itinerary": "El Itinerario Perfecto",
    "bach.nav.included": "Que Incluye",
    "bach.nav.addons": "Extras Populares",
    "bach.nav.whatToBring": "Que Traer",
    "bach.nav.pricing": "Tamano de Grupo y Precios",
    "bach.nav.tips": "Consejos del Equipo",
    "bach.nav.faq": "Preguntas Frecuentes",
    "bach.why.title": "Por Que un Yate Supera Cualquier Otra Opcion",
    "bach.why.p1":
      "Un club nocturno tiene dos horas de espera, un restaurante tiene limite de tiempo y una casa de playa significa que alguien limpia despues. Un yate privado es el unico lugar donde no hay restricciones para que tu grupo la pase increible — tu musica, tus bebidas, tu horario y todo el oceano como fondo.",
    "bach.why.p2":
      "Cada foto parece portada de revista cuando disparas contra agua turquesa y el skyline de Miami. La luz en la hora dorada es irreal. Y cuando la musica rebota en el agua sin paredes alrededor, la energia se siente diferente.",
    "bach.why.p3":
      "Ademas, todo esta resuelto. Un capitan licenciado maneja, la tripulacion prepara y limpia todo, y lo unico que tienes que hacer es llegar. Esta es la despedida de soltera donde la dama de honor tambien puede disfrutar.",
    "bach.why.privacy.title": "Privacidad Total",
    "bach.why.privacy.text":
      "Sin desconocidos, sin filas, sin quejas de ruido. El yate es exclusivamente tuyo — tu playlist, tus reglas, tu fiesta.",
    "bach.why.views.title": "Fotos Inigualables",
    "bach.why.views.text":
      "Agua turquesa, mansiones de celebridades y el skyline de Miami. Cada angulo es una oportunidad fotografica que supera cualquier rooftop bar.",
    "bach.why.freedom.title": "Tu Musica, a Todo Volumen",
    "bach.why.freedom.text":
      "Sistema de sonido Bluetooth premium a bordo. Conecta tu telefono y pon tu playlist tan fuerte como quieras — sin limites de ruido en mar abierto.",
    "bach.why.tag1": "Yate Privado",
    "bach.why.tag2": "Tripulacion Todo Incluido",
    "bach.why.tag3": "Cero Limpieza",
    "bach.plan.title": "Cuando Reservar y Como Planificar",
    "bach.plan.p1":
      "Empieza a planificar 3-6 meses antes de la boda. Los charters en Miami se reservan rapido en temporada alta (diciembre a abril) y fines de semana festivos. Un deposito de $500 asegura tu fecha y embarcacion — y es reembolsable hasta 14 dias antes del charter.",
    "bach.plan.p2":
      'Dos a tres meses antes: finaliza el numero de invitados, elige tus extras y decide entre crucero de dia o atardecer. Un mes antes: coordina outfits con el grupo, confirma necesidades dieteticas si agregas chef de sushi y comparte el itinerario. Una semana antes: confirma logistica de transporte y envia la lista de "que traer" a todas.',
    "bach.plan.p3":
      "Para reservas de ultimo momento, el verano y dias entre semana generalmente tienen disponibilidad con 3-4 semanas de anticipacion. Fines de semana en temporada alta? Reserva lo antes posible.",
    "bach.plan.tip":
      "Consejo pro: Los cruceros al atardecer (saliendo a las 4-5 PM) te dan lo mejor de ambos mundos — nadar de dia en el sandbar seguido de fotos con la hora dorada y el skyline.",
    "bach.itin.title": "El Itinerario Perfecto",
    "bach.itin.intro":
      "Tres formas de hacerlo, dependiendo de la vibra de tu grupo. Mezcla y combina, o ve todo el dia.",
    "bach.itin.morning.title": "Manana / Tarde",
    "bach.itin.morning.text":
      "Sal a media manana y navega hasta Haulover Sandbar o Nixon Sandbar. Ancla en las aguas poco profundas con colchonetas flotantes, nada y celebra en agua hasta la cintura con 200+ barcos los fines de semana. Pon tu playlist en el sistema de sonido premium mientras la tripulacion mantiene las bebidas frias. Este es el clasico dia de sandbar en Miami — y pega mas fuerte desde un yate privado.",
    "bach.itin.sunset.title": "Crucero al Atardecer",
    "bach.itin.sunset.text":
      "Sal alrededor de las 4-5 PM y navega frente a Star Island, las Islas Venecianas y Millionaire's Row. Mira el sol ponerse sobre el skyline de Miami mientras la luz dorada hace que cada foto sea sin esfuerzo. Agrega un saxofonista en vivo y champagne para una experiencia elevada. Este es el itinerario de despedida mas popular que hacemos — es el que deja el chat del grupo en silencio porque todas estan ocupadas publicando.",
    "bach.itin.evening.title": "Crucero Nocturno",
    "bach.itin.evening.text":
      "Sal despues del anochecer y ve el skyline de Miami iluminado desde el agua. Navega frente a las torres brillantes de Brickell, downtown y South Beach. La vibra cambia a energia de club — sistema de sonido nivel DJ, luces LED en cubierta y la ciudad como fondo. Perfecto como pre-fiesta antes de ir a los clubs, o como el evento principal.",
    "bach.included.title": "Que Incluye Cada Charter",
    "bach.included.intro":
      "Todo lo que necesitas para una despedida de soltera sin estres esta a bordo desde el momento en que subes.",
    "bach.included.label": "Incluido en Tu Charter",
    "bach.included.captain.title": "Capitan Licenciado USCG",
    "bach.included.captain.text":
      "Capitan profesional que conoce cada ruta, sandbar y punto de atardecer en Miami. Tu relajate — ellos manejan.",
    "bach.included.sound.title": "Sistema de Sonido Premium",
    "bach.included.sound.text":
      "Parlantes Bluetooth en todo el yate. Conecta tu telefono y pon tu playlist a todo volumen — sin limites de ruido en el agua.",
    "bach.included.mats.title": "Colchonetas Flotantes y Lily Pads",
    "bach.included.mats.text":
      "Colchonetas flotantes grandes para descansar en el sandbar. Perfectas para fotos grupales y tomar sol en el agua.",
    "bach.included.ice.title": "Hielo, Hieleras y Agua",
    "bach.included.ice.text":
      "Hieleras completamente equipadas con hielo y agua. Trae tus propias bebidas — nosotros mantenemos todo frio todo el dia.",
    "bach.included.glass.title": "Copas y Vasos",
    "bach.included.glass.text":
      "Copas de champagne, copas de vino y vasos a bordo. No necesitas traer nada desechable — te tenemos cubierta.",
    "bach.included.toys.title": "Juguetes Acuaticos",
    "bach.included.toys.text":
      "Fideos de piscina, flotadores y equipo de snorkel disponibles a bordo. Todo lo que necesitas para disfrutar el agua mas alla del yate.",
    "bach.addon.title": "Extras Populares",
    "bach.addon.intro":
      "Mejora tu despedida de increible a inolvidable. Estos son los extras que nuestros grupos de despedida mas reservan.",
    "bach.addon.sax.title": "Saxofon en Vivo",
    "bach.addon.sax.text":
      "Un saxofonista profesional pone el tono mientras navegas. Jazz suave sobre beats de house, energia de hora dorada y el tipo de ambiente que hace que todo el grupo baje sus telefonos. Luego los vuelven a levantar porque necesitan grabarlo.",
    "bach.addon.sax.price": "Desde $350",
    "bach.addon.sushi.title": "Chef de Sushi a Bordo",
    "bach.addon.sushi.text":
      "Un chef de sushi privado prepara rolls frescos en el yate. Salmon, atun, tempura de camaron — todo hecho a pedido mientras navegas. Es una experiencia gastronomica completa en el agua, y se ve increible en camara.",
    "bach.addon.sushi.price": "Desde $500",
    "bach.addon.jetski.title": "Alquiler de Jet Ski",
    "bach.addon.jetski.text":
      "Dos jet skis te esperan en el sandbar por una hora. No se necesita licencia en Florida para personas nacidas antes de 1988 — las demas toman un curso rapido en linea. Pura adrenalina entre el champagne.",
    "bach.addon.jetski.price": "Desde $200",
    "bach.addon.decor.title": "Decoraciones Personalizadas",
    "bach.addon.decor.text":
      'Globos dorado rosa, banners de "Bride", arreglos florales y temas de colores — todo montado antes de que abordes. Nuestro equipo se encarga de todo para que llegues a un yate completamente decorado.',
    "bach.addon.decor.price": "Desde $250",
    "bach.addon.photo.title": "Paquete de Fotografo",
    "bach.addon.photo.text":
      "Un fotografo profesional captura todo el charter — momentos espontaneos, fotos grupales y esos retratos de hora dorada. Recibes 100+ fotos editadas en 48 horas.",
    "bach.addon.photo.price": "Desde $150",
    "bach.addon.champagne.title": "Champagne y Servicio de Botellas",
    "bach.addon.champagne.text":
      "Champagne en hielo cuando abordes, mas servicio premium de botellas durante todo el crucero. Moet, Veuve o Dom — conseguimos lo que quieras y lo tenemos frio y listo.",
    "bach.addon.champagne.price": "Desde $400",
    "bach.bring.title": "Que Traer",
    "bach.bring.intro":
      "Dos listas — una para la novia y otra para el grupo. Reenvia esto al chat grupal.",
    "bach.bring.bride": "La Novia",
    "bach.bring.party": "El Grupo",
    "bach.bride.outfit.title": "Outfit o Traje de Bano Blanco",
    "bach.bride.outfit.text":
      "Traje de bano blanco, cover-up o conjunto combinado. Necesitas destacar en cada foto — y lo haras.",
    "bach.bride.sunglasses.title": "Banda de Novia y Lentes de Sol",
    "bach.bride.sunglasses.text":
      'Banda de "Bride", tiara o lentes de sol personalizados. Entre mas extra, mejores las fotos.',
    "bach.bride.phone.title": "Funda Impermeable para Telefono",
    "bach.bride.phone.text":
      "Querras tu telefono contigo todo el dia. Una funda impermeable lo mantiene seguro en el sandbar y durante los momentos de splash.",
    "bach.bride.touch.title": "Kit de Retoque",
    "bach.bride.touch.text":
      "Mascara resistente al agua, lip gloss y shampoo seco. El aire salado y el sol hacen lo suyo — un retoque rapido te mantiene lista para la camara.",
    "bach.party.matching.title": "Outfits Coordinados",
    "bach.party.matching.text":
      "Coordinen un color — rosa fuerte, negro o neon. Trajes de bano o cover-ups iguales hacen que las fotos grupales destaquen.",
    "bach.party.sunscreen.title": "Bloqueador Solar (Reef-Safe)",
    "bach.party.sunscreen.text":
      "SPF 50+, preferiblemente reef-safe. Reaplicar cada 2 horas. El sol de Miami en el agua no es broma — confien en nosotros.",
    "bach.party.props.title": "Props y Carteles para Fotos",
    "bach.party.props.text":
      'Banner de "Last Sail Before the Veil", koozies personalizados, lentes divertidos. Los props dan mucho juego en las fotos del yate. Sin globos, brillantina ni confeti.',
    "bach.party.cash.title": "Efectivo e Identificacion",
    "bach.party.cash.text":
      "Trae tu ID para abordar y efectivo para propinas. La propina de la tripulacion es costumbre (18-20%) y muy apreciada.",
    "bach.price.title": "Tamano de Grupo y Precios",
    "bach.price.intro":
      "Cada charter es privado — tu grupo, tu yate. Los precios escalan con el tamano del grupo y tipo de embarcacion.",
    "bach.price.intimate.title": "Intimo",
    "bach.price.intimate.size": "2-8 invitados",
    "bach.price.intimate.price": "$3,500+",
    "bach.price.party.title": "El Punto Ideal",
    "bach.price.party.size": "8-15 invitados",
    "bach.price.party.price": "$4,500+",
    "bach.price.big.title": "Grupo Grande",
    "bach.price.big.size": "16-25+ invitados",
    "bach.price.big.price": "$6,000+",
    "bach.price.perHour": "Minimo de charter 4 horas",
    "bach.price.note":
      "Todos los precios incluyen capitan, tripulacion, sistema de sonido, colchonetas flotantes, hielo, hieleras y copas. Los extras son adicionales. Cotizaciones personalizadas para multiples dias o solicitudes especiales — solo pregunta.",
    "bach.tips.label": "De Nuestro Equipo",
    "bach.tips.title": "Consejos de Sasha",
    "bach.tips.tip1":
      "Reserva el crucero al atardecer. Lo digo siempre porque es verdad — las fotos de hora dorada desde el agua son imbatibles, y el cambio de energia de la luz del dia a las luces de la ciudad es magico. Es nuestro itinerario #1 para despedidas por algo.",
    "bach.tips.tip2":
      "Coordinen outfits, pero mantenganlo comodo. La cubierta del yate puede ser resbalosa cuando esta mojada, asi que solo zapatos planos o descalzas. Olviden los tacones — confien en mi, no los van a extranar cuando empiece la musica.",
    "bach.tips.tip3":
      "Agreguen el saxofonista. He visto 200+ despedidas de soltera en charter, y los grupos que agregan sax en vivo siempre dicen que fue lo mejor. Algo de un saxofon sobre beats de house en mar abierto simplemente funciona.",
    "bach.tips.tip4":
      "Traigan sus propias bebidas y guarden el presupuesto para los extras. Nosotros proveemos hielo, hieleras y copas — asi que compren su champagne y rose en Total Wine antes de venir. Luego gasten en el chef de sushi o el fotografo.",
    "bach.tips.tip5":
      "Designen a una persona como contacto de reserva. Demasiadas cocineras en el chat grupal hace la planificacion mas dificil. Una persona habla con nosotros, recolecta el pago del grupo y comparte los detalles.",
    "bach.midCta.title": "Lista para empezar a planificar?",
    "bach.midCta.text":
      "Yate privado, capitan licenciado, colchonetas flotantes, sistema de sonido y toda la costa de Miami como tu escenario. Dinos tu fecha y tamano de grupo — armaremos el charter de despedida perfecto para ti.",
    "bach.midCta.btn": "Ver Paquetes de Despedida",
    "bach.faq.title": "Preguntas Frecuentes",
    "bach.faq.q1": "Cuanto cuesta una despedida de soltera en yate en Miami?",
    "bach.faq.a1":
      "Un charter privado de despedida con Emerald Eyes empieza en $3,500 por 4 horas. Eso incluye capitan licenciado USCG, tripulacion profesional, sistema de sonido premium, colchonetas flotantes, hielo, hieleras y copas. Extras populares como saxofonista en vivo ($350), chef de sushi ($500) o jet skis ($200) estan disponibles. La mayoria de los grupos gastan $4,000-$6,000 por una experiencia completa de 4-6 horas.",
    "bach.faq.q2": "Cuantas personas caben en un yate de despedida?",
    "bach.faq.a2":
      "Nuestros yates acomodan grupos de 2 a 25+ invitados. El punto ideal para despedidas es 8-15 personas — suficiente para una gran fiesta, intimo para que todas disfruten el yate. Grupos de mas de 13 pueden requerir una embarcacion mas grande con precios ajustados.",
    "bach.faq.q3": "Podemos traer nuestro propio alcohol al yate?",
    "bach.faq.a3":
      "Si. Florida permite contenedores abiertos en barcos, asi que trae tus propias bebidas. Proveemos hielo, hieleras y copas. Sin botellas de vidrio — usen latas o plastico. Tambien puedes agregar un paquete de champagne o servicio de botellas. El capitan debe mantenerse bajo el limite de 0.08% BAC.",
    "bach.faq.q4": "Cual es la mejor epoca para una despedida en yate?",
    "bach.faq.a4":
      "Miami es destino todo el ano. Octubre a abril ofrece el clima mas comodo con baja humedad y mar calmo. Verano (junio-septiembre) es mas caliente pero trae menos multitudes y precios mas bajos. Los cruceros al atardecer son increibles todo el ano. Reserva 2-3 meses antes en temporada alta.",
    "bach.faq.q5": "Que debemos usar en el yate?",
    "bach.faq.a5":
      "Trajes de bano con cover-ups es lo estandar. Muchos grupos coordinan trajes de bano iguales — blanco para la novia, un color para el grupo. Trae un cambio de ropa si van a salir despues. Solo zapatos planos o descalzas a bordo — sin tacones.",
    "bach.faq.q6": "Por donde navega el yate?",
    "bach.faq.a6":
      "La ruta mas popular pasa por Star Island y las mansiones de celebridades en Millionaire's Row, luego ancla en Haulover Sandbar o Nixon Sandbar para nadar. Los cruceros al atardecer terminan con el skyline de Miami brillando en la hora dorada. Tu capitan puede personalizar la ruta.",
    "bach.faq.q7": "Con cuanta anticipacion debemos reservar?",
    "bach.faq.a7":
      "Reserva 2-3 meses antes para temporada alta (diciembre-abril) y fines de semana festivos. Para verano y dias entre semana, 3-4 semanas generalmente es suficiente. Un deposito de $500 asegura tu fecha.",
    "bach.faq.q8": "Podemos traer decoraciones al yate?",
    "bach.faq.a8":
      "Si — banners, bandas, props para fotos, arreglos florales y carteles son bienvenidos. Sin globos, brillantina ni confeti, ya que estan prohibidos para proteger las aguas de Miami. Tambien ofrecemos un extra de decoraciones personalizadas donde nuestro equipo se encarga del montaje antes de que llegues.",
    "bach.related.title": "Explorar Mas",
    "bach.related.intro": "Mas guias y experiencias de Emerald Eyes Miami.",
    "bach.related.experience": "Experiencia Despedida en Yate",
    "bach.related.haulover": "Guia de Haulover Sandbar",
    "bach.related.sunset": "Experiencia Crucero al Atardecer",
    "bach.related.about": "Sobre Emerald Eyes Miami",
    "bach.share.title": "Comparte con Tu Grupo",
    "bach.share.text":
      "Envia esta guia al chat grupal. Todas tendran los detalles que necesitan — que traer, que usar y que esperar.",

    // -- Cross-link & callout keys (added 2026-03-14) --
    "bach.costRef.title": "Cuanto Cuesta",
    "bach.costRef.text":
      "Desde $3,500 por 4 horas. Ve nuestro desglose completo de precios",
    "bach.costRef.link": "Guia completa de precios",
    "bach.perPerson.text":
      "$3,500 \u00F7 12 invitadas = ~$292/persona \u2014 menos que una noche en LIV o E11EVEN",
    "bach.perPerson.label": "Matematica Por Persona",
    "bach.itin.morning.time": "11:00 AM \u2014 Salida del muelle",
    "bach.itin.morning.time2": "12:00 PM \u2014 Llegada a Haulover Sandbar",
    "bach.itin.sunset.time": "4:00 PM \u2014 Salida para crucero Star Island",
    "bach.itin.sunset.time2": "5:30 PM \u2014 Fotos de hora dorada",
    "bach.itin.evening.time": "7:00 PM \u2014 Salida para crucero nocturno",
    "bach.itin.evening.time2": "8:30 PM \u2014 Paso por luces del skyline",
    "bach.itin.morning.schedule":
      "11 AM salida \u2192 12 PM llegada al sandbar \u2192 2 PM crucero Star Island \u2192 3 PM regreso al muelle",
    "bach.itin.sunset.schedule":
      "4 PM salida \u2192 5 PM Millionaire\u2019s Row \u2192 6 PM fotos atardecer \u2192 7:30 PM regreso",
    "bach.itin.evening.schedule":
      "7 PM salida \u2192 8 PM skyline Brickell \u2192 9 PM paso South Beach \u2192 10:30 PM regreso",
    "bach.tips.tip6":
      "Reserva lo antes posible \u2014 especialmente para temporada alta (diciembre a abril) y fines de semana festivos. Los sabados de marzo y abril se llenan 3+ meses antes. Los dias entre semana y verano son mas flexibles, pero las mejores embarcaciones se van rapido.",
    "bach.tips.tip7":
      "El clima de Miami es impredecible. Monitoreamos las condiciones 72 horas antes de tu charter y te contactaremos si algo se ve preocupante. Si la lluvia o vientos fuertes obligan a reprogramar, tu deposito se transfiere a una nueva fecha sin costo adicional. Las tormentas de verano usualmente pasan antes de las 5 PM \u2014 los cruceros al atardecer rara vez se ven afectados.",
    "bach.related.yachtPrices": "Guia de Precios de Yate",
    "bach.related.firstTimer": "Guia de Primer Alquiler de Yate",
    "bach.related.coastGuard": "Guardacostas y Estandares de Seguridad",
    "bach.related.jetSki": "Guia de Licencia de Jet Ski en Miami",
    "bach.crosslink.pricing": "Ve nuestro desglose completo de precios \u2192",
    "bach.crosslink.firstTimer":
      "Primera vez en un yate? Lee lo esencial \u2192",
    "bach.crosslink.haulover":
      "Nuestra guia completa de Haulover Sandbar \u2192",
    "bach.crosslink.coastGuard":
      "Como superamos los requisitos de Guardacostas \u2192",
    "bach.crosslink.jetSki": "Reglas de licencia de jet ski en Florida \u2192",

    "bach.final.title": "Esta es la despedida que ella merece.",
    "bach.final.text":
      "Yate privado. Capitan licenciado. El skyline de Miami, hora dorada y un sistema de sonido lo suficientemente fuerte para que todo el sandbar escuche. Esta es la celebracion de la que tu novia hablara por siempre.",
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
