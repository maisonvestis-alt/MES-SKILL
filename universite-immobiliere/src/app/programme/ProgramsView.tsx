"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge, Callout, Card, PageHeader, ProgressBar, cx } from "@/components/ui";
import { PROGRAMS } from "@/content/programs";
import { LESSON_MAP } from "@/content";
import { useProgress } from "@/lib/progress";

export function ProgramsView() {
  const { state, hydrated, dispatch } = useProgress();
  const [openId, setOpenId] = useState(PROGRAMS[0].id);
  const program = PROGRAMS.find((p) => p.id === openId) ?? PROGRAMS[0];

  const lessonsDone = program.days.filter(
    (d) => d.lessonIds.length > 0 && d.lessonIds.every((id) => state.lessons[id]?.completed),
  ).length;
  const withLessons = program.days.filter((d) => d.lessonIds.length > 0).length;

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Parcours guidés"
        title="Programmes"
        description="Trois programmes qui combinent, chaque jour, une leçon et une action concrète hors écran. C'est la seconde partie qui transforme la connaissance en compétence."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {PROGRAMS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpenId(p.id)}
            className={cx(
              "rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
              openId === p.id
                ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                : "border-line hover:border-line-strong",
            )}
          >
            {p.title}
          </button>
        ))}
      </div>

      <Card className="mb-5">
        <h2 className="font-display text-xl font-semibold">{program.title}</h2>
        <p className="mt-1 text-sm font-medium text-gold-600">{program.subtitle}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{program.description}</p>
        {hydrated ? (
          <div className="mt-5 max-w-md">
            <ProgressBar
              value={withLessons === 0 ? 0 : (lessonsDone / withLessons) * 100}
              label={`${lessonsDone} / ${withLessons} journées dont les leçons sont terminées`}
              tone="gold"
            />
          </div>
        ) : null}
      </Card>

      <Callout variant="tip" title="Comment suivre un programme">
        Ne cherchez pas à rattraper les jours manqués : reprenez au jour suivant. La régularité
        compte davantage que l'exhaustivité, et les actions de terrain valent plus que les leçons.
      </Callout>

      <ol className="mt-6 space-y-3">
        {program.days.map((day) => {
          const lessons = day.lessonIds.map((id) => LESSON_MAP[id]).filter(Boolean);
          const done = lessons.length > 0 && lessons.every((l) => state.lessons[l.id]?.completed);
          const actionKey = `${program.id}-j${day.day}`;
          const actionsDone = state.checklists["programme"] ?? {};

          return (
            <li key={day.day}>
              <Card className={cx(done && "border-success/40")}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex shrink-0 items-center gap-3 sm:w-24 sm:flex-col sm:items-start">
                    <span
                      aria-hidden
                      className={cx(
                        "grid h-9 w-9 place-items-center rounded-lg text-sm font-semibold",
                        done
                          ? "bg-success text-white"
                          : "bg-surface-3 text-ink-soft",
                      )}
                    >
                      {day.day}
                    </span>
                    <span className="text-[11px] uppercase tracking-wide text-ink-mute">
                      Jour {day.day}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">{day.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-soft">{day.focus}</p>

                    {lessons.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {lessons.map((l) => (
                          <Link key={l.id} href={`/cours/${l.moduleId}/${l.id}`}>
                            <Badge tone={state.lessons[l.id]?.completed ? "success" : "brand"}>
                              {state.lessons[l.id]?.completed ? "✓ " : ""}
                              {l.title}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    ) : null}

                    <ul className="mt-3 space-y-1.5">
                      {day.actions.map((a, i) => {
                        const id = `${actionKey}-${i}`;
                        return (
                          <li key={i}>
                            <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                              <input
                                type="checkbox"
                                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--gold-500)]"
                                checked={Boolean(actionsDone[id])}
                                onChange={(e) =>
                                  dispatch({
                                    type: "checklist",
                                    listId: "programme",
                                    itemId: id,
                                    value: e.target.checked,
                                  })
                                }
                              />
                              <span className={cx(actionsDone[id] && "line-through opacity-60")}>
                                {a}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
