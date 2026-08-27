import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { business, serviceAreaGroups, priorityCities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zone d'intervention — Le Havre et alentours",
  description:
    "KS Multiservices intervient au Havre, sur la Côte d'Albâtre, l'estuaire de la Seine et jusqu'à Rouen pour vos urgences de plomberie, serrurerie et vitrerie.",
};

export default function ZoneInterventionPage() {
  const prioritySlugsByName = new Map(priorityCities.map((c) => [c.name, c.slug]));

  return (
    <>
      <Header />
      <main id="contenu-principal" className="bg-[color:var(--color-ink)] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">Zone d&apos;intervention</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-5xl">
            Le Havre et son agglomération, et bien au-delà
          </h1>
          <p className="mt-5 max-w-2xl text-[color:var(--color-steel)]">
            Basée au Havre, l&apos;équipe {business.name} intervient en priorité sur Le
            Havre et son agglomération pour toute urgence de plomberie, serrurerie ou
            vitrerie, et se déplace également sur la Côte d&apos;Albâtre, l&apos;estuaire
            de la Seine et jusqu&apos;à Rouen selon les besoins.
          </p>

          <div className="mt-8">
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center gap-2.5 bg-[color:var(--color-accent)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-wide text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-accent-strong)]"
            >
              <PhoneCall size={18} weight="fill" aria-hidden="true" />
              Appeler le {business.phone}
            </a>
          </div>

          <h2 className="mt-16 font-display text-2xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
            Pages détaillées par commune
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {priorityCities.map((city) => (
              <Link
                key={city.slug}
                href={`/zone-intervention/${city.slug}`}
                className="border border-[color:var(--color-accent)] px-4 py-2 font-mono text-xs uppercase text-[color:var(--color-accent-strong)] transition hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
              >
                {city.name} →
              </Link>
            ))}
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {serviceAreaGroups.map((group) => (
              <section key={group.title}>
                <h3 className="font-display text-lg font-bold uppercase text-[color:var(--color-text-on-dark)]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.communes.map((commune) => {
                    const slug = prioritySlugsByName.get(commune);
                    return (
                      <li key={commune}>
                        {slug ? (
                          <Link
                            href={`/zone-intervention/${slug}`}
                            className="block border border-[color:var(--color-steel-line)] px-3.5 py-1.5 font-mono text-xs text-[color:var(--color-paper-dim)] transition hover:border-[color:var(--color-accent)]"
                          >
                            {commune}
                          </Link>
                        ) : (
                          <span className="block border border-[color:var(--color-steel-line)] px-3.5 py-1.5 font-mono text-xs text-[color:var(--color-steel)]">
                            {commune}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-16 border border-[color:var(--color-steel-line)] bg-[color:var(--color-ink-2)] p-6 text-sm text-[color:var(--color-steel)]">
            <p>
              Votre commune n&apos;apparaît pas dans cette liste ? Appelez le{" "}
              <a href={`tel:${business.phoneHref}`} className="font-bold text-[color:var(--color-accent-strong)]">
                {business.phone}
              </a>{" "}
              : nous confirmons en un instant si nous pouvons intervenir chez vous.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
