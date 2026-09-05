import { ALL_LESSONS, ALL_QUESTIONS, MODULES } from "@/content";
import { GLOSSARY, normalize, searchGlossary } from "@/content/glossary";
import { SCENARIOS } from "@/content/scenarios";
import { CHECKLISTS } from "@/content/checklists";
import { CALCULATORS } from "@/content/calculators";
import { FIELD_CARDS } from "@/content/field-cards";
import { SKILLS } from "./skills";
import { sampleQuestions } from "./sampling";
import type { GlossaryTerm, Lesson, QuizQuestion, Scenario } from "./types";

export interface CoachLink {
  label: string;
  href: string;
  hint?: string;
}

export interface CoachResponse {
  /** Ce que « dit » le coach. */
  text: string;
  /** Étapes de méthode, quand la question appelle une marche à suivre. */
  steps?: string[];
  terms?: GlossaryTerm[];
  lessons?: Lesson[];
  questions?: QuizQuestion[];
  scenarios?: Scenario[];
  links?: CoachLink[];
  /** Rappel affiché en bas de la réponse. */
  note?: string;
}

/* -------------------------------------------------------------------------- */
/* Détection d'intention                                                       */
/* -------------------------------------------------------------------------- */

type Intent =
  | "quiz"
  | "explain"
  | "simulate"
  | "guide-estimation"
  | "guide-mandat"
  | "guide-visite"
  | "checklist"
  | "calculator"
  | "plan"
  | "search"
  | "help";

const PATTERNS: { intent: Intent; keys: string[] }[] = [
  { intent: "quiz", keys: ["interroge", "questionne", "pose moi", "pose-moi", "quiz", "teste moi", "teste-moi", "questions sur", "fais moi reviser", "entraine moi"] },
  { intent: "simulate", keys: ["simule", "simulation", "joue le role", "fais moi passer", "entretien", "mise en situation", "scenario"] },
  { intent: "guide-estimation", keys: ["estimer", "estimation d", "je dois estimer", "guide moi pour estimer", "comment estimer"] },
  { intent: "guide-mandat", keys: ["prise de mandat", "obtenir un mandat", "signer un mandat", "prendre un mandat"] },
  { intent: "guide-visite", keys: ["faire visiter", "conduire une visite", "preparer une visite"] },
  { intent: "checklist", keys: ["checklist", "check list", "liste de controle", "ne rien oublier", "que verifier"] },
  { intent: "calculator", keys: ["calcul", "calculer", "mensualite", "combien ca fait", "rendement", "frais de notaire", "prix au m2"] },
  { intent: "plan", keys: ["par ou commencer", "par quoi commencer", "que dois je apprendre", "plan de travail", "programme", "roadmap", "parcours"] },
  { intent: "explain", keys: ["explique", "c est quoi", "qu est ce que", "definition", "signifie", "comprendre"] },
];

function detectIntent(input: string): Intent {
  const q = normalize(input);
  for (const p of PATTERNS) {
    if (p.keys.some((k) => q.includes(normalize(k)))) return p.intent;
  }
  if (q.length < 4) return "help";
  return "search";
}

/** Extrait le sujet de la question, en retirant les formules d'appel. */
function extractSubject(input: string): string {
  return normalize(input)
    .replace(
      /\b(explique moi|explique|interroge moi sur|interroge moi|pose moi \d+ questions sur|pose moi des questions sur|questionne moi sur|fais moi|simule|simulation de|je dois|comment|c est quoi|qu est ce que|le|la|les|un|une|des|du|de|d|sur|pour|a|au|aux|moi|me|mon|ma|mes|s il te plait|stp)\b/g,
      " ",
    )
    .replace(/\s+/g, " ")
    .trim();
}

/* -------------------------------------------------------------------------- */
/* Recherche de contenu                                                        */
/* -------------------------------------------------------------------------- */

