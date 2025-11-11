<!--
This work is inspired by and derived from "conventionalcommits.org" Copyright (c) 2018 Conventional Changelog.
Modified by pipersgo, 2025.

Licensed under the MIT License.
See ThirdPartyNotices.txt for license details.
-->

### Conventional Commit Guidelines

Follow Conventional Commits standard for clear, structured commit messages. Write in English, keep it simple, explain only when necessary.

#### Structure:

```
<type>(<scope>): <imperative summary max 60 chars>

[Optional bullets explaining why]

[Optional footer: Closes #N, BREAKING CHANGE: ...]
```

#### Types:

- **feat**: New feature/enhancement
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Code formatting (not UI)
- **refactor**: Code restructure without behavior change
- **perf**: Performance improvement
- **test**: Test changes
- **build**: Build/dependency changes
- **ci**: CI/CD changes
- **chore**: Maintenance (config, instructions, prompts)

#### Scopes:

Use scope to indicate affected area: package name (`ui`, `eslint-config`), app name (`vite-react`), template directory (`turborepo`, `copilot`), or tool (`github`, `pnpm`). Omit if multiple areas or repository-wide. Examples: `feat(ui):`, `docs(turborepo):`, `chore(pnpm):`.

#### Rules:

- **Summary**: Imperative mood ("add" not "added"), 50-60 chars, no period, specific
- **Body**: Bullet points, ~80 chars each, explain motivation/impact/changes. Skip for trivial edits
- **Footer**: `Closes #N`, `BREAKING CHANGE: ...`. Use `!` after type for breaking (e.g., `feat!:`)

#### Examples:

```
docs: fix typo in turborepo README
```

```
feat(ui): add button component with variants

- Provide default, outline, ghost variants
- Include sm/md/lg sizes per design tokens
- Use shadcn/ui patterns

Closes #12
```

```
refactor(eslint-config)!: migrate to ESLint v9 flat config

- Remove .eslintrc cascade support
- Export composable functions not JSON
- Users must update eslint.config.js

BREAKING CHANGE: ESLint v8 configs incompatible. Migrate to flat config.

Closes #34
```

Commit focused changes. Run `pnpm lint`/`pnpm typecheck` first, link issues, and review diffs before committing.
