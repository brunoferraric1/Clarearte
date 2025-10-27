import { HeroExample } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Verticals } from '@/components/verticals'
import { MarqueeSection } from '@/components/marquee-section'
import { DetailsSection } from '@/components/details-section'
import { AboutSection } from '@/components/about-section'
import { ContactFormFields } from './contacto/contact-form-fields'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />
      <HeroExample />
      <Verticals />
      <MarqueeSection />
      <DetailsSection />
      <AboutSection />
      
      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="text-center space-y-4">
              <h2 className="text-title-1 font-display font-bold text-foreground">
                Hablemos de vuestro gran día
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Cada historia de amor es única, y vuestras invitaciones también lo serán.
                Cuéntame un poco sobre vosotros y sobre lo que imagináis para vuestro gran día.
                Con esta información podré preparar una propuesta personalizada y adaptada a vuestra esencia.
              </p>
            </div>

            {/* Form */}
            <div className="bg-background rounded-lg p-6 md:p-8 shadow-sm">
              <ContactFormFields />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
