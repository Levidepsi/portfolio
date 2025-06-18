import { type SchemaTypeDefinition } from "sanity";
import banner from "./components/banner";
import featured_banner from "./components/featured_banner";
import heading from "./components/heading";
import image_gallery from "./components/image_gallery";
import imageblock_text from "./components/imageblock_text";
import landing_banner from "./components/landing_banner";
import multiple_text from "./components/multiple_text";
import richtext from "./components/richtext";
import slideshow from "./components/slideshow";
import text_with_image from "./components/text_with_image";
import blockContent from "./schemaTypes/blockContent";
import home from "./schemaTypes/home";
import navigation from "./schemaTypes/navigation";
import page from "./schemaTypes/page";
import twocolrichtext from "./components/twocolrichtext";
import quotewithrichtext from "./components/quotewithrichtext";
import imagewithtextblock from "./components/imagewithtextblock";
import contact from "./components/contact";
import destinations from "./schemaTypes/destinations";
import mapwithimage from "./components/mapwithimage";
import text_with_image2 from "./components/text_with_image2";
import accordions from "./components/accordions";
import settings from "./schemaTypes/settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // document
    navigation,
    home,
    page,
    destinations,
    settings,
    blockContent,
    slideshow,
    banner,
    text_with_image,
    text_with_image2,
    heading,
    richtext,
    multiple_text,
    imageblock_text,
    featured_banner,
    // landing_banner,
    // image_gallery,
    twocolrichtext,
    quotewithrichtext,
    imagewithtextblock,
    contact,
    mapwithimage,
    accordions
    // featured_projects,
  ],
};
