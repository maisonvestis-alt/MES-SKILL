import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";
import { testimonials, testimonialsArePlaceholders } from "@/lib/content";
import SectionHeading from "./SectionHeading";

/**
 * Avis clients.
 *
 * ⚠️ Les entrées de `content.ts` sont aujourd'hui des placeholders explicites
 * (`placeholder: true`). Tant que `testimonialsArePlaceholders` vaut `true`, la
 * section affiche un bandeau d'avertissement destiné à la recette : impossible
 * de mettre le site en ligne en croyant publier de vrais témoignages. Aucune
 * note n'est injectée dans les données structurées tant que les avis ne sont
 * pas réels — publier de fausses notes tromperait le visiteur.
 */
export default function Testimonials() {
  return (
    <section id="avis" className="section bg-[color:var(--color-carbon)]">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Avis"
          tone="dark"
          title={
            <>
              Ils nous ont <span className="text-[color:var(--color-signal)]">fait confiance</span>
            </>
          }
          intro="Les retours de nos clients au Havre et dans l'agglomération, après une intervention d'urgence ou un chantier."
        />

        {testimonialsArePlaceholders && (
          <p
            data-reveal
            className="mt-10 border border-dashed border-[color:var(--color-signal)] bg-[color:var(--color-signal)]/10 px-5 py-4 text-[0.85rem] leading-relaxed text-[color:var(--text-on-dark)]"
          >
            <strong className="font-semibold">Emplacement de recette —</strong> ces trois
            avis sont des placeholders. Remplacez-les par de vrais témoignages dans{" "}
            <code className="font-mono text-[0.8rem] text-[color:var(--color-signal)]">
              src/lib/content.ts
            </code>{" "}
            puis passez{" "}
            <code className="font-mono text-[0.8rem] text-[color:var(--color-signal)]">
              testimonialsArePlaceholders
            </code>{" "}
            à <code className="font-mono text-[0.8rem]">false</code> : ce bandeau
            disparaîtra.
          </p>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.id}
              data-reveal
              data-reveal-delay={String(0.06 * i)}
              className="notch relative m-0 flex flex-col border border-[color:var(--line-dark)] bg-[color:var(--color-steel)] p-7 transition-colors duration-300 hover:border-[color:var(--line-dark-strong)]"
            >
              <Quotes
                size={26}
                weight="fill"
                aria-hidden="true"
                className="text-[color:var(--color-signal)]"
              />

              <div className="mt-5 flex items-center gap-1" aria-label={`Note : ${testimonial.rating} sur 5`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    weight={index < testimonial.rating ? "fill" : "regular"}
                    aria-hidden="true"
                    className="text-[color:var(--color-signal)]"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-[color:var(--text-on-dark)]">
                « {testimonial.quote} »
              </blockquote>

              <figcaption className="mt-6 border-t border-[color:var(--line-dark)] pt-5">
                <span className="font-display text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[color:var(--text-on-dark)]">
                  {testimonial.firstName}
                </span>
                <span className="mt-1 block text-[0.8rem] text-[color:var(--text-on-dark-muted)]">
                  {testimonial.city} · {testimonial.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
