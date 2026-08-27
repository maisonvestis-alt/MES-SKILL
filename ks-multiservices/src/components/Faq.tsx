import Reveal from "@/components/Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
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
  return (
    <section id="faq" className="bg-[color:var(--color-ink)] py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <Reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Ce qu&apos;on nous
            <br />
            demande le plus
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Accordion type="single" collapsible defaultValue={faqItems[0]?.question} className="flex flex-col gap-3">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
