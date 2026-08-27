import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { business, serviceArea, serviceCategories, siteUrl } from "@/lib/content";
import { motionBootstrapScript } from "@/lib/motion";

/*
  Typographie : Archivo (grotesque à forte personnalité, très serré en gros
  corps) pour toute la titraille et les micro-labels ; Inter pour le texte
  courant. Deux familles, aucune fioriture — c'est le contraste de graisse et
  d'échelle qui porte la hiérarchie, pas la variété des polices.
*/
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "Dépannage d'urgence au Havre — Serrurier, Plombier, Vitrier | KS Multiservices";
const description =
  "KS Multiservices intervient au Havre et alentours pour vos urgences de serrurerie, plomberie et vitrerie. Porte claquée, fuite d'eau, vitre cassée : appelez le 06 38 98 78 30.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | KS Multiservices",
  },
  description,
  applicationName: business.name,
  authors: [{ name: business.name }],
  keywords: [
    "dépannage urgence Le Havre",
    "serrurier Le Havre",
    "plombier Le Havre",
    "vitrier Le Havre",
    "dépannage serrurerie Le Havre",
    "dépannage plomberie Le Havre",
    "dépannage vitrerie Le Havre",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: business.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0f12",
  colorScheme: "dark light",
};

/**
 * Données structurées.
 * Elles ne décrivent que des faits vérifiés : raison sociale, téléphone,
 * adresse, disponibilité, prestations et communes annoncées. Aucune note, aucun
 * avis, aucun tarif n'est déclaré tant que ces informations ne sont pas réelles.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  description,
  url: siteUrl,
  telephone: business.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    postalCode: business.address.postalCode,
    addressLocality: business.address.city,
    addressCountry: business.address.country,
  },
  areaServed: [
    { "@type": "City", name: serviceArea.city },
    ...serviceArea.towns.map((town) => ({ "@type": "City", name: town.name })),
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interventions KS Multiservices",
    itemListElement: serviceCategories.map((category) => ({
      "@type": "OfferCatalog",
      name: category.name,
      itemListElement: category.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.label },
      })),
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable}`}>
      <head>
        {/* Active le mode animé avant le premier rendu — voir lib/motion.ts */}
        <script dangerouslySetInnerHTML={{ __html: motionBootstrapScript }} />
      </head>
      <body>
        {/* Écran d'attente de l'introduction — voir globals.css et IntroSequence */}
        <div id="ks-intro-shield" aria-hidden="true" />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
