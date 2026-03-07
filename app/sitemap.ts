import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/programs', '/schedule', '/coaches', '/gallery', '/contact'].map(
    (route) => ({
      url: `${SITE_CONFIG.url}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
}
