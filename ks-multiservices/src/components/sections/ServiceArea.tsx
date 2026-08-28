import { MapPin, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";
import { Reveal } from "./Reveal";
import Magnetic from "@/components/hero/Magnetic";

/** Ancrage local : Le Havre et son agglomération. */
export default function ServiceArea() {
  return (
    <section id="zone" className="relative border-t border-[var(--line-void)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 items-end gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono-tech text-[0.62rem] uppercase tracking-[0.3em] text-ash md:text-xs">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
              Zone d&apos;intervention
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-condensed text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.86] tracking-[0.01em] text-bone">
              Le Havre
              <br />
              <span className="text-ember">et son agglomération.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono-tech text-[0.7rem] uppercase tracking-[0.18em] text-ash">
              <MapPin size={15} className="text-ember" aria-hidden="true" />
              49.4938° N — 0.1077° E
              <span aria-hidden="true">·</span>
              {business.address.postalCode}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-[var(--line-void)] bg-[color:rgba(14,14,15,0.5)] p-7">
              <p className="text-base leading-relaxed text-[color:rgba(244,241,234,0.78)]">
                {business.serviceArea.note}.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ash">{business.availability}.</p>
              <Magnetic strength={0.35} className="mt-7 inline-block">
                <a
                  href={`tel:${business.phoneHref}`}
                  className="inline-flex items-center gap-3 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-void shadow-[0_20px_50px_-18px_rgba(255,90,31,0.7)] transition-[background-color] duration-500 ease-[var(--ease-signature)] hover:bg-ember-glow"
                >
                  <PhoneCall size={17} weight="fill" aria-hidden="true" />
                  Vérifier ma commune — {business.phone}
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
