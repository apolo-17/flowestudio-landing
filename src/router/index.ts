import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'
import TermsPage from '../pages/TermsPage.vue'
import DataDeletionPage from '../pages/DataDeletionPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      meta: { title: 'FlowEstudio · Automatiza la atención de tu estudio' },
    },
    {
      path: '/privacy',
      component: PrivacyPage,
      meta: { title: 'Política de privacidad · FlowEstudio' },
    },
    {
      path: '/terms',
      component: TermsPage,
      meta: { title: 'Términos de uso · FlowEstudio' },
    },
    {
      path: '/data-deletion',
      component: DataDeletionPage,
      meta: { title: 'Eliminación de datos · FlowEstudio' },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
      meta: { title: 'Página no encontrada · FlowEstudio' },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title
  if (typeof title === 'string') {
    document.title = title
  }
})

export default router