function findLessons(subject: string, limit = 3): Lesson[] {
  if (!subject) return [];
  const tokens = subject.split(" ").filter((t) => t.length > 2);
  if (tokens.length === 0) return [];
  return ALL_LESSONS.map((l) => {
    const hay = normalize(
      `${l.title} ${l.summary} ${l.objectives.join(" ")} ${l.keyPoints.join(" ")} ${l.skills.join(" ")}`,
    );
    const title = normalize(l.title);
    let score = 0;
    for (const t of tokens) {
      if (title.includes(t)) score += 6;
      else if (hay.includes(t)) score += 2;
    }
    return { l, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.l);
}

function findQuestions(subject: string, count: number): QuizQuestion[] {
  if (!subject) return sampleQuestions(ALL_QUESTIONS, count, Date.now() % 100000);
  const tokens = subject.split(" ").filter((t) => t.length > 2);
  const scored = ALL_QUESTIONS.map((q) => {
    const hay = normalize(`${q.question} ${q.explanation} ${q.topic ?? ""} ${q.skill}`);
    let score = 0;
    for (const t of tokens) if (hay.includes(t)) score += 1;
    return { q, score };
  }).filter((x) => x.score > 0);

  if (scored.length === 0) return [];
  const pool = scored.sort((a, b) => b.score - a.score).map((x) => x.q);
  return sampleQuestions(pool, Math.min(count, pool.length), Date.now() % 100000);
}

function findScenarios(subject: string): Scenario[] {
  if (!subject) return SCENARIOS.slice(0, 3);
  const tokens = subject.split(" ").filter((t) => t.length > 2);
  const matched = SCENARIOS.filter((s) => {
    const hay = normalize(`${s.title} ${s.pitch} ${s.skills.join(" ")} ${s.briefing.join(" ")}`);
    return tokens.some((t) => hay.includes(t));
  });
  return matched.length > 0 ? matched : SCENARIOS.slice(0, 3);
}

/* -------------------------------------------------------------------------- */
/* Réponses                                                                    */
/* -------------------------------------------------------------------------- */

const HELP: CoachResponse = {
  text:
    "Je suis un coach pédagogique intégré à la plateforme. Je ne réponds pas librement : je vous oriente vers le contenu vérifié du parcours, je vous interroge, et je vous fais travailler. C'est volontaire — sur des questions juridiques ou fiscales, une réponse improvisée serait dangereuse.",
  steps: [
    "« Explique-moi le compromis de vente » — je vous donne la définition, la leçon et les sources.",
    "« Interroge-moi sur les diagnostics » — je génère un quiz ciblé.",
    "« Fais-moi simuler une prise de mandat » — je lance la mise en situation adaptée.",
    "« Je dois estimer un appartement, guide-moi » — je déroule la méthode étape par étape.",
    "« Par où commencer ? » — je vous propose la prochaine étape de votre parcours.",
  ],
  note:
    "Pour toute question réglementaire, la source officielle prime toujours sur ce que dit cette plateforme.",
};

function respondQuiz(subject: string): CoachResponse {
  const count = 8;
  const questions = findQuestions(subject, count);
  if (questions.length === 0) {
    return {
      text: `Je n'ai pas de questions sur « ${subject} » dans le parcours. Essayez un autre mot, ou lancez un quiz par compétence.`,
      links: [{ label: "Choisir une compétence", href: "/quiz" }],
    };
  }
  return {
    text: `Voici ${questions.length} questions${subject ? ` sur « ${subject} »` : ""}. Répondez à voix haute avant de choisir : c'est ce qui fait la différence entre reconnaître et savoir.`,
    questions,
    links: [{ label: "Quiz complet par compétence", href: "/quiz" }],
  };
}

function respondExplain(subject: string): CoachResponse {
  const terms = subject ? searchGlossary(subject, 3) : [];
  const lessons = findLessons(subject, 3);

  if (terms.length === 0 && lessons.length === 0) {
    return {
      text: `Je ne trouve pas « ${subject} » dans le parcours. Reformulez avec un autre mot, ou cherchez dans le glossaire — il contient ${GLOSSARY.length} termes.`,
      links: [{ label: "Ouvrir le glossaire", href: "/glossaire" }],
    };
  }

  return {
    text:
      terms.length > 0
        ? `Voici la définition de « ${terms[0].term} », d'abord en clair puis dans la formulation professionnelle. Je vous mets aussi les leçons où la notion est travaillée en situation.`
        : `Je n'ai pas de définition exacte, mais ces leçons traitent le sujet.`,
    terms,
    lessons,
    note:
      terms.some((t) => t.legalSensitive)
        ? "Cette notion dépend d'une réglementation susceptible d'évoluer : vérifiez auprès de la source officielle avant d'en parler à un client."
        : undefined,
  };
}

function respondSimulate(subject: string): CoachResponse {
  const scenarios = findScenarios(subject);
  return {
    text: `Voici ${scenarios.length > 1 ? "les mises en situation" : "la mise en situation"} qui correspond${scenarios.length > 1 ? "ent" : ""} le mieux. Formulez votre réponse à voix haute avant de choisir une option : sinon vous vous entraînez à reconnaître, pas à répondre.`,
    scenarios,
    links: [{ label: "Toutes les simulations", href: "/simulations" }],
  };
}

function respondGuideEstimation(): CoachResponse {
  return {
    text:
      "Je vous déroule la méthode. Ne sautez pas d'étape, et surtout ne calculez pas de prix avant l'étape 4 : c'est l'erreur la plus fréquente.",
    steps: [
      "1. Avant d'entrer : consultez les ventes réelles de la rue et du quartier, le cadastre, les annonces concurrentes, et l'urbanisme s'il s'agit d'une maison. Trente minutes.",
      "2. Asseyez-vous et écoutez le projet : motivation, échéance, situation juridique, historique, priorité entre prix, délai et tranquillité.",
      "3. Relevez le bien méthodiquement avec la checklist estimation, et photographiez la technique — tableau électrique, chaudière, menuiseries, désordres.",
      "4. Cherchez trois à cinq ventes signées comparables : même secteur, même typologie, surface à ±15 %, moins de douze mois.",
      "5. Ajustez chaque comparable pour le ramener aux caractéristiques du bien : étage, extérieur, état, DPE, stationnement, charges.",
      "6. Construisez une fourchette à partir de la dispersion des résultats ajustés. Si elle est très large, vos comparables sont mauvais : reprenez.",
      "7. Présentez en cinq temps — projet, bien, comparables, ajustements, fourchette et trois scénarios de prix. Ne donnez jamais le chiffre en premier.",
    ],
    links: [
      { label: "Checklist estimation", href: "/checklists", hint: "À dérouler pendant la visite" },
      { label: "Calculatrice prix au m² et surface pondérée", href: "/calculatrices" },
      { label: "Module Estimation", href: "/cours/estimation" },
      { label: "Simulation : présenter une estimation basse", href: "/simulations/sc-estimation-basse" },
    ],
    note: "Un avis de valeur d'agence n'est pas une expertise. Employez le mot juste devant un client.",
  };
}

function respondGuideMandat(): CoachResponse {
  return {
    text:
      "La prise de mandat ne se gagne pas au moment de la signature : elle se gagne à la présentation de l'estimation et du plan d'action. Voici la marche à suivre.",
    steps: [
      "1. Vérifiez d'abord qui doit signer : tous les titulaires de droits, pas seulement celui qui vous reçoit.",
      "2. Présentez l'estimation en cinq temps, en terminant par trois scénarios de prix chiffrés.",
      "3. Présentez votre plan d'action écrit : douze engagements datés et vérifiables, sur une page.",
      "4. Présentez spontanément les modalités de sortie du mandat. C'est ce qui réduit le risque perçu, donc ce qui obtient l'exclusivité.",
      "5. Annoncez vos honoraires clairement, puis taisez-vous. N'ajoutez jamais « mais c'est négociable ».",
      "6. Fixez dès la signature la date du point d'étape à trente jours.",
      "7. Vérifiez le mandat point par point avant de le faire signer : identités, désignation, durée, prix, honoraires, numéro de registre, date, signatures.",
    ],
    links: [
      { label: "Checklist vérification du mandat", href: "/checklists" },
      { label: "Module Prise de mandat", href: "/cours/mandat" },
      { label: "Simulation : le vendeur veut surévaluer", href: "/simulations/sc-surevaluation" },
      { label: "Fiche terrain : objections de prise de mandat", href: "/mode-terrain" },
    ],
  };
}

function respondGuideVisite(): CoachResponse {
  return {
    text: "Une visite se prépare autant qu'elle se conduit. Voici la séquence complète.",
    steps: [
      "1. Qualifiez le candidat en six questions avant d'organiser quoi que ce soit — budget, financement, délai, critères, biens déjà refusés.",
      "2. Prévenez le vendeur 24 heures à l'avance, rappelez les consignes et demandez son absence.",
      "3. Prévenez un proche du lieu et de l'heure. Arrivez dix minutes avant : ouvrez, aérez, allumez.",
      "4. Donnez le contexte dehors, puis taisez-vous à l'entrée. Les premières secondes sont émotionnelles.",
      "5. Commencez par la pièce forte, suivez un parcours logique, terminez en y revenant.",
      "6. Montrez les points faibles brièvement et honnêtement, en les contextualisant.",
      "7. Laissez un temps libre en fin de visite : c'est souvent là que la décision se prend.",
      "8. Débriefez sur place, rappelez sous 24 heures, et transmettez au vendeur les objections mot pour mot.",
    ],
    links: [
      { label: "Checklist visite", href: "/checklists" },
      { label: "Module Visites", href: "/cours/visites" },
      { label: "Simulation : une visite se passe mal", href: "/simulations/sc-visite-ratee" },
    ],
  };
}

function respondChecklist(subject: string): CoachResponse {
  const matched = subject
    ? CHECKLISTS.filter((c) => normalize(`${c.title} ${c.purpose} ${c.category}`).includes(subject.split(" ")[0]))
    : [];
  const list = matched.length > 0 ? matched : CHECKLISTS;
  return {
    text: "Voici les listes de contrôle disponibles. Elles sont cochables et vos cases sont conservées sur cet appareil.",
    links: list.map((c) => ({ label: c.title, href: "/checklists", hint: c.purpose })),
  };
}

function respondCalculator(subject: string): CoachResponse {
  const matched = subject
    ? CALCULATORS.filter((c) => normalize(`${c.title} ${c.purpose} ${c.category}`).includes(subject.split(" ")[0]))
    : [];
  const list = matched.length > 0 ? matched : CALCULATORS.slice(0, 5);
  return {
    text: "Chaque calculatrice affiche sa formule et l'explique. L'objectif n'est pas de vous donner un chiffre, c'est que vous sachiez d'où il vient.",
    links: list.map((c) => ({ label: c.title, href: "/calculatrices", hint: c.purpose })),
    note: "Aucun de ces outils ne remplace un notaire, une banque, un courtier ou un expert-comptable.",
  };
}

function respondPlan(nextLessonHref: string | null, nextLessonTitle: string | null): CoachResponse {
  return {
    text: nextLessonTitle
      ? `Votre prochaine étape est « ${nextLessonTitle} ». Le parcours est conçu dans l'ordre : chaque module s'appuie sur les précédents.`
      : "Vous avez terminé les leçons disponibles. Consolidez maintenant par la révision espacée, les simulations et l'examen de certification.",
    steps: [
      "Chaque jour : une leçon, son quiz, et la séance de révision si des cartes sont dues.",
      "Chaque semaine : une simulation client et une action de terrain concrète.",
      "À la fin de chaque cycle : l'examen correspondant.",
    ],
    links: [
      ...(nextLessonHref ? [{ label: "Reprendre le parcours", href: nextLessonHref }] : []),
      { label: "Programmes guidés 30 / 90 / 180 jours", href: "/programme" },
      { label: "Plan de carrière en dix étapes", href: "/plan-de-carriere" },
      { label: "Votre progression détaillée", href: "/progression" },
    ],
  };
}

function respondSearch(subject: string): CoachResponse {
  const terms = searchGlossary(subject, 3);
  const lessons = findLessons(subject, 3);
  const questions = findQuestions(subject, 4);
  const skill = SKILLS.find((s) => normalize(s.label).includes(subject) || subject.includes(normalize(s.short)));
  const mod = MODULES.find((m) => normalize(m.title).includes(subject));
  const card = FIELD_CARDS.find((c) => normalize(`${c.title} ${c.category}`).includes(subject.split(" ")[0]));

  if (terms.length === 0 && lessons.length === 0 && !skill && !mod) {
    return {
      text: `Je n'ai rien trouvé sur « ${subject} » dans le parcours. Je préfère vous le dire plutôt que d'inventer une réponse. Essayez un autre mot, ou parcourez le glossaire.`,
      links: [
        { label: "Glossaire", href: "/glossaire" },
        { label: "Catalogue des cours", href: "/cours" },
      ],
    };
  }

  return {
    text: `Voici ce que le parcours contient sur « ${subject} ».`,
    terms,
    lessons,
    questions: questions.slice(0, 3),
    links: [
      ...(mod ? [{ label: `Module ${mod.title}`, href: `/cours/${mod.id}` }] : []),
      ...(skill ? [{ label: `Quiz — ${skill.label}`, href: `/quiz?competence=${skill.id}` }] : []),
      ...(card ? [{ label: `Fiche terrain : ${card.title}`, href: "/mode-terrain" }] : []),
    ],
  };
}

/* -------------------------------------------------------------------------- */

export function coachRespond(
  input: string,
  context: { nextLessonHref: string | null; nextLessonTitle: string | null },
): CoachResponse {
  const trimmed = input.trim();
  if (!trimmed) return HELP;

  const intent = detectIntent(trimmed);
  const subject = extractSubject(trimmed);

  switch (intent) {
    case "quiz":
      return respondQuiz(subject);
    case "explain":
      return respondExplain(subject);
    case "simulate":
      return respondSimulate(subject);
    case "guide-estimation":
      return respondGuideEstimation();
    case "guide-mandat":
      return respondGuideMandat();
    case "guide-visite":
      return respondGuideVisite();
    case "checklist":
      return respondChecklist(subject);
    case "calculator":
      return respondCalculator(subject);
    case "plan":
      return respondPlan(context.nextLessonHref, context.nextLessonTitle);
    case "help":
      return HELP;
    default:
      return respondSearch(subject);
  }
}

export const COACH_SUGGESTIONS = [
  "Explique-moi le compromis de vente comme si j'avais 15 ans",
  "Interroge-moi sur les diagnostics",
  "Pose-moi 20 questions sur la copropriété",
  "Fais-moi simuler une prise de mandat",
  "Je dois estimer un appartement, guide-moi",
  "Comment conduire une visite ?",
  "Par où commencer ?",
  "C'est quoi les tantièmes ?",
  "Calculer une mensualité",
  "Que vérifier avant de signer un mandat ?",
];
