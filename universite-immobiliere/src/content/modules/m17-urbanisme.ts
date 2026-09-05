import type { CourseModule } from "@/lib/types";

export const moduleUrbanisme: CourseModule = {
  id: "urbanisme",
  level: 17,
  title: "Urbanisme",
  subtitle: "PLU, autorisations, constructibilité — et savoir dire « je ne sais pas »",
  description:
    "L'urbanisme est le domaine où un conseiller cause le plus de dommages en affirmant sans vérifier. Ce module donne les repères indispensables et, surtout, la méthode de vérification.",
  icon: "🗺️",
  skills: ["urbanisme"],
  requires: ["technique"],
  outcomes: [
    "Lire le zonage d'un PLU et comprendre ce qu'il conditionne",
    "Distinguer déclaration préalable et permis de construire",
    "Vérifier la régularité d'une extension existante",
    "Orienter vers le service urbanisme et le certificat d'urbanisme",
  ],
  lessons: [
    {
      id: "ur1",
      moduleId: "urbanisme",
      title: "Les repères d'urbanisme et la méthode de vérification",
      summary:
        "Ce qu'il faut savoir, ce qu'il ne faut jamais affirmer, et comment obtenir une réponse fiable en deux semaines.",
      duration: 17,
      difficulty: "intermediaire",
      skills: ["urbanisme", "juridique"],
      objectives: [
        "Comprendre le rôle du PLU et de ses zones",
        "Distinguer les régimes d'autorisation selon les seuils",
        "Vérifier la régularité d'une construction existante",
        "Utiliser le certificat d'urbanisme comme outil de sécurisation",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "« Les combles sont aménageables », « on peut construire au fond du jardin », « le garage peut devenir un studio ». Ces trois phrases, prononcées sans vérification, sont à l'origine d'une part importante des litiges impliquant des professionnels de l'immobilier. Aucune ne relève de votre compétence.",
        },
        {
          type: "definition",
          term: "PLU",
          simple: "Le document de la commune qui dit ce que l'on peut construire, où, et à quelles conditions.",
          pro:
            "Plan local d'urbanisme, communal ou intercommunal, fixant les règles générales d'utilisation du sol : zonage, destinations autorisées, emprise, hauteur, implantation, aspect extérieur, stationnement, espaces verts, servitudes d'utilité publique.",
          why:
            "Il traduit localement le projet d'aménagement de la commune. Deux terrains voisins peuvent relever de zones différentes et donc de règles opposées.",
        },
        {
          type: "table",
          title: "Les zones du PLU",
          head: ["Zone", "Signification", "Conséquence pratique"],
          rows: [
            ["U", "Zone urbaine, déjà équipée", "Constructible sous conditions du règlement de zone"],
            ["AU", "Zone à urbaniser", "Constructibilité conditionnée, parfois différée"],
            ["A", "Zone agricole", "Constructions très limitées, généralement liées à l'activité agricole"],
            ["N", "Zone naturelle", "Protection forte, constructions très limitées"],
          ],
          note:
            "Chaque zone comporte des sous-secteurs avec des règles propres. La lecture précise du règlement de zone est indispensable et relève du service urbanisme.",
        },
        { type: "heading", text: "Les régimes d'autorisation" },
        {
          type: "table",
          head: ["Projet", "Régime usuel", "Point de vigilance"],
          rows: [
            ["Construction neuve", "Permis de construire", "Recours obligatoire à un architecte au-delà d'un seuil de surface pour les particuliers"],
            ["Extension de faible ampleur", "Déclaration préalable en dessous d'un seuil de surface", "Le seuil diffère selon la zone et l'existence d'un PLU"],
            ["Extension importante", "Permis de construire", "Le calcul se fait en surface de plancher et emprise au sol"],
            ["Modification de l'aspect extérieur", "Déclaration préalable", "Fenêtre créée, ravalement dans certaines communes, clôture"],
            ["Changement de destination", "Déclaration préalable ou permis selon les travaux", "En copropriété, l'accord de l'assemblée peut être nécessaire"],
            ["Piscine", "Selon dimensions et couverture", "Régime variable, à vérifier commune par commune"],
            ["Division de terrain", "Déclaration préalable ou permis d'aménager", "Peut relever du régime du lotissement"],
          ],
          note:
            "Les seuils exacts sont fixés par le code de l'urbanisme et peuvent différer selon l'existence d'un PLU et la zone. À vérifier selon la réglementation en vigueur et auprès du service urbanisme.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "La seule réponse professionnelle",
          text:
            "« Je ne peux pas vous répondre avec certitude, et je ne veux pas vous induire en erreur sur un point aussi important. La réponse s'obtient auprès du service urbanisme de la commune, et elle peut être sécurisée par un certificat d'urbanisme. Je m'en occupe et je reviens vers vous. »",
        },
        { type: "heading", text: "Vérifier la régularité d'une construction existante" },
        {
          type: "paragraph",
          text:
            "Une véranda, une extension, un garage transformé, des combles aménagés : chacune de ces constructions a normalement fait l'objet d'une autorisation. Leur absence n'empêche pas nécessairement la vente, mais elle doit être connue, signalée, et traitée avec le notaire.",
        },
        {
          type: "steps",
          title: "La méthode en cinq étapes",
          items: [
            { title: "1. Repérer", text: "Comparer le bien réel avec le plan cadastral et une vue aérienne. Toute construction non figurée mérite une question." },
            { title: "2. Demander", text: "« Avez-vous les autorisations d'urbanisme et la déclaration d'achèvement pour cette extension ? » Question neutre, posée systématiquement." },
            { title: "3. Vérifier en mairie", text: "Le service urbanisme peut confirmer l'existence d'une autorisation. C'est une démarche simple et gratuite." },
            { title: "4. Signaler", text: "Si aucune autorisation n'existe, l'information doit être portée à la connaissance de l'acquéreur et traitée dans l'avant-contrat." },
            { title: "5. Orienter", text: "Une régularisation est parfois possible. C'est au notaire et, le cas échéant, à un professionnel de l'urbanisme d'en apprécier les modalités." },
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Ce qui arrive quand on ne vérifie pas",
          text:
            "Un acquéreur découvre après l'achat que l'extension de 30 m² n'a jamais été déclarée. Il ne peut ni l'assurer correctement, ni la revendre sans difficulté, et l'administration peut agir dans les délais prévus par les textes. La surface non déclarée était pourtant comptée dans le prix. Le professionnel qui n'a pas vérifié est en première ligne.",
        },
        { type: "heading", text: "Le certificat d'urbanisme" },
        {
          type: "definition",
          term: "Certificat d'urbanisme",
          simple:
            "Un document délivré par la mairie qui indique les règles applicables à un terrain, et parfois si un projet précis est réalisable.",
          pro:
            "Acte administratif d'information : le certificat d'information indique les dispositions d'urbanisme, les limitations administratives au droit de propriété et les taxes applicables ; le certificat opérationnel se prononce en outre sur la faisabilité d'une opération déterminée. Il cristallise les règles pour une durée déterminée.",
          why:
            "C'est le seul moyen fiable de sécuriser un projet avant d'acheter. Il peut être demandé par le vendeur, par l'acquéreur ou par leur mandataire.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "L'usage professionnel du certificat",
          text:
            "Quand un acquéreur achète en fonction d'un projet — extension, division, changement de destination —, deux options existent : demander un certificat d'urbanisme avant l'offre, ou faire de son obtention une condition suspensive de l'avant-contrat. Proposer spontanément l'une des deux vous positionne immédiatement comme un professionnel sérieux.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["plu", "zonage", "constructibilite", "certificat-urbanisme", "permis-de-construire", "declaration-prealable", "conformite", "changement-destination", "division", "lotissement", "cadastre", "geometre"],
        },
      ],
      keyPoints: [
        "Le PLU fixe localement ce qui est constructible et à quelles conditions.",
        "Les seuils d'autorisation dépendent de la surface de plancher, de l'emprise au sol et de la zone.",
        "Toute construction non figurée au cadastre appelle une question sur son autorisation.",
        "Une construction non déclarée doit être signalée et traitée avec le notaire.",
        "Le certificat d'urbanisme est le seul outil fiable pour sécuriser un projet.",
        "« Je ne sais pas, je vérifie et je reviens » est ici la seule réponse professionnelle.",
      ],
      mistakes: [
        "Affirmer qu'une extension est possible sans consulter le PLU.",
        "Annoncer des combles « aménageables » sur la seule vue de la hauteur.",
        "Ne pas vérifier l'autorisation d'une véranda existante.",
        "Compter une surface non déclarée dans la surface annoncée.",
      ],
      quiz: [
        {
          id: "ur1q1",
          type: "qcm",
          question: "Un acquéreur veut savoir s'il pourra construire une extension. Que faites-vous ?",
          options: [
            "Vous consultez les extensions voisines et concluez par analogie",
            "Vous orientez vers le service urbanisme et proposez un certificat d'urbanisme ou une condition suspensive",
            "Vous affirmez que c'est possible en zone urbaine",
            "Vous lui dites de voir avec son architecte après l'achat",
          ],
          answer: 1,
          explanation:
            "Seule la commune peut se prononcer sur l'application du règlement de zone. Le certificat d'urbanisme ou la condition suspensive sécurisent le projet avant l'engagement.",
          skill: "urbanisme",
          topic: "urbanisme",
        },
        {
          id: "ur1q2",
          type: "qcm",
          question: "Une véranda ne figure pas sur le plan cadastral. Quelle est la première action ?",
          options: [
            "Ignorer : le cadastre est souvent en retard",
            "Demander au vendeur les autorisations d'urbanisme et la déclaration d'achèvement, puis vérifier en mairie",
            "Retirer la surface de la véranda de l'annonce",
            "Demander une expertise structurelle",
          ],
          answer: 1,
          explanation:
            "Le décalage cadastral est fréquent, mais il impose une vérification. L'absence d'autorisation doit être connue, signalée à l'acquéreur et traitée avec le notaire.",
          skill: "urbanisme",
          topic: "urbanisme",
        },
        {
          id: "ur1q3",
          type: "vraifaux",
          question: "Une construction en zone A (agricole) peut être librement agrandie par un particulier.",
          answer: 1,
          explanation:
            "Faux. Les zones agricoles font l'objet de restrictions fortes, les constructions y étant généralement limitées à celles nécessaires à l'activité agricole, avec des exceptions strictement encadrées.",
          skill: "urbanisme",
          topic: "urbanisme",
        },
        {
          id: "ur1q4",
          type: "qcm",
          question: "Quelle différence entre certificat d'urbanisme d'information et opérationnel ?",
          options: [
            "Le premier est gratuit, le second payant",
            "Le premier indique les règles applicables, le second se prononce en outre sur la faisabilité d'une opération déterminée",
            "Le premier vaut autorisation de construire",
            "Il n'y a aucune différence",
          ],
          answer: 1,
          explanation:
            "Le certificat d'information renseigne sur les dispositions applicables ; le certificat opérationnel examine un projet précis. Ni l'un ni l'autre ne vaut autorisation de construire.",
          skill: "urbanisme",
          topic: "urbanisme",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Certificat d'urbanisme", url: "https://www.service-public.fr/particuliers/vosdroits/F1633" },
        { label: "Service-Public.fr — Permis de construire", url: "https://www.service-public.fr/particuliers/vosdroits/F1986" },
        { label: "Service-Public.fr — Déclaration préalable", url: "https://www.service-public.fr/particuliers/vosdroits/F17578" },
        { label: "Géoportail de l'urbanisme", url: "https://www.geoportail-urbanisme.gouv.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
