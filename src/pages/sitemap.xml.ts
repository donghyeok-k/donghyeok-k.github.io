import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

interface SitemapEntry {
  path: string;
  lastModified?: Date;
}

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response("", { status: 500 });
  }

  const [posts, notes] = await Promise.all([
    getCollection("blog", ({ data }) => !data.draft),
    getCollection("analysis", ({ data }) => !data.draft),
  ]);

  const entries: SitemapEntry[] = [
    { path: "" },
    { path: "career/" },
    { path: "archive/" },
    { path: "blog/" },
    ...posts.map((post) => ({
      path: `blog/${post.id}/`,
      lastModified: post.data.updatedDate ?? post.data.pubDate,
    })),
    { path: "analysis/" },
    ...notes.map((note) => ({
      path: `analysis/${note.id}/`,
      lastModified: note.data.updatedDate ?? note.data.pubDate,
    })),
  ];

  const siteRoot = new URL(import.meta.env.BASE_URL, site);
  const urlElements = entries.map(({ path, lastModified }) => {
    const location = escapeXml(new URL(path, siteRoot).href);
    const lastmod = lastModified
      ? `<lastmod>${lastModified.toISOString()}</lastmod>`
      : "";

    return `<url><loc>${location}</loc>${lastmod}</url>`;
  });
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlElements,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=600",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
