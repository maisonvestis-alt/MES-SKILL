"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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
    <section id="realisations" className="bg-[color:var(--color-ink)] py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Réalisations</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-4xl">
              Nos chantiers
              <br />
              de rénovation
            </h2>
          </Reveal>
          <p className="max-w-sm text-sm text-[color:var(--color-steel)]">
            Quelques rénovations de salles de bain réalisées par KS Multiservices au
            Havre et dans son agglomération. Cliquez sur une photo pour l&apos;agrandir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((galleryItem, index) => (
            <Reveal key={galleryItem.id} delay={index * 0.05}>
              {galleryItem.beforeSrc ? (
                <div className="bracket-frame">
                  <BeforeAfterSlider
                    beforeSrc={galleryItem.beforeSrc}
                    afterSrc={galleryItem.src}
                    alt={galleryItem.caption}
                    width={galleryItem.width}
                    height={galleryItem.height}
                  />
                  <p className="mt-2 font-mono text-xs text-[color:var(--color-steel)]">{galleryItem.caption}</p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Agrandir la photo : ${galleryItem.caption}`}
                  className="bracket-frame group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden text-left"
                >
                  <Image
                    src={galleryItem.src}
                    alt={galleryItem.caption}
                    width={galleryItem.width}
                    height={galleryItem.height}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/90 via-[color:var(--color-ink)]/10 to-transparent"
                  />
                  <figcaption className="relative p-5 text-[color:var(--color-text-on-dark)]">
                    <p className="font-display text-base font-bold uppercase">{galleryItem.caption}</p>
                  </figcaption>
                </button>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--color-ink)]/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-[color:var(--color-hairline)] text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
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
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[color:var(--color-hairline)] text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] sm:left-6"
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
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[color:var(--color-hairline)] text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] sm:right-6"
          >
            <CaretRight size={20} weight="bold" aria-hidden="true" />
          </button>

          <figure className="flex max-h-full max-w-3xl flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative max-h-[75vh] w-full overflow-hidden">
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
              <p className="font-display text-lg font-bold uppercase">{active.caption}</p>
              <p className="mt-1 text-sm text-[color:var(--color-steel)]">{active.detail}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
