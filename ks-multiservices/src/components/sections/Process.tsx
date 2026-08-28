import { processSteps } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";

/** Le déroulé réel d'une intervention — une vraie séquence, donc numérotée. */
export default function Process() {
  return (
    <section id="process" className="relative border-t border-[var(--line-void)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Comment ça se passe"
              title={
                <>
                  De l&apos;appel à la
                  <br />
                  <span className="text-ember">tranquillité.</span>
                </>
              }
              intro="Un protocole clair, du premier coup de fil à la remise en sécurité. Pas d'improvisation, pas de rendez-vous à rallonge."
            />
          </div>
        </div>

        <RevealGroup stagger={0.08} className="lg:col-span-7">
          {processSteps.map((step) => (
            <RevealItem key={step.step}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-5 border-t border-[var(--line-void)] py-7 md:gap-9">
                <span
                  className="font-condensed text-5xl leading-[0.8] tracking-[0.02em] text-transparent md:text-7xl"
                  style={{ WebkitTextStroke: "1px var(--ember)" }}
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <div className="pt-1">
                  <h3 className="font-condensed text-2xl uppercase leading-none tracking-[0.02em] text-bone md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:rgba(244,241,234,0.66)] md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
