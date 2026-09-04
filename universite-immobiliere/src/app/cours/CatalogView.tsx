"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge, Card, PageHeader, ProgressBar, cx, inputClass } from "@/components/ui";
import { MODULES, TOTAL_DURATION_MIN, ALL_LESSONS } from "@/content";
import { useProgress } from "@/lib/progress";
import { formatDuration, moduleProgress } from "@/lib/selectors";
import { SKILL_MAP } from "@/lib/skills";
import { normalize } from "@/content/glossary";

/** Regroupement pédagogique des 25 niveaux en cinq cycles lisibles. */
const CYCLES = [
  {
    id: "socle",
    title: "Cycle 1 — Le socle",
    subtitle: "Comprendre le métier, le vocabulaire, le droit et le marché",
    levels: [0, 1, 2, 3],
  },
  {
    id: "conquete",
    title: "Cycle 2 — Conquérir des mandats",
    subtitle: "Estimer, prospecter, découvrir le client, prendre le mandat",
    levels: [4, 5, 6, 7],
  },
  {
    id: "vendre",
    title: "Cycle 3 — Vendre",
    subtitle: "Commercialiser, mettre en valeur, faire visiter, qualifier, négocier",
    levels: [8, 9, 10, 11, 12, 13],
  },
  {
    id: "securiser",
    title: "Cycle 4 — Sécuriser la transaction",
    subtitle: "Financement, notaire, bâtiment, urbanisme, copropriété, fiscalité",
    levels: [14, 15, 16, 17, 18, 19],
  },
  {
    id: "durer",
    title: "Cycle 5 — Construire une activité",
    subtitle: "Psychologie, visibilité, organisation, portefeuille, IA, excellence",
    levels: [20, 21, 22, 23, 24, 25],
  },
];

export function CatalogView() {
  const { state, hydrated } = useProgress();
  const [query, setQuery] = useState("");

  const q = normalize(query);
  const visible = MODULES.filter((m) => {
    if (!q) return true;
    const hay = normalize(
      `${m.title} ${m.subtitle} ${m.description} ${m.lessons.map((l) => l.title).join(" ")}`,
    );
    return q.split(" ").every((tok) => hay.includes(tok));
  });

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Parcours"
        title="Les cours"
        description={
          <>
            {MODULES.length} modules, {ALL_LESSONS.length} leçons, {formatDuration(TOTAL_DURATION_MIN)}{" "}
            de contenu. Chaque leçon suit la même structure : notion expliquée simplement, exemple
            immobilier réel, erreurs fréquentes, cas pratique, puis quiz de validation.
          </>
        }
      />

      <div className="mb-8">
        <label htmlFor="cours-search" className="sr-only">
          Rechercher un module ou une leçon
        </label>
        <input
          id="cours-search"
          className={inputClass}
          placeholder="Rechercher un module, une leçon, un sujet…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {CYCLES.map((cycle) => {
        const mods = visible.filter((m) => cycle.levels.includes(m.level));
        if (mods.length === 0) return null;
        return (
          <section key={cycle.id} className="mb-12">
            <div className="mb-4">
              <h2 className="font-display text-xl font-semibold">{cycle.title}</h2>
              <p className="mt-1 text-sm text-ink-soft">{cycle.subtitle}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {mods.map((m) => {
                const p = hydrated
                  ? moduleProgress(state, m)
                  : { done: 0, total: m.lessons.length, percent: 0, completed: false, started: false };
                return (
                  <li key={m.id}>
                    <Link href={`/cours/${m.id}`} className="block h-full">
                      <Card
                        className={cx(
                          "flex h-full flex-col transition-shadow hover:shadow-md",
                          p.completed && "border-success/40",
                        )}
                      >
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <span aria-hidden className="text-xl">
                            {m.icon}
                          </span>
                          {p.completed ? (
                            <Badge tone="success">Terminé</Badge>
                          ) : (
                            <Badge tone="neutral">Niveau {m.level}</Badge>
                          )}
                        </div>
                        <h3 className="font-display text-base font-semibold leading-snug">
                          {m.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-mute">{m.subtitle}</p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {m.skills.slice(0, 3).map((s) => (
                            <Badge key={s} tone="gold">
                              {SKILL_MAP[s]?.short ?? s}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-auto pt-5">
                          <ProgressBar
                            value={p.percent}
                            label={`${p.done}/${p.total} leçons`}
                            size="sm"
                            tone={p.completed ? "success" : "brand"}
                          />
                          <p className="mt-2 text-[11px] text-ink-mute">
                            {formatDuration(m.lessons.reduce((s, l) => s + l.duration, 0))} ·{" "}
                            {m.lessons.reduce((s, l) => s + l.quiz.length, 0)} questions
                          </p>
                        </div>
                      </Card>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {visible.length === 0 ? (
        <Card>
          <p className="text-sm text-ink-soft">
            Aucun module ne correspond à « {query} ». Essayez un autre mot, ou consultez le{" "}
            <Link href="/glossaire" className="underline underline-offset-2">
              glossaire
            </Link>
            .
          </p>
        </Card>
      ) : null}
    </div>
  );
}
