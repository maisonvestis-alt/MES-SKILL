"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { SkillId } from "./types";

/* -------------------------------------------------------------------------- */
/* Types d'état                                                                */
/* -------------------------------------------------------------------------- */

export interface LessonRecord {
  completed: boolean;
  completedAt?: string;
  visits: number;
}

export interface AnswerRecord {
  correct: number;
  wrong: number;
  lastAt: string;
  /** Vrai si la toute première tentative était bonne (sert au calcul d'XP). */
  firstTryCorrect?: boolean;
}

/** Carte de répétition espacée (algorithme SM-2 simplifié). */
export interface SrsCard {
  id: string;
  /** Type de carte : question de quiz ou terme de glossaire. */
  kind: "quiz" | "term";
  skill?: SkillId;
  /** Intervalle courant en jours. */
  interval: number;
  ease: number;
  reps: number;
  lapses: number;
  /** Date d'échéance (ISO, jour). */
  due: string;
  addedAt: string;
}

export interface ExamRecord {
  attempts: number;
  best: number;
  lastScore: number;
  lastAt: string;
  passed: boolean;
}

export interface ScenarioRecord {
  attempts: number;
  best: number;
  lastAt: string;
  axes: Record<string, number>;
}

export type ContactKind = "vendeur" | "acquereur";

export type PipelineStatus =
  | "nouveau"
  | "contacte"
  | "rdv"
  | "estimation"
  | "mandat"
  | "commercialisation"
  | "visite"
  | "offre"
  | "compromis"
  | "vendu"
  | "perdu";

export interface Contact {
  id: string;
  kind: ContactKind;
  name: string;
  phone?: string;
  email?: string;
  status: PipelineStatus;
  createdAt: string;
  updatedAt: string;
  /** Vendeur */
  address?: string;
  propertyType?: string;
  surface?: string;
  priceWanted?: string;
  estimation?: string;
  mandateType?: string;
  motivation?: string;
  /** Acquéreur */
  budget?: string;
  contribution?: string;
  financing?: string;
  sector?: string;
  criteria?: string;
  visited?: string;
  /** Commun */
  nextAction?: string;
  nextActionDate?: string;
  notes?: string;
}

export interface Settings {
  theme: "light" | "dark" | "system";
  reading: "normal" | "large" | "xlarge";
  expertMode: boolean;
  showLegalBanner: boolean;
}

export interface ProfileState {
  firstName: string;
  goal: string;
  startedAt: string;
  city?: string;
  onboarded: boolean;
}

export interface ProgressState {
  version: number;
  profile: ProfileState;
  lessons: Record<string, LessonRecord>;
  answers: Record<string, AnswerRecord>;
  srs: Record<string, SrsCard>;
  exams: Record<string, ExamRecord>;
  scenarios: Record<string, ScenarioRecord>;
  checklists: Record<string, Record<string, boolean>>;
  notes: Record<string, string>;
  exercises: Record<string, Record<string, string>>;
  contacts: Contact[];
  favorites: string[];
  xp: number;
  badges: string[];
  streak: { current: number; longest: number; lastDay: string | null };
  settings: Settings;
}

export const STORAGE_KEY = "ui-universite-immobiliere-v1";
const STATE_VERSION = 1;

