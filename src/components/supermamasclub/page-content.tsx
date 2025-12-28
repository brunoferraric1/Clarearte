'use client'

import { animate, motion, useScroll, useTransform } from 'framer-motion'
import { SuperMamasLogo } from '@/components/supermamasclub/super-mamas-logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Heart, Star, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

type HowStep = {
  title: string
  body: string
}

type ReceiveItem = {
  title: string
  body: string
  color: string
}

type ValueItem = {
  title: string
  body: string
}

type Plan = {
  title: string
  price: string
  bullets: string[]
}

type FaqItem = {
  q: string
  a: string
}

type SuperMamasCopy = {
  headline: string
  cta: string
  tagline: string
  intro: { lines: string[]; highlight: string; closing: string[] }
  whatIsTitle: string
  whatIsBody: string[]
  howTitle: string
  howSteps: HowStep[]
  receiveTitle: string
  receiveItems: ReceiveItem[]
  valuesTitle: string
  values: ValueItem[]
  plansTitle: string
  plansNote: string
  planCta: string
  pricingNote: string
  planSpain: Plan
  planIntl: Plan
  whyTitle: string
  whyBody: string
  whyClosing?: string
  quote: string
  faqTitle: string
  faqs: FaqItem[]
  signoffTitle: string
  signoffBy: string
}

type ContentProps = {
  copy: SuperMamasCopy
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: easeOut }
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
}

