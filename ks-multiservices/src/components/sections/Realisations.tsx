import { galleryItems, renovationService } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";

/**
 * Réalisations (rénovation salle de bain). Les visuels réels n'ont pas encore
 * été fournis (src = null) : on affiche une plaque de secours honnête plutôt
 * qu'une fausse image. Déposez les fichiers dans /public/gallery/ et renseignez
 * `src` dans content.ts pour les activer.
 */
export default function Realisations() {
  return (
    <section id="realisations" className="relative border-t border-[var(--line-void)] py-24 md:py-32">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <SectionHeader
          eyebrow="Réalisations"
          title={
            <>
              Au-delà de l&apos;urgence,
              <br />
              <span className="text-ember">le chantier.</span>
            </>
          }
          intro={renovationService.description}
        />

        <RevealGroup
          stagger={0.12}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3"
        >
          {galleryItems.map((item, index) => (
            <RevealItem key={item.id}>
              <figure className="group h-full overflow-hidden rounded-xl border border-[var(--line-void)] bg-[color:var(--color-void-2)] transition-transform duration-500 ease-[var(--ease-signature)] hover:scale-[1.02]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {item.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-signature)] group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-end justify-between p-5"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 20% 100%, rgba(255,90,31,0.16), rgba(10,10,10,0) 60%), linear-gradient(160deg, var(--color-void-3), var(--color-void))",
                      }}
                    >
                      <span
                        className="font-condensed text-7xl leading-none text-transparent"
                        style={{ WebkitTextStroke: "1px rgba(244,241,234,0.12)" }}
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono-tech text-[0.6rem] uppercase tracking-[0.24em] text-ash">
                        Visuel à venir
                      </span>
                    </div>
                  )}
                </div>
                <figcaption className="p-6">
                  <h3 className="font-condensed text-xl uppercase leading-tight tracking-[0.02em] text-bone">
                    {item.caption}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:rgba(244,241,234,0.62)]">
                    {item.detail}
                  </p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
