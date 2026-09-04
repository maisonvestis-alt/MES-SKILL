import type { CourseModule } from "@/lib/types";

export const moduleMandat: CourseModule = {
  id: "mandat",
  level: 7,
  title: "Prise de mandat",
  subtitle: "Présenter son service, défendre ses honoraires, obtenir l'exclusivité",
  description:
    "Le mandat est le seul document qui vous autorise à travailler et à être rémunéré. Ce module apprend à le présenter comme un engagement réciproque et non comme une signature à arracher.",
  icon: "📝",
  skills: ["mandat", "negociation", "psychologie"],
  requires: ["decouverte-client"],
  outcomes: [
    "Présenter un plan d'action écrit qui justifie une exclusivité",
    "Expliquer et défendre ses honoraires sans les brader",
    "Traiter les six objections classiques de prise de mandat",
    "Conduire le rendez-vous de signature avec méthode",
  ],
  lessons: [
    {
      id: "md1",
      moduleId: "mandat",
      title: "Le plan d'action : ce que vous vendez réellement",
      summary:
        "Construire l'engagement écrit qui transforme une promesse commerciale en contrat vérifiable.",
      duration: 16,
      difficulty: "intermediaire",
      skills: ["mandat", "commercialisation"],
      objectives: [
        "Construire un plan d'action en douze engagements concrets",
        "Distinguer engagement de moyens et promesse de résultat",
        "Présenter le plan comme la contrepartie de l'exclusivité",
        "Prévoir un mécanisme de sortie qui rassure le vendeur",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un vendeur ne choisit pas un conseiller sur sa personnalité, ni même sur son prix annoncé. Il choisit sur la réduction du risque : « qu'est-ce qui me garantit que je ne vais pas perdre trois mois ? » Le plan d'action écrit est la réponse à cette question.",
        },
        { type: "heading", text: "Les douze engagements" },
        {
          type: "table",
          head: ["Engagement", "Délai", "Preuve fournie au vendeur"],
          rows: [
            ["Commande des diagnostics", "Sous 48 h", "Copie de la commande"],
            ["Demande des documents au syndic", "Sous 48 h", "Copie du courriel"],
            ["Reportage photographique professionnel", "Sous 7 jours", "Les photos, avant diffusion"],
            ["Rédaction de l'annonce et validation par le vendeur", "Sous 7 jours", "Le texte, soumis à validation"],
            ["Diffusion sur les portails", "Sous 10 jours", "Les liens des annonces en ligne"],
            ["Information du fichier acquéreurs", "Sous 48 h après mise en ligne", "Nombre de contacts informés"],
            ["Communication ciblée sur le secteur", "Sous 15 jours", "Le support diffusé"],
            ["Compte rendu écrit hebdomadaire", "Chaque vendredi", "Le message : contacts, visites, retours"],
            ["Qualification systématique avant visite", "En continu", "La fiche acquéreur de chaque visiteur"],
            ["Retour à chaque visiteur sous 24 h", "En continu", "Le retour transmis au vendeur"],
            ["Point d'étape formel", "À 30 jours", "Analyse chiffrée écrite et recommandation"],
            ["Accompagnement jusqu'à l'acte", "En continu", "Suivi du financement et des délais notaire"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le document qui gagne les mandats",
          text:
            "Imprimez ce tableau, adaptez-le à votre pratique réelle, et remettez-le au vendeur. Peu de conseillers formalisent leurs engagements. Un vendeur qui compare une promesse orale à un document daté choisit le document — même si le prix annoncé est plus bas.",
        },
        { type: "heading", text: "Moyens et résultat : une distinction essentielle" },
        {
          type: "compare",
          left: {
            title: "Ce que vous pouvez promettre",
            items: [
              "Un reportage photo sous sept jours",
              "Un compte rendu chaque vendredi",
              "Un retour à chaque visiteur sous 24 heures",
              "Une qualification avant chaque visite",
              "Un point d'étape chiffré à trente jours",
            ],
          },
          right: {
            title: "Ce que vous ne pouvez jamais promettre",
            items: [
              "Un délai de vente",
              "Un prix de vente",
              "Un nombre de visites",
              "« J'ai déjà un acquéreur pour votre bien »",
              "Une vente avant une date donnée",
            ],
          },
        },
        {
          type: "callout",
          variant: "danger",
          title: "La promesse qui détruit une relation",
          text:
            "« Je vous le vends en deux mois. » Si la vente prend cinq mois, votre crédibilité est morte, votre demande de baisse de prix est irrecevable, et le vendeur racontera l'histoire à tout son entourage. Aucun mandat ne vaut cette promesse.",
        },
        { type: "heading", text: "Le mécanisme de sortie" },
        {
          type: "paragraph",
          text:
            "L'objection réelle derrière le refus d'exclusivité est presque toujours : « et si je me suis trompé sur vous ? » Répondez-y avant qu'elle ne soit posée. Présentez spontanément les modalités de dénonciation prévues au mandat, et proposez un engagement supplémentaire de votre part.",
        },
        {
          type: "dialogue",
          title: "Présenter la sortie comme un argument",
          lines: [
            {
              speaker: "Conseiller",
              text:
                "« Avant que vous me le demandiez, je préfère vous le dire : voici comment vous sortez de ce mandat si vous n'êtes pas satisfait. Les modalités sont écrites ici, je vous les lis. Et j'ajoute un engagement personnel : au point d'étape de trente jours, si vous estimez que je n'ai pas fait ce que j'ai écrit, je vous libère sans discussion. »",
              tone: "good",
            },
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Vérification nécessaire",
          text:
            "Les modalités de durée, de dénonciation et de clause pénale sont encadrées par les textes et par la jurisprudence. Ne rédigez jamais un engagement personnel qui contredirait le contrat de votre structure : faites-le valider par votre juriste. À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "Le point d'étape à trente jours" },
        {
          type: "paragraph",
          text:
            "C'est l'engagement le plus utile du plan, et celui que presque personne ne tient. Il consiste à revenir chez le vendeur avec des chiffres, à analyser froidement la situation, et à recommander une action. Il transforme la difficile conversation sur la baisse de prix en rendez-vous prévu de longue date.",
        },
        {
          type: "table",
          title: "La grille de lecture du point d'étape",
          head: ["Constat à 30 jours", "Diagnostic probable", "Recommandation"],
          rows: [
            ["Beaucoup de contacts, peu de visites", "L'annonce attire mais quelque chose bloque : photos, prix affiché, informations manquantes", "Retravailler l'annonce avant de toucher au prix"],
            ["Beaucoup de visites, aucune offre", "Écart entre la promesse de l'annonce et la réalité, ou prix trop élevé de 5 à 10 %", "Ajuster le prix ou corriger l'annonce"],
            ["Peu de contacts, peu de visites", "Prix nettement au-dessus du marché", "Ajustement significatif nécessaire"],
            ["Offres systématiquement basses", "Le marché indique un niveau de prix", "Analyser les offres reçues comme une donnée, pas comme un affront"],
            ["Bon rythme, pas encore d'offre", "Situation normale sur certains biens", "Poursuivre sans changement, l'expliquer clairement"],
          ],
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["mandat", "mandat-exclusif", "mandat-simple", "commercialisation", "honoraires"],
        },
      ],
      keyPoints: [
        "Le vendeur achète une réduction du risque, pas une personnalité.",
        "Douze engagements datés, écrits et vérifiables constituent le plan d'action.",
        "On promet des moyens, jamais un délai ni un prix de vente.",
        "Présenter spontanément le mécanisme de sortie désamorce l'objection principale.",
        "Le point d'étape à trente jours transforme la baisse de prix en rendez-vous prévu.",
      ],
      mistakes: [
        "Promettre un délai de vente pour emporter le mandat.",
        "Annoncer des engagements que l'on ne tiendra pas.",
        "Attendre trois mois avant de parler de prix avec le vendeur.",
        "Formuler un engagement personnel contraire au contrat de sa structure.",
      ],
      exercise: {
        title: "Votre plan d'action personnel",
        instructions:
          "Reprenez les douze engagements et adaptez-les à ce que vous ferez réellement. N'inscrivez que ce que vous tiendrez : un engagement non tenu coûte plus cher que l'absence d'engagement.",
        fields: [
          { id: "plan", label: "Vos engagements, avec leurs délais", multiline: true },
          { id: "sortie", label: "Votre formulation du mécanisme de sortie", multiline: true },
          { id: "etape", label: "Ce que contiendra votre point d'étape à 30 jours", multiline: true },
        ],
        checklist: [
          "Chaque engagement comporte un délai précis",
          "Chaque engagement peut être prouvé au vendeur",
          "Aucun engagement ne porte sur un délai ou un prix de vente",
          "Le mécanisme de sortie est présenté spontanément",
          "Le point d'étape est daté dès la signature",
          "Le point d'étape contient des chiffres, pas des impressions",
          "Le plan tient sur une seule page",
        ],
      },
      quiz: [
        {
          id: "md1q1",
          type: "qcm",
          question: "Que peut légitimement promettre un conseiller dans son plan d'action ?",
          options: [
            "Une vente en moins de trois mois",
            "Un compte rendu écrit hebdomadaire et un point d'étape chiffré à trente jours",
            "Un prix de vente minimum",
            "Un nombre garanti de visites",
          ],
          answer: 1,
          explanation:
            "Un professionnel s'engage sur ses moyens, qui dépendent de lui. Le délai, le prix et le nombre de visites dépendent du marché : les promettre est à la fois faux et destructeur.",
          skill: "mandat",
          topic: "plan-action",
        },
        {
          id: "md1q2",
          type: "qcm",
          question: "Trente jours après la mise en vente : beaucoup de visites, aucune offre. Diagnostic le plus probable ?",
          options: [
            "Le marché est totalement bloqué",
            "L'annonce promet plus que la réalité, ou le prix est supérieur de 5 à 10 % au marché",
            "Les photos sont trop nombreuses",
            "Il faut attendre trois mois de plus",
          ],
          answer: 1,
          explanation:
            "Des visites nombreuses prouvent que l'annonce attire. L'absence d'offre indique un décalage entre ce que les visiteurs découvrent et le prix demandé.",
          skill: "commercialisation",
          topic: "plan-action",
        },
        {
          id: "md1q3",
          type: "vraifaux",
          question: "Présenter spontanément les modalités de sortie du mandat affaiblit votre position.",
          answer: 1,
          explanation:
            "Faux. C'est l'inverse : l'objection réelle du vendeur est la peur de se tromper. Y répondre avant qu'elle soit posée réduit le risque perçu et facilite l'obtention de l'exclusivité.",
          skill: "mandat",
          topic: "plan-action",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Mandat de vente", url: "https://www.service-public.fr/particuliers/vosdroits/F1638" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "md2",
      moduleId: "mandat",
      title: "Présenter et défendre ses honoraires",
      summary:
        "Parler d'argent sans gêne, expliquer ce que la somme achète, et ne pas céder à la première pression.",
      duration: 16,
      difficulty: "intermediaire",
      skills: ["mandat", "negociation", "psychologie"],
      objectives: [
        "Annoncer un montant d'honoraires sans hésitation",
        "Expliquer ce que les honoraires financent concrètement",
        "Répondre à « c'est trop cher » et « le concurrent est moins cher »",
        "Décider quand une remise est justifiée, et à quelle contrepartie",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "L'immense majorité des remises accordées par les débutants ne sont pas demandées par le client : elles sont proposées spontanément, par gêne. La première compétence à acquérir est donc de savoir annoncer un montant, calmement, et de se taire ensuite.",
        },
        { type: "heading", text: "L'annonce" },
        {
          type: "dialogue",
          title: "Deux annonces, deux résultats",
          lines: [
            {
              speaker: "Annonce hésitante",
              text:
                "« Alors, pour les honoraires, on est normalement à 4 %, mais bon, on peut toujours en discuter, hein, c'est négociable… »",
              tone: "bad",
            },
            {
              speaker: "Annonce assumée",
              text:
                "« Mes honoraires sont de 4 % du prix de vente, soit 11 200 € pour votre bien, et ils ne sont dus que si la vente se réalise. Voilà ce qu'ils financent : [liste]. »  Puis silence.",
              tone: "good",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le silence après le montant",
          text:
            "Annoncez, puis taisez-vous. La gêne pousse à ajouter « mais on peut voir », et c'est exactement cette phrase qui déclenche la négociation. Si le client trouve cela cher, il le dira — et vous répondrez alors sur la valeur, pas sur le prix.",
        },
        { type: "heading", text: "Ce que les honoraires financent réellement" },
        {
          type: "list",
          items: [
            "Le temps réellement passé : entre 40 et 80 heures pour une vente ordinaire, du premier rendez-vous à la remise des clés.",
            "Les frais engagés à l'avance et à perte si la vente n'aboutit pas : diagnostics avancés parfois, reportage photo, diffusion sur les portails, communication locale.",
            "La couverture assurantielle et le cadre réglementaire dont bénéficie le client.",
            "La qualification des acquéreurs, qui évite au vendeur de faire visiter à des personnes non finançables.",
            "La négociation, conduite par quelqu'un qui n'est pas émotionnellement impliqué.",
            "La coordination des intervenants et le suivi de l'instruction jusqu'à l'acte.",
            "Le risque porté : aucune rémunération si la vente ne se fait pas.",
          ],
        },
        {
          type: "example",
          title: "Le calcul que vous pouvez montrer",
          text:
            "« Sur une vente moyenne, je consacre entre 40 et 80 heures à un dossier, et j'avance des frais. Sur dix estimations, j'obtiens trois mandats, et sur trois mandats, deux ventes aboutissent. Mes honoraires ne rémunèrent pas seulement votre dossier : ils rémunèrent l'ensemble d'une activité qui ne facture que les réussites. C'est ce modèle qui vous protège : si je ne vends pas, vous ne payez rien. »",
        },
        { type: "heading", text: "Les deux objections principales" },
        {
          type: "objection",
          objection: "C'est trop cher.",
          understand:
            "Le client compare une somme à zéro. Il n'a pas encore en tête ce que cette somme produit. C'est une objection de valeur, pas de prix.",
          answers: [
            "« Je comprends : 11 200 €, dit comme ça, c'est une somme importante. Posons la question autrement : si je vends votre bien 15 000 € de plus qu'une vente entre particuliers, et six semaines plus vite, mes honoraires vous ont-ils coûté ou rapporté ? »",
            "« Ce que je peux vous montrer, ce sont les écarts constatés sur mon secteur entre les biens vendus entre particuliers et ceux vendus par un professionnel. Vous jugerez. »",
            "« Si vous pensez que je ne suis pas capable de créer cette valeur, alors vous avez raison : ne me payez pas. C'est justement pour cela que je ne suis payé qu'au résultat. »",
          ],
          avoid:
            "Ne répondez jamais « oui mais c'est le tarif de l'agence ». Vous transférez la responsabilité et vous perdez la conversation.",
        },
        {
          type: "objection",
          objection: "L'agence d'à côté prend 3 %.",
          understand:
            "Le client teste, et il compare deux chiffres sans comparer deux prestations. Il vous demande implicitement de justifier l'écart.",
          answers: [
            "« C'est possible, et c'est un choix respectable. La vraie question n'est pas le pourcentage, c'est le prix net que vous aurez dans la poche à la fin. Un point d'honoraires en moins ne vaut rien si le bien se vend 15 000 € moins cher ou trois mois plus tard. »",
            "« Je ne vais pas m'aligner, et je vais vous dire pourquoi : si je baisse mes honoraires devant vous en dix secondes, quelle confiance pouvez-vous avoir dans ma capacité à défendre votre prix face à un acquéreur qui négocie ? »",
            "« Comparons ce qui est comparable : voici mes douze engagements écrits. Demandez-lui les siens. Si les prestations sont identiques, prenez le moins cher, c'est logique. »",
          ],
          avoid:
            "Ne critiquez pas le confrère et ne vous alignez pas dans la seconde. L'argument du « si je cède sur mes honoraires, comment défendrai-je votre prix ? » est le plus efficace du métier.",
        },
        {
          type: "callout",
          variant: "quote",
          title: "L'argument central, à retenir mot pour mot",
          text:
            "« Si je cède sur mes honoraires en dix secondes, comment croyez-vous que je défendrai votre prix face à un acquéreur qui négocie ? » Cette phrase déplace le sujet du coût vers la compétence en négociation, qui est exactement ce que le vendeur achète.",
        },
        { type: "heading", text: "Quand une remise est-elle justifiée ?" },
        {
          type: "paragraph",
          text:
            "Une remise n'est jamais justifiée par la pression. Elle peut l'être par une contrepartie réelle qui réduit votre coût ou votre risque. Dans ce cas, elle se négocie, elle ne se concède pas.",
        },
        {
          type: "table",
          head: ["Contrepartie", "Pourquoi elle justifie un ajustement"],
          rows: [
            ["Passage en mandat exclusif", "Réduit le risque de travailler pour rien"],
            ["Deux biens confiés simultanément", "Mutualise le temps de dossier et les déplacements"],
            ["Prix de présentation aligné sur votre fourchette", "Réduit fortement la durée de commercialisation"],
            ["Vendeur qui fournit un dossier complet immédiatement", "Économise plusieurs heures de collecte"],
            ["Recommandation formelle et témoignage écrit", "Valeur commerciale réelle, à condition d'être sincère"],
          ],
          note:
            "Toute modification du montant ou du taux doit figurer au mandat ou dans un avenant écrit. Un accord verbal sur les honoraires n'a aucune valeur.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["honoraires", "net-vendeur", "fai", "mandat-exclusif", "objection", "negociation"],
        },
      ],
      keyPoints: [
        "Annoncer le montant clairement, puis se taire.",
        "Les honoraires financent du temps, des frais avancés, un risque porté et une compétence.",
        "« C'est trop cher » est une objection de valeur : répondre par la valeur créée.",
        "Ne jamais s'aligner immédiatement sur un concurrent moins cher.",
        "« Si je cède sur mes honoraires, comment défendrai-je votre prix ? » est l'argument central.",
        "Une remise se négocie contre une contrepartie, elle ne se concède jamais.",
      ],
      mistakes: [
        "Proposer une remise avant même que le client ne demande.",
        "Justifier ses honoraires par « c'est le tarif de l'agence ».",
        "S'aligner sur un concurrent dans la seconde.",
        "Accepter une remise sans contrepartie et sans avenant écrit.",
      ],
      caseStudy: {
        title: "Le vendeur qui négocie fermement",
        context:
          "Vous avez présenté une estimation solide, votre plan d'action et vos honoraires à 4 %, soit 11 200 €. Le vendeur, cadre habitué à négocier, vous dit : « Votre travail me plaît. Mais 11 200 €, c'est beaucoup. Je signe l'exclusivité aujourd'hui si vous descendez à 3 %. Sinon je prends l'autre agence. »",
        tasks: [
          "Analysez ce que ce vendeur achète réellement.",
          "Rédigez votre réponse complète.",
          "Déterminez votre position finale si le vendeur maintient sa demande.",
        ],
        correction: [
          "Analyse : le vendeur a validé votre travail — il le dit explicitement. Il négocie parce que c'est sa nature professionnelle, non parce qu'il doute de vous. La menace de partir chez le concurrent est un levier de négociation classique, pas nécessairement une intention.",
          "Réponse : « Merci, ça me fait plaisir que le travail vous plaise. Je vais vous répondre franchement, et vous allez comprendre ma logique : si je descends de 4 à 3 % en dix secondes, je viens de vous prouver que mon premier prix n'était pas justifié. Et surtout, vous engagez pour vendre votre bien quelqu'un qui cède à la première pression. Face à un acquéreur qui vous proposera 30 000 € de moins, c'est exactement cette capacité-là que vous voudrez avoir de votre côté. »",
          "Ouverture négociée : « Ce que je peux faire, en revanche, c'est vous proposer un ajustement contre une contrepartie réelle : 3,7 % si nous fixons le prix de présentation dans ma fourchette plutôt que 8 000 € au-dessus. Cela raccourcit la commercialisation, donc cela réduit mon coût. C'est un échange, pas une remise. »",
          "Position finale si le vendeur maintient : « Alors je crois qu'il faut que vous preniez l'autre agence, et je le dis sans amertume. Je préfère vous perdre aujourd'hui que travailler quatre mois dans des conditions où je ne serai pas bon pour vous. Gardez mon numéro : si dans six semaines vous voulez un second regard, appelez-moi. » Dans une proportion notable de cas, ce vendeur signe. Dans les autres, il rappelle plus tard.",
        ],
      },
      quiz: [
        {
          id: "md2q1",
          type: "qcm",
          question: "Après avoir annoncé le montant de vos honoraires, que faites-vous ?",
          options: [
            "Vous ajoutez « mais c'est négociable »",
            "Vous vous taisez",
            "Vous justifiez immédiatement pendant deux minutes",
            "Vous proposez une remise pour signer tout de suite",
          ],
          answer: 1,
          explanation:
            "Le silence après l'annonce évite d'ouvrir soi-même la négociation. Si le client réagit, on répond alors sur la valeur créée, pas sur le montant.",
          skill: "negociation",
          topic: "honoraires",
        },
        {
          id: "md2q2",
          type: "qcm",
          question: "Quel argument est le plus efficace face à « le concurrent prend 1 % de moins » ?",
          options: [
            "« Ce concurrent travaille mal »",
            "« Si je cède sur mes honoraires en dix secondes, comment croyez-vous que je défendrai votre prix face à un acquéreur ? »",
            "« C'est le tarif de mon réseau, je ne peux rien faire »",
            "« D'accord, je m'aligne »",
          ],
          answer: 1,
          explanation:
            "Cet argument déplace la discussion du coût vers la compétence en négociation — précisément ce que le vendeur cherche à acheter. Il est cohérent, vérifiable et non agressif.",
          skill: "negociation",
          topic: "honoraires",
        },
        {
          id: "md2q3",
          type: "vraifaux",
          question: "Une remise d'honoraires accordée sans contrepartie renforce la confiance du vendeur.",
          answer: 1,
          explanation:
            "Faux. Elle démontre que le prix initial n'était pas fondé et qu'une pression suffit à vous faire céder — ce qui inquiète légitimement sur votre capacité à défendre le prix du bien.",
          skill: "negociation",
          topic: "honoraires",
        },
        {
          id: "md2q4",
          type: "qcm",
          question: "Quelle contrepartie peut justifier un ajustement d'honoraires ?",
          options: [
            "La sympathie du vendeur",
            "Le passage en mandat exclusif avec un prix de présentation aligné sur votre fourchette",
            "La promesse verbale d'une recommandation future",
            "L'ancienneté de la relation",
          ],
          answer: 1,
          explanation:
            "L'exclusivité et un prix réaliste réduisent réellement votre risque et la durée de commercialisation. Un ajustement devient alors un échange économique cohérent, formalisé au mandat.",
          skill: "mandat",
          topic: "honoraires",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Honoraires d'agence immobilière", url: "https://www.service-public.fr/particuliers/vosdroits/F1638" },
        { label: "DGCCRF — Information sur les prix", url: "https://www.economie.gouv.fr/dgccrf" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
