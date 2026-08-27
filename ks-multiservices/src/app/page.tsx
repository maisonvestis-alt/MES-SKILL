import IntroSequence from "@/components/IntroSequence";
import ScrollMotion from "@/components/ScrollMotion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Emergency from "@/components/Emergency";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

/**
 * Page d'accueil.
 *
 * L'overlay d'introduction est un calque : il se démonte une fois joué, et le
 * contenu réel de la page est rendu dès le premier octet — donc lisible par les
 * moteurs, par les lecteurs d'écran et sans JavaScript.
 */
export default function Home() {
  return (
    <>
      <IntroSequence />
      <ScrollMotion />
      <Header />
      <main id="contenu">
        <Hero />
        <Emergency />
        <Services />
        <WhyUs />
        <Process />
        <ServiceArea />
        <Testimonials />
        <Gallery />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
