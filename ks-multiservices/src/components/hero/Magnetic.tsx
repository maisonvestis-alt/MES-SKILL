"use client";

import { useCallback, useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

type MagneticProps = {
  children: ReactNode;
  /** Fraction du déplacement souris répercutée (0.2–0.5 = discret). */
  strength?: number;
  className?: string;
};

/** Media query réactive, sûre en SSR (pas de setState dans un effet). */
function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query]
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

/**
 * Enveloppe "magnétique" : l'élément suit légèrement le curseur puis revient
 * en douceur (ressort). Désactivé au pointeur grossier (tactile) et sous
 * prefers-reduced-motion — l'enfant reste alors parfaitement cliquable.
 */
export default function Magnetic({ children, strength = 0.32, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const enabled = !reduceMotion && finePointer;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 170, damping: 15, mass: 0.12 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
