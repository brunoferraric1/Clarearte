import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

interface CollectionCardProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  images: string[]
  reverse?: boolean
}

export function CollectionCard({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  images,
  reverse = false,
}: CollectionCardProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      {/* Image Gallery */}
      <ScrollReveal className={`${reverse ? 'md:col-start-2' : ''}`}>
        <div className="space-y-6">
          {/* Main large image */}
          {images[0] && (
            <div className="w-full overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] md:aspect-[3/2] w-full">
                <Image
                  src={images[0]}
                  alt={`${title} - Imagen principal`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          )}

          {/* Secondary images grid */}
          {images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {images.slice(1).map((image, idx) => (
                <ScrollReveal key={idx} delay={200 * (idx + 1)}>
                  <div className="w-full overflow-hidden rounded-lg">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={image}
                        alt={`${title} - Detalle ${idx + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal
        className={`flex flex-col space-y-6 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}
        delay={reverse ? 100 : 0}
      >
        <div>
          <h3 className="text-title-1 font-display font-bold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-title-3 font-sans font-light text-muted-foreground italic">
            {subtitle}
          </p>
        </div>

        <p className="text-body text-foreground leading-relaxed">
          {description}
        </p>

        <div className="pt-4">
          <Button
            variant="primary-outline"
            size="md"
            className="tracking-wide cursor-pointer"
            asChild
          >
            <a href={ctaLink}>
              {ctaText}
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  )
}
