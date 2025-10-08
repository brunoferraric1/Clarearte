import { Button } from '@/components/ui/button'
import invitacionAlbor from '@/images/invitacion-albor-3.webp'
import invitacionPersonalizada from '@/images/invitacion-albor-2-cropped.webp'

export function Verticals() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">

          {/* Colecciones de invitaciones */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] bg-muted rounded-lg mb-6 overflow-hidden">
              <img 
                src={invitacionAlbor} 
                alt="Colecciones de invitaciones" 
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-title-1 font-display font-bold mb-4 text-center">
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

          {/* Invitaciones personalizadas */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] bg-muted rounded-lg mb-6 overflow-hidden">
              <img 
                src={invitacionPersonalizada} 
                alt="Invitaciones personalizadas" 
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-title-1 font-display font-bold mb-4 text-center">
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

        </div>
      </div>
    </section>
  )
}
