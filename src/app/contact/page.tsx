import Contact from './ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ZyncWeb Solutions | Web Agency in Salem, Tamil Nadu',
  description:
    'Get in touch with ZyncWeb Solutions in Salem, Tamil Nadu. We welcome project inquiries, collaborations, and partnerships from businesses across India and worldwide.',
  keywords: [
    'contact web designer Salem',
    'hire web developer Salem Tamil Nadu',
    'web agency contact Salem',
    'digital agency inquiry India',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact ZyncWeb Solutions | Salem, Tamil Nadu',
    description: 'Reach out to Salem\'s premier web design and development agency. We serve clients in India and globally.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
