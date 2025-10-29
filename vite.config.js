import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import nightwatchPlugin from "vite-plugin-nightwatch";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), nightwatchPlugin()],
  server: {
    port: 5178,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@heroicons/vue"],
  },
});
