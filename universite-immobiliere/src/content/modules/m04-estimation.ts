import type { CourseModule } from "@/lib/types";

export const moduleEstimation: CourseModule = {
  id: "estimation",
  level: 4,
  title: "Estimation immobilière",
  subtitle: "De la visite à la fourchette défendable",
  description:
    "La compétence qui structure toute la carrière. Estimer, ce n'est pas donner un chiffre : c'est construire un raisonnement que le vendeur peut suivre, vérifier et accepter. Ce module donne la méthode complète, étape par étape.",
  icon: "🎯",
  skills: ["estimation", "marche"],
  requires: ["marche"],
  outcomes: [
    "Conduire une visite d'estimation complète sans rien oublier",
    "Rechercher, sélectionner et retraiter des ventes comparables",
    "Pondérer objectivement les caractéristiques d'un bien",
    "Construire une fourchette et un scénario de commercialisation",
    "Présenter une estimation, y compris lorsqu'elle déçoit",
  ],
  lessons: [
    {
      id: "es1",
      moduleId: "estimation",
      title: "La méthode complète : sept étapes, dans l'ordre",
      summary:
        "Acquérir le déroulé qui vous servira à chaque estimation pendant toute votre carrière, et comprendre pourquoi l'ordre compte.",
      duration: 16,
      difficulty: "debutant",
      skills: ["estimation"],
      objectives: [
        "Mémoriser les sept étapes de la méthode d'estimation",
        "Comprendre pourquoi la recherche de comparables précède tout calcul",
        "Distinguer avis de valeur et expertise",
        "Préparer une estimation avant même d'entrer dans le bien",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "L'estimation est la compétence qui sépare les conseillers. Elle repose sur une méthode reproductible, pas sur du flair. Voici les sept étapes, dans l'ordre où elles doivent être exécutées — l'ordre fait partie de la méthode.",
        },
        {
          type: "steps",
          title: "Les sept étapes",
          items: [
            {
              title: "1. Préparer avant d'entrer",
              text:
                "Cadastre, vue aérienne, base DVF sur la rue et le quartier, annonces concurrentes en cours, PLU si maison, historique de l'adresse. Trente à quarante-cinq minutes de travail avant le rendez-vous. Cette étape est invisible pour le client, et c'est elle qui vous rend crédible en dix secondes.",
            },
            {
              title: "2. Découvrir le projet du vendeur",
              text:
                "Avant de parler du bien, comprendre la situation : pourquoi vendre, pour quand, quelles contraintes, quelle situation juridique. Un vendeur pressé et un vendeur qui teste le marché n'appellent pas la même stratégie de prix.",
            },
            {
              title: "3. Relever le bien méthodiquement",
              text:
                "Surfaces, distribution, état pièce par pièce, équipements, DPE, extérieur, annexes, nuisances, exposition, charges, travaux votés. Photographier systématiquement : compteur électrique, chaudière, fenêtres, façade, plafonds.",
            },
            {
              title: "4. Rechercher les comparables",
              text:
                "Trois à cinq ventes réellement signées, sur des biens proches en typologie, surface, secteur et date. C'est le socle du raisonnement, et c'est ce qui rend l'estimation vérifiable.",
            },
            {
              title: "5. Retraiter et pondérer",
              text:
                "Ajuster chaque comparable pour tenir compte des différences avec le bien étudié : étage, extérieur, état, DPE, parking, charges. On ne compare jamais deux biens bruts, on compare deux biens ajustés.",
            },
            {
              title: "6. Construire la fourchette",
              text:
                "Une valeur basse, une valeur haute, et un prix de présentation recommandé. Jamais un chiffre unique : une fourchette montre que vous raisonnez, un chiffre unique donne l'illusion d'une certitude qui n'existe pas.",
            },
            {
              title: "7. Présenter et argumenter",
              text:
                "Un support écrit, un raisonnement en quatre temps, et un scénario de commercialisation associé à chaque niveau de prix. C'est l'étape où l'estimation devient un mandat — ou pas.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "L'erreur d'ordre la plus fréquente",
          text:
            "Calculer un prix au m² dès la visite, avant d'avoir cherché les comparables. Le chiffre obtenu s'installe alors dans votre tête et vous cherchez ensuite des comparables qui le confirment. C'est exactement l'inverse de la méthode. Cherchez d'abord, concluez ensuite.",
        },
        {
          type: "definition",
          term: "Avis de valeur",
          simple:
            "Le document par lequel un conseiller donne son estimation, avec les éléments qui la justifient.",
          pro:
            "Appréciation de la valeur d'un bien établie par un professionnel de la transaction à partir d'une analyse du bien, de son environnement et de références de transactions, aboutissant à une fourchette argumentée.",
          why:
            "Il permet au vendeur de prendre une décision éclairée, et il matérialise votre travail — ce qui, en soi, justifie une part de vos honoraires.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "Avis de valeur n'est pas expertise",
          text:
            "L'expertise immobilière est réalisée par un expert selon une méthodologie normée et engage sa responsabilité propre, notamment en matière successorale, fiscale ou judiciaire. Employez le mot exact : « avis de valeur » ou « estimation ». Une succession complexe ou un contentieux appelle un expert, pas un avis de valeur d'agence.",
        },
        { type: "heading", text: "Les trois méthodes d'évaluation, et celle que vous utiliserez" },
        {
          type: "table",
          head: ["Méthode", "Principe", "Usage courant"],
          rows: [
            ["Comparaison", "Confronter le bien à des ventes récentes de biens similaires, après ajustements", "Méthode principale en résidentiel : c'est la vôtre"],
            ["Capitalisation du revenu", "Déduire la valeur du revenu locatif attendu et d'un taux de rendement", "Immeubles de rapport, locaux commerciaux, investissement"],
            ["Coût de remplacement", "Valeur du terrain plus coût de reconstruction, moins la vétusté", "Biens atypiques sans comparable, expertise"],
          ],
          note:
            "En résidentiel classique, la comparaison domine largement. Les deux autres méthodes servent de contrôle de cohérence ou concernent des biens particuliers.",
        },
        {
          type: "example",
          title: "Ce que voit le vendeur",
          text:
            "Deux conseillers estiment le même bien. Le premier annonce « je dirais 285 000 € » après vingt minutes de visite. Le second revient trois jours plus tard avec un document de six pages : trois ventes comparables datées et localisées, le tableau des ajustements, une fourchette de 268 000 à 279 000 €, un prix de présentation recommandé, et trois scénarios de commercialisation. Même si le second annonce un chiffre plus bas, c'est presque toujours lui qui obtient le mandat.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Ne jamais annoncer un prix pendant la visite",
          text:
            "« Je vais faire mon travail sérieusement : je reviens vers vous sous 48 heures avec une analyse écrite et les ventes comparables. » Cette phrase vous protège de l'improvisation, valorise votre méthode et crée un second rendez-vous — celui où se signe le mandat.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["estimation", "comparables", "dvf", "expert-immobilier", "ponderation", "prix-m2"],
        },
      ],
      keyPoints: [
        "Sept étapes, dans un ordre qui fait partie de la méthode.",
        "La préparation avant le rendez-vous crée la crédibilité en dix secondes.",
        "On cherche les comparables avant de conclure, jamais l'inverse.",
        "Une fourchette, jamais un chiffre unique.",
        "Avis de valeur et expertise ne sont pas la même chose : employez le mot exact.",
        "Ne pas annoncer de prix pendant la visite : revenir avec un document écrit.",
      ],
      mistakes: [
        "Donner un chiffre à la fin de la visite pour « faire plaisir ».",
        "Chercher des comparables pour confirmer une intuition déjà formée.",
        "Confondre avis de valeur et expertise devant un client.",
        "Arriver sans avoir consulté la base des ventes du secteur.",
      ],
      quiz: [
        {
          id: "es1q1",
          type: "qcm",
          question: "Quelle est la méthode d'évaluation dominante en immobilier résidentiel ?",
          options: [
            "La capitalisation du revenu",
            "La comparaison avec des ventes récentes ajustées",
            "Le coût de remplacement",
            "L'actualisation des flux futurs",
          ],
          answer: 1,
          explanation:
            "La comparaison est la méthode de référence en résidentiel : elle s'appuie sur des transactions réelles ajustées des différences avec le bien étudié.",
          skill: "estimation",
          topic: "methode",
        },
        {
          id: "es1q2",
          type: "vraifaux",
          question: "Il est professionnel d'annoncer un prix au vendeur à la fin de la visite d'estimation.",
          answer: 1,
          explanation:
            "Faux. Sans recherche de comparables ni ajustements, le chiffre est une improvisation. Annoncer un retour écrit sous 48 heures valorise la méthode et crée le rendez-vous de présentation.",
          skill: "estimation",
          topic: "methode",
        },
        {
          id: "es1q3",
          type: "qcm",
          question: "Pourquoi présenter une fourchette plutôt qu'un chiffre unique ?",
          options: [
            "Pour se laisser une marge de négociation avec le vendeur",
            "Parce qu'elle traduit honnêtement l'incertitude réelle et permet d'associer un scénario à chaque niveau",
            "Parce que la loi l'impose",
            "Pour éviter d'avoir à justifier son raisonnement",
          ],
          answer: 1,
          explanation:
            "Aucune estimation n'est exacte au millier d'euros près. La fourchette exprime cette réalité et permet de relier chaque niveau de prix à un scénario de commercialisation différent.",
          skill: "estimation",
          topic: "methode",
        },
        {
          id: "es1q4",
          type: "qcm",
          question: "Un client en litige successoral demande une évaluation opposable. Que faites-vous ?",
          options: [
            "Vous établissez un avis de valeur en précisant qu'il vaut expertise",
            "Vous l'orientez vers un expert immobilier et le notaire",
            "Vous refusez tout accompagnement",
            "Vous demandez à trois agences d'estimer et faites la moyenne",
          ],
          answer: 1,
          explanation:
            "Un avis de valeur d'agence n'a pas la portée d'une expertise. En contexte successoral conflictuel ou judiciaire, l'expert immobilier et le notaire sont les interlocuteurs appropriés.",
          skill: "estimation",
          topic: "methode",
        },
      ],
      sources: [
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
        { label: "Notaires de France — Prix et tendances", url: "https://www.notaires.fr/fr/immobilier-fiscalite/prix-et-tendances-de-limmobilier" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "es2",
      moduleId: "estimation",
      title: "La visite d'estimation : tout relever, ne rien oublier",
      summary:
        "Conduire une visite complète, poser les bonnes questions et repartir avec toutes les informations nécessaires.",
      duration: 18,
      difficulty: "debutant",
      skills: ["estimation", "decouverte"],
      objectives: [
        "Structurer la visite d'estimation en quatre temps",
        "Relever systématiquement les 40 points d'observation",
        "Poser les questions qui révèlent la motivation et les contraintes",
        "Photographier ce qu'il faut, et non ce qui est joli",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "La visite d'estimation est le rendez-vous le plus important de votre métier. Vous y collectez la matière de votre estimation, et vous y construisez la relation qui déterminera si vous obtenez le mandat. Ces deux objectifs ne se contredisent pas : c'est la qualité de votre observation qui crée la confiance.",
        },
        { type: "heading", text: "La structure en quatre temps" },
        {
          type: "steps",
          items: [
            {
              title: "Temps 1 — S'asseoir avant de visiter (15 à 20 minutes)",
              text:
                "Beaucoup de débutants visitent d'abord. C'est une erreur : vous perdez le contrôle du rendez-vous et vous découvrez le bien sans savoir ce que le vendeur veut. Asseyez-vous, expliquez le déroulé, puis écoutez son projet.",
            },
            {
              title: "Temps 2 — Visiter méthodiquement (20 à 30 minutes)",
              text:
                "Pièce par pièce, dans un ordre fixe, avec votre checklist. Vous notez, vous mesurez ce qui est vérifiable, vous photographiez. Vous posez des questions techniques au fur et à mesure.",
            },
            {
              title: "Temps 3 — Se rasseoir et récapituler (10 minutes)",
              text:
                "Vous reformulez ce que vous avez compris du projet et du bien. Vous listez les documents dont vous avez besoin. Vous annoncez la suite : « je reviens vers vous sous 48 heures avec une analyse écrite ».",
            },
            {
              title: "Temps 4 — Le suivi immédiat",
              text:
                "Dans l'heure qui suit, un courriel récapitulatif : merci, ce que vous avez retenu, les documents attendus, la date de votre retour. Ce message vous distingue de tous ceux qui disparaissent après la visite.",
            },
          ],
        },
        { type: "heading", text: "Les questions du temps 1" },
        {
          type: "list",
          title: "Dans cet ordre, en écoutant plus qu'en parlant",
          ordered: true,
          items: [
            "« Racontez-moi votre projet. » — Question ouverte, silence ensuite. Laissez parler.",
            "« Qu'est-ce qui vous amène à vendre aujourd'hui plutôt que l'an dernier ? » — La motivation réelle.",
            "« Avez-vous une échéance ? Un projet derrière ? » — L'urgence, qui détermine la stratégie de prix.",
            "« Qui figure sur le titre de propriété ? » — La situation juridique.",
            "« Avez-vous déjà mis le bien en vente ? Avec qui, à quel prix, pendant combien de temps ? » — L'historique, souvent déterminant.",
            "« Qu'est-ce qui compte le plus pour vous : le prix, le délai, ou la tranquillité ? » — La hiérarchie des priorités.",
            "« Aviez-vous un prix en tête ? Sur quoi vous êtes-vous appuyé ? » — L'ancrage, à connaître avant d'estimer.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La question la plus révélatrice",
          text:
            "« Qu'est-ce qui compte le plus pour vous : le prix, le délai, ou la tranquillité ? » Un vendeur qui répond « le délai » vient de vous autoriser à parler d'un prix réaliste. Un vendeur qui répond « le prix » vous prévient : votre estimation devra être argumentée pièce par pièce.",
        },
        { type: "heading", text: "Les 40 points de relevé" },
        {
          type: "table",
          title: "Environnement et immeuble",
          head: ["Point", "Ce que vous notez"],
          rows: [
            ["Rue et micro-localisation", "Passage, stationnement, bruit, propreté, vis-à-vis"],
            ["Accès et transports", "Distance à pied aux transports, aux commerces, aux écoles"],
            ["Nuisances", "Axe routier, voie ferrée, activité, chantier en cours à proximité"],
            ["Façade et parties communes", "État, propreté, entretien, boîtes aux lettres, hall"],
            ["Année de construction", "Détermine les diagnostics et les modes constructifs"],
            ["Nombre de lots et de logements", "Taille de la copropriété, donc mutualisation des charges"],
            ["Ascenseur", "Présence, état, année"],
            ["Chauffage", "Individuel ou collectif, énergie, âge de l'équipement"],
            ["Travaux votés ou prévus", "Montant, calendrier, quote-part du lot"],
            ["Charges annuelles", "Montant, décomposition, ce qu'elles incluent"],
          ],
        },
        {
          type: "table",
          title: "Le logement",
          head: ["Point", "Ce que vous notez"],
          rows: [
            ["Étage et orientation", "Niveau, exposition principale, luminosité réelle selon l'heure"],
            ["Surfaces et distribution", "Surface par pièce, circulation, pièces traversantes ou borgnes"],
            ["Hauteur sous plafond", "Élément de charme réel, à noter"],
            ["État des sols, murs, plafonds", "Pièce par pièce : neuf, bon, à rafraîchir, à refaire"],
            ["Cuisine", "Équipée ou non, année, état, ouverte ou fermée"],
            ["Salle de bains et WC", "Nombre, état, année, ventilation"],
            ["Menuiseries", "Matériau, simple ou double vitrage, état, étanchéité"],
            ["Électricité", "Tableau, différentiel, prises de terre, année visible"],
            ["Plomberie", "Matériau visible, traces, pression, chauffe-eau et son âge"],
            ["Humidité", "Traces, odeurs, peinture récente en bas de mur, condensation"],
            ["Fissures", "Localisation, largeur, orientation, aspect évolutif"],
            ["Isolation et confort thermique", "Ressenti, combles, murs, ponts thermiques visibles"],
            ["Ventilation", "VMC, grilles, aération naturelle"],
            ["Rangements", "Placards, dressing, cave, grenier"],
            ["Extérieur", "Balcon, terrasse, jardin : surface, exposition, intimité, état"],
            ["Stationnement", "Box, place, extérieur, facilité de manœuvre"],
            ["Annexes", "Cave, grenier, local vélo, buanderie"],
            ["Vue et vis-à-vis", "Distance au bâtiment d'en face, dégagement"],
            ["Bruit intérieur", "Voisinage, cage d'escalier, ascenseur, rue"],
            ["DPE", "Classe énergie et classe climat, date, recommandations"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Photographier pour travailler, pas pour vendre",
          text:
            "Pendant l'estimation, photographiez le tableau électrique, la chaudière et son étiquette, les fenêtres, les traces d'humidité, les fissures, la façade, les compteurs, le carnet d'entretien s'il est visible. Les belles photos viendront plus tard, avec le reportage. Ces photos-là, c'est votre dossier technique.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Ce qu'il ne faut jamais faire pendant la visite",
          text:
            "Commenter négativement à voix haute (« ah, la cuisine est vraiment datée »), annoncer un prix, promettre un délai, minimiser une pathologie visible, ou remplir le mandat sur un coin de table sans avoir présenté d'estimation écrite.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["estimation", "dpe", "humidite", "fissures", "vmc", "menuiseries", "charges-copropriete", "proces-verbal-ag"],
        },
      ],
      keyPoints: [
        "S'asseoir et écouter avant de visiter : le projet avant le bien.",
        "Une visite d'estimation dure environ une heure, pas quinze minutes.",
        "Quarante points de relevé, toujours dans le même ordre, avec une checklist.",
        "La question prix/délai/tranquillité oriente toute votre stratégie.",
        "Photographier la technique, pas l'esthétique : les belles photos viennent après.",
        "Ne jamais annoncer de prix pendant la visite.",
      ],
      mistakes: [
        "Visiter avant d'avoir écouté le projet du vendeur.",
        "Oublier de demander le montant et la décomposition des charges.",
        "Ne pas interroger l'historique de commercialisation antérieur.",
        "Commenter négativement le bien devant son propriétaire.",
      ],
      exercise: {
        title: "Votre trame de visite d'estimation",
        instructions:
          "Rédigez votre propre trame, celle que vous utiliserez à chaque rendez-vous. Une trame personnelle, écrite de votre main, est mémorisée bien plus vite qu'une liste imprimée.",
        fields: [
          { id: "ouverture", label: "Votre phrase d'ouverture, qui annonce le déroulé du rendez-vous", multiline: true, placeholder: "« Si vous êtes d'accord, je vous propose que nous prenions dix minutes assis avant de visiter… »" },
          { id: "questions", label: "Vos sept questions de découverte, dans votre formulation", multiline: true },
          { id: "cloture", label: "Votre phrase de clôture, qui annonce le retour sous 48 heures", multiline: true },
        ],
        checklist: [
          "L'ouverture annonce le déroulé et justifie de s'asseoir d'abord",
          "Les questions sont ouvertes et non fermées",
          "Elles couvrent motivation, échéance, situation juridique, historique",
          "Elles incluent la question prix / délai / tranquillité",
          "Elles incluent l'ancrage : « aviez-vous un prix en tête ? »",
          "La clôture annonce une date précise de retour",
          "La clôture liste les documents demandés",
        ],
        modelAnswer:
          "Ouverture type : « Avant de visiter, j'aimerais comprendre votre projet : c'est ce qui me permettra de vous donner une estimation utile et pas seulement un chiffre. Je vous propose dix minutes assis, puis nous visitons ensemble, et je repartirai avec de quoi travailler sérieusement. » Clôture type : « Je reviens vers vous jeudi avant midi avec une analyse écrite et les ventes comparables du quartier. D'ici là, si vous pouvez me transmettre votre titre de propriété, vos deux derniers appels de fonds et votre avis de taxe foncière, je pourrai être plus précis. »",
      },
      quiz: [
        {
          id: "es2q1",
          type: "qcm",
          question: "Par quoi commence une visite d'estimation ?",
          options: [
            "Par la visite du bien, pièce par pièce",
            "Par un temps assis consacré au projet du vendeur",
            "Par la présentation de l'agence et de ses résultats",
            "Par la signature du mandat",
          ],
          answer: 1,
          explanation:
            "Comprendre le projet, la motivation et les contraintes conditionne toute la suite. Visiter d'abord fait perdre le contrôle du rendez-vous et prive l'estimation de son contexte.",
          skill: "decouverte",
          topic: "visite-estimation",
        },
        {
          id: "es2q2",
          type: "qcm",
          question: "Quelle information sur la copropriété est la plus souvent oubliée lors d'une estimation ?",
          options: [
            "Le nom du syndic",
            "Le montant des charges et les travaux votés non réalisés",
            "La couleur de la façade",
            "Le nombre d'étages",
          ],
          answer: 1,
          explanation:
            "Charges et travaux votés modifient directement la valeur perçue et la négociation. Les découvrir au compromis provoque renégociation ou rétractation.",
          skill: "estimation",
          topic: "visite-estimation",
        },
        {
          id: "es2q3",
          type: "vraifaux",
          question: "Pendant la visite d'estimation, il faut photographier surtout les pièces les plus esthétiques.",
          answer: 1,
          explanation:
            "Faux. Les photos d'estimation sont des photos de travail : tableau électrique, chaudière, menuiseries, humidité, fissures, façade. Le reportage esthétique intervient après la prise de mandat.",
          skill: "estimation",
          topic: "visite-estimation",
        },
        {
          id: "es2q4",
          type: "qcm",
          question: "Un vendeur répond « ce qui compte le plus, c'est le délai ». Quelle conséquence ?",
          options: [
            "Il faut proposer un prix élevé pour le satisfaire",
            "Il vient d'autoriser une discussion sur un prix de marché réaliste",
            "Il faut refuser le mandat",
            "Il faut lui proposer une location",
          ],
          answer: 1,
          explanation:
            "La hiérarchie des priorités du vendeur détermine la stratégie de prix. Une priorité donnée au délai ouvre la voie à un positionnement réaliste, accepté et non subi.",
          skill: "decouverte",
          topic: "visite-estimation",
        },
      ],
      sources: [
        { label: "ANIL — Vendre son logement", url: "https://www.anil.org/" },
        { label: "Service-Public.fr — Diagnostics obligatoires", url: "https://www.service-public.fr/particuliers/vosdroits/F2266" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "es3",
      moduleId: "estimation",
      title: "Comparables et ajustements : le cœur du raisonnement",
      summary:
        "Sélectionner de vraies références de marché et les retraiter pour qu'elles deviennent comparables au bien étudié.",
      duration: 20,
      difficulty: "intermediaire",
      skills: ["estimation", "marche"],
      objectives: [
        "Sélectionner des comparables pertinents selon cinq critères",
        "Retraiter chaque comparable par ajustements successifs",
        "Construire un tableau d'ajustement défendable",
        "Reconnaître les faux comparables",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un comparable est une vente réellement signée sur un bien suffisamment proche pour servir de référence. Le mot important est « signée » : une annonce en cours n'est pas un comparable, c'est une espérance.",
        },
        { type: "heading", text: "Les cinq critères de sélection" },
        {
          type: "list",
          ordered: true,
          items: [
            "La localisation : même quartier, idéalement même rue ou même îlot. Un comparable à 800 mètres peut être inutilisable.",
            "La typologie : même nombre de pièces, ou une pièce d'écart au maximum.",
            "La surface : idéalement dans une fourchette de ± 15 %. Au-delà, l'effet de taille sur le prix au m² fausse la comparaison.",
            "La date : moins de douze mois, idéalement moins de six mois. Un marché peut bouger en un semestre.",
            "La nature du bien : même époque de construction et même type d'immeuble. Un immeuble haussmannien et une résidence des années 1970 ne se comparent pas.",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Les cinq faux comparables",
          text:
            "Une annonce en cours de diffusion. Une vente entre membres d'une même famille. Une vente en urgence (succession pressée, divorce conflictuel). Une vente réalisée avant une évolution notable du marché. Un bien vendu avec un mobilier ou un fonds inclus dans le prix. Chacun de ces cas fausse le raisonnement et sera contesté par un vendeur attentif.",
        },
        { type: "heading", text: "Les ajustements : ramener chaque comparable au bien étudié" },
        {
          type: "paragraph",
          text:
            "Un comparable n'est jamais identique. La technique consiste à corriger son prix pour tenir compte de chaque différence, dans un sens ou dans l'autre. On raisonne toujours dans le même sens : « si ce bien vendu avait les caractéristiques du mien, à combien se serait-il vendu ? »",
        },
        {
          type: "table",
          title: "Grille d'ajustement — ordres de grandeur à valider localement",
          head: ["Différence", "Sens de l'ajustement", "Ordre de grandeur usuel"],
          rows: [
            ["Le comparable a un ascenseur, pas le bien étudié (étage ≥ 3)", "Ajustement négatif sur le comparable", "3 à 8 %"],
            ["Le comparable est au 1er, le bien étudié au 5e sans ascenseur", "Ajustement négatif", "5 à 12 %"],
            ["Le comparable a un extérieur, pas le bien étudié", "Ajustement négatif", "3 à 10 % selon la ville"],
            ["Le comparable a un parking, pas le bien étudié", "Ajustement négatif", "Valeur locale du stationnement"],
            ["Le comparable est rénové, le bien étudié est à rafraîchir", "Ajustement négatif", "Coût des travaux, souvent minoré de 20 à 30 %"],
            ["Le comparable est classé C, le bien étudié F", "Ajustement négatif", "Variable, croissant, à mesurer localement"],
            ["Le comparable a des charges deux fois plus faibles", "Ajustement négatif", "Effet sur la capacité d'emprunt"],
            ["Le comparable a été vendu il y a 14 mois sur un marché plus haut", "Ajustement selon l'évolution constatée", "Selon vos propres observations"],
          ],
          note:
            "Ces fourchettes sont pédagogiques. Elles doivent être calibrées par vos propres observations sur votre secteur : c'est précisément ce qui rend votre estimation incontestable.",
        },
        {
          type: "example",
          title: "Un tableau d'ajustement complet",
          text:
            "Bien étudié : T3 de 68 m², 4e étage sans ascenseur, sans extérieur, sans parking, à rafraîchir, DPE E, charges 2 100 €/an. Comparable n° 1 : T3 de 71 m², 2e étage sans ascenseur, balcon 5 m², sans parking, bon état, DPE D, vendu 259 000 € il y a 4 mois, soit 3 648 €/m². Ajustements : étage (−3 %), balcon (−4 %), état (−5 %), DPE (−2 %) → prix ajusté ≈ 3 648 × 0,86 = 3 137 €/m². Appliqué à 68 m² : ≈ 213 000 €. On répète l'opération sur trois à cinq comparables, puis on observe la dispersion des résultats.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Lire la dispersion",
          text:
            "Si vos comparables ajustés donnent 213 000, 218 000, 209 000 et 216 000 €, votre fourchette s'impose d'elle-même : 209 000 à 218 000 €. Si vos résultats vont de 190 000 à 245 000 €, vos comparables sont mauvais ou vos ajustements approximatifs. Reprenez le travail plutôt que de faire une moyenne : une moyenne de données incohérentes reste incohérente.",
        },
        { type: "heading", text: "Où trouver les comparables" },
        {
          type: "table",
          head: ["Source", "Ce qu'elle apporte", "Limite"],
          rows: [
            ["Base DVF publique", "Ventes réellement enregistrées : date, prix, surface, adresse approchée", "Aucune information sur l'état, l'étage ou les annexes"],
            ["Votre propre historique de ventes", "La donnée la plus riche : vous connaissez le bien", "Volume limité en début de carrière"],
            ["Vos confrères et votre réseau", "Contexte des ventes du secteur", "Fiabilité variable, à croiser"],
            ["Notaires — statistiques et bases", "Données agrégées fiables", "Granularité parfois insuffisante"],
            ["Vos visites d'estimation passées", "Connaissance de biens non vendus", "N'est pas une donnée de prix"],
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "La discipline qui construit une expertise",
          text:
            "Tenez un fichier personnel de toutes les ventes que vous constatez sur votre secteur : adresse, typologie, surface, étage, état, DPE, prix, date. Trente lignes suffisent à changer votre crédibilité. Deux cents lignes font de vous la référence locale, et cela ne demande que dix minutes par semaine.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["comparables", "dvf", "ponderation", "prix-m2", "estimation", "valeur-verte"],
        },
      ],
      keyPoints: [
        "Un comparable est une vente signée, jamais une annonce en cours.",
        "Cinq critères de sélection : localisation, typologie, surface, date, nature du bien.",
        "Chaque comparable est ajusté pour être ramené aux caractéristiques du bien étudié.",
        "La dispersion des résultats ajustés donne la fourchette et révèle la qualité du travail.",
        "Les coefficients d'ajustement doivent être calibrés sur votre secteur.",
        "Tenir un fichier personnel des ventes constatées construit une expertise locale incontestable.",
      ],
      mistakes: [
        "Utiliser des annonces en cours comme références de prix.",
        "Comparer des surfaces trop éloignées et ignorer l'effet de taille.",
        "Faire une moyenne de comparables incohérents au lieu de reprendre le travail.",
        "Appliquer des coefficients standards sans vérification locale.",
      ],
      caseStudy: {
        title: "Construire une estimation à partir de trois comparables",
        context:
          "Bien à estimer : T2 de 47 m², 3e étage avec ascenseur, balcon 4 m², sans parking, bon état, DPE D, charges 1 300 €/an, quartier résidentiel. Comparable A : T2 de 45 m², 1er étage avec ascenseur, sans balcon, sans parking, bon état, DPE D, vendu 172 000 € il y a 3 mois. Comparable B : T2 de 50 m², 4e avec ascenseur, balcon 6 m², parking, à rafraîchir, DPE E, vendu 189 000 € il y a 7 mois. Comparable C : T2 de 46 m², rez-de-chaussée sans balcon, sans parking, rénové, DPE C, vendu 158 000 € il y a 5 mois.",
        tasks: [
          "Calculez le prix au m² de chaque comparable.",
          "Listez pour chacun les ajustements à opérer et leur sens.",
          "Proposez une fourchette et un prix de présentation.",
          "Identifiez le comparable le moins fiable et dites pourquoi.",
        ],
        correction: [
          "Prix au m² : A = 172 000 / 45 = 3 822 €/m². B = 189 000 / 50 = 3 780 €/m². C = 158 000 / 46 = 3 435 €/m².",
          "Comparable A : le bien étudié a un balcon (ajustement positif sur A, de l'ordre de +3 %) et un étage plus élevé avec ascenseur, ce qui est plutôt favorable (+1 à 2 %). A ajusté ≈ 3 970 €/m², soit environ 186 500 € pour 47 m².",
          "Comparable B : B a un parking (ajustement négatif, valeur locale du stationnement), un balcon plus grand (−1 %), mais est à rafraîchir (+4 %) et classé E (+2 %). En retenant une valeur de parking modérée, B ajusté se situe autour de 3 850 à 3 950 €/m², soit environ 181 000 à 186 000 €.",
          "Comparable C : rez-de-chaussée (ajustement positif marqué, +5 à 8 %), sans balcon (+3 %), mais rénové et classé C (−4 à −5 %). C ajusté ≈ 3 600 à 3 700 €/m², soit environ 169 000 à 174 000 €.",
          "Fourchette : les résultats ajustés se situent entre 169 000 et 186 500 €. La dispersion est un peu large : on retiendra une fourchette de 175 000 à 185 000 €, avec un prix de présentation recommandé autour de 185 000 à 189 000 € FAI selon la charge des honoraires, laissant une marge de négociation raisonnable.",
          "Le comparable le moins fiable est C : le rez-de-chaussée est une caractéristique fortement discriminante dont l'ajustement varie beaucoup selon le quartier, l'exposition et le vis-à-vis. On le conserve comme borne basse, sans lui donner le même poids que A.",
        ],
      },
      quiz: [
        {
          id: "es3q1",
          type: "qcm",
          question: "Lequel de ces éléments n'est pas un comparable valable ?",
          options: [
            "Une vente signée il y a quatre mois dans le même immeuble",
            "Une annonce en cours de diffusion depuis six mois",
            "Une vente signée il y a huit mois dans la rue voisine, typologie identique",
            "Une vente que vous avez vous-même réalisée l'an dernier dans le quartier",
          ],
          answer: 1,
          explanation:
            "Une annonce est un prix demandé, pas un prix obtenu. Une annonce ancienne est même un indice d'un prix inadapté : elle ne peut en aucun cas servir de référence.",
          skill: "estimation",
          topic: "comparables",
        },
        {
          id: "es3q2",
          type: "qcm",
          question: "Le comparable est rénové, le bien à estimer est à rafraîchir. L'ajustement sur le comparable est :",
          options: [
            "positif : on augmente son prix",
            "négatif : on diminue son prix pour le ramener à l'état du bien étudié",
            "nul : l'état n'entre pas dans la comparaison",
            "impossible à déterminer",
          ],
          answer: 1,
          explanation:
            "On ramène toujours le comparable aux caractéristiques du bien étudié. Un comparable en meilleur état doit donc être ajusté à la baisse.",
          skill: "estimation",
          topic: "comparables",
        },
        {
          id: "es3q3",
          type: "vraifaux",
          question: "Si des comparables ajustés donnent des résultats très dispersés, il faut en faire la moyenne.",
          answer: 1,
          explanation:
            "Faux. Une dispersion importante signale de mauvais comparables ou des ajustements approximatifs. Faire une moyenne de données incohérentes produit un résultat également incohérent : il faut reprendre la sélection.",
          skill: "estimation",
          topic: "comparables",
        },
        {
          id: "es3q4",
          type: "qcm",
          question: "Quelle source donne les ventes réellement enregistrées en France ?",
          options: [
            "Les portails d'annonces immobilières",
            "La base DVF, publiée à partir des actes notariés et des fichiers fonciers",
            "Les estimations en ligne automatisées",
            "Les statistiques des agences locales",
          ],
          answer: 1,
          explanation:
            "La base des demandes de valeurs foncières recense les mutations à titre onéreux : date, prix, surface, type de bien et localisation. Elle ne renseigne cependant ni l'état ni l'étage.",
          skill: "marche",
          topic: "comparables",
        },
      ],
      sources: [
        { label: "Explorateur DVF — Etalab", url: "https://app.dvf.etalab.gouv.fr/" },
        { label: "data.gouv.fr — Demandes de valeurs foncières", url: "https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "es4",
      moduleId: "estimation",
      title: "Présenter son estimation, surtout quand elle déçoit",
      summary:
        "Transformer un chiffre en raisonnement accepté : la structure de présentation qui obtient des mandats au bon prix.",
      duration: 17,
      difficulty: "intermediaire",
      skills: ["estimation", "psychologie", "mandat"],
      objectives: [
        "Structurer une présentation d'estimation en cinq temps",
        "Associer un scénario de commercialisation à chaque niveau de prix",
        "Gérer la réaction émotionnelle d'un vendeur déçu",
        "Savoir refuser un mandat à un prix irréaliste, sans rompre la relation",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Une estimation juste mal présentée est perdue ; une estimation juste bien présentée obtient un mandat au bon prix. La différence tient entièrement à la structure de la présentation et à la gestion de l'émotion.",
        },
        { type: "heading", text: "La structure en cinq temps" },
        {
          type: "steps",
          items: [
            {
              title: "1. Rappeler le projet du vendeur",
              text:
                "« Vous m'avez dit que vous vendiez pour vous rapprocher de votre fille, avec une échéance en juin, et que le délai comptait plus que le dernier millier d'euros. » Vous montrez que votre travail part de lui, pas de votre grille tarifaire.",
            },
            {
              title: "2. Décrire le bien objectivement",
              text:
                "Points forts d'abord, points faibles ensuite, sans jugement. « Votre bien a trois atouts nets : l'exposition, la distribution et le calme. Il a trois contraintes : le 4e sans ascenseur, le DPE F et les charges élevées. »",
            },
            {
              title: "3. Présenter les ventes comparables",
              text:
                "Trois à cinq ventes signées, avec date, adresse approximative, surface, étage, état et prix. C'est le moment où l'on cesse de discuter d'opinions.",
            },
            {
              title: "4. Dérouler les ajustements",
              text:
                "Différence par différence, dans les deux sens. Le vendeur doit pouvoir refaire le calcul. S'il peut le refaire, il l'accepte.",
            },
            {
              title: "5. Annoncer la fourchette et les scénarios",
              text:
                "Trois niveaux de prix, trois scénarios chiffrés de délai et de résultat probable. Vous ne dites pas « votre bien vaut X » : vous dites « voici ce qui se passe à chaque prix ».",
            },
          ],
        },
        { type: "heading", text: "Les trois scénarios : l'outil décisif" },
        {
          type: "table",
          head: ["Prix de présentation", "Ce qui se passe", "Prix de vente probable"],
          rows: [
            ["Prix ambitieux (+8 à 10 %)", "Peu de contacts, peu de visites, bien qui vieillit en ligne, baisses successives", "Souvent inférieur au prix de marché après 5 à 8 mois"],
            ["Prix de marché", "Contacts réguliers, visites qualifiées, offre dans un délai normal", "Proche du prix de présentation, négociation modérée"],
            ["Prix attractif (−3 à −5 %)", "Forte affluence, plusieurs offres possibles", "Parfois au-dessus du prix affiché, délai très court"],
          ],
          note:
            "Ces scénarios doivent être illustrés par vos propres observations locales : c'est ce qui les rend crédibles.",
        },
        {
          type: "callout",
          variant: "quote",
          title: "La phrase qui fait basculer un rendez-vous",
          text:
            "« Je peux mettre votre bien à 320 000 € si vous le souhaitez, c'est votre décision et je la respecterai. Mais je vous dois la vérité : d'après ce que je constate sur le secteur, nous aurons peu de visites, et dans quatre mois nous discuterons d'un prix inférieur à celui que je vous propose aujourd'hui. Ce n'est pas une question de confiance en votre bien, c'est une question de nombre d'acheteurs financés à ce niveau. »",
        },
        { type: "heading", text: "Gérer l'émotion" },
        {
          type: "paragraph",
          text:
            "Un vendeur déçu n'est pas en train de contester votre méthode : il est en train d'encaisser une nouvelle qui touche son patrimoine, ses projets, parfois son histoire. Trois règles suffisent à traverser ce moment.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Ne pas se défendre. « Je comprends que ce soit décevant » vaut mieux que « mais mes chiffres sont justes ».",
            "Laisser un silence. C'est le moment le plus inconfortable du métier, et le plus utile. Le vendeur a besoin de quelques secondes.",
            "Revenir au projet, pas au bien. « Votre objectif est d'être installé en juin. Regardons ensemble ce qui rend cela possible. »",
          ],
        },
        {
          type: "objection",
          objection: "L'agence d'à côté m'a annoncé 40 000 € de plus.",
          understand:
            "Le vendeur ne dit pas qu'il vous croit incompétent : il vous demande de justifier un écart qu'il ne comprend pas. C'est une demande d'explication, pas une attaque.",
          answers: [
            "« C'est possible, et je ne vais pas critiquer un confrère que je ne connais pas. Ce que je peux faire, c'est vous montrer sur quoi je m'appuie : voici les quatre ventes signées sur lesquelles je fonde ma fourchette. Demandez-lui les siennes : si elles sont meilleures que les miennes, suivez-le. »",
            "« Une question utile à lui poser : quelles ventes comparables justifient ce prix ? Un chiffre sans référence est une opinion. »",
            "« Il existe une autre possibilité, et je la dis franchement : certains annoncent un prix élevé pour obtenir le mandat, puis demandent une baisse au bout de six semaines. Je ne dis pas que c'est son cas. Je dis simplement que la bonne question est : sur quoi ce prix repose-t-il ? »",
          ],
          avoid:
            "Ne surenchérissez jamais pour aligner votre estimation. Vous perdriez votre seul actif — votre crédibilité — et vous vous condamneriez à demander une baisse dans six semaines.",
        },
        { type: "heading", text: "Savoir refuser un mandat" },
        {
          type: "paragraph",
          text:
            "Refuser un mandat surévalué n'est pas un échec : c'est une décision de gestion. Un mandat à +15 % consomme des heures de travail, du budget publicitaire, de l'énergie, et se termine généralement mal. Le refus doit toutefois préserver la relation, car ce vendeur reviendra souvent trois mois plus tard.",
        },
        {
          type: "dialogue",
          title: "Refuser sans rompre",
          lines: [
            {
              speaker: "Formulation à éviter",
              text: "« À ce prix-là, ce n'est pas la peine, personne ne l'achètera. »",
              tone: "bad",
            },
            {
              speaker: "Formulation professionnelle",
              text:
                "« Je préfère être honnête : à 320 000 €, je ne pense pas pouvoir vous rendre le service que vous attendez, et je ne veux pas vous faire perdre trois mois. Ce que je vous propose : essayez à ce prix avec qui vous voudrez. Si dans six semaines vous n'avez pas d'offre, appelez-moi. Mon analyse sera toujours là, et je serai ravi de travailler avec vous à ce moment-là. »",
              tone: "good",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le rappel à six semaines",
          text:
            "Notez systématiquement dans votre agenda un rappel à six semaines pour chaque vendeur dont vous avez refusé le mandat, ou qui a choisi un confrère. Une part significative de ces vendeurs se retrouve sans offre à cette échéance. Un appel qui commence par « je pensais à vous, comment cela se passe-t-il ? » transforme régulièrement ces situations en mandats — au bon prix cette fois.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["estimation", "comparables", "mandat", "mandat-exclusif", "objection", "net-vendeur"],
        },
      ],
      keyPoints: [
        "Cinq temps : projet, bien, comparables, ajustements, fourchette et scénarios.",
        "Trois scénarios de prix chiffrés remplacent avantageusement un verdict.",
        "Un vendeur accepte une conclusion qu'il a vu se construire.",
        "Face à l'émotion : ne pas se défendre, laisser un silence, revenir au projet.",
        "Ne jamais s'aligner sur une estimation concurrente plus élevée.",
        "Refuser un mandat surévalué en préservant la relation, et rappeler à six semaines.",
      ],
      mistakes: [
        "Annoncer le chiffre en début de présentation, avant tout raisonnement.",
        "Surenchérir face à une estimation concurrente pour obtenir le mandat.",
        "Se justifier quand le vendeur exprime sa déception.",
        "Critiquer nommément un confrère.",
      ],
      caseStudy: {
        title: "Le vendeur qui veut 15 % de plus",
        context:
          "Votre fourchette : 268 000 à 279 000 €. Le vendeur veut 315 000 €, parce qu'il a besoin de cette somme pour son projet d'achat. Il est sympathique, il vous fait confiance, et il vous dit : « je sais que vous avez raison, mais j'ai besoin de 315 000 €. Essayons trois mois, et si ça ne marche pas on baissera. »",
        tasks: [
          "Identifiez le vrai problème derrière cette demande.",
          "Rédigez votre réponse complète.",
          "Proposez une solution concrète qui serve réellement ce vendeur.",
        ],
        correction: [
          "Le vrai problème n'est pas le prix : c'est le plan de financement de son projet d'achat. Il raisonne à l'envers, en partant de son besoin et non de la valeur de son bien. Traiter le prix sans traiter le projet ne résout rien.",
          "Réponse : « Je comprends, et c'est une situation fréquente. Mais posons le problème dans le bon sens : le marché ne connaît pas votre besoin. Si nous affichons 315 000 €, nous n'aurons pas d'acheteur, et dans trois mois nous serons au même point avec un bien qui aura vieilli en ligne. Votre vrai sujet, ce n'est pas le prix de vente, c'est le financement de votre achat. »",
          "Solution concrète : proposer un rendez-vous avec un courtier pour examiner l'écart réellement finançable ; vérifier si le projet d'achat peut être ajusté ; examiner si un prêt relais ou un allongement de durée comble la différence ; enfin, si rien n'est possible, envisager de décaler le projet plutôt que de bloquer la vente à un prix invendable.",
          "Position finale : « Ce que je peux vous garantir, c'est un travail sérieux à un prix où nous aurons des acheteurs. Ce que je ne peux pas faire, c'est vous promettre 315 000 € : ce serait vous faire perdre trois mois et abîmer votre bien sur le marché. »",
          "Ce cas illustre la compétence la plus rare du métier : comprendre que la demande exprimée n'est presque jamais le vrai problème.",
        ],
      },
      quiz: [
        {
          id: "es4q1",
          type: "qcm",
          question: "Dans quel ordre présenter une estimation ?",
          options: [
            "Le prix d'abord, puis les justifications",
            "Projet du vendeur, description du bien, comparables, ajustements, fourchette et scénarios",
            "Les honoraires, puis le prix, puis les comparables",
            "Les points faibles du bien, puis le prix",
          ],
          answer: 1,
          explanation:
            "Le vendeur doit pouvoir suivre et refaire le raisonnement. Annoncer le prix en premier déclenche une réaction émotionnelle avant toute argumentation.",
          skill: "estimation",
          topic: "presentation",
        },
        {
          id: "es4q2",
          type: "qcm",
          question: "Un confrère a annoncé 40 000 € de plus. Quelle est la meilleure réponse ?",
          options: [
            "S'aligner pour ne pas perdre le mandat",
            "Montrer les ventes comparables sur lesquelles repose votre fourchette et inviter le vendeur à demander les siennes",
            "Expliquer que ce confrère est connu pour surestimer",
            "Proposer de réduire vos honoraires pour compenser",
          ],
          answer: 1,
          explanation:
            "S'aligner détruit votre crédibilité ; dénigrer vous décrédibilise également. Ramener la discussion aux références factuelles est la seule position tenable.",
          skill: "estimation",
          topic: "presentation",
        },
        {
          id: "es4q3",
          type: "vraifaux",
          question: "Refuser un mandat surévalué est un échec commercial.",
          answer: 1,
          explanation:
            "Faux. C'est une décision de gestion : un mandat invendable consomme du temps et du budget sans produire de revenu. Bien refusé, il revient souvent quelques semaines plus tard au bon prix.",
          skill: "mandat",
          topic: "presentation",
        },
        {
          id: "es4q4",
          type: "qcm",
          question: "Un vendeur exprime sa déception face à votre estimation. Que faites-vous en premier ?",
          options: [
            "Vous répétez vos arguments pour le convaincre",
            "Vous reconnaissez la déception et vous laissez un silence",
            "Vous proposez immédiatement un prix plus élevé",
            "Vous changez de sujet",
          ],
          answer: 1,
          explanation:
            "Répéter des arguments face à une réaction émotionnelle l'amplifie. Reconnaître l'émotion et laisser un silence permet au vendeur d'assimiler avant de revenir au raisonnement.",
          skill: "psychologie",
          topic: "presentation",
        },
      ],
      sources: [
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
        { label: "ANIL — Estimation et vente", url: "https://www.anil.org/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
