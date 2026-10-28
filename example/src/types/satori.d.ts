import "react";

// Satori (next/og) styles elements with Tailwind classes passed as `tw`.
declare module "react" {
  // This merges into React's own interface, so the name and type parameter
  // must match it; the base no-unused-vars rule can't see declaration merging.
  // eslint-disable-next-line no-unused-vars
  interface HTMLAttributes<T> {
    tw?: string;
  }
}
