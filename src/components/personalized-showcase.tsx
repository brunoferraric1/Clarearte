export function PersonalizedShowcase() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-label">Imagen de proyecto personalizado</span>
            </div>
          </div>

          {/* Story Text */}
          <div className="space-y-4">
            <h3 className="text-title-2 font-display font-bold text-foreground">
              Una historia única
            </h3>
            <p className="text-body text-foreground leading-relaxed">
              Cada proyecto personalizado cuenta una historia. Aquí se refleja cómo los detalles
              más significativos de una pareja se transforman en arte: desde el lugar donde se
              conocieron hasta los pequeños momentos que definen su amor. Cada ilustración, cada
              color, cada palabra elegida con cuidado para que la invitación sea tan especial
              como el día que anuncia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
