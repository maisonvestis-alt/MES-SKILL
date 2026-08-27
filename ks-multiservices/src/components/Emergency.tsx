import { PhoneCall, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { business, emergencySituations } from "@/lib/content";
import { emergencyIcons } from "./icons";

/**
 * Section urgence — le triage.
 * Le visiteur arrive avec un problème précis ; ces trois cartes lui permettent
 * de se reconnaître en deux secondes, puis d'appeler.
 */
export default function Emergency() {
  return (
    <section id="urgence" className="section relative bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p data-reveal className="eyebrow text-[color:var(--text-on-light-muted)]">
              <span className="text-[color:var(--color-signal-ink)]">01</span>
              Urgences
            </p>
            <h2
              data-reveal
              data-reveal-delay="0.06"
              className="mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] text-[color:var(--text-on-light)]"
            >
              Une urgence ? Nous sommes là.
            </h2>
          </div>
          <p
            data-reveal
            data-reveal-delay="0.12"
            className="max-w-sm text-[0.95rem] leading-relaxed text-[color:var(--text-on-light-muted)]"
          >
            Trois situations qui n&apos;attendent pas. Si la vôtre y ressemble, un appel
            suffit — nous qualifions le problème avec vous et nous nous déplaçons.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {emergencySituations.map((situation, i) => {
            const Icon = emergencyIcons[situation.icon as keyof typeof emergencyIcons];
            return (
              <article
                key={situation.slug}
                data-reveal
                data-reveal-delay={String(0.06 * i)}
                className="notch group relative isolate flex flex-col overflow-hidden border border-[color:var(--line-light)] bg-[color:var(--color-mist)] p-7 transition-colors duration-300 hover:bg-[color:var(--color-ink)] sm:p-8"
              >
                {/* Hachures orange révélées au survol */}
                <span
                  aria-hidden="true"
                  className="hatch pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--line-light)] bg-white text-[color:var(--color-signal-ink)] transition-all duration-300 group-hover:border-[color:var(--color-signal)] group-hover:bg-[color:var(--color-signal)] group-hover:text-[#1a0c02]">
                  <Icon size={26} />
                </span>

                <h3 className="mt-6 text-[1.35rem] text-[color:var(--text-on-light)] transition-colors duration-300 group-hover:text-[color:var(--text-on-dark)]">
                  {situation.title}
                </h3>

                <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--text-on-light-muted)] transition-colors duration-300 group-hover:text-[color:var(--text-on-dark-muted)]">
                  {situation.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {situation.signals.map((signal) => (
                    <li
                      key={signal}
                      className="rounded-full border border-[color:var(--line-light)] px-3 py-1 font-display text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-on-light-muted)] transition-colors duration-300 group-hover:border-[color:var(--line-dark-strong)] group-hover:text-[color:var(--text-on-dark-muted)]"
                    >
                      {signal}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${situation.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-8 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-signal-ink)] transition-colors duration-300 group-hover:text-[color:var(--color-signal)]"
                >
                  Voir nos interventions
                  <ArrowUpRight
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  <span className="absolute inset-0" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bandeau d'appel */}
        <div
          data-reveal
          className="notch mt-6 flex flex-col items-start gap-6 border border-[color:var(--line-light)] bg-[color:var(--color-signal-soft)] p-7 sm:p-9 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-signal-ink)]">
              Besoin d&apos;une intervention ?
            </p>
            <p className="mt-3 max-w-lg text-[1.05rem] leading-relaxed text-[color:var(--text-on-light)]">
              Décrivez-nous la situation : nous vous disons immédiatement ce qui peut
              être fait et sous quel délai.
            </p>
          </div>
          <a
            href={`tel:${business.phoneHref}`}
            className="btn btn-signal px-7 py-4 text-base"
            data-cta="urgence-call"
          >
            <PhoneCall size={19} weight="fill" aria-hidden="true" />
            Appeler KS Multiservices
          </a>
        </div>
      </div>
    </section>
  );
}
