import type { CourseModule } from "@/lib/types";

export const modulePsychologie: CourseModule = {
  id: "psychologie",
  level: 20,
  title: "Psychologie commerciale",
  subtitle: "Devenir un conseiller, pas un vendeur",
  description:
    "Vendre un logement, c'est accompagner une décision émotionnelle majeure. Ce module traite de la confiance, de l'écoute, de la gestion des émotions et de la communication — les compétences qui distinguent durablement un professionnel.",
  icon: "🧠",
  skills: ["psychologie", "excellence"],
  requires: ["negociation"],
  outcomes: [
    "Construire la confiance par des mécanismes identifiables",
    "Écouter réellement et pratiquer la reformulation",
    "Gérer une émotion forte chez un client sans la subir",
    "Adapter sa communication au profil de son interlocuteur",
  ],
  lessons: [
    {
      id: "ps1",
      moduleId: "psychologie",
      title: "La confiance : comment elle se construit et comment elle se détruit",
      summary:
        "Comprendre les mécanismes concrets de la confiance professionnelle, et les gestes quotidiens qui la produisent.",
      duration: 16,
      difficulty: "intermediaire",
      skills: ["psychologie", "excellence"],
      objectives: [
        "Identifier les quatre composantes de la confiance",
        "Reconnaître les comportements qui la détruisent instantanément",
        "Gérer une émotion forte sans se défendre",
        "Adapter son style de communication à son interlocuteur",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un client vous confie le bien qui représente souvent l'essentiel de son patrimoine, dans un moment de sa vie qui est rarement neutre : un déménagement, une séparation, un décès, une naissance. La confiance n'est pas un supplément d'âme dans ce métier : c'est le produit lui-même.",
        },
        { type: "heading", text: "Les quatre composantes de la confiance" },
        {
          type: "table",
          head: ["Composante", "Ce que le client se demande", "Ce qui la produit"],
          rows: [
            ["Compétence", "« Sait-il de quoi il parle ? »", "Préparation, chiffres exacts, vocabulaire juste, aveu d'ignorance assumé"],
            ["Fiabilité", "« Fait-il ce qu'il dit ? »", "Rappeler à l'heure promise, tenir chaque engagement, même minime"],
            ["Sincérité", "« Me dit-il la vérité, y compris quand elle dérange ? »", "Annoncer une estimation basse, signaler un défaut, refuser un mandat"],
            ["Bienveillance", "« Défend-il mes intérêts ou les siens ? »", "Déconseiller une opération, orienter vers un autre professionnel"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "La composante la plus rare",
          text:
            "La bienveillance démontrée. Dire à un client « à votre place, je ne ferais pas cette opération » ou « ce bien ne vous conviendra pas, malgré votre coup de cœur » produit un effet considérable, précisément parce que cela va contre votre intérêt immédiat. C'est aussi ce qui génère les recommandations.",
        },
        { type: "heading", text: "Ce qui détruit la confiance instantanément" },
        {
          type: "list",
          items: [
            "Un rappel promis et non tenu. Un seul suffit.",
            "Une information fausse, même de bonne foi, découverte ensuite.",
            "Une promesse de délai ou de prix non tenue.",
            "Un changement de discours entre deux rendez-vous.",
            "Un chiffre annoncé de mémoire et démenti par un document.",
            "Le dénigrement d'un confrère : le client se demande immédiatement ce que vous direz de lui.",
            "L'insistance après un refus clair.",
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "Le principe de l'asymétrie",
          text:
            "La confiance se construit lentement, par accumulation de petits actes tenus. Elle se détruit en une fois. Cette asymétrie doit gouverner votre pratique : ne promettez que ce que vous ferez, et faites tout ce que vous promettez, y compris les choses insignifiantes.",
        },
        { type: "heading", text: "Gérer une émotion forte" },
        {
          type: "paragraph",
          text:
            "Un vendeur qui apprend que son bien vaut 40 000 € de moins qu'espéré, un acquéreur dont l'offre est refusée, un couple qui se sépare pendant la vente : vous rencontrerez régulièrement des émotions fortes. La règle est constante : on ne raisonne pas avec quelqu'un qui est dans l'émotion.",
        },
        {
          type: "steps",
          title: "La séquence en quatre temps",
          items: [
            { title: "1. Accueillir", text: "« Je comprends que ce soit difficile. » Sans « mais ». Le « mais » annule tout ce qui précède." },
            { title: "2. Laisser du silence", text: "Trois à cinq secondes. C'est très inconfortable, et c'est ce qui permet à l'émotion de retomber d'un cran." },
            { title: "3. Nommer sans interpréter", text: "« C'est une somme importante, et vous ne vous y attendiez pas. » On décrit la situation, on n'analyse pas la personne." },
            { title: "4. Revenir au projet, pas au chiffre", text: "« Votre objectif, c'est d'être installé en juin. Regardons ensemble ce qui rend cela possible. » On redonne un but, on sort de la perte." },
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Les trois erreurs face à l'émotion",
          text:
            "Se défendre (« mais mes chiffres sont justes »), minimiser (« ce n'est pas si grave »), et enchaîner immédiatement sur des arguments. Chacune amplifie l'émotion au lieu de la faire redescendre, et transforme une déception en conflit.",
        },
        { type: "heading", text: "Adapter sa communication" },
        {
          type: "table",
          title: "Quatre profils que vous rencontrerez",
          head: ["Profil", "Ce qu'il attend", "Ce qui le braque"],
          rows: [
            ["Le factuel", "Des chiffres, des documents, un raisonnement structuré", "Les généralités, l'enthousiasme, l'approximation"],
            ["Le relationnel", "Du temps, de l'écoute, une relation personnelle", "L'efficacité froide, les rendez-vous minutés"],
            ["Le décideur pressé", "Une synthèse, une recommandation claire, peu d'options", "Les détails, les longues explications, l'indécision"],
            ["L'inquiet", "De la réassurance, des étapes, de la répétition", "L'urgence, la pression, les zones d'incertitude non nommées"],
          ],
          note:
            "Ces profils ne sont pas des catégories rigides : ce sont des dominantes qui varient selon le moment et l'enjeu. L'important est d'observer et de s'adapter, pas de classer.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le test de l'écoute",
          text:
            "À la fin d'un rendez-vous, demandez-vous : puis-je citer trois choses que cette personne m'a dites et que je ne savais pas avant d'entrer ? Si la réponse est non, vous avez parlé au lieu d'écouter.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["decouverte-client", "objection", "devoir-conseil", "recommandation", "excellence"],
        },
      ],
      keyPoints: [
        "Quatre composantes de la confiance : compétence, fiabilité, sincérité, bienveillance.",
        "La bienveillance démontrée — aller contre son intérêt immédiat — est la plus rare et la plus puissante.",
        "La confiance se construit lentement et se détruit en une fois.",
        "Face à une émotion : accueillir, laisser du silence, nommer, revenir au projet.",
        "Se défendre, minimiser ou argumenter amplifie l'émotion.",
        "Adapter son style au profil de l'interlocuteur, sans le catégoriser.",
      ],
      mistakes: [
        "Dire « je comprends, mais… ».",
        "Rassurer un client en minimisant un problème réel.",
        "Dénigrer un confrère devant un client.",
        "Sortir d'un rendez-vous sans avoir appris trois choses nouvelles.",
      ],
      quiz: [
        {
          id: "ps1q1",
          type: "qcm",
          question: "Quelle composante de la confiance est la plus rare et la plus puissante ?",
          options: [
            "La compétence technique",
            "La bienveillance démontrée, y compris contre son intérêt immédiat",
            "La disponibilité permanente",
            "La rapidité de réponse",
          ],
          answer: 1,
          explanation:
            "Déconseiller une opération ou orienter vers un autre professionnel prouve que vous défendez l'intérêt du client. C'est le comportement qui génère le plus de recommandations.",
          skill: "psychologie",
          topic: "confiance",
        },
        {
          id: "ps1q2",
          type: "qcm",
          question: "Un vendeur réagit vivement à votre estimation. Quelle est la première chose à faire ?",
          options: [
            "Répéter vos arguments avec plus de précision",
            "Accueillir l'émotion et laisser un silence",
            "Proposer un prix plus élevé pour apaiser",
            "Changer de sujet",
          ],
          answer: 1,
          explanation:
            "On ne raisonne pas avec quelqu'un qui est dans l'émotion. Accueillir sans « mais », puis laisser un silence, permet à l'intensité de retomber avant de revenir au raisonnement.",
          skill: "psychologie",
          topic: "emotion",
        },
        {
          id: "ps1q3",
          type: "vraifaux",
          question: "Dire « je comprends, mais mes chiffres sont justes » est une bonne façon d'accueillir une objection émotionnelle.",
          answer: 1,
          explanation:
            "Faux. Le « mais » annule ce qui précède : le client entend uniquement la contradiction. L'accueil doit être complet avant tout retour à l'argumentation.",
          skill: "psychologie",
          topic: "emotion",
        },
        {
          id: "ps1q4",
          type: "qcm",
          question: "Quel comportement détruit la confiance le plus rapidement ?",
          options: [
            "Annoncer une estimation inférieure aux attentes",
            "Ne pas rappeler à l'heure promise",
            "Reconnaître qu'on ignore une réponse",
            "Refuser un mandat surévalué",
          ],
          answer: 1,
          explanation:
            "Un engagement non tenu, même minime, met en cause la fiabilité — composante sur laquelle il n'existe aucune tolérance. Les trois autres comportements, eux, renforcent la confiance.",
          skill: "psychologie",
          topic: "confiance",
        },
      ],
      sources: [
        { label: "Légifrance — Code de déontologie des professionnels de l'immobilier", url: "https://www.legifrance.gouv.fr/" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
