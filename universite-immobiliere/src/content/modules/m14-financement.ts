import type { CourseModule } from "@/lib/types";

export const moduleFinancement: CourseModule = {
  id: "financement",
  level: 14,
  title: "Financement",
  subtitle: "Comprendre le crédit sans se substituer au banquier",
  description:
    "Un conseiller qui comprend le financement sécurise ses ventes et gagne la confiance des acquéreurs. Ce module donne les mécanismes essentiels, les ordres de grandeur, et la limite précise à ne pas franchir.",
  icon: "🏦",
  skills: ["financement", "acquereur"],
  requires: ["negociation"],
  outcomes: [
    "Expliquer simplement apport, capacité d'emprunt, mensualité, taux et assurance",
    "Estimer un ordre de grandeur de budget d'acquisition",
    "Identifier les dossiers fragiles avant l'avant-contrat",
    "Savoir exactement où s'arrête votre rôle",
  ],
  lessons: [
    {
      id: "fi1",
      moduleId: "financement",
      title: "Les mécanismes du crédit immobilier",
      summary:
        "Apport, capacité d'emprunt, mensualité, taux, assurance, endettement : comprendre chaque notion et savoir l'expliquer en une phrase.",
      duration: 18,
      difficulty: "intermediaire",
      skills: ["financement"],
      objectives: [
        "Définir chaque composante d'un plan de financement",
        "Calculer un ordre de grandeur de mensualité et de capacité",
        "Comprendre l'encadrement du taux d'endettement",
        "Expliquer les frais d'acquisition à un acquéreur",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Vous n'êtes pas courtier, et vous ne le serez jamais dans le cadre de ce métier. Mais un acquéreur vous posera des questions de financement à chaque rendez-vous, et un vendeur vous demandera si le dossier tient. Comprendre les mécanismes vous permet de répondre utilement, puis d'orienter.",
        },
        { type: "heading", text: "Le plan de financement" },
        {
          type: "table",
          title: "Ce que l'acquéreur doit réunir",
          head: ["Poste", "Détail", "Ordre de grandeur"],
          rows: [
            ["Prix du bien", "Prix net vendeur, honoraires selon leur charge contractuelle", "—"],
            ["Frais d'acquisition", "Droits de mutation, contribution de sécurité immobilière, débours, émoluments", "Environ 7 à 8 % dans l'ancien, nettement moins dans le neuf"],
            ["Frais de garantie", "Hypothèque ou caution selon le montage", "Ordre de 1 à 1,5 % du montant emprunté"],
            ["Frais de dossier bancaire", "Variables selon l'établissement", "Quelques centaines d'euros à environ 1 % "],
            ["Travaux éventuels", "Chiffrés par des entreprises", "Selon le projet"],
            ["Apport personnel", "Épargne, donation, produit d'une vente", "Couvre fréquemment au moins les frais"],
          ],
          note:
            "Ces ordres de grandeur sont pédagogiques et évoluent, notamment pour les droits de mutation qui varient selon les départements. Renvoyez systématiquement au simulateur officiel des notaires et au courtier.",
        },
        {
          type: "definition",
          term: "Capacité d'emprunt",
          simple: "Le montant maximum qu'une banque acceptera probablement de prêter.",
          pro:
            "Montant compatible avec la mensualité maximale supportable, déterminée à partir des revenus nets, des charges de crédit existantes, du taux d'endettement admis et du reste à vivre, pour une durée et un taux donnés.",
          why:
            "Un acquéreur ne raisonne pas en prix mais en mensualité : c'est la banque qui traduit la seconde en premier.",
        },
        {
          type: "definition",
          term: "Taux d'endettement",
          simple: "La part des revenus consacrée au remboursement des crédits, assurance comprise.",
          pro:
            "Rapport entre les charges d'emprunt assurance incluse et les revenus nets, encadré par les recommandations du Haut Conseil de stabilité financière, avec une marge de flexibilité laissée aux établissements pour une part de leur production.",
          why:
            "Cet encadrement protège les ménages du surendettement et stabilise le système bancaire. Il détermine directement le budget des acquéreurs.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "Seuil et durée",
          text:
            "Le seuil de taux d'endettement et la durée maximale d'emprunt relèvent de recommandations qui ont évolué et peuvent évoluer encore. Ne citez jamais un chiffre de mémoire à un acquéreur : dites « il existe un encadrement, votre courtier vous donnera le chiffre applicable à votre situation ». À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "Calculer une mensualité" },
        {
          type: "paragraph",
          text:
            "La formule de la mensualité d'un prêt amortissable à taux fixe est la suivante, où C est le capital, t le taux mensuel (taux annuel divisé par 12) et n le nombre de mensualités :",
        },
        {
          type: "example",
          title: "La formule",
          text:
            "M = C × t / (1 − (1 + t)^−n). Exemple : 240 000 € sur 25 ans (300 mensualités) à 3,50 % annuel, soit t = 0,0029167. M ≈ 240 000 × 0,0029167 / (1 − 1,0029167^−300) ≈ 1 202 € hors assurance. Avec une assurance à 0,34 % du capital initial par an, on ajoute environ 68 €/mois, soit environ 1 270 € au total.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "L'ordre de grandeur mental",
          text:
            "Pour une estimation rapide sur 25 ans autour de 3,5 %, retenez : environ 5 € de mensualité pour 1 000 € empruntés, hors assurance. 240 000 € empruntés donnent donc environ 1 200 €/mois. Cette règle vous permet de répondre en rendez-vous sans calculatrice, en précisant toujours qu'il s'agit d'un ordre de grandeur.",
        },
        { type: "heading", text: "Les frais d'acquisition" },
        {
          type: "paragraph",
          text:
            "L'expression « frais de notaire » est trompeuse : la part revenant effectivement au notaire est minoritaire. L'essentiel est constitué de droits de mutation perçus au profit des collectivités.",
        },
        {
          type: "list",
          title: "La décomposition",
          items: [
            "Les droits de mutation à titre onéreux, perçus au profit du département et de la commune : la part la plus importante.",
            "La contribution de sécurité immobilière, liée aux formalités de publicité foncière.",
            "Les débours : sommes avancées par le notaire pour le compte du client (documents d'urbanisme, état hypothécaire, géomètre le cas échéant).",
            "Les émoluments du notaire, tarifés réglementairement.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Une évolution à surveiller",
          text:
            "Les taux de droits de mutation peuvent varier selon les départements et faire l'objet d'ajustements législatifs. Donnez un ordre de grandeur, puis renvoyez au simulateur officiel et au notaire. Ne calculez jamais un montant définitif. À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "Détecter un dossier fragile" },
        {
          type: "table",
          head: ["Signal", "Ce qu'il implique", "Ce que vous faites"],
          rows: [
            ["Aucune démarche bancaire engagée", "Le budget annoncé est théorique", "Mise en relation avec un courtier avant toute offre"],
            ["Apport dépendant d'une vente non engagée", "Calendrier incertain", "Signalement explicite au vendeur, estimation du bien à vendre"],
            ["Crédits à la consommation en cours", "Réduit la capacité d'emprunt", "Orientation vers le courtier pour arbitrage"],
            ["Contrat de travail récent ou période d'essai", "Certaines banques refusent", "Orientation vers le courtier, ne pas promettre"],
            ["Travailleur indépendant récent", "Nécessite plusieurs bilans", "Prévoir un délai plus long, prévenir le vendeur"],
            ["Refus bancaire déjà essuyé", "Information capitale", "Comprendre le motif avant de faire visiter"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "La phrase interdite",
          text:
            "« Avec vos revenus, vous pouvez emprunter 280 000 € sans problème. » Vous n'avez ni les éléments, ni la compétence, ni le droit de l'affirmer. Un acquéreur qui s'engage sur cette base et essuie un refus subit un préjudice réel, et votre responsabilité est engagée.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["apport", "capacite-emprunt", "taux-endettement", "reste-a-vivre", "mensualite", "taux-nominal", "assurance-emprunteur", "courtier", "frais-notaire", "condition-prêt"],
        },
      ],
      keyPoints: [
        "Frais d'acquisition dans l'ancien : environ 7 à 8 %, à vérifier selon le département.",
        "L'essentiel des « frais de notaire » sont des droits de mutation, non la rémunération du notaire.",
        "Ordre de grandeur mental : environ 5 € de mensualité pour 1 000 € empruntés sur 25 ans à 3,5 %.",
        "Le taux d'endettement et la durée maximale relèvent de recommandations encadrées et évolutives.",
        "Six signaux permettent de détecter un dossier fragile avant l'avant-contrat.",
        "Vous expliquez et vous orientez ; vous ne calculez jamais une capacité définitive.",
      ],
      mistakes: [
        "Annoncer une capacité d'emprunt à un acquéreur.",
        "Citer de mémoire un seuil d'endettement ou une durée maximale.",
        "Oublier les frais d'acquisition dans le budget annoncé.",
        "Présenter une offre sans avoir vérifié l'avancement du dossier bancaire.",
      ],
      quiz: [
        {
          id: "fi1q1",
          type: "qcm",
          question: "Que représente l'essentiel des « frais de notaire » dans l'ancien ?",
          options: [
            "La rémunération du notaire",
            "Les droits de mutation perçus au profit des collectivités",
            "Les frais bancaires",
            "Les honoraires de l'agence",
          ],
          answer: 1,
          explanation:
            "Les droits de mutation à titre onéreux constituent la part la plus importante. Les émoluments du notaire, tarifés réglementairement, représentent une fraction minoritaire de l'ensemble.",
          skill: "financement",
          topic: "frais",
        },
        {
          id: "fi1q2",
          type: "qcm",
          question: "Un acquéreur emprunte 200 000 € sur 25 ans à environ 3,5 %. Ordre de grandeur de la mensualité hors assurance ?",
          options: ["environ 700 €", "environ 1 000 €", "environ 1 500 €", "environ 2 000 €"],
          answer: 1,
          explanation:
            "En appliquant l'ordre de grandeur d'environ 5 € par tranche de 1 000 € empruntés sur 25 ans à ce niveau de taux : 200 × 5 = environ 1 000 € hors assurance.",
          skill: "financement",
          topic: "mensualite",
        },
        {
          id: "fi1q3",
          type: "vraifaux",
          question: "Un conseiller immobilier peut annoncer à un acquéreur le montant qu'il pourra emprunter.",
          answer: 1,
          explanation:
            "Faux. Le calcul dépend d'éléments que le conseiller ne détient pas et relève de la banque ou du courtier. Une affirmation de ce type engage sa responsabilité et peut causer un préjudice réel à l'acquéreur.",
          skill: "financement",
          topic: "limites",
        },
        {
          id: "fi1q4",
          type: "qcm",
          question: "Quel dossier acquéreur est le plus fragile ?",
          options: [
            "Un couple avec accord de principe bancaire écrit",
            "Un acquéreur dont l'apport dépend de la vente d'un bien non encore mis en vente",
            "Un acquéreur ayant mandaté un courtier depuis deux semaines",
            "Un acquéreur avec un apport de 30 %",
          ],
          answer: 1,
          explanation:
            "Le calendrier dépend d'une vente dont ni le délai ni le prix ne sont connus. Ce point doit être signalé explicitement au vendeur avant toute acceptation d'offre.",
          skill: "acquereur",
          topic: "solidite",
        },
      ],
      sources: [
        { label: "Notaires de France — Frais d'acquisition", url: "https://www.notaires.fr/fr/immobilier-fiscalite/frais-de-notaire" },
        { label: "Service-Public.fr — Prêt immobilier", url: "https://www.service-public.fr/particuliers/vosdroits/F2926" },
        { label: "HCSF — Conditions d'octroi du crédit immobilier", url: "https://www.economie.gouv.fr/hcsf" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
