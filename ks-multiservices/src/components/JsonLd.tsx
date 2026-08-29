// Rendu d'un graphe schema.org en <script type="application/ld+json">.
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Données maîtrisées (construites côté serveur depuis content.ts).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
