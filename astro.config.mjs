import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const [owner = "", repository = ""] = (
  process.env.GITHUB_REPOSITORY ?? "/"
).split("/");

const isGitHubBuild = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repository === `${owner}.github.io`;
const base = isGitHubBuild && repository && !isUserSite ? `/${repository}` : "/";

export default defineConfig({
  site: "https://donghyeok-k.github.io",
  base,
  integrations: [sitemap()],
});
