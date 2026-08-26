"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Drop, Key, SquaresFour } from "@phosphor-icons/react/dist/ssr";
import { pricing, pricingNote, serviceCategories, business } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  plomberie: Drop,
  serrurerie: Key,
  vitrerie: SquaresFour,
} as const;

export default function Pricing() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-pricing-card]").forEach((card, i) => {
          gsap.from(card, {
            y: 24,
            opacity: 0,
            duration: 0.5,
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
    <section id="tarifs" ref={scope} className="bg-paper-2 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent-strong)]">
            Tarifs
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-light)] sm:text-4xl">
            Des prix annoncés avant l&apos;intervention
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-text-on-light-muted)]">
            Devis gratuit, tarifs de départ transparents — pas de mauvaise surprise à
            la fin du chantier.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.map((category) => {
            const meta = serviceCategories.find((c) => c.slug === category.categorySlug);
            const Icon = icons[category.categorySlug as keyof typeof icons];
            return (
              <div
                key={category.categorySlug}
                data-pricing-card
                className="flex flex-col rounded-3xl border border-[color:var(--color-border-light)] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(20,23,28,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink">
                  <Icon size={24} weight="duotone" className="text-[color:var(--color-accent)]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
                  {meta?.name ?? category.categorySlug}
                </h3>

                <ul className="mt-5 flex flex-col gap-3 border-t border-[color:var(--color-border-light)] pt-5 text-sm">
                  {category.items.map((item) => (
                    <li key={item.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-[color:var(--color-text-on-light-muted)]">{item.label}</span>
                      <span className="whitespace-nowrap font-display font-semibold text-[color:var(--color-text-on-light)]">
                        à partir de {item.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${business.phoneHref}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                >
                  Demander un devis gratuit →
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-[color:var(--color-text-on-light-muted)]">
          {pricingNote}
        </p>
      </div>
    </section>
  );
}
