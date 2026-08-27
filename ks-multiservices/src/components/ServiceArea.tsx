import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business, serviceArea } from "@/lib/content";
import CoverageMap from "./CoverageMap";

/**
 * Zone d'intervention — la section qui répond à « intervenez-vous chez moi ? »
 * et qui porte, au passage, le maillage local (quartiers du Havre + communes
 * de l'agglomération réellement existantes).
 */
export default function ServiceArea() {
  return (
    <section id="zone" className="section bg-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <p data-reveal className="eyebrow text-[color:var(--text-on-light-muted)]">
            <span className="text-[color:var(--color-signal-ink)]">05</span>
            Zone d&apos;intervention
          </p>
          <h2
            data-reveal
            data-reveal-delay="0.06"
            className="mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] text-[color:var(--text-on-light)]"
          >
            KS Multiservices intervient au Havre et dans les environs
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.12"
            className="mt-5 text-[1.0625rem] leading-relaxed text-[color:var(--text-on-light-muted)]"
          >
            Basés au Havre, nous couvrons la ville et son agglomération. Un ancrage
            local, c&apos;est surtout moins de route entre votre appel et notre arrivée.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div data-reveal>
            <h3 className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-light-muted)]">
              Quartiers du Havre
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceArea.districts.map((district) => (
                <li
                  key={district}
                  className="rounded-full border border-[color:var(--line-light)] bg-[color:var(--color-mist)] px-4 py-2 text-[0.85rem] text-[color:var(--text-on-light)] transition-colors hover:border-[color:var(--color-signal)] hover:bg-[color:var(--color-signal-soft)]"
                >
                  {district}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-light-muted)]">
              Communes des alentours
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceArea.towns.map((town) => (
                <li
                  key={town.name}
                  className="rounded-full border border-[color:var(--line-light)] px-4 py-2 text-[0.85rem] text-[color:var(--text-on-light)] transition-colors hover:border-[color:var(--color-signal)] hover:bg-[color:var(--color-signal-soft)]"
                >
                  {town.name}
                </li>
              ))}
            </ul>

            <div className="notch mt-10 flex flex-col gap-5 border border-[color:var(--line-light)] bg-[color:var(--color-mist)] p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-[0.92rem] leading-relaxed text-[color:var(--text-on-light-muted)]">
                {serviceArea.note}
              </p>
              <a
                href={`tel:${business.phoneHref}`}
                className="btn btn-signal shrink-0 px-6 py-3.5"
                data-cta="zone-call"
              >
                <PhoneCall size={17} weight="fill" aria-hidden="true" />
                Vérifier ma commune
              </a>
            </div>
          </div>

          <div data-reveal data-reveal-delay="0.1" className="lg:sticky lg:top-32 lg:self-start">
            <CoverageMap />
          </div>
        </div>
      </div>
    </section>
  );
}