export function createInitialState(): ProgressState {
  return {
    version: STATE_VERSION,
    profile: {
      firstName: "",
      goal: "Devenir conseiller immobilier opérationnel",
      startedAt: new Date().toISOString(),
      onboarded: false,
    },
    lessons: {},
    answers: {},
    srs: {},
    exams: {},
    scenarios: {},
    checklists: {},
    notes: {},
    exercises: {},
    contacts: [],
    favorites: [],
    xp: 0,
    badges: [],
    streak: { current: 0, longest: 0, lastDay: null },
    settings: {
      theme: "light",
      reading: "normal",
      expertMode: false,
      showLegalBanner: true,
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Utilitaires                                                                 */
/* -------------------------------------------------------------------------- */

export const XP_RULES = {
  lesson: 25,
  quizFirstTry: 6,
  quizCorrect: 2,
  reviewDone: 4,
  scenario: 45,
  examPassed: 120,
  exercise: 15,
} as const;

export interface LevelBand {
  id: string;
  label: string;
  emoji: string;
  min: number;
  color: string;
}

export const LEVEL_BANDS: LevelBand[] = [
  { id: "debutant", label: "Débutant", emoji: "🟢", min: 0, color: "var(--success)" },
  { id: "progression", label: "En progression", emoji: "🟡", min: 400, color: "var(--warning)" },
  { id: "operationnel", label: "Opérationnel", emoji: "🔵", min: 1200, color: "var(--info)" },
  { id: "avance", label: "Avancé", emoji: "🟣", min: 2600, color: "#7d5ba6" },
  { id: "expert", label: "Expert pédagogique", emoji: "🔴", min: 4500, color: "var(--danger)" },
];

export function bandForXp(xp: number): LevelBand {
  let band = LEVEL_BANDS[0];
  for (const b of LEVEL_BANDS) if (xp >= b.min) band = b;
  return band;
}

export function nextBand(xp: number): LevelBand | null {
  return LEVEL_BANDS.find((b) => b.min > xp) ?? null;
}

export function todayKey(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

function addDays(days: number, from: Date = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() + Math.round(days));
  return todayKey(d);
}

/* -------------------------------------------------------------------------- */
/* Reducer                                                                     */
/* -------------------------------------------------------------------------- */

type Action =
  | { type: "hydrate"; state: ProgressState }
  | { type: "profile"; patch: Partial<ProfileState> }
  | { type: "settings"; patch: Partial<Settings> }
  | { type: "visit-lesson"; lessonId: string }
  | { type: "complete-lesson"; lessonId: string }
  | { type: "uncomplete-lesson"; lessonId: string }
  | { type: "answer"; questionId: string; correct: boolean; skill?: SkillId; kind?: "quiz" | "term" }
  | { type: "review"; cardId: string; grade: 0 | 1 | 2 | 3 }
  | { type: "add-card"; cardId: string; kind: "quiz" | "term"; skill?: SkillId }
  | { type: "remove-card"; cardId: string }
  | { type: "exam"; examId: string; score: number; passScore: number }
  | { type: "scenario"; scenarioId: string; score: number; axes: Record<string, number> }
  | { type: "checklist"; listId: string; itemId: string; value: boolean }
  | { type: "checklist-reset"; listId: string }
  | { type: "note"; noteId: string; value: string }
  | { type: "exercise"; exerciseId: string; fieldId: string; value: string }
  | { type: "favorite"; id: string }
  | { type: "contact-add"; contact: Contact }
  | { type: "contact-update"; id: string; patch: Partial<Contact> }
  | { type: "contact-delete"; id: string }
  | { type: "award-badges"; badges: string[] }
  | { type: "import"; state: ProgressState }
  | { type: "reset" };

function touchStreak(state: ProgressState): ProgressState["streak"] {
  const today = todayKey();
  const { lastDay, current, longest } = state.streak;
  if (lastDay === today) return state.streak;
  const yesterday = addDays(-1);
  const next = lastDay === yesterday ? current + 1 : 1;
  return { current: next, longest: Math.max(longest, next), lastDay: today };
}

function reducer(state: ProgressState, action: Action): ProgressState {
  switch (action.type) {
    case "hydrate":
    case "import":
      return action.state;

    case "reset":
      return createInitialState();

    case "profile":
      return { ...state, profile: { ...state.profile, ...action.patch } };

    case "settings":
      return { ...state, settings: { ...state.settings, ...action.patch } };

    case "visit-lesson": {
      const prev = state.lessons[action.lessonId] ?? { completed: false, visits: 0 };
      return {
        ...state,
        lessons: { ...state.lessons, [action.lessonId]: { ...prev, visits: prev.visits + 1 } },
        streak: touchStreak(state),
      };
    }

    case "complete-lesson": {
      const prev = state.lessons[action.lessonId] ?? { completed: false, visits: 1 };
      if (prev.completed) return state;
      return {
        ...state,
        xp: state.xp + XP_RULES.lesson,
        lessons: {
          ...state.lessons,
          [action.lessonId]: { ...prev, completed: true, completedAt: new Date().toISOString() },
        },
        streak: touchStreak(state),
      };
    }

    case "uncomplete-lesson": {
      const prev = state.lessons[action.lessonId];
      if (!prev?.completed) return state;
      return {
        ...state,
        xp: Math.max(0, state.xp - XP_RULES.lesson),
        lessons: {
          ...state.lessons,
          [action.lessonId]: { ...prev, completed: false, completedAt: undefined },
        },
      };
    }

    case "answer": {
      const prev = state.answers[action.questionId];
      const isFirst = !prev;
      const rec: AnswerRecord = {
        correct: (prev?.correct ?? 0) + (action.correct ? 1 : 0),
        wrong: (prev?.wrong ?? 0) + (action.correct ? 0 : 1),
        lastAt: new Date().toISOString(),
        firstTryCorrect: isFirst ? action.correct : prev?.firstTryCorrect,
      };
      let xp = state.xp;
      if (action.correct) xp += isFirst ? XP_RULES.quizFirstTry : XP_RULES.quizCorrect;

      // Une erreur programme automatiquement une révision ; une réussite
      // sur une carte déjà programmée est traitée par l'action « review ».
      const srs = { ...state.srs };
      if (!action.correct && !srs[action.questionId]) {
        srs[action.questionId] = {
          id: action.questionId,
          kind: action.kind ?? "quiz",
          skill: action.skill,
          interval: 0,
          ease: 2.3,
          reps: 0,
          lapses: 1,
          due: todayKey(),
          addedAt: new Date().toISOString(),
        };
      } else if (!action.correct && srs[action.questionId]) {
        const c = srs[action.questionId];
        srs[action.questionId] = {
          ...c,
          interval: 0,
          ease: Math.max(1.3, c.ease - 0.2),
          lapses: c.lapses + 1,
          due: todayKey(),
        };
      }

      return { ...state, xp, answers: { ...state.answers, [action.questionId]: rec }, srs, streak: touchStreak(state) };
    }

    case "add-card": {
      if (state.srs[action.cardId]) return state;
      return {
        ...state,
        srs: {
          ...state.srs,
          [action.cardId]: {
            id: action.cardId,
            kind: action.kind,
            skill: action.skill,
            interval: 0,
            ease: 2.5,
            reps: 0,
            lapses: 0,
            due: todayKey(),
            addedAt: new Date().toISOString(),
          },
        },
      };
    }

    case "remove-card": {
      const srs = { ...state.srs };
      delete srs[action.cardId];
      return { ...state, srs };
    }

    case "review": {
      const card = state.srs[action.cardId];
      if (!card) return state;
      // Grades : 0 = raté, 1 = difficile, 2 = correct, 3 = facile
      let { interval, ease, reps, lapses } = card;
      if (action.grade === 0) {
        interval = 0;
        reps = 0;
        lapses += 1;
        ease = Math.max(1.3, ease - 0.2);
      } else {
        reps += 1;
        ease = Math.min(2.8, Math.max(1.3, ease + (action.grade === 3 ? 0.12 : action.grade === 2 ? 0 : -0.15)));
        if (reps === 1) interval = 1;
        else if (reps === 2) interval = 3;
        else interval = Math.round(Math.max(1, interval) * ease);
      }
      const due = addDays(action.grade === 0 ? 0 : interval);
      const srs = { ...state.srs, [action.cardId]: { ...card, interval, ease, reps, lapses, due } };
      // Une carte maîtrisée durablement sort du paquet.
      if (action.grade >= 2 && interval >= 30) delete srs[action.cardId];
      return { ...state, srs, xp: state.xp + XP_RULES.reviewDone, streak: touchStreak(state) };
    }

    case "exam": {
      const prev = state.exams[action.examId];
      const passed = action.score >= action.passScore;
      const rec: ExamRecord = {
        attempts: (prev?.attempts ?? 0) + 1,
        best: Math.max(prev?.best ?? 0, action.score),
        lastScore: action.score,
        lastAt: new Date().toISOString(),
        passed: (prev?.passed ?? false) || passed,
      };
      const gainedXp = passed && !prev?.passed ? XP_RULES.examPassed : 10;
      return { ...state, exams: { ...state.exams, [action.examId]: rec }, xp: state.xp + gainedXp, streak: touchStreak(state) };
    }

    case "scenario": {
      const prev = state.scenarios[action.scenarioId];
      const rec: ScenarioRecord = {
        attempts: (prev?.attempts ?? 0) + 1,
        best: Math.max(prev?.best ?? 0, action.score),
        lastAt: new Date().toISOString(),
        axes: action.axes,
      };
      const gainedXp = prev ? Math.round(XP_RULES.scenario / 3) : XP_RULES.scenario;
      return { ...state, scenarios: { ...state.scenarios, [action.scenarioId]: rec }, xp: state.xp + gainedXp, streak: touchStreak(state) };
    }

    case "checklist": {
      const list = { ...(state.checklists[action.listId] ?? {}) };
      list[action.itemId] = action.value;
      return { ...state, checklists: { ...state.checklists, [action.listId]: list } };
    }

    case "checklist-reset": {
      const checklists = { ...state.checklists };
      delete checklists[action.listId];
      return { ...state, checklists };
    }

    case "note":
      return { ...state, notes: { ...state.notes, [action.noteId]: action.value } };

    case "exercise": {
      const ex = { ...(state.exercises[action.exerciseId] ?? {}) };
      ex[action.fieldId] = action.value;
      return { ...state, exercises: { ...state.exercises, [action.exerciseId]: ex } };
    }

    case "favorite": {
      const has = state.favorites.includes(action.id);
      return {
        ...state,
        favorites: has ? state.favorites.filter((f) => f !== action.id) : [...state.favorites, action.id],
      };
    }

    case "contact-add":
      return { ...state, contacts: [action.contact, ...state.contacts] };

    case "contact-update":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.id ? { ...c, ...action.patch, updatedAt: new Date().toISOString() } : c,
        ),
      };

    case "contact-delete":
      return { ...state, contacts: state.contacts.filter((c) => c.id !== action.id) };

    case "award-badges": {
      const fresh = action.badges.filter((b) => !state.badges.includes(b));
      if (fresh.length === 0) return state;
      return { ...state, badges: [...state.badges, ...fresh] };
    }

    default:
      return state;
  }
}

/* -------------------------------------------------------------------------- */
/* Contexte                                                                    */
/* -------------------------------------------------------------------------- */

interface ProgressContextValue {
  state: ProgressState;
  hydrated: boolean;
  dispatch: (a: Action) => void;
  /* Raccourcis */
  completeLesson: (id: string) => void;
  uncompleteLesson: (id: string) => void;
  visitLesson: (id: string) => void;
  answer: (questionId: string, correct: boolean, skill?: SkillId) => void;
  review: (cardId: string, grade: 0 | 1 | 2 | 3) => void;
  addCard: (cardId: string, kind: "quiz" | "term", skill?: SkillId) => void;
  setSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  setNote: (id: string, value: string) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  exportJson: () => string;
  importJson: (raw: string) => boolean;
  reset: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function migrate(raw: unknown): ProgressState {
  const base = createInitialState();
  if (!raw || typeof raw !== "object") return base;
  const parsed = raw as Partial<ProgressState>;
  return {
    ...base,
    ...parsed,
    version: STATE_VERSION,
    profile: { ...base.profile, ...(parsed.profile ?? {}) },
    settings: { ...base.settings, ...(parsed.settings ?? {}) },
    streak: { ...base.streak, ...(parsed.streak ?? {}) },
    lessons: parsed.lessons ?? {},
    answers: parsed.answers ?? {},
    srs: parsed.srs ?? {},
    exams: parsed.exams ?? {},
    scenarios: parsed.scenarios ?? {},
    checklists: parsed.checklists ?? {},
    notes: parsed.notes ?? {},
    exercises: parsed.exercises ?? {},
    contacts: parsed.contacts ?? [],
    favorites: parsed.favorites ?? [],
    badges: parsed.badges ?? [],
    xp: typeof parsed.xp === "number" ? parsed.xp : 0,
  };
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);
  const [hydrated, setHydrated] = useReducer(() => true, false);

  // Chargement depuis le stockage local (client uniquement).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", state: migrate(JSON.parse(raw)) });
    } catch {
      /* stockage indisponible : l'application fonctionne en mémoire. */
    }
    setHydrated();
  }, []);

  // Sauvegarde.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* quota dépassé ou mode privé : on ignore silencieusement. */
    }
  }, [state, hydrated]);

  // Thème + confort de lecture appliqués au document.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = state.settings.theme === "dark" || (state.settings.theme === "system" && prefersDark);
    root.classList.toggle("dark", dark);
    root.dataset.reading = state.settings.reading;
  }, [state.settings.theme, state.settings.reading]);

  const value = useMemo<ProgressContextValue>(() => {
    const setSetting = <K extends keyof Settings>(key: K, v: Settings[K]) =>
      dispatch({ type: "settings", patch: { [key]: v } as Partial<Settings> });

    return {
      state,
      hydrated,
      dispatch,
      completeLesson: (id) => dispatch({ type: "complete-lesson", lessonId: id }),
      uncompleteLesson: (id) => dispatch({ type: "uncomplete-lesson", lessonId: id }),
      visitLesson: (id) => dispatch({ type: "visit-lesson", lessonId: id }),
      answer: (questionId, correct, skill) => dispatch({ type: "answer", questionId, correct, skill }),
      review: (cardId, grade) => dispatch({ type: "review", cardId, grade }),
      addCard: (cardId, kind, skill) => dispatch({ type: "add-card", cardId, kind, skill }),
      setSetting,
      setNote: (id, v) => dispatch({ type: "note", noteId: id, value: v }),
      toggleFavorite: (id) => dispatch({ type: "favorite", id }),
      isFavorite: (id) => state.favorites.includes(id),
      exportJson: () => JSON.stringify(state, null, 2),
      importJson: (raw) => {
        try {
          dispatch({ type: "import", state: migrate(JSON.parse(raw)) });
          return true;
        } catch {
          return false;
        }
      },
      reset: () => dispatch({ type: "reset" }),
    };
  }, [state, hydrated]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress doit être utilisé dans <ProgressProvider>.");
  return ctx;
}
