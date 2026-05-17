// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Vercel sets VERCEL=1 during builds. Cloudflare uses the default Lovable/Wrangler pipeline.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  // Cloudflare plugin outputs a Worker bundle — Vercel cannot serve that.
  cloudflare: isVercel ? false : undefined,
  plugins: isVercel ? [nitro()] : [],
  tanstackStart: isVercel
    ? {}
    : {
        // Custom SSR error wrapper for Cloudflare Workers (see src/server.ts).
        server: { entry: "server" },
      },
});
