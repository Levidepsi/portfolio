import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

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
  },
  contact_email,
  location,
  copywrite
}`;

export const HEADER = groq`*[_type == "navigation"][0]{
  title,
  _type,
  "header_logo": header_logo.asset->url,
  "header_logo2": header_logo2.asset->url,
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
}`;

export const FOOTER = groq`*[_type == "navigation"][0]{
  title,
  _type,
  "footer_logo": footer_logo.asset->url,
  "header_logo": header_logo.asset->url,
  contact_email,
  location,
  services,
  about,
  company_info,
  footer_menu[] {
    title,
    link
  }
}`;

export const HOME_QUERY = groq`*[_type == "home"][0]{
  title,
  "slug": slug.current,
  _type,
  "image": image.asset->url,
  "video": video.asset->url,
  meta_description,
  section_layout,
  content_alignment,
  quote_content,
  background_color,
  "meta_image": meta_image.asset->url,
  components[]{
    ...,
   "image": image.asset->url,
   "video": video.asset->url,
   "image_title": image_title.asset->url,
    content_position,
    section_layout,
    content_alignment,
    quote_content,
    background_color,
    title,
    textblock_items [] {
    title,
    sub_title,
    body,
    button_url,
   "image": image.asset->url,
    data
    },
    slider_items[]{
      title,
      link,
      "image": image.asset->url,
      body
    },
    slideshow_images[]{
      "image": image.asset->url,
    },
    multiple_text[] {
      title,
      position
    }
  }
}`;

export const ALLPAGE_QUERY = groq`*[_type == "page"]{
  title,
  sub_title,
  background_color,
  add_border_bottom,
  section_layout,
  content_alignment,
  _updatedAt,
  "slug": slug.current,
  _type,
  "menu_image": menu_image.asset->url,
  hamburger_color,
  components[]{
    ...,
   "image": image.asset->url,
   "video": video.asset->url,
   "image_title": image_title.asset->url,
    content_position,
    section_layout,
    content_alignment,
    quote_content,
    background_color,
    add_border_bottom,
    title,
    textblock_items [] {
    title,
    sub_title,
    body,
    button_label,
    button_url,
    right_content,
    tableData[] {
      column1,
      column2
    }
    }
  },
  
}`;

export const GET_ALL_PAGE_MENU_COLOR = groq`
  *[_type in ["page", "home"]]{
    "slug": slug.current,
    _type,
    menuColor
  }
`;


export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  _type,
  "image": image.asset->url,
  "meta_image": meta_image.asset->url,
  meta_description,
  section_layout,
  content_alignment,
  components[]{
  ...,
  "image": image.asset->url,
    right_content,
    section_layout,
    content_alignment,
    tableData[] {
      column1,
      column2,
      column3
    },
    textblock_items[]{
      title,
      sub_title,
      body,
      button_url,
      "image": image.asset->url,
      data
    },
    texts_accordions[] {
      title,
      body
    },
    slider_items[]{
      title,
      link,
      "image": image.asset->url,
      body
    },
    slideshow_images[]{
     
      "image": image.asset->url,
    },

    multipleText[] {
      body
    },
    items[]{
      title,
      "image": image.asset->url,
      body
    },
    socials[] {
      "image": image.asset->url,
      url

    },
    requests[] {
    title
    },
    accordionData[] {
      title,
      subtitle,
      enableCheckBox,
      left_content,
      description,
      right_content,
      alwaysActive,
      cookieGroups[]{
        groupTitle,
        cookies[]{
          name,
          expiration,
          function,
          externalLink
        }
      }
    }
  }
}`;

export const DESTINATION_QUERY = groq`*[_type == "destinations" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  _type,
  "image": image.asset->url,
  "meta_image": meta_image.asset->url,
  meta_description,
  section_layout,
  content_alignment,
  components[]{
  ...,
  "image": image.asset->url,
    right_content,
    section_layout,
    content_alignment,
    tableData[] {
      column1,
      column2,
      column3
    },
    textblock_items[]{
      title,
      sub_title,
      body,
      button_url,
      "image": image.asset->url,
      data
    },
    texts_accordions[] {
      title,
      body
    },
    slider_items[]{
      title,
      link,
      "image": image.asset->url,
      body
    },
    slideshow_images[]{

      "image": image.asset->url,
    },
    interests[] {
      title
    },
    destinations[]{
      title,
      body,
      mapUrl,
      "image": image.asset->url,

    }
  }
}`;