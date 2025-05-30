'use client'

import { locations } from "./plugins/presentation/locate";

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './sanity/env'
import { structure } from './sanity/structure'
import { schema } from './sanity/schemas'
import { presentationTool } from 'sanity/presentation'

export default defineConfig({
  basePath: '/admin',
  title: "JD SPIRITS" ,
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve: {
        locations,
      },
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
})
