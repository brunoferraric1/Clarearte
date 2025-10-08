import { Navbar } from '@/components/navbar'
import { PersonalizedHero } from '@/components/personalized-hero'
import { PersonalizedShowcase } from '@/components/personalized-showcase'
import { CreationProcess } from '@/components/creation-process'
import { PersonalizedBenefits } from '@/components/personalized-benefits'
import { PersonalizedInspiration } from '@/components/personalized-inspiration'
import { PersonalizedCTA } from '@/components/personalized-cta'

export function PersonalizedPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PersonalizedHero />
      <PersonalizedShowcase />
      <CreationProcess />
      <PersonalizedBenefits />
      <PersonalizedInspiration />
      <PersonalizedCTA />
    </div>
  )
}
