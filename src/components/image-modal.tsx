'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ImageModalProps {
  images: { src: string; alt: string }[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50

  // Reset index when modal opens or initial index changes
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navigateNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const navigatePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        navigatePrevious()
      } else if (e.key === 'ArrowRight') {
        navigateNext()
      }
    },
    [isOpen, onClose, navigateNext, navigatePrevious]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      navigateNext()
    } else if (isRightSwipe) {
      navigatePrevious()
    }
  }

  // Click backdrop to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fade-in"
      onClick={handleBackdropClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Previous button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 z-10 text-white hover:bg-white/10 hidden md:flex"
          onClick={navigatePrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 z-10 text-white hover:bg-white/10 hidden md:flex"
          onClick={navigateNext}
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white text-body-sm bg-black/50 px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Main image */}
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 md:p-8">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile swipe hint */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-body-xs md:hidden">
          Swipe to navigate
        </div>
      )}
    </div>
  )
}
