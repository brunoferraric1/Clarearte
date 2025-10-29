import { Button } from '@/components/ui/button'
import { AnimatedSection } from './animated-section'

export function Verticals() {
  return (
    <section id="colecciones" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-[1400px] mx-auto">

          {/* Colecciones de invitaciones */}
          <AnimatedSection direction="left" delay={0}>
            <div className="flex flex-col">
              <div className="aspect-[4/3] mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/home-sections-coleciones.webp"
                  alt="Colecciones de invitaciones"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-title-2 font-display font-bold mb-4 text-center">
                Colecciones de invitaciones
              </h2>

              <p className="text-body text-muted-foreground text-center mb-6 leading-relaxed">
                Colecciones pensadas para distintos estilos de celebración: clásico, minimalista, floral, romántico o contemporáneo. Cada invitación combina ilustración artesanal con un diseño cuidado que da la bienvenida al gran día con belleza y armonía
              </p>

              <div className="flex justify-center mt-auto">
                <Button
                  variant="primary-outline"
                  size="md"
                  className="tracking-wide cursor-pointer"
                  asChild
                >
                  <a href="/colecciones">
                    Ver todas las colecciones
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Invitaciones personalizadas */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="flex flex-col">
              <div className="aspect-[4/3] mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/home-sections-invitaciones-personalisadas.webp"
                  alt="Invitaciones personalizadas"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-title-2 font-display font-bold mb-4 text-center">
                Invitaciones personalizadas
              </h2>

              <p className="text-body text-muted-foreground text-center mb-6 leading-relaxed">
                Cuando cada detalle cuenta, la papelería se diseña a medida. Si vuestra historia pide algo único, diseño junto a vosotros una papelería exclusiva, hecha a medida para reflejar cada detalle de vuestra boda.
              </p>

              <div className="flex justify-center mt-auto">
                <Button
                  variant="primary-outline"
                  size="md"
                  className="tracking-wide cursor-pointer"
                  asChild
                >
                  <a href="/personalizadas">
                    Saber más
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
