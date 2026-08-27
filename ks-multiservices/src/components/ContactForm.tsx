"use client";

import { useActionState } from "react";
import { CheckCircle, WarningCircle, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { submitContactForm, type ContactState } from "@/app/actions/contact";
import { business, serviceCategories, renovationService } from "@/lib/content";

const initialState: ContactState = { status: "idle" };

const inputClasses =
  "w-full border border-[color:var(--color-hairline)] bg-[color:var(--color-ink)] px-4 py-3 text-[color:var(--color-text-on-dark)] outline-none transition focus:border-[color:var(--color-accent)]";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <div className="border border-[color:var(--color-steel-line)] bg-[color:var(--color-ink-2)] p-7 sm:p-9">
      <h3 className="font-display text-xl font-bold uppercase text-[color:var(--color-text-on-dark)]">
        Demander un devis
      </h3>
      <p className="mt-2 text-sm text-[color:var(--color-steel)]">
        Réponse rapide pendant nos horaires d&apos;intervention. Pour une urgence
        immédiate, appelez directement.
      </p>

      <form action={formAction} className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Nom complet</Label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Téléphone</Label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={inputClasses} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="urgencyType">Type d&apos;urgence</Label>
          <select id="urgencyType" name="urgencyType" defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Sélectionnez un type d&apos;urgence
            </option>
            {serviceCategories.map((cat) => (
              <option key={cat.slug} value={cat.name}>
                {cat.name}
              </option>
            ))}
            <option value={renovationService.name}>{renovationService.name}</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="commune">Commune</Label>
          <input id="commune" name="commune" type="text" autoComplete="address-level2" className={inputClasses} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">Décrivez votre besoin</Label>
          <textarea id="message" name="message" rows={4} required className={`${inputClasses} resize-none`} />
        </div>

        <Button type="submit" disabled={isPending} className="mt-2 w-full justify-center">
          {isPending ? "Envoi en cours…" : "Envoyer ma demande"}
        </Button>

        <div aria-live="polite">
          {state.status === "success" && (
            <p className="flex items-center gap-2 bg-[color:var(--color-accent-soft)] px-4 py-3 text-sm text-[color:var(--color-accent-strong)]">
              <CheckCircle size={18} weight="fill" aria-hidden="true" />
              Merci, votre demande a bien été transmise à KS Multiservices.
            </p>
          )}
          {state.status === "error" && state.message && (
            <p role="alert" className="flex items-center gap-2 bg-red-950/40 px-4 py-3 text-sm text-red-300">
              <WarningCircle size={18} weight="fill" aria-hidden="true" />
              {state.message}
            </p>
          )}
        </div>

        <a
          href={`tel:${business.phoneHref}`}
          className="mt-1 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wide text-[color:var(--color-steel)] transition hover:text-[color:var(--color-accent)]"
        >
          <PhoneCall size={16} aria-hidden="true" />
          Ou appelez directement le {business.phone}
        </a>
      </form>
    </div>
  );
}
