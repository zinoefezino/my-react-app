import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "my-react-app";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? "/" : `/${repoName}/`,
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: [
            "@fortawesome/react-fontawesome",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/free-brands-svg-icons",
          ],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    open: true,
  },
});
