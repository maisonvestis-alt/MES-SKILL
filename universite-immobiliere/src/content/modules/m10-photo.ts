import type { CourseModule } from "@/lib/types";

export const modulePhoto: CourseModule = {
  id: "photo",
  level: 10,
  title: "Photographie immobilière",
  subtitle: "Montrer le bien sans le déformer",
  description:
    "Les photos déclenchent ou empêchent la visite. Ce module donne les règles techniques essentielles, l'ordre de présentation, et la frontière entre mise en valeur légitime et tromperie.",
  icon: "📸",
  skills: ["marketing"],
  requires: ["annonce"],
  outcomes: [
    "Préparer un logement avant un reportage photo",
    "Appliquer les règles de lumière, de cadrage et de verticalité",
    "Ordonner les photos selon la logique de découverte",
    "Distinguer retouche acceptable et représentation trompeuse",
  ],
  lessons: [
    {
      id: "ph1",
      moduleId: "photo",
      title: "Lumière, cadrage, verticales : les règles qui suffisent",
      summary:
        "Les huit règles techniques qui transforment des photos amateurs en reportage crédible, sans matériel professionnel.",
      duration: 15,
      difficulty: "debutant",
      skills: ["marketing"],
      objectives: [
        "Choisir le bon moment de la journée selon l'exposition",
        "Appliquer les règles de hauteur, d'angle et de verticalité",
        "Ordonner les photos pour raconter le bien",
        "Identifier les photos qui font perdre des acquéreurs",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Vous n'avez pas besoin d'être photographe professionnel, mais vous devez connaître huit règles. Elles expliquent la quasi-totalité de l'écart entre un reportage qui déclenche des visites et une série de photos qui n'en déclenche aucune.",
        },
        {
          type: "steps",
          title: "Les huit règles",
          items: [
            {
              title: "1. Photographier au bon moment",
              text: "Un logement exposé est photographié quand le soleil entre : le matin pour l'est, l'après-midi pour l'ouest, en milieu de journée pour le sud. Un logement au nord se photographie par temps clair mais couvert, la lumière étant plus douce et régulière.",
            },
            {
              title: "2. Allumer toutes les lumières, ouvrir tous les rideaux",
              text: "Même en plein jour. Les lampes allumées créent des points chauds qui rendent les pièces accueillantes et compensent l'écart de luminosité entre l'intérieur et les fenêtres.",
            },
            {
              title: "3. Tenir l'appareil droit",
              text: "Les lignes verticales — murs, portes, fenêtres — doivent être verticales sur la photo. Une photo penchée donne une impression d'amateurisme et déforme les volumes. Activez la grille de votre appareil.",
            },
            {
              title: "4. Photographier à hauteur de poitrine",
              text: "Environ 1,20 à 1,40 m du sol, jamais à hauteur d'yeux ni au niveau du sol. Cette hauteur donne les proportions les plus naturelles.",
            },
            {
              title: "5. Se placer dans un angle",
              text: "Photographier depuis un coin de la pièce montre deux murs et donne de la profondeur. Photographier face à un mur écrase l'espace.",
            },
            {
              title: "6. Cadrer large mais sans excès",
              text: "Un grand angle raisonnable montre le volume. Un très grand angle déforme, allonge les pièces et crée une déception en visite — qui se retourne contre vous.",
            },
            {
              title: "7. Ranger avant, pas retoucher après",
              text: "Tapis de bain, produits ménagers, poubelle, chaussures, magnets sur le réfrigérateur, câbles apparents, cuvette des WC ouverte. Trois minutes de rangement valent une heure de retouche.",
            },
            {
              title: "8. Photographier chaque pièce",
              text: "Une pièce absente du reportage est immédiatement suspecte. S'il y a une pièce difficile à montrer, montrez-la quand même : mieux vaut un acquéreur informé qu'un acquéreur déçu sur place.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "La règle la plus rentable",
          text:
            "Nettoyer les vitres. L'effet sur la luminosité perçue d'une photo est spectaculaire et coûte une heure. Beaucoup de reportages médiocres le sont uniquement à cause de vitres sales qui grisent toute l'image.",
        },
        { type: "heading", text: "L'ordre des photos" },
        {
          type: "list",
          ordered: true,
          items: [
            "La photo la plus vendeuse en premier : le séjour lumineux, la terrasse, la vue, la façade pour une maison.",
            "La pièce de vie sous un second angle.",
            "La cuisine.",
            "L'extérieur, s'il existe.",
            "Les chambres, de la plus grande à la plus petite.",
            "La salle de bains, puis les WC si présentables.",
            "Les annexes : cave, garage, buanderie.",
            "Une vue d'ensemble ou une photo de l'environnement immédiat en clôture.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le nombre de photos",
          text:
            "Entre douze et vingt photos pour un logement standard. En dessous de huit, l'annonce semble cacher quelque chose. Au-delà de vingt-cinq, l'acquéreur a l'impression d'avoir déjà visité et ne se déplace plus.",
        },
        { type: "heading", text: "La frontière entre mise en valeur et tromperie" },
        {
          type: "compare",
          left: {
            title: "Acceptable",
            items: [
              "Corriger la luminosité et le contraste dans des proportions raisonnables",
              "Redresser les verticales",
              "Ranger et désencombrer avant la prise de vue",
              "Choisir le meilleur moment de la journée",
              "Utiliser un grand angle modéré",
            ],
          },
          right: {
            title: "Trompeur, à proscrire",
            items: [
              "Supprimer numériquement un immeuble, un poteau ou un vis-à-vis",
              "Ajouter un ciel bleu sur une photo grise",
              "Meubler virtuellement sans le signaler explicitement",
              "Utiliser un très grand angle qui double la longueur apparente d'une pièce",
              "Ne photographier que trois pièces sur six",
              "Réutiliser des photos d'une saison flatteuse pour un bien vendu en hiver, sans le préciser",
            ],
          },
        },
        {
          type: "callout",
          variant: "danger",
          title: "Pourquoi la tromperie ne fonctionne pas",
          text:
            "Une photo trompeuse produit des visites, puis des déceptions et des refus immédiats. Vous faites perdre du temps au vendeur, à l'acquéreur et à vous-même, et vous abîmez votre réputation auprès d'acquéreurs qui reviendront sur d'autres biens. Au-delà de la question déontologique, c'est simplement inefficace.",
        },
        {
          type: "callout",
          variant: "legal",
          title: "Home staging virtuel",
          text:
            "Si vous utilisez un meublement virtuel, la mention doit être explicite et visible sur chaque image concernée. Une représentation susceptible d'induire le consommateur en erreur relève des pratiques commerciales trompeuses. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["marketing", "commercialisation", "deontologie"],
        },
      ],
      keyPoints: [
        "Photographier au moment où le soleil entre, lumières allumées et rideaux ouverts.",
        "Verticales droites, hauteur de 1,20 à 1,40 m, prise de vue depuis un angle.",
        "Grand angle modéré : la déformation se paie en visite.",
        "Ranger avant vaut mieux que retoucher après ; nettoyer les vitres change tout.",
        "Douze à vingt photos, toutes les pièces représentées.",
        "Supprimer un élément gênant ou ajouter un ciel relève de la représentation trompeuse.",
      ],
      mistakes: [
        "Photographier à contre-jour devant une fenêtre.",
        "Omettre une pièce jugée peu flatteuse.",
        "Utiliser un très grand angle pour agrandir les volumes.",
        "Publier moins de huit photos.",
      ],
      quiz: [
        {
          id: "ph1q1",
          type: "qcm",
          question: "À quelle hauteur photographier une pièce ?",
          options: ["Au niveau du sol", "Entre 1,20 et 1,40 m", "À hauteur d'yeux, environ 1,70 m", "Le plus haut possible"],
          answer: 1,
          explanation:
            "Une hauteur de 1,20 à 1,40 m donne les proportions les plus naturelles et évite l'écrasement du plafond comme la déformation du sol.",
          skill: "marketing",
          topic: "photo",
        },
        {
          id: "ph1q2",
          type: "qcm",
          question: "Une pièce n'apparaît sur aucune photo de l'annonce. Quel est l'effet ?",
          options: [
            "L'acquéreur ne le remarque pas",
            "L'acquéreur suppose qu'elle est en mauvais état et se méfie de toute l'annonce",
            "Cela crée un effet de surprise favorable en visite",
            "Cela réduit le temps de chargement de l'annonce",
          ],
          answer: 1,
          explanation:
            "Une absence est immédiatement interprétée comme une dissimulation. Mieux vaut montrer une pièce imparfaite qu'éveiller la suspicion sur l'ensemble.",
          skill: "marketing",
          topic: "photo",
        },
        {
          id: "ph1q3",
          type: "vraifaux",
          question: "Supprimer numériquement un poteau électrique gênant sur la photo de façade est une retouche acceptable.",
          answer: 1,
          explanation:
            "Faux. Supprimer un élément de l'environnement modifie la réalité du bien et peut constituer une pratique commerciale trompeuse. La correction de luminosité et le redressement des verticales sont, eux, acceptables.",
          skill: "marketing",
          topic: "photo",
        },
        {
          id: "ph1q4",
          type: "qcm",
          question: "Combien de photos pour un logement standard ?",
          options: ["3 à 5", "12 à 20", "30 à 40", "Le plus possible"],
          answer: 1,
          explanation:
            "En dessous de huit, l'annonce paraît cacher quelque chose. Au-delà de vingt-cinq, l'acquéreur a le sentiment d'avoir déjà tout vu et ne se déplace plus.",
          skill: "marketing",
          topic: "photo",
        },
      ],
      sources: [
        { label: "DGCCRF — Pratiques commerciales trompeuses", url: "https://www.economie.gouv.fr/dgccrf" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
