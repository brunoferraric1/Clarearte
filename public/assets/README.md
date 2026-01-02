# Open Graph Image Setup

This directory should contain the default Open Graph image for social media sharing.

## Requirements

- **File**: `og-image.jpg`
- **Dimensions**: 1200x630px (1.91:1 aspect ratio)
- **Format**: JPG
- **File size**: Optimize to under 200KB for fast loading

## Why This Size?

The 1200x630px format is the recommended size for:
- Facebook/LinkedIn Open Graph
- Twitter Cards (summary_large_image)
- WhatsApp link previews
- Most other social platforms

## Design Guidelines

The image should:
- Include your brand name/logo (ClareArte)
- Be visually appealing at small sizes (thumbnails)
- Represent your brand aesthetic (watercolor, elegant, wedding-focused)
- Have readable text that works at reduced sizes
- Use colors from your brand palette

## Usage

The image is automatically referenced in metadata via:
```
https://www.clareartestudio.es/assets/og-image.jpg?v=1
```

The `?v=1` query parameter is used for cache-busting. Increment it when you update the image.

## Example Design Ideas

- Watercolor illustration with "ClareArte" branding
- Beautiful wedding invitation mockup
- Elegant typography with botanical elements
- Your logo with a subtle background pattern

## Testing

After adding the image, test your links on:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- WhatsApp (share a link to see the preview)

## Notes

- If you don't have a custom OG image yet, social platforms will use a generic preview
- Page-specific images (from Sanity CMS) will override this default when available
- Blog posts and collections use their featured images when available
