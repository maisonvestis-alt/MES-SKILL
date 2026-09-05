import type { CourseModule } from "@/lib/types";

export const moduleTechnique: CourseModule = {
  id: "technique",
  level: 16,
  title: "Technique du bâtiment",
  subtitle: "Comprendre ce que l'on vend, et savoir quand appeler un professionnel",
  description:
    "Un conseiller n'est pas un expert en bâtiment. Mais il doit savoir observer, employer le bon vocabulaire, poser les bonnes questions et reconnaître ce qui appelle un avis professionnel. Ce module donne cette compétence d'observation.",
  icon: "🧱",
  skills: ["technique"],
  requires: ["transaction"],
  outcomes: [
    "Nommer correctement les éléments d'une construction",
    "Repérer les pathologies fréquentes et évaluer leur niveau d'alerte",
    "Poser les bonnes questions au vendeur sur chaque poste",
    "Savoir formuler « je ne sais pas » et orienter vers le bon professionnel",
  ],
  lessons: [
    {
      id: "te1",
      moduleId: "technique",
      title: "L'enveloppe : fondations, murs, toiture, façade",
      summary:
        "Comprendre la structure d'un bâtiment, repérer les signaux d'alerte et savoir ce qui est grave de ce qui ne l'est pas.",
      duration: 19,
      difficulty: "intermediaire",
      skills: ["technique"],
      objectives: [
        "Nommer les éléments de structure et leur rôle",
        "Classer les fissures selon leur niveau d'alerte",
        "Identifier les origines possibles d'une humidité",
        "Poser les questions techniques pertinentes en visite",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Vous n'aurez jamais à diagnostiquer un désordre. En revanche, vous devrez : repérer ce qui mérite un avis, en parler avec le vocabulaire juste, et ne jamais rassurer à tort. Ces trois compétences suffisent, et elles vous distinguent immédiatement.",
        },
        { type: "heading", text: "Les éléments et leur rôle" },
        {
          type: "table",
          head: ["Élément", "Rôle", "Question à poser au vendeur"],
          rows: [
            ["Fondations", "Transmettre les charges au sol", "« Y a-t-il eu une déclaration de catastrophe naturelle sur la commune ? »"],
            ["Murs porteurs", "Supporter la structure et les planchers", "« Des cloisons ou des murs ont-ils été supprimés ? Avec quelle étude ? »"],
            ["Planchers", "Séparer les niveaux et reprendre les charges", "« Le plancher a-t-il déjà été renforcé ? Y a-t-il des affaissements ? »"],
            ["Charpente", "Supporter la couverture", "« Traditionnelle ou fermettes ? Un traitement a-t-il été réalisé, et quand ? »"],
            ["Couverture", "Protéger de la pluie", "« Quand a-t-elle été refaite ? Y a-t-il un écran sous-toiture ? »"],
            ["Zinguerie et gouttières", "Évacuer les eaux pluviales", "« Y a-t-il déjà eu des débordements ou des infiltrations ? »"],
            ["Façade", "Protéger et isoler l'enveloppe", "« Quand le ravalement a-t-il été fait ? Est-il voté en copropriété ? »"],
            ["Menuiseries", "Fermeture, isolation thermique et acoustique", "« Quelle année, quel matériau, simple ou double vitrage ? »"],
            ["Isolation", "Limiter les déperditions", "« Les combles sont-ils isolés ? Avec quoi et quand ? »"],
            ["Ventilation", "Renouveler l'air, éviter la condensation", "« Y a-t-il une VMC ? Fonctionne-t-elle ? Quand a-t-elle été entretenue ? »"],
          ],
        },
        { type: "heading", text: "Les fissures : ce qui est grave et ce qui ne l'est pas" },
        {
          type: "table",
          head: ["Type", "Description", "Niveau d'alerte"],
          rows: [
            ["Microfissure", "Moins de 0,2 mm, superficielle, dans l'enduit", "Faible : souvent liée au retrait des matériaux"],
            ["Fissure fine", "0,2 à 2 mm, non traversante", "À surveiller : noter la localisation, demander depuis quand"],
            ["Lézarde", "Plus de 2 mm, souvent traversante", "Élevé : avis professionnel indispensable"],
            ["Fissure en escalier", "Suit les joints de maçonnerie, en diagonale", "Élevé : évoque un mouvement de structure"],
            ["Fissure aux angles d'ouverture", "Part de l'angle d'une fenêtre ou d'une porte", "Élevé : point de faiblesse structurelle"],
            ["Fissure évolutive", "S'élargit dans le temps, témoin cassé", "Très élevé : intervention urgente"],
          ],
          note:
            "Ce tableau est un repère d'observation, jamais un diagnostic. Seul un professionnel qualifié peut se prononcer sur l'origine et la gravité d'une fissure.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "La phrase à ne jamais dire",
          text:
            "« Ce n'est rien, c'est juste l'enduit qui travaille. » Vous ne le savez pas, et cette phrase vous engage. Formulation correcte : « Je note cette fissure. Je ne suis pas expert en structure : si le bien vous intéresse, je vous recommande de faire intervenir un professionnel avant de vous engager, et nous pouvons en faire une condition. »",
        },
        { type: "heading", text: "L'humidité : quatre origines possibles" },
        {
          type: "steps",
          items: [
            {
              title: "Remontées capillaires",
              text: "L'eau du sol remonte dans les murs par capillarité. Signes : auréoles et salpêtre en bas de mur, peinture qui cloque à moins d'un mètre du sol. Fréquent dans les constructions anciennes sans coupure de capillarité.",
            },
            {
              title: "Infiltrations",
              text: "L'eau entre par l'enveloppe : toiture, façade, menuiserie, terrasse. Signes : traces localisées, souvent en hauteur ou près d'une ouverture, apparaissant après une pluie.",
            },
            {
              title: "Condensation",
              text: "L'humidité de l'air se dépose sur les surfaces froides. Signes : moisissures noires dans les angles, derrière les meubles, sur les murs donnant sur l'extérieur, buée persistante. Souvent liée à un défaut de ventilation.",
            },
            {
              title: "Fuite ou sinistre",
              text: "Canalisation, appareil, dégât des eaux. Signes : trace récente, localisée, parfois humidité au toucher.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Les deux questions à poser systématiquement",
          text:
            "« Depuis quand ? » et « Qu'a-t-on fait ? ». Ces deux questions révèlent l'essentiel : un problème ancien traité et stabilisé n'a rien à voir avec un problème récent ou récurrent. Notez la réponse par écrit.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le signal de la peinture fraîche",
          text:
            "Une bande de peinture récente en bas de mur, dans une seule pièce, en hiver, mérite une question. Sans accusation : « je vois que cette partie a été repeinte récemment, c'était pour quelle raison ? » Vous devez la poser — et vous devez transmettre la réponse.",
        },
        { type: "heading", text: "Les ordres de grandeur de travaux" },
        {
          type: "table",
          title: "Fourchettes indicatives, à faire confirmer par des entreprises",
          head: ["Poste", "Ordre de grandeur", "Précision"],
          rows: [
            ["Peintures et sols, appartement", "Quelques dizaines d'euros par m²", "Très variable selon la prestation"],
            ["Cuisine équipée", "De 5 000 à 20 000 € et au-delà", "L'écart dépend entièrement du niveau de gamme"],
            ["Salle de bains complète", "De 6 000 à 15 000 €", "Selon la surface et les reprises de réseaux"],
            ["Mise en sécurité électrique", "De 3 000 à 12 000 €", "Selon l'ampleur de la reprise"],
            ["Menuiseries, par ouvrant", "De 600 à 1 500 €", "Selon matériau, dimensions et pose"],
            ["Isolation de combles perdus", "Coût au m² modéré, souvent le meilleur rapport", "Éligible à des dispositifs d'aide sous conditions"],
            ["Réfection de toiture", "Poste lourd, plusieurs dizaines de milliers d'euros", "Selon surface, matériau, charpente"],
          ],
          note:
            "Ces fourchettes varient fortement selon les régions, les prestations et la conjoncture. Ne les citez jamais comme un chiffrage : faites établir des devis.",
        },
        {
          type: "callout",
          variant: "quote",
          title: "La bonne pratique du chiffrage",
          text:
            "« Je ne vais pas vous donner un prix de mémoire, ce serait vous induire en erreur. J'ai deux entreprises du secteur avec qui je travaille : je peux organiser un rendez-vous cette semaine pour un devis gratuit. » Vous transformez une incertitude en service concret.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["fondations", "fissures", "humidite", "vmc", "isolation", "menuiseries", "charpente", "toiture", "infiltrations", "expert-batiment", "travaux"],
        },
      ],
      keyPoints: [
        "Observer, nommer correctement, questionner — jamais diagnostiquer.",
        "Fissures en escalier, traversantes, aux angles d'ouverture ou évolutives : avis professionnel.",
        "Quatre origines d'humidité : capillarité, infiltration, condensation, fuite.",
        "« Depuis quand ? » et « qu'a-t-on fait ? » révèlent l'essentiel.",
        "Ne jamais rassurer sur un désordre ni chiffrer des travaux de mémoire.",
        "Proposer un devis d'entreprise transforme une incertitude en service.",
      ],
      mistakes: [
        "Dire « ce n'est rien » devant une fissure.",
        "Confondre condensation et remontée capillaire dans un commentaire.",
        "Donner un prix de travaux au jugé.",
        "Ne pas transmettre la réponse du vendeur sur un désordre observé.",
      ],
      caseStudy: {
        title: "Une visite technique",
        context:
          "Maison de 1962, sous-sol semi-enterré. Vous observez : une fissure en escalier de 3 mm sur le pignon ouest, partant de l'angle d'une fenêtre ; des traces de salpêtre en bas de mur dans le sous-sol ; des moisissures noires dans les angles de la chambre nord ; des menuiseries bois simple vitrage d'origine ; une toiture refaite en 2018 avec facture disponible.",
        tasks: [
          "Classez chaque observation par niveau d'alerte.",
          "Formulez pour chacune la question à poser au vendeur.",
          "Indiquez ce que vous direz à un acquéreur intéressé.",
        ],
        correction: [
          "Fissure en escalier de 3 mm partant d'un angle d'ouverture : niveau d'alerte élevé. Elle cumule trois caractéristiques préoccupantes : largeur supérieure à 2 mm, tracé en escalier, départ d'un point de faiblesse. Question : « Depuis quand est-elle là ? A-t-elle évolué ? Un professionnel est-il déjà intervenu ? La commune a-t-elle fait l'objet d'un arrêté de catastrophe naturelle sécheresse ? »",
          "Salpêtre en sous-sol semi-enterré : niveau modéré et fréquent dans ce type de construction, souvent lié à des remontées capillaires. Question : « Y a-t-il déjà eu de l'eau au sol ? Un drainage ou un traitement a-t-il été réalisé ? »",
          "Moisissures dans les angles de la chambre nord : niveau modéré, évoque de la condensation liée à un défaut de ventilation combiné à un mur froid. Question : « Y a-t-il une VMC ? Fonctionne-t-elle dans cette pièce ? Le problème apparaît-il seulement en hiver ? »",
          "Simple vitrage d'origine : pas un désordre, mais un poste de travaux et un facteur du DPE. À intégrer dans le prix et à annoncer.",
          "Toiture 2018 avec facture : point positif à valoriser, en demandant la facture et l'éventuelle garantie décennale encore courante.",
          "À l'acquéreur : « Trois points techniques méritent votre attention, je vous les signale volontairement. La fissure du pignon ouest me paraît sérieuse : je ne suis pas expert en structure et je vous recommande fortement de faire intervenir un professionnel avant de vous engager. Nous pouvons en faire une condition. Le salpêtre en sous-sol et les moisissures de la chambre nord sont plus courants, mais ils appellent des questions précises que je pose au vendeur par écrit. En revanche, la toiture a été refaite en 2018 avec facture, ce qui est un point rassurant sur un poste lourd. »",
        ],
      },
      quiz: [
        {
          id: "te1q1",
          type: "qcm",
          question: "Quelle fissure justifie le plus clairement un avis professionnel ?",
          options: [
            "Une microfissure de 0,1 mm dans l'enduit d'une façade",
            "Une fissure en escalier de 3 mm partant de l'angle d'une fenêtre",
            "Une fissure fine au plafond d'une pièce refaite",
            "Un faïençage superficiel sur un mur intérieur",
          ],
          answer: 1,
          explanation:
            "Largeur supérieure à 2 mm, tracé en escalier suivant les joints de maçonnerie et départ d'un angle d'ouverture : trois indicateurs cumulés d'un possible mouvement de structure.",
          skill: "technique",
          topic: "pathologies",
        },
        {
          id: "te1q2",
          type: "qcm",
          question: "Des moisissures noires dans les angles d'une chambre exposée nord évoquent le plus souvent :",
          options: [
            "Une remontée capillaire",
            "De la condensation liée à un défaut de ventilation",
            "Une infiltration de toiture",
            "Une fuite de canalisation",
          ],
          answer: 1,
          explanation:
            "Les moisissures d'angle sur des parois froides, sans trace d'écoulement, sont caractéristiques d'un phénomène de condensation, souvent lié à une ventilation insuffisante.",
          skill: "technique",
          topic: "pathologies",
        },
        {
          id: "te1q3",
          type: "vraifaux",
          question: "Un conseiller peut rassurer un acquéreur en expliquant qu'une fissure « travaille normalement ».",
          answer: 1,
          explanation:
            "Faux. Il ne dispose ni de la compétence ni des éléments pour l'affirmer, et une telle déclaration engage sa responsabilité si un désordre structurel se révèle ensuite.",
          skill: "technique",
          topic: "limites",
        },
        {
          id: "te1q4",
          type: "qcm",
          question: "Quelles deux questions poser systématiquement devant une trace d'humidité ?",
          options: [
            "« Combien ça coûte ? » et « qui l'a vu ? »",
            "« Depuis quand ? » et « qu'a-t-on fait ? »",
            "« Est-ce grave ? » et « le saviez-vous ? »",
            "« L'assurance a-t-elle payé ? » et « quand vendez-vous ? »",
          ],
          answer: 1,
          explanation:
            "L'ancienneté et les mesures prises distinguent un problème traité et stabilisé d'un problème actif ou récurrent. Ces deux réponses doivent être notées et transmises.",
          skill: "technique",
          topic: "pathologies",
        },
      ],
      sources: [
        { label: "Agence Qualité Construction", url: "https://qualiteconstruction.com/" },
        { label: "ADEME — Rénovation", url: "https://www.ademe.fr/" },
        { label: "France Rénov'", url: "https://france-renov.gouv.fr/" },
        { label: "Géorisques — Retrait-gonflement des argiles", url: "https://www.georisques.gouv.fr/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
