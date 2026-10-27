import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arthur Nunes — Sites para pequenos negócios',
  description: 'Sites e landing pages profissionais para autônomos, microempresas e pequenos negócios.',
  generator: 'v0.app',
  openGraph: {
    title: 'Arthur Nunes — Sites para pequenos negócios',
    description: 'Uma presença digital clara, bonita e feita para o seu negócio.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
