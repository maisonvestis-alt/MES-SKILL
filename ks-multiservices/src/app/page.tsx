import SmoothScroll from "@/components/hero/SmoothScroll";
import SiteHeader from "@/components/sections/SiteHeader";
import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import ServiceArea from "@/components/sections/ServiceArea";
import Realisations from "@/components/sections/Realisations";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";

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
          <ServiceArea />
          <Realisations />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </SmoothScroll>
  );
}
