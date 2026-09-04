import type { CourseModule } from "@/lib/types";

export const moduleDecouverteClient: CourseModule = {
  id: "decouverte-client",
  level: 6,
  title: "Découverte client",
  subtitle: "Conduire un rendez-vous, écouter, qualifier",
  description:
    "Le rendez-vous est le moment où tout se joue. Ce module donne un protocole complet : préparation, conduite, questionnement, reformulation, suivi. C'est la compétence la plus transférable de tout le parcours.",
  icon: "🔎",
  skills: ["decouverte", "psychologie"],
  requires: ["prospection"],
  outcomes: [
    "Préparer un rendez-vous en trente minutes avec les bonnes informations",
    "Conduire un entretien où le client parle 70 % du temps",
    "Poser des questions ouvertes et pratiquer la reformulation",
    "Qualifier un projet : motivation, échéance, contraintes, décideurs",
    "Assurer un suivi écrit qui transforme un rendez-vous en relation",
  ],
  lessons: [
    {
      id: "dc1",
      moduleId: "decouverte-client",
      title: "Avant le rendez-vous : la préparation invisible",
      summary:
        "Les trente minutes de préparation qui font la différence entre un conseiller crédible et un conseiller interchangeable.",
      duration: 13,
      difficulty: "debutant",
      skills: ["decouverte", "organisation"],
      objectives: [
        "Réunir les informations disponibles avant tout rendez-vous",
        "Préparer trois questions spécifiques au dossier",
        "Anticiper les objections propres à la situation",
        "Arriver avec le bon matériel, ni trop ni trop peu",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un client juge un professionnel dans les trois premières minutes. Ce jugement ne porte pas sur votre costume mais sur ce que vous savez déjà de sa situation. Trente minutes de préparation créent une impression que deux heures d'argumentation ne rattrapent pas.",
        },
        { type: "heading", text: "La check-list de préparation" },
        {
          type: "table",
          head: ["À vérifier", "Où", "Ce que cela vous apprend"],
          rows: [
            ["Ventes récentes de la rue et du quartier", "Base DVF", "Le niveau de prix réel, votre socle d'argumentation"],
            ["Annonces concurrentes en cours", "Portails d'annonces", "L'offre à laquelle le bien sera comparé"],
            ["Historique de l'adresse", "Portails, votre fichier, votre mémoire du secteur", "Le bien a-t-il déjà été en vente ? À quel prix ?"],
            ["Vue aérienne et rue", "Cartographie en ligne", "Environnement, nuisances, exposition, stationnement"],
            ["Parcelle et bâti", "Cadastre", "Surface du terrain, emprise, constructions annexes"],
            ["Règles d'urbanisme, si maison", "Géoportail de l'urbanisme, service urbanisme", "Zonage, contraintes, potentiel"],
            ["Risques", "Géorisques", "Inondation, retrait-gonflement des argiles, radon, industriel"],
            ["Copropriété, si connue", "Votre fichier, vos contacts", "Travaux, charges, réputation de l'immeuble"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La phrase qui prouve la préparation",
          text:
            "« Avant de venir, j'ai regardé les ventes de votre rue : trois appartements comparables se sont vendus ces douze derniers mois, entre 3 850 et 4 100 €/m². J'ai aussi vu que votre immeuble a voté un ravalement en 2024. On en reparlera, mais c'est un point important. » Dite dans les trois premières minutes, cette phrase change tout le rendez-vous.",
        },
        { type: "heading", text: "Préparer trois questions spécifiques" },
        {
          type: "paragraph",
          text:
            "Les questions génériques sont indispensables mais interchangeables. Ce qui marque, ce sont les deux ou trois questions qui montrent que vous avez travaillé ce dossier en particulier.",
        },
        {
          type: "list",
          items: [
            "« J'ai vu que votre bien avait été en vente en 2023 à 289 000 €. Qu'est-ce qui s'était passé ? »",
            "« Votre copropriété a voté un ravalement l'an dernier. Savez-vous où en est le calendrier des appels de fonds ? »",
            "« Le bien du 3e étage s'est vendu 4 100 €/m² en mars. Vous le saviez ? Qu'est-ce que vous en aviez pensé ? »",
            "« La parcelle est plus grande que la moyenne de la rue. Y a-t-il déjà eu un projet de division ? »",
          ],
        },
        { type: "heading", text: "Le matériel" },
        {
          type: "compare",
          left: {
            title: "Ce que vous emportez",
            items: [
              "Un carnet et un stylo — plus rassurant qu'un écran entre vous et le client",
              "Votre trame de relevé, imprimée",
              "Un mètre laser",
              "Un appareil photo ou un téléphone chargé",
              "Deux exemplaires vierges de mandat, dans la sacoche, jamais sur la table",
              "Un exemple d'avis de valeur déjà réalisé, anonymisé",
            ],
          },
          right: {
            title: "Ce que vous laissez",
            items: [
              "La plaquette de l'agence en dix pages",
              "Le mandat posé sur la table dès l'arrivée",
              "Un discours préparé sur les résultats du réseau",
              "Un ordinateur ouvert pendant la découverte",
              "Un chiffre déjà décidé dans la tête",
            ],
          },
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le mandat sur la table",
          text:
            "Poser le mandat sur la table en arrivant transforme immédiatement le rendez-vous en négociation commerciale. Le client se ferme, il anticipe la pression. Gardez-le dans votre sacoche : il en sortira au bon moment, ou lors du second rendez-vous.",
        },
        { type: "heading", text: "Le premier contact physique" },
        {
          type: "list",
          ordered: true,
          items: [
            "Arriver cinq minutes en avance, jamais en retard, jamais vingt minutes avant.",
            "Observer la rue, le stationnement, la façade, les boîtes aux lettres avant de sonner.",
            "Saluer en se présentant clairement, y compris son statut exact.",
            "Ne pas commenter le bien en entrant — ni positivement, ni négativement.",
            "Demander où l'on peut s'installer pour parler avant de visiter.",
            "Accepter le café : c'est du temps de relation, pas du temps perdu.",
          ],
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["dvf", "comparables", "cadastre", "plu", "erp", "estimation"],
        },
      ],
      keyPoints: [
        "Trente minutes de préparation créent trois minutes d'impression décisive.",
        "Ventes du secteur, annonces concurrentes, historique, cadastre, urbanisme, risques.",
        "Préparer deux ou trois questions spécifiques à ce dossier précis.",
        "Carnet, mètre, trame imprimée : le matériel minimal et humain.",
        "Ne jamais poser le mandat sur la table en arrivant.",
        "Ne pas commenter le bien en entrant.",
      ],
      mistakes: [
        "Arriver sans avoir consulté les ventes du secteur.",
        "Ouvrir un ordinateur pendant la phase de découverte.",
        "Complimenter excessivement le bien dès l'entrée.",
        "Sortir le mandat avant toute estimation.",
      ],
      quiz: [
        {
          id: "dc1q1",
          type: "qcm",
          question: "Quelle information consulter en priorité avant un rendez-vous d'estimation ?",
          options: [
            "Les avis en ligne sur l'agence concurrente",
            "Les ventes réellement signées dans la rue et le quartier",
            "Le prix moyen national au m²",
            "Le nombre d'habitants de la commune",
          ],
          answer: 1,
          explanation:
            "Les ventes signées locales constituent le socle de toute argumentation de prix et démontrent immédiatement au vendeur que vous avez travaillé son dossier.",
          skill: "decouverte",
          topic: "preparation",
        },
        {
          id: "dc1q2",
          type: "vraifaux",
          question: "Poser le mandat sur la table dès l'arrivée montre votre professionnalisme et votre transparence.",
          answer: 1,
          explanation:
            "Faux. Cela transforme le rendez-vous en négociation commerciale avant même la découverte, et met le client sur la défensive. Le mandat reste dans la sacoche jusqu'au moment approprié.",
          skill: "mandat",
          topic: "preparation",
        },
        {
          id: "dc1q3",
          type: "qcm",
          question: "Pour une maison individuelle, quelle vérification supplémentaire est indispensable avant le rendez-vous ?",
          options: [
            "Le règlement de copropriété",
            "Les règles d'urbanisme applicables et les risques répertoriés",
            "Le nom du syndic",
            "Le montant des charges communes",
          ],
          answer: 1,
          explanation:
            "Zonage, contraintes de constructibilité et risques naturels ou technologiques conditionnent la valeur et les questions que posera tout acquéreur sérieux.",
          skill: "urbanisme",
          topic: "preparation",
        },
      ],
      sources: [
        { label: "Géoportail de l'urbanisme", url: "https://www.geoportail-urbanisme.gouv.fr/" },
        { label: "Géorisques", url: "https://www.georisques.gouv.fr/" },
        { label: "Cadastre.gouv.fr", url: "https://www.cadastre.gouv.fr/" },
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "dc2",
      moduleId: "decouverte-client",
      title: "Le questionnement : faire parler, écouter, reformuler",
      summary:
        "Les techniques concrètes qui font d'un entretien une découverte réelle plutôt qu'un interrogatoire ou un monologue.",
      duration: 19,
      difficulty: "intermediaire",
      skills: ["decouverte", "psychologie"],
      objectives: [
        "Distinguer questions ouvertes, fermées et de relance",
        "Pratiquer la reformulation et le silence",
        "Identifier la motivation réelle derrière la motivation déclarée",
        "Qualifier un projet sur cinq dimensions",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Le meilleur indicateur de la qualité d'un rendez-vous est simple : qui a le plus parlé ? Si c'est vous, le rendez-vous est raté, même s'il s'est bien passé en apparence. Objectif : le client parle 70 % du temps.",
        },
        { type: "heading", text: "Les trois types de questions" },
        {
          type: "table",
          head: ["Type", "Exemple", "Usage"],
          rows: [
            ["Ouverte", "« Racontez-moi votre projet »", "Ouvrir, découvrir, laisser venir l'information non anticipée"],
            ["De relance", "« C'est-à-dire ? », « Qu'entendez-vous par là ? »", "Approfondir sans orienter — la plus sous-utilisée"],
            ["Fermée", "« Le bien est-il en copropriété ? »", "Vérifier un fait précis, en fin de séquence uniquement"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La question de relance : votre meilleur outil",
          text:
            "« C'est-à-dire ? » posé calmement après une réponse vague produit plus d'information que dix questions préparées. La plupart des conseillers enchaînent les questions au lieu d'approfondir la réponse précédente. Approfondir vaut mieux qu'accumuler.",
        },
        { type: "heading", text: "Motivation déclarée et motivation réelle" },
        {
          type: "paragraph",
          text:
            "Un vendeur dit rarement sa vraie raison en premier. « On voudrait quelque chose de plus petit » peut cacher une séparation, une difficulté financière, une maladie, un enfant qui part. Vous n'avez pas à forcer la confidence — mais vous devez percevoir qu'il y a autre chose, car cela change tout : le prix acceptable, le délai, la sensibilité émotionnelle.",
        },
        {
          type: "dialogue",
          title: "Aller sous la surface, avec tact",
          lines: [
            { speaker: "Vendeur", text: "« On vend parce qu'on aimerait quelque chose de plus petit. »" },
            { speaker: "Conseiller", text: "« Je comprends. Qu'est-ce qui fait que c'est maintenant plutôt que dans deux ans ? »" },
            { speaker: "Vendeur", text: "« Disons que la situation a changé. »" },
            {
              speaker: "Conseiller",
              text: "« D'accord. Est-ce que ce changement vous impose une échéance particulière ? Je vous le demande parce que cela change ma façon de travailler, pas par curiosité. »",
              tone: "good",
            },
            { speaker: "Vendeur", text: "« On se sépare. Il faudrait que ce soit réglé avant l'été. »" },
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "La formule qui autorise la confidence",
          text:
            "« Je vous le demande parce que cela change ma façon de travailler, pas par curiosité. » Cette phrase justifie la question, la dépersonnalise, et donne au client le droit de ne pas répondre. Elle obtient pourtant une réponse dans la grande majorité des cas.",
        },
        { type: "heading", text: "Les cinq dimensions à qualifier" },
        {
          type: "steps",
          items: [
            {
              title: "1. La motivation",
              text: "Pourquoi vendre, et pourquoi maintenant ? Une motivation forte (mutation, séparation, succession, achat déjà engagé) rend le vendeur réaliste sur le prix. Une motivation faible (« on verra bien ») annonce un mandat difficile.",
            },
            {
              title: "2. L'échéance",
              text: "Pour quand ? Y a-t-il une date impérative ? Un achat déjà signé ? Un déménagement professionnel daté ? L'échéance détermine toute la stratégie de prix.",
            },
            {
              title: "3. Les décideurs",
              text: "Qui décide réellement ? Le conjoint absent ce soir ? Les enfants ? Un frère indivisaire ? Un rendez-vous conclu sans le décideur est un rendez-vous à refaire.",
            },
            {
              title: "4. Les contraintes",
              text: "Situation juridique, locataire en place, travaux à finir, dossier de succession, crédit en cours, contraintes de visite.",
            },
            {
              title: "5. Les critères de décision",
              text: "Sur quoi le client choisira-t-il son conseiller ? Le prix annoncé, les honoraires, la méthode, la disponibilité, la confiance ? La question « qu'attendez-vous du professionnel que vous choisirez ? » est directe et très efficace.",
            },
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "L'erreur des décideurs",
          text:
            "« Mon mari n'est pas là ce soir mais il me fait confiance. » Ne signez pas. Proposez un second rendez-vous avec les deux. Un mandat signé par une seule personne d'un couple propriétaire est juridiquement fragile, et surtout : le conjoint absent devient systématiquement l'opposant du dossier.",
        },
        { type: "heading", text: "La reformulation" },
        {
          type: "paragraph",
          text:
            "Reformuler consiste à redire ce que vous avez compris, avec vos mots, et à faire valider. C'est la technique la plus simple et la plus puissante de tout l'entretien : elle prouve l'écoute, corrige les malentendus, et donne au client le sentiment rare d'être compris.",
        },
        {
          type: "example",
          title: "Une reformulation complète",
          text:
            "« Si je résume : vous vendez parce que vous vous séparez, l'objectif est que ce soit réglé avant l'été, donc environ cinq mois. Vous êtes deux propriétaires et vous décidez ensemble. Le bien est libre, il n'y a pas de travaux en cours. Ce qui compte le plus pour vous, c'est que cela se passe sans conflit et dans le délai, plus que le dernier millier d'euros. Est-ce que j'ai bien compris ? »",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le silence",
          text:
            "Après une question importante, taisez-vous. Trois secondes de silence paraissent très longues à celui qui les provoque, et très courtes à celui qui réfléchit. La plupart des informations décisives arrivent dans le silence qui suit une question, jamais dans la question suivante.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["decouverte-client", "objection", "mandat", "indivision", "acquereur"],
        },
      ],
      keyPoints: [
        "Objectif : le client parle 70 % du temps.",
        "La question de relance « c'est-à-dire ? » produit plus que dix questions préparées.",
        "La motivation déclarée n'est presque jamais la motivation réelle.",
        "Cinq dimensions à qualifier : motivation, échéance, décideurs, contraintes, critères de choix.",
        "Ne jamais faire signer en l'absence d'un des décideurs.",
        "La reformulation prouve l'écoute et corrige les malentendus.",
      ],
      mistakes: [
        "Enchaîner les questions au lieu d'approfondir la réponse précédente.",
        "Combler les silences par peur du vide.",
        "Signer un mandat avec un seul membre d'un couple propriétaire.",
        "Poser des questions fermées en début d'entretien.",
      ],
      caseStudy: {
        title: "Découvrir le vrai projet",
        context:
          "Vous rencontrez une dame de 74 ans qui souhaite vendre sa maison. Elle vous dit : « C'est devenu trop grand pour moi, et le jardin, je n'y arrive plus. » Elle vous demande si « ça se vend bien en ce moment ». Elle mentionne à deux reprises que son fils « voulait qu'elle attende ». Elle ne parle pas de prix.",
        tasks: [
          "Identifiez ce qui doit vous alerter dans cette situation.",
          "Rédigez les quatre questions que vous poserez, dans l'ordre.",
          "Indiquez ce que vous ferez avant de proposer un mandat.",
        ],
        correction: [
          "Ce qui doit alerter : la mention répétée du fils indique un décideur ou un opposant non présent. L'absence de question sur le prix suggère que le projet n'est pas mûr. « Trop grand » et « je n'y arrive plus » peuvent recouvrir une contrainte de santé ou d'autonomie, qui appelle un accompagnement particulier et parfois d'autres professionnels.",
          "Question 1 : « Racontez-moi comment vous voyez la suite : vous partiriez où ? » — On vérifie s'il existe un projet d'après, ce qui conditionne tout.",
          "Question 2 : « Vous m'avez parlé de votre fils. Est-ce qu'il participe à la décision ? » — On identifie le décideur ou l'opposant, sans le mettre en cause.",
          "Question 3 : « Y a-t-il une échéance, ou est-ce que vous prenez le temps ? » — On mesure la maturité du projet.",
          "Question 4 : « Qu'est-ce qui compte le plus pour vous dans cette vente : le prix, le délai, ou que cela se passe sans souci ? » — La hiérarchie des priorités, ici probablement la tranquillité.",
          "Avant de proposer un mandat : demander à rencontrer le fils avec elle. Signer sans lui, c'est signer contre lui. Par ailleurs, si un projet de logement adapté est en jeu, orienter vers les dispositifs d'information compétents fait partie du devoir de conseil. Enfin, on ne signe pas un mandat le jour même avec une personne dont le projet n'est manifestement pas arrêté : proposer un second rendez-vous est ici la démarche à la fois la plus éthique et la plus efficace.",
        ],
      },
      quiz: [
        {
          id: "dc2q1",
          type: "qcm",
          question: "Quelle est la question la plus efficace pour approfondir une réponse vague ?",
          options: [
            "« Vous voulez donc vendre rapidement ? »",
            "« C'est-à-dire ? »",
            "« Avez-vous déjà contacté une autre agence ? »",
            "« À quel prix pensiez-vous ? »",
          ],
          answer: 1,
          explanation:
            "La relance neutre invite le client à développer sans orienter sa réponse. Les questions fermées, elles, referment la conversation.",
          skill: "decouverte",
          topic: "questionnement",
        },
        {
          id: "dc2q2",
          type: "qcm",
          question: "Une cliente vous dit que son mari « lui fait confiance » et n'est pas présent. Que faites-vous ?",
          options: [
            "Vous faites signer, puisqu'elle a l'accord de son mari",
            "Vous proposez un second rendez-vous avec les deux",
            "Vous appelez le mari pendant le rendez-vous pour obtenir son accord verbal",
            "Vous faites signer et envoyez le mandat au mari par courriel",
          ],
          answer: 1,
          explanation:
            "Un mandat signé par un seul membre d'un couple propriétaire est fragile, et le conjoint absent devient presque toujours l'opposant du dossier. Un second rendez-vous est plus efficace, et plus sûr.",
          skill: "mandat",
          topic: "questionnement",
        },
        {
          id: "dc2q3",
          type: "vraifaux",
          question: "Après une question importante, il faut relancer rapidement si le client ne répond pas immédiatement.",
          answer: 1,
          explanation:
            "Faux. Le silence est un outil : les informations décisives arrivent presque toujours dans les secondes qui suivent la question, pas dans la question suivante.",
          skill: "psychologie",
          topic: "questionnement",
        },
        {
          id: "dc2q4",
          type: "qcm",
          question: "Quelle est l'utilité principale de la reformulation ?",
          options: [
            "Gagner du temps dans le rendez-vous",
            "Prouver l'écoute, corriger les malentendus et faire valider votre compréhension",
            "Montrer votre maîtrise du vocabulaire technique",
            "Préparer l'annonce du prix",
          ],
          answer: 1,
          explanation:
            "La reformulation vérifie que vous avez bien compris, permet au client de corriger, et produit un sentiment d'écoute rare qui installe la confiance.",
          skill: "decouverte",
          topic: "questionnement",
        },
      ],
      sources: [
        { label: "ANIL — Information sur le logement", url: "https://www.anil.org/" },
        { label: "Service-Public.fr — Vendre un logement", url: "https://www.service-public.fr/particuliers/vosdroits/F2957" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "dc3",
      moduleId: "decouverte-client",
      title: "Après le rendez-vous : le suivi qui transforme",
      summary:
        "Le compte rendu, la relance et la discipline de suivi — ce que presque personne ne fait, et qui produit le plus de mandats.",
      duration: 12,
      difficulty: "debutant",
      skills: ["decouverte", "excellence", "organisation"],
      objectives: [
        "Rédiger un compte rendu de rendez-vous en dix minutes",
        "Structurer une séquence de relance sans harceler",
        "Tenir un suivi de tous ses contacts",
        "Comprendre pourquoi le suivi bat le talent commercial",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Voici une observation constante du métier : la majorité des rendez-vous d'estimation ne débouchent pas sur un mandat le jour même. Et la majorité des conseillers ne relancent jamais, ou une seule fois. Le mandat va très souvent à celui qui était encore présent trois semaines plus tard.",
        },
        { type: "heading", text: "Le compte rendu, dans l'heure qui suit" },
        {
          type: "list",
          title: "Les cinq éléments d'un bon compte rendu",
          ordered: true,
          items: [
            "Un remerciement bref et sincère, sans flatterie.",
            "Ce que vous avez compris de leur projet, en deux ou trois phrases — c'est la reformulation écrite.",
            "Ce que vous vous engagez à faire, avec une date précise.",
            "Ce que vous attendez d'eux, précisément (documents, informations).",
            "Votre numéro de téléphone direct, en clair.",
          ],
        },
        {
          type: "example",
          title: "Un compte rendu type",
          text:
            "« Bonjour Madame Rousseau, merci de votre accueil hier soir. Si j'ai bien compris, vous souhaitez vendre avant l'été pour vous rapprocher de votre fille, et vous décidez avec votre frère qui est co-indivisaire. Ce que je fais de mon côté : je vous adresse jeudi avant midi une analyse écrite avec les ventes comparables du quartier. Ce dont j'aurais besoin d'ici là : votre titre de propriété et vos deux derniers appels de fonds. Vous pouvez me joindre directement au 06 XX XX XX XX, y compris le week-end. Bien à vous, Camille Lefèvre. »",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Pourquoi ce message fonctionne",
          text:
            "Il ne vend rien. Il prouve l'écoute, il engage sur une date, et il donne un numéro direct. Le client le relit, parfois le montre à son conjoint. Vous existez désormais autrement que comme « l'agence qui est passée ».",
        },
        { type: "heading", text: "La séquence de relance" },
        {
          type: "table",
          head: ["Moment", "Action", "Contenu"],
          rows: [
            ["J+0, dans l'heure", "Courriel", "Compte rendu et engagement daté"],
            ["J+2 ou J+3", "Remise de l'estimation", "Document écrit, présenté si possible en rendez-vous"],
            ["J+7", "Appel court", "« Avez-vous eu le temps de regarder ? Une question ? »"],
            ["J+21", "Message utile", "Une vente signée du secteur, une information de marché"],
            ["J+45", "Appel", "« Où en êtes-vous de votre réflexion ? »"],
            ["J+90 puis trimestriel", "Message ou appel", "Point de marché, sans rien demander"],
          ],
          note:
            "Cette séquence n'est pas du harcèlement : chaque contact apporte quelque chose. La règle est simple — ne jamais relancer sans apporter une information nouvelle.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "La relance vide",
          text:
            "« Bonjour, je vous rappelle pour savoir si vous avez réfléchi. » Ce message n'apporte rien et met le client en position de devoir se justifier. Remplacez-le par : « Bonjour, un appartement comparable au vôtre vient de se vendre au 22 : 268 000 €. Je me suis dit que l'information vous intéresserait. »",
        },
        { type: "heading", text: "Le suivi de tous vos contacts" },
        {
          type: "paragraph",
          text:
            "Un conseiller qui démarre rencontre plus de monde qu'il ne le croit : appels, rendez-vous, contacts terrain, connaissances. Sans système, 80 % de ces contacts sont perdus en trois mois. Avec un système simple, ils deviennent votre portefeuille.",
        },
        {
          type: "list",
          title: "Le minimum vital pour chaque contact",
          items: [
            "Nom, téléphone, date et nature du contact.",
            "La situation en une phrase : « veut vendre son T3 avant l'été, décide avec son frère ».",
            "La prochaine action, et sa date. Sans date, l'action n'existe pas.",
            "Le statut : nouveau, contacté, rendez-vous pris, estimation faite, mandat, perdu.",
            "L'historique des échanges, en une ligne par contact.",
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "Le constat qui doit vous convaincre",
          text:
            "Interrogez n'importe quel conseiller expérimenté sur l'origine de ses mandats de l'année. Une part importante vient de contacts vieux de six à dix-huit mois, relancés régulièrement. Le talent commercial ouvre des portes ; le suivi les transforme en revenus.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["recommandation", "prospection", "excellence", "estimation"],
        },
      ],
      keyPoints: [
        "La plupart des rendez-vous ne produisent pas un mandat le jour même : le suivi décide.",
        "Un compte rendu dans l'heure : reformulation, engagement daté, demande précise, numéro direct.",
        "Une séquence de relance structurée sur trois mois, puis trimestrielle.",
        "Ne jamais relancer sans apporter une information nouvelle.",
        "Chaque contact a une prochaine action datée, sans quoi il est perdu.",
      ],
      mistakes: [
        "Ne pas envoyer de compte rendu après un rendez-vous.",
        "Relancer avec « avez-vous réfléchi ? ».",
        "Abandonner un contact après deux relances sans réponse.",
        "Tenir son suivi dans sa mémoire plutôt que dans un fichier.",
      ],
      exercise: {
        title: "Rédigez votre compte rendu type",
        instructions:
          "Écrivez le modèle que vous adapterez après chaque rendez-vous. Un modèle personnel s'utilise ; un modèle imprimé de l'agence ne s'utilise jamais.",
        fields: [
          { id: "cr", label: "Votre compte rendu type", multiline: true, placeholder: "Bonjour Madame…, merci de votre accueil…" },
          { id: "relance", label: "Votre message de relance à trois semaines", multiline: true },
        ],
        checklist: [
          "Le compte rendu remercie sans flatter",
          "Il reformule le projet du client en deux ou trois phrases",
          "Il annonce un engagement avec une date précise",
          "Il demande explicitement des documents ou informations",
          "Il donne un numéro de téléphone direct",
          "Le message de relance apporte une information nouvelle",
          "Le message de relance ne demande pas « avez-vous réfléchi »",
        ],
        modelAnswer:
          "Relance type à trois semaines : « Bonjour Monsieur Bertrand, je pensais à votre dossier : un T3 comparable au vôtre, au 22 de votre rue, vient de se vendre 268 000 €. Cela conforte la fourchette que je vous avais présentée. Je vous transmets le détail si cela vous intéresse. Bonne journée. » Aucune demande, une information utile, et une porte ouverte.",
      },
      quiz: [
        {
          id: "dc3q1",
          type: "qcm",
          question: "Quand envoyer le compte rendu d'un rendez-vous d'estimation ?",
          options: [
            "Une semaine après, avec l'estimation",
            "Dans l'heure qui suit le rendez-vous",
            "Seulement si le client le demande",
            "Au moment de la signature du mandat",
          ],
          answer: 1,
          explanation:
            "Un compte rendu immédiat prouve la réactivité, fixe par écrit la compréhension du projet et vous distingue des professionnels qui disparaissent après le rendez-vous.",
          skill: "excellence",
          topic: "suivi",
        },
        {
          id: "dc3q2",
          type: "qcm",
          question: "Quelle relance est la plus efficace à trois semaines ?",
          options: [
            "« Bonjour, avez-vous réfléchi à ma proposition ? »",
            "« Bonjour, un bien comparable au vôtre vient de se vendre 268 000 € dans votre rue, je me suis dit que l'information vous intéresserait »",
            "« Bonjour, je vous relance une dernière fois »",
            "« Bonjour, mes honoraires sont négociables si vous signez cette semaine »",
          ],
          answer: 1,
          explanation:
            "Une relance doit apporter quelque chose. Une relance vide met le client en position de se justifier et donne l'impression d'une insistance commerciale.",
          skill: "prospection",
          topic: "suivi",
        },
        {
          id: "dc3q3",
          type: "vraifaux",
          question: "Un contact sans prochaine action datée est un contact perdu.",
          answer: 0,
          explanation:
            "Vrai. Sans date planifiée, la relance n'a pas lieu. C'est la règle de base d'un suivi efficace, et la raison pour laquelle un CRM, même très simple, change une activité.",
          skill: "crm",
          topic: "suivi",
        },
      ],
      sources: [
        { label: "CNIL — Conservation des données de prospection", url: "https://www.cnil.fr/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
