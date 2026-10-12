import ProjectsClient from './ProjectsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - ZyncWeb Solutions',
  description: 'Explore our featured projects and case studies.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
