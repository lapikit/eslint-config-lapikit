// eslint.config.js
import { lapikitPreprocess } from "lapikit/labs/preprocess";

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
  },
];
