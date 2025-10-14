import { HeroExample } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Verticals } from '@/components/verticals'
import { MarqueeSection } from '@/components/marquee-section'
import { DetailsSection } from '@/components/details-section'
import { AboutSection } from '@/components/about-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroExample />
      <Verticals />
      <MarqueeSection />
      <DetailsSection />
      <AboutSection />
    </div>
  )
}
