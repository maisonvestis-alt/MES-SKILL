import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://ksmultiservices.fr";

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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    postalCode: business.address.postalCode,
    addressLocality: business.address.city,
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "City",
    name: "Le Havre",
  },
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
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plomberie" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Serrurerie" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vitrerie" } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-[color:var(--color-text-on-light)]">
        <a href="#contenu-principal" className="skip-link">
          Aller au contenu principal
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
