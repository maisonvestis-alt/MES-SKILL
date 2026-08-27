import Link from "next/link";
import { ArrowRight, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business, renovationService, serviceCategories } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import ServiceVisual from "./ServiceVisual";
import { serviceIcons } from "./icons";

/** Les trois métiers, en cartes de même poids : aucune hiérarchie imposée. */
export default function Services() {
  return (
    <section id="interventions" className="section bg-[color:var(--color-carbon)]">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Nos interventions"
          tone="dark"
          title={
            <>
              Trois métiers, <span className="text-[color:var(--color-signal)]">un seul numéro</span>
            </>
          }
          intro="Serrurerie, plomberie, vitrerie : chaque intervention est traitée par KS Multiservices, du dépannage d'urgence à la remise en état."
          action={
            <a href={`tel:${business.phoneHref}`} className="btn btn-signal" data-cta="services-call">
              <PhoneCall size={18} weight="fill" aria-hidden="true" />
              {business.phone}
            </a>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceCategories.map((category, i) => {
            const Icon = serviceIcons[category.slug as keyof typeof serviceIcons];
            return (
              <article
                key={category.slug}
                data-reveal
                data-reveal-delay={String(0.07 * i)}
                className="notch group flex flex-col border border-[color:var(--line-dark)] bg-[color:var(--color-steel)] transition-colors duration-300 hover:border-[color:var(--line-dark-strong)]"
              >
                <ServiceVisual
                  slug={category.slug as keyof typeof serviceIcons}
                  name={category.name}
                  index={`0${i + 1}`}
                  src={category.image}
                  className="h-44 w-full sm:h-52"
                />

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-[color:var(--color-signal)]" />
                    <h3 className="text-[1.5rem] text-[color:var(--text-on-dark)]">{category.name}</h3>
                  </div>

                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--text-on-dark-muted)]">
                    {category.description}
                  </p>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-[color:var(--line-dark)] pt-6">
                    {category.items.map((item) => (
                      <li
                        key={item.slug}
                        className="flex items-start gap-3 text-[0.9rem] text-[color:var(--text-on-dark)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-3.5 shrink-0 bg-[color:var(--color-signal)]"
                        />
                        {item.label}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${category.slug}`}
                    className="mt-8 inline-flex items-center gap-2 self-start py-1 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-signal)]"
                  >
                    {category.trade} au Havre
                    <ArrowRight
                      size={15}
                      weight="bold"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Prestation hors urgence */}
        <div
          data-reveal
          className="notch mt-6 flex flex-col gap-6 border border-[color:var(--line-dark)] bg-[color:var(--color-ink)] p-7 sm:p-9 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-signal)]">
              Au-delà de l&apos;urgence
            </p>
            <h3 className="mt-3 text-[1.4rem] text-[color:var(--text-on-dark)]">
              {renovationService.name}
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-[color:var(--text-on-dark-muted)]">
              {renovationService.description}
            </p>
          </div>
          <Link href="#contact" className="btn btn-ghost-dark shrink-0">
            Parler de mon projet
          </Link>
        </div>
      </div>
    </section>
  );
}
