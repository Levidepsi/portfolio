import type { DefaultDocumentNodeResolver } from 'sanity/structure'
import { Iframe, IframeOptions } from 'sanity-plugin-iframe-pane'
import post from '../../sanity/schemaTypes/post'
import { DRAFT_MODE_ROUTE } from '../../sanity/lib/api'
import page from '../../sanity/schemaTypes/page'
import home from '../../sanity/schemaTypes/home'


const iframeOptions = {
  url: {
    origin: 'same-origin',
    preview: (document: any) => {
      if (!document) {
        return new Error('Missing document')
      }
      switch (document._type) {
        case 'post':
          return (document as any)?.slug?.current
            ? `/posts/${(document as any).slug.current}`
            : new Error('Missing slug')
        case 'home':
            return "/"
        case 'page':
          return (document as any)?.slug?.current
              ? `/${(document as any).slug.current}`
              : new Error('Missing slug')
        default:
          return new Error(`Unknown document type: ${document?._type}`)
      }
    },
    draftMode: DRAFT_MODE_ROUTE,
  },
  reload: { button: true },
} satisfies IframeOptions

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
    
      case post.name:
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      case home.name:
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      case page.name:
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      default:
        return null
    }
  }
}