"use client";

import Link from "next/link";
import { Badge, ButtonLink, Callout, Card, PageHeader, cx } from "@/components/ui";
import { EXAMS } from "@/content/exams";
import { questionsForModules } from "@/content";
import { useProgress } from "@/lib/progress";

export function ExamsView() {
  const { state, hydrated } = useProgress();
  const finalPassed = state.exams["exam-final"]?.passed === true;

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Évaluation"
        title="Examens"
        description="Cinq examens de cycle, une certification interne finale, et une épreuve avancée débloquée ensuite. Les questions sont tirées aléatoirement du vivier de chaque cycle : deux tentatives ne sont jamais identiques."
      />

      <Callout variant="warning" title="Portée de la certification interne">
        La certification délivrée par cette plateforme est une <strong>certification de progression
        pédagogique — Université Immobilière</strong>. Elle atteste que vous avez suivi et validé ce
        parcours. Elle n'est ni un diplôme d'État, ni un titre professionnel enregistré, ni une
        condition d'accès à la profession. L'exercice du métier suppose une carte professionnelle ou
        une habilitation délivrée dans le cadre de la loi Hoguet.
      </Callout>

      <ul className="mt-6 space-y-4">
        {EXAMS.map((exam) => {
          const rec = state.exams[exam.id];
          const pool = questionsForModules(exam.moduleIds);
          const locked = exam.expertOnly && !finalPassed;
          return (
            <li key={exam.id}>
              <Card
                className={cx(
                  rec?.passed && "border-success/40",
                  locked && "opacity-60",
                  exam.final && "border-gold-300",
                )}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-1.5">
                      {exam.final ? <Badge tone="gold">Certification</Badge> : null}
                      {exam.expertOnly ? <Badge tone="danger">Mode expert</Badge> : null}
                      <Badge>{exam.questionCount} questions</Badge>
                      <Badge>Seuil {exam.passScore}%</Badge>
                      {exam.timeLimit ? <Badge>≈ {exam.timeLimit} min</Badge> : null}
                      {hydrated && rec?.passed ? <Badge tone="success">Réussi</Badge> : null}
                    </div>
                    <h2 className="font-display text-lg font-semibold">{exam.title}</h2>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {exam.description}
                    </p>
                    {hydrated && rec ? (
                      <p className="mt-3 text-xs text-ink-mute">
                        {rec.attempts} tentative{rec.attempts > 1 ? "s" : ""} · meilleur score{" "}
                        <strong className="text-ink">{rec.best}%</strong> · dernier score{" "}
                        {rec.lastScore}%
                      </p>
                    ) : null}
                    {pool.length < exam.questionCount ? (
                      <p className="mt-2 text-xs text-warning">
                        Vivier de {pool.length} questions : l'examen en proposera {pool.length}.
                      </p>
                    ) : null}
                  </div>
                  <div className="shrink-0">
                    {locked ? (
                      <Badge tone="neutral">Débloqué après la certification</Badge>
                    ) : (
                      <ButtonLink
                        href={`/examens/${exam.id}`}
                        variant={exam.final ? "gold" : "secondary"}
                      >
                        {rec ? "Repasser" : "Commencer"}
                      </ButtonLink>
                    )}
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-sm text-ink-soft">
        Besoin de vous entraîner sur un point précis avant un examen ? Utilisez les{" "}
        <Link href="/quiz" className="underline underline-offset-2">
          quiz par compétence
        </Link>{" "}
        ou une{" "}
        <Link href="/revisions" className="underline underline-offset-2">
          séance de révision
        </Link>
        .
      </p>
    </div>
  );
}
