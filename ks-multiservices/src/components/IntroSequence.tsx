"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { INTRO_SESSION_KEY, isCoarsePointer, prefersReducedMotion } from "@/lib/motion";
const PIN_COUNT = 5;
/** Circonférence de l'arc (2πr, r = 104) — sert au tracé progressif. */
const ARC_LENGTH = 654;

/** Retire l'écran d'attente rendu côté serveur : la séquence React prend le relais. */
function dismissShield() {
  document.documentElement.classList.remove("ks-intro");
  if (window.__ksIntroFallback) {
    window.clearTimeout(window.__ksIntroFallback);
    window.__ksIntroFallback = undefined;
  }
}

/**
 * Séquence d'ouverture — « le mécanisme cède ».
 *
 * Écran encre → la marque KS s'inscrit → les goupilles d'un barillet tombent
 * une à une → le cylindre pivote, un arc orange balaie le cercle → le rideau
 * s'ouvre en deux et découvre le hero.
 *
 * Contraintes tenues :
 *  · 1,4 s au maximum sur ordinateur, 0,9 s sur mobile (moins de patience,
 *    connexions plus lentes) ;
 *  · jouée une seule fois par session (sessionStorage) ;
 *  · totalement ignorée en `prefers-reduced-motion` ;
 *  · c'est un calque au-dessus de la page, jamais une condition d'affichage :
 *    le HTML du site est présent et lisible même si la séquence ne joue pas.
 */
