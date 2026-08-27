import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/content";

type ContactPayload = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

function isValidPayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 1 &&
    typeof d.phone === "string" &&
    d.phone.trim().length > 5 &&
    typeof d.service === "string" &&
    typeof d.message === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom, un téléphone et votre demande." },
      { status: 422 }
    );
  }

  console.info("[contact] Nouvelle demande KS Multiservices:", {
    name: body.name,
    phone: body.phone,
    service: body.service,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  // Envoi email transactionnel via Resend (https://resend.com). Nécessite RESEND_API_KEY
  // en variable d'environnement — voir README pour la configuration avant mise en ligne.
  // Sans clé configurée, la demande reste journalisée côté serveur (ci-dessus) sans être
  // transmise par email.
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "KS Multiservices <onboarding@resend.dev>",
        to: business.email,
        subject: `Nouvelle demande de devis — ${body.service || "site web"}`,
        text: [
          `Nom : ${body.name}`,
          `Téléphone : ${body.phone}`,
          `Service concerné : ${body.service}`,
          "",
          "Message :",
          body.message,
        ].join("\n"),
      });
    } catch (err) {
      console.error("[contact] Échec de l'envoi email:", err);
      // La demande reste journalisée ci-dessus même si l'email échoue : on ne bloque
      // pas l'utilisateur pour un problème d'intégration côté fournisseur d'email.
    }
  }

  return NextResponse.json({ ok: true });
}
