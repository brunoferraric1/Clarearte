export function AboutHero() {
  return (
    <section className="relative w-full">
      {/* Large hero image */}
      <div className="w-full h-[70vh] md:h-[80vh] bg-muted overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <span className="text-label">Imagen principal sobre mí</span>
        </div>
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-end pb-12 md:pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 md:p-10 max-w-3xl shadow-lg">
            <h1 className="text-display-1 font-display font-bold text-foreground mb-6">
              Sobre mí
            </h1>
            <p className="text-body-lg text-foreground leading-relaxed">
              La creatividad siempre ha sido el hilo conductor de mi vida. Como diseñadora, he
              tenido el privilegio de trabajar para grandes marcas en Brasil y en España,
              aprendiendo a mirar cada detalle con precisión y a transformar ideas en experiencias
              visuales llenas de significado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
