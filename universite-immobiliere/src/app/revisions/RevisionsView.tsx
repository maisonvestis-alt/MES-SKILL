"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge, Button, ButtonLink, Callout, Card, EmptyState, PageHeader, ProgressBar, cx } from "@/components/ui";
import { ALL_LESSONS, MODULE_MAP, QUESTION_MAP } from "@/content";
import { GLOSSARY_MAP } from "@/content/glossary";
import { useProgress, todayKey } from "@/lib/progress";
import { dueCards, missedQuestions, weakestSkills } from "@/lib/selectors";
import { SKILL_MAP } from "@/lib/skills";
import type { QuizQuestion } from "@/lib/types";

function optionsOf(q: QuizQuestion): string[] {
  return q.type === "vraifaux" ? ["Vrai", "Faux"] : q.options ?? [];
}

function lessonOf(questionId: string) {
  return ALL_LESSONS.find((l) => l.quiz.some((q) => q.id === questionId)) ?? null;
}

export function RevisionsView() {
  const { state, hydrated, review, dispatch } = useProgress();
  const [session, setSession] = useState<string[] | null>(null);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [doneCount, setDoneCount] = useState(0);

  const due = useMemo(() => (hydrated ? dueCards(state) : []), [state, hydrated]);
  const missed = useMemo(() => (hydrated ? missedQuestions(state) : []), [state, hydrated]);
  const weak = useMemo(() => (hydrated ? weakestSkills(state, 3) : []), [state, hydrated]);
  const upcoming = useMemo(() => {
    const today = todayKey();
    return Object.values(state.srs).filter((c) => c.due > today);
  }, [state.srs]);

  function start() {
    setSession(due.map((c) => c.id));
    setIndex(0);
    setRevealed(false);
    setSelected(null);
    setDoneCount(0);
  }

  function grade(g: 0 | 1 | 2 | 3) {
    const cardId = session?.[index];
    if (!cardId) return;
    review(cardId, g);
    setDoneCount((d) => d + 1);
    if (session && index + 1 < session.length) {
      setIndex((i) => i + 1);
      setRevealed(false);
      setSelected(null);
    } else {
      setSession(null);
    }
  }

  if (!hydrated) {
    return <div className="h-40 animate-pulse rounded-xl bg-surface-3" />;
  }

  /* ------------------------------ Séance ------------------------------- */
  if (session && session.length > 0) {
    const cardId = session[index];
    const card = state.srs[cardId];
    const question = QUESTION_MAP[cardId];
    const term = GLOSSARY_MAP[cardId];

    return (
      <div className="animate-rise">
        <PageHeader
          eyebrow="Séance de révision"
          title={`Carte ${index + 1} sur ${session.length}`}
          actions={
            <Button variant="ghost" onClick={() => setSession(null)}>
              Interrompre
            </Button>
          }
        />
        <div className="mb-5">
          <ProgressBar value={(index / session.length) * 100} showValue={false} size="sm" tone="gold" />
        </div>

        {question ? (
          <Card>
            <div className="mb-4 flex flex-wrap items-center gap-1.5">
              <Badge tone="brand">{SKILL_MAP[question.skill]?.label ?? question.skill}</Badge>
              {card ? <Badge>Révisée {card.reps} fois</Badge> : null}
              {card && card.lapses > 0 ? <Badge tone="warning">{card.lapses} oubli(s)</Badge> : null}
            </div>
            <p className="mb-4 text-base font-medium leading-relaxed">{question.question}</p>
            <div className="space-y-2">
              {optionsOf(question).map((opt, i) => {
                const isCorrect = revealed && i === question.answer;
                const isWrong = revealed && selected === i && i !== question.answer;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={revealed}
                    onClick={() => {
                      setSelected(i);
                      setRevealed(true);
                    }}
                    className={cx(
                      "flex w-full items-start gap-3 rounded-lg border px-3.5 py-3 text-left text-sm transition-colors",
                      isCorrect
                        ? "border-success bg-success-soft"
                        : isWrong
                          ? "border-danger bg-danger-soft"
                          : "border-line hover:border-line-strong hover:bg-surface-2",
                    )}
                  >
                    <span aria-hidden className="mt-0.5 w-4 shrink-0 text-center text-xs text-ink-mute">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </button>
                );
              })}
            </div>

            {revealed ? (
              <>
                <div className="mt-4 rounded-lg border border-line bg-surface-2 p-4 text-sm leading-relaxed text-ink-soft">
                  {question.explanation}
                  {(() => {
                    const lesson = lessonOf(question.id);
                    return lesson ? (
                      <Link
                        href={`/cours/${lesson.moduleId}/${lesson.id}`}
                        className="mt-2 block text-xs font-medium underline underline-offset-2"
                      >
                        Revoir la leçon : {lesson.title}
                      </Link>
                    ) : null;
                  })()}
                </div>

                <p className="mt-5 mb-2 text-sm font-medium">
                  {selected === question.answer
                    ? "Vous avez trouvé. C'était comment ?"
                    : "Notez votre maîtrise réelle :"}
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <Button variant="danger" onClick={() => grade(0)}>
                    Raté
                  </Button>
                  <Button variant="secondary" onClick={() => grade(1)}>
                    Difficile
                  </Button>
                  <Button variant="secondary" onClick={() => grade(2)}>
                    Correct
                  </Button>
                  <Button variant="gold" onClick={() => grade(3)}>
                    Facile
                  </Button>
                </div>
                <p className="mt-3 text-xs text-ink-mute">
                  Votre note détermine la date de réapparition : « facile » éloigne fortement la
                  carte, « raté » la ramène dès demain. Soyez honnête, c'est tout l'intérêt.
                </p>
              </>
            ) : null}
          </Card>
        ) : term ? (
          <Card>
            <Badge tone="brand">{term.category}</Badge>
            <p className="mt-4 font-display text-2xl font-semibold">{term.term}</p>
            <p className="mt-2 text-sm text-ink-mute">
              Expliquez ce terme à voix haute, comme à un client qui n'y connaît rien.
            </p>
            {revealed ? (
              <div className="mt-5 space-y-3">
                <div className="rounded-lg border border-line bg-surface-2 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                    En clair
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">{term.simple}</p>
                </div>
                <div className="rounded-lg border border-line bg-surface-2 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                    Formulation professionnelle
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{term.pro}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <Button variant="danger" onClick={() => grade(0)}>
                    Raté
                  </Button>
                  <Button variant="secondary" onClick={() => grade(1)}>
                    Difficile
                  </Button>
                  <Button variant="secondary" onClick={() => grade(2)}>
                    Correct
                  </Button>
                  <Button variant="gold" onClick={() => grade(3)}>
                    Facile
                  </Button>
                </div>
              </div>
            ) : (
              <Button variant="gold" className="mt-5" onClick={() => setRevealed(true)}>
                Afficher la définition
              </Button>
            )}
          </Card>
        ) : (
          <Card>
            <p className="text-sm text-ink-soft">
              Cette carte fait référence à un contenu introuvable. Elle va être retirée de votre
              paquet.
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => {
                dispatch({ type: "remove-card", cardId });
                grade(2);
              }}
            >
              Retirer et continuer
            </Button>
          </Card>
        )}
      </div>
    );
  }

  /* ------------------------------- Accueil ------------------------------ */
  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Mémoire"
        title="Révision intelligente"
        description="Chaque notion que vous ratez entre automatiquement dans un paquet de révision. Elle vous est reproposée le lendemain, puis à des intervalles de plus en plus longs à mesure que vous la maîtrisez. Une notion maîtrisée durablement sort du paquet."
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <Card>
          {due.length > 0 ? (
            <>
              <p className="font-display text-xl font-semibold">
                {due.length} notion{due.length > 1 ? "s" : ""} à revoir aujourd'hui
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Comptez environ {Math.max(1, Math.round(due.length * 0.5))} minute
                {due.length > 2 ? "s" : ""}. Répondez, puis notez honnêtement votre maîtrise : c'est
                cette note qui règle la date de réapparition.
              </p>
              <Button variant="gold" size="lg" className="mt-5" onClick={start}>
                Lancer la séance
              </Button>
              {doneCount > 0 ? (
                <p className="mt-3 text-xs text-success">
                  {doneCount} carte{doneCount > 1 ? "s" : ""} révisée{doneCount > 1 ? "s" : ""} lors
                  de la dernière séance.
                </p>
              ) : null}
            </>
          ) : Object.keys(state.srs).length > 0 ? (
            <>
              <p className="font-display text-xl font-semibold">Rien à réviser aujourd'hui</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Votre paquet contient {Object.keys(state.srs).length} notion
                {Object.keys(state.srs).length > 1 ? "s" : ""}, dont la prochaine échéance est à
                venir. Revenez demain, ou entraînez-vous librement en attendant.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink href="/quiz" variant="secondary">
                  Quiz libre
                </ButtonLink>
                <ButtonLink href="/cours" variant="ghost">
                  Continuer le parcours
                </ButtonLink>
              </div>
            </>
          ) : (
            <EmptyState
              icon="↻"
              title="Votre paquet de révision est vide"
              description="Faites un quiz de leçon : chaque question manquée y sera ajoutée automatiquement, et vous sera reproposée aux bons intervalles."
              action={
                <ButtonLink href="/cours" variant="gold">
                  Commencer une leçon
                </ButtonLink>
              }
            />
          )}
        </Card>

        <div className="space-y-5">
          <Card>
            <p className="mb-3 text-sm font-semibold">Votre paquet</p>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-soft">Cartes en cours</dt>
                <dd className="font-medium tabular-nums">{Object.keys(state.srs).length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Dues aujourd'hui</dt>
                <dd className="font-medium tabular-nums">{due.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Programmées plus tard</dt>
                <dd className="font-medium tabular-nums">{upcoming.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Questions déjà manquées</dt>
                <dd className="font-medium tabular-nums">{missed.length}</dd>
              </div>
            </dl>
          </Card>

          {weak.length > 0 ? (
            <Card>
              <p className="mb-3 text-sm font-semibold">Compétences les plus fragiles</p>
              <ul className="space-y-3">
                {weak.map((s) => (
                  <li key={s.skill}>
                    <ProgressBar
                      value={s.score}
                      label={SKILL_MAP[s.skill]?.label ?? s.skill}
                      size="sm"
                      tone="gold"
                    />
                    <Link
                      href={`/quiz?competence=${s.skill}`}
                      className="mt-1 inline-block text-xs underline underline-offset-2 text-ink-soft"
                    >
                      S'entraîner sur cette compétence
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}
        </div>
      </div>

      {missed.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-semibold">
            Notions déjà manquées ({missed.length})
          </h2>
          <Callout variant="info" title="Pourquoi cette liste est précieuse">
            Ce sont vos points faibles réels, mesurés et non supposés. Reprendre les leçons
            correspondantes est plus rentable que de découvrir de nouveaux modules.
          </Callout>
          <ul className="mt-4 space-y-2">
            {missed.slice(0, 20).map(({ question, lesson }) => (
              <li key={question.id}>
                <Card className="p-4">
                  <p className="text-sm font-medium">{question.question}</p>
                  <p className="mt-1 text-xs text-ink-soft">{question.explanation}</p>
                  {lesson ? (
                    <Link
                      href={`/cours/${lesson.moduleId}/${lesson.id}`}
                      className="mt-2 inline-block text-xs font-medium underline underline-offset-2"
                    >
                      {MODULE_MAP[lesson.moduleId]?.title} — {lesson.title}
                    </Link>
                  ) : null}
                </Card>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
