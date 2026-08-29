import type { Metadata } from "next";
import { Bebas_Neue, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/content";
import { localBusinessJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Display condensé "très grand" pour la refonte (direction nuit / urgence).
// Bebas Neue : plus élancé et éditorial qu'un condensé lourd — luxe assumé.
// C'est la police du titre H1 (élément LCP) : préchargée par défaut par next/font.
const bebas = Bebas_Neue({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Mono "console de dispatch" : statuts, coordonnées, heure locale.
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KS Multiservices — Plombier, Serrurier, Vitrier au Havre (24h/24)",
    template: "%s — KS Multiservices",
  },
  description:
    "Plomberie, serrurerie et vitrerie au Havre, disponible 24h/24 et 7j/7 y compris les jours fériés. KS Multiservices intervient rapidement pour vos urgences et vos travaux de rénovation.",
  keywords: [
    "plombier Le Havre",
    "serrurier Le Havre",
    "vitrier Le Havre",
    "dépannage urgence Le Havre",
    "rénovation salle de bain Le Havre",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "KS Multiservices — Plombier, Serrurier, Vitrier au Havre",
    description:
      "Urgences plomberie, serrurerie et vitrerie au Havre, 24h/24 et 7j/7. Intervention rapide et travaux de rénovation.",
    url: siteUrl,
    siteName: "KS Multiservices",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${bebas.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[color:var(--color-void)] text-[color:var(--color-bone)]">
        <a href="#contenu-principal" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
