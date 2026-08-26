import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/content";

export default function MobileCallButton() {
  return (
    <a
      href={`tel:${business.phoneHref}`}
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brass)] px-5 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)] sm:hidden"
      aria-label={`Appeler KS Multiservices au ${business.phone}`}
    >
      <PhoneCall size={18} weight="fill" aria-hidden="true" />
      Appeler maintenant
    </a>
  );
}
