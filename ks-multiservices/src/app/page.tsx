import SmoothScroll from "@/components/hero/SmoothScroll";
import Hero from "@/components/hero/Hero";

// Refonte "Nuit d'intervention" — livraison 1 : le hero seul, à valider avant la suite.
// Les sections suivantes (services, process, réalisations, contact…) viendront
// se brancher sous le hero, dans la même direction sombre/orange.
export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
    </SmoothScroll>
  );
}
