import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="intervention" className="bg-[color:var(--color-ink)] py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Protocole d&apos;intervention</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Du premier appel
            <br />
            à la solution
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((stepItem, i) => (
            <Reveal key={stepItem.step} as="li" delay={i * 0.07}>
              <div className="border-l-2 border-[color:var(--color-accent)] pl-5">
                <span className="font-mono text-xs font-bold text-[color:var(--color-accent-strong)]">
                  Étape {stepItem.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
                  {stepItem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-steel)]">
                  {stepItem.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
