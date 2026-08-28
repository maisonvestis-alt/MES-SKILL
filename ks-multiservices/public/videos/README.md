# Vidéo du hero

Le hero attend une boucle vidéo plein écran. Déposez ici deux fichiers, le
composant les charge automatiquement (le `webm` est prioritaire pour le poids) :

- `hero.webm` — boucle principale (VP9/AV1)
- `hero.mp4` — repli (H.264)

Recommandations pour rester > 90 sur Lighthouse :

- 1920×1080, **muette**, **sans audio**, 8–12 s en boucle propre
- viser < 3 Mo (webm) ; débit maîtrisé, la scène est sombre donc compressible
- ambiance nuit / intervention (rue mouillée, gyrophare, atelier) — l'étalonnage
  orange, le grain et la vignette sont ajoutés par-dessus en CSS

Tant qu'aucun fichier n'est présent, `hero-poster.svg` s'affiche : l'affiche
cinématographique de secours. Aucune régression visuelle.
