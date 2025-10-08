import { Button } from '@/components/ui/button'

export function PersonalizedCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-title-1 font-display font-bold text-foreground">
            Cread invitaciones únicas que cuenten vuestra historia como ninguna otra
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="tracking-wide cursor-pointer w-full sm:w-auto"
              asChild
            >
              <a href="/contacto">
                Solicitar propuesta personalizada
              </a>
            </Button>

            <Button
              variant="primary-outline"
              size="lg"
              className="tracking-wide cursor-pointer w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
