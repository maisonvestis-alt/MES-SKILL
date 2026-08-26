// Source unique de vérité pour le contenu réel de KS Multiservices.
// Toute donnée ici provient des informations fournies par le client.
// Ne rien inventer : un champ non fourni reste absent plutôt que complété par une valeur plausible.

export const business = {
  name: "KS Multiservices",
  phone: "06 38 98 78 30",
  phoneHref: "+33638987830",
  email: "ksmultiservice.contact@gmail.fr",
  address: {
    line1: "2 All. François Mauriac",
    postalCode: "76610",
    city: "Le Havre",
    full: "2 All. François Mauriac, 76610 Le Havre",
  },
  availability: "Disponible 24h/24 et 7j/7, y compris les jours fériés",
  quoteDisclaimer: "Devis gratuit",
  responsePromise: "Intervention en moins de 45 minutes",
  serviceArea: {
    base: "Le Havre",
    note: "Le Havre et son agglomération — contactez-nous pour confirmer votre commune",
  },
} as const;

// Informations légales transmises par le client (extrait registre / SIRENE).
// Le directeur de publication et l'hébergeur restent à compléter : non fournis.
export const legalInfo = {
  raisonSociale: "KS MULTISERVICES",
  formeJuridique: "SAS (Société par actions simplifiée)",
  siren: "953 817 491",
  siret: "953 817 491 00012",
  apeCode: "43.22A",
  apeLabel: "Travaux d'installation d'eau et de gaz en tous locaux",
  tvaIntracommunautaire: "FR15 953 817 491",
  dateCreation: "27 juin 2023",
} as const;

// Avis clients — chiffre actuel de la fiche d'établissement locale (le plus à jour).
export const reviews = {
  rating: 4.6,
  count: 125,
  source: "avis Google",
} as const;

export const trustStats = [
  { label: "Intervention en moins de", value: "45 min" },
  { label: "Disponibilité", value: "24h/24 · 7j/7" },
  { label: "Devis", value: "Gratuit" },
  { label: `${reviews.rating}/5 sur ${reviews.count} ${reviews.source}`, value: `${reviews.rating}★` },
] as const;

export type ServiceItem = {
  slug: string;
  label: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  items: ServiceItem[];
};

// Catégories et intitulés exacts fournis par le client (arborescence ksmultiservices.fr/pannes-interventions/).
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "plomberie",
    name: "Plomberie",
    shortLabel: "Plomberie",
    description:
      "Fuites, canalisations bouchées, chauffe-eau en panne : une intervention rapide pour éviter que le problème ne s'aggrave.",
    items: [
      { slug: "debouchage-wc", label: "Débouchage WC" },
      { slug: "debouchage-canalisation", label: "Débouchage canalisation" },
      { slug: "recherche-fuite-deau", label: "Recherche de fuite" },
      { slug: "reparation-fuite-deau", label: "Réparation de fuite" },
      { slug: "reparation-chauffe-eau", label: "Réparation de chauffe-eau" },
      { slug: "depannage-plomberie", label: "Dépannage plomberie" },
      { slug: "travaux-sanitaires", label: "Travaux sanitaires" },
      { slug: "renovation-creation-salle-de-bain", label: "Rénovation / création de salle de bain" },
    ],
  },
  {
    slug: "serrurerie",
    name: "Serrurerie",
    shortLabel: "Serrurerie",
    description:
      "Porte claquée, serrure forcée, sécurisation après effraction : une remise en sécurité rapide de votre logement.",
    items: [
      { slug: "ouverture-de-porte-claquee", label: "Ouverture de porte claquée" },
      { slug: "ouverture-de-porte-blindee", label: "Ouverture de porte blindée" },
      { slug: "changement-de-serrure", label: "Changement de serrure" },
      { slug: "changement-cylindre-barillet", label: "Changement de cylindre / barillet" },
      { slug: "reparation-apres-effraction", label: "Réparation après effraction" },
      { slug: "securisation-apres-cambriolage", label: "Sécurisation après cambriolage" },
      { slug: "mise-en-securite", label: "Mise en sécurité" },
      { slug: "serrures-multipoints", label: "Serrures multipoints" },
      { slug: "solutions-de-securite", label: "Solutions de sécurité" },
    ],
  },
  {
    slug: "vitrerie",
    name: "Vitrerie",
    shortLabel: "Vitrerie",
    description:
      "Vitre cassée, double vitrage endommagé, fermeture d'urgence : une protection immédiate de votre habitation.",
    items: [
      { slug: "remplacement-de-vitre-cassee", label: "Remplacement de vitre cassée" },
      { slug: "double-vitrage", label: "Double vitrage" },
      { slug: "reparation-de-double-vitrage", label: "Réparation de double vitrage" },
      { slug: "remplacement-de-vitrage", label: "Remplacement de vitrage" },
      { slug: "remplacement-de-vitrine", label: "Remplacement de vitrine" },
      { slug: "fermeture-provisoire-apres-effraction", label: "Fermeture provisoire après effraction" },
      { slug: "mise-en-securite-apres-bris-de-glace", label: "Mise en sécurité après bris de glace" },
      { slug: "vitrage-isolant-survitrage", label: "Vitrage isolant / survitrage" },
      { slug: "verre-sur-mesure", label: "Verre sur mesure" },
      { slug: "cremone", label: "Crémone" },
      { slug: "fenetres-pvc-aluminium", label: "Fenêtres PVC / aluminium" },
    ],
  },
];

