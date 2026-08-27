import { advantages, business } from "@/lib/content";

/**
 * « Pourquoi KS Multiservices ? »
 * Pas de cartes : une liste éditoriale, filets fins et chiffres — la promesse
 * se lit d'un trait, sans bruit graphique.
 */
export default function WhyUs() {
  return (
    <section id="pourquoi" className="section bg-[color:var(--color-mist)]">
      <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p data-reveal className="eyebrow text-[color:var(--text-on-light-muted)]">
            <span className="text-[color:var(--color-signal-ink)]">03</span>
            Pourquoi nous
          </p>
          <h2
            data-reveal
            data-reveal-delay="0.06"
            className="mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] text-[color:var(--text-on-light)]"
          >
            Pourquoi KS&nbsp;Multiservices&nbsp;?
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.12"
            className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-[color:var(--text-on-light-muted)]"
          >
            Une urgence se juge à quatre choses : la vitesse à laquelle on décroche, le
            sérieux de l&apos;intervention, la clarté des informations et la capacité à
            rester joignable.
          </p>

          <p
            data-reveal
            data-reveal-delay="0.16"
            className="mt-8 inline-flex items-center gap-3 border-l-2 border-[color:var(--color-signal)] pl-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-on-light)]"
          >
            {business.availabilityShort} · {business.address.city}
          </p>
        </div>

        <ul className="flex flex-col">
          {advantages.map((advantage, i) => (
            <li
              key={advantage.number}
              data-reveal
              data-reveal-delay={String(0.05 * i)}
              className="group relative border-t border-[color:var(--line-light)] py-8 last:border-b sm:py-10"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[2px] w-0 bg-[color:var(--color-signal)] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
              />
              <div className="flex gap-6 sm:gap-10">
                <span className="font-display text-[0.72rem] font-semibold tracking-[0.16em] text-[color:var(--color-signal-ink)]">
                  {advantage.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[1.45rem] text-[color:var(--text-on-light)] sm:text-[1.7rem]">
                    {advantage.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-[color:var(--text-on-light-muted)]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
