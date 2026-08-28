"use client";

import { useEffect, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Défilement doux Lenis, piloté par le ticker GSAP et synchronisé avec
 * ScrollTrigger (une seule boucle rAF pour tout le monde). Sous
 * prefers-reduced-motion, Lenis n'est pas monté : on garde le scroll natif.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      // Courbe maison, cohérente avec l'easing signature [0.22, 1, 0.36, 1].
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return <>{children}</>;
}
