import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svg from "@neodx/svg/vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8880,
  },
  plugins: [
    vue(),
    svg({
      root: "src/shared/ui/icons/assets",
      group: true,
      // All paths should be relative to cwd or absolute.
      // For example, 'public/sprites' is an equivalent of `path.resolve(__dirname, 'public/sprites')`
      output: "public/sprites",
      metadata: "src/shared/ui/icons/sprite.h.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/",
});