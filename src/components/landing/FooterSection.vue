<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { LOGIN_URL, SIGNUP_URL } from '../../config/env'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-900 text-slate-400">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        <!-- Brand -->
        <div>
          <RouterLink to="/" class="flex items-center gap-2.5 mb-3">
            <div class="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="font-bold text-white text-base">FlowEstudio</span>
          </RouterLink>
          <p class="text-sm text-slate-500 max-w-xs">
            Automatiza tu WhatsApp y atiende mejor a tus alumnos desde una sola plataforma.
          </p>
        </div>

        <!-- Links -->
        <nav class="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <RouterLink
            :to="{ path: '/', hash: '#features' }"
            class="hover:text-slate-200 transition-colors"
          >
            Funciones
          </RouterLink>
          <RouterLink
            :to="{ path: '/', hash: '#whatsapp' }"
            class="hover:text-slate-200 transition-colors"
          >
            WhatsApp
          </RouterLink>
          <RouterLink
            :to="{ path: '/', hash: '#pricing' }"
            class="hover:text-slate-200 transition-colors"
          >
            Precios
          </RouterLink>
          <RouterLink
            to="/features"
            class="text-slate-500 hover:text-slate-200 transition-colors"
          >
            /features
          </RouterLink>
          <RouterLink
            to="/whatsapp"
            class="text-slate-500 hover:text-slate-200 transition-colors"
          >
            /whatsapp
          </RouterLink>
          <RouterLink
            to="/pricing"
            class="text-slate-500 hover:text-slate-200 transition-colors"
          >
            /pricing
          </RouterLink>
          <RouterLink
            to="/privacy"
            class="hover:text-slate-200 transition-colors"
          >
            Política de privacidad
          </RouterLink>
          <RouterLink
            to="/terms"
            class="hover:text-slate-200 transition-colors"
          >
            Términos de uso
          </RouterLink>
          <RouterLink
            to="/data-deletion"
            class="hover:text-slate-200 transition-colors"
          >
            Eliminación de datos
          </RouterLink>
          <a
            :href="LOGIN_URL"
            class="hover:text-slate-200 transition-colors"
          >
            Iniciar sesión
          </a>
          <a
            :href="SIGNUP_URL"
            class="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            Registrarse
          </a>
        </nav>

      </div>

      <!-- Divider + copyright -->
      <div class="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-600">
        © {{ year }} FlowEstudio. Todos los derechos reservados.
      </div>

    </div>
  </footer>
</template>
