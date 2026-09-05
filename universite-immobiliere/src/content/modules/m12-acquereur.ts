import type { CourseModule } from "@/lib/types";

export const moduleAcquereur: CourseModule = {
  id: "acquereur",
  level: 12,
  title: "Accompagner l'acquéreur",
  subtitle: "Qualifier, comprendre, suivre jusqu'à l'offre",
  description:
    "L'acquéreur est trop souvent considéré comme un simple visiteur. C'est pourtant lui qui apporte l'argent, et un acquéreur bien accompagné devient un client à vie et une source de recommandations.",
  icon: "🤝",
  skills: ["acquereur", "financement", "crm"],
  requires: ["visites"],
  outcomes: [
    "Construire une fiche acquéreur complète et exploitable",
    "Distinguer critères indispensables et critères secondaires",
    "Détecter un projet fragile avant de le présenter au vendeur",
    "Accompagner un acquéreur de la première visite à l'offre",
  ],
  lessons: [
    {
      id: "ac1",
      moduleId: "acquereur",
      title: "La fiche acquéreur et la hiérarchie des critères",
      summary:
        "Recueillir ce qui permet de proposer le bon bien, et aider l'acquéreur à distinguer ce dont il a besoin de ce qu'il croit vouloir.",
      duration: 16,
      difficulty: "intermediaire",
      skills: ["acquereur", "decouverte"],
      objectives: [
        "Construire une fiche acquéreur en douze rubriques",
        "Faire hiérarchiser les critères par l'acquéreur lui-même",
        "Évaluer la solidité d'un projet d'acquisition",
        "Transformer une recherche floue en recherche opérationnelle",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "La plupart des acquéreurs ne savent pas exactement ce qu'ils cherchent. Ils énoncent une liste de critères qui, mise bout à bout, ne correspond à aucun bien existant dans leur budget. Votre rôle est de les aider à hiérarchiser — ce qui est un service considérable, et ce que presque personne ne fait.",
        },
        { type: "heading", text: "Les douze rubriques de la fiche" },
        {
          type: "table",
          head: ["Rubrique", "Question posée", "Pourquoi c'est déterminant"],
          rows: [
            ["Situation actuelle", "Locataire, propriétaire, hébergé ?", "Un propriétaire qui doit vendre a un projet à deux étages"],
            ["Composition du foyer", "Qui vivra dans le logement, aujourd'hui et dans cinq ans ?", "Détermine le nombre de chambres réel"],
            ["Budget maximum", "Frais d'acquisition compris ?", "La confusion sur ce point fait perdre un temps considérable"],
            ["Apport", "Montant et disponibilité immédiate", "Un apport « qui viendra de la vente » change le calendrier"],
            ["Financement", "Banque ou courtier rencontré ? Accord de principe ?", "Distingue un projet réel d'une intention"],
            ["Échéance", "Pour quand ? Y a-t-il une contrainte ?", "Un préavis, une rentrée scolaire, une mutation"],
            ["Secteurs", "Lesquels précisément, et lesquels sont exclus ?", "« Proche du centre » ne veut rien dire"],
            ["Typologie et surface", "Minimum acceptable, pas l'idéal", "L'idéal n'existe pas dans le budget"],
            ["Critères indispensables", "Trois maximum", "Au-delà de trois, la recherche devient impossible"],
            ["Critères secondaires", "Ce sur quoi il peut transiger", "C'est là que se trouve la solution"],
            ["Travaux", "Acceptés ? Jusqu'à quel montant ? Capacité à gérer un chantier ?", "Ouvre ou ferme la moitié du marché"],
            ["Biens déjà visités", "Lesquels, et pourquoi refusés ?", "L'information la plus utile de toutes"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La règle des trois critères",
          text:
            "Demandez : « Si vous ne pouviez garder que trois critères absolument non négociables, lesquels ? » La réponse transforme une recherche impossible en recherche opérationnelle. Et elle oblige l'acquéreur à un travail de clarification qu'il n'avait jamais fait.",
        },
        { type: "heading", text: "Le budget : lever les ambiguïtés" },
        {
          type: "paragraph",
          text:
            "« Mon budget est de 300 000 € » peut signifier trois choses très différentes : 300 000 € de prix affiché, 300 000 € tout compris frais d'acquisition inclus, ou 300 000 € de capacité d'emprunt sans compter l'apport. L'écart entre ces trois lectures peut atteindre 40 000 €.",
        },
        {
          type: "example",
          title: "Le calcul à faire ensemble",
          text:
            "Budget total disponible : 300 000 €. Frais d'acquisition dans l'ancien, ordre de grandeur usuel de 7 à 8 % : environ 21 000 à 24 000 €. Budget de prix mobilisable : environ 276 000 à 279 000 €. Si l'acquéreur cherchait des biens à 300 000 €, il visitait depuis des mois des logements hors de sa portée. Cette clarification, faite en cinq minutes, est souvent le service le plus utile que vous lui rendrez.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Votre limite",
          text:
            "Vous donnez des ordres de grandeur pédagogiques et vous orientez vers un courtier ou une banque. Vous ne calculez jamais une capacité d'emprunt définitive, et vous ne promettez aucun taux. Le simulateur officiel des notaires est la référence à donner pour les frais d'acquisition.",
        },
        { type: "heading", text: "Évaluer la solidité d'un projet" },
        {
          type: "table",
          head: ["Situation", "Solidité", "Ce que vous dites au vendeur"],
          rows: [
            ["Apport disponible, accord de principe bancaire écrit, aucun bien à vendre", "Très solide", "Dossier prioritaire, calendrier maîtrisé"],
            ["Apport disponible, courtier mandaté, dossier en cours", "Solide", "Financement à confirmer sous deux à trois semaines"],
            ["Budget cohérent, aucune démarche bancaire engagée", "À confirmer", "Visite acceptée, mais offre à ne pas accepter sans validation"],
            ["Doit vendre un bien déjà sous compromis", "Solide sous condition", "Dépend de la réalisation d'une autre vente, déjà avancée"],
            ["Doit vendre un bien pas encore mis en vente", "Fragile", "À signaler explicitement : le calendrier est incertain"],
            ["Refuse de communiquer sur son financement", "Non évaluable", "Ne pas présenter d'offre sans élément"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Ce que vous devez au vendeur",
          text:
            "Transmettre une offre sans indiquer la solidité du dossier est un manquement au devoir de conseil. Le vendeur qui accepte une offre retire son bien du marché : il a le droit de savoir sur quoi il s'engage.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["acquereur", "apport", "capacite-emprunt", "frais-notaire", "courtier", "condition-prêt", "mandat-recherche"],
        },
      ],
      keyPoints: [
        "Douze rubriques structurent une fiche acquéreur exploitable.",
        "La règle des trois critères indispensables rend une recherche opérationnelle.",
        "« Budget de 300 000 € » recouvre trois réalités différentes : clarifier systématiquement.",
        "Les biens déjà visités et refusés sont l'information la plus utile.",
        "La solidité du financement se qualifie et se transmet honnêtement au vendeur.",
        "Vous orientez vers un courtier, vous ne calculez jamais une capacité définitive.",
      ],
      mistakes: [
        "Accepter une liste de dix critères indispensables sans la faire hiérarchiser.",
        "Ne pas vérifier si le budget annoncé inclut les frais d'acquisition.",
        "Transmettre une offre sans qualifier le financement.",
        "Ne pas demander pourquoi les biens précédents ont été refusés.",
      ],
      exercise: {
        title: "Faire hiérarchiser un acquéreur",
        instructions:
          "Un acquéreur vous annonce : budget 280 000 € tout compris, trois chambres, jardin, garage, proche du centre, sans travaux, école à moins de cinq minutes, calme, lumineux, DPE C minimum. Sur son secteur, ces critères réunis correspondent à des biens autour de 380 000 €.",
        fields: [
          { id: "diagnostic", label: "Votre diagnostic de la situation", multiline: true },
          { id: "questions", label: "Les questions que vous posez pour faire hiérarchiser", multiline: true },
          { id: "proposition", label: "Les compromis que vous proposez d'explorer", multiline: true },
        ],
        checklist: [
          "Le diagnostic chiffre l'écart entre les critères et le budget",
          "Le budget est clarifié : prix ou tout compris",
          "La question des trois critères indispensables est posée",
          "Les compromis explorés sont concrets et hiérarchisés",
          "La question des travaux est posée avec un montant",
          "L'élargissement géographique est envisagé",
          "Aucun jugement n'est porté sur les attentes de l'acquéreur",
        ],
        modelAnswer:
          "Diagnostic : l'écart est d'environ 100 000 €, soit 35 % du budget. Ce n'est pas un écart de négociation, c'est un écart de projet. Questions : « Si vous ne pouviez garder que trois critères, lesquels ? » puis « Le jardin, c'est pour un usage précis ou pour l'idée du jardin ? » et « Un bien avec 25 000 € de travaux, mais qui coche vos trois critères, ce serait envisageable ? ». Compromis à explorer, dans l'ordre : accepter des travaux, ce qui ouvre souvent 15 à 20 % du marché ; élargir de deux ou trois communes ; remplacer le garage par une place extérieure ; accepter une troisième chambre plus petite. À l'inverse, ne jamais suggérer de renoncer au calme ou à la luminosité : ce sont des critères sur lesquels personne ne transige durablement.",
      },
      quiz: [
        {
          id: "ac1q1",
          type: "qcm",
          question: "Un acquéreur annonce « budget 300 000 € ». Quelle est votre première question ?",
          options: [
            "« Depuis combien de temps cherchez-vous ? »",
            "« Ce montant inclut-il les frais d'acquisition ? »",
            "« Quelle banque avez-vous ? »",
            "« Combien de chambres cherchez-vous ? »",
          ],
          answer: 1,
          explanation:
            "L'écart entre un budget de prix et un budget tout compris atteint couramment 20 000 à 25 000 € dans l'ancien. Clarifier ce point évite des mois de visites inutiles.",
          skill: "acquereur",
          topic: "qualification-acquereur",
        },
        {
          id: "ac1q2",
          type: "qcm",
          question: "Quelle information est la plus utile pour proposer le bon bien à un acquéreur ?",
          options: [
            "Sa profession",
            "Les biens qu'il a déjà visités et les raisons de son refus",
            "Son âge",
            "Le nom de sa banque",
          ],
          answer: 1,
          explanation:
            "Les refus passés révèlent les critères réels, souvent différents des critères déclarés. C'est la source d'information la plus fiable sur ce que l'acquéreur achètera vraiment.",
          skill: "acquereur",
          topic: "qualification-acquereur",
        },
        {
          id: "ac1q3",
          type: "vraifaux",
          question: "Un acquéreur qui doit encore mettre son bien actuel en vente constitue un dossier aussi solide qu'un acquéreur avec accord bancaire.",
          answer: 1,
          explanation:
            "Faux. Le calendrier dépend d'une vente non engagée, dont ni le délai ni le prix ne sont connus. Ce point doit être signalé explicitement au vendeur avant toute acceptation d'offre.",
          skill: "acquereur",
          topic: "qualification-acquereur",
        },
        {
          id: "ac1q4",
          type: "qcm",
          question: "Quel est l'effet de la règle des trois critères indispensables ?",
          options: [
            "Elle réduit le budget de l'acquéreur",
            "Elle transforme une recherche impossible en recherche opérationnelle et clarifie le projet",
            "Elle permet de vendre plus cher",
            "Elle évite d'avoir à qualifier le financement",
          ],
          answer: 1,
          explanation:
            "Une liste de dix critères indispensables ne correspond à aucun bien dans un budget donné. Hiérarchiser est un travail que l'acquéreur n'a presque jamais fait seul, et qui débloque la recherche.",
          skill: "acquereur",
          topic: "qualification-acquereur",
        },
      ],
      sources: [
        { label: "Notaires de France — Simulateur de frais", url: "https://www.notaires.fr/fr/immobilier-fiscalite/frais-de-notaire" },
        { label: "ANIL — Financer son achat", url: "https://www.anil.org/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
