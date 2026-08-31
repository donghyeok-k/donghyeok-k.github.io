import { getCollection } from "astro:content";

export interface SitemapEntry {
  path: string;
  lastModified?: Date;
}

export const getSitemapEntries = async (): Promise<SitemapEntry[]> => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return [
    { path: "" },
    { path: "career/" },
    { path: "archive/" },
    { path: "blog/" },
    ...posts.map((post) => ({
      path: `blog/${post.id}/`,
      lastModified: post.data.updatedDate ?? post.data.pubDate,
    })),
  ];
};
