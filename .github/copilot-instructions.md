# Copilot Instructions for piper-templates

## Repository Overview

This repository is a template collection containing reusable project scaffolds, AI prompts, and automation configurations. It is not a single application. Each top-level template directory is an independent, copy-and-customize starting point.

**Top-level structure:**

- `ts/with-turborepo/` – Turborepo-based TypeScript monorepo template.
- `ai/with-awesome-copilot/` – Copilot prompt and instruction templates.
- `.github/prompts/` – Repository-level prompts for tasks such as README or PR generation.
- `.github/instructions/` – Auto-applied instructions by file type (for example, Markdown rules).
- `.vscode/` – Editor settings and recommended extensions for working with the templates.
- `docs/` – Documentation for using the template repository. `docs` is the root for a Docusaurus site. `docs/docs` contains the actual documentation files.

When assisting in this repository, treat each template folder as a standalone starter project and avoid coupling changes across templates unless explicitly requested.

## Template Structure

### `ts/with-turborepo/`

TypeScript monorepo template based on Turborepo and pnpm workspaces.

- `apps/with-vite-react/` – Vite + React application template.
- `apps/with-vite-react-storybook/` – Vite + React + Storybook example app.
- `packages/ui/` – Shared UI components (including shadcn-style primitives and utilities).
- `packages/eslint-config/` – Shared ESLint v9 flat configurations.
- `packages/typescript-config/` – Shared TypeScript configuration presets.
- `packages/tailwind-config/` – Shared Tailwind v4 design tokens and styles.

When editing code under `ts/with-turborepo/`, favor incremental, localized changes that keep templates generic and easy to copy into new projects.

### `ai/with-awesome-copilot/`

Template collection for Copilot workflows.

- `instructions/` – Instruction files applied to specific file types or tasks.
- `prompts/` – Reusable prompt templates (for example, README or PR generation).

Use these files as patterns when creating new prompts or instruction documents in this repository.

### `.github/`

- `prompts/` – Entry-point prompts (for example, `create-readme.prompt.md`, `update-readme.prompt.md`).
- `instructions/` – Global instruction files such as Markdown guidelines.

These files describe how Copilot should behave for documentation and automation tasks across the repository.

## How Copilot Should Use This Repo

- Treat each template (for example, `ts/with-turborepo`, `ai/with-awesome-copilot`) as a standalone starting point when generating code or documentation.
- Prefer generic, reusable examples over project-specific logic so that templates remain broadly applicable.
- When generating new files, mirror the structure and conventions of the closest existing template folder.
- For configuration packages (ESLint, TypeScript, Tailwind), propose changes that improve clarity, maintainability, or safety without tightly coupling them to a single app.

## Code Review Focus

During code review suggestions in this repository:

- Emphasize readability, consistency, and clear separation between shared packages and app-specific code.
- Encourage use of shared configs and utilities (for example, `@repo/eslint-config`, `@repo/typescript-config`, `@repo/ui`) instead of duplicating logic.
- Highlight opportunities to simplify templates, remove unused boilerplate, and keep examples minimal but complete.
- Check that examples compile logically and align with the expected stack (TypeScript, Vite, React, Tailwind, ESLint v9).

## Documentation Writing Focus

When helping write or update documentation in this repository:

- Use concise, technical language and avoid marketing phrasing.
- Describe template structure, purpose, and key decisions rather than full step-by-step usage guides.
- Keep README files short, with clear sections such as overview, structure, and basic usage notes.
- Align new docs with `.github/prompts/update-readme.prompt.md` and other existing prompt styles.

## Template Usage Philosophy

- Treat templates as starting points that are meant to be copied and customized.
- Avoid assuming that consumers will keep this repository as an upstream dependency.
- Encourage users (and generated instructions) to delete unused packages and adjust configurations to fit new projects.
