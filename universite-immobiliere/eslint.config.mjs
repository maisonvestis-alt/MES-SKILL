import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  { ignores: [".next/**", "node_modules/**", "out/**"] },
  next,
  nextCoreWebVitals,
  nextTypescript,
  {
    rules: {
      /**
       * L'application est intégralement rédigée en français : apostrophes et
       * guillemets typographiques sont omniprésents dans le contenu pédagogique.
       * Les échapper rendrait les textes illisibles à la relecture, pour un
       * bénéfice nul ici (aucun contenu n'est injecté depuis une source externe).
       */
      "react/no-unescaped-entities": "off",
    },
  },
]);
