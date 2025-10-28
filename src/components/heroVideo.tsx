'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

interface HeroVideoProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  description?: string
  videoSrc: string
  primaryCTA?: {
    text: string
    href: string
  }
  dimOpacity?: number
  height?: 'small' | 'medium' | 'large'
}

export function HeroVideo({
  title,
  subtitle,
  description,
  videoSrc,
  primaryCTA,
  dimOpacity = 0.4,
  height = 'large'
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const heightClasses = {
    small: 'h-[50vh] md:h-[60vh]',
    medium: 'h-[70vh] md:h-[80vh]',
    large: 'h-[85vh] md:h-[95vh]'
  }

  // Ensure video plays smoothly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy restrictions
      })
    }
  }, [])

  return (
    <section className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark dim overlay for better contrast */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: dimOpacity }}
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Subtitle */}
            {subtitle && (
              <p className="text-label font-mono font-medium text-white/90 tracking-wide uppercase">
                {subtitle}
              </p>
            )}

            {/* Main Title */}
            <h1 className="text-display-1 font-display font-bold text-white drop-shadow-2xl">
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            )}

            {/* CTA Button */}
            {primaryCTA && (
              <div className="flex justify-center items-center pt-4">
                <Button
                  variant="primary"
                  size="md"
                  className="cursor-pointer"
                  asChild
                >
                  <a href={primaryCTA.href}>
                    {primaryCTA.text}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

