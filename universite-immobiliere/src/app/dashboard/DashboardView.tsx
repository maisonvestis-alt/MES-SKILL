"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Badge,
  Button,
  ButtonLink,
  Card,
  CardTitle,
  Field,
  ProgressBar,
  Ring,
  Stat,
  cx,
  inputClass,
} from "@/components/ui";
import { bandForXp, nextBand, useProgress } from "@/lib/progress";
import {
  allModuleProgress,
  allSkillMastery,
  dueCards,
  formatDuration,
  globalProgress,
  nextLesson,
  weakestSkills,
} from "@/lib/selectors";
import { MODULE_MAP, TOTAL_DURATION_MIN } from "@/content";
import { SKILL_MAP } from "@/lib/skills";
import { BADGES, earnedBadges } from "@/lib/badges";

function Onboarding() {
  const { state, dispatch } = useProgress();
  const [name, setName] = useState(state.profile.firstName);
  const [city, setCity] = useState(state.profile.city ?? "");

  return (
    <Card className="mb-8 border-gold-200 bg-gold-50">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
        Bienvenue
      </p>
      <h1 className="font-display text-2xl font-semibold">Commençons par faire connaissance</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Cette plateforme part du principe que vous ne connaissez rien au métier. Chaque notion est
        expliquée simplement, illustrée par un exemple immobilier, puis vérifiée par un exercice.
        Vos réponses et votre progression restent enregistrées sur cet appareil, dans votre
        navigateur.
      </p>
      <form
        className="mt-5 grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "profile",
            patch: { firstName: name.trim() || "", city: city.trim(), onboarded: true },
          });
        }}
      >
        <Field label="Votre prénom" htmlFor="ob-name">
          <input
            id="ob-name"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Camille"
            autoComplete="given-name"
          />
        </Field>
        <Field label="Votre secteur (facultatif)" htmlFor="ob-city" hint="Sert d'exemple dans les exercices.">
          <input
            id="ob-city"
            className={inputClass}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Angers, quartier Doutre"
          />
        </Field>
        <Button type="submit" variant="gold" size="md" className="sm:mb-[2px]">
          Commencer
        </Button>
      </form>
    </Card>
  );
}

