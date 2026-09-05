import type { Program } from "@/lib/types";

/**
 * Programmes guidés. Chaque jour combine des leçons de la plateforme
 * et une action concrète à réaliser hors écran : c'est cette seconde
 * partie qui transforme la connaissance en compétence.
 */
export const PROGRAMS: Program[] = [
  {
    id: "p30",
    title: "30 jours — Démarrage",
    subtitle: "Comprendre le métier et poser les fondations",
    description:
      "Un mois pour acquérir le vocabulaire, le cadre juridique et la méthode d'estimation, tout en commençant à travailler un secteur. Environ 45 minutes d'écran et une action de terrain par jour.",
    days: [
      { day: 1, title: "Découvrir le métier", focus: "Ce que fait réellement un conseiller", lessonIds: ["d1"], actions: ["Rédigez en cinq phrases votre réponse à « tu fais quoi de tes journées ? »"] },
      { day: 2, title: "Les statuts", focus: "Agent, négociateur, mandataire", lessonIds: ["d2"], actions: ["Vérifiez la mention exacte de votre statut et préparez votre phrase de présentation"] },
      { day: 3, title: "Agence ou réseau", focus: "Deux modèles économiques", lessonIds: ["d3"], actions: ["Listez les sept questions à poser à votre structure et posez-en trois"] },
      { day: 4, title: "L'annuaire du métier", focus: "Qui fait quoi", lessonIds: ["d4"], actions: ["Identifiez deux notaires et deux diagnostiqueurs de votre secteur"] },
      { day: 5, title: "Le chemin d'une vente", focus: "Quinze étapes, quatre à sept mois", lessonIds: ["d5"], actions: ["Écrivez de mémoire les quinze étapes, puis vérifiez"] },
      { day: 6, title: "Les surfaces", focus: "Habitable, Carrez, plancher, emprise", lessonIds: ["f1"], actions: ["Mesurez une pièce et calculez sa surface habitable"] },
      { day: 7, title: "Révision", focus: "Consolider la semaine 1", lessonIds: [], actions: ["Séance de révision espacée", "Quiz sur la compétence Métier"] },
      { day: 8, title: "Qui peut vendre", focus: "Propriété, démembrement, indivision", lessonIds: ["f2"], actions: ["Relisez un titre de propriété si vous en avez un sous la main"] },
      { day: 9, title: "La copropriété", focus: "Lots, tantièmes, syndic, AG", lessonIds: ["f3"], actions: ["Procurez-vous un PV d'assemblée générale et lisez-le en entier"] },
      { day: 10, title: "Les diagnostics", focus: "À quoi sert chaque document", lessonIds: ["f4"], actions: ["Demandez à un diagnostiqueur de vous expliquer un DPE ligne par ligne"] },
      { day: 11, title: "Le dossier du bien", focus: "La liste de toute une carrière", lessonIds: ["f5"], actions: ["Rédigez vos deux messages types : vendeur et syndic"] },
      { day: 12, title: "La loi Hoguet", focus: "Le cadre d'exercice", lessonIds: ["j1"], actions: ["Relisez un mandat vierge de votre structure, point par point"] },
      { day: 13, title: "Les mandats", focus: "Simple, semi-exclusif, exclusif", lessonIds: ["j2"], actions: ["Repérez dans votre mandat : durée, dénonciation, clause pénale"] },
      { day: 14, title: "Révision", focus: "Consolider la semaine 2", lessonIds: [], actions: ["Examen du cycle 1 en blanc", "Quiz Fondamentaux et Juridique"] },
      { day: 15, title: "Devoir de conseil", focus: "Information, conseil, responsabilité", lessonIds: ["j3"], actions: ["Rédigez votre modèle de courriel récapitulatif"] },
      { day: 16, title: "La chaîne contractuelle", focus: "De l'offre à l'acte", lessonIds: ["j4"], actions: ["Demandez à un notaire de vous expliquer un compromis"] },
      { day: 17, title: "Données et vigilance", focus: "RGPD et anti-blanchiment", lessonIds: ["j5"], actions: ["Mettez en place votre fichier de contacts avec les trois champs obligatoires"] },
      { day: 18, title: "Prix, valeur, coût", focus: "Ce qui fait le prix", lessonIds: ["mk1"], actions: ["Consultez la base DVF sur trois rues de votre secteur"] },
      { day: 19, title: "Les facteurs de prix", focus: "Vingt facteurs hiérarchisés", lessonIds: ["mk2"], actions: ["Comparez deux annonces similaires et listez les écarts"] },
      { day: 20, title: "Taux et pouvoir d'achat", focus: "L'effet du crédit sur les prix", lessonIds: ["mk3"], actions: ["Relevez vos quatre indicateurs de marché local"] },
      { day: 21, title: "Révision", focus: "Consolider la semaine 3", lessonIds: [], actions: ["Séance de révision", "Simulation : un propriétaire veut vendre"] },
      { day: 22, title: "La méthode d'estimation", focus: "Sept étapes", lessonIds: ["es1"], actions: ["Imprimez votre trame d'estimation"] },
      { day: 23, title: "La visite d'estimation", focus: "Quarante points de relevé", lessonIds: ["es2"], actions: ["Rédigez votre trame de visite personnelle"] },
      { day: 24, title: "Comparables et ajustements", focus: "Le cœur du raisonnement", lessonIds: ["es3"], actions: ["Créez votre fichier personnel de ventes constatées"] },
      { day: 25, title: "Présenter une estimation", focus: "Cinq temps, trois scénarios", lessonIds: ["es4"], actions: ["Simulation : le vendeur trouve l'estimation trop basse"] },
      { day: 26, title: "Comprendre la prospection", focus: "Volumes et régularité", lessonIds: ["pr1"], actions: ["Écrivez votre plan de prospection sur 90 jours"] },
      { day: 27, title: "L'appel de pige", focus: "Comprendre avant de convaincre", lessonIds: ["pr2"], actions: ["Passez dix appels de pige, quel qu'en soit le résultat"] },
      { day: 28, title: "Terrain et recommandation", focus: "Travailler un secteur", lessonIds: ["pr3"], actions: ["Délimitez votre secteur et comptez les logements"] },
      { day: 29, title: "Révision générale", focus: "Consolider le mois", lessonIds: [], actions: ["Examen du cycle 1", "Séance de révision espacée"] },
      { day: 30, title: "Bilan et plan", focus: "Où en êtes-vous ?", lessonIds: [], actions: ["Relevez vos six indicateurs", "Fixez vos objectifs du mois 2"] },
    ],
  },
  {
    id: "p90",
    title: "90 jours — De zéro à opérationnel",
    subtitle: "Maîtriser le cycle complet : prospecter, estimer, prendre un mandat, vendre",
    description:
      "Le programme de 30 jours suivi de deux mois centrés sur la pratique : découverte client, prise de mandat, commercialisation, visites, négociation et transaction. Chaque semaine comporte des simulations et des actions de terrain.",
    days: [
      { day: 31, title: "Préparer un rendez-vous", focus: "La préparation invisible", lessonIds: ["dc1"], actions: ["Préparez un rendez-vous fictif sur une adresse réelle de votre secteur"] },
      { day: 35, title: "Le questionnement", focus: "Faire parler, écouter, reformuler", lessonIds: ["dc2"], actions: ["Enregistrez-vous en posant vos sept questions à voix haute"] },
      { day: 38, title: "Le suivi", focus: "Ce qui transforme un rendez-vous", lessonIds: ["dc3"], actions: ["Rédigez votre compte rendu type et votre relance à trois semaines"] },
      { day: 42, title: "Le plan d'action", focus: "Douze engagements écrits", lessonIds: ["md1"], actions: ["Rédigez votre plan d'action sur une page et imprimez-le"] },
      { day: 46, title: "Les honoraires", focus: "Annoncer et défendre", lessonIds: ["md2"], actions: ["Répétez à voix haute votre annonce d'honoraires, puis taisez-vous"] },
      { day: 50, title: "Les quinze premiers jours", focus: "Après la signature du mandat", lessonIds: ["cm1"], actions: ["Constituez votre check-list de lancement"] },
      { day: 54, title: "Piloter et rendre compte", focus: "Quatre indicateurs", lessonIds: ["cm2"], actions: ["Rédigez votre modèle de compte rendu hebdomadaire"] },
      { day: 58, title: "L'annonce", focus: "Anatomie d'une annonce efficace", lessonIds: ["an1"], actions: ["Réécrivez trois annonces existantes de votre secteur"] },
      { day: 62, title: "La photographie", focus: "Huit règles", lessonIds: ["ph1"], actions: ["Photographiez une pièce en appliquant les huit règles"] },
      { day: 66, title: "Préparer une visite", focus: "Qualifier et sécuriser", lessonIds: ["vi1"], actions: ["Appliquez la qualification en six questions à un contact réel"] },
      { day: 70, title: "Conduire une visite", focus: "Parcours, signaux, objections", lessonIds: ["vi2"], actions: ["Simulation : une visite se passe mal"] },
      { day: 74, title: "L'acquéreur", focus: "Fiche et hiérarchie des critères", lessonIds: ["ac1"], actions: ["Créez trois fiches acquéreur complètes"] },
      { day: 78, title: "La posture de négociation", focus: "Position et intérêt", lessonIds: ["ne1"], actions: ["Listez cinq leviers hors prix mobilisables sur un dossier"] },
      { day: 82, title: "Présenter une offre", focus: "L'aller-retour", lessonIds: ["ne2"], actions: ["Simulation : une offre arrive sous le prix"] },
      { day: 86, title: "Le financement", focus: "Comprendre sans se substituer", lessonIds: ["fi1"], actions: ["Rencontrez un courtier et faites-vous expliquer un plan de financement"] },
      { day: 90, title: "La transaction", focus: "De l'offre acceptée aux clés", lessonIds: ["tr1"], actions: ["Examen du cycle 3", "Bilan des 90 jours sur vos six indicateurs"] },
    ],
  },
  {
    id: "p180",
    title: "180 jours — Approfondissement",
    subtitle: "Technique, urbanisme, copropriété, fiscalité, et construction de l'activité",
    description:
      "Les trois mois suivants consolident les domaines techniques et posent les bases d'une activité durable : psychologie commerciale, visibilité locale, organisation, portefeuille, usage responsable de l'IA et excellence.",
    days: [
      { day: 95, title: "Technique du bâtiment", focus: "Enveloppe et pathologies", lessonIds: ["te1"], actions: ["Visitez un chantier avec un artisan partenaire"] },
      { day: 105, title: "Urbanisme", focus: "PLU et autorisations", lessonIds: ["ur1"], actions: ["Consultez le PLU de votre commune sur le Géoportail de l'urbanisme"] },
      { day: 115, title: "Copropriété approfondie", focus: "Analyser un dossier", lessonIds: ["co1"], actions: ["Analysez un dossier complet et rédigez une synthèse d'une page"] },
      { day: 125, title: "Fiscalité", focus: "Principes et limites", lessonIds: ["fs1"], actions: ["Rencontrez un notaire pour comprendre le calcul de plus-value"] },
      { day: 135, title: "Psychologie commerciale", focus: "La confiance", lessonIds: ["ps1"], actions: ["Simulation : le vendeur veut surévaluer"] },
      { day: 145, title: "Personal branding", focus: "Visibilité locale", lessonIds: ["br1"], actions: ["Publiez votre premier contenu utile sur votre secteur"] },
      { day: 155, title: "Organisation", focus: "Journée type et tableau de bord", lessonIds: ["or1"], actions: ["Inscrivez votre semaine type dans votre agenda pour un mois"] },
      { day: 162, title: "Portefeuille", focus: "Fiches, pipeline, relances", lessonIds: ["cr1"], actions: ["Mettez à jour toutes vos fiches avec une prochaine action datée"] },
      { day: 170, title: "IA responsable", focus: "Usages et vérification", lessonIds: ["ia1"], actions: ["Entraînez-vous à une négociation difficile en simulation"] },
      { day: 180, title: "Excellence", focus: "Les vingt comportements", lessonIds: ["ex1"], actions: ["Certification interne", "Choisissez cinq comportements à installer"] },
    ],
  },
];

export const PROGRAM_MAP: Record<string, Program> = Object.fromEntries(
  PROGRAMS.map((p) => [p.id, p]),
);
