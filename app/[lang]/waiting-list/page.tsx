import { WaitingListClient } from './waiting-list-client'

export default async function WaitingListPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return <WaitingListClient lang={lang} />
}
