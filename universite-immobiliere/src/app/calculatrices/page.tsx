import type { Metadata } from "next";
import { Suspense } from "react";
import { CalculatorsView } from "./CalculatorsView";

export const metadata: Metadata = {
  title: "Calculatrices",
  description: "Outils de calcul du métier, avec la formule et son explication.",
};

export default function CalculatricesPage() {
  return (
    <Suspense fallback={null}>
      <CalculatorsView />
    </Suspense>
  );
}
