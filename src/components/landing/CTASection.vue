<script setup lang="ts">
import { SIGNUP_URL, WHATSAPP_URL } from '../../config/env'
</script>

<template>
  <section class="py-20" style="background: linear-gradient(135deg, #4338ca 0%, #4f46e5 50%, #6366f1 100%);">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-3.5 py-1.5 rounded-full mb-6 border border-white/20">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
        Acceso anticipado · Plazas limitadas
      </div>

      <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
        Organiza tu estudio desde hoy,<br class="hidden sm:block" />
        sin complicaciones
      </h2>

      <p class="text-lg text-indigo-100 mb-8 max-w-xl mx-auto leading-relaxed">
        Estamos en etapa de acceso anticipado. Los primeros estudios que se registren
        tienen acceso completo de forma gratuita durante 6 meses. Sin costos ocultos,
        sin compromisos.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          :href="SIGNUP_URL"
          class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 font-semibold px-7 py-3.5 rounded-xl transition-colors text-base shadow-lg"
        >
          Agenda tu demo
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          :href="WHATSAPP_URL"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-colors text-base"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Hablar por WhatsApp
        </a>
      </div>

      <p class="text-indigo-200 text-sm mt-6">
        Sin tarjeta de crédito · Sin compromisos · Cancela cuando quieras
      </p>

    </div>
  </section>
</template>
