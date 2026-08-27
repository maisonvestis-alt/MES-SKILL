import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneCall, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { business, serviceCategories, pricing, pricingNote } from "@/lib/content";

const siteUrl = "https://ksmultiservices.fr";

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

function getCategory(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: `${category.name} au Havre — Intervention en 45 min`,
    description: `${category.pageIntro} Devis gratuit, disponible 24h/24 et 7j/7.`,
    alternates: { canonical: `${siteUrl}/services/${category.slug}` },
    openGraph: {
      title: `${category.name} au Havre — KS Multiservices`,
      description: category.pageIntro,
      url: `${siteUrl}/services/${category.slug}`,
    },
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryPricing = pricing.find((p) => p.categorySlug === category.slug);
  const otherCategories = serviceCategories.filter((c) => c.slug !== category.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: category.name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
      telephone: business.phone,
    },
    areaServed: { "@type": "City", name: "Le Havre" },
    description: category.pageIntro,
    offers: categoryPricing?.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.label },
      priceCurrency: "EUR",
      price: item.price.replace(/[^\d]/g, ""),
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${siteUrl}/services/${category.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main id="contenu-principal">
      <section className="bg-ink py-24 pt-32 md:py-32 md:pt-40">
        <div className="container-page">
          <nav aria-label="Fil d'Ariane" className="text-sm text-[color:var(--color-text-on-dark-muted)]">
            <Link href="/" className="transition hover:text-[color:var(--color-accent)]">
              Accueil
            </Link>{" "}
            <span aria-hidden="true">/</span>{" "}
            <Link href="/#services" className="transition hover:text-[color:var(--color-accent)]">
              Services
            </Link>{" "}
            <span aria-hidden="true">/</span>{" "}
            <span className="text-[color:var(--color-text-on-dark)]">{category.name}</span>
          </nav>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
            {category.name} — Le Havre
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-[color:var(--color-text-on-dark)] sm:text-4xl md:text-5xl">
            {category.name} : dépannage d&apos;urgence en moins de 45 minutes
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-on-dark-muted)]">
            {category.pageIntro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-accent)] px-7 py-4 text-base font-semibold text-ink transition hover:bg-[color:var(--color-accent-strong)]"
            >
              <PhoneCall size={20} weight="fill" aria-hidden="true" />
              Intervention urgente — {business.phone}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-dark)] px-7 py-4 text-base font-semibold text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-text-on-light)]">
              Nos prestations en {category.name.toLowerCase()}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {category.items.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-start gap-2.5 rounded-2xl border border-[color:var(--color-border-light)] bg-white p-4 text-sm text-[color:var(--color-text-on-light-muted)]"
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-[color:var(--color-accent-strong)]"
                    aria-hidden="true"
                  />
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-[color:var(--color-text-on-light)]">
                Autres urgences que nous traitons
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {otherCategories.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="rounded-full border border-[color:var(--color-border-light)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-text-on-light)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]"
                  >
                    {other.name} →
                  </Link>
                ))}
                <Link
                  href="/zone-intervention"
                  className="rounded-full border border-[color:var(--color-border-light)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-text-on-light)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]"
                >
                  Zone d&apos;intervention →
                </Link>
              </div>
            </div>
          </div>

          {categoryPricing && (
            <div className="h-fit rounded-3xl border border-[color:var(--color-border-light)] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(20,23,28,0.35)]">
              <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
                Tarifs {category.name.toLowerCase()}
              </h2>
              <ul className="mt-5 flex flex-col gap-3 border-t border-[color:var(--color-border-light)] pt-5 text-sm">
                {categoryPricing.items.map((item) => (
                  <li key={item.label} className="flex items-baseline justify-between gap-4">
                    <span className="text-[color:var(--color-text-on-light-muted)]">{item.label}</span>
                    <span className="whitespace-nowrap font-display font-semibold text-[color:var(--color-text-on-light)]">
                      à partir de {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[color:var(--color-text-on-light-muted)]">{pricingNote}</p>
            </div>
          )}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
