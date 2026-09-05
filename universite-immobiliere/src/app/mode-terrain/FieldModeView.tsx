"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cx, inputClass } from "@/components/ui";
import { CHECKLISTS } from "@/content/checklists";
import { FIELD_CARDS } from "@/content/field-cards";
import { GLOSSARY_MAP, searchGlossary } from "@/content/glossary";
import { useProgress } from "@/lib/progress";

type Tab = "fiches" | "checklists" | "calcul" | "glossaire" | "notes";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "fiches", label: "Fiches", icon: "▤" },
  { id: "checklists", label: "Checklist", icon: "▣" },
  { id: "calcul", label: "Calcul", icon: "∑" },
  { id: "glossaire", label: "Mot", icon: "⌕" },
  { id: "notes", label: "Notes", icon: "✎" },
];

const eur = (n: number) =>
  Number.isFinite(n) ? n.toLocaleString("fr-FR", { maximumFractionDigits: 0 }) : "—";

function QuickCalc() {
  const [prix, setPrix] = useState(285000);
  const [surface, setSurface] = useState(68);
  const [taux, setTaux] = useState(4);
  const [capital, setCapital] = useState(240000);
  const [tauxCredit, setTauxCredit] = useState(3.5);
  const [duree, setDuree] = useState(25);

  const m = useMemo(() => {
    const n = duree * 12;
    const t = tauxCredit / 100 / 12;
    if (n <= 0) return NaN;
    return t === 0 ? capital / n : (capital * t) / (1 - Math.pow(1 + t, -n));
  }, [capital, tauxCredit, duree]);

  return (
    <div className="space-y-4">
      <section className="rounded-xl border border-line bg-surface p-4">
        <p className="mb-3 text-sm font-semibold">Prix au m²</p>
        <div className="grid grid-cols-2 gap-3">
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            value={prix}
            onChange={(e) => setPrix(Number(e.target.value))}
            aria-label="Prix"
          />
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            value={surface}
            onChange={(e) => setSurface(Number(e.target.value))}
            aria-label="Surface"
          />
        </div>
        <p className="mt-3 font-display text-2xl font-semibold tabular-nums">
          {eur(prix / surface)} €/m²
        </p>
      </section>

      <section className="rounded-xl border border-line bg-surface p-4">
        <p className="mb-3 text-sm font-semibold">Honoraires et prix FAI</p>
        <div className="grid grid-cols-2 gap-3">
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            value={prix}
            onChange={(e) => setPrix(Number(e.target.value))}
            aria-label="Net vendeur"
          />
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            step={0.1}
            value={taux}
            onChange={(e) => setTaux(Number(e.target.value))}
            aria-label="Taux d'honoraires"
          />
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          Honoraires <strong className="text-ink">{eur((prix * taux) / 100)} €</strong> · Prix FAI{" "}
          <strong className="text-ink">{eur(prix + (prix * taux) / 100)} €</strong>
        </p>
      </section>

      <section className="rounded-xl border border-line bg-surface p-4">
        <p className="mb-3 text-sm font-semibold">Mensualité indicative</p>
        <div className="grid grid-cols-3 gap-2">
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            value={capital}
            onChange={(e) => setCapital(Number(e.target.value))}
            aria-label="Capital"
          />
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            step={0.05}
            value={tauxCredit}
            onChange={(e) => setTauxCredit(Number(e.target.value))}
            aria-label="Taux"
          />
          <input
            className={inputClass}
            type="number"
            inputMode="decimal"
            value={duree}
            onChange={(e) => setDuree(Number(e.target.value))}
            aria-label="Durée en années"
          />
        </div>
        <p className="mt-3 font-display text-2xl font-semibold tabular-nums">{eur(m)} €/mois</p>
        <p className="mt-1 text-xs text-ink-mute">
          Hors assurance. Ordre de grandeur pédagogique : seule une banque ou un courtier peut
          établir un plan de financement.
        </p>
      </section>

      <Link
        href="/calculatrices"
        className="block rounded-xl border border-line bg-surface p-4 text-sm font-medium"
      >
        Toutes les calculatrices, avec les formules →
      </Link>
    </div>
  );
}

