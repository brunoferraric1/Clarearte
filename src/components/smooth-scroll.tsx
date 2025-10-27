'use client'

import { useEffect } from 'react'
import { animate } from 'framer-motion'

/**
 * SmoothScroll component that adds animated smooth scrolling to hash links
 * 
 * SEO Benefits:
 * - Content remains server-rendered and fully accessible to crawlers
 * - Progressive enhancement: functionality works without JavaScript as fallback
 * - No content is hidden or blocked during SSR
 * - Animation only enhances user experience, doesn't affect content indexing
 * 
 * This approach follows Next.js SSR best practices by keeping critical content
 * in server components and using client components only for interactive behavior.
 */
export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        const hash = link.getAttribute('href')
        if (hash && hash.length > 1) {
          e.preventDefault()
          
          const targetId = hash.substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            // Calculate target position with offset for better UX
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - 100
            
            // Animate with adaptive duration based on distance
            const currentScrollY = window.scrollY
            const distance = Math.abs(offsetPosition - currentScrollY)
            const duration = Math.min(distance / 1.5, 1500) // Max 1.5 seconds
            
            animate(currentScrollY, offsetPosition, {
              duration: duration / 1000,
              ease: [0.25, 0.1, 0.25, 1], // Smooth ease-in-out
              onUpdate: (latest) => {
                window.scrollTo(0, latest)
              }
            })
          }
        }
      }
    }
    
    // Add event listener on mount
    document.addEventListener('click', handleClick)
    
    // Cleanup on unmount
    return () => document.removeEventListener('click', handleClick)
  }, [])
  
  // This component has no visual output
  return null
}

