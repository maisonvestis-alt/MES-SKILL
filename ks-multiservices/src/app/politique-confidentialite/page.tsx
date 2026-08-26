import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="contenu-principal" className="mx-auto max-w-3xl px-5 py-24 md:py-32">
      <Link href="/" className="text-sm font-medium text-[color:var(--color-brass-strong)]">
        ← Retour à l&apos;accueil
      </Link>
      <h1 className="font-display mt-6 text-3xl font-semibold">
        Politique de confidentialité
      </h1>

      <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        Cette politique décrit le traitement minimal actuellement en place (formulaire
        de contact). Elle doit être revue avec un conseil juridique si des outils
        d&apos;analyse d&apos;audience, de publicité ou un CRM sont ajoutés au site.
      </p>

      <section className="mt-10 space-y-8 text-[color:var(--color-text-on-light-muted)]">
        <div>
          <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
            Données collectées
          </h2>
          <p className="mt-2">
            Le formulaire de contact de ce site collecte votre nom, votre numéro de
            téléphone, le service concerné et le message que vous rédigez. Ces
            informations sont utilisées uniquement pour répondre à votre demande.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
            Destinataire
          </h2>
          <p className="mt-2">
            Les données transmises via le formulaire sont destinées exclusivement à
            {" "}
            {business.name} et ne sont partagées avec aucun tiers.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
            Vos droits
          </h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification et de suppression des données vous concernant. Pour exercer
            ce droit, contactez {business.name} au {business.phone}.
          </p>
        </div>
      </section>
    </main>
  );
}
