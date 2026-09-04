/**
 * Modèle de données de l'Université Immobilière.
 *
 * Tout le contenu pédagogique est structuré (et non écrit en HTML libre) afin de
 * pouvoir être : parcouru, recherché, transformé en quiz, en fiches de révision,
 * en cartes de répétition espacée, et mis à jour lorsqu'une règle change.
 */

export type Difficulty = "debutant" | "intermediaire" | "avance";

/** Compétences suivies dans le tableau de bord et la page Progression. */
export type SkillId =
  | "metier"
  | "fondamentaux"
  | "juridique"
  | "marche"
  | "estimation"
  | "prospection"
  | "decouverte"
  | "mandat"
  | "commercialisation"
  | "marketing"
  | "visite"
  | "acquereur"
  | "negociation"
  | "financement"
  | "transaction"
  | "technique"
  | "urbanisme"
  | "copropriete"
  | "fiscalite"
  | "psychologie"
  | "branding"
  | "organisation"
  | "crm"
  | "ia"
  | "excellence";

export interface Source {
  /** Nom lisible de la source (ex. « Service-Public.fr »). */
  label: string;
  url: string;
  /** Précision de ce que la source permet de vérifier. */
  note?: string;
}

/* -------------------------------------------------------------------------- */
/* Blocs de contenu                                                            */
/* -------------------------------------------------------------------------- */

export type CalloutVariant = "info" | "tip" | "warning" | "legal" | "danger" | "quote";

export type LessonBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | {
      type: "definition";
      term: string;
      /** Explication « comme si vous n'y connaissiez rien ». */
      simple: string;
      /** Formulation professionnelle, celle que vous emploierez devant un client. */
      pro: string;
      /** Pourquoi cette notion existe / à quoi elle sert concrètement. */
      why?: string;
    }
  | { type: "list"; items: string[]; ordered?: boolean; title?: string }
  | { type: "callout"; variant: CalloutVariant; title?: string; text: string }
  | { type: "example"; title?: string; text: string }
  | { type: "table"; title?: string; head: string[]; rows: string[][]; note?: string }
  | { type: "steps"; title?: string; items: { title: string; text: string }[] }
  | { type: "dialogue"; title?: string; lines: { speaker: string; text: string; tone?: "bad" | "good" }[] }
  | {
      type: "compare";
      title?: string;
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
    }
  | { type: "objection"; objection: string; understand: string; answers: string[]; avoid?: string }
  | { type: "terms"; title?: string; ids: string[] };

/* -------------------------------------------------------------------------- */
/* Évaluation                                                                  */
/* -------------------------------------------------------------------------- */

export interface QuizQuestion {
  id: string;
  type: "qcm" | "vraifaux";
  question: string;
  /** Pour les QCM. Pour vrai/faux, laisser vide : « Vrai » / « Faux » sont ajoutés. */
  options?: string[];
  /** Index de la bonne réponse dans `options` (ou 0 = Vrai, 1 = Faux). */
  answer: number;
  explanation: string;
  skill: SkillId;
  difficulty?: Difficulty;
  /** Étiquette libre pour cibler une révision (« diagnostics », « mandat »…). */
  topic?: string;
}

export interface OpenQuestion {
  id: string;
  question: string;
  /** Éléments attendus : sert de grille d'auto-correction honnête. */
  expected: string[];
  modelAnswer: string;
  skill: SkillId;
}

export interface CaseStudy {
  title: string;
  context: string;
  /** Ce que l'apprenant doit produire / répondre. */
  tasks: string[];
  /** Correction détaillée, révélée à la demande. */
  correction: string[];
}

export interface Exercise {
  title: string;
  instructions: string;
  /** Champs de saisie libre, sauvegardés localement. */
  fields: { id: string; label: string; placeholder?: string; multiline?: boolean }[];
  /** Grille de correction : l'apprenant coche ce qu'il a réellement fait. */
  checklist: string[];
  modelAnswer?: string;
}

