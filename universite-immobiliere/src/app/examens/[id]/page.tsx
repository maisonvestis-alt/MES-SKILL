import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EXAMS, EXAM_MAP } from "@/content/exams";
import { ExamRunner } from "./ExamRunner";

export function generateStaticParams() {
  return EXAMS.map((e) => ({ id: e.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const exam = EXAM_MAP[id];
  return exam ? { title: exam.title, description: exam.description } : { title: "Examen" };
}

export default async function ExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!EXAM_MAP[id]) notFound();
  return <ExamRunner examId={id} />;
}
