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
import twoColumn from './objects/twoColumn'
import galleryItem from './objects/galleryItem'

// Documents
import post from './documents/post'
import collection from './documents/collection'
import galleryGrid from './documents/galleryGrid'
import waitingListEmail from './documents/waitingListEmail'

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
    twoColumn,
    galleryItem,
    // Documents
    post,
    collection,
    galleryGrid,
    waitingListEmail,
  ],
}
