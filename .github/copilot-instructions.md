# Copilot Instructions for piper-templates

## Repository Overview

This is a **template collection** repository containing reusable project scaffolds, AI prompts, and automation configurations. Not a single application—each directory is an independent, copy-paste starting point meant to be copied and customized.

**Structure:**

- `ts/with-turborepo/` - Complete Turborepo monorepo template (Vite + React 19 + TypeScript + shadcn/ui)
- `ai/with-awesome-copilot/` - AI prompt templates and instruction files for GitHub Copilot workflows
- `.github/prompts/` - Repository-level AI prompts (e.g., `create-readme.prompt.md`)
- `.github/instructions/` - Repository-level instruction files (e.g., `markdown.instructions.md` for MD validation)
- `.vscode/` - VS Code extension recommendations and settings

## Turborepo Monorepo Architecture

**Package Manager:** pnpm v8.15.6 with workspaces. Internal packages use `workspace:*` protocol.

**Key Commands:**

- `pnpm build` - Turborepo builds all packages in topological order
- `pnpm dev` - Starts all dev servers (persistent, no cache)
- `pnpm lint` / `pnpm typecheck` - Run across entire workspace

**Monorepo Structure (`ts/with-turborepo/`):**

```
apps/with-vite-react/      # React 19 + Vite app
packages/
  ui/                      # Shared components (shadcn/ui)
  eslint-config/           # ESLint v9 flat configs
  typescript-config/       # TypeScript presets
  tailwind-config/         # Tailwind v4 design tokens
```

**Critical Patterns:**

1. **Shared Packages** - All use `workspace:*` protocol and export composable configs

   - `@repo/ui` - shadcn/ui components with subpath exports (`@repo/ui/components/ui/button`)
   - `@repo/eslint-config` - Composable flat configs (`base.js`, `react-internal.js`)
   - `@repo/typescript-config` - Strict presets (`base.json`, `react-library.json`, `vite.json`)
   - `@repo/tailwind-config` - Tailwind v4 with OKLCH tokens in `shared-styles.css`

2. **Tailwind v4 Scanning** - Apps import `shared-styles.css` with `@source` directive pointing to `../../../packages/ui/src/**/*.{ts,tsx}` for cross-package class scanning

3. **shadcn/ui** - Manual installation (no CLI), components in `packages/ui/src/components/ui/`, use `cn()` utility for conditional classes

4. **ESLint v9** - Flat config pattern: import shared configs and spread in `eslint.config.js`

5. **TypeScript** - No project references (Turborepo handles build order), `noEmit: true` in apps

## AI Workflow Tools

**Prompts (`.github/prompts/`)** - Repository-level AI prompts for tasks like README generation

- Usage: `@workspace follow instructions in .github/prompts/create-readme.prompt.md`

**Instructions (`.github/instructions/`)** - Auto-applying rules for file types (e.g., `markdown.instructions.md` for all `**/*.md`)

**Templates (`ai/with-awesome-copilot/`)** - Copy-paste prompt/instruction templates for your own projects

## Key Decisions

- **ESLint v9 flat config** - No cascading `.eslintrc` files
- **Tailwind v4** - Native CSS layers, no PostCSS
- **Subpath exports** - Tree-shaking friendly
- **OKLCH colors** - Better perceptual uniformity

## Template Usage Philosophy

**Critical: This is NOT a library or framework.** Templates are designed to be:

1. **Copied** - Use `cp -r ts/with-turborepo my-project` not git clone/submodules
2. **Customized** - Delete unused packages, modify configs, adapt to needs
3. **Owned** - Once copied, it's the user's code to evolve independently

When helping users:

- Recommend copying relevant template directories, not referencing them
- Suggest removing unused parts (e.g., drop `@repo/ui` if not needed)
- Avoid treating templates as "upstream" dependencies to track

## Common Pitfalls

- **Tailwind scanning:** Apps must adjust `@source` path in CSS based on monorepo depth (e.g., `../../../packages/ui/src/**`)
- **ESLint imports:** Use `workspace:*` protocol, not relative paths, for shared configs
- **Turborepo caching:** `dev` task has `cache: false` and `persistent: true` - don't cache long-running servers
- **TypeScript paths:** No path aliases configured - rely on package names (`@repo/ui`)
- **AI instruction scope:** `.github/instructions/markdown.instructions.md` has blog-specific validation fields (post_title, categories) - these are examples, not universal requirements

## License & Attribution

MIT License - templates meant for copy/modification. Based on:

- Turborepo community example `with-vite-react` v2.6.0
- GitHub's awesome-copilot project (prompts/instructions)
