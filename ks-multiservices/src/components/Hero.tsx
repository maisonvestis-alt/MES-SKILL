"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PhoneCall, ClockCountdown, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-reveal]", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.15,
        });
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section
      id="accueil"
      ref={scope}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-24 pb-16 md:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 80% 20%, rgba(200,154,63,0.16) 0%, rgba(18,21,26,0) 70%), radial-gradient(50% 50% at 10% 90%, rgba(124,135,148,0.12) 0%, rgba(18,21,26,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" opacity="0.9">
          <circle cx="210" cy="210" r="200" stroke="var(--color-border-dark)" strokeWidth="1" />
          <circle cx="210" cy="210" r="150" stroke="var(--color-border-dark)" strokeWidth="1" />
          <circle cx="210" cy="210" r="60" fill="var(--color-surface)" stroke="var(--color-brass)" strokeWidth="2" />
          <rect x="200" y="230" width="20" height="60" rx="6" fill="var(--color-brass)" />
        </svg>
      </div>

      <div className="container-page relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-2xl">
          <p
            data-hero-reveal
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-dark)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-brass)]"
          >
            Plomberie · Serrurerie · Vitrerie — Le Havre
          </p>

          <h1
            data-hero-reveal
            className="font-display text-4xl font-semibold leading-[1.05] text-[color:var(--color-text-on-dark)] sm:text-5xl md:text-6xl"
          >
            La panne ne prévient pas.{" "}
            <span className="italic text-[color:var(--color-brass)]">Nous, si.</span>
          </h1>

          <p
            data-hero-reveal
            className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-on-dark-muted)]"
          >
            KS Multiservices intervient au Havre pour vos urgences de plomberie,
            serrurerie et vitrerie — {business.availability.toLowerCase()}.
          </p>

          <div data-hero-reveal className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-brass)] px-7 py-4 text-base font-semibold text-ink shadow-[0_18px_40px_-16px_rgba(200,154,63,0.55)] transition hover:bg-[color:var(--color-brass-strong)]"
            >
              <PhoneCall size={20} weight="fill" aria-hidden="true" />
              Appeler maintenant — {business.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-dark)] px-7 py-4 text-base font-semibold text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)]"
            >
              Demander un devis
            </a>
          </div>

          <div
            data-hero-reveal
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[color:var(--color-text-on-dark-muted)]"
          >
            <span className="inline-flex items-center gap-2">
              <ClockCountdown size={18} className="text-[color:var(--color-brass)]" aria-hidden="true" />
              24h/24 · 7j/7 · jours fériés inclus
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={18} className="text-[color:var(--color-brass)]" aria-hidden="true" />
              Basé au Havre — {business.address.full}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
