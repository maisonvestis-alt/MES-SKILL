import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";

/**
 * Barre d'appel fixe en bas d'écran sur mobile — le geste principal pour un
 * trafic d'urgence, souvent nocturne. tel: cliquable, cible tactile large,
 * respect de la zone sûre (encoche / barre home).
 */
export default function MobileCallButton() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 px-4 pt-3 sm:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={`tel:${business.phoneHref}`}
        aria-label={`Appeler KS Multiservices au ${business.phone}`}
        className="flex min-h-[54px] items-center justify-center gap-2.5 rounded-full bg-ember px-6 text-base font-semibold text-void shadow-[0_18px_44px_-14px_rgba(0,0,0,0.8)]"
      >
        <PhoneCall size={19} weight="fill" aria-hidden="true" />
        Appeler — {business.phone}
      </a>
    </div>
  );
}
