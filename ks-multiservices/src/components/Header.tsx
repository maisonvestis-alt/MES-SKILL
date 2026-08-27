"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneCall, List, X } from "@phosphor-icons/react/dist/ssr";
import { business, primaryNav } from "@/lib/content";
import Logo from "./Logo";

/**
 * En-tête collant.
 *
 * Transparent au-dessus du hero, il bascule en anthracite opaque dès les
 * premiers pixels de scroll — le contraste du numéro d'urgence reste garanti
 * quelle que soit la section survolée. Un filet orange indique la progression
 * de lecture (animé par ScrollMotion).
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-[color:var(--line-dark)] bg-[color:var(--color-ink)]/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-8 md:h-[84px]">
        <Link href="/" aria-label="KS Multiservices — accueil" className="shrink-0">
          <Logo tone="dark" compact />
        </Link>

        {/* Nav et actions forment un seul groupe : l'écart entre le dernier lien
            et le bouton d'urgence ne peut donc jamais se refermer. */}
        <div className="flex min-w-0 items-center gap-6">
          <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-4">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-block whitespace-nowrap py-2 font-display text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--text-on-dark-muted)] transition-colors hover:text-[color:var(--text-on-dark)]"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[color:var(--color-signal)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={`tel:${business.phoneHref}`}
            className="btn btn-signal hidden px-5 py-3 text-[0.8rem] sm:inline-flex"
            data-cta="header-call"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-[#1a0c02]/70" />
            </span>
            {business.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line-dark-strong)] text-[color:var(--text-on-dark)] transition hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)] xl:hidden"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Progression de lecture */}
      <div
        aria-hidden="true"
        className={`h-[2px] w-full origin-left bg-[color:var(--color-signal)] transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        data-scroll-progress
        style={{ transform: "scaleX(0)" }}
      />

    </header>

      {/* Menu mobile plein écran */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-[68px] bottom-0 z-[95] overflow-y-auto border-t border-[color:var(--line-dark)] bg-[color:var(--color-ink)] px-5 pb-10 pt-6 md:top-[84px] xl:hidden"
      >
        <nav aria-label="Navigation mobile">
          <ul className="flex flex-col">
            {primaryNav.map((item, i) => (
              <li key={item.href} className="border-b border-[color:var(--line-dark)]">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 font-display text-2xl font-bold tracking-[-0.02em] text-[color:var(--text-on-dark)] transition-colors hover:text-[color:var(--color-signal)]"
                >
                  {item.label}
                  <span className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-[color:var(--text-on-dark-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <a href={`tel:${business.phoneHref}`} className="btn btn-signal w-full" data-cta="menu-call">
            <PhoneCall size={18} weight="fill" aria-hidden="true" />
            Appeler {business.phone}
          </a>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn btn-ghost-dark w-full"
          >
            Demander un devis
          </Link>
          <p className="mt-2 text-center text-xs text-[color:var(--text-on-dark-muted)]">
            {business.availability}
          </p>
        </div>
      </div>
    </>
  );
}