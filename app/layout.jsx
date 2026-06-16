import { Oswald, Inter } from 'next/font/google';
import { withBasePath } from '@/lib/site';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://valkosdetailing.com'),
  title: "Valko's Mobile Detailing — Toronto / GTA Car Detailing",
  description:
    'Mobile interior + exterior car detailing across the Greater Toronto Area. Student-owned, premium products, satisfaction focused. We come to you.',
  openGraph: {
    title: "Valko's Mobile Detailing — Toronto / GTA",
    description:
      'Mobile interior + exterior detailing across the GTA. We come to you.',
    type: 'website',
    locale: 'en_CA',
    siteName: "Valko's Mobile Detailing",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Valko's Mobile Detailing — Toronto / GTA",
    description: 'Mobile interior + exterior detailing across the GTA.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0B0D10',
  width: 'device-width',
  initialScale: 1,
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailing',
  name: "Valko's Mobile Detailing",
  description:
    'Mobile car detailing service offering interior, exterior, and full detail packages across the Greater Toronto Area.',
  image: withBasePath('/media/brand/logo.jpg'),
  url: 'https://valkosdetailing.com',
  telephone: '',
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'City', name: 'Scarborough' },
    { '@type': 'City', name: 'Pickering' },
  ],
  sameAs: ['https://www.instagram.com/valko_mobiledetailing/'],
  makesOffer: [
    { '@type': 'Offer', name: 'Exterior Wash', price: '50', priceCurrency: 'CAD' },
    { '@type': 'Offer', name: 'Interior Detail', price: '90', priceCurrency: 'CAD' },
    { '@type': 'Offer', name: 'Full Detail', price: '140', priceCurrency: 'CAD' },
    { '@type': 'Offer', name: 'Premium Detail', price: '180', priceCurrency: 'CAD' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
