# Development conventions

Shared rules for **database**, **backend**, **frontend**, and **styles** so names and files stay predictable across the ecosystem. Extend or tighten each section with your team’s agreements.

## Database and persistence

- **Tables:** agreed convention (e.g. plural names in `snake_case`, module prefixes if needed).
- **Columns:** `snake_case` (common with MySQL/Laravel); foreign keys with `_id` suffix.
- **Indexes and constraints:** a single naming pattern for the project (e.g. `table_column_index`).
- **Migrations:** file naming and ordering rules.

> Domain models in this documentation (`models/...`) should reflect the canonical names agreed here.

## API, JSON, and front / back alignment

- **JSON payloads:** if the API uses `camelCase` or `snake_case`, document it and **avoid mixing** layers without an explicit mapping.
- **Laravel:** convention for resources/DTOs vs column names.
- **Vue / TypeScript:** interfaces and props aligned with the API contract (same names or a clear adapter layer).

For **value shapes** (email, phone, etc.), see [formats](./formats).

## Styles (SASS and BEM)

- **Preprocessor:** SASS (agreed syntax: SCSS vs indented).
- **Class methodology:** [BEM](https://getbem.com/) (Block, Element, Modifier); one convention for separators (`__`, `--`) across the project.
- **Stylesheet files:** one file per component, partials, global variables and mixins (paths and `_` prefix rules if used).

## File and folder names

- **Vue components:** project-wide rule (e.g. `PascalCase.vue` vs `kebab-case`).
- **Views, composables, stores:** same criterion everywhere.
- **Tests:** suffix or folder (`*.spec.ts`, `__tests__/`, etc.).

## Git: branches and commits {#git-branches-and-commits}

- **One branch per task:** each branch maps to **one** issue (or agreed work unit). Do not mix several tasks on one branch.
- **Name tied to the task:** include the issue reference and a short `kebab-case` slug, e.g. `123-report-export-access` or `feat/456-stock-validation`. The number and text must make it obvious **which issue** the branch serves.
- **PRs:** link the issue in the pull request description (`Closes #123`, `Refs #123`).
- **Commits:** clear messages in imperative or per-repo convention (e.g. `feat:`, `fix:`); avoid vague messages like “changes”.

The **environment** flow (local → dev → QA → prod), **GitHub Issues/Projects**, and short iterations are covered in [GitFlow and GitHub workflow](./gitflow).

## Other (extend as needed)

- Environment variables and prefixes.
- Internationalisation: `i18n` keys (e.g. `module.section.key`).
- Route names and permissions.

---

*This page is the living conventions reference; link it from application READMEs or the team wiki.*
