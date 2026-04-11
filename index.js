// eslint.config.js
import { lapikitPreprocess } from "lapikit/labs/preprocess";

const LAPIKIT_SNIPPETS = [
  "activator",
  "indicator",
  "append",
  "prepend",
  "close",
  "load",
  "tooltip",
];

export default [
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        svelteConfig: {
          preprocess: lapikitPreprocess(),
        },
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: `^(${LAPIKIT_SNIPPETS.join("|")})$`,
        },
      ],
    },
  },
];
