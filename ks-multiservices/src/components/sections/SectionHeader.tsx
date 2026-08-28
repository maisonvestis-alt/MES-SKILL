import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
};

/** En-tête de section homogène : yeux mono + titre Bebas très grand. */
export default function SectionHeader({ eyebrow, title, intro, className }: SectionHeaderProps) {
  return (
    <div className={className}>
      <Reveal>
        <p className="flex items-center gap-2.5 font-mono-tech text-[0.62rem] uppercase tracking-[0.3em] text-ash md:text-xs">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 max-w-4xl font-condensed text-[clamp(2.5rem,6.5vw,6rem)] uppercase leading-[0.92] tracking-[0.01em] text-bone [text-wrap:balance]">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:rgba(244,241,234,0.72)] md:text-lg">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
