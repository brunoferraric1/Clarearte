interface AboutSplashHeroProps {
  image: string
  imageAlt: string
  introText: string
}

export function AboutSplashHero({ image, imageAlt, introText }: AboutSplashHeroProps) {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">

          {/* Splash Image */}
          <div className="w-full max-w-4xl min-w-[500px]">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-display-1 font-display font-light text-foreground text-center">
            Sobre mí
          </h1>

          {/* Intro Text */}
          <p className="text-body text-foreground text-center leading-relaxed max-w-4xl">
            {introText}
          </p>
        </div>
      </div>
    </section>
  )
}
