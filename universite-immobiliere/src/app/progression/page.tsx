import type { Metadata } from "next";
import { ProgressionView } from "./ProgressionView";

export const metadata: Metadata = {
  title: "Progression",
  description: "Compétences maîtrisées, compétences à revoir, badges et statistiques.",
};

export default function ProgressionPage() {
  return <ProgressionView />;
}
