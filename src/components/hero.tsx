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
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-label font-mono font-medium text-muted-foreground mb-4 tracking-wide">
            {subtitle}
          </p>
          
          {/* Main Title */}
          <h1 className="text-display-2 font-display font-bold text-foreground mb-6" style={{fontSize: 'clamp(2.75rem, 4vw + 2rem, 5.75rem)', lineHeight: '1.05', letterSpacing: '-0.02em'}}>
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-body-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-3 text-body-lg font-semibold"
              asChild
            >
              <a href={primaryCTA.href}>
                {primaryCTA.text}
              </a>
            </Button>
            
            {secondaryCTA && (
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-body-lg font-semibold"
                asChild
              >
                <a href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  )
}

// Example usage component for testing
export function HeroExample() {
  return (
    <Hero
      title="Arte Personalizada para Casamentos"
      subtitle="ClareArte"
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
