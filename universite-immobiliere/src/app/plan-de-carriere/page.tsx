import type { Metadata } from "next";
import { CareerView } from "./CareerView";

export const metadata: Metadata = {
  title: "Plan de carrière",
  description: "Les dix étapes qui mènent de la découverte du métier à une activité installée.",
};

export default function PlanPage() {
  return <CareerView />;
}
