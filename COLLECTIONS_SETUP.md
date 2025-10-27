# Collections Setup Guide

This guide explains how to add collection data to Sanity Studio for the ClareArte website.

## Overview

The Collection schema has been created and registered in Sanity. Now you need to add the three existing collections through Sanity Studio.

## Accessing Sanity Studio

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Sanity Studio (usually at `/studio` or check your sanity.config file)

3. Log in with your Sanity credentials

## Creating Collections

Create each of the following three collections using the "Collection" document type in Sanity Studio:

### 1. Collection Albor (romántica y botánica)

**Basic Information:**
- **Content ID:** `collection-albor` (unique identifier)
- **Order:** `1`
- **Published At:** Select the current date/time

**Title (Localized String):**
- Spanish (ES): `Colección Albor`
- Portuguese (PT): `Coleção Albor`
- English (EN): `Albor Collection`

**Slug (Localized Slug):**
- Spanish (ES): `albor` (click "Generate" button)
- Portuguese (PT): `albor`
- English (EN): `albor`

**Subtitle (Localized String):**
- Spanish (ES): `romántica y botánica`
- Portuguese (PT): `romântica e botânica`
- English (EN): `romantic & botanical`

**Description (Localized Text):**
- Spanish (ES):
  ```
  Albor está pensada para parejas que sueñan con bodas al aire libre, románticas y llenas de delicadeza. Sus ilustraciones en acuarela con flores, ramas sueltas y pétalos flotando, junto a una paleta suave, transmiten emoción y armonía. Opciones como sobreposición de vellum, forro floral en los sobres o un delicado lacre permiten que cada invitación de la colección adquiera un toque único y personalizado, adaptándose a la visión de cada pareja.
  ```
- Portuguese (PT): Translate to Portuguese
- English (EN): Translate to English

**Hero Image:**
- Upload: `/public/images/colections/coleccion-albor-invitacion-boda-clarearte.webp`
- Alt Text (ES): `Invitación de boda de la Colección Albor`
- Alt Text (PT): `Convite de casamento da Coleção Albor`
- Alt Text (EN): `Wedding invitation from Albor Collection`

**Gallery Images:**
Add 2 additional images:
1. `/public/images/colections/coleccion-albor-set-completo-clarearte.webp`
   - Alt Text (ES): `Set completo de papelería Colección Albor`
2. `/public/images/colections/coleccion-albor-seating-plan-clarearte.webp`
   - Alt Text (ES): `Seating plan Colección Albor`

**CTA Text (Localized String):**
- Spanish (ES): `Explorar Colección Albor`
- Portuguese (PT): `Explorar Coleção Albor`
- English (EN): `Explore Albor Collection`

**SEO Settings:**
- Spanish:
  - Meta Title: `Colección Albor - Invitaciones Románticas | ClareArte`
  - Meta Description: `Descubre la Colección Albor: invitaciones de boda románticas y botánicas ilustradas en acuarela. Perfectas para bodas al aire libre llenas de delicadeza.`

---

### 2. Collection Raíces (bohemia y mediterránea)

**Basic Information:**
- **Content ID:** `collection-raices`
- **Order:** `2`
- **Published At:** Select the current date/time

**Title (Localized String):**
- Spanish (ES): `Colección Raíces`
- Portuguese (PT): `Coleção Raízes`
- English (EN): `Raíces Collection`

**Slug (Localized Slug):**
- Spanish (ES): `raices`
- Portuguese (PT): `raizes`
- English (EN): `raices`

**Subtitle (Localized String):**
- Spanish (ES): `bohemia y mediterránea`
- Portuguese (PT): `boêmia e mediterrânea`
- English (EN): `bohemian & mediterranean`

**Description (Localized Text):**
- Spanish (ES):
  ```
  Raíces se inspira en bodas boho y mediterráneas, con materiales orgánicos y tonos tierra que transmiten calidez y cercanía. Las ilustraciones botánicas hechas a mano y las texturas naturales aportan un aire rústico chic y acogedor. Detalles como cordeles de yute, cintas de lino o etiquetas en madera permiten añadir un matiz personal a las invitaciones, haciendo que cada pieza cuente una historia propia dentro del estilo de la colección.
  ```
- Portuguese (PT): Translate to Portuguese
- English (EN): Translate to English

**Hero Image:**
- Upload: `/public/images/colections/coleccion-raices-invitacion-boda-clarearte.webp`
- Alt Text (ES): `Invitación de boda de la Colección Raíces`

**Gallery Images:**
1. `/public/images/colections/coleccion-raices-seating-plan-clarearte.webp`
   - Alt Text (ES): `Seating plan Colección Raíces`
