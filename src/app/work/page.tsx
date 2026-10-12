import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Our Work & Portfolio | ZyncWeb Solutions',
  description: 'Explore our portfolio of successful digital transformations, cutting-edge web applications, and high-impact branding projects.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return <WorkClient />;
}
