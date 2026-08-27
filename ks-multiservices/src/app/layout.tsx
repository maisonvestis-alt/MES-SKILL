import type { Metadata } from "next";
import { Big_Shoulders, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { business, reviews, serviceAreaGroups, serviceCategories } from "@/lib/content";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    "Plomberie, serrurerie et vitrerie au Havre, disponible 24h/24 et 7j/7 y compris les jours fériés. Intervention en moins de 45 minutes, devis gratuit. 4,6/5 sur 125 avis.",
  keywords: [
    "plombier Le Havre",
    "serrurier Le Havre",
    "vitrier Le Havre",
    "dépannage urgence Le Havre",
    "rénovation salle de bain Le Havre",
    "serrurier Honfleur",
    "plombier Fécamp",
    "vitrier Rouen",
  ],
  openGraph: {
    title: "KS Multiservices — Plombier, Serrurier, Vitrier au Havre",
    description:
      "Urgences plomberie, serrurerie et vitrerie au Havre, 24h/24 et 7j/7. Intervention en moins de 45 minutes, devis gratuit.",
    url: siteUrl,
    siteName: "KS Multiservices",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/logo.jpg", width: 586, height: 486, alt: "KS Multiservices" }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  telephone: business.phone,
  email: business.email,
  image: `${siteUrl}/logo.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    postalCode: business.address.postalCode,
    addressLocality: business.address.city,
    addressCountry: "FR",
  },
  areaServed: serviceAreaGroups.flatMap((group) =>
    group.communes.map((commune) => ({ "@type": "City", name: commune }))
  ),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviews.rating,
    reviewCount: reviews.count,
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
  makesOffer: serviceCategories.map((category) => ({
    "@type": "Offer",
    url: `${siteUrl}/services/${category.slug}`,
    itemOffered: { "@type": "Service", name: category.name },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bigShoulders.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-[color:var(--color-text-on-dark)]">
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
