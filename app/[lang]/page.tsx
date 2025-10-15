import { HeroExample } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Verticals } from '@/components/verticals'
import { MarqueeSection } from '@/components/marquee-section'
import { DetailsSection } from '@/components/details-section'
import { AboutSection } from '@/components/about-section'
import ContactSection from '@/components/contact-section'

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
      <ContactSection />
    </div>
  )
}
