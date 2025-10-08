import paolaImage from '@/images/paola-sobre-mi.webp'

export function AboutHero() {
  return (
    <section className="w-full">
      {/* Large hero image with centered title */}
      <div className="relative w-screen h-[50vh] md:h-[55vh] bg-muted overflow-hidden -mx-[50vw] left-1/2 right-1/2">
        <img 
          src={paolaImage} 
          alt="Paola - Sobre mí" 
          className="w-full h-full object-cover"
        />
        {/* Centered title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-display-3 font-display font-bold text-white drop-shadow-lg">
            Sobre mí
          </h1>
        </div>
      </div>

      {/* Subtext below image */}
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-body-lg text-foreground leading-relaxed">
            La creatividad siempre ha sido el hilo conductor de mi vida. Como diseñadora, he
            tenido el privilegio de trabajar para grandes marcas en Brasil y en España,
            aprendiendo a mirar cada detalle con precisión y a transformar ideas en experiencias
            visuales llenas de significado.
          </p>
        </div>
      </div>
    </section>
  )
}