2. `/public/images/colections/coleccion-raices-cartel-bienvenido-clarearte.webp`
   - Alt Text (ES): `Cartel de bienvenida Colección Raíces`

**CTA Text (Localized String):**
- Spanish (ES): `Descubrir Colección Raíces`
- Portuguese (PT): `Descobrir Coleção Raízes`
- English (EN): `Discover Raíces Collection`

**SEO Settings:**
- Spanish:
  - Meta Title: `Colección Raíces - Invitaciones Boho | ClareArte`
  - Meta Description: `Descubre la Colección Raíces: invitaciones de boda bohemias y mediterráneas con ilustraciones botánicas y materiales orgánicos.`

---

### 3. Collection Luz & Línea (minimalismo atemporal)

**Basic Information:**
- **Content ID:** `collection-luz-linea`
- **Order:** `3`
- **Published At:** Select the current date/time

**Title (Localized String):**
- Spanish (ES): `Colección Luz & Línea`
- Portuguese (PT): `Coleção Luz & Linha`
- English (EN): `Luz & Línea Collection`

**Slug (Localized Slug):**
- Spanish (ES): `luz-linea`
- Portuguese (PT): `luz-linha`
- English (EN): `luz-linea`

**Subtitle (Localized String):**
- Spanish (ES): `minimalismo atemporal`
- Portuguese (PT): `minimalismo atemporal`
- English (EN): `timeless minimalism`

**Description (Localized Text):**
- Spanish (ES):
  ```
  Luz & Línea está pensada principalmente para bodas urbanas y celebraciones sofisticadas, con tipografía refinada, espacios amplios y paleta de color reducida. Su estética minimalista combina serenidad y estilo atemporal. Elementos como sobre con forro liso, caligrafía en los sobres o acabados en pan de oro ofrecen la posibilidad de añadir detalles exclusivos que elevan la experiencia de la papelería, incluso dentro de la estructura de la colección.
  ```
- Portuguese (PT): Translate to Portuguese
- English (EN): Translate to English

**Hero Image:**
- Upload: `/public/images/colections/coleccion-luz_linea-invitacion-boda-clarearte.webp`
- Alt Text (ES): `Invitación de boda de la Colección Luz & Línea`

**Gallery Images:**
1. `/public/images/colections/coleccion-luz_linea-set-completo-clarearte.webp`
   - Alt Text (ES): `Set completo de papelería Colección Luz & Línea`

**CTA Text (Localized String):**
- Spanish (ES): `Explorar Colección Luz & Línea`
- Portuguese (PT): `Explorar Coleção Luz & Linha`
- English (EN): `Explore Luz & Línea Collection`

**SEO Settings:**
- Spanish:
  - Meta Title: `Colección Luz & Línea - Invitaciones Minimalistas | ClareArte`
  - Meta Description: `Descubre la Colección Luz & Línea: invitaciones de boda minimalistas con tipografía refinada y estilo atemporal para bodas urbanas.`

---

## Publishing

After creating each collection:

1. Review all fields to ensure accuracy
2. Click "Publish" to make the collection live
3. The collection will immediately appear on the website at:
   - Listing page: `/es/colecciones`
   - Detail page: `/es/colecciones/[slug]`

## Verification

To verify the collections are working:

1. Visit `http://localhost:3000/es/colecciones` (or your dev URL)
2. You should see all three collections listed
3. Click on each collection to view its detail page
4. Test the image modal by clicking on images
5. Verify keyboard navigation (arrow keys) and mobile swipe gestures

## Optional: Rich Content

The Collection schema includes an optional `content` field for detailed rich text content. You can use this to add:

- Additional paragraphs about the collection
- Image galleries within the content
- Callouts with tips
- Video embeds
- Call-to-action buttons

To add rich content, edit a collection and populate the "Detailed Content" field using the block editor.

## Troubleshooting

**Collections not appearing:**
- Ensure collections are published (not in draft state)
- Check that the `publishedAt` date is set
- Verify the Sanity client connection in `sanity/lib/client.ts`

**Images not loading:**
- Ensure images are uploaded to Sanity (not just referenced from public folder)
- Check that alt text is provided in at least one language
- Verify the Sanity image URL builder is working

**Slugs not working:**
- Ensure slugs are unique per language
- Click the "Generate" button if slugs are not auto-generating
- Check that slugs don't have special characters

## Next Steps

After seeding the collections:

1. Add Portuguese and English translations for all text fields
2. Consider adding rich content sections with PortableText
3. Test the collections on mobile devices
4. Optimize images in Sanity for web delivery
5. Set up revalidation webhooks for instant updates