export function DashboardView() {
  const { state, hydrated } = useProgress();
  const progress = globalProgress(state);
  const band = bandForXp(state.xp);
  const upcoming = nextBand(state.xp);
  const next = nextLesson(state);
  const due = dueCards(state);
  const weak = weakestSkills(state, 4);
  const modules = allModuleProgress(state);
  const skills = allSkillMastery(state)
    .filter((s) => s.lessonsTotal > 0)
    .sort((a, b) => b.score - a.score);
  const badges = earnedBadges(state);

  const inProgress = modules.filter((m) => m.started && !m.completed);
  const lessonsDoneThisWeek = Object.values(state.lessons).filter((l) => {
    if (!l.completedAt) return false;
    const d = new Date(l.completedAt).getTime();
    return Date.now() - d < 7 * 24 * 3600 * 1000;
  }).length;

  if (!hydrated) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-64 rounded bg-surface-3" />
        <div className="h-40 rounded-xl bg-surface-3" />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="h-24 rounded-xl bg-surface-3" />
          <div className="h-24 rounded-xl bg-surface-3" />
          <div className="h-24 rounded-xl bg-surface-3" />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-rise">
      {!state.profile.onboarded ? <Onboarding /> : null}

      <header className="mb-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
          Tableau de bord
        </p>
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Bonjour{state.profile.firstName ? ` ${state.profile.firstName}` : ""}.
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Votre objectif : <strong className="font-medium text-ink">{state.profile.goal}</strong>
        </p>
        <div className="ui-rule mt-5" />
      </header>

      {/* Progression générale + prochaine mission */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <Card>
          <CardTitle hint={`${state.xp} XP`}>Progression générale</CardTitle>
          <div className="flex items-center gap-5">
            <Ring value={progress.percent} label="parcours" />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 text-sm font-medium">
                <span aria-hidden>{band.emoji}</span> {band.label}
              </p>
              {upcoming ? (
                <>
                  <p className="mt-1 text-xs text-ink-mute">
                    Encore {upcoming.min - state.xp} XP pour atteindre « {upcoming.label} »
                  </p>
                  <div className="mt-2">
                    <ProgressBar
                      value={((state.xp - band.min) / (upcoming.min - band.min)) * 100}
                      showValue={false}
                      size="sm"
                      tone="gold"
                    />
                  </div>
                </>
              ) : (
                <p className="mt-1 text-xs text-ink-mute">Niveau maximal du parcours atteint.</p>
              )}
              <p className="mt-3 text-xs text-ink-mute">
                {progress.done} / {progress.total} leçons · {formatDuration(TOTAL_DURATION_MIN)} de
                contenu au total
              </p>
            </div>
          </div>
        </Card>

        <Card className="border-brand-200 bg-brand-50 dark:bg-surface-2">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
            Votre prochaine mission
          </p>
          {next ? (
            <>
              <h2 className="font-display text-xl font-semibold">{next.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{next.summary}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge tone="brand">{MODULE_MAP[next.moduleId]?.title}</Badge>
                <Badge>{formatDuration(next.duration)}</Badge>
                {next.skills.slice(0, 2).map((s) => (
                  <Badge key={s} tone="gold">
                    {SKILL_MAP[s]?.short ?? s}
                  </Badge>
                ))}
              </div>
              <ButtonLink
                href={`/cours/${next.moduleId}/${next.id}`}
                variant="gold"
                size="lg"
                className="mt-5 w-full sm:w-auto"
              >
                Commencer →
              </ButtonLink>
            </>
          ) : (
            <>
              <h2 className="font-display text-xl font-semibold">
                Vous avez terminé toutes les leçons disponibles.
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Consolidez maintenant : révisions espacées, simulations en mode expert et examen de
                certification interne.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink href="/revisions" variant="gold">
                  Réviser
                </ButtonLink>
                <ButtonLink href="/examens" variant="secondary">
                  Passer un examen
                </ButtonLink>
              </div>
            </>
          )}
        </Card>
      </div>

      {/* Statistiques */}
      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat
          icon="🔥"
          label="Série"
          value={`${state.streak.current} j`}
          hint={`Record : ${state.streak.longest} jours`}
        />
        <Stat icon="📘" label="Cette semaine" value={lessonsDoneThisWeek} hint="leçons terminées" />
        <Stat
          icon="↻"
          label="À réviser"
          value={due.length}
          hint={due.length > 0 ? "cartes dues aujourd'hui" : "rien pour l'instant"}
        />
        <Stat icon="🏅" label="Badges" value={`${badges.length}/${BADGES.length}`} hint="obtenus" />
      </div>

      {/* Compétences + révisions */}
      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Card>
          <CardTitle hint={<Link href="/progression" className="underline underline-offset-2">Tout voir</Link>}>
            Vos compétences
          </CardTitle>
          {skills.some((s) => s.score > 0) ? (
            <ul className="space-y-3.5">
              {skills.slice(0, 6).map((s) => (
                <li key={s.skill}>
                  <ProgressBar
                    value={s.score}
                    label={`${SKILL_MAP[s.skill]?.icon ?? ""} ${SKILL_MAP[s.skill]?.label ?? s.skill}`}
                    tone={s.score >= 70 ? "success" : s.score >= 40 ? "brand" : "gold"}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-ink-soft">
              Aucune compétence évaluée pour l'instant. Terminez une leçon et son quiz : les barres
              se remplissent en fonction de ce que vous avez travaillé <em>et</em> de vos réponses.
            </p>
          )}
        </Card>

        <div className="space-y-5">
          <Card>
            <CardTitle>Révision intelligente</CardTitle>
            {due.length > 0 ? (
              <>
                <p className="text-sm text-ink-soft">
                  {due.length} notion{due.length > 1 ? "s" : ""} à revoir aujourd'hui. Les questions
                  ratées reviennent automatiquement, de plus en plus espacées à mesure que vous les
                  maîtrisez.
                </p>
                <ButtonLink href="/revisions" variant="primary" className="mt-4 w-full">
                  Lancer la séance
                </ButtonLink>
              </>
            ) : (
              <p className="text-sm text-ink-soft">
                Rien à réviser aujourd'hui. Les notions que vous ratez dans un quiz sont ajoutées
                automatiquement à votre paquet de révision.
              </p>
            )}
          </Card>

          {weak.length > 0 ? (
            <Card>
              <CardTitle>À consolider en priorité</CardTitle>
              <ul className="space-y-2 text-sm">
                {weak.map((s) => (
                  <li key={s.skill} className="flex items-center justify-between gap-3">
                    <span className="truncate text-ink-soft">
                      {SKILL_MAP[s.skill]?.icon} {SKILL_MAP[s.skill]?.label}
                    </span>
                    <Link
                      href={`/quiz?competence=${s.skill}`}
                      className="shrink-0 text-xs font-medium text-brand-600 underline underline-offset-2 dark:text-brand-700"
                    >
                      S'entraîner
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}
        </div>
      </div>

      {/* Modules en cours */}
      {inProgress.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-semibold">Reprendre où vous en étiez</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inProgress.slice(0, 3).map((m) => (
              <li key={m.module.id}>
                <Link href={`/cours/${m.module.id}`} className="block h-full">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <div className="mb-2 flex items-center gap-2">
                      <span aria-hidden className="text-lg">
                        {m.module.icon}
                      </span>
                      <Badge tone="neutral">Niveau {m.module.level}</Badge>
                    </div>
                    <p className="font-medium">{m.module.title}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-ink-mute">{m.module.subtitle}</p>
                    <div className="mt-4">
                      <ProgressBar value={m.percent} label={`${m.done}/${m.total}`} size="sm" />
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Objectifs de la semaine */}
      <section className="mt-8">
        <h2 className="mb-4 font-display text-lg font-semibold">Vos objectifs de la semaine</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Trois leçons terminées",
              done: lessonsDoneThisWeek >= 3,
              detail: `${Math.min(lessonsDoneThisWeek, 3)}/3 cette semaine`,
              href: "/cours",
            },
            {
              title: "Une simulation client",
              done: Object.keys(state.scenarios).length > 0,
              detail: "Entraînez-vous à répondre en situation réelle",
              href: "/simulations",
            },
            {
              title: "Une séance de révision",
              done: due.length === 0 && Object.keys(state.srs).length > 0,
              detail: due.length > 0 ? `${due.length} carte(s) en attente` : "Paquet à jour",
              href: "/revisions",
            },
          ].map((goal) => (
            <Link key={goal.title} href={goal.href}>
              <Card
                className={cx(
                  "h-full transition-shadow hover:shadow-md",
                  goal.done && "border-success/40 bg-success-soft",
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={cx(
                      "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[11px]",
                      goal.done
                        ? "border-success bg-success text-white"
                        : "border-line-strong text-transparent",
                    )}
                  >
                    ✓
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{goal.title}</span>
                    <span className="mt-0.5 block text-xs text-ink-mute">{goal.detail}</span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