export function SuperMamasClubContent({ copy: t }: ContentProps) {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const logoY = useTransform(scrollY, [0, 500], [0, -50])
  const textY = useTransform(scrollY, [0, 500], [0, -25])

  const scrollToPricing = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const pricingSection = document.getElementById('pricing')
    if (!pricingSection) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pricingSection.scrollIntoView()
      return
    }

    const startY = window.scrollY
    const targetY = pricingSection.getBoundingClientRect().top + startY

    animate(startY, targetY, {
      duration: 0.9,
      ease: easeOut,
      onUpdate: (latest) => window.scrollTo(0, latest),
    })
  }

  const colorClasses = {
    orange: 'text-[#E8976C] bg-[#E8976C]/10',
    yellow: 'text-[#D4A84B] bg-[#D4A84B]/10',
    sage: 'text-[#7BB5A3] bg-[#7BB5A3]/10',
    purple: 'text-[#B896C6] bg-[#B896C6]/10',
  }

  const iconMap = {
    yellow: Heart,
    orange: Star,
    sage: Sparkles,
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#4A4A4A] font-sans selection:bg-[#E8976C]/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col overflow-hidden">
        {/* Background Image with Warm Overlay */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/supermamas-hero-bg.jpg"
            alt="Cozy reading moment"
            fill
            className="object-cover"
            priority
          />
          {/* Soft dim overlay for readability */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="relative z-10 flex-1 flex flex-col">
          {/* Main container with reduced top padding on desktop to pull content up */}
          <div className="container mx-auto flex-1 px-6 text-center flex flex-col items-center justify-start pt-4 pb-10 md:pt-4 lg:-mt-8 gap-0">
            {/* Logo (top) */}
	            <motion.div
	              style={{ y: logoY }}
	              initial={{ opacity: 0, y: -8, scale: 0.98 }}
	              animate={{ opacity: 1, y: 0, scale: 1 }}
	              transition={{ duration: 0.75, ease: easeOut }}
	            >
	              <SuperMamasLogo size="lg" />
	            </motion.div>

            {/* Content Group: Headline + CTA */}
            <motion.div 
              style={{ y: textY }}
              className="flex flex-col items-center w-full max-w-4xl -mt-4 md:-mt-6"
            >
              {/* Headline (center) */}
	              <motion.div
	                initial={{ opacity: 0, y: 14 }}
	                animate={{ opacity: 1, y: 0 }}
	                transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
	                className="mb-8 md:mb-10"
	              >
                <h1 className="text-[clamp(2.25rem,5vw+1rem,4.5rem)] font-serif text-white drop-shadow-lg text-balance leading-[1.08] px-2">
                  {t.headline}
                </h1>
              </motion.div>

              {/* CTA (bottom) */}
	              <motion.div
	                initial={{ opacity: 0, y: 10 }}
	                animate={{ opacity: 1, y: 0 }}
	                transition={{ delay: 0.25, duration: 0.7, ease: easeOut }}
	              >
                <Button
                  variant="primary"
                  size="lg"
                  asChild
                  className="bg-[#EAB308] hover:bg-[#CA8A04] text-white rounded-full px-10 py-6 md:px-12 md:py-7 text-base md:text-lg font-bold tracking-wide uppercase shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <a href="#pricing" onClick={scrollToPricing}>
                    {t.cta}
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION - Warm & Personal */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...fadeInUp}
            className="space-y-8 relative"
          >
             {/* Decorative element */}
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-[#E8976C]/10 rounded-full blur-2xl" />

            {/* Moved tagline here (handwriting title) */}
            <div className="space-y-2">
              <p className="text-center lg:text-left font-handwriting text-5xl md:text-6xl text-[#E8976C] leading-none">
                {t.tagline}
              </p>
            </div>
            
            <div className="space-y-4 text-lg md:text-xl text-stone-500 font-light leading-relaxed">
              {t.intro.lines.map((line: string, idx: number) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            <div className="pl-6 border-l-4 border-[#E8976C]">
              <p className="text-2xl md:text-3xl font-serif text-stone-800 leading-tight">
                {t.intro.highlight}
              </p>
            </div>

            <div className="pt-4 space-y-2 font-medium text-stone-600">
              {t.intro.closing.map((line: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-[#E8976C]" />
                  <p>{line}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              <Image
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                alt="Hand holding illustrated postcard"
                fill
                className="object-cover"
              />
            </div>
            {/* Organic shape backdrop */}
            <div className="absolute -inset-4 bg-[#D4A84B]/20 -z-10 rounded-[2rem] rotate-[-3deg]" />
          </motion.div>
        </div>
      </section>

      {/* WHAT IS IT - Clean Cards */}
      <section className="py-24 bg-white/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              {...fadeInUp}
              className="font-serif text-4xl md:text-5xl text-stone-800 mb-6"
            >
              {t.whatIsTitle}
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
               <p className="text-lg text-stone-600 leading-relaxed mb-6">
                {t.whatIsBody[0]} {t.whatIsBody[1]}
               </p>
               <p className="text-lg text-stone-600 leading-relaxed">
                 {t.whatIsBody[2]}
               </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
               <p className="text-lg text-stone-600 leading-relaxed mb-6">
                 {t.whatIsBody[3]} {t.whatIsBody[4]}
               </p>
               <div className="flex items-center gap-3 text-[#E8976C] font-serif italic text-xl">
                 <Sparkles className="w-5 h-5" />
                 {t.whatIsBody[5]}
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS - Horizontal Steps */}
      <section className="py-24 md:py-32 bg-[#E8976C]/10">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeInUp}
            className="text-center font-serif text-4xl md:text-5xl text-stone-800 mb-16"
          >
            {t.howTitle}
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-10"
          >
            {t.howSteps.map((step, idx: number) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="relative bg-white p-8 rounded-3xl shadow-sm hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#E8976C] text-white rounded-full flex items-center justify-center font-serif text-2xl shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mt-6 mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE - Visual List */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            {...fadeInUp}
            className="space-y-6"
          >
             <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
               {t.receiveTitle}
             </h2>
             <p className="text-xl text-stone-500 font-light">
               Each envelope is a curated experience.
             </p>
          </motion.div>

          <div className="space-y-8">
            {t.receiveItems.map((item, idx: number) => {
              const colorKey = item.color as keyof typeof iconMap
              const Icon = iconMap[colorKey] || Star;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className={cn(
                    "w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors",
                    colorClasses[item.color as keyof typeof colorClasses]
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-stone-800 mb-2 group-hover:text-[#E8976C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-lg">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VALUES - Minimalist */}
      <section className="py-24 bg-stone-900 text-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeInUp}>
               <h2 className="font-serif text-4xl md:text-6xl leading-[1.1]">
                 <span className="text-[#D4A84B]">Nothing generic.</span><br/>
                 <span className="text-[#E8976C]">Nothing automated.</span><br/>
                 <span className="text-[#7BB5A3]">Nothing copied.</span>
               </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid gap-8"
            >
              {t.values.map((val, idx: number) => (
                <motion.div key={idx} variants={fadeInUp} className="border-l border-white/20 pl-6">
                   <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-white/80">{val.title}</h3>
                   <p className="text-white/60 text-lg">{val.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY - Emotional Connection */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.h2 
              {...fadeInUp}
              className="font-serif text-4xl md:text-5xl text-stone-800"
            >
              {t.whyTitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light"
            >
              {t.whyBody}
            </motion.p>
            {t.whyClosing ? (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-serif text-[#E8976C] italic"
              >
                {t.whyClosing}
              </motion.p>
            ) : null}
          </div>
        </div>
      </section>

      {/* QUOTE - Sticky note style */}
      <section className="py-20 bg-[#D4A84B]">
        <div className="container mx-auto px-6 text-center">
	          <motion.p 
	            initial={{ opacity: 0, y: 12 }}
	            whileInView={{ opacity: 1, y: 0 }}
	            viewport={{ once: true, amount: 0.65 }}
	            transition={{ duration: 1.0, ease: easeOut }}
	            className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
	          >
            &quot;{t.quote}&quot;
          </motion.p>
        </div>
      </section>

      {/* PRICING - Postal Style */}
      <section id="pricing" className="py-24 container mx-auto px-6 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">{t.plansTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan 1 */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="relative bg-white p-8 rounded-xl shadow-xl border-2 border-stone-100 flex flex-col items-center text-center overflow-hidden"
          >
            <h3 className="font-serif text-2xl text-stone-800 mb-2">{t.planSpain.title}</h3>
            <p className="font-mono text-3xl text-[#E8976C] mb-6">{t.planSpain.price}</p>
            
            <ul className="w-full max-w-sm space-y-4 mb-8 text-stone-600">
              {t.planSpain.bullets.map((b: string) => (
                <li key={b} className="flex items-start gap-3 text-left">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#E8976C] rounded-full shrink-0" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-stone-200 hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-white"
            >
              <a
                href="https://buy.stripe.com/cNidR8fqY5jl2oa1oHe3e00"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.planCta}
              </a>
            </Button>
          </motion.div>

          {/* Plan 2 */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="relative bg-white p-8 rounded-xl shadow-xl border-2 border-stone-100 flex flex-col items-center text-center overflow-hidden"
           >
             <h3 className="font-serif text-2xl text-stone-800 mb-2">{t.planIntl.title}</h3>
             <p className="font-mono text-3xl text-[#D4A84B] mb-6">{t.planIntl.price}</p>
             
             <ul className="w-full max-w-sm space-y-4 mb-8 text-stone-600">
               {t.planIntl.bullets.map((b: string) => (
                 <li key={b} className="flex items-start gap-3 text-left">
                   <span className="mt-2 w-1.5 h-1.5 bg-[#D4A84B] rounded-full shrink-0" />
                   <span className="leading-relaxed">{b}</span>
                 </li>
               ))}
             </ul>
             <Button
               asChild
               variant="outline"
               className="w-full rounded-full border-stone-200 hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-white"
             >
               <a
                 href="https://buy.stripe.com/7sYfZg5QoeTV5Am5EXe3e01"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 {t.planCta}
               </a>
             </Button>
           </motion.div>
        </div>

        <p className="mt-10 text-center text-stone-500">
          {t.pricingNote}
        </p>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-12 text-center decoration-[#E8976C]/30 underline underline-offset-8">
            {t.faqTitle}
          </h2>
          <div className="space-y-6">
            {t.faqs.map((item, idx: number) => (
              <details key={idx} className="group p-6 bg-[#FAF8F5] rounded-xl cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-lg text-stone-800 list-none">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180 text-[#E8976C]">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SIGNOFF */}
      <section className="py-32 bg-[#FAF8F5] text-center">
        <h2 className="font-serif text-3xl text-stone-400 mb-2">{t.signoffTitle}</h2>
        <p className="font-billion-miracles text-5xl text-[#E8976C]">{t.signoffBy}</p>
      </section>
    </div>
  )
}
