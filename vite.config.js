import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080, // Ensure the app runs on port 8080
    host: true, // Exposes the server to be accessible from external sources
    proxy: {
      "/api": {
        target: "http://localhost:1337", // Strapi backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes "/api" prefix
      },
    },
  },
  build: {
    minify: "esbuild", // Fast and efficient minification
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },
});
