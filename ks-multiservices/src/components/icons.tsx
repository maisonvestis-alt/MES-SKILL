/**
 * Pictogrammes maison.
 *
 * Les trois métiers ont leurs icônes dessinées à la main (même grille 24, même
 * graisse de trait 1.6, mêmes extrémités arrondies) : c'est ce qui distingue une
 * identité d'un assemblage de packs d'icônes. Le reste de l'interface
 * (téléphone, flèches, menu) réutilise Phosphor, qui n'est jamais mélangé aux
 * pictogrammes de métier dans un même bloc.
 */

type IconProps = {
  className?: string;
  size?: number;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Signature de marque : un pêne de serrure stylisé en « K ». */
export function KeyholeMark({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 4h18l6 6v18H4z"
        fill="currentColor"
        opacity="0.14"
      />
      <path d="M4 4h18l6 6v18H4z" {...base} strokeWidth={1.8} />
      <circle cx="16" cy="14" r="4" {...base} strokeWidth={1.8} />
      <path d="M16 18v6" {...base} strokeWidth={2.2} />
      <path d="M13.5 22h5" {...base} strokeWidth={2.2} />
    </svg>
  );
}

export function LockIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3.5" y="10" width="17" height="10.5" rx="2.5" {...base} />
      <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10" {...base} />
      <circle cx="12" cy="14.6" r="1.5" {...base} />
      <path d="M12 16.1v2" {...base} />
    </svg>
  );
}

export function DropIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 3.2c3.4 4 5.6 6.9 5.6 9.6a5.6 5.6 0 1 1-11.2 0c0-2.7 2.2-5.6 5.6-9.6Z" {...base} />
      <path d="M9.4 13.4a2.7 2.7 0 0 0 2.6 3.3" {...base} />
    </svg>
  );
}

export function GlassIcon({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.6" {...base} />
      <path d="M3.5 12h6.2l2.4 3.6 2.2-5.4 1.6 2.4h4.6" {...base} />
      <path d="M9.7 12 8.1 20.5" {...base} opacity="0.7" />
      <path d="m12.1 15.6 2 4.9" {...base} opacity="0.7" />
    </svg>
  );
}

export const serviceIcons = {
  serrurerie: LockIcon,
  plomberie: DropIcon,
  vitrerie: GlassIcon,
} as const;

export const emergencyIcons = {
  lock: LockIcon,
  drop: DropIcon,
  window: GlassIcon,
} as const;
