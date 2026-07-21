import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Actions sets GITHUB_ACTIONS=true for Pages builds
  base: process.env.GITHUB_ACTIONS ? "/portfolio/" : "/",
  plugins: [react()],
  server: {
    watch: {
      // Large/binary assets under public/ can lock on Windows and crash the watcher
      ignored: ["**/public/**"],
    },
  },
});
