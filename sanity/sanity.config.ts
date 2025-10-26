import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schema'
import { apiVersion, dataset, projectId } from './env'

export default defineConfig({
  name: 'default',
  title: 'Clarearte',

  projectId,
  dataset,
  apiVersion,

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema,
})
