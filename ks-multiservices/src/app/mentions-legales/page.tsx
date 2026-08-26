import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/content";

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
      <Link href="/" className="text-sm font-medium text-[color:var(--color-brass-strong)]">
        ← Retour à l&apos;accueil
      </Link>
      <h1 className="font-display mt-6 text-3xl font-semibold">Mentions légales</h1>

      <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        Cette page contient des champs <Placeholder>à compléter</Placeholder> : les
        informations légales (SIRET, forme juridique, capital, hébergeur, directeur de
        la publication) n&apos;ont pas été fournies et ne doivent jamais être inventées.
        Merci de transmettre ces éléments pour finaliser la page avant mise en ligne.
      </p>

      <section className="mt-10 space-y-8 text-[color:var(--color-text-on-light-muted)]">
        <div>
          <h2 className="font-display text-xl font-semibold text-[color:var(--color-text-on-light)]">
            Éditeur du site
          </h2>
          <p className="mt-2">
            {business.name}
            <br />
            {business.address.full}
            <br />
            Téléphone : {business.phone}
            <br />
            Forme juridique : <Placeholder>à compléter</Placeholder>
            <br />
            SIRET : <Placeholder>à compléter</Placeholder>
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
