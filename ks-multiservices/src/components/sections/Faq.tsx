import { Plus } from "@phosphor-icons/react/dist/ssr";
import { business, faq } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";

/** FAQ visible (accordéon natif <details>, sans JS) — miroir du JSON-LD FAQPage. */
export default function Faq() {
  return (
    <section id="faq" className="relative border-t border-[var(--line-void)] py-[var(--section-py)]">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="Questions fréquentes" title="Bon à savoir." />
            <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
              Une autre question ? Le plus simple reste l&apos;appel.
            </p>
            <a
              href={`tel:${business.phoneHref}`}
              className="mt-4 inline-flex font-mono-tech text-sm uppercase tracking-[0.12em] text-bone transition-colors duration-300 hover:text-ember"
            >
              {business.phone}
            </a>
          </div>
        </div>

        <RevealGroup stagger={0.06} className="lg:col-span-8">
          {faq.map((entry) => (
            <RevealItem key={entry.question}>
              <details className="group border-t border-[var(--line-void)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-bone marker:hidden [&::-webkit-details-marker]:hidden">
                  {entry.question}
                  <Plus
                    size={20}
                    className="shrink-0 text-ember transition-transform duration-300 ease-[var(--ease-signature)] group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-[color:var(--color-text-muted)] md:text-base">
                  {entry.answer}
                </p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
