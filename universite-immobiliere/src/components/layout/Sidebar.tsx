"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import { useProgress, bandForXp } from "@/lib/progress";
import { globalProgress } from "@/lib/selectors";
import { cx, ProgressBar } from "@/components/ui";

function isActive(pathname: string, href: string): boolean {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { state, hydrated } = useProgress();
  const progress = globalProgress(state);
  const band = bandForXp(state.xp);

  return (
    <div className="flex h-full flex-col">
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className="flex items-center gap-3 border-b border-line px-5 py-5"
      >
        <span
          aria-hidden
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-900 font-display text-lg font-semibold text-gold-300"
        >
          UI
        </span>
        <span className="min-w-0">
          <span className="block truncate font-display text-[15px] font-semibold leading-tight">
            Université Immobilière
          </span>
          <span className="block truncate text-[11px] text-ink-mute">
            De zéro à conseiller expert
          </span>
        </span>
      </Link>

      <div className="border-b border-line px-5 py-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 font-medium">
            <span aria-hidden>{band.emoji}</span>
            {band.label}
          </span>
          <span className="tabular-nums text-ink-mute">{hydrated ? state.xp : 0} XP</span>
        </div>
        <ProgressBar value={hydrated ? progress.percent : 0} showValue={false} size="sm" tone="gold" />
        <p className="mt-2 text-[11px] text-ink-mute">
          {hydrated ? progress.done : 0} leçon{progress.done > 1 ? "s" : ""} sur {progress.total} terminée
          {progress.done > 1 ? "s" : ""}
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Navigation principale">
        {NAV.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-mute">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cx(
                        "group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                        active
                          ? "bg-brand-900 font-medium text-ink-invert dark:bg-brand-200 dark:text-ink"
                          : "text-ink-soft hover:bg-surface-3 hover:text-ink",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cx(
                          "w-4 shrink-0 text-center text-sm",
                          active ? "text-gold-300" : "text-ink-mute group-hover:text-gold-600",
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-line p-3">
        <Link
          href="/parametres"
          onClick={onNavigate}
          className={cx(
            "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
            isActive(pathname, "/parametres")
              ? "bg-surface-3 font-medium text-ink"
              : "text-ink-soft hover:bg-surface-3",
          )}
        >
          <span aria-hidden className="w-4 text-center text-ink-mute">
            ⚙
          </span>
          Paramètres
        </Link>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-line bg-surface lg:block">
      <SidebarContent />
    </aside>
  );
}
