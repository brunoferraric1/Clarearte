'use client'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react'

interface PortableTextProps {
  value: PortableTextBlock[]
}

// Helper function to extract video ID from URL
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

export function PortableText({ value }: PortableTextProps) {
  return (
    <PortableTextComponent
      value={value}
      components={{
        block: {
          h1: ({ children }) => (
            <h1 className="text-display-1 font-serif mb-8 mt-12 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-title-1 font-serif mb-6 mt-12">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-title-2 font-serif mb-4 mt-8">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-title-3 font-serif mb-3 mt-6">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-body-xl font-semibold mb-3 mt-6">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-body-lg font-semibold mb-2 mt-4">{children}</h6>
          ),
          normal: ({ children }) => (
            <p className="text-body-lg mb-6 leading-relaxed text-foreground/90">
              {children}
            </p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-12 border-l-4 border-primary pl-6 py-4 bg-muted/20 rounded-r-lg">
              <p className="text-body-xl font-serif italic text-foreground">
                {children}
              </p>
            </blockquote>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="my-8 space-y-3 list-disc pl-6 marker:text-primary">
              {children}
            </ul>
          ),
          number: ({ children }) => (
            <ol className="my-8 space-y-3 list-decimal pl-6 marker:text-primary marker:font-semibold">
              {children}
            </ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => (
            <li className="text-body-lg text-foreground/90 pl-2">{children}</li>
          ),
          number: ({ children }) => (
            <li className="text-body-lg text-foreground/90 pl-2">{children}</li>
          ),
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          link: ({ children, value }) => {
            const rel = !value.href.startsWith('/')
              ? 'noopener noreferrer'
              : undefined
            return (
              <a
                href={value.href}
                rel={rel}
                className="text-primary underline hover:text-primary/80 transition-colors"
              >
                {children}
              </a>
            )
          },
        },
        types: {
          // Single Image
          imageWithAlt: ({ value }) => {
            if (!value?.asset?._ref) {
              return null
            }

            const imageUrl = urlForImage(value).width(2000).url()
            const aspectRatio = value.aspectRatio || 'auto'
            const fit = value.fit || 'contain'

            return (
              <figure className="my-12">
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={aspectRatio !== 'auto' ? { aspectRatio } : undefined}
                >
                  {aspectRatio === 'auto' ? (
                    <Image
                      src={imageUrl}
                      alt={value.alt?.pt || value.alt?.es || value.alt?.en || 'Blog image'}
                      width={2000}
                      height={1333}
                      sizes="(max-width: 768px) 100vw, 2000px"
                      className={fit === 'cover' ? 'w-full h-auto object-cover' : 'w-full h-auto object-contain'}
                    />
                  ) : (
                    <Image
                      src={imageUrl}
                      alt={value.alt?.pt || value.alt?.es || value.alt?.en || 'Blog image'}
                      fill
                      sizes="(max-width: 768px) 100vw, 2000px"
                      className={fit === 'cover' ? 'object-cover' : 'object-contain'}
                    />
                  )}
                </div>
                {value.caption && (
                  <figcaption className="text-body-sm text-muted-foreground text-center mt-4 italic">
                    {value.caption.pt || value.caption.es || value.caption.en}
                  </figcaption>
                )}
              </figure>
            )
          },

          // Image Gallery
          imageGallery: ({ value }) => {
            if (!value?.images || value.images.length === 0) {
              return null
            }

            const gridClasses = {
              'grid-2': 'grid-cols-1 md:grid-cols-2',
              'grid-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
              masonry: 'columns-1 md:columns-2 lg:columns-3',
            }

            const layout = value.layout || 'grid-2'
            const isMasonry = layout === 'masonry'

            return (
              <figure className="my-16">
                <div
                  className={
                    isMasonry
                      ? `${gridClasses[layout]} gap-4`
                      : `grid ${gridClasses[layout]} gap-4`
                  }
                >
                  {value.images.map((image: any, index: number) => (
                    <div
                      key={index}
                      className={isMasonry ? 'break-inside-avoid mb-4' : ''}
                    >
                      <div
                        className="relative w-full overflow-hidden rounded-lg"
                        style={image.aspectRatio && image.aspectRatio !== 'auto' ? { aspectRatio: image.aspectRatio } : undefined}
                      >
                        {image.aspectRatio && image.aspectRatio !== 'auto' ? (
                          <Image
                            src={urlForImage(image).width(1400).url()}
                            alt={image.alt?.pt || image.alt?.es || image.alt?.en || `Gallery image ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={(image.fit || 'contain') === 'cover' ? 'object-cover' : 'object-contain'}
                          />
                        ) : (
                          <Image
                            src={urlForImage(image).width(1400).url()}
                            alt={image.alt?.pt || image.alt?.es || image.alt?.en || `Gallery image ${index + 1}`}
                            width={1400}
                            height={1050}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={(image.fit || 'contain') === 'cover' ? 'w-full h-auto object-cover' : 'w-full h-auto object-contain'}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {value.caption && (
                  <figcaption className="text-body-sm text-muted-foreground text-center mt-6 italic">
                    {value.caption.pt || value.caption.es || value.caption.en}
                  </figcaption>
                )}
              </figure>
            )
          },

          // Callout
          callout: ({ value }) => {
            const icons = {
              info: AlertCircle,
              warning: AlertTriangle,
              success: CheckCircle2,
              tip: Lightbulb,
            }

            const styles = {
              info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100',
              warning:
                'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-100',
              success:
                'bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-100',
              tip: 'bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-100',
            }

            const Icon = icons[value.variant as keyof typeof icons] || AlertCircle
            const style = styles[value.variant as keyof typeof styles] || styles.info

            return (
              <div
                className={`my-8 p-6 border-2 rounded-lg ${style}`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    {value.title && (
                      <h4 className="font-semibold text-body-xl mb-2">
                        {value.title.pt || value.title.es || value.title.en}
                      </h4>
                    )}
                    <p className="text-body leading-relaxed">
                      {value.content.pt || value.content.es || value.content.en}
                    </p>
                  </div>
                </div>
              </div>
            )
          },

          // Video Embed
          videoEmbed: ({ value }) => {
            if (!value?.url) {
              return null
            }

            const videoData = getVideoId(value.url)

            if (!videoData) {
              return null
            }

            const embedUrl =
              videoData.type === 'youtube'
                ? `https://www.youtube.com/embed/${videoData.id}`
                : `https://player.vimeo.com/video/${videoData.id}`

            const aspectRatio = value.aspectRatio || '16/9'

            return (
              <figure className="my-12">
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio }}
                >
                  <iframe
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {value.caption && (
                  <figcaption className="text-body-sm text-muted-foreground text-center mt-4 italic">
                    {value.caption.pt || value.caption.es || value.caption.en}
                  </figcaption>
                )}
              </figure>
            )
          },

          // Call to Action
          cta: ({ value }) => {
            if (!value?.text || !value?.url) {
              return null
            }

            const text = value.text.pt || value.text.es || value.text.en
            const url = value.url.pt || value.url.es || value.url.en

            const variantMap = {
              primary: 'primary',
              secondary: 'secondary',
              outline: 'primary-outline',
            }

            const variant = variantMap[value.variant as keyof typeof variantMap] || 'primary'

            const Wrapper = url.startsWith('http') ? 'a' : Link

            return (
              <div className="my-12 flex justify-center">
                <Button size="lg" variant={variant as any} asChild>
                  <Wrapper
                    href={url}
                    target={value.openInNewTab ? '_blank' : undefined}
                    rel={value.openInNewTab ? 'noopener noreferrer' : undefined}
                  >
                    {text}
                  </Wrapper>
                </Button>
              </div>
            )
          },

          // Divider
          divider: ({ value }) => {
            const spacingClasses = {
              small: 'my-8',
              medium: 'my-12',
              large: 'my-16',
            }

            const spacing =
              spacingClasses[value.spacing as keyof typeof spacingClasses] ||
              spacingClasses.medium

            if (value.style === 'decorative') {
              return (
                <div className={`flex justify-center ${spacing}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-12 h-px bg-primary" />
                  </div>
                </div>
              )
            }

            if (value.style === 'dots') {
              return (
                <div className={`flex justify-center ${spacing}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                  </div>
                </div>
              )
            }

            // Simple line
            return <hr className={`border-muted ${spacing}`} />
          },
        },
      }}
    />
  )
}
