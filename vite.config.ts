import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(new URL("/src/components", import.meta.url)),
      "@services": fileURLToPath(new URL("/src/services", import.meta.url)),
      "@views": fileURLToPath(new URL("/src/views", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/sass/var.scss" as *;`,
      },
    },
  },
});
