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
  surchargePolicy:
    "Nos tarifs sont les mêmes de jour comme de nuit, week-end et jours fériés compris — aucune majoration horaire.",
} as const;

// Moyens de paiement acceptés, transmis par le client.
export const paymentMethods = ["carte bancaire", "chèque"] as const;

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


// Vidéo hero : à fournir par le client (MP4 + WebM, muette, 8-10s, <2 Mo).
// En attendant, le hero utilise la meilleure photo réelle comme image plein
// écran — jamais de vidéo de banque d'images ni de placeholder générique.
export const heroMedia = {
  videoMp4: null as string | null,
  videoWebm: null as string | null,
  poster: "/gallery/douche-italienne-travertin.jpg",
  posterAlt: "Douche à l'italienne en travertin réalisée par KS Multiservices au Havre",
  posterWidth: 900,
  posterHeight: 1175,
};

export type ServiceItem = {
  slug: string;
  label: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  pageIntro: string;
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
    pageIntro:
      "Une fuite qui s'aggrave, des toilettes bouchées, un chauffe-eau en panne : chaque minute compte. KS Multiservices intervient au Havre et dans son agglomération en moins de 45 minutes, 24h/24 et 7j/7, pour tous vos dépannages de plomberie — du simple débouchage aux travaux sanitaires complets et à la rénovation de salle de bain.",
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
    pageIntro:
      "Porte claquée devant chez vous, serrure forcée après une tentative d'effraction, besoin de sécuriser votre logement : KS Multiservices intervient au Havre et dans son agglomération en moins de 45 minutes, 24h/24 et 7j/7, pour ouvrir, réparer ou sécuriser votre porte sans dégât inutile.",
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
    pageIntro:
      "Vitre cassée, double vitrage endommagé, bris de glace après une effraction : KS Multiservices intervient au Havre et dans son agglomération en moins de 45 minutes, 24h/24 et 7j/7, pour une mise en sécurité immédiate et un remplacement sur mesure de votre vitrage.",
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
export type GalleryItem = {
  id: string;
  caption: string;
  detail: string;
  src: string;
  width: number;
  height: number;
  // "Avant" à fournir par le client pour activer le slider comparatif.
  // Reste `null` tant qu'aucune photo avant-travaux n'est transmise.
  beforeSrc: string | null;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "renovation-sdb-douche-italienne",
    caption: "Douche à l'italienne en travertin",
    detail: "Colonne de douche thermostatique, niches de rangement carrelées et faïence pierre naturelle.",
    src: "/gallery/douche-italienne-travertin.jpg",
    width: 900,
    height: 1175,
    beforeSrc: null,
  },
  {
    id: "renovation-sdb-baignoire-carreaux-ciment",
    caption: "Salle de bain baignoire encastrée",
    detail: "Baignoire habillée de carreaux de ciment, vasque suspendue et miroir rétroéclairé sur mesure.",
    src: "/gallery/salle-de-bain-baignoire-carreaux-ciment.jpg",
    width: 900,
    height: 1481,
    beforeSrc: null,
  },
  {
    id: "renovation-sdb-douche-vitree-bois",
    caption: "Douche vitrée sur mesure",
    detail: "Paroi de douche coulissante vitrée, habillage imitation bois et receveur extra-plat.",
    src: "/gallery/douche-vitree-bois.jpg",
    width: 900,
    height: 1156,
    beforeSrc: null,
  },
  {
    id: "renovation-sdb-vasque-bois-miroir-led",
    caption: "Vasque suspendue et miroir LED",
    detail: "Meuble vasque bois clair, miroir lumineux sur mesure et colonne de rangement assortie.",
    src: "/gallery/vasque-bois-miroir-led.jpg",
    width: 900,
    height: 1171,
    beforeSrc: null,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Appel",
    description: "Un numéro unique, 24h/24 — on décroche, jour comme nuit.",
  },
  {
    step: "02",
    title: "Diagnostic",
    description: "On qualifie l'urgence par téléphone pour envoyer le bon technicien, équipé.",
  },
  {
    step: "03",
    title: "Devis gratuit",
    description: "Un tarif clair, confirmé avant toute intervention.",
  },
  {
    step: "04",
    title: "Intervention",
    description: "Sur place en moins de 45 minutes, sur Le Havre et son agglomération.",
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

export type FaqItem = {
  question: string;
  answer: string;
};

// Questions fréquentes, répondues uniquement à partir des informations déjà
// établies ailleurs sur le site (disponibilité, devis, délai, zone, tarifs).
export const faqItems: FaqItem[] = [
  {
    question: "Intervenez-vous vraiment 24h/24 et 7j/7 ?",
    answer:
      "Oui, KS Multiservices intervient 24h/24 et 7j/7, y compris les jours fériés, pour toute urgence de plomberie, serrurerie ou vitrerie.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui, le devis est gratuit et sans engagement. Le tarif est confirmé avant toute intervention, à partir des prix de départ indiqués sur cette page.",
  },
  {
    question: "En combien de temps intervenez-vous ?",
    answer:
      "Nous nous engageons à intervenir en moins de 45 minutes sur Le Havre et son agglomération. Notre zone d'intervention s'étend aussi à la Côte d'Albâtre, l'estuaire de la Seine et jusqu'à Rouen.",
  },
  {
    question: "Quelles zones couvrez-vous ?",
    answer:
      "Le Havre et son agglomération en priorité, ainsi que la Côte d'Albâtre, l'estuaire de la Seine et jusqu'à Rouen. Consultez la page Zone d'intervention pour la liste complète des communes.",
  },
  {
    question: "Les tarifs affichés sont-ils fermes ?",
    answer:
      "Les tarifs indiqués sont des prix de départ, hors fournitures spécifiques. Le montant final est confirmé sur place avant toute intervention, dans le cadre du devis gratuit.",
  },
  {
    question: "Y a-t-il une majoration la nuit, le week-end ou les jours fériés ?",
    answer: business.surchargePolicy,
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: `Nous acceptons le paiement par ${paymentMethods.join(" et ")}.`,
  },
  {
    question: "Faites-vous aussi la rénovation de salle de bain ?",
    answer:
      "Oui. Au-delà du dépannage d'urgence, KS Multiservices conçoit et réalise des projets complets de rénovation de salle de bain : carrelage, douche à l'italienne, receveur, plomberie et finitions.",
  },
];

export type PriorityCity = {
  slug: string;
  name: string;
  postalCode: string;
  character: string;
  intro: string;
};

// Communes prioritaires avec un contenu réellement différencié (géographie et
// caractère local réels et vérifiables), et non un simple copier-coller avec
// le nom de la ville changé. Les autres communes couvertes restent listées
// sans page dédiée sur /zone-intervention.
export const priorityCities: PriorityCity[] = [
  {
    slug: "le-havre",
    name: "Le Havre",
    postalCode: "76600",
    character: "ville portuaire reconstruite par Auguste Perret, classée au patrimoine mondial de l'UNESCO",
    intro:
      "Basée au Havre, notre équipe connaît aussi bien les immeubles Perret du centre reconstruit que les quartiers résidentiels de Sanvic, Aplemont ou Bléville. Que vous soyez en appartement ou en maison, l'intervention se fait sans délai de trajet : nous sommes déjà sur place.",
  },
  {
    slug: "sainte-adresse",
    name: "Sainte-Adresse",
    postalCode: "76310",
    character: "commune balnéaire nichée entre falaises et bord de mer, au nord du Havre",
    intro:
      "Sainte-Adresse et ses villas en front de mer ou accrochées à la côte présentent souvent des installations anciennes ou des accès particuliers (escaliers, jardins en pente). Notre équipe s'y déplace régulièrement pour des urgences de plomberie, serrurerie et vitrerie, avec le même délai d'intervention qu'au Havre.",
  },
  {
    slug: "montivilliers",
    name: "Montivilliers",
    postalCode: "76290",
    character: "ville historique bâtie autour de son abbaye, dans l'agglomération havraise",
    intro:
      "À Montivilliers, entre le centre ancien autour de l'abbaye et les lotissements plus récents, nous intervenons aussi bien sur des bâtis anciens que sur des constructions modernes — chaque configuration ayant ses propres contraintes de plomberie et de serrurerie.",
  },
  {
    slug: "harfleur",
    name: "Harfleur",
    postalCode: "76700",
    character: "ancien port historique, aujourd'hui commune résidentielle et industrielle de l'agglomération havraise",
    intro:
      "Harfleur mêle un centre ancien resserré et des zones pavillonnaires plus récentes en périphérie. Notre équipe s'adapte à ces deux types d'habitat pour vos urgences de plomberie, serrurerie et vitrerie, avec la même réactivité qu'au Havre voisin.",
  },
  {
    slug: "gonfreville-lorcher",
    name: "Gonfreville-l'Orcher",
    postalCode: "76700",
    character: "commune de la zone industrialo-portuaire du Havre",
    intro:
      "Gonfreville-l'Orcher regroupe à la fois des zones résidentielles et la proximité immédiate de la zone industrialo-portuaire havraise. Nous intervenons chez les particuliers de la commune pour toute urgence de plomberie, serrurerie ou vitrerie, avec le même engagement de délai.",
  },
  {
    slug: "octeville-sur-mer",
    name: "Octeville-sur-Mer",
    postalCode: "76930",
    character: "commune littorale au nord du Havre, à proximité de l'aéroport Le Havre-Octeville",
    intro:
      "Octeville-sur-Mer conserve un caractère résidentiel et semi-rural en bord de falaise, au nord de l'agglomération havraise. Nous nous y déplaçons pour toute urgence de plomberie, serrurerie ou vitrerie, avec le même délai d'intervention que sur Le Havre.",
  },
  {
    slug: "fecamp",
    name: "Fécamp",
    postalCode: "76400",
    character: "port de pêche historique de la Côte d'Albâtre, connu pour le Palais Bénédictine",
    intro:
      "Plus éloignée sur la Côte d'Albâtre, Fécamp reste dans notre zone d'intervention pour vos urgences de plomberie, serrurerie et vitrerie, ainsi que pour vos projets de rénovation de salle de bain.",
  },
  {
    slug: "honfleur",
    name: "Honfleur",
    postalCode: "14600",
    character: "port pittoresque de l'estuaire de la Seine, célèbre pour son Vieux Bassin",
    intro:
      "De l'autre côté de l'estuaire de la Seine, Honfleur et ses maisons à pans de bois autour du Vieux Bassin demandent parfois une attention particulière pour les interventions de vitrerie et de serrurerie sur bâti ancien. Notre équipe s'y déplace pour vos urgences.",
  },
  {
    slug: "bolbec",
    name: "Bolbec",
    postalCode: "76210",
    character: "ancienne ville industrielle du textile, dans le Pays de Caux",
    intro:
      "Bolbec, ancienne cité industrielle du Pays de Caux, associe un centre-ville dense à des quartiers pavillonnaires. Nous y intervenons pour toute urgence de plomberie, serrurerie ou vitrerie, avec un devis gratuit avant chaque intervention.",
  },
  {
    slug: "yvetot",
    name: "Yvetot",
    postalCode: "76190",
    character: "sous-préfecture du Pays de Caux, ville-carrefour connue pour son église Saint-Pierre",
    intro:
      "Yvetot, ville-carrefour du Pays de Caux, fait partie de notre zone d'intervention élargie. Nous nous y déplaçons pour vos urgences de plomberie, serrurerie et vitrerie, ainsi que pour vos projets de rénovation de salle de bain.",
  },
];
