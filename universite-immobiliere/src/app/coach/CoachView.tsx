"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Button, Callout, Card, PageHeader, cx, inputClass } from "@/components/ui";
import { QuizRunner } from "@/components/lesson/QuizRunner";
import { COACH_SUGGESTIONS, coachRespond, type CoachResponse } from "@/lib/coach";
import { useProgress } from "@/lib/progress";
import { nextLesson } from "@/lib/selectors";
import { MODULE_MAP } from "@/content";

interface Exchange {
  id: number;
  question: string;
  response: CoachResponse;
}

export function CoachView() {
  const { state } = useProgress();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Exchange[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  function ask(text: string) {
    const q = text.trim();
    if (!q) return;
    const next = nextLesson(state);
    const response = coachRespond(q, {
      nextLessonHref: next ? `/cours/${next.moduleId}/${next.id}` : null,
      nextLessonTitle: next?.title ?? null,
    });
    setHistory((h) => [...h, { id: Date.now(), question: q, response }]);
    setInput("");
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
  }

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Accompagnement"
        title="Coach pédagogique"
        description="Posez une question, demandez à être interrogé, ou demandez à être guidé. Le coach ne donne pas la réponse à votre place : il vous ramène au contenu vérifié du parcours et vous fait travailler."
      />

      <Callout variant="info" title="Comment fonctionne ce coach">
        Il puise exclusivement dans le contenu de cette plateforme — leçons, glossaire, quiz,
        simulations, checklists. Il ne génère pas de réponse libre, et c'est délibéré : sur une
        question juridique ou fiscale, une réponse improvisée serait dangereuse. Quand il ne sait
        pas, il vous le dit.
      </Callout>

      {history.length === 0 ? (
        <Card className="mt-6">
          <p className="mb-3 text-sm font-semibold">Essayez par exemple</p>
          <div className="flex flex-wrap gap-2">
            {COACH_SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => ask(s)}
                className="rounded-full border border-line px-3 py-1.5 text-xs transition-colors hover:border-gold-300 hover:text-gold-600"
              >
                {s}
              </button>
            ))}
          </div>
        </Card>
      ) : null}

      <div className="mt-6 space-y-6">
        {history.map((ex) => (
          <div key={ex.id}>
            <div className="mb-3 flex justify-end">
              <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-brand-900 px-4 py-2.5 text-sm text-ink-invert dark:bg-brand-200 dark:text-ink">
                {ex.question}
              </p>
            </div>

            <Card>
              <div className="mb-3 flex items-center gap-2">
                <span
                  aria-hidden
                  className="grid h-7 w-7 place-items-center rounded-full bg-gold-400 text-sm text-on-gold"
                >
                  ✦
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-mute">
                  Coach
                </span>
              </div>

              <p className="text-[15px] leading-relaxed">{ex.response.text}</p>

              {ex.response.steps?.length ? (
                <ol className="mt-4 space-y-2">
                  {ex.response.steps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span
                        aria-hidden
                        className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              ) : null}

              {ex.response.terms?.length ? (
                <div className="mt-5 space-y-3">
                  {ex.response.terms.map((t) => (
                    <div key={t.id} className="rounded-xl border border-brand-200 overflow-hidden">
                      <p className="border-b border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold dark:bg-surface-3">
                        {t.term}
                      </p>
                      <div className="space-y-2 bg-surface p-4">
                        <p className="text-sm leading-relaxed">
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                            En clair —{" "}
                          </span>
                          {t.simple}
                        </p>
                        <p className="text-sm leading-relaxed text-ink-soft">
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                            Formulation pro —{" "}
                          </span>
                          {t.pro}
                        </p>
                        {t.watchOut ? (
                          <p className="rounded-lg bg-warning-soft px-3 py-2 text-xs leading-relaxed text-ink-soft">
                            <strong>Piège : </strong>
                            {t.watchOut}
                          </p>
                        ) : null}
                        <Link
                          href={`/glossaire?terme=${t.id}`}
                          className="inline-block text-xs underline underline-offset-2"
                        >
                          Fiche complète dans le glossaire
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {ex.response.lessons?.length ? (
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-mute">
                    Leçons du parcours
                  </p>
                  <ul className="space-y-2">
                    {ex.response.lessons.map((l) => (
                      <li key={l.id}>
                        <Link
                          href={`/cours/${l.moduleId}/${l.id}`}
                          className="block rounded-lg border border-line bg-surface-2 p-3 transition-colors hover:border-gold-300"
                        >
                          <p className="text-sm font-medium">{l.title}</p>
                          <p className="mt-0.5 text-xs text-ink-soft">
                            {MODULE_MAP[l.moduleId]?.title} · {l.summary}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {ex.response.scenarios?.length ? (
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-mute">
                    Mises en situation
                  </p>
                  <ul className="space-y-2">
                    {ex.response.scenarios.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/simulations/${s.id}`}
                          className="block rounded-lg border border-line bg-surface-2 p-3 transition-colors hover:border-gold-300"
                        >
                          <p className="text-sm font-medium">{s.title}</p>
                          <p className="mt-0.5 text-xs text-ink-soft">{s.pitch}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {ex.response.questions?.length ? (
                <div className="mt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-mute">
                    À vous
                  </p>
                  <QuizRunner questions={ex.response.questions} title="Interrogation du coach" />
                </div>
              ) : null}

              {ex.response.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {ex.response.links.map((l, i) => (
                    <Link
                      key={i}
                      href={l.href}
                      title={l.hint}
                      className="rounded-lg border border-line px-3 py-1.5 text-xs font-medium transition-colors hover:border-gold-300 hover:text-gold-600"
                    >
                      {l.label} →
                    </Link>
                  ))}
                </div>
              ) : null}

              {ex.response.note ? (
                <p className="mt-4 rounded-lg border border-warning/30 bg-warning-soft px-3 py-2 text-xs leading-relaxed text-ink-soft">
                  {ex.response.note}
                </p>
              ) : null}
            </Card>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        className={cx(
          "sticky bottom-20 z-10 mt-6 flex gap-2 rounded-xl border border-line bg-surface p-2 shadow-md lg:bottom-4",
        )}
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <label htmlFor="coach-input" className="sr-only">
          Votre question
        </label>
        <input
          id="coach-input"
          className={cx(inputClass, "border-0 focus:ring-0")}
          placeholder="Interroge-moi sur les mandats, explique-moi le DPE, guide-moi pour estimer…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
        <Button type="submit" variant="gold" disabled={!input.trim()}>
          Envoyer
        </Button>
      </form>

      {history.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {COACH_SUGGESTIONS.slice(0, 5).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => ask(s)}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-gold-300"
            >
              {s}
            </button>
          ))}
          <Button variant="ghost" size="sm" onClick={() => setHistory([])}>
            Effacer la conversation
          </Button>
        </div>
      ) : null}

      <p className="mt-6 text-xs leading-relaxed text-ink-mute">
        Ce coach fonctionne entièrement sur votre appareil, à partir du contenu de la plateforme.
        Aucune donnée n'est envoyée à un service externe. L'architecture prévoit qu'un moteur
        conversationnel puisse être branché ultérieurement, à condition qu'il ne se substitue jamais
        aux sources officielles sur les questions réglementaires.
      </p>
    </div>
  );
}
