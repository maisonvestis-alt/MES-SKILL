"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { galleryItems } from "@/lib/content";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : galleryItems[activeIndex];

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
            Havre et dans son agglomération. Cliquez sur une photo pour l&apos;agrandir.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Agrandir la photo : ${item.caption}`}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl border border-[color:var(--color-border-light)] text-left"
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
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-dark)] text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Photo précédente"
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--color-border-dark)] text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] sm:left-6"
          >
            <CaretLeft size={20} weight="bold" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Photo suivante"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--color-border-dark)] text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] sm:right-6"
          >
            <CaretRight size={20} weight="bold" aria-hidden="true" />
          </button>

          <figure
            className="flex max-h-full max-w-3xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={active.src}
                alt={active.caption}
                width={active.width}
                height={active.height}
                className="h-full max-h-[75vh] w-full object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <figcaption className="text-center text-[color:var(--color-text-on-dark)]">
              <p className="font-display text-lg font-semibold">{active.caption}</p>
              <p className="mt-1 text-sm text-[color:var(--color-text-on-dark-muted)]">{active.detail}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
