# AGENTS.md

## Cursor Cloud specific instructions

This is a Tailwind CSS typography utility plugin (`@muybuen/type`) with a Next.js demo app in `example/`.

### Project structure

- **Root** (`/workspace`): The npm library. TypeScript source in `src/`, built with `tsup` to `dist/`.
- **Example** (`/workspace/example`): Next.js 14 demo app that imports the library directly from `../src/index` via its Tailwind config.

### Key commands

See root `package.json` for standard scripts:

| Scope | Command | Purpose |
|-------|---------|---------|
| Root | `npm run build` | Build library to `dist/` via tsup |
| Root | `npm run dev` | Watch mode build |
| Root | `npm run type-check` | TypeScript validation (`tsc --noEmit`) |
| Root | `npm run lint` | Prettier formatting (`prettier --write .`) |
| Example | `npm run dev` | Next.js dev server on port 3004 |
| Example | `npm run lint` | ESLint via `next lint` |
| Example | `npm run build` | Static export build |

### Non-obvious notes

- The example app's `tailwind.config.ts` imports the plugin directly from `../src/index` (not from `dist/`), so changes to library source are picked up by the example dev server without rebuilding.
- The example Next.js app uses `output: "export"` (static site), so `npm run build` in `example/` produces a static export in `out/`.
- The root `npm run lint` command runs `prettier --write .` which modifies files in place (not a dry-run check). Use `prettier --check .` for CI-style validation.
- No test framework is configured; validation is done via `type-check` and `lint`.
- The example dev server runs on port **3004** (not the default 3000).
