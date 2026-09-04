import type { CourseModule } from "@/lib/types";

export const moduleJuridique: CourseModule = {
  id: "juridique",
  level: 2,
  title: "Cadre juridique français",
  subtitle: "Loi Hoguet, mandats, obligations, avant-contrats, données",
  description:
    "Le droit n'est pas un obstacle au commerce : c'est ce qui rend votre parole crédible. Ce module donne le cadre exact de votre activité et vous apprend surtout à repérer les questions qu'il ne faut jamais trancher seul.",
  icon: "⚖️",
  skills: ["juridique", "transaction", "mandat"],
  requires: ["fondamentaux"],
  outcomes: [
    "Expliquer les obligations qui encadrent votre activité",
    "Rédiger et vérifier un mandat conforme, et choisir le bon type",
    "Distinguer devoir d'information, devoir de conseil et responsabilité",
    "Suivre la chaîne contractuelle de l'offre d'achat à l'acte authentique",
    "Appliquer les règles de protection des données et de vigilance anti-blanchiment",
  ],
  lessons: [
    {
      id: "j1",
      moduleId: "juridique",
      title: "La loi Hoguet : le cadre qui rend le métier possible",
      summary:
        "Comprendre pourquoi la profession est réglementée, ce que cela impose, et ce que cela protège.",
      duration: 15,
      difficulty: "debutant",
      skills: ["juridique", "metier"],
      objectives: [
        "Situer la loi Hoguet et son rôle dans la profession",
        "Citer les obligations principales : carte, assurance, garantie, mandat écrit",
        "Comprendre pourquoi un mandat écrit conditionne la rémunération",
        "Identifier les mentions à vérifier sur tout mandat",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Avant 1970, n'importe qui pouvait s'improviser intermédiaire immobilier, encaisser des fonds et disparaître. La loi n° 70-9 du 2 janvier 1970, dite loi Hoguet, a mis fin à cette situation. Elle réglemente les conditions d'exercice des activités d'entremise et de gestion immobilières.",
        },
        {
          type: "definition",
          term: "Loi Hoguet",
          simple:
            "La loi qui définit qui peut exercer le métier d'agent immobilier, avec quelles garanties et quelles obligations.",
          pro:
            "Loi n° 70-9 du 2 janvier 1970 réglementant les conditions d'exercice des activités relatives à certaines opérations portant sur les immeubles et les fonds de commerce, complétée par le décret n° 72-678 du 20 juillet 1972.",
          why:
            "Elle protège le public dans des opérations portant sur le patrimoine principal des ménages, en exigeant compétence, assurance, garantie des fonds et formalisme contractuel.",
        },
        {
          type: "list",
          title: "Les obligations structurantes",
          ordered: true,
          items: [
            "Détenir une carte professionnelle délivrée par la chambre de commerce et d'industrie, mentionnant les activités exercées.",
            "Justifier d'une aptitude professionnelle (diplôme ou expérience) et d'une condition d'honorabilité.",
            "Souscrire une assurance de responsabilité civile professionnelle.",
            "Disposer d'une garantie financière lorsque l'on reçoit des fonds pour le compte d'autrui — ou déclarer expressément ne pas en recevoir.",
            "Détenir un mandat écrit préalable pour toute mission d'entremise.",
            "Inscrire chaque mandat au registre des mandats, avec un numéro d'ordre reporté sur l'exemplaire du client.",
            "Afficher les honoraires toutes taxes comprises.",
            "Satisfaire à une obligation de formation continue.",
            "Respecter le code de déontologie de la profession.",
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Rappel de vérification",
          text:
            "Les modalités précises — durée de validité de la carte, volume de formation continue, seuils de garantie financière — sont fixées par décret et peuvent évoluer. À vérifier selon la réglementation en vigueur auprès de la CCI et des textes.",
        },
        { type: "heading", text: "Le mandat écrit : la règle qui commande tout" },
        {
          type: "paragraph",
          text:
            "C'est la conséquence la plus concrète de la loi Hoguet dans votre quotidien : aucune rémunération n'est due sans mandat écrit préalable et conforme. Un accord verbal, un échange de messages, une poignée de main ne valent rien. Cette règle protège le client contre les commissions surprises, et elle vous oblige à un formalisme salutaire.",
        },
        {
          type: "list",
          title: "Ce que vous vérifiez sur chaque mandat, avant signature",
          items: [
            "L'identité complète et exacte de tous les mandants, telle qu'elle figure au titre de propriété.",
            "La désignation précise du bien : adresse, nature, numéros de lots, références cadastrales.",
            "L'objet de la mission et sa durée, avec la date de début.",
            "Le prix de présentation et sa décomposition : net vendeur et honoraires.",
            "Le montant ou le taux des honoraires et la partie qui en a la charge.",
            "Le numéro d'inscription au registre des mandats.",
            "La signature de tous les mandants et la date.",
            "Les mentions relatives aux modalités de résiliation.",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Les trois erreurs qui annulent votre rémunération",
          text:
            "Un mandat non daté ; un mandat signé par un seul des propriétaires indivis ; un mandat sans numéro de registre. Chacune de ces négligences suffit à fragiliser gravement une demande d'honoraires, même après une vente réussie.",
        },
        { type: "heading", text: "Les honoraires : libres mais encadrés dans leur forme" },
        {
          type: "paragraph",
          text:
            "Le montant des honoraires est libre : il n'existe pas de barème imposé. En revanche, leur affichage et leur mention contractuelle sont encadrés. Les prix doivent être affichés toutes taxes comprises, et le mandat doit indiquer clairement qui les supporte. En pratique, la charge des honoraires influence l'assiette des droits de mutation : c'est un sujet que le notaire tranche.",
        },
        {
          type: "example",
          title: "Net vendeur, FAI : la clarté qui évite les malentendus",
          text:
            "Bien affiché 315 000 € FAI, honoraires 15 000 € à la charge de l'acquéreur : le vendeur perçoit 300 000 €. Si un acquéreur propose 300 000 € FAI, il propose en réalité 285 000 € net vendeur. Un conseiller qui n'explicite pas cette mécanique crée une négociation confuse et une déception assurée.",
        },
        { type: "heading", text: "Ce que la réglementation protège chez vous" },
        {
          type: "paragraph",
          text:
            "Il est facile de voir ces obligations comme des contraintes. Regardez-les autrement : elles sont votre argument face à un particulier qui hésite entre vous et une vente entre particuliers. Vous êtes assuré, contrôlé, tenu à un devoir de conseil et à un formalisme écrit. Personne d'autre dans la chaîne, hormis le notaire, n'offre ce niveau de garantie.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["loi-hoguet", "carte-professionnelle", "mandat", "registre-mandats", "honoraires", "net-vendeur", "fai", "deontologie", "formation-continue"],
        },
      ],
      keyPoints: [
        "La loi Hoguet de 1970 réglemente l'entremise et la gestion immobilières.",
        "Carte professionnelle, assurance, garantie financière, mandat écrit : le socle obligatoire.",
        "Aucune rémunération n'est due sans mandat écrit préalable et conforme.",
        "Chaque mandat est inscrit au registre, avec un numéro reporté sur l'exemplaire du client.",
        "Les honoraires sont libres, mais leur affichage TTC et leur mention au mandat sont encadrés.",
        "Ces obligations sont un argument commercial face à la vente entre particuliers.",
      ],
      mistakes: [
        "Commencer à travailler un bien avant la signature du mandat.",
        "Laisser une case vide ou une date manquante sur un mandat.",
        "Confondre prix net vendeur et prix FAI dans une négociation.",
        "Présenter la réglementation comme une contrainte plutôt que comme une garantie.",
      ],
      quiz: [
        {
          id: "j1q1",
          type: "qcm",
          question: "Sans mandat écrit préalable, un professionnel de l'immobilier :",
          options: [
            "peut percevoir des honoraires s'il apporte la preuve de son intervention",
            "ne peut prétendre à aucune rémunération",
            "perçoit des honoraires réduits de moitié",
            "peut facturer au temps passé",
          ],
          answer: 1,
          explanation:
            "Le mandat écrit préalable est une condition de la rémunération dans le cadre de la loi Hoguet. Aucune preuve d'intervention ne s'y substitue.",
          skill: "juridique",
          topic: "mandat",
        },
        {
          id: "j1q2",
          type: "qcm",
          question: "Le numéro d'inscription au registre des mandats :",
          options: [
            "est facultatif pour les mandats simples",
            "doit figurer sur l'exemplaire remis au mandant",
            "est attribué par la chambre de commerce",
            "correspond au numéro de carte professionnelle",
          ],
          answer: 1,
          explanation:
            "Les mandats sont inscrits par ordre chronologique au registre tenu par le titulaire de la carte, et le numéro d'ordre est reporté sur l'exemplaire remis au mandant.",
          skill: "juridique",
          topic: "mandat",
        },
        {
          id: "j1q3",
          type: "vraifaux",
          question: "Le montant des honoraires d'agence est fixé par un barème réglementaire national.",
          answer: 1,
          explanation:
            "Faux. Les honoraires sont librement fixés. Ce sont leur affichage toutes taxes comprises et leur mention au mandat qui sont encadrés.",
          skill: "juridique",
          topic: "honoraires",
        },
        {
          id: "j1q4",
          type: "qcm",
          question: "Un bien est affiché 315 000 € FAI avec 15 000 € d'honoraires. Un acquéreur offre 300 000 € FAI. Que perçoit le vendeur ?",
          options: ["300 000 €", "315 000 €", "285 000 €", "290 000 €"],
          answer: 2,
          explanation:
            "Une offre exprimée en FAI inclut les honoraires : 300 000 − 15 000 = 285 000 € net vendeur. Expliciter cette mécanique dès le départ évite une négociation confuse.",
          skill: "negociation",
          topic: "honoraires",
        },
      ],
      sources: [
        { label: "Légifrance — Loi n° 70-9 du 2 janvier 1970", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000512228/" },
        { label: "Légifrance — Décret n° 72-678 du 20 juillet 1972", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000699392/" },
        { label: "Service-Public.fr — Agent immobilier", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F31649" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "j2",
      moduleId: "juridique",
      title: "Les mandats : simple, exclusif, semi-exclusif",
      summary:
        "Choisir le bon mandat avec le vendeur, l'expliquer honnêtement, et comprendre ce que chacun engage réellement.",
      duration: 17,
      difficulty: "intermediaire",
      skills: ["mandat", "juridique"],
      objectives: [
        "Distinguer les trois grands types de mandat et leurs effets",
        "Expliquer l'exclusivité sans pression et sans mensonge",
        "Comprendre les clauses sensibles : durée, dénonciation, clause pénale",
        "Choisir le mandat adapté à la situation réelle du vendeur",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Le type de mandat n'est pas une préférence d'agence : c'est un choix qui engage le vendeur et vous. Le présenter honnêtement, avec ses avantages et ses inconvénients, produit plus d'exclusivités qu'un argumentaire de vente agressif — et surtout des exclusivités qui tiennent.",
        },
        {
          type: "table",
          title: "Les trois formes",
          head: ["", "Mandat simple", "Mandat semi-exclusif", "Mandat exclusif"],
          rows: [
            ["Autres agences", "Autorisées", "Non autorisées", "Non autorisées"],
            ["Vente par le propriétaire lui-même", "Possible", "Possible, souvent sans honoraires ou à honoraires réduits", "Interdite pendant la période d'exclusivité, sauf clause contraire"],
            ["Engagement du professionnel", "Variable", "Renforcé", "Fort : plan d'action et reporting"],
            ["Intérêt pour le vendeur", "Impression de multiplier les chances", "Compromis", "Un interlocuteur unique, un pilotage réel"],
            ["Risque principal", "Dilution : personne ne pilote", "Ambiguïté sur la vente directe", "Mauvais choix de professionnel"],
          ],
          note:
            "Les clauses varient d'un contrat à l'autre. Lisez toujours l'exemplaire que vous faites signer : c'est lui qui fait foi, pas la présentation commerciale.",
        },
        { type: "heading", text: "Ce que le vendeur croit, et ce qui se passe réellement" },
        {
          type: "compare",
          left: {
            title: "Croyance courante",
            items: [
              "« Avec cinq agences, j'ai cinq fois plus de chances »",
              "« La concurrence entre agences fera monter le prix »",
              "« En exclusivité, je suis prisonnier »",
              "« Le mandat simple ne m'engage à rien, donc c'est mieux »",
            ],
          },
          right: {
            title: "Ce que l'on observe",
            items: [
              "Cinq annonces du même bien, souvent à des prix différents : l'acquéreur suspecte un problème",
              "Un bien sur-diffusé perd sa rareté ; les acquéreurs attendent la baisse",
              "L'exclusivité est à durée déterminée et prévoit des modalités de sortie",
              "Sans exclusivité, personne n'investit dans un vrai plan d'action : photos, home staging, publicité ciblée",
            ],
          },
        },
        {
          type: "callout",
          variant: "warning",
          title: "L'honnêteté sur le mandat simple",
          text:
            "Le mandat simple n'est pas indéfendable. Il convient à un vendeur qui n'est pas pressé, sur un bien rare et très demandé, ou qui souhaite tester le marché. Dire le contraire vous décrédibilise. Ce qu'il faut expliquer, c'est ce que l'exclusivité permet de faire en plus, et non ce que le mandat simple empêche.",
        },
        { type: "heading", text: "Les clauses sensibles" },
        {
          type: "steps",
          items: [
            {
              title: "La durée",
              text: "Un mandat a une durée déterminée. L'exclusivité comporte généralement une période irrévocable, suivie d'une période où la dénonciation devient possible selon les modalités prévues. Vérifiez la date de départ et les modalités exactes de votre contrat.",
            },
            {
              title: "La clause pénale",
              text: "Elle prévoit une indemnité si le mandant vend en violation de l'exclusivité. Elle doit être présentée franchement au moment de la signature : la découvrir plus tard ruine la relation.",
            },
            {
              title: "La clause de dénonciation",
              text: "Les modalités et le préavis de résiliation figurent au contrat. Expliquez-les spontanément : « voici comment vous sortez si vous n'êtes pas satisfait » est l'argument le plus puissant pour obtenir une exclusivité.",
            },
            {
              title: "Le prix et sa modification",
              text: "Toute modification du prix de présentation doit faire l'objet d'un avenant écrit et signé. Un accord téléphonique sur une baisse de prix n'a pas de valeur contractuelle.",
            },
            {
              title: "Les honoraires et leur charge",
              text: "Montant ou taux, et partie qui les supporte. Cette mention conditionne la présentation du prix et la négociation.",
            },
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Point de vérification",
          text:
            "Les durées, les modalités de dénonciation et les conditions de validité des clauses pénales sont encadrées par les textes et interprétées par la jurisprudence. Faites toujours relire votre pratique par le juriste de votre structure. À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "Obtenir une exclusivité sans forcer" },
        {
          type: "paragraph",
          text:
            "L'exclusivité ne s'arrache pas : elle s'achète par un engagement. Le raisonnement à tenir est simple et vérifiable : « Une exclusivité me permet d'investir. Voici ce que je m'engage à faire, par écrit, et voici comment vous sortez si je ne le fais pas. »",
        },
        {
          type: "list",
          title: "Les engagements que vous pouvez tenir, et qui justifient l'exclusivité",
          items: [
            "Un reportage photo professionnel et, selon le bien, une visite virtuelle ou une vidéo.",
            "Un dossier complet réuni sous quinze jours : diagnostics, documents de copropriété, urbanisme.",
            "Une diffusion sur les portails, votre fichier acquéreurs et une communication ciblée sur le secteur.",
            "Un compte rendu écrit hebdomadaire : nombre de contacts, visites, objections récurrentes.",
            "Un point d'étape formel à trente jours, avec analyse chiffrée et recommandation.",
            "L'accompagnement de l'acquéreur jusqu'à la signature, y compris le suivi du financement.",
          ],
        },
        {
          type: "objection",
          objection: "Je préfère mettre plusieurs agences, ça me laisse plus de chances.",
          understand:
            "Le vendeur ne cherche pas la multiplication : il cherche la sécurité. Derrière cette phrase, il dit « je ne veux pas dépendre d'une seule personne que je ne connais pas encore ».",
          answers: [
            "« Je comprends parfaitement : vous ne me connaissez pas encore. Ce que je vous propose, c'est de ne pas vous engager sur ma parole, mais sur des engagements écrits. Voici les six choses que je fais dans les quinze premiers jours, et voici comment vous sortez si je ne les fais pas. »",
            "« Un point important, indépendamment de moi : quand un acquéreur voit le même bien sur cinq annonces à des prix différents, il en conclut que le bien ne part pas et il attend la baisse. Ce n'est pas dans votre intérêt. »",
            "« Si vous préférez commencer en mandat simple, c'est un choix légitime et je le respecte. Dans ce cas, je vous propose que nous fassions un point à trois semaines sur les résultats concrets. Vous déciderez à ce moment-là, avec des faits. »",
          ],
          avoid:
            "Ne dites jamais « les autres agences ne travailleront pas votre bien ». C'est invérifiable, dénigrant, et cela vous fait perdre le seul terrain où vous êtes fort : vos propres engagements.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["mandat", "mandat-simple", "mandat-exclusif", "honoraires", "registre-mandats", "bon-visite"],
        },
      ],
      keyPoints: [
        "Trois formes : simple, semi-exclusif, exclusif — chacune a un usage légitime.",
        "L'exclusivité se justifie par des engagements écrits, jamais par la pression.",
        "Durée, clause pénale et modalités de dénonciation doivent être expliquées spontanément.",
        "Toute modification de prix suppose un avenant écrit et signé.",
        "La sur-diffusion d'un bien affaiblit sa perception sur le marché.",
        "Dénigrer les confrères déplace le débat sur un terrain où vous êtes faible.",
      ],
      mistakes: [
        "Promettre un délai de vente pour obtenir une exclusivité.",
        "Faire signer une clause pénale sans l'avoir expliquée.",
        "Accepter une baisse de prix par téléphone sans avenant.",
        "Dénigrer les autres agences plutôt que de présenter ses propres engagements.",
      ],
      caseStudy: {
        title: "Choisir le mandat adapté",
        context:
          "Trois vendeurs. A : couple qui doit vendre pour financer un achat déjà signé, échéance dans quatre mois, bien standard sur un marché fluide. B : propriétaire d'une maison d'architecte atypique, aucune urgence, veut « voir ce que ça donne ». C : héritiers en indivision, trois personnes, veulent vendre vite et se répartir le prix, relations tendues entre eux.",
        tasks: [
          "Proposez un type de mandat pour chaque situation.",
          "Justifiez chaque choix en une phrase adressée au vendeur.",
          "Identifiez pour le cas C le préalable à régler avant toute signature.",
        ],
        correction: [
          "Cas A — exclusif. L'échéance est courte et l'enjeu est le pilotage : « Vous avez quatre mois et un achat déjà engagé. Ce qu'il vous faut, ce n'est pas cinq annonces, c'est un plan d'action, un prix juste dès le premier jour et un point hebdomadaire. »",
          "Cas B — simple ou semi-exclusif, avec point d'étape. Le bien est atypique, le vendeur n'est pas pressé et n'a aucune raison de s'engager : « Commençons simplement. Je vous propose un bilan chiffré à trois semaines. Si le travail vous convient, nous verrons ensemble s'il est utile de passer en exclusivité. »",
          "Cas C — exclusif, mais après régularisation. L'enjeu réel est la coordination entre indivisaires : un mandat exclusif signé par les trois évite qu'un héritier confie le bien ailleurs et fasse dérailler la vente.",
          "Préalable du cas C : réunir les trois indivisaires, obtenir un accord écrit sur le prix de présentation et faire signer le mandat par tous. Sans cela, le mandat est inexploitable, quel que soit son type.",
        ],
      },
      quiz: [
        {
          id: "j2q1",
          type: "qcm",
          question: "Quelle est la différence principale entre mandat simple et mandat exclusif ?",
          options: [
            "Le montant des honoraires, imposé par la loi",
            "La possibilité pour le mandant de confier la vente à d'autres professionnels",
            "La durée maximale, fixée à six mois pour le simple",
            "L'obligation d'inscription au registre des mandats",
          ],
          answer: 1,
          explanation:
            "Le mandat simple laisse au mandant la faculté de confier la vente à d'autres professionnels et de vendre lui-même ; l'exclusivité réserve la mission à un seul professionnel. L'inscription au registre s'impose dans tous les cas.",
          skill: "mandat",
          topic: "mandat",
        },
        {
          id: "j2q2",
          type: "qcm",
          question: "Un vendeur accepte par téléphone de baisser son prix de 10 000 €. Que faites-vous ?",
          options: [
            "Vous modifiez immédiatement l'annonce, l'accord verbal suffit",
            "Vous établissez un avenant écrit signé avant toute modification",
            "Vous attendez la prochaine visite pour en reparler",
            "Vous baissez le prix seulement à l'arrivée d'une offre",
          ],
          answer: 1,
          explanation:
            "Le prix de présentation figure au mandat. Toute modification suppose un avenant écrit et signé : c'est une protection pour le vendeur comme pour vous.",
          skill: "mandat",
          topic: "mandat",
        },
        {
          id: "j2q3",
          type: "vraifaux",
          question: "Pour obtenir une exclusivité, il est efficace d'expliquer que les autres agences travailleront mal le bien.",
          answer: 1,
          explanation:
            "Faux. Le dénigrement est contraire à la déontologie, invérifiable, et il déplace la discussion sur les confrères au lieu de vos propres engagements — le seul terrain où vous êtes réellement fort.",
          skill: "mandat",
          topic: "mandat",
        },
        {
          id: "j2q4",
          type: "qcm",
          question: "Quel est l'argument le plus solide pour obtenir une exclusivité ?",
          options: [
            "Promettre un délai de vente inférieur à deux mois",
            "Présenter des engagements écrits et les modalités de sortie du mandat",
            "Proposer des honoraires inférieurs à la concurrence",
            "Garantir un prix supérieur à l'estimation",
          ],
          answer: 1,
          explanation:
            "L'exclusivité s'obtient par la réduction du risque perçu : des engagements vérifiables et une porte de sortie claire rassurent bien davantage qu'une promesse de délai ou de prix, qui ne dépendent pas de vous.",
          skill: "mandat",
          topic: "mandat",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Mandat de vente immobilière", url: "https://www.service-public.fr/particuliers/vosdroits/F1638" },
        { label: "Légifrance — Loi Hoguet et décret d'application", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000512228/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "j3",
      moduleId: "juridique",
      title: "Devoir d'information, devoir de conseil, responsabilité",
      summary:
        "Comprendre ce que vous devez dire, ce que vous devez écrire, et ce qui engage votre responsabilité personnelle.",
      duration: 15,
      difficulty: "intermediaire",
      skills: ["juridique", "excellence"],
      objectives: [
        "Distinguer information et conseil",
        "Identifier les situations qui engagent votre responsabilité",
        "Adopter le réflexe de l'écrit récapitulatif",
        "Savoir dire « je ne sais pas » de façon professionnelle",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Beaucoup de conseillers découvrent ces notions le jour où un client leur reproche quelque chose. Il vaut mieux les connaître avant : elles ne sont pas seulement défensives, elles décrivent précisément ce qui fait la qualité d'un accompagnement.",
        },
        {
          type: "definition",
          term: "Devoir d'information",
          simple: "Transmettre les informations essentielles dont dispose le professionnel.",
          pro:
            "Obligation de communiquer aux parties les informations dont l'importance est déterminante pour leur consentement : état du bien, situation de la copropriété, diagnostics, contraintes connues.",
          why:
            "Un consentement éclairé suppose que les parties disposent des mêmes informations essentielles.",
        },
        {
          type: "definition",
          term: "Devoir de conseil",
          simple:
            "Aller plus loin : éclairer le client sur l'opportunité de l'opération, y compris quand cela ne vous arrange pas.",
          pro:
            "Obligation d'éclairer les parties sur les éléments déterminants de leur décision et sur l'opportunité de l'opération envisagée, distincte de la simple transmission d'informations.",
          why:
            "Le professionnel dispose d'une compétence et d'une expérience que le particulier n'a pas : le droit en tire la conséquence.",
        },
        {
          type: "example",
          title: "La différence en une situation",
          text:
            "Information : transmettre le PV d'AG mentionnant un ravalement voté à 264 000 €. Conseil : expliquer à l'acquéreur que sa quote-part sera d'environ 11 000 €, que l'appel de fonds interviendra probablement après la vente, et lui suggérer d'en discuter avec le notaire pour organiser la répartition avec le vendeur dans l'avant-contrat.",
        },
        { type: "heading", text: "Les six situations qui engagent le plus souvent la responsabilité" },
        {
          type: "list",
          ordered: true,
          items: [
            "Une surface annoncée erronée, reprise sans vérification.",
            "Une affirmation de faisabilité — combles aménageables, extension possible, division réalisable — sans vérification d'urbanisme.",
            "Un défaut connu et non transmis : humidité récurrente, sinistre passé, conflit de voisinage.",
            "Une information de copropriété omise : travaux votés, impayés, procédure en cours.",
            "Un chiffrage de travaux donné oralement et repris par l'acquéreur dans sa décision.",
            "Un conseil fiscal ou juridique donné à la place du notaire ou de l'expert-comptable.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le réflexe de l'écrit récapitulatif",
          text:
            "Après chaque rendez-vous important, envoyez un courriel de trois lignes : ce qui a été dit, ce qui a été décidé, la prochaine étape et sa date. Cela prend deux minutes, cela structure la relation, et cela constitue la trace qui vous protégera en cas de contestation. C'est le geste professionnel le plus rentable du métier.",
        },
        {
          type: "dialogue",
          title: "Savoir dire « je ne sais pas »",
          lines: [
            {
              speaker: "Réponse risquée",
              text: "« Oui, pour la division du terrain je pense que ça passe, il y a déjà eu des divisions dans la rue. »",
              tone: "bad",
            },
            {
              speaker: "Réponse professionnelle",
              text:
                "« Je ne veux pas vous répondre au jugé sur ce point : une division dépend du PLU, des accès, des réseaux et parfois d'une servitude. Je demande un certificat d'urbanisme et je vous donne une réponse fondée sous deux semaines. Si le projet en dépend, nous pouvons aussi en faire une condition suspensive. »",
              tone: "good",
            },
          ],
        },
        {
          type: "paragraph",
          text:
            "Notez la structure de la bonne réponse : reconnaissance de la limite, explication de ce dont dépend la réponse, action concrète avec un délai, et solution contractuelle proposée. Un client n'attend pas que vous sachiez tout ; il attend que vous sachiez comment obtenir la réponse.",
        },
        { type: "heading", text: "L'assurance et la structure" },
        {
          type: "paragraph",
          text:
            "L'assurance de responsabilité civile professionnelle est obligatoire pour le titulaire de la carte, et elle couvre les personnes habilitées dans les conditions du contrat. Elle n'est pas un blanc-seing : elle intervient après coup, avec des franchises, et un sinistre a des conséquences sur la relation avec le client et sur votre réputation. La prévention reste infiniment moins coûteuse.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Ce qui n'est jamais couvert",
          text:
            "La mauvaise foi. Taire sciemment un défaut connu, falsifier une information ou promettre ce que l'on sait faux sort du champ de l'erreur professionnelle. C'est aussi, très simplement, la ligne que l'on ne franchit pas.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["devoir-conseil", "devoir-information", "responsabilite-professionnelle", "vices-caches", "deontologie"],
        },
      ],
      keyPoints: [
        "Informer, c'est transmettre ; conseiller, c'est éclairer la décision.",
        "Surface, faisabilité, défauts connus, copropriété, chiffrages et conseils fiscaux sont les six zones à risque.",
        "Le courriel récapitulatif après chaque rendez-vous est la meilleure protection et un vrai service.",
        "« Je ne sais pas, voici comment je vais le savoir et quand » est une réponse professionnelle.",
        "L'assurance couvre l'erreur, jamais la mauvaise foi.",
      ],
      mistakes: [
        "Répondre au jugé à une question technique pour ne pas paraître incompétent.",
        "Ne rien écrire après un rendez-vous décisif.",
        "Transmettre un document sans en expliquer la conséquence concrète.",
        "Se substituer au notaire sur une question fiscale.",
      ],
      quiz: [
        {
          id: "j3q1",
          type: "qcm",
          question: "Quelle situation relève du devoir de conseil, au-delà de la simple information ?",
          options: [
            "Remettre le DPE à l'acquéreur",
            "Expliquer à l'acquéreur la quote-part de travaux votés qui lui incombera et lui suggérer d'en discuter avec le notaire",
            "Transmettre le règlement de copropriété",
            "Communiquer l'adresse du bien",
          ],
          answer: 1,
          explanation:
            "Transmettre les documents relève de l'information. Expliquer la conséquence financière concrète et orienter vers une solution contractuelle relève du conseil.",
          skill: "juridique",
          topic: "responsabilite",
        },
        {
          id: "j3q2",
          type: "vraifaux",
          question: "L'assurance de responsabilité civile professionnelle couvre les informations sciemment dissimulées.",
          answer: 1,
          explanation:
            "Faux. L'assurance couvre l'erreur professionnelle, pas la mauvaise foi. Dissimuler sciemment un défaut connu sort du champ de la garantie.",
          skill: "juridique",
          topic: "responsabilite",
        },
        {
          id: "j3q3",
          type: "qcm",
          question: "Quelle est la meilleure pratique après un rendez-vous d'estimation important ?",
          options: [
            "Attendre que le client rappelle",
            "Envoyer un courriel récapitulant ce qui a été dit, décidé, et la prochaine étape datée",
            "Envoyer immédiatement le mandat sans commentaire",
            "Noter le rendez-vous dans son agenda personnel",
          ],
          answer: 1,
          explanation:
            "L'écrit récapitulatif structure la relation, évite les malentendus et constitue une trace en cas de contestation. C'est à la fois un service et une protection.",
          skill: "excellence",
          topic: "responsabilite",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Vices cachés", url: "https://www.service-public.fr/particuliers/vosdroits/F2761" },
        { label: "Légifrance — Code de déontologie des professionnels de l'immobilier", url: "https://www.legifrance.gouv.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "j4",
      moduleId: "juridique",
      title: "De l'offre d'achat à l'acte authentique",
      summary:
        "Maîtriser la chaîne contractuelle : offre, avant-contrat, rétractation, conditions suspensives, signature.",
      duration: 18,
      difficulty: "intermediaire",
      skills: ["transaction", "juridique"],
      objectives: [
        "Comprendre la portée juridique d'une offre d'achat acceptée",
        "Distinguer compromis et promesse unilatérale de vente",
        "Identifier les conditions suspensives utiles et bien les rédiger",
        "Suivre le déroulement de l'instruction jusqu'à la signature",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "C'est la séquence où un conseiller inexpérimenté peut causer un dommage réel en quelques minutes. Comprendre la portée de chaque document permet de savoir ce que l'on fait signer, et surtout ce que l'on ne fait pas signer.",
        },
        { type: "heading", text: "1. L'offre d'achat" },
        {
          type: "definition",
          term: "Offre d'achat",
          simple: "Une proposition écrite : « j'achète votre bien à tel prix, à telles conditions ».",
          pro:
            "Manifestation de volonté par laquelle un candidat propose d'acquérir à un prix et à des conditions déterminés. Son acceptation par le vendeur forme en principe la vente sur le prix et la chose.",
          why:
            "Elle matérialise l'engagement du candidat et permet au vendeur de se déterminer sur une base écrite plutôt que sur une intention verbale.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Les trois règles absolues de l'offre",
          text:
            "Jamais de somme d'argent versée au stade de l'offre. Jamais d'offre sans les conditions essentielles (financement, délai, éléments déterminants). Jamais d'acceptation transmise au candidat sans que le vendeur l'ait signée en connaissance de cause. Une offre acceptée engage : ce n'est pas une simple étape administrative.",
        },
        {
          type: "list",
          title: "Ce qu'une offre écrite doit contenir",
          items: [
            "L'identité complète du ou des candidats acquéreurs.",
            "La désignation du bien.",
            "Le prix proposé, en précisant s'il s'agit d'un net vendeur ou d'un prix incluant les honoraires.",
            "Le mode de financement envisagé : apport, montant du prêt sollicité, durée.",
            "Les conditions suspensives souhaitées.",
            "Le délai de validité de l'offre.",
            "La date et la signature.",
          ],
        },
        { type: "heading", text: "2. L'avant-contrat" },
        {
          type: "compare",
          title: "Compromis ou promesse unilatérale",
          left: {
            title: "Compromis de vente (promesse synallagmatique)",
            items: [
              "Les deux parties s'engagent réciproquement",
              "Vaut vente dès accord sur la chose et le prix, sous conditions",
              "Forme la plus répandue en pratique",
              "Dépôt de garantie fréquent, séquestré chez le notaire",
            ],
          },
          right: {
            title: "Promesse unilatérale de vente",
            items: [
              "Seul le vendeur s'engage ; l'acquéreur dispose d'une option",
              "Indemnité d'immobilisation généralement prévue",
              "Formalités spécifiques, notamment d'enregistrement sous seing privé",
              "Utile lorsque l'acquéreur a besoin de temps pour lever des incertitudes",
            ],
          },
        },
        {
          type: "callout",
          variant: "legal",
          title: "Qui rédige, et pourquoi",
          text:
            "L'avant-contrat peut être rédigé par le notaire ou, dans certaines conditions, par le professionnel habilité. Pour un débutant, la réponse est simple : faites rédiger par le notaire. Le gain de temps apparent d'un acte sous seing privé mal maîtrisé se paie très cher. À vérifier selon la réglementation en vigueur et l'organisation de votre structure.",
        },
        { type: "heading", text: "3. Le délai de rétractation" },
        {
          type: "definition",
          term: "Délai de rétractation",
          simple:
            "Un délai pendant lequel l'acquéreur particulier peut renoncer sans se justifier et sans rien payer.",
          pro:
            "Délai légal ouvert à l'acquéreur non professionnel d'un immeuble à usage d'habitation, courant à compter du lendemain de la première présentation de la notification de l'avant-contrat accompagné de ses annexes.",
          why:
            "Il protège l'acquéreur particulier dans une décision engageante prise parfois sous pression émotionnelle.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Ce qu'il faut savoir",
          text:
            "La durée exacte et le point de départ sont fixés par le code de la construction et de l'habitation, et la notification obéit à un formalisme précis. Laissez le notaire ou le rédacteur gérer la notification, et ne dites jamais une date de fin de délai de mémoire. À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "4. Les conditions suspensives" },
        {
          type: "paragraph",
          text:
            "Une condition suspensive est un événement dont dépend la formation définitive de la vente. Si elle ne se réalise pas, l'avant-contrat devient caduc et les sommes versées sont restituées. La plus fréquente est la condition d'obtention du prêt.",
        },
        {
          type: "table",
          title: "Les conditions suspensives les plus courantes",
          head: ["Condition", "Ce qu'elle protège", "Point de vigilance"],
          rows: [
            ["Obtention du prêt", "L'acquéreur qui n'obtiendrait pas son financement", "Montant, durée et taux maximal doivent être précis et réalistes"],
            ["Absence de préemption", "La vente si la commune exerce son droit", "Purge par déclaration d'intention d'aliéner adressée par le notaire"],
            ["Absence de servitude ou d'hypothèque non révélée", "L'acquéreur", "Vérification par le notaire"],
            ["Obtention d'une autorisation d'urbanisme", "Un projet déterminant pour l'acquéreur", "Prévoir un délai réaliste d'instruction"],
            ["Vente préalable d'un autre bien", "Un acquéreur dont le financement en dépend", "Fragilise fortement le dossier : à évaluer avec le vendeur"],
          ],
        },
        {
          type: "example",
          title: "Une condition de prêt mal rédigée",
          text:
            "« Sous condition d'obtention d'un prêt. » Cette formulation est trop vague : elle ne dit ni le montant, ni la durée, ni le taux maximal accepté. Formulation utile : « Sous condition d'obtention d'un prêt de 245 000 € sur 25 ans au taux nominal maximal de X %, hors assurance. » La précision protège l'acquéreur et sécurise le vendeur.",
        },
        { type: "heading", text: "5. L'instruction puis l'acte authentique" },
        {
          type: "steps",
          items: [
            { title: "Dépôt du dossier bancaire", text: "L'acquéreur dispose d'un délai contractuel. Demandez-lui la preuve du dépôt : c'est votre premier point de suivi." },
            { title: "Purge du droit de préemption", text: "Le notaire adresse la déclaration d'intention d'aliéner. Le délai de réponse de la collectivité conditionne le calendrier." },
            { title: "Pièces d'urbanisme et de copropriété", text: "Note de renseignements d'urbanisme, état daté, questionnaire du syndic." },
            { title: "Offre de prêt et délai de réflexion", text: "L'acquéreur reçoit son offre, puis un délai de réflexion légal s'écoule avant acceptation." },
            { title: "Signature de l'acte authentique", text: "Versement du prix, remise des clés, relevés de compteurs, publicité foncière assurée par le notaire." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le tableau de bord du conseiller",
          text:
            "Pour chaque dossier en cours, tenez cinq dates : dépôt bancaire, échéance de la condition de prêt, retour de préemption, réception de l'offre de prêt, date d'acte. Un dossier qui casse est presque toujours un dossier dont personne ne suivait ces cinq dates.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["offre-achat", "compromis", "promesse-vente", "delai-retractation", "conditions-suspensives", "condition-prêt", "droit-preemption", "sequestre", "acte-authentique", "notaire"],
        },
      ],
      keyPoints: [
        "Une offre acceptée engage : elle n'est jamais une simple formalité.",
        "Aucune somme n'est versée au stade de l'offre d'achat.",
        "Compromis et promesse unilatérale ne produisent pas les mêmes effets.",
        "Le délai de rétractation et sa notification obéissent à un formalisme précis : laissez faire le rédacteur.",
        "Une condition de prêt doit indiquer montant, durée et taux maximal.",
        "Suivre cinq dates par dossier suffit à éviter la plupart des ventes qui cassent.",
      ],
      mistakes: [
        "Faire signer une offre sans condition de financement à un acquéreur qui emprunte.",
        "Encaisser ou faire encaisser un chèque au stade de l'offre.",
        "Annoncer une date de fin de délai de rétractation de mémoire.",
        "Ne pas demander la preuve du dépôt du dossier bancaire.",
      ],
      caseStudy: {
        title: "Sécuriser une offre",
        context:
          "Un acquéreur souhaite faire une offre à 292 000 € sur un bien affiché 305 000 € FAI (honoraires 14 000 € à la charge de l'acquéreur). Il dispose de 35 000 € d'apport, dont 12 000 € proviennent de la vente d'une voiture non encore réalisée. Il n'a pas encore consulté de banque. Il vous demande de « bloquer le bien » avec un chèque de 5 000 €.",
        tasks: [
          "Listez les problèmes de cette situation.",
          "Rédigez ce que vous répondez à la demande de chèque.",
          "Indiquez les mentions que vous exigez dans l'offre écrite.",
          "Formulez ce que vous direz au vendeur en transmettant l'offre.",
        ],
        correction: [
          "Problèmes : aucun chèque ne doit être encaissé au stade de l'offre ; l'apport n'est pas entièrement disponible ; aucune démarche bancaire n'a été engagée, donc la solidité du financement est inconnue ; le prix proposé doit être exprimé sans ambiguïté en net vendeur ou en FAI.",
          "Réponse à la demande de chèque : « Je ne prends aucune somme à ce stade, et personne ne devrait le faire. Ce qui bloque réellement le bien, c'est une offre écrite précise, acceptée par le vendeur. Les fonds interviendront chez le notaire, à la signature du compromis. »",
          "Mentions exigées : identité complète, désignation du bien, prix en précisant net vendeur ou FAI, apport disponible et son origine, montant du prêt sollicité, durée et taux maximal envisagés, conditions suspensives, délai de validité, date et signature.",
          "Message au vendeur : « Voici une offre à 292 000 € FAI, soit 278 000 € net vendeur. Le candidat dispose de 23 000 € immédiatement disponibles et 12 000 € à venir. Il n'a pas encore de simulation bancaire : je lui ai demandé de rencontrer un courtier cette semaine et je vous transmets son retour avant vendredi. Je vous propose de ne pas répondre définitivement avant d'avoir cet élément. »",
          "Ce dernier point est le cœur du métier : transmettre une offre sans en évaluer la solidité n'est pas rendre service au vendeur.",
        ],
      },
      quiz: [
        {
          id: "j4q1",
          type: "vraifaux",
          question: "Un candidat acquéreur peut verser un acompte au conseiller au moment de l'offre d'achat pour réserver le bien.",
          answer: 1,
          explanation:
            "Faux. Aucune somme ne doit être versée au stade de l'offre. Le dépôt de garantie intervient à l'avant-contrat et est séquestré chez le notaire ou un professionnel disposant d'une garantie financière.",
          skill: "transaction",
          topic: "offre",
        },
        {
          id: "j4q2",
          type: "qcm",
          question: "Quelle rédaction de condition suspensive de prêt est la plus protectrice ?",
          options: [
            "« Sous condition d'obtention d'un prêt »",
            "« Sous condition d'obtention d'un financement bancaire dans les meilleurs délais »",
            "« Sous condition d'obtention d'un prêt de 245 000 € sur 25 ans au taux nominal maximal de X %, hors assurance »",
            "« Sous condition d'accord de principe d'une banque »",
          ],
          answer: 2,
          explanation:
            "Une condition de prêt doit être chiffrée : montant, durée et taux maximal. Une formulation vague protège mal l'acquéreur et laisse le vendeur dans l'incertitude.",
          skill: "transaction",
          topic: "conditions",
        },
        {
          id: "j4q3",
          type: "qcm",
          question: "Dans une promesse unilatérale de vente :",
          options: [
            "les deux parties s'engagent réciproquement",
            "seul le vendeur s'engage, l'acquéreur disposant d'une option",
            "seul l'acquéreur s'engage",
            "aucune des parties ne s'engage avant l'acte authentique",
          ],
          answer: 1,
          explanation:
            "Le promettant s'engage à vendre ; le bénéficiaire dispose d'une option pendant un délai déterminé, généralement moyennant une indemnité d'immobilisation.",
          skill: "transaction",
          topic: "avant-contrat",
        },
        {
          id: "j4q4",
          type: "qcm",
          question: "Quel événement conditionne fréquemment le calendrier entre l'avant-contrat et l'acte ?",
          options: [
            "La réalisation des diagnostics",
            "La purge du droit de préemption et l'obtention du prêt",
            "La signature du bon de visite",
            "La publication de l'annonce",
          ],
          answer: 1,
          explanation:
            "L'instruction est principalement rythmée par la réponse de la collectivité à la déclaration d'intention d'aliéner et par le processus bancaire de l'acquéreur.",
          skill: "transaction",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Promesse et compromis de vente", url: "https://www.service-public.fr/particuliers/vosdroits/F2957" },
        { label: "Service-Public.fr — Condition suspensive de prêt", url: "https://www.service-public.fr/particuliers/vosdroits/F2926" },
        { label: "Service-Public.fr — Droit de préemption urbain", url: "https://www.service-public.fr/particuliers/vosdroits/F1077" },
        { label: "Notaires de France", url: "https://www.notaires.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "j5",
      moduleId: "juridique",
      title: "Données personnelles, démarchage et vigilance anti-blanchiment",
      summary:
        "Prospecter et gérer un fichier sans enfreindre le RGPD ni les règles de démarchage, et appliquer les obligations de vigilance.",
      duration: 13,
      difficulty: "intermediaire",
      skills: ["juridique", "prospection"],
      objectives: [
        "Appliquer les principes du RGPD à un fichier de prospection immobilier",
        "Connaître les règles encadrant le démarchage téléphonique",
        "Comprendre les obligations de vigilance anti-blanchiment",
        "Mettre en place des pratiques simples et conformes",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un conseiller immobilier manipule en permanence des données personnelles : coordonnées, situation familiale, revenus, projets de vie. Ces informations sont protégées, et leur usage est encadré. Ce n'est pas un sujet abstrait : c'est la matière quotidienne de votre CRM.",
        },
        { type: "heading", text: "Le RGPD appliqué à votre fichier" },
        {
          type: "list",
          title: "Les principes qui vous concernent directement",
          ordered: true,
          items: [
            "Une base légale : vous devez pouvoir dire pourquoi vous avez le droit de traiter ces données (exécution d'un contrat, intérêt légitime, consentement selon les cas).",
            "L'information des personnes : dire qui vous êtes, pourquoi vous collectez, combien de temps vous conservez, et quels sont leurs droits.",
            "La minimisation : ne collectez que ce qui est nécessaire. La date de naissance d'un acquéreur n'a pas à figurer dans votre fichier de prospection.",
            "Une durée de conservation limitée : un prospect inactif depuis trois ans n'a pas vocation à rester indéfiniment dans votre base.",
            "Les droits des personnes : accès, rectification, effacement, opposition. Une demande d'effacement doit être exécutée, pas ignorée.",
            "La sécurité : un fichier client dans un tableur non protégé sur un ordinateur partagé est un risque réel.",
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Prospection à partir d'annonces de particuliers",
          text:
            "Constituer un fichier à partir d'annonces publiées par des particuliers est un traitement de données personnelles. L'information des personnes et le respect du droit d'opposition s'appliquent. Par ailleurs, le démarchage téléphonique est encadré, notamment par le dispositif d'opposition Bloctel. Consultez la CNIL et vérifiez les règles applicables avant de bâtir une routine de pige. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "list",
          title: "Pratiques simples et conformes",
          items: [
            "Une mention d'information claire dans vos e-mails et sur votre page de contact.",
            "Un lien de désinscription fonctionnel dans toute communication commerciale par courriel.",
            "Une note dans votre CRM lorsqu'une personne demande à ne plus être contactée — et le respect effectif de cette demande.",
            "Un mot de passe et un chiffrement sur l'appareil qui contient votre fichier.",
            "Un tri annuel des contacts inactifs.",
          ],
        },
        { type: "heading", text: "La vigilance anti-blanchiment" },
        {
          type: "definition",
          term: "LCB-FT",
          simple:
            "Les règles qui obligent à vérifier l'identité des clients et à signaler les opérations suspectes aux autorités.",
          pro:
            "Dispositif de lutte contre le blanchiment de capitaux et le financement du terrorisme imposant une identification et une vérification de l'identité du client et du bénéficiaire effectif, une vigilance proportionnée au risque, la conservation des documents et, le cas échéant, une déclaration de soupçon auprès de Tracfin.",
          why:
            "L'immobilier est un vecteur classique de blanchiment : les montants sont élevés et les biens conservent leur valeur.",
        },
        {
          type: "list",
          title: "Signaux qui appellent une vigilance renforcée",
          items: [
            "Un acquéreur qui refuse de justifier l'origine des fonds ou reste évasif.",
            "Un paiement proposé en espèces ou fractionné de manière inhabituelle.",
            "Un montage inutilement complexe : sociétés étrangères successives sans logique économique.",
            "Un acquéreur qui ne visite pas et n'a aucune exigence sur le bien.",
            "Une pression anormale pour accélérer la signature.",
            "Un prix manifestement déconnecté du marché, à la hausse comme à la baisse.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "La confidentialité de la déclaration",
          text:
            "Si une déclaration de soupçon est effectuée, il est interdit d'en informer le client. Le sujet se traite avec le titulaire de la carte professionnelle et le référent de votre structure, jamais seul et jamais devant le client.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le réflexe simple",
          text:
            "Demandez systématiquement une pièce d'identité et un justificatif de la provenance des fonds à l'acquéreur, au même titre que le titre de propriété au vendeur. Présenté comme une pratique standard, cela ne choque personne et vous place immédiatement dans un cadre professionnel.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["rgpd", "lcb-ft", "pige", "prospection", "deontologie"],
        },
      ],
      keyPoints: [
        "Un fichier de prospection est un traitement de données personnelles soumis au RGPD.",
        "Base légale, information, minimisation, durée limitée, droits, sécurité : les six principes à appliquer.",
        "Le démarchage téléphonique est encadré, notamment par le dispositif d'opposition Bloctel.",
        "L'identification du client et du bénéficiaire effectif relève de la vigilance anti-blanchiment.",
        "Une déclaration de soupçon est strictement confidentielle vis-à-vis du client.",
      ],
      mistakes: [
        "Constituer un fichier de pige sans jamais informer les personnes ni traiter leurs oppositions.",
        "Conserver indéfiniment des contacts inactifs.",
        "Ignorer une demande de suppression de données.",
        "Traiter seul une situation qui éveille un soupçon, ou en parler au client.",
      ],
      quiz: [
        {
          id: "j5q1",
          type: "qcm",
          question: "Une personne demande la suppression de ses données de votre fichier. Que faites-vous ?",
          options: [
            "Vous la conservez : elle a publié une annonce publique",
            "Vous exécutez la demande et en conservez la trace",
            "Vous attendez qu'elle renouvelle sa demande par courrier recommandé",
            "Vous la transférez à un confrère",
          ],
          answer: 1,
          explanation:
            "Le droit à l'effacement et le droit d'opposition font partie des droits garantis par le RGPD. Le caractère public d'une annonce ne dispense pas de les respecter.",
          skill: "juridique",
          topic: "rgpd",
        },
        {
          id: "j5q2",
          type: "vraifaux",
          question: "En cas de déclaration de soupçon, il faut prévenir le client pour rester transparent.",
          answer: 1,
          explanation:
            "Faux. La déclaration de soupçon est confidentielle : informer le client de son existence est interdit. Le sujet se traite avec le titulaire de la carte et le référent de la structure.",
          skill: "juridique",
          topic: "lcb-ft",
        },
        {
          id: "j5q3",
          type: "qcm",
          question: "Quel élément constitue un signal de vigilance renforcée ?",
          options: [
            "Un acquéreur qui demande deux visites avant de se décider",
            "Un acquéreur qui n'a aucune exigence sur le bien et refuse de justifier l'origine des fonds",
            "Un acquéreur qui négocie fortement le prix",
            "Un acquéreur qui souhaite faire intervenir un courtier",
          ],
          answer: 1,
          explanation:
            "L'absence d'intérêt pour les caractéristiques du bien combinée à l'opacité sur l'origine des fonds est un signal classique appelant une vigilance renforcée.",
          skill: "juridique",
          topic: "lcb-ft",
        },
      ],
      sources: [
        { label: "CNIL — Prospection commerciale", url: "https://www.cnil.fr/" },
        { label: "Bloctel — Opposition au démarchage téléphonique", url: "https://www.bloctel.gouv.fr/" },
        { label: "Tracfin", url: "https://www.economie.gouv.fr/tracfin" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
