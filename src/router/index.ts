import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'
import TermsPage from '../pages/TermsPage.vue'
import DataDeletionPage from '../pages/DataDeletionPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import { LANDING_URL } from '../config/env'

interface SeoMeta {
  title?: string
  description?: string
  keywords?: string
  robots?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

const LANDING_BASE_URL = LANDING_URL.replace(/\/+$/, '')
const DEFAULT_KEYWORDS =
  'software para estudios de pilates, software fitness, automatizar whatsapp gimnasio, sistema de reservas fitness, app para estudios de pilates'

const DEFAULT_SEO: Required<Pick<SeoMeta, 'title' | 'description' | 'keywords' | 'robots'>> = {
  title: 'Software para estudios de pilates | FlowEstudio',
  description:
    'FlowEstudio es un software para estudios de pilates y software fitness para automatizar reservas, pagos y WhatsApp desde un solo lugar.',
  keywords: DEFAULT_KEYWORDS,
  robots: 'index, follow',
}

const DEFAULT_OG_IMAGE = `${LANDING_BASE_URL}/images/favicon-flowestudio.png`

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function upsertCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      meta: {
        title: 'Software para estudios de pilates | FlowEstudio',
        description:
          'FlowEstudio es un software para estudios de pilates y software fitness para automatizar reservas, pagos y WhatsApp desde un solo lugar.',
        keywords: DEFAULT_KEYWORDS,
      },
    },
    {
      path: '/pricing',
      component: HomePage,
      meta: {
        title: 'Precios del software para estudios de pilates | FlowEstudio',
        description:
          'Conoce los planes de FlowEstudio, un sistema de reservas fitness y software para estudios de pilates para automatizar WhatsApp y operación diaria.',
        keywords: DEFAULT_KEYWORDS,
      },
    },
    {
      path: '/features',
      component: HomePage,
      meta: {
        title: 'Funciones de software fitness y reservas | FlowEstudio',
        description:
          'Explora las funciones de FlowEstudio: app para estudios de pilates que centraliza reservas, seguimiento de alumnos y automatización de WhatsApp.',
        keywords: DEFAULT_KEYWORDS,
      },
    },
    {
      path: '/whatsapp',
      component: HomePage,
      meta: {
        title: 'Automatizar WhatsApp gimnasio y estudio | FlowEstudio',
        description:
          'FlowEstudio te ayuda a automatizar WhatsApp de gimnasio o estudio de pilates con respuestas, reservas y seguimiento desde un solo sistema.',
        keywords: DEFAULT_KEYWORDS,
      },
    },
    {
      path: '/privacy',
      component: PrivacyPage,
      meta: {
        title: 'Política de privacidad · FlowEstudio',
        description: 'Consulta cómo FlowEstudio protege y procesa tus datos personales y de operación.',
        robots: 'index, follow',
      },
    },
    {
      path: '/terms',
      component: TermsPage,
      meta: {
        title: 'Términos de uso · FlowEstudio',
        description: 'Revisa las condiciones y términos legales para usar FlowEstudio.',
        robots: 'index, follow',
      },
    },
    {
      path: '/data-deletion',
      component: DataDeletionPage,
      meta: {
        title: 'Eliminación de datos · FlowEstudio',
        description: 'Conoce el proceso para solicitar la eliminación de tus datos en FlowEstudio.',
        robots: 'index, follow',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
      meta: {
        title: 'Página no encontrada · FlowEstudio',
        description: 'La página solicitada no está disponible.',
        robots: 'noindex, nofollow',
      },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return { el: to.hash, top: 80 }
    }

    if (to.path === '/pricing') {
      return { el: '#pricing', top: 80 }
    }

    if (to.path === '/features') {
      return { el: '#features', top: 80 }
    }

    if (to.path === '/whatsapp') {
      return { el: '#whatsapp', top: 80 }
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  const routeMeta = (to.meta ?? {}) as SeoMeta
  const title = routeMeta.title || DEFAULT_SEO.title
  const description = routeMeta.description || DEFAULT_SEO.description
  const keywords = routeMeta.keywords || DEFAULT_SEO.keywords
  const robots = routeMeta.robots || DEFAULT_SEO.robots
  const canonical = routeMeta.canonical || `${LANDING_BASE_URL}${to.path === '/' ? '/' : to.path}`

  document.title = title

  upsertMetaByName('description', description)
  upsertMetaByName('keywords', keywords)
  upsertMetaByName('robots', robots)

  upsertMetaByProperty('og:type', routeMeta.ogType || 'website')
  upsertMetaByProperty('og:site_name', 'FlowEstudio')
  upsertMetaByProperty('og:title', routeMeta.ogTitle || title)
  upsertMetaByProperty('og:description', routeMeta.ogDescription || description)
  upsertMetaByProperty('og:image', routeMeta.ogImage || DEFAULT_OG_IMAGE)
  upsertMetaByProperty('og:url', canonical)

  upsertMetaByName('twitter:card', 'summary_large_image')
  upsertMetaByName('twitter:title', routeMeta.twitterTitle || title)
  upsertMetaByName('twitter:description', routeMeta.twitterDescription || description)
  upsertMetaByName('twitter:image', routeMeta.twitterImage || DEFAULT_OG_IMAGE)

  upsertCanonical(canonical)
})

export default router
