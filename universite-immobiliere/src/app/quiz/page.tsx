import type { Metadata } from "next";
import { QuizView } from "./QuizView";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Quiz",
  description: "Entraînez-vous sur une compétence ou un module précis.",
};

export default function QuizPage() {
  return (
    <Suspense fallback={null}>
      <QuizView />
    </Suspense>
  );
}
