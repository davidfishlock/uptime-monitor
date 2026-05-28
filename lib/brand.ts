// Server-only — read at request time. Do NOT add the NEXT_PUBLIC_ prefix:
// that would inline the value into the client bundle at build, which would
// prevent one `:latest` image from serving multiple brands (community vs.
// the maintainer's hosted Uptime Koala instance both pull this same image).
//
// For use in client components, consume `useBrand()` from `@/components/brand-provider`.
export const BRAND_NAME = process.env.BRAND_NAME || 'Uptime Monitor'
export const BRAND_TAGLINE =
  process.env.BRAND_TAGLINE || 'Open-source uptime monitoring and status pages'
