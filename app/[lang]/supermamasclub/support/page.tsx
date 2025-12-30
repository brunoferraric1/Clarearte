'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, MessageCircle, Heart, Send, CheckCircle } from 'lucide-react'
import { SuperMamasLogo } from '@/components/supermamasclub/super-mamas-logo'

const content = {
  es: {
    title: 'Estamos aquí para ayudarte',
    subtitle: '¿Tienes alguna pregunta o necesitas ayuda?',
    intro: 'Tu satisfacción es lo más importante para nosotras. Si tienes cualquier duda, problema con tu suscripción o simplemente quieres saludarnos, estamos aquí.',
    formTitle: 'Envíanos un mensaje',
    fields: {
      name: 'Tu nombre',
      namePlaceholder: 'María García',
      email: 'Tu email',
      emailPlaceholder: 'maria@ejemplo.com',
      topic: 'Tema',
      topicPlaceholder: 'Selecciona un tema',
      topics: {
        subscription: '📦 Mi suscripción',
        shipping: '📮 Envíos y entregas',
        payment: '💳 Pagos y facturación',
        cancel: '❌ Cancelar suscripción',
        change: '✏️ Cambiar dirección',
        other: '💬 Otro tema',
      },
      message: 'Tu mensaje',
      messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
    },
    success: {
      title: '¡Mensaje enviado!',
      message: 'Te responderemos lo antes posible. Gracias por contactarnos 💛',
      another: 'Enviar otro mensaje',
    },
    quickHelp: {
      title: 'Ayuda rápida',
      items: [
        {
          icon: 'subscription',
          title: '¿Cómo gestiono mi suscripción?',
          body: 'Puedes gestionar tu suscripción desde el portal de Stripe. Te enviamos el enlace por email cuando te suscribiste.',
        },
        {
          icon: 'shipping',
          title: '¿Cuándo recibiré mi correo?',
          body: 'Enviamos a principios de cada mes. El tiempo de entrega depende del servicio postal de tu país.',
        },
        {
          icon: 'cancel',
          title: '¿Puedo cancelar cuando quiera?',
          body: 'Sí, puedes cancelar en cualquier momento sin penalizaciones. La cancelación es efectiva al final del período actual.',
        },
      ],
    },
    directEmail: {
      title: '¿Prefieres escribir directamente?',
      body: 'También puedes enviarnos un email a:',
      email: 'hello@clarearte.com',
    },
    backLink: '← Volver al Super Mamas Mail Club',
  },
  pt: {
    title: 'Estamos aqui para te ajudar',
    subtitle: 'Tens alguma pergunta ou precisas de ajuda?',
    intro: 'A tua satisfação é o mais importante para nós. Se tens qualquer dúvida, problema com a tua subscrição ou simplesmente queres dizer olá, estamos aqui.',
    formTitle: 'Envia-nos uma mensagem',
    fields: {
      name: 'O teu nome',
      namePlaceholder: 'Maria Garcia',
      email: 'O teu email',
      emailPlaceholder: 'maria@exemplo.com',
      topic: 'Tema',
      topicPlaceholder: 'Seleciona um tema',
      topics: {
        subscription: '📦 A minha subscrição',
        shipping: '📮 Envios e entregas',
        payment: '💳 Pagamentos e faturação',
        cancel: '❌ Cancelar subscrição',
        change: '✏️ Mudar morada',
        other: '💬 Outro tema',
      },
      message: 'A tua mensagem',
      messagePlaceholder: 'Conta-nos como podemos ajudar-te...',
      submit: 'Enviar mensagem',
      sending: 'A enviar...',
    },
    success: {
      title: 'Mensagem enviada!',
      message: 'Vamos responder-te o mais rápido possível. Obrigada por nos contactares 💛',
      another: 'Enviar outra mensagem',
    },
    quickHelp: {
      title: 'Ajuda rápida',
      items: [
        {
          icon: 'subscription',
          title: 'Como é que giro a minha subscrição?',
          body: 'Podes gerir a tua subscrição através do portal do Stripe. Enviamos-te o link por email quando te subscreveste.',
        },
        {
          icon: 'shipping',
          title: 'Quando vou receber o meu correio?',
          body: 'Enviamos no início de cada mês. O tempo de entrega depende do serviço postal do teu país.',
        },
        {
          icon: 'cancel',
          title: 'Posso cancelar quando quiser?',
          body: 'Sim, podes cancelar a qualquer momento sem penalizações. O cancelamento é efetivo no final do período atual.',
        },
      ],
    },
    directEmail: {
      title: 'Preferes escrever diretamente?',
      body: 'Também podes enviar-nos um email para:',
      email: 'hello@clarearte.com',
    },
    backLink: '← Voltar ao Super Mamas Mail Club',
  },
  en: {
    title: 'We\'re here to help',
    subtitle: 'Have a question or need assistance?',
    intro: 'Your satisfaction is our top priority. If you have any questions, issues with your subscription, or just want to say hi, we\'re here for you.',
    formTitle: 'Send us a message',
    fields: {
      name: 'Your name',
      namePlaceholder: 'Maria Garcia',
      email: 'Your email',
      emailPlaceholder: 'maria@example.com',
      topic: 'Topic',
      topicPlaceholder: 'Select a topic',
      topics: {
        subscription: '📦 My subscription',
        shipping: '📮 Shipping & delivery',
        payment: '💳 Payments & billing',
        cancel: '❌ Cancel subscription',
        change: '✏️ Change address',
        other: '💬 Other topic',
      },
      message: 'Your message',
      messagePlaceholder: 'Tell us how we can help you...',
      submit: 'Send message',
      sending: 'Sending...',
    },
    success: {
      title: 'Message sent!',
      message: 'We\'ll get back to you as soon as possible. Thanks for reaching out 💛',
      another: 'Send another message',
    },
    quickHelp: {
      title: 'Quick help',
      items: [
        {
          icon: 'subscription',
          title: 'How do I manage my subscription?',
          body: 'You can manage your subscription through the Stripe portal. We sent you the link via email when you subscribed.',
        },
        {
          icon: 'shipping',
          title: 'When will I receive my mail?',
          body: 'We ship at the beginning of each month. Delivery time depends on your country\'s postal service.',
        },
        {
          icon: 'cancel',
          title: 'Can I cancel anytime?',
          body: 'Yes, you can cancel at any time with no penalties. Cancellation is effective at the end of the current period.',
        },
      ],
    },
    directEmail: {
      title: 'Prefer to write directly?',
      body: 'You can also email us at:',
      email: 'hello@clarearte.com',
    },
    backLink: '← Back to Super Mamas Mail Club',
  },
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut }
}

