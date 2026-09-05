import type { CourseModule } from "@/lib/types";

export const moduleVisites: CourseModule = {
  id: "visites",
  level: 11,
  title: "Les visites",
  subtitle: "Préparer, conduire, observer, débriefer",
  description:
    "La visite est le moment où le bien se vend ou se perd. Ce module donne un protocole complet, incluant la sécurité, la conduite du parcours, la lecture des réactions et le débriefing des deux côtés.",
  icon: "🚪",
  skills: ["visite", "psychologie", "acquereur"],
  requires: ["annonce"],
  outcomes: [
    "Qualifier un candidat avant de lui faire visiter",
    "Préparer le bien et sa propre sécurité",
    "Conduire un parcours de visite réfléchi",
    "Lire les signaux d'intérêt et traiter les objections sur place",
    "Débriefer l'acquéreur et le vendeur sous 24 heures",
  ],
  lessons: [
    {
      id: "vi1",
      moduleId: "visites",
      title: "Avant la visite : qualifier, préparer, sécuriser",
      summary:
        "Ne jamais faire visiter à l'aveugle : la qualification préalable protège le vendeur, l'acquéreur, votre temps et votre sécurité.",
      duration: 15,
      difficulty: "intermediaire",
      skills: ["visite", "acquereur"],
      objectives: [
        "Conduire un appel de qualification en six questions",
        "Préparer le bien et le vendeur avant la visite",
        "Appliquer des règles de sécurité personnelle élémentaires",
        "Organiser ses visites pour être efficace",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Faire visiter sans qualifier est l'erreur la plus coûteuse du débutant. Elle fait perdre du temps à tout le monde, épuise le vendeur, et vous donne l'illusion de l'activité. Une visite non qualifiée n'a presque aucune chance d'aboutir.",
        },
        { type: "heading", text: "L'appel de qualification : six questions" },
        {
          type: "list",
          ordered: true,
          items: [
            "« Qu'est-ce qui vous a intéressé dans cette annonce ? » — Ouvre et révèle le critère principal.",
            "« Vous êtes actuellement locataire ou propriétaire ? » — Détermine s'il y a une vente préalable à réaliser.",
            "« Avez-vous déjà rencontré une banque ou un courtier pour valider votre budget ? » — La question la plus discriminante.",
            "« Quel est votre budget maximum, frais compris ? » — Doit être posée sans gêne : c'est une question professionnelle.",
            "« Pour quand souhaitez-vous être installé ? » — Mesure la maturité du projet.",
            "« Combien de biens avez-vous visités, et qu'est-ce qui n'allait pas ? » — L'information la plus utile de tout l'appel.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Poser la question du budget sans gêne",
          text:
            "« Je vous pose la question du budget pour ne pas vous faire perdre de temps : si le bien est au-dessus de vos possibilités, je préfère vous le dire maintenant et vous proposer autre chose. » Formulée ainsi, la question est perçue comme un service et non comme une intrusion.",
        },
        {
          type: "table",
          title: "Décider après l'appel",
          head: ["Situation", "Décision"],
          rows: [
            ["Financement validé, budget cohérent, projet daté", "Visite prioritaire, dans les 48 heures"],
            ["Budget cohérent mais aucune démarche bancaire", "Visite acceptée, avec mise en relation avec un courtier en parallèle"],
            ["Budget inférieur de plus de 10 % au prix", "Pas de visite : proposer d'autres biens et conserver le contact"],
            ["Doit vendre son bien d'abord, non mis en vente", "Visite possible, mais dossier signalé comme fragile au vendeur ; proposer une estimation de son bien"],
            ["Refuse de répondre aux questions", "Pas de visite. Un candidat sérieux comprend la démarche"],
          ],
        },
        { type: "heading", text: "Préparer le bien et le vendeur" },
        {
          type: "list",
          items: [
            "Prévenir le vendeur au moins 24 heures à l'avance, avec le nombre de visiteurs et l'heure exacte.",
            "Rappeler les consignes : lumières allumées, rideaux ouverts, températures correctes, animaux à l'écart, odeurs neutres.",
            "Demander au vendeur de s'absenter si possible. Un acquéreur ne se projette pas devant le propriétaire, et n'ose pas dire ce qui lui déplaît.",
            "Arriver dix minutes avant : ouvrir, aérer, allumer, vérifier que tout est en ordre.",
            "Avoir avec soi le dossier complet : diagnostics, charges, PV d'AG, taxe foncière, plan.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le vendeur présent pendant la visite",
          text:
            "C'est l'une des principales causes de visites ratées. Le propriétaire raconte l'histoire de la maison, défend son prix, contredit le conseiller ou, pire, entend une critique et se braque. Expliquez-le à l'avance : « Votre présence empêche l'acquéreur de se projeter et de dire librement ce qu'il pense. Or ce qu'il pense, j'ai besoin de l'entendre. »",
        },
        { type: "heading", text: "La sécurité personnelle" },
        {
          type: "paragraph",
          text:
            "Le métier implique de se rendre seul dans des logements vides avec des inconnus. Quelques règles simples, appliquées systématiquement, suffisent à écarter l'essentiel du risque.",
        },
        {
          type: "list",
          items: [
            "Noter l'identité et le numéro de téléphone du visiteur, et l'appeler avant la visite pour confirmer : un numéro qui ne répond pas est un signal.",
            "Prévenir un collègue ou un proche du lieu et de l'heure de la visite, et confirmer à la sortie.",
            "Laisser le visiteur passer devant dans les pièces, rester près des sorties, ne pas s'engager en premier dans une cave ou des combles.",
            "Garder son téléphone sur soi, chargé, pas dans la sacoche.",
            "Éviter les visites de nuit dans des biens vides et isolés ; proposer un autre créneau.",
            "En cas de gêne : interrompre la visite. Aucun bien ne vaut de rester dans une situation inconfortable.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Organiser ses visites",
          text:
            "Regroupez les visites par secteur et par demi-journée. Prévoyez 45 minutes par visite, dont 30 sur place et 15 de trajet et de notes. Ne planifiez jamais deux visites consécutives sans marge : arriver en retard à la seconde annule le bénéfice de la première.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["acquereur", "visite", "bon-visite", "financement", "courtier"],
        },
      ],
      keyPoints: [
        "Une visite non qualifiée n'a presque aucune chance d'aboutir.",
        "Six questions de qualification, dont le financement et le budget maximum.",
        "La question du budget se pose en la justifiant comme un service.",
        "Le vendeur présent pendant la visite empêche la projection de l'acquéreur.",
        "Prévenir un tiers, laisser passer le visiteur devant, garder son téléphone sur soi.",
        "Prévoir 45 minutes par visite, trajet et notes compris.",
      ],
      mistakes: [
        "Faire visiter sans avoir vérifié le budget et le financement.",
        "Ne pas demander au vendeur de s'absenter.",
        "Enchaîner des visites sans marge de trajet.",
        "Se rendre seul le soir dans un bien vide isolé sans prévenir personne.",
      ],
      quiz: [
        {
          id: "vi1q1",
          type: "qcm",
          question: "Quelle question est la plus discriminante lors de la qualification d'un acquéreur ?",
          options: [
            "« Depuis combien de temps cherchez-vous ? »",
            "« Avez-vous déjà rencontré une banque ou un courtier pour valider votre budget ? »",
            "« Aimez-vous le quartier ? »",
            "« Combien de personnes vivront dans le logement ? »",
          ],
          answer: 1,
          explanation:
            "La validation bancaire distingue un projet réel d'une intention. C'est l'information la plus utile pour hiérarchiser les visites et pour informer honnêtement le vendeur.",
          skill: "acquereur",
          topic: "qualification",
        },
        {
          id: "vi1q2",
          type: "vraifaux",
          question: "Il est préférable que le propriétaire soit présent pendant les visites pour répondre aux questions.",
          answer: 1,
          explanation:
            "Faux dans la grande majorité des cas. Sa présence empêche l'acquéreur de se projeter et de s'exprimer librement, et expose le vendeur à entendre des critiques qui le braquent.",
          skill: "visite",
          topic: "qualification",
        },
        {
          id: "vi1q3",
          type: "qcm",
          question: "Un candidat refuse de répondre aux questions de qualification. Que faites-vous ?",
          options: [
            "Vous faites visiter quand même, par politesse",
            "Vous n'organisez pas la visite et expliquez pourquoi",
            "Vous demandez au vendeur de décider",
            "Vous faites visiter en le surveillant",
          ],
          answer: 1,
          explanation:
            "Un candidat sérieux comprend qu'une qualification protège tout le monde. Un refus catégorique signale soit un projet inexistant, soit une démarche à écarter — dans les deux cas, la visite est inutile.",
          skill: "acquereur",
          topic: "qualification",
        },
        {
          id: "vi1q4",
          type: "qcm",
          question: "Quelle règle de sécurité s'applique lors d'une visite seul dans un bien vide ?",
          options: [
            "Passer devant le visiteur dans chaque pièce pour montrer le chemin",
            "Prévenir un tiers du lieu et de l'heure, et laisser le visiteur entrer en premier dans les pièces",
            "Laisser la porte d'entrée fermée à clé",
            "Éteindre son téléphone pour rester concentré",
          ],
          answer: 1,
          explanation:
            "Prévenir un tiers et rester près des sorties, en laissant le visiteur avancer devant, sont les deux règles de base. Le téléphone reste sur soi, chargé.",
          skill: "visite",
          topic: "securite",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Achat immobilier", url: "https://www.service-public.fr/particuliers/vosdroits/F2957" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "vi2",
      moduleId: "visites",
      title: "Conduire la visite et débriefer",
      summary:
        "Le parcours, l'observation des réactions, le traitement des objections sur place, et le double débriefing qui suit.",
      duration: 17,
      difficulty: "intermediaire",
      skills: ["visite", "psychologie", "negociation"],
      objectives: [
        "Construire un parcours de visite qui sert le bien",
        "Observer et interpréter les signaux d'intérêt",
        "Traiter une objection sur place sans se défendre",
        "Conduire le débriefing acquéreur et le compte rendu vendeur",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Une visite bien conduite ne consiste pas à énumérer les surfaces. Elle consiste à laisser l'acquéreur découvrir, à observer ses réactions, et à répondre aux questions qu'il ne pose pas encore.",
        },
        { type: "heading", text: "Le parcours" },
        {
          type: "steps",
          items: [
            {
              title: "1. L'accueil et le contexte (2 minutes, dehors)",
              text: "Avant d'entrer : le quartier, l'immeuble, l'orientation, les commerces. On plante le décor pendant que l'acquéreur observe déjà.",
            },
            {
              title: "2. L'entrée : laisser passer, se taire",
              text: "Les premières secondes dans un logement sont décisives et purement émotionnelles. Ne parlez pas. Laissez regarder.",
            },
            {
              title: "3. La pièce forte en premier",
              text: "On commence par ce qui vend : le séjour lumineux, la terrasse, la vue. La première impression conditionne la lecture de tout le reste.",
            },
            {
              title: "4. Le parcours logique",
              text: "Espaces de vie, puis espaces de nuit, puis annexes. On termine par un retour dans la pièce forte : c'est la dernière image qui reste.",
            },
            {
              title: "5. Les pièces faibles, brièvement mais honnêtement",
              text: "On ne les cache pas, on ne s'y attarde pas, et on les contextualise : « la salle de bains est d'origine ; d'après les devis que j'ai obtenus, une rénovation complète se situe entre 6 000 et 9 000 €. »",
            },
            {
              title: "6. Le temps libre",
              text: "« Je vous laisse refaire un tour tranquillement, prenez votre temps. » Ce moment seul est souvent celui où l'acquéreur se décide, et où le couple se parle.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le silence pendant la visite",
          text:
            "Le réflexe du débutant est de combler le silence en commentant chaque pièce. C'est contre-productif : l'acquéreur a besoin de se projeter, ce qui suppose un espace mental. Parlez trois fois moins que vous n'en avez envie.",
        },
        { type: "heading", text: "Lire les signaux" },
        {
          type: "compare",
          left: {
            title: "Signaux d'intérêt réel",
            items: [
              "Il ouvre les placards, les fenêtres, regarde le tableau électrique",
              "Il pose des questions sur les charges, la copropriété, les travaux",
              "Il projette : « le canapé irait là », « la chambre du petit »",
              "Il refait un tour spontanément",
              "Le couple s'isole pour se parler",
              "Il demande si d'autres personnes ont visité",
            ],
          },
          right: {
            title: "Signaux de désintérêt",
            items: [
              "Il reste au centre des pièces sans s'approcher de rien",
              "Il ne pose aucune question technique",
              "Il regarde son téléphone",
              "Il visite en moins de dix minutes",
              "Il complimente poliment et globalement, sans détail",
              "Il ne s'attarde nulle part",
            ],
          },
        },
        {
          type: "callout",
          variant: "info",
          title: "Le signal le plus fiable",
          text:
            "La question sur les charges et les travaux de copropriété. Un visiteur qui s'en préoccupe est un visiteur qui calcule son budget réel, donc qui envisage sérieusement d'acheter.",
        },
        { type: "heading", text: "Traiter une objection sur place" },
        {
          type: "objection",
          objection: "C'est plus petit que sur les photos.",
          understand:
            "Soit les photos étaient trop larges — un problème que vous devez corriger — soit l'acquéreur exprime une déception qu'il faut accueillir sans se défendre.",
          answers: [
            "« Vous avez raison de le dire. Qu'est-ce qui vous paraît le plus juste : la surface globale ou la répartition entre les pièces ? »",
            "« Le séjour fait 28 m², c'est la surface indiquée. Ce qui peut donner cette impression, c'est la disposition actuelle des meubles. Sans le buffet, on gagne visuellement beaucoup. »",
          ],
          avoid: "Ne dites jamais « mais non, c'est grand ». Vous contredisez une perception, et vous perdez.",
        },
        {
          type: "objection",
          objection: "Il y a trop de travaux.",
          understand:
            "L'acquéreur exprime une peur du montant inconnu, plus qu'un refus des travaux eux-mêmes. Ce qui l'angoisse, c'est de ne pas savoir.",
          answers: [
            "« Qu'est-ce qui vous inquiète le plus : le montant, le fait de gérer un chantier, ou le délai avant d'emménager ? »",
            "« J'ai fait chiffrer les postes principaux par deux entreprises locales : la cuisine, l'électricité et les peintures se situent entre 22 000 et 28 000 €. Je peux vous transmettre les devis. »",
          ],
          avoid: "Ne minimisez pas : « oh, ce n'est rien, un coup de peinture ». Vous perdez toute crédibilité technique.",
        },
        {
          type: "objection",
          objection: "C'est trop cher pour ce que c'est.",
          understand:
            "C'est souvent une comparaison implicite avec un autre bien visité. Il faut savoir lequel avant de répondre quoi que ce soit.",
          answers: [
            "« Par rapport à quoi, précisément ? Vous avez vu un bien comparable moins cher ? »",
            "« Si vous me dites lequel, je peux vous expliquer les différences objectives. Il y en a peut-être qui justifient l'écart, et peut-être qu'il n'y en a pas — dans ce cas je le dirai au vendeur. »",
          ],
          avoid:
            "Ne défendez pas le prix immédiatement. Cherchez d'abord la référence de comparaison : sans elle, toute réponse est un pari.",
        },
        { type: "heading", text: "Le double débriefing" },
        {
          type: "table",
          head: ["", "Débriefing acquéreur", "Compte rendu vendeur"],
          rows: [
            ["Quand", "Sur place, puis rappel sous 24 h", "Le jour même ou le lendemain matin"],
            ["Objectif", "Comprendre la décision réelle et l'écart au projet", "Transmettre l'information, y compris désagréable"],
            ["Questions clés", "« Qu'est-ce qui vous a le plus plu ? Qu'est-ce qui vous freine ? Où le situez-vous par rapport aux autres biens vus ? »", "—"],
            ["Contenu", "—", "Profil du visiteur, réactions précises, objections citées, suite envisagée"],
            ["Erreur à éviter", "Demander « alors, ça vous plaît ? » — question fermée sans valeur", "Ne transmettre que les retours positifs"],
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "La question de débriefing la plus utile",
          text:
            "« Si vous deviez classer ce bien parmi ceux que vous avez visités, il serait où ? » La réponse donne instantanément la position réelle du bien dans l'esprit de l'acquéreur, et souvent la raison qui l'empêche d'être premier.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "L'erreur du compte rendu édulcoré",
          text:
            "Transmettre au vendeur uniquement les compliments le conforte dans un prix trop élevé et rend impossible toute conversation d'ajustement. Les objections récurrentes sont l'information la plus précieuse que vous puissiez lui apporter : transmettez-les mot pour mot.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["visite", "objection", "acquereur", "bon-visite", "negociation"],
        },
      ],
      keyPoints: [
        "Commencer par la pièce forte, terminer en y revenant.",
        "Parler trois fois moins que l'envie : l'acquéreur a besoin d'espace pour se projeter.",
        "Laisser un temps libre en fin de visite : c'est souvent là que la décision se prend.",
        "Le signal d'intérêt le plus fiable est la question sur les charges et les travaux.",
        "Face à une objection : chercher la référence de comparaison avant de répondre.",
        "Transmettre au vendeur les objections mot pour mot, pas seulement les compliments.",
      ],
      mistakes: [
        "Commenter chaque pièce sans laisser de silence.",
        "Contredire une perception de l'acquéreur (« mais non, c'est grand »).",
        "Minimiser des travaux pour rassurer.",
        "Faire un compte rendu vendeur uniquement positif.",
      ],
      caseStudy: {
        title: "Une visite qui se passe mal",
        context:
          "Vous faites visiter un T3. Le vendeur, que vous aviez prié de s'absenter, est finalement resté. Dès l'entrée, il commente tout. Dans la cuisine, l'acquéreur dit : « c'est vraiment daté ». Le vendeur répond sèchement : « c'est du solide, ça, ce n'est pas comme ce qu'on fait aujourd'hui ». L'ambiance se tend. L'acquéreur écourte la visite.",
        tasks: [
          "Identifiez les erreurs commises avant la visite.",
          "Indiquez ce que vous faites pendant, au moment précis de la tension.",
          "Rédigez ce que vous direz au vendeur après.",
          "Rédigez votre rappel à l'acquéreur le lendemain.",
        ],
        correction: [
          "Erreurs avant : l'accord sur l'absence du vendeur n'a pas été confirmé la veille, et les conséquences de sa présence ne lui ont pas été expliquées concrètement. Il fallait rappeler la veille et reformuler : « votre présence empêchera l'acheteur de dire ce qu'il pense, or j'ai besoin de l'entendre ».",
          "Pendant, au moment de la tension : intervenir immédiatement et sans mettre personne en cause. « Monsieur Duval a raison sur un point : les meubles sont solides. Et vous avez raison aussi, le style date des années quatre-vingt-dix. Monsieur Duval, je vous propose de nous laisser terminer le tour, je vous rejoins juste après. » Puis on sort le vendeur de la scène, calmement.",
          "Après, au vendeur : « Je voudrais qu'on reparle de votre présence pendant les visites. Ce n'est pas une question de confiance : un acheteur qui n'ose pas dire ce qui lui déplaît ne dit rien, et je perds l'information dont j'ai besoin pour vous conseiller. Ce visiteur a trouvé la cuisine datée — c'est le troisième à le dire. C'est une information utile, pas une attaque contre vous. »",
          "Rappel à l'acquéreur : « Bonjour, je voulais vous rappeler après la visite d'hier. D'abord, je suis désolé pour l'ambiance : la présence du propriétaire n'était pas prévue. Ensuite, votre remarque sur la cuisine est juste, et vous n'êtes pas le premier à la faire. J'ai deux devis de rénovation à vous transmettre si le reste du bien vous intéresse. Et si ce n'est pas celui-là, dites-moi ce qui manquait : j'ai deux autres biens qui pourraient correspondre. »",
          "Ce dernier point est décisif : une visite ratée peut conserver l'acquéreur, à condition de rappeler et d'être honnête.",
        ],
      },
      quiz: [
        {
          id: "vi2q1",
          type: "qcm",
          question: "Par quelle pièce commencer une visite ?",
          options: [
            "Par la plus petite, pour finir en beauté",
            "Par la pièce la plus forte du bien",
            "Par la salle de bains, pour évacuer le point faible",
            "Par ordre d'entrée dans le logement, sans réflexion",
          ],
          answer: 1,
          explanation:
            "La première impression conditionne la lecture de tout le reste. On commence par ce qui vend, et on y revient en fin de parcours pour que ce soit la dernière image.",
          skill: "visite",
          topic: "conduite-visite",
        },
        {
          id: "vi2q2",
          type: "qcm",
          question: "Un acquéreur dit « c'est trop cher pour ce que c'est ». Quelle est la meilleure première réaction ?",
          options: [
            "Défendre le prix avec les arguments du vendeur",
            "Demander par rapport à quel bien il fait cette comparaison",
            "Proposer immédiatement de transmettre une offre inférieure",
            "Expliquer que le marché est ainsi",
          ],
          answer: 1,
          explanation:
            "L'objection repose presque toujours sur une comparaison implicite. Sans connaître la référence, toute réponse est un pari. Identifier le bien comparé permet d'expliquer les écarts objectifs.",
          skill: "negociation",
          topic: "conduite-visite",
        },
        {
          id: "vi2q3",
          type: "vraifaux",
          question: "Il faut transmettre au vendeur uniquement les retours positifs, pour ne pas le décourager.",
          answer: 1,
          explanation:
            "Faux. Les objections récurrentes sont l'information la plus utile pour ajuster la stratégie. Un vendeur qui n'entend que des compliments reste convaincu que son prix est juste.",
          skill: "excellence",
          topic: "conduite-visite",
        },
        {
          id: "vi2q4",
          type: "qcm",
          question: "Quel signal indique le plus sûrement un intérêt réel pendant une visite ?",
          options: [
            "Le visiteur complimente le bien",
            "Le visiteur pose des questions sur les charges et les travaux de copropriété",
            "Le visiteur reste plus de trente minutes",
            "Le visiteur prend des photos",
          ],
          answer: 1,
          explanation:
            "S'intéresser aux charges et aux travaux signifie calculer un budget réel de possession : c'est le comportement de quelqu'un qui envisage sérieusement d'acheter.",
          skill: "visite",
          topic: "conduite-visite",
        },
      ],
      sources: [
        { label: "ANIL — Acheter un logement", url: "https://www.anil.org/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
