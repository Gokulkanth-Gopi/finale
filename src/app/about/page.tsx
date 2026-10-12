import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About ZyncWeb Solutions | Web Agency in Salem, Tamil Nadu',
  description:
    'Learn about ZyncWeb Solutions — a web design and development agency based in Salem, Tamil Nadu. We serve businesses across India and worldwide with cutting-edge digital solutions.',
  keywords: [
    'about ZyncWeb Solutions',
    'web agency Salem Tamil Nadu',
    'web design team Salem',
    'digital agency India',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About ZyncWeb Solutions | Salem, Tamil Nadu',
    description: 'Salem-based web agency building scalable digital products for businesses in India and worldwide.',
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
