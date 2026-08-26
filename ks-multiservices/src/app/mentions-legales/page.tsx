import type { Metadata } from "next";
import Link from "next/link";
import { business, legalInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-900">
    {children}
  </span>
);

export default function MentionsLegalesPage() {
  return (
    <main id="contenu-principal" className="mx-auto max-w-3xl px-5 py-24 md:py-32">
      <Link href="/" className="text-sm font-medium text-[color:var(--color-accent-strong)]">
        ← Retour à l&apos;accueil
      </Link>
      <h1 className="font-display mt-6 text-3xl font-semibold">Mentions légales</h1>

      <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        Le nom de l&apos;hébergeur et le directeur de la publication sont marqués{" "}
        <Placeholder>à compléter</Placeholder> : ces informations n&apos;ont pas été
        fournies et ne doivent jamais être inventées. Merci de les transmettre pour
        finaliser la page avant mise en ligne.
      </p>

      <section className="mt-10 space-y-8 text-[color:var(--color-text-on-light-muted)]">
        <div>
          <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
            Éditeur du site
          </h2>
          <p className="mt-2">
            {legalInfo.raisonSociale}
            <br />
            {business.address.full}
            <br />
            Téléphone : {business.phone}
            <br />
            Email : {business.email}
            <br />
            Forme juridique : {legalInfo.formeJuridique}
            <br />
            SIREN : {legalInfo.siren}
            <br />
            SIRET (siège) : {legalInfo.siret}
            <br />
            Code APE/NAF : {legalInfo.apeCode} — {legalInfo.apeLabel}
            <br />
            N° TVA intracommunautaire : {legalInfo.tvaIntracommunautaire}
            <br />
            Date de création : {legalInfo.dateCreation}
            <br />
            Directeur de la publication : <Placeholder>à compléter</Placeholder>
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
            Hébergement
          </h2>
          <p className="mt-2">
            Nom de l&apos;hébergeur : <Placeholder>à compléter</Placeholder>
            <br />
            Adresse : <Placeholder>à compléter</Placeholder>
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo)
            est la propriété de {business.name}, sauf mention contraire.
          </p>
        </div>
      </section>
    </main>
  );
}
