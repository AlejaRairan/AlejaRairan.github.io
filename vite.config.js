import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The site is served from the root of alejarairan.github.io
  base: "/",
  server: {
    open: true, // opens the browser automatically on npm run dev
  },
});
