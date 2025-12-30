'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

type MenuItem = {
  label: string
  href: string
}

type StickyHeaderProps = {
  menuItems: MenuItem[]
  ctaLabel: string
  ctaHref: string
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function StickyHeader({ menuItems, ctaLabel, ctaHref }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past 85vh (hero section height)
      const heroHeight = window.innerHeight * 0.85
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when header hides
  useEffect(() => {
    if (!isVisible) {
      setIsMobileMenuOpen(false)
    }
  }, [isVisible])

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    event.preventDefault()
    setIsMobileMenuOpen(false)

    const targetId = href.replace('#', '')
    const targetSection = document.getElementById(targetId)
    if (!targetSection) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targetSection.scrollIntoView()
      return
    }

    const startY = window.scrollY
    const targetY = targetSection.getBoundingClientRect().top + startY - 80 // Offset for header

    animate(startY, targetY, {
      duration: 0.9,
      ease: easeOut,
      onUpdate: (latest) => window.scrollTo(0, latest),
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center justify-between h-16 md:h-18">
              {/* Left side: Burger + Logo */}
              <div className="flex items-center gap-3">
                {/* Mobile Burger Menu */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 -ml-2 text-stone-600 hover:text-[#E8976C] transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>

                {/* Small Logo */}
                <a 
                  href="#hero" 
                  onClick={(e) => scrollToSection(e, '#hero')}
                  className="shrink-0"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14">
                    <img
                      src="/images/supermamasclub-logo.gif"
                      alt="Super Mamas Mail Club"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-stone-600 hover:text-[#E8976C] font-medium text-sm transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E8976C] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="sm"
                className="bg-[#EAB308] hover:bg-[#CA8A04] text-white rounded-full px-5 py-2 text-sm font-bold tracking-wide uppercase shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <a href={ctaHref} onClick={(e) => scrollToSection(e, ctaHref)}>
                  {ctaLabel}
                </a>
              </Button>
            </nav>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="md:hidden overflow-hidden bg-white/98 border-t border-stone-100"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="text-stone-600 hover:text-[#E8976C] hover:bg-stone-50 font-medium text-base py-3 px-4 rounded-xl transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

