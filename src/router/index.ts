import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import PricingPage from '../pages/PricingPage.vue'
import FeaturesPage from '../pages/FeaturesPage.vue'
import WhatsappPage from '../pages/WhatsappPage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'
import TermsPage from '../pages/TermsPage.vue'
import DataDeletionPage from '../pages/DataDeletionPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/pricing',
    component: PricingPage,
  },
  {
    path: '/features',
    component: FeaturesPage,
  },
  {
    path: '/whatsapp',
    component: WhatsappPage,
  },
  {
    path: '/privacy',
    component: PrivacyPage,
  },
  {
    path: '/terms',
    component: TermsPage,
  },
  {
    path: '/data-deletion',
    component: DataDeletionPage,
  },
  {
    path: '/404',
    component: NotFoundPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
]

const HEADER_OFFSET = 80

export const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition

  if (to.hash) {
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    return {
      el: decodeURIComponent(to.hash),
      top: HEADER_OFFSET,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    }
  }

  if (to.path !== from.path) {
    return { top: 0 }
  }

  return false
}
