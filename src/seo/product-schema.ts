import { BUY_URL, OG_IMAGE, SITE_NAME } from './site';

export const PRODUCT_OFFER = {
  '@type': 'Offer' as const,
  priceCurrency: 'USD',
  availability: 'https://schema.org/InStock',
  url: BUY_URL,
  seller: { '@type': 'Organization', name: SITE_NAME },
};

export function buildProductSchema(name: string, description: string) {
  return {
    '@type': 'SoftwareApplication',
    name,
    description,
    image: [OG_IMAGE],
    applicationCategory: 'GameApplication',
    operatingSystem: 'Windows 10, Windows 11',
    offers: PRODUCT_OFFER,
  };
}
