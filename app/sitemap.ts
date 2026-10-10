import type { MetadataRoute } from 'next';
import { COMPANY } from '@/lib/company';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/diagnostico', '/privacidade', '/termos'].map((path) => ({
    url: `${COMPANY.siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.5,
  }));
}
