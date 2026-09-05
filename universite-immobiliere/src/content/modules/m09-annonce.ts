import type { CourseModule } from "@/lib/types";

export const moduleAnnonce: CourseModule = {
  id: "annonce",
  level: 9,
  title: "Rédiger une excellente annonce",
  subtitle: "Le document qui décide si votre bien est visité",
  description:
    "Une annonce n'est pas une description : c'est un filtre. Elle doit attirer les bons acquéreurs et écarter les autres, sans jamais tromper. Ce module donne une méthode de rédaction et un atelier de correction.",
  icon: "✍️",
  skills: ["marketing", "commercialisation"],
  requires: ["commercialisation"],
  outcomes: [
    "Rédiger un titre et une accroche qui déclenchent le clic",
    "Structurer une description dans l'ordre où l'acquéreur se pose ses questions",
    "Annoncer les points faibles sans dévaloriser le bien",
    "Respecter les mentions obligatoires d'une annonce immobilière",
  ],
  lessons: [
    {
      id: "an1",
      moduleId: "annonce",
      title: "Anatomie d'une annonce qui fonctionne",
      summary:
        "Comprendre ce que lit réellement un acquéreur, dans quel ordre, et construire une annonce qui répond à ses questions au bon moment.",
      duration: 17,
      difficulty: "intermediaire",
      skills: ["marketing"],
      objectives: [
        "Comprendre le parcours de lecture réel d'un acquéreur",
        "Rédiger un titre efficace en moins de dix mots",
        "Structurer la description en cinq blocs",
        "Traiter les points faibles avec transparence et intelligence",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un acquéreur en recherche active consulte des dizaines d'annonces par semaine. Il ne les lit pas : il les balaie. Une annonce dispose de deux à trois secondes pour obtenir un clic, puis d'environ vingt secondes pour obtenir un contact. Toute votre rédaction doit être organisée autour de cette réalité.",
        },
        { type: "heading", text: "Le parcours réel de lecture" },
        {
          type: "steps",
          items: [
            { title: "1. La photo principale (1 seconde)", text: "Elle décide seule d'environ la moitié des clics. Une photo sombre, en contre-jour ou montrant une pièce encombrée élimine l'annonce avant tout texte." },
            { title: "2. Le prix (1 seconde)", text: "Il est comparé instantanément aux autres annonces de la liste. Un prix hors marché fait fermer l'annonce, quel que soit le bien." },
            { title: "3. Le titre (2 secondes)", text: "Il doit apporter une information que la photo et le prix ne donnent pas." },
            { title: "4. Les premières lignes de la description (10 secondes)", text: "C'est là que l'acquéreur décide de continuer ou d'abandonner." },
            { title: "5. Les caractéristiques (10 secondes)", text: "Il vérifie ce qui est éliminatoire pour lui : étage, extérieur, DPE, charges, stationnement." },
            { title: "6. Les photos suivantes (20 secondes)", text: "Il cherche ce que l'annonce ne montre pas. Une pièce absente des photos est immédiatement suspecte." },
          ],
        },
        { type: "heading", text: "Le titre" },
        {
          type: "compare",
          left: {
            title: "Titres inefficaces",
            items: [
              "« Appartement T3 » — n'apporte rien",
              "« Coup de cœur assuré ! » — vide et suspect",
              "« Idéal investisseur ou primo-accédant » — s'adresse à tout le monde, donc à personne",
              "« RARE !!! À VOIR ABSOLUMENT » — signale l'amateurisme",
            ],
          },
          right: {
            title: "Titres efficaces",
            items: [
              "« T3 de 72 m² avec terrasse sud, quartier Saint-Serge »",
              "« Maison 1930 rénovée, 4 chambres, jardin clos de 400 m² »",
              "« Dernier étage lumineux, ascenseur, vue dégagée sur la Loire »",
              "« T2 traversant, faibles charges, à 5 min à pied du tramway »",
            ],
          },
        },
        {
          type: "callout",
          variant: "tip",
          title: "La règle du titre",
          text:
            "Un titre efficace contient une information factuelle et différenciante que la photo ne donne pas : une exposition, un élément rare, une localisation précise, une qualité vérifiable. Jamais un superlatif.",
        },
        { type: "heading", text: "La description en cinq blocs" },
        {
          type: "steps",
          items: [
            {
              title: "Bloc 1 — La situation (2 phrases)",
              text: "Où se trouve le bien, et pourquoi c'est un bon emplacement. Concret : « À 300 mètres du marché des Lices et à 8 minutes à pied du tramway, dans une rue calme sans passage. »",
            },
            {
              title: "Bloc 2 — Le bien en une phrase forte",
              text: "L'essentiel, immédiatement : « Appartement de 72 m² au 3e étage avec ascenseur, entièrement rénové en 2022, avec une terrasse de 12 m² exposée sud. »",
            },
            {
              title: "Bloc 3 — La visite guidée (4 à 6 phrases)",
              text: "On fait entrer le lecteur et on avance pièce par pièce, dans l'ordre réel du parcours. « L'entrée dessert un séjour de 28 m² prolongé par la terrasse… »",
            },
            {
              title: "Bloc 4 — Les éléments factuels",
              text: "Chauffage, charges, taxe foncière, DPE, année de construction, travaux votés, stationnement, cave. Les chiffres rassurent et filtrent.",
            },
            {
              title: "Bloc 5 — L'appel à l'action",
              text: "« Visites possibles en semaine et le samedi matin. Dossier complet — diagnostics, procès-verbaux d'assemblée générale, charges détaillées — disponible sur demande avant visite. »",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le bloc 5 est celui que personne n'écrit",
          text:
            "Annoncer qu'un dossier complet est disponible avant visite est un signal très fort pour un acquéreur sérieux. Cela vous distingue immédiatement, et cela attire précisément les acquéreurs qui achètent vraiment.",
        },
        { type: "heading", text: "Traiter les points faibles" },
        {
          type: "paragraph",
          text:
            "Cacher un point faible ne le fait pas disparaître : il se découvre en visite, et l'acquéreur a alors le sentiment d'avoir été trompé. La bonne pratique consiste à l'annoncer, en le contextualisant honnêtement.",
        },
        {
          type: "table",
          head: ["Point faible", "Ce qu'il ne faut pas faire", "Formulation honnête et efficace"],
          rows: [
            ["4e sans ascenseur", "Ne pas mentionner l'étage", "« Au 4e et dernier étage sans ascenseur, ce qui explique un prix inférieur d'environ 10 % aux étages desservis du quartier. »"],
            ["Travaux à prévoir", "« À rafraîchir » pour un bien à rénover entièrement", "« Le bien nécessite une rénovation complète : électricité, cuisine, salle de bains. Devis d'entreprises locales disponibles. »"],
            ["DPE F", "Omettre le DPE", "« Classé F. Un audit énergétique et deux devis de rénovation sont à votre disposition. »"],
            ["Ravalement voté", "Ne rien dire", "« Un ravalement a été voté en 2024 ; la quote-part du lot, d'environ 11 000 €, est intégrée dans le prix de vente. »"],
            ["Charges élevées", "Indiquer un montant approximatif à la baisse", "« Charges de 3 100 €/an incluant le chauffage collectif, l'eau froide et le gardien. »"],
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Les mentions obligatoires",
          text:
            "Une annonce immobilière doit comporter un certain nombre de mentions réglementées : classement énergétique et climatique issu du DPE, montant estimé des dépenses annuelles d'énergie, prix et indication de la charge des honoraires, mention de la copropriété avec nombre de lots, montant des charges courantes et procédures en cours le cas échéant, et identification du professionnel. Le détail de ces obligations évolue : vérifiez la liste applicable auprès de votre structure et des textes en vigueur. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Les formulations à bannir",
          text:
            "« Coup de cœur assuré », « rare sur le marché », « à saisir rapidement », « idéal investisseur » sans calcul, « travaux à prévoir » pour un bien insalubre, « lumineux » pour un rez-de-chaussée nord. Ces formules ne trompent personne et abîment votre crédibilité auprès des acquéreurs qui vous rappelleront pour d'autres biens.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["dpe", "charges-copropriete", "honoraires", "fai", "commercialisation"],
        },
      ],
      keyPoints: [
        "Une annonce dispose de deux à trois secondes pour obtenir un clic.",
        "La photo principale décide seule d'environ la moitié des clics.",
        "Le titre apporte une information factuelle que la photo ne donne pas.",
        "Cinq blocs : situation, phrase forte, visite guidée, éléments factuels, appel à l'action.",
        "Annoncer les points faibles en les contextualisant attire les bons acquéreurs.",
        "Les mentions obligatoires sont réglementées et évoluent : les vérifier.",
      ],
      mistakes: [
        "Omettre l'étage ou le DPE pour ne pas décourager.",
        "Employer des superlatifs à la place d'informations.",
        "Décrire le bien sans jamais donner de chiffres.",
        "Écrire « à rafraîchir » pour un bien nécessitant une rénovation lourde.",
      ],
      exercise: {
        title: "Atelier de rédaction",
        instructions:
          "Voici les éléments d'un bien. Rédigez l'annonce complète, puis comparez avec la correction proposée. Écrivez d'abord : lire une correction sans avoir écrit n'apprend rien.",
        fields: [
          {
            id: "titre",
            label: "Votre titre (10 mots maximum)",
            placeholder: "Bien : T3 de 68 m², 2e étage avec ascenseur, balcon 6 m² ouest, cave, DPE D, charges 1 800 €/an, cuisine et salle de bains refaites en 2021, quartier proche du centre, rue calme, ravalement réalisé en 2023, sans stationnement.",
          },
          { id: "description", label: "Votre description complète (5 blocs)", multiline: true },
        ],
        checklist: [
          "Le titre contient une information factuelle et différenciante",
          "Le titre ne contient aucun superlatif",
          "La description commence par la situation, concrètement",
          "Une phrase forte résume le bien immédiatement",
          "La visite guidée suit le parcours réel dans le logement",
          "Les chiffres sont présents : charges, DPE, année de rénovation",
          "L'absence de stationnement est mentionnée honnêtement",
          "Un appel à l'action précise les modalités de visite et le dossier disponible",
        ],
        modelAnswer:
          "Titre : « T3 de 68 m² rénové, balcon, ascenseur, rue calme du centre ». Description : « À cinq minutes à pied des commerces du centre, dans une rue résidentielle sans passage, cet appartement de 68 m² occupe le 2e étage d'une copropriété soignée dont le ravalement a été réalisé en 2023. Cuisine et salle de bains ont été entièrement refaites en 2021. L'entrée dessert un séjour prolongé par un balcon de 6 m² exposé ouest, agréable en fin de journée. Deux chambres, une salle de bains avec baignoire, un WC séparé et de bons rangements complètent l'ensemble. Une cave privative est incluse. Chauffage individuel, DPE classé D, charges de copropriété de 1 800 € par an. Le bien ne dispose pas de stationnement : le quartier est en zone bleue, avec un parking public à 200 mètres. Visites en semaine et le samedi matin. Dossier complet — diagnostics, procès-verbaux d'assemblée générale, détail des charges — transmis avant visite sur demande. »",
      },
      quiz: [
        {
          id: "an1q1",
          type: "qcm",
          question: "Quel élément décide de la moitié des clics sur une annonce ?",
          options: ["Le titre", "La photo principale", "La description", "Le nom de l'agence"],
          answer: 1,
          explanation:
            "La photo principale est vue avant tout le reste et détermine l'essentiel du taux de clic. Une photo sombre ou encombrée élimine l'annonce avant même la lecture du titre.",
          skill: "marketing",
          topic: "annonce",
        },
        {
          id: "an1q2",
          type: "qcm",
          question: "Comment traiter un DPE classé F dans une annonce ?",
          options: [
            "Ne pas le mentionner pour ne pas décourager",
            "L'indiquer et préciser que des devis de rénovation sont disponibles",
            "Écrire « DPE en cours »",
            "Mentionner uniquement l'étiquette climat",
          ],
          answer: 1,
          explanation:
            "Le classement énergétique fait partie des mentions obligatoires de l'annonce. L'annoncer en apportant des éléments concrets attire les acquéreurs prêts à traiter le sujet plutôt que de les faire fuir en visite.",
          skill: "marketing",
          topic: "annonce",
        },
        {
          id: "an1q3",
          type: "vraifaux",
          question: "Indiquer « idéal investisseur ou primo-accédant » élargit utilement le public d'une annonce.",
          answer: 1,
          explanation:
            "Faux. Une annonce qui s'adresse à tout le monde ne s'adresse à personne. Une annonce efficace est un filtre : elle attire précisément le profil qui achètera ce bien.",
          skill: "marketing",
          topic: "annonce",
        },
        {
          id: "an1q4",
          type: "qcm",
          question: "Quel élément d'annonce est le plus souvent oublié et le plus différenciant ?",
          options: [
            "La superficie",
            "L'annonce d'un dossier complet disponible avant visite",
            "Le nombre de pièces",
            "L'année de construction",
          ],
          answer: 1,
          explanation:
            "Proposer un dossier complet avant visite signale un professionnel organisé et attire les acquéreurs sérieux, qui sont précisément ceux qui concluent.",
          skill: "excellence",
          topic: "annonce",
        },
      ],
      sources: [
        { label: "Service-Public.fr — DPE et annonces immobilières", url: "https://www.service-public.fr/particuliers/vosdroits/F16096" },
        { label: "DGCCRF — Information des consommateurs sur les prix", url: "https://www.economie.gouv.fr/dgccrf" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
