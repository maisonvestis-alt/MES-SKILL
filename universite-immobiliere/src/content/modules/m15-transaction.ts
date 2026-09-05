import type { CourseModule } from "@/lib/types";

export const moduleTransaction: CourseModule = {
  id: "transaction",
  level: 15,
  title: "Notaire et transaction",
  subtitle: "De l'offre acceptée à la remise des clés",
  description:
    "La période la plus longue et la plus silencieuse d'une vente, et celle où se joue la réputation d'un conseiller. Ce module donne la chronologie, les points de blocage et la méthode de suivi.",
  icon: "🖋️",
  skills: ["transaction", "juridique"],
  requires: ["financement"],
  outcomes: [
    "Suivre la chronologie complète de l'instruction",
    "Anticiper les cinq causes principales de retard",
    "Tenir un tableau de suivi par dossier",
    "Préparer la signature et l'après-vente",
  ],
  lessons: [
    {
      id: "tr1",
      moduleId: "transaction",
      title: "La chronologie de l'instruction",
      summary:
        "Ce qui se passe réellement entre le compromis et l'acte, semaine par semaine, et le rôle exact du conseiller pendant cette période.",
      duration: 17,
      difficulty: "intermediaire",
      skills: ["transaction"],
      objectives: [
        "Restituer la chronologie de l'instruction",
        "Identifier les cinq causes principales de retard",
        "Tenir un tableau de suivi à cinq dates",
        "Communiquer efficacement pendant la période sans nouvelles",
      ],
      blocks: [
        {
          type: "paragraph",
          text:
            "Entre la signature de l'avant-contrat et celle de l'acte, il s'écoule couramment deux mois et demi à quatre mois. Pour le vendeur, cette période est vide : rien ne se voit. Pour vous, elle est pleine : c'est là que les ventes se sécurisent ou se défont.",
        },
        {
          type: "steps",
          title: "Semaine par semaine",
          items: [
            {
              title: "Semaines 1 à 2 — Notification et rétractation",
              text: "Le rédacteur notifie l'avant-contrat à l'acquéreur avec ses annexes. Le délai légal de rétractation court. Vous ne faites rien pendant cette période, sinon rester disponible et ne pas relancer l'acquéreur, ce qui serait contre-productif.",
            },
            {
              title: "Semaines 2 à 4 — Dépôt du dossier bancaire",
              text: "L'acquéreur dépose sa demande de prêt. C'est votre premier point de contrôle : demandez la preuve du dépôt. Un acquéreur qui n'a pas déposé à trois semaines est un signal d'alerte majeur.",
            },
            {
              title: "Semaines 2 à 6 — Purge du droit de préemption",
              text: "Le notaire adresse la déclaration d'intention d'aliéner à la commune. Le délai de réponse est fixé par les textes et court à compter de la réception. C'est une cause fréquente de décalage de calendrier.",
            },
            {
              title: "Semaines 3 à 8 — Pièces et vérifications",
              text: "Note de renseignements d'urbanisme, état hypothécaire, état civil des parties, état daté et questionnaire du syndic en copropriété. C'est le notaire qui pilote, mais un conseiller qui relance poliment fait gagner des semaines.",
            },
            {
              title: "Semaines 6 à 10 — Offre de prêt et délai de réflexion",
              text: "L'acquéreur reçoit son offre de prêt. Un délai de réflexion légal s'écoule avant qu'il puisse l'accepter. L'acceptation est ensuite transmise au notaire.",
            },
            {
              title: "Semaines 10 à 14 — Préparation et signature",
              text: "Le notaire fixe la date, prépare le décompte, appelle les fonds. Vous organisez la visite de conformité avant signature, les relevés de compteurs et la remise des clés.",
            },
          ],
        },
        { type: "heading", text: "Les cinq causes principales de retard" },
        {
          type: "table",
          head: ["Cause", "Signal précoce", "Action préventive"],
          rows: [
            ["Dossier bancaire déposé tardivement", "Pas de preuve de dépôt à trois semaines", "Demander la copie du dépôt dès la signature du compromis"],
            ["Refus de prêt", "Réponse évasive de l'acquéreur, changement de discours", "Mise en relation avec un courtier dès l'offre acceptée"],
            ["Documents de copropriété tardifs", "Syndic injoignable", "Demander l'état daté et le questionnaire dès l'avant-contrat"],
            ["Préemption ou pièce d'urbanisme", "Retour tardif de la commune", "Annoncer le délai dès le départ au vendeur"],
            ["Succession ou situation juridique non régularisée", "Attestation immobilière non publiée", "Vérifier avant même la mise en vente"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Le tableau des cinq dates",
          text:
            "Pour chaque dossier en cours, suivez cinq dates : dépôt bancaire, échéance de la condition suspensive de prêt, retour de la déclaration d'intention d'aliéner, réception de l'offre de prêt, date d'acte prévue. Un dossier qui casse est presque toujours un dossier dont personne ne suivait ces cinq dates.",
        },
        { type: "heading", text: "Communiquer pendant la période silencieuse" },
        {
          type: "paragraph",
          text:
            "C'est le moment où beaucoup de conseillers disparaissent, considérant que leur travail est fait. C'est une erreur : le vendeur a mentalement déménagé, il s'inquiète, et l'absence de nouvelles est interprétée comme un problème.",
        },
        {
          type: "example",
          title: "Le message tous les quinze jours",
          text:
            "« Bonjour Madame Rousseau, point d'étape sur votre vente. Le dossier bancaire de M. et Mme Duval a été déposé le 14 ; leur banque annonce une réponse sous trois semaines. Le notaire a envoyé la déclaration à la mairie le 12, le délai de réponse court jusqu'au 12 juin. Rien d'anormal, tout suit son cours. Prochain point le 28. »",
        },
        {
          type: "callout",
          variant: "quote",
          title: "Pourquoi ce message vaut tous les arguments commerciaux",
          text:
            "Il ne contient aucune nouvelle. Et pourtant c'est probablement le message qui vous vaudra la recommandation de ce vendeur. « Rien d'anormal, tout suit son cours » est ce que le client veut entendre, et personne ne le lui dit.",
        },
        { type: "heading", text: "La signature et après" },
        {
          type: "list",
          ordered: true,
          items: [
            "Organiser une visite de conformité dans les jours précédant l'acte : le bien doit être conforme à ce qui a été vendu, libéré si prévu, sans dégradation.",
            "Relever les compteurs le jour de la signature, avec photos, et transmettre les relevés aux deux parties.",
            "Vérifier que le vendeur a résilié ses contrats et que l'acquéreur a souscrit son assurance : l'assurance de l'acquéreur doit prendre effet le jour de la signature.",
            "Remettre les clés, tous les jeux, les télécommandes, les badges, les notices d'équipements.",
            "Envoyer un message à chacun dans la semaine, puis un point à trois mois : c'est là que naissent les recommandations.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "La visite de conformité oubliée",
          text:
            "Un bien vendu meublé dont le mobilier a disparu, une cuisine démontée, des dégradations survenues pendant l'instruction : ces situations se règlent bien plus facilement la veille de la signature que le jour même chez le notaire, ou pire, après.",
        },
        {
          type: "terms",
          title: "Vocabulaire de la leçon",
          ids: ["compromis", "delai-retractation", "conditions-suspensives", "condition-prêt", "droit-preemption", "etat-date", "acte-authentique", "notaire", "sequestre"],
        },
      ],
      keyPoints: [
        "L'instruction dure couramment deux mois et demi à quatre mois.",
        "Le dépôt du dossier bancaire est le premier point de contrôle : exiger la preuve.",
        "Cinq causes de retard : dépôt tardif, refus de prêt, documents de copropriété, préemption, situation juridique.",
        "Suivre cinq dates par dossier suffit à éviter la plupart des ruptures.",
        "Un message tous les quinze jours, même sans nouvelle, sécurise la relation.",
        "La visite de conformité avant l'acte évite les litiges du jour de signature.",
      ],
      mistakes: [
        "Considérer le travail terminé à la signature du compromis.",
        "Ne pas demander la preuve du dépôt du dossier bancaire.",
        "Ne donner des nouvelles au vendeur que lorsqu'il appelle.",
        "Omettre la visite de conformité et les relevés de compteurs.",
      ],
      quiz: [
        {
          id: "tr1q1",
          type: "qcm",
          question: "Quel est le premier point de contrôle du conseiller après la signature du compromis ?",
          options: [
            "La date de l'acte authentique",
            "La preuve du dépôt du dossier bancaire par l'acquéreur",
            "Le paiement des honoraires",
            "La résiliation des contrats du vendeur",
          ],
          answer: 1,
          explanation:
            "Le retard ou l'absence de dépôt du dossier bancaire est la cause la plus fréquente d'échec de la condition suspensive. Le vérifier tôt permet de réagir.",
          skill: "transaction",
          topic: "instruction",
        },
        {
          id: "tr1q2",
          type: "vraifaux",
          question: "Pendant la période d'instruction, il est inutile de contacter le vendeur s'il n'y a rien de nouveau.",
          answer: 1,
          explanation:
            "Faux. L'absence de nouvelles est interprétée comme un problème. Un point régulier confirmant que tout suit son cours est précisément ce qui rassure et fonde la recommandation ultérieure.",
          skill: "excellence",
          topic: "instruction",
        },
        {
          id: "tr1q3",
          type: "qcm",
          question: "Pourquoi organiser une visite de conformité avant la signature de l'acte ?",
          options: [
            "Pour permettre à l'acquéreur de renégocier",
            "Pour vérifier que le bien est conforme à ce qui a été vendu et libéré si prévu",
            "Parce que la loi l'impose",
            "Pour prendre de nouvelles photos",
          ],
          answer: 1,
          explanation:
            "Mobilier disparu, dégradations, bien non libéré : ces situations se règlent bien plus facilement la veille que le jour de la signature ou après.",
          skill: "transaction",
          topic: "instruction",
        },
        {
          id: "tr1q4",
          type: "qcm",
          question: "Quelles cinq dates suivre par dossier en cours ?",
          options: [
            "Les cinq dates de visite du bien",
            "Dépôt bancaire, échéance de la condition de prêt, retour de préemption, réception de l'offre de prêt, date d'acte",
            "Les dates de relance du vendeur",
            "Les dates de diffusion de l'annonce",
          ],
          answer: 1,
          explanation:
            "Ces cinq jalons couvrent l'ensemble des points de rupture possibles de l'instruction. Les suivre transforme un dossier subi en dossier piloté.",
          skill: "organisation",
          topic: "instruction",
        },
      ],
      sources: [
        { label: "Notaires de France", url: "https://www.notaires.fr/" },
        { label: "Service-Public.fr — Promesse et compromis", url: "https://www.service-public.fr/particuliers/vosdroits/F2957" },
        { label: "Service-Public.fr — Droit de préemption urbain", url: "https://www.service-public.fr/particuliers/vosdroits/F1077" },
      ],
      legalSensitive: true,
      lastVerified: "2026-09",
    },
  ],
};
