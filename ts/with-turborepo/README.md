# Turborepo Vite Starter

A modern monorepo template powered by Turborepo, featuring Vite + React + TypeScript with shared configurations and UI components.

This is based on the community-maintained example (`with-vite-react` version 2.6.0) with enhanced documentation and pre-configured shadcn/ui support.

## Quick Start

### Create your Turborepo

Run the following command:

```sh
npx create-turbo@latest -e with-vite-react
```

### Install dependencies

```sh
pnpm install
```

### Run the development server

```sh
pnpm dev
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps

- **`with-vite-react`** — React 19 + Vite + TypeScript application ([README](./apps/with-vite-react/README.md))

### Packages

- **`@repo/ui`** — Shared UI components with shadcn/ui ([README](./packages/ui/README.md))
- **`@repo/tailwind-config`** — Shared Tailwind CSS configuration and styles ([README](./packages/tailwind-config/README.md))
- **`@repo/eslint-config`** — Shared ESLint configurations (ESLint v9 flat config) ([README](./packages/eslint-config/README.md))
- **`@repo/typescript-config`** — Shared TypeScript configurations ([README](./packages/typescript-config/README.md))

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has the following tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting (with v9 flat config)
- [Prettier](https://prettier.io) for code formatting
- [Tailwind CSS](https://tailwindcss.com) for styling
- [shadcn/ui](https://ui.shadcn.com) for UI components
- [Vite](https://vitejs.dev) for fast development

## Working with the monorepo

### Adding shadcn/ui components

To add more shadcn/ui components to the shared UI package:

1. Navigate to `packages/ui`
2. Follow the [shadcn/ui manual installation guide](https://ui.shadcn.com/docs/installation/manual)
3. Components will automatically be available to all apps

See the [UI package README](./packages/ui/README.md) for more details.

### Using shared packages

Each package has its own README with detailed usage instructions:

- [How to use @repo/ui](./packages/ui/README.md#usage)
- [How to use @repo/tailwind-config](./packages/tailwind-config/README.md#how-to-use)
- [How to use @repo/eslint-config](./packages/eslint-config/README.md#usage)
- [How to use @repo/typescript-config](./packages/typescript-config/README.md#usage)

## Available Scripts

From the root of the monorepo:

- `pnpm dev` — Start all apps in development mode
- `pnpm build` — Build all apps and packages
- `pnpm lint` — Lint all packages and apps
- `pnpm format` — Format all files with Prettier
- `pnpm typecheck` — Type check all TypeScript files

## Resources

- [Turborepo Documentation](https://turbo.build/repo)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
