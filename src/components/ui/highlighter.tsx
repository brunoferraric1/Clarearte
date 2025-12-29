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
  iterations = 1, // Changed default to 1 for single pass
  padding = 2,
  multiline = true,
  isView = false,
  progress, // New prop to control progress externally (0 to 1)
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const textWrapperRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)
  const highlightDivRef = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: '-10%',
  })

  // If we have a progress prop, we use CSS-based highlight instead of RoughNotation
  const isControlled = typeof progress !== 'undefined'
  const shouldShow = isControlled ? false : (!isView || isInView)

  // For NON-controlled mode: use RoughNotation as before
  useEffect(() => {
    if (isControlled) return // Skip RoughNotation for controlled mode

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
      padding: padding + 2,
      multiline,
    }

    const annotation = (annotate as typeof annotate & ((element: HTMLElement, config: typeof annotationConfig, container: HTMLElement) => RoughAnnotation))(textElement, annotationConfig, element)

    annotationRef.current = annotation

    if (shouldShow) {
      annotationRef.current?.show()
    }

    const resizeObserver = new ResizeObserver(() => {
      if (shouldShow) {
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
    isControlled,
    shouldShow
  ])

  // For CONTROLLED mode: use a simple CSS-based highlight div
  useEffect(() => {
    if (!isControlled || !elementRef.current || !textWrapperRef.current) return

    const element = elementRef.current
    const textElement = textWrapperRef.current

    // Create or get the highlight div
    let highlightDiv = highlightDivRef.current
    if (!highlightDiv) {
      highlightDiv = document.createElement('div')
      highlightDiv.style.position = 'absolute'
      highlightDiv.style.top = '-2px'
      highlightDiv.style.left = '-4px'
      highlightDiv.style.bottom = '-2px'
      highlightDiv.style.backgroundColor = color
      highlightDiv.style.zIndex = '1'
      highlightDiv.style.pointerEvents = 'none'
      highlightDiv.style.width = '0%'
      // Add some padding to fully cover
      highlightDiv.style.paddingRight = '8px'
      highlightDiv.style.marginRight = '-8px'
      element.insertBefore(highlightDiv, textElement)
      highlightDivRef.current = highlightDiv
    }

    // Update color if changed
    highlightDiv.style.backgroundColor = color

    const applyProgress = (rawProgress: number) => {
      if (!highlightDiv) return
      const p = Math.max(0, Math.min(1, rawProgress || 0))
      // Add a bit extra to ensure full coverage
      const widthPercent = p * 108
      highlightDiv.style.width = `${widthPercent}%`
    }

    // If MotionValue: subscribe to changes
    if (isMotionValueNumber(progress)) {
      applyProgress(progress.get())
      const unsubscribe = progress.on('change', (latest) => applyProgress(latest))
      return () => unsubscribe()
    }

    // If number: apply directly
    if (typeof progress === 'number') {
      applyProgress(progress)
    }

    return () => {
      // Cleanup highlight div on unmount
      if (highlightDivRef.current && element.contains(highlightDivRef.current)) {
        element.removeChild(highlightDivRef.current)
        highlightDivRef.current = null
      }
    }
  }, [progress, isControlled, color])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {/* Wrap children in a span with higher z-index to appear above the highlight */}
      <span ref={textWrapperRef} className="relative z-[2] inline-block">
        {children}
      </span>
    </span>
  )
}
