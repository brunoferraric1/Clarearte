interface PageHeroProps {
  title: string
  image?: string
  imageAlt?: string
  subtitle?: string
  overlayOpacity?: number
  height?: 'small' | 'medium' | 'large'
}

export function PageHero({
  title,
  image,
  imageAlt = '',
  subtitle,
  overlayOpacity = 0,
  height = 'medium'
}: PageHeroProps) {
  const heightClasses = {
    small: 'h-[40vh] md:h-[45vh]',
    medium: 'h-[50vh] md:h-[55vh]',
    large: 'h-[60vh] md:h-[65vh]'
  }

  return (
    <section className="w-full">
      {/* Large hero image with centered title */}
      <div className={`relative w-screen ${heightClasses[height]} bg-muted overflow-hidden -mx-[50vw] left-1/2 right-1/2`}>
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center text-muted-foreground">
            <span className="text-label">Imagen {imageAlt || title}</span>
          </div>
        )}

        {/* Optional overlay for better text readability */}
        {overlayOpacity > 0 && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}

        {/* Centered title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-display-3 font-display font-bold text-white drop-shadow-lg px-4 text-center">
            {title}
          </h1>
        </div>
      </div>

      {/* Optional subtext below image */}
      {subtitle && (
        <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-body-lg text-foreground leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
