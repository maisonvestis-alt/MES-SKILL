import type { CourseModule } from "@/lib/types";

export const moduleMarche: CourseModule = {
  id: "marche",
  level: 3,
  title: "Comprendre le marché immobilier",
  subtitle: "Offre, demande, prix, valeur, taux et marché local",
  description:
    "Un conseiller qui ne sait pas lire un marché ne peut pas estimer, ni convaincre, ni conseiller. Ce module apprend à raisonner en économiste de terrain, sur un périmètre restreint et avec des données vérifiables.",
  icon: "📈",
  skills: ["marche", "estimation"],
  requires: ["fondamentaux"],
  outcomes: [
    "Distinguer prix, valeur et coût, et expliquer la différence à un vendeur",
    "Identifier les facteurs qui font varier le prix d'un logement",
    "Lire la tension d'un marché local avec des indicateurs simples",
    "Comprendre l'effet des taux d'intérêt sur le pouvoir d'achat immobilier",
  ],
  lessons: [
    {
      id: "mk1",
      moduleId: "marche",
      title: "Prix, valeur, coût : trois mots que tout le monde confond",
      summary:
        "Comprendre ce qui détermine réellement le prix d'un bien, et pourquoi le vendeur et l'acquéreur ne parlent jamais de la même chose.",
      duration: 14,
      difficulty: "debutant",
      skills: ["marche"],
      objectives: [
        "Distinguer prix, valeur d'usage, valeur vénale et coût de revient",
        "Comprendre la formation du prix par la rencontre de l'offre et de la demande",
        "Expliquer à un vendeur pourquoi ses travaux ne se récupèrent pas intégralement",
        "Repérer les biais qui faussent le jugement du vendeur",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "« J'ai mis 60 000 € de travaux, je veux les récupérer. » Cette phrase, vous l'entendrez des centaines de fois. Elle repose sur une confusion entre coût et valeur, qu'il faut savoir défaire calmement et sans donner tort au vendeur.",
        },
        {
          type: "definition",
          term: "Prix",
          simple: "La somme effectivement échangée lors d'une vente.",
          pro:
            "Résultat d'une rencontre entre une offre et une demande à un instant donné, constaté dans un acte. Le prix est un fait, non une opinion.",
          why: "C'est la seule donnée objective du marché : tout le reste est estimation ou espérance.",
        },
        {
          type: "definition",
          term: "Valeur vénale",
          simple: "Le prix auquel un bien pourrait raisonnablement se vendre dans des conditions normales.",
          pro:
            "Prix probable auquel un bien serait cédé entre un vendeur et un acquéreur consentants, disposant d'une information suffisante, agissant sans contrainte particulière, au terme d'un délai de commercialisation raisonnable.",
          why:
            "Cette définition contient l'essentiel : sans contrainte, informés, dans un délai normal. Une vente forcée en trois semaines ne reflète pas la valeur vénale.",
        },
        {
          type: "definition",
          term: "Coût de revient",
          simple: "Ce que le bien a coûté à son propriétaire : prix d'achat, frais, travaux, intérêts.",
          pro:
            "Somme des dépenses engagées par le propriétaire. Il n'a aucun lien mécanique avec la valeur du bien sur le marché.",
          why:
            "Un acquéreur n'achète pas l'histoire financière du vendeur : il compare des biens disponibles à un instant donné.",
        },
        {
          type: "callout",
          variant: "quote",
          title: "Comment le dire sans blesser",
          text:
            "« Vos travaux ne sont pas perdus : sans eux, votre bien se vendrait nettement moins cher et surtout beaucoup plus lentement. Ce qu'ils ne font pas, c'est s'ajouter au prix euro pour euro, parce que l'acheteur compare votre bien à d'autres biens rénovés, pas à ce qu'était le vôtre avant. »",
        },
        { type: "heading", text: "Quels travaux se récupèrent, et lesquels ne se récupèrent pas" },
        {
          type: "table",
          head: ["Type de travaux", "Effet sur le prix", "Effet sur le délai de vente"],
          rows: [
            ["Remise aux normes électrique", "Faible en valorisation, fort en évitement de décote", "Important : supprime une objection récurrente"],
            ["Cuisine et salle de bains refaites", "Réel, sans être intégral", "Fort : effet coup de cœur"],
            ["Isolation et menuiseries", "Réel, croissant avec le poids du DPE", "Fort sur les biens énergivores"],
            ["Peintures et sols neutres", "Modeste", "Très fort par rapport au coût engagé"],
            ["Piscine, véranda, aménagements très personnels", "Faible, parfois nul ou négatif", "Variable : peut réduire le nombre d'acquéreurs"],
            ["Entretien courant (toiture, façade)", "Peu valorisé", "Évite une décote et rassure"],
          ],
          note:
            "Ces tendances sont générales. Sur votre secteur, vérifiez-les avec des ventes comparables : une piscine ne se valorise pas de la même façon à Perpignan et à Amiens.",
        },
        { type: "heading", text: "La formation du prix : offre, demande, information" },
        {
          type: "paragraph",
          text:
            "Le prix d'un logement résulte de trois éléments : le nombre de biens comparables disponibles, le nombre d'acquéreurs solvables intéressés, et la qualité de l'information dont disposent les deux parties. Le troisième élément est celui sur lequel vous agissez directement, et c'est précisément votre valeur ajoutée.",
        },
        {
          type: "list",
          title: "Ce qui augmente la demande sur un bien",
          items: [
            "Une localisation recherchée : transports, écoles, commerces, calme.",
            "Une typologie rare sur le secteur : un T4 avec extérieur en centre-ville.",
            "Un état permettant d'emménager sans travaux.",
            "Une performance énergétique correcte, de plus en plus déterminante.",
            "Un prix positionné dans la fourchette où se situent les acquéreurs financés.",
            "Une présentation soignée : photos, annonce précise, dossier complet.",
          ],
        },
        { type: "heading", text: "Les biais qui faussent le jugement du vendeur" },
        {
          type: "list",
          items: [
            "L'ancrage sur le prix d'achat : « je l'ai payé 280 000 € en 2021, je ne vais pas le vendre moins ».",
            "L'ancrage sur une estimation en ligne, produite sans visite ni analyse du bien.",
            "L'ancrage sur l'annonce du voisin, qui est un prix demandé, non un prix obtenu.",
            "L'attachement émotionnel : chaque souvenir a une valeur, mais pas une valeur marchande.",
            "Le biais du dernier chiffre entendu : le confrère qui a annoncé le prix le plus élevé pour obtenir le mandat.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "L'outil qui règle la moitié de ces biais",
          text:
            "Montrez des ventes réelles, pas des annonces. La base DVF publie les mutations effectivement enregistrées. Un vendeur qui voit trois ventes comparables signées à 3 950 €/m² cesse rapidement de se comparer à une annonce affichée à 4 600 €/m² depuis huit mois.",
        },
        {
          type: "example",
          title: "Deux ventes, deux réalités",
          text:
            "Même immeuble, même surface, même étage. Le lot A se vend 268 000 € en cinq semaines : rénové, DPE D, dossier complet, photos professionnelles. Le lot B se vend 241 000 € après sept mois : travaux à prévoir, DPE F, ravalement voté non annoncé, six visites annulées faute de documents. L'écart de 27 000 € ne s'explique pas seulement par l'état du bien.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["estimation", "comparables", "dvf", "prix-m2", "valeur-verte", "marche-local"],
        },
      ],
      keyPoints: [
        "Le prix est un fait constaté ; la valeur vénale est une estimation ; le coût de revient n'engage que le vendeur.",
        "Les travaux ne se récupèrent pas euro pour euro, mais ils réduisent fortement le délai de vente.",
        "Le prix résulte de l'offre disponible, de la demande solvable et de la qualité de l'information.",
        "Les vendeurs sont ancrés sur leur prix d'achat, une estimation en ligne ou l'annonce du voisin.",
        "Montrer des ventes réelles, jamais des prix affichés.",
      ],
      mistakes: [
        "Accepter le raisonnement « prix d'achat + travaux = prix de vente ».",
        "Comparer un bien à des annonces en cours plutôt qu'à des ventes signées.",
        "Dire à un vendeur que ses travaux « n'ont servi à rien ».",
        "Reprendre une estimation en ligne sans visite ni analyse.",
      ],
      quiz: [
        {
          id: "mk1q1",
          type: "qcm",
          question: "Un vendeur affirme : « j'ai payé 280 000 € et mis 60 000 € de travaux, donc mon bien vaut 340 000 € ». Ce raisonnement confond :",
          options: [
            "surface habitable et surface Carrez",
            "coût de revient et valeur vénale",
            "prix net vendeur et prix FAI",
            "valeur vénale et valeur locative",
          ],
          answer: 1,
          explanation:
            "Le coût de revient est ce que le bien a coûté au propriétaire. La valeur vénale est le prix probable de cession dans des conditions normales. Les deux n'ont aucun lien mécanique.",
          skill: "marche",
          topic: "prix",
        },
        {
          id: "mk1q2",
          type: "qcm",
          question: "Quelle donnée est la plus fiable pour argumenter un prix devant un vendeur ?",
          options: [
            "Les annonces concurrentes en cours de diffusion",
            "Les ventes réellement signées sur des biens comparables",
            "L'estimation d'un site en ligne",
            "Le prix d'achat du bien dix ans plus tôt",
          ],
          answer: 1,
          explanation:
            "Une annonce est un prix demandé ; seule une vente signée est une donnée de marché. Les bases publiques de mutations permettent de les consulter.",
          skill: "marche",
          topic: "prix",
        },
        {
          id: "mk1q3",
          type: "vraifaux",
          question: "Refaire les peintures dans des tons neutres est l'un des investissements les plus rentables avant une vente.",
          answer: 0,
          explanation:
            "Vrai. Le coût est faible et l'effet sur la perception du bien et sur le délai de vente est important. C'est le meilleur rapport entre dépense engagée et effet obtenu.",
          skill: "marche",
        },
        {
          id: "mk1q4",
          type: "qcm",
          question: "La valeur vénale suppose notamment :",
          options: [
            "une vente réalisée dans l'urgence",
            "des parties informées, sans contrainte particulière, et un délai de commercialisation raisonnable",
            "un acquéreur professionnel",
            "l'absence de négociation",
          ],
          answer: 1,
          explanation:
            "La définition de la valeur vénale suppose des parties consentantes et informées, agissant sans contrainte, au terme d'un délai normal de commercialisation.",
          skill: "estimation",
          topic: "prix",
        },
      ],
      sources: [
        { label: "Explorateur DVF — data.gouv.fr", url: "https://app.dvf.etalab.gouv.fr/", note: "Ventes immobilières réellement enregistrées" },
        { label: "INSEE — Indices des prix des logements", url: "https://www.insee.fr/" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "mk2",
      moduleId: "marche",
      title: "Pourquoi deux appartements de 70 m² n'ont pas le même prix",
      summary:
        "Décomposer méthodiquement les vingt facteurs qui font varier le prix d'un logement, et savoir les hiérarchiser.",
      duration: 17,
      difficulty: "debutant",
      skills: ["marche", "estimation"],
      objectives: [
        "Hiérarchiser les facteurs de prix, du plus structurant au plus marginal",
        "Comprendre pourquoi l'emplacement domine tous les autres critères",
        "Évaluer l'effet réel de l'étage, de l'exposition, de l'extérieur, du parking",
        "Expliquer un écart de prix à un vendeur avec des arguments vérifiables",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Deux appartements de 70 m², dans la même ville, peuvent se vendre 195 000 € et 340 000 €. Ce n'est ni du hasard, ni de la spéculation. Voici la décomposition, dans l'ordre de leur poids réel.",
        },
        { type: "heading", text: "Niveau 1 — Les facteurs structurants (on ne peut pas les changer)" },
        {
          type: "table",
          head: ["Facteur", "Pourquoi il pèse autant"],
          rows: [
            ["La ville et le quartier", "Détermine le bassin d'acquéreurs solvables. C'est le premier filtre, avant toute caractéristique du bien."],
            ["La micro-localisation", "Deux rues parallèles peuvent différer de 15 % : passage, bruit, réputation de la rue, vis-à-vis."],
            ["L'accessibilité", "Transports, axes routiers, temps de trajet vers les zones d'emploi."],
            ["Les équipements de proximité", "Écoles et leur réputation, commerces de bouche, services de santé, espaces verts."],
            ["Les nuisances", "Voie ferrée, axe passant, activité bruyante, zone inondable, couloir aérien."],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "La règle qui résume tout",
          text:
            "On peut refaire une cuisine, jamais un emplacement. C'est pourquoi un bien médiocre bien situé se vend toujours mieux qu'un bien parfait mal situé. Cette hiérarchie doit structurer chacune de vos estimations.",
        },
        { type: "heading", text: "Niveau 2 — Les caractéristiques du bien" },
        {
          type: "table",
          head: ["Caractéristique", "Effet observé", "Nuance importante"],
          rows: [
            ["Surface et typologie", "Structurant", "Un 70 m² en trois pièces se vend souvent mieux qu'en deux pièces"],
            ["Étage", "Fort", "Sans ascenseur, le prix baisse à chaque étage ; avec ascenseur, le dernier étage se valorise"],
            ["Ascenseur", "Fort au-delà du 2e étage", "Quasi nul en rez-de-chaussée et au 1er"],
            ["Exposition et luminosité", "Fort", "Le sud est recherché au nord de la France, moins déterminant au sud"],
            ["Extérieur (balcon, terrasse, jardin)", "Fort depuis 2020", "Un balcon de 1 m de profondeur n'a presque aucune valeur d'usage"],
            ["Stationnement", "Variable, parfois considérable", "Dépend entièrement de la tension du stationnement local"],
            ["État général", "Fort", "Agit surtout sur le délai de vente et sur la profondeur de la négociation"],
            ["DPE", "Croissant", "Effet renforcé sur les classes F et G, notamment auprès des investisseurs"],
            ["Vue", "Parfois majeur", "Une vue dégagée ou remarquable peut justifier plus de 10 %"],
            ["Charges de copropriété", "Sous-estimé", "1 000 € de charges annuelles supplémentaires pèsent sur la capacité d'emprunt"],
            ["Plan et distribution", "Sous-estimé", "Une chambre en enfilade ou une cuisine borgne réduit le nombre d'acquéreurs"],
            ["Nuisances internes", "Sous-estimé", "Vis-à-vis proche, bruit de cage d'escalier, local poubelles sous les fenêtres"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le facteur le plus négligé par les débutants",
          text:
            "Les charges de copropriété. Un T3 avec 3 600 € de charges annuelles contre 1 500 € pour son voisin comparable a une différence de coût mensuel de 175 €. Sur une capacité d'emprunt, cela représente plusieurs dizaines de milliers d'euros. Beaucoup de conseillers ne l'intègrent jamais.",
        },
        { type: "heading", text: "Niveau 3 — Les facteurs de commercialisation" },
        {
          type: "paragraph",
          text:
            "Ceux-là ne changent pas la valeur intrinsèque du bien, mais ils changent le prix obtenu. Ils dépendent entièrement de vous : c'est là que se situe votre contribution mesurable.",
        },
        {
          type: "list",
          items: [
            "La qualité des photographies : c'est le premier filtre, avant même le prix.",
            "La précision de l'annonce : une annonce vague fait fuir les acquéreurs sérieux.",
            "La complétude du dossier : elle réduit la négociation et le risque de rétractation.",
            "Le positionnement du prix dès le premier jour : les quatre premières semaines déterminent la vente.",
            "La qualité de la visite : un bien mal présenté perd des acquéreurs qui ne reviendront pas.",
            "La réactivité : un rappel sous deux heures transforme nettement mieux qu'un rappel à deux jours.",
          ],
        },
        {
          type: "example",
          title: "L'écart expliqué",
          text:
            "Appartement A : 70 m², T3, quartier recherché, 3e étage avec ascenseur, balcon sud de 8 m², parking, DPE C, charges 1 400 €/an, rénové en 2022 → 340 000 €. Appartement B : 70 m², T2, quartier périphérique, 4e sans ascenseur, sans extérieur, sans parking, DPE F, charges 3 200 €/an, à rafraîchir, vis-à-vis à 6 mètres → 195 000 €. Chaque écart est explicable et chiffrable : c'est exactement ce que vous présenterez au vendeur.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "La méthode de présentation",
          text:
            "Ne dites jamais « votre bien vaut moins cher ». Dites : « voici les trois ventes comparables, et voici les quatre différences entre votre bien et ces biens ». Le vendeur suit un raisonnement, il ne subit pas un verdict. C'est toute la différence entre une estimation acceptée et une estimation refusée.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["comparables", "prix-m2", "dpe", "valeur-verte", "charges-copropriete", "marche-local", "tension-immobiliere"],
        },
      ],
      keyPoints: [
        "L'emplacement domine tous les autres facteurs : on ne le change jamais.",
        "L'étage, l'ascenseur, l'extérieur et le DPE sont les caractéristiques les plus discriminantes.",
        "Les charges de copropriété pèsent sur la capacité d'emprunt et sont systématiquement sous-estimées.",
        "Le plan et les nuisances internes réduisent le nombre d'acquéreurs possibles.",
        "Les facteurs de commercialisation dépendent de vous et modifient réellement le prix obtenu.",
        "Présenter un raisonnement comparatif, jamais un verdict.",
      ],
      mistakes: [
        "Estimer au prix moyen au m² du quartier sans analyser les caractéristiques.",
        "Négliger les charges de copropriété dans le raisonnement.",
        "Sous-estimer l'effet d'un vis-à-vis proche ou d'une nuisance sonore.",
        "Attribuer un écart de prix au « marché » sans pouvoir l'expliquer.",
      ],
      caseStudy: {
        title: "Expliquer un écart de 60 000 €",
        context:
          "Un vendeur vous montre l'annonce du T3 de son voisin, affiché 315 000 €, et affirme que son propre bien vaut la même chose. Différences relevées : son bien est au 4e sans ascenseur (le voisin est au 2e avec ascenseur), sans balcon (le voisin a une terrasse de 12 m²), DPE F contre C, charges 3 100 € contre 1 500 €, cuisine et salle de bains d'origine. Vous estimez son bien entre 250 000 € et 262 000 €.",
        tasks: [
          "Rédigez la présentation orale de votre estimation, en quatre étapes.",
          "Chiffrez ou qualifiez chaque écart, sans inventer de barème.",
          "Anticipez la réaction émotionnelle et préparez votre réponse.",
        ],
        correction: [
          "Étape 1 — poser le cadre factuel : « Commençons par une précision importante : 315 000 €, c'est le prix auquel votre voisin espère vendre. Ce n'est pas un prix de vente constaté. Regardons d'abord les ventes réellement signées dans l'immeuble et la rue. »",
          "Étape 2 — les ventes comparables : présenter trois ventes signées avec leur date, surface, étage, état et prix au m².",
          "Étape 3 — les écarts, un par un : absence d'ascenseur au 4e étage, absence d'extérieur, DPE F contre C, charges supérieures de 1 600 €/an, cuisine et salle de bains à refaire. Chacun est explicable, aucun n'est contestable.",
          "Étape 4 — la fourchette et le scénario : « Ma fourchette est de 250 000 à 262 000 €. À 262 000 €, nous visons les acquéreurs qui acceptent des travaux. Au-dessus, nous n'aurons pas de visites, et dans trois mois nous vendrons moins cher qu'aujourd'hui. »",
          "Réaction émotionnelle attendue : déception, parfois agacement. Réponse : « Je comprends, c'est un écart important par rapport à ce que vous espériez. Je préfère vous le dire aujourd'hui plutôt que dans quatre mois. Si vous préférez essayer à 300 000 €, je vous le dis franchement : je ne pense pas que ce soit dans votre intérêt, et je vous propose alors un point chiffré à trois semaines pour décider ensemble sur des faits. »",
        ],
      },
      quiz: [
        {
          id: "mk2q1",
          type: "qcm",
          question: "Quel facteur pèse le plus lourd dans le prix d'un logement ?",
          options: ["L'état de la cuisine", "L'emplacement", "La présence d'une cave", "L'année de construction"],
          answer: 1,
          explanation:
            "L'emplacement détermine le bassin d'acquéreurs et ne peut pas être modifié. C'est le facteur structurant de toute estimation.",
          skill: "marche",
          topic: "facteurs-prix",
        },
        {
          id: "mk2q2",
          type: "qcm",
          question: "Deux T3 identiques, l'un avec 1 500 € de charges annuelles, l'autre avec 3 200 €. Quel est l'effet ?",
          options: [
            "Aucun, les charges ne concernent pas le prix d'achat",
            "Un effet réel : 142 € de coût mensuel supplémentaire pèsent sur la capacité d'emprunt de l'acquéreur",
            "Un effet uniquement sur les investisseurs",
            "Un effet uniquement si le bien est loué",
          ],
          answer: 1,
          explanation:
            "L'écart de 1 700 €/an représente environ 142 €/mois. Cette charge réduit la mensualité de crédit supportable et donc le budget d'acquisition, ce qui se répercute sur le prix.",
          skill: "marche",
          topic: "facteurs-prix",
        },
        {
          id: "mk2q3",
          type: "vraifaux",
          question: "Un ascenseur valorise autant un appartement au 1er étage qu'au 5e étage.",
          answer: 1,
          explanation:
            "Faux. L'effet de l'ascenseur croît fortement avec l'étage. Au 1er étage, son absence est peu pénalisante ; au 5e, elle exclut une partie importante des acquéreurs.",
          skill: "estimation",
          topic: "facteurs-prix",
        },
        {
          id: "mk2q4",
          type: "qcm",
          question: "Comment présenter une estimation inférieure aux attentes du vendeur ?",
          options: [
            "En annonçant directement le chiffre pour ne pas perdre de temps",
            "En présentant des ventes comparables puis les écarts, un par un, avant d'annoncer la fourchette",
            "En proposant d'essayer au prix du vendeur pendant trois mois",
            "En expliquant que le marché est difficile en ce moment",
          ],
          answer: 1,
          explanation:
            "Le vendeur doit pouvoir suivre le raisonnement. Comparables, puis écarts explicites, puis fourchette : il accepte une conclusion qu'il a vu se construire, il rejette un verdict.",
          skill: "estimation",
          topic: "facteurs-prix",
        },
      ],
      sources: [
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
        { label: "Notaires de France — Statistiques immobilières", url: "https://www.notaires.fr/fr/immobilier-fiscalite/prix-et-tendances-de-limmobilier" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "mk3",
      moduleId: "marche",
      title: "Taux, crédit et pouvoir d'achat immobilier",
      summary:
        "Comprendre l'effet mécanique des taux d'intérêt sur ce que les acquéreurs peuvent payer — et donc sur les prix.",
      duration: 14,
      difficulty: "intermediaire",
      skills: ["marche", "financement"],
      objectives: [
        "Calculer l'effet d'une variation de taux sur la capacité d'emprunt",
        "Comprendre pourquoi les prix réagissent avec retard aux variations de taux",
        "Lire la tension d'un marché avec quatre indicateurs simples",
        "Expliquer ces mécanismes à un vendeur sans jargon",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "La très grande majorité des acquéreurs achètent à crédit. Leur budget n'est donc pas déterminé par le prix des biens, mais par la mensualité qu'une banque accepte de leur consentir. Comprendre ce mécanisme, c'est comprendre le marché.",
        },
        { type: "heading", text: "L'effet mécanique du taux" },
        {
          type: "paragraph",
          text:
            "Prenons un ménage capable de rembourser 1 200 € par mois hors assurance, sur 25 ans. Le capital qu'il peut emprunter dépend directement du taux. Les ordres de grandeur ci-dessous sont donnés à titre pédagogique et arrondis.",
        },
        {
          type: "table",
          title: "Capital empruntable pour 1 200 €/mois sur 25 ans",
          head: ["Taux nominal", "Capital empruntable (ordre de grandeur)", "Écart"],
          rows: [
            ["1,0 %", "≈ 318 000 €", "référence"],
            ["2,0 %", "≈ 283 000 €", "− 35 000 €"],
            ["3,0 %", "≈ 253 000 €", "− 65 000 €"],
            ["4,0 %", "≈ 227 000 €", "− 91 000 €"],
            ["5,0 %", "≈ 205 000 €", "− 113 000 €"],
          ],
          note:
            "Calculs indicatifs hors assurance et hors frais. Ils illustrent un ordre de grandeur, ils ne remplacent pas l'étude d'un courtier ou d'une banque.",
        },
        {
          type: "callout",
          variant: "info",
          title: "La règle à retenir",
          text:
            "Sur une durée de 25 ans, un point de taux supplémentaire réduit la capacité d'emprunt d'environ 10 à 12 %. Autrement dit : quand les taux montent de deux points, un acquéreur perd l'équivalent d'un cinquième de son budget, sans que ses revenus aient bougé.",
        },
        { type: "heading", text: "Pourquoi les prix ne baissent pas immédiatement" },
        {
          type: "steps",
          items: [
            {
              title: "1. Les taux montent",
              text: "La capacité d'emprunt des acquéreurs se réduit immédiatement. Le nombre d'acquéreurs solvables sur un prix donné diminue.",
            },
            {
              title: "2. Les vendeurs ne bougent pas",
              text: "Ils restent ancrés sur les prix observés l'année précédente. Les biens s'accumulent et les délais s'allongent.",
            },
            {
              title: "3. Le volume de transactions chute",
              text: "C'est le premier signal observable, bien avant les prix. Moins de ventes, pas encore de baisse affichée.",
            },
            {
              title: "4. Les prix s'ajustent progressivement",
              text: "D'abord par la négociation à la baisse, puis par les prix affichés. Ce décalage prend couramment plusieurs trimestres.",
            },
            {
              title: "5. Les vendeurs contraints arbitrent",
              text: "Mutation, séparation, succession : ceux qui doivent vendre acceptent le nouveau niveau de prix, et fixent la référence pour les suivants.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "L'information la plus utile à donner à un vendeur",
          text:
            "« Le nombre d'acquéreurs capables d'acheter votre bien à 320 000 € a baissé, non parce que votre bien a changé, mais parce que leur banque leur prête moins. Nous ne discutons pas de la valeur de votre appartement : nous discutons de la solvabilité des gens qui peuvent l'acheter. » Ce déplacement du sujet évite de heurter le vendeur.",
        },
        { type: "heading", text: "Lire la tension d'un marché local : quatre indicateurs" },
        {
          type: "table",
          head: ["Indicateur", "Comment l'obtenir", "Ce qu'il révèle"],
          rows: [
            ["Délai moyen de vente", "Suivi de vos propres mandats et de la pige", "Marché tendu : moins de 6 semaines. Marché lent : plus de 4 mois"],
            ["Écart entre prix affiché et prix acté", "Comparaison de vos annonces avec la base DVF", "Profondeur de la négociation acceptée"],
            ["Nombre de contacts par annonce", "Statistiques des portails", "Adéquation du prix : moins de cinq contacts en deux semaines est un signal fort"],
            ["Stock disponible par typologie", "Comptage manuel hebdomadaire sur votre secteur", "Rareté ou surabondance d'un type de bien"],
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "La discipline qui vous distinguera",
          text:
            "Consacrez trente minutes chaque lundi à relever ces quatre indicateurs sur votre secteur, dans un simple tableau. Au bout de six mois, vous disposerez d'une connaissance du marché local que personne ne pourra vous contester — et que la plupart de vos confrères n'auront pas.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["capacite-emprunt", "mensualite", "taux-nominal", "taux-endettement", "tension-immobiliere", "marche-local", "dvf"],
        },
      ],
      keyPoints: [
        "Les acquéreurs raisonnent en mensualité, pas en prix.",
        "Sur 25 ans, un point de taux réduit la capacité d'emprunt d'environ 10 à 12 %.",
        "Le volume de transactions chute avant les prix : c'est le signal avancé.",
        "L'ajustement des prix prend plusieurs trimestres après une variation de taux.",
        "Quatre indicateurs simples suffisent à lire un marché local : délai, écart affiché/acté, contacts par annonce, stock.",
      ],
      mistakes: [
        "Parler de « crise » ou de « reprise » sans données locales.",
        "Confondre baisse du nombre de ventes et baisse des prix.",
        "Faire un calcul de capacité d'emprunt à la place d'un courtier.",
        "Négliger le suivi hebdomadaire du marché de son secteur.",
      ],
      quiz: [
        {
          id: "mk3q1",
          type: "qcm",
          question: "Les taux passent de 2 % à 4 %. Pour un même effort mensuel sur 25 ans, la capacité d'emprunt :",
          options: [
            "reste identique, seule la durée change",
            "baisse d'environ 20 %",
            "baisse d'environ 5 %",
            "augmente, car les banques prêtent davantage",
          ],
          answer: 1,
          explanation:
            "Environ 10 à 12 % de capacité perdue par point de taux sur 25 ans. Deux points représentent donc de l'ordre de 20 % de budget en moins, à revenus inchangés.",
          skill: "financement",
          topic: "taux",
        },
        {
          id: "mk3q2",
          type: "qcm",
          question: "Quel indicateur baisse en premier lorsque les taux montent ?",
          options: [
            "Les prix affichés",
            "Le volume de transactions",
            "Le nombre de biens à vendre",
            "Les loyers",
          ],
          answer: 1,
          explanation:
            "Le volume de transactions réagit immédiatement, tandis que les prix s'ajustent avec plusieurs trimestres de retard, d'abord par la négociation puis par les prix affichés.",
          skill: "marche",
          topic: "taux",
        },
        {
          id: "mk3q3",
          type: "qcm",
          question: "Moins de cinq contacts en deux semaines sur une annonce bien diffusée signifie généralement :",
          options: [
            "que le marché est totalement bloqué",
            "que le prix est mal positionné",
            "que les photos sont trop nombreuses",
            "qu'il faut attendre trois mois de plus",
          ],
          answer: 1,
          explanation:
            "Un faible nombre de contacts sur une annonce correctement diffusée et illustrée traduit presque toujours un problème de positionnement de prix. C'est un signal à traiter tôt, pas à subir.",
          skill: "commercialisation",
          topic: "taux",
        },
      ],
      sources: [
        { label: "Banque de France — Crédits à l'habitat", url: "https://www.banque-france.fr/" },
        { label: "HCSF — Recommandations sur les conditions d'octroi", url: "https://www.economie.gouv.fr/hcsf" },
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
