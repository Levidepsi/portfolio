
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { ALLINVESTMENTS_QUERY, SINGLE_INVESTMENTS_QUERY } from "../../../sanity/lib/client";
import { loadQuery } from "../../../sanity/lib/store";
import PagePreview from "../../../components/Previews/PagePreview";
import Pages from "../../../components/pages/Pages";
import Link from "next/link";
import { Metadata } from "next";


export async function generateMetadata({
    params,
  }: {
    params: { slug: string,  }
  }): Promise<Metadata> {
  const { slug } = params
  
	const page: any = await loadQuery<SanityDocument[]>(SINGLE_INVESTMENTS_QUERY, {slug}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    cache: "no-store"
  },);

	const aspectRatio = 1.91; // The desired aspect ratio
	let width = 1200; // Default width

	let height = Math.round(width / aspectRatio);

	if (height > 630) {
		height = 630;
		width = Math.round(height * aspectRatio);
	}

	let metaTitle = `Osprey | News | ${slug}`;
	const metadata = {
		title: metaTitle,
		description: "",

		openGraph: {  
			title: metaTitle,
			description: page.data.meta_description ? page.data.meta_description : "Osprey",
			url: `https://osprey-one.vercel.app/news/${slug}`,
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



export default async function Page({
    params,
  }: {
    params: { slug: string,  }
  }) {
  const {isEnabled} = draftMode()
  // const client = loadQuery(isEnabled ? token : undefined);
  const { slug } = params
 
  const page = await loadQuery<SanityDocument>(SINGLE_INVESTMENTS_QUERY, {slug}, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    cache: "no-store"
  })


  return isEnabled ? (
    <>
      <Link href={"/news"} className="pt-[63px] lg:pt-[126px] px-5 lg:px-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="12.21" height="12.21" viewBox="0 0 24.154 24.983">
              <g id="Icon_feather-arrow-down" data-name="Icon feather-arrow-down" transform="translate(1 1.414)">
                <g id="Icon_feather-arrow-down-2" data-name="Icon feather-arrow-down" transform="translate(0 22.154) rotate(-90)">
                  <path id="Path_36" data-name="Path 36" d="M0,22.154V0" transform="translate(11.077)" fill="none" stroke="#0d4ba0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  <path id="Path_37" data-name="Path 37" d="M22.154,11.077,11.077,0,0,11.077" fill="none" stroke="#0d4ba0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </g>
              </g>
            </svg>
          <h2 className="text-[16px] leading-[20px] lg:text-[18px] lg:leading-[22px] apercu text-[#0D4BA0]">Back</h2>
        </Link>
    <PagePreview initial={page} params={params} />

    </>
  ) : (
      <>
        <Link href={"/news"}  className="pt-[63px] cursor-pointer flex items-center lg:pt-[126px] px-5 lg:px-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="12.21" height="12.21" viewBox="0 0 24.154 24.983">
              <g id="Icon_feather-arrow-down" data-name="Icon feather-arrow-down" transform="translate(1 1.414)">
                <g id="Icon_feather-arrow-down-2" data-name="Icon feather-arrow-down" transform="translate(0 22.154) rotate(-90)">
                  <path id="Path_36" data-name="Path 36" d="M0,22.154V0" transform="translate(11.077)" fill="none" stroke="#0d4ba0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  <path id="Path_37" data-name="Path 37" d="M22.154,11.077,11.077,0,0,11.077" fill="none" stroke="#0d4ba0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </g>
              </g>
            </svg>
          <h2 className="text-[16px] pl-[15px] leading-[20px] lg:text-[18px] lg:leading-[22px] apercu text-[#0D4BA0]">Back</h2>
        </Link>
        <Pages page={page.data} />
      </>
  );
}



export async function generateStaticParams() {
	  const allslug = await loadQuery<SanityDocument>(ALLINVESTMENTS_QUERY, {},{
    cache: "no-store"
    },);
  
  
 const pageslugs =  allslug.data.map((item: any) => {
    return {
      slug: item.slug
    }
  })

  return pageslugs
  }

export const revalidate = 1;