/* -------------------------------------------------------------------------- */
/* Leçons & modules                                                            */
/* -------------------------------------------------------------------------- */

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  /** Une phrase : ce que l'apprenant saura faire à la fin. */
  summary: string;
  /** Durée de lecture/travail estimée, en minutes. */
  duration: number;
  difficulty: Difficulty;
  skills: SkillId[];
  objectives: string[];
  blocks: LessonBlock[];
  /** « À retenir » : 3 à 7 points. */
  keyPoints: string[];
  /** « Erreurs à éviter ». */
  mistakes: string[];
  caseStudy?: CaseStudy;
  exercise?: Exercise;
  quiz: QuizQuestion[];
  openQuestions?: OpenQuestion[];
  sources: Source[];
  /** Vrai si le contenu dépend d'une réglementation susceptible d'évoluer. */
  legalSensitive?: boolean;
  /** Date de dernière vérification du contenu réglementaire (AAAA-MM-JJ). */
  lastVerified?: string;
}

export interface CourseModule {
  id: string;
  /** Niveau 0 à 24 du parcours. */
  level: number;
  title: string;
  subtitle: string;
  description: string;
  /** Emoji utilisé comme repère visuel léger (aucune image à charger). */
  icon: string;
  skills: SkillId[];
  /** Ce que l'apprenant sait faire à la sortie du module. */
  outcomes: string[];
  lessons: Lesson[];
  /** Modules conseillés avant celui-ci. */
  requires?: string[];
}

/* -------------------------------------------------------------------------- */
/* Glossaire                                                                   */
/* -------------------------------------------------------------------------- */

export interface GlossaryTerm {
  id: string;
  term: string;
  /** Formes alternatives pour la recherche (sigles, pluriels, synonymes). */
  aliases?: string[];
  category: string;
  simple: string;
  pro: string;
  example?: string;
  watchOut?: string;
  related?: string[];
  legalSensitive?: boolean;
  sources?: Source[];
}

/* -------------------------------------------------------------------------- */
/* Simulations                                                                 */
/* -------------------------------------------------------------------------- */

export type ScoreAxis = "pertinence" | "empathie" | "argumentation" | "decouverte" | "conclusion";

export interface ScenarioChoice {
  id: string;
  text: string;
  /** Points par axe, de -2 à +3. */
  scores: Partial<Record<ScoreAxis, number>>;
  feedback: string;
  /** Étape suivante ; absent = fin du scénario. */
  next?: string;
}

export interface ScenarioStep {
  id: string;
  /** Ce que dit / fait le client. */
  speaker: string;
  situation: string;
  /** Question posée à l'apprenant. */
  prompt: string;
  choices: ScenarioChoice[];
  /** Ce qu'un excellent conseiller ferait, révélé après le choix. */
  bestPractice: string;
}

export interface Scenario {
  id: string;
  title: string;
  pitch: string;
  level: Difficulty;
  skills: SkillId[];
  /** Contexte remis à l'apprenant avant de démarrer. */
  briefing: string[];
  steps: ScenarioStep[];
  debrief: string[];
  expertOnly?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Examens                                                                     */
/* -------------------------------------------------------------------------- */

export interface Exam {
  id: string;
  title: string;
  description: string;
  /** Modules couverts. */
  moduleIds: string[];
  /** Nombre de questions tirées du vivier. */
  questionCount: number;
  passScore: number;
  /** Minutes conseillées (indicatif, non bloquant). */
  timeLimit?: number;
  final?: boolean;
  expertOnly?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Fiches terrain & checklists                                                 */
/* -------------------------------------------------------------------------- */

export interface Checklist {
  id: string;
  title: string;
  purpose: string;
  category: "estimation" | "vendeur" | "acquereur" | "visite" | "mandat" | "transaction" | "copropriete" | "technique";
  sections: { title: string; items: { id: string; label: string; hint?: string }[] }[];
}

export interface FieldCard {
  id: string;
  title: string;
  category: string;
  /** Contenu très court, lisible en 10 secondes devant un client. */
  bullets: string[];
  /** Questions à poser mot pour mot. */
  questions?: string[];
  /** Réponses aux objections les plus fréquentes. */
  objections?: { objection: string; answer: string }[];
}

/* -------------------------------------------------------------------------- */
/* Programmes                                                                  */
/* -------------------------------------------------------------------------- */

export interface ProgramDay {
  day: number;
  title: string;
  focus: string;
  /** Références de leçons à faire ce jour-là. */
  lessonIds: string[];
  /** Actions concrètes hors écran. */
  actions: string[];
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  days: ProgramDay[];
}
