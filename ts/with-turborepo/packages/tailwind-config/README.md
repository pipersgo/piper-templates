# @repo/tailwind-config

This package contains shared Tailwind CSS configuration and styles used across the monorepo.

## What's inside

- `shared-styles.css` — contains Tailwind CSS directives, theme configuration with CSS custom properties for colors and design tokens, shared global utilities, and shadcn-ui styles used by multiple packages/apps.

## Installation

### 1. Add to your app's dependencies

Add this package to your app's `package.json`:

```json
{
  "dependencies": {
    "@repo/tailwind-config": "workspace:*"
  }
}
```

Then run:

```sh
pnpm install
```

### 2. Install Tailwind CSS

#### Vite

Follow the official [Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/vite) for Vite to install Tailwind CSS in your app.

For a complete example, see `apps/with-vite-react`.

## How to use

1. Create the shared style sheet `src/style.css` in your app

```css
@import "tailwindcss";
@import "@repo/tailwind-config";
@source "../../../packages/ui/src/**/*.{ts,tsx}";
```

> **Note:** The `@source` directive tells Tailwind to scan the UI package for class names. Adjust the path (`../../../packages/ui/src/**/*.{ts,tsx}`) based on your app's location in the monorepo.

2. In your app entry (for example `src/main.tsx`), import the stylesheet

```tsx
import "./style.css"
```
