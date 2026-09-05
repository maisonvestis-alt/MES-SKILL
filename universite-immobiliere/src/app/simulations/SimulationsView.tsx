"use client";

import { Badge, ButtonLink, Callout, Card, PageHeader, ProgressBar, cx } from "@/components/ui";
import { SCENARIOS } from "@/content/scenarios";
import { useProgress } from "@/lib/progress";
import { SKILL_MAP } from "@/lib/skills";
import { DIFFICULTY_LABEL } from "@/lib/selectors";

export function SimulationsView() {
  const { state, hydrated } = useProgress();
  const expertUnlocked = state.settings.expertMode || state.exams["exam-final"]?.passed === true;

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Mise en situation"
        title="Simulations client"
        description="Des situations réelles du métier, avec plusieurs réponses possibles. Chaque choix est analysé sur cinq axes : pertinence, empathie, argumentation, découverte du besoin et conclusion. Il n'y a pas toujours une seule bonne réponse."
      />

      <Callout variant="tip" title="Comment en tirer le maximum">
        Répondez à voix haute avant de cliquer, comme si le client était devant vous. La différence
        entre reconnaître une bonne réponse et savoir la formuler sur le moment est exactement ce
        que cet exercice travaille.
      </Callout>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {SCENARIOS.map((s) => {
          const rec = state.scenarios[s.id];
          const locked = s.expertOnly && !expertUnlocked;
          return (
            <li key={s.id}>
              <Card className={cx("flex h-full flex-col", locked && "opacity-60")}>
                <div className="mb-3 flex flex-wrap items-center gap-1.5">
                  <Badge tone={s.level === "avance" ? "danger" : s.level === "intermediaire" ? "warning" : "success"}>
                    {DIFFICULTY_LABEL[s.level]}
                  </Badge>
                  <Badge>{s.steps.length} étapes</Badge>
                  {s.expertOnly ? <Badge tone="danger">Mode expert</Badge> : null}
                  {hydrated && rec ? <Badge tone="brand">Meilleur : {rec.best}%</Badge> : null}
                </div>
                <h2 className="font-display text-base font-semibold leading-snug">{s.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.pitch}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.skills.map((sk) => (
                    <Badge key={sk} tone="gold">
                      {SKILL_MAP[sk]?.short ?? sk}
                    </Badge>
                  ))}
                </div>

                {hydrated && rec ? (
                  <div className="mt-4">
                    <ProgressBar value={rec.best} label={`${rec.attempts} tentative(s)`} size="sm" />
                  </div>
                ) : null}

                <div className="mt-auto pt-5">
                  {locked ? (
                    <Badge tone="neutral">
                      Débloqué par la certification interne ou le mode expert
                    </Badge>
                  ) : (
                    <ButtonLink href={`/simulations/${s.id}`} variant="secondary" className="w-full">
                      {rec ? "Refaire la simulation" : "Démarrer"}
                    </ButtonLink>
                  )}
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
