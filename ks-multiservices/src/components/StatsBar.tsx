"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { reviews } from "@/lib/content";

type Stat = {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { target: reviews.rating, decimals: 1, suffix: "/5", label: `${reviews.count} avis Google` },
  { target: 2022, suffix: "", label: "Depuis, +1000 clients" },
  { target: 45, prefix: "< ", suffix: " min", label: "Délai d'intervention" },
  { target: 24, suffix: "/7", label: "Jours fériés inclus" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? stat.target : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const duration = 900;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(stat.target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setValue(stat.target);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, stat.target]);

  const display = stat.decimals ? value.toFixed(stat.decimals) : Math.round(value).toString();

  return (
    <span ref={ref} className="tabular-figures">
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="border-y border-[color:var(--color-hairline)] bg-[color:var(--color-ink)]">
      <div className="container-page grid grid-cols-2 gap-px bg-[color:var(--color-hairline)] py-px sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[color:var(--color-ink)] px-4 py-8 text-center">
            <p className="font-mono text-3xl font-bold text-[color:var(--color-text-on-dark)] sm:text-4xl">
              <Counter stat={stat} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-[color:var(--color-steel)] sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
