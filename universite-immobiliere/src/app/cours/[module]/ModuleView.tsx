"use client";

import Link from "next/link";
import { Badge, ButtonLink, Card, PageHeader, ProgressBar, cx } from "@/components/ui";
import { MODULE_MAP, MODULES } from "@/content";
import { useProgress } from "@/lib/progress";
import { DIFFICULTY_LABEL, formatDuration, moduleProgress } from "@/lib/selectors";
import { SKILL_MAP } from "@/lib/skills";

export function ModuleView({ moduleId }: { moduleId: string }) {
  const { state, hydrated } = useProgress();
  const m = MODULE_MAP[moduleId];
  if (!m) return null;

  const p = hydrated
    ? moduleProgress(state, m)
    : { done: 0, total: m.lessons.length, percent: 0, completed: false, started: false };
  const idx = MODULES.findIndex((x) => x.id === m.id);
  const prev = idx > 0 ? MODULES[idx - 1] : null;
  const next = idx >= 0 && idx < MODULES.length - 1 ? MODULES[idx + 1] : null;
  const firstUndone = m.lessons.find((l) => !state.lessons[l.id]?.completed) ?? m.lessons[0];

  return (
    <div className="animate-rise">
      <nav className="mb-4 text-xs text-ink-mute" aria-label="Fil d'Ariane">
        <Link href="/cours" className="hover:underline">
          Cours
        </Link>
        <span aria-hidden> / </span>
        <span className="text-ink-soft">{m.title}</span>
      </nav>

      <PageHeader
        eyebrow={`Niveau ${m.level}`}
        title={m.title}
        description={m.description}
        actions={
          firstUndone ? (
            <ButtonLink href={`/cours/${m.id}/${firstUndone.id}`} variant="gold">
              {p.started ? "Reprendre" : "Commencer le module"}
            </ButtonLink>
          ) : null
        }
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <ol className="space-y-3">
            {m.lessons.map((l, i) => {
              const done = state.lessons[l.id]?.completed;
              const visited = Boolean(state.lessons[l.id]?.visits);
              return (
                <li key={l.id}>
                  <Link href={`/cours/${m.id}/${l.id}`} className="block">
                    <Card
                      className={cx(
                        "transition-shadow hover:shadow-md",
                        done && "border-success/40 bg-success-soft/40",
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          aria-hidden
                          className={cx(
                            "grid h-8 w-8 shrink-0 place-items-center rounded-full border text-sm font-semibold",
                            done
                              ? "border-success bg-success text-white"
                              : visited
                                ? "border-gold-400 text-gold-600"
                                : "border-line-strong text-ink-mute",
                          )}
                        >
                          {done ? "✓" : i + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h2 className="font-medium leading-snug">{l.title}</h2>
                          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{l.summary}</p>
                          <div className="mt-3 flex flex-wrap items-center gap-1.5">
                            <Badge>{formatDuration(l.duration)}</Badge>
                            <Badge tone="neutral">{DIFFICULTY_LABEL[l.difficulty]}</Badge>
                            <Badge tone="brand">{l.quiz.length} questions</Badge>
                            {l.legalSensitive ? <Badge tone="warning">Réglementaire</Badge> : null}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
            {prev ? (
              <Link href={`/cours/${prev.id}`} className="text-sm text-ink-soft hover:underline">
                ← Niveau {prev.level} · {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/cours/${next.id}`} className="text-sm text-ink-soft hover:underline">
                Niveau {next.level} · {next.title} →
              </Link>
            ) : null}
          </div>
        </div>

        <aside className="space-y-5">
          <Card>
            <p className="mb-3 text-sm font-semibold">Votre avancement</p>
            <ProgressBar
              value={p.percent}
              label={`${p.done} / ${p.total} leçons`}
              tone={p.completed ? "success" : "brand"}
            />
            <p className="mt-3 text-xs text-ink-mute">
              {formatDuration(m.lessons.reduce((s, l) => s + l.duration, 0))} de contenu ·{" "}
              {m.lessons.reduce((s, l) => s + l.quiz.length, 0)} questions de validation
            </p>
          </Card>

          <Card>
            <p className="mb-3 text-sm font-semibold">À la fin de ce module, vous saurez</p>
            <ul className="space-y-2">
              {m.outcomes.map((o, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <p className="mb-3 text-sm font-semibold">Compétences travaillées</p>
            <div className="flex flex-wrap gap-1.5">
              {m.skills.map((s) => (
                <Badge key={s} tone="gold">
                  {SKILL_MAP[s]?.icon} {SKILL_MAP[s]?.label ?? s}
                </Badge>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
