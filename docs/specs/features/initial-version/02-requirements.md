# Feature: initial-version — Requirements

## In scope

- Set up `@commonkads/author` package with all source, types, CLI, and tests
- All imports use `@commonkads/engine` as the runtime dependency
- CLI binary named `author`
- `README.md` and `CLAUDE.md` written for CommonKADS with no legacy branding
- Install `@commonkads/dev-workflow` as a dev dependency
- Add `.npmrc` pointing `@commonkads` scope at GitHub Packages
- Add CI and release GitHub Actions workflows matching the engine repo pattern
- Tmp-dir prefixes in test helpers use `ck-*` prefix

## Out of scope

- Implementing the placeholder functionality noted in the README
- Publishing to GitHub Packages (that is a release-phase concern)
