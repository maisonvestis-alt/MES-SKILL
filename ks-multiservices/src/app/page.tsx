"use client";

import { useCallback, useState } from "react";
import IntroSequence from "@/components/IntroSequence";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function Home() {
  // introDone ne sert plus qu'à démonter l'overlay une fois sa transition finie —
  // le contenu réel ci-dessous reste toujours visible dans le HTML, y compris sans
  // JavaScript ou pendant le chargement : l'intro est un calque par-dessus, jamais
  // une condition d'affichage du site.
  const [introVisible, setIntroVisible] = useState(true);
  const handleIntroDone = useCallback(() => setIntroVisible(false), []);

  return (
    <>
      {introVisible && <IntroSequence onDone={handleIntroDone} />}
      <Header />
      <main id="contenu-principal">
        <Hero />
        <StatsBar />
        <Services />
        <Pricing />
        <Process />
        <WhyUs />
        <ServiceArea />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
