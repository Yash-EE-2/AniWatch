import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "https://playtubebyyashpz.onrender.com/api/v1",
      "/api": "https://aniwatch-1-pda0.onrender.com/api/v1",
    },
  },
});

