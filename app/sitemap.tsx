import { ALLPAGE_QUERY } from "@/sanity/lib/client";
import { loadQuery } from "@/sanity/lib/store";
import { MetadataRoute } from "next";
import { SanityDocument } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ROOT_URL = "https://jd-spirits.vercel.app";

  const allslug = await loadQuery<SanityDocument[]>(ALLPAGE_QUERY, {}, { cache: "no-store" });

  const pageSlugs: MetadataRoute.Sitemap = allslug.data.map((item) => ({
    url: `${ROOT_URL}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [

    ...pageSlugs
  ];
}