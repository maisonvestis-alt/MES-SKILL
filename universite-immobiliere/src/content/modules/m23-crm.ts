import type { CourseModule } from "@/lib/types";

export const moduleCrm: CourseModule = {
  id: "crm",
  level: 23,
  title: "Gérer son portefeuille",
  subtitle: "Fiches, pipeline, relances : transformer des contacts en revenus",
  description:
    "Un conseiller sans système perd 80 % de ses contacts en trois mois. Ce module donne la structure minimale d'un portefeuille : ce qu'on note, comment on classe, quand on relance.",
  icon: "📇",
  skills: ["crm", "organisation"],
  requires: ["organisation"],
  outcomes: [
    "Structurer une fiche vendeur et une fiche acquéreur",
    "Faire vivre un pipeline en dix étapes",
    "Définir une règle de relance par statut",
    "Appliquer les règles de conservation et de protection des données",
  ],
  lessons: [
    {
      id: "cr1",
      moduleId: "crm",
      title: "Fiches, pipeline et règles de relance",
      summary:
        "La structure minimale d'un portefeuille qui produit, et la discipline de relance qui le fait vivre.",
      duration: 15,
      difficulty: "intermediaire",
      skills: ["crm", "organisation"],
      objectives: [
        "Construire une fiche vendeur et une fiche acquéreur complètes",
        "Utiliser un pipeline à dix statuts",
        "Associer une règle de relance à chaque statut",
        "Respecter les obligations de protection des données",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Le mot « CRM » effraie inutilement. Il s'agit simplement de savoir, à tout moment, qui vous avez rencontré, où en est chaque personne, et quelle est la prochaine action avec sa date. Un tableau bien tenu suffit ; un logiciel mal tenu ne sert à rien.",
        },
        { type: "heading", text: "Le pipeline en dix statuts" },
        {
          type: "table",
          head: ["Statut", "Signification", "Prochaine action type"],
          rows: [
            ["Nouveau", "Contact identifié, pas encore joint", "Appeler sous 48 h"],
            ["Contacté", "Conversation réelle établie", "Relancer selon l'échéance annoncée"],
            ["Rendez-vous", "Rendez-vous fixé", "Préparer le dossier avant le rendez-vous"],
            ["Estimation", "Estimation réalisée, en attente de décision", "Relance à J+7 puis J+21"],
            ["Mandat", "Mandat signé", "Dérouler le plan d'action des quinze jours"],
            ["Commercialisation", "Bien en ligne", "Compte rendu hebdomadaire"],
            ["Visite", "Visites en cours", "Retour au vendeur sous 24 h"],
            ["Offre", "Offre reçue ou négociation en cours", "Formaliser l'accord sous 24 h"],
            ["Compromis", "Avant-contrat signé", "Suivre les cinq dates de l'instruction"],
            ["Vendu / Perdu", "Vente signée ou dossier abandonné", "Demander une recommandation, ou relancer à 6 semaines"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le statut « Perdu » n'est pas une fin",
          text:
            "Un vendeur qui a choisi un confrère, ou dont vous avez refusé le mandat, doit être relancé à six semaines. Une part significative de ces dossiers revient : le bien n'est pas vendu, les promesses n'ont pas été tenues, et vous êtes celui qui avait dit la vérité.",
        },
        { type: "heading", text: "La règle des trois champs obligatoires" },
        {
          type: "paragraph",
          text:
            "Vous pouvez tenir des fiches très détaillées, mais trois champs sont non négociables sur chaque contact, sans exception. Sans eux, la fiche est morte.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "La situation en une phrase : « veut vendre son T3 avant l'été, décide avec son frère indivisaire, estimation présentée à 268 000 € ».",
            "La prochaine action : « appeler pour proposer un point d'étape ».",
            "La date de cette action. Sans date, l'action n'aura pas lieu. C'est le champ le plus important des trois.",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Le contact sans date",
          text:
            "Un contact sans prochaine action datée disparaît en trois semaines. Vous vous en souviendrez vaguement six mois plus tard, en apprenant qu'il a vendu avec quelqu'un d'autre. C'est l'erreur la plus coûteuse et la plus facile à éviter du métier.",
        },
        { type: "heading", text: "Les règles de relance par statut" },
        {
          type: "table",
          head: ["Statut", "Rythme de relance", "Contenu"],
          rows: [
            ["Contacté sans projet immédiat", "Trimestriel", "Point de marché du quartier, information utile"],
            ["Estimation présentée", "J+7, J+21, J+45, puis trimestriel", "Question, vente comparable, information nouvelle"],
            ["Acquéreur actif", "Hebdomadaire", "Nouveaux biens correspondant à ses trois critères"],
            ["Acquéreur en pause", "Mensuel", "Un bien vraiment pertinent, pas une liste"],
            ["Vendeur en commercialisation", "Hebdomadaire, jour fixe", "Chiffres, objections, recommandation"],
            ["Dossier en instruction", "Tous les quinze jours", "Point d'étape, même sans nouveauté"],
            ["Client vendu", "À 1 mois, 6 mois, puis annuel", "Nouvelles, demande de recommandation"],
            ["Perdu", "À 6 semaines, puis à 6 mois", "« Comment cela se passe-t-il ? », sans reproche"],
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "L'origine réelle des mandats",
          text:
            "Interrogez un conseiller expérimenté : une part importante de ses mandats provient de contacts vieux de six à dix-huit mois, relancés régulièrement. Le portefeuille n'est pas un fichier administratif, c'est l'actif principal de votre activité.",
        },
        { type: "heading", text: "Protection des données" },
        {
          type: "list",
          items: [
            "Ne collectez que ce qui est utile : la date de naissance ou la profession d'un prospect n'ont pas à figurer dans votre fichier.",
            "Informez les personnes de l'usage de leurs données et de leurs droits.",
            "Traitez immédiatement toute demande de suppression ou d'opposition, et conservez la trace de son exécution.",
            "Ne conservez pas indéfiniment des contacts inactifs : faites un tri annuel.",
            "Protégez l'appareil qui contient le fichier : mot de passe, chiffrement, sauvegarde.",
            "Ne partagez pas votre fichier avec un tiers sans base légale.",
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Rappel",
          text:
            "Un fichier de prospects et de clients est un traitement de données personnelles soumis au RGPD. Les modalités pratiques — durées de conservation, mentions d'information — se vérifient auprès de la CNIL et du référent de votre structure. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["crm", "prospection", "recommandation", "rgpd", "acquereur"],
        },
      ],
      keyPoints: [
        "Dix statuts suffisent à piloter un portefeuille complet.",
        "Trois champs obligatoires : situation, prochaine action, date de cette action.",
        "Un contact sans date de relance est un contact perdu.",
        "Le statut « perdu » se relance à six semaines : une part revient.",
        "Une part importante des mandats provient de contacts anciens régulièrement relancés.",
        "Un fichier de prospection est soumis au RGPD.",
      ],
      mistakes: [
        "Tenir son suivi de mémoire.",
        "Noter un contact sans prochaine action datée.",
        "Abandonner définitivement un dossier perdu.",
        "Conserver indéfiniment des contacts inactifs.",
      ],
      quiz: [
        {
          id: "cr1q1",
          type: "qcm",
          question: "Quel est le champ le plus important d'une fiche contact ?",
          options: [
            "L'adresse postale",
            "La date de la prochaine action",
            "La profession",
            "Le nombre d'enfants",
          ],
          answer: 1,
          explanation:
            "Sans date, l'action n'a pas lieu et le contact se perd. C'est la seule information qui garantit que la fiche continue de vivre.",
          skill: "crm",
          topic: "pipeline",
        },
        {
          id: "cr1q2",
          type: "qcm",
          question: "Un vendeur a choisi un confrère. Que faites-vous ?",
          options: [
            "Vous supprimez le contact",
            "Vous notez une relance à six semaines",
            "Vous le rappelez le lendemain pour insister",
            "Vous attendez qu'il vous rappelle",
          ],
          answer: 1,
          explanation:
            "À six semaines, une part significative de ces biens n'est toujours pas vendue. Un appel sans reproche, apportant une information, transforme régulièrement ces dossiers.",
          skill: "crm",
          topic: "relance",
        },
        {
          id: "cr1q3",
          type: "vraifaux",
          question: "Il est légitime de conserver indéfiniment tous les contacts collectés en prospection.",
          answer: 1,
          explanation:
            "Faux. Le RGPD impose une durée de conservation limitée et proportionnée à la finalité. Un tri annuel des contacts inactifs fait partie des bonnes pratiques.",
          skill: "juridique",
          topic: "rgpd",
        },
      ],
      sources: [
        { label: "CNIL — Gestion des fichiers clients et prospects", url: "https://www.cnil.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
