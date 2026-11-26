# Feature: initial-version — Brainstorm

## Goal

Establish `@commonkads/author` as a standalone, properly named CommonKADS package with
all source, tooling, and documentation in place.

## Ideas explored

### Source material
The authoring tools — `LocalWritableStore`, domain validation, test-case runner, and a CLI
(`validate` / `test` subcommands) — are well-defined. These can be set up directly with the
correct `@commonkads` namespace from the start.

### Namespace
All imports and package references use the `@commonkads/*` scope:
- Runtime dependency: `@commonkads/engine`
- This package: `@commonkads/author`

### Binary name
The CLI binary is named `author`, matching the package short name pattern used across the
CommonKADS family.

### Developer workflow
Install `@commonkads/dev-workflow` as a dev dependency so Claude Code workflow docs
(feature workflow, coding standards, CI guidance) are available locally after `npm install`.

## Direction chosen

Set up the full package — source, types, CLI, tests, CI/release workflows — with
`@commonkads/dev-workflow` installed and all documentation free of legacy branding.
