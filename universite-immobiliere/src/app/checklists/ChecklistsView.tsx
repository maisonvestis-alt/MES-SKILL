"use client";

import { useState } from "react";
import { Badge, Button, Card, PageHeader, ProgressBar, cx } from "@/components/ui";
import { CHECKLISTS } from "@/content/checklists";
import { useProgress } from "@/lib/progress";

export function ChecklistsView() {
  const { state, dispatch, hydrated } = useProgress();
  const [openId, setOpenId] = useState<string>(CHECKLISTS[0]?.id ?? "");

  const current = CHECKLISTS.find((c) => c.id === openId) ?? CHECKLISTS[0];
  const checked = state.checklists[current.id] ?? {};
  const allItems = current.sections.flatMap((s) => s.items);
  const doneCount = allItems.filter((i) => checked[i.id]).length;

  return (
    <div className="animate-rise">
      <PageHeader
        eyebrow="Terrain"
        title="Checklists"
        description="Six listes de contrôle à dérouler en rendez-vous. Vos cases restent cochées sur cet appareil : vous pouvez commencer une checklist chez un client et la terminer au bureau."
      />

      <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1">
        {CHECKLISTS.map((c) => {
          const list = state.checklists[c.id] ?? {};
          const total = c.sections.flatMap((s) => s.items).length;
          const done = Object.values(list).filter(Boolean).length;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setOpenId(c.id)}
              className={cx(
                "shrink-0 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors",
                openId === c.id
                  ? "border-brand-500 bg-brand-900 text-ink-invert dark:bg-brand-200 dark:text-ink"
                  : "border-line hover:border-line-strong",
              )}
            >
              {c.title}
              {hydrated && done > 0 ? (
                <span className="ml-2 text-xs opacity-75 tabular-nums">
                  {done}/{total}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <Card className="mb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">{current.title}</h2>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">
              {current.purpose}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch({ type: "checklist-reset", listId: current.id })}
          >
            Tout décocher
          </Button>
        </div>
        <div className="mt-5">
          <ProgressBar
            value={allItems.length === 0 ? 0 : (doneCount / allItems.length) * 100}
            label={`${doneCount} / ${allItems.length} points contrôlés`}
            tone={doneCount === allItems.length ? "success" : "brand"}
          />
        </div>
      </Card>

      <div className="space-y-5">
        {current.sections.map((section) => {
          const sectionDone = section.items.filter((i) => checked[i.id]).length;
          return (
            <Card key={section.title}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-semibold">{section.title}</h3>
                <Badge tone={sectionDone === section.items.length ? "success" : "neutral"}>
                  {sectionDone}/{section.items.length}
                </Badge>
              </div>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <label
                      className={cx(
                        "flex cursor-pointer items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-surface-2",
                        checked[item.id] && "opacity-60",
                      )}
                    >
                      <input
                        type="checkbox"
                        className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--gold-500)]"
                        checked={Boolean(checked[item.id])}
                        onChange={(e) =>
                          dispatch({
                            type: "checklist",
                            listId: current.id,
                            itemId: item.id,
                            value: e.target.checked,
                          })
                        }
                      />
                      <span className="min-w-0">
                        <span
                          className={cx(
                            "block text-sm leading-relaxed",
                            checked[item.id] && "line-through",
                          )}
                        >
                          {item.label}
                        </span>
                        {item.hint ? (
                          <span className="mt-0.5 block text-xs text-ink-mute">{item.hint}</span>
                        ) : null}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
