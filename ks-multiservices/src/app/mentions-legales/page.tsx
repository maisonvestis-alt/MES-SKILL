import type { Metadata } from "next";
import LegalShell, { LegalSection } from "@/components/LegalShell";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${business.name} — serrurerie, plomberie et vitrerie au Havre.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

/** Champ non fourni par l'entreprise : jamais inventé, toujours signalé. */
function Todo({ children = "à compléter" }: { children?: React.ReactNode }) {
  return (
    <span className="rounded bg-[color:var(--color-signal-soft)] px-1.5 py-0.5 font-mono text-[0.85em] text-[color:var(--color-signal-ink)]">
      {children}
    </span>
  );
}

export default function MentionsLegalesPage() {
  return (
    <LegalShell
      title="Mentions légales"
      notice={
        <>
          <strong className="font-semibold">Page à finaliser :</strong> les informations
          légales (forme juridique, SIRET, directeur de la publication, hébergeur)
          n&apos;ont pas été communiquées. Elles sont signalées ci-dessous plutôt
          qu&apos;inventées — merci de les transmettre avant la mise en ligne.
        </>
      }
    >
      <LegalSection heading="Éditeur du site">
        <p>
          {business.name}
          <br />
          {business.address.full}
          <br />
          Téléphone : {business.phone}
          <br />
          Forme juridique : <Todo />
          <br />
          SIRET : <Todo />
          <br />
          Directeur de la publication : <Todo />
        </p>
      </LegalSection>

      <LegalSection heading="Hébergement">
        <p>
          Hébergeur : <Todo />
          <br />
          Adresse : <Todo />
        </p>
      </LegalSection>

      <LegalSection heading="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo) est
          la propriété de {business.name}, sauf mention contraire. Toute reproduction
          sans autorisation est interdite.
        </p>
      </LegalSection>

      <LegalSection heading="Photographies">
        <p>
          Les visuels d&apos;interventions publiés sur ce site illustrent des
          réalisations de {business.name}. Tant que les photographies définitives ne
          sont pas fournies, des panneaux graphiques neutres sont affichés à leur
          place : aucune image de banque n&apos;est présentée comme un chantier réel.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
