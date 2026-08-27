import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsBar from "@/components/StatsBar";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Avis from "@/components/Avis";
import ServiceArea from "@/components/ServiceArea";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="contenu-principal">
        <Hero />
        <Services />
        <StatsBar />
        <Process />
        <Pricing />
        <Gallery />
        <Avis />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
