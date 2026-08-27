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

## Envoi des demandes de devis par email

Le formulaire de contact (`src/app/api/contact/route.ts`) envoie chaque
demande par email à `ksmultiservice.contact@gmail.fr` via
[Resend](https://resend.com). Variables d'environnement à configurer sur
l'hébergement avant mise en ligne :

- `RESEND_API_KEY` — clé API Resend (créer un compte, vérifier un domaine
  d'envoi ou utiliser le domaine de test `resend.dev` en attendant).
- `CONTACT_FROM_EMAIL` (optionnel) — adresse d'expédition affichée, par
  défaut `KS Multiservices <onboarding@resend.dev>`. À remplacer par une
  adresse `@ksmultiservices.fr` une fois un domaine vérifié dans Resend.

Sans `RESEND_API_KEY` configurée, chaque demande reste journalisée côté
serveur (logs) mais n'est pas transmise par email.

## À finaliser avant mise en ligne

Ces éléments n'ont volontairement **pas été inventés** (voir la consigne
"n'invente aucune information") et doivent être complétés :

1. **Mentions légales** (`src/app/mentions-legales/page.tsx`) : SIRET, forme
   juridique, SIREN, code APE et TVA sont renseignés. Il manque encore le nom
   de l'**hébergeur** et le **directeur de la publication**, marqués
   `à compléter` — obligatoire légalement avant mise en ligne.
2. **Email de contact** : voir section ci-dessus — la clé `RESEND_API_KEY`
   doit être configurée sur l'environnement de production.
3. Vérifier que la liste de communes dans `src/lib/content.ts` →
   `serviceAreaGroups` (page `/zone-intervention`) correspond toujours à la
   zone réellement couverte.

## Direction artistique

Identité de marque réelle du logo : noir profond, orange KS, blanc et gris
métallique (plutôt que le bleu/orange générique proposé par défaut),
typographie Fraunces (titres) / Inter (corps). Détails dans
`src/app/globals.css`.
