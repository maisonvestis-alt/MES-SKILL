import type { Metadata } from "next";
import { SimulationsView } from "./SimulationsView";

export const metadata: Metadata = {
  title: "Simulations",
  description: "Scénarios clients réalistes, avec analyse de vos réponses sur cinq axes.",
};

export default function SimulationsPage() {
  return <SimulationsView />;
}
