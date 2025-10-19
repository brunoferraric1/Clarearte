import { Star, BookHeart, Palette, Gem } from 'lucide-react'

const benefits = [
  {
    icon: Star,
    title: 'Exclusividad absoluta',
    description: 'Cada diseño se crea desde cero, pensado solo para vosotros.',
  },
  {
    icon: BookHeart,
    title: 'Reflejo de vuestra historia',
    description:
      'Detalles de vuestro día a día, viajes, hobbies o seres queridos se transforman en ilustraciones que cuentan vuestra historia.',
  },
  {
    icon: Palette,
    title: 'Creatividad sin límites',
    description:
      'Paleta de colores, tipografía, ilustraciones y acabados pueden adaptarse 100% a vuestro estilo.',
  },
  {
    icon: Gem,
    title: 'Calidad artesanal',
    description:
      'Papel de algodón de alta gama, impresión fine art o letterpress y acabados elegantes que convierten la invitación en un objeto de colección.',
  },
]

export function PersonalizedBenefits() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-title-2 font-display font-bold text-foreground text-center mb-12 md:mb-16">
          Por qué elegir invitaciones personalizadas
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
  )
}
