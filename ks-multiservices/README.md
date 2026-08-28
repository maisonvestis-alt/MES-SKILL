# KS Multiservices — site premium

Site vitrine pour **KS Multiservices** — dépannage d'urgence en serrurerie,
plomberie et vitrerie au Havre.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · GSAP + ScrollTrigger.

## Démarrer

```bash
npm install
npm run dev      # développement
npm run build    # build de production
npm run start    # sert le build
npm run lint
```

## Architecture

```
src/
  app/
    layout.tsx                     métadonnées globales, polices, JSON-LD LocalBusiness
    page.tsx                       page d'accueil (assemblage des sections)
    serrurerie|plomberie|vitrerie/ pages métier (SEO local, une URL par métier)
    mentions-legales/ politique-confidentialite/
    api/contact/route.ts           réception du formulaire de devis
    opengraph-image.tsx            image de partage générée (next/og)
    sitemap.ts robots.ts
  components/                      une section = un composant
  lib/
    content.ts                     ⭐ source unique de vérité du contenu
    motion.ts                      utilitaires de mouvement + script inline
```

**Les sections sont des Server Components.** Elles posent des attributs
`data-reveal` / `data-parallax` / `data-progress` sur leur markup ; un unique
composant client, `ScrollMotion`, câble toutes les animations de scroll. GSAP
n'est donc chargé qu'une fois et le HTML reste rendu côté serveur.

Composants clients : `ScrollMotion`, `IntroSequence`, `Header` (menu mobile),
`Gallery` (filtres + visionneuse), `ContactForm`.

## Contenu — source unique de vérité

Tout ce qui est affiché vient de `src/lib/content.ts` : coordonnées,
prestations, zone d'intervention, avis, galerie, navigation. **Ne jamais coder
une donnée métier en dur dans un composant.**

Règle tenue dans tout le projet : aucune information n'est inventée. Un champ
inconnu reste marqué comme à compléter plutôt que rempli d'une valeur
plausible.

## À finaliser avant la mise en ligne

| # | Quoi | Où |
|---|------|-----|
| 1 | **Avis clients** — les 3 avis sont des placeholders explicites. Les remplacer par de vrais témoignages, puis passer `testimonialsArePlaceholders` à `false` (le bandeau d'avertissement de la section disparaît alors). Aucune note n'est déclarée en schema.org tant que les avis ne sont pas réels. | `src/lib/content.ts` → `testimonials` |
| 2 | **Photos** — galerie avant/après et visuels métier. Déposer les fichiers dans `public/gallery/` et `public/services/`, puis renseigner `before` / `after` et `image`. Les panneaux graphiques actuels s'effacent automatiquement au profit des vraies photos, sans toucher au code. | `src/lib/content.ts` → `galleryItems`, `serviceCategories[].image` |
| 3 | **Mentions légales** — forme juridique, SIRET, directeur de la publication, hébergeur. Obligatoire légalement. | `src/app/mentions-legales/page.tsx` |
| 4 | **Destinataire du formulaire** — l'API valide et journalise la demande mais ne l'envoie à personne : brancher un email transactionnel, un SMS ou un CRM dès que l'adresse est connue. | `src/app/api/contact/route.ts` |
| 5 | **Zone d'intervention** — quartiers et communes sont des lieux réels du Havre et de son agglomération, à confirmer comme périmètre réellement desservi. Ajouter ou retirer une entrée met à jour la section, le schéma et les données structurées. | `src/lib/content.ts` → `serviceArea` |
| 6 | **Nom de domaine** — `siteUrl` sert de base aux URL canoniques, au sitemap et aux données structurées. | `src/lib/content.ts` → `siteUrl` |

## Déploiement

Le dépôt est lié au projet Vercel **ks-multiservices**, avec `ks-multiservices`
comme répertoire racine (le dépôt contient d'autres dossiers). Chaque poussée
sur une branche crée une prévisualisation dédiée ; la branche de production du
projet détermine ce qui est publié sur l'URL principale — à basculer sur la
branche retenue au moment de la mise en ligne.

## Direction artistique

« Signal sur acier » : base encre/anthracite (métal, sécurité, sérieux),
respiration en gris très clair, et un **unique accent orange signal** traité
comme une signalétique d'urgence — jamais en dégradé décoratif, toujours pour
désigner l'action. Contrastes francs, aucune ombre lourde : la hiérarchie vient
du filet, de l'espace et du poids typographique.

Typographie **Archivo** (titraille, micro-labels) / **Inter** (texte courant).
Tokens, boutons, coins coupés et textures : `src/app/globals.css`.

Motifs récurrents qui font tenir l'ensemble : le repère chiffré de section
(`01 — URGENCES`), le filet orange, le coin coupé (`.notch`), la grille
technique sur les fonds sombres, et le module « ligne d'urgence ».

## Animations

- **Introduction** (`IntroSequence`) : goupilles de barillet qui tombent,
  cylindre qui pivote, arc orange, rideau qui s'ouvre. ~1,4 s sur ordinateur,
  ~1 s sur mobile, une seule fois par session, bouton « Passer ».
  Un écran d'attente rendu côté serveur (`#ks-intro-shield`) couvre la page dès
  la première peinture pour éviter que le hero ne clignote avant l'hydratation.
- **Scroll** (`ScrollMotion`) : apparitions, parallaxe légère, rail de
  progression du processus, barre de lecture de l'en-tête.
- `prefers-reduced-motion` : l'introduction ne joue pas, rien n'est masqué,
  toutes les transitions sont neutralisées.
- Sans JavaScript : le contenu s'affiche normalement — les animations sont un
  supplément, jamais une condition d'affichage.

## SEO

- Une URL par métier (`/serrurerie`, `/plomberie`, `/vitrerie`) avec `title`,
  `description`, canonique et données structurées `Service` + `BreadcrumbList`.
- `HomeAndConstructionBusiness` (raison sociale, téléphone, adresse,
  disponibilité, catalogue de prestations, communes desservies) dans le layout.
- `sitemap.xml`, `robots.txt`, Open Graph et image de partage générée.
- Titres H1/H2/H3 hiérarchisés, une seule H1 par page.

## Accessibilité

Lien d'évitement, focus visible sur tous les éléments interactifs, menu et
visionneuse pilotables au clavier (Échap, flèches), `aria-live` sur le retour
du formulaire, cibles tactiles confortables, contrastes vérifiés sur fond clair
comme sur fond sombre.
