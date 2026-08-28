"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Easing signature de la direction artistique.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Apparition de section : fade + translateY 40px (spec).
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const groupVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Élément unique révélé au scroll (fade + 40px). */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Conteneur qui révèle ses enfants <RevealItem> en cascade. */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: RevealProps & { stagger?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={groupVariants(stagger, delay)}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/** Enfant d'un RevealGroup (hérite du rythme du parent). */
export function RevealItem({ children, className }: RevealProps) {
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}
