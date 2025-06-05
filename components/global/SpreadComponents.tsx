"use client";

import { Key, useEffect } from "react";
import Banner from "../sections/Banner";
import TextWithImage from "../sections/textwithimage/TextWithImage";
import MultipleText from "../sections/mutipletext/MultipleText";
import QuotewithRichtext from "../sections/quotewithrichtext/QuotewithRichtext";
import ImagewithTextBlock from "../sections/imagewithtextblock/ImagewithTextBlock";
import FeaturedArticle from "../sections/featuredarticle/FeaturedArticle";
import { FeaturedArticleProps } from "@/types/componentTypes";
import TwoColRichtext from "../sections/twocolrichtext/TwoColRichtext";
import Contact from "../sections/contact/Contact";
import Heading from "../sections/heading/Heading";
import Slider from "../sections/slider/Slider";
import { SliderArrayValues, SliderValues } from "@/types/slider";
import FeaturedBanner from "../sections/featuredBanner/FeaturedBanner";
import { COMPONENTS } from "./components";
import MapWithImage from "../sections/mapwithimage/MapWithImage";
import Richtext from "../sections/richtext/Richtext";
import TextWithImage2 from "../sections/textwithimage/TextWithImage2";




export default function SpreadComponents({ components }: { components: any }) {
  return (
    <>
      {components &&
        components.map(
          (
            component: COMPONENTS,
            index: number
          ) => (
            <div
              key={`${component._key} + ${index}`}
              className={`${component._type}`}
            >
              {
                {
                  banner: (
                    <Banner
                      key={component._key}
                      image={component.image}
                      video={component.video}
                      image_title={component.image_title}
                      description={component.description}
                      max_width={component.max_width}
                      content_position={component.content_position}
                      url={component.url}
                      title={component.title}
                    />
                  ),
                  text_with_image: (
                    <TextWithImage
                      key={component._key}
                      title={component.title}
                      background_color={component.background_color}
                      content_title={component.content_title}
                      enable_border={component.enable_border}
                      button_label={component.button_label}
                      button_url={component.button_url}
                      image={component.image}
                      image_size={component.image_size}
                      section_position={component.section_position}
                      content_position={component.content_position}
                      body={component.body}
                      sub_title={component.sub_title}

                    />  
                  ),
                  text_with_image2: (
                    <TextWithImage2
                      key={component._key}
                      title={component.title}
                      paddingTop={component.paddingTop}
                      paddingBottom={component.paddingBottom}
                      items={component.items}
                    />  
                  ),
                  multiple_text: (
                    <MultipleText
                      key={component._key}
                      title={component.title}
                      body={component.body}
                      backgroundColor={component.backgroundColor}
                      paddingTop={component.paddingTop}
                      paddingBottom={component.paddingBottom}
                      descriptions_max_width={component.descriptions_max_width}
                      left_description={component.left_description}
                      texts_accordions={component.texts_accordions}
                      sub_title={component.sub_title}
                    />
                  ),
                  quote_with_richtext: (
                    <QuotewithRichtext
                      key={component._key}
                      body={component.body}
                      background_color={component.background_color}
                      title={component.title}
                      quote_content={component.quote_content}
                      button_label={component.button_label}
                      button_url={component.button_url}
                      padding_top={component.padding_top}
                      padding_bottom={component.padding_bottom}
                    />
                  ),
                  image_with_text_block: (
                    <ImagewithTextBlock
                      key={component._key}
                      background_color={component.background_color}
                      title={component.title}
                      image={component.image}
                      padding_top={component.padding_top}
                      padding_bottom={component.padding_bottom}
                      textblock_items={component.textblock_items}
                      sub_title={component.sub_title}
                      allowSliderMobile={component.allowSliderMobile}
                      largePaddingLeftRight={component.largePaddingLeftRight}
                    />
                  ),
                  featured_article: (
                    <FeaturedArticle
                      key={component._key}
                      title={component.title}
                      padding_top={component.padding_top}
                      padding_bottom={component.padding_bottom}
                      featured_article_items={component.featured_article_items}
                    />
                  ),
                  two_col_richtext: (
                    <TwoColRichtext
                      key={component._key}
                      title={component.title}
                      left_content={component.left_content}
                      right_content={component.right_content}
                      background_color={component.background_color}
                      padding_top={component.padding_top}
                      padding_bottom={component.padding_bottom}
                      margin_top={component.margin_top}
                      margin_bottom={component.margin_bottom}
                      tableData={component.tableData}
                      add_border_bottom={component.add_border_bottom}
                    />
                  ),
                  contact: (
                    <Contact
                      key={component._key}
                      title={component.title}
                      api={component.api}
                      telephone={component.telephone}
                      email={component.email}
                      address={component.address}
                      socials={component.socials}
                      description={component.description}
                      layout={component.layout}
                      requests={component.requests}
                      image={component.image}
                    />
                  ),
                  heading: (
                    <Heading
                      key={component._key}
                      title={component.title}
                      descriptions_max_width={component.descriptions_max_width}
                      padding_top={component.padding_top}
                      description={component.description}
                      multiple_text={component.multiple_text}
                    />
                  ),
                  slider: (
                    <Slider
                      key={component._key}
                      title={component.title}
                      slider_items={component.slider_items}
                    />
                  ),
                  featured_banner: (
                    <FeaturedBanner
                      key={component._key}
                      image={component.image}
                      image_height={component.image_height}
                      backgroundColor={component.backgroundColor}
                    />
                  ),
                  mapwithimage: (
                    <MapWithImage
                      key={component._key}
                      destinations={component.destinations}
                    />
                  ),
                  richtext: (
                    <Richtext
                      key={component._key}
                      title={component.title}
                      description={component.description}
                    />
                  )
                }[component._type]
              }
            </div>
          )
        )}
    </>
  );
}
