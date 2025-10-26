import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you need fresh data (ISR will handle caching)
  perspective: 'published', // Use 'previewDrafts' for draft mode
})
