'use client'

import { useEffect, useRef } from 'react'
import type React from 'react'
import { useInView } from 'motion/react'
import { annotate } from 'rough-notation'
import { type RoughAnnotation } from 'rough-notation/lib/model'

type AnnotationAction =
  | 'highlight'
  | 'underline'
  | 'box'
  | 'circle'
  | 'strike-through'
  | 'crossed-off'
  | 'bracket'

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = 'highlight',
  color = '#ffd1dc',
  strokeWidth = 1.5,
  animationDuration = 800,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const textWrapperRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: '-10%',
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  useEffect(() => {
    if (!shouldShow) return

    const element = elementRef.current
    const textElement = textWrapperRef.current
    if (!element || !textElement) return

    // Get computed color from CSS variable if needed
    let computedColor = color
    if (typeof window !== 'undefined' && color.includes('var(')) {
      // Create a temporary element to get the computed CSS value
      const tempDiv = document.createElement('div')
      tempDiv.style.color = color
      document.body.appendChild(tempDiv)
      const computedStyle = window.getComputedStyle(tempDiv)
      computedColor = computedStyle.color
      document.body.removeChild(tempDiv)
    }

    const annotationConfig = {
      type: action,
      color: computedColor,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    }

    // Annotate the inner text wrapper, with outer element as container
    // This allows the SVG to be positioned behind the text
    const annotation = (annotate as any)(textElement, annotationConfig, element)

    annotationRef.current = annotation
    annotation.show()

    const resizeObserver = new ResizeObserver(() => {
      annotation.hide()
      annotation.show()
    })

    resizeObserver.observe(element)
    resizeObserver.observe(document.body)

    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove()
      }
      resizeObserver.disconnect()
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {/* Wrap children in a span with higher z-index to appear above the annotation */}
      <span ref={textWrapperRef} className="relative z-[2] inline-block">
        {children}
      </span>
    </span>
  )
}
