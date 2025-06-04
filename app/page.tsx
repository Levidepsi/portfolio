import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "../sanity/lib/store";
import { Metadata } from "next";
import { HOME_QUERY } from "@/sanity/lib/client";
import HomePreview from "@/components/Previews/HomePreview";
import Homepage from "@/components/pages/Homepage";

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled } = await draftMode();

  const page: any = await loadQuery<SanityDocument[]>(
    HOME_QUERY,
    {},
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

  let metaTitle = `JD Spirits`;
  const metadata = {
    title: metaTitle,
    description: "",

    openGraph: {
      title: metaTitle,
      description:
        page.data && page.data.meta_description != null
          ? page.data.meta_description
          : "JD Spirits",
      url: `https://jd-spirits.vercel.app/`,
      siteName: `${metaTitle}`,
      images: [
        {
          url: page.data && page.data.meta_image && page.data.meta_image,
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

export default async function Home() {
  const { isEnabled } = await draftMode();
  // const client = loadQuery(isEnabled ? token : undefined);
  const homedata = await loadQuery<SanityDocument[]>(
    HOME_QUERY,
    {},
    {
      perspective: isEnabled ? "previewDrafts" : "published",
      cache: "no-store",
    }
  );


  return isEnabled ? (
    <HomePreview initial={homedata} />
  ) : (
    <Homepage data={homedata.data} />
  );
}

export async function generateStaticParams() {
  return [
    { slug: "/" }, // -> lets cache these pages as they will never change!
  ];
}

export const revalidate = 1;
