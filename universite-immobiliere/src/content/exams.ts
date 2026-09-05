import type { Exam } from "@/lib/types";

export const EXAMS: Exam[] = [
  {
    id: "exam-socle",
    title: "Examen — Cycle 1 : le socle",
    description:
      "Métier, vocabulaire, surfaces, propriété, copropriété, cadre juridique et lecture du marché. Le contrôle des fondations.",
    moduleIds: ["decouverte", "fondamentaux", "juridique", "marche"],
    questionCount: 20,
    passScore: 70,
    timeLimit: 30,
  },
  {
    id: "exam-conquete",
    title: "Examen — Cycle 2 : conquérir des mandats",
    description:
      "Estimation, prospection, découverte client et prise de mandat. La partie la plus décisive des six premiers mois.",
    moduleIds: ["estimation", "prospection", "decouverte-client", "mandat"],
    questionCount: 20,
    passScore: 70,
    timeLimit: 30,
  },
  {
    id: "exam-vendre",
    title: "Examen — Cycle 3 : vendre",
    description:
      "Commercialisation, annonce, photographie, visites, acquéreur et négociation.",
    moduleIds: ["commercialisation", "annonce", "photo", "visites", "acquereur", "negociation"],
    questionCount: 20,
    passScore: 70,
    timeLimit: 30,
  },
  {
    id: "exam-securiser",
    title: "Examen — Cycle 4 : sécuriser la transaction",
    description:
      "Financement, notaire, technique du bâtiment, urbanisme, copropriété approfondie et fiscalité.",
    moduleIds: ["financement", "transaction", "technique", "urbanisme", "copropriete", "fiscalite"],
    questionCount: 20,
    passScore: 70,
    timeLimit: 30,
  },
  {
    id: "exam-durer",
    title: "Examen — Cycle 5 : construire une activité",
    description:
      "Psychologie commerciale, personal branding, organisation, portefeuille, IA responsable et excellence.",
    moduleIds: ["psychologie", "branding", "organisation", "crm", "ia", "excellence"],
    questionCount: 16,
    passScore: 70,
    timeLimit: 25,
  },
  {
    id: "exam-final",
    title: "Certification interne — Conseiller immobilier",
    description:
      "Examen final couvrant l'ensemble du parcours. Il valide une progression pédagogique, et non une qualification professionnelle réglementée.",
    moduleIds: [
      "decouverte", "fondamentaux", "juridique", "marche", "estimation", "prospection",
      "decouverte-client", "mandat", "commercialisation", "annonce", "photo", "visites",
      "acquereur", "negociation", "financement", "transaction", "technique", "urbanisme",
      "copropriete", "fiscalite", "psychologie", "branding", "organisation", "crm", "ia", "excellence",
    ],
    questionCount: 40,
    passScore: 75,
    timeLimit: 60,
    final: true,
  },
  {
    id: "exam-expert",
    title: "Mode expert — Épreuve avancée",
    description:
      "Questions les plus difficiles du parcours, tirées de l'ensemble des modules. Débloqué après la certification interne.",
    moduleIds: [
      "juridique", "estimation", "negociation", "transaction", "technique", "urbanisme",
      "copropriete", "fiscalite", "financement",
    ],
    questionCount: 25,
    passScore: 80,
    timeLimit: 40,
    expertOnly: true,
  },
];

export const EXAM_MAP: Record<string, Exam> = Object.fromEntries(EXAMS.map((e) => [e.id, e]));
