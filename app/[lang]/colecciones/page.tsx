import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CollectionCard } from '@/components/collection-card'
import { ContactFormSection } from '../contacto/contact-form-section'
import { Button } from '@/components/ui/button'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Palette, CircleDollarSign, Wrench, Clock, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'
import type { Image } from 'sanity'
import { client } from '@/sanity/lib/client'
import { collectionsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { generatePageMetadata } from '@/lib/metadata'

const pageMetadata = {
  es: {
    title: 'Colecciones de Invitaciones',
    description: 'Descubre nuestras colecciones de invitaciones de boda ilustradas en acuarela: Albor, Raíces y Luz & Línea. Diseños elegantes y accesibles para tu gran día.',
  },
  pt: {
    title: 'Coleções de Convites',
    description: 'Descubra nossas coleções de convites de casamento ilustrados em aquarela: Albor, Raíces e Luz & Línea. Designs elegantes e acessíveis para o seu grande dia.',
  },
  en: {
    title: 'Invitation Collections',
    description: 'Discover our collections of watercolor illustrated wedding invitations: Albor, Raíces and Luz & Línea. Elegant and accessible designs for your big day.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const meta = pageMetadata[lang as keyof typeof pageMetadata] || pageMetadata.es

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    path: 'colecciones',
    lang,
  })
}

const benefits = [
  {
    icon: Palette,
    title: 'Diseños cuidadosamente creados',
    description:
      'Cada colección ha sido pensada con un estilo único (romántico, boho, minimalista) siguiendo las últimas tendencias de bodas en España y Europa.',
  },
  {
    icon: CircleDollarSign,
    title: 'Accesibles sin perder elegancia',
    description:
      'Al tratarse de diseños ya desarrollados, las invitaciones de colección resultan más económicas que las personalizadas, sin renunciar a la calidad premium de los materiales y acabados.',
  },
  {
    icon: Wrench,
    title: 'Flexibilidad en los detalles',
    description:
      'Aunque pertenecen a una colección, pueden personalizarse con toques como el color del sobre, forros ilustrados, lacres, caligrafía o texturas artesanales, aportando carácter propio a cada pieza.',
  },
  {
    icon: Clock,
    title: 'Rapidez en la entrega',
    description:
      'Al contar con una base de diseño ya definida, los tiempos de producción se reducen, facilitando que los novios tengan su papelería lista con mayor agilidad.',
  },
  {
    icon: Sparkles,
    title: 'Estilo probado y versátil',
    description:
      'Son opciones que se adaptan a distintos tipos de ceremonias, desde bodas íntimas al aire libre hasta celebraciones elegantes en espacios urbanos, asegurando siempre un resultado armónico y sofisticado.',
  },
]

// Fallback data when Sanity is not yet populated
const fallbackCollections = [
  {
    title: 'Colección Albor',
    subtitle: 'romántica y botánica',
    description:
      'Albor está pensada para parejas que sueñan con bodas al aire libre, románticas y llenas de delicadeza. Sus ilustraciones en acuarela con flores, ramas sueltas y pétalos flotando, junto a una paleta suave, transmiten emoción y armonía. Opciones como sobreposición de vellum, forro floral en los sobres o un delicado lacre permiten que cada invitación de la colección adquiera un toque único y personalizado, adaptándose a la visión de cada pareja.',
    ctaText: 'Explorar Colección Albor',
    ctaLink: '/colecciones/albor',
    images: [
      '/images/colections/coleccion-albor-invitacion-boda-clarearte.webp',
      '/images/colections/coleccion-albor-set-completo-clarearte.webp',
      '/images/colections/coleccion-albor-seating-plan-clarearte.webp',
    ],
  },
  {
    title: 'Colección Raíces',
    subtitle: 'bohemia y mediterránea',
    description:
      'Raíces se inspira en bodas boho y mediterráneas, con materiales orgánicos y tonos tierra que transmiten calidez y cercanía. Las ilustraciones botánicas hechas a mano y las texturas naturales aportan un aire rústico chic y acogedor. Detalles como cordeles de yute, cintas de lino o etiquetas en madera permiten añadir un matiz personal a las invitaciones, haciendo que cada pieza cuente una historia propia dentro del estilo de la colección.',
    ctaText: 'Descubrir Colección Raíces',
    ctaLink: '/colecciones/raices',
    images: [
      '/images/colections/coleccion-raices-invitacion-boda-clarearte.webp',
      '/images/colections/coleccion-raices-seating-plan-clarearte.webp',
      '/images/colections/coleccion-raices-cartel-bienvenido-clarearte.webp',
    ],
  },
  {
    title: 'Colección Luz & Línea',
    subtitle: 'minimalismo atemporal',
    description:
      'Luz & Línea está pensada principalmente para bodas urbanas y celebraciones sofisticadas, con tipografía refinada, espacios amplios y paleta de color reducida. Su estética minimalista combina serenidad y estilo atemporal. Elementos como sobre con forro liso, caligrafía en los sobres o acabados en pan de oro ofrecen la posibilidad de añadir detalles exclusivos que elevan la experiencia de la papelería, incluso dentro de la estructura de la colección.',
    ctaText: 'Explorar Colección Luz & Línea',
    ctaLink: '/colecciones/luz-linea',
    images: [
      '/images/colections/coleccion-luz_linea-invitacion-boda-clarearte.webp',
      '/images/colections/coleccion-luz_linea-set-completo-clarearte.webp',
    ],
  },
]

