'use client'

import { useRef, useEffect } from 'react'
import { annotate } from 'rough-notation'
import type { RoughAnnotation } from 'rough-notation/lib/model'
import { useInView, type MotionValue } from 'framer-motion'

type AnnotationAction =
  | 'underline'
  | 'box'
  | 'circle'
  | 'highlight'
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
  progress?: number | MotionValue<number>
}

function isMotionValueNumber(value: unknown): value is MotionValue<number> {
  return (
    !!value &&
    typeof value === 'object' &&
    'get' in value &&
    typeof (value as MotionValue<number>).get === 'function' &&
    'on' in value &&
    typeof (value as MotionValue<number>).on === 'function'
  )
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
  progress, // New prop to control progress externally (0 to 1)
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const textWrapperRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: '-10%',
  })

  // If we have a progress prop, we don't auto-trigger based on view
  const isControlled = typeof progress !== 'undefined'
  const shouldShow = isControlled ? false : (!isView || isInView)

  useEffect(() => {
    const element = elementRef.current
    const textElement = textWrapperRef.current
    if (!element || !textElement) return

    // Get computed color from CSS variable if needed
    let computedColor = color
    if (typeof window !== 'undefined' && color.includes('var(')) {
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
      padding: padding + 2, // Slight increase in padding for better coverage
      multiline,
    }

    const annotation = (annotate as typeof annotate & ((element: HTMLElement, config: typeof annotationConfig, container: HTMLElement) => RoughAnnotation))(textElement, annotationConfig, element)

    annotationRef.current = annotation

    // If controlled, we check if we need to initialize
    if (isControlled && annotationRef.current) {
       // Force show immediately to generate SVG, but hidden by initial clip-path logic (handled in effect below)
       // We need to make sure animationDuration is small or 0 so it draws instantly, then we clip it.
       // The config already has it (passed as prop, user should pass 0).
       annotationRef.current.show()
    } else if (shouldShow) {
      annotationRef.current?.show()
    }

    const resizeObserver = new ResizeObserver(() => {
      if (!isControlled && shouldShow) {
        annotation.hide()
        annotation.show()
      }
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
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    isControlled
    // Removed shouldShow from dep array to avoid re-creating annotation constantly
  ])

  // Handle controlled progress
  useEffect(() => {
    if (!isControlled || !elementRef.current) return

    const element = elementRef.current

    const applyClip = (rawProgress: number) => {
      const svg = element.querySelector('svg')
      if (!svg) return

      // Ensure it's visible (RoughNotation might set display:none when hidden)
      if (svg.style.display === 'none') svg.style.display = 'block'

      // Clip it based on progress (left to right)
      // Use a little overflow to fully reveal rough edges at the end
      const p = Math.max(0, Math.min(1, rawProgress || 0)) * 130
      svg.style.clipPath = `polygon(0 0, ${p}% 0, ${p}% 100%, 0 100%)`
    }

    // If MotionValue: subscribe to changes without involving React state
    if (isMotionValueNumber(progress)) {
      applyClip(progress.get())
      requestAnimationFrame(() => applyClip(progress.get()))
      const unsubscribe = progress.on('change', (latest) => applyClip(latest))
      return () => unsubscribe()
    }

    // If number: apply once per render update
    if (typeof progress === 'number') {
      applyClip(progress)
      requestAnimationFrame(() => applyClip(progress))
    }
  }, [progress, isControlled])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {/* Wrap children in a span with higher z-index to appear above the annotation */}
      <span ref={textWrapperRef} className="relative z-[2] inline-block">
        {children}
      </span>
    </span>
  )
}
