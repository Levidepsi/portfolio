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
  "header_logo2": header_logo2.asset->url,

  "footer_logo": footer_logo.asset->url,
  header_menu[]{
    title,
    page{
      slug->{
        "slug": slug.current
        }
      },
      subMenu[]{
      title,
      custom_links,
      page{
        slug->{
          "slug": slug.current
          },
        },
      },
    },
   footer_menu[]{
    title,
    link
  },
  social_links[]{
    title,
    link
  }
}`;


export const HOME_QUERY = groq`*[_type == "home"][0]{
  title,
  "slug": slug.current,
  _type,
  "image": image.asset->url,
  meta_description,
  components[]{
  ...,
  _type,
    title,
    "image": image.asset->url,
    "video":video.asset->url,
    positions,
    slider_items[]{
    "image": image.asset->url
    },
    text_items[]{
      title,
      body,
      
    },
    textwimage_items[]{
      "image": image.asset->url,
      title,
      body,
      content_position,
      body_bottom,
      body_bottom_max_width
    },
    textwimage_items2[]{
      "image": image.asset->url,
      title,
      body,
      content_position,
      background
    },
    multiple_image_items[]{
      title,
      link,
      "image": image.asset->url,
    }
  },
}`;

export const ALLPAGE_QUERY = groq`*[_type == "page"]{
  title,
  "slug": slug.current,
  _type,
  "menu_image": menu_image.asset->url,
  hamburger_color
}`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  _type,
  "image": image.asset->url,
  meta_description,
  components[]{
    ...,
    _type,
    title,
    "image": image.asset->url,
    positions,
    title_max_width,
    title_padding_bottom,
    text_color,
    slider_items[]{
      link,
      url,
      body
    },
    text_items[]{
      title,
      body,
      "image": image.asset->url,
      learn_more,
       slug->{
        "slug": slug.current
      }
    },
    timeline_items[]{
      title,
      body
    },
    imageblock_items[]{
      title,
      sub_title,
      body,
      "image": image.asset->url,
    },
    multiple_image_items[]{
    title,
      link,
      "image": image.asset->url,
    },
      textwimage_items[]{
      "image": image.asset->url,
      title,
      body,
      content_position,
      body_bottom,
      body_bottom_max_width
    },
    textwimage_items2[]{
      "image": image.asset->url,
      title,
      body,
      content_position,
      background
    },
    profiles[]{
      "image": image.asset->url,
      name,
      type,
      description
    }
  },
}`;

export const ALLINVESTMENTS_QUERY = groq`*[_type == "news"]{
  title,
  "slug": slug.current,
  _type,
}`;



export const SINGLE_INVESTMENTS_QUERY = groq`*[_type == "news" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  _type,
  "image": image.asset->url,
  meta_description,
  components[]{
    ...,
    _type,
    title,
    "image": image.asset->url,
    positions,
    slider_items[]{
      link,
      url,
      body
    },
    text_items[]{
      title,
      link,
      body,
      show_link
    },
    imageblock_items[]{
      title,
      sub_title,
      body,
      "image": image.asset->url,
    },
    multiple_image_items[]{
      show_border_bottom,
      show_border_right,
      margin_top,
      link,
      "image": image.asset->url,
      height,
      width
    }
  },
}`;


export const ALLPORTFOLIO_QUERY = groq`*[_type == "portfolio"]{
  title,
  "slug": slug.current,
  _type,
}`;



export const SINGLE_PORTFOLIO_QUERY = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  _type,
  "image": image.asset->url,
  meta_description,
  components[]{
    ...,
    _type,
    title,
    "image": image.asset->url,
    positions,
    slider_items[]{
      link,
      url,
      body
    },
    text_items[]{
      title,
      link,
      body,
      show_link
    },
    imageblock_items[]{
      title,
      sub_title,
      body,
      "image": image.asset->url,
    },
    multiple_image_items[]{
      show_border_bottom,
      show_border_right,
      margin_top,
      link,
      "image": image.asset->url,
      height,
      width
    },
    details[] {
      key,
      value
    }
  },
}`;


export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current
}`;
