import Link from "next/link";
import Image from "next/image";
import { PhoneCall, EnvelopeSimple, MapPin, ClockCountdown, CreditCard } from "@phosphor-icons/react/dist/ssr";
import { business, serviceCategories, paymentMethods, legalInfo } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-ink)] pb-28 pt-16 text-[color:var(--color-steel)] sm:pb-16">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden border border-[color:var(--color-steel-line)]">
              <Image src="/logo.jpg" alt="" width={36} height={36} className="h-full w-full object-cover" />
            </span>
            <p className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
              KS <span className="text-[color:var(--color-accent)]">·</span> Multiservices
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Plomberie, serrurerie et vitrerie au Havre — dépannage d&apos;urgence et
            travaux de rénovation.
          </p>
        </div>

        <div>
          <h5 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-steel)]">Services</h5>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {serviceCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#tarifs" className="text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-steel)]">Contact</h5>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a href={`tel:${business.phoneHref}`} className="inline-flex items-center gap-2 text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]">
                <PhoneCall size={16} aria-hidden="true" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]">
                <EnvelopeSimple size={16} aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-[color:var(--color-paper-dim)]">
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {business.address.full}
            </li>
            <li className="inline-flex items-start gap-2 text-[color:var(--color-paper-dim)]">
              <ClockCountdown size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {business.availability}
            </li>
            <li className="inline-flex items-start gap-2 text-[color:var(--color-paper-dim)]">
              <CreditCard size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              Paiement : {paymentMethods.join(", ")}
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-steel)]">Informations</h5>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/zone-intervention" className="text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]">
                Zone d&apos;intervention
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" className="text-[color:var(--color-paper-dim)] transition hover:text-[color:var(--color-accent)]">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-wrap justify-between gap-2 border-t border-[color:var(--color-hairline)] pt-6 font-mono text-xs">
        <span>© {year} {business.name} — SIRET {legalInfo.siret}</span>
        <span>SAS — Le Havre, France</span>
      </div>
    </footer>
  );
}
