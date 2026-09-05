import type { CourseModule } from "@/lib/types";

export const moduleFiscalite: CourseModule = {
  id: "fiscalite",
  level: 19,
  title: "Fiscalité immobilière",
  subtitle: "Comprendre les grands principes, ne jamais conseiller à la place d'un expert",
  description:
    "La fiscalité est le domaine où un conseiller peut causer le plus de préjudice en donnant un avis. Ce module apprend les mécanismes généraux et, surtout, à identifier les situations qui appellent un notaire ou un expert-comptable.",
  icon: "🧾",
  skills: ["fiscalite"],
  requires: ["transaction"],
  outcomes: [
    "Expliquer le principe de la plus-value immobilière et ses exonérations",
    "Distinguer location nue et location meublée sur le plan fiscal",
    "Identifier les situations nécessitant un professionnel de la fiscalité",
    "Répondre à une question fiscale sans jamais donner de conseil personnalisé",
  ],
  lessons: [
    {
      id: "fs1",
      moduleId: "fiscalite",
      title: "Les grands principes et vos limites",
      summary:
        "Plus-value, revenus locatifs, taxes : comprendre les mécanismes pour bien orienter, sans jamais calculer à la place du notaire.",
      duration: 17,
      difficulty: "avance",
      skills: ["fiscalite", "juridique"],
      objectives: [
        "Expliquer le mécanisme de la plus-value et l'exonération de résidence principale",
        "Distinguer revenus fonciers et bénéfices industriels et commerciaux",
        "Repérer les situations à fort enjeu fiscal",
        "Formuler une réponse professionnelle sans conseil personnalisé",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Un conseiller immobilier n'est ni notaire, ni expert-comptable, ni conseiller en gestion de patrimoine. Il doit pourtant comprendre les grands mécanismes, parce qu'ils déterminent souvent la décision de vendre, le calendrier et parfois le prix acceptable.",
        },
        { type: "heading", text: "La plus-value immobilière" },
        {
          type: "definition",
          term: "Plus-value immobilière",
          simple: "Le gain réalisé entre le prix d'achat et le prix de vente, qui peut être imposé.",
          pro:
            "Différence entre le prix de cession et le prix d'acquisition majoré de frais et de certaines dépenses, soumise à l'impôt sur le revenu et aux prélèvements sociaux, avec des abattements pour durée de détention et de nombreux cas d'exonération.",
          why:
            "Elle explique pourquoi certains vendeurs attendent, pourquoi d'autres sont pressés, et pourquoi le calcul appartient exclusivement au notaire.",
        },
        {
          type: "list",
          title: "Ce que vous pouvez expliquer",
          items: [
            "Le principe : la plus-value est la différence entre prix de vente et prix d'acquisition, corrigée de certains éléments.",
            "L'existence d'une exonération pour la résidence principale, sous conditions d'occupation effective et habituelle.",
            "L'existence d'abattements croissant avec la durée de détention, aboutissant à une exonération totale après un certain nombre d'années — différent pour l'impôt sur le revenu et pour les prélèvements sociaux.",
            "L'existence d'autres cas d'exonération, notamment liés à la situation du vendeur ou à la nature de l'opération.",
            "Le fait que le calcul est effectué par le notaire, qui prélève et reverse.",
          ],
        },
        {
          type: "callout",
          variant: "legal",
          title: "Ce que vous ne calculez jamais",
          text:
            "Les taux, les durées d'abattement, les seuils de surtaxe et les conditions d'exonération relèvent de la loi fiscale et évoluent. Ne donnez jamais un montant, même approximatif : une erreur peut représenter des milliers d'euros et un préjudice direct. Orientez vers le notaire, systématiquement. À vérifier selon la réglementation en vigueur.",
        },
        {
          type: "dialogue",
          title: "La bonne réponse à « combien vais-je payer de plus-value ? »",
          lines: [
            {
              speaker: "Réponse risquée",
              text: "« Vous l'avez depuis 18 ans, donc avec les abattements vous devriez payer autour de 8 000 €. »",
              tone: "bad",
            },
            {
              speaker: "Réponse professionnelle",
              text:
                "« Le principe est le suivant : la plus-value est la différence entre votre prix de vente et votre prix d'achat, corrigée de certains frais et travaux, avec des abattements qui augmentent avec la durée de détention. Le calcul exact dépend de votre acte d'achat, des travaux justifiés et de votre situation. C'est le notaire qui le fait, et il peut vous donner une estimation dès maintenant : je peux organiser un appel cette semaine. »",
              tone: "good",
            },
          ],
        },
        { type: "heading", text: "Les revenus locatifs" },
        {
          type: "table",
          head: ["", "Location nue", "Location meublée"],
          rows: [
            ["Catégorie fiscale", "Revenus fonciers", "Bénéfices industriels et commerciaux"],
            ["Régime simplifié", "Micro-foncier, sous plafond de recettes, avec abattement forfaitaire", "Micro-BIC, avec abattement forfaitaire"],
            ["Régime réel", "Déduction des charges effectives, déficit imputable dans les limites légales", "Déduction des charges et amortissements"],
            ["Statut", "Bailleur", "Loueur en meublé, professionnel ou non selon les conditions"],
            ["Bail", "Régi par la loi du 6 juillet 1989, durée plus longue", "Durée et règles distinctes"],
          ],
          note:
            "Les plafonds, taux d'abattement et conditions ont fait l'objet de modifications législatives récentes, notamment pour les meublés de tourisme. À vérifier selon la réglementation en vigueur et auprès d'un expert-comptable.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Le sujet le plus mouvant",
          text:
            "La fiscalité de la location meublée, en particulier des meublés de tourisme, a évolué à plusieurs reprises ces dernières années. C'est précisément le sujet sur lequel un conseiller ne doit jamais s'avancer : les règles applicables au moment où vous lisez ceci peuvent différer de celles que vous avez apprises.",
        },
        { type: "heading", text: "Les situations à fort enjeu fiscal" },
        {
          type: "list",
          title: "À orienter systématiquement vers un professionnel",
          ordered: true,
          items: [
            "Vente d'un bien détenu par une SCI, ou cession de parts sociales.",
            "Vente d'un bien issu d'une succession ou d'une donation, notamment en cas de démembrement.",
            "Vente d'une résidence secondaire ou d'un bien locatif détenu depuis longtemps.",
            "Projet d'investissement locatif avec choix de régime fiscal.",
            "Vendeur non résident fiscal français.",
            "Bien ayant fait l'objet de travaux importants dont la justification peut réduire la plus-value.",
            "Vente d'un bien professionnel ou mixte.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Transformer une limite en service",
          text:
            "« Je ne vais pas vous répondre moi-même sur ce point, ce serait vous rendre un mauvais service. En revanche, je travaille avec un notaire et un expert-comptable habitués à ces questions : je peux organiser un rendez-vous cette semaine, souvent sans frais pour un premier échange. » Vous ne perdez rien à ne pas savoir. Vous gagnez à savoir vers qui orienter.",
        },
        { type: "heading", text: "La taxe foncière" },
        {
          type: "paragraph",
          text:
            "C'est la question fiscale que l'on vous posera le plus souvent, et la seule à laquelle vous pouvez répondre précisément — à condition d'avoir demandé le document. Demandez systématiquement le dernier avis de taxe foncière lors de l'estimation.",
        },
        {
          type: "callout",
          variant: "info",
          title: "La répartition en cas de vente",
          text:
            "La taxe foncière est due par le propriétaire au 1er janvier. Sa répartition au prorata entre vendeur et acquéreur relève d'un usage contractuel prévu dans l'acte, non d'une obligation légale. C'est le notaire qui organise cette répartition.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["plus-value", "residence-principale", "residence-secondaire", "revenus-fonciers", "lmnp", "location-nue", "location-meublee", "taxe-fonciere", "sci", "rendement-locatif"],
        },
      ],
      keyPoints: [
        "La plus-value se calcule par le notaire, jamais par le conseiller.",
        "La résidence principale bénéficie d'une exonération sous conditions d'occupation.",
        "Location nue et location meublée relèvent de catégories fiscales différentes.",
        "La fiscalité du meublé évolue fréquemment : ne jamais s'avancer.",
        "Sept situations imposent l'orientation vers un notaire ou un expert-comptable.",
        "La taxe foncière est la seule question fiscale à laquelle vous répondez, avec le document en main.",
      ],
      mistakes: [
        "Estimer un montant de plus-value pour rassurer un vendeur.",
        "Affirmer qu'un bien est exonéré sans connaître les conditions d'occupation.",
        "Citer un abattement ou un plafond de mémoire.",
        "Conseiller un régime fiscal à un investisseur.",
      ],
      quiz: [
        {
          id: "fs1q1",
          type: "qcm",
          question: "Un vendeur vous demande le montant de sa plus-value. Que faites-vous ?",
          options: [
            "Vous appliquez les abattements et donnez un chiffre",
            "Vous expliquez le mécanisme et organisez un échange avec le notaire",
            "Vous lui dites que la plus-value est toujours exonérée après 15 ans",
            "Vous refusez d'aborder le sujet",
          ],
          answer: 1,
          explanation:
            "Expliquer le mécanisme relève du devoir de conseil ; calculer relève du notaire, seul à disposer de l'acte d'acquisition, des justificatifs de travaux et de la situation complète du vendeur.",
          skill: "fiscalite",
          topic: "plus-value",
        },
        {
          id: "fs1q2",
          type: "qcm",
          question: "La location meublée relève fiscalement :",
          options: [
            "des revenus fonciers",
            "des bénéfices industriels et commerciaux",
            "des traitements et salaires",
            "des bénéfices non commerciaux",
          ],
          answer: 1,
          explanation:
            "La location meublée relève des bénéfices industriels et commerciaux, contrairement à la location nue qui relève des revenus fonciers. Les régimes et les possibilités de déduction diffèrent nettement.",
          skill: "fiscalite",
          topic: "location",
        },
        {
          id: "fs1q3",
          type: "vraifaux",
          question: "La répartition de la taxe foncière entre vendeur et acquéreur est une obligation légale.",
          answer: 1,
          explanation:
            "Faux. La taxe est due par le propriétaire au 1er janvier. Sa répartition au prorata est un usage contractuel organisé par l'acte, et non une obligation imposée par la loi.",
          skill: "fiscalite",
          topic: "taxes",
        },
        {
          id: "fs1q4",
          type: "qcm",
          question: "Quelle situation appelle impérativement un professionnel de la fiscalité ?",
          options: [
            "La vente d'une résidence principale occupée depuis vingt ans par un couple",
            "La cession de parts d'une SCI détenant plusieurs biens",
            "La vente d'un studio par un primo-vendeur qui y habite",
            "La vente d'un bien à un membre de sa famille au prix du marché",
          ],
          answer: 1,
          explanation:
            "Une cession de parts sociales n'est pas une transaction immobilière classique : ses conséquences fiscales et juridiques diffèrent fortement et relèvent du notaire et de l'expert-comptable.",
          skill: "fiscalite",
          topic: "orientation",
        },
      ],
      sources: [
        { label: "Service-Public.fr — Plus-value immobilière", url: "https://www.service-public.fr/particuliers/vosdroits/F10864" },
        { label: "impots.gouv.fr", url: "https://www.impots.gouv.fr/" },
        { label: "Service-Public.fr — Revenus fonciers", url: "https://www.service-public.fr/particuliers/vosdroits/F1993" },
        { label: "Service-Public.fr — Taxe foncière", url: "https://www.service-public.fr/particuliers/vosdroits/F59" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
