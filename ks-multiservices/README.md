# KS Multiservices — Site premium

Site vitrine premium pour KS Multiservices (plomberie, serrurerie, vitrerie, Le
Havre), Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + GSAP.

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

Toutes les informations affichées (téléphone, adresse, horaires, services)
viennent de `src/lib/content.ts`. Ne jamais coder une donnée métier en dur
ailleurs dans les composants.

## À finaliser avant mise en ligne

Ces éléments n'ont volontairement **pas été inventés** (voir la consigne
"n'invente aucune information") et doivent être complétés :

1. **Réalisations** (`src/components/Gallery.tsx`, `src/lib/content.ts` →
   `galleryItems`) : les 3 photos de rénovation de salle de bain transmises
   n'ont pas pu être récupérées comme fichiers exploitables dans cette
   session. Ajoutez-les dans `public/gallery/` puis renseignez `src` pour
   chaque entrée — le composant bascule automatiquement de l'état "Ajout en
   cours" à la vraie photo.
2. **Mentions légales** (`src/app/mentions-legales/page.tsx`) : SIRET, forme
   juridique, directeur de publication et hébergeur sont marqués
   `à compléter`. Obligatoire légalement avant mise en ligne.
3. **Email de contact** : aucune adresse n'a été fournie. Le formulaire
   (`src/app/api/contact/route.ts`) journalise les demandes côté serveur mais
   ne les transmet à personne pour l'instant — brancher un envoi email/SMS/CRM
   réel dès que l'adresse est connue.
4. **Avis clients / chiffres** : aucun avis ni statistique réelle n'a été
   fourni, donc aucun n'est affiché. À ajouter dans `src/lib/content.ts` dès
   qu'ils sont disponibles (ne jamais en inventer).
5. Vérifier la zone d'intervention exacte (communes précises autour du Havre)
   si elle doit être plus détaillée que "Le Havre et son agglomération".

## Direction artistique

Base graphite/encre + accent laiton brossé (plutôt que le bleu/orange
générique proposé par défaut), typographie Fraunces (titres) / Inter (corps).
Détails dans `src/app/globals.css`.
