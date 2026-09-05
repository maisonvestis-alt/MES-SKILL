import type { Metadata } from "next";
import { SettingsView } from "./SettingsView";

export const metadata: Metadata = {
  title: "Paramètres",
  description: "Profil, apparence, confort de lecture, données et sauvegarde.",
};

export default function ParametresPage() {
  return <SettingsView />;
}
