import { type SchemaTypeDefinition } from 'sanity'

// Objects
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
import localizedBlockContent from './objects/localizedBlockContent'
import localizedSlug from './objects/localizedSlug'
import imageWithAlt from './objects/imageWithAlt'
import seo from './objects/seo'

// Documents
import post from './documents/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    localizedString,
    localizedText,
    localizedBlockContent,
    localizedSlug,
    imageWithAlt,
    seo,
    // Documents
    post,
  ],
}
