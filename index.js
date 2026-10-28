// eslint.config.js
import { lapikitPreprocess } from "lapikit/preprocess";

const LAPIKIT_SNIPPETS = [
  "activator",
  "trigger",
  "indicator",
  "append",
  "prepend",
  "close",
  "load",
  "tooltip",
  "prependInner",
  "appendInner",
  "children",
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
