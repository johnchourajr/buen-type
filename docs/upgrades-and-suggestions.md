# Upgrades and Suggestions

Last updated: 2026-03-06

---

## Status Key

- [x] Applied in this PR
- [ ] Recommended but requires discussion / separate PR

---

## 1. Bug Fixes (Applied)

### 1.1 Typo in JSDoc — `src/index.ts`

`headlinea` corrected to `headlines` on line 2.

### 1.2 Redundant `fontSize` assignment — `src/buenTypeTailwind.ts`

`fontSize` was set from `definition.fontSize` on line 28, then identically reassigned on lines 40-42. Removed the redundant block.

### 1.3 Incorrect Tailwind theme key — `example/tailwind.config.ts`

`theme.color` is not a valid Tailwind key. Changed to `theme.colors` so the foreground/background color utilities are actually generated.

### 1.4 Typo — `example/src/app/scale/page.tsx`

`cieling` corrected to `ceiling`.

---

## 2. Type Safety Improvements (Applied)

### 2.1 `AddUtilities` type — `src/buenTypeTailwind.ts`

Replaced `Record<string, any>` and `options?: any` with properly typed signature using `CSSOutput`.

### 2.2 `TypeDefinition` union types — `src/types.ts`

Many properties used `string | "specific-value"` which collapses to just `string` at the type level. Replaced with proper string literal unions that provide real autocomplete value while still allowing arbitrary strings via template literal types where needed.

---

## 3. CI/CD Improvements (Applied)

### 3.1 Updated GitHub Actions — `.github/workflows/npm-publish.yml`

- `actions/checkout` v3 -> v4
- `actions/setup-node` v3 -> v4
- Added `npm run type-check` step before publish
- Node version 18 -> 20

---

## 4. Node Engine Requirement (Applied)

- Updated `engines.node` from `>=14.0.0` to `>=18.0.0` (tsup/esbuild/rollup all require 18+)
- Added `.nvmrc` pinned to `20`

---

## 5. Dev Dependency Upgrades (Applied)

| Package    | Before  | After   |
| ---------- | ------- | ------- |
| typescript | ^5.4.5  | ^5.8.3  |
| tsup       | ^8.0.0  | ^8.5.1  |

---

## 6. Recommended Upgrades (Not Applied — Requires Discussion)

These are larger changes that affect the library API, the example app architecture, or both.

### 6.1 Tailwind CSS v4 Compatibility (High Priority)

**Current:** The library's plugin uses the Tailwind v3 `addUtilities` API.
**Latest:** Tailwind v4.2.1 (CSS-first architecture, new plugin model).
**Impact:** Tailwind v3 has a v3-lts tag (3.4.19) so existing users aren't broken yet, but v4 adoption is growing. The plugin will need a v4-compatible path.

**Recommendation:**
- Keep v3 support as-is for now
- Add a v4-compatible export using the new `@plugin` / `@utility` CSS-first API
- Consider a major version bump (2.0) that targets v4 natively
- The `@tailwindcss/upgrade` CLI handles ~90% of migration for the example app

### 6.2 framer-motion to motion (Medium Priority)

**Current:** Example app uses `framer-motion` ^11.2.10.
**Latest:** Package renamed to `motion` (motion.dev). Migration is straightforward:
1. `npm uninstall framer-motion && npm install motion`
2. Change all imports from `"framer-motion"` to `"motion/react"`

This only affects the example app, not the library itself.

### 6.3 Next.js 14 to 15 (Medium Priority)

**Current:** Example uses Next.js 14.2.3.
**Latest:** 15.3.1 stable.

Key changes:
- `params` and `searchParams` are now async (needs `await` in page/layout components)
- React 19 required
- New caching defaults
- `next.config.mjs` -> `next.config.ts` supported natively

Since this is only the example/docs site, risk is low.

### 6.4 React 18 to 19 (Medium Priority)

**Current:** ^18
**Latest:** 19.2.4

Coupled to the Next.js 15 upgrade. Key changes:
- `ref` forwarding simplified (no more `forwardRef` needed)
- `use()` hook for promises and context
- Server Components improvements

### 6.5 tsup to tsdown (Low Priority)

**Current:** tsup ^8.5.1 (no longer actively maintained).
**Recommended:** tsdown (powered by Rolldown/Rust, actively developed).

Migration path: `npx tsdown migrate` handles most config. ESM-first approach, faster builds, better type generation via `--isolated-declarations`.

Not urgent since tsup still works fine and the library is small.

### 6.6 Add Testing (Low Priority but Valuable)

No tests exist for the library. Recommended minimum:
- Unit tests for `createRemClamp` (pure function, easy to test)
- Unit tests for `buenTypeTailwind` output (verify utility generation)
- Use Vitest (fast, TypeScript-native, ESM-first)

### 6.7 Pre-commit Hooks

No linting or formatting runs before commit. Consider:
- `husky` + `lint-staged` to run Prettier and type-check on staged files
- Prevents publishing broken code

---

## 7. Additional Code Quality Observations

### 7.1 Undefined CSS variable in example

`GlobalHeaderCopyButton.tsx` uses `border-[--foreground-rgb]` but `--foreground-rgb` is not defined in `globals.css`. Likely should be `--color-primary`.

### 7.2 Import paths in example

Some components import from `../../../../src/index` instead of `@muybuen/type`. Works for local dev but is brittle and doesn't match the documented API.

### 7.3 Copy/timeout logic duplication

`PanelCode` and `GlobalHeaderCopyButton` both implement the same "copy to clipboard + show confirmation for 2 seconds" pattern. Could extract a shared hook.

### 7.4 AnimatePresence usage

`IframeWrapper.tsx` has multiple conditional children inside one `AnimatePresence` — each should have a unique `key` for correct exit animations.

### 7.5 `useEffect` dependency

`SvgHeader.tsx` is missing `containerRef` in its `useEffect` dependency array.

### 7.6 Outdated component docs

`GenThreeShader/README.md` documents an `onDownload` prop that no longer exists.
