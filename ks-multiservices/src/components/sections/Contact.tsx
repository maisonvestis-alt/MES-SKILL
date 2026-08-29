"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business, serviceCategories } from "@/lib/content";
import { Reveal } from "./Reveal";
import Magnetic from "@/components/hero/Magnetic";

type Status = "idle" | "sending" | "ok" | "error";

const urgencyOptions = [
  ...serviceCategories.map((category) => category.name),
  "Rénovation salle de bain",
  "Autre demande",
];

const fieldClass =
  "min-h-[44px] w-full rounded-lg border border-[var(--line-void)] bg-[color:rgba(10,10,10,0.6)] px-4 py-3 text-sm text-bone placeholder:text-ash outline-none transition-colors duration-300 focus:border-[color:var(--color-ember)]";
const labelClass = "mb-2 block font-mono-tech text-[0.6rem] uppercase tracking-[0.22em] text-ash";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // L'API attend { name, phone, service, message } : l'adresse alimente `message`.
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      service: String(data.get("service") ?? ""),
      message: String(data.get("address") ?? "").trim(),
    };

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "L'envoi a échoué. Rappelez-nous directement.");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "L'envoi a échoué.");
    }
  }

  return (
    <section id="contact" className="relative border-t border-[var(--line-void)] py-[var(--section-py)]">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Colonne appel direct — chemin principal */}
        <div>
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono-tech text-[0.62rem] uppercase tracking-[0.3em] text-ash md:text-xs">
              <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
              Contact — {business.availability.split(",")[0].toLowerCase()}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-condensed text-[length:var(--fs-display)] uppercase leading-[0.86] tracking-[0.01em] text-bone">
              Une urgence ?
              <br />
              <span className="text-ember">Appelez.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-[length:var(--fs-lead)] leading-relaxed text-[color:var(--color-text-muted)]">
              Le plus rapide, c&apos;est le téléphone : on décroche jour et nuit. Le
              formulaire est là pour les demandes moins pressées.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Magnetic strength={0.35} className="mt-8 inline-block">
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex min-h-[44px] items-center gap-3 rounded-full bg-ember px-7 py-4 text-base font-semibold text-void shadow-[0_20px_50px_-18px_rgba(255,90,31,0.7)] transition-[background-color] duration-500 ease-[var(--ease-signature)] hover:bg-ember-glow"
              >
                <PhoneCall size={19} weight="fill" aria-hidden="true" />
                {business.phone}
              </a>
            </Magnetic>
          </Reveal>
          <Reveal delay={0.2}>
            <address className="mt-8 not-italic font-mono-tech text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-ash">
              {business.address.full}
            </address>
          </Reveal>
        </div>

        {/* Colonne formulaire — chemin secondaire, court */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--line-void)] bg-[color:rgba(14,14,15,0.5)] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Nom
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Votre nom" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Téléphone
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="06 00 00 00 00" className={fieldClass} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="service" className={labelClass}>
                Type d&apos;urgence
              </label>
              <select id="service" name="service" defaultValue={urgencyOptions[0]} className={fieldClass}>
                {urgencyOptions.map((option) => (
                  <option key={option} value={option} className="bg-void text-bone">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="address" className={labelClass}>
                Adresse d&apos;intervention
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                autoComplete="street-address"
                placeholder="N°, rue, commune"
                className={fieldClass}
              />
            </div>

            <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-[color:var(--color-text-faint)]">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--color-ember)]"
              />
              <span>
                J&apos;accepte que ces informations soient utilisées pour être recontacté
                au sujet de ma demande.{" "}
                <Link href="/politique-confidentialite" className="text-bone underline underline-offset-2 hover:text-ember">
                  Politique de confidentialité
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[var(--line-void-strong)] px-7 py-4 text-sm font-semibold text-bone transition-colors duration-500 ease-[var(--ease-signature)] hover:border-ember hover:text-ember disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
            </button>

            <p aria-live="polite" className="mt-4 min-h-5 text-center text-sm">
              {status === "ok" && (
                <span className="text-ember">Demande envoyée. Pour une urgence, appelez directement.</span>
              )}
              {status === "error" && <span className="text-[color:#ff8a6a]">{error}</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
