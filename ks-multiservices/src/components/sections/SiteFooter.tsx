import Link from "next/link";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";

const nav = [
  { href: "#services", label: "Interventions" },
  { href: "#process", label: "Déroulé" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#zone", label: "Zone" },
  { href: "#contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="hero-night border-t border-[var(--line-void)] pt-16 pb-32 md:py-20">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-condensed text-4xl uppercase leading-none tracking-[0.02em] text-bone md:text-5xl">
              {business.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
              Dépannage d&apos;urgence plomberie, serrurerie, vitrerie — {business.serviceArea.base}.
            </p>
            <a
              href={`tel:${business.phoneHref}`}
              className="mt-6 inline-flex items-center gap-2.5 font-condensed text-2xl uppercase tracking-[0.03em] text-bone transition-colors duration-500 hover:text-ember md:text-3xl"
            >
              <PhoneCall size={20} weight="fill" aria-hidden="true" />
              {business.phone}
            </a>
          </div>

          <nav aria-label="Pied de page" className="md:col-span-3 md:col-start-7">
            <p className="mb-4 font-mono-tech text-[0.6rem] uppercase tracking-[0.24em] text-ash">Naviguer</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[color:rgba(244,241,234,0.72)] transition-colors duration-300 hover:text-ember"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mb-4 font-mono-tech text-[0.6rem] uppercase tracking-[0.24em] text-ash">Coordonnées</p>
            <p className="text-sm leading-relaxed text-[color:rgba(244,241,234,0.72)]">
              {business.address.full}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ash">{business.availability}.</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--line-void)] pt-6 font-mono-tech text-[0.62rem] uppercase tracking-[0.14em] text-ash sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.name}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors duration-300 hover:text-bone">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="transition-colors duration-300 hover:text-bone">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
