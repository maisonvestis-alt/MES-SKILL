import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SCENARIOS, SCENARIO_MAP } from "@/content/scenarios";
import { ScenarioRunner } from "./ScenarioRunner";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const s = SCENARIO_MAP[id];
  return s ? { title: s.title, description: s.pitch } : { title: "Simulation" };
}

export default async function ScenarioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!SCENARIO_MAP[id]) notFound();
  return <ScenarioRunner scenarioId={id} />;
}
