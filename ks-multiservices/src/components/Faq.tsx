"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { faqItems } from "@/lib/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent-strong)]">
          Questions fréquentes
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-light)] sm:text-4xl">
          Ce que nos clients nous demandent le plus
        </h2>

        <div className="mt-10 flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[color:var(--color-border-light)] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-[color:var(--color-text-on-light)]">
                    {item.question}
                  </span>
                  <CaretDown
                    size={18}
                    weight="bold"
                    aria-hidden="true"
                    className={`shrink-0 text-[color:var(--color-accent-strong)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid overflow-hidden text-sm leading-relaxed text-[color:var(--color-text-on-light-muted)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 px-6 pb-5">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
