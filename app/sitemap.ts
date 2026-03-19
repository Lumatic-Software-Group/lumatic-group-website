import { MetadataRoute } from 'next'

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lumaticgroup.info/',
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}