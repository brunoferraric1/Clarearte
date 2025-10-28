import { HeroVideo } from '@/components/heroVideo'
import { Navbar } from '@/components/navbar'
import { Verticals } from '@/components/verticals'
import { MarqueeSection } from '@/components/marquee-section'
import { DetailsSection } from '@/components/details-section'
import { AboutSection } from '@/components/about-section'
import { ContactFormFields } from './contacto/contact-form-fields'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Highlighter } from '@/components/ui/highlighter'
import { ContactSection } from '@/components/contact-section'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <div className="min-h-screen bg-white">
      <SmoothScroll />
      <Navbar lang={lang} />
      <HeroVideo
        title="Invitaciones de boda personalizadas y exclusivas"
        subtitle={
          <>
            <Highlighter action="underline" color="#F6EBE2" strokeWidth={1.5} padding={8}>Creaciones únicas</Highlighter>
          </>
        }
        description="Creamos convites únicos, menús personalizados e ilustraciones que transforman tu boda en una experiencia inolvidable."
        videoSrc="/images/clarearte-video-hero_for-web-loop.mp4"
        primaryCTA={{
          text: "Ver Colecciones",
          href: "#colecciones"
        }}
        dimOpacity={0.2}
        height="large"
      />
      <Verticals />
      <MarqueeSection />
      <DetailsSection />
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
