"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Chef d'orchestre unique des animations de scroll.
 *
 * Toutes les sections restent des Server Components : elles se contentent de
 * poser des attributs `data-*` sur le markup, et ce composant client — le seul
 * à embarquer GSAP côté page — les câble en une passe. Un seul ScrollTrigger
 * par élément, aucune dépendance croisée entre sections, et tout se nettoie au
 * démontage.
 *
 * Contrat des attributs :
 *   data-reveal              apparition à l'entrée dans le viewport
 *   data-reveal-delay="0.1"  décalage en secondes (stagger du hero)
 *   data-reveal-x="-24"      translation horizontale au lieu de verticale
 *   data-parallax="0.12"     parallaxe légère, proportionnelle à la hauteur
 *   data-progress            barre de progression (scaleY) scrubée sur le parent
 *   data-scroll-progress     barre de progression de lecture de la page
 */
export default function ScrollMotion() {
  useEffect(() => {
    // Le mode animé est confirmé : on annule le filet de sécurité du script inline.
    if (typeof window !== "undefined" && window.__ksMotionFallback) {
      window.clearTimeout(window.__ksMotionFallback);
      window.__ksMotionFallback = undefined;
    }
  }, []);

  useGSAP(() => {
    if (!document.documentElement.classList.contains("ks-motion")) return;

    // 1. Apparitions
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      const delay = Number.parseFloat(el.dataset.revealDelay ?? "0") || 0;
      const x = Number.parseFloat(el.dataset.revealX ?? "0") || 0;
      const y = x !== 0 ? 0 : 24;

      gsap.fromTo(
        el,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onComplete: () => gsap.set(el, { clearProps: "willChange,transform" }),
        }
      );
    });

    // 2. Parallaxe — volontairement faible : le décor bouge, jamais le texte.
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const strength = Number.parseFloat(el.dataset.parallax ?? "0.1") || 0.1;
      gsap.fromTo(
        el,
        { yPercent: -strength * 50 },
        {
          yPercent: strength * 50,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    });

    // 3. Traits de progression (timeline du processus)
    gsap.utils.toArray<HTMLElement>("[data-progress]").forEach((el) => {
      const container = el.closest("[data-progress-track]") ?? el.parentElement;
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: container,
            start: "top 72%",
            end: "bottom 78%",
            scrub: 0.5,
          },
        }
      );
    });

    // 4. Progression de lecture de la page (fine barre orange sous l'en-tête)
    const bar = document.querySelector<HTMLElement>("[data-scroll-progress]");
    if (bar) {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
        }
      );
    }

    ScrollTrigger.refresh();
  }, []);

  return null;
}
