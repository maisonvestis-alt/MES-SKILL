import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import { galleryItems } from "@/lib/content";

/**
 * Les visuels réels transmis par le client ne sont pas encore disponibles comme
 * fichiers exploitables par le site (voir README "Réalisations"). En attendant leur
 * intégration, chaque carte affiche fidèlement la légende du chantier sans simuler
 * de fausse photo — dès que les fichiers seront fournis, il suffira de renseigner
 * `src` dans `src/lib/content.ts` pour qu'ils remplacent ce panneau texturé.
 */
export default function Gallery() {
  return (
    <section id="realisations" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brass-strong)]">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-light)] sm:text-4xl">
              Nos chantiers de rénovation
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[color:var(--color-text-on-light-muted)]">
            Galerie photo en cours de mise en ligne — chaque chantier ci-dessous sera
            illustré par les photos réelles de la réalisation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl border border-[color:var(--color-border-light)] p-6"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #d8cdb8 0px, #d8cdb8 26px, #cbbfa5 26px, #cbbfa5 52px)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
              />
              <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--color-text-on-light)]">
                <ImageIcon size={13} weight="bold" aria-hidden="true" />
                Ajout en cours
              </span>
              <figcaption className="relative mt-auto pt-8 text-[color:var(--color-text-on-dark)]">
                <p className="font-display text-lg font-semibold">{item.caption}</p>
                <p className="mt-1 text-sm text-[color:var(--color-text-on-dark-muted)]">
                  {item.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
