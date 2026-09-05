"use client";

import { useRef, useState } from "react";
import { Badge, Button, Callout, Card, CardTitle, Field, PageHeader, cx, inputClass } from "@/components/ui";
import { STORAGE_KEY, useProgress } from "@/lib/progress";
import { globalProgress } from "@/lib/selectors";

export function SettingsView() {
  const { state, dispatch, setSetting, exportJson, importJson, reset, hydrated } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const [importMessage, setImportMessage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const progress = hydrated ? globalProgress(state) : { done: 0, total: 0, percent: 0 };

  function download() {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `universite-immobiliere-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importJson(String(reader.result));
      setImportMessage(
        ok
          ? "Sauvegarde restaurée. Votre progression a été remplacée par le contenu du fichier."
          : "Le fichier n'a pas pu être lu. Vérifiez qu'il s'agit bien d'une sauvegarde exportée depuis cette application.",
      );
    };
    reader.readAsText(file);
  }

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Réglages"
        title="Paramètres"
        description="Votre profil, l'apparence de l'application, et la gestion de vos données."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardTitle>Profil</CardTitle>
          <div className="space-y-4">
            <Field label="Prénom" htmlFor="s-name">
              <input
                id="s-name"
                className={inputClass}
                value={state.profile.firstName}
                onChange={(e) => dispatch({ type: "profile", patch: { firstName: e.target.value } })}
              />
            </Field>
            <Field label="Secteur" htmlFor="s-city" hint="Sert d'exemple dans certains exercices.">
              <input
                id="s-city"
                className={inputClass}
                value={state.profile.city ?? ""}
                onChange={(e) => dispatch({ type: "profile", patch: { city: e.target.value } })}
              />
            </Field>
            <Field label="Votre objectif" htmlFor="s-goal">
              <input
                id="s-goal"
                className={inputClass}
                value={state.profile.goal}
                onChange={(e) => dispatch({ type: "profile", patch: { goal: e.target.value } })}
              />
            </Field>
          </div>
        </Card>

        <Card>
          <CardTitle>Apparence et confort</CardTitle>

          <p className="mb-2 text-sm font-medium">Thème</p>
          <div className="mb-5 flex flex-wrap gap-2">
            {(["light", "dark", "system"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSetting("theme", t)}
                className={cx(
                  "rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors",
                  state.settings.theme === t
                    ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                    : "border-line hover:border-line-strong",
                )}
              >
                {t === "light" ? "Clair" : t === "dark" ? "Sombre" : "Système"}
              </button>
            ))}
          </div>

          <p className="mb-2 text-sm font-medium">Taille du texte</p>
          <div className="mb-5 flex flex-wrap gap-2">
            {(["normal", "large", "xlarge"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setSetting("reading", r)}
                className={cx(
                  "rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors",
                  state.settings.reading === r
                    ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                    : "border-line hover:border-line-strong",
                )}
              >
                {r === "normal" ? "Normale" : r === "large" ? "Grande" : "Très grande"}
              </button>
            ))}
          </div>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--gold-500)]"
              checked={state.settings.expertMode}
              onChange={(e) => setSetting("expertMode", e.target.checked)}
            />
            <span>
              <span className="block text-sm font-medium">Mode expert</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">
                Débloque les simulations et l'épreuve avancée sans attendre la certification
                interne. Les questions y sont nettement plus difficiles.
              </span>
            </span>
          </label>
        </Card>

        <Card>
          <CardTitle hint={hydrated ? `${state.xp} XP` : undefined}>Vos données</CardTitle>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-soft">Leçons terminées</dt>
              <dd className="font-medium tabular-nums">
                {progress.done} / {progress.total}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-soft">Questions répondues</dt>
              <dd className="font-medium tabular-nums">{Object.keys(state.answers).length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-soft">Cartes de révision</dt>
              <dd className="font-medium tabular-nums">{Object.keys(state.srs).length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-soft">Contacts du portefeuille</dt>
              <dd className="font-medium tabular-nums">{state.contacts.length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-soft">Notes et exercices</dt>
              <dd className="font-medium tabular-nums">
                {Object.keys(state.notes).length + Object.keys(state.exercises).length}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant="secondary" onClick={download}>
              Exporter une sauvegarde
            </Button>
            <Button variant="ghost" onClick={() => fileRef.current?.click()}>
              Restaurer une sauvegarde
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              className="hidden"
              aria-label="Choisir un fichier de sauvegarde à restaurer"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
                e.target.value = "";
              }}
            />
          </div>
          {importMessage ? (
            <p className="mt-3 rounded-lg bg-surface-2 px-3 py-2 text-xs text-ink-soft">
              {importMessage}
            </p>
          ) : null}
        </Card>

        <Card className="border-danger/25">
          <CardTitle>Réinitialiser</CardTitle>
          <p className="text-sm leading-relaxed text-ink-soft">
            Efface définitivement votre progression, vos réponses, vos notes, vos checklists et
            votre portefeuille sur cet appareil. Cette action est irréversible : exportez une
            sauvegarde avant, si vous souhaitez pouvoir revenir en arrière.
          </p>
          {confirmReset ? (
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="danger"
                onClick={() => {
                  reset();
                  setConfirmReset(false);
                }}
              >
                Oui, tout effacer
              </Button>
              <Button variant="ghost" onClick={() => setConfirmReset(false)}>
                Annuler
              </Button>
            </div>
          ) : (
            <Button variant="danger" className="mt-4" onClick={() => setConfirmReset(true)}>
              Réinitialiser la progression
            </Button>
          )}
        </Card>
      </div>

      <div className="mt-8 space-y-4">
        <Callout variant="info" title="Où sont stockées vos données">
          Tout est enregistré localement dans votre navigateur, sous la clé{" "}
          <code className="rounded bg-surface-3 px-1 py-0.5 text-xs">{STORAGE_KEY}</code>. Rien
          n'est envoyé à un serveur, et aucun compte n'est requis. En contrepartie, vos données sont
          propres à cet appareil et à ce navigateur : utilisez l'export pour les transférer ou les
          conserver. Vider les données du site les effacerait.
        </Callout>

        <Callout variant="warning" title="Portée pédagogique de la plateforme">
          Cette application est un outil de formation. Elle ne délivre ni diplôme d'État, ni titre
          professionnel enregistré, ni autorisation d'exercer. Les contenus juridiques et fiscaux
          sont pédagogiques et peuvent évoluer : ils portent une mention de vérification et
          renvoient vers des sources officielles. Sur toute question réglementaire, la source
          officielle et les professionnels compétents — notaire, expert-comptable, courtier,
          service urbanisme — priment sur cette plateforme.
        </Callout>

        <div className="flex flex-wrap gap-2">
          <Badge tone="neutral">Version 1.0</Badge>
          <Badge tone="neutral">Contenu vérifié en 2026-09</Badge>
          <Badge tone="neutral">Données locales uniquement</Badge>
        </div>
      </div>
    </div>
  );
}
