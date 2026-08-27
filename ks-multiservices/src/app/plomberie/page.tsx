import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getServiceCategory } from "@/lib/content";

const category = getServiceCategory("plomberie");

export const metadata: Metadata = {
  title: "Plombier au Havre — dépannage d'urgence 24h/24",
  description:
    "Fuite d'eau, canalisation ou WC bouchés, chauffe-eau en panne : KS Multiservices intervient en plomberie au Havre et alentours, 24h/24 et 7j/7.",
  alternates: { canonical: "/plomberie" },
  openGraph: {
    title: "Plombier au Havre — KS Multiservices",
    description:
      "Recherche et réparation de fuite, débouchage, dépannage chauffe-eau au Havre et dans les environs.",
    url: "/plomberie",
  },
};

export default function Page() {
  if (!category) notFound();
  return <ServicePage category={category} />;
}
