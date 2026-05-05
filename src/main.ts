import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './style.css'
import { routes, scrollBehavior } from './router'

const GA_ID = 'G-VWC92RCV64'

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ router, isClient }) => {
  if (!isClient) return

  router.afterEach((to) => {
    window.gtag?.('config', GA_ID, { page_path: to.fullPath })
  })
})
