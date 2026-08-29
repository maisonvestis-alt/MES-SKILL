"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";
import Magnetic from "@/components/hero/Magnetic";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const nav = [
  { href: "#services", label: "Interventions" },
  { href: "#process", label: "Déroulé" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#zone", label: "Zone" },
];

/** Barre fixe qui n'apparaît qu'une fois le hero dépassé. */
export default function SiteHeader() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.85 : 700;
    setShown(y > threshold);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: reduceMotion ? 0 : shown ? 0 : -80, opacity: shown ? 1 : 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{ pointerEvents: shown ? "auto" : "none" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line-void)] bg-[color:rgba(10,10,10,0.72)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-5 py-3.5 md:px-10">
        <a href="#accueil" className="flex items-baseline gap-2.5" aria-label={business.name}>
          <span className="font-condensed text-lg uppercase leading-none tracking-[0.03em] text-bone">KS</span>
          <span className="hidden font-mono-tech text-[0.58rem] uppercase tracking-[0.32em] text-ash sm:inline">
            Multiservices
          </span>
        </a>

        <nav aria-label="Principale" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-tech text-[0.62rem] uppercase tracking-[0.2em] text-ash transition-colors duration-300 hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Magnetic strength={0.25}>
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2 font-mono-tech text-[0.68rem] uppercase tracking-[0.12em] text-void transition-colors duration-300 hover:bg-ember-glow"
          >
            <PhoneCall size={14} weight="fill" aria-hidden="true" />
            <span className="hidden sm:inline">{business.phone}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
