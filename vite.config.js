import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
export default defineConfig({
  plugins: [
    react(),
  ],
 
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json"],
  },
 
  build: {
    minify: "esbuild",
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react:    ["react", "react-dom"],
          mui:      ["@mui/material", "@mui/icons-material"],
          emotion:  ["@emotion/react", "@emotion/styled"],
          recharts: ["recharts"],
        },
      },
    },
  },
 
  server: {
    port: 3000,
    open: true,
  },
});