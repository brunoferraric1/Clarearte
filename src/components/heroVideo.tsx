'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'

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
    <motion.section 
      className={`relative w-full ${heightClasses[height]} overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-label font-mono font-medium text-white/90 tracking-wide uppercase">
                  {subtitle}
                </p>
              </motion.div>
            )}

            {/* Main Title - using TextEffect for word-by-word animation */}
            <motion.h1 
              className="text-display-1 font-display font-bold text-white drop-shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01 }}
            >
              {typeof title === 'string' ? (
                <TextEffect
                  per="word"
                  preset="slide"
                  className="text-display-1 font-display font-bold text-white drop-shadow-2xl"
                  segmentTransition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  speedReveal={0.8}
                >
                  {title}
                </TextEffect>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  {title}
                </motion.div>
              )}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                <p className="text-body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                  {description}
                </p>
              </motion.div>
            )}

            {/* CTA Button */}
            {primaryCTA && (
              <motion.div 
                className="flex justify-center items-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              >
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
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

