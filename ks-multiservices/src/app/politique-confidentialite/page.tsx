import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="contenu-principal" className="hero-night min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-24 md:py-32">
        <Link
          href="/"
          className="font-mono-tech text-xs uppercase tracking-[0.14em] text-ember transition-colors hover:text-bone"
        >
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="mt-6 font-condensed text-[length:var(--fs-h2)] uppercase leading-[0.95] tracking-[0.01em] text-bone">
          Politique de confidentialité
        </h1>

        <p className="mt-6 rounded-xl border border-[color:rgba(255,90,31,0.35)] bg-[color:rgba(255,90,31,0.06)] p-4 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
          Cette politique décrit le traitement minimal actuellement en place (formulaire
          de contact). Elle devra être revue avec un conseil juridique si des outils
          d&apos;analyse d&apos;audience, de publicité ou un CRM sont ajoutés au site.
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Données collectées
            </h2>
            <p>
              Le formulaire de contact collecte votre nom, votre numéro de téléphone, le
              type d&apos;urgence et l&apos;adresse d&apos;intervention. Ces informations
              sont utilisées uniquement pour répondre à votre demande de dépannage.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Base légale et consentement
            </h2>
            <p>
              Le traitement repose sur votre consentement, recueilli via la case à cocher
              du formulaire, et sur l&apos;intérêt à répondre à votre sollicitation. Aucune
              donnée n&apos;est transmise sans cette démarche de votre part.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Destinataire
            </h2>
            <p>
              Les données transmises via le formulaire sont destinées exclusivement à{" "}
              {business.name} et ne sont partagées avec aucun tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression des données vous concernant. Pour exercer ces
              droits, contactez {business.name} au {business.phone}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
