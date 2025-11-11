# Turborepo Vite Starter

A Turborepo monorepo with Vite + React + TypeScript, featuring shared configurations and shadcn/ui components.

Based on the community-maintained example `with-vite-react` (v2.6.0).

## Quick Start

```sh
# Create from template
npx create-turbo@latest -e with-vite-react

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## What's inside

### Apps

- [`with-vite-react`](./apps/with-vite-react/README.md) — React 19 + Vite + TypeScript app
- [`with-vite-react-storybook`](./apps/with-vite-react-storybook/README.md) — Storybook workspace for UI component development

### Packages

- [`@repo/ui`](./packages/ui/README.md) — Shared UI components with shadcn/ui
- [`@repo/tailwind-config`](./packages/tailwind-config/README.md) — Tailwind CSS configuration
- [`@repo/eslint-config`](./packages/eslint-config/README.md) — ESLint configurations (v9 flat config)
- [`@repo/typescript-config`](./packages/typescript-config/README.md) — TypeScript configurations

## Scripts

- `pnpm dev` — Start dev server
- `pnpm build` — Build all apps and packages
- `pnpm lint` — Lint all packages
- `pnpm format` — Format with Prettier
- `pnpm typecheck` — Type check TypeScript
- `pnpm storybook` — Start Storybook dev server
