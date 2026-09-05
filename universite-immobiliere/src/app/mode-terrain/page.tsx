import type { Metadata } from "next";
import { FieldModeView } from "./FieldModeView";

export const metadata: Metadata = {
  title: "Mode terrain",
  description: "Interface rapide, pensée pour le téléphone, devant un client.",
};

export default function ModeTerrainPage() {
  return <FieldModeView />;
}
