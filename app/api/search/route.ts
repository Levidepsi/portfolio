import { NextResponse } from "next/server";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-24",
  useCdn: process.env.NODE_ENV === "production",
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q")?.trim().toLowerCase() || "";

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter `q` is required." },
        { status: 400 }
      );
    }

    const sanityQuery = groq`
        *[(_type == "page" || _type == "projects") && title match $query + "*"]{
          title,
          "slug": slug.current,
          "meta_image": meta_image.asset->url,
          meta_description,
          _type
        }
      `;

    // Fix: Ensure query is correctly passed as an object
    const results = await client.fetch(sanityQuery, {
      query: query as unknown as never,
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
