import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_LESSONS, LESSON_MAP } from "@/content";
import { LessonView } from "./LessonView";

export function generateStaticParams() {
  return ALL_LESSONS.map((l) => ({ module: l.moduleId, lesson: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string; lesson: string }>;
}): Promise<Metadata> {
  const { lesson } = await params;
  const l = LESSON_MAP[lesson];
  if (!l) return { title: "Leçon introuvable" };
  return { title: l.title, description: l.summary };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ module: string; lesson: string }>;
}) {
  const { module: moduleId, lesson } = await params;
  const l = LESSON_MAP[lesson];
  if (!l || l.moduleId !== moduleId) notFound();
  return <LessonView lessonId={l.id} />;
}
