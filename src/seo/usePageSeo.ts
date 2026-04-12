import { useHead } from '@unhead/vue'
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, buildCanonical, normalizePath } from './constants'
import type { JsonLd } from './schema'

interface PageSeoOptions {
  title: string
  description: string
  path: string
  keywords?: string
  robots?: string
  ogImage?: string
  schema?: JsonLd[]
}

export function usePageSeo(options: PageSeoOptions) {
  const normalizedPath = normalizePath(options.path)
  const canonical = buildCanonical(normalizedPath)
  const robots = options.robots || 'index, follow'
  const keywords = options.keywords || DEFAULT_KEYWORDS
  const ogImage = options.ogImage || DEFAULT_OG_IMAGE

  useHead({
    title: options.title,
    htmlAttrs: {
      lang: 'es',
    },
    link: [
      {
        rel: 'canonical',
        href: canonical,
      },
    ],
    meta: [
      {
        name: 'description',
        content: options.description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
      {
        name: 'robots',
        content: robots,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:locale',
        content: 'es_MX',
      },
      {
        property: 'og:site_name',
        content: SITE_NAME,
      },
      {
        property: 'og:title',
        content: options.title,
      },
      {
        property: 'og:description',
        content: options.description,
      },
      {
        property: 'og:url',
        content: canonical,
      },
      {
        property: 'og:image',
        content: ogImage,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: options.title,
      },
      {
        name: 'twitter:description',
        content: options.description,
      },
      {
        name: 'twitter:image',
        content: ogImage,
      },
    ],
    script: (options.schema || []).map((item, index) => ({
      key: `schema-${normalizedPath}-${index}`,
      type: 'application/ld+json',
      innerHTML: JSON.stringify(item),
    })),
  })
}
