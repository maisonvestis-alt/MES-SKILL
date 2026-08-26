import { NextResponse } from "next/server";

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

  // TODO(intégration) : brancher un vrai canal de notification pour KS Multiservices
  // (email transactionnel, SMS, ou CRM) une fois l'adresse de contact confirmée par
  // le client — aucune adresse n'a été fournie, donc rien n'est envoyé pour l'instant.
  console.info("[contact] Nouvelle demande KS Multiservices:", {
    name: body.name,
    phone: body.phone,
    service: body.service,
    message: body.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
