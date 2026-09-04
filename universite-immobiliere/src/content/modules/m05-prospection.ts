import type { CourseModule } from "@/lib/types";

export const moduleProspection: CourseModule = {
  id: "prospection",
  level: 5,
  title: "Prospection",
  subtitle: "Trouver des propriétaires vendeurs, régulièrement",
  description:
    "Sans prospection, il n'y a pas de métier. Ce module donne une méthode complète et honnête : comprendre avant de convaincre, travailler un secteur, tenir un rythme, et parler à des humains plutôt que réciter un script.",
  icon: "📞",
  skills: ["prospection", "psychologie", "organisation"],
  requires: ["estimation"],
  outcomes: [
    "Construire un plan de prospection hebdomadaire tenable",
    "Conduire un appel de pige sans réciter et sans agresser",
    "Travailler un secteur et devenir la personne à qui l'on pense",
    "Rédiger des messages écrits qui obtiennent une réponse",
    "Transformer chaque contact en relation entretenue",
  ],
  lessons: [
    {
      id: "pr1",
      moduleId: "prospection",
      title: "Comprendre la prospection avant de la pratiquer",
      summary:
        "Sortir de l'image du démarchage insistant : la prospection est un travail de présence, de régularité et d'utilité.",
      duration: 15,
      difficulty: "debutant",
      skills: ["prospection", "organisation"],
      objectives: [
        "Comprendre l'économie de la prospection : volumes et taux de transformation",
        "Choisir ses canaux en fonction de son tempérament et de son secteur",
        "Construire une semaine type réaliste",
        "Accepter le refus comme une donnée statistique, non comme un jugement",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "La prospection est la partie du métier que presque tout le monde redoute et que presque personne ne fait régulièrement. C'est précisément pour cela qu'elle est rentable : la concurrence sur ce terrain est faible, non par manque de talent, mais par manque de constance.",
        },
        { type: "heading", text: "L'économie de la prospection" },
        {
          type: "paragraph",
          text:
            "Les chiffres qui suivent sont des ordres de grandeur pédagogiques : ils varient fortement selon les secteurs, les marchés et les personnes. Ils servent à comprendre la mécanique, pas à fixer un objectif universel.",
        },
        {
          type: "table",
          title: "L'entonnoir type d'une activité de prospection téléphonique",
          head: ["Étape", "Ordre de grandeur", "Ce qui la fait progresser"],
          rows: [
            ["Numéros composés", "100", "Régularité et qualité du fichier"],
            ["Personnes jointes", "35 à 50", "Horaires d'appel adaptés"],
            ["Conversations réelles", "20 à 30", "Qualité des premières secondes"],
            ["Rendez-vous obtenus", "3 à 6", "Pertinence de la proposition de valeur"],
            ["Mandats signés", "1 à 3", "Qualité de l'estimation et de la présentation"],
            ["Ventes conclues", "1 à 2", "Prix juste et pilotage"],
          ],
          note:
            "Retenez le principe : la vente est le résultat d'un volume d'activité en amont. Ce que vous ne prospectez pas aujourd'hui manquera dans trois mois.",
        },
        {
          type: "callout",
          variant: "info",
          title: "La conséquence à accepter",
          text:
            "Sur cent appels, quatre-vingt-quinze n'aboutiront à rien d'immédiat. Ce n'est pas un échec, c'est la structure de l'activité. Un conseiller qui vit chaque refus comme un jugement personnel arrête au bout de trois semaines. Un conseiller qui compte ses appels et non ses refus tient dans la durée.",
        },
        { type: "heading", text: "Les canaux, et à qui ils conviennent" },
        {
          type: "table",
          head: ["Canal", "Ce qu'il produit", "Convient à"],
          rows: [
            ["Pige téléphonique", "Contacts avec des vendeurs déjà décidés", "Ceux qui supportent le refus fréquent et rapide"],
            ["Terrain et porte-à-porte", "Notoriété locale, contacts qualitatifs, information de terrain", "Ceux qui préfèrent le contact direct"],
            ["Boîtage et courrier ciblé", "Effet lent mais cumulatif sur un secteur", "Tous, en complément"],
            ["Réseau personnel", "Le meilleur taux de transformation", "Tous, dès le premier jour"],
            ["Recommandation client", "Le meilleur canal à moyen terme", "Ceux qui suivent bien leurs clients"],
            ["Contenu local et réseaux sociaux", "Notoriété, entrée progressive", "Ceux à l'aise à l'écrit ou en vidéo"],
            ["Partenaires prescripteurs", "Flux régulier une fois installé", "Ceux qui savent entretenir une relation professionnelle"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le choix qui compte",
          text:
            "Ne cherchez pas le « meilleur » canal : cherchez celui que vous ferez tous les jours. Un canal moyen pratiqué quotidiennement bat un canal excellent pratiqué une fois par mois. Choisissez-en deux, tenez-les six mois, mesurez, puis ajustez.",
        },
        { type: "heading", text: "La semaine type d'un conseiller qui démarre" },
        {
          type: "table",
          head: ["Créneau", "Activité", "Pourquoi ce créneau"],
          rows: [
            ["Lundi à vendredi, 9h00 – 10h30", "Prospection téléphonique et pige", "Le créneau le plus productif : nouvelles annonces du week-end"],
            ["Lundi à vendredi, 10h30 – 11h30", "Relances : acquéreurs, vendeurs, dossiers en cours", "Le suivi est ce qui fait la différence"],
            ["Mardi et jeudi après-midi", "Terrain : secteur, boîtage, contact avec les commerçants", "Régularité de la présence locale"],
            ["Mercredi 14h – 18h", "Rendez-vous d'estimation et visites", "Disponibilité fréquente des familles"],
            ["Samedi matin", "Visites et rendez-vous", "Le créneau où les acquéreurs sont libres"],
            ["Vendredi 17h – 18h30", "Bilan de la semaine, chiffres, préparation de la suivante", "Sans mesure, pas de progression"],
          ],
          note:
            "Cette organisation est indicative. Ce qui compte, c'est qu'un créneau de prospection soit inscrit dans l'agenda comme un rendez-vous client — c'est-à-dire non déplaçable.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "L'erreur qui tue les carrières",
          text:
            "Arrêter de prospecter dès que l'on a trois mandats en cours. Deux mois plus tard, les mandats sont vendus, le portefeuille est vide et le pipeline aussi. Le revenu s'effondre au moment où il paraissait acquis. La prospection ne s'arrête jamais, même — surtout — quand tout va bien.",
        },
        { type: "heading", text: "Ce que vous vendez réellement en prospection" },
        {
          type: "paragraph",
          text:
            "Vous ne vendez pas un mandat au téléphone : c'est impossible et personne n'y croit. Vous vendez un rendez-vous, et le rendez-vous se vend par l'utilité, pas par l'insistance. « Je peux vous apporter les trois dernières ventes signées dans votre rue » est une proposition concrète. « Je vous propose une estimation gratuite » ne l'est pas : tout le monde propose la même chose.",
        },
        {
          type: "compare",
          left: {
            title: "Proposition faible",
            items: [
              "« Je vous propose une estimation gratuite »",
              "« Notre agence a de nombreux acquéreurs »",
              "« Nous sommes leader sur le secteur »",
              "« Je passais dans le quartier »",
            ],
          },
          right: {
            title: "Proposition concrète",
            items: [
              "« Je peux vous apporter les quatre ventes signées de votre rue depuis un an »",
              "« J'ai trois acquéreurs financés qui cherchent exactement votre typologie sur ce secteur »",
              "« Je peux vous dire en quinze minutes pourquoi les visites ne se transforment pas »",
              "« Je vous apporte l'analyse des charges et des travaux votés de votre copropriété »",
            ],
          },
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["prospection", "pige", "secteur", "recommandation", "rgpd"],
        },
      ],
      keyPoints: [
        "La prospection est une activité de volume : la vente est un résultat en bout de chaîne.",
        "Sur cent appels, la grande majorité n'aboutit à rien d'immédiat : c'est structurel.",
        "Choisissez deux canaux tenables quotidiennement plutôt qu'un canal idéal occasionnel.",
        "Le créneau de prospection s'inscrit dans l'agenda comme un rendez-vous non déplaçable.",
        "Ne jamais arrêter de prospecter parce que le portefeuille est plein.",
        "On ne vend pas un mandat au téléphone : on vend un rendez-vous, par l'utilité.",
      ],
      mistakes: [
        "Prospecter « quand il y a le temps », donc jamais.",
        "Changer de canal toutes les deux semaines sans avoir mesuré.",
        "Proposer une « estimation gratuite » comme argument principal.",
        "Interpréter chaque refus comme un jugement personnel.",
      ],
      exercise: {
        title: "Votre plan de prospection sur 90 jours",
        instructions:
          "Un plan que vous n'écrivez pas n'existe pas. Renseignez ces quatre champs, puis inscrivez immédiatement les créneaux dans votre agenda.",
        fields: [
          { id: "secteur", label: "Votre secteur : quelles rues, quel périmètre, combien de logements ?", multiline: true },
          { id: "canaux", label: "Vos deux canaux principaux, et pourquoi ceux-là", multiline: true },
          { id: "rythme", label: "Votre engagement hebdomadaire chiffré (appels, portes, messages)", multiline: true },
          { id: "mesure", label: "Comment vous mesurerez : quels chiffres, relevés quand ?", multiline: true },
        ],
        checklist: [
          "Le secteur est délimité précisément, pas « toute la ville »",
          "Le nombre de logements du secteur est estimé",
          "Deux canaux seulement sont retenus",
          "Le rythme hebdomadaire est chiffré et réaliste",
          "Les créneaux sont inscrits dans l'agenda",
          "Les indicateurs à suivre sont nommés",
          "Un point de mesure hebdomadaire est fixé",
        ],
        modelAnswer:
          "Un plan réaliste pour un débutant : secteur de 900 à 1 500 logements sur trois ou quatre rues cohérentes ; canaux pige téléphonique quotidienne et présence terrain deux après-midi par semaine ; engagement de 40 appels et 30 portes par semaine ; mesure chaque vendredi de cinq chiffres — appels passés, conversations, rendez-vous obtenus, estimations réalisées, mandats signés. L'important n'est pas l'ambition du plan, c'est qu'il tienne six mois.",
      },
      quiz: [
        {
          id: "pr1q1",
          type: "qcm",
          question: "Que vend-on au téléphone en prospection ?",
          options: ["Un mandat", "Un rendez-vous", "Une estimation", "Le bien d'un autre client"],
          answer: 1,
          explanation:
            "Un mandat se signe en rendez-vous, après une estimation argumentée. L'objectif unique de l'appel est d'obtenir ce rendez-vous, en apportant une raison concrète de vous recevoir.",
          skill: "prospection",
          topic: "prospection",
        },
        {
          id: "pr1q2",
          type: "vraifaux",
          question: "Il est logique de réduire la prospection lorsqu'on a plusieurs mandats en cours.",
          answer: 1,
          explanation:
            "Faux. Le décalage entre prospection et revenu est de plusieurs mois. Arrêter quand le portefeuille est plein crée un trou de revenu deux à trois mois plus tard, précisément au moment où les mandats se concrétisent.",
          skill: "organisation",
          topic: "prospection",
        },
        {
          id: "pr1q3",
          type: "qcm",
          question: "Quelle proposition est la plus susceptible d'obtenir un rendez-vous ?",
          options: [
            "« Je vous propose une estimation gratuite et sans engagement »",
            "« Je peux vous apporter les quatre ventes signées de votre rue depuis un an »",
            "« Notre agence est numéro un sur le secteur »",
            "« J'ai beaucoup d'acquéreurs en portefeuille »",
          ],
          answer: 1,
          explanation:
            "Une information concrète, locale et vérifiable crée une raison de vous recevoir. Les formules génériques sont indistinguables de celles de tous vos confrères.",
          skill: "prospection",
          topic: "prospection",
        },
        {
          id: "pr1q4",
          type: "qcm",
          question: "Comment choisir ses canaux de prospection ?",
          options: [
            "En prenant celui qui a le meilleur taux de transformation théorique",
            "En choisissant deux canaux que l'on pratiquera réellement tous les jours",
            "En testant tous les canaux chaque semaine",
            "En copiant le conseiller le plus performant de l'agence",
          ],
          answer: 1,
          explanation:
            "La régularité l'emporte sur l'efficacité théorique. Deux canaux tenus six mois produisent plus qu'une rotation permanente entre sept canaux.",
          skill: "prospection",
          topic: "prospection",
        },
      ],
      sources: [
        { label: "CNIL — Prospection et données personnelles", url: "https://www.cnil.fr/" },
        { label: "Bloctel", url: "https://www.bloctel.gouv.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "pr2",
      moduleId: "prospection",
      title: "L'appel de pige : comprendre avant de convaincre",
      summary:
        "Conduire un appel à un particulier qui vend seul, sans script récité, en cherchant d'abord à comprendre sa situation.",
      duration: 19,
      difficulty: "intermediaire",
      skills: ["prospection", "psychologie"],
      objectives: [
        "Préparer un appel de pige en trois minutes",
        "Maîtriser la structure d'un appel : ouverture, découverte, proposition, conclusion",
        "Traiter les cinq objections les plus fréquentes",
        "Comprendre la psychologie du particulier qui vend seul",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un propriétaire qui vend seul reçoit parfois quinze appels d'agences en trois jours. Il est agacé, sur la défensive, et il a une phrase toute prête pour raccrocher. Votre seul avantage possible est de ne pas ressembler aux quatorze autres.",
        },
        { type: "heading", text: "Ce que vit le vendeur particulier" },
        {
          type: "list",
          items: [
            "Il pense économiser les honoraires : c'est sa motivation principale et elle est légitime.",
            "Il sous-estime le temps que cela va lui prendre : appels, visites, dossier, notaire.",
            "Il ignore souvent les obligations documentaires et les risques d'une vente mal préparée.",
            "Il ne sait pas qualifier un acquéreur : il fera visiter à des gens qui ne peuvent pas acheter.",
            "Il est seul face à la négociation, sans recul émotionnel sur son propre bien.",
            "Et surtout : il est fatigué des appels d'agences qui lui parlent d'elles-mêmes.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le renversement",
          text:
            "Ne cherchez pas à le convaincre de prendre une agence. Cherchez à comprendre où il en est. Un vendeur qui a fait douze visites sans offre n'a pas besoin qu'on lui explique la valeur d'une agence : il a besoin qu'on lui explique pourquoi ses visites ne transforment pas.",
        },
        { type: "heading", text: "La préparation : trois minutes avant d'appeler" },
        {
          type: "list",
          ordered: true,
          items: [
            "Lire l'annonce en entier, y compris ce qu'elle ne dit pas : surface manquante, DPE absent, photos rares.",
            "Vérifier depuis combien de temps l'annonce est en ligne et si le prix a déjà baissé.",
            "Regarder deux ou trois ventes comparables du secteur dans la base publique.",
            "Repérer un élément concret et vrai à dire : « il n'y a pas de photo de la cuisine », « votre annonce ne mentionne pas l'étage », « trois biens comparables se sont vendus rue X ».",
            "Décider de l'objectif de l'appel : un rendez-vous, ou un accord pour rappeler dans trois semaines.",
          ],
        },
        { type: "heading", text: "La structure de l'appel" },
        {
          type: "steps",
          items: [
            {
              title: "1. Ouverture — annoncer clairement qui vous êtes (10 secondes)",
              text:
                "Ne masquez jamais votre qualité. « Bonjour, Camille Lefèvre, conseillère immobilière sur le quartier des Lices. Je vous appelle au sujet de votre annonce, et je sais que vous devez en recevoir beaucoup. Je vous prends une minute, et si ça ne vous intéresse pas vous me le dites franchement. »",
            },
            {
              title: "2. Permission — désamorcer (5 secondes)",
              text:
                "Le fait d'annoncer que vous savez qu'il reçoit beaucoup d'appels, et de lui donner explicitement le droit de refuser, désamorce la défense. C'est le point le plus important de l'appel.",
            },
            {
              title: "3. Découverte — poser deux questions, puis se taire",
              text:
                "« Où en êtes-vous ? Vous avez eu des visites ? » puis « Qu'est-ce qui vous fait dire que ça ne va pas assez vite ? ». Deux questions ouvertes, et vous écoutez sans interrompre.",
            },
            {
              title: "4. Reformulation — prouver que vous avez écouté",
              text:
                "« Si je comprends bien : dix visites en deux mois, beaucoup de curieux, deux personnes qui n'avaient pas leur financement, et une offre à 30 000 € en dessous. C'est bien ça ? »",
            },
            {
              title: "5. Proposition — utile et limitée",
              text:
                "« Je peux passer vingt minutes, sans engagement, pour vous dire deux choses : à quel niveau de prix se situent réellement les ventes signées de votre rue, et pourquoi vos visites ne transforment pas. Si après ça vous voulez continuer seul, vous continuerez seul, avec l'information en plus. »",
            },
            {
              title: "6. Conclusion — proposer un créneau précis",
              text:
                "« Jeudi 18 h ou samedi 10 h, qu'est-ce qui vous arrange le mieux ? » Jamais « quand voulez-vous ? », qui reporte la décision.",
            },
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Les cinq phrases qui font raccrocher",
          text:
            "« Je vous appelle parce que j'ai un acquéreur pour votre bien » (mensonge fréquent, immédiatement identifié). « Vous savez, vendre seul, c'est très compliqué » (condescendant). « Je ne vais pas vous prendre longtemps » suivi de trois minutes de monologue. « Notre agence est la première du secteur » (il s'en moque). « C'est gratuit et sans engagement » (tout le monde le dit).",
        },
        { type: "heading", text: "Les cinq objections les plus fréquentes" },
        {
          type: "objection",
          objection: "Je ne veux pas d'agence.",
          understand:
            "Il refuse une catégorie, pas vous : il n'a aucune information sur vous. Souvent, il refuse surtout de payer des honoraires.",
          answers: [
            "« C'est votre droit le plus strict, et beaucoup de gens vendent très bien seuls. Je ne vous appelle pas pour vous convaincre du contraire. Je vous propose juste vingt minutes d'information sur les prix réels de votre rue. Vous en ferez ce que vous voulez. »",
            "« Puis-je vous demander : c'est le principe de l'agence qui vous gêne, ou le montant des honoraires ? » — Cette question ouvre une vraie conversation.",
          ],
          avoid: "Ne dites jamais « vous avez tort ». Ne listez pas les risques de la vente entre particuliers comme un argumentaire de peur.",
        },
        {
          type: "objection",
          objection: "J'ai déjà des visites, ça marche bien.",
          understand:
            "Soit c'est vrai, et il n'a pas besoin de vous maintenant. Soit il a des visites sans offres, ce qui est très différent — et c'est le cas le plus fréquent.",
          answers: [
            "« Parfait, c'est bon signe. Est-ce que vous avez eu des offres écrites, ou surtout des visites ? »",
            "« Si vous avez des offres, je vous laisse tranquille sincèrement. Si vous avez des visites sans offre, c'est un symptôme que je connais bien et je peux vous dire en quinze minutes d'où ça vient. »",
          ],
          avoid: "Ne minimisez pas ses résultats. Posez une question et laissez les faits parler.",
        },
        {
          type: "objection",
          objection: "Vos honoraires sont trop élevés.",
          understand:
            "Il compare un montant à zéro, sans mettre en face ce que le montant produit. C'est une objection de valeur, pas de prix.",
          answers: [
            "« Je comprends : dit comme ça, c'est une somme importante. La vraie question n'est pas le montant, c'est ce qu'il vous rapporte. Si je vends 15 000 € plus cher qu'une vente entre particuliers et six semaines plus vite, l'opération est positive pour vous. Si je n'en suis pas capable, vous avez raison de ne pas me payer. »",
            "« Une chose que peu de gens savent : selon les statistiques publiques, une part importante des biens vendus entre particuliers le sont après une baisse de prix significative. Ce n'est pas un argument contre vous, c'est un élément à mettre dans la balance. »",
          ],
          avoid: "Ne bradez jamais vos honoraires au téléphone. Vous n'avez encore apporté aucune preuve de valeur : une remise à ce stade confirme que vous n'en valez pas le prix.",
        },
        {
          type: "objection",
          objection: "Rappelez-moi dans trois mois.",
          understand: "C'est souvent une manière polie de mettre fin à l'appel — mais parfois c'est sincère.",
          answers: [
            "« Avec plaisir. Pour que mon appel vous soit utile plutôt que pénible : qu'est-ce qui aura changé d'ici là ? »",
            "« Je note de vous rappeler le 12 mars. En attendant, je vous envoie par mail les trois dernières ventes signées de votre rue, sans autre démarche de ma part. »",
          ],
          avoid: "Ne dites pas « d'accord, bonne journée » sans noter une date. Un rappel non planifié n'existe pas.",
        },
        {
          type: "objection",
          objection: "J'ai déjà une agence.",
          understand: "Vérifiez immédiatement s'il s'agit d'un mandat exclusif ou simple : la réponse change tout.",
          answers: [
            "« Très bien. Vous êtes en exclusivité ou en mandat simple ? » — S'il est en exclusivité, respectez-la absolument et proposez un rappel à l'échéance.",
            "« Si vous êtes en mandat simple et que vous êtes satisfait, je ne veux pas encombrer votre vente. Si vous souhaitez un second regard sur le prix, je peux vous l'apporter. »",
          ],
          avoid:
            "Ne dénigrez jamais le confrère en place et ne démarchez jamais un vendeur lié par une exclusivité : c'est contraire à la déontologie et cela finit toujours par se savoir.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "Cadre à respecter",
          text:
            "La prospection téléphonique est encadrée. Le dispositif d'opposition au démarchage téléphonique, les règles applicables aux horaires et à la fréquence des appels, ainsi que les obligations d'information issues du RGPD s'appliquent. Vérifiez ces règles avant de bâtir une routine d'appels. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["pige", "prospection", "objection", "honoraires", "mandat-exclusif", "rgpd"],
        },
      ],
      keyPoints: [
        "Le vendeur particulier est agacé par les appels d'agences : ne ressemblez pas aux autres.",
        "Annoncer sa qualité et donner explicitement le droit de refuser désamorce la défense.",
        "Deux questions ouvertes, puis écouter : la découverte prime sur l'argumentation.",
        "Reformuler prouve l'écoute et crée l'ouverture.",
        "Proposer une utilité limitée et concrète, pas une « estimation gratuite ».",
        "Ne jamais négocier ses honoraires au téléphone, avant toute preuve de valeur.",
      ],
      mistakes: [
        "Prétendre avoir un acquéreur pour le bien.",
        "Réciter un script sans écouter les réponses.",
        "Dénigrer la vente entre particuliers ou un confrère.",
        "Terminer un appel sans date de rappel notée.",
      ],
      caseStudy: {
        title: "Un appel difficile",
        context:
          "Vous appelez un propriétaire. Annonce en ligne depuis 74 jours, prix inchangé, cinq photos sombres, pas de mention d'étage, DPE E. Il décroche et dit immédiatement, sur un ton sec : « Encore une agence ? J'en ai eu six ce matin, ça suffit. »",
        tasks: [
          "Rédigez votre réponse immédiate, en trois phrases maximum.",
          "Indiquez la première question que vous poserez s'il ne raccroche pas.",
          "Rédigez votre proposition de rendez-vous.",
          "Indiquez ce que vous faites s'il refuse quand même.",
        ],
        correction: [
          "Réponse immédiate : « Je comprends parfaitement, et je ne vais pas vous en rajouter une septième. Une seule question et je vous laisse : est-ce que vous avez eu des visites ces trois dernières semaines ? » — On reconnaît l'agacement, on annonce une durée très courte, on pose une question factuelle qui l'intéresse lui.",
          "Première question s'il répond : « Et parmi ces visites, est-ce que vous avez eu une offre écrite ? » — La distinction visites/offres est le levier le plus efficace.",
          "Proposition : « Votre annonce est en ligne depuis un peu plus de deux mois. Je vous propose vingt minutes, jeudi 18 h ou samedi 10 h, pour vous montrer les ventes réellement signées dans votre rue et vous dire ce qui, dans votre annonce, filtre mal les acquéreurs. Vous en ferez ce que vous voudrez. »",
          "S'il refuse : « Aucun souci. Je vous envoie quand même par SMS les trois dernières ventes signées de votre rue, sans autre démarche. Si un jour vous voulez en parler, vous aurez mon numéro. » Puis noter un rappel à trois semaines. Ce geste, gratuit et non intrusif, transforme un refus en relation.",
        ],
      },
      quiz: [
        {
          id: "pr2q1",
          type: "qcm",
          question: "Quelle est la meilleure ouverture d'un appel de pige ?",
          options: [
            "« Bonjour, j'ai un acquéreur pour votre bien »",
            "« Bonjour, je suis conseiller immobilier, je sais que vous recevez beaucoup d'appels, je vous prends une minute et vous me dites franchement si ça ne vous intéresse pas »",
            "« Bonjour, notre agence est la première du secteur »",
            "« Bonjour, je vous propose une estimation gratuite »",
          ],
          answer: 1,
          explanation:
            "Annoncer sa qualité, reconnaître la situation du vendeur et lui donner explicitement le droit de refuser désamorce la défense et distingue immédiatement l'appel des autres.",
          skill: "prospection",
          topic: "pige",
        },
        {
          id: "pr2q2",
          type: "qcm",
          question: "Un vendeur dit « j'ai déjà des visites, ça marche bien ». Quelle réponse est la plus efficace ?",
          options: [
            "« Des visites ne suffisent pas, il faut une agence »",
            "« Parfait. Avez-vous eu des offres écrites, ou surtout des visites ? »",
            "« Je peux faire mieux que vous »",
            "« Rappelez-moi quand ça n'ira plus »",
          ],
          answer: 1,
          explanation:
            "La distinction entre visites et offres révèle la situation réelle sans contredire le vendeur. Beaucoup de vendeurs particuliers ont des visites nombreuses et aucune offre.",
          skill: "prospection",
          topic: "pige",
        },
        {
          id: "pr2q3",
          type: "vraifaux",
          question: "Face à une objection sur les honoraires au téléphone, il est habile de proposer immédiatement une remise.",
          answer: 1,
          explanation:
            "Faux. À ce stade vous n'avez apporté aucune preuve de valeur. Une remise immédiate confirme au vendeur que le prix affiché était surévalué et détruit votre position pour tout le reste de la relation.",
          skill: "negociation",
          topic: "pige",
        },
        {
          id: "pr2q4",
          type: "qcm",
          question: "Un vendeur vous informe qu'il est en mandat exclusif avec une autre agence. Que faites-vous ?",
          options: [
            "Vous lui proposez de rompre le mandat",
            "Vous respectez l'exclusivité et proposez un rappel à l'échéance",
            "Vous lui expliquez que ce confrère travaille mal",
            "Vous lui proposez des honoraires inférieurs",
          ],
          answer: 1,
          explanation:
            "Démarcher un vendeur lié par une exclusivité est contraire à la déontologie. Respecter l'exclusivité et proposer un rappel à l'échéance est à la fois correct et commercialement plus efficace à terme.",
          skill: "juridique",
          topic: "pige",
        },
      ],
      sources: [
        { label: "Bloctel — Opposition au démarchage téléphonique", url: "https://www.bloctel.gouv.fr/" },
        { label: "CNIL — Prospection commerciale", url: "https://www.cnil.fr/" },
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "pr3",
      moduleId: "prospection",
      title: "Le terrain, le secteur et la recommandation",
      summary:
        "Devenir la personne à qui les habitants pensent quand ils veulent vendre — la stratégie la plus rentable à moyen terme.",
      duration: 17,
      difficulty: "intermediaire",
      skills: ["prospection", "branding", "excellence"],
      objectives: [
        "Délimiter et travailler un secteur méthodiquement",
        "Conduire un contact terrain sans agressivité",
        "Construire un réseau de prescripteurs locaux",
        "Demander une recommandation au bon moment et de la bonne façon",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "La pige apporte des contacts immédiats mais concurrentiels. Le travail de secteur apporte des contacts moins nombreux, mais souvent exclusifs et beaucoup mieux disposés. Les deux sont complémentaires : le premier fait vivre les six premiers mois, le second fait vivre les dix années suivantes.",
        },
        { type: "heading", text: "Délimiter son secteur" },
        {
          type: "list",
          title: "Les critères d'un bon secteur",
          items: [
            "Une taille maîtrisable : de l'ordre de 800 à 2 000 logements pour une personne seule.",
            "Une cohérence : un quartier avec une identité, pas trois zones sans rapport.",
            "Une rotation suffisante : un secteur où l'on vend peu ne produira rien.",
            "Une proximité réelle : si vous n'y passez pas naturellement, vous n'y passerez pas.",
            "Une adéquation à votre profil : un quartier de maisons familiales ne se travaille pas comme un centre-ville étudiant.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le test du secteur",
          text:
            "Au bout de trois mois, vous devez pouvoir répondre de mémoire à : combien de biens sont à vendre actuellement ? Quels sont les prix au m² constatés par typologie ? Quelles copropriétés ont des travaux votés ? Quels commerces viennent d'ouvrir ou de fermer ? Si vous ne le savez pas, votre secteur est trop grand ou vous n'y allez pas assez.",
        },
        { type: "heading", text: "Le contact terrain" },
        {
          type: "paragraph",
          text:
            "Le porte-à-porte a mauvaise réputation parce qu'il est souvent mal fait. Bien conduit, c'est un contact humain, court, utile, et sans aucune pression. La règle est simple : vous apportez une information, vous ne demandez rien.",
        },
        {
          type: "dialogue",
          title: "Un contact terrain qui fonctionne",
          lines: [
            {
              speaker: "Approche à éviter",
              text: "« Bonjour, je suis conseiller immobilier, est-ce que vous avez un projet de vente ? »",
              tone: "bad",
            },
            {
              speaker: "Approche efficace",
              text:
                "« Bonjour, Camille Lefèvre, je suis conseillère immobilière sur le quartier. Je ne viens pas vous démarcher : l'appartement du 14 vient de se vendre, et je passe simplement laisser le prix de vente aux voisins, ça intéresse souvent les propriétaires. Voilà le document. Bonne journée. »",
              tone: "good",
            },
          ],
        },
        {
          type: "paragraph",
          text:
            "La différence est décisive : la seconde approche donne quelque chose et ne demande rien. Elle crée une raison légitime de revenir. Sur vingt portes, deux ou trois personnes engageront spontanément la conversation — et ce seront des conversations réelles, pas des refus polis.",
        },
        {
          type: "list",
          title: "Le rythme de présence sur un secteur",
          ordered: true,
          items: [
            "Chaque vente signée sur le secteur : une information distribuée dans les rues concernées.",
            "Une fois par trimestre : un point de marché local d'une page, simple, factuel, sans autopromotion.",
            "En continu : saluer, connaître les commerçants, être identifiable, porter toujours la même chose.",
            "Deux fois par an : un contenu utile — comment lire un DPE, ce qu'il faut préparer pour vendre, les travaux de copropriété.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "La régularité prime sur l'intensité",
          text:
            "Un boîtage massif unique ne produit rien. Quatre passages espacés dans l'année sur le même secteur produisent une notoriété. Le cerveau des habitants retient la répétition, pas le volume.",
        },
        { type: "heading", text: "Les prescripteurs locaux" },
        {
          type: "table",
          head: ["Prescripteur", "Pourquoi il peut vous orienter", "Ce que vous lui apportez"],
          rows: [
            ["Notaire", "Il voit les successions et les divorces avant tout le monde", "Des dossiers complets et bien préparés, qui lui font gagner du temps"],
            ["Courtier", "Il rencontre des acquéreurs qui doivent d'abord vendre", "Des dossiers acquéreurs sérieux et qualifiés"],
            ["Artisans du bâtiment", "Ils entrent chez les gens et entendent les projets", "Des chantiers, en les recommandant à vos clients"],
            ["Commerçants du quartier", "Ils savent qui déménage", "Votre fidélité et votre visibilité"],
            ["Syndics", "Ils connaissent les copropriétaires en difficulté ou en projet", "Un interlocuteur qui prépare bien les dossiers de vente"],
            ["Gestionnaires locatifs", "Ils gèrent des bailleurs qui arbitrent parfois", "Un partenaire de confiance sur la vente"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La règle du réseau",
          text:
            "Un réseau fonctionne dans les deux sens ou ne fonctionne pas. Avant de demander quoi que ce soit, apportez trois fois. Recommandez un artisan, envoyez un dossier propre au notaire, adressez un client au courtier. Le retour arrive, mais il arrive après.",
        },
        { type: "heading", text: "Demander une recommandation" },
        {
          type: "paragraph",
          text:
            "La recommandation est le canal au meilleur taux de transformation, et c'est celui que les débutants oublient le plus. La raison est simple : ils n'osent pas demander. Or une recommandation se demande explicitement, au bon moment, et de façon précise.",
        },
        {
          type: "compare",
          left: {
            title: "Demande vague, sans effet",
            items: [
              "« Si vous connaissez quelqu'un, pensez à moi »",
              "Demandée pendant une phase tendue de la vente",
              "Sans rappeler ce que vous avez fait",
              "Sans faciliter le geste",
            ],
          },
          right: {
            title: "Demande précise, efficace",
            items: [
              "« Connaissez-vous quelqu'un dans votre immeuble ou votre famille qui envisage de vendre dans l'année ? »",
              "Demandée juste après la signature chez le notaire",
              "En rappelant le résultat obtenu : délai, prix, sérénité",
              "En proposant une mise en relation simple, par message commun",
            ],
          },
        },
        {
          type: "example",
          title: "La formulation qui fonctionne",
          text:
            "Le jour de la signature, sur le parking de l'étude : « Je suis content que ça se soit bien passé. Je vais vous demander quelque chose directement : mon activité repose beaucoup sur le bouche-à-oreille. Si dans les mois qui viennent vous entendez quelqu'un parler d'un projet de vente — dans votre immeuble, votre famille, votre travail — pensez à moi. Et si vous préférez, envoyez-moi juste son prénom, je m'occupe du reste avec délicatesse. »",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["secteur", "prospection", "recommandation", "marche-local", "excellence"],
        },
      ],
      keyPoints: [
        "Un secteur se limite à 800-2 000 logements et se connaît de mémoire au bout de trois mois.",
        "Sur le terrain : apporter une information, ne rien demander.",
        "La régularité de présence bat l'intensité ponctuelle.",
        "Un réseau de prescripteurs fonctionne à condition d'apporter avant de demander.",
        "La recommandation se demande explicitement, juste après une signature réussie.",
        "Une demande de recommandation précise obtient une réponse ; une demande vague, jamais.",
      ],
      mistakes: [
        "Choisir un secteur trop vaste pour être réellement connu.",
        "Aborder un habitant en demandant s'il a un projet de vente.",
        "Faire un unique boîtage massif puis ne plus jamais revenir.",
        "Ne jamais oser demander une recommandation à un client satisfait.",
      ],
      quiz: [
        {
          id: "pr3q1",
          type: "qcm",
          question: "Quelle est la bonne approche lors d'un contact terrain ?",
          options: [
            "Demander directement si la personne envisage de vendre",
            "Apporter une information locale utile sans rien demander en retour",
            "Laisser une carte de visite sans parler",
            "Proposer une estimation gratuite immédiate",
          ],
          answer: 1,
          explanation:
            "Donner une information concrète — le prix de vente d'un bien voisin, un point de marché — crée une raison légitime d'être là et de revenir, sans mettre la personne en position de défense.",
          skill: "prospection",
          topic: "terrain",
        },
        {
          id: "pr3q2",
          type: "qcm",
          question: "Quel est le meilleur moment pour demander une recommandation ?",
          options: [
            "Dès la signature du mandat",
            "Juste après la signature de l'acte authentique, quand le client est satisfait",
            "Pendant la négociation",
            "Un an après la vente",
          ],
          answer: 1,
          explanation:
            "La satisfaction est maximale juste après l'aboutissement. Demander pendant une phase tendue, ou trop tard, réduit fortement les chances d'obtenir une réponse utile.",
          skill: "prospection",
          topic: "recommandation",
        },
        {
          id: "pr3q3",
          type: "vraifaux",
          question: "Un boîtage massif unique sur 3 000 boîtes est plus efficace que quatre passages annuels sur 800 boîtes.",
          answer: 1,
          explanation:
            "Faux. La notoriété locale se construit par la répétition sur un périmètre restreint. Un passage unique sur un large périmètre ne laisse aucune trace mémorielle.",
          skill: "branding",
          topic: "terrain",
        },
        {
          id: "pr3q4",
          type: "qcm",
          question: "Comment construire une relation avec un notaire prescripteur ?",
          options: [
            "En lui demandant régulièrement s'il a des dossiers à vous confier",
            "En lui apportant des dossiers complets et bien préparés qui lui font gagner du temps",
            "En lui proposant une rétrocession d'honoraires",
            "En lui envoyant des cartes de vœux",
          ],
          answer: 1,
          explanation:
            "Un notaire oriente vers les professionnels qui lui simplifient le travail. Un dossier complet, avec les documents réunis et les parties bien informées, est l'argument le plus efficace.",
          skill: "prospection",
          topic: "reseau",
        },
      ],
      sources: [
        { label: "CNIL — Prospection et RGPD", url: "https://www.cnil.fr/" },
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
