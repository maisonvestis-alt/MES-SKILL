"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, List, PhoneCall, X } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#intervention", label: "Intervention" },
  { href: "/#pourquoi-nous", label: "Pourquoi nous" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#contact", label: "Contact" },
];

const PANEL_EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const MAX_STRETCH = 1.6;

export default function NotFoundScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Le « 404 » de fond est étiré verticalement pour occuper l'écran quelle que soit
  // la taille de police calculée par le clamp : on mesure la hauteur naturelle du
  // texte puis on en déduit le facteur d'échelle (recalculé au redimensionnement).
  // Plafonné, sinon sur mobile (police au minimum du clamp, écran haut) l'étirement
  // devient tel que les chiffres ne se lisent plus.
  const [stretch, setStretch] = useState(1);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      const naturalHeight = textRef.current?.offsetHeight;
      if (!naturalHeight) return;
      setStretch(Math.min(window.innerHeight / naturalHeight, MAX_STRETCH));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div
      className="relative flex h-[100svh] w-full flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-ink) 0%, var(--color-surface-2) 100%)",
      }}
    >
      {/* Calque décoratif : « 404 » géant + faisceau laiton, estompé vers le bas. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.8,
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 95%)",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 95%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-[22vh] rounded-full blur-2xl sm:h-[26vh] md:h-[50vh]"
            style={{
              width: "clamp(120px, 20vw, 400px)",
              background:
                "radial-gradient(closest-side, rgba(228, 205, 148, 0.42), rgba(200, 154, 63, 0))",
              transform: `scaleY(${stretch})`,
              transformOrigin: "center",
            }}
          />
        </div>
        <div className="absolute inset-0 flex select-none items-center justify-center overflow-hidden">
          <span
            ref={textRef}
            className="whitespace-nowrap font-black leading-none tracking-tighter"
            style={{
              fontSize: "clamp(200px, 48vw, 800px)",
              color: "rgba(243, 241, 234, 0.13)",
              transform: `scale(1.15, ${stretch * 1.4})`,
            }}
          >
            404
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="relative z-20 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-12"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-[color:var(--color-text-on-dark)] sm:text-xl"
        >
          KS<span className="text-[color:var(--color-brass)]">.</span>Multiservices
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full bg-paper px-4 py-1.5 text-sm font-medium text-ink transition hover:opacity-90"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="menu-404"
          className="flex items-center gap-2 rounded-full bg-[color:var(--color-brass)] px-4 py-2 text-ink transition hover:bg-[color:var(--color-brass-strong)] sm:px-5 sm:py-2.5"
        >
          <List size={16} weight="bold" aria-hidden="true" />
          <span className="hidden text-sm font-semibold sm:inline">Menu</span>
        </button>
      </nav>

      {/* Menu plein écran (mobile) */}
      <div
        id="menu-404"
        className={`fixed inset-0 z-50 transition-[visibility] duration-0 ${
          menuOpen ? "visible delay-0" : "invisible delay-500"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Fermer le menu"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal={menuOpen}
          aria-label="Menu de navigation"
          className={`absolute right-0 top-0 h-full w-full border-l border-[color:var(--color-border-dark)] transition-transform duration-500 sm:w-[380px] ${PANEL_EASE} ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background:
              "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)",
          }}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-xl font-semibold tracking-tight text-[color:var(--color-text-on-dark)]">
              KS<span className="text-[color:var(--color-brass)]">.</span>
              Multiservices
            </span>
            <button
              type="button"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              aria-label="Fermer le menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[color:var(--color-text-on-dark)] transition hover:bg-white/20"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-6 pt-6" aria-label="Navigation mobile">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className={`rounded-2xl bg-white/5 px-6 py-4 text-lg font-semibold text-[color:var(--color-text-on-dark)] transition-all duration-300 hover:bg-white/10 hover:text-[color:var(--color-brass)] ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${menuOpen ? 150 + i * 60 : 0}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className={`absolute bottom-0 left-0 right-0 space-y-3 p-6 transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${menuOpen ? 450 : 0}ms` }}
          >
            <a
              href={`tel:${business.phoneHref}`}
              tabIndex={menuOpen ? 0 : -1}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-brass)] py-4 text-base font-semibold text-ink transition hover:bg-[color:var(--color-brass-strong)]"
            >
              <PhoneCall size={20} weight="fill" aria-hidden="true" />
              Appeler {business.phone}
            </a>
            <Link
              href="/"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white/10 py-4 text-base font-semibold text-[color:var(--color-text-on-dark)] transition hover:bg-white/20"
            >
              <ArrowLeft size={20} aria-hidden="true" />
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Contenu principal, aligné en bas comme le reste du site */}
      <main
        id="contenu-principal"
        className="relative z-30 mt-auto flex flex-col items-center px-4 pb-10 text-center sm:pb-16"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brass)]">
          Erreur 404
        </p>
        <h1 className="font-display text-2xl font-semibold text-[color:var(--color-text-on-dark)] sm:text-3xl md:text-4xl">
          Cette page est introuvable
        </h1>
        <p className="mt-3 max-w-xl text-sm text-[color:var(--color-text-on-dark-muted)] sm:text-base">
          Le lien est peut-être erroné ou la page a été déplacée. Pour une urgence,
          appelez-nous directement&nbsp;: {business.availability.toLowerCase()}.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brass)] px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[color:var(--color-brass-strong)] sm:px-8 sm:py-4 sm:text-base"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-dark)] px-6 py-3 text-sm font-semibold text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)] sm:px-8 sm:py-4 sm:text-base"
          >
            <PhoneCall size={20} weight="fill" aria-hidden="true" />
            {business.phone}
          </a>
        </div>
      </main>
    </div>
  );
}
