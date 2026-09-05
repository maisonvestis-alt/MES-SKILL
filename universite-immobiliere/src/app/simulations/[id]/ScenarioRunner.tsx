"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge, Button, ButtonLink, Card, PageHeader, ProgressBar, cx } from "@/components/ui";
import { AXIS_LABELS, SCENARIO_MAP } from "@/content/scenarios";
import { useProgress } from "@/lib/progress";
import type { ScenarioChoice, ScoreAxis } from "@/lib/types";

interface HistoryEntry {
  stepId: string;
  choice: ScenarioChoice;
}

const AXES: ScoreAxis[] = ["pertinence", "empathie", "argumentation", "decouverte", "conclusion"];

export function ScenarioRunner({ scenarioId }: { scenarioId: string }) {
  const scenario = SCENARIO_MAP[scenarioId];
  const { dispatch } = useProgress();
  const [started, setStarted] = useState(false);
  const [stepId, setStepId] = useState(scenario?.steps[0]?.id ?? "");
  const [selected, setSelected] = useState<ScenarioChoice | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [finished, setFinished] = useState(false);

  const step = useMemo(
    () => scenario?.steps.find((s) => s.id === stepId) ?? null,
    [scenario, stepId],
  );

  const result = useMemo(() => {
    /* Chaque étape peut rapporter au maximum 3 points par axe abordé.
       On calcule un pourcentage relatif au meilleur choix possible. */
    const axes: Record<string, { got: number; max: number }> = {};
    let got = 0;
    let max = 0;

    for (const entry of history) {
      const stepDef = scenario?.steps.find((s) => s.id === entry.stepId);
      if (!stepDef) continue;
      const bestOfStep = Math.max(
        ...stepDef.choices.map((c) =>
          Object.values(c.scores).reduce((sum, v) => sum + (v ?? 0), 0),
        ),
      );
      const gotOfStep = Object.values(entry.choice.scores).reduce((s, v) => s + (v ?? 0), 0);
      got += gotOfStep;
      max += Math.max(bestOfStep, 1);

      for (const axis of AXES) {
        const v = entry.choice.scores[axis];
        const bestAxis = Math.max(...stepDef.choices.map((c) => c.scores[axis] ?? 0));
        if (bestAxis > 0) {
          axes[axis] = axes[axis] ?? { got: 0, max: 0 };
          axes[axis].got += Math.max(0, v ?? 0);
          axes[axis].max += bestAxis;
        }
      }
    }

    const score = max === 0 ? 0 : Math.max(0, Math.round((got / max) * 100));
    const axisScores: Record<string, number> = {};
    for (const [k, v] of Object.entries(axes)) {
      axisScores[k] = v.max === 0 ? 0 : Math.round((v.got / v.max) * 100);
    }
    return { score, axisScores };
  }, [history, scenario]);

  if (!scenario) return null;

  function choose(choice: ScenarioChoice) {
    setSelected(choice);
  }

  function advance() {
    if (!selected || !step) return;
    const nextHistory = [...history, { stepId: step.id, choice: selected }];
    setHistory(nextHistory);
    setSelected(null);
    if (selected.next) {
      setStepId(selected.next);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setHistory([]);
    setSelected(null);
    setStepId(scenario!.steps[0].id);
    setFinished(false);
    setStarted(false);
  }

  /* ------------------------------- Briefing ----------------------------- */
  if (!started) {
    return (
      <div className="animate-rise">
        <nav className="mb-4 text-xs text-ink-mute">
          <Link href="/simulations" className="hover:underline">
            Simulations
          </Link>
        </nav>
        <PageHeader eyebrow="Mise en situation" title={scenario.title} description={scenario.pitch} />

        <Card className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
            Briefing
          </p>
          <ul className="space-y-2.5">
            {scenario.briefing.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-lg bg-surface-2 px-3.5 py-2.5 text-xs leading-relaxed text-ink-soft">
            Formulez votre réponse à voix haute avant de choisir. C'est ce qui différencie une
            simulation utile d'un simple questionnaire.
          </p>
          <Button variant="gold" size="lg" className="mt-5 w-full" onClick={() => setStarted(true)}>
            Démarrer la simulation
          </Button>
        </Card>
      </div>
    );
  }

  /* ------------------------------- Débriefing --------------------------- */
  if (finished) {
    const tone = result.score >= 75 ? "success" : result.score >= 50 ? "warning" : "danger";
    return (
      <div className="animate-rise">
        <PageHeader eyebrow="Débriefing" title={scenario.title} />

        <Card className="text-center">
          <p className="font-display text-5xl font-semibold tabular-nums">{result.score}%</p>
          <p className="mt-2 text-sm text-ink-soft">
            Score global sur l'ensemble de la situation
          </p>
          <div className="mt-4">
            <Badge tone={tone}>
              {result.score >= 75
                ? "Conduite maîtrisée"
                : result.score >= 50
                  ? "Des réflexes à consolider"
                  : "À refaire après relecture des leçons"}
            </Badge>
          </div>
        </Card>

        <Card className="mt-5">
          <p className="mb-4 text-sm font-semibold">Vos cinq axes</p>
          <ul className="space-y-3">
            {AXES.filter((a) => result.axisScores[a] !== undefined).map((axis) => (
              <li key={axis}>
                <ProgressBar
                  value={result.axisScores[axis]}
                  label={AXIS_LABELS[axis]}
                  tone={result.axisScores[axis] >= 70 ? "success" : "gold"}
                  size="sm"
                />
              </li>
            ))}
          </ul>
        </Card>

        <Card className="mt-5">
          <p className="mb-4 text-sm font-semibold">Vos choix, étape par étape</p>
          <ol className="space-y-4">
            {history.map((entry, i) => {
              const stepDef = scenario.steps.find((s) => s.id === entry.stepId);
              const total = Object.values(entry.choice.scores).reduce((s, v) => s + (v ?? 0), 0);
              return (
                <li key={i} className="border-l-2 border-line pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-mute">
                    Étape {i + 1}
                  </p>
                  <p className="mt-1 text-sm font-medium">« {entry.choice.text} »</p>
                  <p
                    className={cx(
                      "mt-1.5 rounded-lg px-3 py-2 text-sm leading-relaxed",
                      total > 3
                        ? "bg-success-soft text-ink-soft"
                        : total >= 0
                          ? "bg-surface-2 text-ink-soft"
                          : "bg-danger-soft text-ink-soft",
                    )}
                  >
                    {entry.choice.feedback}
                  </p>
                  {stepDef ? (
                    <p className="mt-2 text-xs leading-relaxed text-ink-mute">
                      <strong className="text-gold-600">Ce qu'aurait fait un excellent conseiller :</strong>{" "}
                      {stepDef.bestPractice}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Card>

        <Card className="mt-5 border-brand-200 bg-brand-50 dark:bg-surface-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-700">
            À retenir de cette situation
          </p>
          <ul className="space-y-2.5">
            {scenario.debrief.map((d, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                <span aria-hidden className="mt-0.5 shrink-0 text-gold-500">
                  ✦
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            variant="gold"
            onClick={() => {
              dispatch({
                type: "scenario",
                scenarioId: scenario.id,
                score: result.score,
                axes: result.axisScores,
              });
              restart();
            }}
          >
            Enregistrer et refaire
          </Button>
          <ButtonLink href="/simulations" variant="secondary">
            Autres simulations
          </ButtonLink>
        </div>
        <p className="mt-3 text-xs text-ink-mute">
          Enregistrer conserve votre meilleur score et alimente vos badges. Refaire une simulation
          après relecture est la meilleure façon de progresser.
        </p>
      </div>
    );
  }

  /* -------------------------------- En cours ---------------------------- */
  if (!step) return null;
  const stepIndex = scenario.steps.findIndex((s) => s.id === step.id);

  return (
    <div className="animate-rise">
      <PageHeader eyebrow={`Étape ${stepIndex + 1} / ${scenario.steps.length}`} title={scenario.title} />

      <Card className="border-brand-200 bg-brand-50 dark:bg-surface-2">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-mute">
          {step.speaker}
        </p>
        <p className="text-[15px] leading-relaxed">{step.situation}</p>
      </Card>

      <Card className="mt-5">
        <p className="mb-4 font-medium">{step.prompt}</p>
        <div className="space-y-2.5">
          {step.choices.map((choice) => {
            const isSelected = selected?.id === choice.id;
            const total = Object.values(choice.scores).reduce((s, v) => s + (v ?? 0), 0);
            return (
              <div key={choice.id}>
                <button
                  type="button"
                  disabled={Boolean(selected)}
                  onClick={() => choose(choice)}
                  className={cx(
                    "w-full rounded-lg border px-4 py-3 text-left text-sm leading-relaxed transition-colors",
                    selected
                      ? isSelected
                        ? total > 3
                          ? "border-success bg-success-soft"
                          : total >= 0
                            ? "border-line-strong bg-surface-2"
                            : "border-danger bg-danger-soft"
                        : "border-line opacity-50"
                      : "border-line hover:border-line-strong hover:bg-surface-2",
                  )}
                >
                  {choice.text}
                </button>
                {isSelected ? (
                  <div className="mt-2 rounded-lg border border-line bg-surface-2 p-3.5 text-sm leading-relaxed text-ink-soft">
                    <p className="mb-2 flex flex-wrap gap-1.5">
                      {AXES.filter((a) => choice.scores[a] !== undefined).map((a) => (
                        <Badge
                          key={a}
                          tone={(choice.scores[a] ?? 0) > 0 ? "success" : (choice.scores[a] ?? 0) < 0 ? "danger" : "neutral"}
                        >
                          {AXIS_LABELS[a]} {(choice.scores[a] ?? 0) > 0 ? "+" : ""}
                          {choice.scores[a]}
                        </Badge>
                      ))}
                    </p>
                    {choice.feedback}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {selected ? (
          <div className="mt-5">
            <div className="rounded-lg border border-gold-200 bg-gold-50 p-3.5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                Ce qu'aurait fait un excellent conseiller
              </p>
              <p className="text-sm leading-relaxed text-ink-soft">{step.bestPractice}</p>
            </div>
            <Button variant="gold" className="mt-4 w-full sm:w-auto" onClick={advance}>
              {selected.next ? "Étape suivante →" : "Voir le débriefing"}
            </Button>
          </div>
        ) : null}
      </Card>

      <div className="mt-5">
        <ProgressBar
          value={(stepIndex / scenario.steps.length) * 100}
          label="Progression de la situation"
          size="sm"
          showValue={false}
        />
      </div>
    </div>
  );
}
