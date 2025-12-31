import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'
import { generateMetadata as generateMetadataUtil } from '@/lib/metadata'

export const metadata: Metadata = generateMetadataUtil({
  title: 'ClareArte - Arte Personalizada para Casamentos',
  description: 'Invitaciones personalizadas, ilustración en vivo y diseño gráfico para bodas. Convites únicos y especiales para tu gran día.',
  path: '',
  lang: 'es',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700&family=Playfair+Display:wght@400;700&family=Roboto+Mono:wght@400;500&family=Corinthia:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
