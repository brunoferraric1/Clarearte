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
    lg: 'w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]',
  }

  return (
    <div className={className}>
      <div className={`relative ${sizeClasses[size]} max-w-[90vw] max-h-[90vw]`}>
        {/* GIF animation as requested */}
        <img
          src="/images/supermamasclub-logo.gif"
          alt="Super Mamas Mail Club"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
