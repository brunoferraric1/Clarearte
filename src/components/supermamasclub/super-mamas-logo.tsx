'use client'

import React from 'react'

type SuperMamasLogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Renders the Super Mamas logo with transparent background.
 * Uses video (webm/mp4) for animation, static webp as poster/fallback.
 */
export function SuperMamasLogo({ className, size = 'md' }: SuperMamasLogoProps) {
  const sizeClasses = {
    sm: 'w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]',
    md: 'w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]',
    lg: 'w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]',
  }

  return (
    <div className={className}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Video animation (preferred) - no background, transparent */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/supermamasclub-logo.webp"
          className="w-full h-full object-contain motion-reduce:hidden"
        >
          <source src="/images/supermamasclub-logo.webm" type="video/webm" />
          <source src="/images/supermamasclub-logo.mp4" type="video/mp4" />
        </video>

        {/* Static fallback for reduced motion */}
        <picture className="absolute inset-0 w-full h-full hidden motion-reduce:block">
          <source srcSet="/images/supermamasclub-logo.webp" type="image/webp" />
          <img
            src="/images/supermamasclub-logo.gif"
            alt="Super Mamas Mail Club"
            width={420}
            height={420}
            className="w-full h-full object-contain"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  )
}
