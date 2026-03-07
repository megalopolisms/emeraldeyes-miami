"use client";

import { useState } from "react";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const FAQ_ITEMS = [
  {
    question: "Where do charters depart from?",
    answer:
      "All charters depart from our partner marina in the North Miami area. Exact marina details and directions are provided once your booking is being finalized. We're minutes from Biscayne Bay with direct Atlantic access.",
  },
  {
    question: "What's included in the charter price?",
    answer:
      "Every charter includes a licensed captain, professional crew, fuel, basic amenities, bottled water, ice, and sound system access. Add-ons like photography, DJ, sushi chef, bottle service, and transportation are available separately.",
  },
  {
    question: "Can we bring our own food and drinks?",
    answer:
      "Yes. You're welcome to bring your own food and beverages. If you want a hands-off experience, we can coordinate catering and curated bottle service.",
  },
  {
    question: "Do you provide a captain?",
    answer:
      "Yes. Captains and crew are included so you can focus on the experience instead of logistics.",
  },
  {
    question: "What happens if the weather changes?",
    answer:
      "We monitor conditions closely before every charter. If weather makes it unsafe to go out, we will help you reschedule or review refund options according to the booking terms.",
  },
  {
    question: "How many people can come?",
    answer:
      "We can accommodate intimate groups and larger parties depending on the vessel or partner fleet selected for your date. Tell us the group size and we'll match the right option.",
  },
  {
    question: "How do deposits work?",
    answer:
      "Deposit timing and final balance depend on the vessel and event details. We outline those terms clearly before anything is confirmed.",
  },
  {
    question: "Can you help with proposals, birthdays, or bachelorettes?",
    answer:
      "Absolutely. Those are some of our strongest use cases. We can help shape the route, timing, decor, music, photography, and add-on planning around the occasion.",
  },
  {
    question: "Do you offer transportation to the marina?",
    answer:
      "Yes. Transportation can be coordinated from areas like South Beach, Brickell, Downtown, Aventura, Bal Harbour, and Sunny Isles as an add-on.",
  },
  {
    question: "Can we add a photographer?",
    answer:
      "Yes. Photography and content support are available as add-ons, including elevated proposal and celebration coverage.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl bg-[--color-navy-light] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span className="text-white text-lg font-medium pr-4">
          {item.question}
        </span>
        <span
          className={`
            text-[--color-emerald] text-2xl shrink-0
            transition-transform duration-300
            ${isOpen ? "rotate-45" : "rotate-0"}
          `}
        >
          +
        </span>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="px-6 pb-5 text-white/70 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main>
      <section className="relative flex items-center justify-center min-h-[35vh] px-6 py-24 bg-gradient-to-b from-[--color-navy] to-[--color-navy-light]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/70">
            What guests usually want to know before they step on board.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="text-center py-8">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Start the planner or send us a message and we&apos;ll walk you
            through it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
            <Button href="/book">Plan Your Charter</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
