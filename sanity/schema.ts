import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import post from './schemaTypes/post'
import page from './schemaTypes/page'
import home from './schemaTypes/home'
import slideshow from './components/slideshow'
import banner from './components/banner'
import text_with_image from './components/text_with_image'
import navigation from './schemaTypes/navigation'

const schema =
  [
    navigation,
    page, 
    home,
    post, 
    blockContent,
      // objects
    slideshow,
    banner,
    text_with_image,
  ]

export default schema;