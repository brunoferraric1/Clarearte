import { createClient } from 'next-sanity'
import { createClient as createSanityClient } from '@sanity/client'
import { apiVersion, dataset, projectId, token } from '../env'

// Read-only client (for fetching data)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you need fresh data (ISR will handle caching)
  perspective: 'published', // Use 'previewDrafts' for draft mode
})

// Write-enabled client (for API routes that need to create/update documents)
// Using @sanity/client directly for better token handling
export const writeClient = token
  ? createSanityClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // Must be false for writes
      token,
      perspective: 'published',
    })
  : createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: 'published',
    })
