import { Star } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { reviews } from "@/lib/content";

export default function Avis() {
  return (
    <section id="avis" className="bg-[color:var(--color-ink)] py-20 md:py-28">
      <div className="container-page grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center">
        <Reveal className="border-2 border-[color:var(--color-accent)] px-10 py-8 text-center">
          <p className="tabular-figures font-mono text-5xl font-bold text-[color:var(--color-text-on-dark)]">
            {reviews.rating}
            <span className="text-2xl text-[color:var(--color-steel)]">/5</span>
          </p>
          <p className="mt-2 flex justify-center gap-0.5 text-[color:var(--color-accent-strong)]" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} weight="fill" size={16} />
            ))}
          </p>
          <p className="mt-2 font-mono text-xs uppercase text-[color:var(--color-steel)]">
            {reviews.count} {reviews.source}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-paper-dim)]">
            Depuis 2022, plus de 1000 clients font confiance à KS Multiservices pour
            leurs urgences de plomberie, serrurerie et vitrerie, ainsi que pour leurs
            projets de rénovation de salle de bain.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
