import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business, serviceAreaGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zone d'intervention — Le Havre et alentours",
  description:
    "KS Multiservices intervient au Havre, sur la Côte d'Albâtre, l'estuaire de la Seine et jusqu'à Rouen pour vos urgences de plomberie, serrurerie et vitrerie.",
};

export default function ZoneInterventionPage() {
  return (
    <main id="contenu-principal" className="mx-auto max-w-4xl px-5 py-24 md:py-32">
      <Link href="/" className="text-sm font-medium text-[color:var(--color-accent-strong)]">
        ← Retour à l&apos;accueil
      </Link>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent-strong)]">
        Zone d&apos;intervention
      </p>
      <h1 className="font-display mt-4 text-3xl font-semibold text-[color:var(--color-text-on-light)] sm:text-4xl">
        Le Havre et son agglomération, et bien au-delà
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--color-text-on-light-muted)]">
        Basée au Havre, l&apos;équipe {business.name} intervient en priorité sur Le
        Havre et son agglomération pour toute urgence de plomberie, serrurerie ou
        vitrerie, et se déplace également sur la Côte d&apos;Albâtre, l&apos;estuaire
        de la Seine et jusqu&apos;à Rouen selon les besoins.
      </p>

      <div className="mt-8">
        <a
          href={`tel:${business.phoneHref}`}
          className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-accent)] px-6 py-3.5 text-base font-semibold text-ink transition hover:bg-[color:var(--color-accent-strong)]"
        >
          <PhoneCall size={18} weight="fill" aria-hidden="true" />
          Appeler le {business.phone}
        </a>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        {serviceAreaGroups.map((group) => (
          <section key={group.title}>
            <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
              {group.title}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.communes.map((commune) => (
                <li
                  key={commune}
                  className="rounded-full border border-[color:var(--color-border-light)] bg-paper-2 px-3.5 py-1.5 text-sm text-[color:var(--color-text-on-light-muted)]"
                >
                  {commune}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-[color:var(--color-border-light)] bg-paper-2 p-6 text-sm text-[color:var(--color-text-on-light-muted)]">
        <p>
          Votre commune n&apos;apparaît pas dans cette liste ? Appelez le{" "}
          <a href={`tel:${business.phoneHref}`} className="font-semibold text-[color:var(--color-accent-strong)]">
            {business.phone}
          </a>{" "}
          : nous confirmons en un instant si nous pouvons intervenir chez vous.
        </p>
      </div>
    </main>
  );
}
