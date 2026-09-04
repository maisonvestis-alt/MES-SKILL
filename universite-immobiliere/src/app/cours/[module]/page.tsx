import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MODULES, MODULE_MAP } from "@/content";
import { ModuleView } from "./ModuleView";

export function generateStaticParams() {
  return MODULES.map((m) => ({ module: m.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string }>;
}): Promise<Metadata> {
  const { module: moduleId } = await params;
  const m = MODULE_MAP[moduleId];
  if (!m) return { title: "Module introuvable" };
  return { title: m.title, description: m.description };
}

export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: moduleId } = await params;
  const m = MODULE_MAP[moduleId];
  if (!m) notFound();
  return <ModuleView moduleId={m.id} />;
}
