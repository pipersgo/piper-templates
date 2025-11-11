# with-vite-react-storybook

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A dedicated Storybook workspace for developing and documenting UI components from the `@repo/ui` package in isolation. Part of the Turborepo monorepo template.

## Overview

This workspace provides a development environment for building and testing shared UI components with Storybook. It showcases components from the `@repo/ui` package, including shadcn/ui components with Tailwind v4 styling, allowing you to develop and test components independently from the main applications.

## Quick Start

From the monorepo root:

```bash
# Install dependencies
pnpm install

# Start Storybook dev server
pnpm storybook
```

Storybook will be available at `http://localhost:6006`.

## What's Inside

### Stories

- `Button.stories.tsx` - Example stories demonstrating Button component variants (secondary, destructive, outline, ghost)

### Configuration

- **Storybook 10** - Latest version with React-Vite integration
- **Tailwind v4** - Shared design system from `@repo/tailwind-config`
- **TypeScript** - Strict type checking using `@repo/typescript-config`
- **ESLint** - Code quality with `eslint-plugin-storybook`

## Scripts

```bash
# Start Storybook development server
pnpm storybook

# Build static Storybook for deployment
pnpm build-storybook

# Lint stories
pnpm lint
```

## Adding New Stories

Create a new story file in the `stories/` directory:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@repo/ui/components/ui/button";

const meta = {
  component: Button,
  args: {
    children: "Click me",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
```

## Tailwind Scanning

The `.storybook/style.css` file configures Tailwind v4 to scan both:

- `../../../packages/ui/src/**/*.{ts,tsx}` - UI package components
- `../stories/**/*.{ts,tsx}` - Story files

This ensures all component classes are included in the Tailwind build.

## Using Shared Packages

### Import UI components

```tsx
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
```

### TypeScript configuration

Extends the shared Vite TypeScript preset:

```json
{
  "extends": "@repo/typescript-config/vite.json"
}
```

### ESLint configuration

Uses base config plus Storybook plugin:

```js
import baseConfig from "@repo/eslint-config/base";
import storybook from "eslint-plugin-storybook";

export default [...baseConfig, ...storybook.configs["flat/recommended"]];
```

## Deployment

Build the static Storybook site:

```bash
pnpm build-storybook
```

Output will be in `storybook-static/` directory, ready to deploy to any static hosting service (Netlify, Vercel, Azure Static Web Apps, etc.).

## Architecture

This workspace demonstrates Turborepo's ability to isolate development tools:

- **Persistent task**: Storybook runs as a long-lived dev server (no caching)
- **Workspace dependencies**: Automatically rebuilds when `@repo/ui` changes
- **Shared configuration**: Reuses ESLint, TypeScript, and Tailwind configs

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook for React + Vite](https://storybook.js.org/docs/get-started/frameworks/react-vite)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
