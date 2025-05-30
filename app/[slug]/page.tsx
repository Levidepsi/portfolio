import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { ALLPAGE_QUERY, PAGE_QUERY } from "../../sanity/lib/client";
import { loadQuery } from "../../sanity/lib/store";
import PagePreview from "../../components/Previews/PagePreview";
import Pages from "../../components/pages/Pages";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const { isEnabled } = await draftMode();

  const page: any = await loadQuery<SanityDocument[]>(
    PAGE_QUERY,
    { slug },
    {
      perspective: isEnabled ? "previewDrafts" : "published",
      cache: "no-store",
    }
  );

  const aspectRatio = 1.91; // The desired aspect ratio
  let width = 1200; // Default width

  let height = Math.round(width / aspectRatio);

  if (height > 630) {
    height = 630;
    width = Math.round(height * aspectRatio);
  }

  let metaTitle = `JD Spirits | ${slug}`;
  const metadata = {
    title: metaTitle,
    description: "",

    openGraph: {
      title: metaTitle,
      description:
        page.data.meta_description != null
          ? page.data.meta_description
          : "JD Spirits",
      url: `https://ocean-and-sea.vercel.app/${slug}`,
      siteName: `${metaTitle}`,
      images: [
        {
          url: page.data.meta_image,
          width: 1200,
          height: 630,
          aspectRatio: aspectRatio,
        },
      ],
      type: "website",
    },
  };
  return metadata;
}

export default async function Page(props: { params: Params }) {
  const { isEnabled } = await draftMode();
  // const client = loadQuery(isEnabled ? token : undefined);
  const params = await props.params;
  const slug = params.slug;

  const page = await loadQuery<SanityDocument>(
    PAGE_QUERY,
    { slug },
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: isEnabled ? "previewDrafts" : "published",
      cache: "no-store",
    }
  );

  return isEnabled ? (
    <PagePreview initial={page} params={params} />
  ) : (
    <Pages page={page.data} />
  );
}

export async function generateStaticParams() {
  const allslug = await loadQuery<SanityDocument>(
    ALLPAGE_QUERY,
    {},
    {
      cache: "no-store",
    }
  );

  const pageslugs = allslug.data
    .filter((item: any) => item.slug !== "articles")
    .map((item: any) => ({
      slug: item.slug,
    }));

  return pageslugs;
}

export const revalidate = 1;