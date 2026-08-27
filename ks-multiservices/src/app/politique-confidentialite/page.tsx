import type { Metadata } from "next";
import LegalShell, { LegalSection } from "@/components/LegalShell";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Traitement des données personnelles sur le site ${business.name}.`,
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      notice={
        <>
          Cette politique décrit le traitement réellement en place aujourd&apos;hui : le
          formulaire de contact, et rien d&apos;autre. Elle devra être revue si des
          outils de mesure d&apos;audience, de publicité ou un CRM sont ajoutés.
        </>
      }
    >
      <LegalSection heading="Données collectées">
        <p>
          Le formulaire de contact collecte votre nom, votre numéro de téléphone, la
          prestation concernée et le message que vous rédigez. Ces informations servent
          uniquement à traiter votre demande d&apos;intervention ou de devis.
        </p>
      </LegalSection>

      <LegalSection heading="Destinataire">
        <p>
          Les données transmises sont destinées exclusivement à {business.name} et ne
          sont partagées avec aucun tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies et mesure d'audience">
        <p>
          Ce site ne dépose aucun cookie publicitaire et n&apos;intègre aucun service de
          suivi tiers. La carte de la zone d&apos;intervention est dessinée par le site
          lui-même, sans appel à un service de cartographie externe.
        </p>
      </LegalSection>

      <LegalSection heading="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression des données vous concernant. Pour l&apos;exercer,
          contactez {business.name} au {business.phone}.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