export const renovationService = {
  name: "Travaux et rénovation salle de bain",
  description:
    "Au-delà de l'urgence, KS Multiservices conçoit et réalise vos travaux de rénovation de salle de bain : carrelage, douche à l'italienne, receveur, plomberie et finitions.",
};

// Tarifs indicatifs transmis par le client — prix de départ, confirmés après diagnostic.
export type PricingItem = {
  label: string;
  price: string;
};

export type PricingCategory = {
  categorySlug: string;
  items: PricingItem[];
};

export const pricing: PricingCategory[] = [
  {
    categorySlug: "plomberie",
    items: [
      { label: "Débouchage WC", price: "110 €" },
      { label: "Débouchage canalisation", price: "150 €" },
      { label: "Recherche de fuite", price: "150 €" },
      { label: "Réparation de fuite", price: "85 €" },
      { label: "Réparation ballon d'eau chaude", price: "150 €" },
    ],
  },
  {
    categorySlug: "serrurerie",
    items: [
      { label: "Ouverture de porte", price: "110 €" },
      { label: "Ouverture porte blindée", price: "300 €" },
      { label: "Changement serrure", price: "150 €" },
      { label: "Réparation après effraction", price: "150 €" },
      { label: "Sécurisation après cambriolage", price: "150 €" },
    ],
  },
  {
    categorySlug: "vitrerie",
    items: [
      { label: "Vitre simple", price: "100 €" },
      { label: "Double vitrage", price: "150 €" },
      { label: "Remplacement vitrine", price: "250 €" },
      { label: "Mise en sécurité après bris de glace", price: "120 €" },
      { label: "Découpe et pose de verre sur mesure", price: "130 €" },
    ],
  },
];

export const pricingNote =
  "Tarifs de départ, hors fournitures spécifiques et sujétions particulières. Devis gratuit et prix confirmé avant toute intervention.";

