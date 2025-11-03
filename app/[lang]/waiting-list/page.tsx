import { WaitingListClient } from './waiting-list-client'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'

const pageMetadata = {
  es: {
    title: 'Lista de Espera',
    description: 'Únete a nuestra lista de espera para ser la primera en conocer nuestros nuevos diseños y colecciones de invitaciones de boda.',
  },
  pt: {
    title: 'Lista de Espera',
    description: 'Junte-se à nossa lista de espera para ser a primeira a conhecer nossos novos designs e coleções de convites de casamento.',
  },
  en: {
    title: 'Waiting List',
    description: 'Join our waiting list to be the first to know about our new designs and collections of wedding invitations.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const meta = pageMetadata[lang as keyof typeof pageMetadata] || pageMetadata.es

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    path: 'waiting-list',
    lang,
  })
}

export default async function WaitingListPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return <WaitingListClient lang={lang} />
}
