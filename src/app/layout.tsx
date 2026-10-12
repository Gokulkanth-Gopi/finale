import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';
import { ThemeProvider } from '../components/ThemeProvider';
import FloatingActions from '../components/FloatingActions';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://zyncwebsolutions.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ZyncWeb Solutions | Web Design & Development Agency in Salem, Tamil Nadu',
    template: '%s | ZyncWeb Solutions — Salem, Tamil Nadu',
    
  },
  description:
    'ZyncWeb Solutions is a premier web design and development agency based in Salem, Tamil Nadu, India. We build high-performance websites, apps, and digital products for businesses in Salem, Coimbatore, Chennai, and worldwide.',
  keywords: [
    // Local — Salem
    'web design Salem',
    'web development Salem',
    'website design Salem Tamil Nadu',
    'web agency Salem TN',
    'digital marketing Salem',
    'SEO Salem Tamil Nadu',
    'app development Salem',
    'software company Salem',
    'IT company Salem Tamil Nadu',
    // Regional — Tamil Nadu / South India
    'web design Tamil Nadu',
    'web development Coimbatore',
    'web design Chennai',
    'digital agency Tamil Nadu',
    'website development South India',
    // National / Global
    'web design India',
    'web development agency India',
    'Next.js development agency',
    'React development company',
    'UI UX design agency',
    'enterprise web solutions',
    'ZyncWeb Solutions',
  ],
  authors: [{ name: 'ZyncWeb Solutions', url: siteUrl }],
  creator: 'ZyncWeb Solutions',
  publisher: 'ZyncWeb Solutions',
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: ['en_US', 'en_GB'],
    url: siteUrl,
    siteName: 'ZyncWeb Solutions',
    title: 'ZyncWeb Solutions | Web Design & Development Agency in Salem, Tamil Nadu',
    description:
      'Top-rated web design and development agency in Salem, Tamil Nadu. We craft high-performance digital experiences for local businesses and global brands.',
    images: [
      {
        url: '/assets/MainlogoDP.png',
        width: 1200,
        height: 630,
        alt: 'ZyncWeb Solutions — Web Agency in Salem, Tamil Nadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZyncWeb Solutions | Web Agency in Salem, Tamil Nadu',
    description:
      'Web design & development agency based in Salem, Tamil Nadu. Serving local businesses and global clients.',
    images: ['/assets/MainlogoDP.png'],
    creator: '@zyncweb',
  },
  icons: {
    icon: '/assets/MainlogoDP.png',
    shortcut: '/assets/MainlogoDP.png',
    apple: '/assets/MainlogoDP.png',
  },
  category: 'technology',
};

// JSON-LD: LocalBusiness structured data for Salem SEO
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#organization`,
  name: 'ZyncWeb Solutions',
  description:
    'Web design and development agency in Salem, Tamil Nadu, India. Building high-performance websites, apps, and digital products for businesses locally and globally.',
  url: siteUrl,
  logo: `${siteUrl}/assets/MainlogoDP.png`,
  image: `${siteUrl}/assets/MainlogoDP.png`,
  telephone: '+918667212177',
  email: 'info@zyncweb.dev',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Salem',
    addressRegion: 'Tamil Nadu',
    postalCode: '636001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.6643,
    longitude: 78.146,
  },
  areaServed: [
    { '@type': 'City', name: 'Salem', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/zyncwebsolutions',
    'https://www.instagram.com/zyncwebsolutions/',
    'https://in.pinterest.com/Zyncweb/',
    'https://www.threads.com/@zyncwebsolutions',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'ZyncWeb Solutions',
  description: 'Web design and development agency in Salem, Tamil Nadu',
  publisher: { '@id': `${siteUrl}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/work?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased selection:bg-blue-500/30 transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <FooterNew />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
