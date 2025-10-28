'use client'

import { Button } from '@/components/ui/button'
import { OrganicImageMask } from '@/components/organic-image-mask'
import { ScrollReveal } from './scroll-reveal'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <ScrollReveal>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left column - Text content */}
            <motion.div 
              className="flex flex-col space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
            <h2 className="text-display-1 font-display font-bold text-foreground">
              Sobre mí
            </h2>

            <p className="text-body text-muted-foreground leading-relaxed">
              Soy Paola, diseñadora e ilustradora especializada en papelería de boda.
              Mi misión es que la elección de vuestras invitaciones sea tan especial
              como el propio "sí, quiero": un proceso cercano, delicado y lleno de
              inspiración
            </p>

            <div className="pt-2">
              <Button
                variant="primary-outline"
                size="md"
                className="tracking-wide cursor-pointer"
                asChild
              >
                <a href="/sobre-mi">
                  Conóceme mejor
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right column - Image with organic mask */}
          <motion.div 
            className="aspect-[4/3]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <OrganicImageMask
              src="/images/paola-sobre-mi.webp"
              alt="Paola - Sobre mí"
              maskSrc="/images/brush_mask-2-better-fill.webp"
              className="w-full h-full"
            />
          </motion.div>

        </div>
      </div>
    </section>
    </ScrollReveal>
  )
}
