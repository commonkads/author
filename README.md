# @commonkads/author

> **Disclaimer:** This project is an independent open-source software implementation inspired by the CommonKADS knowledge engineering methodology (Schreiber et al.). It is not affiliated with or endorsed by the original methodology authors or any third-party trademark holders.

Authoring tools for CommonKADS knowledge bases.

## Purpose

Provides capabilities for knowledge engineers to create, edit, and validate the ontologies
and knowledge files that drive CommonKADS PSM templates. Key capabilities:

- **Knowledge file authoring** — create and edit domain ontologies (`.yml`) and knowledge
  documents (`.md`) that are loaded at runtime by the engine
- **Completeness and ambiguity checks** — LLM-assisted analysis to identify gaps, overlapping
  norms, ambiguous language, or missing coverage in a knowledge base
- **Metadata tracking** — record provenance, authorship, review status, and versioning of
  knowledge artefacts
- **Text-based test case specification** — define test cases in natural language that describe
  input conditions and expected outputs; execute them against the engine to verify knowledge
  base correctness

## Depends on

- [`@commonkads/engine`](https://github.com/commonkads/engine) — runs the PSM templates to execute test cases and
  validate knowledge

## CLI

```sh
author validate --knowledge-root <path>
author test --knowledge-root <path> --provider ollama --model llama3
```

## Status

Placeholder — not yet implemented.
