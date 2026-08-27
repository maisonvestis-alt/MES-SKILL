import Link from "next/link";
import { MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { business, priorityCities } from "@/lib/content";

export default function ServiceArea() {
  return (
    <section id="zone" className="bg-[color:var(--color-ink-2)] py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Zone d&apos;intervention</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Basés au Havre,
            <br />
            mobilisés vite
          </h2>
          <p className="mt-5 max-w-xl text-[color:var(--color-steel)]">
            KS Multiservices intervient au Havre et dans son agglomération pour vos
            urgences de plomberie, serrurerie et vitrerie, ainsi que pour vos projets
            de rénovation de salle de bain.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {priorityCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/zone-intervention/${city.slug}`}
                  className="block border border-[color:var(--color-steel-line)] px-3.5 py-1.5 font-mono text-xs uppercase text-[color:var(--color-steel)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-start gap-3 border border-[color:var(--color-steel-line)] p-5">
            <MapPin size={20} className="mt-0.5 shrink-0 text-[color:var(--color-accent)]" aria-hidden="true" />
            <div className="text-sm text-[color:var(--color-steel)]">
              <p className="font-bold text-[color:var(--color-text-on-dark)]">{business.name}</p>
              <p>{business.address.full}</p>
              <p className="mt-1">
                Votre commune n&apos;est pas listée ? Appelez-nous, nous confirmons la
                zone en un instant.
              </p>
            </div>
          </div>

          <Link
            href="/zone-intervention"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-[color:var(--color-accent-strong)]"
          >
            Voir toutes les communes couvertes
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="bracket-frame relative flex h-72 items-center justify-center overflow-hidden border border-[color:var(--color-steel-line)] bg-[color:var(--color-ink)] sm:h-96">
          <svg viewBox="0 0 400 300" className="h-full w-full opacity-90" aria-hidden="true">
            <defs>
              <radialGradient id="areaGlow" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="rgba(217,102,46,0.35)" />
                <stop offset="100%" stopColor="rgba(217,102,46,0)" />
              </radialGradient>
            </defs>
            <rect width="400" height="300" fill="url(#areaGlow)" />
            {[80, 130, 180].map((r) => (
              <circle key={r} cx="200" cy="150" r={r} fill="none" stroke="var(--color-hairline)" strokeDasharray="4 6" />
            ))}
            <circle cx="200" cy="150" r="8" fill="var(--color-accent)" />
            <circle cx="200" cy="150" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
