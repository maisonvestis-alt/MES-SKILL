import type { Metadata } from "next";
import SmoothScroll from "@/components/hero/SmoothScroll";
import SiteHeader from "@/components/sections/SiteHeader";
import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Pricing from "@/components/sections/Pricing";
import ServiceArea from "@/components/sections/ServiceArea";
import Realisations from "@/components/sections/Realisations";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";
import MobileCallButton from "@/components/MobileCallButton";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, servicesJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dépannage urgence plomberie, serrurerie, vitrerie au Havre — 24h/24",
  description:
    "KS Multiservices : dépannage d'urgence plomberie, serrurerie et vitrerie au Havre et son agglomération, 24h/24 et 7j/7. Un seul numéro, devis avant intervention.",
  alternates: { canonical: "/" },
};

// Refonte "Nuit d'intervention" — landing dépannage urgence, direction sombre/orange.
export default function Home() {
  return (
    <SmoothScroll>
      <div className="hero-night">
        <SiteHeader />
        <main id="contenu-principal">
          <Hero />
          <Services />
          <Process />
          <WhyUs />
          <Pricing />
          <ServiceArea />
          <Realisations />
          <Faq />
          <Contact />
        </main>
        <SiteFooter />
        <MobileCallButton />
      </div>
      <JsonLd data={[...servicesJsonLd(), faqJsonLd()]} />
    </SmoothScroll>
  );
}
