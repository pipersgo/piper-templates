# @repo/eslint-config

This package exports shared ESLint configurations (ESLint v9 flat config format) used across the monorepo.

## What's inside

### `./base`

Base configuration for TypeScript projects including:

- ESLint recommended rules
- TypeScript ESLint recommended rules
- Prettier integration (eslint-config-prettier)
- Turborepo plugin with environment variable checks
- Ignores `dist/**` directories

### `./react-internal`

React-specific configuration extending the base config with:

- React plugin with recommended rules
- React Hooks plugin with recommended rules
- Browser globals
- Auto-detection of React version
- Disabled `react-in-jsx-scope` rule (for React 17+)

## Installation

### 1. Add to your app's dependencies

Add this package to your app's `package.json`:

```json
{
  "devDependencies": {
    "@repo/eslint-config": "workspace:*"
  }
}
```

Then run:

```sh
pnpm install
```

## Usage

### Using the base config

Create an `eslint.config.js` in your project root:

```js
import baseConfig from "@repo/eslint-config/base";

export default baseConfig;
```

### Using the React config

For React projects, use the react-internal config:

```js
import reactConfig from "@repo/eslint-config/react-internal";

export default reactConfig;
```

### Extending the config

You can extend the configs with additional rules:

```js
import { defineConfig } from "eslint/config";
import baseConfig from "@repo/eslint-config/base";

export default defineConfig([
  ...baseConfig,
  {
    rules: {
      // Your custom rules here
      "no-console": "warn",
    },
  },
]);
```

## Resources

- [ESLint v9 Flat Configs](https://turborepo.com/docs/guides/tools/eslint#eslint-v9-flat-configs)
- [Turborepo ESLint Config](https://github.com/vercel/turborepo/tree/main/examples/basic/packages/eslint-config)
