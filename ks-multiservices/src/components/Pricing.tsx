"use client";

import { useState } from "react";
import { Drop, Key, SquaresFour } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { pricing, pricingNote, serviceCategories, business, paymentMethods } from "@/lib/content";

const icons = {
  plomberie: Drop,
  serrurerie: Key,
  vitrerie: SquaresFour,
} as const;

type Filter = "tout" | (typeof serviceCategories)[number]["slug"];

export default function Pricing() {
  const [filter, setFilter] = useState<Filter>("tout");
  const visible = filter === "tout" ? pricing : pricing.filter((p) => p.categorySlug === filter);

  return (
    <section id="tarifs" className="bg-[color:var(--color-ink)] py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Grille tarifaire</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Des prix annoncés
            <br />
            avant l&apos;intervention
          </h2>
          <p className="mt-4 text-[color:var(--color-steel)]">
            Devis gratuit, tarifs de départ transparents — pas de mauvaise surprise à
            la fin du chantier.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les tarifs par métier">
          <button
            type="button"
            onClick={() => setFilter("tout")}
            aria-pressed={filter === "tout"}
            className={`border px-4 py-2 font-mono text-xs uppercase tracking-wide transition ${
              filter === "tout"
                ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] text-[color:var(--color-ink)]"
                : "border-[color:var(--color-steel-line)] text-[color:var(--color-steel)] hover:border-[color:var(--color-accent)]"
            }`}
          >
            Tout
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setFilter(cat.slug)}
              aria-pressed={filter === cat.slug}
              className={`border px-4 py-2 font-mono text-xs uppercase tracking-wide transition ${
                filter === cat.slug
                  ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] text-[color:var(--color-ink)]"
                  : "border-[color:var(--color-steel-line)] text-[color:var(--color-steel)] hover:border-[color:var(--color-accent)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {visible.map((category) => {
            const meta = serviceCategories.find((c) => c.slug === category.categorySlug);
            const Icon = icons[category.categorySlug as keyof typeof icons];
            return (
              <Reveal key={category.categorySlug}>
                <div className="flex h-full flex-col border border-[color:var(--color-steel-line)] bg-[color:var(--color-ink-2)]">
                  <div className="flex items-center justify-between border-b border-[color:var(--color-steel-line)] px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Icon size={20} weight="duotone" className="text-[color:var(--color-accent)]" aria-hidden="true" />
                      <h3 className="font-display text-lg font-bold uppercase text-[color:var(--color-text-on-dark)]">
                        {meta?.name}
                      </h3>
                    </div>
                  </div>
                  <ul className="flex flex-1 flex-col gap-1 px-6 py-4">
                    {category.items.map((priceItem) => (
                      <li
                        key={priceItem.label}
                        className="flex items-baseline justify-between gap-4 border-b border-dashed border-[color:var(--color-steel-line)] py-3 text-sm last:border-none"
                      >
                        <span className="text-[color:var(--color-paper-dim)]">{priceItem.label}</span>
                        <span className="tabular-figures whitespace-nowrap font-mono font-bold text-[color:var(--color-accent-strong)]">
                          {priceItem.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${business.phoneHref}`}
                    className="border-t border-[color:var(--color-steel-line)] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wide text-[color:var(--color-text-on-dark)] transition hover:text-[color:var(--color-accent-strong)]"
                  >
                    Demander un devis gratuit →
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 max-w-2xl space-y-2 font-mono text-xs text-[color:var(--color-steel)]">
          <p>{"// "}{pricingNote}</p>
          <p>{"// Prix TTC. Aucune majoration de nuit, week-end ou jour férié."}</p>
          <p>{"// Paiement accepté : "}{paymentMethods.join(", ")}.</p>
        </div>
      </div>
    </section>
  );
}
