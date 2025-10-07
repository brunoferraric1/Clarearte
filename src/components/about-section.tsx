import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column - Text content */}
          <div className="flex flex-col space-y-6 text-left items-start">
            <h2 className="text-display-1 font-display font-bold text-foreground">
              Sobre mí
            </h2>

            <p className="text-body text-muted-foreground leading-relaxed">
              Soy Paola, diseñadora e ilustradora especializada en papelería de boda.
              Mi misión es que la elección de vuestras invitaciones sea tan especial
              como el propio "sí, quiero": un proceso cercano, delicado y lleno de
              inspiración
            </p>

            <div className="pt-2">
              <Button
                variant="primary-outline"
                size="md"
                className="tracking-wide cursor-pointer"
                asChild
              >
                <a href="/sobre-mi">
                  Conóceme mejor
                </a>
              </Button>
            </div>
          </div>

          {/* Right column - Image placeholder */}
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-label">Imagen sobre mí</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
