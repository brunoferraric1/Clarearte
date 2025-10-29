import { HighlightedButton } from '@/components/ui/highlighted-button'
import { AnimatedSection } from './animated-section'

export function Verticals() {
  return (
    <section id="colecciones" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-[1400px] mx-auto">

          {/* Colecciones de invitaciones */}
          <AnimatedSection direction="left" delay={0}>
            <div className="flex flex-col">
              <a 
                href="/colecciones"
                className="group relative aspect-[16/9] mb-6 rounded-lg overflow-hidden block cursor-pointer"
              >
                <img
                  src="/images/home-sections-coleciones.webp"
                  alt="Colecciones de invitaciones"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dim overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                {/* Title */}
                <h2 className="absolute inset-0 flex items-center justify-center text-title-2 font-display font-bold text-white text-center px-6 z-10">
                  Colecciones de<br />invitaciones
                </h2>
              </a>

              <p className="text-body text-muted-foreground text-center mb-6 leading-relaxed">
                Colecciones pensadas para distintos estilos de celebración: clásico, minimalista, floral, romántico o contemporáneo. Cada invitación combina ilustración artesanal con un diseño cuidado que da la bienvenida al gran día con belleza y armonía
              </p>

              <div className="flex justify-center mt-auto">
                <HighlightedButton
                  size="md"
                  className="tracking-wide cursor-pointer"
                  asChild
                >
                  <a href="/colecciones">
                    Ver todas las colecciones
                  </a>
                </HighlightedButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Invitaciones personalizadas */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="flex flex-col">
              <a 
                href="/personalizadas"
                className="group relative aspect-[16/9] mb-6 rounded-lg overflow-hidden block cursor-pointer"
              >
                <img
                  src="/images/home-sections-invitaciones-personalisadas.webp"
                  alt="Invitaciones personalizadas"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dim overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                {/* Title */}
                <h2 className="absolute inset-0 flex items-center justify-center text-title-2 font-display font-bold text-white text-center px-6 z-10">
                  Invitaciones<br />personalizadas
                </h2>
              </a>

              <p className="text-body text-muted-foreground text-center mb-6 leading-relaxed">
                Cuando cada detalle cuenta, la papelería se diseña a medida. Si vuestra historia pide algo único, diseño junto a vosotros una papelería exclusiva, hecha a medida para reflejar cada detalle de vuestra boda.
              </p>

              <div className="flex justify-center mt-auto">
                <HighlightedButton
                  size="md"
                  className="tracking-wide cursor-pointer"
                  asChild
                >
                  <a href="/personalizadas">
                    Saber más
                  </a>
                </HighlightedButton>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
