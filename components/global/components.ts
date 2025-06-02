import { SliderArrayValues } from "@/types/slider";
import { Key } from "react";

export interface SlideShowImagesValues {
  title: string;
  sub_title: string;
  body: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  image: string
}

export interface ImageTextBlocks {
    title: string;
    sub_title: string;
    body: Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
    }>;
    button_url: string;
    image: string;
    data: number
}

export interface Items2 {
  title: string;
  body: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  image: string;
  button_label: string;
  button_url: string

}

export interface TextAccordions{
  title: string;
  body: Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
    }>;
}

export interface Socials {
  image: string;
  url: string
}
export interface MultipleTextArray {
  title: string;
  position: string;
}

export interface MultipleTextProp {
  body: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
}

export interface Destinations {
  title: string;
  body: Array<{
      _type: string;
      style?: string;
      children?: Array<{
        _type: string;
        text?: string;
      }>;
  }>;
  mapUrl: string;
  image: string
}

export interface Requests {
  title: string
}
export interface COMPONENTS {
  _key: Key | null | undefined;
  _type: string | number;
  image: string;
  video: string;
  image_title: string;
  description: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  quote_content: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  left_content: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  right_content: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  content_position: string;
  content_alignment: string;
  section_layout: string;
  max_width: number;
  title: string;
  sub_title: string;
  background_color: string;
  backgroundColor: string;
  button_label: string;
  button_url: string;
  padding_top: number;
  paddingTop: number;
  paddingBottom: number;
  descriptions_max_width: number;
  margin_top: number;
  margin_bottom: number;
  contentType: string;
  textblock_items: ImageTextBlocks[];
  featured_article_items: any;
  tableData: any;
  padding_bottom: number;
  body: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  image_position: boolean;
  add_border_bottom: boolean;
  contact_details: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  api: string;
  telephone:  Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  email:  Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  address:  Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
  anchor_id: string;
  link: string;
  slider_items: SliderArrayValues[]
  image_height: number;
  layout: string;
  slideshow_images: SlideShowImagesValues[];
  left_description:
   Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
   }>;
  texts_accordions: TextAccordions[];
  socials: Socials[];
  destinations: Destinations[];
  multipleText: MultipleTextProp[];
  allowSliderMobile: boolean;
  multiple_text: MultipleTextArray[];
  content_title: string;
  section_position: string;
  image_size: string;
  enable_border: boolean;
  items: Items2[];
  largePaddingLeftRight: boolean;
  url: string;
  requests: Requests[]
}