export function FieldModeView() {
  const { state, dispatch } = useProgress();
  const [tab, setTab] = useState<Tab>("fiches");
  const [openCard, setOpenCard] = useState<string | null>(FIELD_CARDS[0]?.id ?? null);
  const [openList, setOpenList] = useState<string>(CHECKLISTS[0]?.id ?? "");
  const [glossQuery, setGlossQuery] = useState("");

  const glossResults = useMemo(
    () => (glossQuery ? searchGlossary(glossQuery, 12) : []),
    [glossQuery],
  );
  const currentList = CHECKLISTS.find((c) => c.id === openList) ?? CHECKLISTS[0];
  const checked = state.checklists[currentList.id] ?? {};

  return (
    <div className="min-h-dvh bg-canvas pb-24">
      <header className="sticky top-0 z-20 border-b border-line bg-brand-900 text-ink-invert">
        <div className="mx-auto flex h-14 max-w-3xl items-center gap-3 px-4">
          <Link
            href="/dashboard"
            className="grid h-9 w-9 place-items-center rounded-lg border border-current/25 text-sm"
            aria-label="Quitter le mode terrain"
          >
            ←
          </Link>
          <div className="min-w-0">
            <h1 className="text-sm font-semibold leading-tight text-ink-invert">Mode terrain</h1>
            <p className="text-[11px] opacity-70">Accès rapide devant un client</p>
          </div>
          <span aria-hidden className="ml-auto text-lg text-gold-300">
            ◉
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-5">
        {tab === "fiches" ? (
          <div className="space-y-3">
            {FIELD_CARDS.map((card) => {
              const open = openCard === card.id;
              return (
                <section key={card.id} className="overflow-hidden rounded-xl border border-line bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpenCard(open ? null : card.id)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                  >
                    <span>
                      <span className="block font-medium">{card.title}</span>
                      <span className="block text-xs text-ink-mute">{card.category}</span>
                    </span>
                    <span aria-hidden className="text-ink-mute">
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  {open ? (
                    <div className="border-t border-line px-4 py-4">
                      <ul className="space-y-2">
                        {card.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                            <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {card.questions?.length ? (
                        <div className="mt-4">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-mute">
                            Questions à poser
                          </p>
                          <ul className="space-y-1.5">
                            {card.questions.map((q, i) => (
                              <li
                                key={i}
                                className="rounded-lg bg-surface-2 px-3 py-2.5 text-sm leading-relaxed"
                              >
                                « {q} »
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {card.objections?.length ? (
                        <div className="mt-4 space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-ink-mute">
                            Objections et réponses
                          </p>
                          {card.objections.map((o, i) => (
                            <div key={i} className="rounded-lg border border-line">
                              <p className="border-b border-line bg-surface-3 px-3 py-2 text-sm font-medium">
                                « {o.objection} »
                              </p>
                              <p className="bg-success-soft px-3 py-2.5 text-sm leading-relaxed">
                                {o.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>
        ) : null}

        {tab === "checklists" ? (
          <div>
            <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
              {CHECKLISTS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setOpenList(c.id)}
                  className={cx(
                    "shrink-0 rounded-lg border px-3 py-2 text-sm font-medium",
                    openList === c.id
                      ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                      : "border-line bg-surface",
                  )}
                >
                  {c.title.replace("Checklist ", "")}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {currentList.sections.map((section) => (
                <section key={section.title} className="rounded-xl border border-line bg-surface p-4">
                  <p className="mb-3 text-sm font-semibold">{section.title}</p>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <label
                          className={cx(
                            "flex min-h-[44px] cursor-pointer items-start gap-3 rounded-lg px-1 py-2",
                            checked[item.id] && "opacity-55",
                          )}
                        >
                          <input
                            type="checkbox"
                            className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--gold-500)]"
                            checked={Boolean(checked[item.id])}
                            onChange={(e) =>
                              dispatch({
                                type: "checklist",
                                listId: currentList.id,
                                itemId: item.id,
                                value: e.target.checked,
                              })
                            }
                          />
                          <span
                            className={cx(
                              "text-sm leading-relaxed",
                              checked[item.id] && "line-through",
                            )}
                          >
                            {item.label}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        ) : null}

        {tab === "calcul" ? <QuickCalc /> : null}

        {tab === "glossaire" ? (
          <div>
            <input
              className={inputClass}
              placeholder="Un mot : carrez, tantièmes, séquestre…"
              value={glossQuery}
              onChange={(e) => setGlossQuery(e.target.value)}
              autoComplete="off"
              aria-label="Rechercher un terme"
            />
            <div className="mt-4 space-y-3">
              {glossResults.map((t) => (
                <section key={t.id} className="rounded-xl border border-line bg-surface p-4">
                  <p className="font-medium">{t.term}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.simple}</p>
                  {t.watchOut ? (
                    <p className="mt-2 rounded-lg bg-warning-soft px-3 py-2 text-xs leading-relaxed">
                      {t.watchOut}
                    </p>
                  ) : null}
                </section>
              ))}
              {glossQuery && glossResults.length === 0 ? (
                <p className="text-sm text-ink-soft">Aucun terme trouvé.</p>
              ) : null}
              {!glossQuery ? (
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="mb-2 text-sm font-semibold">Termes fréquents en rendez-vous</p>
                  <div className="flex flex-wrap gap-2">
                    {["surface-carrez", "tantiemes", "etat-date", "compromis", "delai-retractation", "sequestre", "dpe", "fonds-travaux", "net-vendeur"].map(
                      (id) => {
                        const t = GLOSSARY_MAP[id];
                        if (!t) return null;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setGlossQuery(t.term)}
                            className="rounded-full border border-line px-3 py-1.5 text-xs"
                          >
                            {t.term}
                          </button>
                        );
                      },
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {tab === "notes" ? (
          <div className="space-y-4">
            <section className="rounded-xl border border-line bg-surface p-4">
              <label htmlFor="terrain-notes" className="mb-2 block text-sm font-semibold">
                Notes de rendez-vous
              </label>
              <textarea
                id="terrain-notes"
                rows={14}
                className={inputClass}
                placeholder="Notez ici pendant le rendez-vous. Le texte est enregistré automatiquement sur cet appareil."
                value={state.notes["terrain"] ?? ""}
                onChange={(e) => dispatch({ type: "note", noteId: "terrain", value: e.target.value })}
              />
              <p className="mt-2 text-xs text-ink-mute">
                Enregistré automatiquement. Pensez à recopier vos notes dans la fiche du contact au
                retour, avec une prochaine action datée.
              </p>
            </section>
            <Link
              href="/crm"
              className="block rounded-xl border border-line bg-surface p-4 text-sm font-medium"
            >
              Ouvrir le portefeuille →
            </Link>
          </div>
        ) : null}
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
        aria-label="Navigation du mode terrain"
      >
        <ul className="mx-auto flex max-w-3xl">
          {TABS.map((t) => (
            <li key={t.id} className="flex-1">
              <button
                type="button"
                onClick={() => setTab(t.id)}
                aria-current={tab === t.id ? "page" : undefined}
                className={cx(
                  "flex min-h-[60px] w-full flex-col items-center justify-center gap-1 text-[11px] font-medium",
                  tab === t.id ? "text-brand-600 dark:text-brand-700" : "text-ink-mute",
                )}
              >
                <span aria-hidden className="text-lg leading-none">
                  {t.icon}
                </span>
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
