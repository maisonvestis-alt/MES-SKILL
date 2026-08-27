import { trustStats } from "@/lib/content";

export default function StatsBar() {
  return (
    <div className="border-y border-[color:var(--color-border-light)] bg-paper-2">
      <div className="container-page grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-semibold text-[color:var(--color-accent-strong)] sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-[color:var(--color-text-on-light-muted)] sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
