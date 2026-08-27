/**
 * Compteurs de repli posés par le script inline de `lib/motion.ts` : ils
 * permettent aux composants clients d'annuler le filet de sécurité une fois
 * qu'ils ont effectivement pris la main.
 */
declare global {
  interface Window {
    __ksMotionFallback?: number;
    __ksIntroFallback?: number;
  }
}

export {};
