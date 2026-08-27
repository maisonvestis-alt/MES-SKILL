import Link from "next/link";
import { Clock, MapPin, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business, serviceArea, serviceCategories } from "@/lib/content";
import Logo from "./Logo";

const infoLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#interventions", label: "Nos interventions" },
  { href: "/#zone", label: "Zone d'intervention" },
  { href: "/#contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line-dark)] bg-[color:var(--color-ink)] pb-28 pt-16 sm:pb-16">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.8fr))]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-[0.92rem] leading-relaxed text-[color:var(--text-on-dark-muted)]">
              Dépannage d&apos;urgence et interventions en serrurerie, plomberie et
              vitrerie — {serviceArea.radiusLabel}.
            </p>
            <a
              href={`tel:${business.phoneHref}`}
              className="btn btn-signal mt-7 px-6 py-3.5"
              data-cta="footer-call"
            >
              <PhoneCall size={17} weight="fill" aria-hidden="true" />
              {business.phone}
            </a>
          </div>

          <div>
            <h2 className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark)]">
              Services
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="inline-block py-0.5 text-[0.92rem] text-[color:var(--text-on-dark-muted)] transition-colors hover:text-[color:var(--color-signal)]"
                  >
                    {category.trade} au Havre
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark)]">
              Informations
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {infoLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-0.5 text-[0.92rem] text-[color:var(--text-on-dark-muted)] transition-colors hover:text-[color:var(--color-signal)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-on-dark)]">
              Coordonnées
            </h2>
            <ul className="mt-5 flex flex-col gap-4 text-[0.92rem] text-[color:var(--text-on-dark-muted)]">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[color:var(--color-signal)]" aria-hidden="true" />
                {business.address.full}
              </li>
              <li className="flex items-start gap-3">
                <Clock size={17} className="mt-0.5 shrink-0 text-[color:var(--color-signal)]" aria-hidden="true" />
                {business.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[color:var(--line-dark)] pt-6 text-[0.78rem] text-[color:var(--text-on-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name} — Serrurerie · Plomberie · Vitrerie au Havre.
          </p>
          <p>{serviceArea.radiusLabel}</p>
        </div>
      </div>
    </footer>
  );
}
