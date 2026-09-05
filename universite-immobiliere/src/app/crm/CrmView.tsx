"use client";

import { useMemo, useState } from "react";
import {
  Badge,
  Button,
  Card,
  EmptyState,
  Field,
  PageHeader,
  cx,
  inputClass,
} from "@/components/ui";
import { useProgress, todayKey, type Contact, type ContactKind, type PipelineStatus } from "@/lib/progress";

const STATUSES: { id: PipelineStatus; label: string; tone: "neutral" | "brand" | "gold" | "success" | "danger" }[] = [
  { id: "nouveau", label: "Nouveau", tone: "neutral" },
  { id: "contacte", label: "Contacté", tone: "neutral" },
  { id: "rdv", label: "Rendez-vous", tone: "brand" },
  { id: "estimation", label: "Estimation", tone: "brand" },
  { id: "mandat", label: "Mandat", tone: "gold" },
  { id: "commercialisation", label: "Commercialisation", tone: "gold" },
  { id: "visite", label: "Visites", tone: "gold" },
  { id: "offre", label: "Offre", tone: "gold" },
  { id: "compromis", label: "Compromis", tone: "success" },
  { id: "vendu", label: "Vendu", tone: "success" },
  { id: "perdu", label: "Perdu", tone: "danger" },
];

const STATUS_MAP = Object.fromEntries(STATUSES.map((s) => [s.id, s]));

