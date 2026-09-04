"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ALL_LESSONS, MODULE_MAP } from "@/content";
import { GLOSSARY, normalize } from "@/content/glossary";
import { ALL_NAV_ITEMS } from "@/lib/nav";
import { cx, inputClass } from "@/components/ui";

interface Result {
  id: string;
  kind: "Leçon" | "Glossaire" | "Outil";
  title: string;
  subtitle: string;
  href: string;
  score: number;
}

function buildIndex(): Omit<Result, "score">[] {
  const lessons = ALL_LESSONS.map((l) => ({
    id: `lesson-${l.id}`,
    kind: "Leçon" as const,
    title: l.title,
    subtitle: `${MODULE_MAP[l.moduleId]?.title ?? ""} · ${l.summary}`,
    href: `/cours/${l.moduleId}/${l.id}`,
  }));
  const terms = GLOSSARY.map((t) => ({
    id: `term-${t.id}`,
    kind: "Glossaire" as const,
    title: t.term,
    subtitle: t.simple,
    href: `/glossaire?terme=${t.id}`,
  }));
  const tools = ALL_NAV_ITEMS.map((n) => ({
    id: `nav-${n.href}`,
    kind: "Outil" as const,
    title: n.label,
    subtitle: n.description ?? "",
    href: n.href,
  }));
  return [...lessons, ...terms, ...tools];
}

export function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setCursor(0);
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);

  const results = useMemo<Result[]>(() => {
    const q = normalize(query);
    if (!q) {
      return index
        .filter((i) => i.kind === "Outil")
        .slice(0, 8)
        .map((i) => ({ ...i, score: 1 }));
    }
    const tokens = q.split(" ");
    return index
      .map((item) => {
        const title = normalize(item.title);
        const hay = normalize(`${item.title} ${item.subtitle}`);
        let score = 0;
        for (const tok of tokens) {
          if (title.startsWith(tok)) score += 10;
          else if (title.includes(tok)) score += 6;
          else if (hay.includes(tok)) score += 2;
          else score -= 4;
        }
        return { ...item, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [query, index]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      }
      if (e.key === "Enter" && results[cursor]) {
        e.preventDefault();
        router.push(results[cursor].href);
        onClose();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, cursor, router, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[10vh]"
      style={{ background: "var(--overlay)" }}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-line bg-surface shadow-lg"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Recherche"
      >
        <div className="border-b border-line p-3">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            placeholder="Rechercher une leçon, un terme, un outil…"
            className={inputClass}
            aria-label="Rechercher"
          />
        </div>
        <ul className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-8 text-center text-sm text-ink-mute">
              Aucun résultat pour « {query} ».
            </li>
          ) : (
            results.map((r, i) => (
              <li key={r.id}>
                <button
                  type="button"
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => {
                    router.push(r.href);
                    onClose();
                  }}
                  className={cx(
                    "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    i === cursor ? "bg-surface-3" : "hover:bg-surface-2",
                  )}
                >
                  <span className="mt-0.5 shrink-0 rounded border border-line bg-surface px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-mute">
                    {r.kind}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{r.title}</span>
                    <span className="block truncate text-xs text-ink-mute">{r.subtitle}</span>
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
        <p className="border-t border-line px-4 py-2 text-[11px] text-ink-mute">
          ↑ ↓ pour naviguer · Entrée pour ouvrir · Échap pour fermer
        </p>
      </div>
    </div>
  );
}
