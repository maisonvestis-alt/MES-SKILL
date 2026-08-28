import { differentiators } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";

/** Ce qui distingue KS — arguments réels, sans chiffres inventés. */
export default function WhyUs() {
  return (
    <section id="pourquoi" className="relative border-t border-[var(--line-void)] py-24 md:py-32">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <SectionHeader
          eyebrow="Pourquoi KS"
          title={
            <>
              L&apos;urgence gérée
              <br />
              <span className="text-ember">comme un métier.</span>
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
                <h3 className="font-condensed text-2xl uppercase leading-tight tracking-[0.01em] text-bone md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:rgba(244,241,234,0.66)] md:text-base">
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
