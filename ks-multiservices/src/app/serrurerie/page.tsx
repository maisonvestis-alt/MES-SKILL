import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getServiceCategory } from "@/lib/content";

const category = getServiceCategory("serrurerie");

export const metadata: Metadata = {
  title: "Serrurier au Havre — dépannage d'urgence 24h/24",
  description:
    "Porte claquée, serrure bloquée, sécurisation après effraction : KS Multiservices intervient en serrurerie au Havre et alentours, 24h/24 et 7j/7.",
  alternates: { canonical: "/serrurerie" },
  openGraph: {
    title: "Serrurier au Havre — KS Multiservices",
    description:
      "Ouverture de porte, changement de serrure, réparation après effraction au Havre et dans les environs.",
    url: "/serrurerie",
  },
};

export default function Page() {
  if (!category) notFound();
  return <ServicePage category={category} />;
}
