import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import beep from "@rollup/plugin-beep"
export default defineConfig({
  plugins: [react(), beep()],

  build: {
    chunkSizeWarningLimit: 100000000,
  },
})
