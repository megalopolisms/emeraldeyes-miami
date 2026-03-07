// =============================================================================
// EMERALD EYES MIAMI — TypeScript Types
// =============================================================================
// Shared types used across chat, API, and components.
// =============================================================================

// ---------------------------------------------------------------------------
// Chat Flow Types
// ---------------------------------------------------------------------------

/** All possible chat steps (XState state names) */
export type ChatStep =
  | "welcome"
  | "occasion"
  | "groupSize"
  | "date"
  | "email"
  | "phone"
  | "duration"
  | "addons"
  | "pickup"
  | "contact"
  | "summary"
  | "submitted";

/** Data collected during the chat flow */
export interface ChatSelections {
  occasion: string | null;
  groupSize: string | null;
  date: string | null;
  duration: string | null;
  addons: string[];
  pickup: string | null;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

/** A single message in the chat history */
export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: number;
  /** If this is an option selection, store the selected value(s) */
  selections?: string[];
}

/** Price estimate returned by the pricing engine */
export interface PriceEstimate {
  low: number;
  high: number;
  breakdown: {
    base: number;
    addons: number;
    transport: number;
    premium: number; // weekend/holiday surcharge
  };
}

// ---------------------------------------------------------------------------
// Inquiry Types (API)
// ---------------------------------------------------------------------------

/** Full inquiry payload sent to POST /api/inquiry */
export interface InquiryPayload {
  selections: ChatSelections;
  estimate: PriceEstimate;
  source: string; // page URL
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  submittedAt: string; // ISO timestamp
}

/** API response from POST /api/inquiry */
export interface InquiryResponse {
  success: boolean;
  id?: string;
  error?: string;
}

// ---------------------------------------------------------------------------
// Experience Page Types
// ---------------------------------------------------------------------------

export interface Experience {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  startPrice: number;
  bestFor: string;
  duration: string;
  image: string;
  occasion: string;
}

// ---------------------------------------------------------------------------
// Component Props
// ---------------------------------------------------------------------------

export interface OptionChipProps {
  label: string;
  emoji?: string;
  subtitle?: string;
  selected?: boolean;
  onClick: () => void;
}

export interface ChatBubbleProps {
  message: ChatMessage;
  isLatest?: boolean;
}
