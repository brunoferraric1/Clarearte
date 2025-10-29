import { Marquee } from '@/components/ui/marquee'
import Image from 'next/image'

const images = [
  { 
    id: 1, 
    src: '/images/colections/coleccion-albor-set-completo-clarearte.webp', 
    alt: 'Colección Albor - Set Completo' 
  },
  { 
    id: 2, 
    src: '/images/colections/coleccion-albor-seating-plan-clarearte.webp', 
    alt: 'Colección Albor - Seating Plan' 
  },
  { 
    id: 3, 
    src: '/images/tarjetas-personalizadas/tarjeta-de-sitio-personalizado-clarearte-1.webp', 
    alt: 'Tarjeta de Sitio Personalizado 1' 
  },
  { 
    id: 4, 
    src: '/images/colections/coleccion-luz_linea-invitacion-boda-clarearte.webp', 
    alt: 'Colección Luz Línea - Invitación de Boda' 
  },
  { 
    id: 5, 
    src: '/images/colections/coleccion-raices-cartel-bienvenido-clarearte.webp', 
    alt: 'Colección Raíces - Cartel Bienvenido' 
  },
  { 
    id: 6, 
    src: '/images/colections/coleccion-raices-invitacion-boda-clarearte.webp', 
    alt: 'Colección Raíces - Invitación de Boda' 
  },
  { 
    id: 7, 
    src: '/images/colections/coleccion-raices-seating-plan-clarearte.webp', 
    alt: 'Colección Raíces - Seating Plan' 
  },
  { 
    id: 8, 
    src: '/images/tarjetas-personalizadas/tarjeta-de-sitio-personalizado-clarearte-2.webp', 
    alt: 'Tarjeta de Sitio Personalizado 2' 
  },
]

export function MarqueeSection() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-28 bg-background overflow-hidden">
      <Marquee className="[--duration:45s]">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-[18rem] h-[24rem] md:w-[22rem] md:h-[30rem] bg-muted rounded-lg flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 18rem, 22rem"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
