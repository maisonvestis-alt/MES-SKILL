/** Utilitaires de mouvement partagés. */

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isCoarsePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

/** Courbes maison — mêmes valeurs que les tokens CSS, pour GSAP. */
export const EASE = {
  outExpo: "expo.out",
  inOut: "power3.inOut",
} as const;

/** Clé de session : l'introduction ne se joue qu'une fois par visite. */
export const INTRO_SESSION_KEY = "ks-intro-played";

/**
 * Script inline posé dans <head>, exécuté avant la première peinture.
 *
 * Il décide de deux choses qu'aucun rendu serveur ne peut connaître :
 *  1. `ks-motion` — les animations de scroll sont actives (JavaScript présent,
 *     pas de `prefers-reduced-motion`) ; sans cette classe, rien n'est masqué ;
 *  2. `ks-intro` — l'introduction va jouer, donc l'écran d'attente doit couvrir
 *     la page immédiatement. Sans lui, le hero s'afficherait puis serait
 *     recouvert au moment de l'hydratation : un clignotement disgracieux.
 *
 * Deux filets de sécurité : si le bundle ne se charge jamais, la classe de
 * masquage est retirée au bout de 2,5 s et l'écran d'attente au bout de 2 s —
 * l'utilisateur voit le site, jamais un écran noir figé.
 */
export const motionBootstrapScript = `(function(){try{var d=document.documentElement;
if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('ks-motion');
window.__ksMotionFallback=window.setTimeout(function(){d.classList.remove('ks-motion');},2500);
if(sessionStorage.getItem('${INTRO_SESSION_KEY}')!=='1'){d.classList.add('ks-intro');
window.__ksIntroFallback=window.setTimeout(function(){d.classList.remove('ks-intro');},2000);}
}catch(e){}})();`;
