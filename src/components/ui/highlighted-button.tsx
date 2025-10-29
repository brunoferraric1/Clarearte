'use client'

import { useState, useRef, useEffect } from 'react'
import { Button, type ButtonProps } from './button'
import { ArrowRight } from 'lucide-react'
import { annotate } from 'rough-notation'
import { type RoughAnnotation } from 'rough-notation/lib/model'
import { cn } from '@/lib/utils'

interface HighlightedButtonProps extends Omit<ButtonProps, 'variant' | 'children'> {
  children: React.ReactNode
  highlightColor?: string
  strokeWidth?: number
  animationDuration?: number
  showArrow?: boolean
  underlinePadding?: number
}

export function HighlightedButton({
  children,
  highlightColor = 'var(--primary)',
  strokeWidth = 2,
  animationDuration = 400,
  showArrow = true,
  underlinePadding = 10,
  className,
  ...props
}: HighlightedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const textRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return

    // Get computed color from CSS variable if needed
    let computedColor = highlightColor
    if (typeof window !== 'undefined' && highlightColor.includes('var(')) {
      const tempDiv = document.createElement('div')
      tempDiv.style.color = highlightColor
      document.body.appendChild(tempDiv)
      const computedStyle = window.getComputedStyle(tempDiv)
      computedColor = computedStyle.color
      document.body.removeChild(tempDiv)
    }

    const annotationConfig = {
      type: 'underline',
      color: computedColor,
      strokeWidth,
      animationDuration,
      iterations: 1,
      padding: underlinePadding,
      multiline: false,
    }

    // Create annotation but don't show it yet
    const annotation = (annotate as any)(
      textRef.current,
      annotationConfig,
      containerRef.current
    )

    annotationRef.current = annotation

    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove()
      }
    }
  }, [highlightColor, strokeWidth, animationDuration, underlinePadding])

  // Handle hover state changes
  useEffect(() => {
    if (annotationRef.current) {
      if (isHovered) {
        annotationRef.current.show()
      } else {
        annotationRef.current.hide()
      }
    }
  }, [isHovered])

  return (
    <Button
      variant="ghost"
      className={cn('hover:bg-transparent', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="inline-flex items-center gap-1">
        <span ref={containerRef} className="relative inline-block">
          <span ref={textRef} className="relative z-[2] inline-block">
            {children}
          </span>
        </span>
        {showArrow && (
          <ArrowRight
            className={`text-primary transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          />
        )}
      </span>
    </Button>
  )
}

