<!--
This work is inspired by and derived from "conventionalcommits.org" Copyright (c) 2018 Conventional Changelog.
Modified by pipersgo, 2025.

Licensed under the MIT License.
See ThirdPartyNotices.txt for license details.
-->

### Enhanced Conventional Commit Guidelines

Use these guidelines to create clear, concise, and structured commit messages using the Conventional Commits standard. Following these practices helps maintain an informative commit history beneficial for maintainers, reviewers, and automated tools.

**Important Points:**

- Write commit messages only in English
- Keep language and structure as simple and clear as possible
- Add explanation in the body only when the change isn't self-evident from the summary
- For simple changes, a summary line alone is sufficient

#### Commit Message Structure:

```
<type>(<scope>): <short, imperative summary>

[Optional concise bullet-point explanation]

[Optional footer for issue references or breaking changes]
```

#### Commit Types:

- **feat**: New feature, or significant enhancement
- **fix**: Bug fix or correction
- **docs**: Documentation updates (README)
- **style**: Formatting or stylistic improvements (code style, not UI)
- **refactor**: Code restructuring without external behavior changes
- **perf**: Performance improvement
- **test**: Test additions or updates
- **build**: Build script, dependency, or tooling modifications
- **ci**: CI/CD script or configuration adjustments
- **chore**: Maintenance tasks (file moves, config updates, instructions, prompts)

#### Scope Guidelines:

The `<scope>` specifies what part of the repository is affected:

- **Template directories**: `turborepo`, `ai-prompts`, `copilot`
- **Specific packages**: `ui`, `eslint-config`, `tailwind-config`
- **Applications**: `vite-react`
- **Tooling**: `github`, `vscode`, `pnpm`
- **Omit scope** if change affects multiple areas or is repository-wide

**Examples**: `feat(ui)`, `docs(turborepo)`, `chore(pnpm)`, `ci(github)`

#### Writing Effective Commit Messages:

- **Summary Line**:

  - Use imperative mood (e.g., "add," "fix," "update," not "added" or "adds")
  - Aim for 50-60 characters maximum
  - Do not end with a period
  - Be specific: "add button component" not "add component"

- **Body** (optional):

  - Use bullet points (start with `-` or `*`)
  - Each bullet should be ~80-90 characters
  - Explain **why**, not what (the diff shows what changed)
  - Cover:
    - Motivation for the change
    - Impact on users or developers
    - Previous vs. new behavior (only if not obvious)
  - Omit body for trivial changes (typo fixes, simple updates)

- **Footer** (optional):

  - Use `Closes #<issue>` or `Fixes #<issue>` for issue references
  - Use `BREAKING CHANGE: <description>` for breaking changes
  - Separate multiple items with blank lines

#### Examples:

**Simple change (no body needed):**

```
docs: fix typo in turborepo README
```

**Feature with explanation:**

```
feat(ui): add button component with variants

- Provide default, outline, and ghost variants for consistency
- Include size options (sm, md, lg) following design tokens
- Use shadcn/ui patterns for easy customization

Closes #12
```

**Breaking change:**

```
refactor(eslint-config)!: migrate to ESLint v9 flat config

- Remove legacy .eslintrc cascade support
- Export composable functions instead of JSON presets
- Users must update eslint.config.js to import new format

BREAKING CHANGE: ESLint v8 configurations are no longer compatible.
Projects must migrate to flat config format and update imports.

Closes #34
```

**Multiple scopes:**

```
chore: update pnpm lockfile and dependencies

- Bump vite from 6.0.0 to 6.0.1 for security fix
- Update @types/react to match React 19 stable release
```

#### Best Practices:

- Commit often with focused changes (one logical change per commit)
- Run `pnpm lint` and `pnpm typecheck` before committing
- Use `fix!:` or `feat!:` shorthand for breaking changes (alternative to footer)
- Link commits to issues when applicable
- Review your diff before writing the message to ensure accuracy

Always select the most appropriate commit type and scope, provide meaningful context when needed, and prioritize clarity and conciseness.
