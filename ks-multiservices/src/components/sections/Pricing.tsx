import { pricing } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

// Marqueur visuel honnête pour une valeur non encore fournie par le client.
function ToCommunicate() {
  return (
    <span className="rounded border border-dashed border-[color:rgba(255,90,31,0.5)] px-2 py-0.5 font-mono-tech text-[0.6rem] uppercase tracking-[0.14em] text-ember">
      à communiquer
    </span>
  );
}

const priceRows: { label: string; value: string | null }[] = [
  { label: "Taux horaire de main-d'œuvre (TTC)", value: pricing.hourlyRateTTC },
  { label: "Frais de déplacement (TTC)", value: pricing.calloutFeeTTC },
  { label: "Décompte du temps passé", value: pricing.timeAccounting },
  {
    label: "Devis",
    value:
      pricing.quote.isFree === null
        ? null
        : pricing.quote.isFree
          ? "Gratuit"
          : `Payant${pricing.quote.costIfPaid ? ` — ${pricing.quote.costIfPaid}` : ""}`,
  },
];

/**
 * Affichage des prix imposé aux prestataires de dépannage à domicile
 * (arrêté du 24 janvier 2017 — information accessible sur l'espace en ligne).
 * Aucune valeur inventée : les montants réels remplaceront « à communiquer ».
 */
export default function Pricing() {
  return (
    <section id="tarifs" className="relative border-t border-[var(--line-void)] py-[var(--section-py)]">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Tarifs & devis"
            title={
              <>
                Un cadre clair,
                <br />
                affiché.
              </>
            }
            intro="Comme l'exige la réglementation du dépannage à domicile, nos conditions de prix sont annoncées avant l'intervention — sans surprise."
          />
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <dl className="rounded-xl border border-[var(--line-void)] bg-[color:rgba(14,14,15,0.5)] p-6 md:p-8">
              {priceRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-4 py-4 ${
                    index > 0 ? "border-t border-[var(--line-void)]" : ""
                  }`}
                >
                  <dt className="text-sm text-[color:var(--color-text-muted)] md:text-base">
                    {row.label}
                  </dt>
                  <dd className="text-right text-sm text-bone md:text-base">
                    {row.value ?? <ToCommunicate />}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <RevealGroup stagger={0.08} className="mt-6 space-y-3">
            {pricing.legalNotes.map((note) => (
              <RevealItem key={note}>
                <p className="flex gap-3 text-xs leading-relaxed text-[color:var(--color-text-faint)] md:text-sm">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                  {note}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
