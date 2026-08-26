import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";
import ContactForm from "./ContactForm";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
            Une urgence, un projet ?
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[color:var(--color-text-on-dark)] sm:text-4xl">
            Un seul geste : décrochez.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[color:var(--color-text-on-dark-muted)]">
            KS Multiservices répond {business.availability.toLowerCase()}. Pour une
            urgence, l&apos;appel reste le chemin le plus rapide vers une solution.
          </p>

          <a
            href={`tel:${business.phoneHref}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[color:var(--color-accent)] px-8 py-5 text-lg font-semibold text-ink shadow-[0_20px_45px_-18px_rgba(217,102,46,0.6)] transition hover:bg-[color:var(--color-accent-strong)]"
          >
            <PhoneCall size={22} weight="fill" aria-hidden="true" />
            {business.phone}
          </a>

          <p className="mt-4 text-sm text-[color:var(--color-text-on-dark-muted)]">
            {business.address.full}
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
