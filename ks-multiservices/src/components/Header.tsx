"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, PhoneCall, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { business, serviceCategories } from "@/lib/content";

const navLinks = [
  { href: "/#metiers", label: "Métiers" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/zone-intervention", label: "Zone" },
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
        scrolled ? "bg-[color:var(--color-ink)]/90 backdrop-blur border-b border-[color:var(--color-hairline)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/#accueil" className="flex items-center gap-3" aria-label="KS Multiservices — Accueil">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden border border-[color:var(--color-steel-line)]">
            <Image src="/logo.jpg" alt="" width={36} height={36} className="h-full w-full object-cover" priority />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-tight text-[color:var(--color-text-on-dark)]">
            KS <span className="text-[color:var(--color-accent)]">·</span> Multiservices
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-steel)] transition-colors hover:text-[color:var(--color-text-on-dark)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={`tel:${business.phoneHref}`}>
              <PhoneCall size={16} weight="fill" aria-hidden="true" />
              {business.phone}
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-[color:var(--color-hairline)] text-[color:var(--color-text-on-dark)] lg:hidden"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <List size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[color:var(--color-hairline)] bg-[color:var(--color-ink)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 pb-6 pt-4" aria-label="Navigation mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-2 py-3 font-display text-lg font-semibold uppercase text-[color:var(--color-text-on-dark)] transition-colors hover:text-[color:var(--color-accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ul className="flex flex-wrap gap-2 px-5 pb-5">
              {serviceCategories.map((cat) => (
                <li
                  key={cat.slug}
                  className="border border-[color:var(--color-steel-line)] px-3 py-1 font-mono text-xs uppercase text-[color:var(--color-steel)]"
                >
                  {cat.shortLabel}
                </li>
              ))}
            </ul>
            <div className="px-5 pb-6">
              <Button asChild className="w-full justify-center">
                <a href={`tel:${business.phoneHref}`}>
                  <PhoneCall size={18} weight="fill" aria-hidden="true" />
                  Appeler {business.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
