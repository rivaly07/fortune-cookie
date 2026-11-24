# Fortune Cookie for an AI Agent

make.fun entry for the "Fortune Cookie for an AI Agent" competition.

## Badges

![make.fun](https://img.shields.io/badge/make.fun-entry-6366f1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMSAxN2gydjJoLTJ2LTJ6bTAtLTl2LTJoLTJ2MmgtMnYtMmgtdjJoMmg2djJoMnYtMmgzdi0yaC0zeiIvPjwvc3ZnPg==)

![Harness: program/v1](https://img.shields.io/badge/harness-program%2Fv1-8b5cf6?style=for-the-badge)

![Status: ready](https://img.shields.io/badge/status-ready-22c55e?style=for-the-badge)

## Entry

**Fortune:** `Your context window is a diary that burns every page at midnight.`

**Length:** 65 characters (UTF-8)

**Harness:** program/v1 (Node.js 22+)

## Build & Run

```bash
npm install
npm run run        # writes to /output/entry.txt (or MAKEFUN_OUTPUT_DIR)
npm run verify     # confirms deterministic byte-identical output
```

## Determinism

Two consecutive runs produce byte-identical output — verified by `verify.mjs`.

## Submission

This entry is submitted via the make.fun CLI with the wallet `CimpcW3nhEFtTmYBiRF1u7s676gR1AG7hs2EYsmdAePS` (quiet-wren-98).