import type { Checklist } from "@/lib/types";

export const CHECKLISTS: Checklist[] = [
  {
    id: "cl-estimation",
    title: "Checklist estimation",
    purpose: "Ne rien oublier pendant la visite d'estimation. À dérouler dans l'ordre, sur place.",
    category: "estimation",
    sections: [
      {
        title: "Avant d'entrer",
        items: [
          { id: "e1", label: "Ventes comparables du secteur consultées", hint: "Base DVF, votre fichier, vos propres ventes" },
          { id: "e2", label: "Annonces concurrentes en cours repérées" },
          { id: "e3", label: "Cadastre et vue aérienne regardés" },
          { id: "e4", label: "Règles d'urbanisme vérifiées (si maison)" },
          { id: "e5", label: "Risques consultés sur Géorisques" },
        ],
      },
      {
        title: "Identité du bien",
        items: [
          { id: "i1", label: "Adresse exacte et étage" },
          { id: "i2", label: "Type de bien et nombre de pièces" },
          { id: "i3", label: "Année de construction" },
          { id: "i4", label: "Surface annoncée par le vendeur" },
          { id: "i5", label: "Nombre et nature des lots (si copropriété)" },
          { id: "i6", label: "Surface du terrain (si maison)" },
        ],
      },
      {
        title: "Le logement",
        items: [
          { id: "l1", label: "Surface relevée pièce par pièce" },
          { id: "l2", label: "Exposition et luminosité réelle" },
          { id: "l3", label: "Distribution : pièces traversantes, borgnes, en enfilade" },
          { id: "l4", label: "Hauteur sous plafond" },
          { id: "l5", label: "État des sols, murs, plafonds pièce par pièce" },
          { id: "l6", label: "Cuisine : équipée ou non, année, état" },
          { id: "l7", label: "Salle(s) de bains et WC : nombre, état, ventilation" },
          { id: "l8", label: "Menuiseries : matériau, vitrage, état" },
          { id: "l9", label: "Chauffage : type, énergie, âge de l'équipement" },
          { id: "l10", label: "Électricité : tableau, différentiel, prises de terre" },
          { id: "l11", label: "Plomberie et chauffe-eau : matériau, âge" },
          { id: "l12", label: "Traces d'humidité, moisissures, salpêtre" },
          { id: "l13", label: "Fissures : localisation, largeur, orientation" },
          { id: "l14", label: "Ventilation : VMC, grilles" },
          { id: "l15", label: "Rangements et placards" },
        ],
      },
      {
        title: "Annexes et extérieur",
        items: [
          { id: "a1", label: "Balcon, terrasse, jardin : surface, exposition, intimité" },
          { id: "a2", label: "Cave, grenier, buanderie" },
          { id: "a3", label: "Stationnement : box, place, extérieur" },
          { id: "a4", label: "Vue et distance au vis-à-vis" },
        ],
      },
      {
        title: "Environnement et immeuble",
        items: [
          { id: "v1", label: "Rue : passage, bruit, stationnement, propreté" },
          { id: "v2", label: "Distance aux transports, commerces, écoles" },
          { id: "v3", label: "Nuisances identifiées" },
          { id: "v4", label: "État de la façade et des parties communes" },
          { id: "v5", label: "Ascenseur : présence, état, année" },
        ],
      },
      {
        title: "Copropriété et documents",
        items: [
          { id: "c1", label: "Montant et décomposition des charges annuelles" },
          { id: "c2", label: "Travaux votés ou prévus, et quote-part du lot" },
          { id: "c3", label: "Trois derniers PV d'assemblée générale demandés" },
          { id: "c4", label: "Fiche synthétique de copropriété demandée" },
          { id: "c5", label: "DPE existant, classe énergie et climat" },
          { id: "c6", label: "Dernier avis de taxe foncière demandé" },
          { id: "c7", label: "Titre de propriété demandé" },
          { id: "c8", label: "Autorisations d'urbanisme demandées (si extension)" },
        ],
      },
      {
        title: "Projet du vendeur",
        items: [
          { id: "p1", label: "Motivation réelle identifiée" },
          { id: "p2", label: "Échéance et contrainte de calendrier" },
          { id: "p3", label: "Tous les propriétaires identifiés et présents" },
          { id: "p4", label: "Historique de commercialisation antérieur" },
          { id: "p5", label: "Ancrage de prix du vendeur et sa source" },
          { id: "p6", label: "Priorité : prix, délai ou tranquillité" },
        ],
      },
      {
        title: "Conclusion",
        items: [
          { id: "f1", label: "Photos techniques prises (tableau, chaudière, fenêtres, désordres)" },
          { id: "f2", label: "Aucun prix annoncé pendant la visite" },
          { id: "f3", label: "Date de retour écrit annoncée" },
          { id: "f4", label: "Courriel récapitulatif envoyé dans l'heure" },
        ],
      },
    ],
  },
  {
    id: "cl-vendeur",
    title: "Checklist premier rendez-vous vendeur",
    purpose: "Les questions à poser pour comprendre le projet avant de parler du bien.",
    category: "vendeur",
    sections: [
      {
        title: "Le projet",
        items: [
          { id: "q1", label: "« Racontez-moi votre projet »", hint: "Question ouverte, puis silence" },
          { id: "q2", label: "« Qu'est-ce qui fait que c'est maintenant ? »" },
          { id: "q3", label: "« Avez-vous une échéance ? Un projet derrière ? »" },
          { id: "q4", label: "« Qu'est-ce qui compte le plus : prix, délai ou tranquillité ? »" },
        ],
      },
      {
        title: "La situation juridique",
        items: [
          { id: "j1", label: "« Qui figure sur le titre de propriété ? »" },
          { id: "j2", label: "« Achat, succession ou donation ? »" },
          { id: "j3", label: "« Usufruit, indivision, SCI ? »" },
          { id: "j4", label: "« Toutes les personnes concernées sont-elles d'accord ? »" },
          { id: "j5", label: "« Le bien est-il loué ? Sous quel type de bail ? »" },
          { id: "j6", label: "« Y a-t-il un crédit en cours sur le bien ? »" },
        ],
      },
      {
        title: "L'historique",
        items: [
          { id: "h1", label: "« Le bien a-t-il déjà été mis en vente ? »" },
          { id: "h2", label: "« Avec qui, à quel prix, pendant combien de temps ? »" },
          { id: "h3", label: "« Combien de visites, combien d'offres ? »" },
          { id: "h4", label: "« Aviez-vous un prix en tête ? Sur quoi vous appuyez-vous ? »" },
        ],
      },
      {
        title: "Avant de partir",
        items: [
          { id: "d1", label: "Documents demandés nommément" },
          { id: "d2", label: "Date de retour annoncée" },
          { id: "d3", label: "Aucun prix annoncé" },
          { id: "d4", label: "Mandat resté dans la sacoche" },
        ],
      },
    ],
  },
  {
    id: "cl-acquereur",
    title: "Checklist qualification acquéreur",
    purpose: "À dérouler au téléphone, avant d'organiser toute visite.",
    category: "acquereur",
    sections: [
      {
        title: "Le projet",
        items: [
          { id: "a1", label: "« Qu'est-ce qui vous a intéressé dans cette annonce ? »" },
          { id: "a2", label: "« Locataire ou propriétaire actuellement ? »" },
          { id: "a3", label: "« Y a-t-il un bien à vendre avant ? Est-il déjà en vente ? »" },
          { id: "a4", label: "« Pour quand souhaitez-vous être installé ? »" },
          { id: "a5", label: "« Qui vivra dans le logement ? »" },
        ],
      },
      {
        title: "Le financement",
        items: [
          { id: "f1", label: "« Avez-vous rencontré une banque ou un courtier ? »" },
          { id: "f2", label: "« Quel est votre budget maximum, frais compris ? »" },
          { id: "f3", label: "« Quel apport, et est-il disponible aujourd'hui ? »" },
          { id: "f4", label: "« Avez-vous des crédits en cours ? »" },
          { id: "f5", label: "Frais d'acquisition expliqués et intégrés au budget" },
        ],
      },
      {
        title: "Les critères",
        items: [
          { id: "c1", label: "Secteurs acceptés et secteurs exclus, précisément" },
          { id: "c2", label: "Surface minimale et nombre de chambres indispensable" },
          { id: "c3", label: "Trois critères indispensables identifiés" },
          { id: "c4", label: "Critères secondaires identifiés" },
          { id: "c5", label: "Travaux acceptés, et jusqu'à quel montant" },
          { id: "c6", label: "« Combien de biens visités, et qu'est-ce qui n'allait pas ? »" },
        ],
      },
      {
        title: "Décision",
        items: [
          { id: "d1", label: "Solidité du dossier évaluée" },
          { id: "d2", label: "Visite organisée ou autres biens proposés" },
          { id: "d3", label: "Fiche acquéreur créée avec prochaine action datée" },
        ],
      },
    ],
  },
  {
    id: "cl-visite",
    title: "Checklist visite",
    purpose: "Préparation, sécurité, conduite et suivi d'une visite.",
    category: "visite",
    sections: [
      {
        title: "Avant",
        items: [
          { id: "b1", label: "Candidat qualifié : budget et financement vérifiés" },
          { id: "b2", label: "Vendeur prévenu 24 h à l'avance, heure et nombre de visiteurs" },
          { id: "b3", label: "Consignes rappelées : lumières, rideaux, rangement, animaux" },
          { id: "b4", label: "Absence du vendeur demandée" },
          { id: "b5", label: "Un proche ou un collègue informé du lieu et de l'heure" },
          { id: "b6", label: "Dossier complet emporté : diagnostics, charges, PV d'AG, taxe foncière" },
          { id: "b7", label: "Arrivée 10 minutes avant : ouvrir, aérer, allumer" },
        ],
      },
      {
        title: "Pendant",
        items: [
          { id: "p1", label: "Contexte donné dehors : quartier, immeuble, orientation" },
          { id: "p2", label: "Silence à l'entrée : laisser regarder" },
          { id: "p3", label: "Pièce forte en premier" },
          { id: "p4", label: "Parcours logique : vie, nuit, annexes, retour pièce forte" },
          { id: "p5", label: "Points faibles montrés et contextualisés" },
          { id: "p6", label: "Temps libre laissé en fin de visite" },
          { id: "p7", label: "Réactions et objections notées" },
          { id: "p8", label: "Sécurité : visiteur devant, proximité des sorties, téléphone sur soi" },
          { id: "p9", label: "Bon de visite signé" },
        ],
      },
      {
        title: "Après",
        items: [
          { id: "s1", label: "Débriefing sur place : ce qui a plu, ce qui freine, classement du bien" },
          { id: "s2", label: "Rappel de l'acquéreur sous 24 h" },
          { id: "s3", label: "Compte rendu au vendeur le jour même, objections citées" },
          { id: "s4", label: "Fiche acquéreur mise à jour avec prochaine action datée" },
        ],
      },
    ],
  },
  {
    id: "cl-mandat",
    title: "Checklist vérification du mandat",
    purpose: "À contrôler point par point avant toute signature.",
    category: "mandat",
    sections: [
      {
        title: "Les parties",
        items: [
          { id: "m1", label: "Identité complète de tous les mandants, conforme au titre de propriété" },
          { id: "m2", label: "Tous les titulaires de droits présents et signataires" },
          { id: "m3", label: "Pouvoirs vérifiés si SCI ou représentation" },
        ],
      },
      {
        title: "Le bien",
        items: [
          { id: "b1", label: "Adresse et désignation précises" },
          { id: "b2", label: "Numéros de lots et références cadastrales" },
          { id: "b3", label: "Surface mentionnée et sa nature" },
        ],
      },
      {
        title: "La mission",
        items: [
          { id: "c1", label: "Type de mandat clairement identifié" },
          { id: "c2", label: "Durée et date de départ" },
          { id: "c3", label: "Prix de présentation et sa décomposition" },
          { id: "c4", label: "Montant ou taux des honoraires et partie qui en a la charge" },
          { id: "c5", label: "Modalités de dénonciation expliquées au client" },
          { id: "c6", label: "Clause pénale expliquée, le cas échéant" },
        ],
      },
      {
        title: "Formalisme",
        items: [
          { id: "f1", label: "Numéro d'inscription au registre des mandats reporté" },
          { id: "f2", label: "Date apposée" },
          { id: "f3", label: "Toutes les signatures recueillies" },
          { id: "f4", label: "Exemplaire remis au mandant" },
          { id: "f5", label: "Plan d'action écrit remis" },
          { id: "f6", label: "Date du point d'étape à 30 jours fixée" },
        ],
      },
    ],
  },
  {
    id: "cl-transaction",
    title: "Checklist suivi de transaction",
    purpose: "Les points de contrôle entre le compromis et la remise des clés.",
    category: "transaction",
    sections: [
      {
        title: "Après l'avant-contrat",
        items: [
          { id: "t1", label: "Date de notification et de fin du délai de rétractation notée" },
          { id: "t2", label: "Échéance de la condition suspensive de prêt notée" },
          { id: "t3", label: "Preuve du dépôt du dossier bancaire obtenue" },
          { id: "t4", label: "Déclaration d'intention d'aliéner envoyée par le notaire" },
          { id: "t5", label: "État daté et questionnaire du syndic demandés" },
          { id: "t6", label: "Coordonnées de tous les intervenants centralisées" },
        ],
      },
      {
        title: "Pendant l'instruction",
        items: [
          { id: "i1", label: "Point avec le vendeur tous les 15 jours" },
          { id: "i2", label: "Point avec l'acquéreur tous les 15 jours" },
          { id: "i3", label: "Retour de préemption reçu" },
          { id: "i4", label: "Offre de prêt reçue et acceptée" },
          { id: "i5", label: "Date d'acte confirmée par le notaire" },
        ],
      },
      {
        title: "Avant la signature",
        items: [
          { id: "s1", label: "Visite de conformité réalisée" },
          { id: "s2", label: "Bien libéré si prévu, mobilier conforme à l'accord" },
          { id: "s3", label: "Relevés de compteurs préparés" },
          { id: "s4", label: "Assurance de l'acquéreur souscrite pour le jour de l'acte" },
          { id: "s5", label: "Jeux de clés, télécommandes, badges, notices réunis" },
        ],
      },
      {
        title: "Après la signature",
        items: [
          { id: "a1", label: "Relevés de compteurs transmis aux deux parties" },
          { id: "a2", label: "Message à J+7" },
          { id: "a3", label: "Appel à J+30" },
          { id: "a4", label: "Demande de recommandation à J+90" },
        ],
      },
    ],
  },
];

export const CHECKLIST_MAP: Record<string, Checklist> = Object.fromEntries(
  CHECKLISTS.map((c) => [c.id, c]),
);
