import type { CourseModule, Lesson, QuizQuestion, SkillId } from "@/lib/types";
import { moduleDecouverte } from "./modules/m00-decouverte";
import { moduleFondamentaux } from "./modules/m01-fondamentaux";
import { moduleJuridique } from "./modules/m02-juridique";
import { moduleMarche } from "./modules/m03-marche";
import { moduleEstimation } from "./modules/m04-estimation";
import { moduleProspection } from "./modules/m05-prospection";
import { moduleDecouverteClient } from "./modules/m06-decouverte-client";
import { moduleMandat } from "./modules/m07-mandat";
import { moduleCommercialisation } from "./modules/m08-commercialisation";

/**
 * Registre des modules du parcours.
 * L'ordre du tableau définit l'ordre pédagogique (niveau 0, 1, 2…).
 */
export const MODULES: CourseModule[] = [
  moduleDecouverte,
  moduleFondamentaux,
  moduleJuridique,
  moduleMarche,
  moduleEstimation,
  moduleProspection,
  moduleDecouverteClient,
  moduleMandat,
  moduleCommercialisation,
].sort((a, b) => a.level - b.level);

export const MODULE_MAP: Record<string, CourseModule> = Object.fromEntries(
  MODULES.map((m) => [m.id, m]),
);

export const ALL_LESSONS: Lesson[] = MODULES.flatMap((m) => m.lessons);

export const LESSON_MAP: Record<string, Lesson> = Object.fromEntries(
  ALL_LESSONS.map((l) => [l.id, l]),
);

export const ALL_QUESTIONS: QuizQuestion[] = ALL_LESSONS.flatMap((l) => l.quiz);

export const QUESTION_MAP: Record<string, QuizQuestion> = Object.fromEntries(
  ALL_QUESTIONS.map((q) => [q.id, q]),
);

/** Retrouve la leçon suivante dans l'ordre du parcours. */
export function nextLessonAfter(lessonId: string): Lesson | null {
  const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (idx < 0 || idx === ALL_LESSONS.length - 1) return null;
  return ALL_LESSONS[idx + 1];
}

export function previousLessonBefore(lessonId: string): Lesson | null {
  const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return null;
  return ALL_LESSONS[idx - 1];
}

export function moduleOf(lessonId: string): CourseModule | null {
  const lesson = LESSON_MAP[lessonId];
  return lesson ? MODULE_MAP[lesson.moduleId] ?? null : null;
}

export function questionsForSkill(skill: SkillId): QuizQuestion[] {
  return ALL_QUESTIONS.filter((q) => q.skill === skill);
}

export function questionsForModules(moduleIds: string[]): QuizQuestion[] {
  const ids = new Set(moduleIds);
  return ALL_LESSONS.filter((l) => ids.has(l.moduleId)).flatMap((l) => l.quiz);
}

export const TOTAL_DURATION_MIN = ALL_LESSONS.reduce((sum, l) => sum + l.duration, 0);
