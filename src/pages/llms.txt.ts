import type { APIRoute } from "astro";
import { researchProjects, researchUpdated } from "../data/research";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("", { status: 500 });
  }

  const root = new URL(import.meta.env.BASE_URL, site);
  const page = (path: string) => new URL(path, root).href;
  const body = [
    "# Donghyeok Kim (김동혁)",
    "",
    "> Official personal website of a KENTECH undergraduate researcher working across energy systems, carbon markets, and computational modeling.",
    "",
    `## Selected Research (updated ${researchUpdated})`,
    "",
    ...researchProjects.map((project) => `- ${project.title}`),
    "",
    "## Canonical Pages",
    "",
    `- [Home](${page("")})`,
    `- [Career and Activities](${page("career/")})`,
    `- [Writing](${page("blog/")})`,
    `- [Public Archive](${page("archive/")})`,
    "",
    "## Contact",
    "",
    "- Personal: research.assistant.dh@gmail.com",
    "- KENTECH: lucaskdh@kentech.ac.kr",
    "- LinkedIn: https://www.linkedin.com/in/donghyeok-kim-061433279/",
    "- GitHub: https://github.com/donghyeok-k",
    "",
    "This file is a factual navigation aid. The linked public pages are the source of truth.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
