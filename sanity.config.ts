import { locations } from './plugins/presentation/locate';
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import schema from './sanity/schema'
import { previewDocumentNode } from './plugins/previewPane';
import { presentationTool } from 'sanity/presentation';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
		types: schema,
	},
  plugins: [
    structureTool({
      defaultDocumentNode: previewDocumentNode(),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: "v2024-04-12"}),
    presentationTool({
      resolve: {
        locations
      },
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
     vercelDeployTool(),
  ],
})
