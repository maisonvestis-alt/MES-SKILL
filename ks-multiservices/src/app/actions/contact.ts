"use server";

import { Resend } from "resend";
import { business } from "@/lib/content";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const urgencyType = String(formData.get("urgencyType") ?? "").trim();
  const commune = String(formData.get("commune") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2 || phone.length < 6) {
    return {
      status: "error",
      message: "Merci d'indiquer votre nom et un numéro de téléphone valide.",
    };
  }

  console.info("[contact] Nouvelle demande KS Multiservices:", {
    name,
    phone,
    urgencyType,
    commune,
    message,
    receivedAt: new Date().toISOString(),
  });

  // Envoi email transactionnel via Resend (https://resend.com). Nécessite
  // RESEND_API_KEY en variable d'environnement — voir README. Sans clé
  // configurée, la demande reste journalisée côté serveur sans être transmise.
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "KS Multiservices <onboarding@resend.dev>",
        to: business.email,
        subject: `Nouvelle demande — ${urgencyType || "site web"} (${commune || "commune non précisée"})`,
        text: [
          `Nom : ${name}`,
          `Téléphone : ${phone}`,
          `Type d'urgence : ${urgencyType}`,
          `Commune : ${commune}`,
          "",
          "Message :",
          message,
        ].join("\n"),
      });
    } catch (err) {
      console.error("[contact] Échec de l'envoi email:", err);
    }
  }

  return { status: "success" };
}
