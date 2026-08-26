"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processSteps } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-process-line]", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: scope.current, start: "top 70%", end: "bottom 80%", scrub: 0.6 },
        });
        gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((el, i) => {
          gsap.from(el, {
            x: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.05,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section id="intervention" ref={scope} className="bg-ink py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brass)]">
            Comment ça se passe
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Cinq étapes, du premier appel à la solution
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-[2rem_1fr] md:gap-x-8">
          <div className="relative hidden md:block">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-2 h-full w-px -translate-x-1/2 bg-[color:var(--color-border-dark)]"
            />
            <div
              data-process-line
              aria-hidden="true"
              className="absolute left-1/2 top-2 h-full w-px -translate-x-1/2 bg-[color:var(--color-brass)]"
            />
          </div>

          <ol className="flex flex-col gap-10 md:col-start-2 md:gap-14">
            {processSteps.map((item) => (
              <li key={item.step} data-process-step className="flex gap-5">
                <span className="font-display shrink-0 text-3xl font-semibold text-[color:var(--color-brass)] sm:text-4xl">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[color:var(--color-text-on-dark)] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[color:var(--color-text-on-dark-muted)] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
