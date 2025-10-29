import { Button } from '@/components/ui/button'
import { OrganicImageMask } from '@/components/organic-image-mask'
import { AnimatedSection } from './animated-section'

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column - Text content */}
          <AnimatedSection direction="left" delay={0}>
            <div className="flex flex-col space-y-6">
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
          </AnimatedSection>

          {/* Right column - Image with organic mask */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="aspect-[4/3]">
              <OrganicImageMask
                src="/images/paola-sobre-mi.webp"
                alt="Paola - Sobre mí"
                maskSrc="/images/brush_mask-2-better-fill.webp"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
