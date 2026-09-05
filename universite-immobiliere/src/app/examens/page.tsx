import type { Metadata } from "next";
import { ExamsView } from "./ExamsView";

export const metadata: Metadata = {
  title: "Examens",
  description: "Validation par cycle et certification interne de progression pédagogique.",
};

export default function ExamensPage() {
  return <ExamsView />;
}
