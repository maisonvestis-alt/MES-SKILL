"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  ButtonLink,
  Callout,
  Card,
  Divider,
  LegalNotice,
  cx,
  inputClass,
} from "@/components/ui";
import { BlockRenderer } from "@/components/lesson/Blocks";
import { QuizRunner } from "@/components/lesson/QuizRunner";
import { LESSON_MAP, MODULE_MAP, nextLessonAfter, previousLessonBefore } from "@/content";
import { useProgress } from "@/lib/progress";
import { DIFFICULTY_LABEL, formatDuration } from "@/lib/selectors";
import { SKILL_MAP } from "@/lib/skills";
import type { CaseStudy } from "@/lib/types";

function CaseStudyCard({ lessonId, data }: { lessonId: string; data: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const { state, setNote } = useProgress();
  const noteId = `case-${lessonId}`;

  return (
    <Card className="border-gold-200">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
        Cas pratique
      </p>
      <h3 className="font-display text-lg font-semibold">{data.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{data.context}</p>

      <p className="mt-5 text-sm font-semibold">Ce que vous devez produire</p>
      <ol className="mt-2 space-y-2">
        {data.tasks.map((t, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
            <span
              aria-hidden
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400 text-[11px] font-semibold text-brand-950"
            >
              {i + 1}
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ol>

      <div className="mt-5">
        <label htmlFor={noteId} className="mb-1.5 block text-sm font-medium">
          Votre réponse
        </label>
        <textarea
          id={noteId}
          rows={5}
          className={inputClass}
          placeholder="Rédigez votre réponse avant d'afficher la correction. Écrire réellement change tout : c'est la différence entre reconnaître et savoir faire."
          value={state.notes[noteId] ?? ""}
          onChange={(e) => setNote(noteId, e.target.value)}
        />
        <p className="mt-1 text-xs text-ink-mute">Votre texte est enregistré sur cet appareil.</p>
      </div>

      <Button variant="secondary" className="mt-4" onClick={() => setOpen((o) => !o)}>
        {open ? "Masquer la correction" : "Afficher la correction"}
      </Button>

      {open ? (
        <div className="mt-4 rounded-xl border border-success/30 bg-success-soft p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-success">
            Correction commentée
          </p>
          <ul className="space-y-2">
            {data.correction.map((c, i) => (
              <li key={i} className="text-sm leading-relaxed text-ink-soft">
                {c}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Card>
  );
}

export function LessonView({ lessonId }: { lessonId: string }) {
  const lesson = LESSON_MAP[lessonId];
  const { state, visitLesson, completeLesson, uncompleteLesson, dispatch } = useProgress();
  const visitedRef = useRef(false);
  const [quizOpen, setQuizOpen] = useState(false);

  useEffect(() => {
    if (visitedRef.current) return;
    visitedRef.current = true;
    visitLesson(lessonId);
  }, [lessonId, visitLesson]);

  if (!lesson) return null;

  const mod = MODULE_MAP[lesson.moduleId];
  const done = state.lessons[lesson.id]?.completed;
  const next = nextLessonAfter(lesson.id);
  const prev = previousLessonBefore(lesson.id);
  const noteId = `note-${lesson.id}`;

  return (
    <article className="animate-rise">
      <nav className="mb-4 text-xs text-ink-mute" aria-label="Fil d'Ariane">
        <Link href="/cours" className="hover:underline">
          Cours
        </Link>
        <span aria-hidden> / </span>
        <Link href={`/cours/${mod?.id}`} className="hover:underline">
          {mod?.title}
        </Link>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          <Badge tone="brand">Niveau {mod?.level}</Badge>
          <Badge>{formatDuration(lesson.duration)}</Badge>
          <Badge tone="neutral">{DIFFICULTY_LABEL[lesson.difficulty]}</Badge>
          {lesson.skills.map((s) => (
            <Badge key={s} tone="gold">
              {SKILL_MAP[s]?.short ?? s}
            </Badge>
          ))}
          {done ? <Badge tone="success">✓ Terminée</Badge> : null}
        </div>
        <h1 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          {lesson.title}
        </h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{lesson.summary}</p>
        <div className="ui-rule mt-5" />
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="min-w-0">
          <Card className="mb-8 bg-surface-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
              Objectifs de la leçon
            </p>
            <ul className="space-y-2">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>

          {lesson.legalSensitive ? (
            <div className="mb-8">
              <LegalNotice lastVerified={lesson.lastVerified} />
            </div>
          ) : null}

          <BlockRenderer blocks={lesson.blocks} />

          <Divider label="Synthèse" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-brand-200 bg-brand-50 dark:bg-surface-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-700">
                À retenir
              </p>
              <ul className="space-y-2.5">
                {lesson.keyPoints.map((k, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                    <span aria-hidden className="mt-0.5 shrink-0 text-gold-500">
                      ✦
                    </span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-danger/25 bg-danger-soft">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-danger">
                Erreurs à éviter
              </p>
              <ul className="space-y-2.5">
                {lesson.mistakes.map((k, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                    <span aria-hidden className="mt-0.5 shrink-0 text-danger">
                      ✗
                    </span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {lesson.caseStudy ? (
            <div className="mt-6">
              <CaseStudyCard lessonId={lesson.id} data={lesson.caseStudy} />
            </div>
          ) : null}

          {lesson.exercise ? (
            <Card className="mt-6">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                Exercice
              </p>
              <h3 className="font-display text-lg font-semibold">{lesson.exercise.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {lesson.exercise.instructions}
              </p>
              <div className="mt-4 space-y-4">
                {lesson.exercise.fields.map((f) => {
                  const id = `ex-${lesson.id}-${f.id}`;
                  const value = state.exercises[lesson.id]?.[f.id] ?? "";
                  return (
                    <div key={f.id}>
                      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
                        {f.label}
                      </label>
                      {f.multiline ? (
                        <textarea
                          id={id}
                          rows={4}
                          className={inputClass}
                          placeholder={f.placeholder}
                          value={value}
                          onChange={(e) =>
                            dispatch({
                              type: "exercise",
                              exerciseId: lesson.id,
                              fieldId: f.id,
                              value: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <input
                          id={id}
                          className={inputClass}
                          placeholder={f.placeholder}
                          value={value}
                          onChange={(e) =>
                            dispatch({
                              type: "exercise",
                              exerciseId: lesson.id,
                              fieldId: f.id,
                              value: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 rounded-lg border border-line bg-surface-2 p-4">
                <p className="mb-2 text-sm font-semibold">Grille d'auto-correction</p>
                <ul className="space-y-2">
                  {lesson.exercise.checklist.map((c, i) => {
                    const key = `check-${i}`;
                    const checked = state.checklists[`exercise-${lesson.id}`]?.[key] ?? false;
                    return (
                      <li key={i}>
                        <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <input
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--gold-500)]"
                            checked={checked}
                            onChange={(e) =>
                              dispatch({
                                type: "checklist",
                                listId: `exercise-${lesson.id}`,
                                itemId: key,
                                value: e.target.checked,
                              })
                            }
                          />
                          <span>{c}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {lesson.exercise.modelAnswer ? (
                <details className="mt-4 rounded-lg border border-line bg-surface-2 p-4">
                  <summary className="cursor-pointer text-sm font-medium">
                    Voir une réponse de référence
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {lesson.exercise.modelAnswer}
                  </p>
                </details>
              ) : null}
            </Card>
          ) : null}

          {/* Notes personnelles */}
          <Card className="mt-6">
            <p className="mb-2 text-sm font-semibold">Vos notes sur cette leçon</p>
            <textarea
              rows={3}
              className={inputClass}
              placeholder="Ce que vous voulez retenir, une question à poser à votre notaire, un mot à retravailler…"
              value={state.notes[noteId] ?? ""}
              onChange={(e) =>
                dispatch({ type: "note", noteId, value: e.target.value })
              }
              aria-label="Notes personnelles"
            />
          </Card>

          <Divider label="Validation" />

          {quizOpen ? (
            <QuizRunner questions={lesson.quiz} title={`Quiz — ${lesson.title}`} />
          ) : (
            <Card className="text-center">
              <p className="font-display text-lg font-semibold">
                Vérifions ce qui est réellement acquis
              </p>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
                {lesson.quiz.length} questions. Les notions manquées sont automatiquement ajoutées à
                votre paquet de révision espacée et vous seront reproposées dans les jours qui
                suivent.
              </p>
              <Button variant="gold" size="lg" className="mt-5" onClick={() => setQuizOpen(true)}>
                Lancer le quiz
              </Button>
            </Card>
          )}

          {/* Sources */}
          <section className="mt-8">
            <h2 className="mb-3 font-display text-lg font-semibold">Sources et vérification</h2>
            <Callout variant="info" title="Comment utiliser ces sources">
              Un conseiller ne cite jamais une règle de mémoire devant un client. Ces liens
              institutionnels permettent de vérifier une information avant de l'écrire ou de
              l'annoncer.
            </Callout>
            <ul className="mt-3 space-y-2">
              {lesson.sources.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 rounded-lg border border-line bg-surface p-3 text-sm transition-colors hover:border-gold-300"
                  >
                    <span aria-hidden className="mt-0.5 text-gold-500">
                      ↗
                    </span>
                    <span>
                      <span className="block font-medium group-hover:text-gold-600">{s.label}</span>
                      {s.note ? (
                        <span className="block text-xs text-ink-mute">{s.note}</span>
                      ) : null}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            {lesson.lastVerified ? (
              <p className="mt-3 text-xs text-ink-mute">
                Contenu vérifié pour la dernière fois en {lesson.lastVerified}. En cas de doute sur
                une règle, la source officielle prime toujours sur cette leçon.
              </p>
            ) : null}
          </section>

          {/* Navigation */}
          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            {prev ? (
              <Link
                href={`/cours/${prev.moduleId}/${prev.id}`}
                className="text-sm text-ink-soft hover:underline"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <ButtonLink href={`/cours/${next.moduleId}/${next.id}`} variant="secondary">
                Leçon suivante : {next.title} →
              </ButtonLink>
            ) : null}
          </div>
        </div>

        {/* Colonne latérale */}
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <Card className="lg:p-4">
            <p className="mb-3 text-sm font-semibold">Cette leçon</p>
            <Button
              variant={done ? "secondary" : "gold"}
              className="w-full"
              onClick={() => (done ? uncompleteLesson(lesson.id) : completeLesson(lesson.id))}
            >
              {done ? "✓ Terminée — annuler" : "Marquer comme terminée"}
            </Button>
            <p className="mt-3 text-xs leading-relaxed text-ink-mute">
              Marquez la leçon terminée seulement lorsque vous sauriez l'expliquer à quelqu'un
              d'autre. C'est le seul critère qui compte.
            </p>

            <div className="mt-4 border-t border-line pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-mute">
                Dans ce module
              </p>
              <ul className="space-y-1">
                {mod?.lessons.map((l) => (
                  <li key={l.id}>
                    <Link
                      href={`/cours/${mod.id}/${l.id}`}
                      className={cx(
                        "block rounded px-2 py-1.5 text-xs leading-snug transition-colors",
                        l.id === lesson.id
                          ? "bg-surface-3 font-medium text-ink"
                          : "text-ink-soft hover:bg-surface-2",
                      )}
                    >
                      <span aria-hidden className="mr-1.5 text-gold-500">
                        {state.lessons[l.id]?.completed ? "✓" : "·"}
                      </span>
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </aside>
      </div>
    </article>
  );
}
