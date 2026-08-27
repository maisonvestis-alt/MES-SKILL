"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, PhoneCall, X } from "@phosphor-icons/react/dist/ssr";
import { business, serviceCategories } from "@/lib/content";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/zone-intervention", label: "Zone d'intervention" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-[color:var(--color-border-dark)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/#accueil" className="flex items-center gap-2.5" aria-label="KS Multiservices — Accueil">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <Image src="/logo.jpg" alt="" width={40} height={40} className="h-full w-full object-cover" priority />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-[color:var(--color-text-on-dark)] md:text-2xl">
            KS<span className="text-[color:var(--color-accent)]">.</span>Multiservices
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--color-text-on-dark-muted)] transition hover:text-[color:var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${business.phoneHref}`}
            className="hidden items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-[color:var(--color-accent-strong)] sm:inline-flex"
          >
            <PhoneCall size={18} weight="fill" aria-hidden="true" />
            {business.phone}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-dark)] text-[color:var(--color-text-on-dark)] lg:hidden"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <List size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[color:var(--color-border-dark)] bg-ink px-5 pb-8 pt-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[color:var(--color-text-on-dark)] transition hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ul className="mt-4 flex flex-wrap gap-2 px-3">
            {serviceCategories.map((cat) => (
              <li
                key={cat.slug}
                className="rounded-full border border-[color:var(--color-border-dark)] px-3 py-1 text-xs text-[color:var(--color-text-on-dark-muted)]"
              >
                {cat.shortLabel}
              </li>
            ))}
          </ul>
          <a
            href={`tel:${business.phoneHref}`}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-accent)] px-4 py-3 text-sm font-semibold text-ink"
          >
            <PhoneCall size={18} weight="fill" aria-hidden="true" />
            Appeler {business.phone}
          </a>
        </div>
      )}
    </header>
  );
}
