# `Turborepo` Vite starter

This is based on a community-maintained example (`with-vite-react` version 2.6.0).

## Setup

### Create your Turborepo

Run the following command:

```sh
npx create-turbo@latest -e with-vite-react
```

### Install tailwindcss in `apps/web`

Follow the official [Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/vite) for Vite.

### Install shadcn-ui in `packages/ui`

Manually install shadcn-ui [shadcn-ui repository](https://ui.shadcn.com/docs/installation/manual).

- add `global.css` to `packages/tailwind-config/shared-styles.css`
  - modify `../tailwind-config/shared-styles.css` in `packages/ui/components.json`
- add `baseUrl` and `paths` to `packages/ui/tsconfig.json`
- alias `@repo/ui` to `packages/ui/src` in `packages/ui/components.json`

### Update `eslint` configuration

- [ESLint v9 Flat Configs](https://turborepo.com/docs/guides/tools/eslint#eslint-v9-flat-configs)
- [Turborepo ESLint Config](https://github.com/vercel/turborepo/tree/main/examples/basic/packages/eslint-config)

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `web`: react [vite](https://vitejs.dev) ts app
- `@repo/ui`: a stub component library shared by `web` application
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
