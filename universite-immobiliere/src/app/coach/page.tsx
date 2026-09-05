import type { Metadata } from "next";
import { CoachView } from "./CoachView";

export const metadata: Metadata = {
  title: "Coach",
  description: "Un coach pédagogique qui vous interroge et vous fait travailler.",
};

export default function CoachPage() {
  return <CoachView />;
}
