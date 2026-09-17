/**
 * FaqSection — new section (not in the original reference page), styled to
 * match Sanjeevika's visual language. The accordion opens/closes with a
 * CSS grid-template-rows tween (0fr -> 1fr) rather than max-height, so it
 * animates smoothly to the answer's real height with no JS measuring, plus
 * a rotating chevron and a soft press state so it feels touch-friendly.
 */

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  tone: "rose" | "teal";
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    tone: "rose",
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Walk-ins are always welcome at Sanjeevika. That said, calling ahead helps us line up a slot with Dr. Ruby Verma or Dr. Ashish Verma at a time that suits you, especially on busy days.",
  },
  {
    tone: "rose",
    question: "What should I bring for my first prenatal visit?",
    answer:
      "Any previous reports or scans you have, your last menstrual period date, and a list of medications you're currently taking, if any. We'll guide you through everything else during the consult.",
  },
  {
    tone: "teal",
    question: "At what age should my child's vaccinations start?",
    answer:
      "Vaccination begins right from birth as per the standard immunization schedule. Dr. Ashish Verma will walk you through the full schedule and set reminders for upcoming doses.",
  },
  {
    tone: "rose",
    question: "Do you see patients for PCOS or fertility concerns?",
    answer:
      "Yes. These consultations are handled with full confidentiality, and we take a straightforward approach — only recommending tests that are actually needed for your situation.",
  },
  {
    tone: "teal",
    question: "Is the clinic open on Sundays?",
    answer:
      "Yes, Sanjeevika is open all days of the week. We'd still suggest calling ahead to confirm the doctor's timing before you head over.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq bg-paper" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag text-hi">अक्सर पूछे जाने वाले प्रश्न</span>
          <h2 className="heading-section mt-3.5">Frequently asked questions</h2>
          <p className="body-base mt-[14px] text-[1.02rem]">
            Everything families usually ask before their first visit to
            Sanjeevika.
          </p>
        </div>

        <div className="mx-auto flex max-w-[760px] flex-col gap-4">
          {FAQS.map((item, i) => (
            <FaqRow
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isRose = item.tone === "rose";

  return (
    <div
      className={`card-surface overflow-hidden transition-shadow duration-300 ${
        isOpen ? "shadow-card" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-cream/60 active:scale-[0.997]"
      >
        <span
          className={`h-2 w-2 flex-none rounded-full ${
            isRose ? "bg-rose" : "bg-teal"
          }`}
        />
        <span className="flex-1 text-[1rem] font-semibold text-ink">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-none text-ink-soft transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pl-[38px] text-[0.95rem] leading-relaxed text-ink-soft">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}