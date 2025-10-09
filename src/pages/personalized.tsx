import { Navbar } from '@/components/navbar'
import { PageHero } from '@/components/page-hero'
import { PersonalizedShowcase } from '@/components/personalized-showcase'
import { CreationProcess } from '@/components/creation-process'
import { PersonalizedBenefits } from '@/components/personalized-benefits'
import { PersonalizedInspiration } from '@/components/personalized-inspiration'
import { PersonalizedCTA } from '@/components/personalized-cta'
import personalizedHeroImage from '@/images/home-sections-invitaciones-personalisadas.webp'

export function PersonalizedPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Invitaciones de boda personalizadas"
        image={personalizedHeroImage}
        imageAlt="invitaciones personalizadas"
        subtitle="Cada pareja tiene una historia que merece ser contada de manera única. Las invitaciones de boda personalizadas transforman momentos, recuerdos y detalles cotidianos en piezas de papelería que reflejan la esencia auténtica de los novios. Desde un viaje especial, un rincón favorito, hasta los integrantes más queridos de la familia, incluyendo mascotas, cada elemento puede formar parte del diseño, haciendo que la invitación sea completamente vuestra."
        overlayOpacity={0.2}
        height="medium"
      />
      <PersonalizedShowcase />
      <CreationProcess />
      <PersonalizedBenefits />
      <PersonalizedInspiration />
      <PersonalizedCTA />
    </div>
  )
}
