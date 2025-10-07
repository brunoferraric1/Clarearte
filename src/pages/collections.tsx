import { Navbar } from '@/components/navbar'
import { CollectionsHero } from '@/components/collections-hero'
import { CollectionCard } from '@/components/collection-card'
import { CollectionsContactForm } from '@/components/collections-contact-form'
import { Button } from '@/components/ui/button'

const collections = [
  {
    title: 'Colección Albor',
    subtitle: 'romántica y botánica',
    description:
      'Albor está pensada para parejas que sueñan con bodas al aire libre, románticas y llenas de delicadeza. Sus ilustraciones en acuarela con flores, ramas sueltas y pétalos flotando, junto a una paleta suave, transmiten emoción y armonía. Opciones como sobreposición de vellum, forro floral en los sobres o un delicado lacre permiten que cada invitación de la colección adquiera un toque único y personalizado, adaptándose a la visión de cada pareja.',
    ctaText: 'Explorar Colección Albor',
    ctaLink: '/colecciones/albor',
    imagePlaceholder: 'Imagen Set Colección Albor',
  },
  {
    title: 'Colección Raíces',
    subtitle: 'bohemia y mediterránea',
    description:
      'Raíces se inspira en bodas boho y mediterráneas, con materiales orgánicos y tonos tierra que transmiten calidez y cercanía. Las ilustraciones botánicas hechas a mano y las texturas naturales aportan un aire rústico chic y acogedor. Detalles como cordeles de yute, cintas de lino o etiquetas en madera permiten añadir un matiz personal a las invitaciones, haciendo que cada pieza cuente una historia propia dentro del estilo de la colección.',
    ctaText: 'Descubrir Colección Raíces',
    ctaLink: '/colecciones/raices',
    imagePlaceholder: 'Imagen Set Colección Raíces',
  },
  {
    title: 'Colección Luz & Línea',
    subtitle: 'minimalismo atemporal',
    description:
      'Luz & Línea está pensada principalmente para bodas urbanas y celebraciones sofisticadas, con tipografía refinada, espacios amplios y paleta de color reducida. Su estética minimalista combina serenidad y estilo atemporal. Elementos como sobre con forro liso, caligrafía en los sobres o acabados en pan de oro ofrecen la posibilidad de añadir detalles exclusivos que elevan la experiencia de la papelería, incluso dentro de la estructura de la colección.',
    ctaText: 'Explorar Colección Luz & Línea',
    ctaLink: '/colecciones/luz-linea',
    imagePlaceholder: 'Imagen Set Colección Luz & Línea',
  },
]

const benefits = [
  {
    title: 'Diseños cuidadosamente creados',
    description:
      'Cada colección ha sido pensada con un estilo único (romántico, boho, minimalista) siguiendo las últimas tendencias de bodas en España y Europa.',
  },
  {
    title: 'Accesibles sin perder elegancia',
    description:
      'Al tratarse de diseños ya desarrollados, las invitaciones de colección resultan más económicas que las personalizadas, sin renunciar a la calidad premium de los materiales y acabados.',
  },
  {
    title: 'Flexibilidad en los detalles',
    description:
      'Aunque pertenecen a una colección, pueden personalizarse con toques como el color del sobre, forros ilustrados, lacres, caligrafía o texturas artesanales, aportando carácter propio a cada pieza.',
  },
  {
    title: 'Rapidez en la entrega',
    description:
      'Al contar con una base de diseño ya definida, los tiempos de producción se reducen, facilitando que los novios tengan su papelería lista con mayor agilidad.',
  },
  {
    title: 'Estilo probado y versátil',
    description:
      'Son opciones que se adaptan a distintos tipos de ceremonias, desde bodas íntimas al aire libre hasta celebraciones elegantes en espacios urbanos, asegurando siempre un resultado armónico y sofisticado.',
  },
]

export function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <CollectionsHero />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-title-1 font-display font-bold text-foreground">
              Cada boda tiene un estilo, y cada pareja una manera única de contar su historia
            </h2>
            <p className="text-body-lg text-foreground leading-relaxed">
              Las colecciones de invitaciones de boda reúnen ilustraciones en acuarela,
              tipografía cuidada y acabados artesanales, para que el primer detalle de
              vuestra celebración transmita emoción, belleza y autenticidad.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Info */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-body text-foreground leading-relaxed text-center">
            Elegir una invitación de colección es la forma perfecta de combinar belleza y
            practicidad. Estas invitaciones ofrecen diseños cuidadosamente elaborados a un
            precio más accesible, lo que permite dedicar recursos a detalles adicionales que
            personalizan cada pieza. Opciones como forros de sobre, lacres delicados o acabados
            especiales aportan un toque único, haciendo que incluso una invitación de colección
            se sienta completamente personalizada y llena de encanto.
          </p>
        </div>
      </section>

      {/* Collection Cards */}
      <section className="py-16 md:py-24 bg-background">
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
            <a href="/personalizadas">
              Descubre las opciones personalizadas →
            </a>
          </Button>
        </div>
      </section>

      {/* Why Choose Collection Invitations */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-title-1 font-display font-bold text-foreground text-center mb-12 md:mb-16">
            Por qué elegir invitaciones de colección
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="space-y-3">
                <h3 className="text-title-3 font-sans font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <CollectionsContactForm />
    </div>
  )
}
