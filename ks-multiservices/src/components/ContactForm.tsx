"use client";

import { useRef, useState } from "react";
import { CheckCircle, PaperPlaneTilt, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { renovationService, serviceCategories } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-[10px] border border-[color:var(--line-light)] bg-white px-4 py-3.5 text-[0.95rem] text-[color:var(--text-on-light)] outline-none transition-colors placeholder:text-[color:var(--text-on-light-muted)]/70 focus:border-[color:var(--color-signal)]";
const labelClass =
  "mb-2 block font-display text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-on-light-muted)]";

/** Formulaire de devis — volontairement court : nom, téléphone, besoin. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    if (payload.name.trim().length < 2 || payload.phone.trim().length < 6) {
      setStatus("error");
      setErrorMessage("Merci d'indiquer votre nom et un numéro de téléphone valide.");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Une erreur est survenue. Appelez-nous directement.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue. Appelez-nous directement."
      );
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Votre besoin
        </label>
        <select id="service" name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Sélectionnez une prestation
          </option>
          {serviceCategories.map((category) => (
            <option key={category.slug} value={category.name}>
              {category.name}
            </option>
          ))}
          <option value={renovationService.name}>{renovationService.name}</option>
          <option value="Autre demande">Autre demande</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Décrivez la situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Ex. : porte claquée, je suis bloqué dehors, quartier Saint-François."
          className={`${field} resize-none`}
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn btn-signal w-full py-4">
        <PaperPlaneTilt size={18} weight="fill" aria-hidden="true" />
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <div aria-live="polite" className="min-h-0">
        {status === "success" && (
          <p className="flex items-start gap-2.5 rounded-[10px] bg-[color:var(--color-signal-soft)] px-4 py-3.5 text-[0.88rem] text-[color:var(--text-on-light)]">
            <CheckCircle
              size={18}
              weight="fill"
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[color:var(--color-signal-ink)]"
            />
            Votre demande est bien transmise à KS Multiservices. Pour une urgence
            immédiate, appelez-nous — c&apos;est plus rapide.
          </p>
        )}
        {status === "error" && errorMessage && (
          <p
            role="alert"
            className="flex items-start gap-2.5 rounded-[10px] bg-red-50 px-4 py-3.5 text-[0.88rem] text-red-800"
          >
            <WarningCircle size={18} weight="fill" aria-hidden="true" className="mt-0.5 shrink-0" />
            {errorMessage}
          </p>
        )}
      </div>

      <p className="text-[0.75rem] leading-relaxed text-[color:var(--text-on-light-muted)]">
        Les informations transmises servent uniquement à traiter votre demande. Voir la{" "}
        <a href="/politique-confidentialite" className="underline underline-offset-2">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}
