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
    lg: 'w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]',
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
