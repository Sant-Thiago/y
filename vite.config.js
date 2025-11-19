import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: import.meta.env.VITE_BASE || "/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
  