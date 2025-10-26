import { type SchemaTypeDefinition } from 'sanity'

// Objects
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
import localizedBlockContent from './objects/localizedBlockContent'
import localizedSlug from './objects/localizedSlug'
import imageWithAlt from './objects/imageWithAlt'
import seo from './objects/seo'

// Custom Block Types
import callout from './objects/callout'
import imageGallery from './objects/imageGallery'
import videoEmbed from './objects/videoEmbed'
import cta from './objects/cta'
import divider from './objects/divider'

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
    // Custom Block Types
    callout,
    imageGallery,
    videoEmbed,
    cta,
    divider,
    // Documents
    post,
  ],
}
