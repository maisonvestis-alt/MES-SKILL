"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Sidebar, SidebarContent } from "./Sidebar";
import { GlobalSearch } from "./GlobalSearch";
import { MOBILE_NAV } from "@/lib/nav";
import { cx } from "@/components/ui";
import { useProgress } from "@/lib/progress";

/** Pages affichées sans le châssis complet (plein écran, mobile-first). */
const BARE_ROUTES = ["/mode-terrain", "/bienvenue"];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const { state } = useProgress();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch((s) => !s);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const bare = BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));

  if (bare) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-dvh">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-ink-invert"
      >
        Aller au contenu
      </a>

      <Sidebar />

      {/* Tiroir mobile */}
      {drawer ? (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "var(--overlay)" }}
          onClick={() => setDrawer(false)}
          role="presentation"
        >
          <div
            className="h-full w-[17rem] max-w-[85vw] border-r border-line bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent onNavigate={() => setDrawer(false)} />
          </div>
        </div>
      ) : null}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-line bg-canvas/85 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <span aria-hidden>☰</span>
            </button>

            <button
              type="button"
              onClick={() => setSearch(true)}
              className="flex h-9 flex-1 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-left text-sm text-ink-mute transition-colors hover:border-line-strong"
            >
              <span aria-hidden>⌕</span>
              <span className="truncate">Rechercher une leçon, un terme…</span>
              <kbd className="ml-auto hidden rounded border border-line px-1.5 py-0.5 text-[10px] sm:block">
                Ctrl K
              </kbd>
            </button>

            <Link
              href="/mode-terrain"
              className="hidden h-9 items-center gap-2 rounded-lg bg-gold-400 px-3 text-sm font-semibold text-on-gold transition-colors hover:bg-gold-300 sm:flex"
            >
              <span aria-hidden>◉</span> Mode terrain
            </Link>

            <span className="hidden shrink-0 text-sm text-ink-soft md:block">
              {state.profile.firstName ? `Bonjour ${state.profile.firstName}` : null}
            </span>
          </div>
        </header>

        <main id="contenu" className="mx-auto max-w-6xl px-4 pb-28 pt-6 sm:px-6 lg:pb-16">
          {children}
        </main>
      </div>

      {/* Barre de navigation mobile */}
      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
        aria-label="Navigation rapide"
      >
        <ul className="mx-auto flex max-w-lg">
          {MOBILE_NAV.map((item) => {
            const active =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "flex min-h-[56px] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px] font-medium",
                    active ? "text-brand-600 dark:text-brand-700" : "text-ink-mute",
                  )}
                >
                  <span aria-hidden className="text-base leading-none">
                    {item.icon}
                  </span>
                  <span className="truncate">{item.short ?? item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {search ? <GlobalSearch onClose={() => setSearch(false)} /> : null}
    </div>
  );
}
