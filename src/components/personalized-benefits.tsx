const benefits = [
  {
    title: 'Exclusividad absoluta',
    description: 'Cada diseño se crea desde cero, pensado solo para vosotros.',
  },
  {
    title: 'Reflejo de vuestra historia',
    description:
      'Detalles de vuestro día a día, viajes, hobbies o seres queridos se transforman en ilustraciones que cuentan vuestra historia.',
  },
  {
    title: 'Creatividad sin límites',
    description:
      'Paleta de colores, tipografía, ilustraciones y acabados pueden adaptarse 100% a vuestro estilo.',
  },
  {
    title: 'Calidad artesanal',
    description:
      'Papel de algodón de alta gama, impresión fine art o letterpress y acabados elegantes que convierten la invitación en un objeto de colección.',
  },
]

export function PersonalizedBenefits() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-title-1 font-display font-bold text-foreground text-center mb-12 md:mb-16">
          Por qué elegir invitaciones personalizadas
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
  )
}
