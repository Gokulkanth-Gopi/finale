import PrivacyPolicyClient from './PrivacyPolicyClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ZyncWeb Solutions',
  description:
    'Read the privacy policy of ZyncWeb Solutions. Learn how we collect, use, and protect your personal information when you use our website and services.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | ZyncWeb Solutions',
    description: 'Learn how ZyncWeb Solutions handles your data and privacy.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
