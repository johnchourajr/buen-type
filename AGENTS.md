# AGENTS.md

## Cursor Cloud specific instructions

This is `@muybuen/type`, a Tailwind CSS typography plugin with a co-located Next.js example/demo site.

### Project structure

- **Library** (`/src`): TypeScript plugin built with `tsup` into CJS + ESM. No test framework configured.
- **Example app** (`/example`): Next.js 14 static site on port 3004 that imports the library directly from `../src/index`.

### Commands

| Task | Root (`/workspace`) | Example (`/workspace/example`) |
|---|---|---|
| Install deps | `npm install` | `npm install` |
| Build library | `npm run build` | -- |
| Dev watch (library) | `npm run dev` | -- |
| Dev server | -- | `npm run dev` (port 3004) |
| Lint (prettier) | `npm run lint` | -- |
| Lint (eslint) | -- | `npm run lint` |
| Type-check | `npm run type-check` | -- |

### Notes

- Two separate `npm install` runs are needed (root and `example/`).
- The example app's `tailwind.config.ts` imports the library source directly (`../src/index`), so the library does not need to be pre-built for the dev server to work. However, `npm run build` at root is needed to produce `dist/` for the published package.
- Root `npm run lint` runs `prettier --write .` which reformats files in place (including the example directory). Run this before committing.
- There are no automated tests in this project.
