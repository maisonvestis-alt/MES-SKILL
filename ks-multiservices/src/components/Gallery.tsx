"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MagnifyingGlassPlus, X } from "@phosphor-icons/react/dist/ssr";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { serviceIcons } from "./icons";

/**
 * Galerie avant/après.
 *
 * Deux états assumés :
 *  · sans photo réelle (cas actuel), un panneau technique porte la légende du
 *    chantier — on ne simule jamais une photo qui n'existe pas ;
 *  · dès qu'un chemin `/gallery/…` est renseigné dans `content.ts`, la vraie
 *    image occupe exactement le même cadre, sans autre modification.
 *
 * La visionneuse est un vrai dialogue : verrouillage du scroll, focus déplacé,
 * Échap et flèches au clavier, focus rendu au déclencheur à la fermeture.
 */

function Panel({
  src,
  label,
  title,
  category,
}: {
  src: string | null;
  label: "Avant" | "Après";
  title: string;
  category: GalleryItem["category"];
}) {
  const Icon = serviceIcons[category];
  const isAfter = label === "Après";

  // Rendu en <span> (display:block) et non en <div> : ce bloc est monté à
  // l'intérieur d'un <button> dans la grille, où le HTML n'autorise que du
  // contenu phrasé.
  return (
    <span className="relative block h-full w-full overflow-hidden bg-[color:var(--color-ink)]">
      {src ? (
        <Image
          src={src}
          alt={`${label} — ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
      ) : (
        <span aria-hidden="true" className="absolute inset-0 block">
          <span className={`absolute inset-0 block grid-dark ${isAfter ? "opacity-90" : "opacity-40"}`} />
          {!isAfter && <span className="hatch absolute inset-0 block opacity-60" />}
          {isAfter && (
            <span
              className="absolute inset-0 block"
              style={{
                background:
                  "radial-gradient(90% 80% at 30% 10%, rgba(255,106,19,0.2) 0%, transparent 60%)",
              }}
            />
          )}
          <Icon
            size={40}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
              isAfter ? "text-[color:var(--color-signal)]" : "text-white/25"
            }`}
          />
        </span>
      )}

      <span className="absolute left-3 top-3 rounded-full bg-[color:var(--color-ink)]/85 px-3 py-1 font-display text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-on-dark)]">
        {label}
      </span>

      {!src && isAfter && (
        <span className="absolute bottom-3 left-3 font-display text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark-muted)]">
          Photo à venir
        </span>
      )}
    </span>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<string>("tout");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = galleryItems.filter((item) => filter === "tout" || item.category === filter);
  const current = openIndex !== null ? visible[openIndex] : null;

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((index) => {
        if (index === null) return index;
        return (index + direction + visible.length) % visible.length;
      });
    },
    [visible.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  return (
    <section id="realisations" className="section bg-[color:var(--color-mist)]">
      <div className="container-page">
        <SectionHeading
          index="07"
          eyebrow="Réalisations"
          title={
            <>
              Avant / après, <span className="text-[color:var(--color-signal-ink)]">sur le terrain</span>
            </>
          }
          intro="Serrurerie, plomberie, vitrerie : quelques interventions représentatives de ce que nous faisons au quotidien."
        />

        {/* Filtres */}
        <div
          data-reveal
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrer les réalisations par métier"
        >
          {galleryCategories.map((category) => {
            const active = filter === category.slug;
            return (
              <button
                key={category.slug}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setFilter(category.slug);
                  setOpenIndex(null);
                }}
                className={`rounded-full border px-5 py-2.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "border-[color:var(--color-signal)] bg-[color:var(--color-signal)] text-[#1a0c02]"
                    : "border-[color:var(--line-light)] bg-white text-[color:var(--text-on-light-muted)] hover:border-[color:var(--color-signal)] hover:text-[color:var(--text-on-light)]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <article
              key={item.id}
              className="notch group flex flex-col overflow-hidden border border-[color:var(--line-light)] bg-white"
            >
              <button
                type="button"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setOpenIndex(i);
                }}
                className="relative block w-full text-left"
                aria-label={`Agrandir : ${item.title}`}
              >
                <span className="grid h-48 grid-cols-2 gap-px bg-[color:var(--line-light)] sm:h-52">
                  <span className="block overflow-hidden">
                    <span className="block h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                      <Panel src={item.before} label="Avant" title={item.title} category={item.category} />
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                      <Panel src={item.after} label="Après" title={item.title} category={item.category} />
                    </span>
                  </span>
                </span>

                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[color:var(--color-ink)]/0 opacity-0 transition-all duration-300 group-hover:bg-[color:var(--color-ink)]/45 group-hover:opacity-100">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-signal)] text-[#1a0c02]">
                    <MagnifyingGlassPlus size={20} weight="bold" />
                  </span>
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <span className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-signal-ink)]">
                  {item.category}
                </span>
                <h3 className="mt-3 text-[1.15rem] text-[color:var(--text-on-light)]">{item.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-[color:var(--text-on-light-muted)]">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Visionneuse */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-[color:var(--color-ink)]/94 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="w-full max-w-5xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-signal)]">
                  {current.category}
                </span>
                <h3 className="mt-2 text-[1.5rem] text-[color:var(--text-on-dark)]">{current.title}</h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Fermer la visionneuse"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--line-dark-strong)] text-[color:var(--text-on-dark)] transition hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)]"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            <div className="mt-5 grid gap-px overflow-hidden rounded-lg bg-[color:var(--line-dark)] sm:grid-cols-2">
              <div className="h-56 sm:h-80">
                <Panel src={current.before} label="Avant" title={current.title} category={current.category} />
              </div>
              <div className="h-56 sm:h-80">
                <Panel src={current.after} label="Après" title={current.title} category={current.category} />
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-[color:var(--text-on-dark-muted)]">
              {current.detail}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => step(-1)}
                className="btn btn-ghost-dark px-5 py-3 text-[0.72rem]"
                aria-label="Réalisation précédente"
              >
                <ArrowLeft size={16} weight="bold" aria-hidden="true" />
                Précédent
              </button>
              <span className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-[color:var(--text-on-dark-muted)]">
                {(openIndex ?? 0) + 1} / {visible.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="btn btn-ghost-dark px-5 py-3 text-[0.72rem]"
                aria-label="Réalisation suivante"
              >
                Suivant
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
