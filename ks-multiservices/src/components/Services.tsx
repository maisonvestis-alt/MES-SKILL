"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CaretDown,
  Drop,
  Key,
  SquaresFour,
  Hammer,
} from "@phosphor-icons/react/dist/ssr";
import { serviceCategories, renovationService, business } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  plomberie: Drop,
  serrurerie: Key,
  vitrerie: SquaresFour,
} as const;

export default function Services() {
  const scope = useRef<HTMLDivElement>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(serviceCategories[0]?.slug ?? null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-service-card]").forEach((card, i) => {
          gsap.from(card, {
            y: 32,
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: i * 0.06,
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section id="services" ref={scope} className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brass-strong)]">
            Nos savoir-faire
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-light)] sm:text-4xl">
            Trois métiers, une seule équipe à appeler
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-text-on-light-muted)]">
            Chaque intervention est prise en charge par un technicien qualifié dans son
            domaine — sans sous-traitance en cascade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = icons[category.slug as keyof typeof icons];
            const isOpen = openSlug === category.slug;
            return (
              <div
                key={category.slug}
                data-service-card
                className="flex flex-col rounded-3xl border border-[color:var(--color-border-light)] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(20,23,28,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink">
                  <Icon size={24} weight="duotone" className="text-[color:var(--color-brass)]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text-on-light-muted)]">
                  {category.description}
                </p>

                <button
                  type="button"
                  onClick={() => setOpenSlug(isOpen ? null : category.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`services-${category.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-[color:var(--color-brass-strong)] transition hover:text-ink"
                >
                  {isOpen ? "Voir moins" : "Voir toutes les prestations"}
                  <CaretDown
                    size={14}
                    weight="bold"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <ul
                  id={`services-${category.slug}`}
                  className={`grid overflow-hidden text-sm text-[color:var(--color-text-on-light-muted)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="flex min-h-0 flex-col gap-2 border-t border-[color:var(--color-border-light)] pt-4">
                    {category.items.map((item) => (
                      <li key={item.slug} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-brass)]"
                        />
                        {item.label}
                      </li>
                    ))}
                  </div>
                </ul>

                <a
                  href={`tel:${business.phoneHref}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-[color:var(--color-brass)] decoration-2 underline-offset-4"
                >
                  Demander cette intervention →
                </a>
              </div>
            );
          })}
        </div>

        <div
          data-service-card
          className="mt-8 flex flex-col items-start gap-6 rounded-3xl border border-[color:var(--color-border-light)] bg-ink p-8 text-[color:var(--color-text-on-dark)] md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-surface)]">
              <Hammer size={22} weight="duotone" className="text-[color:var(--color-brass)]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">{renovationService.name}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[color:var(--color-text-on-dark-muted)]">
                {renovationService.description}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--color-brass)] px-6 py-3 text-sm font-semibold text-[color:var(--color-brass)] transition hover:bg-[color:var(--color-brass)] hover:text-ink"
          >
            Discuter de mon projet
          </a>
        </div>
      </div>
    </section>
  );
}
