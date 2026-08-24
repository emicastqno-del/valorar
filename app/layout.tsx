import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  axes: ['opsz'],
})

const siteUrl = 'https://valorareficaz.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Valorar Eficaz | Avalúos y Servicios Inmobiliarios',
  description:
    'Valorar Eficaz ofrece servicios relacionados con el sector inmobiliario y valoración de inmuebles. Conozca el valor de su propiedad y solicite información.',
  keywords: [
    'avalúos inmobiliarios',
    'avalúos Medellín',
    'valoración de inmuebles',
    'avaluadores Medellín',
    'servicios inmobiliarios',
    'valor de inmueble',
    'avalúo de propiedades',
    'inmobiliaria Medellín',
  ],
  authors: [{ name: 'Valorar Eficaz S.A.S.' }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'Valorar Eficaz S.A.S.',
    title: 'Valorar Eficaz | Avalúos y Servicios Inmobiliarios',
    description:
      'Conozca el verdadero valor de su inmueble. Servicios inmobiliarios y valoración de inmuebles en Colombia.',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Valorar Eficaz S.A.S.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valorar Eficaz | Avalúos y Servicios Inmobiliarios',
    description:
      'Conozca el verdadero valor de su inmueble. Servicios inmobiliarios y valoración de inmuebles en Colombia.',
    images: ['/images/og.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b1f33',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${jakarta.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
