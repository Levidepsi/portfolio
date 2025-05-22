import { type SchemaTypeDefinition } from 'sanity'
import banner from '../components/banner'
import featured_banner from '../components/featured_banner'
import heading from '../components/heading'
import image_gallery from '../components/image_gallery'
import imageblock_text from '../components/imageblock_text'
import landing_banner from '../components/landing_banner'
import multiple_text from '../components/multiple_text'
import richtext from '../components/richtext'
import slideshow from '../components/slideshow'
import text_with_image from '../components/text_with_image'
import blockContent from './blockContent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
      blockContent,
      slideshow,
      banner,
      text_with_image,
      heading,
      richtext,
      multiple_text,
      imageblock_text,
      featured_banner,
      landing_banner,
      image_gallery,
      // featured_projects,
  ],
}
