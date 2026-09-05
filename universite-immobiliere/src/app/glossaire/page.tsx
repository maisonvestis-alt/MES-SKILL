import type { Metadata } from "next";
import { Suspense } from "react";
import { GlossaryView } from "./GlossaryView";

export const metadata: Metadata = {
  title: "Glossaire",
  description: "Le vocabulaire immobilier français, expliqué simplement puis professionnellement.",
};

export default function GlossairePage() {
  return (
    <Suspense fallback={null}>
      <GlossaryView />
    </Suspense>
  );
}
