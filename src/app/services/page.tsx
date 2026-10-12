import type { Metadata } from 'next';
import ServicesNew from '../../components/ServicesNew';

export const metadata: Metadata = {
  title: 'Web Design & Development Services in Salem, Tamil Nadu',
  description:
    'ZyncWeb Solutions offers professional web design, web development, UI/UX, branding, and SEO services in Salem, Tamil Nadu and across India. Get a free consultation today.',
  keywords: [
    'web design services Salem',
    'web development services Tamil Nadu',
    'UI UX design Salem',
    'SEO services Salem Tamil Nadu',
    'branding agency Salem',
    'app development Tamil Nadu',
    'digital services India',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Web Design & Development Services | ZyncWeb Solutions, Salem',
    description: 'Professional web design, development, UI/UX, and SEO services based in Salem, Tamil Nadu, India.',
    url: '/services',
  },
};

import CtaBanner from '../../components/CtaBanner';

export default function ServicesPage() {
  return (
    <>
      <ServicesNew />
      <CtaBanner />
    </>
  );
}