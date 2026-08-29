import type { Metadata } from "next";
import Link from "next/link";
import { business, legalInfo, pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

// Champ non fourni : jamais inventé, toujours signalé « à compléter ».
function Todo() {
  return (
    <span className="rounded border border-dashed border-[color:rgba(255,90,31,0.5)] px-1.5 py-0.5 font-mono-tech text-[0.72em] uppercase tracking-[0.1em] text-ember">
      à compléter
    </span>
  );
}

function Field({ label, value }: { label: string; value: string | null }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="text-ash">{label} :</span>
      {value ? <span className="text-bone">{value}</span> : <Todo />}
    </p>
  );
}

export default function MentionsLegalesPage() {
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
          Mentions légales
        </h1>

        <p className="mt-6 rounded-xl border border-[color:rgba(255,90,31,0.35)] bg-[color:rgba(255,90,31,0.06)] p-4 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
          Les champs marqués <Todo /> n&apos;ont pas encore été fournis (identité légale,
          assurances, hébergeur). Ils ne doivent jamais être inventés : merci de les
          transmettre pour finaliser cette page avant mise en ligne.
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Éditeur du site
            </h2>
            <div className="space-y-1.5">
              <p className="text-bone">{business.name}</p>
              <p>{business.address.full}</p>
              <Field label="Téléphone" value={business.phone} />
              <Field label="Forme juridique" value={legalInfo.formeJuridique} />
              <Field label="Capital social" value={legalInfo.capital} />
              <Field label="SIRET" value={legalInfo.siret} />
              <Field label="RCS" value={legalInfo.rcs} />
              <Field label="Code APE / NAF" value={legalInfo.apeNaf} />
              <Field label="N° TVA intracommunautaire" value={legalInfo.tvaIntracommunautaire} />
              <Field label="Directeur de la publication" value={legalInfo.directeurPublication} />
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Assurances
            </h2>
            <div className="space-y-1.5">
              <Field label="Responsabilité civile professionnelle" value={legalInfo.assuranceRcPro} />
              <Field label="Assurance décennale (le cas échéant)" value={legalInfo.assuranceDecennale} />
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Prix, devis et rétractation
            </h2>
            <ul className="space-y-2.5">
              {pricing.legalNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Hébergement
            </h2>
            <Field label="Hébergeur" value={legalInfo.hebergeur} />
          </section>

          <section>
            <h2 className="mb-3 font-condensed text-2xl uppercase tracking-[0.02em] text-bone">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo) est
              la propriété de {business.name}, sauf mention contraire.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
