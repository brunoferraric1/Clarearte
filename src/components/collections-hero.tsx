export function CollectionsHero() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] min-h-[400px] overflow-hidden bg-muted">
      {/* Background image placeholder */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center text-muted-foreground">
        <span className="text-label">Imagen banner colecciones</span>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-display-2 font-display font-bold text-white text-center drop-shadow-lg">
            Colecciones de invitaciones de boda ilustradas en acuarela
          </h1>
        </div>
      </div>
    </section>
  )
}
