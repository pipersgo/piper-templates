# @repo/ui

This package exports shared UI components and shadcn/ui components used across the monorepo.

## What's inside

- `Counter` — Example counter component
- `Header` — Example header component
- `Button` — shadcn/ui button component (in `components/ui/`)
- Utility functions and hooks (exported via subpath exports)
- Pre-configured with Tailwind CSS and shadcn/ui dependencies

## Installation

### 1. Add to your app's dependencies

Add this package to your app's `package.json`:

```json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```

Then run:

```sh
pnpm install
```

## Usage

### Importing components from the main entry

Import components from the main package entry:

```tsx
import { Header, Counter } from "@repo/ui";

export default function Page() {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
}
```

### Importing from subpath exports

The package provides subpath exports for direct imports:

```tsx
// Import specific components
import { Header } from "@repo/ui/header";
import { Counter } from "@repo/ui/counter";

// Import shadcn/ui components
import { Button } from "@repo/ui/components/ui/button";

// Import utilities
import { cn } from "@repo/ui/lib/utils";
```

### Adding shadcn/ui components

To add more shadcn/ui components to this package:

1. Follow the [shadcn/ui manual installation guide](https://ui.shadcn.com/docs/installation/manual)
2. Add components to `src/components/ui/`
3. Global styles are already configured in `packages/tailwind-config/shared-styles.css`
4. The package is already configured with necessary dependencies (Radix UI, class-variance-authority, etc.)

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
