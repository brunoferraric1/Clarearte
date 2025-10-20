import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  primaryCTA?: {
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
    <section
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-background"
      style={{
        backgroundImage: `url(/images/pattern-albor.webp)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '1300px'
      }}
    >
      {/* Gradient overlay for readability and smooth transition */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to top, rgba(255, 255, 255, 1) 0%, transparent 35%),
            radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 40%, transparent 70%)
          `
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
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
          <p className="text-body-lg text-muted-foreground mb-8 mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
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
              )}

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
          )}
        </div>
      </div>
    </section>
  )
}

// Example usage component for testing
export function HeroExample() {
  return (
    <Hero
      title="Invitaciones de boda personalizadas y exclusivas"
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
