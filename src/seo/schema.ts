import { DEFAULT_OG_IMAGE, SITE_NAME, buildCanonical } from './constants'
import type { FaqItem } from '../content/faqs'

export type JsonLd = Record<string, unknown>

export function createOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${buildCanonical('/')}#organization`,
    name: SITE_NAME,
    url: buildCanonical('/'),
    logo: DEFAULT_OG_IMAGE,
  }
}

interface SoftwareApplicationSchemaInput {
  description: string
  path: string
}

export function createSoftwareApplicationSchema({ description, path }: SoftwareApplicationSchemaInput): JsonLd {
  const canonical = buildCanonical(path)

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${canonical}#software`,
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: 'es-MX',
    description,
    url: canonical,
    publisher: {
      '@id': `${buildCanonical('/')}#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MXN',
      description: 'Prueba gratis de 14 días',
    },
  }
}

export function createFaqPageSchema(path: string, faqs: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${buildCanonical(path)}#faq`,
    url: buildCanonical(path),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
