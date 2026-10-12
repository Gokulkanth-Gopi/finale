import CookiePolicyClient from './CookiePolicyClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | ZyncWeb Solutions',
  description:
    'Learn about how ZyncWeb Solutions uses cookies and similar technologies on our website to improve your experience.',
  alternates: { canonical: '/cookie-policy' },
  openGraph: {
    title: 'Cookie Policy | ZyncWeb Solutions',
    description: 'Understand how cookies are used on the ZyncWeb Solutions website.',
    url: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}
