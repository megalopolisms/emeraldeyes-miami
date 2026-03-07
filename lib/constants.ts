// =============================================================================
// EMERALD EYES MIAMI — Brand Constants & Configuration
// =============================================================================
// Source of truth for colors, pricing, chat options, and business config.
// Referenced by: chat-machine.ts, pricing.ts, all components.
// =============================================================================

// ---------------------------------------------------------------------------
// Base Path (GitHub Pages deploys under /emeraldeyes-miami/)
// next/image doesn't auto-prefix with basePath when unoptimized
// ---------------------------------------------------------------------------
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path with the basePath */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

// ---------------------------------------------------------------------------
// Brand Colors (from SKILL.md)
// ---------------------------------------------------------------------------
export const COLORS = {
  navy: "#0D1B2A",
  navyLight: "#1B2838",
  emerald: "#2EC4A5",
  emeraldAlt: "#00C9A7",
  gold: "#D4A843",
  white: "#FFFFFF",
  whiteAlpha: "rgba(255, 255, 255, 0.1)",
} as const;

// ---------------------------------------------------------------------------
// Chat Flow Options — Each step's selectable choices
// ---------------------------------------------------------------------------
export const OCCASION_OPTIONS = [
  { id: "birthday", label: "Birthday", emoji: "🎂" },
  { id: "bachelor", label: "Bachelor/ette", emoji: "🥂" },
  { id: "sunset", label: "Sunset Date", emoji: "🌅" },
  { id: "proposal", label: "Proposal", emoji: "💍" },
  { id: "corporate", label: "Corporate", emoji: "🏢" },
  { id: "vibes", label: "Just Vibes", emoji: "🌊" },
] as const;

export const GROUP_SIZE_OPTIONS = [
  { id: "2-4", label: "2-4", subtitle: "Intimate", tKey: "intimate" },
  { id: "5-8", label: "5-8", subtitle: "Small group", tKey: "smallGroup" },
  { id: "9-15", label: "9-15", subtitle: "Party", tKey: "party" },
  { id: "16-25", label: "16-25", subtitle: "Big group", tKey: "bigGroup" },
  { id: "25+", label: "25+", subtitle: "Event", tKey: "event" },
] as const;

export const DURATION_OPTIONS = [
  { id: "2hr", label: "2 Hours", price: 2500 },
  { id: "4hr", label: "4 Hours", price: 3500 },
  { id: "8hr", label: "8 Hours", price: 5500 },
  { id: "fullday", label: "Full Day", price: 7000 },
  { id: "multiday", label: "Multi-Day", price: 0 }, // custom quote
] as const;

export const ADDON_OPTIONS = [
  { id: "photo", label: "Photo Package", price: 150, emoji: "📸" },
  { id: "sushi", label: "Sushi Chef", price: 500, emoji: "🍣" },
  { id: "dj", label: "DJ / Music", price: 300, emoji: "🎵" },
  { id: "bottles", label: "Bottle Service", price: 400, emoji: "🍾" },
  { id: "jetski", label: "Jet Skis", price: 200, emoji: "🚤" },
  { id: "transport", label: "Transport", price: 200, emoji: "🚐" },
  { id: "hookah", label: "Hookah", price: 100, emoji: "💨" },
  { id: "cigar", label: "Cigar Lounge", price: 150, emoji: "🔥" },
  { id: "sax", label: "Live Sax Player", price: 350, emoji: "🎷" },
  { id: "none", label: "Keep It Simple", price: 0, emoji: "✨" },
] as const;

export const PICKUP_OPTIONS = [
  { id: "southbeach", label: "South Beach" },
  { id: "brickell", label: "Brickell" },
  { id: "downtown", label: "Downtown" },
  { id: "aventura", label: "Aventura" },
  { id: "balharbour", label: "Bal Harbour" },
  { id: "sunnyisles", label: "Sunny Isles" },
  { id: "self", label: "I'll get there myself" },
] as const;

// ---------------------------------------------------------------------------
// Chat Messages — Bot responses for each step
// ---------------------------------------------------------------------------
export const CHAT_MESSAGES = {
  welcome: "chat.welcome",
  occasion: "chat.occasion",
  groupSize: "chat.groupSize",
  date: "chat.date",
  email: "chat.email",
  phone: "chat.phone",
  duration: "chat.duration",
  addons: "chat.addons",
  pickup: "chat.pickup",
  contact: "chat.contact",
  summary: "chat.summary",
  confirmation: "chat.confirmation",
} as const;