function emptyContact(kind: ContactKind): Contact {
  const now = new Date().toISOString();
  return {
    id: `c-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    kind,
    name: "",
    status: "nouveau",
    createdAt: now,
    updatedAt: now,
  };
}

function ContactForm({
  contact,
  onChange,
  onSave,
  onCancel,
  onDelete,
}: {
  contact: Contact;
  onChange: (c: Contact) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete?: () => void;
}) {
  const set = <K extends keyof Contact>(key: K, value: Contact[K]) =>
    onChange({ ...contact, [key]: value });

  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => set("kind", "vendeur")}
          className={cx(
            "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
            contact.kind === "vendeur"
              ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
              : "border-line",
          )}
        >
          Vendeur
        </button>
        <button
          type="button"
          onClick={() => set("kind", "acquereur")}
          className={cx(
            "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
            contact.kind === "acquereur"
              ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
              : "border-line",
          )}
        >
          Acquéreur
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom" htmlFor="c-name">
          <input id="c-name" className={inputClass} value={contact.name} onChange={(e) => set("name", e.target.value)} placeholder="M. et Mme Fabre" />
        </Field>
        <Field label="Téléphone" htmlFor="c-phone">
          <input id="c-phone" className={inputClass} value={contact.phone ?? ""} onChange={(e) => set("phone", e.target.value)} />
        </Field>
        <Field label="Courriel" htmlFor="c-email">
          <input id="c-email" className={inputClass} value={contact.email ?? ""} onChange={(e) => set("email", e.target.value)} />
        </Field>
        <Field label="Statut" htmlFor="c-status">
          <select
            id="c-status"
            className={inputClass}
            value={contact.status}
            onChange={(e) => set("status", e.target.value as PipelineStatus)}
          >
            {STATUSES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </Field>

        {contact.kind === "vendeur" ? (
          <>
            <Field label="Adresse du bien" htmlFor="c-address">
              <input id="c-address" className={inputClass} value={contact.address ?? ""} onChange={(e) => set("address", e.target.value)} />
            </Field>
            <Field label="Type de bien et surface" htmlFor="c-type">
              <input id="c-type" className={inputClass} value={contact.propertyType ?? ""} onChange={(e) => set("propertyType", e.target.value)} placeholder="T3 de 68 m², 3e avec ascenseur" />
            </Field>
            <Field label="Prix souhaité" htmlFor="c-price">
              <input id="c-price" className={inputClass} value={contact.priceWanted ?? ""} onChange={(e) => set("priceWanted", e.target.value)} />
            </Field>
            <Field label="Votre estimation" htmlFor="c-est">
              <input id="c-est" className={inputClass} value={contact.estimation ?? ""} onChange={(e) => set("estimation", e.target.value)} placeholder="268 000 à 279 000 €" />
            </Field>
            <Field label="Type de mandat" htmlFor="c-mandate">
              <input id="c-mandate" className={inputClass} value={contact.mandateType ?? ""} onChange={(e) => set("mandateType", e.target.value)} />
            </Field>
            <Field label="Motivation et échéance" htmlFor="c-motiv" hint="La donnée la plus utile de la fiche">
              <input id="c-motiv" className={inputClass} value={contact.motivation ?? ""} onChange={(e) => set("motivation", e.target.value)} placeholder="Séparation, doit vendre avant l'été" />
            </Field>
          </>
        ) : (
          <>
            <Field label="Budget maximum, frais compris" htmlFor="c-budget">
              <input id="c-budget" className={inputClass} value={contact.budget ?? ""} onChange={(e) => set("budget", e.target.value)} />
            </Field>
            <Field label="Apport et disponibilité" htmlFor="c-apport">
              <input id="c-apport" className={inputClass} value={contact.contribution ?? ""} onChange={(e) => set("contribution", e.target.value)} placeholder="60 000 €, dont 25 000 à venir" />
            </Field>
            <Field label="Financement" htmlFor="c-fin" hint="Banque vue ? Accord de principe ?">
              <input id="c-fin" className={inputClass} value={contact.financing ?? ""} onChange={(e) => set("financing", e.target.value)} />
            </Field>
            <Field label="Secteurs recherchés" htmlFor="c-sector">
              <input id="c-sector" className={inputClass} value={contact.sector ?? ""} onChange={(e) => set("sector", e.target.value)} />
            </Field>
            <Field label="Trois critères indispensables" htmlFor="c-criteria">
              <input id="c-criteria" className={inputClass} value={contact.criteria ?? ""} onChange={(e) => set("criteria", e.target.value)} placeholder="3 chambres, extérieur, sans travaux lourds" />
            </Field>
            <Field label="Biens visités et raisons de refus" htmlFor="c-visited">
              <input id="c-visited" className={inputClass} value={contact.visited ?? ""} onChange={(e) => set("visited", e.target.value)} />
            </Field>
          </>
        )}

        <Field label="Prochaine action" htmlFor="c-next" hint="Sans action datée, le contact se perd">
          <input id="c-next" className={inputClass} value={contact.nextAction ?? ""} onChange={(e) => set("nextAction", e.target.value)} placeholder="Rappeler pour proposer un point d'étape" />
        </Field>
        <Field label="Date de la prochaine action" htmlFor="c-date">
          <input id="c-date" type="date" className={inputClass} value={contact.nextActionDate ?? ""} onChange={(e) => set("nextActionDate", e.target.value)} />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Notes" htmlFor="c-notes">
          <textarea id="c-notes" rows={3} className={inputClass} value={contact.notes ?? ""} onChange={(e) => set("notes", e.target.value)} />
        </Field>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button variant="gold" onClick={onSave} disabled={!contact.name.trim()}>
          Enregistrer
        </Button>
        <Button variant="ghost" onClick={onCancel}>
          Annuler
        </Button>
        {onDelete ? (
          <Button variant="danger" className="sm:ml-auto" onClick={onDelete}>
            Supprimer
          </Button>
        ) : null}
      </div>
    </Card>
  );
}

export function CrmView() {
  const { state, dispatch, hydrated } = useProgress();
  const [draft, setDraft] = useState<Contact | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"tous" | ContactKind>("tous");
  const [statusFilter, setStatusFilter] = useState<PipelineStatus | "tous">("tous");

  const today = todayKey();

  const contacts = useMemo(() => {
    let list = state.contacts;
    if (filter !== "tous") list = list.filter((c) => c.kind === filter);
    if (statusFilter !== "tous") list = list.filter((c) => c.status === statusFilter);
    return [...list].sort((a, b) => {
      const da = a.nextActionDate ?? "9999";
      const db = b.nextActionDate ?? "9999";
      return da.localeCompare(db);
    });
  }, [state.contacts, filter, statusFilter]);

  const late = state.contacts.filter((c) => c.nextActionDate && c.nextActionDate <= today);
  const noAction = state.contacts.filter((c) => !c.nextActionDate);

  function save() {
    if (!draft) return;
    if (editingId) {
      dispatch({ type: "contact-update", id: editingId, patch: draft });
    } else {
      dispatch({ type: "contact-add", contact: draft });
    }
    setDraft(null);
    setEditingId(null);
  }

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Outil"
        title="Votre portefeuille"
        description="Un CRM pédagogique volontairement minimal. L'essentiel tient en trois champs : la situation, la prochaine action, et sa date. Vos fiches restent sur cet appareil, dans votre navigateur."
        actions={
          !draft ? (
            <>
              <Button variant="gold" onClick={() => setDraft(emptyContact("vendeur"))}>
                + Vendeur
              </Button>
              <Button variant="secondary" onClick={() => setDraft(emptyContact("acquereur"))}>
                + Acquéreur
              </Button>
            </>
          ) : null
        }
      />

      {draft ? (
        <div className="mb-6">
          <ContactForm
            contact={draft}
            onChange={setDraft}
            onSave={save}
            onCancel={() => {
              setDraft(null);
              setEditingId(null);
            }}
            onDelete={
              editingId
                ? () => {
                    dispatch({ type: "contact-delete", id: editingId });
                    setDraft(null);
                    setEditingId(null);
                  }
                : undefined
            }
          />
        </div>
      ) : null}

      {hydrated && state.contacts.length > 0 ? (
        <>
          <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="ui-card p-4">
              <p className="text-xs uppercase tracking-wide text-ink-mute">Contacts</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">{state.contacts.length}</p>
            </div>
            <div className="ui-card p-4">
              <p className="text-xs uppercase tracking-wide text-ink-mute">Vendeurs</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">
                {state.contacts.filter((c) => c.kind === "vendeur").length}
              </p>
            </div>
            <div className={cx("ui-card p-4", late.length > 0 && "border-warning/40 bg-warning-soft")}>
              <p className="text-xs uppercase tracking-wide text-ink-mute">Actions dues</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">{late.length}</p>
            </div>
            <div className={cx("ui-card p-4", noAction.length > 0 && "border-danger/30 bg-danger-soft")}>
              <p className="text-xs uppercase tracking-wide text-ink-mute">Sans action datée</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">{noAction.length}</p>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {(["tous", "vendeur", "acquereur"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cx(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  filter === f
                    ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                    : "border-line hover:border-line-strong",
                )}
              >
                {f === "tous" ? "Tous" : f === "vendeur" ? "Vendeurs" : "Acquéreurs"}
              </button>
            ))}
            <select
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as PipelineStatus | "tous")}
              aria-label="Filtrer par statut"
            >
              <option value="tous">Tous les statuts</option>
              {STATUSES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <ul className="space-y-3">
            {contacts.map((c) => {
              const isLate = c.nextActionDate && c.nextActionDate <= today;
              const status = STATUS_MAP[c.status];
              return (
                <li key={c.id}>
                  <Card
                    className={cx(
                      "cursor-pointer transition-shadow hover:shadow-md",
                      isLate && "border-warning/40",
                    )}
                    as="article"
                  >
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={() => {
                        setDraft(c);
                        setEditingId(c.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                            <Badge tone={c.kind === "vendeur" ? "brand" : "gold"}>
                              {c.kind === "vendeur" ? "Vendeur" : "Acquéreur"}
                            </Badge>
                            <Badge tone={status?.tone ?? "neutral"}>{status?.label}</Badge>
                          </div>
                          <p className="font-medium">{c.name}</p>
                          <p className="mt-0.5 text-sm text-ink-soft">
                            {c.kind === "vendeur"
                              ? [c.propertyType, c.address].filter(Boolean).join(" · ")
                              : [c.budget, c.sector].filter(Boolean).join(" · ")}
                          </p>
                          {c.motivation || c.criteria ? (
                            <p className="mt-1 text-xs text-ink-mute">
                              {c.motivation ?? c.criteria}
                            </p>
                          ) : null}
                        </div>
                        <div className="shrink-0 text-right">
                          {c.nextAction ? (
                            <>
                              <p className={cx("text-sm", isLate ? "font-medium text-warning" : "text-ink-soft")}>
                                {c.nextAction}
                              </p>
                              <p className="text-xs tabular-nums text-ink-mute">
                                {c.nextActionDate
                                  ? new Date(c.nextActionDate).toLocaleDateString("fr-FR")
                                  : "sans date"}
                              </p>
                            </>
                          ) : (
                            <p className="text-xs text-danger">Aucune action datée</p>
                          )}
                        </div>
                      </div>
                    </button>
                  </Card>
                </li>
              );
            })}
          </ul>

          {contacts.length === 0 ? (
            <Card>
              <p className="text-sm text-ink-soft">Aucun contact ne correspond à ce filtre.</p>
            </Card>
          ) : null}
        </>
      ) : hydrated && !draft ? (
        <EmptyState
          icon="📇"
          title="Votre portefeuille est vide"
          description="Créez votre première fiche. Trois champs suffisent pour commencer : le nom, la situation en une phrase, et la prochaine action avec sa date."
          action={
            <Button variant="gold" onClick={() => setDraft(emptyContact("vendeur"))}>
              Créer une fiche vendeur
            </Button>
          }
        />
      ) : null}
    </div>
  );
}