export default async function CollectionsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  let collections = fallbackCollections

  try {
    // Try to fetch collections from Sanity
    const collectionsData = await client.fetch(collectionsQuery, { lang })

    // If we have Sanity data, use it instead of fallback
    if (collectionsData && collectionsData.length > 0) {
      collections = collectionsData.map((collection: {
        heroImage?: Image
        gallery?: Image[]
        title: string
        subtitle?: string
        description: string
        ctaText?: string
        slug: string
      }) => {
        // Prepare images array (hero + gallery)
        const images = [
          collection.heroImage
            ? urlForImage(collection.heroImage).width(1000).url()
            : '',
          ...(collection.gallery || []).map((img) =>
            urlForImage(img).width(800).url()
          ),
        ].filter(Boolean)

        return {
          title: collection.title,
          subtitle: collection.subtitle || '',
          description: collection.description,
          ctaText: collection.ctaText || `Explorar ${collection.title}`,
          ctaLink: `/${lang}/colecciones/${collection.slug}`,
          images,
        }
      })
    }
  } catch (error) {
    console.error('Error fetching collections from Sanity:', error)
    // Fall back to hardcoded collections
  }

  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navbar lang={lang} />

      {/* Hero Banner */}
      <Hero
        title="Colecciones de invitaciones de boda ilustradas en acuarela"
        subtitle=""
        description="Cada boda tiene un estilo, y cada pareja una manera única de contar su historia. Las colecciones reúnen ilustraciones en acuarela, tipografía cuidada y acabados artesanales, para que el primer detalle de vuestra celebración transmita emoción, belleza y autenticidad."
        primaryCTA={{
          text: 'Ver Colecciones',
          href: '#colecciones',
        }}
        secondaryCTA={{
          text: 'Contactar',
          href: `/${lang}/contacto`,
        }}
      />

      {/* Collections Info */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-body text-foreground leading-relaxed text-center">
            Elegir una invitación de colección es la forma perfecta de combinar
            belleza y practicidad. Estas invitaciones ofrecen diseños
            cuidadosamente elaborados a un precio más accesible, lo que permite
            dedicar recursos a detalles adicionales que personalizan cada pieza.
            Opciones como forros de sobre, lacres delicados o acabados especiales
            aportan un toque único, haciendo que incluso una invitación de
            colección se sienta completamente personalizada y llena de encanto.
          </p>
        </div>
      </section>

      {/* Collection Cards */}
      <section id="colecciones" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-20 md:space-y-32">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              {...collection}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* CTA to Personalized */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-body-lg text-foreground mb-6">
            ¿No encontraste lo que buscabas?
          </p>
          <Button
            variant="primary-outline"
            size="lg"
            className="tracking-wide cursor-pointer"
            asChild
          >
            <a href={`/${lang}/personalizadas`}>
              Descubre las opciones personalizadas →
            </a>
          </Button>
        </div>
      </section>

      {/* Why Choose Collection Invitations */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-title-2 font-display font-bold text-foreground text-center mb-12 md:mb-16">
            Por qué elegir invitaciones de colección
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="flex gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-body-lg md:text-title-3 font-sans font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-body-sm md:text-body text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection />
    </div>
  )
}
