import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * Medium-inspired Editorial Theme
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Harsh RB",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "resources.harshrb.in", // Updated to your live domain
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter", // Crisp, modern sans-serif for titles
        body: "Lora", // Elegant, highly readable serif for blog text
        code: "Fira Code", // Clean developer font for code blocks
      },
      colors: {
        lightMode: {
          light: "#ffffff", // Pure white background
          lightgray: "#f9f9f9", // Very subtle gray for code/callout backgrounds
          gray: "#e6e6e6", // Soft borders
          darkgray: "#242424", // Medium's rich charcoal for body text (reduces eye strain vs pure black)
          dark: "#000000", // Pure black for high-contrast headings
          secondary: "#1a8917", // Medium's signature green for links and accents
          tertiary: "#757575", // Muted gray for metadata and dates
          highlight: "rgba(26, 137, 23, 0.08)", // Very subtle green background highlight
          textHighlight: "rgba(26, 137, 23, 0.2)", // Green text highlighter
        },
        darkMode: {
          light: "#121212", // Deep charcoal background (easier on eyes than pure black)
          lightgray: "#1e1e1e", // Elevated elements and code blocks
          gray: "#333333", // Dark borders
          darkgray: "#e2e2e2", // Soft off-white for highly readable body text
          dark: "#ffffff", // Pure white for headings
          secondary: "#26a641", // A slightly brighter, high-visibility green for dark mode links
          tertiary: "#a3a3a3", // Muted text for dates/metadata
          highlight: "rgba(38, 166, 65, 0.15)", // Subtle dark-green highlight
          textHighlight: "rgba(38, 166, 65, 0.3)", // Dark-mode green text highlighter
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(), 
    ],
  },
}

export default config