export interface NavItem {
  href: string;
  label: string;
  icon: string;
  description?: string;
  /** Affiché dans la barre de navigation mobile. */
  mobile?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const NAV: NavGroup[] = [
  {
    label: "Pilotage",
    items: [
      { href: "/dashboard", label: "Tableau de bord", icon: "◈", description: "Votre progression et la prochaine mission", mobile: true },
      { href: "/progression", label: "Progression", icon: "◐", description: "Compétences, badges, statistiques" },
      { href: "/plan-de-carriere", label: "Plan de carrière", icon: "⌁", description: "Les dix étapes du parcours" },
    ],
  },
  {
    label: "Apprendre",
    items: [
      { href: "/cours", label: "Cours", icon: "▤", description: "25 modules, du débutant à l'expert", mobile: true },
      { href: "/programme", label: "Programmes", icon: "⌚", description: "30, 90 et 180 jours" },
      { href: "/glossaire", label: "Glossaire", icon: "⌕", description: "Le vocabulaire du métier" },
    ],
  },
  {
    label: "S'entraîner",
    items: [
      { href: "/quiz", label: "Quiz", icon: "◇", description: "Testez une compétence précise" },
      { href: "/simulations", label: "Simulations", icon: "◎", description: "Scénarios clients réalistes", mobile: true },
      { href: "/examens", label: "Examens", icon: "✓", description: "Validation par niveau et certification" },
      { href: "/revisions", label: "Révisions", icon: "↻", description: "Répétition espacée personnalisée" },
    ],
  },
  {
    label: "Outils du terrain",
    items: [
      { href: "/mode-terrain", label: "Mode terrain", icon: "◉", description: "Interface rapide, devant le client", mobile: true },
      { href: "/checklists", label: "Checklists", icon: "☑", description: "Ne rien oublier en rendez-vous" },
      { href: "/calculatrices", label: "Calculatrices", icon: "∑", description: "Avec la formule expliquée" },
      { href: "/crm", label: "Portefeuille", icon: "▦", description: "Vendeurs, acquéreurs, pipeline" },
      { href: "/coach", label: "Coach", icon: "✦", description: "Interrogez-vous, entraînez-vous", mobile: true },
    ],
  },
];

export const ALL_NAV_ITEMS: NavItem[] = NAV.flatMap((g) => g.items);

export const MOBILE_NAV: NavItem[] = ALL_NAV_ITEMS.filter((i) => i.mobile);
