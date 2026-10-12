import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://zyncwebsolutions.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
