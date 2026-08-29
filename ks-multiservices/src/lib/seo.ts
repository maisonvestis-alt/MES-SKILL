// Constructeurs de données structurées (schema.org). Centralisés ici pour rester
// réutilisables quand des pages ville/prestation seront ajoutées.
import { business, faq, geo, serviceCategories, siteUrl } from "./content";

const openingHours = {
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
};

/** Fiche établissement (LocalBusiness) — identité, contact, zone, horaires. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: { "@type": "City", name: business.serviceArea.base },
    openingHoursSpecification: openingHours,
    makesOffer: serviceCategories.map((category) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: category.name },
    })),
  };
}

/** Un Service par métier — prêt à être décliné en pages prestation. */
export function servicesJsonLd() {
  return serviceCategories.map((category) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${category.name} — dépannage d'urgence`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: { "@type": "City", name: business.serviceArea.base },
    description: category.description,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: category.name,
      itemListElement: category.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.label },
      })),
    },
  }));
}

/** FAQPage — reflète 1:1 la FAQ visible sur la page (exigence Google). */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

/** Rassemble tout le balisage de la page d'accueil dans un seul graphe. */
export function homeJsonLd() {
  return [localBusinessJsonLd(), ...servicesJsonLd(), faqJsonLd()];
}
