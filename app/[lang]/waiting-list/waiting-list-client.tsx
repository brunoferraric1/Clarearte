'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

interface WaitingListClientProps {
  lang: string
}

const translations = {
  pt: {
    title: 'Transforme sua arte em um negócio lucrativo',
    description: 'Essa mentoria é pra quem quer parar de "fazer por amor" e começar a viver do que ama. Inscreva-se na lista de interesse e seja avisada com prioridade assim que as vagas abrirem.',
    note: '💌 As vagas serão limitadas. Entre pra lista e garanta sua chance.',
    placeholder: 'seu@email.com',
    submit: 'Entrar pra lista',
    submitting: 'Enviando...',
    success: 'Obrigada! Adicionamos você à nossa lista de espera.',
    error: 'Ocorreu um erro. Por favor, tente novamente.',
    duplicate: 'Este email já está em nossa lista de espera.',
  },
}

export function WaitingListClient({ lang }: WaitingListClientProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'duplicate'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const t = translations.pt

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Video moves slower (parallax effect)
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  // Content moves at normal speed but slightly faster for depth
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Ensure video plays smoothly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy restrictions
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/waiting-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          lang: lang,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          // Duplicate email
          setSubmitStatus('duplicate')
        } else {
          setSubmitStatus('error')
          setErrorMessage(data.error || t.error)
        }
        return
      }

      setSubmitStatus('success')
      setEmail('')
      toast.success(t.success, {
        style: {
          background: 'white',
          color: 'rgb(55 65 81)',
        },
        className: 'sonner-success-custom',
      })
    } catch (error) {
      console.error('Error submitting email:', error)
      setSubmitStatus('error')
      setErrorMessage(t.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <motion.section 
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Video Background with Parallax */}
        <motion.div
          style={{ y: videoY }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/clarearte-video-hero_for-web-loop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark dim overlay for better contrast */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.4 }}
          />
        </motion.div>

        {/* Centered Content with Parallax */}
        <motion.div 
          style={{ y: contentY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <span className="text-title-1 font-display font-bold text-white drop-shadow-2xl">
                  ClareArte
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-display-1 md:text-display-2 font-display font-bold text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                {t.title}
              </motion.h1>

              {/* Description */}
              <motion.div
                className="text-body-lg md:text-title-2 text-white/90 leading-relaxed max-w-2xl mx-auto space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                <p>{t.description}</p>
                <p>{t.note}</p>
              </motion.div>

              {/* Email Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              >
                <Input
                  type="email"
                  placeholder={t.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 h-12 text-body-lg pl-5 pt-2.5 pb-3 bg-white/95 backdrop-blur-sm border-white/20 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white/50"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 px-8 whitespace-nowrap"
                >
                  {isSubmitting ? t.submitting : t.submit}
                </Button>
              </motion.form>

              {/* Error Messages */}
              {submitStatus === 'duplicate' && (
                <motion.p
                  className="text-body text-yellow-300 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {t.duplicate}
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  className="text-body text-red-300 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errorMessage || t.error}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

