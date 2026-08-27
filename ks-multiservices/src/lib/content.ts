/**
 * Source unique de vérité du contenu KS Multiservices.
 *
 * RÈGLE : tout ce qui est présenté au visiteur comme un fait (coordonnées,
 * prestations, zone d'intervention) provient des informations réellement
 * fournies par l'entreprise. Rien n'est inventé ici : un champ inconnu reste
 * absent plutôt que rempli d'une valeur plausible.
 *
 * Les seules données fictives du fichier sont les avis (`testimonials`) et les
 * visuels de la galerie ; elles sont explicitement marquées `placeholder: true`
 * et doivent être remplacées avant la mise en ligne (voir README).
 */

export const business = {
  name: "KS Multiservices",
  legalName: "KS Multiservices",
  tagline: "Serrurerie · Plomberie · Vitrerie",
  phone: "06 38 98 78 30",
  phoneHref: "+33638987830",
  address: {
    line1: "2 All. François Mauriac",
    postalCode: "76610",
    city: "Le Havre",
    country: "FR",
    full: "2 All. François Mauriac, 76610 Le Havre",
  },
  availability: "Disponible 24h/24 et 7j/7, y compris les jours fériés",
  availabilityShort: "24h/24 · 7j/7",
  // Coordonnées approximatives du Havre — utilisées uniquement pour le rendu
  // graphique de la carte (aucune géolocalisation exacte du siège n'est affichée).
  geo: { lat: 49.4944, lng: 0.1079 },
} as const;

export const siteUrl = "https://ksmultiservices.fr";

/* ─── Services ──────────────────────────────────────────────────────────── */

export type ServiceItem = { slug: string; label: string };

export type ServiceCategory = {
  slug: string;
  name: string;
  /** Métier tel qu'on le cherche localement (utilisé pour les titres SEO). */
  trade: string;
  lead: string;
  description: string;
  /** Situations d'urgence typiques, formulées côté client. */
  urgencies: string[];
  items: ServiceItem[];
  /**
   * Photo d'illustration du métier. `null` tant que les visuels réels de
   * KS Multiservices ne sont pas fournis : le site affiche alors un panneau
   * graphique assumé plutôt qu'une photo de banque d'images. Renseigner un
   * chemin `/services/<fichier>.jpg` suffit à basculer sur la vraie photo.
   */
  image: string | null;
};

// Catégories et intitulés exacts fournis par l'entreprise
// (arborescence ksmultiservices.fr/pannes-interventions/).
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "serrurerie",
    name: "Serrurerie",
    trade: "Serrurier",
    lead: "Porte claquée, serrure forcée, effraction",
    description:
      "Vous êtes bloqué dehors ou votre porte n'est plus sûre : nous ouvrons, réparons et sécurisons sans abîmer plus que nécessaire.",
    urgencies: ["Porte claquée", "Serrure bloquée", "Après effraction"],
    image: null,
    items: [
      { slug: "ouverture-de-porte-claquee", label: "Ouverture de porte claquée" },
      { slug: "ouverture-de-porte-blindee", label: "Ouverture de porte blindée" },
      { slug: "changement-de-serrure", label: "Changement de serrure" },
      { slug: "reparation-apres-effraction", label: "Réparation après effraction" },
      { slug: "securisation-apres-cambriolage", label: "Sécurisation après cambriolage" },
    ],
  },
  {
    slug: "plomberie",
    name: "Plomberie",
    trade: "Plombier",
    lead: "Fuite d'eau, canalisation bouchée, chauffe-eau",
    description:
      "Une fuite ou un engorgement ne se règle pas avec une bassine : recherche de l'origine, réparation, remise en service.",
    urgencies: ["Fuite d'eau", "WC ou canalisation bouchés", "Chauffe-eau en panne"],
    image: null,
    items: [
      { slug: "recherche-fuite-deau", label: "Recherche de fuite d'eau" },
      { slug: "reparation-fuite-deau", label: "Réparation de fuite d'eau" },
      { slug: "debouchage-wc", label: "Débouchage WC" },
      { slug: "debouchage-canalisation", label: "Débouchage canalisation" },
      { slug: "reparation-chauffe-eau", label: "Réparation chauffe-eau" },
    ],
  },
  {
    slug: "vitrerie",
    name: "Vitrerie",
    trade: "Vitrier",
    lead: "Vitre cassée, double vitrage, mise en sécurité",
    description:
      "Un vitrage cassé laisse votre logement ouvert au froid et aux intrusions : fermeture immédiate, puis remplacement propre.",
    urgencies: ["Vitre cassée", "Double vitrage endommagé", "Fermeture d'urgence"],
    image: null,
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

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}

export const renovationService = {
  name: "Travaux et rénovation de salle de bain",
  description:
    "Au-delà de l'urgence, KS Multiservices réalise vos travaux de rénovation de salle de bain : carrelage, douche à l'italienne, receveur, plomberie et finitions.",
} as const;

