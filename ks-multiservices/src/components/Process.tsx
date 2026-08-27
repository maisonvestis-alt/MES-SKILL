import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business, processSteps } from "@/lib/content";
import SectionHeading from "./SectionHeading";

/**
 * Processus d'intervention.
 * Le rail vertical se remplit d'orange au fil du scroll (ScrollTrigger scrubé) :
 * l'animation raconte littéralement l'avancement de l'intervention.
 */
export default function Process() {
  return (
    <section id="processus" className="section bg-[color:var(--color-ink)]">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Déroulé"
          tone="dark"
          title={
            <>
              De votre appel à la <span className="text-[color:var(--color-signal)]">résolution</span>
            </>
          }
          intro="Quatre étapes, sans zone d'ombre : vous savez à tout moment où en est votre dépannage."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-20">
          <ol data-progress-track className="relative flex flex-col gap-12 pl-10 sm:gap-16 sm:pl-14">
            {/* Rail + progression */}
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[color:var(--line-dark)] sm:left-[11px]"
            />
            <span
              aria-hidden="true"
              data-progress
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-[color:var(--color-signal)] sm:left-[11px]"
              style={{ transform: "scaleY(0)" }}
            />

            {processSteps.map((step, i) => (
              <li key={step.step} data-reveal data-reveal-delay={String(0.04 * i)} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-10 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-[color:var(--color-signal)] bg-[color:var(--color-ink)] sm:-left-14 sm:h-[23px] sm:w-[23px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-signal)]" />
                </span>

                <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--text-on-dark-muted)]">
                  Étape {step.step}
                </span>
                <h3 className="mt-3 text-[1.5rem] text-[color:var(--text-on-dark)] sm:text-[1.9rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-[color:var(--text-on-dark-muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <aside
            data-reveal
            className="notch h-fit border border-[color:var(--line-dark)] bg-[color:var(--color-steel)] p-7 lg:sticky lg:top-32"
          >
            <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-signal)]">
              L&apos;étape la plus rapide
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[color:var(--text-on-dark)]">
              Tout commence par un appel. En quelques questions, nous savons quoi
              emporter et quand nous pouvons être chez vous.
            </p>
            <a
              href={`tel:${business.phoneHref}`}
              className="btn btn-signal mt-7 w-full"
              data-cta="process-call"
            >
              <PhoneCall size={18} weight="fill" aria-hidden="true" />
              {business.phone}
            </a>
            <p className="mt-4 text-center text-[0.78rem] text-[color:var(--text-on-dark-muted)]">
              {business.availability}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
