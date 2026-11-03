import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { seo, structuredData } from '../data/seo'

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  verification: { google: 'eAJYlK2VYtGDoiH2Tw6qoj5WmvIYnv610FrtmjeIgyM' },
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.url },
  robots: { index: true, follow: true },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: seo.name,
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: { card: 'summary', title: seo.title, description: seo.description },
  icons: { icon: '/logoCerta.png', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
