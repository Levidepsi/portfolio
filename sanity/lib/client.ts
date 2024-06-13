import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // These settings will be overridden in 
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/admin",
  },
});

export const NAVIGATION = groq`*[_type == "navigation"][0]{
  title,
  _type,
  "header_logo": header_logo.asset->url,
  "footer_logo": footer_logo.asset->url,
  header_menu[]{
    title,
    link
  },
   footer_menu[]{
    title,
    link
  },
}`;


export const HOME_QUERY = groq`*[_type == "home"][0]{
  title,
  "slug": slug.current,
  _type,
  components[]{
  _type,
    title,
    "image": image.asset->url,
    positions,
    slider_items[]{
    "image": image.asset->url
    },
  },
}`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  _type
}`;


export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current
}`;