/* ─── Section urgence ───────────────────────────────────────────────────── */

export const emergencySituations = [
  {
    slug: "serrurerie",
    icon: "lock",
    title: "Porte claquée, serrure bloquée",
    description:
      "Vous êtes devant chez vous, clés à l'intérieur, ou la serrure ne répond plus. On ouvre, puis on remet la porte en état de sécurité.",
    signals: ["Ouverture de porte", "Serrure forcée", "Après effraction"],
  },
  {
    slug: "plomberie",
    icon: "drop",
    title: "Fuite d'eau, canalisation bouchée",
    description:
      "L'eau coule, remonte ou ne s'évacue plus. Recherche de l'origine, réparation et remise en service, avant que les dégâts ne s'étendent.",
    signals: ["Fuite", "Débouchage", "Chauffe-eau"],
  },
  {
    slug: "vitrerie",
    icon: "window",
    title: "Vitre cassée, vitrage endommagé",
    description:
      "Un vitrage brisé, c'est un logement ouvert. Fermeture provisoire immédiate, puis remplacement du vitrage.",
    signals: ["Mise en sécurité", "Double vitrage", "Remplacement"],
  },
] as const;

/* ─── Pourquoi KS Multiservices ─────────────────────────────────────────── */

export const advantages = [
  {
    number: "01",
    title: "Intervention rapide",
    description:
      "Une urgence n'attend pas les horaires de bureau : nous répondons 24h/24 et 7j/7, jours fériés compris, et nous déplaçons dans les meilleurs délais.",
  },
  {
    number: "02",
    title: "Professionnalisme",
    description:
      "Chaque intervention est menée avec méthode : diagnostic, geste technique adapté, remise en état propre — sans improvisation.",
  },
  {
    number: "03",
    title: "Transparence",
    description:
      "La situation est qualifiée au téléphone et les informations utiles vous sont données avant l'intervention, dès que c'est possible.",
  },
  {
    number: "04",
    title: "Disponibilité",
    description:
      "Serrurerie, plomberie et vitrerie réunies sous un seul numéro : un interlocuteur unique, quelle que soit votre urgence.",
  },
] as const;

/* ─── Processus ─────────────────────────────────────────────────────────── */

export const processSteps = [
  {
    step: "01",
    title: "Vous nous contactez",
    description:
      "Un appel au 06 38 98 78 30 ou une demande en ligne. Pour une urgence, l'appel reste le chemin le plus court.",
  },
  {
    step: "02",
    title: "Nous évaluons votre urgence",
    description:
      "Quelques questions suffisent à cerner la situation et à partir avec le matériel adapté à votre panne.",
  },
  {
    step: "03",
    title: "Intervention sur place",
    description:
      "Déplacement au Havre et dans les environs, puis intervention immédiate : ouverture, réparation ou mise en sécurité.",
  },
  {
    step: "04",
    title: "Résolution",
    description:
      "Réparation, remplacement ou sécurisation selon le problème — et un logement de nouveau fonctionnel avant notre départ.",
  },
] as const;

/* ─── Zone d'intervention ───────────────────────────────────────────────── */

/**
 * Zone d'intervention.
 *
 * `city` et l'ancrage havrais sont confirmés par l'entreprise. Les quartiers et
 * communes ci-dessous sont des lieux réels du Havre et de son agglomération
 * (Le Havre Seine Métropole) — aucune commune n'est inventée. La liste reste
 * une déclaration de périmètre à valider par KS Multiservices : ajouter ou
 * retirer une entrée ici met à jour la section, le maillage SEO et rien d'autre.
 */
export type ServiceTown = {
  name: string;
  /** Coordonnées approximatives du centre de la commune (source : géolocalisation
   * publique communale). Elles ne servent qu'à positionner le schéma des
   * distances — aucune adresse d'intervention n'est déduite d'ici. */
  lat: number;
  lng: number;
};

export const serviceArea = {
  city: "Le Havre",
  radiusLabel: "Le Havre et ses alentours",
  districts: [
    "Centre-ville",
    "Saint-François",
    "Perrey",
    "Danton",
    "Sanvic",
    "Bléville",
    "Dollemard",
    "Aplemont",
    "Graville",
    "Caucriauville",
    "Mont-Gaillard",
    "Rouelles",
  ] as const,
  towns: [
    { name: "Sainte-Adresse", lat: 49.508, lng: 0.078 },
    { name: "Octeville-sur-Mer", lat: 49.54, lng: 0.088 },
    { name: "Fontaine-la-Mallet", lat: 49.531, lng: 0.124 },
    { name: "Montivilliers", lat: 49.545, lng: 0.191 },
    { name: "Harfleur", lat: 49.506, lng: 0.198 },
    { name: "Gonfreville-l'Orcher", lat: 49.5, lng: 0.235 },
    { name: "Épouville", lat: 49.552, lng: 0.223 },
    { name: "Rolleville", lat: 49.573, lng: 0.221 },
    { name: "Notre-Dame-du-Bec", lat: 49.578, lng: 0.176 },
    { name: "Saint-Romain-de-Colbosc", lat: 49.523, lng: 0.372 },
  ] as ServiceTown[],
  note: "Votre commune n'apparaît pas dans la liste ? Appelez-nous : nous confirmons immédiatement si nous pouvons intervenir chez vous.",
} as const;

