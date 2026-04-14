import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    transformer: 'postcss', // use postcss instead of lightningcss
  },
  build: {
    cssMinify: 'esbuild', // or false to disable CSS minification
  },
  plugins: [react()],

  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json"],
  },

  build: {
    minify: "esbuild",
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      output: {
        // manualChunks MUST be a function, not an object, in Vite 5 + Rollup 4
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react";
          }
          if (id.includes("node_modules/@mui") || id.includes("node_modules/@emotion")) {
            return "mui";
          }
          if (id.includes("node_modules/recharts") || id.includes("node_modules/d3")) {
            return "recharts";
          }
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});