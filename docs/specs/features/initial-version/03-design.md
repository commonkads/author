# Feature: initial-version — Design

## Package identity

| Field | Value |
|-------|-------|
| `package.json` `name` | `@commonkads/author` |
| `package.json` `description` | "Knowledge authoring tools for CommonKADS knowledge bases" |
| `package.json` `bin` key | `author` |
| `package.json` dependency | `@commonkads/engine: *` |

## New dev dependency

`@commonkads/dev-workflow: 1.1.0` added to `devDependencies`. Its `postinstall` script
publishes workflow docs into the repo under `docs/` and agent/skill files under
`.claude/agents/` and `.claude/skills/`.

## File changes

| File | Notes |
|------|-------|
| `package.json` | `@commonkads/author`; `@commonkads/engine` dep; `author` bin; `@commonkads/dev-workflow` dev dep |
| `README.md` | CommonKADS branding; dependency link to engine repo; updated CLI examples |
| `CLAUDE.md` | Updated binary name and import namespace; dev-workflow sections appended by postinstall |
| `src/interfaces/i-writable-store.ts` | Imports `IFileStore` from `@commonkads/engine` |
| `src/store/local-writable-store.ts` | Imports from `@commonkads/engine`; tmp prefix `ck-writable-store-` |
| `src/store/local-writable-store.test.ts` | Imports from `@commonkads/engine`; tmp prefix `ck-writable-store-` |
| `src/testing/test-runner.ts` | Imports from `@commonkads/engine` |
| `src/testing/test-runner.test.ts` | Imports from `@commonkads/engine`; tmp prefix `ck-test-runner-` |
| `src/validation/validator.test.ts` | Tmp prefix `ck-validator-empty-` |
| `src/cli/index.ts` | `program.name('author')`; CommonKADS description |
| `src/cli/validate-command.ts` | Imports `consoleWriter` from `@commonkads/engine` |
| `src/cli/test-command.ts` | Imports from `@commonkads/engine` |
| `.npmrc` | `@commonkads:registry=https://npm.pkg.github.com` |
| `.github/workflows/ci.yml` | Matches engine CI pattern |
| `.github/workflows/release.yml` | Matches engine release pattern |
