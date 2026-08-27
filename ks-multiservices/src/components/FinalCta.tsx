import Link from "next/link";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";

/**
 * CTA final — la dernière chance de convertir.
 * Un seul message, deux gestes possibles, et un halo qui pulse doucement autour
 * du bouton d'appel (désactivé en mouvement réduit par la règle globale).
 */
export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-dark opacity-60" />
      <div
        aria-hidden="true"
        data-parallax="0.1"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,19,0.18) 0%, rgba(255,106,19,0.05) 40%, transparent 68%)",
        }}
      />

      <div className="container-page relative flex flex-col items-center text-center">
        <p data-reveal className="eyebrow text-[color:var(--text-on-dark-muted)]">
          <span className="text-[color:var(--color-signal)]">09</span>
          Urgence
        </p>

        <h2
          data-reveal
          data-reveal-delay="0.06"
          className="mt-6 max-w-4xl text-[clamp(2.1rem,6vw,4.2rem)] text-[color:var(--text-on-dark)]"
        >
          Votre problème ne peut pas attendre&nbsp;?
        </h2>

        <p
          data-reveal
          data-reveal-delay="0.12"
          className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[color:var(--text-on-dark-muted)] sm:text-lg"
        >
          Contactez KS Multiservices pour votre dépannage — serrurerie, plomberie ou
          vitrerie, au Havre et dans les alentours.
        </p>

        <div
          data-reveal
          data-reveal-delay="0.18"
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href={`tel:${business.phoneHref}`}
            className="btn btn-signal pulse-ring w-full px-9 py-5 text-lg sm:w-auto"
            data-cta="final-call"
          >
            <PhoneCall size={22} weight="fill" aria-hidden="true" />
            Appeler maintenant
          </a>
          <Link href="/#contact" className="btn btn-ghost-dark w-full px-9 py-5 text-lg sm:w-auto">
            Demander un devis
          </Link>
        </div>

        <p
          data-reveal
          data-reveal-delay="0.24"
          className="mt-8 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark-muted)]"
        >
          {business.phone} · {business.availabilityShort}
        </p>
      </div>
    </section>
  );
}
