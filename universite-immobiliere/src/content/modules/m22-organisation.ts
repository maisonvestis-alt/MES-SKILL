import type { CourseModule } from "@/lib/types";

export const moduleOrganisation: CourseModule = {
  id: "organisation",
  level: 22,
  title: "Organisation et discipline",
  subtitle: "La journée type, les priorités, la régularité",
  description:
    "Le métier est libre, donc dangereux : personne ne vous dira quoi faire à 9 heures. Ce module donne une structure de journée, une méthode de priorisation et les indicateurs à suivre chaque semaine.",
  icon: "🗓️",
  skills: ["organisation", "excellence"],
  requires: ["prospection"],
  outcomes: [
    "Construire une journée et une semaine type réalistes",
    "Distinguer les activités qui produisent du revenu de celles qui l'occupent",
    "Tenir un tableau de bord hebdomadaire à six chiffres",
    "Protéger ses créneaux de prospection",
  ],
  lessons: [
    {
      id: "or1",
      moduleId: "organisation",
      title: "La journée type et le tableau de bord",
      summary:
        "Structurer un métier sans horaires imposés, et mesurer ce qui compte réellement.",
      duration: 14,
      difficulty: "debutant",
      skills: ["organisation"],
      objectives: [
        "Construire une journée type adaptée au métier",
        "Classer les activités selon leur effet sur le revenu",
        "Tenir un tableau de bord à six indicateurs",
        "Résister aux trois pièges de l'autonomie",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un conseiller immobilier travaille souvent cinquante heures par semaine et se demande pourtant, le vendredi, ce qu'il a réellement produit. La cause est presque toujours la même : le temps a été absorbé par des activités qui occupent sans produire.",
        },
        { type: "heading", text: "Les trois catégories d'activité" },
        {
          type: "table",
          head: ["Catégorie", "Exemples", "Part souhaitable"],
          rows: [
            ["Activités productives", "Prospection, rendez-vous d'estimation, visites, négociation, relances", "50 à 60 % du temps"],
            ["Activités nécessaires", "Photos, rédaction d'annonces, collecte de documents, suivi notaire, comptes rendus", "30 à 40 %"],
            ["Activités d'évitement", "Réorganiser son fichier, refaire ses cartes de visite, lire des actualités, réunions sans objet", "À réduire au maximum"],
          ],
          note:
            "Les activités d'évitement ne sont pas inutiles en soi : elles deviennent problématiques quand elles occupent les créneaux réservés à la prospection.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Le piège principal",
          text:
            "Les activités d'évitement ressemblent à du travail et procurent une satisfaction immédiate. Réorganiser son fichier acquéreurs un mardi matin à 9 heures donne l'impression d'être productif, alors que c'est précisément le créneau où la prospection téléphonique fonctionne le mieux.",
        },
        { type: "heading", text: "La journée type" },
        {
          type: "table",
          head: ["Créneau", "Activité", "Pourquoi"],
          rows: [
            ["8h30 – 9h00", "Préparation : nouvelles annonces, fichier de la journée, priorités", "Aucune décision à prendre ensuite"],
            ["9h00 – 10h30", "Prospection — créneau intouchable", "Le meilleur taux de contact de la journée"],
            ["10h30 – 11h30", "Relances : acquéreurs, vendeurs, dossiers en cours", "Le suivi est ce qui transforme"],
            ["11h30 – 12h30", "Rendez-vous ou administratif", "Selon l'agenda"],
            ["14h00 – 17h00", "Rendez-vous d'estimation et visites", "Disponibilité des clients"],
            ["17h00 – 18h00", "Comptes rendus, mise à jour du fichier, préparation du lendemain", "Rien ne se perd"],
            ["18h00 – 19h00", "Second créneau de prospection ou rendez-vous du soir", "Beaucoup de particuliers ne sont joignables qu'à cette heure"],
          ],
          note:
            "Cette structure est indicative. Ce qui compte, c'est l'existence de créneaux fixes et protégés, pas leur horaire exact.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le créneau intouchable",
          text:
            "Inscrivez la prospection dans votre agenda comme un rendez-vous client, avec un nom et un horaire. Vous ne déplacez pas un rendez-vous client pour ranger votre bureau : appliquez la même règle à la prospection. C'est la seule discipline qui compte réellement les six premiers mois.",
        },
        { type: "heading", text: "Le tableau de bord hebdomadaire" },
        {
          type: "list",
          title: "Six chiffres, relevés chaque vendredi",
          ordered: true,
          items: [
            "Nombre de contacts de prospection réalisés (appels, portes, messages).",
            "Nombre de conversations réelles obtenues.",
            "Nombre de rendez-vous d'estimation fixés.",
            "Nombre d'estimations présentées.",
            "Nombre de mandats signés.",
            "Nombre de visites réalisées et d'offres reçues.",
          ],
        },
        {
          type: "example",
          title: "Ce que révèle le tableau",
          text:
            "Un conseiller relève : 120 contacts, 34 conversations, 2 rendez-vous, 2 estimations, 0 mandat. Le problème n'est pas le volume de prospection — il est excellent — mais la conversion conversation vers rendez-vous, très faible. C'est donc la proposition faite au téléphone qu'il faut retravailler, pas le nombre d'appels. Sans ces chiffres, il aurait probablement conclu qu'il devait appeler davantage, et se serait épuisé.",
        },
        {
          type: "callout",
          variant: "quote",
          title: "Le principe de mesure",
          text:
            "Vous ne pouvez pas améliorer ce que vous ne mesurez pas, et vous ne pouvez pas savoir ce qu'il faut améliorer sans décomposer l'entonnoir. Six chiffres relevés chaque vendredi, en cinq minutes, valent mieux que n'importe quel logiciel sophistiqué que vous n'ouvrirez pas.",
        },
        { type: "heading", text: "Les trois pièges de l'autonomie" },
        {
          type: "list",
          items: [
            "Le glissement horaire : commencer à 10 h, puis 10 h 30, puis 11 h. En six semaines, la matinée productive a disparu.",
            "La disponibilité permanente : répondre à tout, tout le temps, ce qui rend impossible tout travail de fond. Fixez des plages de réponse et annoncez-les.",
            "L'absence de fin de journée : travailler le soir sans structure, s'épuiser, et ne plus être bon le matin. Un métier de contact humain exige de la fraîcheur.",
          ],
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["organisation", "prospection", "crm", "excellence"],
        },
      ],
      keyPoints: [
        "Trois catégories d'activité : productive, nécessaire, d'évitement.",
        "Les activités d'évitement ressemblent à du travail : elles occupent les meilleurs créneaux.",
        "La prospection s'inscrit dans l'agenda comme un rendez-vous client, et ne se déplace pas.",
        "Six chiffres relevés chaque vendredi suffisent à piloter une activité.",
        "Décomposer l'entonnoir permet de savoir quoi améliorer, plutôt que de travailler davantage.",
        "Le glissement horaire est le piège le plus fréquent de l'autonomie.",
      ],
      mistakes: [
        "Faire de l'administratif pendant le créneau de prospection.",
        "Ne mesurer que le nombre de mandats signés.",
        "Se rendre disponible en permanence.",
        "Repousser le début de journée semaine après semaine.",
      ],
      exercise: {
        title: "Votre semaine type",
        instructions:
          "Construisez votre semaine type, puis inscrivez-la immédiatement dans votre agenda pour les quatre prochaines semaines. Une organisation non inscrite dans un agenda n'existe pas.",
        fields: [
          { id: "semaine", label: "Vos créneaux fixes de la semaine", multiline: true },
          { id: "prospection", label: "Vos créneaux de prospection, et ce que vous ferez précisément pendant", multiline: true },
          { id: "mesure", label: "Le jour et l'heure de votre relevé hebdomadaire", multiline: true },
        ],
        checklist: [
          "Au moins cinq créneaux de prospection sont inscrits dans la semaine",
          "Chaque créneau de prospection précise l'activité exacte",
          "Un créneau de relances quotidien est prévu",
          "Un créneau de comptes rendus quotidien est prévu",
          "Le relevé hebdomadaire a une date et une heure fixes",
          "Les six indicateurs à relever sont listés",
          "Une heure de fin de journée est définie",
        ],
      },
      quiz: [
        {
          id: "or1q1",
          type: "qcm",
          question: "Que révèlent 120 contacts, 34 conversations, 2 rendez-vous et 0 mandat sur une semaine ?",
          options: [
            "Qu'il faut augmenter le nombre d'appels",
            "Que la conversion conversation vers rendez-vous est faible et que la proposition téléphonique doit être retravaillée",
            "Que le marché est bloqué",
            "Que le fichier de prospection est mauvais",
          ],
          answer: 1,
          explanation:
            "Le volume est excellent et le taux de conversation correct. C'est l'étape suivante qui bloque : la proposition faite au téléphone. Sans décomposition de l'entonnoir, on conclurait à tort qu'il faut appeler plus.",
          skill: "organisation",
          topic: "pilotage",
        },
        {
          id: "or1q2",
          type: "vraifaux",
          question: "Réorganiser son fichier acquéreurs un mardi matin à 9 h est une bonne utilisation du temps.",
          answer: 1,
          explanation:
            "Faux. C'est une activité nécessaire, mais elle occupe le créneau où la prospection est la plus efficace. Elle doit être déplacée en fin de journée.",
          skill: "organisation",
          topic: "priorites",
        },
        {
          id: "or1q3",
          type: "qcm",
          question: "Comment protéger efficacement son créneau de prospection ?",
          options: [
            "En se promettant de le faire chaque jour",
            "En l'inscrivant dans l'agenda comme un rendez-vous client, non déplaçable",
            "En le plaçant en fin de journée quand tout est fait",
            "En le faisant seulement les jours calmes",
          ],
          answer: 1,
          explanation:
            "Une intention ne résiste pas aux sollicitations. Un créneau inscrit et traité comme un rendez-vous client est la seule protection qui fonctionne dans la durée.",
          skill: "organisation",
          topic: "priorites",
        },
      ],
      sources: [],
      lastVerified: "2026-09",
    },
  ],
};
