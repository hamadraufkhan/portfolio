import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Large/binary assets under public/ can lock on Windows and crash the watcher
      ignored: ["**/public/projects/**"],
    },
  },
});
