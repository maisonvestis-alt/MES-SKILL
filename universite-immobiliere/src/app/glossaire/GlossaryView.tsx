"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Badge, Button, Card, LegalNotice, PageHeader, cx, inputClass } from "@/components/ui";
import { GLOSSARY, GLOSSARY_CATEGORIES, GLOSSARY_MAP, searchGlossary } from "@/content/glossary";
import { useProgress } from "@/lib/progress";
import type { GlossaryTerm } from "@/lib/types";

function TermDetail({ term }: { term: GlossaryTerm }) {
  const { state, addCard, dispatch } = useProgress();
  const inDeck = Boolean(state.srs[term.id]);

  return (
    <Card className="scroll-mt-24" as="article">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="brand">{term.category}</Badge>
        {term.legalSensitive ? <Badge tone="warning">Réglementaire</Badge> : null}
      </div>
      <h2 className="font-display text-xl font-semibold">{term.term}</h2>
      {term.aliases?.length ? (
        <p className="mt-1 text-xs text-ink-mute">Aussi appelé : {term.aliases.join(", ")}</p>
      ) : null}

      <dl className="mt-4 space-y-3">
        <div className="rounded-lg border border-line bg-surface-2 p-3.5">
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">En clair</dt>
          <dd className="mt-1 text-sm leading-relaxed">{term.simple}</dd>
        </div>
        <div className="rounded-lg border border-line bg-surface-2 p-3.5">
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
            Formulation professionnelle
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{term.pro}</dd>
        </div>
        {term.example ? (
          <div className="rounded-lg border-l-[3px] border-gold-400 bg-surface-2 p-3.5">
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-gold-600">Exemple</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{term.example}</dd>
          </div>
        ) : null}
        {term.watchOut ? (
          <div className="rounded-lg border border-warning/30 bg-warning-soft p-3.5">
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-warning">
              Piège fréquent
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{term.watchOut}</dd>
          </div>
        ) : null}
      </dl>

      {term.related?.length ? (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-mute">
            Termes liés
          </p>
          <div className="flex flex-wrap gap-1.5">
            {term.related.map((id) => {
              const t = GLOSSARY_MAP[id];
              if (!t) return null;
              return (
                <Link
                  key={id}
                  href={`/glossaire?terme=${id}`}
                  className="rounded-full border border-line px-2.5 py-1 text-xs transition-colors hover:border-gold-300 hover:text-gold-600"
                >
                  {t.term}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      {term.sources?.length ? (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-mute">Sources</p>
          <ul className="space-y-1">
            {term.sources.map((s, i) => (
              <li key={i}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline underline-offset-2 text-ink-soft hover:text-ink"
                >
                  ↗ {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {term.legalSensitive ? (
        <div className="mt-4">
          <LegalNotice />
        </div>
      ) : null}

      <Button
        variant={inDeck ? "secondary" : "ghost"}
        size="sm"
        className="mt-4"
        onClick={() =>
          inDeck
            ? dispatch({ type: "remove-card", cardId: term.id })
            : addCard(term.id, "term")
        }
      >
        {inDeck ? "✓ Dans mes révisions — retirer" : "+ Ajouter à mes révisions"}
      </Button>
    </Card>
  );
}

export function GlossaryView() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  /**
   * `undefined` signifie « aucun choix explicite » : la fiche affichée est alors
   * celle demandée par l'URL. Un clic dans la liste prend ensuite le dessus.
   */
  const [picked, setPicked] = useState<string | null | undefined>(undefined);
  const paramTerm = params.get("terme");
  const selected = picked === undefined ? paramTerm : picked;
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paramTerm) {
      const t = setTimeout(
        () => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        60,
      );
      return () => clearTimeout(t);
    }
  }, [paramTerm]);

  const results = useMemo(() => {
    let list = query ? searchGlossary(query, 200) : GLOSSARY;
    if (category !== "all") list = list.filter((t) => t.category === category);
    return [...list].sort((a, b) => a.term.localeCompare(b.term, "fr"));
  }, [query, category]);

  const selectedTerm = selected ? GLOSSARY_MAP[selected] : null;

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Vocabulaire"
        title="Glossaire immobilier"
        description={`${GLOSSARY.length} termes du métier, chacun expliqué deux fois : simplement, comme à quelqu'un qui découvre, puis dans la formulation que vous emploierez devant un client ou un confrère.`}
      />

      <div className="sticky top-14 z-10 -mx-4 mb-6 bg-canvas/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <label htmlFor="glossaire-search" className="sr-only">
          Rechercher un terme
        </label>
        <input
          id="glossaire-search"
          className={inputClass}
          placeholder="Rechercher : carrez, mandat, DPE, tantièmes, plus-value…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={cx(
              "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              category === "all"
                ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                : "border-line hover:border-line-strong",
            )}
          >
            Tout ({GLOSSARY.length})
          </button>
          {GLOSSARY_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cx(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                category === c
                  ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                  : "border-line hover:border-line-strong",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {selectedTerm ? (
        <div ref={detailRef} className="mb-6">
          <TermDetail term={selectedTerm} />
          <button
            type="button"
            onClick={() => setPicked(null)}
            className="mt-3 text-sm underline underline-offset-2 text-ink-soft"
          >
            Fermer la fiche
          </button>
        </div>
      ) : null}

      <p className="mb-4 text-sm text-ink-mute">
        {results.length} terme{results.length > 1 ? "s" : ""}
        {query ? ` pour « ${query} »` : ""}
      </p>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((t) => (
          <li key={t.id}>
            <button
              type="button"
              onClick={() => {
                setPicked(t.id);
                setTimeout(
                  () => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                  40,
                );
              }}
              className={cx(
                "ui-card h-full w-full p-4 text-left transition-shadow hover:shadow-md",
                selected === t.id && "border-gold-300",
              )}
            >
              <p className="font-medium leading-snug">{t.term}</p>
              <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink-soft">{t.simple}</p>
              <p className="mt-2 text-[10px] uppercase tracking-wide text-ink-mute">{t.category}</p>
            </button>
          </li>
        ))}
      </ul>

      {results.length === 0 ? (
        <Card>
          <p className="text-sm text-ink-soft">
            Aucun terme ne correspond à « {query} ». Essayez un mot plus court, ou parcourez les
            catégories.
          </p>
        </Card>
      ) : null}
    </div>
  );
}
