import { OrganicImageMask } from '@/components/organic-image-mask'

interface AboutSplashHeroProps {
  image: string
  imageAlt: string
  introText: string
}

export function AboutSplashHero({ image, imageAlt, introText }: AboutSplashHeroProps) {
  return (
    <section className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-8">

          {/* Splash Image with Organic Mask */}
          <div className="w-full min-w-[500px]">
            <OrganicImageMask
              src={image}
              alt={imageAlt}
              maskSrc="/images/brush_mask-2-better-fill.webp"
              className="aspect-[4/3] w-full"
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
