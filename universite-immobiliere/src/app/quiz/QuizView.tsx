"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Badge, Button, Card, PageHeader, cx } from "@/components/ui";
import { QuizRunner } from "@/components/lesson/QuizRunner";
import { ALL_QUESTIONS, MODULES } from "@/content";
import { SKILLS, SKILL_MAP } from "@/lib/skills";
import { sampleQuestions } from "@/lib/sampling";
import { useProgress } from "@/lib/progress";
import { skillMastery } from "@/lib/selectors";
import type { SkillId } from "@/lib/types";

const LENGTHS = [5, 10, 20];

export function QuizView() {
  const params = useSearchParams();
  const { state, hydrated } = useProgress();
  const [skill, setSkill] = useState<SkillId | "all">(
    (params.get("competence") as SkillId | null) ?? "all",
  );
  const [moduleId, setModuleId] = useState<string>(params.get("module") ?? "all");
  const [length, setLength] = useState(10);
  const [running, setRunning] = useState(false);
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1_000_000));

  const pool = useMemo(() => {
    let p = ALL_QUESTIONS;
    if (skill !== "all") p = p.filter((q) => q.skill === skill);
    if (moduleId !== "all") {
      const mod = MODULES.find((m) => m.id === moduleId);
      const ids = new Set(mod?.lessons.flatMap((l) => l.quiz.map((q) => q.id)) ?? []);
      p = p.filter((q) => ids.has(q.id));
    }
    return p;
  }, [skill, moduleId]);

  const questions = useMemo(
    () => sampleQuestions(pool, Math.min(length, pool.length), seed),
    [pool, length, seed],
  );

  const skillsWithQuestions = SKILLS.filter((s) =>
    ALL_QUESTIONS.some((q) => q.skill === s.id),
  );

  if (running) {
    return (
      <div className="animate-rise">
        <PageHeader
          eyebrow="Entraînement"
          title={skill === "all" ? "Quiz général" : `Quiz — ${SKILL_MAP[skill]?.label}`}
          description={`${questions.length} questions. Chaque erreur alimente automatiquement votre paquet de révision.`}
          actions={
            <Button variant="secondary" onClick={() => setRunning(false)}>
              Changer de sélection
            </Button>
          }
        />
        <QuizRunner questions={questions} title="Entraînement libre" />
      </div>
    );
  }

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Entraînement"
        title="Quiz"
        description="Choisissez une compétence, un module et une longueur. Les questions sont tirées de l'ensemble du parcours et réparties entre les sujets pour éviter les répétitions."
      />

      <Card className="mb-5">
        <p className="mb-3 text-sm font-semibold">Compétence</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSkill("all")}
            className={cx(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              skill === "all"
                ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                : "border-line hover:border-line-strong",
            )}
          >
            Toutes
          </button>
          {skillsWithQuestions.map((s) => {
            const m = hydrated ? skillMastery(state, s.id) : null;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSkill(s.id)}
                className={cx(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  skill === s.id
                    ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                    : "border-line hover:border-line-strong",
                )}
              >
                <span aria-hidden className="mr-1">
                  {s.icon}
                </span>
                {s.short}
                {m && m.score > 0 ? (
                  <span className="ml-1.5 opacity-70 tabular-nums">{m.score}%</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="mb-5">
        <p className="mb-3 text-sm font-semibold">Module</p>
        <select
          className="w-full rounded-lg border border-line-strong bg-surface px-3 py-2.5 text-sm"
          value={moduleId}
          onChange={(e) => setModuleId(e.target.value)}
          aria-label="Filtrer par module"
        >
          <option value="all">Tous les modules</option>
          {MODULES.map((m) => (
            <option key={m.id} value={m.id}>
              Niveau {m.level} — {m.title}
            </option>
          ))}
        </select>
      </Card>

      <Card className="mb-6">
        <p className="mb-3 text-sm font-semibold">Nombre de questions</p>
        <div className="flex flex-wrap gap-2">
          {LENGTHS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setLength(n)}
              className={cx(
                "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                length === n
                  ? "border-gold-400 bg-gold-50 text-gold-600"
                  : "border-line hover:border-line-strong",
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </Card>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="gold"
          size="lg"
          disabled={pool.length === 0}
          onClick={() => {
            setSeed(Math.floor(Math.random() * 1_000_000));
            setRunning(true);
          }}
        >
          Lancer le quiz
        </Button>
        <Badge tone={pool.length === 0 ? "danger" : "neutral"}>
          {pool.length} question{pool.length > 1 ? "s" : ""} disponible{pool.length > 1 ? "s" : ""}
        </Badge>
      </div>
    </div>
  );
}
