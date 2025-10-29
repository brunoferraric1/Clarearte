'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { Play, X } from 'lucide-react'

interface GalleryItem {
  type: 'image' | 'video'
  image?: {
    asset: { _ref: string }
    alt?: { pt?: string; es?: string; en?: string }
    caption?: { pt?: string; es?: string; en?: string }
    aspectRatio?: string
  }
  videoUrl?: string
  thumbnail?: {
    asset: { _ref: string }
    alt?: { pt?: string; es?: string; en?: string }
    aspectRatio?: string
  }
}

interface GalleryGridProps {
  items: GalleryItem[]
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'masonry'
  gap?: 'small' | 'medium' | 'large'
  enableLightbox?: boolean
  lang?: 'pt' | 'es' | 'en'
}

// Helper to extract video ID
function getVideoId(url: string): { type: string; id: string } | null {
  // YouTube
  const youtubeRegex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const youtubeMatch = url.match(youtubeRegex)
  if (youtubeMatch) {
    return { type: 'youtube', id: youtubeMatch[1] }
  }

  // Vimeo
  const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/
  const vimeoMatch = url.match(vimeoRegex)
  if (vimeoMatch) {
    return { type: 'vimeo', id: vimeoMatch[1] }
  }

  return null
}

export function GalleryGrid({
  items,
  layout = 'grid-3',
  gap = 'medium',
  enableLightbox = true,
  lang = 'es',
}: GalleryGridProps) {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1)

  const openLightbox = (item: GalleryItem, index: number) => {
    if (enableLightbox) {
      setLightboxItem(item)
      setLightboxIndex(index)
      document.body.style.overflow = 'hidden'
    }
  }

  const closeLightbox = () => {
    setLightboxItem(null)
    setLightboxIndex(-1)
    document.body.style.overflow = ''
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? (lightboxIndex - 1 + items.length) % items.length
        : (lightboxIndex + 1) % items.length
    setLightboxIndex(newIndex)
    setLightboxItem(items[newIndex])
  }

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxItem) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev')
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxItem, lightboxIndex, items])

  const gapClasses = {
    small: 'gap-2 md:gap-3',
    medium: 'gap-4 md:gap-6',
    large: 'gap-6 md:gap-8',
  }

  const gridClasses = {
    'grid-2': 'grid-cols-1 sm:grid-cols-2',
    'grid-3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    'grid-4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    masonry: 'columns-1 sm:columns-2 lg:columns-3',
  }

  const isMasonry = layout === 'masonry'

  return (
    <>
      <div
        className={
          isMasonry
            ? `${gridClasses[layout]} ${gapClasses[gap]}`
            : `grid ${gridClasses[layout]} ${gapClasses[gap]}`
        }
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={isMasonry ? 'break-inside-avoid mb-4' : ''}
          >
            <GalleryItem
              item={item}
              index={index}
              lang={lang}
              enableLightbox={enableLightbox}
              onOpen={() => openLightbox(item, index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={(e) => {
            e.stopPropagation()
            closeLightbox()
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('prev')
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2 text-5xl z-10 bg-black/30 rounded-full w-14 h-14 flex items-center justify-center"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('next')
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2 text-5xl z-10 bg-black/30 rounded-full w-14 h-14 flex items-center justify-center"
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}

          <div
            className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === 'image' && lightboxItem.image?.asset?._ref && (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={urlForImage(lightboxItem.image).width(2000).url()}
                  alt={
                    lightboxItem.image.alt?.[lang] ||
                    lightboxItem.image.alt?.es ||
                    lightboxItem.image.alt?.pt ||
                    lightboxItem.image.alt?.en ||
                    'Gallery image'
                  }
                  width={2000}
                  height={1333}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                />
              </div>
            )}

            {lightboxItem.type === 'video' && lightboxItem.videoUrl && (
              <div className="relative w-full max-w-5xl aspect-video">
                {(() => {
                  const videoData = getVideoId(lightboxItem.videoUrl)
                  if (!videoData) return null

                  const embedUrl =
                    videoData.type === 'youtube'
                      ? `https://www.youtube.com/embed/${videoData.id}?autoplay=1`
                      : `https://player.vimeo.com/video/${videoData.id}?autoplay=1`

                  return (
                    <iframe
                      src={embedUrl}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )
                })()}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

function GalleryItem({
  item,
  index,
  lang,
  enableLightbox,
  onOpen,
}: {
  item: GalleryItem
  index: number
  lang: 'pt' | 'es' | 'en'
  enableLightbox: boolean
  onOpen: () => void
}) {
  // Map aspect ratios to Tailwind classes
  const getAspectRatioClass = (ratio?: string) => {
    if (!ratio || ratio === 'auto') return null
    
    const ratioMap: Record<string, string> = {
      '16/9': 'aspect-video',
      '4/3': 'aspect-[4/3]',
      '1/1': 'aspect-square',
      '3/4': 'aspect-[3/4]',
      '2/3': 'aspect-[2/3]',
    }
    
    return ratioMap[ratio] || null
  }

  if (item.type === 'image' && item.image?.asset?._ref) {
    const imageUrl = urlForImage(item.image).width(1200).url()
    const aspectRatio = item.image.aspectRatio
    const aspectRatioClass = getAspectRatioClass(aspectRatio)
    const useAspectRatio = aspectRatio && aspectRatio !== 'auto'
    
    const alt =
      item.image.alt?.[lang] ||
      item.image.alt?.es ||
      item.image.alt?.pt ||
      item.image.alt?.en ||
      `Gallery image ${index + 1}`

    return (
      <div
        className={`relative overflow-hidden rounded-lg group ${enableLightbox ? 'cursor-pointer' : ''}`}
        onClick={onOpen}
      >
        <div 
          className={`relative ${useAspectRatio ? aspectRatioClass : ''}`}
          style={useAspectRatio && !aspectRatioClass ? { aspectRatio } : undefined}
        >
          {useAspectRatio ? (
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Image
              src={imageUrl}
              alt={alt}
              width={1200}
              height={900}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        {enableLightbox && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        )}
      </div>
    )
  }

  if (item.type === 'video' && item.videoUrl) {
    const videoData = getVideoId(item.videoUrl)
    if (!videoData) return null

    const aspectRatio = item.thumbnail?.aspectRatio
    const aspectRatioClass = getAspectRatioClass(aspectRatio) || 'aspect-video'

    // Get thumbnail
    const thumbnailUrl = item.thumbnail?.asset?._ref
      ? urlForImage(item.thumbnail).width(1200).url()
      : videoData.type === 'youtube'
        ? `https://img.youtube.com/vi/${videoData.id}/maxresdefault.jpg`
        : null

    const alt = item.thumbnail?.alt?.[lang] || 'Video thumbnail'

    return (
      <div
        className={`relative overflow-hidden rounded-lg group cursor-pointer`}
        onClick={onOpen}
      >
        <div 
          className={`relative ${aspectRatioClass}`}
          style={aspectRatio && aspectRatio !== 'auto' && !aspectRatioClass ? { aspectRatio } : undefined}
        >
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-muted" />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

