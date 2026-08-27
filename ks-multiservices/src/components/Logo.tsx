import { KeyholeMark } from "./icons";

/**
 * Bloc-marque : pictogramme + logotype. `tone` permet de le poser aussi bien
 * sur fond sombre (en-tête, pied de page) que clair (pages légales).
 */
export default function Logo({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const label = tone === "dark" ? "text-[color:var(--text-on-dark)]" : "text-[color:var(--text-on-light)]";
  const muted =
    tone === "dark" ? "text-[color:var(--text-on-dark-muted)]" : "text-[color:var(--text-on-light-muted)]";

  return (
    <span className="inline-flex items-center gap-3">
      <KeyholeMark size={compact ? 28 : 34} className="text-[color:var(--color-signal)]" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.95rem] font-extrabold uppercase tracking-[0.16em] ${label} sm:text-[1.05rem]`}
        >
          KS Multiservices
        </span>
        {!compact && (
          <span
            className={`mt-1 font-display text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${muted}`}
          >
            Serrurerie · Plomberie · Vitrerie
          </span>
        )}
      </span>
    </span>
  );
}
