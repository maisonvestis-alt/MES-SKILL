"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* Carte                                                                       */
/* -------------------------------------------------------------------------- */

export function Card({
  children,
  className,
  as: Tag = "div",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  padded?: boolean;
}) {
  return (
    <Tag className={cx("ui-card", padded && "p-5 sm:p-6", className)}>{children}</Tag>
  );
}

export function CardTitle({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <h2 className="text-lg font-semibold tracking-tight">{children}</h2>
      {hint ? <span className="text-xs text-ink-mute">{hint}</span> : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Titres de section                                                           */
/* -------------------------------------------------------------------------- */

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-7">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">{eyebrow}</p>
      ) : null}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex shrink-0 flex-wrap gap-2">{actions}</div> : null}
      </div>
      <div className="ui-rule mt-5" />
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Boutons                                                                     */
/* -------------------------------------------------------------------------- */

type Variant = "primary" | "secondary" | "ghost" | "gold" | "danger";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-900 text-ink-invert hover:bg-brand-800 dark:bg-brand-800 dark:text-brand-50 border border-transparent",
  secondary:
    "bg-surface text-ink border border-line-strong hover:bg-surface-2",
  ghost: "text-ink-soft hover:bg-surface-3 border border-transparent",
  gold: "bg-gold-400 text-brand-950 hover:bg-gold-300 border border-transparent font-semibold",
  danger: "bg-danger-soft text-danger border border-danger/30 hover:brightness-97",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-lg",
  md: "h-11 px-4 text-sm rounded-lg",
  lg: "h-12 px-6 text-base rounded-xl",
};

const BASE =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 select-none";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={cx(BASE, VARIANTS[variant], SIZES[size], className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  const cls = cx(BASE, VARIANTS[variant], SIZES[size], className);
  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Étiquettes                                                                  */
/* -------------------------------------------------------------------------- */

type Tone = "neutral" | "brand" | "gold" | "success" | "warning" | "danger" | "info";

const TONES: Record<Tone, string> = {
  neutral: "bg-surface-3 text-ink-soft border-line",
  brand: "bg-brand-50 text-brand-600 border-brand-100 dark:text-brand-700",
  gold: "bg-gold-50 text-gold-600 border-gold-100",
  success: "bg-success-soft text-success border-success/25",
  warning: "bg-warning-soft text-warning border-warning/25",
  danger: "bg-danger-soft text-danger border-danger/25",
  info: "bg-info-soft text-info border-info/25",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium leading-5",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Progression                                                                 */
/* -------------------------------------------------------------------------- */

export function ProgressBar({
  value,
  label,
  showValue = true,
  tone = "brand",
  size = "md",
}: {
  value: number;
  label?: string;
  showValue?: boolean;
  tone?: "brand" | "gold" | "success";
  size?: "sm" | "md";
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const fill =
    tone === "gold" ? "bg-gold-400" : tone === "success" ? "bg-success" : "bg-brand-600 dark:bg-brand-500";
  return (
    <div>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-baseline justify-between gap-2 text-xs">
          {label ? <span className="font-medium text-ink-soft">{label}</span> : <span />}
          {showValue ? <span className="tabular-nums font-semibold text-ink">{pct}%</span> : null}
        </div>
      )}
      <div
        className={cx("w-full overflow-hidden rounded-full bg-surface-3", size === "sm" ? "h-1.5" : "h-2.5")}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "Progression"}
      >
        <div className={cx("h-full rounded-full transition-[width] duration-500", fill)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function Ring({ value, size = 92, label }: { value: number; size?: number; label?: string }) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--gold-400)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * pct) / 100}
          style={{ transition: "stroke-dashoffset 700ms cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-semibold tabular-nums">{pct}%</span>
        {label ? <span className="text-[10px] uppercase tracking-wide text-ink-mute">{label}</span> : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Encadrés                                                                    */
/* -------------------------------------------------------------------------- */

const CALLOUTS = {
  info: { cls: "border-info/30 bg-info-soft", icon: "ℹ️", label: "À savoir" },
  tip: { cls: "border-success/30 bg-success-soft", icon: "💡", label: "Conseil de pro" },
  warning: { cls: "border-warning/35 bg-warning-soft", icon: "⚠️", label: "Attention" },
  legal: { cls: "border-brand-200 bg-brand-50", icon: "⚖️", label: "Point réglementaire" },
  danger: { cls: "border-danger/30 bg-danger-soft", icon: "⛔", label: "Erreur classique" },
  quote: { cls: "border-line-strong bg-surface-2", icon: "❝", label: "Sur le terrain" },
} as const;

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: keyof typeof CALLOUTS;
  title?: string;
  children: ReactNode;
}) {
  const c = CALLOUTS[variant];
  return (
    <div className={cx("rounded-xl border p-4", c.cls)}>
      <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
        <span aria-hidden>{c.icon}</span>
        {title ?? c.label}
      </p>
      <div className="text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Divers                                                                      */
/* -------------------------------------------------------------------------- */

export function Stat({
  label,
  value,
  hint,
  icon,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
  icon?: string;
}) {
  return (
    <div className="ui-card p-4">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink-mute">
        {icon ? <span aria-hidden>{icon}</span> : null}
        {label}
      </div>
      <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight">{value}</p>
      {hint ? <p className="mt-1 text-xs text-ink-mute">{hint}</p> : null}
    </div>
  );
}

export function EmptyState({
  icon = "🗂️",
  title,
  description,
  action,
}: {
  icon?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="ui-card flex flex-col items-center justify-center px-6 py-12 text-center">
      <span className="mb-3 text-3xl" aria-hidden>
        {icon}
      </span>
      <p className="font-semibold">{title}</p>
      {description ? <p className="mt-1 max-w-md text-sm text-ink-soft">{description}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

export function Field({
  label,
  hint,
  children,
  htmlFor,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-ink-mute">{hint}</p> : null}
    </div>
  );
}

export const inputClass =
  "w-full rounded-lg border border-line-strong bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-mute focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/25";

export function Divider({ label }: { label?: string }) {
  if (!label) return <hr className="my-6 border-line" />;
  return (
    <div className="my-6 flex items-center gap-3">
      <hr className="flex-1 border-line" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-mute">{label}</span>
      <hr className="flex-1 border-line" />
    </div>
  );
}

export function LegalNotice({ lastVerified }: { lastVerified?: string }) {
  return (
    <p className="rounded-lg border border-warning/30 bg-warning-soft px-3 py-2 text-xs leading-relaxed text-ink-soft">
      <strong className="font-semibold text-warning">À vérifier selon la réglementation en vigueur.</strong>{" "}
      Ce contenu est pédagogique et peut évoluer avec la loi, la jurisprudence ou la doctrine administrative.
      {lastVerified ? ` Dernière vérification du contenu : ${lastVerified}.` : ""}
    </p>
  );
}
