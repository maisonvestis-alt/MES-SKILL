"use client";

import { useState } from "react";
import Link from "next/link";
import { CaretDown, Drop, Key, SquaresFour, Hammer } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { serviceCategories, renovationService, business } from "@/lib/content";

const icons = {
  plomberie: Drop,
  serrurerie: Key,
  vitrerie: SquaresFour,
} as const;

const codes = { plomberie: "01", serrurerie: "02", vitrerie: "03" } as const;

export default function Services() {
  const [openSlug, setOpenSlug] = useState<string | null>(serviceCategories[0]?.slug ?? null);

  return (
    <section id="metiers" className="bg-[color:var(--color-ink)] py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Nos savoir-faire</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Trois métiers.
            <br />
            Un seul numéro.
          </h2>
          <p className="mt-4 text-[color:var(--color-steel)]">
            Chaque intervention est prise en charge par un technicien qualifié dans son
            domaine — sans sous-traitance en cascade.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {serviceCategories.map((category, i) => {
            const Icon = icons[category.slug as keyof typeof icons];
            const isOpen = openSlug === category.slug;
            return (
              <Reveal key={category.slug} delay={i * 0.08}>
                <div className="bracket-frame flex h-full flex-col border border-[color:var(--color-steel-line)] bg-[color:var(--color-ink-2)] p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[color:var(--color-steel)]">
                      Unité {codes[category.slug as keyof typeof codes]}
                    </span>
                    <span className="status-badge">
                      <span className="dot" aria-hidden="true" />
                      Actif
                    </span>
                  </div>
                  <Icon size={28} weight="duotone" className="mt-5 text-[color:var(--color-accent)]" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-steel)]">
                    {category.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpenSlug(isOpen ? null : category.slug)}
                    aria-expanded={isOpen}
                    aria-controls={`services-${category.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 self-start font-mono text-xs uppercase tracking-wide text-[color:var(--color-accent-strong)]"
                  >
                    {isOpen ? "Voir moins" : "Voir toutes les prestations"}
                    <CaretDown
                      size={13}
                      weight="bold"
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <ul
                    id={`services-${category.slug}`}
                    className={`grid overflow-hidden font-mono text-xs text-[color:var(--color-paper-dim)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="flex min-h-0 flex-col gap-2 border-t border-[color:var(--color-steel-line)] pt-4">
                      {category.items.map((sItem) => (
                        <li key={sItem.slug} className="flex items-start gap-2">
                          <span aria-hidden="true" className="text-[color:var(--color-accent)]">▸</span>
                          {sItem.label}
                        </li>
                      ))}
                    </div>
                  </ul>

                  <div className="mt-6 flex flex-col items-start gap-2 pt-1">
                    <a
                      href={`tel:${business.phoneHref}`}
                      className="font-mono text-xs font-bold uppercase tracking-wide text-[color:var(--color-text-on-dark)] underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                    >
                      Demander cette intervention →
                    </a>
                    <Link
                      href={`/services/${category.slug}`}
                      className="font-mono text-xs font-bold uppercase tracking-wide text-[color:var(--color-accent-strong)]"
                    >
                      Voir la page {category.name.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.24} className="mt-6">
          <div className="flex flex-col items-start gap-6 border border-[color:var(--color-steel-line)] bg-[color:var(--color-ink-2)] p-8 text-[color:var(--color-text-on-dark)] md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[color:var(--color-steel-line)]">
                <Hammer size={22} weight="duotone" className="text-[color:var(--color-accent)]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase">{renovationService.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[color:var(--color-steel)]">
                  {renovationService.description}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 border border-[color:var(--color-accent)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wide text-[color:var(--color-accent-strong)] transition hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
            >
              Discuter de mon projet
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
