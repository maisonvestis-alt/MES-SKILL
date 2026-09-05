# Université Immobilière

**De zéro à conseiller immobilier expert.**

Plateforme de formation interactive au métier de conseiller immobilier en France.
Elle s'adresse à une personne qui part de zéro : aucune notion n'est supposée
acquise, chaque terme est défini avant d'être employé.

## Ce que contient la plateforme

| | |
|---|---|
| Modules | 26, du niveau 0 (découvrir le métier) au niveau 25 (excellence professionnelle) |
| Leçons | 51, soit environ 13 h 30 de contenu |
| Questions de validation | 192, réparties par compétence et par sujet |
| Cas pratiques corrigés | 19 |
| Exercices rédactionnels | 8 |
| Termes de glossaire | 128, chacun expliqué deux fois |
| Simulations client | 11 scénarios interactifs notés sur cinq axes |
| Examens | 5 par cycle, 1 certification interne, 1 épreuve avancée |
| Calculatrices | 12, chacune avec sa formule expliquée |
| Checklists | 6 listes de contrôle, cochables et persistantes |
| Fiches terrain | 8, lisibles en dix secondes devant un client |
| Programmes guidés | 30, 90 et 180 jours |

## Principes pédagogiques

Chaque leçon suit la même structure :

1. **Objectifs** — ce que l'apprenant saura faire à la fin ;
2. **Définitions doubles** — « en clair », puis la formulation professionnelle,
   puis pourquoi la notion existe ;
3. **Contenu structuré** — tableaux comparatifs, étapes, dialogues commentés,
   objections avec leurs réponses, exemples immobiliers chiffrés ;
4. **À retenir** — 3 à 7 points ;
5. **Erreurs à éviter** — les fautes réellement commises sur le terrain ;
6. **Cas pratique** — une situation à traiter, avec correction commentée ;
7. **Quiz** — les erreurs alimentent automatiquement la révision espacée ;
8. **Sources et vérification** — liens vers Service-Public, Légifrance, l'ANIL,
   les Notaires de France, la CNIL, Géorisques, France Rénov'…

### Traitement des contenus réglementaires

Le droit et la fiscalité évoluent. Toute leçon dont le contenu en dépend porte
un indicateur `legalSensitive`, affiche la mention **« À vérifier selon la
réglementation en vigueur »**, indique sa date de dernière vérification et
renvoie vers des sources institutionnelles. Aucune règle n'est présentée comme
certaine lorsqu'elle ne l'est pas, et les seuils susceptibles d'avoir changé
(délais, taux, plafonds) sont systématiquement accompagnés d'un renvoi.

La certification finale est présentée partout comme une **certification de
progression pédagogique**, jamais comme un diplôme d'État, un titre
professionnel enregistré ou une autorisation d'exercer.

## Fonctionnalités

- **Tableau de bord** — progression, prochaine mission, compétences, objectifs
  de la semaine, série de jours travaillés.
- **Parcours de cours** — 5 cycles, 26 modules, lecteur de leçon avec notes
  personnelles et exercices sauvegardés.
- **Quiz** — filtrables par compétence, module et longueur ; tirage réparti
  entre les sujets pour éviter les répétitions.
- **Examens** — résultats détaillés par compétence, renvoi vers les leçons à
  retravailler.
- **Simulations client** — scénarios à choix multiples notés sur cinq axes
  (pertinence, empathie, argumentation, découverte, conclusion), avec débriefing
  détaillé et « ce qu'aurait fait un excellent conseiller ».
- **Révision espacée** — algorithme SM-2 simplifié ; une erreur programme la
  notion pour le lendemain, une réussite l'éloigne progressivement, une notion
  durablement maîtrisée sort du paquet.
- **Glossaire** — recherche instantanée tolérante aux accents, fiches liées
  entre elles, ajout au paquet de révision.
- **Calculatrices** — prix au m², surface pondérée, mensualité, capacité
  d'emprunt, frais d'acquisition, honoraires et net vendeur, écart de
  négociation, évolution de prix, rendement locatif, quote-part de travaux, coût
  réel de possession, taux d'endettement.
- **Checklists** — estimation, rendez-vous vendeur, qualification acquéreur,
  visite, vérification de mandat, suivi de transaction.
- **Portefeuille** — mini-CRM à dix statuts, avec la règle des trois champs
  obligatoires : situation, prochaine action, date de cette action.
