import Link from "next/link";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";

/**
 * Barre d'action mobile.
 * Sur smartphone, le geste attendu est unique : appeler. Le bouton reste donc
 * fixe au pouce, avec le devis en action secondaire.
 */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-[color:var(--line-dark)] bg-[color:var(--color-ink)]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={`tel:${business.phoneHref}`}
          className="btn btn-signal flex-1 py-3.5"
          aria-label={`Appeler KS Multiservices au ${business.phone}`}
          data-cta="mobile-bar-call"
        >
          <PhoneCall size={18} weight="fill" aria-hidden="true" />
          Appeler
        </a>
        <Link href="/#contact" className="btn btn-ghost-dark px-5 py-3.5">
          Devis
        </Link>
      </div>
    </div>
  );
}
