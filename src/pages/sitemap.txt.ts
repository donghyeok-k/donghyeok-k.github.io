import type { APIRoute } from "astro";
import { getSitemapEntries } from "../lib/sitemap";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response("", { status: 500 });
  }

  const siteRoot = new URL(import.meta.env.BASE_URL, site);
  const entries = await getSitemapEntries();
  const body = `${entries
    .map(({ path }) => new URL(path, siteRoot).href)
    .join("\n")}\n`;

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