/* ─── Avis clients ──────────────────────────────────────────────────────── */

/**
 * ⚠️ DONNÉES FICTIVES — PLACEHOLDERS.
 *
 * Aucun avis réel n'a été transmis. Les entrées ci-dessous existent uniquement
 * pour valider la mise en page et DOIVENT être remplacées par de vrais avis
 * (Google, PagesJaunes, retours clients écrits) avant la mise en ligne.
 * Elles ne sont volontairement PAS injectées dans les données structurées
 * schema.org : publier de fausses notes serait trompeur pour le visiteur et
 * sanctionné par Google.
 *
 * Passer `testimonialsArePlaceholders` à `false` une fois les vrais avis saisis.
 */
export const testimonialsArePlaceholders = true;

export type Testimonial = {
  id: string;
  firstName: string;
  city: string;
  rating: number;
  service: string;
  quote: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    firstName: "Prénom",
    city: "Le Havre",
    rating: 5,
    service: "Serrurerie",
    quote:
      "Emplacement réservé à un avis client réel — remplacer ce texte par le témoignage transmis, sans le reformuler.",
    placeholder: true,
  },
  {
    id: "placeholder-2",
    firstName: "Prénom",
    city: "Montivilliers",
    rating: 5,
    service: "Plomberie",
    quote:
      "Emplacement réservé à un avis client réel — remplacer ce texte par le témoignage transmis, sans le reformuler.",
    placeholder: true,
  },
  {
    id: "placeholder-3",
    firstName: "Prénom",
    city: "Sainte-Adresse",
    rating: 5,
    service: "Vitrerie",
    quote:
      "Emplacement réservé à un avis client réel — remplacer ce texte par le témoignage transmis, sans le reformuler.",
    placeholder: true,
  },
];

/* ─── Galerie ───────────────────────────────────────────────────────────── */

/**
 * Galerie avant/après.
 *
 * Les photos réelles de KS Multiservices ne sont pas encore disponibles comme
 * fichiers exploitables. Chaque entrée affiche donc un panneau graphique neutre
 * (jamais une fausse photo) : renseigner `before` et `after` avec un chemin
 * `/gallery/…` suffit à basculer sur les vrais visuels, sans toucher au code.
 */
export type GalleryItem = {
  id: string;
  category: "serrurerie" | "plomberie" | "vitrerie";
  title: string;
  detail: string;
  before: string | null;
  after: string | null;
};

export const galleryCategories = [
  { slug: "tout", label: "Tout" },
  { slug: "serrurerie", label: "Serrurerie" },
  { slug: "plomberie", label: "Plomberie" },
  { slug: "vitrerie", label: "Vitrerie" },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "serrurerie-1",
    category: "serrurerie",
    title: "Serrure remplacée après effraction",
    detail: "Cylindre forcé, remplacement du barillet et remise en sécurité de la porte.",
    before: null,
    after: null,
  },
  {
    id: "serrurerie-2",
    category: "serrurerie",
    title: "Ouverture de porte claquée",
    detail: "Ouverture sans dégradation, contrôle du mécanisme avant remise des clés.",
    before: null,
    after: null,
  },
  {
    id: "plomberie-1",
    category: "plomberie",
    title: "Recherche et réparation de fuite",
    detail: "Localisation de la fuite, reprise du raccord et contrôle de mise en eau.",
    before: null,
    after: null,
  },
  {
    id: "plomberie-2",
    category: "plomberie",
    title: "Rénovation de salle de bain",
    detail: "Douche à l'italienne, receveur extra-plat et reprise complète de la plomberie.",
    before: null,
    after: null,
  },
  {
    id: "vitrerie-1",
    category: "vitrerie",
    title: "Remplacement de vitre cassée",
    detail: "Dépose du vitrage brisé, nettoyage du châssis et pose du nouveau verre.",
    before: null,
    after: null,
  },
  {
    id: "vitrerie-2",
    category: "vitrerie",
    title: "Double vitrage remplacé",
    detail: "Vitrage isolant embué déposé, nouveau double vitrage posé et étanché.",
    before: null,
    after: null,
  },
];

/* ─── Navigation ────────────────────────────────────────────────────────── */

export const primaryNav = [
  { href: "/", label: "Accueil" },
  { href: "/serrurerie", label: "Serrurerie" },
  { href: "/plomberie", label: "Plomberie" },
  { href: "/vitrerie", label: "Vitrerie" },
  { href: "/#interventions", label: "Nos interventions" },
  { href: "/#zone", label: "Zone d'intervention" },
  { href: "/#avis", label: "Avis" },
  { href: "/#contact", label: "Contact" },
] as const;
