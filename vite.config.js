import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Adhkar - Daily Remembrance",
        short_name: "Adhkar",
        description: "Daily Islamic Adhkar, Duas and Remembrance",
        theme_color: "#0f3d32",
        background_color: "#0f1110",
        display: "standalone",
        start_url: "/",

        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },

      workbox: {
        globPatterns: [
          "**/*.{js,css,html,svg,webp,woff2,mp3,wav,ogg}",
        ],
      },
    }),
  ],
});