// Réalisations réelles transmises par le client (rénovations de salles de bain).
export const galleryItems = [
  {
    id: "renovation-sdb-douche-italienne",
    caption: "Douche à l'italienne en travertin",
    detail: "Colonne de douche thermostatique, niches de rangement carrelées et faïence pierre naturelle.",
    src: "/gallery/douche-italienne-travertin.jpg",
    width: 1170,
    height: 1528,
  },
  {
    id: "renovation-sdb-baignoire-carreaux-ciment",
    caption: "Salle de bain baignoire encastrée",
    detail: "Baignoire habillée de carreaux de ciment, vasque suspendue et miroir rétroéclairé sur mesure.",
    src: "/gallery/salle-de-bain-baignoire-carreaux-ciment.jpg",
    width: 1170,
    height: 1926,
  },
  {
    id: "renovation-sdb-douche-vitree-bois",
    caption: "Douche vitrée sur mesure",
    detail: "Paroi de douche coulissante vitrée, habillage imitation bois et receveur extra-plat.",
    src: "/gallery/douche-vitree-bois.jpg",
    width: 1170,
    height: 1504,
  },
  {
    id: "renovation-sdb-vasque-bois-miroir-led",
    caption: "Vasque suspendue et miroir LED",
    detail: "Meuble vasque bois clair, miroir lumineux sur mesure et colonne de rangement assortie.",
    src: "/gallery/vasque-bois-miroir-led.jpg",
    width: 1170,
    height: 1523,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Vous contactez KS Multiservices",
    description: "Un appel au 06 38 98 78 30, 24h/24 — on décroche, jour comme nuit.",
  },
  {
    step: "02",
    title: "Diagnostic de la situation",
    description: "On qualifie l'urgence par téléphone pour envoyer le bon technicien, équipé.",
  },
  {
    step: "03",
    title: "Intervention rapide",
    description: "Déplacement sur Le Havre et son agglomération, en moins de 45 minutes.",
  },
  {
    step: "04",
    title: "Résolution du problème",
    description: "Plomberie, serrurerie ou vitrerie : le geste technique juste, sans improviser.",
  },
  {
    step: "05",
    title: "Votre tranquillité retrouvée",
    description: "Logement sécurisé et fonctionnel, sans rendez-vous à rallonge.",
  },
] as const;

// Arguments réels, déduits uniquement des informations fournies (pas de chiffres inventés).
export const differentiators = [
  {
    title: "Intervention en moins de 45 minutes",
    description:
      "Une urgence plomberie, serrurerie ou vitrerie ? Notre équipe se déplace rapidement sur Le Havre et son agglomération.",
  },
  {
    title: "Disponible jour et nuit",
    description:
      "24h/24, 7j/7, jours fériés compris — une urgence n'attend pas les horaires de bureau.",
  },
  {
    title: "Devis gratuit et tarifs transparents",
    description:
      "Un devis gratuit avant toute intervention, avec des tarifs de départ annoncés clairement, sans surprise.",
  },
  {
    title: `${reviews.rating}/5 sur ${reviews.count} avis`,
    description:
      "Depuis 2022, plus de 1000 clients font confiance à KS Multiservices pour leurs urgences et leurs travaux.",
  },
] as const;

export type ServiceAreaGroup = {
  title: string;
  communes: string[];
};

// Zones d'intervention transmises par le client, regroupées par secteur géographique.
export const serviceAreaGroups: ServiceAreaGroup[] = [
  {
    title: "Secteur principal — Le Havre et agglomération",
    communes: [
      "Le Havre",
      "Sainte-Adresse",
      "Montivilliers",
      "Harfleur",
      "Gonfreville-l'Orcher",
      "Gainneville",
      "Rogerville",
      "Oudalle",
      "Sandouville",
      "Épouville",
      "Fontaine-la-Mallet",
      "Octeville-sur-Mer",
      "Cauville-sur-Mer",
      "Manéglise",
      "Saint-Martin-du-Manoir",
      "Saint-Laurent-de-Brèvedent",
      "Rolleville",
      "Criquetot-l'Esneval",
    ],
  },
  {
    title: "Côte d'Albâtre et Pays de Caux",
    communes: ["Étretat", "Fécamp", "Goderville", "Bolbec", "Lillebonne", "Port-Jérôme-sur-Seine", "Yvetot"],
  },
  {
    title: "Estuaire de la Seine et Calvados",
    communes: [
      "Honfleur",
      "Équemauville",
      "Beuzeville",
      "Trouville-sur-Mer",
      "Deauville",
      "Touques",
      "Villers-sur-Mer",
      "Dives-sur-Mer",
      "Cabourg",
      "Pont-l'Évêque",
    ],
  },
  {
    title: "Vers Rouen",
    communes: ["Bourg-Achard", "Pont-de-l'Arche", "Elbeuf", "Rouen"],
  },
];
