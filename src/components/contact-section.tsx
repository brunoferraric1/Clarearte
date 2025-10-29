'use client'

import { ContactFormFields } from '../../app/[lang]/contacto/contact-form-fields'
import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-8">
          {/* Introduction */}
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-title-1 font-display font-bold text-foreground">
              Hablemos de vuestro gran día
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cada historia de amor es única, y vuestras invitaciones también lo serán.
              Cuéntame un poco sobre vosotros y sobre lo que imagináis para vuestro gran día.
              Con esta información podré preparar una propuesta personalizada y adaptada a vuestra esencia.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="bg-background rounded-lg p-6 md:p-8 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ContactFormFields />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
