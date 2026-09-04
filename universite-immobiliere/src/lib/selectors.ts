import { ALL_LESSONS, ALL_QUESTIONS, MODULES, MODULE_MAP, QUESTION_MAP } from "@/content";
import { SKILLS } from "./skills";
import type { CourseModule, Lesson, SkillId } from "./types";
import type { ProgressState } from "./progress";
import { todayKey } from "./progress";

export interface ModuleProgress {
  module: CourseModule;
  done: number;
  total: number;
  percent: number;
  started: boolean;
  completed: boolean;
}

export function moduleProgress(state: ProgressState, m: CourseModule): ModuleProgress {
  const total = m.lessons.length;
  const done = m.lessons.filter((l) => state.lessons[l.id]?.completed).length;
  return {
    module: m,
    done,
    total,
    percent: total === 0 ? 0 : (done / total) * 100,
    started: m.lessons.some((l) => state.lessons[l.id]),
    completed: total > 0 && done === total,
  };
}

export function allModuleProgress(state: ProgressState): ModuleProgress[] {
  return MODULES.map((m) => moduleProgress(state, m));
}

export function globalProgress(state: ProgressState): { done: number; total: number; percent: number } {
  const total = ALL_LESSONS.length;
  const done = ALL_LESSONS.filter((l) => state.lessons[l.id]?.completed).length;
  return { done, total, percent: total === 0 ? 0 : (done / total) * 100 };
}

export interface SkillMastery {
  skill: SkillId;
  /** Part des leçons de cette compétence terminées (0-100). */
  coverage: number;
  /** Taux de réussite aux questions de cette compétence (0-100), null si jamais évalué. */
  accuracy: number | null;
  /** Score combiné affiché dans le tableau de bord (0-100). */
  score: number;
  lessonsDone: number;
  lessonsTotal: number;
  questionsAnswered: number;
  questionsTotal: number;
}

/**
 * Maîtrise d'une compétence : deux tiers de couverture (avoir travaillé le sujet)
 * et un tiers de justesse (savoir répondre). Une compétence jamais évaluée
 * plafonne donc à la couverture, ce qui est volontaire : lire n'est pas savoir.
 */
export function skillMastery(state: ProgressState, skill: SkillId): SkillMastery {
  const lessons = ALL_LESSONS.filter((l) => l.skills.includes(skill));
  const lessonsDone = lessons.filter((l) => state.lessons[l.id]?.completed).length;
  const coverage = lessons.length === 0 ? 0 : (lessonsDone / lessons.length) * 100;

  const questions = ALL_QUESTIONS.filter((q) => q.skill === skill);
  let correct = 0;
  let answered = 0;
  for (const q of questions) {
    const rec = state.answers[q.id];
    if (!rec) continue;
    answered += 1;
    if (rec.firstTryCorrect || rec.correct > rec.wrong) correct += 1;
  }
  const accuracy = answered === 0 ? null : (correct / answered) * 100;
  const evaluated = questions.length === 0 ? 0 : (answered / questions.length) * 100;

  const score =
    accuracy === null
      ? coverage * 0.66
      : coverage * 0.55 + accuracy * 0.3 + Math.min(evaluated, 100) * 0.15;

  return {
    skill,
    coverage,
    accuracy,
    score: Math.round(Math.max(0, Math.min(100, score))),
    lessonsDone,
    lessonsTotal: lessons.length,
    questionsAnswered: answered,
    questionsTotal: questions.length,
  };
}

export function allSkillMastery(state: ProgressState): SkillMastery[] {
  return SKILLS.map((s) => skillMastery(state, s.id));
}

/** Première leçon non terminée dans l'ordre du parcours. */
export function nextLesson(state: ProgressState): Lesson | null {
  return ALL_LESSONS.find((l) => !state.lessons[l.id]?.completed) ?? null;
}

/** Leçons vues récemment, les plus récentes d'abord. */
export function recentLessons(state: ProgressState, limit = 4): Lesson[] {
  return Object.entries(state.lessons)
    .filter(([, r]) => r.visits > 0)
    .sort((a, b) => (b[1].completedAt ?? "").localeCompare(a[1].completedAt ?? ""))
    .map(([id]) => ALL_LESSONS.find((l) => l.id === id))
    .filter((l): l is Lesson => Boolean(l))
    .slice(0, limit);
}

/** Cartes de révision dues aujourd'hui ou en retard. */
export function dueCards(state: ProgressState) {
  const today = todayKey();
  return Object.values(state.srs)
    .filter((c) => c.due <= today)
    .sort((a, b) => a.due.localeCompare(b.due));
}

/** Compétences les plus fragiles, pour proposer une révision ciblée. */
export function weakestSkills(state: ProgressState, limit = 3): SkillMastery[] {
  return allSkillMastery(state)
    .filter((s) => s.lessonsTotal > 0 && (s.lessonsDone > 0 || s.questionsAnswered > 0))
    .sort((a, b) => a.score - b.score)
    .slice(0, limit);
}

/** Questions ratées au moins une fois, avec leur leçon d'origine. */
export function missedQuestions(state: ProgressState) {
  return Object.entries(state.answers)
    .filter(([, r]) => r.wrong > 0)
    .map(([id]) => {
      const q = QUESTION_MAP[id];
      if (!q) return null;
      const lesson = ALL_LESSONS.find((l) => l.quiz.some((x) => x.id === id)) ?? null;
      return { question: q, lesson, module: lesson ? MODULE_MAP[lesson.moduleId] ?? null : null };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")}`;
}

export const DIFFICULTY_LABEL: Record<string, string> = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
};