// ---------------------------------------------------------------------------
// Occasion-specific bot reactions (shown after user selects occasion)
// ---------------------------------------------------------------------------
export const OCCASION_REACTIONS: Record<string, string> = {
  birthday: "reaction.birthday",
  bachelor: "reaction.bachelor",
  sunset: "reaction.sunset",
  proposal: "reaction.proposal",
  corporate: "reaction.corporate",
  vibes: "reaction.vibes",
};

// ---------------------------------------------------------------------------
// Business Config
// ---------------------------------------------------------------------------
export const BUSINESS = {
  name: "Emerald Eyes Miami",
  tagline: "Luxury Yacht Rental",
  location: "North Miami, FL",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "",
  whatsapp: "17863274772",
  instagram: "@EmeraldEyesMiami",
  tiktok: "@EmeraldEyesMiami",
  responseTime: "1 hour",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emeraldeyesmiami.com",
} as const;

// ---------------------------------------------------------------------------
// Navigation Links
// ---------------------------------------------------------------------------
export const NAV_LINKS: readonly {
  href: string;
  label: string;
  cta?: boolean;
}[] = [
  { href: "/experiences", label: "Experiences" },
  { href: "/fleet", label: "Fleet" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book Now", cta: true },
];

// ---------------------------------------------------------------------------
// Experience Pages Data
// ---------------------------------------------------------------------------
export const EXPERIENCES = [
  {
    slug: "sunset-cruise-miami",
    title: "Sunset Cruise",
    tagline: "Golden hour on the water.",
    description:
      "Watch Miami's skyline glow as the sun dips below the horizon. Intimate groups, champagne, and the kind of evening you don't forget.",
    startPrice: 2500,
    bestFor: "Couples, dates, small celebrations",
    duration: "2-4 hours",
    image: "/images/sunset.jpg",
    occasion: "sunset",
  },
  {
    slug: "private-party-yacht-miami",
    title: "Private Party",
    tagline: "Your boat. Your rules. Your playlist.",
    description:
      "Birthdays, celebrations, or just because. Full sound system, bottle service available, and a crew that knows how to set the vibe.",
    startPrice: 3500,
    bestFor: "Birthdays, groups, celebrations",
    duration: "4-8 hours",
    image: "/images/party.jpg",
    occasion: "birthday",
  },
  {
    slug: "corporate-yacht-charter-miami",
    title: "Corporate Charter",
    tagline: "Impress without saying a word.",
    description:
      "Executive hosting on the water. Team events, client entertainment, or a board meeting with a better view. We handle everything.",
    startPrice: 4000,
    bestFor: "Teams, clients, executive events",
    duration: "4-8 hours",
    image: "/images/corporate.jpg",
    occasion: "corporate",
  },
  {
    slug: "bachelorette-yacht-miami",
    title: "Bachelorette Party",
    tagline: "The pregame before forever.",
    description:
      "DJ, champagne, photo props, and open water. This is the bachelorette your group will talk about for years.",
    startPrice: 3500,
    bestFor: "Bride squads, celebration groups",
    duration: "4-8 hours",
    image: "/images/bachelorette.jpg",
    occasion: "bachelor",
  },
  {
    slug: "proposal-yacht-miami",
    title: "Proposal Package",
    tagline: "She'll say yes. The ocean guarantees it.",
    description:
      "Rose petals, hidden photographer, champagne on ice, and a sunset that sets the stage. We've thought of everything so you don't have to.",
    startPrice: 3000,
    bestFor: "Couples, proposals, anniversaries",
    duration: "2-4 hours",
    image: "/images/proposal.jpg",
    occasion: "proposal",
  },
  {
    slug: "haulover-sandbar-yacht-miami",
    title: "Haulover Sandbar",
    tagline: "The island party everyone's talking about.",
    description:
      "Anchor up at Haulover Sandbar with floating mats, music, and cold drinks. The quintessential Miami water experience.",
    startPrice: 2500,
    bestFor: "Friends, influencers, weekend warriors",
    duration: "4-8 hours",
    image: "/images/sandbar.jpg",
    occasion: "vibes",
  },
  {
    slug: "live-sax-yacht-miami",
    title: "Live Sax Experience",
    tagline: "Sunset grooves on the open water.",
    description:
      "A professional sax player sets the tone while you cruise through Biscayne Bay. Smooth jazz, golden hour, and the Miami skyline — an experience that sounds as good as it looks.",
    startPrice: 3000,
    bestFor: "Couples, sunset cruises, elevated vibes",
    duration: "2-4 hours",
    image: "/images/sax.jpg",
    occasion: "sunset",
  },
] as const;
