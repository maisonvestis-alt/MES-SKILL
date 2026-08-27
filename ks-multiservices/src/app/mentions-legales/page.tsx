import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business, legalInfo, paymentMethods } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-[color:var(--color-accent-soft)] px-1.5 py-0.5 font-mono text-[0.85em] text-[color:var(--color-accent-strong)]">
    {children}
  </span>
);

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main id="contenu-principal" className="mx-auto max-w-3xl bg-[color:var(--color-ink)] px-5 pb-24 pt-32 md:pb-32 md:pt-40">
        <Link href="/" className="font-mono text-xs uppercase text-[color:var(--color-accent-strong)]">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="mt-6 font-display text-3xl font-extrabold uppercase text-[color:var(--color-text-on-dark)]">
          Mentions légales
        </h1>

        <p className="mt-6 border border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] p-4 text-sm text-[color:var(--color-text-on-dark)]">
          Le directeur de la publication et l&apos;adresse complète de l&apos;hébergeur
          sont marqués <Placeholder>à compléter</Placeholder> : ces informations
          n&apos;ont pas été fournies et ne doivent jamais être inventées. Merci de les
          transmettre pour finaliser la page avant mise en ligne.
        </p>

        <section className="mt-10 space-y-8 text-[color:var(--color-steel)]">
          <div>
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
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
              Moyens de paiement acceptés : {paymentMethods.join(", ")}
              <br />
              Directeur de la publication : <Placeholder>à compléter</Placeholder>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
              Hébergement
            </h2>
            <p className="mt-2">
              Nom de l&apos;hébergeur : Vercel Inc.
              <br />
              Adresse : <Placeholder>à compléter</Placeholder>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo)
              est la propriété de {business.name}, sauf mention contraire.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
