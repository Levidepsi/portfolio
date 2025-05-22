import type { StructureResolver } from 'sanity/structure'
import {orderableDocumentListDeskItem} from "@sanity/orderable-document-list"
import { MarkerIcon } from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems()
        .reverse()
        .filter(item => item.getId() !== 'destinations'), // Filter out 'people' type
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'destinations',
        title: 'Destinations',
        icon: MarkerIcon,
        id: 'orderable-destinations',
        // pass from the structure callback params above
        S,
        context,
      }),
    ])
