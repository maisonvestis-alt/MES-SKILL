"use client";

import { useMemo, useState } from "react";
import { Badge, Callout, Card, PageHeader, cx, inputClass } from "@/components/ui";
import { CALCULATORS, CALC_CATEGORIES, type Calculator } from "@/content/calculators";

function CalculatorCard({ calc }: { calc: Calculator }) {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(calc.fields.map((f) => [f.id, f.initial ?? 0])),
  );
  const [showFormula, setShowFormula] = useState(false);

  const results = useMemo(() => {
    try {
      return calc.compute(values);
    } catch {
      return [];
    }
  }, [calc, values]);

  return (
    <Card>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="gold">{calc.category}</Badge>
      </div>
      <h2 className="font-display text-lg font-semibold">{calc.title}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{calc.purpose}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {calc.fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={`${calc.id}-${f.id}`} className="mb-1.5 block text-sm font-medium">
              {f.label}
              {f.unit ? <span className="ml-1 text-ink-mute">({f.unit})</span> : null}
            </label>
            <input
              id={`${calc.id}-${f.id}`}
              type="number"
              inputMode="decimal"
              step={f.step ?? 1}
              className={inputClass}
              value={Number.isFinite(values[f.id]) ? values[f.id] : ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.id]: e.target.value === "" ? NaN : Number(e.target.value) }))
              }
            />
            {f.hint ? <p className="mt-1 text-xs text-ink-mute">{f.hint}</p> : null}
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50 p-4 dark:bg-surface-3">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-mute">Résultat</p>
        <dl className="space-y-2.5">
          {results.map((r, i) => (
            <div key={i} className="flex flex-wrap items-baseline justify-between gap-2">
              <dt className={cx("text-sm", r.emphasis ? "font-medium text-ink" : "text-ink-soft")}>
                {r.label}
                {r.hint ? <span className="block text-xs text-ink-mute">{r.hint}</span> : null}
              </dt>
              <dd
                className={cx(
                  "tabular-nums",
                  r.emphasis ? "font-display text-xl font-semibold" : "text-sm text-ink-soft",
                )}
              >
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        type="button"
        onClick={() => setShowFormula((s) => !s)}
        className="mt-4 text-sm font-medium underline underline-offset-2 text-ink-soft hover:text-ink"
      >
        {showFormula ? "Masquer la formule" : "Voir la formule et son explication"}
      </button>

      {showFormula ? (
        <div className="mt-3 space-y-3">
          <p className="rounded-lg border border-line bg-surface-2 px-3.5 py-3 font-mono text-[13px] leading-relaxed">
            {calc.formula}
          </p>
          <p className="text-sm leading-relaxed text-ink-soft">{calc.explanation}</p>
        </div>
      ) : null}

      {calc.warning ? (
        <p className="mt-4 rounded-lg border border-warning/30 bg-warning-soft px-3 py-2 text-xs leading-relaxed text-ink-soft">
          <strong className="font-semibold text-warning">Attention.</strong> {calc.warning}
        </p>
      ) : null}
    </Card>
  );
}

export function CalculatorsView() {
  const [category, setCategory] = useState<string>("all");
  const visible = CALCULATORS.filter((c) => category === "all" || c.category === category);

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Outils"
        title="Calculatrices"
        description="Douze outils du quotidien. Chacun affiche la formule employée et l'explique : l'objectif n'est pas de vous donner un chiffre, c'est que vous sachiez d'où il vient et ce qu'il vaut."
      />

      <Callout variant="warning" title="Ce que ces outils ne sont pas">
        Ce sont des outils pédagogiques. Aucun ne remplace un notaire, une banque, un courtier ou un
        expert-comptable. Les taux, seuils et barèmes évoluent : vérifiez-les avant de présenter un
        résultat à un client.
      </Callout>

      <div className="my-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={cx(
            "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
            category === "all"
              ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
              : "border-line hover:border-line-strong",
          )}
        >
          Toutes
        </button>
        {CALC_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={cx(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              category === c
                ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                : "border-line hover:border-line-strong",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {visible.map((c) => (
          <CalculatorCard key={c.id} calc={c} />
        ))}
      </div>
    </div>
  );
}
