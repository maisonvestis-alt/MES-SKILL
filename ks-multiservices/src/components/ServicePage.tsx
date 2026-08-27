import Link from "next/link";
import { ArrowRight, CaretRight, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import {
  business,
  serviceArea,
  serviceCategories,
  siteUrl,
  type ServiceCategory,
} from "@/lib/content";
import Header from "./Header";
import Footer from "./Footer";
import MobileCallBar from "./MobileCallBar";
import ScrollMotion from "./ScrollMotion";
import Process from "./Process";
import Contact from "./Contact";
import FinalCta from "./FinalCta";
import ServiceVisual from "./ServiceVisual";
import { serviceIcons } from "./icons";

/**
 * Gabarit des pages métier (/serrurerie, /plomberie, /vitrerie).
 *
 * Ces pages existent pour une raison de fond : une recherche locale se fait
 * métier par métier (« serrurier Le Havre », « plombier urgence Le Havre »).
 * Chacune a donc son H1, son URL propre et ses données structurées, sans
 * dupliquer le contenu de l'accueil — elle décline le même système graphique.
 */
export default function ServicePage({ category }: { category: ServiceCategory }) {
  const Icon = serviceIcons[category.slug as keyof typeof serviceIcons];
  const others = serviceCategories.filter((item) => item.slug !== category.slug);
  const categoryIndex = serviceCategories.findIndex((item) => item.slug === category.slug) + 1;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${category.name} — ${business.name}`,
        serviceType: `${category.trade} au Havre`,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: [
          { "@type": "City", name: serviceArea.city },
          ...serviceArea.towns.map((town) => ({ "@type": "City", name: town.name })),
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Interventions ${category.name.toLowerCase()}`,
          itemListElement: category.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.label },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: category.name,
            item: `${siteUrl}/${category.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <ScrollMotion />
      <Header />

      <main id="contenu">
        {/* Hero métier */}
        <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] pb-16 pt-[104px] md:pb-24 md:pt-[136px]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-dark opacity-70" />
          <div
            aria-hidden="true"
            data-parallax="0.12"
            className="pointer-events-none absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,106,19,0.16) 0%, transparent 68%)",
            }}
          />

          <div className="container-page relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <nav aria-label="Fil d'Ariane" data-reveal>
                <ol className="flex items-center gap-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-on-dark-muted)]">
                  <li>
                    <Link href="/" className="inline-block py-1 transition-colors hover:text-[color:var(--color-signal)]">
                      Accueil
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <CaretRight size={11} weight="bold" />
                  </li>
                  <li className="text-[color:var(--color-signal)]">{category.name}</li>
                </ol>
              </nav>

              <h1
                data-reveal
                data-reveal-delay="0.08"
                className="mt-7 text-[clamp(2.3rem,6.4vw,4.4rem)] text-[color:var(--text-on-dark)]"
              >
                {category.trade}
                <span className="block text-[color:var(--color-signal)]">au Havre</span>
              </h1>

              <p
                data-reveal
                data-reveal-delay="0.14"
                className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[color:var(--text-on-dark-muted)] sm:text-lg"
              >
                {category.description}
              </p>

              <ul data-reveal data-reveal-delay="0.18" className="mt-7 flex flex-wrap gap-2">
                {category.urgencies.map((urgency) => (
                  <li
                    key={urgency}
                    className="rounded-full border border-[color:var(--line-dark-strong)] px-4 py-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--text-on-dark)]"
                  >
                    {urgency}
                  </li>
                ))}
              </ul>

              <div
                data-reveal
                data-reveal-delay="0.24"
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href={`tel:${business.phoneHref}`}
                  className="btn btn-signal px-8 py-4 text-base"
                  data-cta={`${category.slug}-hero-call`}
                >
                  <PhoneCall size={20} weight="fill" aria-hidden="true" />
                  Appeler maintenant
                </a>
                <Link href="#contact" className="btn btn-ghost-dark px-8 py-4 text-base">
                  Demander un devis
                </Link>
              </div>

              <p
                data-reveal
                data-reveal-delay="0.3"
                className="mt-7 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-on-dark-muted)]"
              >
                {business.availabilityShort} · {serviceArea.radiusLabel}
              </p>
            </div>

            <div data-reveal data-reveal-delay="0.16" className="notch overflow-hidden border border-[color:var(--line-dark)]">
              <ServiceVisual
                slug={category.slug as keyof typeof serviceIcons}
                name={category.name}
                index={String(categoryIndex).padStart(2, "0")}
                src={category.image}
                className="h-64 w-full sm:h-80"
              />
            </div>
          </div>
        </section>

        {/* Prestations */}
        <section className="section bg-white">
          <div className="container-page">
            <div className="max-w-2xl">
              <p data-reveal className="eyebrow text-[color:var(--text-on-light-muted)]">
                <span className="text-[color:var(--color-signal-ink)]">01</span>
                Prestations
              </p>
              <h2
                data-reveal
                data-reveal-delay="0.06"
                className="mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] text-[color:var(--text-on-light)]"
              >
                Nos interventions en {category.name.toLowerCase()}
              </h2>
              <p
                data-reveal
                data-reveal-delay="0.12"
                className="mt-5 text-[1.0625rem] leading-relaxed text-[color:var(--text-on-light-muted)]"
              >
                {category.lead} : chaque situation appelle un geste précis. Décrivez la
                vôtre au téléphone, nous vous dirons ce qui peut être fait.
              </p>
            </div>

            <ul className="mt-12 grid gap-px overflow-hidden border border-[color:var(--line-light)] bg-[color:var(--line-light)] sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, i) => (
                <li
                  key={item.slug}
                  data-reveal
                  data-reveal-delay={String(0.04 * i)}
                  className="group flex min-h-44 flex-col justify-between bg-white p-7 transition-colors hover:bg-[color:var(--color-mist)]"
                >
                  <span className="flex items-center justify-between">
                    <Icon size={24} className="text-[color:var(--color-signal-ink)]" />
                    <span className="font-display text-[0.65rem] font-semibold tracking-[0.16em] text-[color:var(--text-on-light-muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <h3 className="mt-8 text-[1.15rem] text-[color:var(--text-on-light)]">
                    {item.label}
                  </h3>
                </li>
              ))}

              <li className="flex min-h-44 flex-col justify-between bg-[color:var(--color-ink)] p-7">
                <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-signal)]">
                  Votre cas n&apos;est pas listé ?
                </span>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="mt-8 inline-flex items-center gap-2 font-display text-[1.15rem] font-bold text-[color:var(--text-on-dark)] transition-colors hover:text-[color:var(--color-signal)]"
                  data-cta={`${category.slug}-list-call`}
                >
                  {business.phone}
                  <ArrowRight size={17} weight="bold" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <Process />

        {/* Autres métiers */}
        <section className="section bg-[color:var(--color-mist)]">
          <div className="container-page">
            <p data-reveal className="eyebrow text-[color:var(--text-on-light-muted)]">
              <span className="text-[color:var(--color-signal-ink)]">05</span>
              Autres métiers
            </p>
            <h2
              data-reveal
              data-reveal-delay="0.06"
              className="mt-5 max-w-2xl text-[clamp(1.7rem,3.6vw,2.5rem)] text-[color:var(--text-on-light)]"
            >
              Un seul interlocuteur pour vos autres urgences
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {others.map((other) => {
                const OtherIcon = serviceIcons[other.slug as keyof typeof serviceIcons];
                return (
                  <Link
                    key={other.slug}
                    href={`/${other.slug}`}
                    data-reveal
                    className="notch group flex items-center justify-between gap-6 border border-[color:var(--line-light)] bg-white p-7 transition-colors hover:border-[color:var(--color-signal)]"
                  >
                    <span className="flex items-center gap-5">
                      <OtherIcon size={28} className="text-[color:var(--color-signal-ink)]" />
                      <span>
                        <span className="block text-[1.3rem] font-bold tracking-[-0.02em] text-[color:var(--text-on-light)]">
                          {other.trade} au Havre
                        </span>
                        <span className="mt-1 block text-[0.9rem] text-[color:var(--text-on-light-muted)]">
                          {other.lead}
                        </span>
                      </span>
                    </span>
                    <ArrowRight
                      size={20}
                      weight="bold"
                      aria-hidden="true"
                      className="shrink-0 text-[color:var(--color-signal-ink)] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Contact />
        <FinalCta />
      </main>

      <Footer />
      <MobileCallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
