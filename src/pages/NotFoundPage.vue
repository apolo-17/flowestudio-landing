<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { SIGNUP_URL } from '../config/env'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4">
    <div class="text-center max-w-md">

      <!-- 404 visual -->
      <div class="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <svg class="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <h1 class="text-6xl font-extrabold text-slate-900 mb-3">404</h1>
      <h2 class="text-xl font-semibold text-slate-700 mb-3">Página no encontrada</h2>
      <p class="text-slate-500 mb-8 leading-relaxed">
        La página que buscas no existe o fue movida.
        Puedes volver al inicio o revisar el menú.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </RouterLink>
        <a
          :href="SIGNUP_URL"
          class="inline-flex items-center justify-center text-slate-700 hover:text-slate-900 font-medium px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
        >
          Probar gratis
        </a>
      </div>

    </div>
  </div>
</template>
