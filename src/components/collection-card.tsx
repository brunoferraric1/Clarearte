import { Button } from '@/components/ui/button'

interface CollectionCardProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  imagePlaceholder: string
  reverse?: boolean
}

export function CollectionCard({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imagePlaceholder,
  reverse = false,
}: CollectionCardProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      {/* Image */}
      <div className={`${reverse ? 'md:col-start-2' : ''}`}>
        <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span className="text-label">{imagePlaceholder}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col space-y-4 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
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

        <div className="pt-2">
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
      </div>
    </div>
  )
}
