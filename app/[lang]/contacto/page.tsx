import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | ClareArte',
  description: 'Ponte en contacto con nosotros para solicitar un presupuesto o cualquier consulta sobre nuestras invitaciones de boda ilustradas.',
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />

      {/* Hero Banner */}
      <Hero
        title="Ponte en Contacto"
        subtitle=""
        description="Me encantaría saber más sobre tu proyecto. Completa el formulario y me pondré en contacto contigo lo antes posible para crear la papelería perfecta para tu boda."
        noBottomPadding={true}
        compact={true}
      />

      {/* Contact Section */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-8">
            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-body-sm font-medium text-foreground">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="text-body"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-body-sm font-medium text-foreground">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="text-body"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-body-sm font-medium text-foreground">
                    Teléfono (opcional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="text-body"
                    placeholder="+34 000 00 00 00"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="event-date" className="text-body-sm font-medium text-foreground">
                    Fecha de la boda (opcional)
                  </label>
                  <Input
                    id="event-date"
                    name="event-date"
                    type="date"
                    className="text-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-body-sm font-medium text-foreground">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="text-body min-h-[150px]"
                  placeholder="Cuéntame sobre tu proyecto, tipo de invitación que buscas, estilo preferido, etc."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="tracking-wide w-full cursor-pointer"
              >
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-title-2 font-display font-bold text-foreground text-center mb-12">
            Información de Contacto
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-title-1 font-display font-bold text-primary">
                Email
              </div>
              <p className="text-body text-foreground">
                <a href="mailto:clarearte.boda@gmail.com" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  clarearte.boda@gmail.com
                </a>
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="text-title-1 font-display font-bold text-primary">
                WhatsApp
              </div>
              <p className="text-body text-foreground">
                <a href="http://wa.me/34611361677" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  +34 611 361 677
                </a>
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="text-title-1 font-display font-bold text-primary">
                Instagram
              </div>
              <p className="text-body text-foreground">
                <a href="https://www.instagram.com/clareartestudio/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  @clareartestudio
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
