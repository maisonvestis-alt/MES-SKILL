import type { Metadata } from "next";
import { CrmView } from "./CrmView";

export const metadata: Metadata = {
  title: "Portefeuille",
  description: "Mini-CRM pédagogique : fiches vendeur et acquéreur, pipeline, relances.",
};

export default function CrmPage() {
  return <CrmView />;
}
