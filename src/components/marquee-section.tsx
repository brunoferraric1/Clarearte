import { Marquee } from '@/components/ui/marquee'

const images = [
  { id: 1, alt: 'Imagen 1' },
  { id: 2, alt: 'Imagen 2' },
  { id: 3, alt: 'Imagen 3' },
  { id: 4, alt: 'Imagen 4' },
  { id: 5, alt: 'Imagen 5' },
]

export function MarqueeSection() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-background overflow-hidden">
      <Marquee className="[--duration:30s]">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-[15rem] h-[20rem] md:w-[18.75rem] md:h-[25rem] bg-muted rounded-lg flex-shrink-0 overflow-hidden"
          >
            {/* Placeholder for image */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-label">{image.alt}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
