import type { SkillId } from "./types";

export interface SkillMeta {
  id: SkillId;
  label: string;
  short: string;
  description: string;
  icon: string;
  /** Regroupement affiché dans la page Progression. */
  family: "Métier" | "Commercial" | "Technique" | "Développement";
}

export const SKILLS: SkillMeta[] = [
  { id: "metier", label: "Comprendre le métier", short: "Métier", description: "Rôles, statuts, acteurs et fonctionnement du secteur.", icon: "🧭", family: "Métier" },
  { id: "fondamentaux", label: "Fondamentaux immobiliers", short: "Fondamentaux", description: "Vocabulaire, surfaces, droits, documents.", icon: "📚", family: "Métier" },
  { id: "juridique", label: "Cadre juridique", short: "Juridique", description: "Loi Hoguet, mandats, avant-contrats, obligations.", icon: "⚖️", family: "Métier" },
  { id: "marche", label: "Lecture du marché", short: "Marché", description: "Offre, demande, prix, tension, taux.", icon: "📈", family: "Métier" },
  { id: "estimation", label: "Estimation", short: "Estimation", description: "Comparables, pondération, fourchette, présentation.", icon: "🎯", family: "Technique" },
  { id: "prospection", label: "Prospection", short: "Prospection", description: "Téléphone, terrain, pige, réseau, recommandation.", icon: "📞", family: "Commercial" },
  { id: "decouverte", label: "Découverte client", short: "Découverte", description: "Questionnement, écoute, qualification du projet.", icon: "🔎", family: "Commercial" },
  { id: "mandat", label: "Prise de mandat", short: "Mandat", description: "Présentation du service, honoraires, exclusivité.", icon: "📝", family: "Commercial" },
  { id: "commercialisation", label: "Commercialisation", short: "Commercialisation", description: "Plan de vente, diffusion, pilotage, reporting.", icon: "🚀", family: "Commercial" },
  { id: "marketing", label: "Annonce & médias", short: "Marketing", description: "Rédaction d'annonce, photo, vidéo, mise en valeur.", icon: "📸", family: "Développement" },
  { id: "visite", label: "Visites", short: "Visites", description: "Préparation, conduite, sécurité, retours.", icon: "🚪", family: "Commercial" },
  { id: "acquereur", label: "Suivi acquéreur", short: "Acquéreur", description: "Qualification, financement, critères, relance.", icon: "🤝", family: "Commercial" },
  { id: "negociation", label: "Négociation", short: "Négociation", description: "Ancrage, objections, concessions, closing.", icon: "♟️", family: "Commercial" },
  { id: "financement", label: "Financement", short: "Financement", description: "Capacité d'emprunt, apport, taux, endettement.", icon: "🏦", family: "Technique" },
  { id: "transaction", label: "Transaction", short: "Transaction", description: "Offre, avant-contrat, conditions, acte authentique.", icon: "🖋️", family: "Métier" },
  { id: "technique", label: "Technique du bâtiment", short: "Bâtiment", description: "Structure, réseaux, pathologies, travaux.", icon: "🧱", family: "Technique" },
  { id: "urbanisme", label: "Urbanisme", short: "Urbanisme", description: "PLU, autorisations, constructibilité, servitudes.", icon: "🗺️", family: "Technique" },
  { id: "copropriete", label: "Copropriété", short: "Copropriété", description: "Syndic, AG, charges, travaux, documents.", icon: "🏢", family: "Technique" },
  { id: "fiscalite", label: "Fiscalité", short: "Fiscalité", description: "Plus-value, revenus fonciers, taxes, SCI.", icon: "🧾", family: "Technique" },
  { id: "psychologie", label: "Psychologie commerciale", short: "Psychologie", description: "Confiance, écoute, émotion, communication.", icon: "🧠", family: "Commercial" },
  { id: "branding", label: "Personal branding", short: "Branding", description: "Visibilité locale, contenu, réputation.", icon: "✨", family: "Développement" },
  { id: "organisation", label: "Organisation", short: "Organisation", description: "Agenda, priorités, routine, discipline.", icon: "🗓️", family: "Développement" },
  { id: "crm", label: "Gestion du portefeuille", short: "CRM", description: "Fiches, pipeline, relances, suivi.", icon: "📇", family: "Développement" },
  { id: "ia", label: "IA & outils numériques", short: "IA", description: "Usage responsable, vérification, limites.", icon: "🤖", family: "Développement" },
  { id: "excellence", label: "Excellence professionnelle", short: "Excellence", description: "Suivi, rigueur, transparence, différenciation.", icon: "🏅", family: "Développement" },
];

export const SKILL_MAP: Record<SkillId, SkillMeta> = Object.fromEntries(
  SKILLS.map((s) => [s.id, s]),
) as Record<SkillId, SkillMeta>;

export function skillLabel(id: SkillId): string {
  return SKILL_MAP[id]?.label ?? id;
}

export function skillShort(id: SkillId): string {
  return SKILL_MAP[id]?.short ?? id;
}
