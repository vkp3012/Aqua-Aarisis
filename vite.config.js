// import { defineConfig } from 'vite'
// import react, { reactCompilerPreset } from '@vitejs/plugin-react'
// import babel from '@rolldown/plugin-babel'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] })
//   ],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ── Disable Lightning CSS — it misidentifies .js files as CSS
  // and throws "Unexpected end of input" on valid JS imports.
  css: {
    transformer: "postcss",   // use PostCSS instead of Lightning CSS
  },

  build: {
    // Prevent Vite from using esbuild's CSS minifier (which also
    // invokes Lightning CSS under the hood in some Vite versions)
    cssMinify: "esbuild",
  },

  // ── Resolve aliases (optional but avoids relative-path hell) ──
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // ── Dev server ────────────────────────────────────────────────
  server: {
    port: 3000,
    open: true,
  },
});