import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA 
}: HeroProps) {
  return (
    <section className="relative h-[700px] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-label font-mono font-medium text-muted-foreground mb-4">
            {subtitle}
          </p>
          
          {/* Main Title */}
          <h1 className="text-display-1 font-display font-bold text-foreground mb-6">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-body-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="md"
              className="tracking-wide cursor-pointer"
              asChild
            >
              <a href={primaryCTA.href}>
                {primaryCTA.text}
              </a>
            </Button>

            {secondaryCTA && (
              <Button
                variant="primary-outline"
                size="md"
                className="tracking-wide cursor-pointer"
                asChild
              >
                <a href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Example usage component for testing
export function HeroExample() {
  return (
    <Hero
      title="Arte Personalizada para Casamentos"
      subtitle=""
      description="Criamos convites únicos, menus personalizados e ilustrações ao vivo que transformam o seu casamento em uma experiência inesquecível."
      primaryCTA={{
        text: "Ver Portfolio",
        href: "/portfolio"
      }}
      secondaryCTA={{
        text: "Solicitar Orçamento",
        href: "/contacto"
      }}
    />
  )
}
