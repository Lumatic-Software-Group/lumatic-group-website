import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lumaticgroup.info/',
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
