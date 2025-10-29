import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CreationProcess } from '@/components/creation-process'
import { PersonalizedBenefits } from '@/components/personalized-benefits'
import { PersonalizedInspiration } from '@/components/personalized-inspiration'
import { PersonalizedCTA } from '@/components/personalized-cta'
import { ContactFormSection } from '../contacto/contact-form-section'
import { GalleryGrid } from '@/components/gallery-grid'
import { client } from '@/sanity/lib/client'
import { galleryBySlugQuery } from '@/sanity/lib/queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invitaciones Personalizadas | ClareArte',
  description: 'Invitaciones de boda personalizadas que cuentan tu historia única. Ilustraciones en acuarela y diseños a medida para tu gran día.',
}

export default async function PersonalizedPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  // Fetch gallery data from Sanity
  // Use slug 'personalizadas-main' for this page's gallery
  const gallery = await client.fetch(galleryBySlugQuery, {
    slug: 'personalizadas-main',
  })

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />
      <Hero
        title="Invitaciones de boda personalizadas y exclusivas"
        subtitle=""
        description="Cada pareja tiene una historia que merece ser contada de manera única. Las invitaciones personalizadas transforman momentos, recuerdos y detalles cotidianos en piezas de papelería que reflejan vuestra esencia auténtica. Desde un viaje especial hasta vuestras mascotas, cada elemento forma parte del diseño."
      />
      
      {/* Gallery Grid Section */}
      {gallery && gallery.items && gallery.items.length > 0 && (
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <GalleryGrid
              items={gallery.items}
              layout={gallery.layout}
              gap={gallery.gap}
              enableLightbox={gallery.enableLightbox}
              lang={lang as 'pt' | 'es' | 'en'}
            />
          </div>
        </section>
      )}

      <CreationProcess />
      <PersonalizedBenefits />
      <PersonalizedInspiration />
      <PersonalizedCTA />
      <ContactFormSection />
    </div>
  )
}
