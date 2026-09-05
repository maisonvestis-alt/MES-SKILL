"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge, Button, ButtonLink, Callout, Card, PageHeader, ProgressBar, cx } from "@/components/ui";
import { EXAM_MAP } from "@/content/exams";
import { questionsForModules, MODULE_MAP, ALL_LESSONS } from "@/content";
import { sampleQuestions } from "@/lib/sampling";
import { useProgress } from "@/lib/progress";
import { SKILL_MAP } from "@/lib/skills";
import type { QuizQuestion } from "@/lib/types";

function optionsOf(q: QuizQuestion): string[] {
  return q.type === "vraifaux" ? ["Vrai", "Faux"] : q.options ?? [];
}

function lessonOf(questionId: string) {
  return ALL_LESSONS.find((l) => l.quiz.some((q) => q.id === questionId)) ?? null;
}

export function ExamRunner({ examId }: { examId: string }) {
  const exam = EXAM_MAP[examId];
  const { state, dispatch, answer } = useProgress();
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1_000_000));
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const questions = useMemo(() => {
    if (!exam) return [];
    const pool = questionsForModules(exam.moduleIds);
    return sampleQuestions(pool, Math.min(exam.questionCount, pool.length), seed);
  }, [exam, seed]);

  if (!exam) return null;

  function finish() {
    let correct = 0;
    for (const q of questions) {
      const given = answers[q.id];
      const ok = given === q.answer;
      if (ok) correct += 1;
      // Les réponses d'examen alimentent aussi la progression et la révision.
      answer(q.id, ok, q.skill);
    }
    const s = questions.length === 0 ? 0 : Math.round((correct / questions.length) * 100);
    setScore(s);
    setFinished(true);
    dispatch({ type: "exam", examId: exam.id, score: s, passScore: exam.passScore });
  }

  function restart() {
    setSeed(Math.floor(Math.random() * 1_000_000));
    setAnswers({});
    setIndex(0);
    setFinished(false);
    setStarted(false);
  }

  /* ------------------------------- Accueil ------------------------------ */
  if (!started) {
    const rec = state.exams[exam.id];
    return (
      <div className="animate-rise">
        <nav className="mb-4 text-xs text-ink-mute">
          <Link href="/examens" className="hover:underline">
            Examens
          </Link>
        </nav>
        <PageHeader eyebrow="Évaluation" title={exam.title} description={exam.description} />

        <Card className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <Badge>{questions.length} questions</Badge>
            <Badge>Seuil de réussite {exam.passScore}%</Badge>
            {exam.timeLimit ? <Badge>Durée conseillée {exam.timeLimit} min</Badge> : null}
          </div>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-ink-soft">
            Aucune correction n'est affichée avant la fin : c'est une évaluation, pas un
            entraînement. Vous pourrez revoir chaque question et son explication à l'issue. Le temps
            indiqué est conseillé, il n'est pas bloquant.
          </p>
          {rec ? (
            <p className="mt-4 text-xs text-ink-mute">
              {rec.attempts} tentative{rec.attempts > 1 ? "s" : ""} · meilleur score {rec.best}%
            </p>
          ) : null}
          <Button variant="gold" size="lg" className="mt-6" onClick={() => setStarted(true)}>
            Commencer l'examen
          </Button>
        </Card>

        {exam.final ? (
          <div className="mx-auto mt-6 max-w-2xl">
            <Callout variant="warning" title="Rappel important">
              Cette certification atteste d'une progression pédagogique au sein de cette
              plateforme. Elle n'est pas un diplôme d'État ni un titre professionnel reconnu, et ne
              dispense d'aucune obligation légale d'exercice.
            </Callout>
          </div>
        ) : null}
      </div>
    );
  }

  /* ------------------------------ Résultat ------------------------------ */
  if (finished) {
    const passed = score >= exam.passScore;
    const wrong = questions.filter((q) => answers[q.id] !== q.answer);
    const bySkill = new Map<string, { ok: number; total: number }>();
    for (const q of questions) {
      const cur = bySkill.get(q.skill) ?? { ok: 0, total: 0 };
      cur.total += 1;
      if (answers[q.id] === q.answer) cur.ok += 1;
      bySkill.set(q.skill, cur);
    }

    return (
      <div className="animate-rise">
        <PageHeader eyebrow="Résultat" title={exam.title} />

        <Card className={cx("text-center", passed ? "border-success/40" : "border-warning/40")}>
          <p className="font-display text-5xl font-semibold tabular-nums">{score}%</p>
          <p className="mt-2 text-sm text-ink-soft">
            {questions.filter((q) => answers[q.id] === q.answer).length} bonnes réponses sur{" "}
            {questions.length} · seuil {exam.passScore}%
          </p>
          <div className="mt-4">
            <Badge tone={passed ? "success" : "warning"}>
              {passed ? "Examen réussi" : "Non validé — retravaillez puis repassez"}
            </Badge>
          </div>

          {passed && exam.final ? (
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-gold-300 bg-gold-50 p-5">
              <p className="font-display text-lg font-semibold text-gold-700">
                Certification de progression pédagogique
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Université Immobilière — parcours « De zéro à conseiller immobilier expert »
              </p>
              <p className="mt-3 text-xs leading-relaxed text-ink-mute">
                Cette attestation valide votre progression au sein de cette plateforme. Elle n'est ni
                un diplôme d'État, ni un titre professionnel enregistré, ni une autorisation
                d'exercer. L'exercice de la profession relève de la loi Hoguet.
              </p>
            </div>
          ) : null}
        </Card>

        <Card className="mt-5">
          <p className="mb-4 text-sm font-semibold">Résultats par compétence</p>
          <ul className="space-y-3">
            {[...bySkill.entries()]
              .sort((a, b) => a[1].ok / a[1].total - b[1].ok / b[1].total)
              .map(([skill, v]) => (
                <li key={skill}>
                  <ProgressBar
                    value={(v.ok / v.total) * 100}
                    label={`${SKILL_MAP[skill as keyof typeof SKILL_MAP]?.label ?? skill} (${v.ok}/${v.total})`}
                    tone={v.ok / v.total >= 0.7 ? "success" : "gold"}
                    size="sm"
                  />
                </li>
              ))}
          </ul>
        </Card>

        {wrong.length > 0 ? (
          <Card className="mt-5">
            <p className="mb-4 text-sm font-semibold">
              À retravailler — {wrong.length} question{wrong.length > 1 ? "s" : ""}
            </p>
            <ul className="space-y-3">
              {wrong.map((q) => {
                const opts = optionsOf(q);
                const lesson = lessonOf(q.id);
                return (
                  <li key={q.id} className="rounded-lg border border-danger/25 bg-danger-soft p-3.5 text-sm">
                    <p className="font-medium">{q.question}</p>
                    <p className="mt-1 text-ink-soft">
                      Votre réponse : <em>{opts[answers[q.id]] ?? "non répondu"}</em> · Bonne réponse :{" "}
                      <strong>{opts[q.answer]}</strong>
                    </p>
                    <p className="mt-1.5 text-ink-soft">{q.explanation}</p>
                    {lesson ? (
                      <Link
                        href={`/cours/${lesson.moduleId}/${lesson.id}`}
                        className="mt-2 inline-block text-xs font-medium underline underline-offset-2"
                      >
                        Revoir : {lesson.title} ({MODULE_MAP[lesson.moduleId]?.title})
                      </Link>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 rounded-lg bg-surface-2 px-3 py-2 text-xs text-ink-soft">
              Ces notions ont été ajoutées à votre paquet de révision espacée.
            </p>
          </Card>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="secondary" onClick={restart}>
            Repasser l'examen
          </Button>
          <ButtonLink href="/revisions" variant="gold">
            Lancer une séance de révision
          </ButtonLink>
          <ButtonLink href="/examens" variant="ghost">
            Retour aux examens
          </ButtonLink>
        </div>
      </div>
    );
  }

  /* ------------------------------ En cours ------------------------------ */
  const q = questions[index];
  const opts = optionsOf(q);
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="animate-rise">
      <PageHeader eyebrow="Examen en cours" title={exam.title} />

      <Card>
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between text-xs text-ink-mute">
            <span>
              Question {index + 1} / {questions.length}
            </span>
            <span className="tabular-nums">{answeredCount} répondue{answeredCount > 1 ? "s" : ""}</span>
          </div>
          <ProgressBar value={(answeredCount / questions.length) * 100} showValue={false} size="sm" />
        </div>

        <fieldset>
          <legend className="mb-4 text-base font-medium leading-relaxed">{q.question}</legend>
          <div className="space-y-2">
            {opts.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                className={cx(
                  "flex w-full items-start gap-3 rounded-lg border px-3.5 py-3 text-left text-sm transition-colors",
                  answers[q.id] === i
                    ? "border-brand-400 bg-brand-50 dark:bg-surface-3"
                    : "border-line hover:border-line-strong hover:bg-surface-2",
                )}
                aria-pressed={answers[q.id] === i}
              >
                <span
                  aria-hidden
                  className={cx(
                    "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[11px] font-semibold",
                    answers[q.id] === i
                      ? "border-brand-500 bg-brand-500 text-white"
                      : "border-line-strong text-ink-mute",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="leading-relaxed">{opt}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Button variant="ghost" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
            ← Précédente
          </Button>
          {index + 1 < questions.length ? (
            <Button onClick={() => setIndex((i) => i + 1)}>Suivante →</Button>
          ) : (
            <Button
              variant="gold"
              onClick={finish}
              disabled={answeredCount < questions.length}
              title={
                answeredCount < questions.length
                  ? "Répondez à toutes les questions avant de terminer"
                  : undefined
              }
            >
              Terminer l'examen
            </Button>
          )}
        </div>

        {answeredCount < questions.length && index + 1 === questions.length ? (
          <p className="mt-3 text-xs text-warning">
            Il reste {questions.length - answeredCount} question(s) sans réponse.
          </p>
        ) : null}
      </Card>

      {/* Navigation rapide */}
      <Card className="mt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-mute">
          Navigation
        </p>
        <div className="flex flex-wrap gap-1.5">
          {questions.map((question, i) => (
            <button
              key={question.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Question ${i + 1}`}
              className={cx(
                "h-8 w-8 rounded-lg border text-xs font-medium tabular-nums transition-colors",
                i === index
                  ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200"
                  : answers[question.id] !== undefined
                    ? "border-success/40 bg-success-soft text-success"
                    : "border-line text-ink-mute hover:border-line-strong",
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
