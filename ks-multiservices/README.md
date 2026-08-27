# KS Multiservices — Site premium

Site vitrine premium pour KS Multiservices (plomberie, serrurerie, vitrerie, Le
Havre), Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui +
Framer Motion + Lenis (smooth scroll).

## Démarrer en local

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run start
```

## Contenu réel — source unique de vérité

Toutes les informations affichées (téléphone, adresse, horaires, services,
tarifs, FAQ, villes desservies) viennent de `src/lib/content.ts`. Ne jamais
coder une donnée métier en dur ailleurs dans les composants.

## Vidéo hero et photos avant/après — à intégrer dès réception

Le client doit fournir :

- **Une vidéo hero** (MP4 + WebM, muette, 8-10s, < 2 Mo) : une fois reçue,
  déposer les fichiers dans `public/` et renseigner `heroMedia.videoMp4` /
  `heroMedia.videoWebm` dans `src/lib/content.ts`. Le composant `Hero.tsx`
  bascule automatiquement de l'image fixe vers la vidéo dès que ces champs
  sont renseignés — aucun changement de code nécessaire. Sur mobile,
  prévoir de garder l'image fixe si la vidéo pèse trop lourd (le brief
  demande explicitement pas de vidéo sur mobile).
- **Des photos avant/après** pour les chantiers de rénovation : une fois
  reçues, renseigner `beforeSrc` sur l'élément correspondant dans
  `galleryItems` (`src/lib/content.ts`). Le composant `Gallery.tsx` affiche
  alors automatiquement le slider comparatif (`BeforeAfterSlider.tsx`) à la
  place de la simple photo.

## Envoi des demandes de devis par email

Le formulaire de contact (`src/app/actions/contact.ts`, server action React)
envoie chaque demande par email à `ksmultiservice.contact@gmail.fr` via
[Resend](https://resend.com). Variables d'environnement à configurer sur
l'hébergement avant mise en ligne :

- `RESEND_API_KEY` — clé API Resend (créer un compte, vérifier un domaine
  d'envoi ou utiliser le domaine de test `resend.dev` en attendant).
- `CONTACT_FROM_EMAIL` (optionnel) — adresse d'expédition affichée, par
  défaut `KS Multiservices <onboarding@resend.dev>`. À remplacer par une
  adresse `@ksmultiservices.fr` une fois un domaine vérifié dans Resend.

Sans `RESEND_API_KEY` configurée, chaque demande reste journalisée côté
serveur (logs) mais n'est pas transmise par email.

## Pages villes (SEO local)

10 communes prioritaires ont une page dédiée avec un contenu réellement
différencié (`src/app/zone-intervention/[commune]/page.tsx`, données dans
`priorityCities`) : Le Havre, Sainte-Adresse, Montivilliers, Harfleur,
Gonfreville-l'Orcher, Octeville-sur-Mer, Fécamp, Honfleur, Bolbec, Yvetot.
Les autres communes couvertes restent listées sans page dédiée sur
`/zone-intervention`, pour éviter le contenu dupliqué.

## À finaliser avant mise en ligne

Ces éléments n'ont volontairement **pas été inventés** (voir la consigne
"n'invente aucune information") et doivent être complétés :

1. **Mentions légales** (`src/app/mentions-legales/page.tsx`) : SIRET, forme
   juridique, SIREN, code APE et TVA sont renseignés. Il manque encore le nom
   de l'**hébergeur** (adresse complète) et le **directeur de la
   publication**, marqués `à compléter` — obligatoire légalement avant mise
   en ligne. Aucune assurance professionnelle n'est mentionnée sur le site
   (non souscrite à ce jour) ; ajouter la mention dès qu'elle existe.
2. **Email de contact** : voir section ci-dessus — la clé `RESEND_API_KEY`
   doit être configurée sur l'environnement de production.
3. **Vidéo hero et photos avant/après** : voir section dédiée ci-dessus.
4. Vérifier que la liste de communes dans `src/lib/content.ts` →
   `serviceAreaGroups` (page `/zone-intervention`) correspond toujours à la
   zone réellement couverte.

## Direction artistique

Fusion de deux directions validées par le client : ossature éditoriale
premium (espace généreux, hairlines fines, grande typo condensée) + accents
techniques ponctuels (badges de statut, cadrages en équerre, lecture de
données en monospace). Palette imposée : noir profond `#0A0A0B`, blanc cassé
`#F5F5F4`, gris métallique `#8A9199`, orange KS `#D9662E` (couleur réelle du
logo). Typographies : Big Shoulders (titres) / Inter (corps) / Space Mono
(données, badges). Détails dans `src/app/globals.css`.

Identité volontairement sombre et assumée sur les deux thèmes système (pas de
bascule light/dark) : le noir profond fait partie de l'identité de marque,
pas d'un mode d'affichage.
