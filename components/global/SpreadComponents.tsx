"use client";

import {Key} from "react";
import SlideShow from "../sections/SlideShow";
import Banner from "../sections/Banner";
import Heading from "../sections/Heading";
import MultipleText from "../sections/MultipleText";
import ImageBlockText from "../sections/ImageBlockText";
import MultipleImage from "../sections/MultipleImage";
import Contact from "../sections/map/Contact";
import FeaturePortfolio from "../sections/FeaturePortfolio";
import TextWithImage from "../sections/TextWithImage";
import FeaturedBanner from "../sections/FeaturedBanner";
import TextWithImage2 from "../sections/TextWithImage2";
import MultipleText2 from "../sections/MultipleText2";
import People from "../sections/People";
import Timeline from "../sections/Timeline";
import Banner2 from "../sections/Banner2";
import Richtext from "../sections/Richtext";

export default function SpreadComponents({components}: {components: any}) {
  return (
    <>
      {components &&
        components.map(
          (
            component: {
              _key: Key | null | undefined;
              _type: string | number;
              slider_items: any;
              positions: string;
              image: string;
              description: any;
              max_width: number;
              content_position: string;
              description2: any;
              title: string;
              text_items: any;
              timeline_items: any;
              show_border: any;
              padding_top: number;
              imageblock_items: any;
              multiple_image_items: any;
              subtitle: string;
              map_api: string;
              description2_max_width: number;
              descriptions_max_width: number;
              description2_font_size: number;
              details: any;
              image_width: number;
              image_height: number;
              textwimage_items: any;
              textwimage_items2: any;
              padding_top_bottom: number;
              background: string;
              bgcolor: string;
              video: string;
              text_color: string;
              title_max_width: number;
              title_padding_bottom: number;
              background_color: string;
              titles_font_size: number;
              titles_lineheight: number;
              profiles: Array<{
                image: string;
                name: string;
                type: string;
                description: Array<{
                  _type: string;
                  style?: string;
                  children?: Array<{
                    _type: string;
                    text?: string;
                  }>;
                }>;
                body_bottom: Array<{
                  _key: string;
                  markDefs: Array<any>;
                  children: Array<{
                    _type: string;
                    text?: string;
                  }>;
                }>;
              }>;
              sub: string;
              website: string;
            },
            index: number
          ) => (
            // console.log(component._type)
            <div
              key={`${component._key} + ${index}`}
              className={`${component._type}`}>
              {
                {
                  slider: (
                    <SlideShow
                      title={component.title}
                      key={component._key}
                      slider_items={component.slider_items}
                      padding_top={component.padding_top}
                    />
                  ),
                  banner: (
                    <Banner
                      key={component._key}
                      image={component.image}
                      description={component.description}
                      max_width={component.max_width}
                      content_position={component.content_position}
                      video={component.video}
                    />
                  ),
                  banner2: (
                    <Banner2
                      key={component._key}
                      image={component.image}
                      title={component.title}
                      sub={component.sub}
                      website={component.website}
                      description={component.description}
                      max_width={component.max_width}
                    />
                  ),
                  heading: (
                    <Heading
                      key={component._key}
                      description={component.description}
                      title={component.title}
                      description2={component.description2}
                      show_border={component.show_border}
                      padding_top={component.padding_top}
                      description2_max_width={component.description2_max_width}
                      descriptions_max_width={component.descriptions_max_width}
                      description2_font_size={component.description2_font_size}
                    />
                  ),
                  multiple_text: (
                    <MultipleText
                      key={component._key}
                      padding_top_bottom={component.padding_top_bottom}
                      title={component.title}
                      text_items={component.text_items}
                      background={component.background}
                      text_color={component.text_color}
                      title_max_width={component.title_max_width}
                      title_padding_bottom={component.title_padding_bottom}
                    />
                  ),
                  multiple_text2: (
                    <MultipleText2
                      key={component._key}
                      padding_top_bottom={component.padding_top_bottom}
                      title={component.title}
                      text_items={component.text_items}
                      background={component.background}
                      titles_font_size={component.titles_font_size}
                      titles_lineheight={component.titles_lineheight}
                    />
                  ),
                  richtext: (
                    <Richtext
                      key={component._key}
                      title={component.title}
                      bgcolor={component.bgcolor}
                      text_color={component.text_color}
                      description={component.description}
                    />
                  ),
                  imageblock_text: (
                    <ImageBlockText
                      key={component._key}
                      imageblock_items={component.imageblock_items}
                    />
                  ),
                  multiple_image: (
                    <MultipleImage
                      key={component._key}
                      title={component.title}
                      multiple_image_items={component.multiple_image_items}
                    />
                  ),
                  maptwithtext: (
                    <Contact
                      key={component._key}
                      title={component.title}
                      description={component.description}
                      subtitle={component.subtitle}
                      map_api={component.map_api}
                    />
                  ),
                  feature_portfolio: (
                    <FeaturePortfolio
                      key={component._key}
                      title={component.title}
                      image={component.image}
                      description={component.description}
                      image_width={component.image_width}
                      image_height={component.image_height}
                      details={component.details}
                    />
                  ),
                  text_with_image: (
                    <TextWithImage
                      key={component._key}
                      padding_top={component.padding_top}
                      textwimage_items={component.textwimage_items}
                    />
                  ),
                  text_with_image2: (
                    <TextWithImage2
                      key={component._key}
                      textwimage_items2={component.textwimage_items2}
                    />
                  ),
                  featured_banner: (
                    <FeaturedBanner
                      key={component._key}
                      image={component.image}
                    />
                  ),
                  people: (
                    <People
                      key={component._key}
                      background_color={component.background_color}
                      profiles={component.profiles}
                      title={component.title}
                    />
                  ),
                  timeline: (
                    <Timeline
                      key={component._key}
                      title={component.title}
                      background={component.background}
                      timeline_items={component.timeline_items}
                    />
                  ),
                }[component._type]
              }
            </div>
          )
        )}
    </>
  );
}
