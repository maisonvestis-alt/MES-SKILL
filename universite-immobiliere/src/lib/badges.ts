import { ALL_LESSONS, MODULE_MAP } from "@/content";
import type { ProgressState } from "./progress";

export interface BadgeDef {
  id: string;
  label: string;
  description: string;
  icon: string;
  /** Condition d'obtention, évaluée à la volée sur l'état courant. */
  check: (s: ProgressState) => boolean;
  /** Progression indicative 0-1, pour afficher « 3/5 ». */
  progress?: (s: ProgressState) => { current: number; target: number };
}

const lessonsDone = (s: ProgressState) =>
  ALL_LESSONS.filter((l) => s.lessons[l.id]?.completed).length;

const moduleDone = (s: ProgressState, moduleId: string) => {
  const m = MODULE_MAP[moduleId];
  if (!m || m.lessons.length === 0) return false;
  return m.lessons.every((l) => s.lessons[l.id]?.completed);
};

const firstTryCorrect = (s: ProgressState) =>
  Object.values(s.answers).filter((a) => a.firstTryCorrect).length;

export const BADGES: BadgeDef[] = [
  {
    id: "premier-pas",
    label: "Premier pas",
    description: "Terminer sa première leçon.",
    icon: "🎓",
    check: (s) => lessonsDone(s) >= 1,
    progress: (s) => ({ current: Math.min(lessonsDone(s), 1), target: 1 }),
  },
  {
    id: "fondations",
    label: "Fondations posées",
    description: "Terminer dix leçons.",
    icon: "🧱",
    check: (s) => lessonsDone(s) >= 10,
    progress: (s) => ({ current: Math.min(lessonsDone(s), 10), target: 10 }),
  },
  {
    id: "bibliothecaire",
    label: "Bibliothécaire",
    description: "Terminer trente leçons.",
    icon: "📚",
    check: (s) => lessonsDone(s) >= 30,
    progress: (s) => ({ current: Math.min(lessonsDone(s), 30), target: 30 }),
  },
  {
    id: "decouverte",
    label: "Le métier décrypté",
    description: "Terminer le module Découvrir le métier.",
    icon: "🧭",
    check: (s) => moduleDone(s, "decouverte"),
  },
  {
    id: "vocabulaire",
    label: "Vocabulaire juste",
    description: "Terminer le module Fondamentaux immobiliers.",
    icon: "📖",
    check: (s) => moduleDone(s, "fondamentaux"),
  },
  {
    id: "juriste",
    label: "Cadre maîtrisé",
    description: "Terminer le module Cadre juridique français.",
    icon: "⚖️",
    check: (s) => moduleDone(s, "juridique"),
  },
  {
    id: "estimateur",
    label: "Estimateur",
    description: "Terminer le module Estimation immobilière.",
    icon: "🎯",
    check: (s) => moduleDone(s, "estimation"),
  },
  {
    id: "prospecteur",
    label: "Prospecteur",
    description: "Terminer le module Prospection.",
    icon: "📞",
    check: (s) => moduleDone(s, "prospection"),
  },
  {
    id: "negociateur",
    label: "Négociateur",
    description: "Terminer le module Négociation.",
    icon: "♟️",
    check: (s) => moduleDone(s, "negociation"),
  },
  {
    id: "sans-faute",
    label: "Sans faute",
    description: "Répondre juste du premier coup à 25 questions.",
    icon: "✅",
    check: (s) => firstTryCorrect(s) >= 25,
    progress: (s) => ({ current: Math.min(firstTryCorrect(s), 25), target: 25 }),
  },
  {
    id: "regulier",
    label: "Régulier",
    description: "Travailler sept jours d'affilée.",
    icon: "🔥",
    check: (s) => s.streak.longest >= 7,
    progress: (s) => ({ current: Math.min(s.streak.longest, 7), target: 7 }),
  },
  {
    id: "endurant",
    label: "Endurant",
    description: "Travailler trente jours d'affilée.",
    icon: "🏔️",
    check: (s) => s.streak.longest >= 30,
    progress: (s) => ({ current: Math.min(s.streak.longest, 30), target: 30 }),
  },
  {
    id: "simulateur",
    label: "Face au client",
    description: "Terminer trois simulations.",
    icon: "🎭",
    check: (s) => Object.keys(s.scenarios).length >= 3,
    progress: (s) => ({ current: Math.min(Object.keys(s.scenarios).length, 3), target: 3 }),
  },
  {
    id: "examinateur",
    label: "Premier examen",
    description: "Réussir un examen de niveau.",
    icon: "📝",
    check: (s) => Object.values(s.exams).some((e) => e.passed),
  },
  {
    id: "certifie",
    label: "Certification interne",
    description: "Réussir l'examen final de l'Université Immobilière.",
    icon: "🏆",
    check: (s) => s.exams["exam-final"]?.passed === true,
  },
  {
    id: "portefeuille",
    label: "Portefeuille lancé",
    description: "Enregistrer cinq contacts dans le CRM pédagogique.",
    icon: "📇",
    check: (s) => s.contacts.length >= 5,
    progress: (s) => ({ current: Math.min(s.contacts.length, 5), target: 5 }),
  },
  {
    id: "terrain",
    label: "Prêt pour le terrain",
    description: "Compléter entièrement une checklist.",
    icon: "☑️",
    check: (s) =>
      Object.values(s.checklists).some((list) => Object.values(list).filter(Boolean).length >= 10),
  },
  {
    id: "reviseur",
    label: "Mémoire longue",
    description: "Faire sortir dix notions du paquet de révision en les maîtrisant.",
    icon: "🧠",
    check: (s) => s.xp >= 1500 && Object.keys(s.srs).length <= 3 && Object.keys(s.answers).length >= 40,
  },
];

export const BADGE_MAP: Record<string, BadgeDef> = Object.fromEntries(BADGES.map((b) => [b.id, b]));

export function earnedBadges(state: ProgressState): BadgeDef[] {
  return BADGES.filter((b) => b.check(state));
}
