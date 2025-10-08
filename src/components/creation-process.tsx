const steps = [
  {
    number: '01',
    title: 'Conversa',
    description:
      'Todo comienza con una conversación cercana, donde me contáis vuestra historia, cómo imagináis la boda y qué detalles queréis que formen parte de ella.',
  },
  {
    number: '02',
    title: 'Diseño',
    description:
      'Con esas emociones y referencias, dibujo las primeras ideas, bocetos y paletas de color que reflejan vuestra esencia, transformándolas en una propuesta artística única.',
  },
  {
    number: '03',
    title: 'Realización',
    description:
      'Una vez que el diseño cobra vida y lo sentís como vuestro, llega la magia final: la impresión en papeles de alta calidad, con acabados artesanales que convierten cada pieza en un recuerdo eterno.',
  },
]

export function CreationProcess() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-title-1 font-display font-bold text-foreground text-center mb-12 md:mb-16">
          El Proceso de Creación
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="flex items-baseline space-x-3">
                <span className="text-display-1 font-display font-light text-primary/30">
                  {step.number}
                </span>
                <h3 className="text-title-2 font-display font-bold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="text-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
