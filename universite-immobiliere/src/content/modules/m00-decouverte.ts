import type { CourseModule } from "@/lib/types";

export const moduleDecouverte: CourseModule = {
  id: "decouverte",
  level: 0,
  title: "Découvrir le métier",
  subtitle: "Comprendre ce que fait vraiment un conseiller immobilier",
  description:
    "Avant d'apprendre à prospecter ou à estimer, il faut comprendre le terrain de jeu : qui fait quoi, qui gagne quoi, qui est responsable de quoi. Ce module ne demande aucune connaissance préalable.",
  icon: "🧭",
  skills: ["metier"],
  outcomes: [
    "Expliquer en deux minutes ce que fait un conseiller immobilier, à quelqu'un qui n'y connaît rien",
    "Distinguer agent immobilier, négociateur salarié et mandataire indépendant",
    "Comprendre d'où vient l'argent dans une transaction et à quel moment il arrive",
    "Identifier les dix intervenants d'une vente et savoir qui appeler pour quoi",
  ],
  lessons: [
    /* --------------------------------------------------------------- */
    {
      id: "d1",
      moduleId: "decouverte",
      title: "Qu'est-ce qu'un conseiller immobilier ?",
      summary:
        "Comprendre la mission réelle du métier : ce n'est pas « faire visiter des appartements », c'est sécuriser et faire aboutir un projet de vie.",
      duration: 12,
      difficulty: "debutant",
      skills: ["metier"],
      objectives: [
        "Décrire la mission d'un conseiller immobilier en une phrase claire",
        "Citer les six grandes phases d'une transaction",
        "Comprendre le modèle économique : quand et comment le conseiller est payé",
        "Identifier les trois qualités qui font réellement la différence",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Beaucoup de gens croient que le métier consiste à ouvrir des portes et à faire visiter. C'est la partie visible, et c'est probablement 10 % du travail réel. Le reste est invisible : comprendre un projet de vie, fixer un prix juste, préparer un dossier, rassurer, coordonner cinq professionnels et faire tenir un accord fragile pendant trois mois.",
        },
        {
          type: "definition",
          term: "Conseiller immobilier",
          simple:
            "Une personne qui accompagne un propriétaire qui veut vendre et un acheteur qui veut acheter, du premier contact jusqu'à la signature chez le notaire.",
          pro:
            "Professionnel de l'entremise immobilière qui, dans le cadre d'un mandat écrit, évalue un bien, le commercialise, sélectionne et qualifie les candidats acquéreurs, conduit la négociation et coordonne les intervenants jusqu'à la réitération de la vente par acte authentique.",
          why:
            "Vendre un logement est un acte rare (deux ou trois fois dans une vie), techniquement complexe et émotionnellement chargé. Le conseiller existe parce que le particulier ne dispose ni du temps, ni des références de prix, ni du recul émotionnel pour piloter seul l'opération.",
        },
        { type: "heading", text: "Les six phases du métier" },
        {
          type: "steps",
          items: [
            {
              title: "1. Trouver",
              text:
                "Identifier des propriétaires qui vendent ou vendront. C'est la prospection : appels, terrain, réseau, recommandations, contenu local. Sans cette phase, il n'y a pas de métier.",
            },
            {
              title: "2. Comprendre",
              text:
                "Le rendez-vous de découverte : pourquoi vendent-ils, pour quand, avec quelles contraintes, quelle est la situation juridique du bien. On écoute beaucoup plus qu'on ne parle.",
            },
            {
              title: "3. Évaluer",
              text:
                "Analyser le bien, le quartier et les ventes comparables réelles pour construire une fourchette de prix défendable — puis savoir la présenter, même quand elle déçoit.",
            },
            {
              title: "4. Contractualiser",
              text:
                "Obtenir un mandat écrit : le seul document qui vous autorise à agir et à être rémunéré. Il s'obtient par la qualité du plan d'action présenté, pas par la pression.",
            },
            {
              title: "5. Commercialiser",
              text:
                "Photos, annonce, diffusion, sélection des acquéreurs, visites, retours au vendeur chaque semaine, ajustements. C'est un travail de pilotage, pas d'attente.",
            },
            {
              title: "6. Conclure",
              text:
                "Négociation, offre écrite, avant-contrat, conditions suspensives, financement, notaire, acte authentique, remise des clés. C'est là que se joue la réputation.",
            },
          ],
        },
        { type: "heading", text: "Le modèle économique : comprendre d'où vient l'argent" },
        {
          type: "paragraph",
          text:
            "Un conseiller immobilier n'est pas payé au temps passé. Il est payé au résultat, et seulement si la vente se réalise et est constatée dans un acte. Concrètement : vous pouvez travailler quarante heures sur un dossier et ne rien percevoir si la vente n'aboutit pas. C'est la règle du jeu, et elle a trois conséquences directes.",
        },
        {
          type: "list",
          title: "Trois conséquences du paiement au résultat",
          items: [
            "Le choix des dossiers est stratégique. Accepter un mandat à un prix irréaliste, c'est travailler gratuitement pendant six mois.",
            "La trésorerie est décalée. Entre la signature d'un mandat et l'encaissement des honoraires, il s'écoule couramment quatre à six mois.",
            "La régularité de la prospection est vitale. Ce que vous prospectez aujourd'hui produit un revenu dans un trimestre.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le décalage de trésorerie du débutant",
          text:
            "C'est la première cause d'abandon. Un conseiller qui démarre sans réserve financière et sans prospection quotidienne se retrouve à sec au bout de quatre mois, précisément au moment où son travail commence à produire. Prévoyez ce décalage dès le premier jour.",
        },
        {
          type: "definition",
          term: "Honoraires",
          simple:
            "La somme que perçoit le professionnel quand la vente se fait. Elle est prévue à l'avance dans le mandat.",
          pro:
            "Rémunération librement fixée, affichée toutes taxes comprises, due seulement si l'opération est effectivement conclue et constatée dans un acte. Le mandat précise le montant ou le taux et la partie qui en a la charge.",
          why:
            "Le principe « pas de vente, pas d'honoraires » protège le client contre un professionnel qui facturerait de l'activité sans résultat.",
        },
        { type: "heading", text: "Ce que le métier n'est pas" },
        {
          type: "compare",
          title: "Idées reçues et réalité",
          left: {
            title: "Ce que les gens imaginent",
            items: [
              "On fait visiter des appartements",
              "On gagne beaucoup, vite et facilement",
              "Il suffit d'être sympathique et bavard",
              "Le prix est décidé par l'agence",
              "On travaille quand on veut",
            ],
          },
          right: {
            title: "La réalité du terrain",
            items: [
              "Les visites représentent une petite part du temps de travail",
              "Les revenus arrivent avec plusieurs mois de décalage et sont irréguliers",
              "On écoute, on prépare, on documente, on rappelle quand on l'a promis",
              "Le prix est fixé par le marché ; le vendeur décide, le conseiller éclaire",
              "On travaille surtout quand les clients sont disponibles : soirs et samedis",
            ],
          },
        },
        {
          type: "callout",
          variant: "quote",
          title: "La phrase qui résume le métier",
          text:
            "« Mon travail, ce n'est pas de vous trouver un acheteur. C'est de faire en sorte que votre projet aboutisse au bon prix, dans le bon délai, sans mauvaise surprise entre la signature du compromis et celle de l'acte. » Retenez cette formulation : elle déplace la conversation du prix vers la valeur.",
        },
        { type: "heading", text: "Les trois qualités qui font réellement la différence" },
        {
          type: "list",
          ordered: true,
          items: [
            "La fiabilité. Rappeler quand on a dit qu'on rappellerait, à l'heure dite. C'est banal, et c'est pourtant le premier facteur de différenciation dans un métier où beaucoup ne le font pas.",
            "La capacité à dire des choses désagréables avec tact. Annoncer qu'un bien vaut 30 000 € de moins que ce qu'espère le propriétaire est un acte professionnel. Ne pas oser le faire est une faute.",
            "La rigueur documentaire. Le conseiller qui a lu les trois derniers PV d'assemblée générale avant l'estimation ne se fera pas surprendre au compromis.",
          ],
        },
        {
          type: "example",
          title: "Une journée type (réaliste)",
          text:
            "08h30 prospection téléphonique sur la pige — 10h00 relances des acquéreurs de la semaine — 11h00 rendez-vous d'estimation chez un propriétaire — 13h00 déjeuner et rédaction du compte rendu d'estimation — 14h30 deux visites — 16h30 appel au vendeur pour lui faire le retour des visites — 17h00 préparation des photos et de l'annonce d'un nouveau mandat — 18h00 relance d'un dossier bancaire bloqué — 18h30 administratif et préparation du lendemain.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["honoraires", "mandat", "net-vendeur", "fai", "estimation"],
        },
      ],
      keyPoints: [
        "Le métier consiste à faire aboutir un projet de vie, pas à faire visiter.",
        "Six phases : trouver, comprendre, évaluer, contractualiser, commercialiser, conclure.",
        "La rémunération est au résultat : pas de vente conclue, pas d'honoraires.",
        "Le décalage de trésorerie entre le travail et le revenu est de quatre à six mois.",
        "Accepter un mandat surévalué, c'est décider de travailler gratuitement.",
        "Fiabilité, franchise bienveillante et rigueur documentaire créent l'essentiel de l'écart entre les professionnels.",
      ],
      mistakes: [
        "Croire que le métier commence quand un client appelle : il commence par la prospection.",
        "Accepter tous les mandats pour « avoir du stock » : le stock invendable épuise et démotive.",
        "Promettre un prix pour obtenir un mandat, puis demander une baisse trois semaines plus tard.",
        "Démarrer sans réserve financière pour couvrir les quatre à six premiers mois.",
      ],
      caseStudy: {
        title: "Expliquer son métier à un inconnu",
        context:
          "Vous êtes à un repas de famille. Un cousin vous demande : « Concrètement, tu fais quoi de tes journées ? Tu fais visiter des appartements ? » Vous avez deux minutes.",
        tasks: [
          "Rédigez votre réponse en cinq phrases maximum.",
          "Elle doit contenir : la mission, une phase invisible du travail, et le principe de rémunération au résultat.",
          "Elle ne doit contenir aucun jargon non expliqué.",
        ],
        correction: [
          "Phrase 1 — la mission : « J'accompagne des gens qui vendent ou achètent un logement, du premier rendez-vous jusqu'à la signature chez le notaire. »",
          "Phrase 2 — le travail invisible : « L'essentiel de mon temps, ce n'est pas les visites : c'est estimer au bon prix, préparer le dossier et coordonner le notaire, la banque et les diagnostiqueurs. »",
          "Phrase 3 — la valeur : « Une vente qui capote, c'est souvent trois mois perdus pour le vendeur. Mon travail, c'est que ça n'arrive pas. »",
          "Phrase 4 — la rémunération : « Je ne suis payé que si la vente se fait réellement. »",
          "Phrase 5 — l'ouverture : « Si un jour tu as une question sur un projet, même sans vendre, appelle-moi. » Cette dernière phrase transforme une conversation en source de recommandation.",
        ],
      },
      quiz: [
        {
          id: "d1q1",
          type: "qcm",
          question: "Quand un conseiller immobilier perçoit-il ses honoraires ?",
          options: [
            "Dès la signature du mandat de vente",
            "À la signature du compromis de vente",
            "Lorsque l'opération est effectivement conclue et constatée dans un acte",
            "Au premier mois de commercialisation, au prorata du travail engagé",
          ],
          answer: 2,
          explanation:
            "La rémunération est due lorsque l'opération est effectivement conclue et constatée dans un acte. C'est ce qui explique le décalage de trésorerie du métier et l'importance de ne prendre que des mandats réalistes.",
          skill: "metier",
          topic: "honoraires",
        },
        {
          id: "d1q2",
          type: "vraifaux",
          question: "Les visites représentent la majorité du temps de travail d'un conseiller immobilier.",
          answer: 1,
          explanation:
            "Faux. Les visites sont la partie visible mais minoritaire. Prospection, estimation, préparation des dossiers, suivi des acquéreurs et coordination des intervenants occupent la plus grande part du temps.",
          skill: "metier",
        },
        {
          id: "d1q3",
          type: "qcm",
          question: "Quelle est la première cause d'abandon chez les conseillers débutants ?",
          options: [
            "La difficulté à faire visiter des biens",
            "Le décalage entre le travail fourni et l'arrivée des premiers revenus",
            "La complexité des logiciels métier",
            "Le manque de biens à vendre sur le marché",
          ],
          answer: 1,
          explanation:
            "Il s'écoule couramment quatre à six mois entre le début de l'activité et le premier encaissement. Sans réserve financière et sans prospection quotidienne, l'activité s'arrête au moment précis où elle allait produire.",
          skill: "metier",
        },
        {
          id: "d1q4",
          type: "qcm",
          question: "Un propriétaire veut vendre 30 000 € au-dessus du marché. Quelle est l'attitude professionnelle ?",
          options: [
            "Accepter le mandat au prix demandé : le marché fera son travail",
            "Refuser sèchement et quitter le rendez-vous",
            "Présenter les ventes comparables, expliquer les conséquences d'une surévaluation, puis laisser le vendeur décider en connaissance de cause",
            "Accepter en promettant de trouver « un acheteur coup de cœur »",
          ],
          answer: 2,
          explanation:
            "Le prix appartient au vendeur ; l'information juste appartient au conseiller. On documente, on explique les conséquences (peu de visites, bien qui « brûle », baisse ultérieure sous le prix de marché), puis on laisse décider.",
          skill: "metier",
          topic: "estimation",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Agent immobilier", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F31649", note: "Conditions d'exercice de la profession" },
        { label: "Légifrance — Loi Hoguet n° 70-9 du 2 janvier 1970", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000512228/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    /* --------------------------------------------------------------- */
    {
      id: "d2",
      moduleId: "decouverte",
      title: "Agent, négociateur, mandataire : qui fait quoi ?",
      summary:
        "Distinguer les statuts du métier, comprendre ce que chacun a le droit de faire, et savoir se présenter avec exactitude.",
      duration: 14,
      difficulty: "debutant",
      skills: ["metier", "juridique"],
      objectives: [
        "Distinguer agent immobilier, négociateur salarié et mandataire indépendant",
        "Savoir ce qu'un mandataire n'a pas le droit de faire",
        "Comprendre le rôle de la carte professionnelle et de l'attestation d'habilitation",
        "Se présenter à un client sans jamais se sur-vendre juridiquement",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Dans le langage courant, tout le monde dit « agent immobilier ». Juridiquement, ces mots désignent des situations différentes, avec des droits différents. Un client averti peut vous poser la question ; un confrère aussi. Savoir répondre exactement fait partie du professionnalisme de base.",
        },
        {
          type: "definition",
          term: "Carte professionnelle",
          simple:
            "L'autorisation officielle d'exercer, délivrée par la chambre de commerce et d'industrie.",
          pro:
            "Titre mentionnant les activités exercées — Transactions sur immeubles et fonds de commerce (T), Gestion immobilière (G), Syndic de copropriété (S) — délivré sous conditions d'aptitude professionnelle, d'honorabilité, d'assurance de responsabilité civile professionnelle et, si le professionnel manie des fonds, de garantie financière.",
          why:
            "Elle protège le public : elle garantit qu'une personne compétente, assurée et contrôlable intervient dans une opération portant sur le patrimoine principal des ménages.",
        },
        { type: "heading", text: "Les trois situations que vous rencontrerez" },
        {
          type: "table",
          head: ["", "Agent immobilier", "Négociateur salarié", "Mandataire indépendant"],
          rows: [
            ["Statut", "Titulaire de la carte professionnelle (personne physique ou morale)", "Salarié de l'agence, souvent sous statut VRP", "Agent commercial indépendant, immatriculé au registre spécial des agents commerciaux"],
            ["Carte professionnelle", "Oui, à son nom", "Non : habilité par le titulaire", "Non : habilité par le titulaire du réseau"],
            ["Document d'habilitation", "—", "Attestation d'emploi", "Attestation d'habilitation"],
            ["Peut recevoir des fonds", "Oui, s'il dispose d'une garantie financière", "Uniquement si expressément habilité", "Non"],
            ["Peut rédiger l'avant-contrat", "Selon organisation et compétence, sous sa responsabilité", "Selon organisation interne", "Non"],
            ["Local ouvert au public à son nom", "Oui", "Celui de l'agence", "Non"],
            ["Rémunération", "Résultat de l'entreprise", "Fixe et/ou commissions", "Commissions, pourcentage des honoraires perçus"],
          ],
          note: "Les modalités précises figurent dans la loi Hoguet et son décret d'application. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "Ce qu'un mandataire ne peut pas faire",
          text:
            "Un mandataire indépendant ne peut ni encaisser de fonds pour le compte des clients, ni ouvrir un local commercial à son nom, ni se présenter comme titulaire de la carte professionnelle. Ces limites ne réduisent en rien la qualité de l'accompagnement possible : elles définissent seulement le périmètre juridique. À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "Comment se présenter avec exactitude" },
        {
          type: "dialogue",
          title: "Deux façons de répondre à « Vous êtes agent immobilier ? »",
          lines: [
            { speaker: "Version approximative", text: "« Oui, je suis agent immobilier. »", tone: "bad" },
            {
              speaker: "Version exacte et rassurante",
              text:
                "« Je suis conseiller immobilier indépendant, habilité par le réseau X qui détient la carte professionnelle. Concrètement pour vous, cela ne change rien à l'accompagnement : je suis assuré, je suis formé, et l'ensemble des fonds passe par le notaire, ce qui est la meilleure garantie possible. »",
              tone: "good",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Transformer une limite en argument",
          text:
            "« Je ne manipule jamais votre argent : tout passe par le notaire. » Cette phrase, souvent perçue comme un aveu de faiblesse par les débutants, est en réalité un élément de réassurance très efficace auprès des vendeurs prudents.",
        },
        { type: "heading", text: "Les autres statuts que vous croiserez" },
        {
          type: "list",
          items: [
            "Le promoteur immobilier : il conçoit et fait construire des programmes neufs, puis les commercialise. Il achète du foncier, porte le risque de l'opération.",
            "Le marchand de biens : il achète pour revendre après travaux ou division. Il exerce une activité commerciale avec une fiscalité propre.",
            "L'expert immobilier : il évalue la valeur d'un bien selon une méthodologie normée, souvent dans un cadre successoral, fiscal ou judiciaire.",
            "L'administrateur de biens et le syndic : ils gèrent des locations ou des copropriétés, sous carte G ou S.",
            "Le chasseur immobilier : il travaille pour l'acquéreur, sur mandat de recherche.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Attention au titre « expert »",
          text:
            "Se présenter comme « expert immobilier » quand on réalise des avis de valeur d'agence entretient une confusion. Dites « avis de valeur » ou « estimation », et réservez « expertise » aux professionnels de l'évaluation.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["carte-professionnelle", "mandataire", "negociateur", "agent-immobilier", "loi-hoguet", "expert-immobilier"],
        },
      ],
      keyPoints: [
        "La carte professionnelle est détenue par l'agent immobilier ou le réseau, pas par chaque conseiller.",
        "Le mandataire est un agent commercial indépendant habilité, immatriculé au registre spécial des agents commerciaux.",
        "Un mandataire ne reçoit pas de fonds, ne rédige pas les actes et n'ouvre pas de local à son nom.",
        "Le négociateur salarié travaille sous la carte de son employeur, avec une attestation d'emploi.",
        "Se présenter avec exactitude est une marque de professionnalisme, jamais une faiblesse commerciale.",
      ],
      mistakes: [
        "Dire « je suis agent immobilier » quand on est mandataire habilité.",
        "Employer le mot « expertise » pour un avis de valeur d'agence.",
        "Proposer à un client de vous remettre un chèque d'acompte quand on n'y est pas habilité.",
        "Cacher son statut de mandataire par crainte du jugement, au lieu d'expliquer le circuit des fonds.",
      ],
      quiz: [
        {
          id: "d2q1",
          type: "qcm",
          question: "Un mandataire immobilier indépendant :",
          options: [
            "détient sa propre carte professionnelle",
            "est habilité par un titulaire de la carte professionnelle et immatriculé au registre spécial des agents commerciaux",
            "est un salarié du réseau avec un contrat de travail",
            "peut ouvrir une agence à son nom s'il déclare son activité",
          ],
          answer: 1,
          explanation:
            "Le mandataire est un agent commercial indépendant. Il exerce sous la carte professionnelle du titulaire qui l'habilite au moyen d'une attestation, et s'immatricule au registre spécial des agents commerciaux.",
          skill: "juridique",
          topic: "statuts",
        },
        {
          id: "d2q2",
          type: "vraifaux",
          question: "Un mandataire immobilier peut encaisser le dépôt de garantie de l'acquéreur au moment du compromis.",
          answer: 1,
          explanation:
            "Faux. Le maniement de fonds suppose une garantie financière dont le mandataire ne dispose pas. Le dépôt de garantie est séquestré chez le notaire.",
          skill: "juridique",
          topic: "statuts",
        },
        {
          id: "d2q3",
          type: "qcm",
          question: "Que signifie la mention « carte T » ?",
          options: [
            "Carte de transport professionnel",
            "Carte autorisant les transactions sur immeubles et fonds de commerce",
            "Carte temporaire délivrée aux débutants",
            "Carte de télétravail des réseaux de mandataires",
          ],
          answer: 1,
          explanation:
            "La mention « T » correspond à l'activité de transactions sur immeubles et fonds de commerce. « G » vise la gestion immobilière et « S » l'activité de syndic.",
          skill: "juridique",
          topic: "statuts",
        },
        {
          id: "d2q4",
          type: "qcm",
          question: "Quel professionnel travaille pour l'acquéreur, sur mandat de recherche ?",
          options: ["Le syndic", "Le chasseur immobilier", "Le marchand de biens", "Le diagnostiqueur"],
          answer: 1,
          explanation:
            "Le chasseur immobilier est mandaté par l'acquéreur pour rechercher un bien correspondant à ses critères, contrairement au conseiller classique majoritairement mandaté par le vendeur.",
          skill: "metier",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Exercer comme agent immobilier", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F31649" },
        { label: "Légifrance — Décret n° 72-678 du 20 juillet 1972", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000699392/", note: "Décret d'application de la loi Hoguet" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    /* --------------------------------------------------------------- */
    {
      id: "d3",
      moduleId: "decouverte",
      title: "Agence traditionnelle ou réseau de mandataires ?",
      summary:
        "Comprendre les deux modèles d'organisation du marché, leurs économies respectives, et ce que cela change pour un débutant.",
      duration: 12,
      difficulty: "debutant",
      skills: ["metier", "organisation"],
      objectives: [
        "Décrire le fonctionnement économique d'une agence traditionnelle",
        "Décrire le fonctionnement d'un réseau de mandataires",
        "Comparer les deux modèles du point de vue d'un débutant",
        "Identifier les questions à poser avant de rejoindre une structure",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Deux grands modèles coexistent en France. Aucun n'est supérieur en soi : ils correspondent à des besoins, des tempéraments et des situations financières différents. Ce qui compte, c'est de comprendre où va l'argent et où va l'accompagnement.",
        },
        { type: "heading", text: "L'agence traditionnelle" },
        {
          type: "paragraph",
          text:
            "Une agence dispose d'un local, d'une vitrine, d'une équipe et d'une notoriété locale. Elle supporte des charges fixes importantes : loyer, salaires, logiciels, publicité, assurance, garantie financière. En contrepartie, elle offre une structure : un directeur qui forme, des collègues avec qui échanger, un flux d'appels entrants, et un cadre juridique porté par le titulaire de la carte.",
        },
        {
          type: "list",
          title: "Ce que l'agence apporte concrètement à un débutant",
          items: [
            "Un encadrement quotidien et une correction immédiate des erreurs",
            "Un stock de biens existant : on peut travailler des acquéreurs dès le premier mois",
            "Des appels et des passages en vitrine que l'on n'a pas eu à provoquer",
            "Un cadre horaire qui structure une journée quand on n'a pas encore de discipline autonome",
          ],
        },
        { type: "heading", text: "Le réseau de mandataires" },
        {
          type: "paragraph",
          text:
            "Un réseau ne possède pas d'agences physiques ouvertes au public. Il détient la carte professionnelle, fournit les outils (logiciel, diffusion des annonces, formation, juridique) et habilite des conseillers indépendants qui travaillent depuis chez eux et sur le terrain. Les charges fixes étant plus faibles, la part des honoraires reversée au conseiller est nettement plus élevée.",
        },
        {
          type: "compare",
          title: "Deux économies différentes",
          left: {
            title: "Agence traditionnelle",
            items: [
              "Part des honoraires reversée au négociateur : usuellement une fraction minoritaire",
              "Charges fixes portées par l'agence",
              "Statut salarié possible : revenu fixe, protection sociale du salariat",
              "Encadrement quotidien, apprentissage rapide",
              "Moins d'autonomie sur les méthodes et les horaires",
            ],
          },
          right: {
            title: "Réseau de mandataires",
            items: [
              "Part des honoraires reversée au conseiller : généralement majoritaire, parfois très élevée",
              "Charges à la charge du conseiller : pack outils, véhicule, publicité, cotisations",
              "Statut indépendant : pas de revenu fixe, protection sociale des travailleurs indépendants",
              "Accompagnement variable selon les réseaux : le point à vérifier en priorité",
              "Autonomie complète, donc exigence de discipline personnelle",
            ],
          },
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le piège du pourcentage élevé",
          text:
            "Un réseau qui reverse une part très élevée des honoraires n'est intéressant que si vous réalisez des ventes. 90 % de zéro vaut zéro. Pour un débutant complet, la qualité de la formation, la présence d'un parrain disponible et l'existence d'un support juridique réactif pèsent souvent plus lourd que dix points de commission.",
        },
        { type: "heading", text: "Les questions à poser avant de s'engager" },
        {
          type: "list",
          ordered: true,
          items: [
            "Quel est le coût mensuel réel, tout compris, les six premiers mois — pack, diffusion, logiciel, cotisations ?",
            "Qui m'accompagne concrètement les 90 premiers jours, à quelle fréquence, et est-ce contractualisé ?",
            "Puis-je appeler quelqu'un un samedi matin quand un vendeur me pose une question juridique en rendez-vous ?",
            "Combien de conseillers ont démarré il y a un an dans ma région, et combien exercent encore ?",
            "Quelle est la durée d'engagement et quelles sont les conditions de sortie ?",
            "Sur quels portails mes annonces sont-elles diffusées, et à quel coût supplémentaire ?",
            "Comment sont traités les dossiers en cours si je quitte le réseau ?",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le test le plus fiable",
          text:
            "Demandez à parler à deux conseillers qui ont rejoint la structure il y a un an et à un qui l'a quittée. Une structure sûre d'elle acceptera. Un refus est en soi une réponse.",
        },
        {
          type: "example",
          title: "Ordre de grandeur d'un calcul simple",
          text:
            "Un bien vendu 250 000 € avec 4 % d'honoraires génère 10 000 € HT pour la structure. Selon le contrat, le conseiller peut percevoir de l'ordre de 3 000 € à 8 000 € HT, desquels il faut retrancher, s'il est indépendant, ses cotisations sociales, ses frais et son impôt. Faites toujours ce calcul en net, jamais en brut.",
        },
        { type: "terms", title: "Vocabulaire de la leçon", ids: ["mandataire", "carte-professionnelle", "honoraires", "agent-immobilier"] },
      ],
      keyPoints: [
        "L'agence apporte structure, flux et encadrement, en échange d'une part d'honoraires plus faible.",
        "Le réseau apporte autonomie et rétrocession élevée, en échange de charges et d'une discipline personnelle.",
        "Pour un débutant, la qualité de l'accompagnement prime souvent sur le taux de rétrocession.",
        "Un taux élevé sur zéro vente ne vaut rien : raisonnez toujours en revenu net réel.",
        "Parler à d'anciens membres d'un réseau est le test de fiabilité le plus efficace.",
      ],
      mistakes: [
        "Choisir une structure uniquement sur le pourcentage de rétrocession affiché.",
        "Ne pas calculer le coût mensuel réel des six premiers mois.",
        "Négliger la question de l'accompagnement juridique en cas d'urgence terrain.",
        "Signer sans lire les conditions de sortie et le sort des dossiers en cours.",
      ],
      caseStudy: {
        title: "Comparer deux propositions",
        context:
          "Proposition A : agence locale, statut salarié VRP, fixe modeste plus commissions, formation interne trois semaines, stock de 40 mandats. Proposition B : réseau national, statut indépendant, rétrocession 85 %, pack outils 189 €/mois, formation en ligne, parrain à 120 km.",
        tasks: [
          "Listez trois avantages et trois risques de chaque proposition pour un débutant complet.",
          "Identifiez les trois informations manquantes que vous exigeriez avant de décider.",
          "Formulez votre recommandation en tenant compte d'une réserve financière de 3 000 €.",
        ],
        correction: [
          "Proposition A — avantages : revenu immédiat même modeste, apprentissage encadré, stock existant permettant des visites dès la première semaine. Risques : rétrocession faible, dépendance au management, moins d'autonomie.",
          "Proposition B — avantages : rétrocession élevée, liberté d'organisation, potentiel de revenu supérieur à moyen terme. Risques : aucun revenu les premiers mois, charge fixe de 189 €/mois dès le premier jour, parrain éloigné donc accompagnement réel incertain.",
          "Informations manquantes : le montant du fixe et son caractère éventuellement récupérable en proposition A ; le coût total réel tout compris en proposition B ; le taux de conseillers encore actifs après douze mois dans les deux structures.",
          "Recommandation type : avec 3 000 € de réserve seulement, la proposition A sécurise l'apprentissage et la trésorerie. La proposition B devient pertinente une fois les mécanismes maîtrisés et une réserve de six mois constituée. Cette recommandation n'est pas une règle : elle dépend de la situation personnelle.",
        ],
      },
      quiz: [
        {
          id: "d3q1",
          type: "qcm",
          question: "Pourquoi un réseau de mandataires peut-il reverser une part d'honoraires plus élevée ?",
          options: [
            "Parce qu'il pratique des honoraires plus élevés que les agences",
            "Parce qu'il ne supporte pas les charges fixes de locaux commerciaux et de salariés",
            "Parce que ses conseillers vendent davantage",
            "Parce qu'il ne paie pas d'assurance professionnelle",
          ],
          answer: 1,
          explanation:
            "L'écart s'explique par la structure de coûts : sans locaux ouverts au public ni salariés commerciaux, les charges fixes du réseau sont plus faibles. L'assurance de responsabilité civile professionnelle reste obligatoire.",
          skill: "metier",
        },
        {
          id: "d3q2",
          type: "vraifaux",
          question: "Un taux de rétrocession élevé garantit un revenu élevé.",
          answer: 1,
          explanation:
            "Faux. Le revenu dépend d'abord du nombre de ventes conclues. Un taux élevé appliqué à aucune vente produit zéro. Pour un débutant, la qualité de la formation et de l'accompagnement pèse davantage.",
          skill: "metier",
        },
        {
          id: "d3q3",
          type: "qcm",
          question: "Quelle question est la plus révélatrice avant de rejoindre une structure ?",
          options: [
            "Quel est le logo du réseau ?",
            "Combien de conseillers ayant démarré il y a un an dans ma région exercent encore aujourd'hui ?",
            "Le pack outils inclut-il des cartes de visite ?",
            "Le réseau est-il présent sur les réseaux sociaux ?",
          ],
          answer: 1,
          explanation:
            "Le taux de maintien à douze mois est l'indicateur le plus honnête de la qualité réelle de l'accompagnement et de la viabilité économique du modèle pour un débutant.",
          skill: "metier",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Agent commercial", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F31169" },
        { label: "Service-Public.fr — Profession d'agent immobilier", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F31649" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    /* --------------------------------------------------------------- */
    {
      id: "d4",
      moduleId: "decouverte",
      title: "L'annuaire du métier : qui fait quoi dans une vente",
      summary:
        "Identifier les douze intervenants d'une transaction, savoir précisément qui appeler pour quelle question, et ne jamais répondre à la place d'un autre.",
      duration: 15,
      difficulty: "debutant",
      skills: ["metier", "transaction"],
      objectives: [
        "Citer les intervenants d'une vente et leur rôle exact",
        "Savoir à qui adresser une question technique, juridique, fiscale ou financière",
        "Comprendre pourquoi « je ne sais pas, je vous mets en relation » est une réponse professionnelle",
        "Construire son propre réseau de partenaires locaux",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Une vente immobilière mobilise une dizaine de professionnels. Le conseiller n'est pas au sommet de cette pyramide : il en est le chef d'orchestre. Sa valeur vient de sa capacité à savoir qui fait quoi, à anticiper les délais de chacun, et à ne jamais empiéter sur un domaine qu'il ne maîtrise pas.",
        },
        {
          type: "table",
          title: "Les intervenants et leurs domaines",
          head: ["Intervenant", "Rôle", "On l'appelle pour…"],
          rows: [
            ["Le vendeur (mandant)", "Propriétaire qui décide du prix et signe", "Toute décision sur le prix, les visites, les offres"],
            ["L'acquéreur", "Candidat à l'achat", "Ses critères, son financement, ses délais"],
            ["Le notaire", "Officier public, rédige et authentifie l'acte", "Toute question juridique, fiscale de la vente, plus-value, succession, préemption"],
            ["La banque", "Finance l'acquisition", "L'accord de principe, l'offre de prêt, les délais"],
            ["Le courtier", "Recherche et négocie le crédit", "La faisabilité du financement, l'optimisation du dossier"],
            ["Le diagnostiqueur", "Réalise le dossier de diagnostic technique", "DPE, amiante, plomb, électricité, gaz, ERP, mesurage"],
            ["Le géomètre-expert", "Fixe les limites, réalise les divisions", "Bornage, division parcellaire, plan de surface"],
            ["Le syndic", "Gère la copropriété", "PV d'AG, charges, travaux votés, état daté, fiche synthétique"],
            ["Le service urbanisme", "Applique le PLU", "Constructibilité, autorisations, certificat d'urbanisme"],
            ["L'artisan / l'entreprise", "Réalise les travaux", "Chiffrage réel des travaux, faisabilité technique"],
            ["L'expert en bâtiment", "Diagnostique les pathologies", "Fissures, humidité, structure, avant achat"],
            ["L'expert-comptable", "Conseille fiscalement", "SCI, LMNP, revenus fonciers, montages"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La phrase la plus rentable de votre carrière",
          text:
            "« Je ne veux pas vous répondre de mémoire sur ce point, c'est trop important. Je pose la question au notaire aujourd'hui et je vous rappelle demain avant midi. » Elle est perçue comme un signe de sérieux, jamais d'incompétence — à condition que vous rappeliez effectivement avant midi.",
        },
        { type: "heading", text: "Les quatre questions qu'il ne faut jamais trancher seul" },
        {
          type: "list",
          ordered: true,
          items: [
            "Le calcul d'une plus-value immobilière. C'est le notaire. Une erreur de votre part peut coûter des milliers d'euros à votre client et engager votre responsabilité.",
            "La constructibilité d'un terrain ou la faisabilité d'une extension. C'est le service urbanisme, avec un certificat d'urbanisme à l'appui.",
            "La gravité d'une fissure ou d'une humidité. C'est un expert en bâtiment, pas un ressenti de visite.",
            "La capacité d'emprunt exacte d'un acquéreur. C'est le courtier ou la banque. Vous donnez des ordres de grandeur pédagogiques, rien de plus.",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "L'erreur qui détruit une réputation",
          text:
            "Un conseiller affirme à un acquéreur : « les combles sont aménageables, c'est du 40 m² en plus ». Après l'achat, le PLU interdit la surélévation et la charpente est en fermettes. Le conseiller a créé une croyance déterminante dans la décision d'achat. Ce type de propos engage sa responsabilité et celle de la structure qui l'habilite.",
        },
        { type: "heading", text: "Constituer son réseau de partenaires : la méthode des 90 jours" },
        {
          type: "steps",
          items: [
            { title: "Semaine 1-2 — Le notaire", text: "Identifiez deux études notariales de votre secteur. Prenez rendez-vous, présentez-vous, demandez leurs délais habituels et leur interlocuteur pour les questions rapides." },
            { title: "Semaine 3-4 — Le diagnostiqueur", text: "Rencontrez deux diagnostiqueurs. Demandez leurs délais d'intervention, leurs tarifs, et faites-vous expliquer un DPE ligne par ligne. C'est une formation gratuite." },
            { title: "Semaine 5-6 — Le courtier", text: "Deux courtiers. Faites-vous expliquer un plan de financement complet. Vous y gagnerez une crédibilité immédiate en rendez-vous acquéreur." },
            { title: "Semaine 7-8 — Les artisans", text: "Un maçon, un électricien, un plaquiste, un cuisiniste. Demandez des ordres de grandeur au m² pour votre secteur." },
            { title: "Semaine 9-10 — Le syndic et l'urbanisme", text: "Identifiez les principaux syndics de votre secteur et le fonctionnement du service urbanisme de vos communes : horaires, interlocuteur, délais." },
            { title: "Semaine 11-12 — L'entretien du réseau", text: "Recontactez chacun avec une information utile pour lui. Un réseau ne se constitue pas, il s'entretient." },
          ],
        },
        {
          type: "example",
          title: "Ce que rapporte concrètement un bon réseau",
          text:
            "Un compromis bloque : la banque de l'acquéreur ne répond plus à trois semaines de l'échéance de la condition suspensive. Le conseiller sans réseau attend et prévient le vendeur que « ça traîne ». Le conseiller avec réseau appelle son courtier, fait monter un dossier en parallèle chez deux autres établissements et sauve la vente. La différence entre les deux ne tient ni au talent commercial ni à la chance.",
        },
        { type: "terms", title: "Vocabulaire de la leçon", ids: ["notaire", "diagnostics", "syndic", "geometre", "courtier", "expert-batiment", "plu"] },
      ],
      keyPoints: [
        "Le conseiller est le chef d'orchestre d'une douzaine d'intervenants, pas un spécialiste de tout.",
        "Plus-value, urbanisme, pathologie du bâtiment et capacité d'emprunt ne se tranchent jamais seul.",
        "« Je vérifie et je vous rappelle demain avant midi » est une réponse professionnelle, à condition de rappeler.",
        "Un réseau de partenaires se construit délibérément en 90 jours et s'entretient ensuite.",
        "Affirmer une faisabilité technique sans vérification engage votre responsabilité.",
      ],
      mistakes: [
        "Répondre « oui, c'est faisable » sur une extension sans consulter le PLU.",
        "Estimer une plus-value à la place du notaire pour rassurer un vendeur pressé.",
        "Chiffrer des travaux au jugé devant un acquéreur.",
        "Ne découvrir son notaire qu'au moment du premier compromis.",
      ],
      quiz: [
        {
          id: "d4q1",
          type: "qcm",
          question: "Un vendeur vous demande combien il paiera de plus-value. Que faites-vous ?",
          options: [
            "Vous appliquez les abattements pour durée de détention et donnez un chiffre",
            "Vous expliquez le principe général et orientez vers le notaire pour le calcul",
            "Vous répondez qu'il n'y a pas de plus-value sur une résidence principale, quel que soit le cas",
            "Vous refusez d'aborder le sujet",
          ],
          answer: 1,
          explanation:
            "Expliquer le mécanisme fait partie du devoir de conseil ; calculer le montant relève du notaire, seul à disposer de l'ensemble des éléments (prix d'acquisition, frais, travaux justifiés, durée, exonérations applicables).",
          skill: "transaction",
          topic: "plus-value",
        },
        {
          id: "d4q2",
          type: "qcm",
          question: "Qui délivre les procès-verbaux d'assemblée générale et l'état daté ?",
          options: ["Le notaire", "Le syndic de copropriété", "La mairie", "Le diagnostiqueur"],
          answer: 1,
          explanation:
            "Le syndic détient et communique les documents de la copropriété. Le notaire les demande pour préparer l'acte, mais c'est le syndic qui les établit.",
          skill: "copropriete",
        },
        {
          id: "d4q3",
          type: "vraifaux",
          question: "Un conseiller immobilier peut confirmer à un acquéreur que des combles sont aménageables après une simple visite.",
          answer: 1,
          explanation:
            "Faux. L'aménagement dépend du type de charpente, de la hauteur sous faîtage, du plancher et surtout des règles d'urbanisme applicables. Une affirmation de ce type engage la responsabilité du professionnel.",
          skill: "technique",
        },
        {
          id: "d4q4",
          type: "qcm",
          question: "À qui s'adresse-t-on pour connaître les limites exactes d'une parcelle ?",
          options: ["Au cadastre uniquement", "Au géomètre-expert", "Au syndic", "Au diagnostiqueur"],
          answer: 1,
          explanation:
            "Le cadastre est un document fiscal, sans valeur juridique quant aux limites. Seul le géomètre-expert est habilité à réaliser le bornage qui fixe juridiquement les limites de propriété.",
          skill: "urbanisme",
        },
      ],
      sources: [
        { label: "Notaires de France", url: "https://www.notaires.fr/" },
        { label: "Ordre des géomètres-experts", url: "https://www.geometre-expert.fr/" },
        { label: "Service-Public.fr — Diagnostics obligatoires", url: "https://www.service-public.fr/particuliers/vosdroits/F2266" },
      ],
      lastVerified: "2026-09",
    },

    /* --------------------------------------------------------------- */
    {
      id: "d5",
      moduleId: "decouverte",
      title: "Le chemin complet d'une vente, du premier appel aux clés",
      summary:
        "Suivre une transaction de bout en bout pour comprendre l'enchaînement des étapes, les délais réels et les points de rupture.",
      duration: 16,
      difficulty: "debutant",
      skills: ["metier", "transaction"],
      objectives: [
        "Restituer dans l'ordre les quinze étapes d'une transaction",
        "Connaître les ordres de grandeur de délai entre chaque étape",
        "Identifier les trois moments où une vente casse le plus souvent",
        "Savoir ce que le conseiller fait concrètement à chaque étape",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Voici le déroulé d'une vente ordinaire, sans difficulté particulière. Mémorisez cet enchaînement : il structure tout le reste de votre apprentissage, et il vous permettra dès votre premier rendez-vous d'expliquer à un vendeur ce qui va lui arriver dans les mois qui viennent. Rien ne rassure autant un client que quelqu'un capable de décrire le chemin.",
        },
        {
          type: "steps",
          title: "Les quinze étapes",
          items: [
            { title: "1. Le contact", text: "Un propriétaire vous appelle, ou vous l'appelez. Objectif unique : obtenir un rendez-vous, pas vendre au téléphone." },
            { title: "2. La préparation", text: "Avant le rendez-vous : cadastre, DVF, annonces concurrentes, historique de l'adresse, PLU si maison. 30 à 45 minutes de travail invisible qui change tout." },
            { title: "3. Le rendez-vous de découverte et la visite du bien", text: "On écoute le projet, on comprend la motivation et l'échéance, on relève les caractéristiques et on photographie les détails techniques." },
            { title: "4. L'estimation", text: "Recherche des comparables réels, pondération, construction d'une fourchette, préparation d'un support de présentation." },
            { title: "5. La présentation de l'estimation et la prise de mandat", text: "On explique la fourchette, on présente le plan d'action, on aborde les honoraires, on propose le mandat adapté." },
            { title: "6. La préparation à la vente", text: "Diagnostics commandés, documents de copropriété demandés au syndic, rangement et mise en valeur, reportage photo." },
            { title: "7. L'annonce et la diffusion", text: "Rédaction, choix des photos, mise en ligne, information du fichier acquéreurs, communication locale." },
            { title: "8. La qualification des candidats", text: "Chaque contact est qualifié : budget, financement, délai, motivation. On ne fait pas visiter à l'aveugle." },
            { title: "9. Les visites", text: "Préparation du bien, accueil, parcours, écoute des réactions, réponse aux questions techniques, bon de visite." },
            { title: "10. Les retours", text: "Retour à l'acquéreur sous 24 h, retour au vendeur chaque semaine avec les chiffres réels : contacts, visites, objections récurrentes." },
            { title: "11. L'offre", text: "Une offre écrite est transmise au vendeur avec l'analyse du dossier acquéreur : apport, financement, délais, solidité." },
            { title: "12. La négociation", text: "Aller-retour encadré, argumenté par les données du marché et par la solidité du candidat, jusqu'à un accord écrit." },
            { title: "13. L'avant-contrat", text: "Compromis ou promesse, rédigé par le notaire ou le professionnel habilité, avec ses conditions suspensives et le délai de rétractation de l'acquéreur." },
            { title: "14. L'instruction", text: "Financement, purge du droit de préemption, pièces d'urbanisme, état daté, questionnaire syndic. C'est la période la plus longue et la plus silencieuse." },
            { title: "15. L'acte authentique", text: "Signature chez le notaire, versement du prix, remise des clés, relevés de compteurs, et votre dernier acte professionnel : le suivi d'après-vente." },
          ],
        },
        {
          type: "table",
          title: "Ordres de grandeur de délai (marché ordinaire, hors difficulté)",
          head: ["Séquence", "Délai courant"],
          rows: [
            ["Premier contact → rendez-vous d'estimation", "2 à 7 jours"],
            ["Prise de mandat → mise en ligne de l'annonce", "3 à 10 jours (dépend des diagnostics)"],
            ["Mise en ligne → première offre sérieuse", "2 semaines à 3 mois selon le prix et la tension du marché"],
            ["Offre acceptée → signature de l'avant-contrat", "1 à 4 semaines"],
            ["Avant-contrat → acte authentique", "2,5 à 4 mois"],
          ],
          note: "Ces ordres de grandeur varient fortement selon les marchés locaux, la nature du bien et la situation des parties. Ils sont indicatifs et pédagogiques.",
        },
        { type: "heading", text: "Les trois moments où une vente casse" },
        {
          type: "list",
          ordered: true,
          items: [
            "Au prix, dès le départ. Un bien surévalué ne casse pas : il ne démarre jamais. Il accumule des visites sans suite, se dévalorise dans la tête des acquéreurs, puis se vend six mois plus tard en dessous du prix de marché initial.",
            "Au financement. L'acquéreur n'obtient pas son prêt, ou l'obtient à des conditions qu'il refuse. Cela se prévient par une qualification sérieuse en amont et par le suivi hebdomadaire du dossier bancaire.",
            "Sur une information découverte trop tard. Un ravalement voté, une servitude, une extension non déclarée, une charge de copropriété deux fois supérieure à l'annonce. Cela se prévient par la collecte documentaire dès la prise de mandat.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La règle des documents",
          text:
            "Tout document que vous n'avez pas demandé à la prise de mandat, vous le découvrirez au pire moment. Commandez les diagnostics et demandez les documents de copropriété le jour même de la signature du mandat, pas quand une offre arrive.",
        },
        {
          type: "callout",
          variant: "quote",
          title: "Ce que vit le vendeur",
          text:
            "Entre l'avant-contrat et l'acte, il ne se passe rien de visible pendant des semaines. Le vendeur, lui, a déjà mentalement déménagé. C'est la période où il doute, où il appelle, où il s'inquiète. Un appel proactif tous les quinze jours, même pour dire « rien de nouveau, tout est normal, prochaine étape le 12 », vaut tous les discours commerciaux.",
        },
        { type: "terms", title: "Vocabulaire de la leçon", ids: ["mandat", "compromis", "conditions-suspensives", "delai-retractation", "acte-authentique", "droit-preemption", "etat-date"] },
      ],
      keyPoints: [
        "Une vente ordinaire compte quinze étapes et s'étale sur quatre à sept mois.",
        "Le délai entre l'avant-contrat et l'acte authentique est de deux et demi à quatre mois.",
        "Une vente casse principalement au prix initial, au financement, ou sur une information découverte trop tard.",
        "Les diagnostics et les documents de copropriété se commandent le jour de la prise de mandat.",
        "Pendant l'instruction, l'appel proactif au vendeur remplace l'absence de nouvelles.",
      ],
      mistakes: [
        "Attendre une offre pour commander les diagnostics : trois semaines perdues.",
        "Ne pas prévenir le vendeur de la durée réelle entre le compromis et l'acte.",
        "Faire visiter des candidats non qualifiés pour « faire du chiffre de visites ».",
        "Disparaître pendant l'instruction parce qu'il n'y a rien à annoncer.",
      ],
      caseStudy: {
        title: "Reconstituer un calendrier",
        context:
          "Un vendeur signe un mandat le 3 mars. Il doit impérativement disposer des fonds pour son achat le 15 septembre. Le bien est un appartement en copropriété, correctement estimé.",
        tasks: [
          "Construisez un calendrier réaliste étape par étape.",
          "Identifiez la marge de sécurité disponible.",
          "Indiquez ce que vous direz au vendeur au premier rendez-vous à propos de cette échéance.",
        ],
        correction: [
          "Diagnostics et documents de copropriété : commandés le 3 mars, annonce en ligne vers le 12 mars.",
          "Commercialisation : offre acceptée dans une hypothèse raisonnable fin avril à mi-mai.",
          "Avant-contrat : signé courant mai. Délai de rétractation purgé quelques jours plus tard.",
          "Instruction : financement, préemption, état daté — acte authentique réaliste entre fin août et mi-septembre.",
          "Marge de sécurité : très faible. Conclusion à annoncer franchement : « Votre échéance du 15 septembre est tenable, mais sans aucun retard. Cela signifie un prix juste dès le premier jour, et non un prix d'essai que l'on baisse en juin. »",
          "C'est un exemple parfait de situation où l'honnêteté sur le calendrier est le meilleur argument pour obtenir un prix réaliste.",
        ],
      },
      quiz: [
        {
          id: "d5q1",
          type: "qcm",
          question: "Quel est l'ordre de grandeur du délai entre la signature de l'avant-contrat et l'acte authentique ?",
          options: ["Une à deux semaines", "Un mois", "Deux mois et demi à quatre mois", "Un an"],
          answer: 2,
          explanation:
            "Ce délai correspond au temps nécessaire à l'instruction : obtention du prêt, purge du droit de préemption, pièces d'urbanisme, documents de copropriété. Il varie selon les dossiers et les secteurs.",
          skill: "transaction",
        },
        {
          id: "d5q2",
          type: "qcm",
          question: "Quand faut-il commander les diagnostics ?",
          options: [
            "Quand une offre est acceptée",
            "Dès la prise de mandat",
            "À la demande du notaire, après le compromis",
            "Uniquement si l'acquéreur les réclame",
          ],
          answer: 1,
          explanation:
            "Le dossier de diagnostic technique doit être remis dès l'avant-contrat, et le DPE doit figurer dans l'annonce. Commander dès la prise de mandat évite trois semaines de retard et permet de vendre un dossier complet.",
          skill: "transaction",
          topic: "diagnostics",
        },
        {
          id: "d5q3",
          type: "vraifaux",
          question: "Un bien surévalué finit généralement par se vendre au prix de marché initial.",
          answer: 1,
          explanation:
            "Faux. Un bien qui reste longtemps en ligne perd de son attractivité : les acquéreurs le connaissent, le suspectent d'avoir un défaut et négocient davantage. Il se vend fréquemment en dessous du prix de marché initial, et plusieurs mois plus tard.",
          skill: "estimation",
        },
        {
          id: "d5q4",
          type: "qcm",
          question: "Pendant la période d'instruction, quelle attitude est la plus professionnelle ?",
          options: [
            "Ne pas déranger le vendeur tant qu'il n'y a rien de nouveau",
            "Appeler proactivement tous les quinze jours, même pour confirmer que tout suit son cours",
            "Transmettre au vendeur le numéro du notaire et se retirer",
            "Attendre que le vendeur appelle pour s'inquiéter",
          ],
          answer: 1,
          explanation:
            "L'absence de nouvelles est vécue comme un mauvais signe. Un point régulier, même sans actualité, maintient la confiance et évite les appels anxieux et les rumeurs.",
          skill: "excellence",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Vente d'un logement", url: "https://www.service-public.fr/particuliers/vosdroits/F2957" },
        { label: "ANIL — Agence nationale pour l'information sur le logement", url: "https://www.anil.org/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
