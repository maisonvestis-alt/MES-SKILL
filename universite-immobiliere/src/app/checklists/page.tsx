import type { Metadata } from "next";
import { ChecklistsView } from "./ChecklistsView";

export const metadata: Metadata = {
  title: "Checklists",
  description: "Les listes de contrôle du métier, cochables et sauvegardées.",
};

export default function ChecklistsPage() {
  return <ChecklistsView />;
}
