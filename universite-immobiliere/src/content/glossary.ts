import type { GlossaryTerm } from "@/lib/types";

const SP = (path: string, label = "Service-Public.fr") => ({ label, url: `https://www.service-public.fr/${path}` });
const LEGI = (label: string, url: string) => ({ label, url });

/**
 * Glossaire immobilier français.
 *
 * Chaque terme est expliqué deux fois : « simple » (comme si l'apprenant
 * découvrait le mot) puis « pro » (la formulation utilisable devant un client
 * ou un confrère). `watchOut` signale les pièges réels du terrain.
 *
 * Les termes marqués `legalSensitive` dépendent d'une réglementation qui évolue :
 * l'interface affiche alors un rappel de vérification.
 */
export const GLOSSARY: GlossaryTerm[] = [
  /* ----------------------------- Surfaces ------------------------------- */
  {
    id: "surface-habitable",
    term: "Surface habitable",
    aliases: ["loi Boutin", "surface Boutin"],
    category: "Surfaces & mesures",
    simple:
      "La surface où l'on peut réellement vivre : on mesure le sol des pièces, puis on retire ce qui est occupé par les murs, les cloisons, les marches, les gaines et les embrasures.",
    pro:
      "Surface de plancher construite après déduction des surfaces occupées par les murs, cloisons, marches et cages d'escalier, gaines, embrasures de portes et fenêtres. Les locaux d'une hauteur sous plafond inférieure à 1,80 m ne sont pas comptés, ni les caves, sous-sols, remises, garages, terrasses, balcons, vérandas et combles non aménagés.",
    example:
      "Un appartement de 72 m² au sol avec une mezzanine sous 1,60 m de hauteur : la mezzanine n'entre pas dans la surface habitable.",
    watchOut:
      "Surface habitable ≠ surface Carrez. La surface habitable est la référence des baux d'habitation vides ; la loi Carrez concerne la vente de lots en copropriété.",
    related: ["surface-carrez", "surface-plancher"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F35798"), LEGI("Légifrance — art. R156-1 CCH", "https://www.legifrance.gouv.fr/")],
  },
  {
    id: "surface-carrez",
    term: "Surface Carrez",
    aliases: ["loi Carrez", "mesurage Carrez"],
    category: "Surfaces & mesures",
    simple:
      "La surface officielle annoncée quand on vend un logement en copropriété. Elle mesure l'intérieur du lot, sans compter ce qui est trop bas ou ce qui n'est pas vraiment habitable.",
    pro:
      "Superficie privative des lots de copropriété : surface des planchers des locaux clos et couverts, après déduction des murs, cloisons, marches et cages d'escalier, gaines, embrasures. Les surfaces dont la hauteur sous plafond est inférieure à 1,80 m ne sont pas prises en compte. Caves, garages, emplacements de stationnement et lots inférieurs à 8 m² en sont exclus.",
    example:
      "Un T3 avec 68,40 m² Carrez et un balcon de 9 m² : l'annonce indique 68,40 m² Carrez, le balcon est mentionné à part.",
    watchOut:
      "Si la surface réelle est inférieure de plus de 5 % à celle annoncée dans l'acte, l'acquéreur peut demander une diminution du prix proportionnelle. Faites systématiquement mesurer par un professionnel plutôt que de recopier un ancien acte.",
    related: ["surface-habitable", "copropriete", "lot"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2604")],
  },
  {
    id: "surface-plancher",
    term: "Surface de plancher",
    category: "Surfaces & mesures",
    simple:
      "Une surface utilisée par l'urbanisme (mairie) pour savoir si vous avez besoin d'une autorisation avant de construire ou d'agrandir.",
    pro:
      "Somme des surfaces de plancher closes et couvertes, sous une hauteur de plafond supérieure à 1,80 m, calculée à partir du nu intérieur des façades, après déductions prévues par le code de l'urbanisme (trémies, locaux techniques, stationnement, combles non aménageables…).",
    example:
      "Une extension de 18 m² de surface de plancher relève généralement de la déclaration préalable ; au-delà des seuils, un permis de construire est exigé.",
    watchOut: "C'est une notion d'urbanisme, jamais une surface commerciale. Ne l'utilisez pas dans une annonce.",
    related: ["emprise-au-sol", "permis-de-construire", "declaration-prealable"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F32005")],
  },
  {
    id: "emprise-au-sol",
    term: "Emprise au sol",
    category: "Surfaces & mesures",
    simple: "L'ombre que projette le bâtiment sur le terrain : la place qu'il occupe au sol, débords compris.",
    pro:
      "Projection verticale du volume de la construction, tous débords et surplombs inclus. Elle sert, avec la surface de plancher, à déterminer le régime d'autorisation d'urbanisme applicable.",
    example: "Un carport ouvert n'a pas de surface de plancher mais crée bien de l'emprise au sol.",
    related: ["surface-plancher", "plu"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F32005")],
  },
  {
    id: "prix-m2",
    term: "Prix au m²",
    category: "Surfaces & mesures",
    simple: "Le prix du bien divisé par sa surface. Cela permet de comparer deux biens de tailles différentes.",
    pro:
      "Indicateur de comparaison obtenu en divisant le prix (net vendeur ou FAI, à préciser) par la surface de référence (habitable ou Carrez). Il n'a de sens qu'à typologie, secteur et état comparables.",
    example: "285 000 € pour 68 m² Carrez = 4 191 €/m². À comparer aux ventes réelles du même quartier.",
    watchOut:
      "Le prix au m² est un point de départ, pas une estimation. Un studio se vend presque toujours plus cher au m² qu'un grand appartement du même immeuble.",
    related: ["surface-carrez", "comparables", "estimation"],
  },
  {
    id: "ponderation",
    term: "Pondération (des surfaces)",
    category: "Surfaces & mesures",
    simple:
      "Une façon de compter les surfaces annexes moins que la surface principale, parce qu'un balcon vaut moins qu'un salon.",
    pro:
      "Technique d'estimation consistant à affecter un coefficient aux surfaces annexes (balcon, terrasse, cave, combles, sous-sol) pour les ramener à un équivalent de surface principale. Les coefficients sont des usages de marché, pas une norme légale, et varient fortement selon la localisation.",
    example:
      "70 m² habitables + une terrasse de 20 m² pondérée à 0,3 → 76 m² pondérés servant de base au calcul.",
    watchOut:
      "Les coefficients ne sont pas universels : une terrasse plein sud à Nice ne se pondère pas comme un balcon filant à Lille. Justifiez toujours vos coefficients par des ventes réelles.",
    related: ["estimation", "comparables", "prix-m2"],
  },

  /* --------------------------- Droit de propriété ----------------------- */
  {
    id: "pleine-propriete",
    term: "Pleine propriété",
    category: "Droit de propriété",
    simple: "Vous possédez tout : vous pouvez utiliser le bien, en tirer des revenus et le vendre.",
    pro:
      "Réunion des trois attributs du droit de propriété : l'usus (utiliser), le fructus (percevoir les fruits, dont les loyers) et l'abusus (disposer, donc vendre ou donner).",
    related: ["usufruit", "nue-propriete"],
  },
  {
    id: "usufruit",
    term: "Usufruit",
    category: "Droit de propriété",
    simple:
      "Le droit d'habiter un bien ou d'en percevoir les loyers, sans en être totalement propriétaire et sans pouvoir le vendre seul.",
    pro:
      "Droit réel d'user de la chose et d'en percevoir les fruits, à charge d'en conserver la substance. Il est temporaire ou viager et s'éteint au décès de l'usufruitier, la pleine propriété se reconstituant alors sur la tête du nu-propriétaire.",
    example:
      "Après un décès, le conjoint survivant conserve souvent l'usufruit du logement, les enfants recevant la nue-propriété.",
    watchOut:
      "Un bien en démembrement ne peut pas être vendu en pleine propriété sans l'accord de l'usufruitier ET du nu-propriétaire. Vérifiez cela dès le premier rendez-vous : c'est une cause classique de mandat mort-né.",
    related: ["nue-propriete", "pleine-propriete", "succession"],
    sources: [SP("particuliers/vosdroits/F31217")],
  },
  {
    id: "nue-propriete",
    term: "Nue-propriété",
    category: "Droit de propriété",
    simple: "Vous êtes propriétaire des murs, mais quelqu'un d'autre a le droit d'y vivre ou d'encaisser les loyers.",
    pro:
      "Droit de disposer du bien, privé temporairement de l'usage et des fruits, ceux-ci appartenant à l'usufruitier. À l'extinction de l'usufruit, le nu-propriétaire retrouve la pleine propriété sans droits supplémentaires.",
    related: ["usufruit", "pleine-propriete"],
  },
  {
    id: "indivision",
    term: "Indivision",
    category: "Droit de propriété",
    simple:
      "Plusieurs personnes possèdent le même bien ensemble, chacune pour une part. Pour vendre, il faut se mettre d'accord.",
    pro:
      "Situation dans laquelle plusieurs personnes sont titulaires de droits de même nature sur un bien, sans division matérielle. La vente du bien indivis requiert en principe l'unanimité ; des procédures spécifiques existent en cas de blocage.",
    example: "Trois frères et sœurs héritent de la maison familiale : ils sont en indivision.",
    watchOut:
      "En indivision, identifiez dès le départ tous les indivisaires et leurs quotes-parts. Un mandat signé par un seul indivisaire ne permet pas de vendre le bien.",
    related: ["succession", "sci", "mandat"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1774")],
  },
  {
    id: "succession",
    term: "Succession",
    category: "Droit de propriété",
    simple: "Ce qui se passe pour les biens d'une personne après son décès : ils sont transmis à ses héritiers.",
    pro:
      "Transmission du patrimoine du défunt à ses héritiers et légataires. La vente d'un bien successoral suppose que la dévolution soit établie (acte de notoriété) et que l'attestation immobilière ait été publiée.",
    watchOut:
      "Une succession non réglée retarde une vente de plusieurs mois. Question à poser systématiquement : « Le notaire a-t-il déjà établi l'attestation de propriété ? »",
    related: ["indivision", "notaire", "usufruit"],
  },
  {
    id: "servitude",
    term: "Servitude",
    category: "Droit de propriété",
    simple:
      "Une contrainte qui pèse sur un terrain au profit d'un autre terrain : par exemple un voisin qui a le droit de passer chez vous pour accéder à sa maison.",
    pro:
      "Charge imposée à un fonds (le fonds servant) pour l'usage et l'utilité d'un autre fonds appartenant à un autre propriétaire (le fonds dominant). Elle peut être légale, conventionnelle ou acquise par destination du père de famille ou par prescription.",
    example: "Servitude de passage, de vue, d'écoulement des eaux, de canalisation, de tour d'échelle.",
    watchOut:
      "Les servitudes figurent normalement dans l'acte de propriété. Demandez toujours le titre de propriété : une servitude de passage non signalée est un contentieux garanti.",
    related: ["mitoyennete", "acte-authentique", "urbanisme"],
    legalSensitive: true,
  },
  {
    id: "mitoyennete",
    term: "Mitoyenneté",
    category: "Droit de propriété",
    simple: "Un mur ou une clôture qui appartient aux deux voisins en même temps, et qu'ils entretiennent ensemble.",
    pro:
      "Copropriété d'un élément séparatif (mur, haie, fossé, clôture) entre deux fonds voisins, entraînant un partage des droits d'usage et des charges d'entretien.",
    watchOut: "Un mur peut être privatif malgré les apparences. En cas de doute : titre de propriété et géomètre.",
    related: ["servitude", "geometre"],
  },
  {
    id: "sci",
    term: "SCI (société civile immobilière)",
    category: "Droit de propriété",
    simple:
      "Une société créée pour détenir un ou plusieurs biens immobiliers à plusieurs. Ce n'est pas la personne qui possède, c'est la société.",
    pro:
      "Société civile dont l'objet est la détention et la gestion d'un patrimoine immobilier. Les associés détiennent des parts sociales ; la cession peut porter sur l'immeuble (vendu par la SCI) ou sur les parts sociales, avec des conséquences fiscales et juridiques très différentes.",
    watchOut:
      "Vendre un bien détenu par une SCI suppose de vérifier les statuts et les pouvoirs du gérant. Vendre des parts de SCI n'est pas une transaction immobilière classique : renvoyez vers le notaire et l'expert-comptable.",
    related: ["fiscalite", "notaire", "indivision"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F31782")],
  },

  /* ------------------------------ Copropriété --------------------------- */
  {
    id: "copropriete",
    term: "Copropriété",
    category: "Copropriété",
    simple:
      "Un immeuble divisé entre plusieurs propriétaires : chacun possède son appartement, et tous possèdent ensemble l'escalier, la toiture, le hall…",
    pro:
      "Organisation d'un immeuble bâti divisé en lots comprenant chacun une partie privative et une quote-part de parties communes, régie par la loi du 10 juillet 1965 et son décret d'application du 17 mars 1967.",
    related: ["lot", "tantiemes", "parties-communes", "syndic", "reglement-copropriete"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2591")],
  },
  {
    id: "lot",
    term: "Lot de copropriété",
    category: "Copropriété",
    simple: "Ce que vous achetez dans une copropriété : votre appartement + une part de l'immeuble entier.",
    pro:
      "Ensemble indissociable formé d'une partie privative et d'une quote-part de parties communes exprimée en tantièmes. Une cave ou un stationnement constituent souvent des lots distincts.",
    watchOut:
      "Vérifiez le nombre de lots vendus : un T3 « avec cave et parking » représente fréquemment trois lots, donc trois lignes dans l'acte et parfois trois charges différentes.",
    related: ["copropriete", "tantiemes"],
  },
  {
    id: "tantiemes",
    term: "Tantièmes",
    aliases: ["millièmes", "quote-part"],
    category: "Copropriété",
    simple:
      "La part de l'immeuble qui correspond à votre appartement. Elle détermine combien vous payez de charges et le poids de votre vote.",
    pro:
      "Quote-part de parties communes affectée à chaque lot, généralement exprimée en millièmes, servant de base à la répartition des charges générales et au calcul des voix en assemblée générale.",
    example: "Un lot de 85/1000 dans une copropriété paiera 8,5 % des charges générales.",
    watchOut:
      "Il existe souvent plusieurs grilles : tantièmes généraux, tantièmes d'ascenseur, de chauffage, d'escalier. Un rez-de-chaussée peut ne pas payer l'ascenseur.",
    related: ["copropriete", "charges-copropriete", "assemblee-generale"],
  },
  {
    id: "parties-communes",
    term: "Parties communes",
    category: "Copropriété",
    simple: "Tout ce qui appartient à l'ensemble des copropriétaires : hall, escalier, toit, façade, cour…",
    pro:
      "Parties des bâtiments et des terrains affectées à l'usage ou à l'utilité de tous les copropriétaires ou de plusieurs d'entre eux, définies par le règlement de copropriété. Certaines peuvent faire l'objet d'un droit de jouissance privatif.",
    related: ["parties-privatives", "reglement-copropriete"],
  },
  {
    id: "parties-privatives",
    term: "Parties privatives",
    category: "Copropriété",
    simple: "Ce qui n'appartient qu'à vous dans la copropriété : l'intérieur de votre logement.",
    pro:
      "Parties des bâtiments et des terrains réservées à l'usage exclusif d'un copropriétaire déterminé, dont il assume seul l'entretien.",
    watchOut:
      "Les fenêtres et volets sont souvent parties communes à usage privatif : leur remplacement peut relever d'une décision d'assemblée générale. À vérifier dans le règlement.",
    related: ["parties-communes", "reglement-copropriete"],
  },
  {
    id: "syndic",
    term: "Syndic de copropriété",
    category: "Copropriété",
    simple: "La personne ou l'entreprise qui gère l'immeuble au quotidien : comptes, travaux, assemblées, entretien.",
    pro:
      "Mandataire du syndicat des copropriétaires chargé d'administrer l'immeuble, d'exécuter les décisions d'assemblée générale, de tenir la comptabilité et de représenter le syndicat. Il peut être professionnel, bénévole ou coopératif.",
    watchOut:
      "Le syndic est votre interlocuteur pour obtenir les documents de vente : appelez-le dès la prise de mandat, les délais peuvent atteindre plusieurs semaines.",
    related: ["assemblee-generale", "etat-date", "charges-copropriete"],
    sources: [SP("particuliers/vosdroits/F2586")],
  },
  {
    id: "assemblee-generale",
    term: "Assemblée générale (AG)",
    category: "Copropriété",
    simple: "La réunion annuelle où les copropriétaires votent le budget, les travaux et les décisions importantes.",
    pro:
      "Organe souverain du syndicat des copropriétaires. Les décisions y sont prises selon des règles de majorité différentes suivant leur nature (majorité des voix exprimées, majorité de tous les copropriétaires, double majorité, unanimité).",
    watchOut:
      "Lisez les procès-verbaux des trois dernières AG avant toute estimation : ils révèlent les travaux votés, les impayés et les conflits.",
    related: ["proces-verbal-ag", "syndic", "travaux-copro"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F62")],
  },
  {
    id: "proces-verbal-ag",
    term: "Procès-verbal d'assemblée générale",
    aliases: ["PV d'AG"],
    category: "Copropriété",
    simple: "Le compte rendu écrit de la réunion des copropriétaires : ce qui a été voté, par qui, et ce qui a été refusé.",
    pro:
      "Document constatant les décisions de l'assemblée générale, les résultats des votes et les réserves émises. Il est notifié aux copropriétaires et fait courir le délai de contestation des décisions.",
    watchOut:
      "Un vote de ravalement à 180 000 € pour 20 lots signifie environ 9 000 € par lot : cette information change le prix de vente. Ne la découvrez jamais après le compromis.",
    related: ["assemblee-generale", "travaux-copro"],
  },
  {
    id: "charges-copropriete",
    term: "Charges de copropriété",
    category: "Copropriété",
    simple: "L'argent que chaque propriétaire verse chaque trimestre pour faire fonctionner l'immeuble.",
    pro:
      "Dépenses de conservation, d'entretien et d'administration des parties communes (charges générales, réparties selon les tantièmes) et dépenses liées aux services collectifs et équipements communs (charges spéciales, réparties selon l'utilité objective).",
    example: "Un T3 avec ascenseur, chauffage collectif et gardien : 2 400 à 3 600 €/an sont fréquents en zone urbaine.",
    watchOut:
      "Distinguez toujours les charges courantes (budget prévisionnel) des appels de fonds travaux : confondre les deux fausse l'annonce et déclenche des tensions avant la signature.",
    related: ["tantiemes", "fonds-travaux", "etat-date"],
  },
  {
    id: "fonds-travaux",
    term: "Fonds de travaux",
    category: "Copropriété",
    simple:
      "Une réserve d'argent constituée petit à petit par la copropriété pour payer les futurs gros travaux.",
    pro:
      "Fonds obligatoire dans les copropriétés à destination totale ou partielle d'habitation, alimenté par une cotisation annuelle des copropriétaires et attaché au lot : il n'est pas remboursé au vendeur lors de la vente, sauf accord contraire entre les parties.",
    watchOut:
      "Le montant minimal de la cotisation et le calendrier de mise en place ont évolué avec la loi Climat et Résilience. À vérifier selon la réglementation en vigueur et l'appel de fonds du syndic.",
    related: ["travaux-copro", "ppt", "charges-copropriete"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2607")],
  },
  {
    id: "ppt",
    term: "Plan pluriannuel de travaux (PPT)",
    category: "Copropriété",
    simple: "Une liste des travaux à prévoir dans l'immeuble pour les dix prochaines années, avec leur coût estimé.",
    pro:
      "Projet de plan élaboré à partir d'une analyse du bâti et des équipements, listant les travaux nécessaires à la sauvegarde de l'immeuble, à la sécurité et à l'amélioration de la performance énergétique sur dix ans, avec une estimation de coût et un échéancier.",
    watchOut:
      "Le calendrier d'obligation dépend de la taille et de l'âge de la copropriété et a évolué récemment : à vérifier auprès du syndic et selon la réglementation en vigueur.",
    related: ["fonds-travaux", "dpe-collectif", "travaux-copro"],
    legalSensitive: true,
  },
  {
    id: "etat-date",
    term: "État daté",
    category: "Copropriété",
    simple:
      "Un document du syndic, demandé au moment de la vente, qui indique précisément ce que le vendeur doit encore à la copropriété.",
    pro:
      "Document établi par le syndic à la demande du notaire, en trois parties : sommes dues par le copropriétaire vendeur au syndicat, sommes dont le syndicat pourrait être débiteur à son égard, et sommes qui incomberont au nouveau copropriétaire. Son coût est plafonné réglementairement.",
    watchOut:
      "Ne confondez pas l'état daté (au moment de l'acte, payé par le vendeur) et le « pré-état daté » ou questionnaire du syndic remis en amont pour préparer l'avant-contrat.",
    related: ["syndic", "acte-authentique", "charges-copropriete"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2604")],
  },
  {
    id: "reglement-copropriete",
    term: "Règlement de copropriété",
    category: "Copropriété",
    simple: "Le mode d'emploi de l'immeuble : ce qui est autorisé, ce qui est interdit, qui paie quoi.",
    pro:
      "Document contractuel obligatoire définissant la destination de l'immeuble, la consistance et les conditions de jouissance des parties privatives et communes, ainsi que les règles de répartition des charges. Il s'impose à tous les copropriétaires et à leurs locataires.",
    watchOut:
      "Vérifiez la destination de l'immeuble avant d'annoncer « idéal profession libérale » ou « location courte durée » : le règlement peut l'interdire.",
    related: ["copropriete", "parties-communes", "carnet-entretien"],
  },
  {
    id: "carnet-entretien",
    term: "Carnet d'entretien",
    category: "Copropriété",
    simple: "L'historique de l'immeuble : les travaux réalisés, les contrats en cours, les gros équipements.",
    pro:
      "Document tenu par le syndic récapitulant les informations techniques relatives à la maintenance et aux travaux réalisés sur l'immeuble, consultable par tout copropriétaire et communicable à l'acquéreur.",
    related: ["syndic", "ppt"],
  },
  {
    id: "fiche-synthetique",
    term: "Fiche synthétique de copropriété",
    category: "Copropriété",
    simple: "Une fiche d'identité de la copropriété : nombre de lots, budget, impayés, équipements.",
    pro:
      "Document établi et mis à jour annuellement par le syndic regroupant les données financières et techniques essentielles de la copropriété.",
    watchOut: "C'est le document le plus rapide à obtenir pour détecter une copropriété en difficulté.",
    related: ["syndic", "copropriete"],
    legalSensitive: true,
  },

  /* -------------------- Diagnostics, énergie, technique ----------------- */
  {
    id: "dpe",
    term: "DPE (diagnostic de performance énergétique)",
    aliases: ["étiquette énergie", "classe énergétique"],
    category: "Diagnostics & énergie",
    simple:
      "Une note de A à G qui indique si le logement consomme beaucoup d'énergie et s'il émet beaucoup de gaz à effet de serre.",
    pro:
      "Diagnostic évaluant la consommation d'énergie primaire et les émissions de gaz à effet de serre d'un logement, exprimé par une double étiquette de A à G. Depuis le 1er juillet 2021, il est opposable : ses informations engagent la responsabilité du vendeur ou du bailleur.",
    example:
      "Un T3 classé E de 70 m² se vendra en général moins cher qu'un T3 classé C identique : c'est ce qu'on appelle la « valeur verte ».",
    watchOut:
      "Le calendrier d'interdiction de location des logements les plus énergivores et les règles d'audit énergétique ont évolué à plusieurs reprises. Ne citez jamais une date de mémoire devant un client : vérifiez selon la réglementation en vigueur.",
    related: ["audit-energetique", "diagnostics", "valeur-verte", "passoire-thermique"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F16096"), { label: "ADEME", url: "https://www.ademe.fr/" }],
  },
  {
    id: "passoire-thermique",
    term: "Passoire thermique",
    category: "Diagnostics & énergie",
    simple: "Un logement qui consomme énormément d'énergie : les classes F et G du DPE.",
    pro:
      "Désignation usuelle des logements classés F ou G au DPE, visés par des restrictions progressives de mise en location et par l'obligation d'audit énergétique en cas de vente.",
    watchOut:
      "Le calendrier des interdictions évolue : indiquez au vendeur l'existence d'un calendrier, puis vérifiez la date applicable avant tout engagement écrit.",
    related: ["dpe", "audit-energetique"],
    legalSensitive: true,
  },
  {
    id: "audit-energetique",
    term: "Audit énergétique",
    category: "Diagnostics & énergie",
    simple:
      "Un document plus complet que le DPE, qui propose un plan de travaux pour améliorer le logement, exigé pour la vente des logements les plus énergivores.",
    pro:
      "Étude réalisée par un professionnel qualifié présentant des propositions de travaux, en une ou plusieurs étapes, permettant d'atteindre un niveau de performance énergétique cible, avec estimation des coûts et des aides mobilisables. Il est exigé à la vente pour certaines catégories de logements en monopropriété.",
    watchOut:
      "Le périmètre (classes concernées, types de biens) s'élargit par étapes. À vérifier selon la réglementation en vigueur avant d'affirmer qu'un bien y est soumis.",
    related: ["dpe", "diagnostics"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F35671")],
  },
  {
    id: "diagnostics",
    term: "Diagnostics techniques (DDT)",
    aliases: ["dossier de diagnostic technique"],
    category: "Diagnostics & énergie",
    simple:
      "L'ensemble des contrôles obligatoires réalisés avant de vendre : énergie, amiante, plomb, électricité, gaz, risques…",
    pro:
      "Dossier de diagnostic technique annexé à la promesse ou à l'acte, réunissant selon les cas : DPE, constat de risque d'exposition au plomb, état d'amiante, état de l'installation intérieure de gaz et d'électricité, état relatif aux termites, état des risques et pollutions, diagnostic assainissement non collectif, mesurage Carrez.",
    watchOut:
      "Chaque diagnostic a sa propre durée de validité et son propre périmètre (année de construction, zone géographique, type d'installation). Faites établir le dossier dès la prise de mandat : c'est un accélérateur de vente considérable.",
    related: ["dpe", "erp", "amiante", "plomb"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2266")],
  },
  {
    id: "erp",
    term: "État des risques et pollutions (ERP)",
    category: "Diagnostics & énergie",
    simple:
      "Un document qui indique si le bien est situé dans une zone à risque : inondation, séisme, industrie, sol pollué, bruit d'aéroport…",
    pro:
      "État informant l'acquéreur ou le locataire des risques naturels, miniers, technologiques, sismiques, radon, pollution des sols et nuisances sonores aériennes affectant l'immeuble, établi à partir des arrêtés préfectoraux et documents d'information communaux.",
    watchOut: "Sa durée de validité est courte : un ERP périmé au moment de la signature est une source de report.",
    related: ["diagnostics", "urbanisme"],
    legalSensitive: true,
    sources: [{ label: "Géorisques", url: "https://www.georisques.gouv.fr/" }],
  },
  {
    id: "amiante",
    term: "Amiante (état d'amiante)",
    category: "Diagnostics & énergie",
    simple:
      "Un contrôle pour savoir si le logement contient de l'amiante, un matériau dangereux utilisé autrefois dans la construction.",
    pro:
      "Repérage des matériaux et produits contenant de l'amiante, exigé pour les immeubles dont le permis de construire a été délivré avant le 1er juillet 1997. Sa portée diffère selon qu'il s'agit d'une vente, de travaux ou d'une démolition.",
    watchOut:
      "Ne dites jamais « il n'y a pas d'amiante » : dites « le diagnostic amiante conclut à l'absence de matériaux repérés dans les éléments contrôlés ».",
    related: ["diagnostics", "plomb"],
    legalSensitive: true,
  },
  {
    id: "plomb",
    term: "CREP (plomb)",
    category: "Diagnostics & énergie",
    simple:
      "Un contrôle des peintures anciennes, qui pouvaient contenir du plomb, dangereux notamment pour les enfants.",
    pro:
      "Constat de risque d'exposition au plomb, exigé pour les logements construits avant le 1er janvier 1949, portant sur les revêtements et concluant à la présence et à l'état de conservation des peintures au plomb.",
    related: ["diagnostics", "amiante"],
    legalSensitive: true,
  },
  {
    id: "valeur-verte",
    term: "Valeur verte",
    category: "Diagnostics & énergie",
    simple: "L'effet du DPE sur le prix : un logement bien isolé se vend souvent plus cher qu'un logement énergivore.",
    pro:
      "Écart de valeur observé entre des biens comparables présentant des performances énergétiques différentes. Son ampleur varie fortement selon les régions, la typologie et la tension du marché local.",
    watchOut:
      "Ne citez pas un pourcentage national à un vendeur : appuyez-vous sur vos propres comparables locaux. Sinon vous serez contredit.",
    related: ["dpe", "estimation", "comparables"],
  },

  /* ----------------------- Métier, mandats, obligations ------------------ */
  {
    id: "loi-hoguet",
    term: "Loi Hoguet",
    category: "Métier & mandats",
    simple:
      "La loi qui encadre le métier d'agent immobilier en France : qui peut exercer, avec quelles garanties et quelles obligations.",
    pro:
      "Loi n° 70-9 du 2 janvier 1970 réglementant les conditions d'exercice des activités relatives à certaines opérations portant sur les immeubles et les fonds de commerce, complétée par son décret d'application. Elle impose notamment la détention d'une carte professionnelle, une garantie financière en cas de maniement de fonds, une assurance de responsabilité civile professionnelle et un mandat écrit préalable.",
    watchOut:
      "C'est le socle du métier : sans mandat écrit conforme, aucune commission n'est due. Vérifiez toujours l'existence, la date, le numéro de registre et la signature de toutes les parties.",
    related: ["carte-professionnelle", "mandat", "mandataire", "registre-mandats"],
    legalSensitive: true,
    sources: [
      LEGI("Légifrance — loi n° 70-9 du 2 janvier 1970", "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000512228/"),
      SP("professionnels/vosdroits/F31649"),
    ],
  },
  {
    id: "carte-professionnelle",
    term: "Carte professionnelle",
    aliases: ["carte T", "carte G", "carte S"],
    category: "Métier & mandats",
    simple:
      "L'autorisation officielle nécessaire pour exercer comme agent immobilier. Elle est délivrée par la chambre de commerce.",
    pro:
      "Titre délivré par la chambre de commerce et d'industrie territoriale, mentionnant les activités exercées : « Transactions sur immeubles et fonds de commerce » (T), « Gestion immobilière » (G), « Syndic de copropriété » (S). Sa délivrance suppose des conditions d'aptitude professionnelle, d'honorabilité, d'assurance et, le cas échéant, de garantie financière. Elle doit être renouvelée périodiquement et son titulaire est soumis à une obligation de formation continue.",
    watchOut:
      "Un mandataire n'a pas de carte professionnelle : il travaille sous celle du titulaire, via une attestation d'habilitation. Ne dites jamais « j'ai la carte T » si ce n'est pas le cas.",
    related: ["loi-hoguet", "mandataire", "negociateur", "formation-continue"],
    legalSensitive: true,
    sources: [SP("professionnels/vosdroits/F31649")],
  },
  {
    id: "formation-continue",
    term: "Formation continue (loi ALUR)",
    category: "Métier & mandats",
    simple: "Une obligation de se former régulièrement pour continuer à exercer dans l'immobilier.",
    pro:
      "Obligation de formation continue imposée aux titulaires de la carte professionnelle et aux personnes habilitées, portant notamment sur les domaines juridique, économique, commercial, la déontologie et, selon les cas, la construction, l'urbanisme ou la transition énergétique. Son volume est fixé par décret.",
    watchOut: "Le volume horaire et les modalités relèvent du décret : à vérifier selon la réglementation en vigueur.",
    related: ["carte-professionnelle", "deontologie"],
    legalSensitive: true,
  },
  {
    id: "mandataire",
    term: "Mandataire immobilier",
    category: "Métier & mandats",
    simple:
      "Un professionnel indépendant qui travaille pour un réseau, sans agence physique, et sans détenir lui-même la carte professionnelle.",
    pro:
      "Agent commercial indépendant, immatriculé au registre spécial des agents commerciaux, habilité par un titulaire de carte professionnelle au moyen d'une attestation. Il ne peut ni recevoir de fonds, ni rédiger d'actes, ni disposer d'une agence ouverte au public en son nom propre.",
    watchOut:
      "Ses limites sont réelles et doivent être expliquées au client sans complexe : elles n'empêchent en rien un accompagnement de très haut niveau.",
    related: ["carte-professionnelle", "negociateur", "agent-immobilier"],
    legalSensitive: true,
    sources: [SP("professionnels/vosdroits/F31649")],
  },
  {
    id: "agent-immobilier",
    term: "Agent immobilier",
    category: "Métier & mandats",
    simple: "Le professionnel titulaire de la carte professionnelle, qui dirige l'agence et engage sa responsabilité.",
    pro:
      "Personne physique ou morale titulaire de la carte professionnelle, exerçant l'entremise et la gestion immobilières dans le cadre de la loi Hoguet, et responsable des personnes qu'elle habilite.",
    related: ["carte-professionnelle", "mandataire", "negociateur"],
  },
  {
    id: "negociateur",
    term: "Négociateur immobilier",
    category: "Métier & mandats",
    simple: "Le salarié d'une agence qui s'occupe des ventes : prospection, estimations, visites, négociation.",
    pro:
      "Collaborateur salarié — souvent sous statut VRP — habilité par le titulaire de la carte professionnelle à négocier et s'entremettre, sans pouvoir recevoir de fonds sauf habilitation expresse.",
    related: ["agent-immobilier", "mandataire"],
  },
  {
    id: "mandat",
    term: "Mandat de vente",
    category: "Métier & mandats",
    simple:
      "Le contrat par lequel un propriétaire vous demande officiellement de vendre son bien et accepte de vous rémunérer si vous réussissez.",
    pro:
      "Convention écrite préalable et obligatoire par laquelle le mandant confie au mandataire la mission de rechercher un acquéreur, précisant sa durée, son objet, le prix, les honoraires, leur charge et les conditions de reddition de compte. Il est inscrit au registre des mandats sous un numéro d'ordre.",
    watchOut:
      "Un mandat non daté, non numéroté, ou dont un co-indivisaire manque, est fragile. Relisez-le systématiquement avant de le faire signer.",
    related: ["mandat-simple", "mandat-exclusif", "registre-mandats", "honoraires"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1638")],
  },
  {
    id: "mandat-simple",
    term: "Mandat simple",
    category: "Métier & mandats",
    simple:
      "Le propriétaire vous confie la vente, mais il peut aussi la confier à d'autres agences et vendre lui-même.",
    pro:
      "Mandat non exclusif : le mandant conserve la faculté de confier la vente à d'autres professionnels et de vendre par lui-même, en respectant le cas échéant les clauses de notification prévues au contrat.",
    watchOut:
      "Le mandat simple n'est pas « le mandat du client qui n'a pas confiance » : c'est parfois le bon choix. Mais il impose une discipline de suivi plus forte, car vous n'êtes pas seul.",
    related: ["mandat", "mandat-exclusif"],
  },
  {
    id: "mandat-exclusif",
    term: "Mandat exclusif",
    category: "Métier & mandats",
    simple:
      "Le propriétaire vous confie la vente à vous seul, pour une durée déterminée. En contrepartie, vous vous engagez sur un vrai plan d'action.",
    pro:
      "Mandat conférant au mandataire l'exclusivité de la recherche d'acquéreur pendant une période irrévocable, généralement assortie d'une clause pénale ou d'une indemnité en cas de vente réalisée en violation de l'exclusivité. Il comporte une durée déterminée et une faculté de dénonciation dans les conditions prévues par la réglementation.",
    watchOut:
      "L'exclusivité s'obtient par la qualité du plan d'action présenté, pas par la pression. Un exclusif arraché sans engagement écrit du professionnel se transforme en conflit au bout de six semaines.",
    related: ["mandat", "mandat-simple", "honoraires"],
    legalSensitive: true,
  },
  {
    id: "registre-mandats",
    term: "Registre des mandats",
    category: "Métier & mandats",
    simple: "Le carnet officiel de l'agence où chaque mandat reçoit un numéro, dans l'ordre.",
    pro:
      "Registre tenu par le titulaire de la carte professionnelle, à pages numérotées sans blanc ni rature (tenue dématérialisée admise sous conditions), sur lequel les mandats sont inscrits par ordre chronologique ; le numéro d'inscription est reporté sur l'exemplaire remis au mandant.",
    watchOut: "Un mandat sans numéro de registre est un mandat contestable. C'est un contrôle de base.",
    related: ["mandat", "loi-hoguet"],
    legalSensitive: true,
  },
  {
    id: "honoraires",
    term: "Honoraires d'agence",
    aliases: ["commission", "frais d'agence"],
    category: "Métier & mandats",
    simple:
      "Ce que l'agence gagne quand la vente se réalise. Le montant est libre, mais il doit être affiché et écrit dans le mandat.",
    pro:
      "Rémunération du professionnel, librement fixée, due seulement si l'opération est effectivement conclue et constatée dans un acte. Les prix doivent être affichés toutes taxes comprises et le mandat doit préciser le montant ou le taux ainsi que la partie qui en a la charge.",
    example:
      "Un bien affiché 315 000 € FAI avec 15 000 € d'honoraires correspond à 300 000 € net vendeur.",
    watchOut:
      "FAI (« frais d'agence inclus ») et « net vendeur » ne désignent pas la même somme. Une confusion sur ce point fausse toute la négociation.",
    related: ["mandat", "net-vendeur", "fai"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1638")],
  },
  {
    id: "fai",
    term: "FAI (frais d'agence inclus)",
    category: "Métier & mandats",
    simple: "Le prix affiché qui comprend déjà la commission de l'agence.",
    pro:
      "Prix de présentation intégrant les honoraires du professionnel lorsque ceux-ci sont à la charge de l'acquéreur ou du vendeur selon les mentions du mandat.",
    related: ["honoraires", "net-vendeur"],
  },
  {
    id: "net-vendeur",
    term: "Prix net vendeur",
    category: "Métier & mandats",
    simple: "La somme que le propriétaire touche réellement, une fois la commission de l'agence retirée.",
    pro:
      "Prix revenant au vendeur, hors honoraires de négociation. C'est la base de discussion à privilégier avec le mandant, les honoraires étant ensuite ajoutés selon leur charge contractuelle.",
    related: ["honoraires", "fai"],
  },
  {
    id: "devoir-conseil",
    term: "Devoir de conseil",
    category: "Métier & mandats",
    simple:
      "L'obligation de dire à votre client ce qui est utile pour sa décision, même quand cela ne vous arrange pas.",
    pro:
      "Obligation professionnelle d'éclairer les parties sur les éléments déterminants de leur consentement et sur l'opportunité de l'opération, distincte de la simple obligation d'information. Sa méconnaissance engage la responsabilité civile du professionnel.",
    example:
      "Prévenir un acquéreur qu'un ravalement voté en AG lui sera facturé après la vente relève du devoir de conseil.",
    watchOut:
      "En cas de doute : écrivez. Un e-mail récapitulatif après un rendez-vous est votre meilleure protection et le meilleur service rendu au client.",
    related: ["devoir-information", "responsabilite-professionnelle", "deontologie"],
    legalSensitive: true,
  },
  {
    id: "devoir-information",
    term: "Devoir d'information",
    category: "Métier & mandats",
    simple: "L'obligation de transmettre les informations essentielles sur le bien et sur l'opération.",
    pro:
      "Obligation de communiquer aux parties les informations dont l'importance est déterminante pour leur consentement, notamment celles relatives à l'état du bien, à la copropriété, aux diagnostics et aux contraintes d'urbanisme connues.",
    related: ["devoir-conseil", "vices-caches", "diagnostics"],
    legalSensitive: true,
  },
  {
    id: "deontologie",
    term: "Déontologie",
    category: "Métier & mandats",
    simple: "Les règles de comportement du métier : honnêteté, transparence, confidentialité, compétence.",
    pro:
      "Ensemble des règles issues du code de déontologie applicable aux professionnels de l'immobilier : éthique, respect des lois, compétence, transparence, confidentialité, défense des intérêts en présence, conflit d'intérêts.",
    related: ["devoir-conseil", "loi-hoguet", "rgpd"],
    legalSensitive: true,
  },
  {
    id: "responsabilite-professionnelle",
    term: "Responsabilité professionnelle",
    category: "Métier & mandats",
    simple: "Le fait de devoir réparer le préjudice causé par une erreur, une omission ou un mauvais conseil.",
    pro:
      "Responsabilité civile professionnelle du mandataire, couverte par une assurance obligatoire, engagée notamment en cas de manquement au devoir de conseil, d'information erronée ou de négligence dans la vérification des éléments essentiels.",
    related: ["devoir-conseil", "loi-hoguet"],
    legalSensitive: true,
  },
  {
    id: "lcb-ft",
    term: "LCB-FT (lutte anti-blanchiment)",
    aliases: ["Tracfin", "blanchiment"],
    category: "Métier & mandats",
    simple:
      "Les obligations qui imposent de vérifier l'identité des clients et de signaler les opérations suspectes.",
    pro:
      "Dispositif de lutte contre le blanchiment de capitaux et le financement du terrorisme imposant aux professionnels de l'immobilier une obligation d'identification et de vérification de l'identité du client et du bénéficiaire effectif, une vigilance adaptée au risque, la conservation des documents et, le cas échéant, une déclaration de soupçon.",
    watchOut:
      "La déclaration de soupçon est confidentielle : il est interdit d'informer le client de son existence.",
    related: ["deontologie", "rgpd"],
    legalSensitive: true,
    sources: [{ label: "Tracfin", url: "https://www.economie.gouv.fr/tracfin" }],
  },
  {
    id: "rgpd",
    term: "RGPD",
    category: "Métier & mandats",
    simple:
      "Les règles européennes de protection des données personnelles : ce que vous avez le droit de collecter, de conserver et d'utiliser.",
    pro:
      "Règlement général sur la protection des données, imposant une base légale de traitement, une information des personnes, une minimisation des données, une durée de conservation limitée et le respect des droits d'accès, de rectification, d'effacement et d'opposition.",
    watchOut:
      "Un fichier de prospection constitué à partir d'annonces de particuliers est un traitement de données personnelles : information et droit d'opposition s'appliquent. Consultez la CNIL.",
    related: ["prospection", "deontologie"],
    legalSensitive: true,
    sources: [{ label: "CNIL", url: "https://www.cnil.fr/" }],
  },

  /* ------------------------ Contrats & transaction ---------------------- */
  {
    id: "offre-achat",
    term: "Offre d'achat",
    category: "Contrats & transaction",
    simple: "Une proposition écrite d'un acquéreur : « j'achète votre bien à tel prix, à telles conditions ».",
    pro:
      "Manifestation de volonté par laquelle un candidat acquéreur propose d'acquérir à un prix et à des conditions déterminés. Son acceptation par le vendeur forme en principe la vente sur le prix et la chose ; sa rédaction doit donc être maîtrisée et assortie des conditions utiles.",
    watchOut:
      "Une offre d'achat mal rédigée peut engager le vendeur plus tôt qu'il ne le croit. Faites systématiquement relire par le titulaire de la carte ou le notaire, et ne faites jamais verser de somme d'argent au stade de l'offre.",
    related: ["compromis", "promesse-vente", "conditions-suspensives"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2957")],
  },
  {
    id: "compromis",
    term: "Compromis de vente",
    aliases: ["promesse synallagmatique", "avant-contrat"],
    category: "Contrats & transaction",
    simple:
      "Le contrat signé avant la vente définitive : les deux parties s'engagent, l'une à vendre, l'autre à acheter, sous conditions.",
    pro:
      "Promesse synallagmatique de vente engageant réciproquement vendeur et acquéreur, valant vente dès lors qu'il y a accord sur la chose et sur le prix, sous réserve des conditions suspensives stipulées et du délai de rétractation légal de l'acquéreur non professionnel.",
    example:
      "Compromis signé le 12 mars, conditions suspensives de prêt jusqu'au 12 mai, acte authentique prévu fin juin.",
    watchOut:
      "Compromis et promesse unilatérale ne produisent pas les mêmes effets. Le choix appartient aux parties, éclairées par le notaire.",
    related: ["promesse-vente", "conditions-suspensives", "delai-retractation", "acte-authentique"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2957")],
  },
  {
    id: "promesse-vente",
    term: "Promesse unilatérale de vente",
    aliases: ["PUV"],
    category: "Contrats & transaction",
    simple:
      "Le vendeur s'engage à vendre, mais l'acheteur reste libre : il « réserve » le bien et verse une indemnité s'il renonce sans motif prévu.",
    pro:
      "Contrat par lequel le promettant s'engage à vendre au bénéficiaire, qui dispose d'une option pendant un délai déterminé, généralement moyennant une indemnité d'immobilisation. Sa validité est soumise à des formalités spécifiques, notamment d'enregistrement lorsqu'elle est établie sous seing privé.",
    watchOut:
      "Les formalités d'enregistrement et leurs délais sont techniques : c'est un sujet de notaire, pas d'improvisation.",
    related: ["compromis", "conditions-suspensives"],
    legalSensitive: true,
  },
  {
    id: "conditions-suspensives",
    term: "Conditions suspensives",
    category: "Contrats & transaction",
    simple:
      "Des événements qui doivent se produire pour que la vente ait lieu. Si l'un manque, la vente est annulée sans pénalité.",
    pro:
      "Événements futurs et incertains dont dépend la formation définitive de la vente : obtention du prêt, absence de préemption, obtention d'une autorisation d'urbanisme, purge d'un droit… Leur défaillance entraîne la caducité de l'avant-contrat et la restitution des sommes versées.",
    example:
      "Condition suspensive d'obtention d'un prêt de 240 000 € sur 25 ans à un taux maximal indiqué au contrat.",
    watchOut:
      "Une condition suspensive de prêt mal chiffrée (montant, durée, taux) protège mal l'acquéreur. Encouragez toujours la précision.",
    related: ["compromis", "condition-prêt", "droit-preemption"],
    legalSensitive: true,
  },
  {
    id: "condition-prêt",
    term: "Condition suspensive de prêt",
    category: "Contrats & transaction",
    simple: "La clause qui annule la vente si la banque refuse le crédit de l'acheteur.",
    pro:
      "Condition suspensive légale au bénéfice de l'acquéreur non professionnel finançant l'acquisition par un prêt : l'avant-contrat doit en préciser les caractéristiques et la durée minimale de validité fixée par la loi. L'acquéreur ne peut se prévaloir de la défaillance qu'il a lui-même provoquée.",
    watchOut:
      "Demandez à l'acquéreur ses justificatifs de dépôt de dossier bancaire. Une condition de prêt sans démarche réelle est une source de litige.",
    related: ["conditions-suspensives", "financement", "taux-endettement"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2926")],
  },
  {
    id: "delai-retractation",
    term: "Délai de rétractation (SRU)",
    category: "Contrats & transaction",
    simple:
      "Un délai pendant lequel l'acheteur particulier peut changer d'avis sans se justifier et sans rien payer.",
    pro:
      "Délai légal de rétractation ouvert à l'acquéreur non professionnel d'un immeuble à usage d'habitation, courant à compter du lendemain de la première présentation de la notification de l'avant-contrat accompagné de ses annexes. Sa durée est fixée par le code de la construction et de l'habitation.",
    watchOut:
      "La durée exacte et le point de départ sont réglementés : vérifiez selon la réglementation en vigueur et laissez le notaire ou le rédacteur gérer la notification.",
    related: ["compromis", "notaire"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2957")],
  },
  {
    id: "droit-preemption",
    term: "Droit de préemption",
    category: "Contrats & transaction",
    simple:
      "Le droit, pour la mairie ou une autre personne, d'acheter le bien en priorité aux conditions prévues par la vente.",
    pro:
      "Faculté légale ouverte à certains titulaires (commune au titre du droit de préemption urbain, SAFER, locataire dans les cas prévus…) d'acquérir prioritairement un bien mis en vente, à la suite d'une déclaration d'intention d'aliéner adressée par le notaire.",
    watchOut:
      "La purge du droit de préemption est un des principaux facteurs de délai entre le compromis et l'acte. Annoncez-le au vendeur dès le départ.",
    related: ["notaire", "conditions-suspensives", "urbanisme"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1077")],
  },
  {
    id: "acte-authentique",
    term: "Acte authentique de vente",
    category: "Contrats & transaction",
    simple: "La signature définitive chez le notaire : la propriété change de mains et les clés sont remises.",
    pro:
      "Acte reçu par le notaire, constatant le transfert de propriété, procédant au règlement du prix et des frais, et donnant lieu aux formalités de publicité foncière rendant la vente opposable aux tiers.",
    related: ["notaire", "compromis", "frais-notaire"],
  },
  {
    id: "notaire",
    term: "Notaire",
    category: "Contrats & transaction",
    simple:
      "L'officier public qui rédige l'acte de vente, vérifie la situation du bien, collecte les impôts et sécurise la transaction.",
    pro:
      "Officier public délégataire de la puissance publique, chargé de conférer l'authenticité aux actes, de procéder aux vérifications préalables (titre, urbanisme, hypothèques, préemption, état civil), de séquestrer les fonds et d'assurer les formalités de publicité foncière.",
    watchOut:
      "Le conseiller immobilier prépare et coordonne, mais ne se substitue jamais au notaire sur le terrain juridique.",
    related: ["acte-authentique", "frais-notaire", "compromis"],
    sources: [{ label: "Notaires de France", url: "https://www.notaires.fr/" }],
  },
  {
    id: "frais-notaire",
    term: "Frais de notaire",
    aliases: ["frais d'acquisition"],
    category: "Contrats & transaction",
    simple:
      "L'ensemble des sommes payées en plus du prix : impôts, formalités, et une petite part seulement pour le notaire lui-même.",
    pro:
      "Frais d'acquisition composés majoritairement des droits de mutation à titre onéreux perçus au profit des collectivités, auxquels s'ajoutent la contribution de sécurité immobilière, les débours et les émoluments du notaire, tarifés réglementairement.",
    example:
      "Dans l'ancien, l'ordre de grandeur usuel se situe autour de 7 à 8 % du prix ; dans le neuf, il est nettement plus faible.",
    watchOut:
      "Les taux de droits de mutation peuvent varier selon les départements et faire l'objet d'évolutions : donnez un ordre de grandeur, puis renvoyez au simulateur officiel et au notaire.",
    related: ["notaire", "acte-authentique"],
    legalSensitive: true,
    sources: [
      { label: "Notaires de France — simulateur", url: "https://www.notaires.fr/fr/immobilier-fiscalite/frais-de-notaire" },
    ],
  },
  {
    id: "vices-caches",
    term: "Vices cachés",
    category: "Contrats & transaction",
    simple:
      "Un défaut grave, invisible au moment de l'achat, qui rend le bien impropre à son usage ou en diminue fortement la valeur.",
    pro:
      "Défaut caché de la chose vendue, antérieur à la vente, la rendant impropre à l'usage auquel on la destine ou en diminuant tellement cet usage que l'acquéreur ne l'aurait pas acquise ou en aurait donné un moindre prix. Les clauses d'exclusion de garantie sont fréquentes entre particuliers mais inopérantes en cas de mauvaise foi du vendeur.",
    watchOut:
      "Si un vendeur vous confie l'existence d'un défaut, il doit être porté à la connaissance de l'acquéreur. Le taire vous expose personnellement.",
    related: ["devoir-information", "diagnostics", "acte-authentique"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F2761")],
  },
  {
    id: "sequestre",
    term: "Dépôt de garantie (séquestre)",
    category: "Contrats & transaction",
    simple:
      "Une somme versée par l'acheteur à la signature du compromis, conservée par le notaire jusqu'à la vente définitive.",
    pro:
      "Somme versée par l'acquéreur lors de l'avant-contrat, séquestrée chez le notaire ou chez un professionnel disposant d'une garantie financière, imputée sur le prix lors de la réitération ou restituée en cas de défaillance d'une condition suspensive.",
    watchOut:
      "Un mandataire immobilier ne peut pas recevoir ces fonds. Orientez systématiquement vers le notaire.",
    related: ["compromis", "notaire", "mandataire"],
    legalSensitive: true,
  },

  /* ------------------------------ Financement --------------------------- */
  {
    id: "apport",
    term: "Apport personnel",
    category: "Financement",
    simple: "L'argent que l'acheteur met de sa poche, en plus du crédit.",
    pro:
      "Part du financement non couverte par l'emprunt, provenant de l'épargne, d'une donation, d'un prêt aidé ou du produit d'une vente antérieure. Il couvre fréquemment au minimum les frais d'acquisition.",
    watchOut:
      "Demandez toujours d'où vient l'apport et s'il est disponible : un apport « qui viendra de la vente de mon appartement » change complètement le calendrier.",
    related: ["financement", "taux-endettement", "frais-notaire"],
  },
  {
    id: "capacite-emprunt",
    term: "Capacité d'emprunt",
    category: "Financement",
    simple: "Le montant maximum qu'une banque acceptera probablement de prêter, compte tenu des revenus et des charges.",
    pro:
      "Montant d'emprunt compatible avec la mensualité maximale supportable par l'emprunteur, déterminée à partir de ses revenus nets, de ses charges de crédit en cours, du taux d'endettement admis et du reste à vivre, pour une durée et un taux donnés.",
    watchOut:
      "Vous n'êtes pas courtier : donnez des ordres de grandeur pédagogiques et orientez vers un professionnel du financement.",
    related: ["taux-endettement", "mensualite", "courtier"],
  },
  {
    id: "taux-endettement",
    term: "Taux d'endettement",
    category: "Financement",
    simple:
      "La part des revenus consacrée au remboursement des crédits. Au-delà d'un certain seuil, les banques refusent le dossier.",
    pro:
      "Rapport entre les charges d'emprunt (assurance comprise) et les revenus nets, encadré par les recommandations du Haut Conseil de stabilité financière, avec une marge de flexibilité laissée aux établissements pour une part de leur production.",
    watchOut:
      "Le seuil usuel et la durée maximale relèvent de recommandations susceptibles d'évoluer : à vérifier auprès d'un courtier ou d'une banque.",
    related: ["capacite-emprunt", "reste-a-vivre", "courtier"],
    legalSensitive: true,
    sources: [{ label: "Banque de France / HCSF", url: "https://www.economie.gouv.fr/hcsf" }],
  },
  {
    id: "reste-a-vivre",
    term: "Reste à vivre",
    category: "Financement",
    simple: "Ce qu'il reste chaque mois au ménage une fois le crédit et les charges fixes payés.",
    pro:
      "Solde disponible mensuel après déduction des charges de crédit et des charges incompressibles, apprécié par la banque en valeur absolue et par unité de consommation du foyer.",
    related: ["taux-endettement", "capacite-emprunt"],
  },
  {
    id: "mensualite",
    term: "Mensualité",
    category: "Financement",
    simple: "La somme remboursée chaque mois à la banque.",
    pro:
      "Échéance périodique d'un prêt amortissable, composée d'une part d'intérêts et d'une part de capital, à laquelle s'ajoute généralement la cotisation d'assurance emprunteur.",
    example:
      "240 000 € empruntés sur 25 ans à 3,50 % : environ 1 202 € par mois hors assurance.",
    related: ["capacite-emprunt", "taux-nominal", "assurance-emprunteur"],
  },
  {
    id: "taux-nominal",
    term: "Taux nominal / TAEG",
    category: "Financement",
    simple:
      "Le taux nominal est le taux « brut » du crédit ; le TAEG ajoute tous les frais pour donner le coût réel.",
    pro:
      "Le taux débiteur rémunère le capital prêté ; le taux annuel effectif global intègre en outre l'assurance obligatoire, les frais de dossier, de garantie et les frais annexes. C'est le TAEG qui permet de comparer deux offres.",
    related: ["mensualite", "assurance-emprunteur"],
  },
  {
    id: "assurance-emprunteur",
    term: "Assurance emprunteur",
    category: "Financement",
    simple: "L'assurance qui rembourse le crédit en cas de décès, d'invalidité ou parfois de perte d'emploi.",
    pro:
      "Contrat couvrant les risques décès, perte totale et irréversible d'autonomie, incapacité et invalidité, éventuellement perte d'emploi, exigé en pratique par le prêteur. Le choix d'un contrat alternatif à celui de la banque est possible dans les conditions prévues par la loi.",
    related: ["mensualite", "taux-nominal"],
    legalSensitive: true,
  },
  {
    id: "courtier",
    term: "Courtier en crédit",
    category: "Financement",
    simple: "Un intermédiaire qui cherche le meilleur crédit pour l'acheteur auprès de plusieurs banques.",
    pro:
      "Intermédiaire en opérations de banque et services de paiement, immatriculé à l'ORIAS, chargé de rechercher et de négocier un financement pour le compte de son client, rémunéré par une commission bancaire et/ou des honoraires.",
    watchOut:
      "Travailler avec deux ou trois courtiers de confiance accélère considérablement les ventes et sécurise les conditions suspensives.",
    related: ["financement", "condition-prêt"],
  },

  /* ------------------------------- Fiscalité ---------------------------- */
  {
    id: "plus-value",
    term: "Plus-value immobilière",
    category: "Fiscalité",
    simple: "Le gain réalisé entre le prix d'achat et le prix de vente, qui peut être imposé.",
    pro:
      "Différence entre le prix de cession et le prix d'acquisition majoré de frais et de certaines dépenses, soumise à l'impôt sur le revenu et aux prélèvements sociaux, avec des abattements pour durée de détention et de nombreuses exonérations, dont celle de la résidence principale.",
    watchOut:
      "Les taux, abattements et exonérations relèvent de la loi fiscale et évoluent. Le calcul appartient au notaire : ne le faites jamais à sa place.",
    related: ["residence-principale", "notaire", "fiscalite"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F10864"), { label: "impots.gouv.fr", url: "https://www.impots.gouv.fr/" }],
  },
  {
    id: "residence-principale",
    term: "Résidence principale",
    category: "Fiscalité",
    simple: "Le logement où l'on habite habituellement la majeure partie de l'année.",
    pro:
      "Logement occupé de manière habituelle et effective par le propriétaire et sa famille, notion appréciée en fait, ouvrant droit notamment à l'exonération de plus-value en cas de cession.",
    related: ["plus-value", "residence-secondaire"],
    legalSensitive: true,
  },
  {
    id: "residence-secondaire",
    term: "Résidence secondaire",
    category: "Fiscalité",
    simple: "Un logement que l'on possède sans y vivre à l'année : maison de vacances, pied-à-terre…",
    pro:
      "Logement meublé occupé de façon temporaire, soumis à la taxe d'habitation sur les résidences secondaires et, le cas échéant, à des majorations décidées par certaines communes.",
    related: ["residence-principale", "taxe-fonciere"],
    legalSensitive: true,
  },
  {
    id: "revenus-fonciers",
    term: "Revenus fonciers",
    category: "Fiscalité",
    simple: "Les loyers perçus d'une location vide, imposés dans une catégorie spécifique.",
    pro:
      "Revenus tirés de la location nue d'immeubles, imposés selon le régime micro-foncier (abattement forfaitaire, sous plafond de recettes) ou le régime réel (déduction des charges effectives, imputation éventuelle d'un déficit dans les limites légales).",
    watchOut: "Les plafonds et abattements évoluent : renvoyez systématiquement vers un expert-comptable.",
    related: ["location-nue", "lmnp", "fiscalite"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1993")],
  },
  {
    id: "lmnp",
    term: "LMNP (loueur en meublé non professionnel)",
    category: "Fiscalité",
    simple: "Le statut de celui qui loue un logement meublé sans en faire son activité principale.",
    pro:
      "Statut applicable aux loueurs en meublé ne remplissant pas les conditions du caractère professionnel, dont les revenus relèvent des bénéfices industriels et commerciaux, en micro-BIC (abattement forfaitaire) ou au réel (amortissements et charges).",
    watchOut:
      "Les abattements du micro-BIC, notamment pour les meublés de tourisme, ont fait l'objet de modifications législatives récentes : à vérifier selon la réglementation en vigueur.",
    related: ["location-meublee", "revenus-fonciers", "fiscalite"],
    legalSensitive: true,
  },
  {
    id: "taxe-fonciere",
    term: "Taxe foncière",
    category: "Fiscalité",
    simple: "Un impôt local payé chaque année par le propriétaire du bien.",
    pro:
      "Taxe foncière sur les propriétés bâties, due par le propriétaire au 1er janvier, assise sur la valeur locative cadastrale et fonction des taux votés par les collectivités. Sa répartition entre vendeur et acquéreur au prorata est un usage contractuel, non une obligation légale.",
    watchOut:
      "Demandez toujours le dernier avis de taxe foncière lors de l'estimation : c'est une information systématiquement demandée par les acquéreurs.",
    related: ["charges-copropriete", "fiscalite"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F59")],
  },
  {
    id: "rendement-locatif",
    term: "Rendement locatif",
    category: "Fiscalité",
    simple: "Ce que rapporte un bien loué, exprimé en pourcentage de son prix d'achat.",
    pro:
      "Rapport entre les loyers annuels et le prix d'acquisition. Le rendement brut ignore charges et fiscalité ; le rendement net déduit charges, taxe foncière, gestion, vacance et travaux ; le rendement net-net intègre la fiscalité de l'investisseur.",
    example: "9 600 € de loyers annuels pour un bien acheté 160 000 € : 6 % de rendement brut.",
    watchOut:
      "Un rendement brut annoncé sans mention de la vacance, des charges et de la fiscalité n'est pas une information sincère.",
    related: ["investissement-locatif", "revenus-fonciers"],
  },

  /* ------------------------------- Location ----------------------------- */
  {
    id: "location-nue",
    term: "Location nue",
    category: "Location",
    simple: "Louer un logement vide, sans meubles.",
    pro:
      "Location d'un logement non meublé à usage de résidence principale, régie par la loi du 6 juillet 1989, avec une durée de bail et des règles de congé spécifiques, et une imposition en revenus fonciers.",
    related: ["location-meublee", "revenus-fonciers"],
    legalSensitive: true,
  },
  {
    id: "location-meublee",
    term: "Location meublée",
    category: "Location",
    simple: "Louer un logement équipé, où le locataire peut s'installer immédiatement.",
    pro:
      "Location d'un logement comportant les éléments mobiliers déterminés par décret permettant au locataire d'y dormir, manger et vivre convenablement, avec un régime de bail et une fiscalité BIC distincts de la location nue.",
    related: ["lmnp", "location-nue"],
    legalSensitive: true,
  },
  {
    id: "investissement-locatif",
    term: "Investissement locatif",
    category: "Location",
    simple: "Acheter un bien dans le but de le louer et d'en tirer un revenu.",
    pro:
      "Acquisition destinée à la location, dont l'analyse repose sur le prix d'acquisition, le loyer de marché, la vacance, les charges, la fiscalité de l'investisseur et la perspective de revalorisation.",
    related: ["rendement-locatif", "lmnp"],
  },

  /* ------------------------------- Urbanisme ---------------------------- */
  {
    id: "plu",
    term: "PLU (plan local d'urbanisme)",
    category: "Urbanisme",
    simple:
      "Le document de la commune qui dit ce que l'on peut construire, où, et à quelles conditions.",
    pro:
      "Document d'urbanisme communal ou intercommunal fixant les règles générales d'utilisation du sol : zonage, destinations autorisées, emprise, hauteur, implantation, aspect extérieur, stationnement, espaces verts, servitudes d'utilité publique.",
    watchOut:
      "Ne dites jamais « c'est constructible » sans vérification. Dirigez vers le service urbanisme de la commune et le certificat d'urbanisme.",
    related: ["zonage", "certificat-urbanisme", "permis-de-construire"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1965"), { label: "Géoportail de l'urbanisme", url: "https://www.geoportail-urbanisme.gouv.fr/" }],
  },
  {
    id: "zonage",
    term: "Zonage",
    category: "Urbanisme",
    simple: "Le découpage de la commune en zones : urbaine, à urbaniser, agricole, naturelle.",
    pro:
      "Division du territoire par le PLU en zones U (urbaines), AU (à urbaniser), A (agricoles) et N (naturelles), chacune assortie d'un règlement propre.",
    related: ["plu", "constructibilite"],
    legalSensitive: true,
  },
  {
    id: "constructibilite",
    term: "Constructibilité",
    category: "Urbanisme",
    simple: "La possibilité, ou non, de construire sur un terrain, et dans quelles limites.",
    pro:
      "Aptitude d'un terrain à recevoir une construction, résultant du zonage, du règlement applicable, des servitudes, des accès et réseaux, ainsi que des contraintes de risques.",
    watchOut:
      "Un terrain « viabilisé » n'est pas nécessairement constructible, et inversement. Certificat d'urbanisme obligatoire dans le raisonnement.",
    related: ["plu", "certificat-urbanisme", "zonage"],
    legalSensitive: true,
  },
  {
    id: "certificat-urbanisme",
    term: "Certificat d'urbanisme",
    category: "Urbanisme",
    simple:
      "Un document délivré par la mairie qui indique les règles applicables à un terrain, et parfois si un projet précis est réalisable.",
    pro:
      "Acte administratif d'information : le certificat d'information indique les dispositions d'urbanisme, les limitations administratives au droit de propriété et les taxes applicables ; le certificat opérationnel se prononce en outre sur la faisabilité d'une opération déterminée. Il cristallise les règles pour une durée déterminée.",
    related: ["plu", "permis-de-construire", "constructibilite"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1633")],
  },
  {
    id: "permis-de-construire",
    term: "Permis de construire",
    category: "Urbanisme",
    simple: "L'autorisation de la mairie nécessaire pour construire ou agrandir de façon importante.",
    pro:
      "Autorisation d'urbanisme exigée pour les constructions nouvelles et certains travaux sur constructions existantes au-delà de seuils de surface de plancher ou d'emprise au sol, ou en cas de modification des structures porteuses, de la façade ou du changement de destination dans certains cas.",
    watchOut:
      "Vérifiez l'existence des autorisations pour toute extension, véranda ou combles aménagés. Une construction non déclarée peut bloquer une vente.",
    related: ["declaration-prealable", "surface-plancher", "conformite"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F1986")],
  },
  {
    id: "declaration-prealable",
    term: "Déclaration préalable de travaux",
    category: "Urbanisme",
    simple: "Une autorisation plus légère que le permis, pour les petits travaux et les modifications d'aspect.",
    pro:
      "Autorisation d'urbanisme simplifiée exigée pour les travaux de faible importance : petites extensions, modification de l'aspect extérieur, clôtures dans certaines communes, changement de destination sans travaux sur les structures.",
    related: ["permis-de-construire", "surface-plancher"],
    legalSensitive: true,
    sources: [SP("particuliers/vosdroits/F17578")],
  },
  {
    id: "conformite",
    term: "Déclaration attestant l'achèvement et la conformité des travaux",
    aliases: ["DAACT", "conformité"],
    category: "Urbanisme",
    simple: "Le document déposé en mairie à la fin des travaux pour dire qu'ils sont terminés et conformes.",
    pro:
      "Déclaration adressée à la mairie à l'achèvement des travaux autorisés, ouvrant un délai de contestation à l'autorité compétente. Son absence, comme celle du permis, constitue un point de vigilance à la revente.",
    related: ["permis-de-construire", "declaration-prealable"],
    legalSensitive: true,
  },
  {
    id: "changement-destination",
    term: "Changement de destination",
    category: "Urbanisme",
    simple: "Transformer un local en autre chose : un garage en logement, un commerce en appartement…",
    pro:
      "Passage d'une destination ou sous-destination à une autre au sens du code de l'urbanisme, soumis à autorisation, et pouvant en outre nécessiter l'accord de la copropriété et le respect du règlement.",
    watchOut:
      "Un « studio aménagé dans le garage » sans autorisation ni assurance décennale n'est pas vendable comme surface habitable.",
    related: ["permis-de-construire", "reglement-copropriete"],
    legalSensitive: true,
  },
  {
    id: "cadastre",
    term: "Cadastre",
    category: "Urbanisme",
    simple: "Le plan officiel qui découpe le territoire en parcelles numérotées.",
    pro:
      "Document fiscal recensant les propriétés foncières, identifiant chaque parcelle par une section et un numéro et servant de base à l'assiette des impôts fonciers. Il n'a pas valeur de titre de propriété ni de bornage.",
    watchOut: "Le cadastre ne fixe pas les limites juridiques : seul le bornage réalisé par un géomètre le fait.",
    related: ["parcelle", "geometre"],
    sources: [{ label: "cadastre.gouv.fr", url: "https://www.cadastre.gouv.fr/" }],
  },
  {
    id: "parcelle",
    term: "Parcelle",
    category: "Urbanisme",
    simple: "Un morceau de terrain identifié par un numéro sur le plan cadastral.",
    pro:
      "Unité foncière élémentaire du plan cadastral, identifiée par une commune, une section et un numéro, dont la contenance est cadastrale et non juridique.",
    related: ["cadastre", "geometre", "bornage"],
  },
  {
    id: "bornage",
    term: "Bornage",
    category: "Urbanisme",
    simple: "L'opération qui fixe officiellement les limites entre deux terrains, réalisée par un géomètre.",
    pro:
      "Opération de délimitation contradictoire des propriétés contiguës, matérialisée par des bornes et constatée dans un procès-verbal, à l'amiable ou judiciairement.",
    related: ["geometre", "parcelle", "mitoyennete"],
  },
  {
    id: "geometre",
    term: "Géomètre-expert",
    category: "Urbanisme",
    simple: "Le professionnel qui mesure les terrains et fixe officiellement leurs limites.",
    pro:
      "Professionnel inscrit à l'Ordre des géomètres-experts, seul habilité à réaliser les études et travaux fixant les limites des biens fonciers, ainsi que les divisions parcellaires.",
    related: ["bornage", "cadastre", "division"],
  },
  {
    id: "division",
    term: "Division parcellaire",
    category: "Urbanisme",
    simple: "Couper un terrain en plusieurs morceaux pour en vendre une partie.",
    pro:
      "Opération consistant à détacher une ou plusieurs parcelles d'une unité foncière, susceptible de relever du régime du lotissement et de nécessiter une déclaration préalable ou un permis d'aménager selon les cas.",
    related: ["lotissement", "geometre", "plu"],
    legalSensitive: true,
  },
  {
    id: "lotissement",
    term: "Lotissement",
    category: "Urbanisme",
    simple: "Une opération qui divise un terrain en plusieurs lots destinés à être construits.",
    pro:
      "Division en propriété ou en jouissance d'une unité foncière en vue de l'implantation de bâtiments, soumise à déclaration préalable ou à permis d'aménager, avec, le cas échéant, un règlement de lotissement et un cahier des charges.",
    related: ["division", "plu"],
    legalSensitive: true,
  },

  /* ---------------------------- Marché & commercial --------------------- */
  {
    id: "comparables",
    term: "Comparables",
    category: "Marché & estimation",
    simple:
      "Des biens semblables, vendus récemment dans le même secteur, qui servent de référence pour estimer un prix.",
    pro:
      "Ensemble de références de transactions récentes portant sur des biens de typologie, surface, état, étage et localisation comparables, retraitées par ajustements successifs pour approcher la valeur du bien étudié.",
    watchOut:
      "Un prix affiché n'est pas un comparable : c'est une demande. Seule une vente signée est une donnée de marché.",
    related: ["dvf", "estimation", "prix-m2", "ponderation"],
    sources: [{ label: "DVF — data.gouv.fr", url: "https://app.dvf.etalab.gouv.fr/" }],
  },
  {
    id: "dvf",
    term: "DVF (demandes de valeurs foncières)",
    category: "Marché & estimation",
    simple: "Une base de données publique qui recense les ventes immobilières réelles.",
    pro:
      "Base de données issue des actes notariés et des fichiers fonciers, publiant les mutations à titre onéreux : date, prix, surface, type de bien et localisation. Elle ne comporte ni photographies, ni état intérieur, ni détail des annexes.",
    watchOut:
      "DVF donne le prix, pas la qualité du bien. Un T3 à 3 100 €/m² peut avoir été vendu en très mauvais état : croiser avec vos propres visites reste indispensable.",
    related: ["comparables", "estimation"],
    sources: [{ label: "Explorateur DVF", url: "https://app.dvf.etalab.gouv.fr/" }],
  },
  {
    id: "estimation",
    term: "Estimation (avis de valeur)",
    category: "Marché & estimation",
    simple:
      "L'analyse qui aboutit à une fourchette de prix réaliste pour un bien, justifiée par des ventes comparables.",
    pro:
      "Avis de valeur établi par le professionnel à partir d'une analyse du bien, de son environnement et de références de transactions, aboutissant à une fourchette argumentée. Il se distingue de l'expertise immobilière, réalisée par un expert selon une méthodologie normée et engageant sa responsabilité propre.",
    watchOut:
      "Un avis de valeur d'agence n'est pas une expertise judiciaire ni une évaluation fiscale. Employez le mot juste devant un client.",
    related: ["comparables", "expert-immobilier", "prix-m2"],
  },
  {
    id: "expert-immobilier",
    term: "Expert immobilier",
    category: "Marché & estimation",
    simple: "Un spécialiste dont le métier est d'évaluer la valeur d'un bien, souvent dans un cadre officiel.",
    pro:
      "Professionnel de l'évaluation immobilière intervenant notamment en matière successorale, fiscale, judiciaire ou de partage, appliquant une méthodologie reconnue et délivrant un rapport d'expertise engageant sa responsabilité.",
    related: ["estimation", "notaire"],
  },
  {
    id: "pige",
    term: "Pige immobilière",
    category: "Prospection & commercial",
    simple:
      "Le travail qui consiste à repérer les annonces de particuliers qui vendent seuls, pour leur proposer ses services.",
    pro:
      "Activité de veille des annonces de particuliers et de suivi de leur ancienneté, de leurs baisses de prix et de leur retrait, permettant d'identifier les vendeurs susceptibles de recourir à un professionnel.",
    watchOut:
      "La prospection téléphonique est encadrée : respectez la liste d'opposition au démarchage téléphonique et les règles applicables. Vérifiez selon la réglementation en vigueur.",
    related: ["prospection", "rgpd"],
    legalSensitive: true,
    sources: [{ label: "Bloctel", url: "https://www.bloctel.gouv.fr/" }],
  },
  {
    id: "prospection",
    term: "Prospection",
    category: "Prospection & commercial",
    simple: "Toutes les actions menées pour trouver de nouveaux clients : appels, terrain, réseau, contenu.",
    pro:
      "Ensemble des actions organisées visant à identifier et entrer en relation avec des propriétaires potentiellement vendeurs ou des acquéreurs, sur un secteur défini, selon un rythme mesurable.",
    related: ["pige", "secteur", "recommandation"],
  },
  {
    id: "secteur",
    term: "Secteur (zone de prospection)",
    category: "Prospection & commercial",
    simple: "Le périmètre géographique que vous décidez de connaître mieux que tout le monde.",
    pro:
      "Périmètre d'activité délimité et travaillé de façon régulière, permettant d'acquérir une connaissance fine des prix, des typologies, des copropriétés et des acteurs locaux.",
    watchOut:
      "Un secteur trop large empêche la maîtrise ; un secteur trop étroit limite le volume. Un ordre de grandeur courant : quelques centaines à quelques milliers de logements.",
    related: ["prospection", "marche-local"],
  },
  {
    id: "marche-local",
    term: "Marché local",
    category: "Marché & estimation",
    simple: "La réalité des prix et des délais de vente dans un quartier précis, qui peut différer de la moyenne nationale.",
    pro:
      "Ensemble constitué de l'offre disponible, de la demande solvable, des délais de commercialisation observés et des écarts entre prix affichés et prix actés sur un périmètre restreint.",
    related: ["tension-immobiliere", "comparables", "secteur"],
  },
  {
    id: "tension-immobiliere",
    term: "Tension immobilière",
    category: "Marché & estimation",
    simple:
      "Le rapport entre le nombre d'acheteurs et le nombre de biens disponibles. Beaucoup d'acheteurs et peu de biens : le marché est tendu.",
    pro:
      "Indicateur qualitatif du déséquilibre entre offre et demande sur un marché, observable par le délai de vente, le taux de négociation, le nombre de contacts par annonce et le stock disponible.",
    related: ["marche-local", "negociation"],
  },
  {
    id: "mandat-recherche",
    term: "Mandat de recherche",
    category: "Prospection & commercial",
    simple: "Un contrat par lequel un acquéreur vous charge de lui trouver un bien.",
    pro:
      "Mandat par lequel un candidat acquéreur confie au professionnel la mission de rechercher un bien correspondant à des critères définis, moyennant une rémunération due en cas de réalisation.",
    related: ["mandat", "acquereur"],
    legalSensitive: true,
  },
  {
    id: "recommandation",
    term: "Recommandation",
    category: "Prospection & commercial",
    simple: "Le fait qu'un ancien client parle de vous à quelqu'un d'autre.",
    pro:
      "Apport d'affaires spontané ou sollicité issu du réseau, dont le taux de transformation est structurellement supérieur à celui de la prospection froide.",
    watchOut:
      "La recommandation se demande explicitement, au bon moment : juste après une signature réussie, jamais pendant une phase tendue.",
    related: ["prospection", "excellence"],
  },
  {
    id: "objection",
    term: "Objection",
    category: "Prospection & commercial",
    simple:
      "Une résistance exprimée par le client : « c'est trop cher », « je veux vendre seul », « je vais réfléchir ».",
    pro:
      "Expression d'un frein réel ou d'un besoin d'information supplémentaire. Elle se traite par la compréhension du besoin sous-jacent avant tout argument, et non par une réponse préparée récitée.",
    watchOut:
      "Une objection tarifaire cache souvent une objection de valeur : le client n'a pas compris ce que vous faites concrètement.",
    related: ["negociation", "decouverte-client"],
  },
  {
    id: "decouverte-client",
    term: "Découverte client",
    category: "Prospection & commercial",
    simple:
      "La phase où l'on pose des questions pour comprendre le projet, la motivation et les contraintes du client.",
    pro:
      "Phase structurée du rendez-vous consistant à qualifier le projet : motivation, échéance, situation juridique, contraintes financières, historique de commercialisation et critères de décision.",
    watchOut:
      "Un rendez-vous où le conseiller parle plus que le client est un rendez-vous raté, quelle qu'en soit l'issue apparente.",
    related: ["objection", "mandat", "acquereur"],
  },
  {
    id: "acquereur",
    term: "Acquéreur qualifié",
    category: "Prospection & commercial",
    simple:
      "Un acheteur dont on a vérifié le budget, le financement, le secteur et le délai : il peut réellement acheter.",
    pro:
      "Candidat dont le projet a été vérifié sur les plans financier (apport, capacité, accord de principe), temporel (échéance, vente préalable à réaliser) et qualitatif (critères indispensables et secondaires).",
    watchOut:
      "Faire visiter sans qualifier fait perdre du temps au vendeur, à l'acquéreur et à vous. C'est la première cause d'épuisement des débutants.",
    related: ["visite", "financement", "decouverte-client"],
  },
  {
    id: "visite",
    term: "Visite",
    category: "Prospection & commercial",
    simple: "Le moment où un acquéreur découvre le bien, accompagné par le conseiller.",
    pro:
      "Rendez-vous de présentation du bien, préparé en amont, conduit selon un parcours réfléchi, suivi d'un compte rendu au vendeur et d'un retour argumenté à l'acquéreur. Il donne lieu à un bon de visite, dont la portée juridique est limitée mais la valeur probatoire réelle.",
    related: ["acquereur", "bon-visite"],
  },
  {
    id: "bon-visite",
    term: "Bon de visite",
    category: "Prospection & commercial",
    simple: "Un papier signé par l'acheteur attestant que c'est bien vous qui lui avez fait visiter le bien.",
    pro:
      "Document constatant qu'un candidat a visité un bien par l'entremise du professionnel, à valeur probatoire dans un litige sur l'origine de la présentation. Il ne crée pas à lui seul d'obligation de payer des honoraires.",
    watchOut:
      "Le bon de visite ne remplace pas le mandat. C'est une preuve, pas un contrat de rémunération.",
    related: ["visite", "mandat"],
    legalSensitive: true,
  },

  /* --------------------------- Technique du bâtiment -------------------- */
  {
    id: "fondations",
    term: "Fondations",
    category: "Technique du bâtiment",
    simple: "La base enterrée du bâtiment, qui transmet le poids de la construction au sol.",
    pro:
      "Ouvrages d'infrastructure assurant la transmission des charges au sol d'assise : fondations superficielles (semelles filantes, isolées, radier) ou profondes (pieux, micropieux) selon la portance et la nature des terrains.",
    watchOut:
      "Des fissures traversantes en escalier sur un mur porteur peuvent traduire un mouvement de fondation lié à la sécheresse (retrait-gonflement des argiles). Question à poser : « une déclaration de catastrophe naturelle a-t-elle été faite sur la commune ? »",
    related: ["fissures", "erp", "expert-batiment"],
  },
  {
    id: "fissures",
    term: "Fissures",
    category: "Technique du bâtiment",
    simple:
      "Des cassures dans les murs. Certaines sont sans gravité, d'autres révèlent un problème de structure.",
    pro:
      "Discontinuités du revêtement ou de la structure, classées usuellement en microfissures (< 0,2 mm), fissures (0,2 à 2 mm) et lézardes (> 2 mm). Les fissures traversantes, en escalier, évolutives ou situées aux angles d'ouverture nécessitent un avis technique.",
    watchOut:
      "Ne rassurez jamais un acquéreur sur une fissure. Votre phrase de référence : « je ne suis pas expert en structure, faisons intervenir un professionnel ».",
    related: ["fondations", "humidite", "expert-batiment"],
  },
  {
    id: "humidite",
    term: "Humidité",
    category: "Technique du bâtiment",
    simple: "La présence d'eau dans les murs ou l'air, qui provoque taches, moisissures et odeurs.",
    pro:
      "Désordre pouvant provenir de remontées capillaires, d'infiltrations, de condensation liée à un défaut de ventilation, ou d'un sinistre. Le traitement dépend de l'origine, dont l'identification suppose un diagnostic.",
    watchOut:
      "Une peinture fraîche en bas de mur en hiver mérite une question. Toujours poser la même : « Depuis quand, et qu'a-t-on fait ? »",
    related: ["vmc", "fissures", "isolation"],
  },
  {
    id: "vmc",
    term: "VMC (ventilation mécanique contrôlée)",
    category: "Technique du bâtiment",
    simple: "Un système qui renouvelle l'air du logement en permanence.",
    pro:
      "Dispositif d'extraction d'air vicié et d'admission d'air neuf, simple flux (autoréglable ou hygroréglable) ou double flux avec récupération de chaleur, déterminant pour la qualité de l'air et la maîtrise de la condensation.",
    related: ["humidite", "isolation", "dpe"],
  },
  {
    id: "isolation",
    term: "Isolation",
    category: "Technique du bâtiment",
    simple: "Ce qui empêche la chaleur de sortir en hiver et d'entrer en été.",
    pro:
      "Ensemble des dispositifs limitant les déperditions thermiques : isolation des combles, des murs par l'intérieur ou l'extérieur, des planchers bas, et performance des menuiseries. Elle conditionne fortement le classement DPE.",
    related: ["dpe", "menuiseries", "vmc"],
  },
  {
    id: "menuiseries",
    term: "Menuiseries",
    category: "Technique du bâtiment",
    simple: "Les fenêtres, portes-fenêtres et portes : leur matériau et leur vitrage.",
    pro:
      "Ouvrages de fermeture, caractérisés par leur matériau (bois, PVC, aluminium, mixte), leur type de vitrage (simple, double, triple), leur performance thermique et acoustique et leur état d'étanchéité.",
    watchOut:
      "Le simple vitrage est un signal fort pour l'acquéreur comme pour le DPE : notez-le systématiquement en visite d'estimation.",
    related: ["isolation", "dpe"],
  },
  {
    id: "charpente",
    term: "Charpente",
    category: "Technique du bâtiment",
    simple: "La structure en bois ou en métal qui soutient le toit.",
    pro:
      "Ossature supportant la couverture : charpente traditionnelle (fermes, pannes, chevrons), industrielle (fermettes) ou métallique. Les fermettes limitent fortement l'aménagement des combles sans étude de reprise.",
    watchOut:
      "« Combles aménageables » est une affirmation technique. Sans avis professionnel, dites « combles perdus, aménagement à étudier ».",
    related: ["toiture", "surface-plancher"],
  },
  {
    id: "toiture",
    term: "Toiture",
    category: "Technique du bâtiment",
    simple: "Le toit et tout ce qui protège la maison de la pluie.",
    pro:
      "Ensemble constitué de la couverture (tuiles, ardoises, zinc, bac acier), de l'écran sous-toiture éventuel, des rives, faîtages, solins et de la zinguerie assurant l'évacuation des eaux pluviales.",
    watchOut:
      "Questions clés en visite : année de réfection, présence d'un écran sous-toiture, état des gouttières, mousses.",
    related: ["charpente", "infiltrations"],
  },
  {
    id: "infiltrations",
    term: "Infiltrations",
    category: "Technique du bâtiment",
    simple: "De l'eau qui entre là où elle ne devrait pas : par le toit, une façade ou une terrasse.",
    pro:
      "Pénétration d'eau à travers l'enveloppe du bâtiment, dont l'origine peut être la couverture, une étanchéité de terrasse, un défaut de façade, une menuiserie ou un réseau. En copropriété, la responsabilité dépend de la localisation du désordre.",
    related: ["toiture", "humidite", "copropriete"],
  },
  {
    id: "expert-batiment",
    term: "Expert en bâtiment",
    category: "Technique du bâtiment",
    simple: "Un professionnel qui analyse les problèmes techniques d'une construction et en détermine la cause.",
    pro:
      "Professionnel indépendant réalisant des expertises sur les pathologies du bâtiment, la conformité des ouvrages et le chiffrage des désordres, distinct du diagnostiqueur immobilier.",
    watchOut:
      "Savoir dire « je ne sais pas, faisons venir un expert » est une compétence professionnelle, pas un aveu de faiblesse.",
    related: ["fissures", "humidite", "diagnostics"],
  },
  {
    id: "travaux",
    term: "Travaux",
    category: "Technique du bâtiment",
    simple: "Tout ce qu'il faut refaire ou améliorer dans le bien.",
    pro:
      "Interventions classées usuellement en rafraîchissement (peintures, sols), rénovation (cuisine, salle de bains, électricité, menuiseries) et restructuration (murs porteurs, planchers, extension), avec des ordres de grandeur au m² très variables selon les régions et les prestations.",
    watchOut:
      "Ne chiffrez jamais des travaux « au doigt mouillé » devant un client. Donnez une fourchette large, puis faites chiffrer par des entreprises.",
    related: ["estimation", "renovation-energetique"],
  },
  {
    id: "renovation-energetique",
    term: "Rénovation énergétique",
    category: "Technique du bâtiment",
    simple: "Les travaux qui font baisser la consommation d'énergie du logement.",
    pro:
      "Ensemble de travaux (isolation, menuiseries, ventilation, système de chauffage et d'eau chaude) visant l'amélioration de la performance énergétique, éligibles selon les cas à des dispositifs d'aide publics soumis à conditions.",
    watchOut:
      "Les dispositifs d'aide et leurs conditions évoluent fréquemment : renvoyez vers France Rénov' plutôt que de citer un montant.",
    related: ["dpe", "audit-energetique", "isolation"],
    legalSensitive: true,
    sources: [{ label: "France Rénov'", url: "https://france-renov.gouv.fr/" }],
  },
];

export const GLOSSARY_MAP: Record<string, GlossaryTerm> = Object.fromEntries(
  GLOSSARY.map((t) => [t.id, t]),
);

export const GLOSSARY_CATEGORIES = Array.from(new Set(GLOSSARY.map((t) => t.category))).sort();

/** Normalisation pour la recherche : minuscules, sans accent, sans ponctuation. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function searchGlossary(query: string, limit = 40): GlossaryTerm[] {
  const q = normalize(query);
  if (!q) return GLOSSARY.slice(0, limit);
  const tokens = q.split(" ");
  const scored = GLOSSARY.map((t) => {
    const haystack = normalize(
      [t.term, ...(t.aliases ?? []), t.category, t.simple, t.pro, t.example ?? ""].join(" "),
    );
    const title = normalize([t.term, ...(t.aliases ?? [])].join(" "));
    let score = 0;
    for (const tok of tokens) {
      if (title.startsWith(tok)) score += 12;
      else if (title.includes(tok)) score += 8;
      else if (haystack.includes(tok)) score += 2;
      else score -= 5;
    }
    return { t, score };
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.t.term.localeCompare(b.t.term, "fr"));
  return scored.slice(0, limit).map((s) => s.t);
}
