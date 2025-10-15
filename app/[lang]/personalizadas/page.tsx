import { Navbar } from '@/components/navbar'
import { PageHero } from '@/components/page-hero'
import { PersonalizedShowcase } from '@/components/personalized-showcase'
import { CreationProcess } from '@/components/creation-process'
import { PersonalizedBenefits } from '@/components/personalized-benefits'
import { PersonalizedInspiration } from '@/components/personalized-inspiration'
import { PersonalizedCTA } from '@/components/personalized-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invitaciones Personalizadas | ClareArte',
  description: 'Invitaciones de boda personalizadas que cuentan tu historia única. Ilustraciones en acuarela y diseños a medida para tu gran día.',
}

export default async function PersonalizedPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />
      <PageHero
        title="Invitaciones de boda personalizadas"
        image="/images/home-sections-invitaciones-personalisadas.webp"
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
