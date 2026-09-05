import type { Scenario } from "@/lib/types";

/**
 * Scénarios de simulation.
 *
 * Chaque choix est noté sur cinq axes (pertinence, empathie, argumentation,
 * découverte, conclusion) et suivi d'un retour explicite. Il n'y a pas de
 * « bonne réponse » unique : certaines options sont défendables mais moins
 * efficaces, ce qui correspond à la réalité du métier.
 */
export const SCENARIOS: Scenario[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "sc-decouverte",
    title: "Un propriétaire veut vendre",
    pitch: "Premier rendez-vous chez un couple qui envisage de vendre. Tout reste à découvrir.",
    level: "debutant",
    skills: ["decouverte", "estimation", "mandat"],
    briefing: [
      "M. et Mme Fabre, 58 et 56 ans, vous reçoivent chez eux.",
      "Maison de 1978, environ 120 m², quatre chambres, jardin de 600 m², quartier résidentiel.",
      "Ils vous ont appelé après avoir vu votre panneau dans la rue.",
      "Vous ne savez rien d'autre. C'est votre premier contact.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Mme Fabre",
        situation:
          "Elle vous fait entrer dans le salon et dit : « Alors, on voudrait vendre. Vous voulez visiter tout de suite ? »",
        prompt: "Comment démarrez-vous le rendez-vous ?",
        bestPractice:
          "S'asseoir avant de visiter. Comprendre le projet conditionne toute l'estimation et permet de garder la conduite du rendez-vous. Visiter d'abord, c'est perdre l'initiative et découvrir le bien sans savoir ce que le client veut en faire.",
        choices: [
          {
            id: "a",
            text: "« Volontiers, allons-y, je regarde d'abord et on discutera ensuite. »",
            scores: { pertinence: -1, decouverte: -2 },
            feedback:
              "Vous perdez la conduite du rendez-vous. Vous allez visiter sans savoir pourquoi ils vendent, pour quand, ni avec quelles contraintes — et vous devrez ensuite estimer sans contexte.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Si vous le permettez, j'aimerais d'abord comprendre votre projet. Dix minutes assis, puis nous visitons ensemble. »",
            scores: { pertinence: 3, decouverte: 3, empathie: 1 },
            feedback:
              "Exactement la bonne séquence. Vous annoncez le déroulé, vous justifiez la démarche, et vous obtenez le contexte nécessaire à une estimation utile.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Avant tout, laissez-moi vous présenter notre agence et nos résultats sur le secteur. »",
            scores: { pertinence: -2, decouverte: -2, empathie: -1 },
            feedback:
              "Vous parlez de vous à des gens qui veulent parler d'eux. C'est la plus classique des erreurs de premier rendez-vous, et elle installe d'emblée un rapport commercial.",
            next: "s2",
          },
          {
            id: "d",
            text: "« Avez-vous déjà une idée du prix que vous voulez en tirer ? »",
            scores: { pertinence: -1, decouverte: 0 },
            feedback:
              "La question est utile, mais beaucoup trop tôt. Poser le prix en ouverture ancre immédiatement la discussion sur un chiffre, avant toute compréhension du projet.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "M. Fabre",
        situation:
          "Assis, il explique : « On vend parce que c'est devenu trop grand. Les enfants sont partis. On voudrait quelque chose de plus petit. »",
        prompt: "Que faites-vous de cette réponse ?",
        bestPractice:
          "« Trop grand » est une réponse de surface. La question à poser est celle du déclencheur : pourquoi maintenant et pas dans deux ans ? Elle révèle la motivation réelle et, souvent, une échéance.",
        choices: [
          {
            id: "a",
            text: "« Je comprends. Et vous cherchez quoi comme type de bien ensuite ? »",
            scores: { decouverte: 1, empathie: 1 },
            feedback:
              "Question utile — elle révèle s'il y a un projet d'achat derrière — mais vous passez à côté du déclencheur, qui est l'information la plus importante à ce stade.",
            next: "s3",
          },
          {
            id: "b",
            text: "« Qu'est-ce qui fait que c'est maintenant, plutôt qu'il y a deux ans ou dans deux ans ? »",
            scores: { decouverte: 3, pertinence: 2 },
            feedback:
              "La question du déclencheur. C'est elle qui fait apparaître la motivation réelle : une échéance, une santé, une opportunité, un projet déjà engagé.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Effectivement, avec le marché actuel c'est le bon moment pour vendre. »",
            scores: { pertinence: -2, argumentation: -1 },
            feedback:
              "Affirmation générale et invérifiable, qui ne vous apprend rien et vous engage sur une appréciation du marché que vous n'avez pas documentée.",
            next: "s3",
          },
          {
            id: "d",
            text: "Vous hochez la tête et laissez le silence.",
            scores: { decouverte: 2, empathie: 2 },
            feedback:
              "Bonne option, souvent sous-estimée. Le silence pousse fréquemment le client à développer de lui-même, et ce qu'il ajoute est généralement plus révélateur que la première réponse.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "Mme Fabre",
        situation:
          "« En fait, mon mari a eu un souci de santé l'an dernier. On voudrait un plain-pied. On a repéré quelque chose, mais il faudrait vendre avant l'été. »",
        prompt: "Comment réagissez-vous ?",
        bestPractice:
          "Accueillir l'information personnelle sans s'y attarder, puis qualifier précisément la contrainte : le bien repéré est-il déjà engagé ? L'échéance est-elle impérative ? Ces deux réponses déterminent toute la stratégie de prix.",
        choices: [
          {
            id: "a",
            text: "« J'espère que tout va mieux. Le bien que vous avez repéré, vous avez déjà fait une démarche dessus ? »",
            scores: { empathie: 3, decouverte: 3, pertinence: 2 },
            feedback:
              "Vous accueillez sans vous attarder, puis vous qualifiez l'élément décisif : un achat déjà engagé change entièrement la stratégie de prix et de délai.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Dans ce cas il ne faut pas perdre de temps, je vous propose de signer le mandat aujourd'hui. »",
            scores: { pertinence: -3, empathie: -3, conclusion: -2 },
            feedback:
              "Vous exploitez une confidence personnelle pour presser une signature, sans avoir ni visité ni estimé. C'est à la fois inefficace et contraire à la déontologie.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Je suis désolé d'entendre ça. Parlez-moi de ce souci de santé. »",
            scores: { empathie: 1, pertinence: -1, decouverte: -1 },
            feedback:
              "L'intention est bonne, mais vous entrez dans une intimité qui n'est pas votre sujet. Accueillir suffit ; approfondir met le client mal à l'aise.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Avant l'été, c'est jouable. Combien voulez-vous en tirer ? »",
            scores: { decouverte: 1, empathie: -2 },
            feedback:
              "Vous validez un délai sans rien connaître du bien ni du marché, et vous ignorez complètement ce qui vient d'être confié. Deux erreurs en une phrase.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "M. Fabre",
        situation:
          "Après la visite, il vous demande : « Alors, vous en pensez quoi ? Ça vaut combien à votre avis ? »",
        prompt: "Que répondez-vous ?",
        bestPractice:
          "Ne jamais annoncer de prix en fin de visite. Annoncer un retour écrit sous 48 heures valorise la méthode, protège de l'improvisation et crée le second rendez-vous — celui où le mandat se signe.",
        choices: [
          {
            id: "a",
            text: "« À vue de nez, je dirais autour de 340 000 €, mais il faut que je vérifie. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Le chiffre est lâché : il devient une référence dans la tête du vendeur, quoi que vous disiez ensuite. Si votre analyse donne 315 000 €, vous serez perçu comme quelqu'un qui se dédit.",
            next: "s5",
          },
          {
            id: "b",
            text: "« Je préfère faire mon travail sérieusement : je reviens vers vous jeudi avant midi avec une analyse écrite et les ventes comparables du quartier. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 2 },
            feedback:
              "Vous valorisez votre méthode, vous vous protégez de l'improvisation, et vous créez un second rendez-vous. C'est là que se signent les mandats.",
            next: "s5",
          },
          {
            id: "c",
            text: "« Ça dépend beaucoup du marché, c'est difficile à dire comme ça. »",
            scores: { pertinence: -1, argumentation: -2 },
            feedback:
              "Vous ne dites rien et vous paraissez hésitant. Une non-réponse floue est presque aussi dommageable qu'un chiffre improvisé.",
            next: "s5",
          },
          {
            id: "d",
            text: "« Qu'aviez-vous en tête, vous ? »",
            scores: { decouverte: 2, pertinence: 0 },
            feedback:
              "Connaître l'ancrage du vendeur est utile, mais renvoyer la question sans annoncer votre propre méthode donne l'impression que vous cherchez à vous aligner sur son chiffre.",
            next: "s5",
          },
        ],
      },
      {
        id: "s5",
        speaker: "Mme Fabre",
        situation: "« Très bien. Vous avez besoin de quelque chose de notre côté ? »",
        prompt: "Que demandez-vous ?",
        bestPractice:
          "Repartir avec les documents change la qualité de l'estimation et démontre le sérieux. Titre de propriété, taxe foncière, factures de travaux et autorisations d'urbanisme pour une maison de 1978 avec extension possible.",
        choices: [
          {
            id: "a",
            text: "« Non, j'ai tout ce qu'il me faut, je reviens vers vous jeudi. »",
            scores: { pertinence: -1, conclusion: 0 },
            feedback:
              "Occasion manquée. Les documents améliorent l'estimation, révèlent des points invisibles en visite, et créent un engagement réciproque.",
          },
          {
            id: "b",
            text: "« Oui : votre titre de propriété, le dernier avis de taxe foncière, les factures des travaux réalisés et les autorisations d'urbanisme s'il y a eu des extensions. »",
            scores: { pertinence: 3, argumentation: 2, conclusion: 3 },
            feedback:
              "Demande précise et complète, parfaitement adaptée à une maison individuelle. Elle démontre la méthode et engage le client dans la démarche.",
          },
          {
            id: "c",
            text: "« Si vous avez des documents, envoyez-les-moi. »",
            scores: { pertinence: 0, conclusion: 0 },
            feedback:
              "Trop vague : personne n'envoie rien après une demande imprécise. Nommez les documents un par un.",
          },
          {
            id: "d",
            text: "« Juste votre numéro de téléphone et votre adresse mail. »",
            scores: { pertinence: -1, conclusion: -1 },
            feedback:
              "Vous repartez avec le minimum. Votre estimation reposera sur ce que vous avez vu en une heure, sans aucune pièce.",
          },
        ],
      },
    ],
    debrief: [
      "Le rendez-vous de découverte se conduit assis, avant la visite.",
      "La question du déclencheur — « pourquoi maintenant ? » — révèle la motivation réelle.",
      "Une confidence personnelle s'accueille sans s'y attarder et ne s'exploite jamais.",
      "On n'annonce jamais de prix en fin de visite : on annonce un retour écrit daté.",
      "On repart toujours avec une demande de documents nommés un par un.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-estimation-basse",
    title: "Le vendeur trouve votre estimation trop basse",
    pitch: "Vous présentez une fourchette inférieure de 12 % aux attentes du vendeur. Il réagit mal.",
    level: "intermediaire",
    skills: ["estimation", "psychologie", "negociation"],
    briefing: [
      "Appartement T4 de 92 m², 3e étage avec ascenseur, à rafraîchir, DPE E.",
      "Votre fourchette documentée : 268 000 à 279 000 €, appuyée sur quatre ventes comparables.",
      "Le vendeur espérait 310 000 €, chiffre qu'il tient d'une estimation en ligne.",
      "Vous êtes chez lui, votre document d'estimation posé sur la table.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Le vendeur",
        situation:
          "Vous venez d'annoncer la fourchette. Il repousse le document : « 270 000 € ? Vous plaisantez. Le site m'a dit 310 000 €. »",
        prompt: "Que faites-vous immédiatement ?",
        bestPractice:
          "Accueillir la réaction sans se défendre, et laisser un silence. Répéter ses arguments face à une réaction émotionnelle ne fait que l'amplifier.",
        choices: [
          {
            id: "a",
            text: "« Ces sites ne visitent pas le bien, ils ne valent rien. »",
            scores: { empathie: -2, argumentation: -1 },
            feedback:
              "Vous avez raison sur le fond, mais vous attaquez frontalement la source à laquelle il croit. Il va la défendre par réflexe, et vous voilà en conflit.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Je comprends que ce soit une déception. » Puis vous laissez un silence.",
            scores: { empathie: 3, pertinence: 3 },
            feedback:
              "L'accueil sans « mais », suivi d'un silence, fait redescendre l'intensité et permet de revenir ensuite au raisonnement. C'est la seule ouverture qui fonctionne.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Je peux essayer à 295 000 € si vous préférez, on verra bien. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "Vous venez de détruire votre propre travail en trente secondes. Si votre fourchette se négocie sous la pression, elle n'a aucune valeur — et le client le comprend immédiatement.",
            next: "s2",
          },
          {
            id: "d",
            text: "« Reprenons les quatre ventes comparables, vous allez comprendre. »",
            scores: { argumentation: 1, empathie: -1 },
            feedback:
              "Vos données sont bonnes, mais le moment est mauvais : il est dans l'émotion. Argumenter maintenant sera perçu comme une insistance.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "Le vendeur",
        situation:
          "Après un silence, il souffle : « Écoutez, mon voisin a vendu le sien 305 000 € l'an dernier. Le même appartement. »",
        prompt: "Comment traitez-vous cette comparaison ?",
        bestPractice:
          "Ne jamais contredire : vérifier. Demander les caractéristiques précises du bien voisin transforme une croyance en donnée examinable, et le vendeur trouve souvent lui-même les différences.",
        choices: [
          {
            id: "a",
            text: "« Ce n'est pas le même appartement, croyez-moi. »",
            scores: { argumentation: -2, empathie: -2 },
            feedback:
              "Affirmation contre affirmation. Vous ne pouvez pas gagner ce terrain, et « croyez-moi » est le contraire d'un argument.",
            next: "s3",
          },
          {
            id: "b",
            text: "« C'est une information utile. Vous savez à quel étage il était, s'il avait été rénové et quand exactement ? Regardons-le ensemble. »",
            scores: { argumentation: 3, decouverte: 3, empathie: 2 },
            feedback:
              "Vous accueillez l'objection comme une donnée à examiner. Très souvent, le vendeur identifie lui-même les différences en répondant — et l'objection se dissout sans conflit.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Le marché a beaucoup baissé depuis l'an dernier. »",
            scores: { argumentation: 0, pertinence: -1 },
            feedback:
              "Peut-être vrai, mais non documenté ici. Une affirmation générale sur « le marché » est le type d'argument que les vendeurs rejettent immédiatement.",
            next: "s3",
          },
          {
            id: "d",
            text: "« Si vous pensez qu'il vaut 305 000 €, essayons à ce prix-là. »",
            scores: { pertinence: -2, conclusion: -2 },
            feedback:
              "Vous capitulez en présentant cela comme une ouverture. Vous prenez un mandat que vous savez invendable, et vous demanderez une baisse dans six semaines.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "Le vendeur",
        situation:
          "Il réfléchit : « Il était au 5e, avec une terrasse. Et il avait refait la cuisine. Mais quand même, 270 000, c'est bas. »",
        prompt: "Comment concluez-vous la présentation ?",
        bestPractice:
          "Présenter les trois scénarios de prix avec leurs conséquences chiffrées, puis laisser le vendeur décider. On ne gagne pas une estimation en imposant : on la gagne en rendant la décision éclairée.",
        choices: [
          {
            id: "a",
            text: "« Voilà, vous avez vous-même trouvé les différences. Ma fourchette est la bonne. »",
            scores: { argumentation: 1, empathie: -2 },
            feedback:
              "Vous avez raison, et vous venez de le lui faire remarquer. Avoir raison de cette façon coûte un mandat.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Je vous propose de regarder ce qui se passe à trois niveaux de prix : 268 000, 279 000 et 300 000 €. Voici ce que j'anticipe pour chacun, en délai et en prix final. »",
            scores: { argumentation: 3, pertinence: 3, conclusion: 3 },
            feedback:
              "Vous transformez un désaccord en décision éclairée. Le vendeur choisit, avec les conséquences sous les yeux. C'est la seule façon d'obtenir un prix réaliste accepté.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Prenez le temps d'y réfléchir, rappelez-moi quand vous voulez. »",
            scores: { conclusion: -2, pertinence: -1 },
            feedback:
              "Vous quittez le rendez-vous sans conclusion et sans date. Il va appeler deux autres agences, et celle qui annoncera 300 000 € prendra le mandat.",
            next: "s4",
          },
          {
            id: "d",
            text: "« On peut partir à 289 000 € et ajuster dans un mois si besoin. »",
            scores: { pertinence: 1, argumentation: 0, conclusion: 1 },
            feedback:
              "Défendable comme compromis, mais vous cédez 10 000 € sans contrepartie ni justification. Mieux vaut présenter les scénarios et laisser le vendeur arriver lui-même à ce niveau.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Le vendeur",
        situation:
          "« D'accord pour 285 000 €, mais si dans deux mois ça n'a pas bougé, je ne baisse pas, hein. »",
        prompt: "Comment finalisez-vous ?",
        bestPractice:
          "Accepter un compromis raisonnable en fixant dès maintenant, par écrit, la date du point d'étape. La conversation d'ajustement devient alors un rendez-vous prévu et non une demande subie.",
        choices: [
          {
            id: "a",
            text: "« Parfait, on part là-dessus. »",
            scores: { conclusion: 1, argumentation: -1 },
            feedback:
              "Vous acceptez, mais sans cadrer la suite. Dans deux mois, la conversation sur le prix sera un affrontement au lieu d'un rendez-vous prévu.",
          },
          {
            id: "b",
            text: "« 285 000 €, d'accord. Et je vous propose que nous inscrivions dès maintenant un point d'étape le 15 : nous regarderons ensemble les chiffres réels — vues, contacts, visites — et nous déciderons à ce moment-là, avec des faits. »",
            scores: { conclusion: 3, pertinence: 3, argumentation: 2 },
            feedback:
              "Vous transformez la future conversation difficile en rendez-vous convenu d'avance. C'est l'engagement le plus utile du métier, et celui que presque personne ne prend.",
          },
          {
            id: "c",
            text: "« Vous verrez, à ce prix-là ça va partir vite. »",
            scores: { pertinence: -3, argumentation: -2 },
            feedback:
              "Vous venez de promettre un délai sur un prix que vous jugez vous-même supérieur au marché. Dans six semaines, vous ne pourrez plus rien demander.",
          },
          {
            id: "d",
            text: "« Je préfère qu'on parte à 279 000 €, sinon je ne signe pas. »",
            scores: { pertinence: 0, empathie: -2, conclusion: -1 },
            feedback:
              "Position défendable sur le fond, mais l'ultimatum n'est pas la bonne forme après une négociation qui avançait. 285 000 € avec un point d'étape daté est un meilleur résultat.",
          },
        ],
      },
    ],
    debrief: [
      "Face à une réaction émotionnelle : accueillir sans « mais », puis laisser un silence.",
      "Une comparaison du vendeur se vérifie, elle ne se contredit pas.",
      "Trois scénarios chiffrés remplacent avantageusement un verdict.",
      "Ne jamais ajuster sa fourchette sous la pression : elle perdrait toute valeur.",
      "Fixer le point d'étape par écrit dès la signature transforme la future conversation sur le prix.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-vendre-seul",
    title: "« Je préfère vendre seul »",
    pitch: "Un particulier vend seul depuis deux mois. Vous l'appelez. Il est sur la défensive.",
    level: "intermediaire",
    skills: ["prospection", "psychologie", "mandat"],
    briefing: [
      "Annonce en ligne depuis 63 jours, prix inchangé, six photos, DPE non mentionné.",
      "T3 de 68 m² en copropriété, affiché 289 000 €.",
      "Trois ventes comparables signées dans la rue entre 258 000 et 271 000 € cette année.",
      "Vous l'appelez un mardi à 9 h 30.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Le propriétaire",
        situation: "Il décroche : « Oui ? » Ton neutre, un peu pressé.",
        prompt: "Quelle ouverture ?",
        bestPractice:
          "Annoncer immédiatement sa qualité, reconnaître qu'il reçoit beaucoup d'appels, et lui donner explicitement le droit de refuser. C'est ce qui désamorce la défense.",
        choices: [
          {
            id: "a",
            text: "« Bonjour, j'ai peut-être un acquéreur pour votre bien. »",
            scores: { pertinence: -3, empathie: -2 },
            feedback:
              "Mensonge classique, immédiatement identifié. Vous perdez toute crédibilité dès la première phrase, et il vous rangera parmi les appels à écarter.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Bonjour, Camille Lefèvre, conseillère immobilière sur le quartier. Je vous appelle pour votre annonce — je sais que vous devez en recevoir beaucoup. Je vous prends une minute, et si ça ne vous intéresse pas vous me le dites franchement. »",
            scores: { pertinence: 3, empathie: 3 },
            feedback:
              "Transparence sur votre qualité, reconnaissance de sa situation, et permission explicite de refuser. Les trois éléments qui font que la conversation continue.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Bonjour, je suis conseiller immobilier et je souhaitais vous proposer une estimation gratuite de votre bien. »",
            scores: { pertinence: -1, empathie: -1 },
            feedback:
              "Honnête, mais indistinguable des quinze autres appels. « Gratuit et sans engagement » est la formule que tout le monde emploie : elle ne dit rien.",
            next: "s2",
          },
          {
            id: "d",
            text: "« Bonjour, votre appartement est toujours à vendre ? »",
            scores: { pertinence: 0, decouverte: 1 },
            feedback:
              "Neutre et sans risque, mais vous ne vous présentez pas, ce qui crée une gêne dès qu'il comprendra. Annoncez votre qualité d'emblée.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "Le propriétaire",
        situation: "« Écoutez, je ne veux pas d'agence. Je vends seul, ça se passe bien. »",
        prompt: "Comment répondez-vous ?",
        bestPractice:
          "Ne pas contredire. Poser une question factuelle sur les résultats réels — visites contre offres — qui l'intéresse lui, et qui révèle souvent une situation différente de celle qu'il affirme.",
        choices: [
          {
            id: "a",
            text: "« Vendre seul, c'est très compliqué, vous savez. Il y a beaucoup de risques juridiques. »",
            scores: { empathie: -3, argumentation: -2 },
            feedback:
              "Condescendant et culpabilisant. Vous lui dites qu'il ne sait pas ce qu'il fait : il raccroche.",
            next: "s3",
          },
          {
            id: "b",
            text: "« C'est votre droit le plus strict, et beaucoup de gens vendent très bien seuls. Juste par curiosité : vous avez eu des offres écrites, ou surtout des visites ? »",
            scores: { empathie: 3, decouverte: 3, pertinence: 2 },
            feedback:
              "Vous validez son choix, puis vous posez la question qui distingue une commercialisation qui fonctionne d'une commercialisation qui piétine. C'est le meilleur levier de l'appel.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Je comprends. Puis-je vous rappeler dans trois mois ? »",
            scores: { pertinence: 0, conclusion: 0 },
            feedback:
              "Vous abandonnez au premier refus, qui est pourtant un refus de principe et non un refus de vous. Une question aurait suffi à continuer.",
            next: "s3",
          },
          {
            id: "d",
            text: "« Savez-vous que les biens vendus par un professionnel se vendent en moyenne plus cher ? »",
            scores: { argumentation: -1, empathie: -1 },
            feedback:
              "Statistique invérifiable dans la conversation, qui sonne comme un argument de vente. Il n'a aucune raison de vous croire.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "Le propriétaire",
        situation:
          "Un temps. « Des visites, oui. Une dizaine. Mais les gens ne rappellent pas, ou ils me proposent 260 000, ce qui est ridicule. »",
        prompt: "Que faites-vous de cette information ?",
        bestPractice:
          "Ne pas commenter le prix. Proposer une utilité limitée, concrète et vérifiable : les ventes réellement signées de sa rue, et l'analyse de ce qui bloque ses visites.",
        choices: [
          {
            id: "a",
            text: "« 260 000 €, ce n'est pas ridicule, c'est le marché. Votre prix est trop haut. »",
            scores: { argumentation: 1, empathie: -3 },
            feedback:
              "C'est probablement exact, et c'est absolument le mauvais moment. Vous le contredisez frontalement au téléphone, sans avoir rien montré. Il raccroche.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Dix visites sans offre acceptable, c'est un symptôme que je connais bien, et il a en général une cause précise. Je vous propose vingt minutes, sans engagement : je vous apporte les ventes réellement signées de votre rue cette année, et je vous dis ce qui, à mon avis, bloque vos visites. Vous en ferez ce que vous voudrez. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 2 },
            feedback:
              "Vous apportez une utilité concrète et vérifiable, vous ne demandez rien d'autre qu'un rendez-vous, et vous annoncez explicitement qu'il reste libre. C'est la proposition la plus efficace.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Avec une agence, vous auriez déjà vendu. »",
            scores: { argumentation: -2, empathie: -3 },
            feedback:
              "Invérifiable et arrogant. Vous lui dites qu'il a perdu deux mois par sa faute.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Je peux vous envoyer une estimation par mail si vous voulez. »",
            scores: { pertinence: 0, conclusion: -1 },
            feedback:
              "Une estimation par courriel, sans visite, n'a pas de valeur et ne crée pas de relation. Vous vous alignez sur les sites d'estimation automatique que vous critiquez.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Le propriétaire",
        situation:
          "« Bon… Vingt minutes, d'accord. Mais je vous préviens, je ne signe rien. »",
        prompt: "Comment fixez-vous le rendez-vous ?",
        bestPractice:
          "Proposer deux créneaux précis, confirmer ce que vous apporterez, et respecter explicitement son « je ne signe rien » — ce qui, précisément, le met en confiance.",
        choices: [
          {
            id: "a",
            text: "« Aucun problème. Jeudi 18 h ou samedi 10 h ? J'apporte les ventes signées de la rue, et je viens sans mandat : ce n'est pas le sujet de ce rendez-vous. »",
            scores: { conclusion: 3, empathie: 3, pertinence: 2 },
            feedback:
              "Deux créneaux précis, engagement sur le contenu, et respect explicite de sa réserve. Venir sans mandat est un signal fort qui inverse souvent la situation.",
          },
          {
            id: "b",
            text: "« Très bien, quand êtes-vous disponible ? »",
            scores: { conclusion: 0 },
            feedback:
              "La question ouverte reporte la décision et fait perdre des rendez-vous. Proposez toujours deux créneaux.",
          },
          {
            id: "c",
            text: "« Parfait, et si l'estimation vous convient on pourra signer le mandat dans la foulée. »",
            scores: { conclusion: -2, empathie: -3 },
            feedback:
              "Il vient de dire qu'il ne signerait rien, et vous lui répondez en parlant de signature. Vous confirmez exactement ce qu'il redoutait.",
          },
          {
            id: "d",
            text: "« Je passe demain matin, vers 10 h. »",
            scores: { conclusion: 0, empathie: -1 },
            feedback:
              "Vous imposez au lieu de proposer, avec quelqu'un qui vient tout juste de baisser sa garde. Deux créneaux au choix respectent son autonomie.",
          },
        ],
      },
    ],
    debrief: [
      "Annoncer sa qualité et donner le droit de refuser désamorce la défense.",
      "Ne jamais prétendre avoir un acquéreur : c'est identifié immédiatement.",
      "La distinction visites / offres est le levier le plus efficace face à un particulier.",
      "Ne jamais contredire le prix au téléphone : proposer d'apporter des faits.",
      "Respecter explicitement un « je ne signe rien » met en confiance.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-offre-basse",
    title: "Une offre arrive nettement sous le prix",
    pitch: "Après onze semaines sans offre, une proposition à −9 %. Vous devez la présenter au vendeur.",
    level: "intermediaire",
    skills: ["negociation", "psychologie", "transaction"],
    briefing: [
      "Bien affiché 349 000 € FAI. Onze semaines, huit visites, aucune offre jusqu'ici.",
      "Offre écrite à 315 000 €. Couple, 90 000 € d'apport, accord de principe bancaire écrit, aucun bien à vendre.",
      "Le vendeur a un compromis signé sur son futur achat, acte prévu début septembre.",
      "Vous l'appelez pour fixer un rendez-vous.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Vous",
        situation:
          "Le vendeur décroche : « Ah, bonjour ! Vous avez du nouveau ? » Il est dans sa voiture.",
        prompt: "Que faites-vous ?",
        bestPractice:
          "Ne jamais annoncer une offre sensible à quelqu'un qui conduit. Fixer un rendez-vous ou un moment où il sera disponible et assis.",
        choices: [
          {
            id: "a",
            text: "« Oui, j'ai une offre à 315 000 €. »",
            scores: { pertinence: -3, empathie: -2 },
            feedback:
              "Annoncée en voiture, la nouvelle provoque une réaction émotionnelle immédiate qu'il devra ensuite défendre par orgueil. Vous venez de compliquer toute la négociation.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Oui, du concret. Vous conduisez, je crois : est-ce que je peux vous rappeler dans une heure, ou passer chez vous ce soir ? »",
            scores: { pertinence: 3, empathie: 3 },
            feedback:
              "Vous annoncez qu'il y a du nouveau — ce qui évite l'inquiétude — sans livrer une information sensible dans de mauvaises conditions.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Rien de particulier, je vous rappelle. »",
            scores: { pertinence: -2, empathie: -1 },
            feedback:
              "Vous mentez pour éviter un moment inconfortable. S'il l'apprend, votre fiabilité est atteinte.",
            next: "s2",
          },
          {
            id: "d",
            text: "« J'ai une offre, mais elle est très basse. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "Vous qualifiez l'offre avant de la présenter, et vous décidez à sa place. La négociation est morte avant d'avoir commencé.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "Le vendeur",
        situation: "Le soir, chez lui, assis. « Alors, dites-moi. »",
        prompt: "Comment présentez-vous l'offre ?",
        bestPractice:
          "Présenter d'abord la solidité du dossier acquéreur, puis le montant, puis se taire. Le contexte doit précéder le chiffre.",
        choices: [
          {
            id: "a",
            text: "« Une offre à 315 000 €. C'est bas, mais après onze semaines je pense qu'il faut y réfléchir. »",
            scores: { pertinence: -1, argumentation: -1 },
            feedback:
              "Le chiffre arrive nu, et vous ajoutez immédiatement votre jugement. Le vendeur réagit au montant sans disposer d'aucun élément de contexte.",
            next: "s3",
          },
          {
            id: "b",
            text: "« J'ai une offre écrite. Avant le montant, je veux vous parler du dossier : couple, 90 000 € d'apport, accord bancaire écrit en main, aucun bien à vendre, disponibles pour signer fin juillet — soit six semaines avant votre échéance. C'est le meilleur dossier vu en onze semaines. Leur offre est à 315 000 €. » Puis silence.",
            scores: { pertinence: 3, argumentation: 3, empathie: 2 },
            feedback:
              "Le contexte précède le chiffre, la solidité du dossier est valorisée, et le silence laisse au vendeur l'espace de réagir sans que vous ayez à défendre l'offre.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Je vous préviens, vous ne allez pas aimer : 315 000 €. »",
            scores: { pertinence: -2, empathie: -1 },
            feedback:
              "Vous programmez la réaction négative avant même l'annonce. Le vendeur va se conformer à ce que vous venez d'annoncer.",
            next: "s3",
          },
          {
            id: "d",
            text: "Vous lui tendez l'offre écrite sans commentaire.",
            scores: { pertinence: 0, empathie: -1, argumentation: -1 },
            feedback:
              "Il lira le montant en premier, sans contexte. Vous vous privez de la seule chose qui rend l'offre acceptable : la qualité du dossier.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "Le vendeur",
        situation:
          "Il pose la feuille. « 315 000 €. C'est 34 000 € de moins. Non. C'est non. »",
        prompt: "Comment réagissez-vous ?",
        bestPractice:
          "Accueillir le refus, puis remettre l'offre dans le contexte du marché et de son propre calendrier, avant de proposer une contre-proposition plutôt qu'un choix binaire.",
        choices: [
          {
            id: "a",
            text: "« Je comprends. Vous avez trois options : accepter, refuser, ou faire une contre-proposition. Je vous recommande la troisième, et je vous explique à quel montant et avec quels arguments. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 3 },
            feedback:
              "Vous accueillez, vous ouvrez trois voies au lieu d'un choix binaire, et vous recommandez sans décider. C'est exactement le rôle du conseiller.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Réfléchissez, on en reparle demain. »",
            scores: { conclusion: -2, pertinence: -1 },
            feedback:
              "Vous laissez un refus s'installer une nuit entière. Le lendemain, il aura consolidé sa position et en aura parlé à son entourage.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Vous avez onze semaines sans offre et un acte en septembre. Vous ne pouvez pas vous permettre de refuser. »",
            scores: { argumentation: 1, empathie: -3 },
            feedback:
              "Les faits sont exacts, la formulation est une mise sous pression. Il va refuser pour ne pas se sentir contraint.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Je vais leur dire que c'est non. »",
            scores: { pertinence: -2, conclusion: -2 },
            feedback:
              "Vous exécutez sans conseiller. Vous perdez le seul acquéreur solide en onze semaines, alors qu'une contre-proposition était possible.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Le vendeur",
        situation: "« Bon. Une contre-proposition à combien, selon vous ? »",
        prompt: "Que proposez-vous ?",
        bestPractice:
          "Un montant qui laisse une marge de convergence au-dessus de son besoin réel, assorti d'un levier hors prix — ici le calendrier, qui a une valeur objective pour lui et un coût nul pour l'acquéreur.",
        choices: [
          {
            id: "a",
            text: "« 345 000 €. On ne cède presque rien, ils suivront. »",
            scores: { argumentation: -2, pertinence: -1 },
            feedback:
              "Une contre-proposition à −1 % après une offre à −9 % est lue comme un refus. Vous risquez de perdre l'acquéreur sans avoir rien tenté.",
          },
          {
            id: "b",
            text: "« 328 000 €, avec deux éléments : nous avançons la signature à fin juillet, ce qui sécurise entièrement votre achat de septembre, et vous laissez les meubles de cuisine. Cela leur donne de la valeur sans vous coûter d'argent, et nous laisse une marge de convergence. »",
            scores: { argumentation: 3, pertinence: 3, conclusion: 3 },
            feedback:
              "Un montant réaliste, une justification liée à son propre calendrier, et deux leviers hors prix qui coûtent peu au vendeur et valent beaucoup pour l'acquéreur. C'est la structure d'une contre-proposition efficace.",
          },
          {
            id: "c",
            text: "« 320 000 €, allons droit au but. »",
            scores: { conclusion: 1, argumentation: 0 },
            feedback:
              "Rapide, mais vous cédez presque tout d'un coup sans contrepartie et sans marge. L'acquéreur négociera encore.",
          },
          {
            id: "d",
            text: "« C'est vous qui décidez, moi je transmets. »",
            scores: { pertinence: -2, conclusion: -2 },
            feedback:
              "Vous refusez votre rôle. Le vendeur vous demande précisément le conseil pour lequel il vous rémunère.",
          },
        ],
      },
    ],
    debrief: [
      "Ne jamais annoncer une offre sensible à quelqu'un qui conduit.",
      "Présenter la solidité du dossier avant le montant, puis se taire.",
      "Ne jamais qualifier une offre de « très basse » avant de la présenter.",
      "Ouvrir trois voies — accepter, refuser, contre-proposer — plutôt qu'un choix binaire.",
      "Une contre-proposition comporte un montant, une justification et des leviers hors prix.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-financement",
    title: "L'acquéreur n'a pas sécurisé son financement",
    pitch: "Un candidat enthousiaste veut faire une offre. Rien n'a été vérifié.",
    level: "intermediaire",
    skills: ["acquereur", "financement", "juridique"],
    briefing: [
      "Bien affiché 295 000 € FAI. L'acquéreur a visité deux fois, il est très motivé.",
      "Il annonce « 60 000 € d'apport » et « pas de souci pour le prêt ».",
      "Il n'a rencontré ni banque ni courtier. Il veut faire une offre ce soir.",
      "Le vendeur, lui, attend depuis sept semaines.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "L'acquéreur",
        situation:
          "« On le veut. Je vous fais une offre au prix ce soir. Vous pouvez bloquer le bien ? Je peux vous faire un chèque de 5 000 € tout de suite. »",
        prompt: "Que répondez-vous ?",
        bestPractice:
          "Refuser catégoriquement le chèque, expliquer ce qui bloque réellement un bien, et enchaîner immédiatement sur la qualification du financement.",
        choices: [
          {
            id: "a",
            text: "« Parfait, je prends le chèque, ça montrera votre sérieux au vendeur. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "Aucune somme ne doit être encaissée au stade de l'offre, et un mandataire n'est en tout état de cause pas habilité à recevoir des fonds. C'est une faute grave.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Je ne prends aucune somme à ce stade, et personne ne devrait le faire. Ce qui bloque réellement un bien, c'est une offre écrite précise, acceptée par le vendeur. Les fonds interviendront chez le notaire. Parlons plutôt de votre financement. »",
            scores: { pertinence: 3, argumentation: 3, decouverte: 2 },
            feedback:
              "Refus net et expliqué, puis redirection immédiate vers ce qui compte vraiment. Vous transformez un refus en démonstration de professionnalisme.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Gardez votre chèque, mais faites-moi l'offre, on verra le financement après. »",
            scores: { pertinence: -1, decouverte: -2 },
            feedback:
              "Vous refusez bien le chèque, mais vous laissez passer une offre non qualifiée. Le vendeur va retirer son bien du marché sur un dossier inconnu.",
            next: "s2",
          },
          {
            id: "d",
            text: "« Il faudrait d'abord voir avec votre banque, revenez quand ce sera fait. »",
            scores: { pertinence: 1, empathie: -2, conclusion: -2 },
            feedback:
              "L'exigence est juste, la forme fait perdre l'acquéreur. Vous le renvoyez au lieu de l'accompagner, et il ira voir un confrère.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "L'acquéreur",
        situation:
          "« Mon financement ? Il n'y a pas de souci, je gagne bien ma vie. J'ai 60 000 € de côté. »",
        prompt: "Comment qualifiez-vous ?",
        bestPractice:
          "Vérifier la disponibilité réelle de l'apport, l'existence de crédits en cours, et surtout si le montant annoncé inclut les frais d'acquisition — trois points qui changent tout.",
        choices: [
          {
            id: "a",
            text: "« Très bien, je transmets l'offre. »",
            scores: { pertinence: -3, decouverte: -3 },
            feedback:
              "Vous transmettez une offre sans aucune vérification. Le vendeur retire son bien du marché sur une déclaration verbale — et vous manquez à votre devoir de conseil envers lui.",
            next: "s3",
          },
          {
            id: "b",
            text: "« Parfait. Trois questions rapides pour que je puisse présenter votre dossier correctement : ces 60 000 € sont-ils disponibles aujourd'hui ? Avez-vous des crédits en cours ? Et savez-vous que les frais d'acquisition représenteront environ 22 000 € en plus du prix ? »",
            scores: { decouverte: 3, pertinence: 3, argumentation: 2 },
            feedback:
              "Trois questions précises, justifiées par l'intérêt de l'acquéreur lui-même. La troisième réserve souvent une surprise : beaucoup découvrent à ce moment que leur apport couvre à peine les frais.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Avec 60 000 € d'apport et vos revenus, vous devriez pouvoir emprunter autour de 240 000 € sans problème. »",
            scores: { pertinence: -3, argumentation: -2 },
            feedback:
              "Vous calculez une capacité d'emprunt à la place d'une banque, sans en avoir ni les éléments ni le droit. Si le prêt est refusé, votre responsabilité est engagée.",
            next: "s3",
          },
          {
            id: "d",
            text: "« Vous avez déjà rencontré votre banquier ? »",
            scores: { decouverte: 2, pertinence: 1 },
            feedback:
              "Bonne question, la plus discriminante même. Mais posée seule, elle laisse de côté la disponibilité de l'apport et la question des frais.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "L'acquéreur",
        situation:
          "« Ah. Non, je n'avais pas compté les frais. Et sur les 60 000, il y en a 25 000 qui viennent de la vente de la maison de ma mère, qui n'est pas encore signée. »",
        prompt: "Que faites-vous ?",
        bestPractice:
          "Ne pas dramatiser, organiser immédiatement un rendez-vous avec un courtier, et prévenir le vendeur de la situation réelle avant toute présentation d'offre.",
        choices: [
          {
            id: "a",
            text: "« Dans ce cas, ça ne va pas être possible. »",
            scores: { pertinence: -1, empathie: -2, conclusion: -2 },
            feedback:
              "Vous concluez trop vite. La situation est compliquée mais pas nécessairement bloquée : un courtier peut trouver des solutions, et l'acquéreur reste motivé.",
            next: "s4",
          },
          {
            id: "b",
            text: "« On peut travailler là-dessus, mais il faut le faire dans le bon ordre. Je vous mets en relation avec un courtier dès demain : en 48 heures vous saurez exactement ce que vous pouvez faire. Ensuite nous ferons une offre solide, qui aura de vraies chances d'être acceptée. »",
            scores: { pertinence: 3, empathie: 3, conclusion: 3 },
            feedback:
              "Vous ne fermez pas la porte, vous remettez les étapes dans l'ordre, et vous transformez une situation floue en démarche concrète avec une échéance courte.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Faites quand même l'offre, on verra bien. Le vendeur attend depuis sept semaines. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "Vous exposez le vendeur à retirer son bien du marché pour un dossier que vous savez fragile. C'est un manquement caractérisé au devoir de conseil.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Revenez me voir quand votre situation sera claire. »",
            scores: { pertinence: 1, empathie: -2, conclusion: -2 },
            feedback:
              "Vous avez raison sur le fond, mais vous laissez partir un acquéreur motivé sans l'accompagner. Il ira chez un confrère qui, lui, l'aidera.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Le vendeur",
        situation:
          "Vous appelez le vendeur : « Vous avez du nouveau ? Ça fait sept semaines… »",
        prompt: "Que lui dites-vous ?",
        bestPractice:
          "Dire la vérité complète : un candidat motivé, un financement à vérifier, une échéance courte. Le vendeur a le droit de savoir sur quoi il s'engage.",
        choices: [
          {
            id: "a",
            text: "« J'ai un acquéreur très motivé, l'offre arrive dans les jours qui viennent. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous donnez un espoir sur un dossier fragile. Si le financement ne se fait pas, vous aurez fait attendre le vendeur trois semaines de plus, et il l'apprendra.",
          },
          {
            id: "b",
            text: "« Un candidat sérieux et très motivé a visité deux fois. Son financement n'est pas encore validé : je l'ai orienté vers un courtier, nous aurons une réponse sous 48 heures. Je préfère vous le dire tel quel plutôt que de vous annoncer une offre qui ne tiendrait pas. Je vous rappelle jeudi. »",
            scores: { pertinence: 3, argumentation: 3, empathie: 2, conclusion: 2 },
            feedback:
              "Information complète, honnête, avec une échéance. Le vendeur peut décider en connaissance de cause, et votre crédibilité en sort renforcée quelle que soit l'issue.",
          },
          {
            id: "c",
            text: "« Rien de nouveau pour l'instant. »",
            scores: { pertinence: -3, empathie: -1 },
            feedback:
              "Vous lui cachez une information qui le concerne directement. S'il l'apprend autrement, la relation est terminée.",
          },
          {
            id: "d",
            text: "« Il y a un candidat, mais son dossier ne tient pas, laissez tomber. »",
            scores: { pertinence: 0, argumentation: -1 },
            feedback:
              "Vous concluez à sa place sur un dossier qui n'est pas encore instruit. Attendez le retour du courtier avant de trancher.",
          },
        ],
      },
    ],
    debrief: [
      "Aucune somme n'est encaissée au stade de l'offre.",
      "Trois questions de qualification : apport disponible, crédits en cours, frais d'acquisition compris.",
      "Ne jamais calculer une capacité d'emprunt à la place d'une banque.",
      "Un dossier fragile s'accompagne vers un courtier, il ne se rejette pas.",
      "Le vendeur a le droit de connaître la solidité réelle du dossier avant toute décision.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-travaux",
    title: "Le bien présente des travaux importants",
    pitch: "En visite, un acquéreur découvre l'ampleur des travaux et se braque.",
    level: "intermediaire",
    skills: ["visite", "technique", "negociation"],
    briefing: [
      "Maison de 1965, 110 m², à rénover intégralement : électricité, cuisine, salle de bains, menuiseries.",
      "DPE F. L'annonce mentionne honnêtement « rénovation complète à prévoir ».",
      "Vous disposez de deux devis d'entreprises locales, obtenus à la prise de mandat.",
      "L'acquéreur est un jeune couple, premier achat.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "L'acquéreure",
        situation:
          "Dans la cuisine, elle se retourne : « Franchement, il y a beaucoup trop de travaux. On n'a pas les moyens de faire ça. »",
        prompt: "Comment réagissez-vous ?",
        bestPractice:
          "Ne pas minimiser, ne pas argumenter. Chercher d'abord ce qui inquiète précisément : le montant, la gestion du chantier, ou le délai avant d'emménager.",
        choices: [
          {
            id: "a",
            text: "« Oh, avec un bon coup de peinture ça change tout, vous verrez. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "Vous minimisez une réalité visible. Ils cessent immédiatement de vous croire sur tout le reste de la visite.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Qu'est-ce qui vous inquiète le plus : le montant, le fait de gérer un chantier, ou le délai avant de pouvoir emménager ? »",
            scores: { decouverte: 3, empathie: 3, pertinence: 2 },
            feedback:
              "Trois inquiétudes très différentes appellent trois réponses différentes. Sans cette question, vous répondez au hasard.",
            next: "s2",
          },
          {
            id: "c",
            text: "« C'est pour ça que le prix est bas. »",
            scores: { argumentation: 1, empathie: -1 },
            feedback:
              "Exact, mais brutal et prématuré. Vous répondez à une émotion par un argument économique.",
            next: "s2",
          },
          {
            id: "d",
            text: "« Je comprends. On regarde le reste ? »",
            scores: { empathie: 1, decouverte: -1 },
            feedback:
              "Vous accueillez, mais vous fuyez le sujet. Il reviendra, et l'inquiétude aura grandi.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "L'acquéreur",
        situation:
          "« C'est surtout qu'on ne sait pas combien ça coûte. On a peur de se retrouver avec 80 000 € de travaux. »",
        prompt: "Que faites-vous ?",
        bestPractice:
          "Utiliser les devis obtenus à la prise de mandat. C'est précisément la situation qui justifie de les avoir demandés dès le départ.",
        choices: [
          {
            id: "a",
            text: "« Je dirais plutôt 40 000 €, à vue de nez. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "Chiffrage improvisé. S'ils achètent sur cette base et que le chantier coûte 65 000 €, votre responsabilité est directement engagée.",
            next: "s3",
          },
          {
            id: "b",
            text: "« C'est exactement pour cette raison que j'ai fait chiffrer avant la mise en vente. J'ai deux devis d'entreprises locales : électricité, cuisine, salle de bains et menuiseries se situent entre 52 000 et 61 000 €. Je vous les transmets ce soir, avec les coordonnées des entreprises. »",
            scores: { pertinence: 3, argumentation: 3, empathie: 2 },
            feedback:
              "Vous transformez une peur en information vérifiable, et vous démontrez une préparation que personne d'autre n'aura faite. C'est le moment où vous devenez leur interlocuteur de référence.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Il faudrait faire venir des artisans pour chiffrer. »",
            scores: { pertinence: 1, conclusion: 0 },
            feedback:
              "Réponse correcte mais passive : vous leur confiez le travail. Vous aviez les devis, il fallait les proposer.",
            next: "s3",
          },
          {
            id: "d",
            text: "« Beaucoup de gens font les travaux eux-mêmes, ça revient bien moins cher. »",
            scores: { pertinence: -1, argumentation: -2 },
            feedback:
              "Vous supposez des compétences et du temps dont vous ne savez rien, et vous éludez la question du coût réel.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "L'acquéreure",
        situation:
          "« 55 000 € de travaux plus 265 000 € de prix, ça fait 320 000 €. On peut acheter du rénové à ce prix-là, non ? »",
        prompt: "Comment répondez-vous ?",
        bestPractice:
          "Prendre la question au sérieux et y répondre par des faits : comparer réellement avec des biens rénovés du secteur, quitte à conclure que le raisonnement est juste.",
        choices: [
          {
            id: "a",
            text: "« Non, c'est très différent, vous ne trouverez pas. »",
            scores: { argumentation: -2, pertinence: -1 },
            feedback:
              "Affirmation sans preuve, sur une question parfaitement légitime. Ils vous soupçonneront de défendre votre mandat.",
            next: "s4",
          },
          {
            id: "b",
            text: "« C'est exactement la bonne question, et je vais y répondre avec des chiffres. Sur le secteur, les maisons comparables rénovées se sont vendues entre 335 000 et 358 000 € cette année. Votre calcul vous place donc en dessous — mais avec un chantier à gérer et un délai. C'est un arbitrage entre argent et confort, et il n'y a pas de mauvaise réponse. »",
            scores: { argumentation: 3, pertinence: 3, empathie: 2 },
            feedback:
              "Vous validez la pertinence de la question, vous répondez par des données locales, et vous nommez l'arbitrage réel sans chercher à emporter la décision.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Vous avez raison, cherchez plutôt du rénové. »",
            scores: { empathie: 1, argumentation: -1, conclusion: -2 },
            feedback:
              "Honnête, mais vous renoncez avant d'avoir vérifié. Les chiffres du secteur montrent peut-être l'inverse.",
            next: "s4",
          },
          {
            id: "d",
            text: "« En rénovant vous-mêmes, vous créez de la valeur, c'est un investissement. »",
            scores: { argumentation: 0, pertinence: -1 },
            feedback:
              "Argument générique et discutable : les travaux ne se récupèrent pas intégralement. Vous vous exposez à une déception à la revente.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "L'acquéreur",
        situation:
          "« On va y réfléchir. Mais si on se lance, on ne peut pas mettre 265 000 €. »",
        prompt: "Comment concluez-vous la visite ?",
        bestPractice:
          "Ne pas négocier à la place du vendeur, encadrer la démarche : une offre écrite argumentée par les devis, transmise avec l'analyse du dossier.",
        choices: [
          {
            id: "a",
            text: "« Faites une offre à 240 000 €, je pense que ça peut passer. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous négociez à la place du vendeur et vous annoncez un montant qu'il n'a jamais validé. Vous travaillez contre votre mandant.",
          },
          {
            id: "b",
            text: "« C'est légitime. Si vous voulez avancer, faites-moi une offre écrite en vous appuyant sur les devis : une offre argumentée par des chiffres a beaucoup plus de chances qu'un montant lancé sans justification. Je la transmettrai avec votre dossier. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 3 },
            feedback:
              "Vous encadrez la démarche, vous améliorez la qualité de leur offre, et vous restez dans votre rôle vis-à-vis du vendeur. Tout le monde y gagne.",
          },
          {
            id: "c",
            text: "« Le vendeur ne descendra pas, il est déjà au plus bas. »",
            scores: { argumentation: -2, conclusion: -2 },
            feedback:
              "Vous fermez la négociation sans avoir consulté votre mandant, et vous perdez un acquéreur intéressé.",
          },
          {
            id: "d",
            text: "« Réfléchissez, rappelez-moi si vous voulez. »",
            scores: { conclusion: -2 },
            feedback:
              "Aucune suite organisée, aucune date. Un couple hésitant qui repart sans étape suivante ne revient presque jamais.",
          },
        ],
      },
    ],
    debrief: [
      "Ne jamais minimiser des travaux visibles.",
      "Identifier l'inquiétude réelle : montant, chantier ou délai.",
      "Des devis obtenus à la prise de mandat transforment une peur en information.",
      "Répondre par des données locales à la comparaison « rénové contre à rénover ».",
      "Encadrer l'offre au lieu de négocier à la place du vendeur.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-surevaluation",
    title: "Le vendeur veut surévaluer",
    pitch: "Il valide votre travail, mais exige un prix 15 % au-dessus du marché.",
    level: "avance",
    skills: ["estimation", "mandat", "psychologie"],
    briefing: [
      "Votre fourchette documentée : 268 000 à 279 000 €.",
      "Le vendeur veut 315 000 €, parce qu'il a besoin de cette somme pour son projet d'achat.",
      "Il est courtois, il vous fait confiance, il dit apprécier votre travail.",
      "Deux confrères ont déjà été reçus.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Le vendeur",
        situation:
          "« Votre travail est sérieux, c'est de loin le plus complet des trois. Mais j'ai besoin de 315 000 €. Essayons trois mois, et on baissera si ça ne marche pas. »",
        prompt: "Que répondez-vous ?",
        bestPractice:
          "Identifier que le vrai problème n'est pas le prix, mais le plan de financement de son projet d'achat. Traiter le prix sans traiter le projet ne résout rien.",
        choices: [
          {
            id: "a",
            text: "« D'accord, essayons trois mois. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "Vous acceptez un mandat que vous savez invendable. Trois mois de travail, de budget et d'énergie, pour arriver au même point avec un bien abîmé sur le marché.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Je vous entends. Puis-je vous poser une question ? Ces 315 000 €, c'est un chiffre lié à votre projet d'achat, c'est bien cela ? »",
            scores: { decouverte: 3, pertinence: 3, empathie: 2 },
            feedback:
              "Vous remontez à la cause. Le prix n'est pas une opinion sur son bien : c'est un besoin de financement. Ce sont deux problèmes différents, et un seul est soluble.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Le marché ne connaît pas vos besoins. À 315 000 €, vous n'aurez pas de visite. »",
            scores: { argumentation: 2, empathie: -2 },
            feedback:
              "C'est vrai, et dit ainsi cela sonne comme une leçon. Vous avez raison trop tôt, et vous perdez la relation.",
            next: "s2",
          },
          {
            id: "d",
            text: "« Je peux faire 300 000 €, mais pas 315 000 €. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous négociez votre propre estimation. Elle n'est donc pas le résultat d'une analyse mais d'un marchandage — et le vendeur l'a compris.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "Le vendeur",
        situation:
          "« Oui, exactement. On a repéré une maison à 380 000 €. Avec notre apport, il nous faut 315 000 € de cette vente. »",
        prompt: "Comment traitez-vous ?",
        bestPractice:
          "Poser le problème dans le bon sens : le sujet n'est pas le prix de vente, c'est le financement de l'achat. Proposer d'examiner cet écart avec un courtier.",
        choices: [
          {
            id: "a",
            text: "« Alors il faut viser plus bas sur votre achat. »",
            scores: { pertinence: 1, empathie: -2 },
            feedback:
              "C'est une des solutions, mais annoncée ainsi elle est vécue comme un jugement sur leur projet. Il faut l'amener autrement.",
            next: "s3",
          },
          {
            id: "b",
            text: "« Nous avons donc un écart d'environ 36 000 € entre ce que votre bien vaut et ce dont vous avez besoin. Votre vrai sujet n'est pas le prix de vente : c'est le financement de votre achat. Est-ce que vous avez examiné cet écart avec un courtier ? »",
            scores: { pertinence: 3, argumentation: 3, decouverte: 2 },
            feedback:
              "Vous reformulez le problème dans les bons termes et vous proposez la seule voie qui peut réellement le résoudre. C'est la compétence la plus rare du métier.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Essayons quand même, on ne sait jamais. »",
            scores: { pertinence: -3, argumentation: -2 },
            feedback:
              "« On ne sait jamais » n'est pas une stratégie. Vous savez, précisément, et vous choisissez de ne pas le dire.",
            next: "s3",
          },
          {
            id: "d",
            text: "« Votre maison à 380 000 €, elle est bien estimée au moins ? »",
            scores: { decouverte: 1, pertinence: 0 },
            feedback:
              "Question intéressante mais qui vous éloigne : vous n'êtes pas mandaté sur ce bien, et vous risquez de perdre le fil.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "Le vendeur",
        situation:
          "« Non, on n'a vu personne. Mais je ne peux pas emprunter plus, on a déjà calculé. »",
        prompt: "Que proposez-vous ?",
        bestPractice:
          "Proposer un rendez-vous courtier avant toute décision de prix : c'est concret, gratuit, rapide, et cela peut débloquer réellement la situation.",
        choices: [
          {
            id: "a",
            text: "« Alors il n'y a pas de solution, je ne peux pas prendre le mandat. »",
            scores: { pertinence: 1, empathie: -2, conclusion: -1 },
            feedback:
              "Position défendable, mais prématurée : vous concluez avant d'avoir exploré la seule piste qui pourrait débloquer la situation.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Je vous propose une chose concrète : je vous mets en relation avec un courtier cette semaine, c'est gratuit et cela prend une heure. Vous saurez exactement ce qui est possible. Ensuite, nous parlerons du prix de vente avec une vraie base. »",
            scores: { pertinence: 3, conclusion: 3, empathie: 2 },
            feedback:
              "Vous apportez un service concret, sans engagement, et vous reportez la décision de prix après l'obtention d'une information décisive. C'est aussi une excellente façon de rester en relation.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Bon, mettons 300 000 € et on verra. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous cédez sur un prix toujours invendable. Vous aurez les mêmes problèmes dans deux mois, avec en plus une crédibilité entamée.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Vous pourriez peut-être demander une aide familiale ? »",
            scores: { pertinence: -1, empathie: -1 },
            feedback:
              "Vous entrez dans leur vie privée sans y avoir été invité. Ce n'est pas votre rôle, et cela met mal à l'aise.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Le vendeur",
        situation:
          "« Écoutez, je veux bien voir le courtier. Mais en attendant, mettez-le à 315 000 €. Sinon je prends l'agence d'à côté qui, elle, est d'accord. »",
        prompt: "Quelle est votre position finale ?",
        bestPractice:
          "Refuser clairement, sans agressivité, en préservant la relation et en programmant un rappel. Un mandat invendable coûte plus cher qu'un mandat perdu.",
        choices: [
          {
            id: "a",
            text: "« Bon, d'accord, 315 000 €. Mais on rediscute dans six semaines. »",
            scores: { pertinence: -3, argumentation: -2 },
            feedback:
              "Vous cédez à une menace. Le vendeur sait désormais que votre parole s'ajuste sous pression — y compris, plus tard, quand il faudra défendre son prix face à un acquéreur.",
          },
          {
            id: "b",
            text: "« Alors je crois qu'il faut prendre l'autre agence, et je le dis sans amertume. À 315 000 €, je ne pourrai pas vous rendre le service que vous attendez, et je ne veux pas vous faire perdre trois mois. Gardez mon analyse et mon numéro : si dans six semaines vous n'avez pas d'offre, appelez-moi, je serai là. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 3, empathie: 2 },
            feedback:
              "Refus clair, sans agressivité, avec la porte laissée ouverte. Une part significative de ces vendeurs rappellent, et ils rappellent au bon prix.",
          },
          {
            id: "c",
            text: "« L'autre agence vous ment pour prendre le mandat, vous verrez. »",
            scores: { argumentation: -2, empathie: -2 },
            feedback:
              "Dénigrement. Même si vous avez raison, cette phrase se retourne toujours contre celui qui la prononce.",
          },
          {
            id: "d",
            text: "« Faites comme vous voulez. » Vous rangez vos affaires.",
            scores: { pertinence: 0, empathie: -3, conclusion: -2 },
            feedback:
              "Vous refusez, ce qui est juste, mais vous détruisez la relation. Ce vendeur ne vous rappellera jamais.",
          },
        ],
      },
    ],
    debrief: [
      "Un prix exigé bien au-dessus du marché cache presque toujours un problème de financement.",
      "Reformuler le problème dans les bons termes est la compétence la plus rare du métier.",
      "Proposer un rendez-vous courtier est concret, gratuit et souvent débloquant.",
      "Ne jamais négocier sa propre estimation sous la pression.",
      "Refuser un mandat en préservant la relation : une part de ces vendeurs rappellent.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-visite-ratee",
    title: "Une visite se passe mal",
    pitch: "Le vendeur est resté malgré votre demande, et il contredit l'acquéreur.",
    level: "intermediaire",
    skills: ["visite", "psychologie"],
    briefing: [
      "T3 de 74 m², cuisine et salle de bains d'origine, années 1990.",
      "Vous aviez demandé au vendeur de s'absenter. Il est là.",
      "L'acquéreur est un candidat sérieux : financement validé, troisième visite de la semaine.",
      "La tension monte dans la cuisine.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Le vendeur",
        situation:
          "L'acquéreur dit : « la cuisine est vraiment datée ». Le vendeur répond sèchement : « C'est du solide, ça ! Ce n'est pas comme ce qu'on fait aujourd'hui. » Silence gênant.",
        prompt: "Que faites-vous immédiatement ?",
        bestPractice:
          "Intervenir sans donner tort à personne, puis sortir le vendeur de la scène calmement. Laisser la tension s'installer coûte l'acquéreur.",
        choices: [
          {
            id: "a",
            text: "Vous ne dites rien et vous passez à la pièce suivante.",
            scores: { pertinence: -2, conclusion: -1 },
            feedback:
              "La tension reste. L'acquéreur n'osera plus rien dire, et vous perdrez toute information sur ce qu'il pense réellement.",
            next: "s2",
          },
          {
            id: "b",
            text: "« Vous avez raison tous les deux : les meubles sont solides, et le style date des années quatre-vingt-dix. Monsieur Duval, je vous propose de nous laisser terminer le tour, je vous rejoins juste après. »",
            scores: { pertinence: 3, empathie: 3, conclusion: 2 },
            feedback:
              "Vous validez les deux points de vue, ce qui désamorce, puis vous sortez le vendeur de la scène sans le vexer. C'est exactement la bonne intervention.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Monsieur Duval, je vous avais demandé de ne pas être là. »",
            scores: { empathie: -3, pertinence: -2 },
            feedback:
              "Vous humiliez votre mandant devant un acquéreur. La visite est terminée, et le mandat probablement aussi.",
            next: "s2",
          },
          {
            id: "d",
            text: "« La cuisine est effectivement à refaire, c'est intégré dans le prix. »",
            scores: { argumentation: 1, empathie: -2 },
            feedback:
              "Vous donnez raison à l'acquéreur devant le vendeur, qui se sent trahi. Vous aurez une conversation difficile juste après.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "L'acquéreur",
        situation:
          "Le vendeur parti, l'acquéreur murmure : « C'est toujours comme ça avec lui ? Ça ne donne pas envie. »",
        prompt: "Comment répondez-vous ?",
        bestPractice:
          "Ne pas critiquer son mandant, expliquer humainement la réaction, et ramener l'acquéreur au bien lui-même.",
        choices: [
          {
            id: "a",
            text: "« Oui, il est un peu difficile. »",
            scores: { pertinence: -3, empathie: -1 },
            feedback:
              "Vous critiquez votre mandant pour créer une complicité. C'est un manquement à la loyauté, et l'acquéreur en tirera ses propres conclusions sur vous.",
            next: "s3",
          },
          {
            id: "b",
            text: "« Il a construit cette cuisine avec sa femme il y a trente ans. Ce n'est pas de l'agressivité, c'est de l'attachement. Cela dit, votre remarque est juste, et vous n'êtes pas le premier à la faire. Continuons, et parlons-en tranquillement après. »",
            scores: { pertinence: 3, empathie: 3, argumentation: 2 },
            feedback:
              "Vous expliquez sans excuser ni critiquer, vous validez la remarque de l'acquéreur, et vous ramenez la visite sur son objet.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Ne faites pas attention, concentrons-nous sur le bien. »",
            scores: { pertinence: 0, empathie: 0 },
            feedback:
              "Neutre, mais vous évacuez sans traiter. L'acquéreur gardera l'impression désagréable.",
            next: "s3",
          },
          {
            id: "d",
            text: "« C'est pour ça qu'il vaut mieux que les propriétaires ne soient pas là. »",
            scores: { pertinence: -1, empathie: -1 },
            feedback:
              "Vous vous dédouanez en désignant votre mandant comme le problème. Peu élégant, et improductif.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "Le vendeur",
        situation:
          "Après le départ de l'acquéreur, le vendeur : « Alors ? Il a vu que c'était du solide au moins ? »",
        prompt: "Que lui dites-vous ?",
        bestPractice:
          "Reparler de sa présence sans le mettre en cause, et transmettre honnêtement le retour, y compris la remarque sur la cuisine.",
        choices: [
          {
            id: "a",
            text: "« Oui oui, ça s'est bien passé. »",
            scores: { pertinence: -3, argumentation: -2 },
            feedback:
              "Vous mentez pour éviter un moment inconfortable. Vous le privez de l'information dont il a besoin, et vous ne pourrez plus jamais évoquer la cuisine.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Je voudrais qu'on reparle de votre présence pendant les visites. Ce n'est pas une question de confiance : un acheteur qui n'ose plus dire ce qui lui déplaît ne dit plus rien, et je perds l'information dont j'ai besoin pour vous conseiller. Sur la cuisine, c'est le troisième visiteur à faire la même remarque. C'est une information utile, pas une attaque contre vous. »",
            scores: { pertinence: 3, argumentation: 3, empathie: 3 },
            feedback:
              "Vous traitez le sujet de fond, vous expliquez la conséquence concrète pour lui, et vous transmettez le retour en le dépersonnalisant. Difficile à dire, indispensable à dire.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Franchement, votre intervention a tout gâché. »",
            scores: { empathie: -3, argumentation: -1 },
            feedback:
              "Le reproche frontal le braque. Il retiendra l'accusation, pas le fond du problème.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Il a trouvé la cuisine datée. Vous devriez la refaire. »",
            scores: { argumentation: 1, empathie: -1, pertinence: -1 },
            feedback:
              "Vous transmettez le retour, mais vous enchaînez sur un conseil de travaux non chiffré, juste après un moment de tension. Mauvais timing.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Vous",
        situation: "Le lendemain matin, vous rappelez l'acquéreur.",
        prompt: "Comment ouvrez-vous cet appel ?",
        bestPractice:
          "Reconnaître la gêne, apporter une information utile — devis pour la cuisine —, et proposer une alternative si ce bien n'est pas le bon.",
        choices: [
          {
            id: "a",
            text: "« Bonjour, alors, ça vous a plu ? »",
            scores: { decouverte: 0, pertinence: -1 },
            feedback:
              "Question fermée et sans valeur, qui ignore complètement ce qui s'est passé la veille.",
          },
          {
            id: "b",
            text: "« Bonjour, je voulais vous rappeler après hier. D'abord, désolé pour l'ambiance : la présence du propriétaire n'était pas prévue. Ensuite, votre remarque sur la cuisine est juste et vous n'êtes pas le premier à la faire : j'ai deux devis de rénovation que je peux vous transmettre. Et si ce bien n'est pas le bon, dites-moi ce qui manquait : j'ai deux autres biens qui pourraient correspondre. »",
            scores: { pertinence: 3, empathie: 3, decouverte: 3, conclusion: 3 },
            feedback:
              "Vous nommez la gêne, vous validez sa remarque, vous apportez une information concrète, et vous ouvrez sur d'autres possibilités. Une visite ratée peut ainsi conserver un acquéreur.",
          },
          {
            id: "c",
            text: "« Bonjour, le propriétaire est prêt à discuter du prix si vous êtes intéressé. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous bradez sans mandat pour rattraper une mauvaise impression, et vous engagez un vendeur qui n'a rien validé.",
          },
          {
            id: "d",
            text: "« Bonjour, je voulais m'excuser pour hier, le propriétaire est parfois difficile. »",
            scores: { empathie: 1, pertinence: -2 },
            feedback:
              "L'excuse est bienvenue, la critique de votre mandant ne l'est pas. Elle vous décrédibilise davantage qu'elle ne vous rachète.",
          },
        ],
      },
    ],
    debrief: [
      "Intervenir immédiatement dans une tension, sans donner tort à personne.",
      "Ne jamais critiquer son mandant devant un acquéreur.",
      "Expliquer une réaction humaine désamorce mieux qu'une excuse.",
      "Transmettre le retour au vendeur, y compris désagréable, en le dépersonnalisant.",
      "Rappeler l'acquéreur le lendemain sauve une part importante des visites ratées.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-compromis",
    title: "Le compromis rencontre une difficulté",
    pitch: "À trois semaines de l'échéance de la condition de prêt, l'acquéreur devient injoignable.",
    level: "avance",
    skills: ["transaction", "financement", "excellence"],
    briefing: [
      "Compromis signé il y a sept semaines. Échéance de la condition suspensive de prêt dans 21 jours.",
      "Vous n'avez jamais obtenu la preuve du dépôt du dossier bancaire.",
      "L'acquéreur ne répond plus depuis huit jours.",
      "Le vendeur a signé un compromis sur son propre achat, acte prévu dans dix semaines.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Vous",
        situation: "Huit jours sans réponse. Que faites-vous en premier ?",
        prompt: "Première action.",
        bestPractice:
          "Multiplier les canaux vers l'acquéreur et interroger en parallèle le notaire, qui dispose souvent d'informations que vous n'avez pas.",
        choices: [
          {
            id: "a",
            text: "Vous attendez encore une semaine : il rappellera.",
            scores: { pertinence: -3, conclusion: -3 },
            feedback:
              "Vous perdez une semaine sur trois. À ce stade, chaque jour compte, et l'inaction est le pire choix possible.",
            next: "s2",
          },
          {
            id: "b",
            text: "Vous appelez, envoyez un SMS et un courriel écrit, puis vous appelez le notaire pour savoir s'il a des nouvelles ou des pièces.",
            scores: { pertinence: 3, conclusion: 3, argumentation: 2 },
            feedback:
              "Multiplication des canaux et vérification auprès du notaire, qui a souvent reçu des documents dont vous ignorez l'existence. C'est la première action correcte.",
            next: "s2",
          },
          {
            id: "c",
            text: "Vous prévenez immédiatement le vendeur que la vente est probablement perdue.",
            scores: { pertinence: -1, argumentation: -2 },
            feedback:
              "Vous alarmez sur une hypothèse non vérifiée. Informez le vendeur, oui — mais après avoir cherché l'information.",
            next: "s2",
          },
          {
            id: "d",
            text: "Vous contactez directement la banque de l'acquéreur pour connaître l'avancement.",
            scores: { pertinence: -2 },
            feedback:
              "La banque ne vous communiquera rien : vous n'êtes pas son client et le secret bancaire s'applique. Passez par l'acquéreur ou le notaire.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "Le notaire",
        situation:
          "Le notaire vous répond : « Je n'ai rien reçu. Aucune attestation de dépôt, aucune offre. »",
        prompt: "Que faites-vous ?",
        bestPractice:
          "Informer le vendeur immédiatement, factuellement, avec les échéances et le plan d'action. Il a le droit de savoir et de décider.",
        choices: [
          {
            id: "a",
            text: "Vous continuez à chercher à joindre l'acquéreur sans rien dire au vendeur.",
            scores: { pertinence: -3, empathie: -2 },
            feedback:
              "Vous privez votre mandant d'une information qui le concerne directement, et dont dépend son propre achat. Manquement caractérisé au devoir d'information.",
            next: "s3",
          },
          {
            id: "b",
            text: "Vous appelez le vendeur : « Je dois vous informer d'un point de vigilance. Le notaire n'a reçu aucune pièce de financement, et l'acquéreur ne me répond plus depuis huit jours. L'échéance de la condition de prêt est le 12. Voici ce que je fais dans les 48 heures, et voici les scénarios possibles. »",
            scores: { pertinence: 3, argumentation: 3, empathie: 2 },
            feedback:
              "Information factuelle, échéance rappelée, plan d'action annoncé. C'est difficile à dire et absolument nécessaire.",
            next: "s3",
          },
          {
            id: "c",
            text: "Vous envoyez un courriel au vendeur : « Petit souci sur le dossier, je vous tiens au courant. »",
            scores: { pertinence: -1, argumentation: -2 },
            feedback:
              "Un message vague sur un sujet grave génère plus d'angoisse qu'une information complète. Appelez, et soyez précis.",
            next: "s3",
          },
          {
            id: "d",
            text: "Vous demandez au notaire d'envoyer une mise en demeure à l'acquéreur.",
            scores: { pertinence: 0, conclusion: 1 },
            feedback:
              "Ce n'est pas à vous de déclencher une procédure, et il est prématuré de le faire avant d'avoir compris la situation. Le notaire décidera le moment venu.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "L'acquéreur",
        situation:
          "Il rappelle enfin : « Excusez-moi. Ma banque a refusé. J'ai honte, je ne savais pas comment vous le dire. »",
        prompt: "Comment réagissez-vous ?",
        bestPractice:
          "Accueillir sans reproche, puis chercher immédiatement des solutions : le motif du refus détermine si un autre établissement peut accepter.",
        choices: [
          {
            id: "a",
            text: "« Vous auriez dû me le dire tout de suite, on a perdu huit jours. »",
            scores: { empathie: -3, conclusion: -1 },
            feedback:
              "Le reproche est fondé et parfaitement inutile. Vous braquez la seule personne dont vous avez besoin pour tenter de sauver le dossier.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Je comprends, ce n'est jamais agréable à annoncer. Ce qui compte maintenant, c'est de savoir quoi faire. Quel motif la banque a-t-elle donné ? Selon la raison, un autre établissement peut très bien accepter, et nous avons encore trois semaines. »",
            scores: { empathie: 3, pertinence: 3, conclusion: 3 },
            feedback:
              "Vous accueillez, vous tournez immédiatement vers l'action, et vous cherchez l'information qui détermine s'il reste une solution. Beaucoup de refus ne sont pas rédhibitoires.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Bon, tant pis. Je préviens le vendeur que c'est annulé. »",
            scores: { pertinence: -2, conclusion: -2 },
            feedback:
              "Vous abandonnez alors qu'il reste trois semaines et qu'un refus bancaire n'engage qu'un seul établissement.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Vous saviez que c'était une condition suspensive : il faut me fournir le refus écrit. »",
            scores: { pertinence: 1, empathie: -2 },
            feedback:
              "Exact sur le plan procédural, mais vous commencez par la formalité au lieu de chercher une solution. La lettre de refus viendra si nécessaire.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Le vendeur",
        situation:
          "Vous rappelez le vendeur pour faire le point. « Alors ? »",
        prompt: "Que lui annoncez-vous ?",
        bestPractice:
          "Dire la vérité complète, exposer les deux pistes menées en parallèle — sauver le dossier et préparer une remise en vente — et donner une date de décision.",
        choices: [
          {
            id: "a",
            text: "« Un refus bancaire, mais je gère, ne vous inquiétez pas. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Rassurer sans informer prive le vendeur de la possibilité d'anticiper, alors que son propre achat est en jeu.",
          },
          {
            id: "b",
            text: "« Sa banque a refusé. Deux choses en parallèle : un courtier reprend son dossier dès demain, nous saurons sous huit jours si un autre établissement suit. Et de mon côté, je reprends contact avec les deux candidats sérieux de la commercialisation, pour ne pas perdre de temps si cela ne marche pas. Je vous appelle vendredi avec une réponse claire. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 3, empathie: 2 },
            feedback:
              "Information complète, deux pistes menées de front, échéance annoncée. C'est exactement ce qu'un vendeur attend d'un professionnel dans cette situation.",
          },
          {
            id: "c",
            text: "« C'est mort, on remet en vente. »",
            scores: { pertinence: -1, conclusion: -1 },
            feedback:
              "Prématuré : il reste trois semaines et une piste réelle. Vous renoncez trop tôt.",
          },
          {
            id: "d",
            text: "« Il faudrait envisager de baisser le prix pour retrouver un acquéreur vite. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous liez un incident de financement à une baisse de prix, ce qui n'a aucun rapport. Le bien n'a pas perdu de valeur parce qu'une banque a refusé un dossier.",
          },
        ],
      },
    ],
    debrief: [
      "L'absence de preuve de dépôt bancaire est le signal d'alerte à traiter tôt.",
      "Le notaire dispose souvent d'informations que vous n'avez pas : appelez-le.",
      "Le vendeur doit être informé immédiatement, factuellement, avec un plan d'action.",
      "Un refus bancaire n'engage qu'un établissement : un courtier peut débloquer la situation.",
      "Mener deux pistes en parallèle — sauver et préparer la remise en vente — est la bonne pratique.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-copro-expert",
    title: "Copropriété en difficulté et acquéreur méfiant",
    pitch: "Un dossier de copropriété lourd, un acquéreur qui a déjà été échaudé.",
    level: "avance",
    skills: ["copropriete", "excellence", "negociation"],
    expertOnly: true,
    briefing: [
      "Copropriété de 46 lots, 1969. Impayés à 14,5 % du budget. Trois syndics en cinq ans.",
      "Ravalement voté à 380 000 €, non commencé. Quote-part du lot : environ 11 000 €.",
      "Chaudière collective au fioul, remplacement refusé deux fois en assemblée.",
      "L'acquéreur a déjà acheté dans une copropriété à problèmes et s'en méfie.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "L'acquéreur",
        situation:
          "Avant même la visite : « Je vous préviens, j'ai déjà été piégé une fois par une copropriété. Cette fois je veux tout voir avant. »",
        prompt: "Comment répondez-vous ?",
        bestPractice:
          "Saisir l'occasion : c'est exactement la situation où un dossier préparé et une synthèse écrite créent une différence décisive.",
        choices: [
          {
            id: "a",
            text: "« Ne vous inquiétez pas, ici tout est en ordre. »",
            scores: { pertinence: -3, argumentation: -3 },
            feedback:
              "C'est faux, et il le découvrira. Vous venez de détruire toute la relation avant même la visite.",
            next: "s2",
          },
          {
            id: "b",
            text: "« C'est exactement la bonne démarche, et cela tombe bien : j'ai préparé une synthèse d'une page. Je vous la donne avant la visite, avec les documents complets. Il y a des points d'attention réels et chiffrés, je préfère que vous les connaissiez maintenant. »",
            scores: { pertinence: 3, argumentation: 3, empathie: 2 },
            feedback:
              "Vous validez sa prudence, vous prenez les devants sur les points négatifs, et vous vous distinguez immédiatement de tous les professionnels qu'il a rencontrés.",
            next: "s2",
          },
          {
            id: "c",
            text: "« Vous aurez tous les documents avec le compromis, c'est la loi. »",
            scores: { pertinence: 0, empathie: -1 },
            feedback:
              "Exact, et parfaitement insuffisant. Il vous demande de la transparence maintenant, vous lui répondez par une obligation légale future.",
            next: "s2",
          },
          {
            id: "d",
            text: "« Visitons d'abord, on verra les documents après si le bien vous plaît. »",
            scores: { pertinence: -1, empathie: -2 },
            feedback:
              "Vous reportez précisément ce qu'il demande. Il en conclut qu'il y a quelque chose à cacher — et il n'a pas tort.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "L'acquéreur",
        situation:
          "Il lit la synthèse : « 11 000 € de ravalement, 14 % d'impayés, une chaudière refusée deux fois. C'est catastrophique, non ? »",
        prompt: "Comment cadrez-vous ?",
        bestPractice:
          "Hiérarchiser : distinguer ce qui est certain et chiffré de ce qui est probable, et exposer l'effet sur le prix plutôt que de rassurer.",
        choices: [
          {
            id: "a",
            text: "« C'est effectivement une copropriété difficile. »",
            scores: { pertinence: 1, argumentation: 0 },
            feedback:
              "Honnête, mais vous vous arrêtez au constat sans hiérarchiser ni chiffrer. L'acquéreur reste dans l'inquiétude globale.",
            next: "s3",
          },
          {
            id: "b",
            text: "« Hiérarchisons. Certain et chiffré : les 11 000 € de ravalement, dont environ 1 200 € sont couverts par le fonds de travaux. Probable à moyen terme : la chaudière, environ 7 000 €. Point de vigilance : les impayés, qui pèsent sur la trésorerie collective. Total prévisible : environ 17 000 €. Et c'est précisément pour cela que ce bien est proposé 22 000 € en dessous des lots comparables des copropriétés saines du quartier. »",
            scores: { argumentation: 3, pertinence: 3, conclusion: 2 },
            feedback:
              "Vous hiérarchisez, vous chiffrez, et vous montrez que le prix intègre déjà le risque. C'est le raisonnement qu'un acquéreur méfiant peut vérifier et accepter.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Toutes les copropriétés anciennes ont des travaux, c'est normal. »",
            scores: { argumentation: -2, pertinence: -1 },
            feedback:
              "Banalisation. Un taux d'impayés de 14 % et deux refus de chaudière ne sont pas « normaux », et il le sait.",
            next: "s3",
          },
          {
            id: "d",
            text: "« Si cela vous inquiète, il vaut mieux ne pas acheter ici. »",
            scores: { empathie: 1, conclusion: -2 },
            feedback:
              "Vous renoncez alors qu'il vous demande une analyse. Il est venu chercher un raisonnement, pas une porte de sortie.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "L'acquéreur",
        situation:
          "« D'accord, c'est intégré dans le prix. Mais qui paie le ravalement : moi ou le vendeur ? »",
        prompt: "Que répondez-vous ?",
        bestPractice:
          "Expliquer que la répartition dépend de la date d'exigibilité des appels de fonds et des stipulations de l'avant-contrat, et que ce point se règle expressément avec le notaire.",
        choices: [
          {
            id: "a",
            text: "« C'est celui qui est propriétaire au moment de l'appel de fonds. »",
            scores: { argumentation: 1, pertinence: 0 },
            feedback:
              "C'est le principe général, mais la réponse est incomplète : les parties peuvent en convenir autrement dans l'avant-contrat, et c'est précisément le point à négocier.",
            next: "s4",
          },
          {
            id: "b",
            text: "« Cela dépend de la date d'exigibilité des appels de fonds et de ce qui sera écrit dans l'avant-contrat. C'est un point qui se négocie et qui doit être expressément prévu : je le signale au notaire dès aujourd'hui pour qu'il soit traité, et non découvert le jour de la signature. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 3 },
            feedback:
              "Réponse exacte, dans les bonnes limites, et surtout suivie d'une action concrète et datée. C'est le comportement qui évite les litiges de dernière minute.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Le vendeur, bien sûr, puisque c'est lui qui a voté. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Affirmation inexacte présentée comme une évidence. Ce point relève de la date d'exigibilité et des stipulations contractuelles, pas du vote.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Vous verrez ça avec le notaire. »",
            scores: { pertinence: 0, empathie: -1 },
            feedback:
              "L'orientation est juste, la formulation est un renvoi. Expliquez le principe, puis prenez l'initiative de saisir le notaire.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "L'acquéreur",
        situation:
          "« Je suis intéressé. Mais je veux une décote supplémentaire pour la chaudière. »",
        prompt: "Comment gérez-vous cette demande ?",
        bestPractice:
          "Reconnaître la légitimité de la demande, l'encadrer par une offre écrite argumentée, et éventuellement proposer un mécanisme contractuel plutôt qu'une simple baisse de prix.",
        choices: [
          {
            id: "a",
            text: "« C'est légitime. Faites une offre écrite en l'argumentant par la chaudière : une demande chiffrée et documentée a beaucoup plus de chances qu'un montant lancé. Et je vais proposer une autre piste au vendeur : que la répartition d'une éventuelle décision de remplacement soit expressément prévue dans l'avant-contrat. Cela peut valoir mieux qu'une baisse de prix pour vous deux. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 3 },
            feedback:
              "Vous validez, vous encadrez, et vous proposez un levier contractuel qui peut satisfaire les deux parties sans toucher au prix. C'est de la négociation de niveau professionnel.",
          },
          {
            id: "b",
            text: "« Le prix intègre déjà tout, il n'y aura pas de décote supplémentaire. »",
            scores: { argumentation: 1, empathie: -2, conclusion: -2 },
            feedback:
              "Vous fermez sans avoir consulté votre mandant, sur une demande argumentée. Vous risquez de perdre un acquéreur informé et motivé.",
          },
          {
            id: "c",
            text: "« Je pense que le vendeur peut descendre de 7 000 €. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous engagez votre mandant sur un montant qu'il n'a jamais validé. C'est une faute vis-à-vis de la personne qui vous a mandaté.",
          },
          {
            id: "d",
            text: "« Faites une offre, je transmets. »",
            scores: { conclusion: 1, argumentation: 0 },
            feedback:
              "Correct mais minimal : vous ne l'aidez pas à construire une offre solide, et vous n'explorez aucun levier hors prix.",
          },
        ],
      },
    ],
    debrief: [
      "Un acquéreur méfiant est une opportunité : c'est là que la préparation se voit.",
      "Hiérarchiser certain / probable / vigilance, et chiffrer chaque poste.",
      "Montrer que le prix intègre déjà le risque est plus efficace que rassurer.",
      "La répartition des travaux votés se prévoit expressément dans l'avant-contrat.",
      "Un levier contractuel vaut parfois mieux qu'une baisse de prix pour les deux parties.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sc-indivision-expert",
    title: "Négociation multi-parties : une indivision divisée",
    pitch: "Trois héritiers, trois positions différentes, une offre à traiter.",
    level: "avance",
    skills: ["negociation", "juridique", "psychologie"],
    expertOnly: true,
    briefing: [
      "Maison familiale, succession réglée, trois enfants indivisaires à parts égales.",
      "Bien affiché 420 000 €. Votre estimation : 385 000 à 400 000 €.",
      "Anne veut vendre vite, elle a besoin de sa part. Marc n'est pas pressé. Sophie est très attachée à la maison.",
      "Une offre écrite arrive à 392 000 €, dossier solide, financement validé.",
    ],
    steps: [
      {
        id: "s1",
        speaker: "Vous",
        situation: "Vous devez présenter l'offre. Comment procédez-vous ?",
        prompt: "Première décision.",
        bestPractice:
          "Réunir les trois indivisaires en même temps. Une annonce séquentielle crée des alliances, des versions divergentes et des reproches.",
        choices: [
          {
            id: "a",
            text: "Vous appelez Anne d'abord, qui est la plus motivée, pour avoir un appui.",
            scores: { pertinence: -2, empathie: -1 },
            feedback:
              "Vous créez une alliance et vous prenez parti. Marc et Sophie apprendront qu'Anne savait avant eux, et vous perdrez leur confiance.",
            next: "s2",
          },
          {
            id: "b",
            text: "Vous proposez une réunion avec les trois, en présentiel ou en visioconférence, pour présenter l'offre une seule fois.",
            scores: { pertinence: 3, argumentation: 2, conclusion: 2 },
            feedback:
              "Une information unique, au même moment, pour tout le monde. C'est la seule façon d'éviter les versions divergentes et les reproches ultérieurs.",
            next: "s2",
          },
          {
            id: "c",
            text: "Vous envoyez l'offre par courriel aux trois simultanément.",
            scores: { pertinence: 1, empathie: -1 },
            feedback:
              "L'équité d'information est respectée, mais un écrit sans accompagnement laisse chacun interpréter seul, et Sophie réagira émotionnellement sans personne pour cadrer.",
            next: "s2",
          },
          {
            id: "d",
            text: "Vous appelez Sophie en premier, parce qu'elle sera la plus difficile.",
            scores: { pertinence: -1, empathie: 0 },
            feedback:
              "L'intention est bonne, mais vous créez la même asymétrie d'information. Le traitement séquentiel est le problème, quel que soit l'ordre.",
            next: "s2",
          },
        ],
      },
      {
        id: "s2",
        speaker: "Sophie",
        situation:
          "En réunion : « 392 000 €, c'est 28 000 € en dessous. On a grandi ici. On ne va pas la brader. »",
        prompt: "Comment répondez-vous ?",
        bestPractice:
          "Reconnaître la dimension affective sans la traiter comme un argument de prix, puis rappeler les données objectives : estimation, marché, qualité du dossier.",
        choices: [
          {
            id: "a",
            text: "« La valeur affective n'entre pas dans le prix de marché. »",
            scores: { argumentation: 1, empathie: -3 },
            feedback:
              "C'est exact et c'est violent. Vous venez de dire à quelqu'un que ses souvenirs ne valent rien. Elle bloquera la vente.",
            next: "s3",
          },
          {
            id: "b",
            text: "« Ce que vous dites est important, et c'est vrai que c'est une maison de famille. Sur le prix, je dois vous donner les faits : mon estimation était de 385 000 à 400 000 €. Cette offre est dans la fourchette haute, avec un dossier solide et un calendrier maîtrisé. Le prix affiché à 420 000 € était au-dessus de mon analyse. »",
            scores: { empathie: 3, argumentation: 3, pertinence: 3 },
            feedback:
              "Vous accueillez la dimension affective sans la contredire, puis vous ramenez aux données. Les deux registres sont traités, chacun à sa place.",
            next: "s3",
          },
          {
            id: "c",
            text: "« Anne a besoin de son argent, il faut penser à elle aussi. »",
            scores: { pertinence: -2, empathie: -2 },
            feedback:
              "Vous opposez les indivisaires entre eux. Ce n'est pas votre rôle, et cela transforme une négociation en conflit familial.",
            next: "s3",
          },
          {
            id: "d",
            text: "« Si vous voulez, on refuse et on continue à chercher. »",
            scores: { conclusion: -2, argumentation: -1 },
            feedback:
              "Vous laissez la personne la plus émotive décider seule pour les trois, sans avoir exposé les conséquences.",
            next: "s3",
          },
        ],
      },
      {
        id: "s3",
        speaker: "Marc",
        situation:
          "« Moi je ne suis pas pressé. On peut attendre six mois de plus, ça ne me dérange pas. »",
        prompt: "Comment traitez-vous cette position ?",
        bestPractice:
          "Chiffrer objectivement le coût de l'attente pour l'indivision — charges, taxe foncière, entretien, risque de marché — sans prendre parti pour l'un des trois.",
        choices: [
          {
            id: "a",
            text: "« Anne, elle, est pressée. Il faut trouver un terrain d'entente. »",
            scores: { pertinence: 0, empathie: -1 },
            feedback:
              "Vous désignez un arbitrage entre personnes au lieu d'apporter des éléments objectifs. Vous vous placez en médiateur familial, ce qui n'est pas votre rôle.",
            next: "s4",
          },
          {
            id: "b",
            text: "« C'est un choix qui vous appartient. Je peux vous donner les éléments : attendre six mois représente environ 3 200 € de charges, taxe foncière et entretien pour l'indivision, sans garantie de meilleure offre. Ce candidat a un financement validé et aucun bien à vendre, ce qui est rare. Voilà les faits ; la décision est la vôtre. »",
            scores: { argumentation: 3, pertinence: 3, empathie: 2 },
            feedback:
              "Vous chiffrez le coût de l'attente, vous rappelez la qualité du dossier, et vous laissez la décision aux indivisaires. Neutre, factuel, utile.",
            next: "s4",
          },
          {
            id: "c",
            text: "« Six mois de plus, c'est risqué, le marché peut se retourner. »",
            scores: { argumentation: 0, pertinence: -1 },
            feedback:
              "Prédiction non documentée, qui ressemble à un argument de vente. Chiffrez ce que vous savez plutôt que de spéculer.",
            next: "s4",
          },
          {
            id: "d",
            text: "« Vous êtes trois, il faut l'unanimité. Sans accord, personne ne vend. »",
            scores: { pertinence: 1, empathie: -2 },
            feedback:
              "Exact juridiquement, mais présenté comme une menace. Cela crispe au lieu d'aider à décider.",
            next: "s4",
          },
        ],
      },
      {
        id: "s4",
        speaker: "Anne",
        situation:
          "« Moi je dis oui. Mais si Sophie bloque, on fait quoi ? On peut la racheter ? »",
        prompt: "Comment répondez-vous ?",
        bestPractice:
          "Rester dans son périmètre : le rachat de parts entre indivisaires relève du notaire. Proposer une contre-proposition commune comme voie de sortie sur le terrain de la vente.",
        choices: [
          {
            id: "a",
            text: "« Oui, c'est possible, il suffit de faire évaluer sa part et de la lui racheter. »",
            scores: { pertinence: -2, argumentation: -2 },
            feedback:
              "Vous vous prononcez sur une opération juridique et fiscale complexe qui n'est pas de votre ressort. Le notaire seul peut l'organiser.",
          },
          {
            id: "b",
            text: "« Le rachat de parts entre indivisaires existe, mais c'est une opération juridique et fiscale que seul votre notaire peut vous expliquer : je peux organiser un rendez-vous. Sur la vente elle-même, je vous propose autre chose : une contre-proposition commune à 402 000 €. Vous décidez ensemble, et cela vous laisse le temps de vous accorder sans perdre ce candidat. »",
            scores: { pertinence: 3, argumentation: 3, conclusion: 3 },
            feedback:
              "Vous restez dans votre périmètre sur la question juridique, vous orientez concrètement, et vous proposez une voie de sortie sur le terrain qui est le vôtre : la négociation.",
          },
          {
            id: "c",
            text: "« Il faut convaincre Sophie, c'est tout. »",
            scores: { pertinence: -2, empathie: -2 },
            feedback:
              "Vous vous rangez avec deux indivisaires contre le troisième. Vous perdez votre neutralité, et probablement le mandat.",
          },
          {
            id: "d",
            text: "« En cas de blocage, il existe des procédures judiciaires. »",
            scores: { pertinence: 0, empathie: -2 },
            feedback:
              "Techniquement exact, mais évoquer le contentieux à ce stade, dans une réunion familiale, est prématuré et destructeur.",
          },
        ],
      },
    ],
    debrief: [
      "Réunir tous les indivisaires en même temps : jamais d'annonce séquentielle.",
      "Accueillir la dimension affective sans la traiter comme un argument de prix.",
      "Chiffrer le coût de l'attente plutôt que de prédire le marché.",
      "Ne jamais prendre parti pour un indivisaire contre un autre.",
      "Le rachat de parts relève du notaire ; la contre-proposition commune relève de vous.",
    ],
  },
];

export const SCENARIO_MAP: Record<string, Scenario> = Object.fromEntries(
  SCENARIOS.map((s) => [s.id, s]),
);

export const AXIS_LABELS: Record<string, string> = {
  pertinence: "Pertinence",
  empathie: "Empathie",
  argumentation: "Argumentation",
  decouverte: "Découverte du besoin",
  conclusion: "Conclusion",
};
