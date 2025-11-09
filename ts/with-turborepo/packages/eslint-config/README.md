# @repo/eslint-config

This package exports shared ESLint configurations used across the monorepo.

Exports

- `./base` — basic shared configuration (see `base.js`)
- `./react-internal` — React-specific overrides (see `react-internal.js`)

Usage

1. Install the package as a dev dependency (this repo uses workspaces, so the package is already referenced in the example app):

```sh
pnpm install
```

2. Example - using the exported base config in a legacy `eslint.config.js`:

```js
import baseConfig from "@repo/eslint-config/base";

export default baseConfig;
```
