export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  await params // Ensure params is resolved
  return children
}

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'pt' }, { lang: 'en' }]
}
