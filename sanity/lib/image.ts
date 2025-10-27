import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image | undefined) => {
  if (!source) {
    // Return a builder with a placeholder to maintain type consistency
    return imageBuilder
      .image({ asset: { _ref: '' } } as Image)
      .auto('format')
      .fit('max')
  }

  return imageBuilder.image(source).auto('format').fit('max')
}
