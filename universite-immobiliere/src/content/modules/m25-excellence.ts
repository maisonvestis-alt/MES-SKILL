import type { CourseModule } from "@/lib/types";

export const moduleExcellence: CourseModule = {
  id: "excellence",
  level: 25,
  title: "Devenir un conseiller excellent",
  subtitle: "Ce qui sépare un vendeur moyen d'un professionnel remarquable",
  description:
    "Le dernier module du parcours. Il ne s'agit plus d'apprendre une technique, mais d'adopter les vingt comportements qui, cumulés, créent une réputation locale et une activité durable.",
  icon: "🏅",
  skills: ["excellence", "psychologie", "organisation"],
  requires: ["crm"],
  outcomes: [
    "Identifier les vingt comportements qui créent l'excellence",
    "Comprendre pourquoi la qualité du suivi surpasse le talent commercial",
    "Mettre en place une routine d'après-vente",
    "Construire une réputation locale sur trois ans",
  ],
  lessons: [
    {
      id: "ex1",
      moduleId: "excellence",
      title: "Les vingt comportements qui font la différence",
      summary:
        "L'écart entre un conseiller moyen et un conseiller remarquable ne tient presque jamais au talent : il tient à des comportements identifiables et reproductibles.",
      duration: 18,
      difficulty: "avance",
      skills: ["excellence"],
      objectives: [
        "Lister les comportements qui produisent l'excellence",
        "Comprendre le rôle décisif du suivi et de l'après-vente",
        "Mettre en place une routine d'après-vente",
        "Se projeter sur trois ans d'activité",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Observez deux conseillers sur un même secteur, avec la même formation et le même réseau. L'un signe quatre mandats par an, l'autre vingt. La différence tient rarement à un don commercial. Elle tient à une vingtaine de comportements, tous accessibles, dont aucun n'est spectaculaire.",
        },
        { type: "heading", text: "Avant le client" },
        {
          type: "list",
          ordered: true,
          items: [
            "Se préparer avant chaque rendez-vous : ventes du secteur, cadastre, urbanisme, historique. Trente minutes.",
            "Connaître son secteur mieux que quiconque : les prix, les copropriétés, les travaux votés, les commerces.",
            "Prospecter tous les jours, même quand le portefeuille est plein.",
            "Se former en continu : un rapport de diagnostic expliqué par un diagnostiqueur vaut une journée de formation.",
            "Entretenir un réseau de partenaires : notaire, courtier, diagnostiqueur, artisans, géomètre.",
          ],
        },
        { type: "heading", text: "Avec le client" },
        {
          type: "list",
          ordered: true,
          items: [
            "Arriver à l'heure, toujours. Cinq minutes en avance, jamais en retard.",
            "Écouter davantage que parler : viser 70 % de temps de parole côté client.",
            "Dire la vérité sur le prix, même quand elle fait perdre le mandat.",
            "Reconnaître ce que l'on ne sait pas, et revenir avec la réponse au jour dit.",
            "Écrire après chaque rendez-vous important : ce qui a été dit, décidé, la prochaine étape datée.",
            "Ne jamais promettre un délai ou un prix de vente.",
            "Transmettre les mauvaises nouvelles aussi vite que les bonnes.",
            "Ne jamais dénigrer un confrère.",
          ],
        },
        { type: "heading", text: "Sur le dossier" },
        {
          type: "list",
          ordered: true,
          items: [
            "Commander les diagnostics et demander les documents de copropriété le jour du mandat.",
            "Lire les procès-verbaux d'assemblée générale avant de fixer un prix.",
            "Qualifier chaque acquéreur avant toute visite.",
            "Rendre compte au vendeur chaque semaine, avec des chiffres, jour fixe.",
            "Suivre cinq dates par dossier en instruction.",
            "Organiser une visite de conformité avant l'acte.",
          ],
        },
        { type: "heading", text: "Après la vente" },
        {
          type: "paragraph",
          text:
            "C'est ici que se situe l'écart le plus important, et le plus facile à combler. La quasi-totalité des conseillers disparaissent après la remise des clés. Ceux qui restent construisent une activité qui, au bout de trois ans, ne dépend plus de la prospection froide.",
        },
        {
          type: "table",
          title: "La routine d'après-vente",
          head: ["Échéance", "Action", "Effet"],
          rows: [
            ["J+7", "Message : « tout se passe bien dans le logement ? »", "Signale que la relation ne s'arrêtait pas à la commission"],
            ["J+30", "Appel court : installation, éventuels problèmes, artisans utiles", "Rend un service concret au moment où il est utile"],
            ["J+90", "Message, et demande explicite de recommandation", "Le moment optimal : satisfaction confirmée, souvenir intact"],
            ["1 an", "Message d'anniversaire d'emménagement, point de marché du quartier", "Maintient la présence sans rien demander"],
            ["Chaque année", "Point de marché personnalisé sur leur bien", "Vous serez le premier appelé le jour où ils revendront"],
          ],
        },
        {
          type: "callout",
          variant: "quote",
          title: "La phrase à retenir de tout le parcours",
          text:
            "La différence entre un vendeur immobilier moyen et un excellent conseiller tient rarement au talent commercial. Elle tient à la qualité du suivi et de l'accompagnement — c'est-à-dire à des comportements que n'importe qui peut adopter dès demain matin.",
        },
        { type: "heading", text: "Se projeter sur trois ans" },
        {
          type: "steps",
          items: [
            {
              title: "Année 1 — Construire",
              text: "Prospection quotidienne, apprentissage intensif, premiers mandats, constitution du réseau de partenaires et du fichier acquéreurs. Les revenus sont irréguliers et souvent inférieurs aux espérances. C'est normal, et c'est la phase où la majorité abandonne.",
            },
            {
              title: "Année 2 — Consolider",
              text: "Le secteur est connu, les premières recommandations arrivent, les partenaires orientent. La prospection reste quotidienne mais devient plus efficace. Les revenus se stabilisent.",
            },
            {
              title: "Année 3 — Récolter",
              text: "Une part significative de l'activité provient des recommandations et du portefeuille. La notoriété locale fonctionne. La prospection continue — c'est ce qui distingue ceux qui durent — mais elle n'est plus la seule source.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le seul conseil qui compte pour la première année",
          text:
            "Tenez six mois avec une discipline de prospection quotidienne et une réserve financière suffisante. La grande majorité de ceux qui échouent dans ce métier ne manquent ni de talent ni de qualités humaines : ils s'arrêtent avant que leur travail ne produise ses effets.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["excellence", "recommandation", "prospection", "crm", "devoir-conseil", "organisation"],
        },
      ],
      keyPoints: [
        "L'excellence repose sur une vingtaine de comportements accessibles, non sur un talent.",
        "Préparation, ponctualité, écoute, vérité sur le prix, écrits systématiques.",
        "Rendre compte chaque semaine, avec des chiffres, un jour fixe.",
        "L'après-vente est l'écart le plus important et le plus facile à combler.",
        "Cinq points de contact après la vente construisent une activité de recommandation.",
        "La majorité de ceux qui échouent s'arrêtent avant que leur travail ne produise.",
      ],
      mistakes: [
        "Disparaître après la remise des clés.",
        "Réduire la prospection dès que l'activité fonctionne.",
        "Attendre d'être sollicité pour donner des nouvelles.",
        "Juger sa première année sur ses revenus plutôt que sur ses indicateurs d'activité.",
      ],
      caseStudy: {
        title: "Votre plan des 12 prochains mois",
        context:
          "Vous démarrez, ou vous reprenez votre activité sur des bases plus solides. Vous disposez de douze mois pour installer les comportements de ce module.",
        tasks: [
          "Choisissez cinq comportements de la liste que vous adopterez dès cette semaine.",
          "Définissez comment vous vérifierez chaque mois que vous les tenez.",
          "Écrivez votre routine d'après-vente et programmez-la.",
          "Fixez trois indicateurs d'activité — et non de résultat — que vous suivrez chaque semaine.",
        ],
        correction: [
          "Cinq comportements à fort effet immédiat : préparer trente minutes avant chaque rendez-vous ; envoyer un écrit récapitulatif après chaque rendez-vous important ; rendre compte au vendeur chaque vendredi avec des chiffres ; qualifier systématiquement avant toute visite ; noter une prochaine action datée sur chaque contact.",
          "Vérification mensuelle : reprendre les cinq comportements et cocher honnêtement ceux tenus. Un comportement tenu moins de 80 % du temps n'est pas installé : il faut en réduire le nombre plutôt que se mentir.",
          "Routine d'après-vente : programmer immédiatement, dans l'agenda, les rappels à J+7, J+30, J+90 et à un an pour chaque vente signée. Programmés dès la signature, ils ont lieu ; laissés à la mémoire, jamais.",
          "Trois indicateurs d'activité : nombre de contacts de prospection, nombre de rendez-vous d'estimation obtenus, nombre de comptes rendus hebdomadaires envoyés. Ce sont des indicateurs que vous contrôlez entièrement, contrairement au nombre de ventes.",
          "Le point décisif : mesurer l'activité, pas seulement le résultat. La première année, le résultat est en retard sur l'activité. Juger son travail sur le résultat conduit à abandonner exactement au moment où il commence à produire.",
        ],
      },
      quiz: [
        {
          id: "ex1q1",
          type: "qcm",
          question: "Selon ce module, qu'est-ce qui distingue le plus un conseiller excellent d'un conseiller moyen ?",
          options: [
            "Un talent commercial naturel",
            "La qualité du suivi et de l'accompagnement",
            "Le montant du budget publicitaire",
            "L'ancienneté dans le métier",
          ],
          answer: 1,
          explanation:
            "Les comportements de suivi — écrits, comptes rendus réguliers, après-vente — sont accessibles à tous et créent l'essentiel de l'écart observé.",
          skill: "excellence",
          topic: "excellence",
        },
        {
          id: "ex1q2",
          type: "qcm",
          question: "Quand demander une recommandation à un client dont la vente est signée ?",
          options: [
            "Le jour de la signature uniquement",
            "Vers trois mois après, quand la satisfaction est confirmée et le souvenir intact",
            "Deux ans après",
            "Jamais, cela met mal à l'aise",
          ],
          answer: 1,
          explanation:
            "À trois mois, le client est installé, la satisfaction est confirmée par l'usage, et le souvenir de votre accompagnement reste vif. C'est le moment optimal.",
          skill: "excellence",
          topic: "apres-vente",
        },
        {
          id: "ex1q3",
          type: "vraifaux",
          question: "Il faut juger sa première année d'activité sur le nombre de ventes réalisées.",
          answer: 1,
          explanation:
            "Faux. Le résultat est en retard de plusieurs mois sur l'activité. Juger la première année sur les ventes conduit à abandonner précisément au moment où le travail commence à produire. Il faut suivre les indicateurs d'activité.",
          skill: "organisation",
          topic: "excellence",
        },
        {
          id: "ex1q4",
          type: "qcm",
          question: "Quelle action après-vente est la plus négligée par les conseillers ?",
          options: [
            "La remise des clés",
            "Les points de contact à J+7, J+30, J+90 et à un an",
            "La signature chez le notaire",
            "L'envoi de la facture d'honoraires",
          ],
          answer: 1,
          explanation:
            "La quasi-totalité des conseillers disparaissent après la remise des clés. Ces quatre points de contact, programmés dès la signature, construisent l'activité de recommandation des années suivantes.",
          skill: "excellence",
          topic: "apres-vente",
        },
      ],
      sources: [
        { label: "ANIL", url: "https://www.anil.org/" },
        { label: "Service-Public.fr — Profession immobilière", url: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F31649" },
      ],
      lastVerified: "2026-09",
    },
  ],
};
