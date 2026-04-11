# eslint-config-lapikit

Official ESLint configuration for [Lapikit](https://lapikit.dev) — prevents false positives caused by Lapikit's `<kit:*>` syntax and preprocessor.

## Why?

Lapikit uses a custom `<kit:*>` syntax that is transformed into standard Svelte components at build time. Some of these components rely on named snippets (like `activator`, `indicator`, etc.) that ESLint may incorrectly flag as unused variables.

This package configures ESLint to ignore these false positives so you can focus on writing code.

## Requirements

- ESLint `>=9.0.0` (flat config)
- `@typescript-eslint/eslint-plugin` `>=6.0.0`
- `lapikit` `>=0.5.0`

## Installation

```bash
npm install -D eslint-config-lapikit
```

```bash
pnpm add -D eslint-config-lapikit
```

```bash
yarn add -D eslint-config-lapikit
```

```bash
bun add -D eslint-config-lapikit
```

## Usage

Add the config to your `eslint.config.js`:

```js
import lapikitConfig from "eslint-config-lapikit";

export default [...lapikitConfig];
```

That's it! The config will automatically handle all Lapikit-specific false positives for `.svelte` files.

## Handling Conflicts

`eslint-config-lapikit` configures the `@typescript-eslint/no-unused-vars` rule for Lapikit snippets. If you already have a custom configuration for this rule, place the Lapikit config **first** so your own rules take precedence:

```js
import lapikitConfig from "eslint-config-lapikit";

export default [
  ...lapikitConfig, // always first
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          // your custom options here
          varsIgnorePattern: "^myCustomPattern$",
        },
      ],
    },
  },
];
```

## What's Included

This config applies the following rules to all `**/*.svelte` files:

| Rule                                | Configuration                          |
| ----------------------------------- | -------------------------------------- |
| `@typescript-eslint/no-unused-vars` | Ignores Lapikit reserved snippet names |

### Ignored snippet names

The following snippet names are recognized as Lapikit reserved snippets and will not be flagged as unused:

- `activator`
- `indicator`
- `append`
- `prepend`
- `close`
- `load`
- `tooltip`

## Known Limitations

This package only handles ESLint false positives. Your IDE may still show a `ts(6133)` warning for the same snippets — this is a separate issue with the TypeScript language server. See the [documentation](https://lapikit.dev/docs) for more information.

## License

Licensed under the [MIT license](https://github.com/lapikit/eslint-config-lapikit/blob/main/LICENSE).

Copyright © 2025 - 2026 Nycolaide
