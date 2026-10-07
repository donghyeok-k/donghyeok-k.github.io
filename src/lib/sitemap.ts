import { getCollection } from "astro:content";
import { researchUpdated } from "../data/research";
import { projectsUpdated } from "../data/projects";

export interface SitemapEntry {
  path: string;
  lastModified?: Date;
}

export const getSitemapEntries = async (): Promise<SitemapEntry[]> => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const portfolioUpdated = [researchUpdated, projectsUpdated].sort().at(-1);
  const latestPostUpdate = posts.length
    ? new Date(Math.max(...posts.map((post) => (post.data.updatedDate ?? post.data.pubDate).valueOf())))
    : undefined;

  return [
    { path: "", lastModified: new Date(`${portfolioUpdated}T00:00:00+09:00`) },
    { path: "career/", lastModified: new Date(`${portfolioUpdated}T00:00:00+09:00`) },
    { path: "archive/" },
    { path: "blog/", lastModified: latestPostUpdate },
    ...posts.map((post) => ({
      path: `blog/${post.id}/`,
      lastModified: post.data.updatedDate ?? post.data.pubDate,
    })),
  ];
};
