import { Clock, MapPin, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";
import ContactForm from "./ContactForm";

/** Section contact : l'appel d'abord, le formulaire pour ce qui peut attendre. */
export default function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <p data-reveal className="eyebrow text-[color:var(--text-on-light-muted)]">
            <span className="text-[color:var(--color-signal-ink)]">08</span>
            Contact
          </p>
          <h2
            data-reveal
            data-reveal-delay="0.06"
            className="mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] text-[color:var(--text-on-light)]"
          >
            Parlons de votre dépannage
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.12"
            className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-[color:var(--text-on-light-muted)]"
          >
            Pour une urgence, l&apos;appel reste le chemin le plus court. Pour un devis
            ou un projet de rénovation, le formulaire suffit.
          </p>

          <a
            href={`tel:${business.phoneHref}`}
            data-reveal
            data-reveal-delay="0.16"
            data-cta="contact-call"
            className="notch group mt-9 flex items-center gap-5 border border-[color:var(--line-light)] bg-[color:var(--color-mist)] p-6 transition-colors hover:border-[color:var(--color-signal)] hover:bg-[color:var(--color-signal-soft)]"
          >
            <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-signal)] p-3.5 text-[#1a0c02]">
              <PhoneCall size={22} weight="fill" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-light-muted)]">
                Ligne d&apos;urgence
              </span>
              <span className="mt-1 block font-display text-[1.5rem] font-extrabold tracking-[-0.02em] text-[color:var(--text-on-light)]">
                {business.phone}
              </span>
            </span>
          </a>

          <ul data-reveal data-reveal-delay="0.2" className="mt-8 flex flex-col gap-4">
            <li className="flex items-start gap-3 text-[0.92rem] text-[color:var(--text-on-light-muted)]">
              <Clock size={18} className="mt-0.5 shrink-0 text-[color:var(--color-signal-ink)]" aria-hidden="true" />
              {business.availability}
            </li>
            <li className="flex items-start gap-3 text-[0.92rem] text-[color:var(--text-on-light-muted)]">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[color:var(--color-signal-ink)]" aria-hidden="true" />
              {business.address.full}
            </li>
          </ul>
        </div>

        <div
          data-reveal
          data-reveal-delay="0.1"
          className="notch border border-[color:var(--line-light)] bg-[color:var(--color-mist)] p-7 sm:p-9"
        >
          <h3 className="text-[1.4rem] text-[color:var(--text-on-light)]">Demander un devis</h3>
          <p className="mt-2 text-[0.9rem] text-[color:var(--text-on-light-muted)]">
            Quelques lignes suffisent : nous rappelons pour préciser.
          </p>
          <div className="mt-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
