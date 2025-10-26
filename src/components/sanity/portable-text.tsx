import { PortableText as PortableTextComponent } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

interface PortableTextProps {
  value: PortableTextBlock[]
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
          image: ({ value }) => {
            if (!value?.asset?._ref) {
              return null
            }

            const imageUrl = urlForImage(value).width(1200).url()

            return (
              <figure className="my-12">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={imageUrl}
                    alt={value.alt || 'Blog image'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
                {value.caption && (
                  <figcaption className="text-body-sm text-muted-foreground text-center mt-4 italic">
                    {value.caption}
                  </figcaption>
                )}
              </figure>
            )
          },
        },
      }}
    />
  )
}
