"use client";

import { useId, useRef, useState } from "react";
import { CheckCircle, WarningCircle, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business, serviceCategories, renovationService } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const statusId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  return (
    <div className="rounded-3xl border border-[color:var(--color-border-dark)] bg-[color:var(--color-surface)] p-7 sm:p-9">
      <h3 className="font-display text-xl font-semibold text-[color:var(--color-text-on-dark)]">
        Demander un devis
      </h3>
      <p className="mt-2 text-sm text-[color:var(--color-text-on-dark-muted)]">
        Réponse rapide pendant nos horaires d&apos;intervention. Pour une urgence
        immédiate, appelez directement.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text-on-dark)]">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-[color:var(--color-border-dark)] bg-ink px-4 py-3 text-[color:var(--color-text-on-dark)] outline-none transition focus:border-[color:var(--color-brass)]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text-on-dark)]">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className="w-full rounded-xl border border-[color:var(--color-border-dark)] bg-ink px-4 py-3 text-[color:var(--color-text-on-dark)] outline-none transition focus:border-[color:var(--color-brass)]"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text-on-dark)]">
            Service concerné
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-xl border border-[color:var(--color-border-dark)] bg-ink px-4 py-3 text-[color:var(--color-text-on-dark)] outline-none transition focus:border-[color:var(--color-brass)]"
          >
            <option value="" disabled>
              Sélectionnez un service
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

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text-on-dark)]">
            Décrivez votre besoin
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full resize-none rounded-xl border border-[color:var(--color-border-dark)] bg-ink px-4 py-3 text-[color:var(--color-text-on-dark)] outline-none transition focus:border-[color:var(--color-brass)]"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--color-brass)] px-6 py-3.5 text-base font-semibold text-ink transition hover:bg-[color:var(--color-brass-strong)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>

        <div aria-live="polite" id={statusId}>
          {status === "success" && (
            <p className="flex items-center gap-2 rounded-xl bg-[color:var(--color-brass)]/10 px-4 py-3 text-sm text-[color:var(--color-brass)]">
              <CheckCircle size={18} weight="fill" aria-hidden="true" />
              Merci, votre demande a bien été transmise à KS Multiservices.
            </p>
          )}
          {status === "error" && errorMessage && (
            <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <WarningCircle size={18} weight="fill" aria-hidden="true" />
              {errorMessage}
            </p>
          )}
        </div>

        <a
          href={`tel:${business.phoneHref}`}
          className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[color:var(--color-text-on-dark-muted)] transition hover:text-[color:var(--color-brass)]"
        >
          <PhoneCall size={16} aria-hidden="true" />
          Ou appelez directement le {business.phone}
        </a>
      </form>
    </div>
  );
}
