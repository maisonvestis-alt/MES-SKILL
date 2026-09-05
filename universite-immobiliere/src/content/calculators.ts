export interface CalcField {
  id: string;
  label: string;
  unit?: string;
  initial?: number;
  step?: number;
  hint?: string;
}

export interface CalcResult {
  label: string;
  value: string;
  emphasis?: boolean;
  hint?: string;
}

export interface Calculator {
  id: string;
  title: string;
  category: "Estimation" | "Financement" | "Honoraires" | "Investissement" | "Copropriété" | "Négociation";
  purpose: string;
  fields: CalcField[];
  /** Formule affichée à l'apprenant. */
  formula: string;
  /** Explication pédagogique de la formule. */
  explanation: string;
  /** Avertissement affiché sous le résultat, si nécessaire. */
  warning?: string;
  compute: (v: Record<string, number>) => CalcResult[];
}

const eur = (n: number) =>
  Number.isFinite(n)
    ? n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })
    : "—";

const eur2 = (n: number) =>
  Number.isFinite(n)
    ? n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2 })
    : "—";

const pct = (n: number) =>
  Number.isFinite(n) ? `${n.toLocaleString("fr-FR", { maximumFractionDigits: 2 })} %` : "—";

const num = (n: number, d = 2) =>
  Number.isFinite(n) ? n.toLocaleString("fr-FR", { maximumFractionDigits: d }) : "—";

/** Mensualité d'un prêt amortissable à taux fixe. */
function mensualite(capital: number, tauxAnnuel: number, annees: number): number {
  const n = annees * 12;
  const t = tauxAnnuel / 100 / 12;
  if (n <= 0) return NaN;
  if (t === 0) return capital / n;
  return (capital * t) / (1 - Math.pow(1 + t, -n));
}

