export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const ease = {
  premium: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;