- **Mode terrain** — interface plein écran optimisée pour le téléphone : fiches,
  checklists, calculs rapides, recherche de vocabulaire, notes.
- **Coach** — comprend les intentions (« interroge-moi sur… », « explique-moi… »,
  « guide-moi pour estimer », « fais-moi simuler… ») et répond exclusivement à
  partir du contenu vérifié de la plateforme. Il ne génère aucune réponse libre :
  sur une question juridique, une réponse improvisée serait dangereuse. Quand il
  ne sait pas, il le dit.
- **Plan de carrière** — dix étapes, chacune validée par une preuve concrète.
- **Programmes guidés** — chaque jour combine une leçon et une action de terrain.

## Confidentialité

Aucun compte, aucun serveur, aucune donnée transmise. La progression, les
réponses, les notes, les checklists et le portefeuille sont stockés localement
dans le navigateur (`localStorage`, clé `ui-universite-immobiliere-v1`). Les
paramètres permettent d'exporter et de restaurer une sauvegarde au format JSON.

## Stack technique

- Next.js 16 (App Router, rendu statique), React 19, TypeScript strict
- Tailwind CSS 4 avec jetons de conception en variables CSS (thèmes clair et
  sombre, trois tailles de texte)
- Aucune dépendance d'exécution au-delà de React et Next : pas de bibliothèque
  de composants, pas de client HTTP, pas de moteur d'animation

## Architecture

```
src/
  app/                     Routes (App Router)
    dashboard/             Tableau de bord
    cours/[module]/[lesson]/   Catalogue, module, lecteur de leçon
    quiz/ examens/ simulations/ revisions/    Moteurs d'évaluation
    glossaire/ calculatrices/ checklists/ crm/ mode-terrain/ coach/
    progression/ plan-de-carriere/ programme/ parametres/
  components/
    ui/                    Composants de base (carte, badge, jauge, encadré…)
    layout/                Barre latérale, châssis, recherche globale
    lesson/                Rendu des blocs de leçon, moteur de quiz
  content/
    modules/m00…m25        Un fichier par module
    glossary.ts scenarios.ts exams.ts checklists.ts
    field-cards.ts programs.ts calculators.ts
    index.ts               Registre et index dérivés
  lib/
    types.ts               Modèle de données pédagogique
    progress.tsx           État persistant (XP, badges, SRS, CRM, réglages)
    selectors.ts           Calculs de progression et de maîtrise
    coach.ts sampling.ts badges.ts skills.ts nav.ts
```

### Ajouter ou mettre à jour du contenu

Le contenu est **structuré, jamais écrit en HTML libre** : il peut donc être
parcouru, recherché, transformé en quiz, en fiches de révision et en cartes de
répétition espacée.

Pour ajouter un module : créer `src/content/modules/mXX-nom.ts` sur le modèle
d'un module existant, puis l'enregistrer dans `src/content/index.ts`. Le
catalogue, la recherche globale, les examens, la progression et les statistiques
s'actualisent automatiquement.

Pour mettre à jour une règle qui a changé : modifier la leçon concernée et
actualiser son champ `lastVerified`.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
```

Autres commandes :

```bash
npm run build      # build de production
npm run start      # servir le build
npm run lint       # ESLint
npm run typecheck  # TypeScript en mode strict
```

## Qualité vérifiée

- `tsc --noEmit` et `eslint` sans erreur ;
- build de production : 114 pages générées statiquement ;
- parcours utilisateur complet testé de bout en bout dans un navigateur
  (accueil, leçon, quiz, marquage, progression, coach, CRM, checklist,
  simulation, examen, thème sombre, recherche globale) ;
- contrastes conformes au niveau AA sur l'ensemble des pages, en thème clair
  comme en thème sombre ;
- structure de titres, libellés de formulaires, noms accessibles, langue du
  document et navigation clavier vérifiés ;
- aucun débordement horizontal, du mobile 390 px au desktop.

## Avertissement

Cette application est un **outil de formation**. Elle ne délivre ni diplôme
d'État, ni titre professionnel enregistré, ni autorisation d'exercer.
L'exercice de la profession en France est encadré par la loi n° 70-9 du
2 janvier 1970, dite loi Hoguet.

Les contenus juridiques, fiscaux et techniques sont pédagogiques et peuvent
évoluer. Sur toute question réglementaire, les sources officielles et les
professionnels compétents — notaire, expert-comptable, courtier, diagnostiqueur,
géomètre-expert, service urbanisme — priment sur cette plateforme.
