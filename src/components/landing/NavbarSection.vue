<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { LOGIN_URL, SIGNUP_URL } from '../../config/env'

const mobileMenuOpen = ref(false)
const route = useRoute()
const isHome = computed(() => route.path === '/')

const navLinks = [
  { label: 'Funciones', hash: '#features' },
  { label: 'WhatsApp', hash: '#whatsapp' },
  { label: 'Precios', hash: '#pricing' },
]

const handleHomeClick = (e: MouseEvent) => {
  mobileMenuOpen.value = false

  if (route.path !== '/') {
    return
  }

  e.preventDefault()

  if (route.hash) {
    window.history.replaceState({}, '', '/')
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function navTarget(hash: string) {
  if (isHome.value) {
    return { hash }
  }

  return { path: '/', hash }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2.5" @click="handleHomeClick">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="font-bold text-slate-900 text-lg">FlowEstudio</span>
        </RouterLink>

        <!-- Desktop nav links -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.hash"
            :to="navTarget(link.hash)"
            class="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <!-- Desktop CTAs -->
        <div class="hidden md:flex items-center gap-3">
          <a
            :href="LOGIN_URL"
            class="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Iniciar sesión
          </a>
          <a
            :href="SIGNUP_URL"
            class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Probar gratis
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
          :aria-expanded="mobileMenuOpen"
          aria-label="Abrir menú de navegación"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1">
      <RouterLink
        v-for="link in navLinks"
        :key="link.hash"
        :to="navTarget(link.hash)"
        class="block text-slate-600 hover:text-slate-900 text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
        @click="mobileMenuOpen = false"
      >
        {{ link.label }}
      </RouterLink>
      <div class="pt-3 border-t border-slate-100 mt-3 flex flex-col gap-2">
        <a
          :href="LOGIN_URL"
          class="text-center text-slate-700 text-sm font-medium py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          Iniciar sesión
        </a>
        <a
          :href="SIGNUP_URL"
          class="text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
        >
          Probar gratis 14 días
        </a>
      </div>
    </div>
  </nav>
</template>
