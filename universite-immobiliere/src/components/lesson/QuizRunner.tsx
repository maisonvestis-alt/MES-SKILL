"use client";

import { useMemo, useState } from "react";
import type { QuizQuestion } from "@/lib/types";
import { Badge, Button, Card, ProgressBar, cx } from "@/components/ui";
import { useProgress } from "@/lib/progress";
import { SKILL_MAP } from "@/lib/skills";

export interface QuizResult {
  total: number;
  correct: number;
  score: number;
  wrongIds: string[];
}

function optionsOf(q: QuizQuestion): string[] {
  return q.type === "vraifaux" ? ["Vrai", "Faux"] : q.options ?? [];
}

/**
 * Moteur de quiz commun aux leçons, à l'entraînement libre et aux examens.
 *
 * - mode « immediate » : correction après chaque réponse (apprentissage)
 * - mode « exam »      : aucune correction avant la fin (évaluation)
 */
export function QuizRunner({
  questions,
  mode = "immediate",
  title,
  onFinish,
  record = true,
}: {
  questions: QuizQuestion[];
  mode?: "immediate" | "exam";
  title?: string;
  onFinish?: (result: QuizResult) => void;
  record?: boolean;
}) {
  const { answer } = useProgress();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const q = questions[index];
  const opts = useMemo(() => (q ? optionsOf(q) : []), [q]);

  if (!q) {
    return (
      <Card>
        <p className="text-sm text-ink-soft">Aucune question disponible pour cette sélection.</p>
      </Card>
    );
  }

  const result: QuizResult = (() => {
    let correct = 0;
    const wrongIds: string[] = [];
    for (const question of questions) {
      const given = answers[question.id];
      if (given === question.answer) correct += 1;
      else if (given !== undefined) wrongIds.push(question.id);
    }
    return {
      total: questions.length,
      correct,
      score: questions.length === 0 ? 0 : Math.round((correct / questions.length) * 100),
      wrongIds,
    };
  })();

  function submit() {
    if (selected === null) return;
    const isCorrect = selected === q.answer;
    setAnswers((a) => ({ ...a, [q.id]: selected }));
    if (record) answer(q.id, isCorrect, q.skill);
    if (mode === "immediate") setChecked(true);
    else advance({ ...answers, [q.id]: selected });
  }

  function advance(current = answers) {
    if (index + 1 >= questions.length) {
      setDone(true);
      let correct = 0;
      const wrongIds: string[] = [];
      for (const question of questions) {
        if (current[question.id] === question.answer) correct += 1;
        else wrongIds.push(question.id);
      }
      onFinish?.({
        total: questions.length,
        correct,
        score: Math.round((correct / questions.length) * 100),
        wrongIds,
      });
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setChecked(false);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setAnswers({});
    setDone(false);
  }

  if (done) {
    const tone = result.score >= 80 ? "success" : result.score >= 60 ? "warning" : "danger";
    return (
      <Card>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">Résultat</p>
          <p className="mt-2 font-display text-4xl font-semibold tabular-nums">{result.score}%</p>
          <p className="mt-1 text-sm text-ink-soft">
            {result.correct} bonne{result.correct > 1 ? "s" : ""} réponse
            {result.correct > 1 ? "s" : ""} sur {result.total}
          </p>
          <div className="mt-4">
            <Badge tone={tone}>
              {result.score >= 80
                ? "Notion acquise"
                : result.score >= 60
                  ? "Presque : une relecture s'impose"
                  : "À retravailler sérieusement"}
            </Badge>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {questions.map((question) => {
            const given = answers[question.id];
            const ok = given === question.answer;
            const options = optionsOf(question);
            return (
              <div
                key={question.id}
                className={cx(
                  "rounded-lg border p-3 text-sm",
                  ok ? "border-success/30 bg-success-soft" : "border-danger/30 bg-danger-soft",
                )}
              >
                <p className="font-medium">
                  <span aria-hidden>{ok ? "✓ " : "✗ "}</span>
                  {question.question}
                </p>
                {!ok ? (
                  <p className="mt-1 text-ink-soft">
                    Votre réponse : <em>{options[given] ?? "—"}</em> · Bonne réponse :{" "}
                    <strong>{options[question.answer]}</strong>
                  </p>
                ) : null}
                <p className="mt-1.5 text-ink-soft">{question.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button variant="secondary" onClick={restart}>
            Recommencer
          </Button>
        </div>

        {result.wrongIds.length > 0 ? (
          <p className="mt-4 rounded-lg bg-surface-2 px-3 py-2 text-xs text-ink-soft">
            Les {result.wrongIds.length} notion{result.wrongIds.length > 1 ? "s" : ""} manquée
            {result.wrongIds.length > 1 ? "s" : ""} {result.wrongIds.length > 1 ? "ont" : "a"} été
            ajoutée{result.wrongIds.length > 1 ? "s" : ""} à votre paquet de révision.
          </p>
        ) : null}
      </Card>
    );
  }

  const isCorrect = selected === q.answer;

  return (
    <Card>
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs text-ink-mute">
          <span>{title ?? "Question"}</span>
          <span className="tabular-nums">
            {index + 1} / {questions.length}
          </span>
        </div>
        <ProgressBar value={(index / questions.length) * 100} showValue={false} size="sm" />
      </div>

      <fieldset>
        <legend className="mb-4 text-base font-medium leading-relaxed">{q.question}</legend>
        <div className="space-y-2">
          {opts.map((opt, i) => {
            const isSelected = selected === i;
            const revealCorrect = checked && i === q.answer;
            const revealWrong = checked && isSelected && i !== q.answer;
            return (
              <button
                key={i}
                type="button"
                disabled={checked}
                onClick={() => setSelected(i)}
                className={cx(
                  "flex w-full items-start gap-3 rounded-lg border px-3.5 py-3 text-left text-sm transition-colors",
                  revealCorrect
                    ? "border-success bg-success-soft"
                    : revealWrong
                      ? "border-danger bg-danger-soft"
                      : isSelected
                        ? "border-brand-400 bg-brand-50 dark:bg-surface-3"
                        : "border-line hover:border-line-strong hover:bg-surface-2",
                  checked && "cursor-default",
                )}
                aria-pressed={isSelected}
              >
                <span
                  aria-hidden
                  className={cx(
                    "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[11px] font-semibold",
                    revealCorrect
                      ? "border-success bg-success text-white"
                      : revealWrong
                        ? "border-danger bg-danger text-white"
                        : isSelected
                          ? "border-brand-500 bg-brand-500 text-white"
                          : "border-line-strong text-ink-mute",
                  )}
                >
                  {revealCorrect ? "✓" : revealWrong ? "✗" : String.fromCharCode(65 + i)}
                </span>
                <span className="leading-relaxed">{opt}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {checked ? (
        <div
          className={cx(
            "mt-4 rounded-lg border p-4 text-sm leading-relaxed",
            isCorrect ? "border-success/30 bg-success-soft" : "border-warning/30 bg-warning-soft",
          )}
        >
          <p className="mb-1 font-semibold">
            {isCorrect ? "Exact." : `Réponse attendue : ${opts[q.answer]}`}
          </p>
          <p className="text-ink-soft">{q.explanation}</p>
          {q.skill ? (
            <p className="mt-2 text-xs text-ink-mute">
              Compétence : {SKILL_MAP[q.skill]?.label ?? q.skill}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-5 flex justify-end gap-2">
        {checked ? (
          <Button onClick={() => advance()}>
            {index + 1 >= questions.length ? "Voir le résultat" : "Question suivante →"}
          </Button>
        ) : (
          <Button onClick={submit} disabled={selected === null}>
            Valider
          </Button>
        )}
      </div>
    </Card>
  );
}
