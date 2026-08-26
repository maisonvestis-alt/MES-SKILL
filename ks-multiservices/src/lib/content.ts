// Source unique de vérité pour le contenu réel de KS Multiservices.
// Toute donnée ici provient des informations fournies par le client.
// Ne rien inventer : un champ non fourni reste absent plutôt que complété par une valeur plausible.

export const business = {
  name: "KS Multiservices",
  phone: "06 38 98 78 30",
  phoneHref: "+33638987830",
  address: {
    line1: "2 All. François Mauriac",
    postalCode: "76610",
    city: "Le Havre",
    full: "2 All. François Mauriac, 76610 Le Havre",
  },
  availability: "Disponible 24h/24 et 7j/7, y compris les jours fériés",
  serviceArea: {
    base: "Le Havre",
    note: "Le Havre et son agglomération — contactez-nous pour confirmer votre commune",
  },
} as const;

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
      { slug: "recherche-fuite-deau", label: "Recherche de fuite d'eau" },
      { slug: "reparation-fuite-deau", label: "Réparation de fuite d'eau" },
      { slug: "reparation-chauffe-eau", label: "Réparation chauffe-eau" },
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
      { slug: "reparation-apres-effraction", label: "Réparation après effraction" },
      { slug: "securisation-apres-cambriolage", label: "Sécurisation après cambriolage" },
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
      {
        slug: "fermeture-provisoire-apres-effraction",
        label: "Fermeture provisoire après effraction",
      },
      { slug: "reparation-de-double-vitrage", label: "Réparation de double vitrage" },
      { slug: "remplacement-de-double-vitrage", label: "Remplacement de double vitrage" },
      {
        slug: "pose-de-survitrage-vitrage-isolant",
        label: "Pose de survitrage / vitrage isolant",
      },
    ],
  },
];

export const renovationService = {
  name: "Travaux et rénovation salle de bain",
  description:
    "Au-delà de l'urgence, KS Multiservices conçoit et réalise vos travaux de rénovation de salle de bain : carrelage, douche à l'italienne, receveur, plomberie et finitions.",
};

// Réalisations transmises par le client. Les fichiers image réels doivent être ajoutés
// dans /public/gallery/ puis référencés ici (src) — voir README du projet.
export const galleryItems = [
  {
    id: "renovation-sdb-1",
    caption: "Rénovation salle de bain — Le Havre",
    detail: "Douche à l'italienne, mosaïque sol et vasque suspendue rétroéclairée.",
    src: null as string | null,
  },
  {
    id: "renovation-sdb-2",
    caption: "Rénovation salle de bain — Le Havre",
    detail: "Douche à l'italienne, niches de rangement carrelées et faïence pierre naturelle.",
    src: null as string | null,
  },
  {
    id: "renovation-sdb-3",
    caption: "Rénovation salle de bain — Le Havre",
    detail: "Paroi de douche vitrée sur mesure, habillage bois et receveur extra-plat.",
    src: null as string | null,
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
    description: "Déplacement sur Le Havre et son agglomération, dans les meilleurs délais.",
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
    title: "Trois métiers, un seul interlocuteur",
    description:
      "Plomberie, serrurerie et vitrerie réunies sous un même numéro : plus besoin de chercher un artisan différent pour chaque urgence.",
  },
  {
    title: "Disponible jour et nuit",
    description:
      "24h/24, 7j/7, jours fériés compris — une urgence n'attend pas les horaires de bureau.",
  },
  {
    title: "Ancré au Havre",
    description:
      "Basé au Havre, pour une intervention locale sans délai de trajet démesuré.",
  },
  {
    title: "De l'urgence au chantier",
    description:
      "Du dépannage express à la rénovation complète de salle de bain, un seul partenaire du premier appel à la dernière finition.",
  },
] as const;
