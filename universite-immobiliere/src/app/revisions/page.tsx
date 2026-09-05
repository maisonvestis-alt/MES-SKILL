import type { Metadata } from "next";
import { RevisionsView } from "./RevisionsView";

export const metadata: Metadata = {
  title: "Révisions",
  description: "Répétition espacée personnalisée à partir de vos erreurs.",
};

export default function RevisionsPage() {
  return <RevisionsView />;
}
