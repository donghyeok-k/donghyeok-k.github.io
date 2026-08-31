import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("", { status: 500 });
  }

  const siteRoot = new URL(import.meta.env.BASE_URL, site);
  const sitemapUrl = new URL("sitemap.xml", siteRoot);
  const textSitemapUrl = new URL("sitemap.txt", siteRoot);
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapUrl.href}`,
    `Sitemap: ${textSitemapUrl.href}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
