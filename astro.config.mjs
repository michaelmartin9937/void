import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  site: "https://the-void-cosmic.netlify.app",
  markdown: {
    shikiConfig: {
      // Shiki Themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "css-variables",
      wrap: true,
    },
  },
  trailingSlash: "always",
  integrations: [
    // example auto import component into blog post mdx files
    AutoImport({
      imports: [
        // https://github.com/delucis/astro-auto-import
        "@components/Admonition/Admonition.astro",
        "@components/Cta/NewsletterCta.astro",
      ],
    }),
    mdx(),
    tailwind(),
    sitemap(),
    compress(),
  ],
});
