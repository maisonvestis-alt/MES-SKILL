import type { CourseModule } from "@/lib/types";

export const moduleBranding: CourseModule = {
  id: "branding",
  level: 21,
  title: "Personal branding local",
  subtitle: "Devenir la personne à qui l'on pense pour vendre",
  description:
    "L'objectif n'est pas d'avoir beaucoup d'abonnés : c'est que les habitants de votre secteur pensent à vous. Ce module donne une stratégie de visibilité locale réaliste, tenable et conforme aux règles professionnelles.",
  icon: "✨",
  skills: ["branding", "prospection"],
  requires: ["prospection"],
  outcomes: [
    "Définir un positionnement local clair et différenciant",
    "Choisir deux canaux de contenu tenables dans la durée",
    "Produire du contenu utile plutôt que promotionnel",
    "Collecter et utiliser des témoignages clients dans le respect des règles",
  ],
  lessons: [
    {
      id: "br1",
      moduleId: "branding",
      title: "Une stratégie de visibilité locale qui tient dans la durée",
      summary:
        "Construire une notoriété de quartier avec peu de moyens, en produisant du contenu réellement utile.",
      duration: 15,
      difficulty: "intermediaire",
      skills: ["branding"],
      objectives: [
        "Définir son positionnement en une phrase",
        "Choisir les bons canaux selon son secteur et son tempérament",
        "Construire un calendrier de contenu tenable",
        "Respecter les règles applicables à la communication professionnelle",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un conseiller immobilier n'a pas besoin d'être connu de toute la France. Il a besoin que, dans un périmètre de quelques rues, les gens sachent qui il est et pensent à lui quand un projet apparaît. C'est un objectif beaucoup plus atteignable, et beaucoup plus rentable.",
        },
        { type: "heading", text: "Le positionnement en une phrase" },
        {
          type: "compare",
          left: {
            title: "Positionnement générique",
            items: [
              "« Conseiller immobilier passionné »",
              "« À votre écoute pour tous vos projets »",
              "« Votre partenaire immobilier de confiance »",
              "« Expert de l'immobilier depuis 2 ans »",
            ],
          },
          right: {
            title: "Positionnement identifiable",
            items: [
              "« Je vends des appartements dans le quartier des Lices, et je connais chaque copropriété »",
              "« Spécialiste des maisons de ville avec jardin sur le secteur nord »",
              "« J'accompagne les successions immobilières, avec un notaire partenaire »",
              "« Le conseiller qui explique les charges de copropriété avant la visite »",
            ],
          },
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le test du positionnement",
          text:
            "Votre positionnement est-il vrai pour au moins la moitié de vos confrères de la ville ? Si oui, ce n'est pas un positionnement, c'est une description du métier. Cherchez ce qui n'est vrai que pour vous, aujourd'hui ou dans six mois si vous vous y engagez.",
        },
        { type: "heading", text: "Choisir deux canaux, pas six" },
        {
          type: "table",
          head: ["Canal", "Ce qu'il produit", "Effort réel"],
          rows: [
            ["Une page locale simple (site ou fiche établissement)", "Crédibilité et référencement sur le nom et le secteur", "Faible après la mise en place"],
            ["Instagram", "Visibilité visuelle, biens et quartier", "Élevé : demande de la régularité et du visuel"],
            ["Facebook et groupes locaux", "Contact direct avec les habitants du secteur", "Modéré, très efficace localement"],
            ["LinkedIn", "Relations professionnelles, prescripteurs", "Modéré, peu utile pour les particuliers"],
            ["Vidéo courte", "Fort impact, forte différenciation", "Élevé, mais peu de concurrence locale"],
            ["Courrier et boîtage", "Notoriété de quartier cumulative", "Modéré, sous-estimé"],
            ["Presse locale et associations", "Crédibilité et ancrage réel", "Faible mais lent"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "L'erreur du débutant",
          text:
            "Ouvrir six comptes en une semaine, publier intensément pendant un mois, puis tout abandonner. Un compte inactif depuis huit mois nuit davantage à votre image qu'une absence de compte. Choisissez-en deux, et engagez-vous sur six mois.",
        },
        { type: "heading", text: "Produire du contenu utile" },
        {
          type: "paragraph",
          text:
            "La règle est simple : votre contenu doit être utile à quelqu'un qui ne vend pas et n'achète pas aujourd'hui. Sinon vous ne parlez qu'aux 3 % de personnes en projet immédiat, et vous êtes en concurrence directe avec tous vos confrères.",
        },
        {
          type: "list",
          title: "Dix sujets qui fonctionnent réellement",
          ordered: true,
          items: [
            "« Combien s'est réellement vendu l'appartement du 14 » — les prix réels du quartier, sans commentaire.",
            "« Ce que veut dire la ligne “fonds de travaux” sur votre appel de charges. »",
            "« Les cinq documents à réunir avant de vendre, et où les obtenir. »",
            "« Pourquoi deux appartements de la même surface n'ont pas le même prix. »",
            "« Comment lire un DPE en deux minutes. »",
            "« Ce que le notaire vérifie entre le compromis et la signature. »",
            "« Les travaux qui se récupèrent à la revente, et ceux qui ne se récupèrent pas. »",
            "« Le point de marché du trimestre sur le quartier », en chiffres.",
            "« Ce qu'il faut vérifier avant d'acheter en copropriété. »",
            "« Les questions à poser à une agence avant de signer un mandat. »",
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "Le contenu qui vous vaudra des mandats",
          text:
            "Le dernier sujet de cette liste — les questions à poser à une agence avant de signer — est celui qui fonctionne le mieux, parce qu'il est manifestement écrit dans l'intérêt du lecteur et non dans le vôtre. C'est exactement pour cela qu'il vous positionne.",
        },
        { type: "heading", text: "Les témoignages" },
        {
          type: "list",
          items: [
            "Demandez-le au bon moment : juste après la signature de l'acte, jamais pendant la commercialisation.",
            "Facilitez le geste : proposez trois questions plutôt qu'une page blanche.",
            "Obtenez un accord écrit pour la publication du prénom, de l'initiale et du contenu.",
            "N'inventez jamais un témoignage : outre la question déontologique, un faux avis relève des pratiques commerciales trompeuses.",
            "Un témoignage précis (« il a obtenu les documents du syndic en dix jours ») vaut dix témoignages génériques.",
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Règles applicables",
          text:
            "Toute communication professionnelle doit permettre d'identifier le professionnel et sa qualité. Les mentions relatives aux prix, aux honoraires et au DPE s'appliquent aussi sur les réseaux sociaux. La publication de photographies d'un bien suppose l'accord du mandant, et la publication d'un témoignage celle de son auteur. Les faux avis sont sanctionnés. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["branding", "secteur", "recommandation", "deontologie", "rgpd"],
        },
      ],
      keyPoints: [
        "L'objectif est la notoriété de quartier, pas l'audience nationale.",
        "Un positionnement vrai pour la moitié de vos confrères n'est pas un positionnement.",
        "Deux canaux tenus six mois valent mieux que six canaux abandonnés.",
        "Le contenu doit être utile à quelqu'un qui n'a pas de projet immédiat.",
        "Un témoignage précis vaut dix témoignages génériques.",
        "Les mentions obligatoires s'appliquent aussi sur les réseaux sociaux.",
      ],
      mistakes: [
        "Ouvrir six comptes puis les abandonner.",
        "Ne publier que ses propres annonces.",
        "Publier une photo de bien sans accord du mandant.",
        "Rédiger soi-même des témoignages clients.",
      ],
      quiz: [
        {
          id: "br1q1",
          type: "qcm",
          question: "Quel contenu est le plus efficace pour se positionner localement ?",
          options: [
            "La publication quotidienne de ses annonces",
            "Une information utile à quelqu'un qui n'a pas de projet immédiat, comme les prix réels du quartier",
            "Des photos de sa voiture et de son bureau",
            "Le partage d'articles nationaux sur l'immobilier",
          ],
          answer: 1,
          explanation:
            "Une information utile touche l'ensemble des habitants, pas seulement la petite fraction en projet immédiat, et installe une notoriété durable au lieu d'une visibilité ponctuelle.",
          skill: "branding",
          topic: "contenu",
        },
        {
          id: "br1q2",
          type: "vraifaux",
          question: "Il vaut mieux être présent sur six réseaux sociaux que sur deux.",
          answer: 1,
          explanation:
            "Faux. La régularité prime : deux canaux tenus six mois produisent bien davantage que six comptes abandonnés, qui nuisent à l'image professionnelle.",
          skill: "branding",
          topic: "canaux",
        },
        {
          id: "br1q3",
          type: "qcm",
          question: "Quand demander un témoignage à un client ?",
          options: [
            "Dès la signature du mandat",
            "Juste après la signature de l'acte authentique",
            "Pendant la négociation",
            "Un an après la vente",
          ],
          answer: 1,
          explanation:
            "La satisfaction est maximale à l'aboutissement du projet. Demander plus tôt place le client dans une position gênante ; demander trop tard réduit fortement le taux de réponse.",
          skill: "branding",
          topic: "temoignages",
        },
      ],
      sources: [
        { label: "DGCCRF — Avis en ligne et pratiques commerciales", url: "https://www.economie.gouv.fr/dgccrf" },
        { label: "CNIL — Réseaux sociaux et données personnelles", url: "https://www.cnil.fr/" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
