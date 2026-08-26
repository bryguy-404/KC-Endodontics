import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../lib/site";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET = (async () => {
  const pages = await getCollection("pages");
  const paths = [
    "/",
    "/files/2020/02/PV-referral-form.pdf",
    ...pages.map((page) => `/${page.data.slug}/`),
  ].sort();
  const urls = paths
    .map((pathname) => `  <url><loc>${escapeXml(new URL(pathname, site.url).href)}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}) satisfies APIRoute;
