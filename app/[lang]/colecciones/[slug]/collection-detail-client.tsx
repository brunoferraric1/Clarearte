'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageModal } from '@/components/image-modal'
import { PortableText } from '@/components/sanity/portable-text'
import { urlForImage } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface ImageWithAlt {
  asset: {
    _ref: string
  }
  alt?: {
    pt?: string
    es?: string
    en?: string
  }
  aspectRatio?: string
  fit?: string
}

interface CollectionDetailClientProps {
  collection: {
    _id: string
    contentId: string
    slug: { pt: string; es: string; en: string }
    title: string
    subtitle?: string
    description: string
    content?: unknown[]
    heroImage: ImageWithAlt
    gallery?: ImageWithAlt[]
    ctaText?: string
    order: number
    publishedAt: string
  }
  lang: string
}

export function CollectionDetailClient({
  collection,
  lang,
}: CollectionDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  // Prepare images for modal (hero + gallery)
  const allImages = [collection.heroImage, ...(collection.gallery || [])]

  const modalImages = allImages.map((img) => ({
    src: urlForImage(img as SanityImageSource)
      .width(2000)
      .url(),
    alt:
      img.alt?.[lang as keyof typeof img.alt] ||
      img.alt?.es ||
      img.alt?.pt ||
      img.alt?.en ||
      collection.title,
  }))

  const openModal = (index: number) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => openModal(0)}
        >
          <Image
            src={urlForImage(collection.heroImage as SanityImageSource)
              .width(2000)
              .url()}
            alt={
              collection.heroImage.alt?.[
                lang as keyof typeof collection.heroImage.alt
              ] ||
              collection.heroImage.alt?.es ||
              collection.heroImage.alt?.pt ||
              collection.heroImage.alt?.en ||
              collection.title
            }
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </section>

      {/* Title & Subtitle */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-display-2 md:text-display-1 font-display font-bold text-foreground mb-4">
            {collection.title}
          </h1>
          {collection.subtitle && (
            <p className="text-title-2 md:text-title-1 font-sans font-light text-muted-foreground italic">
              {collection.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-body-lg leading-relaxed text-foreground text-center">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Rich Content (if available) */}
      {collection.content && collection.content.length > 0 && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <PortableText value={collection.content} />
          </div>
        </section>
      )}

      {/* Gallery */}
      {collection.gallery && collection.gallery.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-title-1 font-display font-bold text-foreground text-center mb-12">
              Galería
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collection.gallery.map((image, index) => {
                const imageIndex = index + 1 // +1 because hero is at index 0
                return (
                  <div
                    key={index}
                    className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => openModal(imageIndex)}
                  >
                    <Image
                      src={urlForImage(image as SanityImageSource)
                        .width(800)
                        .url()}
                      alt={
                        image.alt?.[lang as keyof typeof image.alt] ||
                        image.alt?.es ||
                        image.alt?.pt ||
                        image.alt?.en ||
                        `${collection.title} - Imagen ${index + 1}`
                      }
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      <ImageModal
        images={modalImages}
        initialIndex={modalImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
