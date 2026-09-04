"use client";

import Link from "next/link";
import type { LessonBlock } from "@/lib/types";
import { GLOSSARY_MAP } from "@/content/glossary";
import { Callout, cx } from "@/components/ui";

function Term({ id }: { id: string }) {
  const t = GLOSSARY_MAP[id];
  if (!t) return null;
  return (
    <Link
      href={`/glossaire?terme=${t.id}`}
      className="group block rounded-lg border border-line bg-surface-2 p-3.5 transition-colors hover:border-gold-300"
    >
      <p className="text-sm font-semibold group-hover:text-gold-600">{t.term}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-soft">{t.simple}</p>
    </Link>
  );
}

export function BlockRenderer({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="prose-lesson space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h3 key={i} className="!mt-9 font-display text-xl font-semibold tracking-tight">
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p key={i} className="text-[15px]">
                {block.text}
              </p>
            );

          case "definition":
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-brand-200">
                <p className="border-b border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-semibold dark:bg-surface-3">
                  <span aria-hidden className="mr-2 text-gold-500">
                    §
                  </span>
                  {block.term}
                </p>
                <dl className="divide-y divide-line bg-surface">
                  <div className="px-4 py-3">
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                      En clair
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">{block.simple}</dd>
                  </div>
                  <div className="px-4 py-3">
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                      Formulation professionnelle
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{block.pro}</dd>
                  </div>
                  {block.why ? (
                    <div className="px-4 py-3">
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                        Pourquoi cela existe
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{block.why}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            );

          case "list":
            return (
              <div key={i}>
                {block.title ? (
                  <p className="mb-2 text-sm font-semibold">{block.title}</p>
                ) : null}
                {block.ordered ? (
                  <ol className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                        <span
                          aria-hidden
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-900 text-[11px] font-semibold text-ink-invert dark:bg-brand-200"
                        >
                          {j + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );

          case "callout":
            return (
              <Callout key={i} variant={block.variant} title={block.title}>
                {block.text}
              </Callout>
            );

          case "example":
            return (
              <div key={i} className="rounded-xl border-l-[3px] border-gold-400 bg-surface-2 p-4">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gold-600">
                  {block.title ?? "Exemple concret"}
                </p>
                <p className="text-sm leading-relaxed text-ink-soft">{block.text}</p>
              </div>
            );

          case "table":
            return (
              <figure key={i}>
                {block.title ? (
                  <figcaption className="mb-2 text-sm font-semibold">{block.title}</figcaption>
                ) : null}
                <div className="overflow-x-auto rounded-xl border border-line">
                  <table className="w-full min-w-[34rem] border-collapse text-sm">
                    <thead>
                      <tr className="bg-surface-3 text-left">
                        {block.head.map((h, j) => (
                          <th key={j} scope="col" className="px-3.5 py-2.5 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, j) => (
                        <tr key={j} className="border-t border-line align-top">
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className={cx(
                                "px-3.5 py-2.5 leading-relaxed",
                                k === 0 ? "font-medium" : "text-ink-soft",
                              )}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.note ? (
                  <p className="mt-2 text-xs italic text-ink-mute">{block.note}</p>
                ) : null}
              </figure>
            );

          case "steps":
            return (
              <div key={i}>
                {block.title ? <p className="mb-3 text-sm font-semibold">{block.title}</p> : null}
                <ol className="relative space-y-4 border-l border-line pl-6">
                  {block.items.map((step, j) => (
                    <li key={j} className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[1.9rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-gold-400 bg-surface"
                      />
                      <p className="text-sm font-semibold">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            );

          case "dialogue":
            return (
              <div key={i} className="rounded-xl border border-line bg-surface-2 p-4">
                {block.title ? (
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                    {block.title}
                  </p>
                ) : null}
                <div className="space-y-3">
                  {block.lines.map((line, j) => (
                    <div
                      key={j}
                      className={cx(
                        "rounded-lg border p-3",
                        line.tone === "good"
                          ? "border-success/30 bg-success-soft"
                          : line.tone === "bad"
                            ? "border-danger/30 bg-danger-soft"
                            : "border-line bg-surface",
                      )}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                        {line.speaker}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed">{line.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "compare":
            return (
              <div key={i}>
                {block.title ? <p className="mb-3 text-sm font-semibold">{block.title}</p> : null}
                <div className="grid gap-3 sm:grid-cols-2">
                  {[block.left, block.right].map((side, j) => (
                    <div
                      key={j}
                      className={cx(
                        "rounded-xl border p-4",
                        j === 0 ? "border-line bg-surface-2" : "border-brand-200 bg-brand-50 dark:bg-surface-3",
                      )}
                    >
                      <p className="mb-2 text-sm font-semibold">{side.title}</p>
                      <ul className="space-y-1.5">
                        {side.items.map((item, k) => (
                          <li key={k} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-mute" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "objection":
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-line">
                <p className="border-b border-line bg-surface-3 px-4 py-2.5 text-sm font-semibold">
                  <span aria-hidden className="mr-2">
                    💬
                  </span>
                  « {block.objection} »
                </p>
                <div className="space-y-3 bg-surface p-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                      Ce que le client dit vraiment
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{block.understand}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-mute">
                      Réponses possibles
                    </p>
                    <ul className="mt-1 space-y-2">
                      {block.answers.map((a, j) => (
                        <li key={j} className="rounded-lg bg-success-soft px-3 py-2 text-sm leading-relaxed">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {block.avoid ? (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-danger">
                        À ne pas faire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{block.avoid}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            );

          case "terms":
            return (
              <div key={i}>
                <p className="mb-2 text-sm font-semibold">{block.title ?? "Vocabulaire"}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {block.ids.map((id) => (
                    <Term key={id} id={id} />
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
