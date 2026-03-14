import { MetadataRoute } from 'next';
import { BUSINESS } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
  };
}
