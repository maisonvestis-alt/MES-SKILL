"use client";

import { useEffect, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Défilement doux Lenis, piloté par le ticker GSAP et synchronisé avec
 * ScrollTrigger (une seule boucle rAF). Lenis et GSAP sont chargés en dynamique
 * APRÈS l'hydratation : ils ne pèsent pas sur le bundle initial (budget JS) et
 * ne bloquent pas l'interactivité. Sous prefers-reduced-motion, rien n'est
 * monté : on garde le scroll natif.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    let mounted = true;
    let cleanup = () => {};

    (async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      });
      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, [reduceMotion]);

  return <>{children}</>;
}
