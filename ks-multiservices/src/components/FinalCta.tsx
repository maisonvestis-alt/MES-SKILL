import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/content";
import ContactForm from "./ContactForm";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-[color:var(--color-ink-2)] py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow">Une urgence, un projet ?</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Un seul geste :
            <br />
            décrochez.
          </h2>
          <p className="mt-5 max-w-md text-[color:var(--color-steel)]">
            KS Multiservices répond {business.availability.toLowerCase()}. Pour une
            urgence, l&apos;appel reste le chemin le plus rapide vers une solution.
          </p>

          <a
            href={`tel:${business.phoneHref}`}
            className="mt-8 inline-flex items-center gap-3 bg-[color:var(--color-accent)] px-8 py-5 font-mono text-lg font-bold text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-accent-strong)]"
          >
            <PhoneCall size={22} weight="fill" aria-hidden="true" />
            {business.phone}
          </a>

          <p className="mt-4 text-sm text-[color:var(--color-steel)]">{business.address.full}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
