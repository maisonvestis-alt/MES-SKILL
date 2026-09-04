import type { CourseModule } from "@/lib/types";

export const moduleFondamentaux: CourseModule = {
  id: "fondamentaux",
  level: 1,
  title: "Fondamentaux immobiliers",
  subtitle: "Le vocabulaire, les surfaces, les droits et les documents",
  description:
    "La matière de base du métier. Sans ce socle, vous ne pouvez ni estimer, ni rédiger une annonce exacte, ni répondre à un acquéreur. Chaque notion est expliquée à partir de zéro, puis reformulée telle que vous la direz à un client.",
  icon: "📚",
  skills: ["fondamentaux", "copropriete", "juridique"],
  requires: ["decouverte"],
  outcomes: [
    "Employer le vocabulaire immobilier avec exactitude, sans jargon inutile",
    "Distinguer surface habitable, surface Carrez, surface de plancher et emprise au sol",
    "Identifier qui a le pouvoir de vendre un bien selon sa situation juridique",
    "Lire un dossier de copropriété et repérer les points sensibles",
    "Réunir le dossier complet d'un bien dès la prise de mandat",
  ],
  lessons: [
    {
      id: "f1",
      moduleId: "fondamentaux",
      title: "Les surfaces : habitable, Carrez, plancher, emprise au sol",
      summary:
        "Comprendre pourquoi un même appartement a trois surfaces différentes, et laquelle employer dans quelle situation.",
      duration: 16,
      difficulty: "debutant",
      skills: ["fondamentaux"],
      objectives: [
        "Définir chacune des quatre surfaces et savoir ce qu'elle inclut ou exclut",
        "Choisir la bonne surface selon le contexte : annonce, vente, location, urbanisme",
        "Comprendre la sanction en cas d'erreur de mesurage Carrez",
        "Éviter les erreurs de surface qui font annuler ou renégocier une vente",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "C'est le premier piège du métier. Un propriétaire vous dit « mon appartement fait 80 m² ». L'ancien acte indique 74,20 m². Le diagnostiqueur mesure 72,85 m². Le service urbanisme parle de 91 m². Personne ne ment : ce ne sont pas les mêmes surfaces.",
        },
        {
          type: "definition",
          term: "Surface habitable",
          simple:
            "La surface où l'on vit réellement : on mesure le sol des pièces, puis on retire les murs, cloisons, marches, gaines et embrasures de portes et fenêtres.",
          pro:
            "Surface de plancher construite, après déduction des surfaces occupées par les murs, cloisons, marches et cages d'escalier, gaines, embrasures de portes et de fenêtres. Les locaux d'une hauteur sous plafond inférieure à 1,80 m ne sont pas comptés. Caves, sous-sols, remises, garages, terrasses, balcons, vérandas, séchoirs extérieurs et combles non aménagés en sont exclus.",
          why:
            "C'est la surface de référence des baux d'habitation vides : le bail doit la mentionner. C'est aussi la surface la plus proche de ce que l'occupant ressent.",
        },
        {
          type: "definition",
          term: "Surface Carrez",
          simple:
            "La surface officielle annoncée lors de la vente d'un lot en copropriété. Très proche de la surface habitable, avec quelques différences.",
          pro:
            "Superficie privative des lots de copropriété : surface des planchers des locaux clos et couverts après déduction des murs, cloisons, marches, cages d'escalier, gaines et embrasures. Les surfaces d'une hauteur sous plafond inférieure à 1,80 m ne sont pas prises en compte. Caves, garages, emplacements de stationnement et lots inférieurs à 8 m² sont exclus.",
          why:
            "Elle protège l'acquéreur d'un lot de copropriété contre une surface annoncée fantaisiste, en lui ouvrant une action en diminution du prix.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "La différence pratique entre habitable et Carrez",
          text:
            "Une véranda close et couverte peut entrer dans la surface Carrez sans entrer dans la surface habitable. Inversement, un lot annexe de moins de 8 m² est exclu du Carrez mais peut être habitable. Sur la majorité des appartements standards, les deux surfaces sont proches ou identiques — mais « proches » n'est pas « égales ». À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "definition",
          term: "Surface de plancher",
          simple:
            "Une surface utilisée uniquement par l'urbanisme, pour déterminer si vous avez besoin d'une autorisation avant de construire.",
          pro:
            "Somme des surfaces de plancher closes et couvertes sous une hauteur de plafond supérieure à 1,80 m, calculée à partir du nu intérieur des façades, après déductions réglementaires (trémies, locaux techniques, stationnement, combles non aménageables).",
          why:
            "Elle sert à savoir si un projet relève de la déclaration préalable, du permis de construire, ou du recours obligatoire à un architecte.",
        },
        {
          type: "definition",
          term: "Emprise au sol",
          simple: "L'ombre du bâtiment sur le terrain : la place qu'il occupe au sol, débords compris.",
          pro:
            "Projection verticale du volume de la construction, tous débords et surplombs inclus. Elle s'apprécie conjointement avec la surface de plancher pour déterminer le régime d'autorisation applicable.",
          why:
            "Un carport ou un auvent ne crée pas de surface de plancher mais crée bien de l'emprise au sol : ils peuvent donc nécessiter une autorisation.",
        },
        {
          type: "table",
          title: "Quelle surface dans quelle situation",
          head: ["Situation", "Surface à employer"],
          rows: [
            ["Vente d'un lot en copropriété", "Surface Carrez (mesurage obligatoire, mentionné à l'acte)"],
            ["Vente d'une maison individuelle", "Surface habitable (le mesurage Carrez n'est pas requis)"],
            ["Bail d'habitation vide", "Surface habitable, mentionnée au bail"],
            ["Annonce immobilière", "La surface de référence pertinente, clairement nommée"],
            ["Projet de travaux ou d'extension", "Surface de plancher et emprise au sol"],
            ["Estimation", "La surface pondérée : principale + annexes affectées d'un coefficient"],
          ],
          note:
            "Les obligations de mesurage et de mention dépendent de la nature du bien et du contrat. À vérifier selon la réglementation en vigueur.",
        },
        { type: "heading", text: "La sanction du mesurage Carrez" },
        {
          type: "paragraph",
          text:
            "Si la surface réelle est inférieure de plus de 5 % à celle mentionnée dans l'acte, l'acquéreur peut demander une diminution du prix proportionnelle à la différence constatée. L'action est enfermée dans un délai décompté à partir de l'acte authentique. C'est l'une des rares sanctions vraiment automatiques du droit de la vente immobilière.",
        },
        {
          type: "example",
          title: "Le calcul de la diminution",
          text:
            "Appartement vendu 320 000 € pour 72 m² annoncés, soit 4 444 €/m². Mesurage contradictoire : 67 m². L'écart est de 5 m², soit 6,94 % — au-delà du seuil de 5 %. La diminution demandée porte sur les 5 m² manquants, soit environ 22 220 €. Une erreur de mesurage n'est jamais anodine.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "L'erreur du débutant : recopier",
          text:
            "Recopier la surface de l'ancien acte ou celle annoncée par le propriétaire, sans mesurage récent, est la faute la plus fréquente et la plus coûteuse. Le bien a pu être modifié : cloison ajoutée, véranda fermée, combles aménagés. Faites toujours établir un mesurage à jour par un professionnel.",
        },
        { type: "heading", text: "Les surfaces annexes et la pondération" },
        {
          type: "paragraph",
          text:
            "Un balcon, une terrasse, une cave ou un jardin ne sont pas des surfaces habitables, mais ils ont de la valeur. En estimation, on les intègre au moyen d'un coefficient de pondération : on les ramène à un équivalent de surface principale. Ces coefficients ne sont pas une norme légale : ce sont des usages de marché à valider localement.",
        },
        {
          type: "table",
          title: "Ordres de grandeur de pondération (à valider par vos comparables locaux)",
          head: ["Annexe", "Coefficient usuel", "Ce qui le fait varier"],
          rows: [
            ["Balcon", "0,15 à 0,4", "Profondeur, exposition, vue, ville"],
            ["Terrasse accessible de plain-pied", "0,25 à 0,5", "Surface, intimité, exposition"],
            ["Cave", "0,05 à 0,2", "Rareté locale, accessibilité, sécheresse"],
            ["Grenier non aménagé", "0,1 à 0,3", "Hauteur, accès, potentiel d'aménagement"],
            ["Garage fermé", "Souvent valorisé en valeur absolue", "Tension locale du stationnement"],
            ["Jardin (maison)", "Traité à part, en valeur", "Constructibilité résiduelle, exposition"],
          ],
          note:
            "Ces coefficients sont pédagogiques. Sur votre secteur, vérifiez-les par des ventes comparables réelles : c'est le seul argument défendable devant un vendeur.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Comment l'expliquer à un vendeur",
          text:
            "« Votre terrasse de 20 m² ne vaut pas 20 m² de salon, mais elle vaut quelque chose. Sur notre secteur, les ventes comparables montrent qu'elle se valorise autour d'un tiers d'un mètre carré habitable. C'est pour cela que je raisonne en surface pondérée. » Une explication claire vaut mieux qu'un chiffre imposé.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["surface-habitable", "surface-carrez", "surface-plancher", "emprise-au-sol", "ponderation", "prix-m2"],
        },
      ],
      keyPoints: [
        "Surface habitable : ce qui est vécu, référence des baux d'habitation vides.",
        "Surface Carrez : la superficie privative des lots de copropriété, obligatoire à la vente.",
        "Surface de plancher et emprise au sol : notions d'urbanisme, jamais commerciales.",
        "Un écart Carrez supérieur à 5 % ouvre une action en diminution du prix.",
        "Les surfaces annexes s'intègrent par pondération, justifiée par des comparables locaux.",
        "Ne jamais recopier une surface : faire mesurer.",
      ],
      mistakes: [
        "Écrire « 80 m² » dans une annonce sur la seule parole du propriétaire.",
        "Confondre surface habitable et surface Carrez dans un document contractuel.",
        "Ajouter la terrasse à la surface annoncée pour rendre le bien plus attractif.",
        "Appliquer des coefficients de pondération standards sans les valider localement.",
      ],
      caseStudy: {
        title: "Trois surfaces pour un même appartement",
        context:
          "Appartement au 2e étage d'une copropriété. Le propriétaire annonce 85 m². Vous relevez : séjour 28 m², cuisine 9 m², trois chambres de 12, 11 et 10 m², salle de bains 5 m², WC 1,5 m², entrée et dégagement 6 m². S'ajoutent : une véranda close et couverte de 8 m² (hauteur 2,40 m), un balcon de 6 m², une cave de 4 m². Une partie de la troisième chambre est mansardée, 2 m² sous 1,60 m.",
        tasks: [
          "Calculez la surface habitable.",
          "Calculez la surface Carrez.",
          "Proposez une surface pondérée pour l'estimation, en justifiant vos coefficients.",
          "Rédigez la phrase que vous direz au propriétaire qui annonçait 85 m².",
        ],
        correction: [
          "Surface des pièces : 28 + 9 + 12 + 11 + 10 + 5 + 1,5 + 6 = 82,5 m², dont 2 m² sous 1,60 m à retirer, soit 80,5 m².",
          "Surface habitable : 80,5 m². La véranda est généralement exclue de la surface habitable ; le balcon et la cave le sont toujours.",
          "Surface Carrez : la véranda, close et couverte, sous une hauteur supérieure à 1,80 m, entre en principe dans le mesurage privatif, soit environ 88,5 m². Le balcon et la cave restent exclus. Ce point doit être confirmé par le diagnostiqueur : c'est précisément son métier.",
          "Surface pondérée d'estimation : 80,5 m² habitables + véranda 8 m² × 0,6 (espace fermé mais peu confortable thermiquement) + balcon 6 m² × 0,25 + cave 4 m² × 0,1 ≈ 87 m² pondérés. Ces coefficients doivent être validés par vos comparables.",
          "Phrase au propriétaire : « Vous annoncez 85 m², et vous avez raison de compter la véranda. Le mesurage officiel donnera probablement une surface habitable autour de 80 m² et une surface Carrez plus élevée. Nous ferons mesurer par un professionnel, ce qui protège la vente : une erreur de plus de 5 % permettrait à l'acquéreur de demander une baisse de prix après la signature. »",
        ],
      },
      quiz: [
        {
          id: "f1q1",
          type: "qcm",
          question: "Quelle surface doit obligatoirement figurer dans l'acte de vente d'un appartement en copropriété ?",
          options: ["La surface habitable", "La surface Carrez", "La surface de plancher", "L'emprise au sol"],
          answer: 1,
          explanation:
            "Le mesurage de la superficie privative — dit « loi Carrez » — s'impose pour la vente d'un lot de copropriété. La surface habitable est, elle, la référence des baux d'habitation vides.",
          skill: "fondamentaux",
          topic: "surfaces",
        },
        {
          id: "f1q2",
          type: "qcm",
          question: "Un mesurage révèle 67 m² là où l'acte annonçait 72 m². Que peut demander l'acquéreur ?",
          options: [
            "Rien, la tolérance est de 10 %",
            "L'annulation pure et simple de la vente",
            "Une diminution du prix proportionnelle à la surface manquante, l'écart dépassant 5 %",
            "Le remboursement des frais de notaire",
          ],
          answer: 2,
          explanation:
            "L'écart est de 6,94 %, supérieur au seuil de 5 %. L'acquéreur peut demander une diminution du prix proportionnelle, dans le délai légal décompté à partir de l'acte authentique.",
          skill: "fondamentaux",
          topic: "surfaces",
        },
        {
          id: "f1q3",
          type: "vraifaux",
          question: "Une pièce mansardée dont la hauteur est de 1,60 m entre dans la surface habitable.",
          answer: 1,
          explanation:
            "Faux. Les locaux d'une hauteur sous plafond inférieure à 1,80 m ne sont pris en compte ni dans la surface habitable, ni dans le mesurage Carrez.",
          skill: "fondamentaux",
          topic: "surfaces",
        },
        {
          id: "f1q4",
          type: "qcm",
          question: "Un propriétaire souhaite ajouter une véranda. Quelle notion de surface détermine l'autorisation nécessaire ?",
          options: [
            "La surface habitable",
            "La surface Carrez",
            "La surface de plancher et l'emprise au sol",
            "La surface pondérée",
          ],
          answer: 2,
          explanation:
            "Les régimes d'autorisation d'urbanisme s'apprécient au regard de la surface de plancher créée et de l'emprise au sol. Les surfaces habitable et Carrez n'ont aucun rôle en urbanisme.",
          skill: "urbanisme",
          topic: "surfaces",
        },
        {
          id: "f1q5",
          type: "qcm",
          question: "Comment justifier un coefficient de pondération devant un vendeur ?",
          options: [
            "En citant le barème national officiel des pondérations",
            "En s'appuyant sur des ventes comparables réelles du secteur",
            "En expliquant que c'est la pratique de l'agence",
            "En appliquant systématiquement 0,5 pour toutes les annexes",
          ],
          answer: 1,
          explanation:
            "Il n'existe pas de barème officiel : les coefficients sont des usages de marché. Seules des ventes comparables locales rendent la pondération défendable.",
          skill: "estimation",
          topic: "surfaces",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Loi Carrez", url: "https://www.service-public.fr/particuliers/vosdroits/F2604" },
        { label: "Service-Public.fr — Surface habitable et surface de plancher", url: "https://www.service-public.fr/particuliers/vosdroits/F35798" },
        { label: "Service-Public.fr — Surface de plancher et emprise au sol", url: "https://www.service-public.fr/particuliers/vosdroits/F32005" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "f2",
      moduleId: "fondamentaux",
      title: "Qui a le droit de vendre ? Propriété, démembrement, indivision, SCI",
      summary:
        "Identifier dès le premier rendez-vous qui doit signer le mandat et l'acte — la vérification qui évite les mandats morts-nés.",
      duration: 15,
      difficulty: "debutant",
      skills: ["fondamentaux", "juridique"],
      objectives: [
        "Distinguer usus, fructus et abusus, et comprendre le démembrement",
        "Savoir qui doit consentir à la vente selon la situation juridique",
        "Repérer les situations qui allongent ou bloquent une vente",
        "Poser les bonnes questions dès le premier rendez-vous",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Une question simple, posée en début de rendez-vous, évite des mois de travail perdu : « Qui est propriétaire du bien, exactement ? » Une réponse floue est un signal. Voici les quatre situations que vous rencontrerez et ce qu'elles impliquent.",
        },
        {
          type: "definition",
          term: "Pleine propriété",
          simple: "Vous pouvez utiliser le bien, en tirer des revenus et le vendre. Vous avez tous les droits.",
          pro:
            "Réunion des trois attributs du droit de propriété : l'usus (utiliser), le fructus (percevoir les fruits, dont les loyers) et l'abusus (disposer, donc vendre ou donner).",
          why:
            "C'est la situation la plus simple : le ou les propriétaires signent, la vente peut avancer sans contrainte particulière.",
        },
        { type: "heading", text: "Situation 1 — Le démembrement : usufruit et nue-propriété" },
        {
          type: "paragraph",
          text:
            "Le démembrement sépare les droits entre deux personnes. L'usufruitier habite le bien ou en perçoit les loyers ; le nu-propriétaire possède les murs mais ne peut ni y habiter, ni les louer. Cette situation naît le plus souvent d'une succession ou d'une donation.",
        },
        {
          type: "compare",
          left: {
            title: "L'usufruitier peut",
            items: [
              "Habiter le bien",
              "Le louer et percevoir les loyers",
              "Vendre son seul droit d'usufruit",
              "Doit assurer l'entretien courant",
            ],
          },
          right: {
            title: "L'usufruitier ne peut pas",
            items: [
              "Vendre le bien en pleine propriété seul",
              "Modifier la destination du bien",
              "Priver le nu-propriétaire de son droit",
              "Négliger le bien au point d'en altérer la substance",
            ],
          },
        },
        {
          type: "callout",
          variant: "warning",
          title: "Conséquence pratique",
          text:
            "Pour vendre en pleine propriété, l'usufruitier ET le nu-propriétaire doivent consentir. Si la mère usufruitière veut vendre mais que l'un des trois enfants nus-propriétaires refuse, la vente en pleine propriété est bloquée. Vérifiez-le avant de signer un mandat.",
        },
        { type: "heading", text: "Situation 2 — L'indivision" },
        {
          type: "definition",
          term: "Indivision",
          simple:
            "Plusieurs personnes possèdent ensemble le même bien, chacune pour une quote-part, sans découpage matériel.",
          pro:
            "Situation dans laquelle plusieurs personnes sont titulaires de droits de même nature sur un même bien, sans division matérielle. La vente du bien indivis requiert en principe l'unanimité des indivisaires ; des procédures spécifiques existent en cas de blocage.",
          why:
            "L'indivision naît d'une succession, d'un achat à plusieurs ou d'un divorce. C'est une situation extrêmement fréquente.",
        },
        {
          type: "example",
          title: "Le mandat mort-né",
          text:
            "Un conseiller signe un mandat avec Monsieur, qui lui dit « ma sœur est d'accord ». Trois mois plus tard, une offre au prix arrive. La sœur, propriétaire d'un tiers, refuse de vendre : elle voulait 20 000 € de plus. Trois mois de travail, une réputation entamée auprès de l'acquéreur, et aucune rémunération. Rien de tout cela n'était imprévisible.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "La règle du mandat",
          text:
            "Tous les titulaires de droits doivent signer le mandat. Pas « donner leur accord au téléphone » : signer. Si l'un est éloigné, il existe des solutions (signature électronique, pouvoir donné à un autre indivisaire). Mais il faut les mettre en place au début, jamais quand une offre arrive.",
        },
        { type: "heading", text: "Situation 3 — La SCI" },
        {
          type: "paragraph",
          text:
            "Quand le bien appartient à une société civile immobilière, ce n'est plus une personne qui vend, c'est la société. Deux conséquences : il faut vérifier ce que les statuts autorisent au gérant, et il faut savoir si l'on vend l'immeuble ou les parts sociales — ce sont deux opérations totalement différentes.",
        },
        {
          type: "table",
          head: ["", "Vente de l'immeuble par la SCI", "Cession des parts sociales"],
          rows: [
            ["Ce qui change de main", "Le bien immobilier", "Les parts de la société, qui continue de détenir le bien"],
            ["Qui décide", "Le gérant, dans les limites fixées par les statuts", "Les associés, selon les clauses d'agrément des statuts"],
            ["Nature de l'opération", "Transaction immobilière classique", "Cession de droits sociaux, hors champ habituel de l'agence"],
            ["Interlocuteur clé", "Notaire", "Notaire et expert-comptable"],
          ],
          note:
            "La fiscalité et les formalités diffèrent nettement entre les deux. Ne conseillez jamais l'une plutôt que l'autre : orientez vers les professionnels compétents.",
        },
        { type: "heading", text: "Situation 4 — La succession en cours" },
        {
          type: "paragraph",
          text:
            "Quand le propriétaire est décédé, la vente ne peut avancer qu'une fois la dévolution successorale établie par le notaire et l'attestation immobilière publiée. Ce préalable prend couramment plusieurs mois. Vous pouvez travailler pendant cette période — estimation, préparation du dossier, photos — mais vous devez annoncer le calendrier réel.",
        },
        {
          type: "list",
          title: "Les questions à poser en rendez-vous, dans cet ordre",
          ordered: true,
          items: [
            "« Qui figure sur le titre de propriété ? » — et non « êtes-vous propriétaire ? »",
            "« Avez-vous acheté ce bien, ou l'avez-vous reçu par succession ou donation ? »",
            "« Y a-t-il un usufruit, une donation entre époux, une clause particulière ? »",
            "« Toutes les personnes concernées sont-elles d'accord sur le principe et sur le prix ? »",
            "« Le bien est-il détenu directement ou par une société ? »",
            "« Le bien est-il loué, et si oui sous quel type de bail ? »",
            "« Pouvez-vous me transmettre votre titre de propriété ? » — la demande qui règle tout.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le titre de propriété, votre meilleur outil",
          text:
            "Demandez systématiquement l'acte d'acquisition. Il contient l'identité exacte des propriétaires, la désignation du bien, les servitudes, l'origine de propriété et souvent le prix d'achat. Une demande banale, une information considérable.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["pleine-propriete", "usufruit", "nue-propriete", "indivision", "sci", "succession", "servitude"],
        },
      ],
      keyPoints: [
        "Vendre en pleine propriété suppose l'accord de l'usufruitier et du nu-propriétaire.",
        "La vente d'un bien indivis requiert en principe l'unanimité des indivisaires.",
        "Tous les titulaires de droits doivent signer le mandat, pas seulement donner leur accord.",
        "Vendre l'immeuble d'une SCI et céder des parts de SCI sont deux opérations distinctes.",
        "Une succession non réglée retarde la vente de plusieurs mois : annoncez-le franchement.",
        "Le titre de propriété répond à la plupart des questions : demandez-le systématiquement.",
      ],
      mistakes: [
        "Signer un mandat avec un seul indivisaire sur trois.",
        "Croire un accord verbal donné « au nom de la famille ».",
        "Confondre vente de l'immeuble et cession de parts de SCI.",
        "Ne pas demander le titre de propriété au premier rendez-vous.",
      ],
      quiz: [
        {
          id: "f2q1",
          type: "qcm",
          question: "Une mère détient l'usufruit, ses deux enfants la nue-propriété. Qui doit consentir à la vente en pleine propriété ?",
          options: [
            "La mère seule, en tant qu'usufruitière",
            "Les deux enfants seuls, en tant que nus-propriétaires",
            "La mère et les deux enfants",
            "Le notaire, qui représente la famille",
          ],
          answer: 2,
          explanation:
            "La vente en pleine propriété suppose la réunion de tous les droits démembrés : l'usufruitier et les nus-propriétaires doivent tous consentir.",
          skill: "juridique",
          topic: "propriete",
        },
        {
          id: "f2q2",
          type: "vraifaux",
          question: "Un mandat signé par un seul indivisaire sur trois permet de vendre le bien.",
          answer: 1,
          explanation:
            "Faux. La vente d'un bien indivis requiert en principe l'unanimité. Un mandat incomplet ne permet pas de conclure et expose à une perte totale du travail engagé.",
          skill: "juridique",
          topic: "propriete",
        },
        {
          id: "f2q3",
          type: "qcm",
          question: "Le bien appartient à une SCI. Quelle vérification est prioritaire ?",
          options: [
            "Le montant du capital social",
            "Les pouvoirs du gérant tels que définis par les statuts",
            "L'ancienneté de la société",
            "Le nombre d'associés",
          ],
          answer: 1,
          explanation:
            "Les statuts déterminent si le gérant peut vendre seul ou s'il lui faut une décision collective des associés. C'est la première vérification, avant même la discussion sur le prix.",
          skill: "juridique",
          topic: "propriete",
        },
        {
          id: "f2q4",
          type: "qcm",
          question: "Quel document répond à la plupart des questions sur la situation juridique d'un bien ?",
          options: [
            "Le dernier avis de taxe foncière",
            "Le titre de propriété",
            "Le règlement de copropriété",
            "Le DPE",
          ],
          answer: 1,
          explanation:
            "Le titre de propriété identifie les propriétaires, décrit le bien, mentionne les servitudes et l'origine de propriété. C'est le document à demander en priorité.",
          skill: "fondamentaux",
          topic: "propriete",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Indivision", url: "https://www.service-public.fr/particuliers/vosdroits/F1774" },
        { label: "Service-Public.fr — Usufruit", url: "https://www.service-public.fr/particuliers/vosdroits/F31217" },
        { label: "Service-Public.fr — SCI", url: "https://www.service-public.fr/particuliers/vosdroits/F31782" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "f3",
      moduleId: "fondamentaux",
      title: "Comprendre la copropriété quand on part de zéro",
      summary:
        "Décoder un immeuble collectif : lots, tantièmes, parties communes, syndic, assemblée générale, charges et travaux.",
      duration: 18,
      difficulty: "debutant",
      skills: ["copropriete", "fondamentaux"],
      objectives: [
        "Expliquer ce qu'est une copropriété à un client qui n'y connaît rien",
        "Distinguer parties communes et parties privatives, et savoir où est la frontière",
        "Lire une répartition de charges et comprendre les tantièmes",
        "Repérer les signaux d'alerte d'une copropriété en difficulté",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un appartement ne s'achète jamais seul : on achète un lot dans une organisation collective, avec ses règles, ses comptes et ses décisions. Un conseiller qui ne comprend pas la copropriété fait des annonces fausses, des estimations erronées et des compromis qui cassent.",
        },
        {
          type: "definition",
          term: "Copropriété",
          simple:
            "Un immeuble divisé entre plusieurs propriétaires : chacun possède son logement, et tous possèdent ensemble le hall, l'escalier, la toiture, la façade.",
          pro:
            "Organisation d'un immeuble bâti divisé en lots comprenant chacun une partie privative et une quote-part de parties communes, régie par la loi du 10 juillet 1965 et son décret d'application du 17 mars 1967.",
          why:
            "Elle permet de faire vivre ensemble des propriétaires indépendants dans un même bâtiment, en organisant les décisions et le partage des dépenses.",
        },
        {
          type: "definition",
          term: "Lot de copropriété",
          simple: "Ce que vous achetez : votre appartement, plus une part de l'immeuble entier.",
          pro:
            "Ensemble indissociable formé d'une partie privative et d'une quote-part de parties communes exprimée en tantièmes. Une cave, un parking ou un grenier constituent souvent des lots distincts.",
          why:
            "Cette structure explique pourquoi vous ne pouvez pas vendre votre appartement en gardant sa quote-part de toiture : les deux sont juridiquement liés.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Combien de lots vendez-vous ?",
          text:
            "« Un T3 avec cave et parking » représente très souvent trois lots distincts. Cela change la désignation dans l'acte, parfois les charges, et toujours la vérification à faire. Demandez le règlement de copropriété et l'état descriptif de division.",
        },
        { type: "heading", text: "Les tantièmes : la clé de tout" },
        {
          type: "definition",
          term: "Tantièmes",
          simple:
            "La part de l'immeuble qui correspond à votre lot. Elle détermine ce que vous payez et le poids de votre vote.",
          pro:
            "Quote-part de parties communes affectée à chaque lot, généralement exprimée en millièmes, servant de base à la répartition des charges générales et au calcul des voix en assemblée générale.",
          why:
            "Il faut une clé de répartition objective : sans elle, impossible de répartir un ravalement entre un studio du rez-de-chaussée et un cinq-pièces du dernier étage.",
        },
        {
          type: "example",
          title: "Lire une grille de tantièmes",
          text:
            "Un lot porte 85/1000 de charges générales, 0/1000 d'ascenseur (rez-de-chaussée), 92/1000 de chauffage collectif. Un ravalement de 200 000 € coûtera donc environ 17 000 € à ce lot ; il ne participera pas au remplacement de la cabine d'ascenseur. Cette lecture change une estimation.",
        },
        { type: "heading", text: "Parties communes et parties privatives : où est la frontière ?" },
        {
          type: "table",
          head: ["Élément", "Souvent…", "Vigilance"],
          rows: [
            ["Murs porteurs, planchers, toiture, façade", "Parties communes", "Percer un mur porteur suppose une autorisation d'AG"],
            ["Fenêtres et volets", "Parties communes à usage privatif, fréquemment", "Le remplacement peut relever d'une décision d'AG"],
            ["Canalisations encastrées", "Communes jusqu'à la partie privative", "La frontière exacte figure au règlement de copropriété"],
            ["Revêtements intérieurs, cloisons non porteuses", "Parties privatives", "Libres, sauf clause du règlement"],
            ["Balcon", "Partie commune à usage privatif, fréquemment", "L'étanchéité relève souvent de la copropriété"],
            ["Cave et parking", "Lots privatifs distincts", "Vérifier leur numéro de lot"],
          ],
          note:
            "Ces répartitions sont des tendances : seul le règlement de copropriété de l'immeuble concerné fait foi. À vérifier au cas par cas.",
        },
        { type: "heading", text: "Qui décide quoi : le syndic et l'assemblée générale" },
        {
          type: "steps",
          items: [
            {
              title: "Le syndicat des copropriétaires",
              text: "C'est la collectivité des propriétaires, dotée de la personnalité juridique. Elle est propriétaire des parties communes.",
            },
            {
              title: "L'assemblée générale",
              text: "L'organe qui décide : budget, travaux, contrats, désignation du syndic. Les décisions se prennent selon des règles de majorité différentes selon leur importance.",
            },
            {
              title: "Le conseil syndical",
              text: "Des copropriétaires élus qui assistent et contrôlent le syndic. Un conseil syndical actif est un excellent signe pour un acquéreur.",
            },
            {
              title: "Le syndic",
              text: "Le mandataire qui exécute : comptabilité, appels de fonds, contrats, suivi des travaux, convocation des AG. Il ne décide pas seul des travaux importants.",
            },
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Les majorités en assemblée générale",
          text:
            "La loi de 1965 prévoit plusieurs régimes de majorité selon la nature de la décision : majorité des voix exprimées des présents et représentés, majorité de tous les copropriétaires, double majorité, ou unanimité pour les décisions les plus lourdes. Le détail des articles applicables et les passerelles entre majorités relèvent du texte : à vérifier selon la réglementation en vigueur et auprès du syndic.",
        },
        { type: "heading", text: "Les documents à lire, et ce qu'ils révèlent" },
        {
          type: "table",
          head: ["Document", "Ce qu'il vous apprend"],
          rows: [
            ["Règlement de copropriété", "Ce qui est autorisé, la destination de l'immeuble, la répartition des charges"],
            ["État descriptif de division", "Le nombre et la nature exacts des lots"],
            ["Trois derniers PV d'assemblée générale", "Travaux votés, travaux refusés, conflits, impayés, ambiance de la copropriété"],
            ["Fiche synthétique de copropriété", "Identité, budget, impayés, équipements — la lecture la plus rapide"],
            ["Carnet d'entretien", "Historique des travaux et des contrats"],
            ["Appels de fonds et budget prévisionnel", "Le montant réel des charges, distinct des travaux exceptionnels"],
            ["Plan pluriannuel de travaux", "Ce qui est prévu pour les dix prochaines années"],
          ],
        },
        {
          type: "list",
          title: "Sept signaux d'alerte dans un dossier de copropriété",
          items: [
            "Un taux d'impayés élevé : la copropriété avance les charges des défaillants.",
            "Des travaux de structure votés mais jamais réalisés, reportés d'AG en AG.",
            "Un changement de syndic tous les deux ans : signe de conflit chronique.",
            "Des procédures judiciaires en cours mentionnées dans les PV.",
            "Un fonds de travaux quasi vide face à un plan pluriannuel chargé.",
            "Des charges de chauffage collectif très supérieures aux immeubles comparables.",
            "Une absence de conseil syndical : personne ne contrôle le syndic.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La phrase qui rassure un acquéreur",
          text:
            "« J'ai lu les trois derniers procès-verbaux d'assemblée générale. Voici ce qui a été voté, ce qui reste à faire, et le montant qui vous concernera. » Très peu de conseillers le font. C'est un différenciateur immédiat et un acte de devoir de conseil.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["copropriete", "lot", "tantiemes", "parties-communes", "parties-privatives", "syndic", "assemblee-generale", "proces-verbal-ag", "charges-copropriete", "fonds-travaux", "reglement-copropriete", "etat-date"],
        },
      ],
      keyPoints: [
        "Un lot = une partie privative + une quote-part de parties communes en tantièmes.",
        "Les tantièmes déterminent les charges payées et le poids du vote en assemblée.",
        "Fenêtres, volets et balcons sont fréquemment des parties communes à usage privatif.",
        "L'assemblée générale décide, le syndic exécute, le conseil syndical contrôle.",
        "Les trois derniers PV d'AG révèlent l'essentiel : travaux, impayés, conflits.",
        "Distinguer toujours charges courantes et appels de fonds travaux.",
      ],
      mistakes: [
        "Annoncer des charges « d'environ 150 €/mois » sans distinguer courantes et travaux.",
        "Ne pas demander les PV d'AG avant de fixer un prix.",
        "Affirmer qu'un mur peut être abattu sans vérifier le règlement et la nature du mur.",
        "Oublier de vérifier le nombre exact de lots vendus.",
      ],
      caseStudy: {
        title: "Analyser un dossier de copropriété",
        context:
          "Immeuble de 24 lots principaux, construit en 1972, chauffage collectif au gaz, ascenseur. PV d'AG : en 2024, ravalement voté pour 264 000 € TTC, non encore réalisé, appels prévus sur deux exercices. Fonds de travaux : 18 000 €. Impayés : 31 000 €, soit environ 12 % du budget annuel. Le syndic a changé deux fois en quatre ans. Le lot étudié porte 42/1000 des charges générales et se situe au 4e étage avec ascenseur.",
        tasks: [
          "Calculez la quote-part de ravalement du lot étudié.",
          "Listez les trois éléments qui doivent impérativement être communiqués à un acquéreur.",
          "Expliquez comment cette information influence votre estimation.",
          "Rédigez ce que vous direz au vendeur qui vous répond « ce n'est pas la peine d'en parler ».",
        ],
        correction: [
          "Quote-part de ravalement : 264 000 × 42/1000 = 11 088 €, à déduire de la valeur perçue du bien ou à provisionner dans la négociation.",
          "À communiquer impérativement : le ravalement voté et son montant, le niveau d'impayés de 12 %, l'insuffisance manifeste du fonds de travaux au regard des travaux votés.",
          "Effet sur l'estimation : un acquéreur informé déduira tout ou partie des 11 000 € du prix. Mieux vaut intégrer ce point dès l'estimation que le subir en négociation, ou pire, le voir surgir au compromis.",
          "Réponse au vendeur : « Je comprends. Mais l'acquéreur recevra ces documents avec l'avant-contrat : il découvrira l'information de toute façon. La seule question est de savoir s'il l'apprend de moi, dans un dossier maîtrisé, ou s'il la découvre seul, se sent trompé et négocie deux fois plus fort — quand il ne se retire pas. Annoncer nous protège tous les deux. »",
          "C'est un cas typique où la transparence n'est pas seulement une obligation : c'est la stratégie commerciale la plus efficace.",
        ],
      },
      quiz: [
        {
          id: "f3q1",
          type: "qcm",
          question: "À quoi servent les tantièmes ?",
          options: [
            "À calculer la surface Carrez du lot",
            "À répartir les charges et à déterminer le nombre de voix en assemblée générale",
            "À fixer le prix de vente du lot",
            "À déterminer le montant de la taxe foncière",
          ],
          answer: 1,
          explanation:
            "Les tantièmes sont la clé de répartition des charges communes et la base du calcul des voix en assemblée générale. Ils n'ont aucun rapport direct avec le prix ou la fiscalité.",
          skill: "copropriete",
          topic: "copropriete",
        },
        {
          id: "f3q2",
          type: "vraifaux",
          question: "Un copropriétaire peut remplacer ses fenêtres sans aucune formalité, puisqu'il s'agit de son logement.",
          answer: 1,
          explanation:
            "Faux dans de nombreux immeubles : les fenêtres sont souvent des parties communes à usage privatif, et la modification de l'aspect extérieur peut relever d'une décision d'assemblée générale. Seul le règlement de copropriété permet de trancher.",
          skill: "copropriete",
          topic: "copropriete",
        },
        {
          id: "f3q3",
          type: "qcm",
          question: "Quel document permet de repérer le plus rapidement une copropriété en difficulté ?",
          options: [
            "Le DPE de l'immeuble",
            "La fiche synthétique de copropriété et les derniers PV d'AG",
            "Le titre de propriété du vendeur",
            "L'avis de taxe foncière",
          ],
          answer: 1,
          explanation:
            "La fiche synthétique regroupe budget, impayés et équipements ; les PV d'AG révèlent les travaux votés, les conflits et l'ambiance. C'est la combinaison la plus rapide et la plus fiable.",
          skill: "copropriete",
          topic: "copropriete",
        },
        {
          id: "f3q4",
          type: "qcm",
          question: "Un ravalement de 264 000 € est voté. Un lot porte 42/1000. Quelle est sa quote-part ?",
          options: ["4 200 €", "11 088 €", "26 400 €", "6 300 €"],
          answer: 1,
          explanation:
            "264 000 × 42 / 1000 = 11 088 €. Ce montant doit être connu du vendeur comme de l'acquéreur avant toute négociation.",
          skill: "copropriete",
          topic: "copropriete",
        },
        {
          id: "f3q5",
          type: "qcm",
          question: "Qui exécute les décisions prises en assemblée générale ?",
          options: ["Le conseil syndical", "Le syndic", "Le président de séance", "Le notaire"],
          answer: 1,
          explanation:
            "Le syndic est le mandataire du syndicat des copropriétaires : il exécute les décisions de l'assemblée. Le conseil syndical l'assiste et le contrôle, sans se substituer à lui.",
          skill: "copropriete",
          topic: "copropriete",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Copropriété", url: "https://www.service-public.fr/particuliers/vosdroits/F2591" },
        { label: "Service-Public.fr — Assemblée générale de copropriété", url: "https://www.service-public.fr/particuliers/vosdroits/F62" },
        { label: "ANIL — Copropriété", url: "https://www.anil.org/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "f4",
      moduleId: "fondamentaux",
      title: "Les diagnostics : à quoi sert chaque document",
      summary:
        "Savoir quels diagnostics sont exigés, ce qu'ils disent réellement, et comment les commenter sans jamais outrepasser son rôle.",
      duration: 16,
      difficulty: "debutant",
      skills: ["fondamentaux", "technique"],
      objectives: [
        "Citer les diagnostics du dossier de diagnostic technique et leur objet",
        "Comprendre l'opposabilité du DPE et ses conséquences commerciales",
        "Savoir formuler un commentaire de diagnostic sans engager sa responsabilité",
        "Organiser la commande des diagnostics dès la prise de mandat",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Le dossier de diagnostic technique est annexé à l'avant-contrat puis à l'acte. Il informe l'acquéreur et, en pratique, il structure une grande partie de la négociation. Un conseiller qui sait lire ces documents anticipe les objections plusieurs semaines à l'avance.",
        },
        {
          type: "table",
          title: "Les principaux diagnostics",
          head: ["Diagnostic", "Ce qu'il contrôle", "Concerne principalement"],
          rows: [
            ["DPE", "Consommation d'énergie et émissions de gaz à effet de serre", "La quasi-totalité des logements mis en vente ou en location"],
            ["Amiante", "Présence de matériaux contenant de l'amiante", "Immeubles dont le permis est antérieur au 1er juillet 1997"],
            ["Plomb (CREP)", "Peintures au plomb et leur état de conservation", "Logements construits avant le 1er janvier 1949"],
            ["Électricité", "Sécurité de l'installation intérieure", "Installations de plus de quinze ans"],
            ["Gaz", "Sécurité de l'installation intérieure de gaz", "Installations de plus de quinze ans"],
            ["Termites", "Présence de termites", "Zones délimitées par arrêté préfectoral"],
            ["ERP", "Risques naturels, miniers, technologiques, radon, pollution, bruit", "Selon la localisation du bien"],
            ["Assainissement non collectif", "Conformité de l'installation autonome", "Biens non raccordés au tout-à-l'égout"],
            ["Mesurage Carrez", "Superficie privative du lot", "Lots de copropriété"],
          ],
          note:
            "Le périmètre exact, les durées de validité et les cas d'exemption sont fixés par les textes et évoluent. À vérifier selon la réglementation en vigueur et auprès de votre diagnostiqueur.",
        },
        { type: "heading", text: "Le DPE : le document qui change une vente" },
        {
          type: "definition",
          term: "DPE",
          simple:
            "Une note de A à G qui indique si le logement consomme beaucoup d'énergie et s'il émet beaucoup de gaz à effet de serre.",
          pro:
            "Diagnostic évaluant la consommation d'énergie primaire et les émissions de gaz à effet de serre, exprimé par une double étiquette de A à G. Depuis le 1er juillet 2021, il est opposable : ses informations engagent la responsabilité du vendeur ou du bailleur.",
          why:
            "L'énergie représente une part importante du coût réel d'un logement, et la performance énergétique conditionne désormais la possibilité de louer certains biens.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "Opposabilité et calendrier",
          text:
            "Le DPE est opposable : un acquéreur peut s'en prévaloir. Par ailleurs, la loi organise un calendrier progressif de restriction de mise en location des logements les plus énergivores, ainsi qu'une obligation d'audit énergétique pour la vente de certaines catégories de biens. Ce calendrier a été modifié à plusieurs reprises : ne citez jamais une date de mémoire devant un client. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "paragraph",
          text:
            "Commercialement, le DPE a trois effets concrets, indépendamment du calendrier réglementaire. Premièrement, il filtre les acquéreurs : certains excluent d'emblée les classes F et G. Deuxièmement, il est un levier de négociation immédiat. Troisièmement, il conditionne la stratégie du vendeur : parfois, réaliser des travaux avant la vente est rentable ; souvent, cela ne l'est pas.",
        },
        {
          type: "dialogue",
          title: "Commenter un DPE en visite",
          lines: [
            {
              speaker: "Formulation à éviter",
              text: "« Le DPE est en F, mais rassurez-vous, avec l'isolation des combles vous passerez en D facilement. »",
              tone: "bad",
            },
            {
              speaker: "Formulation professionnelle",
              text:
                "« Le bien est classé F. Le rapport identifie trois postes principaux : l'isolation des combles, les menuiseries et le système de chauffage. Je peux vous mettre en relation avec deux entreprises pour un chiffrage, et vous orienter vers France Rénov' pour les aides. Le gain de classe dépendra de l'audit, pas de mon avis. »",
              tone: "good",
            },
          ],
        },
        { type: "heading", text: "Ce que vous pouvez dire et ce que vous ne pouvez pas dire" },
        {
          type: "compare",
          left: {
            title: "Vous pouvez",
            items: [
              "Lire et expliquer le contenu du rapport",
              "Indiquer les postes d'amélioration identifiés par le diagnostiqueur",
              "Orienter vers un professionnel qualifié pour un chiffrage",
              "Rappeler l'existence d'aides publiques et renvoyer vers France Rénov'",
            ],
          },
          right: {
            title: "Vous ne pouvez pas",
            items: [
              "Garantir un gain de classe énergétique après travaux",
              "Affirmer qu'un logement est « sans amiante » — dites : le repérage ne conclut à aucun matériau dans les éléments contrôlés",
              "Minimiser une anomalie électrique signalée",
              "Chiffrer vous-même une rénovation énergétique",
            ],
          },
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le réflexe qui fait gagner trois semaines",
          text:
            "Commandez les diagnostics le jour de la signature du mandat. Le DPE doit figurer dans l'annonce, et un dossier complet dès le premier jour évite qu'un acquéreur pressé se décourage. Trois semaines de retard sur un dossier, c'est souvent un acquéreur perdu.",
        },
        {
          type: "list",
          title: "Utiliser les diagnostics comme outil de travail",
          items: [
            "Lisez les rapports avant la première visite : vous anticipez 80 % des questions techniques.",
            "Repérez les anomalies électriques : elles reviendront systématiquement en négociation.",
            "Notez les dates de validité : un ERP périmé au moment de la signature retarde la vente.",
            "Faites-vous expliquer un rapport ligne par ligne par votre diagnostiqueur : c'est la meilleure formation technique gratuite du métier.",
          ],
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["diagnostics", "dpe", "audit-energetique", "erp", "amiante", "plomb", "passoire-thermique", "valeur-verte"],
        },
      ],
      keyPoints: [
        "Le dossier de diagnostic technique est annexé à l'avant-contrat et à l'acte.",
        "Chaque diagnostic a son propre périmètre et sa propre durée de validité.",
        "Le DPE est opposable depuis le 1er juillet 2021 et structure la négociation.",
        "Le calendrier des restrictions énergétiques évolue : vérifier avant toute affirmation.",
        "Le conseiller explique le rapport, il ne garantit jamais un résultat après travaux.",
        "Commander les diagnostics dès la prise de mandat fait gagner trois semaines.",
      ],
      mistakes: [
        "Promettre un passage de F à D après travaux.",
        "Dire « il n'y a pas d'amiante » au lieu de citer la conclusion du repérage.",
        "Attendre une offre pour commander les diagnostics.",
        "Publier une annonce sans mention du DPE.",
      ],
      quiz: [
        {
          id: "f4q1",
          type: "qcm",
          question: "Que signifie l'opposabilité du DPE ?",
          options: [
            "Que le vendeur peut contester le diagnostic auprès du diagnostiqueur",
            "Que ses informations engagent la responsabilité du vendeur ou du bailleur, l'acquéreur pouvant s'en prévaloir",
            "Que le DPE doit être affiché en mairie",
            "Que l'acquéreur peut refuser de le recevoir",
          ],
          answer: 1,
          explanation:
            "Depuis le 1er juillet 2021, le DPE n'est plus purement informatif : ses informations sont opposables et engagent la responsabilité du vendeur ou du bailleur.",
          skill: "juridique",
          topic: "diagnostics",
        },
        {
          id: "f4q2",
          type: "qcm",
          question: "Le diagnostic amiante concerne les immeubles dont le permis de construire a été délivré :",
          options: [
            "avant le 1er janvier 1949",
            "avant le 1er juillet 1997",
            "avant le 1er janvier 2005",
            "quelle que soit la date",
          ],
          answer: 1,
          explanation:
            "Le repérage amiante vise les immeubles dont le permis de construire est antérieur au 1er juillet 1997. La date du 1er janvier 1949 correspond, elle, au constat de risque d'exposition au plomb.",
          skill: "technique",
          topic: "diagnostics",
        },
        {
          id: "f4q3",
          type: "vraifaux",
          question: "Un conseiller peut garantir qu'un logement classé F passera en D après isolation des combles.",
          answer: 1,
          explanation:
            "Faux. Le gain de classe dépend de l'ensemble du bâti, du système de chauffage, de la ventilation et de la méthode de calcul. Seule une étude technique peut se prononcer. Une garantie de ce type engage lourdement la responsabilité du professionnel.",
          skill: "technique",
          topic: "diagnostics",
        },
        {
          id: "f4q4",
          type: "qcm",
          question: "Quand commander les diagnostics ?",
          options: [
            "Après acceptation d'une offre",
            "Le jour de la signature du mandat",
            "Lorsque le notaire les réclame",
            "Uniquement si le bien est ancien",
          ],
          answer: 1,
          explanation:
            "Le DPE doit figurer dans l'annonce et le dossier complet doit être annexé à l'avant-contrat. Commander dès le mandat évite un retard de plusieurs semaines et sécurise la commercialisation.",
          skill: "commercialisation",
          topic: "diagnostics",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Diagnostics immobiliers obligatoires", url: "https://www.service-public.fr/particuliers/vosdroits/F2266" },
        { label: "Service-Public.fr — DPE", url: "https://www.service-public.fr/particuliers/vosdroits/F16096" },
        { label: "France Rénov'", url: "https://france-renov.gouv.fr/", note: "Aides et parcours de rénovation énergétique" },
        { label: "Géorisques", url: "https://www.georisques.gouv.fr/", note: "État des risques et pollutions" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },

    {
      id: "f5",
      moduleId: "fondamentaux",
      title: "Le dossier complet d'un bien : la liste de toute une carrière",
      summary:
        "Constituer méthodiquement le dossier d'un bien dès la prise de mandat — le geste qui distingue un professionnel d'un amateur.",
      duration: 13,
      difficulty: "debutant",
      skills: ["fondamentaux", "organisation", "excellence"],
      objectives: [
        "Lister les documents à réunir pour un appartement et pour une maison",
        "Savoir à qui demander chaque document et en combien de temps l'obtenir",
        "Comprendre pourquoi un dossier complet accélère la vente et réduit la négociation",
        "Mettre en place une routine de collecte reproductible",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Il existe une différence visible entre deux conseillers : l'un répond « je vais me renseigner » à chaque question, l'autre ouvre un dossier et répond immédiatement. Cette différence ne tient pas au talent. Elle tient à une liste, appliquée systématiquement le jour de la prise de mandat.",
        },
        {
          type: "table",
          title: "Le dossier d'un appartement en copropriété",
          head: ["Document", "Où l'obtenir", "Délai courant"],
          rows: [
            ["Titre de propriété", "Le vendeur, ou son notaire", "Immédiat à 1 semaine"],
            ["Dossier de diagnostic technique", "Diagnostiqueur", "3 à 10 jours"],
            ["Mesurage Carrez", "Diagnostiqueur (souvent inclus)", "Avec les diagnostics"],
            ["Règlement de copropriété et état descriptif de division", "Le vendeur ou le syndic", "1 à 3 semaines"],
            ["Trois derniers PV d'assemblée générale", "Le vendeur ou le syndic", "1 à 3 semaines"],
            ["Fiche synthétique de copropriété", "Syndic", "1 à 2 semaines"],
            ["Appels de fonds des deux dernières années", "Le vendeur", "Immédiat"],
            ["Carnet d'entretien", "Syndic", "1 à 3 semaines"],
            ["Dernier avis de taxe foncière", "Le vendeur", "Immédiat"],
            ["Plan pluriannuel de travaux, s'il existe", "Syndic", "1 à 3 semaines"],
          ],
        },
        {
          type: "table",
          title: "Le dossier d'une maison individuelle",
          head: ["Document", "Où l'obtenir", "Pourquoi il compte"],
          rows: [
            ["Titre de propriété", "Vendeur / notaire", "Identité des propriétaires, servitudes, origine"],
            ["Dossier de diagnostic technique", "Diagnostiqueur", "Information de l'acquéreur"],
            ["Permis de construire et déclarations préalables", "Vendeur / mairie", "Régularité des extensions et aménagements"],
            ["Déclaration attestant l'achèvement des travaux", "Vendeur", "Conformité des ouvrages"],
            ["Assurance dommages-ouvrage, si travaux récents", "Vendeur", "Couverture des désordres de moins de dix ans"],
            ["Factures et garanties des travaux", "Vendeur", "Preuve d'entretien, argument de vente"],
            ["Plan de bornage, s'il existe", "Vendeur / géomètre", "Limites juridiques de la parcelle"],
            ["Certificat d'urbanisme, si projet évoqué", "Mairie", "Faisabilité d'une extension ou division"],
            ["Contrôle de l'assainissement non collectif", "SPANC", "Obligatoire si non raccordé au réseau"],
            ["Avis de taxe foncière", "Vendeur", "Question systématique des acquéreurs"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le message type à envoyer le jour du mandat",
          text:
            "« Bonjour, comme convenu voici la liste des documents dont j'ai besoin pour préparer votre dossier de vente : titre de propriété, appels de fonds des deux dernières années, dernier avis de taxe foncière, factures des travaux réalisés. De mon côté, je commande aujourd'hui les diagnostics et j'écris au syndic pour les procès-verbaux et la fiche synthétique. Je vous tiens informé de chaque retour. » Envoyé le jour même, ce message fait plus pour votre crédibilité que trois arguments commerciaux.",
        },
        { type: "heading", text: "Pourquoi un dossier complet fait gagner de l'argent au vendeur" },
        {
          type: "list",
          ordered: true,
          items: [
            "Il raccourcit le délai entre l'offre et l'avant-contrat : le notaire dispose déjà de tout.",
            "Il réduit la négociation : un acquéreur qui découvre les informations progressivement se méfie ; un acquéreur informé d'emblée négocie sur des faits, pas sur des craintes.",
            "Il évite les rétractations : la majorité des rétractations naissent d'une découverte tardive, pas d'un changement d'avis.",
            "Il vous positionne : un vendeur qui vous voit produire un dossier complet ne vous compare plus au prix, mais à la méthode.",
          ],
        },
        {
          type: "example",
          title: "Deux ventes, deux issues",
          text:
            "Deux T3 comparables, mis en vente le même mois. Dossier A : diagnostics commandés le jour du mandat, PV d'AG obtenus en trois semaines, ravalement annoncé dès l'annonce avec son montant. Offre à −2 % du prix affiché, compromis à cinq semaines, vente signée. Dossier B : diagnostics commandés après l'offre, ravalement découvert par l'acquéreur au compromis. Renégociation de −6 %, puis rétractation. Bien remis en vente trois mois plus tard, vendu −9 %.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le document que l'on oublie toujours",
          text:
            "L'avis de taxe foncière. Il est demandé par presque tous les acquéreurs, et son absence donne l'impression que le conseiller n'a pas préparé son dossier. Demandez-le dès le premier rendez-vous.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["diagnostics", "reglement-copropriete", "proces-verbal-ag", "fiche-synthetique", "carnet-entretien", "taxe-fonciere", "permis-de-construire", "conformite", "bornage"],
        },
      ],
      keyPoints: [
        "Le dossier se constitue le jour de la prise de mandat, jamais quand une offre arrive.",
        "Les documents de copropriété demandent une à trois semaines : anticipez.",
        "Pour une maison, les autorisations d'urbanisme sont le point de vigilance principal.",
        "Un dossier complet réduit le délai, la négociation et le risque de rétractation.",
        "L'avis de taxe foncière est demandé par presque tous les acquéreurs.",
      ],
      mistakes: [
        "Commander les diagnostics après l'acceptation d'une offre.",
        "Ne pas écrire au syndic dès le mandat.",
        "Vendre une maison avec extension sans vérifier l'existence d'une autorisation.",
        "Se fier à la mémoire du vendeur plutôt qu'aux documents.",
      ],
      exercise: {
        title: "Constituez votre message de collecte",
        instructions:
          "Rédigez le message que vous enverrez à un vendeur le jour de la signature du mandat, et celui destiné au syndic. Ces deux messages vous serviront pendant toute votre carrière : écrivez-les une fois, correctement.",
        fields: [
          {
            id: "vendeur",
            label: "Message au vendeur",
            multiline: true,
            placeholder: "Bonjour Monsieur…, comme convenu, voici la liste des documents…",
          },
          {
            id: "syndic",
            label: "Message au syndic",
            multiline: true,
            placeholder: "Madame, Monsieur, dans le cadre de la vente du lot n°… situé…",
          },
        ],
        checklist: [
          "Le message au vendeur liste précisément les documents demandés",
          "Il indique ce que vous faites de votre côté (diagnostics, syndic)",
          "Il annonce un délai et un point de suivi",
          "Le message au syndic identifie le lot, l'adresse et le vendeur",
          "Il demande nommément : PV des trois dernières AG, fiche synthétique, carnet d'entretien, appels de fonds",
          "Il précise le cadre : préparation d'une vente",
          "Les deux messages sont courts et sans faute",
        ],
        modelAnswer:
          "Message au syndic type : « Madame, Monsieur, dans le cadre de la mise en vente du lot n° 14 situé 12 rue des Lices, appartenant à M. et Mme Durand, je vous remercie de bien vouloir me transmettre : les procès-verbaux des trois dernières assemblées générales, la fiche synthétique de copropriété, le carnet d'entretien, ainsi que le montant des appels de fonds des deux derniers exercices. M. et Mme Durand vous confirment par ailleurs leur accord pour cette communication. Je reste à votre disposition. » Court, précis, immédiatement traitable par le gestionnaire.",
      },
      quiz: [
        {
          id: "f5q1",
          type: "qcm",
          question: "Quel est l'effet principal d'un dossier complet dès la mise en vente ?",
          options: [
            "Il permet d'augmenter le prix affiché",
            "Il réduit le délai, la négociation et le risque de rétractation",
            "Il dispense de faire des visites",
            "Il remplace le travail du notaire",
          ],
          answer: 1,
          explanation:
            "Un acquéreur informé d'emblée négocie sur des faits connus. Les découvertes tardives, elles, provoquent renégociations et rétractations.",
          skill: "excellence",
        },
        {
          id: "f5q2",
          type: "qcm",
          question: "Pour une maison avec véranda ajoutée en 2016, quel document est prioritaire ?",
          options: [
            "La facture de la véranda",
            "L'autorisation d'urbanisme correspondante et la déclaration d'achèvement",
            "Le DPE",
            "Le règlement de copropriété",
          ],
          answer: 1,
          explanation:
            "Une construction non autorisée peut bloquer une vente ou exposer l'acquéreur. La vérification de l'autorisation et de son achèvement est prioritaire, la facture n'ayant aucune valeur d'autorisation.",
          skill: "urbanisme",
        },
        {
          id: "f5q3",
          type: "vraifaux",
          question: "Les documents de copropriété peuvent être demandés au syndic la veille du compromis.",
          answer: 1,
          explanation:
            "Faux en pratique : les délais de réponse d'un syndic vont couramment d'une à trois semaines. Demander tardivement, c'est retarder le compromis et fragiliser la vente.",
          skill: "copropriete",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Documents à fournir lors d'une vente", url: "https://www.service-public.fr/particuliers/vosdroits/F2604" },
        { label: "ANIL — Vendre un logement", url: "https://www.anil.org/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
