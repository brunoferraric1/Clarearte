'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  initialOpacity?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export function AnimatedSection({
  children,
  className = '',
  initialOpacity = 0,
  direction = 'up',
  delay = 0,
}: AnimatedSectionProps) {
  const getInitial = () => {
    const base = { opacity: initialOpacity }
    switch (direction) {
      case 'up':
        return { ...base, y: 40 }
      case 'down':
        return { ...base, y: -40 }
      case 'left':
        return { ...base, x: 40 }
      case 'right':
        return { ...base, x: -40 }
      default:
        return base
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}





