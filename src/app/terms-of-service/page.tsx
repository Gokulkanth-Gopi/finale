import TermsOfServiceClient from './TermsOfServiceClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ZyncWeb Solutions',
  description:
    'Read the terms of service for ZyncWeb Solutions. Understand your rights and obligations when using our website and digital services.',
  alternates: { canonical: '/terms-of-service' },
  openGraph: {
    title: 'Terms of Service | ZyncWeb Solutions',
    description: 'Terms and conditions for using ZyncWeb Solutions services.',
    url: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}
