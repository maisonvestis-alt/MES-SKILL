import Link from "next/link";
import { PhoneCall, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { business, serviceCategories } from "@/lib/content";
import { serviceIcons } from "./icons";

const trustPoints = ["Intervention rapide", "Professionnel", "Le Havre et alentours"];

/**
 * Hero — première impression.
 *
 * Deux blocs en tension : la promesse (titre plein cadre, à gauche) et la
 * preuve opérationnelle (module « ligne d'urgence », à droite) qui donne au
 * visiteur en situation de panne le seul geste utile : appeler. Rien n'y est
 * décoratif — chaque élément répond à qui / quoi / où / comment.
 */
export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] pb-16 pt-[104px] md:pb-24 md:pt-[136px]"
    >
      {/* Décor : grille technique + halo orange très contenu */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-dark opacity-70" />
      <div
        aria-hidden="true"
        data-parallax="0.14"
        className="pointer-events-none absolute -right-40 -top-32 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,19,0.16) 0%, rgba(255,106,19,0.04) 42%, transparent 70%)",
        }}
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <div>
          <p
            data-reveal
            data-reveal-delay="0.05"
            className="eyebrow text-[color:var(--text-on-dark-muted)]"
          >
            <span className="text-[color:var(--color-signal)]">Le Havre</span>
            Dépannage 24h/24 · 7j/7
          </p>

          <h1
            data-reveal
            data-reveal-delay="0.12"
            className="mt-6 text-[clamp(2.6rem,7.4vw,5.1rem)] text-[color:var(--text-on-dark)]"
          >
            Dépannage d&apos;urgence
            <span className="block text-[color:var(--color-signal)]">au Havre</span>
          </h1>

          <p
            data-reveal
            data-reveal-delay="0.18"
            className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[0.95rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark)] sm:text-lg"
          >
            {serviceCategories.map((category, i) => (
              <span key={category.slug} className="inline-flex items-center gap-4">
                {category.name}
                {i < serviceCategories.length - 1 && (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-signal)]" />
                )}
              </span>
            ))}
          </p>

          <p
            data-reveal
            data-reveal-delay="0.24"
            className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-[color:var(--text-on-dark-muted)] sm:text-lg"
          >
            Porte claquée, fuite d&apos;eau, vitre brisée : KS Multiservices intervient
            rapidement au Havre et dans les alentours, de jour comme de nuit, pour
            remettre votre logement en sécurité.
          </p>

          <div data-reveal data-reveal-delay="0.3" className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${business.phoneHref}`}
              className="btn btn-signal px-8 py-4 text-base"
              data-cta="hero-call"
            >
              <PhoneCall size={20} weight="fill" aria-hidden="true" />
              Appeler maintenant
            </a>
            <Link href="#contact" className="btn btn-ghost-dark px-8 py-4 text-base">
              Demander un devis
            </Link>
          </div>

          <ul
            data-reveal
            data-reveal-delay="0.36"
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2.5 font-display text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-on-dark-muted)] sm:text-[0.7rem] sm:tracking-[0.16em]"
              >
                <span aria-hidden="true" className="h-px w-5 bg-[color:var(--color-signal)]" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Module « ligne d'urgence » */}
        <aside
          data-reveal
          data-reveal-delay="0.2"
          className="notch relative border border-[color:var(--line-dark)] bg-[color:var(--color-steel)]/70 p-7 backdrop-blur-sm sm:p-9"
        >
          <div className="flex items-center justify-between gap-4 border-b border-[color:var(--line-dark)] pb-5">
            <span className="inline-flex items-center gap-2.5 font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark)]">
              <span className="live-dot h-2 w-2 rounded-full bg-[color:var(--color-signal)]" aria-hidden="true" />
              Ligne d&apos;urgence
            </span>
            <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-on-dark-muted)]">
              {business.availabilityShort}
            </span>
          </div>

          <a
            href={`tel:${business.phoneHref}`}
            className="group mt-6 block"
            data-cta="hero-panel-call"
          >
            <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark-muted)]">
              Appelez directement
            </span>
            <span className="mt-2 flex items-center gap-3 font-display text-[clamp(1.6rem,3.4vw,2.1rem)] font-extrabold tracking-[-0.02em] text-[color:var(--text-on-dark)] transition-colors group-hover:text-[color:var(--color-signal)]">
              {business.phone}
            </span>
          </a>

          <ul className="mt-7 flex flex-col divide-y divide-[color:var(--line-dark)] border-y border-[color:var(--line-dark)]">
            {serviceCategories.map((category) => {
              const Icon = serviceIcons[category.slug as keyof typeof serviceIcons];
              return (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="group flex min-w-0 items-center gap-4 py-4 transition-colors"
                  >
                    <Icon
                      size={22}
                      className="shrink-0 text-[color:var(--color-signal)] transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-bold uppercase tracking-[0.1em] text-[color:var(--text-on-dark)]">
                        {category.name}
                      </span>
                      <span className="block truncate text-[0.8rem] text-[color:var(--text-on-dark-muted)]">
                        {category.lead}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-5 text-[0.8rem] leading-relaxed text-[color:var(--text-on-dark-muted)]">
            {business.address.full}
          </p>
        </aside>
      </div>

      <div className="container-page relative mt-14 hidden md:block">
        <a
          href="#urgence"
          className="inline-flex items-center gap-3 font-display text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-on-dark-muted)] transition-colors hover:text-[color:var(--color-signal)]"
        >
          <ArrowDown size={14} weight="bold" aria-hidden="true" />
          Voir nos interventions
        </a>
      </div>
    </section>
  );
}
