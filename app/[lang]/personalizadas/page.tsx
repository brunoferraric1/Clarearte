import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PersonalizedShowcase } from '@/components/personalized-showcase'
import { CreationProcess } from '@/components/creation-process'
import { PersonalizedBenefits } from '@/components/personalized-benefits'
import { PersonalizedInspiration } from '@/components/personalized-inspiration'
import { PersonalizedCTA } from '@/components/personalized-cta'
import { ContactFormSection } from '../contacto/contact-form-section'
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
      <Hero
        title="Invitaciones de boda personalizadas y exclusivas"
        subtitle=""
        description="Cada pareja tiene una historia que merece ser contada de manera única. Las invitaciones personalizadas transforman momentos, recuerdos y detalles cotidianos en piezas de papelería que reflejan vuestra esencia auténtica. Desde un viaje especial hasta vuestras mascotas, cada elemento forma parte del diseño."
      />
      <PersonalizedShowcase />
      <CreationProcess />
      <PersonalizedBenefits />
      <PersonalizedInspiration />
      <PersonalizedCTA />
      <ContactFormSection />
    </div>
  )
}
