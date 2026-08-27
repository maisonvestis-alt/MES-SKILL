import Link from "next/link";
import { MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { business, serviceAreaGroups } from "@/lib/content";

export default function ServiceArea() {
  return (
    <section id="zone" className="bg-ink py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
            Zone d&apos;intervention
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Basés au Havre, mobilisés pour votre quartier
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-on-dark-muted)]">
            KS Multiservices intervient au Havre et dans son agglomération pour vos
            urgences de plomberie, serrurerie et vitrerie, ainsi que pour vos projets
            de rénovation de salle de bain. Une équipe locale, qui connaît le bâti
            havrais.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {serviceAreaGroups.map((group) => (
              <li
                key={group.title}
                className="rounded-full border border-[color:var(--color-border-dark)] px-4 py-1.5 text-sm text-[color:var(--color-text-on-dark-muted)]"
              >
                {group.title}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[color:var(--color-border-dark)] p-5">
            <MapPin size={22} className="mt-0.5 shrink-0 text-[color:var(--color-accent)]" aria-hidden="true" />
            <div className="text-sm text-[color:var(--color-text-on-dark-muted)]">
              <p className="font-semibold text-[color:var(--color-text-on-dark)]">{business.name}</p>
              <p>{business.address.full}</p>
              <p className="mt-1">
                Votre commune n&apos;est pas listée ? Appelez-nous, nous confirmons la
                zone en un instant.
              </p>
            </div>
          </div>

          <Link
            href="/zone-intervention"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-accent)] transition hover:text-[color:var(--color-accent-strong)]"
          >
            Voir toutes les communes couvertes
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="relative flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-[color:var(--color-border-dark)] bg-[color:var(--color-surface)] sm:h-96"
        >
          <svg viewBox="0 0 400 300" className="h-full w-full opacity-90">
            <defs>
              <radialGradient id="areaGlow" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="rgba(217,102,46,0.35)" />
                <stop offset="100%" stopColor="rgba(217,102,46,0)" />
              </radialGradient>
            </defs>
            <rect width="400" height="300" fill="url(#areaGlow)" />
            {[80, 130, 180].map((r) => (
              <circle
                key={r}
                cx="200"
                cy="150"
                r={r}
                fill="none"
                stroke="var(--color-border-dark)"
                strokeDasharray="4 6"
              />
            ))}
            <circle cx="200" cy="150" r="8" fill="var(--color-accent)" />
            <circle cx="200" cy="150" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
