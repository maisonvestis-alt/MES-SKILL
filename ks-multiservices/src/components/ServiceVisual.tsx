import Image from "next/image";
import { serviceIcons } from "./icons";

/**
 * Visuel d'un métier.
 *
 * Tant qu'aucune photo réelle n'est fournie, on n'affiche PAS une image de
 * banque : on assume un panneau technique (grille de plan, pictogramme, numéro
 * de métier) qui appartient à l'identité. Dès qu'un chemin `src` est renseigné
 * dans `content.ts`, la vraie photo prend sa place, au même format.
 */
export default function ServiceVisual({
  slug,
  name,
  index,
  src,
  className = "",
}: {
  slug: keyof typeof serviceIcons;
  name: string;
  index: string;
  src: string | null;
  className?: string;
}) {
  const Icon = serviceIcons[slug];

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={`${name} — intervention KS Multiservices au Havre`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)] via-transparent to-transparent"
        />
      </div>
    );
  }

  // Panneau technique : c'est un parti pris graphique, pas une image manquante.
  return (
    <div
      className={`relative overflow-hidden bg-[color:var(--color-ink)] ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(246,247,249,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(246,247,249,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 100% at 15% 0%, rgba(255,106,19,0.24) 0%, rgba(255,106,19,0.05) 45%, transparent 72%)",
        }}
      />
      <span className="absolute right-5 top-3 font-display text-[3.8rem] font-extrabold leading-none tracking-[-0.05em] text-white/[0.06]">
        {index}
      </span>

      <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--line-dark)]">
        <span className="absolute inset-3 rounded-full border border-dashed border-[color:var(--color-signal)]/35" />
        <Icon size={38} className="relative text-[color:var(--color-signal)]" />
      </span>

      <span className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[color:var(--line-dark)] bg-[color:var(--color-ink)]/70 px-5 py-3">
        <span className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--text-on-dark)]">
          {name}
        </span>
        <span className="font-display text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark-muted)]">
          Photo à venir
        </span>
      </span>
    </div>
  );
}
