"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";

const SESSION_KEY = "ks-intro-played";
const RING_COUNT = 7;

/**
 * Séquence signature : une mèche perce le cylindre de serrure, la caméra plonge
 * à travers le mécanisme (anneaux métalliques en tunnel CSS/SVG, sans WebGL) puis
 * la lumière révèle le site. Rejouée une seule fois par session ; ignorée si
 * prefers-reduced-motion ou déjà vue, pour ne jamais pénaliser une visite répétée.
 */
export default function IntroSequence({ onDone }: { onDone: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const drillRef = useRef<SVGSVGElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const ringRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [shouldPlay, setShouldPlay] = useState(false);
  const decidedRef = useRef(false);

  useEffect(() => {
    // Décision one-shot dépendant d'API navigateur indisponibles côté serveur
    // (matchMedia, sessionStorage) : ce n'est pas une valeur dérivable pendant le
    // rendu, d'où l'effet. `decidedRef` garantit qu'elle n'est prise qu'une fois.
    if (decidedRef.current) return;
    decidedRef.current = true;

    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "1";
    if (prefersReducedMotion() || alreadyPlayed) {
      onDone();
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    // Lecture unique d'une capacité navigateur indisponible pendant le rendu serveur :
    // c'est le cas de synchronisation externe qu'un effet doit couvrir, pas un état dérivable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShouldPlay(true);
  }, [onDone]);

  useGSAP(
    () => {
      if (!shouldPlay || !containerRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => onDone(),
      });

      tl.set(containerRef.current, { autoAlpha: 1 });

      // 1. La mèche approche et perce le cylindre.
      tl.fromTo(
        drillRef.current,
        { x: 140, y: -90, rotate: -8, autoAlpha: 0, scale: 0.85 },
        { x: 0, y: 0, rotate: 0, autoAlpha: 1, scale: 1, duration: 0.55, ease: "power3.out" }
      );
      tl.to(drillRef.current, {
        rotate: 720,
        duration: 0.5,
        ease: "power1.in",
      });
      tl.to(
        flashRef.current,
        { autoAlpha: 1, duration: 0.08 },
        ">-0.05"
      );

      // 2. La caméra plonge dans le cylindre : anneaux qui s'ouvrent en tunnel.
      tl.to(drillRef.current, { autoAlpha: 0, duration: 0.15 }, "<");
      tl.to(flashRef.current, { autoAlpha: 0, duration: 0.2 }, ">-0.02");

      ringRefs.current.forEach((ring, i) => {
        if (!ring) return;
        tl.fromTo(
          ring,
          { scale: 0.05, autoAlpha: 0 },
          { scale: 6, autoAlpha: 0.9, duration: 0.5, ease: "power1.in" },
          `-=${i === 0 ? 0 : 0.42}`
        ).to(ring, { autoAlpha: 0, duration: 0.18 }, ">-0.1");
      });

      // 3. Flash final — la lumière révèle le site.
      tl.to(flashRef.current, { autoAlpha: 1, duration: 0.18 }, "-=0.15");
      tl.to(containerRef.current, { autoAlpha: 0, duration: 0.5, ease: "power2.out" }, "+=0.05");
    },
    { dependencies: [shouldPlay], scope: containerRef }
  );

  if (!shouldPlay) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label="Introduction animée KS Multiservices"
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink opacity-0"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        {Array.from({ length: RING_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              ringRefs.current[i] = el;
            }}
            className="absolute rounded-full opacity-0"
            style={{
              width: 220 + i * 26,
              height: 220 + i * 26,
              border: "3px solid",
              borderColor: i % 2 === 0 ? "var(--color-brass)" : "var(--color-steel)",
              boxShadow: "0 0 40px rgba(200,154,63,0.25) inset",
            }}
          />
        ))}
      </div>

      <svg
        ref={drillRef}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className="relative"
      >
        <rect x="52" y="10" width="16" height="46" rx="4" fill="var(--color-steel)" />
        <path
          d="M60 56 L72 96 L60 112 L48 96 Z"
          fill="var(--color-brass)"
        />
        <path d="M60 56 L72 96 L60 108 Z" fill="var(--color-brass-strong)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={52}
            y1={16 + i * 8}
            x2={68}
            y2={20 + i * 8}
            stroke="var(--color-ink)"
            strokeWidth="2"
            opacity="0.5"
          />
        ))}
      </svg>

      <div
        ref={flashRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,247,225,1) 0%, rgba(200,154,63,0.6) 35%, rgba(18,21,26,0) 70%)",
        }}
      />

      <button
        type="button"
        aria-label="Passer l'introduction"
        onClick={() => {
          gsap.killTweensOf([containerRef.current, drillRef.current, flashRef.current]);
          onDone();
        }}
        className="absolute bottom-6 right-6 z-10 rounded-full border border-[color:var(--color-border-dark)] px-4 py-2 text-sm text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-brass)] hover:text-[color:var(--color-brass)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[color:var(--color-brass)]"
      >
        Passer l&apos;intro
      </button>
    </div>
  );
}
