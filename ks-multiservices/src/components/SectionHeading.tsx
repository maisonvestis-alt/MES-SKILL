import type { ReactNode } from "react";

/**
 * Titraille de section, seule et unique.
 * Repère chiffré + surtitre + titre + chapô : la même grammaire éditoriale
 * revient à chaque section, ce qui fait tenir l'ensemble comme un système.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  action,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        <p
          data-reveal
          className={`eyebrow ${isDark ? "text-[color:var(--text-on-dark-muted)]" : "text-[color:var(--text-on-light-muted)]"}`}
        >
          <span className={isDark ? "text-[color:var(--color-signal)]" : "text-[color:var(--color-signal-ink)]"}>
            {index}
          </span>
          {eyebrow}
        </p>

        <h2
          data-reveal
          data-reveal-delay="0.06"
          className={`mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] ${
            isDark ? "text-[color:var(--text-on-dark)]" : "text-[color:var(--text-on-light)]"
          }`}
        >
          {title}
        </h2>

        {intro && (
          <p
            data-reveal
            data-reveal-delay="0.12"
            className={`mt-5 max-w-xl text-[1.0625rem] leading-relaxed ${
              isDark ? "text-[color:var(--text-on-dark-muted)]" : "text-[color:var(--text-on-light-muted)]"
            }`}
          >
            {intro}
          </p>
        )}
      </div>

      {action && (
        <div data-reveal data-reveal-delay="0.16" className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
