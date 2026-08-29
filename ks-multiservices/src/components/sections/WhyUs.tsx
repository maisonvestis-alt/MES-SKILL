import { differentiators } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";

/** Ce qui distingue KS — arguments réels, sans chiffres inventés. */
export default function WhyUs() {
  return (
    <section id="pourquoi" className="relative border-t border-[var(--line-void)] py-[var(--section-py)]">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <SectionHeader
          eyebrow="Pourquoi KS"
          title={
            <>
              L&apos;urgence gérée
              <br />
              comme un métier.
            </>
          }
        />

        <RevealGroup
          stagger={0.1}
          className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2"
        >
          {differentiators.map((item) => (
            <RevealItem key={item.title}>
              <div className="border-t border-[var(--line-void)] pt-6">
                <h3 className="font-condensed text-[length:var(--fs-h3)] uppercase leading-tight tracking-[0.01em] text-bone">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--color-text-muted)] md:text-base">
                  {item.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
