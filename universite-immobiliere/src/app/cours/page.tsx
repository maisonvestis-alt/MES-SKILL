import type { Metadata } from "next";
import { CatalogView } from "./CatalogView";

export const metadata: Metadata = {
  title: "Cours",
  description: "Le parcours complet, du niveau 0 à l'expertise terrain.",
};

export default function CoursPage() {
  return <CatalogView />;
}
