import { defineConfig } from "vite";
import suidPlugin from "@suid/vite-plugin";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  base: "/shchehloviium/",
  plugins: [suidPlugin(), solidPlugin()],
  build: {
    target: "esnext",
  },
});
