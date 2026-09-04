import type { CourseModule } from "@/lib/types";

export const moduleCommercialisation: CourseModule = {
  id: "commercialisation",
  level: 8,
  title: "Commercialiser un bien",
  subtitle: "Du mandat signé à l'offre acceptée",
  description:
    "Un mandat signé n'est pas une vente. Ce module décrit le pilotage complet de la commercialisation : préparation, diffusion, mesure, reporting, et ajustement quand les chiffres l'imposent.",
  icon: "🚀",
  skills: ["commercialisation", "marketing", "organisation"],
  requires: ["mandat"],
  outcomes: [
    "Dérouler les quinze premiers jours après la signature du mandat",
    "Mesurer la commercialisation avec quatre indicateurs",
    "Rendre compte au vendeur chaque semaine, avec des chiffres",
    "Conduire une conversation d'ajustement de prix sans conflit",
  ],
  lessons: [
    {
      id: "cm1",
      moduleId: "commercialisation",
      title: "Les quinze premiers jours",
      summary:
        "La séquence exacte à dérouler après la signature du mandat — la période qui détermine le succès de la vente.",
      duration: 15,
      difficulty: "intermediaire",
      skills: ["commercialisation", "organisation"],
      objectives: [
        "Dérouler la séquence des quinze premiers jours",
        "Comprendre pourquoi les quatre premières semaines sont décisives",
        "Préparer le bien avant toute diffusion",
        "Organiser la mise en ligne pour maximiser l'effet de nouveauté",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un bien connaît un pic d'attention à sa mise en ligne. Les acquéreurs en recherche active reçoivent une alerte, consultent, et décident en quelques secondes. Cette fenêtre ne se reproduit pas. Diffuser un bien mal préparé revient à brûler la seule occasion d'atteindre les acquéreurs les plus motivés.",
        },
        {
          type: "steps",
          title: "La séquence",
          items: [
            { title: "Jour 0 — Signature", text: "Mandat signé, exemplaire remis, numéro de registre reporté. Vous expliquez la suite, jour par jour, au vendeur." },
            { title: "Jour 0, dans l'heure", text: "Commande des diagnostics. Courriel au syndic pour les documents. Courriel récapitulatif au vendeur avec la liste des documents attendus." },
            { title: "Jours 1 à 3", text: "Collecte : titre de propriété, appels de fonds, taxe foncière, factures de travaux, autorisations d'urbanisme si maison." },
            { title: "Jours 3 à 5", text: "Préparation du bien : conseils de rangement, désencombrement, réparations mineures, éventuel home staging léger. Cette étape se prépare avec tact." },
            { title: "Jours 5 à 7", text: "Reportage photographique, par beau temps si possible, en fin de matinée ou en fin d'après-midi selon l'exposition. Vidéo ou visite virtuelle selon le bien." },
            { title: "Jours 7 à 9", text: "Rédaction de l'annonce, validation par le vendeur, préparation du dossier numérique complet à transmettre aux acquéreurs sérieux." },
            { title: "Jour 10", text: "Mise en ligne simultanée sur tous les supports, idéalement en début de semaine. Information immédiate du fichier acquéreurs, par appel et non par simple envoi automatique." },
            { title: "Jours 10 à 15", text: "Communication ciblée sur le secteur, information des confrères si inter-cabinet, premiers retours et premières visites qualifiées." },
            { title: "Jour 15", text: "Premier compte rendu chiffré au vendeur : contacts, visites, retours. Le rythme hebdomadaire est installé." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "L'erreur de la précipitation",
          text:
            "Mettre en ligne le soir de la signature du mandat avec trois photos prises au téléphone est l'erreur la plus coûteuse de la commercialisation. Vous gagnez sept jours et vous perdez le pic d'attention initial, que rien ne restaure. Un bien « déjà vu » ne redevient jamais neuf.",
        },
        { type: "heading", text: "Préparer le bien : la conversation délicate" },
        {
          type: "paragraph",
          text:
            "Demander à quelqu'un de ranger sa maison est délicat. Vous parlez de son intimité, de ses goûts, de sa vie. La formulation compte autant que le conseil lui-même.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Formulation blessante", text: "« Il faudrait enlever tous ces bibelots, ça fait vieillot et ça surcharge. »", tone: "bad" },
            {
              speaker: "Formulation efficace",
              text:
                "« Un acquéreur qui visite doit pouvoir s'imaginer chez lui. Plus on lui laisse d'espace visuel, plus il projette. Ce n'est pas une question de goût — le vôtre est très bien — c'est une question de projection. Concrètement, je vous propose de ranger les objets personnels et de dégager les surfaces avant les photos. »",
              tone: "good",
            },
          ],
        },
        {
          type: "list",
          title: "Les six actions à fort rendement avant les photos",
          ordered: true,
          items: [
            "Désencombrer les surfaces horizontales : plans de travail, tables, meubles bas.",
            "Retirer les objets très personnels : photos de famille, souvenirs, courrier.",
            "Ouvrir tous les rideaux et volets, allumer toutes les lumières.",
            "Nettoyer les vitres : l'effet sur la luminosité des photos est spectaculaire.",
            "Ranger la salle de bains et la cuisine, qui sont les pièces les plus regardées.",
            "Dégager les extérieurs : balcon, terrasse, entrée, en retirant le mobilier abîmé.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "L'investissement le plus rentable",
          text:
            "Quelques heures de ménage professionnel et une journée de désencombrement coûtent quelques centaines d'euros et modifient significativement la perception du bien sur les photos comme en visite. C'est le conseil le plus rentable que vous puissiez donner à un vendeur.",
        },
        { type: "heading", text: "Le fichier acquéreurs : l'actif que vous construisez" },
        {
          type: "paragraph",
          text:
            "Un conseiller débutant n'a pas de fichier acquéreurs — c'est normal. Il s'en constitue un dès le premier mois, en qualifiant systématiquement chaque personne qui appelle, même pour un bien qui ne lui conviendra pas. Au bout de six mois, appeler dix acquéreurs qualifiés avant même la mise en ligne devient un argument de prise de mandat considérable.",
        },
        {
          type: "list",
          title: "Ce que contient une fiche acquéreur utile",
          items: [
            "Coordonnées et date du premier contact.",
            "Budget maximal et origine du financement : apport, prêt, vente préalable.",
            "Secteurs acceptés, précisément.",
            "Typologie, surface minimale, nombre de chambres indispensable.",
            "Critères indispensables et critères secondaires, distingués explicitement.",
            "Acceptation ou refus des travaux, et jusqu'à quel niveau.",
            "Échéance : pour quand doit-il être installé ?",
            "Biens déjà visités et raisons de refus — l'information la plus utile.",
          ],
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["commercialisation", "acquereur", "diagnostics", "mandat", "bon-visite"],
        },
      ],
      keyPoints: [
        "Le pic d'attention à la mise en ligne ne se reproduit pas : ne rien diffuser avant d'être prêt.",
        "Séquence de quinze jours : documents, préparation, photos, annonce, diffusion, reporting.",
        "Préparer le bien se dit en parlant de projection, jamais de goût.",
        "Désencombrer, dépersonnaliser, ouvrir, nettoyer les vitres : six actions à fort rendement.",
        "Qualifier chaque acquéreur dès le premier mois construit un actif durable.",
      ],
      mistakes: [
        "Mettre en ligne le soir de la signature avec des photos au téléphone.",
        "Attendre l'arrivée d'une offre pour commander les diagnostics.",
        "Conseiller le rangement en critiquant les goûts du vendeur.",
        "Diffuser sans avoir fait valider l'annonce par le vendeur.",
      ],
      quiz: [
        {
          id: "cm1q1",
          type: "qcm",
          question: "Pourquoi ne faut-il pas diffuser un bien immédiatement après la signature du mandat ?",
          options: [
            "Parce que la loi impose un délai de sept jours",
            "Parce que le pic d'attention à la mise en ligne ne se reproduit pas et qu'un bien mal présenté brûle cette occasion",
            "Parce que les portails n'acceptent pas les annonces récentes",
            "Parce qu'il faut attendre l'accord du syndic",
          ],
          answer: 1,
          explanation:
            "Les acquéreurs en recherche active reçoivent une alerte à la mise en ligne et décident en quelques secondes. Cette fenêtre est unique : un bien mal préparé la gaspille définitivement.",
          skill: "commercialisation",
          topic: "lancement",
        },
        {
          id: "cm1q2",
          type: "qcm",
          question: "Comment demander à un vendeur de désencombrer son logement ?",
          options: [
            "En expliquant que sa décoration est démodée",
            "En parlant de projection : plus l'espace est dégagé, plus l'acquéreur s'imagine chez lui",
            "En proposant de retirer les meubles vous-même",
            "En évitant le sujet pour ne pas le vexer",
          ],
          answer: 1,
          explanation:
            "Aborder le sujet par la projection de l'acquéreur, et non par le goût du vendeur, dépersonnalise le conseil et le rend acceptable.",
          skill: "psychologie",
          topic: "lancement",
        },
        {
          id: "cm1q3",
          type: "vraifaux",
          question: "Un conseiller débutant ne peut pas se constituer de fichier acquéreurs avant plusieurs années.",
          answer: 1,
          explanation:
            "Faux. Le fichier se construit dès le premier mois, en qualifiant systématiquement chaque contact entrant, même pour un bien qui ne conviendra pas à la personne.",
          skill: "crm",
          topic: "lancement",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Annonce immobilière et mentions obligatoires", url: "https://www.service-public.fr/particuliers/vosdroits/F16096" },
      ],
      lastVerified: "2026-09",
    },

    {
      id: "cm2",
      moduleId: "commercialisation",
      title: "Piloter, mesurer, rendre compte",
      summary:
        "Transformer la commercialisation en processus mesuré : quatre indicateurs, un compte rendu hebdomadaire, une décision fondée sur les chiffres.",
      duration: 16,
      difficulty: "intermediaire",
      skills: ["commercialisation", "excellence"],
      objectives: [
        "Suivre quatre indicateurs de commercialisation",
        "Rédiger un compte rendu hebdomadaire utile",
        "Diagnostiquer un blocage à partir des chiffres",
        "Conduire une conversation d'ajustement de prix sans conflit",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "La plupart des vendeurs mécontents ne le sont pas parce que leur bien n'est pas vendu : ils le sont parce qu'ils n'ont aucune nouvelle. Le compte rendu hebdomadaire chiffré résout ce problème et, accessoirement, rend la conversation sur le prix évidente le jour où elle devient nécessaire.",
        },
        { type: "heading", text: "Les quatre indicateurs" },
        {
          type: "table",
          head: ["Indicateur", "Ce qu'il mesure", "Ce qu'il révèle"],
          rows: [
            ["Vues de l'annonce", "L'exposition", "Un chiffre faible signale un problème de diffusion ou de photo principale"],
            ["Contacts entrants", "L'attractivité de l'annonce", "Peu de contacts malgré des vues : prix ou photos"],
            ["Visites réalisées", "La transformation des contacts", "Beaucoup de contacts sans visite : informations manquantes ou disqualifiantes"],
            ["Offres reçues", "L'adéquation prix / réalité", "Des visites sans offre : décalage entre l'annonce et le bien, ou prix trop élevé"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le diagnostic par étape",
          text:
            "Chaque indicateur mesure une étape. Quand un chiffre chute, vous savez exactement où se situe le problème. C'est ce qui distingue un pilotage d'une attente : on ne dit plus « ça ne bouge pas », on dit « nous avons de l'exposition mais peu de contacts, donc le problème est en amont de la visite ».",
        },
        { type: "heading", text: "Le compte rendu hebdomadaire" },
        {
          type: "example",
          title: "Un compte rendu type",
          text:
            "« Bonjour Madame Rousseau, voici le point de la semaine 3. Annonce vue 412 fois (contre 530 la semaine précédente, la baisse est normale après le pic de mise en ligne). 6 contacts, dont 3 non retenus après qualification : deux budgets insuffisants, un secteur incompatible. 3 visites réalisées. Retours : les trois visiteurs ont trouvé le bien lumineux et bien entretenu ; deux ont mentionné le 4e étage sans ascenseur, un a évoqué le montant des charges. Aucune offre à ce stade. Ma recommandation : nous restons sur ce prix jusqu'au point d'étape du 12, où nous ferons le bilan complet ensemble. À vendredi prochain. »",
        },
        {
          type: "list",
          title: "Ce qui fait la qualité d'un compte rendu",
          items: [
            "Des chiffres, pas des impressions.",
            "Les objections récurrentes, citées telles quelles.",
            "Ce que vous avez fait cette semaine, concrètement.",
            "Une recommandation claire, même si c'est « nous ne changeons rien ».",
            "La date du prochain point.",
            "Une longueur raisonnable : un vendeur lit dix lignes, pas deux pages.",
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "L'effet le plus important",
          text:
            "Un vendeur qui reçoit chaque vendredi les objections récurrentes des visiteurs se convainc lui-même, semaine après semaine. Quand vous proposerez un ajustement de prix, il l'aura déjà anticipé. La conversation difficile a été préparée par les faits, pas par vous.",
        },
        { type: "heading", text: "La conversation d'ajustement" },
        {
          type: "steps",
          items: [
            {
              title: "1. Rappeler le cadre convenu",
              text: "« Nous avions prévu ce point d'étape à trente jours dès la signature. Nous y sommes. »",
            },
            {
              title: "2. Présenter les chiffres, sans commentaire",
              text: "Vues, contacts, visites, offres, semaine par semaine. Laissez le tableau parler.",
            },
            {
              title: "3. Citer les objections récurrentes",
              text: "« Sur neuf visites, sept personnes ont mentionné le montant des charges, et cinq le prix par rapport aux biens rénovés du secteur. »",
            },
            {
              title: "4. Comparer avec le marché actuel",
              text: "Deux ou trois ventes signées depuis la mise en vente, et les biens concurrents apparus depuis.",
            },
            {
              title: "5. Proposer, en donnant le choix",
              text: "« Trois options : nous ne changeons rien et nous réévaluons dans six semaines ; nous ajustons à 268 000 € ; ou nous retirons le bien et nous revenons au printemps. Voici ce que j'anticipe pour chacune. »",
            },
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Ce qu'il ne faut jamais faire",
          text:
            "Demander une baisse de prix par téléphone, sans chiffres, en disant « il faudrait baisser ». Le vendeur entend « vous ne savez pas vendre » et refuse. Une demande d'ajustement se prépare, se documente et se présente en rendez-vous.",
        },
        { type: "heading", text: "L'ajustement efficace" },
        {
          type: "paragraph",
          text:
            "Une baisse trop faible ne produit rien : elle consomme la marge sans changer le positionnement du bien. Deux principes guident un ajustement utile : il doit faire changer le bien de tranche de recherche, et il ne doit pas être répété tous les mois.",
        },
        {
          type: "example",
          title: "Le seuil de recherche",
          text:
            "Un bien à 312 000 € n'apparaît pas dans les recherches plafonnées à 300 000 €, qui sont extrêmement nombreuses. Passer à 299 000 € ouvre le bien à un nouveau public entier. Une baisse de 13 000 € bien placée produit davantage que trois baisses successives de 5 000 € mal placées.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "L'effet des baisses répétées",
          text:
            "Trois baisses successives affichées envoient un signal clair aux acquéreurs : le vendeur cédera encore. Ils attendent. Mieux vaut un ajustement unique et significatif qu'une série de petits pas qui installent une dynamique d'attente.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["commercialisation", "objection", "negociation", "tension-immobiliere", "comparables"],
        },
      ],
      keyPoints: [
        "Quatre indicateurs : vues, contacts, visites, offres — chacun mesure une étape.",
        "Un compte rendu hebdomadaire chiffré évite l'essentiel du mécontentement.",
        "Citer les objections récurrentes convainc le vendeur bien mieux que vos arguments.",
        "Une demande d'ajustement se prépare, se documente et se présente en rendez-vous.",
        "Un ajustement doit faire franchir un seuil de recherche pour produire un effet.",
        "Les baisses répétées installent une dynamique d'attente chez les acquéreurs.",
      ],
      mistakes: [
        "Ne donner de nouvelles au vendeur que lorsqu'il appelle.",
        "Demander une baisse par téléphone, sans chiffres.",
        "Proposer des baisses successives de faible ampleur.",
        "Envoyer des comptes rendus de deux pages que personne ne lit.",
      ],
      caseStudy: {
        title: "Trente jours sans offre",
        context:
          "Bien mis en vente à 312 000 € il y a trente jours. Semaine 1 : 640 vues, 9 contacts, 4 visites. Semaine 2 : 380 vues, 4 contacts, 3 visites. Semaine 3 : 210 vues, 2 contacts, 1 visite. Semaine 4 : 160 vues, 1 contact, 0 visite. Aucune offre. Objections récurrentes relevées : « c'est cher par rapport au bien rénové que nous avons vu rue X », « les charges sont élevées », « il n'y a pas d'ascenseur ». Deux ventes comparables signées depuis : 287 000 € et 294 000 €.",
        tasks: [
          "Établissez le diagnostic à partir des chiffres.",
          "Déterminez le niveau d'ajustement pertinent et justifiez-le.",
          "Rédigez la présentation que vous ferez au vendeur.",
        ],
        correction: [
          "Diagnostic : l'exposition s'effondre semaine après semaine, ce qui est normal, mais le taux de contacts reste faible dès la première semaine (9 contacts pour 640 vues). Les visites ne produisent aucune offre et les objections convergent toutes vers le prix comparé aux biens rénovés. Le problème est un positionnement de prix, non un problème de présentation.",
          "Niveau d'ajustement : les ventes comparables signées se situent à 287 000 et 294 000 €. Un passage à 299 000 € place le bien sous le seuil psychologique et sous le plafond de recherche des 300 000 €, ce qui ouvre un nouveau public. Une baisse à 305 000 € ne changerait rien : elle resterait au-dessus du seuil.",
          "Présentation : « Nous avions prévu ce point à trente jours. Voici les chiffres, semaine par semaine. Vous voyez l'exposition qui décroît et, surtout, très peu de contacts dès le départ. Sur les huit visites, sept personnes ont fait le même commentaire : le prix par rapport aux biens rénovés du secteur. Pendant ce temps, deux biens comparables se sont vendus à 287 000 et 294 000 €. »",
          "Suite : « Je vous propose trois options. Un : nous ne changeons rien, et je pense que nous serons au même point dans six semaines, avec un bien qui aura perdu de son attrait. Deux : nous passons à 299 000 €, ce qui nous fait entrer dans les recherches plafonnées à 300 000 € — c'est la tranche la plus fréquente et nous en sommes actuellement exclus. Trois : nous retirons le bien et nous revenons au printemps, ce qui est parfois la bonne décision. Ma recommandation est la deuxième, et je vous explique pourquoi. »",
          "Le vendeur décide. Votre rôle est de rendre la décision éclairée, pas de l'imposer.",
        ],
      },
      quiz: [
        {
          id: "cm2q1",
          type: "qcm",
          question: "Beaucoup de vues mais très peu de contacts. Que faut-il examiner en priorité ?",
          options: [
            "La qualification des acquéreurs",
            "La photo principale, le prix affiché et les informations de l'annonce",
            "Le comportement du vendeur pendant les visites",
            "Le délai de réponse du notaire",
          ],
          answer: 1,
          explanation:
            "Le passage de la vue au contact dépend de ce que voit l'internaute : photo principale, prix, informations essentielles. Le problème est situé avant la visite.",
          skill: "commercialisation",
          topic: "pilotage",
        },
        {
          id: "cm2q2",
          type: "qcm",
          question: "Un bien est à 312 000 €. Quel ajustement est le plus efficace ?",
          options: [
            "305 000 €, une baisse mesurée",
            "299 000 €, pour entrer dans les recherches plafonnées à 300 000 €",
            "310 000 €, un geste symbolique",
            "Trois baisses successives de 5 000 €",
          ],
          answer: 1,
          explanation:
            "Un ajustement n'a d'effet que s'il fait franchir un seuil de recherche. Rester au-dessus de 300 000 € maintient le bien invisible pour une part majoritaire des acquéreurs.",
          skill: "commercialisation",
          topic: "pilotage",
        },
        {
          id: "cm2q3",
          type: "vraifaux",
          question: "Il est préférable de procéder à plusieurs petites baisses successives plutôt qu'à un ajustement unique.",
          answer: 1,
          explanation:
            "Faux. Les baisses répétées signalent aux acquéreurs qu'il faut attendre la suivante. Un ajustement unique, significatif et bien placé est nettement plus efficace.",
          skill: "commercialisation",
          topic: "pilotage",
        },
        {
          id: "cm2q4",
          type: "qcm",
          question: "Quel est l'effet principal d'un compte rendu hebdomadaire chiffré ?",
          options: [
            "Il permet de facturer des honoraires plus élevés",
            "Il évite le mécontentement lié à l'absence de nouvelles et prépare le vendeur à l'ajustement par les faits",
            "Il remplace les visites",
            "Il oblige le vendeur à baisser son prix",
          ],
          answer: 1,
          explanation:
            "Le mécontentement naît surtout du silence. Un compte rendu régulier maintient la confiance et laisse les objections récurrentes convaincre le vendeur progressivement.",
          skill: "excellence",
          topic: "pilotage",
        },
      ],
      sources: [
        { label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" },
        { label: "ANIL — Vendre un logement", url: "https://www.anil.org/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
