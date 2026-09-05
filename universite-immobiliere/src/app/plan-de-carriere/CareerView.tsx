"use client";

import Link from "next/link";
import { Badge, Card, PageHeader, ProgressBar, cx } from "@/components/ui";
import { MODULE_MAP } from "@/content";
import { useProgress } from "@/lib/progress";
import { moduleProgress } from "@/lib/selectors";

interface Stage {
  n: number;
  title: string;
  goal: string;
  detail: string;
  modules: string[];
  proof: string;
}

const STAGES: Stage[] = [
  {
    n: 1,
    title: "Découvrir le métier",
    goal: "Comprendre ce que fait réellement un conseiller immobilier",
    detail:
      "Savoir expliquer le métier à un inconnu, distinguer les statuts, connaître les intervenants d'une vente et le modèle économique.",
    modules: ["decouverte"],
    proof: "Vous savez répondre en deux minutes à « tu fais quoi de tes journées ? »",
  },
  {
    n: 2,
    title: "Apprendre les fondamentaux",
    goal: "Parler juste et lire un dossier",
    detail:
      "Surfaces, droits de propriété, copropriété, diagnostics, documents du bien, cadre juridique et lecture du marché.",
    modules: ["fondamentaux", "juridique", "marche"],
    proof: "Vous lisez un PV d'assemblée générale et vous en tirez trois informations utiles.",
  },
  {
    n: 3,
    title: "Maîtriser l'estimation",
    goal: "Construire une fourchette défendable",
    detail:
      "Visite d'estimation complète, recherche de comparables, ajustements, fourchette et présentation, y compris quand elle déçoit.",
    modules: ["estimation"],
    proof: "Vous produisez un avis de valeur écrit appuyé sur quatre ventes comparables ajustées.",
  },
  {
    n: 4,
    title: "Trouver des clients",
    goal: "Installer une prospection régulière",
    detail:
      "Choisir deux canaux, délimiter un secteur, conduire un appel de pige, construire un réseau de prescripteurs.",
    modules: ["prospection"],
    proof: "Vous tenez un rythme hebdomadaire de prospection depuis six semaines, chiffres à l'appui.",
  },
  {
    n: 5,
    title: "Obtenir un rendez-vous et conduire une découverte",
    goal: "Faire parler le client plutôt que se présenter",
    detail:
      "Préparation, questionnement ouvert, reformulation, qualification en cinq dimensions, suivi écrit.",
    modules: ["decouverte-client"],
    proof: "Vous sortez d'un rendez-vous avec trois informations que vous ne pouviez pas deviner.",
  },
  {
    n: 6,
    title: "Prendre des mandats",
    goal: "Faire signer sur des engagements, pas sur des promesses",
    detail:
      "Plan d'action écrit, présentation et défense des honoraires, traitement des objections, mécanisme de sortie.",
    modules: ["mandat"],
    proof: "Vous obtenez une exclusivité sans avoir promis ni délai ni prix de vente.",
  },
  {
    n: 7,
    title: "Commercialiser et faire visiter",
    goal: "Piloter au lieu d'attendre",
    detail:
      "Les quinze premiers jours, annonce, photographie, qualification des acquéreurs, conduite des visites, reporting hebdomadaire chiffré.",
    modules: ["commercialisation", "annonce", "photo", "visites", "acquereur"],
    proof: "Vous envoyez un compte rendu chiffré chaque vendredi, sur chacun de vos mandats.",
  },
  {
    n: 8,
    title: "Négocier",
    goal: "Faire aboutir un accord entre deux contraintes réelles",
    detail:
      "Position et intérêt, leviers hors prix, présentation d'une offre basse, contre-proposition, formalisation sous 24 heures.",
    modules: ["negociation"],
    proof: "Vous concluez un accord grâce à un levier autre que le prix.",
  },
  {
    n: 9,
    title: "Accompagner jusqu'à la signature",
    goal: "Sécuriser l'instruction",
    detail:
      "Financement, chronologie du notaire, cinq dates par dossier, technique du bâtiment, urbanisme, copropriété, fiscalité.",
    modules: ["financement", "transaction", "technique", "urbanisme", "copropriete", "fiscalite"],
    proof: "Vous détectez un dossier bancaire en retard avant que le notaire ne vous le signale.",
  },
  {
    n: 10,
    title: "Construire une véritable activité",
    goal: "Ne plus dépendre uniquement de la prospection froide",
    detail:
      "Psychologie commerciale, visibilité locale, organisation, portefeuille suivi, usage responsable de l'IA, comportements d'excellence et après-vente.",
    modules: ["psychologie", "branding", "organisation", "crm", "ia", "excellence"],
    proof: "Une part significative de vos mandats provient de recommandations et de votre portefeuille.",
  },
];

export function CareerView() {
  const { state, hydrated } = useProgress();

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Trajectoire"
        title="Plan de carrière"
        description="Dix étapes, dans l'ordre. Chacune s'appuie sur des modules précis du parcours et se valide par une preuve concrète — pas par un sentiment de maîtrise."
      />

      <ol className="relative space-y-5 border-l border-line pl-6 sm:pl-8">
        {STAGES.map((stage) => {
          const mods = stage.modules.map((id) => MODULE_MAP[id]).filter(Boolean);
          const done = hydrated
            ? mods.filter((m) => moduleProgress(state, m).completed).length
            : 0;
          const percent = mods.length === 0 ? 0 : (done / mods.length) * 100;
          const complete = done === mods.length && mods.length > 0;

          return (
            <li key={stage.n} className="relative">
              <span
                aria-hidden
                className={cx(
                  "absolute -left-[2.05rem] top-1 grid h-6 w-6 place-items-center rounded-full border-2 text-[11px] font-semibold sm:-left-[2.55rem]",
                  complete
                    ? "border-success bg-success text-white"
                    : percent > 0
                      ? "border-gold-400 bg-surface text-gold-600"
                      : "border-line-strong bg-surface text-ink-mute",
                )}
              >
                {complete ? "✓" : stage.n}
              </span>

              <Card className={cx(complete && "border-success/40")}>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge tone={complete ? "success" : "neutral"}>Étape {stage.n}</Badge>
                  {complete ? <Badge tone="success">Validée</Badge> : null}
                </div>
                <h2 className="font-display text-lg font-semibold">{stage.title}</h2>
                <p className="mt-1 text-sm font-medium text-gold-600">{stage.goal}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{stage.detail}</p>

                <p className="mt-3 rounded-lg border border-line bg-surface-2 px-3.5 py-2.5 text-sm leading-relaxed">
                  <strong className="font-semibold">Preuve de maîtrise :</strong> {stage.proof}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {mods.map((m) => (
                    <Link key={m.id} href={`/cours/${m.id}`}>
                      <Badge
                        tone={
                          hydrated && moduleProgress(state, m).completed ? "success" : "brand"
                        }
                      >
                        {m.icon} {m.title}
                      </Badge>
                    </Link>
                  ))}
                </div>

                <div className="mt-4">
                  <ProgressBar
                    value={percent}
                    label={`${done} / ${mods.length} module${mods.length > 1 ? "s" : ""}`}
                    size="sm"
                    tone={complete ? "success" : "brand"}
                  />
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
