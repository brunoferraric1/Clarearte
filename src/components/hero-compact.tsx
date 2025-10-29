import { Button } from '@/components/ui/button'

interface HeroCompactProps {
  title: React.ReactNode
  subtitle: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function HeroCompact({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA
}: HeroCompactProps) {
  return (
    <section
      className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] min-h-[400px] max-h-[700px] flex items-center justify-center bg-background"
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title - Visual hierarchy */}
          <div className="text-display-1 font-display font-bold text-foreground mb-4">
            {title}
          </div>
          
          {/* Subtitle - SEO H1 but with smaller visual style */}
          <h1 className="text-title-2 font-display text-foreground mb-6">
            {subtitle}
          </h1>
          
          {/* Optional Description */}
          {/* {description && (
            <p className="text-body-lg text-muted-foreground mb-8 mx-auto max-w-3xl">
              {description}
            </p>
          )} */}

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

