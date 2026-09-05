import type { CourseModule } from "@/lib/types";

export const moduleNegociation: CourseModule = {
  id: "negociation",
  level: 13,
  title: "Négociation",
  subtitle: "Faire aboutir un accord entre deux personnes qui ne se parlent pas",
  description:
    "La négociation immobilière n'est pas un affrontement : c'est la recherche d'un accord entre deux parties qui ont chacune des contraintes réelles. Ce module donne la méthode, les techniques, et surtout la posture.",
  icon: "♟️",
  skills: ["negociation", "psychologie"],
  requires: ["acquereur"],
  outcomes: [
    "Préparer une négociation en identifiant les intérêts réels des deux parties",
    "Présenter une offre basse à un vendeur sans provoquer de rupture",
    "Utiliser les leviers autres que le prix",
    "Conduire un aller-retour jusqu'à un accord écrit",
  ],
  lessons: [
    {
      id: "ne1",
      moduleId: "negociation",
      title: "La posture : servir l'accord, pas gagner",
      summary:
        "Comprendre pourquoi le conseiller n'est pas le négociateur d'un camp, et ce que cela change concrètement dans sa façon de faire.",
      duration: 16,
      difficulty: "intermediaire",
      skills: ["negociation", "psychologie"],
      objectives: [
        "Distinguer position et intérêt",
        "Adopter la posture du tiers qui fait aboutir un accord",
        "Préparer une négociation en cinq points",
        "Reconnaître les situations où l'accord n'est pas possible",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Le conseiller est mandaté par le vendeur, et il doit défendre ses intérêts. Mais il a aussi un devoir d'information et de conseil envers l'acquéreur, et surtout : sans accord, il n'y a pas de vente. Sa véritable mission n'est donc pas de faire gagner un camp, c'est de rendre l'accord possible.",
        },
        { type: "heading", text: "Position et intérêt" },
        {
          type: "definition",
          term: "Position",
          simple: "Ce que la personne demande : « je ne descends pas en dessous de 350 000 € ».",
          pro:
            "Expression chiffrée ou catégorique d'une demande, généralement rigide et présentée comme non négociable.",
          why: "Les positions s'opposent frontalement. Tant qu'on reste au niveau des positions, il n'y a qu'un gagnant possible.",
        },
        {
          type: "definition",
          term: "Intérêt",
          simple: "La raison derrière la demande : « j'ai besoin de 340 000 € nets pour financer mon achat en Bretagne ».",
          pro:
            "Besoin réel, contrainte ou objectif sous-jacent à la position exprimée. Plusieurs solutions différentes peuvent satisfaire un même intérêt.",
          why:
            "Les intérêts, contrairement aux positions, ne s'opposent pas toujours. C'est à ce niveau que l'accord devient possible.",
        },
        {
          type: "example",
          title: "Le déblocage par l'intérêt",
          text:
            "Position du vendeur : 350 000 €, pas un euro de moins. Position de l'acquéreur : 320 000 €, c'est son maximum. Écart apparemment infranchissable. Intérêt du vendeur : disposer d'une somme précise à une date précise pour son propre achat. Intérêt de l'acquéreur : ne pas dépasser une mensualité, et disposer de temps pour financer des travaux. Solution trouvée : accord à 332 000 €, avec une date d'acte avancée de six semaines qui permet au vendeur de sécuriser son achat, et le mobilier de cuisine laissé sur place, ce qui économise 6 000 € de travaux à l'acquéreur. Aucune des deux positions initiales n'a été satisfaite. Les deux intérêts l'ont été.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "La question qui ouvre tout",
          text:
            "« Qu'est-ce que vous en ferez ? » posée au vendeur, et « qu'est-ce qui vous ferait dire oui ? » posée à l'acquéreur. Ces deux questions déplacent la conversation des positions vers les intérêts, et c'est là que se trouvent les solutions.",
        },
        { type: "heading", text: "Les cinq points de préparation" },
        {
          type: "steps",
          items: [
            {
              title: "1. Connaître le prix plancher réel du vendeur",
              text: "Pas celui qu'il annonce : celui en dessous duquel il ne signera pas. Il se découvre par la question de l'usage des fonds, jamais en le demandant frontalement.",
            },
            {
              title: "2. Connaître la capacité réelle de l'acquéreur",
              text: "Son maximum financier, son maximum psychologique, et son degré d'attachement au bien. Un acquéreur qui a visité trois fois n'est pas dans la même situation qu'un premier visiteur.",
            },
            {
              title: "3. Identifier les leviers hors prix",
              text: "Date de signature, date de libération, mobilier, travaux à réaliser avant la vente, répartition d'une charge de copropriété, prise en charge d'un diagnostic complémentaire.",
            },
            {
              title: "4. Connaître l'état du marché",
              text: "Combien de biens concurrents, quel délai moyen, quelle profondeur de négociation constatée. Ce sont vos arguments objectifs.",
            },
            {
              title: "5. Déterminer ce qui se passe sans accord",
              text: "Pour le vendeur : combien de temps de plus, quel coût. Pour l'acquéreur : quelles alternatives réelles. C'est ce qui donne son poids à chaque position.",
            },
          ],
        },
        { type: "heading", text: "Les leviers autres que le prix" },
        {
          type: "table",
          head: ["Levier", "Ce qu'il apporte au vendeur", "Ce qu'il coûte à l'acquéreur"],
          rows: [
            ["Date d'acte avancée", "Sécurise son propre calendrier, réduit son incertitude", "Souvent rien, s'il est prêt"],
            ["Date de libération différée", "Lui laisse le temps de trouver, évite un double déménagement", "Un délai d'attente, parfois compensé"],
            ["Absence de condition suspensive de prêt (acquéreur comptant)", "Sécurité maximale", "Aucune, si le financement est réellement disponible"],
            ["Prise en charge d'une quote-part de travaux votés", "Réduit son coût de sortie", "Un montant connu, souvent inférieur à ce qu'il craignait"],
            ["Mobilier ou équipements laissés", "Évite un débarras", "Économise des achats"],
            ["Renonciation à une exigence de travaux préalables", "Évite un chantier avant vente", "Des travaux qu'il fera à son goût"],
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "Le principe fondamental",
          text:
            "Une concession qui coûte peu à celui qui la fait et vaut beaucoup pour celui qui la reçoit est la matière première de tout accord. Votre travail consiste à trouver ces asymétries. Il y en a presque toujours, et presque personne ne les cherche.",
        },
        { type: "heading", text: "Quand l'accord n'est pas possible" },
        {
          type: "paragraph",
          text:
            "Certaines négociations ne doivent pas aboutir. Un vendeur dont le prix plancher est supérieur au maximum de tous les acquéreurs du marché ne vendra pas aujourd'hui. Le reconnaître tôt et le dire clairement est plus professionnel que de faire durer une négociation stérile qui épuisera les deux parties.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le signal d'arrêt",
          text:
            "Quand l'écart persiste après deux allers-retours documentés et que les leviers hors prix ont été explorés, il n'y a pas d'accord. Dites-le : « Je ne crois pas que nous puissions rapprocher ces positions aujourd'hui. Je préfère vous le dire plutôt que de vous faire perdre trois semaines. » Cette franchise ramène régulièrement une des deux parties quelques jours plus tard.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["negociation", "objection", "net-vendeur", "conditions-suspensives", "offre-achat"],
        },
      ],
      keyPoints: [
        "Le conseiller ne fait pas gagner un camp : il rend l'accord possible.",
        "Les positions s'opposent, les intérêts se rejoignent souvent.",
        "Cinq points de préparation : plancher vendeur, capacité acquéreur, leviers, marché, alternative.",
        "Date, mobilier, travaux, répartition de charges : les leviers hors prix débloquent la plupart des situations.",
        "Chercher les asymétries : ce qui coûte peu à l'un et vaut beaucoup à l'autre.",
        "Savoir dire qu'un accord n'est pas possible aujourd'hui est professionnel.",
      ],
      mistakes: [
        "Rester au niveau des positions chiffrées.",
        "Ne négocier que sur le prix.",
        "Demander frontalement au vendeur son prix plancher.",
        "Faire durer une négociation manifestement bloquée.",
      ],
      quiz: [
        {
          id: "ne1q1",
          type: "qcm",
          question: "Quelle est la différence entre une position et un intérêt ?",
          options: [
            "La position est écrite, l'intérêt est verbal",
            "La position est la demande exprimée, l'intérêt est le besoin réel qui la sous-tend",
            "La position concerne le vendeur, l'intérêt concerne l'acquéreur",
            "Ce sont deux mots pour la même chose",
          ],
          answer: 1,
          explanation:
            "Les positions s'opposent frontalement ; les intérêts, eux, peuvent souvent être satisfaits simultanément par des solutions différentes de celles initialement demandées.",
          skill: "negociation",
          topic: "posture",
        },
        {
          id: "ne1q2",
          type: "qcm",
          question: "Quel levier hors prix est souvent le plus efficace ?",
          options: [
            "La couleur des murs",
            "La date de signature ou de libération du bien",
            "Le choix du notaire",
            "Le nombre de visites accordées",
          ],
          answer: 1,
          explanation:
            "Le calendrier a une valeur considérable pour un vendeur qui a lui-même un projet d'achat, et coûte souvent très peu à un acquéreur prêt. C'est l'asymétrie la plus fréquente.",
          skill: "negociation",
          topic: "posture",
        },
        {
          id: "ne1q3",
          type: "vraifaux",
          question: "Il faut poursuivre une négociation tant qu'aucune des parties n'a formellement rompu.",
          answer: 1,
          explanation:
            "Faux. Après deux allers-retours documentés et l'exploration des leviers hors prix, l'absence de rapprochement signale une incompatibilité réelle. Le dire épargne du temps à tout le monde et préserve la relation.",
          skill: "negociation",
          topic: "posture",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Offre d'achat", url: "https://www.service-public.fr/particuliers/vosdroits/F2957" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "ne2",
      moduleId: "negociation",
      title: "Présenter une offre et conduire l'aller-retour",
      summary:
        "La technique concrète : comment annoncer une offre basse, comment formuler une contre-proposition, comment conclure.",
      duration: 18,
      difficulty: "avance",
      skills: ["negociation", "psychologie", "transaction"],
      objectives: [
        "Présenter une offre inférieure au prix sans provoquer de rupture",
        "Structurer une contre-proposition argumentée",
        "Gérer les offres multiples avec équité",
        "Sécuriser l'accord par écrit immédiatement",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Le moment où vous annoncez une offre basse à un vendeur est l'un des plus délicats du métier. Mal conduit, il déclenche une réaction de rejet immédiate et définitive. Bien conduit, il ouvre une négociation qui aboutit.",
        },
        { type: "heading", text: "Présenter une offre inférieure au prix" },
        {
          type: "steps",
          items: [
            {
              title: "1. Ne jamais annoncer par téléphone en début de conversation",
              text: "Le vendeur doit être disponible et assis. Un chiffre annoncé alors qu'il est dans sa voiture provoque une réaction émotionnelle qu'il devra ensuite défendre par orgueil.",
            },
            {
              title: "2. Présenter d'abord le candidat, pas le chiffre",
              text: "« J'ai reçu une offre écrite. Avant le montant, je veux vous parler du dossier : couple avec 68 000 € d'apport, accord de principe bancaire obtenu, aucun bien à vendre, disponibles pour signer l'acte fin juin, ce qui correspond à votre calendrier. »",
            },
            {
              title: "3. Annoncer le chiffre, calmement, sans commentaire",
              text: "« Leur offre est à 296 000 €. » Puis silence. Ne commentez pas, ne justifiez pas, ne vous excusez pas.",
            },
            {
              title: "4. Laisser la réaction se produire",
              text: "Le vendeur va réagir, parfois vivement. Accueillez : « Je comprends. » Ne défendez ni l'offre ni l'acquéreur.",
            },
            {
              title: "5. Remettre l'offre dans son contexte",
              text: "« Cette offre représente 5,7 % sous votre prix. Sur le secteur, l'écart moyen constaté entre prix affiché et prix signé est de l'ordre de 5 %. Nous sommes dans une négociation normale, pas dans une provocation. »",
            },
            {
              title: "6. Proposer une réponse, pas un choix binaire",
              text: "« Vous avez trois options : accepter, refuser, ou faire une contre-proposition. Je vous recommande la troisième, et voici à quel montant et avec quels arguments. »",
            },
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "L'erreur fatale",
          text:
            "« J'ai une offre mais elle est très basse, je pense qu'il faut refuser. » Vous venez de décider à la place du vendeur, de dévaloriser l'acquéreur et de fermer une négociation qui aurait peut-être abouti. Votre rôle est de présenter et de recommander, pas de trancher.",
        },
        { type: "heading", text: "La contre-proposition" },
        {
          type: "paragraph",
          text:
            "Une contre-proposition efficace n'est jamais un simple chiffre. Elle comporte trois éléments : un montant, une justification objective, et une contrepartie ou une ouverture qui montre la volonté d'aboutir.",
        },
        {
          type: "example",
          title: "Une contre-proposition complète",
          text:
            "« M. et Mme Roux vous remercient pour votre offre et pour la qualité de votre dossier, qu'ils ont bien noté. Ils ne peuvent pas y donner suite à 296 000 €, pour une raison précise : la vente doit leur permettre de financer leur acquisition, déjà engagée, et ils ont un plancher à 305 000 €. Ils vous proposent 308 000 €, avec deux éléments : ils laissent l'ensemble du mobilier de cuisine, installé en 2021, et ils acceptent votre calendrier de signature fin juin. »",
        },
        {
          type: "list",
          title: "Les règles de la contre-proposition",
          ordered: true,
          items: [
            "Toujours remercier l'offre : elle représente un engagement réel de la part de l'acquéreur.",
            "Toujours justifier par un élément objectif ou par une contrainte réelle, jamais par « c'est mon prix ».",
            "Toujours ajouter un élément de valeur, même modeste : cela signale la volonté d'aboutir.",
            "Toujours par écrit, avec un délai de réponse.",
            "Jamais plus de deux allers-retours : au-delà, la lassitude s'installe et le dossier se dégrade.",
          ],
        },
        { type: "heading", text: "Les offres multiples" },
        {
          type: "paragraph",
          text:
            "Quand deux offres arrivent simultanément, la tentation est de créer une enchère. C'est risqué et souvent contre-productif : les deux acquéreurs peuvent se retirer, et le procédé est mal vécu.",
        },
        {
          type: "compare",
          left: {
            title: "Pratique risquée",
            items: [
              "Faire monter les acquéreurs l'un contre l'autre",
              "Communiquer le montant de l'offre concurrente",
              "Laisser croire à une offre qui n'existe pas",
              "Ne pas informer le vendeur de toutes les offres reçues",
            ],
          },
          right: {
            title: "Pratique professionnelle",
            items: [
              "Informer chaque candidat qu'une autre offre existe, sans en donner le montant",
              "Fixer une date limite identique pour les meilleures offres",
              "Transmettre au vendeur toutes les offres, avec l'analyse de solidité de chacune",
              "Rappeler que le vendeur choisit librement, y compris une offre inférieure mieux sécurisée",
            ],
          },
        },
        {
          type: "callout",
          variant: "legal",
          title: "Une obligation à ne pas oublier",
          text:
            "Toutes les offres reçues doivent être transmises au mandant. Ne pas transmettre une offre, même jugée insuffisante, est un manquement. Le choix appartient au vendeur, y compris celui de retenir une offre moins élevée mais mieux financée.",
        },
        { type: "heading", text: "Conclure" },
        {
          type: "list",
          items: [
            "Dès l'accord verbal, faire confirmer par écrit dans les heures qui suivent : un accord non écrit se défait en une nuit.",
            "Reprendre tous les éléments : prix, charge des honoraires, conditions suspensives, calendrier, éléments mobiliers inclus.",
            "Transmettre immédiatement au notaire pour la rédaction de l'avant-contrat.",
            "Appeler les deux parties le lendemain : la période entre l'accord et la signature est celle où les doutes reviennent.",
            "Ne jamais laisser un accord verbal dormir un week-end.",
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "La règle des 24 heures",
          text:
            "Un accord obtenu le vendredi soir et non formalisé avant lundi a une probabilité élevée de se défaire. L'entourage donne son avis, les doutes remontent, un autre bien apparaît. Formalisez immédiatement, même brièvement, même par courriel.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["offre-achat", "negociation", "compromis", "conditions-suspensives", "sequestre", "net-vendeur"],
        },
      ],
      keyPoints: [
        "Présenter le dossier de l'acquéreur avant d'annoncer le montant.",
        "Annoncer le chiffre calmement, puis se taire.",
        "Recommander une action, sans décider à la place du vendeur.",
        "Une contre-proposition comporte un montant, une justification et une ouverture.",
        "Toutes les offres doivent être transmises au mandant, sans exception.",
        "Formaliser l'accord par écrit dans les 24 heures.",
      ],
      mistakes: [
        "Annoncer une offre par téléphone alors que le vendeur conduit.",
        "Dire « l'offre est très basse, je pense qu'il faut refuser ».",
        "Communiquer le montant d'une offre concurrente à l'autre candidat.",
        "Laisser un accord verbal non formalisé pendant un week-end.",
      ],
      caseStudy: {
        title: "Une offre à 10 % sous le prix",
        context:
          "Bien affiché 349 000 € FAI depuis onze semaines. Huit visites, aucune offre jusqu'ici. Une offre écrite arrive à 315 000 €. L'acquéreur : couple, 90 000 € d'apport, accord de principe bancaire écrit, pas de bien à vendre, disponible pour signer fin juillet. Le vendeur a besoin de 320 000 € nets pour son achat, déjà sous compromis, avec un acte prévu début septembre.",
        tasks: [
          "Analysez la situation des deux côtés.",
          "Rédigez votre présentation de l'offre au vendeur.",
          "Proposez une stratégie de contre-proposition chiffrée.",
          "Identifiez les leviers hors prix mobilisables.",
        ],
        correction: [
          "Analyse : côté vendeur, la contrainte est forte — un compromis déjà signé sur son achat, un besoin net de 320 000 € et un acte en septembre. Onze semaines sans offre confirment que le prix affiché est au-dessus du marché. Côté acquéreur, le dossier est excellent : apport élevé, financement validé, aucune vente préalable, calendrier compatible. C'est exactement le profil qui sécurise une opération sous contrainte de temps.",
          "Présentation au vendeur : « J'ai une offre écrite, et avant le montant je veux vous parler du dossier, parce qu'il est important. Couple, 90 000 € d'apport, accord de principe bancaire écrit en main, aucun bien à vendre, disponibles pour signer fin juillet — soit six semaines avant votre échéance. C'est le meilleur dossier que nous ayons vu en onze semaines. Leur offre est à 315 000 €. » Puis silence.",
          "Mise en contexte : « Cela représente 9,7 % sous le prix affiché. C'est un écart important, et je le prends au sérieux. Mais regardons les faits : onze semaines, huit visites, aucune autre offre. Le marché nous dit quelque chose. Et votre acte de septembre approche. »",
          "Contre-proposition recommandée : 328 000 € FAI, ce qui laisse une marge de convergence vers 322 000 à 325 000 €, au-dessus du plancher de 320 000 € nets une fois les honoraires ajustés selon leur charge contractuelle. Justification à donner : le calendrier tenu et le dossier sécurisé ont une valeur, mais l'écart demandé dépasse ce que la contrainte du vendeur permet.",
          "Leviers hors prix : avancer la date d'acte à fin juillet, ce qui sécurise entièrement le vendeur et vaut objectivement quelque chose ; laisser sur place des éléments d'équipement ; proposer que le vendeur reste dans les lieux quelques semaines contre indemnité s'il en a besoin ; ne pas exiger de travaux préalables. Chacun de ces éléments permet de rapprocher les positions sans que le vendeur ne descende sous son plancher réel.",
        ],
      },
      quiz: [
        {
          id: "ne2q1",
          type: "qcm",
          question: "Comment présenter une offre inférieure au prix demandé ?",
          options: [
            "En annonçant le montant immédiatement pour ne pas faire durer",
            "En présentant d'abord la solidité du dossier acquéreur, puis le montant, puis en se taisant",
            "En précisant que vous trouvez l'offre trop basse",
            "En envoyant simplement l'offre par courriel",
          ],
          answer: 1,
          explanation:
            "Présenter le dossier avant le chiffre installe le contexte et évite une réaction purement émotionnelle. Le silence après l'annonce laisse au vendeur l'espace de réagir sans que vous ayez à défendre l'offre.",
          skill: "negociation",
          topic: "offre",
        },
        {
          id: "ne2q2",
          type: "vraifaux",
          question: "Un conseiller peut ne pas transmettre au vendeur une offre qu'il juge manifestement insuffisante.",
          answer: 1,
          explanation:
            "Faux. Toutes les offres reçues doivent être transmises au mandant : le choix lui appartient. Ne pas transmettre constitue un manquement aux obligations du mandataire.",
          skill: "juridique",
          topic: "offre",
        },
        {
          id: "ne2q3",
          type: "qcm",
          question: "Que doit contenir une contre-proposition efficace ?",
          options: [
            "Un montant uniquement",
            "Un montant, une justification objective et un élément d'ouverture ou de contrepartie",
            "Un montant et une date limite très courte",
            "Un montant et la mention d'un autre acquéreur intéressé",
          ],
          answer: 1,
          explanation:
            "Un chiffre seul se lit comme un refus. La justification rend la position compréhensible, et l'élément d'ouverture signale la volonté d'aboutir.",
          skill: "negociation",
          topic: "offre",
        },
        {
          id: "ne2q4",
          type: "qcm",
          question: "Un accord verbal est obtenu vendredi à 19 h. Que faites-vous ?",
          options: [
            "Vous appelez tout le monde lundi matin",
            "Vous formalisez l'accord par écrit dans les heures qui suivent, même brièvement",
            "Vous attendez la rédaction du compromis par le notaire",
            "Vous demandez un chèque d'acompte immédiatement",
          ],
          answer: 1,
          explanation:
            "Un accord non formalisé se défait souvent pendant le week-end : l'entourage intervient, les doutes remontent. Un écrit rapide, même simple, sécurise l'accord. Aucun chèque n'est encaissé à ce stade.",
          skill: "transaction",
          topic: "offre",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Offre d'achat et avant-contrat", url: "https://www.service-public.fr/particuliers/vosdroits/F2957" },
        { label: "Notaires de France", url: "https://www.notaires.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
