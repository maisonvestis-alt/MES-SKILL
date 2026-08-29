import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { business, serviceCategories } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";

/** Les trois métiers, réunis sous un seul numéro. Chaque carte appelle. */
export default function Services() {
  return (
    <section id="services" className="relative border-t border-[var(--line-void)] py-[var(--section-py)]">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <SectionHeader
          eyebrow="Nos interventions"
          title={
            <>
              Trois métiers.
              <br />
              Un seul numéro.
            </>
          }
          intro="Plomberie, serrurerie, vitrerie : un seul interlocuteur pour toutes vos urgences, sans chercher un artisan différent à chaque panne."
        />

        <RevealGroup stagger={0.12} className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {serviceCategories.map((category, index) => (
            <RevealItem key={category.slug}>
              <a
                href={`tel:${business.phoneHref}`}
                className="group flex h-full flex-col rounded-xl border border-[var(--line-void)] bg-[color:rgba(14,14,15,0.5)] p-7 transition-[transform,border-color,background-color] duration-500 ease-[var(--ease-signature)] hover:scale-[1.02] hover:border-[color:rgba(255,90,31,0.55)] hover:bg-[color:var(--color-void-3)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono-tech text-xs tracking-[0.2em] text-ash">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-ash transition-colors duration-500 group-hover:text-ember"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-8 font-condensed text-4xl uppercase leading-none tracking-[0.01em] text-bone md:text-5xl">
                  {category.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
                  {category.description}
                </p>

                <ul className="mt-7 space-y-2.5 border-t border-[var(--line-void)] pt-6">
                  {category.items.map((item) => (
                    <li
                      key={item.slug}
                      className="flex items-center gap-3 font-mono-tech text-[0.72rem] uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]"
                    >
                      <span className="h-1 w-1 rounded-full bg-ash" aria-hidden="true" />
                      {item.label}
                    </li>
                  ))}
                </ul>

                <span className="mt-7 inline-flex items-center gap-2 font-mono-tech text-[0.68rem] uppercase tracking-[0.2em] text-ash transition-colors duration-500 group-hover:text-bone">
                  Appeler pour ce dépannage
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
