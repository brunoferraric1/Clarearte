'use client'

import { ScrollReveal } from './scroll-reveal'
import { motion } from 'framer-motion'

export function DetailsSection() {
  return (
    <ScrollReveal>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Decorative line */}
            <motion.div 
              className="w-24 h-[4px] bg-muted-foreground/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Main heading */}
            <motion.h2 
              className="text-title-3 font-sans font-light text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Los pequeños detalles son los que transforman una celebración en un recuerdo eterno
            </motion.h2>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
