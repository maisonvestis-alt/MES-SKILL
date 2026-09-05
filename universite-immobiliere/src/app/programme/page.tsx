import type { Metadata } from "next";
import { ProgramsView } from "./ProgramsView";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Programmes guidés de 30, 90 et 180 jours, écran et terrain.",
};

export default function ProgrammePage() {
  return <ProgramsView />;
}
