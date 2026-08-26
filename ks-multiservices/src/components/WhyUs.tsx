"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { differentiators } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-why-item]").forEach((el, i) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.07,
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section id="pourquoi-nous" ref={scope} className="bg-paper-2 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent-strong)]">
            Pourquoi KS Multiservices
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-text-on-light)] sm:text-4xl">
            Ce que vous gagnez à nous appeler
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--color-border-light)] bg-[color:var(--color-border-light)] sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} data-why-item className="bg-paper p-8">
              <h3 className="font-display text-lg font-semibold text-[color:var(--color-text-on-light)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text-on-light-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
