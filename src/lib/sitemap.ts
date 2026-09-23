import { getCollection } from "astro:content";
import { researchUpdated } from "../data/research";

export interface SitemapEntry {
  path: string;
  lastModified?: Date;
}

export const getSitemapEntries = async (): Promise<SitemapEntry[]> => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return [
    { path: "", lastModified: new Date(researchUpdated) },
    { path: "career/", lastModified: new Date(researchUpdated) },
    { path: "archive/" },
    { path: "blog/" },
    ...posts.map((post) => ({
      path: `blog/${post.id}/`,
      lastModified: post.data.updatedDate ?? post.data.pubDate,
    })),
  ];
};
