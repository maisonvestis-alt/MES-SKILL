import type { CourseModule } from "@/lib/types";

export const moduleIa: CourseModule = {
  id: "ia",
  level: 24,
  title: "IA et outils numériques",
  subtitle: "Gagner du temps sans perdre en fiabilité",
  description:
    "L'intelligence artificielle est un accélérateur puissant et un risque réel dans un métier réglementé. Ce module donne les usages qui fonctionnent, ceux qu'il faut proscrire, et une méthode de vérification systématique.",
  icon: "🤖",
  skills: ["ia", "excellence"],
  requires: ["organisation"],
  outcomes: [
    "Identifier les usages de l'IA réellement utiles au métier",
    "Vérifier systématiquement une production générée",
    "Protéger les données de ses clients",
    "Ne jamais substituer une IA à un professionnel réglementé",
  ],
  lessons: [
    {
      id: "ia1",
      moduleId: "ia",
      title: "Usages utiles, usages interdits, méthode de vérification",
      summary:
        "Utiliser l'IA comme un assistant de rédaction et de préparation, jamais comme une source de droit ou de conseil.",
      duration: 14,
      difficulty: "intermediaire",
      skills: ["ia", "excellence"],
      objectives: [
        "Distinguer les usages fiables des usages risqués",
        "Appliquer une méthode de vérification en trois questions",
        "Protéger les données personnelles de ses clients",
        "Formuler des demandes qui produisent un résultat exploitable",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un outil d'IA générative produit un texte plausible, pas un texte vrai. Cette distinction est fondamentale dans un métier où une information juridique erronée engage une responsabilité. Bien utilisée, l'IA fait gagner plusieurs heures par semaine. Mal utilisée, elle produit un risque professionnel réel.",
        },
        { type: "heading", text: "Les usages qui fonctionnent" },
        {
          type: "table",
          head: ["Usage", "Ce qu'il apporte", "Vérification nécessaire"],
          rows: [
            ["Reformuler une annonce que vous avez écrite", "Gain de temps, meilleure lisibilité", "Relire : exactitude des chiffres et des caractéristiques"],
            ["Préparer une liste de questions avant un rendez-vous", "Structure, exhaustivité", "Adapter au dossier réel"],
            ["Résumer un document long que vous avez lu", "Gain de temps sur les PV d'AG", "Vérifier chaque chiffre dans le document source"],
            ["Rédiger un premier jet de compte rendu", "Gain de temps important", "Corriger les faits, personnaliser"],
            ["Générer des idées de contenu local", "Sort du syndrome de la page blanche", "Vérifier la pertinence locale"],
            ["Améliorer la formulation d'un courriel difficile", "Ton plus juste, moins d'émotion", "Relire intégralement avant envoi"],
            ["S'entraîner : simuler un client difficile", "Répétition sans risque", "Aucune : c'est un exercice"],
          ],
        },
        { type: "heading", text: "Les usages à proscrire" },
        {
          type: "list",
          items: [
            "Demander une règle de droit et la transmettre à un client sans vérification dans une source officielle.",
            "Faire calculer une plus-value, une capacité d'emprunt ou des frais d'acquisition.",
            "Faire estimer un bien : un modèle de langage n'a aucune connaissance de votre marché local réel.",
            "Générer un avis client ou un témoignage.",
            "Transmettre des données personnelles identifiables de clients dans un outil non maîtrisé.",
            "Faire rédiger une clause contractuelle.",
            "Publier une production générée sans l'avoir intégralement relue.",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Le risque principal",
          text:
            "Un outil d'IA peut énoncer avec assurance un délai légal inexact, un seuil réglementaire périmé ou une obligation qui n'existe pas. Transmise à un client, cette information engage votre responsabilité, pas celle de l'outil. Aucune excuse technologique n'est recevable.",
        },
        { type: "heading", text: "La méthode de vérification en trois questions" },
        {
          type: "steps",
          items: [
            {
              title: "1. Est-ce une information ou une formulation ?",
              text: "Une reformulation de votre propre texte présente peu de risque. Une information factuelle — un délai, un seuil, une obligation — doit être vérifiée dans une source officielle, systématiquement.",
            },
            {
              title: "2. Puis-je citer la source ?",
              text: "Si vous ne pouvez pas retrouver l'information sur Service-Public, Légifrance, l'ANIL ou un site institutionnel, vous ne la transmettez pas.",
            },
            {
              title: "3. Que se passe-t-il si c'est faux ?",
              text: "Si la réponse est « mon client prend une mauvaise décision » ou « ma responsabilité est engagée », alors la vérification n'est pas optionnelle.",
            },
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Données personnelles",
          text:
            "Ne saisissez jamais dans un outil non maîtrisé le nom, l'adresse, les coordonnées ou la situation financière d'un client. Anonymisez systématiquement : « un vendeur de 62 ans, séparation en cours, bien de 72 m² » suffit à obtenir une aide utile. Le RGPD s'applique pleinement à ces traitements. À vérifier selon la réglementation en vigueur et auprès de votre structure.",
        },
        { type: "heading", text: "Formuler une demande utile" },
        {
          type: "compare",
          left: {
            title: "Demande faible",
            items: [
              "« Écris une annonce pour un T3 »",
              "« Quelle est la loi sur les diagnostics ? »",
              "« Combien vaut cet appartement ? »",
              "« Fais-moi un plan de prospection »",
            ],
          },
          right: {
            title: "Demande efficace",
            items: [
              "« Voici mes notes brutes sur ce bien. Reformule-les en une annonce de 180 mots, ton factuel, sans superlatif, en mentionnant honnêtement l'absence d'ascenseur »",
              "« Aide-moi à formuler trois questions précises à poser au notaire sur ce point »",
              "« Voici mes cinq comparables et leurs caractéristiques : aide-moi à structurer un tableau d'ajustement »",
              "« Joue le rôle d'un vendeur qui trouve mon estimation trop basse, et conteste mes arguments »",
            ],
          },
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le meilleur usage, largement sous-exploité",
          text:
            "L'entraînement. Demander à un outil de jouer un vendeur difficile, un acquéreur qui négocie durement, un client mécontent — puis répondre à voix haute — est un exercice sans risque et remarquablement efficace. C'est probablement l'usage le plus rentable pour un débutant.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["ia", "rgpd", "devoir-conseil", "responsabilite-professionnelle", "deontologie"],
        },
      ],
      keyPoints: [
        "Une IA générative produit un texte plausible, pas un texte vrai.",
        "Reformuler, structurer, préparer, s'entraîner : les usages fiables.",
        "Droit, calculs fiscaux, estimation, clauses contractuelles : les usages à proscrire.",
        "Trois questions de vérification : information ou formulation, source citable, conséquence si faux.",
        "Anonymiser systématiquement les données clients.",
        "L'entraînement à la négociation est l'usage le plus rentable et le plus sous-exploité.",
      ],
      mistakes: [
        "Transmettre à un client une règle de droit obtenue sans vérification.",
        "Saisir le nom et l'adresse d'un client dans un outil non maîtrisé.",
        "Publier une annonce générée sans relecture complète.",
        "Faire estimer un bien par un modèle de langage.",
      ],
      quiz: [
        {
          id: "ia1q1",
          type: "qcm",
          question: "Un outil d'IA vous indique un délai légal. Que faites-vous avant de le transmettre à un client ?",
          options: [
            "Vous le transmettez, l'outil est fiable",
            "Vous le vérifiez dans une source officielle et citez cette source",
            "Vous le reformulez avec vos mots",
            "Vous demandez confirmation à un second outil",
          ],
          answer: 1,
          explanation:
            "Une information factuelle transmise à un client engage votre responsabilité, quelle que soit sa provenance. Seule une source officielle permet de la valider.",
          skill: "ia",
          topic: "verification",
        },
        {
          id: "ia1q2",
          type: "vraifaux",
          question: "On peut saisir le nom et l'adresse d'un client dans un outil d'IA pour obtenir une aide plus précise.",
          answer: 1,
          explanation:
            "Faux. Les données personnelles ne doivent pas être transmises à un outil non maîtrisé. Une description anonymisée suffit à obtenir une aide de qualité équivalente.",
          skill: "ia",
          topic: "donnees",
        },
        {
          id: "ia1q3",
          type: "qcm",
          question: "Quel est l'usage le plus sûr et le plus sous-exploité de l'IA pour un débutant ?",
          options: [
            "Estimer un bien",
            "S'entraîner en simulant un client difficile",
            "Rédiger une clause de compromis",
            "Calculer une plus-value",
          ],
          answer: 1,
          explanation:
            "La simulation d'entretien est un exercice sans aucun risque juridique, répétable à volonté, et qui développe précisément la compétence la plus difficile à acquérir seul.",
          skill: "ia",
          topic: "usages",
        },
      ],
      sources: [
        { label: "CNIL — Intelligence artificielle et données personnelles", url: "https://www.cnil.fr/fr/intelligence-artificielle" },
        { label: "Service-Public.fr", url: "https://www.service-public.fr/" },
        { label: "Légifrance", url: "https://www.legifrance.gouv.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
