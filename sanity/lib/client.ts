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


export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current
}`;

export const HOME_QUERY = groq`*[_type == "home"][0]{
  title,
  "slug": slug.current
}`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current
}`;
