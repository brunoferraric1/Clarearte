import { Button } from '@/components/ui/button'
import { OrganicImageMask } from '@/components/organic-image-mask'

interface InternalPageHeroProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  useMask?: boolean
  maskSrc?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function InternalPageHero({
  title,
  description,
  image,
  imageAlt = '',
  useMask = true,
  maskSrc = '/images/brush_mask-2-cropped.webp',
  primaryCTA,
  secondaryCTA,
}: InternalPageHeroProps) {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-background"
      style={{
        backgroundImage: `url(/images/pattern-albor.webp)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '1300px',
      }}
    >
      {/* Gradient overlay for readability and smooth transition */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to top, rgba(255, 255, 255, 1) 0%, transparent 35%),
            radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 40%, transparent 70%)
          `,
        }}
      />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Image with optional organic mask */}
            {image && (
              <div className="w-full max-w-3xl">
                {useMask ? (
                  <OrganicImageMask
                    src={image}
                    alt={imageAlt}
                    maskSrc={maskSrc}
                    className="aspect-[16/9] w-full"
                  />
                ) : (
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
            )}

            {/* Title */}
            <h1 className="text-display-1 font-display font-bold text-foreground text-center">
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-body-lg text-muted-foreground text-center leading-relaxed max-w-4xl">
                {description}
              </p>
            )}

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
                    <a href={primaryCTA.href}>{primaryCTA.text}</a>
                  </Button>
                )}

                {secondaryCTA && (
                  <Button
                    variant="primary-outline"
                    size="md"
                    className="tracking-wide cursor-pointer"
                    asChild
                  >
                    <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
