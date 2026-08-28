"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { PhoneCall, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";
import HeroBackground from "./HeroBackground";
import Magnetic from "./Magnetic";
import LiveClock from "./LiveClock";

// Easing signature de la direction artistique.
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headlineLines = [
  { text: "L'urgence ne", accent: false },
  { text: "dort jamais.", accent: false },
  { text: "Nous non plus.", accent: true },
];

const readouts = [
  { label: "Base", value: `${business.serviceArea.base} — ${business.address.postalCode}` },
  { label: "Astreinte", value: "24 / 7 / 365" },
];

// — Variants ----------------------------------------------------------------
const sequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

// Reveal masqué : la ligne monte depuis sous son propre masque.
const clipLine: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

// Apparition fade + translateY 40px (spec sections).
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  // Sous prefers-reduced-motion, on rend directement l'état final (aucun transform).
  const initial = reduceMotion ? false : "hidden";

  return (
    <section id="accueil" className="hero-night relative min-h-[100svh] w-full overflow-hidden">
        <HeroBackground />

        {/* Cadre "viewport de dispatch" — quatre équerres à peine visibles. */}
        <HudFrame reduceMotion={reduceMotion} />

        <motion.div
          variants={sequence}
          initial={initial}
          animate="visible"
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col px-5 md:px-10"
        >
          {/* ── Barre haute ─────────────────────────────────────────────── */}
          <motion.header
            variants={fadeIn}
            className="flex items-center justify-between gap-4 border-b border-[var(--line-void)] py-6 md:py-7"
          >
            <a href="#contenu-principal" className="group flex items-baseline gap-2.5" aria-label={business.name}>
              <span className="font-condensed text-xl uppercase leading-none tracking-[0.02em] text-bone md:text-2xl">
                KS
              </span>
              <span className="font-mono-tech text-[0.62rem] uppercase tracking-[0.34em] text-ash">
                Multiservices
              </span>
            </a>

            <div className="flex items-center gap-5 md:gap-7">
              <span className="hidden items-center gap-2.5 font-mono-tech text-[0.62rem] uppercase tracking-[0.28em] text-ash sm:flex">
                <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
                En ligne 24/7
              </span>
              <Magnetic strength={0.28}>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.14em] text-bone transition-colors duration-500 hover:text-ember"
                >
                  <PhoneCall size={15} weight="fill" aria-hidden="true" />
                  <span className="hidden md:inline">{business.phone}</span>
                  <span className="md:hidden">Appeler</span>
                </a>
              </Magnetic>
            </div>
          </motion.header>

          {/* ── Vide compositionnel ─────────────────────────────────────── */}
          <div className="flex-1" aria-hidden="true" />

          {/* ── Bloc bas, grille asymétrique ────────────────────────────── */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 pb-16 md:pb-20 lg:grid-cols-12 lg:items-end">
            {/* Colonne principale */}
            <div className="lg:col-span-8 xl:col-span-9">
              <motion.p
                variants={fadeUp}
                className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-tech text-[0.68rem] uppercase tracking-[0.32em] text-ash md:text-xs"
              >
                <span className="text-ember">Plomberie</span>
                <span aria-hidden="true">—</span>
                <span>Serrurerie</span>
                <span aria-hidden="true">—</span>
                <span>Vitrerie</span>
              </motion.p>

              <h1 className="font-condensed uppercase leading-[0.9] tracking-[0.01em] text-bone [text-wrap:balance]">
                {headlineLines.map((line, index) => (
                  <span key={index} className="reveal-clip">
                    <motion.span
                      variants={clipLine}
                      className="block text-[clamp(3rem,12vw,10.5rem)]"
                      style={line.accent ? { color: "var(--ember)" } : undefined}
                    >
                      {line.text}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-xl text-base leading-relaxed text-[color:rgba(244,241,234,0.72)] md:text-lg"
              >
                Dépannage d&apos;urgence au Havre — plomberie, serrurerie, vitrerie.
                Un seul numéro, {business.availability.toLowerCase()} :
                on décroche, on intervient, on sécurise.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.4}>
                  <a
                    href={`tel:${business.phoneHref}`}
                    className="group inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-void shadow-[0_20px_50px_-18px_rgba(255,90,31,0.7)] transition-[background-color,box-shadow] duration-500 ease-[var(--ease-signature)] hover:bg-ember-glow"
                  >
                    <PhoneCall size={18} weight="fill" aria-hidden="true" />
                    Appeler le {business.phone}
                  </a>
                </Magnetic>
                <Magnetic strength={0.35}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line-void-strong)] px-7 py-4 text-sm font-semibold text-bone transition-colors duration-500 ease-[var(--ease-signature)] hover:border-ember hover:text-ember"
                  >
                    Demander un devis
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            {/* Colonne "console" — panneau HUD, hover scale 1.02 */}
            <motion.aside
              variants={fadeUp}
              className="lg:col-span-4 xl:col-span-3 lg:justify-self-end"
            >
              <div className="w-full max-w-xs rounded-lg border border-[var(--line-void)] bg-[color:rgba(14,14,15,0.55)] p-5 backdrop-blur-sm transition-transform duration-500 ease-[var(--ease-signature)] hover:scale-[1.02] lg:min-w-[16rem]">
                <p className="mb-4 flex items-center gap-2 font-mono-tech text-[0.6rem] uppercase tracking-[0.3em] text-ash">
                  <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
                  Poste d&apos;astreinte
                </p>
                <dl className="space-y-3 font-mono-tech text-xs text-bone">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-ash">Heure locale</dt>
                    <dd className="text-ember">
                      <LiveClock />
                    </dd>
                  </div>
                  {readouts.map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-4">
                      <dt className="text-ash">{row.label}</dt>
                      <dd className="text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.aside>
          </div>
        </motion.div>

        {/* Indice de défilement */}
        <motion.a
          href="#contact"
          aria-label="Faire défiler"
          variants={fadeIn}
          initial={initial}
          animate="visible"
          transition={{ delay: 1.1, duration: 1, ease: EASE }}
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ash md:flex"
        >
          <span className="font-mono-tech text-[0.6rem] uppercase tracking-[0.34em]">Défiler</span>
          <ArrowDown size={16} className="scroll-nudge" aria-hidden="true" />
        </motion.a>
    </section>
  );
}

// — Cadre HUD ---------------------------------------------------------------
function HudFrame({ reduceMotion }: { reduceMotion: boolean | null }) {
  const corners = [
    "left-4 top-4 border-l border-t md:left-6 md:top-6",
    "right-4 top-4 border-r border-t md:right-6 md:top-6",
    "left-4 bottom-4 border-l border-b md:left-6 md:bottom-6",
    "right-4 bottom-4 border-r border-b md:right-6 md:bottom-6",
  ];
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
    >
      {corners.map((pos) => (
        <span
          key={pos}
          className={`absolute h-8 w-8 border-[var(--line-void-strong)] ${pos}`}
        />
      ))}
    </motion.div>
  );
}
