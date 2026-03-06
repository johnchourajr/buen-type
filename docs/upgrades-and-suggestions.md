# Upgrades and Suggestions

Last updated: 2026-03-06

---

## Status Key

- [x] Applied
- [ ] Not applied / future consideration

---

## 1. Bug Fixes

- [x] Typo `headlinea` -> `headlines` in `src/index.ts` JSDoc
- [x] Typo `cieling` -> `ceiling` in example scale page
- [x] Redundant `fontSize` assignment in `buenTypeTailwind.ts`
- [x] Incorrect Tailwind theme key `color` -> `colors` (then removed in v4 migration)
- [x] Undefined CSS variable `--foreground-rgb` -> `--color-primary-hex` in GlobalHeaderCopyButton
- [x] AnimatePresence children missing unique `key` props
- [x] `useEffect` missing `containerRef` dependency in SvgHeader
- [x] Stale eslint-disable comment in GenThreeShader
- [x] Outdated `onDownload` prop in GenThreeShader README
- [x] Invalid `destDir` -> `distDir` in next.config
- [x] `RefObject<HTMLDivElement>` -> `RefObject<HTMLDivElement | null>` for React 19

---

## 2. Type Safety Improvements

- [x] Replaced `Record<string, any>` and `options?: any` in `AddUtilities` with `CSSOutput`
- [x] `TypeDefinition` unions now use `(string & {})` pattern for autocomplete
- [x] Excluded `_id` from `CSSOutput` type
- [x] `let` -> `const` for utility objects

---

## 3. Dependency Upgrades

### Library (root)

| Package    | Before  | After    |
| ---------- | ------- | -------- |
| typescript | ^5.4.5  | ^5.8.3   |
| tsup       | ^8.0.0  | removed  |
| tsdown     | -       | ^0.21.0  |
| vitest     | -       | ^4.0.18  |

### Example App

| Package                        | Before      | After      |
| ------------------------------ | ----------- | ---------- |
| next                           | 14.2.3      | 15.1.12    |
| react                          | ^18         | ^19.2.4    |
| react-dom                      | ^18         | ^19.2.4    |
| framer-motion                  | ^11.2.10    | removed    |
| motion                         | -           | ^12.35.0   |
| tailwindcss                    | ^3.4.1      | 4          |
| @tailwindcss/postcss           | -           | 4          |
| @tailwindcss/container-queries | ^0.1.1      | removed (built into v4) |
| eslint                         | ^8          | ^9         |
| eslint-config-next             | 14.2.3      | 15.1       |
| @types/react                   | ^18         | ^19        |
| @types/react-dom               | ^18         | ^19        |

---

## 4. Build System

- [x] Migrated from tsup (unmaintained) to tsdown (Rolldown-powered)
- [x] Updated package.json exports for tsdown output format (.cjs/.mjs, .d.cts/.d.mts)
- [x] Node engine `>=14.0.0` -> `>=18.0.0`
- [x] Added `.nvmrc` pinned to 20

---

## 5. CI/CD

- [x] `actions/checkout` v3 -> v4
- [x] `actions/setup-node` v3 -> v4
- [x] Node 18 -> 20 in CI
- [x] Added `npm run type-check` step before publish
- [x] Added `npm test` step before publish

---

## 6. Testing

- [x] Added Vitest with 20 tests covering:
  - `createRemClamp`: output format, custom screen sizes, edge cases
  - `buenTypeTailwind`: default utilities, custom overrides, aliases, disableDefaults, custom screen sizes
  - `createBuenTypePlugin`: factory function, option passthrough

---

## 7. Library API

- [x] Added `createBuenTypePlugin` factory function for cleaner Tailwind v3/v4 usage
- [x] Kept `buenTypeTailwind` for backward compatibility

---

## 8. Tailwind v4 Migration (Example App)

- [x] Removed `tailwind.config.ts` in favor of CSS-first `@theme` config
- [x] Created `buen-type.plugin.ts` wrapper for `@plugin` directive
- [x] Replaced `@tailwind` directives with `@import "tailwindcss"`
- [x] Moved theme values to `@theme` block in `globals.css`
- [x] Removed `@tailwindcss/container-queries` (built into v4)
- [x] Replaced `bg-opacity-50` with `bg-black/50` (v4 syntax)
- [x] Replaced arbitrary CSS variable classes with theme color classes
- [x] Converted custom spacing to arbitrary values

---

## 9. Example App Architecture

- [x] Migrated framer-motion -> motion/react (6 files)
- [x] Added `ClientShell` wrapper for SSR-safe header/footer rendering
- [x] Added `not-found.tsx` for App Router
- [x] Replaced brittle `../../../../src/index` imports with `@muybuen/type`
- [x] ESLint flat config (`eslint.config.mjs`)
- [x] Added `images: { unoptimized: true }` for static export

---

## 10. Future Considerations

- [ ] Pre-commit hooks (Husky + lint-staged) for automated lint/format
- [ ] Extract shared copy-to-clipboard hook from PanelCode and GlobalHeaderCopyButton
- [ ] Consider `react-resizable` replacement (low maintenance)
