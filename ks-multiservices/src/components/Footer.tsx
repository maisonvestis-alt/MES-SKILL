import Link from "next/link";
import Image from "next/image";
import { PhoneCall, EnvelopeSimple, MapPin, ClockCountdown } from "@phosphor-icons/react/dist/ssr";
import { business, serviceCategories } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border-dark)] bg-ink pb-28 pt-16 text-[color:var(--color-text-on-dark-muted)] sm:pb-16">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image src="/logo.jpg" alt="" width={36} height={36} className="h-full w-full object-cover" />
            </span>
            <p className="font-display text-xl font-semibold text-[color:var(--color-text-on-dark)]">
              KS<span className="text-[color:var(--color-accent)]">.</span>Multiservices
            </p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Plomberie, serrurerie et vitrerie au Havre — dépannage d&apos;urgence et
            travaux de rénovation.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-on-dark)]">
            Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {serviceCategories.map((cat) => (
              <li key={cat.slug}>
                <Link href="/#services" className="transition hover:text-[color:var(--color-accent)]">
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#tarifs" className="transition hover:text-[color:var(--color-accent)]">
                Tarifs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-on-dark)]">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex items-center gap-2 transition hover:text-[color:var(--color-accent)]"
              >
                <PhoneCall size={16} aria-hidden="true" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 transition hover:text-[color:var(--color-accent)]"
              >
                <EnvelopeSimple size={16} aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {business.address.full}
            </li>
            <li className="inline-flex items-start gap-2">
              <ClockCountdown size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              {business.availability}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-on-dark)]">
            Informations
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/zone-intervention" className="transition hover:text-[color:var(--color-accent)]">
                Zone d&apos;intervention
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="transition hover:text-[color:var(--color-accent)]">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-confidentialite"
                className="transition hover:text-[color:var(--color-accent)]"
              >
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-[color:var(--color-border-dark)] pt-6 text-xs">
        © {year} {business.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