export const CALCULATORS: Calculator[] = [
  {
    id: "prix-m2",
    title: "Prix au mètre carré",
    category: "Estimation",
    purpose:
      "Comparer des biens de tailles différentes. C'est un point de départ d'analyse, jamais une estimation à lui seul.",
    fields: [
      { id: "prix", label: "Prix", unit: "€", initial: 285000, step: 1000 },
      { id: "surface", label: "Surface de référence", unit: "m²", initial: 68, step: 0.5, hint: "Carrez pour un lot de copropriété, habitable pour une maison" },
    ],
    formula: "Prix au m² = Prix ÷ Surface",
    explanation:
      "Le prix au m² permet de comparer des biens de tailles différentes. Il n'a de sens qu'à typologie, secteur, étage et état comparables : un studio se vend presque toujours plus cher au m² qu'un grand appartement du même immeuble, et un rez-de-chaussée moins cher qu'un dernier étage.",
    warning:
      "Un prix au m² ne remplace jamais une analyse par comparaison ajustée. Deux biens au même prix au m² peuvent avoir des valeurs très différentes.",
    compute: (v) => [
      { label: "Prix au m²", value: `${num(v.prix / v.surface, 0)} €/m²`, emphasis: true },
    ],
  },
  {
    id: "surface-ponderee",
    title: "Surface pondérée",
    category: "Estimation",
    purpose:
      "Intégrer les surfaces annexes dans le raisonnement d'estimation, avec des coefficients à justifier localement.",
    fields: [
      { id: "principale", label: "Surface principale", unit: "m²", initial: 70, step: 0.5 },
      { id: "balcon", label: "Balcon ou terrasse", unit: "m²", initial: 12, step: 0.5 },
      { id: "coefBalcon", label: "Coefficient extérieur", initial: 0.3, step: 0.05, hint: "Usage courant : 0,15 à 0,5 selon ville, exposition et profondeur" },
      { id: "cave", label: "Cave ou grenier", unit: "m²", initial: 6, step: 0.5 },
      { id: "coefCave", label: "Coefficient annexe", initial: 0.1, step: 0.05, hint: "Usage courant : 0,05 à 0,3" },
    ],
    formula:
      "Surface pondérée = Surface principale + (Extérieur × coefficient) + (Annexe × coefficient)",
    explanation:
      "Un balcon ne vaut pas un salon, mais il vaut quelque chose. La pondération ramène les surfaces annexes à un équivalent de surface principale. Il n'existe aucun barème officiel : les coefficients sont des usages de marché, qui varient fortement selon les villes. Ils doivent être validés par vos propres ventes comparables.",
    warning:
      "Les coefficients proposés sont pédagogiques. Calibrez-les sur votre secteur avant de les présenter à un vendeur.",
    compute: (v) => {
      const total = v.principale + v.balcon * v.coefBalcon + v.cave * v.coefCave;
      return [
        { label: "Surface pondérée", value: `${num(total, 1)} m²`, emphasis: true },
        { label: "Apport de l'extérieur", value: `${num(v.balcon * v.coefBalcon, 1)} m² équivalents` },
        { label: "Apport des annexes", value: `${num(v.cave * v.coefCave, 1)} m² équivalents` },
      ];
    },
  },
  {
    id: "mensualite",
    title: "Mensualité de prêt",
    category: "Financement",
    purpose:
      "Donner un ordre de grandeur à un acquéreur, pour l'aider à situer son projet — jamais pour se substituer à une banque.",
    fields: [
      { id: "capital", label: "Capital emprunté", unit: "€", initial: 240000, step: 1000 },
      { id: "taux", label: "Taux nominal annuel", unit: "%", initial: 3.5, step: 0.05 },
      { id: "duree", label: "Durée", unit: "ans", initial: 25, step: 1 },
      { id: "assurance", label: "Taux d'assurance annuel", unit: "%", initial: 0.34, step: 0.01, hint: "Appliqué au capital initial, méthode simplifiée" },
    ],
    formula: "M = C × t ÷ (1 − (1 + t)^−n)   où t = taux annuel ÷ 12 et n = durée × 12",
    explanation:
      "C'est la formule de l'annuité constante d'un prêt amortissable à taux fixe. Chaque mensualité comprend une part d'intérêts, décroissante, et une part de capital, croissante. L'assurance emprunteur est ici calculée de façon simplifiée sur le capital initial : les contrats réels peuvent la calculer sur le capital restant dû.",
    warning:
      "Résultat pédagogique et indicatif. Seule une banque ou un courtier peut établir un plan de financement. Ne présentez jamais ce chiffre comme un engagement.",
    compute: (v) => {
      const m = mensualite(v.capital, v.taux, v.duree);
      const assur = (v.capital * (v.assurance / 100)) / 12;
      const total = m * v.duree * 12;
      return [
        { label: "Mensualité hors assurance", value: eur2(m), emphasis: true },
        { label: "Assurance mensuelle (estimation)", value: eur2(assur) },
        { label: "Mensualité totale", value: eur2(m + assur), emphasis: true },
        { label: "Coût total des intérêts", value: eur(total - v.capital), hint: "Hors assurance et hors frais" },
      ];
    },
  },
  {
    id: "capacite",
    title: "Capacité d'emprunt (ordre de grandeur)",
    category: "Financement",
    purpose:
      "Situer un projet très en amont, pour éviter de faire visiter des biens hors de portée. À confirmer impérativement par un professionnel du financement.",
    fields: [
      { id: "revenus", label: "Revenus nets mensuels du foyer", unit: "€", initial: 4200, step: 50 },
      { id: "charges", label: "Mensualités de crédits en cours", unit: "€", initial: 0, step: 10 },
      { id: "tauxEndettement", label: "Taux d'endettement retenu", unit: "%", initial: 35, step: 0.5, hint: "Le seuil applicable relève de recommandations encadrées : à vérifier" },
      { id: "taux", label: "Taux nominal annuel", unit: "%", initial: 3.5, step: 0.05 },
      { id: "duree", label: "Durée", unit: "ans", initial: 25, step: 1 },
    ],
    formula:
      "Mensualité maximale = (Revenus × taux d'endettement) − charges, puis C = M × (1 − (1 + t)^−n) ÷ t",
    explanation:
      "On détermine d'abord la mensualité maximale supportable, puis on inverse la formule de l'annuité pour retrouver le capital correspondant. Le reste à vivre et la qualité du dossier peuvent conduire une banque à un résultat très différent.",
    warning:
      "Ordre de grandeur strictement pédagogique. Un conseiller immobilier n'établit jamais une capacité d'emprunt : orientez vers un courtier ou une banque.",
    compute: (v) => {
      const mensMax = (v.revenus * v.tauxEndettement) / 100 - v.charges;
      const n = v.duree * 12;
      const t = v.taux / 100 / 12;
      const capital = t === 0 ? mensMax * n : (mensMax * (1 - Math.pow(1 + t, -n))) / t;
      return [
        { label: "Mensualité maximale", value: eur2(mensMax), emphasis: true },
        { label: "Capital indicatif", value: eur(capital), emphasis: true },
        { label: "Reste après crédit", value: eur2(v.revenus - mensMax - v.charges), hint: "Hors charges courantes du foyer" },
      ];
    },
  },
  {
    id: "frais-acquisition",
    title: "Frais d'acquisition (ordre de grandeur)",
    category: "Financement",
    purpose:
      "Aider un acquéreur à intégrer les frais dans son budget, ce que la plupart oublient de faire.",
    fields: [
      { id: "prix", label: "Prix du bien", unit: "€", initial: 285000, step: 1000 },
      { id: "taux", label: "Taux de frais retenu", unit: "%", initial: 7.5, step: 0.1, hint: "Ancien : ordre de 7 à 8 %. Neuf : nettement moins. Variable selon le département." },
    ],
    formula: "Frais ≈ Prix × taux   |   Budget total = Prix + Frais",
    explanation:
      "Les « frais de notaire » sont majoritairement composés de droits de mutation perçus au profit des collectivités, auxquels s'ajoutent la contribution de sécurité immobilière, les débours et les émoluments du notaire, tarifés réglementairement. La part revenant réellement au notaire est minoritaire.",
    warning:
      "Les taux de droits de mutation varient selon les départements et peuvent évoluer. Utilisez cet outil pour donner un ordre de grandeur, puis renvoyez vers le simulateur officiel des notaires et vers le notaire lui-même.",
    compute: (v) => {
      const frais = (v.prix * v.taux) / 100;
      return [
        { label: "Frais d'acquisition estimés", value: eur(frais), emphasis: true },
        { label: "Budget total nécessaire", value: eur(v.prix + frais), emphasis: true },
        { label: "Prix maximal si le budget est « tout compris »", value: eur(v.prix / (1 + v.taux / 100)), hint: "Utile pour recadrer un acquéreur qui raisonne budget global" },
      ];
    },
  },
  {
    id: "honoraires",
    title: "Net vendeur, FAI et honoraires",
    category: "Honoraires",
    purpose:
      "Éviter la confusion la plus fréquente de la négociation : parler du même chiffre que son interlocuteur.",
    fields: [
      { id: "netVendeur", label: "Prix net vendeur", unit: "€", initial: 300000, step: 1000 },
      { id: "taux", label: "Taux d'honoraires", unit: "%", initial: 4, step: 0.1 },
    ],
    formula: "Honoraires = Net vendeur × taux   |   Prix FAI = Net vendeur + Honoraires",
    explanation:
      "Le prix net vendeur est ce que perçoit le propriétaire. Le prix FAI inclut les honoraires. Une offre exprimée en FAI ne représente donc pas la même somme pour le vendeur qu'une offre exprimée en net. Cette distinction doit être explicitée à chaque étape de la négociation.",
    compute: (v) => {
      const hono = (v.netVendeur * v.taux) / 100;
      const fai = v.netVendeur + hono;
      return [
        { label: "Honoraires", value: eur(hono), emphasis: true },
        { label: "Prix FAI", value: eur(fai), emphasis: true },
        { label: "Taux rapporté au prix FAI", value: pct((hono / fai) * 100), hint: "Un taux de 4 % net vendeur représente un pourcentage plus faible du prix FAI" },
      ];
    },
  },
  {
    id: "negociation",
    title: "Écart de négociation",
    category: "Négociation",
    purpose:
      "Chiffrer précisément un écart et le traduire en pourcentage, pour argumenter sur des faits.",
    fields: [
      { id: "affiche", label: "Prix affiché", unit: "€", initial: 349000, step: 1000 },
      { id: "offre", label: "Montant de l'offre", unit: "€", initial: 315000, step: 1000 },
    ],
    formula: "Écart = Prix affiché − Offre   |   Écart en % = Écart ÷ Prix affiché × 100",
    explanation:
      "Traduire une offre en pourcentage permet de la situer par rapport aux écarts constatés sur le marché local. Sur beaucoup de marchés, un écart de l'ordre de 4 à 6 % entre prix affiché et prix signé est courant : au-delà, l'écart mérite une explication.",
    compute: (v) => {
      const ecart = v.affiche - v.offre;
      return [
        { label: "Écart", value: eur(ecart), emphasis: true },
        { label: "Écart en pourcentage", value: pct((ecart / v.affiche) * 100), emphasis: true },
        { label: "Point médian", value: eur(v.offre + ecart / 2), hint: "Repère de convergence, pas une règle" },
      ];
    },
  },
  {
    id: "evolution",
    title: "Évolution d'un prix",
    category: "Estimation",
    purpose: "Comparer deux prix dans le temps, ou mesurer l'effet d'un ajustement.",
    fields: [
      { id: "avant", label: "Prix initial", unit: "€", initial: 280000, step: 1000 },
      { id: "apres", label: "Prix final", unit: "€", initial: 312000, step: 1000 },
    ],
    formula: "Évolution = (Prix final − Prix initial) ÷ Prix initial × 100",
    explanation:
      "Attention au sens de lecture : une baisse de 10 % suivie d'une hausse de 10 % ne ramène pas au prix initial. Cette asymétrie explique pourquoi une série de baisses successives coûte plus cher qu'un ajustement unique bien calibré.",
    compute: (v) => {
      const evol = ((v.apres - v.avant) / v.avant) * 100;
      return [
        { label: "Évolution", value: pct(evol), emphasis: true },
        { label: "Différence", value: eur(v.apres - v.avant) },
      ];
    },
  },
  {
    id: "rendement",
    title: "Rendement locatif",
    category: "Investissement",
    purpose:
      "Expliquer à un investisseur la différence entre rendement brut affiché et rendement net réel.",
    fields: [
      { id: "prix", label: "Prix d'acquisition", unit: "€", initial: 160000, step: 1000 },
      { id: "frais", label: "Frais d'acquisition", unit: "€", initial: 12000, step: 500 },
      { id: "loyer", label: "Loyer mensuel hors charges", unit: "€", initial: 800, step: 10 },
      { id: "chargesAn", label: "Charges annuelles non récupérables", unit: "€", initial: 900, step: 50 },
      { id: "taxe", label: "Taxe foncière annuelle", unit: "€", initial: 1100, step: 50 },
      { id: "vacance", label: "Vacance locative annuelle", unit: "semaines", initial: 2, step: 1 },
    ],
    formula:
      "Rendement brut = (Loyer × 12) ÷ Prix × 100   |   Rendement net = (Loyers encaissés − charges − taxe) ÷ (Prix + frais) × 100",
    explanation:
      "Le rendement brut ignore tout : charges, taxe foncière, vacance, gestion, travaux et fiscalité. Il est systématiquement affiché parce qu'il est flatteur. Le rendement net donne une image beaucoup plus proche de la réalité. Le rendement net-net, qui intègre la fiscalité de l'investisseur, relève d'un expert-comptable.",
    warning:
      "Cet outil ne tient pas compte de la fiscalité, qui dépend entièrement de la situation de l'investisseur et du régime choisi. Orientez vers un expert-comptable.",
    compute: (v) => {
      const loyersTheoriques = v.loyer * 12;
      const perteVacance = v.loyer * 12 * (v.vacance / 52);
      const loyersReels = loyersTheoriques - perteVacance;
      const brut = (loyersTheoriques / v.prix) * 100;
      const net = ((loyersReels - v.chargesAn - v.taxe) / (v.prix + v.frais)) * 100;
      return [
        { label: "Rendement brut", value: pct(brut), emphasis: true },
        { label: "Rendement net (hors fiscalité)", value: pct(net), emphasis: true },
        { label: "Loyers réellement encaissés", value: eur(loyersReels) },
        { label: "Écart brut / net", value: `${num(brut - net, 2)} points` },
      ];
    },
  },
  {
    id: "quote-part",
    title: "Quote-part de travaux en copropriété",
    category: "Copropriété",
    purpose:
      "Chiffrer ce qui incombera réellement au lot — le seul chiffre qui intéresse l'acquéreur.",
    fields: [
      { id: "montant", label: "Montant total des travaux votés", unit: "€", initial: 380000, step: 1000 },
      { id: "tantiemes", label: "Tantièmes du lot", unit: "/1000", initial: 29, step: 1 },
      { id: "fonds", label: "Fonds de travaux total de la copropriété", unit: "€", initial: 41000, step: 500 },
    ],
    formula:
      "Quote-part = Montant × tantièmes ÷ 1000   |   Reste à financer = Quote-part − (Fonds × tantièmes ÷ 1000)",
    explanation:
      "Le montant global d'un ravalement n'a aucun sens pour un acquéreur : seule sa quote-part le concerne. Le fonds de travaux déjà constitué vient en déduction, mais il reste attaché au lot et n'est pas remboursé au vendeur lors de la vente, sauf accord contraire entre les parties.",
    warning:
      "La répartition de la charge des travaux entre vendeur et acquéreur dépend de la date d'exigibilité des appels de fonds et des stipulations de l'avant-contrat. Ce point se règle avec le notaire.",
    compute: (v) => {
      const quote = (v.montant * v.tantiemes) / 1000;
      const fondsLot = (v.fonds * v.tantiemes) / 1000;
      return [
        { label: "Quote-part du lot", value: eur(quote), emphasis: true },
        { label: "Part du fonds de travaux attribuable au lot", value: eur(fondsLot) },
        { label: "Reste à financer (estimation)", value: eur(Math.max(0, quote - fondsLot)), emphasis: true },
      ];
    },
  },
  {
    id: "cout-possession",
    title: "Coût mensuel réel de possession",
    category: "Financement",
    purpose:
      "Montrer à un acquéreur ce que le logement lui coûtera réellement chaque mois, au-delà de la mensualité.",
    fields: [
      { id: "mensualite", label: "Mensualité de crédit assurance comprise", unit: "€", initial: 1270, step: 10 },
      { id: "charges", label: "Charges de copropriété annuelles", unit: "€", initial: 1800, step: 50 },
      { id: "taxe", label: "Taxe foncière annuelle", unit: "€", initial: 1200, step: 50 },
      { id: "energie", label: "Énergie annuelle estimée", unit: "€", initial: 1500, step: 50, hint: "Le DPE indique une fourchette de dépenses annuelles" },
      { id: "assuranceHab", label: "Assurance habitation annuelle", unit: "€", initial: 280, step: 10 },
    ],
    formula:
      "Coût mensuel = Mensualité + (Charges + Taxe foncière + Énergie + Assurance) ÷ 12",
    explanation:
      "Un acquéreur raisonne presque toujours en mensualité de crédit, et découvre le reste après l'achat. Présenter le coût complet est un acte de conseil : cela évite les mauvaises surprises et permet de comparer honnêtement deux biens dont les charges diffèrent.",
    compute: (v) => {
      const annexes = (v.charges + v.taxe + v.energie + v.assuranceHab) / 12;
      return [
        { label: "Coût mensuel total", value: eur2(v.mensualite + annexes), emphasis: true },
        { label: "Dont hors crédit", value: eur2(annexes) },
        { label: "Coût annuel total", value: eur((v.mensualite + annexes) * 12) },
      ];
    },
  },
  {
    id: "endettement",
    title: "Taux d'endettement",
    category: "Financement",
    purpose: "Vérifier rapidement si un projet reste dans les limites usuellement admises.",
    fields: [
      { id: "revenus", label: "Revenus nets mensuels du foyer", unit: "€", initial: 4200, step: 50 },
      { id: "creditProjet", label: "Mensualité du projet, assurance comprise", unit: "€", initial: 1270, step: 10 },
      { id: "autresCredits", label: "Autres mensualités de crédit", unit: "€", initial: 0, step: 10 },
    ],
    formula: "Taux d'endettement = (Total des mensualités ÷ Revenus nets) × 100",
    explanation:
      "Le taux d'endettement rapporte l'ensemble des charges de crédit, assurance comprise, aux revenus nets. Les recommandations en vigueur encadrent ce ratio et la durée maximale d'emprunt, avec une marge de flexibilité laissée aux banques pour une part de leur production.",
    warning:
      "Le seuil applicable relève de recommandations qui peuvent évoluer. Ce calcul est indicatif : la décision appartient à la banque, qui apprécie aussi le reste à vivre et la qualité du dossier.",
    compute: (v) => {
      const total = v.creditProjet + v.autresCredits;
      const taux = (total / v.revenus) * 100;
      return [
        { label: "Taux d'endettement", value: pct(taux), emphasis: true },
        { label: "Reste après crédits", value: eur2(v.revenus - total) },
        { label: "Mensualité correspondant à 35 %", value: eur2(v.revenus * 0.35), hint: "Repère indicatif, à vérifier" },
      ];
    },
  },
];

export const CALCULATOR_MAP: Record<string, Calculator> = Object.fromEntries(
  CALCULATORS.map((c) => [c.id, c]),
);

export const CALC_CATEGORIES = Array.from(new Set(CALCULATORS.map((c) => c.category)));
