import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { LanguageProvider } from '../contexts/LanguageContext'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'American Investment Group SA | Paraguay Real Estate & Cattle Investment',
  description:
    "American Investment Group SA bridges North American expertise with Paraguay's emerging market opportunities in real estate and cattle ranching. Based in Asunción, founded by Alcides and Andrew Rios.",
  keywords: [
    'Paraguay investment',
    'real estate Paraguay',
    'cattle ranching investment',
    'Asunción real estate',
    'South America investment',
    'AIG SA',
    'American Investment Group',
    'Paraguay emerging market',
    'livestock investment',
    'Alcides Rios',
    'Andrew Rios',
    'inversión Paraguay',
    'bienes raíces Paraguay',
    'ganadería Paraguay',
  ],
  authors: [{ name: 'American Investment Group SA' }],
  creator: 'American Investment Group SA',
  publisher: 'American Investment Group SA',
  metadataBase: new URL('https://americaninvestmentgroup.com'),
  openGraph: {
    title: 'American Investment Group SA',
    description:
      'Investing in the Heart of South America — Real Estate & Cattle Ranching in Paraguay',
    type: 'website',
    locale: 'en_US',
    siteName: 'American Investment Group SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'American Investment Group SA',
    description: 'Investing in the Heart of South America — Paraguay Real Estate & Cattle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang is updated client-side by LanguageContext when locale changes
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
