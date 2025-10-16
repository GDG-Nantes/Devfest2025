import type { MetadataRoute } from 'next';

const SITE_URL = 'https://devfest2025.gdgnantes.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    host: SITE_URL.replace(/^https?:\/\//, ''),
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
    ],
  };
}
