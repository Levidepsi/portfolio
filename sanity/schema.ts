import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import page from './schemaTypes/page'
import home from './schemaTypes/home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: 
  [
    post, 
    page, 
    home,
    author, 
    category, 
    blockContent
  ],
}
