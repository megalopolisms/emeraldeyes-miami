# BREADCRUMBS — Emerald Eyes Miami Website

Multi-AI coordination file. Append-only log of work in progress.

## Architecture

```
website/
  app/                    # Next.js 15 App Router pages
    layout.tsx            # Root layout (Header + Footer + FloatingChat)
    page.tsx              # Homepage — split-screen hero (logo left + chat right)
    globals.css           # Tailwind v4 + brand tokens + chat animations
    api/inquiry/route.ts  # POST endpoint — saves inquiry to Supabase + notifies
    experiences/          # Charter type pages (sunset, party, corporate, etc.)
    fleet/                # Vessel showcase
    gallery/              # Photo gallery
    about/                # Founder story
    book/                 # Full-width chat + fallback form
    contact/              # Traditional contact page
    faq/                  # FAQ accordion
    privacy/              # Privacy policy
    terms/                # Terms of service
    cancellation-policy/  # Cancellation policy
  components/
    chat/                 # Interactive chat system (WhatsApp-style)
      ChatWidget.tsx      # Main chat orchestrator (renders bubbles, chips, handles XState)
      ChatBubble.tsx      # Single message bubble (bot or user)
      OptionChips.tsx     # Tappable option pills
      TypingIndicator.tsx # Animated "..." indicator
      ChatSummary.tsx     # Step 8 — summary + price estimate
      FloatingButton.tsx  # Bottom-right emerald pulse button (all pages)
      DatePicker.tsx      # Inline date picker for step 3
      ContactForm.tsx     # Step 7 — name/phone/email text inputs
    layout/
      Header.tsx          # Top nav bar
      Footer.tsx          # Site footer
    ui/
      Button.tsx          # Reusable CTA button
      Section.tsx         # Page section wrapper
      ExperienceCard.tsx  # Card for experience/occasion listings
    home/
      HeroSplit.tsx       # Split-screen container (logo left + chat right)
      LogoPanel.tsx       # Left panel — full-height logo on navy
      BelowFold.tsx       # Content sections below the hero
  lib/
    chat-machine.ts       # XState v5 state machine (8 steps)
    constants.ts          # Brand colors, config, pricing data
    types.ts              # TypeScript interfaces
    pricing.ts            # Price estimator from chat selections
  public/images/          # Static assets (logo, photos)
```

## Brand Tokens (use these everywhere)

- Navy: #0D1B2A
- Emerald: #2EC4A5
- Emerald Alt: #00C9A7
- Gold: #D4A843
- White: #FFFFFF

## Key Conventions

- All components use TypeScript + Tailwind classes
- Chat state managed by XState v5 (lib/chat-machine.ts is source of truth)
- Every page CTA opens the chat via `useChatStore` or floating button
- Framer Motion for animations (chat bubbles, hero reveal, page transitions)
- Mobile: split-screen stacks vertically (logo 30vh top, chat below)

## Status Log

| Timestamp        | Agent       | Action                                                                                                                                                    | Status      |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2026-03-07 05:00 | Claude Opus | Initial scaffold + all config files                                                                                                                       | IN_PROGRESS |
| 2026-03-07 05:10 | Agent 2     | Layout + Homepage: layout.tsx, page.tsx, Header, Footer, LogoPanel, HeroSplit, BelowFold, Button, Section                                                 | DELIVERED   |
| 2026-03-07 05:10 | Agent 1     | Chat system: XState machine, ChatWidget, ChatBubble, OptionChips, TypingIndicator, DatePicker, ContactForm, ChatSummary, FloatingButton                   | DELIVERED   |
| 2026-03-07 05:10 | Agent 3     | Inner pages: 6 experience pages, fleet, gallery, about, book, contact, faq, privacy, terms, cancellation, API route, ExperienceCard, ExperienceDetailPage | DELIVERED   |
| 2026-03-07 05:15 | Claude Opus | npm install + build fix (NAV_LINKS cta type) + successful build (20 routes, 0 errors)                                                                     | DELIVERED   |
| 2026-03-07 05:15 | Claude Opus | Dev server running on http://localhost:3063                                                                                                               | DELIVERED   |
