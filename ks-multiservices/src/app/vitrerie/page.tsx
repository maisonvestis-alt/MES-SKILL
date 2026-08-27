import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getServiceCategory } from "@/lib/content";

const category = getServiceCategory("vitrerie");

export const metadata: Metadata = {
  title: "Vitrier au Havre — dépannage d'urgence 24h/24",
  description:
    "Vitre cassée, double vitrage endommagé, fermeture provisoire après effraction : KS Multiservices intervient en vitrerie au Havre et alentours.",
  alternates: { canonical: "/vitrerie" },
  openGraph: {
    title: "Vitrier au Havre — KS Multiservices",
    description:
      "Remplacement de vitre cassée, double vitrage, mise en sécurité au Havre et dans les environs.",
    url: "/vitrerie",
  },
};

export default function Page() {
  if (!category) notFound();
  return <ServicePage category={category} />;
}
