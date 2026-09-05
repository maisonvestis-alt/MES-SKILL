"use client";

import Link from "next/link";
import { Badge, Card, PageHeader, ProgressBar, Ring, Stat, cx } from "@/components/ui";
import { LEVEL_BANDS, bandForXp, nextBand, useProgress } from "@/lib/progress";
import {
  allModuleProgress,
  allSkillMastery,
  dueCards,
  globalProgress,
} from "@/lib/selectors";
import { SKILLS, SKILL_MAP } from "@/lib/skills";
import { BADGES, earnedBadges } from "@/lib/badges";
import { SCENARIOS } from "@/content/scenarios";
import { EXAMS } from "@/content/exams";
import { ALL_QUESTIONS } from "@/content";

const FAMILIES = ["Métier", "Commercial", "Technique", "Développement"] as const;

export function ProgressionView() {
  const { state, hydrated } = useProgress();

  if (!hydrated) {
    return <div className="h-64 animate-pulse rounded-xl bg-surface-3" />;
  }

  const progress = globalProgress(state);
  const band = bandForXp(state.xp);
  const upcoming = nextBand(state.xp);
  const mastery = allSkillMastery(state);
  const modules = allModuleProgress(state);
  const earned = earnedBadges(state);
  const earnedIds = new Set(earned.map((b) => b.id));
  const due = dueCards(state);

  const answered = Object.keys(state.answers).length;
  const firstTry = Object.values(state.answers).filter((a) => a.firstTryCorrect).length;
  const accuracy = answered === 0 ? 0 : Math.round((firstTry / answered) * 100);
  const scenariosDone = Object.keys(state.scenarios).length;
  const examsPassed = Object.values(state.exams).filter((e) => e.passed).length;

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Suivi"
        title="Votre progression"
        description="La maîtrise d'une compétence combine ce que vous avez travaillé et ce à quoi vous savez répondre. Lire une leçon fait monter la barre ; répondre juste la fait monter davantage."
      />

      {/* Niveau */}
      <Card className="mb-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Ring value={progress.percent} size={112} label="parcours" />
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-2 font-display text-xl font-semibold">
              <span aria-hidden>{band.emoji}</span> {band.label}
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              {state.xp} XP · {progress.done} leçons sur {progress.total}
            </p>
            {upcoming ? (
              <div className="mt-4 max-w-md">
                <ProgressBar
                  value={((state.xp - band.min) / (upcoming.min - band.min)) * 100}
                  label={`Vers « ${upcoming.label} »`}
                  tone="gold"
                />
                <p className="mt-1 text-xs text-ink-mute">
                  Encore {upcoming.min - state.xp} XP
                </p>
              </div>
            ) : (
              <p className="mt-3 text-sm text-ink-soft">Niveau maximal du parcours atteint.</p>
            )}
          </div>
        </div>

        <ol className="mt-6 flex flex-wrap gap-2">
          {LEVEL_BANDS.map((b) => (
            <li
              key={b.id}
              className={cx(
                "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs",
                state.xp >= b.min
                  ? "border-gold-300 bg-gold-50 font-medium text-gold-700"
                  : "border-line text-ink-mute",
              )}
            >
              <span aria-hidden>{b.emoji}</span>
              {b.label}
              <span className="tabular-nums opacity-60">{b.min} XP</span>
            </li>
          ))}
        </ol>
      </Card>

      {/* Statistiques */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat icon="🎯" label="Justesse" value={`${accuracy}%`} hint={`${answered} questions vues sur ${ALL_QUESTIONS.length}`} />
        <Stat icon="🎭" label="Simulations" value={`${scenariosDone}/${SCENARIOS.length}`} hint="scénarios travaillés" />
        <Stat icon="📝" label="Examens réussis" value={`${examsPassed}/${EXAMS.length}`} />
        <Stat icon="↻" label="À réviser" value={due.length} hint={`${Object.keys(state.srs).length} cartes au total`} />
      </div>

      {/* Compétences par famille */}
      <section className="mb-8">
        <h2 className="mb-4 font-display text-lg font-semibold">Compétences</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {FAMILIES.map((family) => {
            const ids = SKILLS.filter((s) => s.family === family).map((s) => s.id);
            const items = mastery.filter((m) => ids.includes(m.skill) && m.lessonsTotal > 0);
            if (items.length === 0) return null;
            return (
              <Card key={family}>
                <p className="mb-4 text-sm font-semibold">{family}</p>
                <ul className="space-y-4">
                  {items
                    .sort((a, b) => b.score - a.score)
                    .map((m) => (
                      <li key={m.skill}>
                        <ProgressBar
                          value={m.score}
                          label={`${SKILL_MAP[m.skill]?.icon ?? ""} ${SKILL_MAP[m.skill]?.label}`}
                          tone={m.score >= 70 ? "success" : m.score >= 40 ? "brand" : "gold"}
                          size="sm"
                        />
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 text-[11px] text-ink-mute">
                          <span>
                            {m.lessonsDone}/{m.lessonsTotal} leçons
                          </span>
                          <span>
                            {m.questionsAnswered}/{m.questionsTotal} questions
                          </span>
                          {m.accuracy !== null ? (
                            <span>{Math.round(m.accuracy)}% de justesse</span>
                          ) : (
                            <span className="italic">jamais évaluée</span>
                          )}
                          <Link
                            href={`/quiz?competence=${m.skill}`}
                            className="underline underline-offset-2"
                          >
                            s'entraîner
                          </Link>
                        </p>
                      </li>
                    ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Badges */}
      <section className="mb-8">
        <h2 className="mb-4 font-display text-lg font-semibold">
          Badges — {earned.length} sur {BADGES.length}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((b) => {
            const has = earnedIds.has(b.id);
            const p = b.progress?.(state);
            return (
              <li key={b.id}>
                <Card
                  className={cx(
                    "h-full p-4",
                    has ? "border-gold-300 bg-gold-50" : "opacity-70",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span aria-hidden className={cx("text-2xl", !has && "grayscale")}>
                      {b.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{b.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{b.description}</p>
                      {!has && p ? (
                        <p className="mt-1.5 text-[11px] tabular-nums text-ink-mute">
                          {p.current} / {p.target}
                        </p>
                      ) : null}
                      {has ? (
                        <Badge tone="gold" className="mt-2">
                          Obtenu
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Modules */}
      <section>
        <h2 className="mb-4 font-display text-lg font-semibold">Avancement par module</h2>
        <Card>
          <ul className="divide-y divide-line">
            {modules.map((m) => (
              <li key={m.module.id} className="py-3 first:pt-0 last:pb-0">
                <Link
                  href={`/cours/${m.module.id}`}
                  className="flex items-center gap-4 rounded-lg px-1 py-1 transition-colors hover:bg-surface-2"
                >
                  <span aria-hidden className="text-lg">
                    {m.module.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">
                      Niveau {m.module.level} — {m.module.title}
                    </span>
                    <span className="mt-1 block">
                      <ProgressBar
                        value={m.percent}
                        showValue={false}
                        size="sm"
                        tone={m.completed ? "success" : "brand"}
                      />
                    </span>
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-ink-mute">
                    {m.done}/{m.total}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