function SupportPageContent({ lang }: { lang: string }) {
  const t = content[lang as keyof typeof content] || content.es
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual submission logic
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would send to your backend/email service
    console.log('Support form submitted:', formData)
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', topic: '', message: '' })
    setIsSuccess(false)
  }

  const iconMap = {
    subscription: MessageCircle,
    shipping: Mail,
    cancel: Clock,
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#4A4A4A] font-sans selection:bg-[#E8976C]/30">
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8976C] via-[#D4A84B] to-[#E8976C] py-20 md:py-28">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/supermamasclub-bg-pattern.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#7BB5A3]/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center"
          >
            <SuperMamasLogo size="sm" className="mb-4" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {t.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <motion.p 
            {...fadeInUp}
            className="text-lg md:text-xl text-stone-600 leading-relaxed text-center max-w-3xl mx-auto mb-16"
          >
            {t.intro}
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - Takes 3 columns */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-stone-100">
                <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-8">
                  {t.formTitle}
                </h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-[#7BB5A3]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#7BB5A3]" />
                    </div>
                    <h3 className="font-serif text-2xl text-stone-800 mb-3">
                      {t.success.title}
                    </h3>
                    <p className="text-stone-600 mb-8">
                      {t.success.message}
                    </p>
                    <Button
                      variant="outline"
                      onClick={resetForm}
                      className="rounded-full border-stone-200 hover:bg-[#E8976C] hover:border-[#E8976C] hover:text-white"
                    >
                      {t.success.another}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-stone-700">
                        {t.fields.name} <span className="text-[#E8976C]">*</span>
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder={t.fields.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-stone-200 focus:border-[#E8976C] focus:ring-[#E8976C]/20 rounded-xl"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-stone-700">
                        {t.fields.email} <span className="text-[#E8976C]">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder={t.fields.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-stone-200 focus:border-[#E8976C] focus:ring-[#E8976C]/20 rounded-xl"
                      />
                    </div>

                    {/* Topic */}
                    <div className="space-y-2">
                      <Label htmlFor="topic" className="text-stone-700">
                        {t.fields.topic} <span className="text-[#E8976C]">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.topic}
                        onValueChange={(value) => setFormData({ ...formData, topic: value })}
                      >
                        <SelectTrigger id="topic" className="border-stone-200 focus:border-[#E8976C] focus:ring-[#E8976C]/20 rounded-xl">
                          <SelectValue placeholder={t.fields.topicPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="subscription">{t.fields.topics.subscription}</SelectItem>
                          <SelectItem value="shipping">{t.fields.topics.shipping}</SelectItem>
                          <SelectItem value="payment">{t.fields.topics.payment}</SelectItem>
                          <SelectItem value="cancel">{t.fields.topics.cancel}</SelectItem>
                          <SelectItem value="change">{t.fields.topics.change}</SelectItem>
                          <SelectItem value="other">{t.fields.topics.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-stone-700">
                        {t.fields.message} <span className="text-[#E8976C]">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder={t.fields.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-stone-200 focus:border-[#E8976C] focus:ring-[#E8976C]/20 rounded-xl resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E8976C] hover:bg-[#D4A84B] text-white rounded-full py-6 text-base font-medium transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            ⏳
                          </motion.span>
                          {t.fields.sending}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          {t.fields.submit}
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Quick Help Sidebar - Takes 2 columns */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Help */}
              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#E8976C]" />
                  {t.quickHelp.title}
                </h3>
                <div className="space-y-4">
                  {t.quickHelp.items.map((item, idx) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap] || MessageCircle
                    return (
                      <div 
                        key={idx}
                        className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-stone-100 hover:border-[#E8976C]/30 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-[#E8976C]/10 rounded-xl flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-[#E8976C]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-stone-800 mb-1">{item.title}</h4>
                            <p className="text-sm text-stone-500 leading-relaxed">{item.body}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Direct Email */}
              <div className="bg-gradient-to-br from-[#D4A84B]/10 to-[#E8976C]/10 p-6 rounded-2xl">
                <h3 className="font-serif text-lg text-stone-800 mb-2">
                  {t.directEmail.title}
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  {t.directEmail.body}
                </p>
                <a 
                  href={`mailto:${t.directEmail.email}`}
                  className="inline-flex items-center gap-2 text-[#E8976C] hover:text-[#D4A84B] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t.directEmail.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-stone-200 text-center">
            <Link 
              href={`/${lang}/supermamasclub`}
              className="inline-flex items-center text-[#E8976C] hover:text-[#D4A84B] transition-colors font-medium"
            >
              {t.backLink}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function SupportPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = use(params)
  return <SupportPageContent lang={lang} />
}

