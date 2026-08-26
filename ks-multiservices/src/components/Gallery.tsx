import Image from "next/image";
import { galleryItems } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="realisations" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent-strong)]">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-light)] sm:text-4xl">
              Nos chantiers de rénovation
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[color:var(--color-text-on-light-muted)]">
            Quelques rénovations de salles de bain réalisées par KS Multiservices au
            Havre et dans son agglomération.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl border border-[color:var(--color-border-light)]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                width={item.width}
                height={item.height}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent"
              />
              <figcaption className="relative p-6 text-[color:var(--color-text-on-dark)]">
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
