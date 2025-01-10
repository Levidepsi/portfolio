import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import post from './schemaTypes/post'
import page from './schemaTypes/page'
import home from './schemaTypes/home'
import slideshow from './components/slideshow'
import banner from './components/banner'
import text_with_image from './components/text_with_image'
import navigation from './schemaTypes/navigation'
import heading from './components/heading'
import multiple_text from './components/multiple_text'
import imageblock_text from './components/imageblock_text'
import multiple_image from './components/multiple_image'
import mapwithtext from './components/mapwithtext'
import investments from './schemaTypes/investments'
import portfolio from './schemaTypes/portfolio'
import featured_portfolio from './components/featured_portfolio'
import featured_banner from './components/featured_banner'
import text_with_image2 from './components/text_with_image2'
import multiple_text2 from './components/multiple_text2'
import people from './components/people'
import companies from './schemaTypes/companies'
import banner2 from './components/banner2'

const schema =
  [
    navigation,
    page, 
    home,
    post, 
    blockContent,
    investments,
    // portfolio,
    companies,
      // objects
    slideshow,
    banner,
    banner2,
    text_with_image,
    heading,
    multiple_text,
    imageblock_text,
    multiple_image,
    mapwithtext,
    featured_portfolio,
    featured_banner,
    text_with_image2,
    multiple_text2,
    people
  ]

export default schema;