import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="contenu-principal" className="mx-auto max-w-3xl bg-[color:var(--color-ink)] px-5 pb-24 pt-32 md:pb-32 md:pt-40">
        <Link href="/" className="font-mono text-xs uppercase text-[color:var(--color-accent-strong)]">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="mt-6 font-display text-3xl font-extrabold uppercase text-[color:var(--color-text-on-dark)]">
          Politique de confidentialité
        </h1>

        <p className="mt-6 border border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] p-4 text-sm text-[color:var(--color-text-on-dark)]">
          Cette politique décrit le traitement minimal actuellement en place (formulaire
          de contact). Elle doit être revue avec un conseil juridique si des outils
          d&apos;analyse d&apos;audience, de publicité ou un CRM sont ajoutés au site.
        </p>

        <section className="mt-10 space-y-8 text-[color:var(--color-steel)]">
          <div>
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
              Données collectées
            </h2>
            <p className="mt-2">
              Le formulaire de contact de ce site collecte votre nom, votre numéro de
              téléphone, le type d&apos;urgence, votre commune et le message que vous
              rédigez. Ces informations sont utilisées uniquement pour répondre à votre
              demande.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
              Destinataire
            </h2>
            <p className="mt-2">
              Les données transmises via le formulaire sont destinées exclusivement à{" "}
              {business.name} et ne sont partagées avec aucun tiers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
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
      <Footer />
    </>
  );
}