export default function IntroSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<SVGCircleElement>(null);
  const cylinderRef = useRef<SVGGElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [done, setDone] = useState(false);
  const decidedRef = useRef(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Décision one-shot : elle dépend d'API navigateur (matchMedia,
    // sessionStorage) indisponibles au rendu serveur.
    if (decidedRef.current) return;
    decidedRef.current = true;

    const alreadyPlayed = sessionStorage.getItem(INTRO_SESSION_KEY) === "1";
    if (prefersReducedMotion() || alreadyPlayed) {
      dismissShield();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(true);
      return;
    }

    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    document.body.style.overflow = "hidden";
    setShouldPlay(true);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useGSAP(
    () => {
      if (!shouldPlay || !rootRef.current) return;

      const quick = isCoarsePointer();
      const s = quick ? 0.58 : 0.8; // durées : ~1 s sur mobile, ~1,4 s sur ordinateur

      const finish = () => {
        document.body.style.overflow = "";
        setDone(true);
      };

      // Le calque React couvre désormais l'écran : l'écran d'attente peut partir.
      dismissShield();

      const tl = gsap.timeline({ defaults: { ease: "expo.out" }, onComplete: finish });
      timelineRef.current = tl;

      tl.fromTo(
        "[data-intro-mark]",
        { autoAlpha: 0, scale: 0.86, y: 8 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.42 * s }
      );

      tl.fromTo(
        "[data-intro-word]",
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.34 * s },
        "-=0.24"
      );

      // Les goupilles tombent dans le barillet.
      tl.fromTo(
        "[data-intro-pin]",
        { yPercent: -140, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.26 * s,
          ease: "power3.in",
          stagger: 0.05 * s,
        },
        "-=0.14"
      );

      // Le cylindre pivote : la serrure cède.
      // `svgOrigin` plutôt qu'un transform-origin CSS : sur un <g> SVG, c'est la
      // seule façon fiable de faire pivoter le cylindre autour de son axe.
      tl.to(
        cylinderRef.current,
        { rotation: 62, svgOrigin: "120 150", duration: 0.42 * s, ease: "power2.inOut" },
        "-=0.06"
      );

      // Un trait orange balaie l'écran à l'instant du déverrouillage.
      tl.fromTo(
        "[data-intro-sweep]",
        { scaleX: 0, autoAlpha: 1 },
        { scaleX: 1, duration: 0.42 * s, ease: "power3.inOut" },
        "<"
      );
      tl.to("[data-intro-sweep]", { autoAlpha: 0, duration: 0.2 * s }, ">-0.08");

      // L'arc orange boucle le cercle.
      // `immediateRender: false` : sans cela, GSAP applique la valeur de départ
      // dès la création de la timeline et l'arc apparaîtrait déjà à moitié tracé.
      tl.fromTo(
        arcRef.current,
        { strokeDashoffset: ARC_LENGTH },
        { strokeDashoffset: 0, duration: 0.52 * s, ease: "power2.inOut", immediateRender: false },
        "<"
      );

      // Le rideau s'ouvre sur le site.
      tl.to("[data-intro-stage]", { autoAlpha: 0, scale: 1.06, duration: 0.32 * s }, "-=0.1");
      tl.to(topRef.current, { yPercent: -100, duration: 0.62 * s, ease: "expo.inOut" }, "-=0.16");
      tl.to(bottomRef.current, { yPercent: 100, duration: 0.62 * s, ease: "expo.inOut" }, "<");
    },
    { dependencies: [shouldPlay], scope: rootRef }
  );

  if (done || !shouldPlay) return null;

  const skip = () => {
    timelineRef.current?.kill();
    dismissShield();
    document.body.style.overflow = "";
    setDone(true);
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200]"
      role="dialog"
      aria-modal="true"
      aria-label="Introduction animée KS Multiservices"
    >
      <div
        ref={topRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1/2 bg-[color:var(--color-ink)]"
      />
      <div
        ref={bottomRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[color:var(--color-ink)]"
      />

      <div
        ref={stageRef}
        data-intro-stage
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center gap-7"
      >
        <div data-intro-mark className="relative">
          <svg
            viewBox="0 0 240 240"
            className="h-[190px] w-[190px] sm:h-[260px] sm:w-[260px]"
            fill="none"
          >
            <circle cx="120" cy="120" r="104" stroke="rgba(246,247,249,0.12)" strokeWidth="1.5" />
            <circle
              ref={arcRef}
              cx="120"
              cy="120"
              r="104"
              stroke="var(--color-signal)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={ARC_LENGTH}
              strokeDashoffset={ARC_LENGTH}
              transform="rotate(-90 120 120)"
            />

            {/* Chambre à goupilles */}
            <rect
              x="76"
              y="40"
              width="88"
              height="54"
              rx="6"
              stroke="rgba(246,247,249,0.22)"
              strokeWidth="1.5"
            />
            <g>
              {Array.from({ length: PIN_COUNT }).map((_, i) => (
                <rect
                  key={i}
                  data-intro-pin
                  x={84 + i * 16}
                  y={48}
                  width="7"
                  height={20 + (i % 2) * 12}
                  rx="3.5"
                  fill={i % 2 === 0 ? "rgba(246,247,249,0.7)" : "rgba(246,247,249,0.45)"}
                />
              ))}
            </g>

            {/* Cylindre */}
            <g ref={cylinderRef}>
              <circle cx="120" cy="150" r="44" stroke="rgba(246,247,249,0.28)" strokeWidth="1.5" />
              <circle cx="120" cy="150" r="34" stroke="rgba(246,247,249,0.14)" strokeWidth="1.5" />
              <circle cx="120" cy="141" r="11" stroke="var(--color-signal)" strokeWidth="3.5" />
              <path
                d="M120 152v18"
                stroke="var(--color-signal)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>

        <div data-intro-word className="text-center">
          <p className="font-display text-xl font-extrabold uppercase tracking-[0.3em] text-[color:var(--text-on-dark)] sm:text-3xl">
            KS Multiservices
          </p>
          <p className="mt-3 font-display text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[color:var(--text-on-dark-muted)] sm:text-xs">
            Le Havre · Dépannage d&apos;urgence
          </p>
        </div>
      </div>

      <span
        data-intro-sweep
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[2px] w-full origin-left bg-[color:var(--color-signal)] opacity-0"
      />

      <button
        type="button"
        onClick={skip}
        aria-label="Passer l'animation d'introduction"
        className="absolute bottom-6 right-6 z-10 rounded-full border border-[color:var(--line-dark-strong)] px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-on-dark-muted)] transition hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)]"
      >
        Passer
      </button>
    </div>
  );
}
