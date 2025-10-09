interface AboutContentSectionProps {
  title: string
  content: string
  imagePlaceholder: string
  reverse?: boolean
  withImage?: boolean
}

export function AboutContentSection({
  title,
  content,
  imagePlaceholder,
  reverse = false,
  withImage = true,
}: AboutContentSectionProps) {
  if (!withImage) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-title-3 font-display font-bold text-foreground">
              {title}
            </h2>
            <p className="text-body-lg text-foreground leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'md:col-start-2' : ''}`}>
            <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-label">{imagePlaceholder}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`flex flex-col space-y-6 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
            <h2 className="text-title-2 font-display font-bold text-foreground">
              {title}
            </h2>
            <p className="text-body-lg text-foreground leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
