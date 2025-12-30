'use client'

import { useRef } from 'react'
import { animate, motion, useReducedMotion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { SuperMamasLogo } from '@/components/supermamasclub/super-mamas-logo'
import { Button } from '@/components/ui/button'
import { Highlighter } from '@/components/ui/highlighter'
import Image from 'next/image'
import { ArrowRight, Heart, Star, Sparkles, PenTool, Mail } from 'lucide-react'
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

type IntroItem = {
  prefix: string
  highlight: string
  color: string
}

type SuperMamasCopy = {
  headline: string
  cta: string
  tagline: string
  intro: { items: IntroItem[]; closing: string[] }
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

function ScrollRevealLine({ 
  progress, 
  range,
  highlightColor,
  text
}: { 
  progress: MotionValue<number>
  range: [number, number]
  highlightColor: string
  text: { prefix: string, highlight: string }
}) {
  const opacity = useTransform(progress, range, [0, 1])
  const y = useTransform(progress, range, [20, 0])
  // Removed filter/blur as requested
  
  // Highlight progress: starts after the text fades in a bit, and finishes by the end of range
  // Let's say highlight animates from 50% to 100% of the range
  const highlightStart = range[0] + (range[1] - range[0]) * 0.2 // Start earlier
  const highlightEnd = range[1] + 0.05 // End a bit later to ensure full coverage
  const highlightProgress = useTransform(progress, [highlightStart, highlightEnd], [0, 1])

  return (
    <motion.div 
      style={{ opacity, y }} 
      className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 leading-tight md:whitespace-nowrap"
    >
      <span>{text.prefix}</span>{' '}
      <span className="inline-block font-normal">
          <Highlighter 
            color={highlightColor} 
            progress={highlightProgress}
            iterations={1}
            padding={6}
          >
            {text.highlight}
          </Highlighter>
      </span>
    </motion.div>
  )
}

export function SuperMamasClubContent({ copy: t }: ContentProps) {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const logoY = useTransform(scrollY, [0, 500], [0, -50])
  const textY = useTransform(scrollY, [0, 500], [0, -25])

  const introRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: introScrollProgress } = useScroll({
    target: introRef,
    offset: ["start 0.8", "start 0.35"]
  })

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

  const introIcons = [Heart, PenTool, Mail]

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
            src="/images/supermamas-imagem-bg-hero.webp"
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
        <div className="flex flex-col gap-16 md:gap-20">
          
          {/* Top Row: Highlighted Text */}
          <div className="relative">
             {/* Decorative element */}
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-[#E8976C]/10 rounded-full blur-2xl -z-10" />

            <div ref={introRef} className="space-y-3 md:space-y-5 w-fit mx-auto min-h-[300px]">
              {t.intro.items.map((item, idx) => {
                const isYellow = item.color === 'yellow'
                const highlightColor = isYellow ? '#EAB308' : '#FEE2E2' // Intense Yellow or Light Pink
                
                // Stagger the reveal of each line based on scroll progress
                // Total range [0, 1]. Each line takes a portion.
                // 4 items. 
                // Delay start to 0.15 as requested ("start a bit later")
                // Total effective range 0.15 - 1.0 = 0.85
                // Step size per item approx 0.2
                const offsetStart = 0.15
                const step = 0.18
                const start = offsetStart + (idx * step)
                const end = start + 0.25 // Duration of fade for each line

                return (
                  <ScrollRevealLine
                    key={idx}
                    progress={introScrollProgress}
                    range={[start, end]}
                    highlightColor={highlightColor}
                    text={item}
                  />
                )
              })}
            </div>
          </div>

          {/* Bottom Row: Image centered, then 3 columns below */}
          <div className="flex flex-col gap-12 md:gap-16 items-center">
            
            {/* Centered Image - Bigger */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative isolate w-full max-w-5xl mx-auto"
            >
              {/* Organic shape backdrop */}
              <div className="pointer-events-none absolute -inset-3 z-0 rounded-[2rem] bg-[#D4A84B]/20 rotate-[-1deg]" />

              <div className="relative z-10 w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/super-mamas-mail-club-paola-ferrari.webp"
                  alt="Hand holding illustrated postcard"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>

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
               <p className="text-[#E8976C] font-serif italic text-xl">
                 {t.whatIsBody[5]}
               </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl mx-auto"
          >
            {t.intro.closing.map((line: string, idx: number) => {
              const Icon = introIcons[idx % introIcons.length] || Heart
              return (
                <div key={idx} className="flex flex-col items-center text-center gap-3">
                  <Icon className="w-8 h-8 text-[#EAB308]" />
                  <p className="text-lg md:text-xl font-light text-stone-600">{line}</p>
                </div>
              )
            })}
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

      {/* QUOTE - Sticky note style */}
      <section className="bg-[#D4A84B] min-h-[110svh] md:min-h-[120svh] pt-10 pb-14 md:py-24 flex items-start md:items-center">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto w-full max-w-5xl">
            <motion.div
              initial="initial"
              whileInView="in"
              viewport={{ once: true, amount: 0.55 }}
              className="relative mx-auto h-[44vh] min-h-[280px] max-h-[420px] md:h-[52vh] md:min-h-[340px] md:max-h-[560px] w-full"
            >
              <motion.div
                variants={{
                  initial: { opacity: 0, x: prefersReducedMotion ? 0 : -260, y: prefersReducedMotion ? 0 : 130, rotate: prefersReducedMotion ? 0 : -20 },
                  in: { opacity: 1, x: -160, y: 80, rotate: -12 },
                }}
                transition={{ duration: 1.6, ease: easeOut }}
                className="absolute left-1/2 top-1/2 z-10 w-[clamp(180px,24vw,300px)] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative aspect-[148/210] overflow-hidden rounded-2xl bg-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/25">
                  <Image
                    src="/images/supermamasclub-comp-3.webp"
                    alt="Super Mamas Club sample artwork (A5 vertical)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 55vw, 300px"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: prefersReducedMotion ? 0 : -170, rotate: prefersReducedMotion ? 0 : 12, scale: prefersReducedMotion ? 1 : 0.96 },
                  in: { opacity: 1, y: -10, rotate: 0, scale: 1 },
                }}
                transition={{ duration: 1.75, ease: easeOut, delay: 0.08 }}
                className="absolute left-1/2 top-1/2 z-20 w-[clamp(220px,30vw,380px)] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative aspect-[210/297] overflow-hidden rounded-2xl bg-white shadow-[0_40px_90px_rgba(0,0,0,0.22)] ring-1 ring-black/10">
                  <Image
                    src="/images/supermamasclub-comp-2.webp"
                    alt="Super Mamas Club sample letter (A4 vertical)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 380px"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0, x: prefersReducedMotion ? 0 : 280, y: prefersReducedMotion ? 0 : 120, rotate: prefersReducedMotion ? 0 : 20 },
                  in: { opacity: 1, x: 170, y: 90, rotate: 10 },
                }}
                transition={{ duration: 1.6, ease: easeOut, delay: 0.06 }}
                className="absolute left-1/2 top-1/2 z-10 w-[clamp(220px,32vw,420px)] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative aspect-[210/148] overflow-hidden rounded-2xl bg-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/25">
                  <Image
                    src="/images/supermamasclub-comp-1.webp"
                    alt="Super Mamas Club sample postcard (A5 horizontal)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 420px"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 1.4, ease: easeOut, delay: 0.1 }}
              className="mt-10 md:mt-20 lg:mt-24 font-serif italic text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
            >
              &quot;{t.quote}&quot;
            </motion.p>
          </div>
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
