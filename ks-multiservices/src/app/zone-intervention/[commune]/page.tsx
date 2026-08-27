import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneCall, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { business, priorityCities, serviceCategories, reviews } from "@/lib/content";

const siteUrl = "https://ksmultiservices.fr";

export function generateStaticParams() {
  return priorityCities.map((city) => ({ commune: city.slug }));
}

function getCity(slug: string) {
  return priorityCities.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ commune: string }>;
}): Promise<Metadata> {
  const { commune } = await params;
  const city = getCity(commune);
  if (!city) return {};

  return {
    title: `Plombier, serrurier, vitrier à ${city.name} — Intervention en 45 min`,
    description: `KS Multiservices intervient à ${city.name} (${city.postalCode}) pour vos urgences de plomberie, serrurerie et vitrerie, en moins de 45 minutes, devis gratuit.`,
    alternates: { canonical: `${siteUrl}/zone-intervention/${city.slug}` },
    openGraph: {
      title: `Plombier, serrurier, vitrier à ${city.name} — KS Multiservices`,
      description: city.intro,
      url: `${siteUrl}/zone-intervention/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ commune: string }>;
}) {
  const { commune } = await params;
  const city = getCity(commune);
  if (!city) notFound();

  const otherCities = priorityCities.filter((c) => c.slug !== city.slug);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    telephone: business.phone,
    areaServed: { "@type": "City", name: city.name, postalCode: city.postalCode },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressCountry: "FR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.rating,
      reviewCount: reviews.count,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Zone d'intervention", item: `${siteUrl}/zone-intervention` },
      { "@type": "ListItem", position: 3, name: city.name, item: `${siteUrl}/zone-intervention/${city.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main id="contenu-principal">
        <section className="bg-[color:var(--color-ink)] pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-page">
            <nav aria-label="Fil d'Ariane" className="font-mono text-xs text-[color:var(--color-steel)]">
              <Link href="/" className="transition hover:text-[color:var(--color-accent)]">Accueil</Link>{" "}
              <span aria-hidden="true">/</span>{" "}
              <Link href="/zone-intervention" className="transition hover:text-[color:var(--color-accent)]">
                Zone d&apos;intervention
              </Link>{" "}
              <span aria-hidden="true">/</span>{" "}
              <span className="text-[color:var(--color-text-on-dark)]">{city.name}</span>
            </nav>

            <p className="eyebrow mt-8">{city.postalCode} — {city.character}</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-5xl">
              Plombier, serrurier, vitrier à {city.name}
            </h1>
            <p className="mt-5 max-w-2xl text-[color:var(--color-steel)]">{city.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex items-center gap-2.5 bg-[color:var(--color-accent)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-wide text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-accent-strong)]"
              >
                <PhoneCall size={18} weight="fill" aria-hidden="true" />
                Intervention urgente — {business.phone}
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-[color:var(--color-hairline)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-wide text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-ink-2)] py-16 md:py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
              Nos services à {city.name}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services/${cat.slug}`}
                  className="flex items-start gap-2.5 border border-[color:var(--color-steel-line)] bg-[color:var(--color-ink)] p-5 text-sm text-[color:var(--color-paper-dim)] transition hover:border-[color:var(--color-accent)]"
                >
                  <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-[color:var(--color-accent-strong)]" aria-hidden="true" />
                  <span>
                    <span className="block font-display text-base font-bold uppercase text-[color:var(--color-text-on-dark)]">
                      {cat.name}
                    </span>
                    {cat.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-ink)] py-16 md:py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
              Autres communes desservies
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/zone-intervention/${c.slug}`}
                  className="border border-[color:var(--color-steel-line)] px-4 py-2 font-mono text-xs uppercase text-[color:var(--color-steel)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/zone-intervention"
                className="border border-[color:var(--color-accent)] px-4 py-2 font-mono text-xs uppercase text-[color:var(--color-accent-strong)]"
              >
                Voir toute la zone d&apos;intervention →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallButton />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
