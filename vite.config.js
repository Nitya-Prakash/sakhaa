import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        inspiration: resolve(root, "journey/inspiration.html"),
        build: resolve(root, "journey/build.html"),
        silicon: resolve(root, "journey/silicon.html"),
        avinya: resolve(root, "journey/avinya.html"),
        whatsNext: resolve(root, "journey/whats-next.html"),
        moreStories: resolve(root, "journey/morestories.html"),
      },
    },
  },
});
