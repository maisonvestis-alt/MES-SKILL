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

// URL canonique du site (à confirmer si le domaine définitif change).
export const siteUrl = "https://ksmultiservices.fr";

// Coordonnées géographiques indicatives (centre du Havre) pour l'affichage et
// le référencement local. Ce ne sont pas les coordonnées exactes du siège.
export const geo = {
  label: "49.4938° N — 0.1077° E",
  latitude: 49.4938,
  longitude: 0.1077,
} as const;

// Mentions légales / entreprise. AUCUNE valeur inventée : tout champ non fourni
// reste `null` et s'affiche « à compléter » tant que le client ne l'a pas transmis.
export const legalInfo: Record<string, string | null> = {
  formeJuridique: null,
  capital: null,
  siret: null,
  rcs: null,
  apeNaf: null,
  tvaIntracommunautaire: null,
  directeurPublication: null,
  assuranceRcPro: null, // assureur + n° de police (responsabilité civile pro)
  assuranceDecennale: null, // le cas échéant selon les prestations
  hebergeur: null,
};

/*
  Tarifs & devis — obligations d'affichage.
  Réf. : arrêté du 24 janvier 2017 relatif à la publicité des prix des prestations
  de dépannage, de réparation et d'entretien dans le secteur du bâtiment et de
  l'équipement de la maison (en vigueur depuis le 1er avril 2017). Le professionnel
  doit rendre ces informations accessibles sur son espace en ligne.
  Les montants ne sont PAS inventés : ils restent `null` jusqu'à transmission par
  le client, et le bloc affiche « à communiquer » plutôt qu'un chiffre plausible.
*/
export const pricing = {
  hourlyRateTTC: null as string | null, // taux horaire de main-d'œuvre TTC
  calloutFeeTTC: null as string | null, // frais de déplacement TTC
  timeAccounting: null as string | null, // modalités de décompte du temps passé
  quote: {
    // Le devis peut être gratuit ou payant : à préciser par le client.
    isFree: null as boolean | null,
    costIfPaid: null as string | null,
  },
  // Notes réglementaires factuelles (pas des engagements chiffrés du client).
  legalNotes: [
    "Un devis écrit est établi avant toute intervention de dépannage, de réparation ou d'entretien à domicile (devis obligatoire dès le premier euro, arrêté du 24 janvier 2017).",
    "Prix exprimés toutes taxes comprises (TTC), frais de déplacement inclus le cas échéant.",
    "Pour une réparation urgente à domicile, expressément demandée, le droit de rétractation de 14 jours ne s'applique pas aux pièces et travaux strictement nécessaires pour répondre à l'urgence ; vous en êtes informé avant l'intervention (code de la consommation).",
  ],
} as const;

// Questions fréquentes — réponses strictement factuelles (disponibilité, zone,
// prestations réelles, cadre légal). Sert aussi au JSON-LD FAQPage.
export const faq = [
  {
    question: "Intervenez-vous la nuit, le week-end et les jours fériés ?",
    answer:
      "Oui. KS Multiservices est disponible 24h/24 et 7j/7, jours fériés compris, pour vos urgences de plomberie, serrurerie et vitrerie.",
  },
  {
    question: "Quelles communes couvrez-vous ?",
    answer:
      "Le Havre et son agglomération. Contactez-nous pour confirmer que votre commune est desservie.",
  },
  {
    question: "Quels dépannages réalisez-vous ?",
    answer:
      "Plomberie (fuite, canalisation bouchée, chauffe-eau), serrurerie (porte claquée ou forcée, changement de serrure) et vitrerie (vitre cassée, double vitrage, fermeture d'urgence).",
  },
  {
    question: "Un devis est-il fourni avant l'intervention ?",
    answer:
      "Oui. La réglementation impose un devis écrit avant tout dépannage à domicile (arrêté du 24 janvier 2017) : il vous est remis avant le début des travaux.",
  },
  {
    question: "Comment vous joindre le plus rapidement ?",
    answer:
      "Par téléphone au 06 38 98 78 30 : on décroche jour et nuit. C'est la voie la plus rapide pour une urgence.",
  },
  {
    question: "Faites-vous aussi des travaux de rénovation ?",
    answer:
      "Oui, au-delà de l'urgence : rénovation de salle de bain (carrelage, douche à l'italienne, plomberie et finitions).",
  },
] as const;
