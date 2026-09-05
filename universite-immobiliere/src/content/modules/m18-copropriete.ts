import type { CourseModule } from "@/lib/types";

export const moduleCopropriete: CourseModule = {
  id: "copropriete",
  level: 18,
  title: "Copropriété approfondie",
  subtitle: "Lire un dossier, détecter les risques, expliquer à l'acquéreur",
  description:
    "Analyser un dossier de copropriété est une compétence rare et immédiatement valorisable. Ce module donne la méthode de lecture et les signaux d'alerte, avec un exercice d'analyse complet.",
  icon: "🏢",
  skills: ["copropriete", "juridique"],
  requires: ["fondamentaux"],
  outcomes: [
    "Lire un dossier de copropriété dans le bon ordre",
    "Détecter une copropriété en difficulté",
    "Calculer l'impact financier réel des travaux votés",
    "Expliquer la situation à un acquéreur sans l'effrayer ni le tromper",
  ],
  lessons: [
    {
      id: "co1",
      moduleId: "copropriete",
      title: "Analyser un dossier de copropriété",
      summary:
        "La méthode de lecture en huit étapes, et les douze signaux qui doivent attirer votre attention.",
      duration: 20,
      difficulty: "avance",
      skills: ["copropriete"],
      objectives: [
        "Lire les documents dans un ordre efficace",
        "Repérer les douze signaux d'alerte d'un dossier",
        "Chiffrer l'impact des travaux votés sur le lot",
        "Restituer l'analyse à l'acquéreur et au vendeur",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un dossier de copropriété fait souvent plus de cent pages. Personne ne les lit intégralement. En revanche, il existe une méthode de lecture ciblée qui permet, en quarante minutes, d'extraire l'essentiel — et de repérer ce qui fera capoter une vente trois mois plus tard.",
        },
        { type: "heading", text: "L'ordre de lecture" },
        {
          type: "steps",
          items: [
            {
              title: "1. La fiche synthétique de copropriété (5 minutes)",
              text: "Nombre de lots, budget prévisionnel, montant des impayés, présence d'équipements collectifs, procédures en cours. C'est le tableau de bord : lisez-la en premier.",
            },
            {
              title: "2. Le dernier appel de fonds (2 minutes)",
              text: "Le montant réel payé par le lot, sa périodicité, et ce qu'il inclut. C'est la donnée que l'acquéreur veut connaître.",
            },
            {
              title: "3. Les trois derniers procès-verbaux d'assemblée générale (20 minutes)",
              text: "En partant du plus récent. On cherche : travaux votés, travaux refusés, montants, résolutions contestées, ambiance des débats, changements de syndic.",
            },
            {
              title: "4. Le règlement de copropriété — parties ciblées (5 minutes)",
              text: "La destination de l'immeuble, la définition des parties communes et privatives, la répartition des charges. On ne lit pas les 80 pages : on cible.",
            },
            {
              title: "5. L'état descriptif de division (3 minutes)",
              text: "Le nombre exact et la nature des lots vendus, avec leurs tantièmes.",
            },
            {
              title: "6. Le carnet d'entretien (3 minutes)",
              text: "L'historique des gros travaux : toiture, façade, ascenseur, chauffage, réseaux. Ce qui a été fait, et surtout ce qui n'a jamais été fait.",
            },
            {
              title: "7. Le plan pluriannuel de travaux, s'il existe (5 minutes)",
              text: "Ce qui est prévu sur dix ans, avec les montants estimés. C'est l'anticipation la plus utile pour l'acquéreur.",
            },
            {
              title: "8. La synthèse écrite (10 minutes)",
              text: "Une page : les points positifs, les points d'attention, le chiffrage de ce qui incombera à l'acquéreur. C'est ce document qui fait la différence.",
            },
          ],
        },
        { type: "heading", text: "Les douze signaux d'alerte" },
        {
          type: "table",
          head: ["Signal", "Ce qu'il révèle", "Gravité"],
          rows: [
            ["Impayés supérieurs à 8-10 % du budget", "La copropriété avance les charges des défaillants", "Élevée"],
            ["Travaux votés depuis plus de deux ans, non réalisés", "Blocage financier ou conflit", "Élevée"],
            ["Trois syndics en cinq ans", "Conflit chronique ou gestion difficile", "Élevée"],
            ["Procédure judiciaire en cours mentionnée aux PV", "Contentieux, coût, incertitude", "Élevée"],
            ["Absence de conseil syndical", "Aucun contrôle du syndic", "Moyenne"],
            ["Fonds de travaux très faible face à un plan pluriannuel chargé", "Appels de fonds importants à venir", "Élevée"],
            ["Charges de chauffage très supérieures aux immeubles comparables", "Installation vétuste ou bâti énergivore", "Moyenne"],
            ["Ravalement ou toiture jamais réalisés depuis plus de 25 ans", "Gros travaux inévitables à court terme", "Élevée"],
            ["Résolutions systématiquement rejetées", "Blocage décisionnel", "Moyenne"],
            ["Nombreux lots appartenant à un même propriétaire", "Un copropriétaire majoritaire oriente les décisions", "Moyenne"],
            ["Ascenseur ancien sans mise aux normes évoquée", "Travaux prévisibles", "Moyenne"],
            ["Absence de carnet d'entretien ou de fiche synthétique", "Gestion défaillante", "Moyenne"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le signal le plus sous-estimé",
          text:
            "Un fonds de travaux quasi vide face à un plan pluriannuel de travaux chiffré à plusieurs centaines de milliers d'euros. Cela signifie que les appels de fonds arriveront, et qu'ils seront supportés par le propriétaire du moment. Un acquéreur informé négocie ; un acquéreur non informé se retourne ensuite contre le professionnel.",
        },
        { type: "heading", text: "Chiffrer l'impact réel" },
        {
          type: "example",
          title: "Le calcul à présenter",
          text:
            "Copropriété de 32 lots. PV de 2024 : ravalement voté pour 410 000 € TTC, appels prévus sur trois exercices, travaux non commencés. Le lot vendu porte 38/1000 de charges générales. Quote-part : 410 000 × 38/1000 = 15 580 €. Fonds de travaux disponible attribuable au lot : environ 1 900 €. Reste à financer par le propriétaire au moment des appels : environ 13 680 €. C'est ce chiffre, et non le montant global des travaux, qui doit figurer dans votre synthèse.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "Répartition entre vendeur et acquéreur",
          text:
            "La répartition de la charge des travaux votés entre vendeur et acquéreur dépend de la date d'exigibilité des appels de fonds et des stipulations de l'avant-contrat. Ce point se règle avec le notaire et doit être expressément prévu. Ne l'improvisez jamais. À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "Restituer l'analyse" },
        {
          type: "compare",
          left: {
            title: "Restitution qui effraie",
            items: [
              "« Attention, il y a beaucoup de travaux dans cette copropriété »",
              "Énumérer tous les points négatifs sans les hiérarchiser",
              "Transmettre 120 pages sans commentaire",
              "Employer un vocabulaire technique non expliqué",
            ],
          },
          right: {
            title: "Restitution professionnelle",
            items: [
              "« Voici les trois points à connaître, chiffrés, et les deux points positifs »",
              "Hiérarchiser : ce qui est certain, ce qui est probable, ce qui est hypothétique",
              "Une synthèse d'une page, avec les documents complets en annexe",
              "Expliquer chaque terme employé",
            ],
          },
        },
        {
          type: "callout",
          variant: "quote",
          title: "La synthèse d'une page",
          text:
            "« Copropriété de 32 lots, construite en 1974, bien tenue. Points positifs : ascenseur refait en 2021, aucun impayé significatif, conseil syndical actif. Points d'attention : un ravalement voté en 2024 pour 410 000 €, dont votre quote-part serait d'environ 15 600 €, partiellement couverte par le fonds de travaux ; le chauffage collectif au gaz date de 2003 et devra être remplacé dans les prochaines années. Ces éléments sont intégrés dans le prix proposé. » Ce document, remis avant la visite, transforme la relation avec un acquéreur.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["copropriete", "fiche-synthetique", "proces-verbal-ag", "assemblee-generale", "syndic", "charges-copropriete", "fonds-travaux", "ppt", "etat-date", "carnet-entretien", "tantiemes", "reglement-copropriete"],
        },
      ],
      keyPoints: [
        "Une lecture ciblée en huit étapes permet d'extraire l'essentiel en quarante minutes.",
        "La fiche synthétique et les trois derniers PV d'AG donnent 80 % de l'information.",
        "Douze signaux d'alerte, dont les impayés, les travaux votés non réalisés et le fonds de travaux insuffisant.",
        "Chiffrer la quote-part du lot, pas le montant global des travaux.",
        "La répartition de la charge des travaux se règle avec le notaire dans l'avant-contrat.",
        "Une synthèse d'une page, hiérarchisée, remise avant la visite, change la relation.",
      ],
      mistakes: [
        "Transmettre le dossier complet sans synthèse ni commentaire.",
        "Citer le montant global des travaux au lieu de la quote-part du lot.",
        "Improviser la répartition des travaux entre vendeur et acquéreur.",
        "Ne pas lire les PV d'assemblée générale avant de fixer un prix.",
      ],
      caseStudy: {
        title: "Analyse d'un dossier réel",
        context:
          "Copropriété de 46 lots, immeuble de 1969, chauffage collectif au fioul, ascenseur, gardien. Fiche synthétique : budget prévisionnel 148 000 €, impayés 21 400 €. PV 2023 : refus d'un projet de remplacement de la chaudière fioul, 240 000 €. PV 2024 : nouvelle présentation du même projet, reporté. PV 2025 : ravalement voté, 380 000 €, appels sur deux exercices, travaux non commencés. Fonds de travaux : 41 000 €. Trois syndics depuis 2020. Le lot vendu porte 29/1000.",
        tasks: [
          "Calculez l'exposition financière du lot.",
          "Classez les signaux d'alerte par gravité.",
          "Rédigez la synthèse d'une page destinée à l'acquéreur.",
          "Indiquez l'effet de cette analyse sur l'estimation du bien.",
        ],
        correction: [
          "Exposition financière : ravalement voté, quote-part = 380 000 × 29/1000 = 11 020 €. Fonds de travaux attribuable au lot ≈ 41 000 × 29/1000 = 1 189 €. Reste à financer sur le ravalement ≈ 9 830 €. À cela s'ajoute la chaudière fioul, refusée deux fois mais inéluctable : quote-part potentielle = 240 000 × 29/1000 = 6 960 €. Exposition prévisible totale : environ 17 000 € à horizon de quelques années.",
          "Signaux par gravité — élevée : impayés de 21 400 € pour un budget de 148 000 €, soit 14,5 %, ce qui est très élevé ; remplacement de chaudière refusé deux fois alors qu'il est nécessaire, signe de blocage décisionnel ; trois syndics en cinq ans. Moyenne : chauffage collectif au fioul en 2025, à la fois coûteux et exposé aux évolutions réglementaires ; fonds de travaux insuffisant au regard des projets.",
          "Synthèse type : « Copropriété de 46 lots, construite en 1969. Points d'attention chiffrés : un ravalement a été voté en 2025 pour 380 000 € ; la quote-part de ce lot s'élève à environ 11 000 €, dont environ 1 200 € couverts par le fonds de travaux. Le remplacement de la chaudière collective au fioul a été présenté deux fois et refusé ; il représenterait environ 7 000 € pour ce lot et paraît difficilement évitable à moyen terme. Le niveau d'impayés, à 14,5 % du budget annuel, est élevé et mérite votre attention. La copropriété a changé trois fois de syndic depuis 2020. Tous les documents sont à votre disposition et je vous propose d'en parler avant la visite. »",
          "Effet sur l'estimation : une exposition prévisible de l'ordre de 17 000 €, combinée à un fonctionnement de copropriété difficile, justifie une décote significative par rapport à des lots comparables dans des copropriétés saines. Cette décote doit être expliquée au vendeur dès l'estimation, avec les chiffres. La lui cacher revient à préparer une renégociation au compromis.",
        ],
      },
      quiz: [
        {
          id: "co1q1",
          type: "qcm",
          question: "Par quel document commencer l'analyse d'un dossier de copropriété ?",
          options: [
            "Le règlement de copropriété, intégralement",
            "La fiche synthétique de copropriété",
            "Le carnet d'entretien",
            "L'état descriptif de division",
          ],
          answer: 1,
          explanation:
            "La fiche synthétique regroupe budget, impayés, équipements et procédures : c'est le tableau de bord qui oriente ensuite la lecture ciblée des autres documents.",
          skill: "copropriete",
          topic: "analyse-copro",
        },
        {
          id: "co1q2",
          type: "qcm",
          question: "Un ravalement de 380 000 € est voté. Le lot porte 29/1000. Quelle est sa quote-part ?",
          options: ["3 800 €", "11 020 €", "29 000 €", "8 700 €"],
          answer: 1,
          explanation:
            "380 000 × 29 / 1000 = 11 020 €. C'est ce chiffre, et non le montant global, qui doit être communiqué à l'acquéreur et intégré à l'estimation.",
          skill: "copropriete",
          topic: "analyse-copro",
        },
        {
          id: "co1q3",
          type: "vraifaux",
          question: "Un taux d'impayés de 14 % du budget annuel est un niveau habituel dans une copropriété.",
          answer: 1,
          explanation:
            "Faux. Un tel niveau est élevé et constitue un signal d'alerte sérieux : il traduit des difficultés de recouvrement et fait peser la charge sur les copropriétaires à jour.",
          skill: "copropriete",
          topic: "analyse-copro",
        },
        {
          id: "co1q4",
          type: "qcm",
          question: "Comment restituer l'analyse d'un dossier difficile à un acquéreur ?",
          options: [
            "En transmettant les 120 pages sans commentaire",
            "En remettant une synthèse d'une page hiérarchisée et chiffrée, avec les documents complets en annexe",
            "En résumant oralement pendant la visite",
            "En ne mentionnant que les points positifs",
          ],
          answer: 1,
          explanation:
            "Une synthèse hiérarchisée et chiffrée rend l'information utilisable. Transmettre sans commentaire ne remplit pas le devoir de conseil ; taire les points négatifs l'enfreint.",
          skill: "excellence",
          topic: "analyse-copro",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Copropriété", url: "https://www.service-public.fr/particuliers/vosdroits/F2591" },
        { label: "Service-Public.fr — Charges de copropriété", url: "https://www.service-public.fr/particuliers/vosdroits/F2607" },
        { label: "ANIL — Copropriété", url: "https://www.anil.org/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
