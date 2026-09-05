import type { FieldCard } from "@/lib/types";

/**
 * Fiches terrain : contenu très court, lisible en dix secondes,
 * pensé pour être consulté sur un téléphone devant un client.
 */
export const FIELD_CARDS: FieldCard[] = [
  {
    id: "fc-estimation",
    title: "Questions d'estimation",
    category: "Estimation",
    bullets: [
      "S'asseoir avant de visiter",
      "Écouter le projet avant de regarder le bien",
      "Ne jamais annoncer de prix sur place",
      "Repartir avec une demande de documents",
    ],
    questions: [
      "Racontez-moi votre projet.",
      "Qu'est-ce qui fait que c'est maintenant plutôt que dans deux ans ?",
      "Avez-vous une échéance ? Un projet derrière ?",
      "Qui figure sur le titre de propriété ?",
      "Le bien a-t-il déjà été mis en vente ? Avec qui, à quel prix ?",
      "Qu'est-ce qui compte le plus : le prix, le délai ou la tranquillité ?",
      "Aviez-vous un prix en tête ? Sur quoi vous appuyez-vous ?",
      "Quel est le montant des charges, et qu'incluent-elles ?",
      "Des travaux ont-ils été votés en assemblée générale ?",
      "Puis-je avoir votre dernier avis de taxe foncière ?",
    ],
  },
  {
    id: "fc-acquereur",
    title: "Qualification acquéreur",
    category: "Acquéreur",
    bullets: [
      "Jamais de visite sans qualification",
      "Poser la question du budget en la justifiant",
      "Distinguer visites et offres",
      "Noter les biens déjà refusés et pourquoi",
    ],
    questions: [
      "Qu'est-ce qui vous a intéressé dans cette annonce ?",
      "Êtes-vous locataire ou propriétaire aujourd'hui ?",
      "Avez-vous déjà rencontré une banque ou un courtier ?",
      "Quel est votre budget maximum, frais d'acquisition compris ?",
      "Quel apport, et est-il disponible aujourd'hui ?",
      "Pour quand souhaitez-vous être installé ?",
      "Si vous ne pouviez garder que trois critères, lesquels ?",
      "Combien de biens avez-vous visités, et qu'est-ce qui n'allait pas ?",
    ],
  },
  {
    id: "fc-visite",
    title: "Conduite de visite",
    category: "Visite",
    bullets: [
      "Contexte dehors, silence à l'entrée",
      "Pièce forte en premier, retour en fin de parcours",
      "Parler trois fois moins que l'envie",
      "Laisser un temps libre avant de partir",
      "Sécurité : visiteur devant, téléphone sur soi, un tiers prévenu",
    ],
    questions: [
      "Qu'est-ce qui vous a le plus plu ?",
      "Qu'est-ce qui vous freine ?",
      "Si vous deviez classer ce bien parmi ceux visités, il serait où ?",
      "Qu'est-ce qui manquerait pour que ce soit le bon ?",
    ],
  },
  {
    id: "fc-objections-mandat",
    title: "Objections — prise de mandat",
    category: "Mandat",
    bullets: [
      "Comprendre avant de répondre",
      "Ne jamais dénigrer un confrère",
      "Ne jamais s'aligner sur une estimation plus élevée",
      "Ne jamais brader ses honoraires sous la pression",
    ],
    objections: [
      {
        objection: "Je préfère mettre plusieurs agences.",
        answer:
          "Je comprends, vous ne me connaissez pas encore. Ce que je vous propose, c'est de ne pas vous engager sur ma parole mais sur des engagements écrits : voici ce que je fais dans les quinze premiers jours, et voici comment vous sortez si je ne le fais pas.",
      },
      {
        objection: "L'agence d'à côté m'a annoncé 40 000 € de plus.",
        answer:
          "C'est possible, et je ne critiquerai pas un confrère. Voici les quatre ventes signées sur lesquelles je fonde ma fourchette. Demandez-lui les siennes : si elles sont meilleures, suivez-le.",
      },
      {
        objection: "Vos honoraires sont trop élevés.",
        answer:
          "Si je vends votre bien 15 000 € de plus qu'une vente entre particuliers et six semaines plus vite, mes honoraires vous ont-ils coûté ou rapporté ? Et si je cède sur mes honoraires en dix secondes, comment croyez-vous que je défendrai votre prix face à un acquéreur ?",
      },
      {
        objection: "Je vais réfléchir.",
        answer:
          "Bien sûr. Pour que je vous sois utile : qu'est-ce qui vous manque pour décider ? Une information, un délai, ou l'avis de quelqu'un ?",
      },
      {
        objection: "Je veux essayer trois mois à mon prix.",
        answer:
          "C'est votre décision et je la respecterai. Je vous dois la vérité : à ce prix nous aurons peu de visites, et dans trois mois nous discuterons d'un prix inférieur à celui d'aujourd'hui. Regardons ensemble les trois scénarios.",
      },
    ],
  },
  {
    id: "fc-objections-visite",
    title: "Objections — en visite",
    category: "Visite",
    bullets: [
      "Ne jamais contredire une perception",
      "Chercher la référence de comparaison",
      "Ne jamais minimiser un défaut visible",
    ],
    objections: [
      {
        objection: "C'est plus petit que sur les photos.",
        answer:
          "Vous avez raison de le dire. Qu'est-ce qui vous paraît le plus juste : la surface globale ou la répartition entre les pièces ? Le séjour fait bien 28 m² ; c'est la disposition des meubles qui donne cette impression.",
      },
      {
        objection: "Il y a trop de travaux.",
        answer:
          "Qu'est-ce qui vous inquiète le plus : le montant, la gestion du chantier, ou le délai avant d'emménager ? J'ai deux devis d'entreprises locales, je peux vous les transmettre.",
      },
      {
        objection: "C'est trop cher pour ce que c'est.",
        answer:
          "Par rapport à quoi, précisément ? Si vous me dites quel bien vous comparez, je peux vous expliquer les différences objectives — et s'il n'y en a pas, je le dirai au vendeur.",
      },
      {
        objection: "Les charges sont énormes.",
        answer:
          "Elles sont élevées, et je préfère qu'on en parle. Voici le détail : ce qu'elles incluent, et ce qui explique le montant. C'est un élément que j'intègre dans mon analyse du prix.",
      },
    ],
  },
  {
    id: "fc-technique",
    title: "Points techniques en visite",
    category: "Technique",
    bullets: [
      "Observer et questionner, jamais diagnostiquer",
      "Ne jamais rassurer sur un désordre",
      "Ne jamais chiffrer des travaux de mémoire",
    ],
    questions: [
      "Depuis quand cette trace est-elle là ?",
      "Qu'a-t-on fait pour la traiter ?",
      "Quand la toiture a-t-elle été refaite ? Avez-vous la facture ?",
      "Quel est l'âge de la chaudière ? Est-elle entretenue chaque année ?",
      "Les combles sont-ils isolés ? Avec quoi et quand ?",
      "Y a-t-il une VMC ? Fonctionne-t-elle ?",
      "Des murs ou cloisons ont-ils été supprimés ?",
      "La commune a-t-elle fait l'objet d'un arrêté de catastrophe naturelle ?",
      "Avez-vous les autorisations d'urbanisme pour cette extension ?",
    ],
  },
  {
    id: "fc-etapes-vente",
    title: "Les étapes d'une vente",
    category: "Transaction",
    bullets: [
      "Mandat → préparation → annonce → visites → offre → compromis → instruction → acte",
      "Compromis à acte : 2,5 à 4 mois",
      "Cinq dates à suivre par dossier",
    ],
    questions: [
      "Le dossier bancaire a-t-il été déposé ? Avez-vous l'attestation ?",
      "Le notaire a-t-il envoyé la déclaration d'intention d'aliéner ?",
      "L'état daté a-t-il été demandé au syndic ?",
      "L'offre de prêt est-elle arrivée ?",
      "La date d'acte est-elle confirmée ?",
    ],
  },
  {
    id: "fc-a-verifier",
    title: "Ce qu'on ne tranche jamais seul",
    category: "Limites",
    bullets: [
      "Plus-value et fiscalité → notaire ou expert-comptable",
      "Constructibilité, extension, division → service urbanisme et certificat d'urbanisme",
      "Fissures, humidité, structure → expert en bâtiment",
      "Capacité d'emprunt → courtier ou banque",
      "Limites de propriété → géomètre-expert",
      "Rédaction d'actes et de clauses → notaire",
    ],
    questions: [
      "Phrase à employer : « Je ne veux pas vous répondre de mémoire sur ce point, c'est trop important. Je pose la question et je vous rappelle demain avant midi. »",
    ],
  },
];

export const FIELD_CARD_MAP: Record<string, FieldCard> = Object.fromEntries(
  FIELD_CARDS.map((c) => [c.id, c]),
);
